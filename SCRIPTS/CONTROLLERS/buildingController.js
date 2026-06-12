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
var BuildingCategories = ["Basic Extraction", "Adv. Extraction", "Production", "Energy", "Research", "Influence", "Special", "Other" , "Debug"];
var BuildingCategoriesEnabled = [true,true,true,true,true,true,true,false, false];
//var BuildingCategories = ["Extraction", "Production", "Energy", "Research"];
//var BuildingCategoriesEnabled = [true,true,true,true];


var BuildingInitDebug = false;
function buildingInitBuildings(){
	for(let i = 0; i < PlanetsArray.length; i++){
		
		if(BuildingInitDebug) console.log("Planet: " + PlanetsArray[i].name);
		PlanetsArray[i].buildings = [];
		
		for(let j = 0; j < BuildingsArray.length; j++){
			if(BuildingInitDebug) console.log("  Planet: " + PlanetsArray[i].name + " Building: " + BuildingsArray[j].name);
			
			
			//if planet type is required but it doesn't match, skip
			/*
			if(BuildingsArray[j].allowedPlanetTypes.length > 0 && PlanetsArray[i].type[0] != BuildingsArray[j].allowedPlanetTypes) {
				console.log("Planet " + PlanetsArray[i].name + " of type " + PlanetsArray[i].type[0] + " doesn't match requirement of " + BuildingsArray[j].name + " for type " + BuildingsArray[j].allowedPlanetTypes);
				continue;
			}*/
			if(BuildingsArray[j].allowedPlanetTypes.length > 0 && !BuildingsArray[j].allowedPlanetTypes.includes(PlanetsArray[i].type[0])){
				if(BuildingInitDebug) console.log("    Planet " + PlanetsArray[i].name + " of type " + PlanetsArray[i].type[0] + " doesn't match type requirement of " + BuildingsArray[j].name);
				continue;
			}
			
			//if planet type is forbidden for this building, skip
			if(BuildingsArray[j].forbiddenPlanetTypes.includes(PlanetsArray[i].type[0])) {
				if(BuildingInitDebug) console.log("    Planet " + PlanetsArray[i].name + " of type " + PlanetsArray[i].type[0] + " is incompatible type-wise with " + BuildingsArray[j].name);
				continue;
			}
			
			//if planet has incompatible condition, skip
			let tmpConditionsAcceptable = true;
			for(let k = 0; k < PlanetsArray[i].conditions.length; k++){
				if(BuildingsArray[j].forbiddenPlanetConditions.includes(PlanetsArray[i].conditions[k][0])){
					tmpConditionsAcceptable = false;
					if(BuildingInitDebug) console.log("    Planet " + PlanetsArray[i].name + " has forbidden condition of " + PlanetsArray[i].conditions[k][0] + " for " + BuildingsArray[j].name);
					break;
				}
			}
			if(!tmpConditionsAcceptable){
				continue;
			}
			
			//if planet does not have required conditions, skip
			let tmpConditionsRequirementMet = true;
			let tmpConditionsArray = [];
			for(let k = 0; k < PlanetsArray[i].conditions.length; k++){
				tmpConditionsArray.push(PlanetsArray[i].conditions[k][0]);
			}
			for(let k = 0; k < BuildingsArray[j].requiredPlanetConditions.length; k++){		
				if(!tmpConditionsArray.includes(BuildingsArray[j].requiredPlanetConditions[k])){
					tmpConditionsRequirementMet = false;
					if(BuildingInitDebug) console.log("    Planet " + PlanetsArray[i].name + " does not have required condition of " + BuildingsArray[j].requiredPlanetConditions[k] + " for " + BuildingsArray[j].name);
					break;
				}				
			}
			if(!tmpConditionsRequirementMet){
				continue;
			}
			
			//if all above are fine, building blueprint can be registered inside of array in planet's object
			
			let tmpBuilding = new BuldingObject();
			tmpBuilding.index = PlanetsArray[i].buildings.length;
			tmpBuilding.blueprintIndex = j;
	
			PlanetsArray[i].buildings.push(tmpBuilding);
			
			if(BuildingInitDebug) console.log("    Building " + BuildingsArray[j].name + " added to planet " + PlanetsArray[i].name);
		}
	}
}

class BuildingBlueprintObject{
	index = -1;
	name = "not set";
	description = "example description";
	
	categories = [7];
	
	allowedPlanetTypes = [];
	requiredPlanetConditions = [];
	
	forbiddenPlanetTypes = [];
	forbiddenPlanetConditions = [];
	
	powerProduced = 0;
	powerConsumed = 0;
	powerMinimum = 0.1;				//ratio of power under which the building shuts down
	powerSensitive = false;			//even the smallest power shortage prevents building from working
	
	staffNeededBase = 0;			//staff members needed at single lvl 1 building
	staffNoneNeeded = false;		//no staff needed for building
	staffMandatory = false;			//shuts down if understaffed
	staffPenalty = 0.5;				//exp. value for understaffed penalty. Defalut 0.5 is (availStaff/reqStaff)^(0.5) - 70% efficiency when half of staff is present
	staffBonus = 0.5;				//exp. value for overstaffed bonus.Defalut 0.5 is (availStaff/reqStaff)^(0.5) - 141% efficiency when double staff is present
	staffOvertimeForbidden = false;	//no bonus from extra staff
	
	hazardSensitive = false;//wont work if there is even slightest hazard present
	hazardTolerance = 10;	//after what hazard level efficiency begins to drop
	hazardLimit = 5;		//after what hazard levels past tolerance building shuts down
	hazardResistant = false;//hazard has no influence on building's activity
	
	unrestSensitive = false;//wont work if there is even slightest unrest present
	unrestTolerance = 0.0;	//TODO value/ratio of unrest above which efficiency begins to drop
	unrestLimit = 0.75;		//TODO value/ratio of unrest when building cannot work anymore
	unrestResistant = false;//unrest has no influence on building's activity
	
	mineralsDependant = false;
	mineralsRatio = 1;		//ratio of building/resources above which the efficiency drops
	mineralsRequired = "Stone";	//what natural resource affects output
	mineralsRequiredDifferent = false; //is required natural resource vastly different from intended output 
	
	unlocked = false;
}
class BuldingObject{
	index = -1;
	blueprintIndex = -1;
	
	powerProduced = 0;
	powerConsumed = 0;
	
	count = 0;
	level = 1;
	staffAssigned = 0;
	staffRequired = 0;
	
	enabled = true;
	folded = true;
}


var BuildingsBulkBuyAmount = 10;
var BuildingsAutoAssignStaffEnabled = true;
var BuildingsTryBuyMaxEnabled = true;
var BuildingsDemolishLockEnabled = true;
var BuildingsBulkBuyNumericInputClass = "planetBuildingsSingleBuildingSingleInputNumber";
var BuildingsBulkOperatorsNumericInputClass = "planetBuildingsSingleBuildingAddRemoveOperatorInputNumber";

function buildingsTrySetBulkBuyInputs(outputDocument, inputValue){
	var tmpInputsArray = [];
	var tmpNewValue = 10;
	if(isNotNaN(inputValue)){
		if(inputValue < 0) inputValue = 1;
		
		tmpNewValue = Math.floor(Number(inputValue.trim()));
		tmpInputsArray = outputDocument.getElementsByClassName(BuildingsBulkBuyNumericInputClass);
		for(var i = 0; i<tmpInputsArray.length; i++){
			tmpInputsArray[i].value = tmpNewValue;
		}
		tmpInputsArray = outputDocument.getElementsByClassName(BuildingsBulkOperatorsNumericInputClass);
		for(var i = 0; i<tmpInputsArray.length; i++){
			tmpInputsArray[i].value = tmpNewValue;
		}
		BuildingsBulkBuyAmount = tmpNewValue;
		return true;
	}
	console.log("Got NaN");
	return false;
}

function buildingsToggleBuildingCategoryDisplay(categoryID){
	if(BuildingCategoriesEnabled[categoryID]) buildingsDisableBuildingCategoryDisplay(categoryID);
	else buildingsEnableBuildingCategoryDisplay(categoryID);
}
function buildingsEnableBuildingCategoryDisplay(categoryID){
	BuildingCategoriesEnabled[categoryID] = true;
}
function buildingsDisableBuildingCategoryDisplay(categoryID){
	BuildingCategoriesEnabled[categoryID] = false;
}

function buildingsToggleAutoAssignStaff(){
	if(BuildingsAutoAssignStaffEnabled) buildingsDisableAutoAssignStaff();
	else buildingsEnableAutoAssignStaff();
}
function buildingsEnableAutoAssignStaff(){
	BuildingsAutoAssignStaffEnabled = true;
}
function buildingsDisableAutoAssignStaff(){
	BuildingsAutoAssignStaffEnabled = false;
}

function buildingsToggleTryBuyMax(){
	if(BuildingsTryBuyMaxEnabled) buildingsDisableTryBuyMax();
	else buildingsEnableTryBuyMax();
}
function buildingsEnableTryBuyMax(){
	BuildingsTryBuyMaxEnabled = true;
}
function buildingsDisableTryBuyMax(){
	BuildingsTryBuyMaxEnabled = false;
}

function buildingsToggleDemolishLock(){
	if(BuildingsDemolishLockEnabled) buildingsDisableDemolishLock();
	else buildingsEnableDemolishLock();
}
function buildingsEnableDemolishLock(){
	BuildingsDemolishLockEnabled = true;
}
function buildingsDisableDemolishLock(){
	BuildingsDemolishLockEnabled = false;
}

function buildingsGetBuildingsObject(){
	var newConfigObject = {};
	
	newConfigObject["buildingsAutoAssignStaff"] = BuildingsAutoAssignStaffEnabled;
	newConfigObject["buildingsTryBuyMax"] = BuildingsTryBuyMaxEnabled;
	newConfigObject["buildingsDemolishLock"]= BuildingsDemolishLockEnabled;
	newConfigObject["buildingCategoriesEnabled"]= BuildingCategoriesEnabled;
	
	return newConfigObject;
}
function buildingsSetBuildingsObject(newConfigObject){
	
	try{
		BuildingsAutoAssignStaffEnabled = newConfigObject.buildingsAutoAssignStaff;
	} catch{ console.warn("Save is missing flag for auto assign staff setting.")};
	try{
		BuildingsTryBuyMaxEnabled = newConfigObject.buildingsTryBuyMax2;
	} catch{ console.warn("Save is missing flag for buildings try buy max setting.")};
	try{
		BuildingsDemolishLockEnabled = newConfigObject.buildingsDemolishLock;
	} catch{ console.warn("Save is missing flag for buildings demolish lock setting.")};
	try{
		if(typeof(newConfigObject.buildingCategoriesEnabled) !== "undefined") BuildingCategoriesEnabled = newConfigObject.buildingCategoriesEnabled;
		else throw "error"
		buildingsValidateCategoriesOnLoad();
	} catch{ console.warn("Save is missing array of enabled building categories.")};
	
}

function buildingsValidateCategoriesOnLoad(){
	if(BuildingCategories.length == BuildingCategoriesEnabled.length) return true;
	if(BuildingCategoriesEnabled.length > BuildingCategories.length){
		console.warn("Save had more building categories available than existing. Discarding flags for non-existing categories.");
		while(BuildingCategoriesEnabled.length > BuildingCategories.length) BuildingCategoriesEnabled.pop();
		return false;
	}
	if(BuildingCategoriesEnabled.length < BuildingCategories.length){
		console.warn("Save had less building categories available than existing. Enabling lost or new categories.");
		while(BuildingCategoriesEnabled.length < BuildingCategories.length) BuildingCategoriesEnabled.push(true);
		return false;
	}
}


/*
class BuildingBlueprintObject{
	name = "Building template.";
	description = "This is example of building template.";
	
	//numerical identificator, must be unique
	id = -1;
	
	//position at building blueprint array
	arrayIndex = -1;
	
	//building categories for listing purposes
	category = [];
	
	//flags
	producesResources = false;
	consumesResources = false;
	producesPower = false;
	consumesPower = false;
	
	powerAbsolutelyRequired = false;
	staffAbsolutelyRequired = false;
	staffOvertimeAllowed = true;
	
	blueprintUnlocked = false;
	canBeBuilt = false;
	canBeUpgraded = false;
	canBeDestroyed = false;
	canBeDowngraded = false;
	
	limitedPerPlanet = false;
	limitedPerGalaxy = false;
	limitedUpgrade = false;	
	
	//resource related arrays at level 1
	//[["resource", cost, multiplier],["resource", cost, multiplier]]
	resourcesProducedArray = [];
	resourcesConsumedArray = [];
	buildCostArray = [];
	upgradeCostArray = [];
	resourceDemolishReturn = [];
	resourceDowngradeReturn = [];
	
	//power related
	powerConsumption = 0;
	powerProduction = 0;
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
	consumesPower = false;
	
	//[name,amount,upgradeFactor]
	resourcesProduced = [];
	resourcesConsumed = [];
	totalResourcesProduced = [];
	totalResourcesConsumed = [];
	
	upgradeIncreaseResourceConsumption = true;
	
	powerConsumption = 0;
	powerProduction = 0;
	
	
	powerAbsolutelyRequired = false;	//power efficiency has to be 100% to work
	
	upgradeIncreasePowerConsumption = false;
	upgradePowerConsumptionFactor = 1;
	
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
			if(BuildingsDemolishLockEnabled){
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
			if(BuildingsDemolishLockEnabled){
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
*/
