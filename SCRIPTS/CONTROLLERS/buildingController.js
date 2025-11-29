function connectionTest_buildings(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"buildings	\" reporting issues.");
		return false;
	}
}

var BuildingsArray = [];
var BuildingCategories = ["Basic Extraction", "Adv. Extraction", "Production", "Generators", "Research", "Influence", "Special"];
var BuildingDemolitionLock = false;

function buildingInitBuildings(outputDocument){
	
}

class BuldingObject{
	
	name = "Unnamed Building";
	description = "Unnamed Building";
	id = -1;
	arrayIndex = -1;
	category = BuildingCategories[6];
	
	producesResources = false;
	consumesResources = false;
	producesPower = false;
	consimesPower = false;
	
	resourcesProduced = [];
	resourcesConsumed = [];
	totalResourcesProduced = [];
	totalResourcesConsumed = [];
	
	powerConsumption = 0;
	powerProduction = 0;
	
	unlocked = false;
	canBeBuilt = false;
	canBeUpgraded = false;
	canBeDestroyed = false;
	canBeDowngraded = false;
	
	//[["resource", cost, multiplier],["resource", cost, multiplier]]
	resourceBuildCost = [];
	resourceUpgradeCost = [];
	resourceDemolishReturn = [];
	resourceDowngradeReturn = [];
	
	//should make it possible for upgrade level being "main" building and amount being small
	upgradeIncreasesBuildCost = true;
	
	limitedPerPlanet = false;		//limit per planet
	maxPerPlanet = -1;
	
	limitedPerGalaxy = false;		//global limit, maybe for unique buildings
	maxPerGalaxy = -1;
	totalInGalaxy = 0;
	
	limitedUpgrade = false;			//upgrade level, might be affected by research
	maxLevel = -1;
	
	operatorsMandatory = false;		//if mandatory, minimum operators are mandatory for functionality
	operatorsNoOvertime = false;	//no bonus from extra workforce
	operatorsRequired = 0;
	
	operatorBonusFactor = 0.5;		//1/2 of workforce should have efficiency of ~71% => 2 working as 1.42, 3/2 of workforce should have efficiency of 122% -> 2 working as 2.44. 
	totalOperators = 0;
	
}

function buildingsTryConstructBuilding(buildingID, planetID, buildingsAmount = 1){
	var tmpBuilding = buildingsGetBuildingByID(buildingID);
	var tmpPlanet = planetsGetPlanetById(planetID);
	
	if(tmpBuilding.unlocked){
		if(tmpBuilding.canBeBuilt){
			if(tmpBuilding.limitedPerGalaxy && tmpBuilding.totalInGalaxy >= tmpBuilding.maxPerGalaxy){
				interfaceAddBottomMessage(mainOutputDocument, "Too many already exist in the galaxy.");
				return false;
			}
			if(tmpBuilding.limitedPerPlanet && tmpPlanet.buildings[tmpBuilding.id][1] >= tmpBuilding.maxPerPlanet){
				interfaceAddBottomMessage(mainOutputDocument, "No more of this building can be constructed on this planet.");
				return false;
			}
			
			var tmpCost = buildingsGetBuildingCost(tmpBuilding, tmpPlanet, buildingsAmount);
			
			if(resourcesCheckIfEnough(tmpCost, tmpPlanet.resourceStorage)){
				//construct
			}
			else{
				interfaceAddBottomMessage(mainOutputDocument, "Not enough resources available in planet's storage.");
				return false;
			}
		}
		else{
			console.warn("Error: Option not available. Downgrade option of it should not be visible.");
			interfaceAddBottomMessage(mainOutputDocument, "This cannot be constructed.");
			return false;
		}
	}
	else{
		console.warn("Error: Building not available. Building option of it should NOT be possible.");
		interfaceAddBottomMessage(mainOutputDocument, "Building not available.");
		return false;
	}
}
function buildingsTryDemolishBuilding(buildingID, planetID, buildingsAmount = 1){
	var tmpBuilding = buildingsGetBuildingByID(buildingID);
	var tmpPlanet = planetsGetPlanetById(planetID);
	
	if(tmpBuilding.unlocked){
		if(tmpBuilding.canBeDestroyed){
			if(BuildingDemolitionLock){
				interfaceAddBottomMessage(mainOutputDocument, "Cannot demolish - lock is currently active.");
				return false;
			}
			if(tmpPlanet.buildings[buildingID][1] >= buildingsAmount){
				//demolish
			}
			else{
				interfaceAddBottomMessage(mainOutputDocument, "Not enough available for demolition.");
				return false;
			}
		}
		else{
			console.warn("Error: Option not available. Downgrade option of it should not be visible.");
			interfaceAddBottomMessage(mainOutputDocument, "This cannot be destroyed.");
			return false;
		}
	}
	else{
		console.warn("Error: Building not available. Demolish option of it should NOT be possible.");
		interfaceAddBottomMessage(mainOutputDocument, "Building not available.");
		return false;
	}
}
function buildingsTryUpgradeBuilding(buildingID, planetID, upgradesAmount){
	var tmpBuilding = buildingsGetBuildingByID(buildingID);
	var tmpPlanet = planetsGetPlanetById(planetID);
	
	if(tmpBuilding.unlocked){
		if(tmpBuilding.canBeUpgraded){
			if(tmpBuilding.limitedUpgrade && tmpPlanet.buildings[tmpBuilding.id][2] >= tmpBuilding.maxLevel){
				interfaceAddBottomMessage(mainOutputDocument, "This building cannot be upgraded further on this planet.");
				return false;
			}
			
			var tmpCost = buildingsGetUpgradeCost(tmpBuilding, tmpPlanet, upgradesAmount);
			
			if(resourcesCheckIfEnough(tmpCost, tmpPlanet.resourceStorage)){
				//upgrade
			}
			else{
				interfaceAddBottomMessage(mainOutputDocument, "Not enough resources available in planet's storage.");
				return false;
			}
		}
		else{
			console.warn("Error: Option not available. Downgrade option of it should not be visible.");
			interfaceAddBottomMessage(mainOutputDocument, "This cannot be upgraded.");
			return false;
		}
	}
	else{
		console.warn("Error: Building not available. Upgrade option of it should NOT be possible.");
		interfaceAddBottomMessage(mainOutputDocument, "Building not available.");
		return false;
	}
}
function buildingsTryDowngradeBuilding(buildingID, planetID, downgradesAmount){
	var tmpBuilding = buildingsGetBuildingByID(buildingID);
	var tmpPlanet = planetsGetPlanetById(planetID);
	
	if(tmpBuilding.unlocked){
		if(tmpBuilding.canBeDowngraded){
			if(BuildingDemolitionLock){
				interfaceAddBottomMessage(mainOutputDocument, "Cannot downgrade - lock is currently active.");
				return false;
			}
			if(tmpPlanet.buildings[buildingID][2] >= downgradesAmount){
				//downgrade
			}
			else{
				interfaceAddBottomMessage(mainOutputDocument, "Building level isn't high enough.");
				return false;
			}
		}
		else{
			console.warn("Error: Option not available. Downgrade option of it should not be visible.");
			interfaceAddBottomMessage(mainOutputDocument, "This cannot be downgraded.");
			return false;
		}
	}
	else{
		console.warn("Error: Building not available. Downgrade option of it should NOT be possible.");
		interfaceAddBottomMessage(mainOutputDocument, "Building not available.");
		return false;
	}
}

function buildingsGetBuildingByID(buildingID){
	for(var i = 0; i < BuildingsArray.length; i++){
		if(BuildingsArray[i].id == buildingID) return BuildingsArray[i];
	}
}
function buildingsGetBuildingByName(buildingName){
	for(var i = 0; i < BuildingsArray.length; i++){
		if(BuildingsArray[i].name == buildingName) return BuildingsArray[i];
	}
}

function buildingsGetBuildingCost(buildingObject, planetObject, numberConstructed = 1){
	var newResourceObject = [];
	var numberOfBuildings = planetObject.buildings[buildingObject.id][1];
	
	for (var i = 0; i < buildingObject.resourceBuildCost.length; i++) {
		newResourceObject[i] = buildingObject.resourceBuildCost[i].slice();
		newResourceObject[i][1] = 0;
	}
	
	for(var i = numberOfBuildings; i < (numberOfBuildings + numberConstructed); i++){
		for (var j = 0; j < buildingObject.resourceBuildCost.length; j++) {
			newResourceObject[j][1] += buildingObject.resourceBuildCost[j][1] * Math.pow(buildingObject.resourceBuildCost[j][2],(i + 1));
		}
	}
	
	return newResourceObject;
}
function buildingsGetBuildingRefund(buildingObject, planetObject, numberDeconstructed = 1){
	var newResourceObject = [];
	var numberOfBuildings = planetObject.buildings[buildingObject.id][1];
	
	for (var i = 0; i < buildingObject.resourceDemolishReturn.length; i++) {
		newResourceObject[i] = buildingObject.resourceDemolishReturn[i].slice();
		newResourceObject[i][1] = 0;
	}
	
	for(var i = numberOfBuildings; i > (numberOfBuildings - numberDeconstructed); i--){
		for (var j = 0; j < buildingObject.resourceDemolishReturn.length; j++) {
			newResourceObject[j][1] += buildingObject.resourceDemolishReturn[j][1] * Math.pow(buildingObject.resourceDemolishReturn[j][2],(i));
		}
	}
	
	return newResourceObject;
}
function buildingsGetUpgradeCost(buildingObject, plantetObject, numberUpgrades = 1){
	var newResourceObject = [];
	var upgradeLevel = planetObject.buildings[buildingObject.id][2];
	
	for (var i = 0; i < buildingObject.resourceUpgradeCost.length; i++) {
		newResourceObject[i] = buildingObject.resourceUpgradeCost[i].slice();
		newResourceObject[i][1] = 0;
	}
	
	for(var i = upgradeLevel; i < (upgradeLevel + numberUpgrades); i++){
		for (var j = 0; j < buildingObject.resourceUpgradeCost.length; j++) {
			newResourceObject[j][1] += buildingObject.resourceUpgradeCost[j][1] * Math.pow(buildingObject.resourceUpgradeCost[j][2],(i + 1));
		}
	}
	
	return newResourceObject;
}
function buildingsGetDowngradeRefund(buildingObject, plantetObject, numberDowngrades = 1){
	var newResourceObject = [];
	var upgradeLevel = planetObject.buildings[buildingObject.id][2];
	
	for (var i = 0; i < buildingObject.resourceDowngradeReturn.length; i++) {
		newResourceObject[i] = buildingObject.resourceDowngradeReturn[i].slice();
		newResourceObject[i][1] = 0;
	}
	
	for(var i = upgradeLevel; i > (upgradeLevel - numberDowngrades); i--){
		for (var j = 0; j < buildingObject.resourceDowngradeReturn.length; j++) {
			newResourceObject[j][1] += buildingObject.resourceDowngradeReturn[j][1] * Math.pow(buildingObject.resourceDowngradeReturn[j][2],(i));
		}
	}
	
	return newResourceObject;
}

function buildingsConstructBuilding(buildingObject, planetObject, buildingsAmount = 1){
	var tmpCost = buildingsGetBuildingCost(tmpBuilding, tmpPlanet, buildingsAmount);
	
	if(planetObject.buildings[buildingObject.id] === undefined){
		planetObject.buildings[buildingObject.id] = [buildingObject.name,0,0];
	}
	
	planetObject.buildings[buildingObject.id][1] += buildingsAmount;
	buildingObject.totalInGalaxy += buildingsAmount;
	
	planetObject.resourceStorage = resourcesSubstractResources(tmpCost, planetObject.resourceStorage, buildingsAmount);
}
function buildingsDeconstructBuilding(buildingObject, planetObject, buildingsAmount = 1){
	var tmpRefund = buildingsGetBuildingRefund(tmpBuilding, tmpPlanet, buildingsAmount);
	
	planetObject.buildings[buildingObject.id][1] -= buildingsAmount;
	buildingObject.totalInGalaxy -= buildingsAmount;
	
	planetObject.resourceStorage = resourcesSumResources(tmpRefund, planetObject.resourceStorage, buildingsAmount);
}
function buildingsUpgradeBuilding(buildingObject, planetObject, upgradesAmount = 1){
	var tmpCost = buildingsGetUpgradeCost(tmpBuilding, tmpPlanet, upgradesAmount);
	
	if(planetObject.buildings[buildingObject.id] === undefined){
		planetObject.buildings[buildingObject.id] = [buildingObject.name,0,0];
	}
	
	planetObject.buildings[buildingObject.id][2] += upgradesAmount;
	
	planetObject.resourceStorage = resourcesSubstractResources(tmpCost, planetObject.resourceStorage, upgradesAmount);
}
function buildingsDowngradeBuilding(buildingObject, planetObject, upgradesAmount = 1){
	var tmpRefund = buildingsGetDowngradeRefund(tmpBuilding, tmpPlanet, upgradesAmount);
	
	planetObject.buildings[buildingObject.id][2] -= upgradesAmount;
	
	planetObject.resourceStorage = resourcesSumResources(tmpRefund, planetObject.resourceStorage, upgradesAmount);
}