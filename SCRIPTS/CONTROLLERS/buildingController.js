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
			
			let tmpBuilding = new BuildingObject();
			tmpBuilding.index = PlanetsArray[i].buildings.length;
			tmpBuilding.planetIndex = i;
			tmpBuilding.blueprintIndex = j;
	
			PlanetsArray[i].buildings.push(tmpBuilding);
			
			//after adding to planet, refresh cost, production and stuff
			
			tmpBuilding.initBuilding();
			
			if(BuildingInitDebug) console.log("    Building " + BuildingsArray[j].name + " added to planet " + PlanetsArray[i].name);
		}
	}
}

class BuildingBlueprintObject{
	constructor(){
		this.baseBuildCost = resourcesCreateEmptyCostResourcesArray();
		this.baseUpgradeCost = resourcesCreateEmptyCostResourcesArray();
		this.resourcesProduced = resourcesCreateEmptyProductionConsumptionResourcesArray();
		this.resourcesConsumed = resourcesCreateEmptyProductionConsumptionResourcesArray();
	}
	
	index = -1;
	name = "not set";
	description = "example description";
	
	categories = [7];
	
	allowedPlanetTypes = [];
	requiredPlanetConditions = [];
	
	forbiddenPlanetTypes = [];
	forbiddenPlanetConditions = [];
	
	baseBuildCost = [];
	baseUpgradeCost = [];
	
	resourcesProduced = [];
	resourcesConsumed = [];
	
	powerProduced = 0;
	powerProducedCountMultiplier = 1.0;		//should be left as 1.0
	powerProducedUpgradeMultiplier = 1.0;
	
	powerConsumed = 0;
	powerConsumedCountMultiplier = 1.0;		//should be left as 1.0
	powerConsumedUpgradeMultiplier = 1.0;
	
	powerMinimum = 0.1;				//ratio of power under which the building shuts down
	powerSensitive = false;			//even the smallest power shortage prevents building from working
	
	staffNeededBase = 0;			//staff members needed at single lvl 0 building
	staffNeededCountMultiplier = 1.0;	//should be left as 1.0
	staffNeededLevelMultiplier = 1.0;
	
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
	canBeBuilt = false;
	canBeUpgraded = false;
	canBeDestroyed = false;
	canBeDowngraded = false;
	
	maxPerGalaxy = -1;
	totalInGalaxy = 0;
	
	maxPerPlanet = -1;
	maxUpgrade = -1;
	
	setBuildCostByName(resourceName, resourceCost, buildMultiplier = 1.0, refundRatio = ResourcesDefaultSellDowngradeRefundRatio){
		let tmpIndex = ResourcesNamesArray.indexOf(resourceName);
		if(tmpIndex >= 0){
			this.baseBuildCost[tmpIndex].cost = resourceCost;
			this.baseBuildCost[tmpIndex].costIncrease = buildMultiplier
			this.baseBuildCost[tmpIndex].refund = refundRatio;
			if(buildMultiplier != 1.0) this.baseBuildCost[tmpIndex].linearCostIncrease = false;
			else this.baseBuildCost[tmpIndex].linearCostIncrease = true;
			
			return true;
		}
		console.warn("Unrecognized build resoruce cost: " + resourceName);
		return false;
	}
	setUpgradeCostByName(resourceName, resourceCost, upgradeMultiplier = 1.0, refundRatio = ResourcesDefaultSellDowngradeRefundRatio){
		let tmpIndex = ResourcesNamesArray.indexOf(resourceName);
		if(tmpIndex >= 0){
			this.baseUpgradeCost[tmpIndex].cost = resourceCost;
			this.baseUpgradeCost[tmpIndex].costIncrease = upgradeMultiplier
			this.baseUpgradeCost[tmpIndex].refund = refundRatio
			if(upgradeMultiplier != 1.0) this.baseUpgradeCost[tmpIndex].linearCostIncrease = false;
			else this.baseUpgradeCost[tmpIndex].linearCostIncrease = true;
			
			return true;
		}
		console.warn("Unrecognized upgrade resoruce cost: " + resourceName);
		return false;
	}
	setProductionByName(resourceName, resourceAmount, upgradeMultiplier = 1.0, buildMultiplier = 1.0){
		let tmpIndex = ResourcesNamesArray.indexOf(resourceName);
		if(tmpIndex >= 0){
			this.resourcesProduced[tmpIndex].amount = resourceAmount;
			this.resourcesProduced[tmpIndex].buildAmountIncrease = buildMultiplier;
			if(buildMultiplier != 1.0) this.resourcesProduced[tmpIndex].buildLinearAmountIncrease = false;
			else this.resourcesProduced[tmpIndex].buildLinearAmountIncrease = true;
			this.resourcesProduced[tmpIndex].upgradeAmountIncrease = upgradeMultiplier;
			if(upgradeMultiplier != 1.0) this.resourcesProduced[tmpIndex].upgradeLinearAmountIncrease = false;
			else this.resourcesProduced[tmpIndex].upgradeLinearAmountIncrease = true;
			
			return true;
		}
		console.warn("Unrecognized production resoruce: " + resourceName);
		return false;
	}
	setConsumptionByName(resourceName, resourceAmount, upgradeMultiplier = 1.0, buildMultiplier = 1.0){
		let tmpIndex = ResourcesNamesArray.indexOf(resourceName);
		if(tmpIndex >= 0){
			this.resourcesConsumed[tmpIndex].amount = resourceAmount;
			this.resourcesConsumed[tmpIndex].buildAmountIncrease = buildMultiplier;
			if(buildMultiplier != 1.0) this.resourcesConsumed[tmpIndex].buildLinearAmountIncrease = false;
			else this.resourcesConsumed[tmpIndex].buildLinearAmountIncrease = true;
			this.resourcesConsumed[tmpIndex].upgradeAmountIncrease = upgradeMultiplier;
			if(upgradeMultiplier != 1.0) this.resourcesConsumed[tmpIndex].upgradeLinearAmountIncrease = false;
			else this.resourcesConsumed[tmpIndex].upgradeLinearAmountIncrease = true;
			
			return true;
		}
		console.warn("Unrecognized consumption resoruce: " + resourceName);
		return false;
	}
	
	getBaseProduction(){
		return resourcesCopyProductionConsumptionArray(this.resourcesProduced);
	}
	getBaseConsumption(){
		return resourcesCopyProductionConsumptionArray(this.resourcesConsumed);
	}
	getBuildingProduction(buildingCount, buildingUpgrades){
		let tmpArray = resourcesCopyProductionConsumptionArray(this.resourcesProduced);
		let tmpBuildingsAmount = buildingCount;
		let tmpUpgradesAmount = buildingUpgrades;
		
		if(buildingCount < 0) tmpBuildingsAmount = 0;
		if(buildingUpgrades < 0) tmpUpgradesAmount = 0;
		
		for(let i = 0; i < tmpArray.length; i++){
			if(!tmpArray[i].buildLinearAmountIncrease){
				tmpArray[i].amount *= Math.pow(tmpArray[i].buildAmountIncrease,tmpBuildingsAmount);
			}
			if(!tmpArray[i].upgradeLinearAmountIncrease){
				tmpArray[i].amount *= Math.pow(tmpArray[i].upgradeAmountIncrease,tmpUpgradesAmount);
			}
		}
		return tmpArray;
	}
	getBuildingConsumption(buildingCount, buildingUpgrades){
		let tmpArray = resourcesCopyProductionConsumptionArray(this.resourcesConsumed);
		let tmpBuildingsAmount = buildingCount;
		let tmpUpgradesAmount = buildingUpgrades;
		
		if(buildingCount < 0) tmpBuildingsAmount = 0;
		if(buildingUpgrades < 0) tmpUpgradesAmount = 0;
		
		for(let i = 0; i < tmpArray.length; i++){
			if(!tmpArray[i].buildLinearAmountIncrease){
				tmpArray[i].amount *= Math.pow(tmpArray[i].buildAmountIncrease,tmpBuildingsAmount);
			}
			if(!tmpArray[i].upgradeLinearAmountIncrease){
				tmpArray[i].amount *= Math.pow(tmpArray[i].upgradeAmountIncrease,tmpUpgradesAmount);
			}
		}
		return tmpArray;
	}
	
	
	calculateBuildCost(startAmount, targetAmount){
		if(startAmount > targetAmount) return this.calculateDemolishRefund(startAmount, targetAmount);	//or return demolish cost?
		
		let tmpBuildCost = resourcesCopyCostArray(this.baseBuildCost); // resourcesCreateEmptyCostResourcesArray();
		let tmpTotalCost = resourcesCreateEmptyCostResourcesArray();
		
		if(startAmount == targetAmount) return tmpTotalCost;
		
		for(let i = 0; i < this.baseBuildCost.length; i++){
			if(this.baseBuildCost[i].cost == 0.0) continue;
			tmpTotalCost[i].costIncrease = this.baseBuildCost[i].costIncrease;
			tmpTotalCost[i].linearCostIncrease = this.baseBuildCost[i].linearCostIncrease;
			tmpTotalCost[i].refund = this.baseBuildCost[i].refund;
		}
		if(targetAmount > startAmount){
			for(let j = 0; j < targetAmount; j++){
				if(j >= startAmount){
					//add cost at current amount (starting with 0, finishing at target-1)
					for(let i = 0; i < this.baseBuildCost.length; i++){
						//if cost == 0, skip it
						if(this.baseBuildCost[i].cost == 0.0) continue;		
						tmpTotalCost[i].cost += tmpBuildCost[i].cost;
					}
				}
				//increase cost of next building
				resourcesLevelUpCost(tmpBuildCost);
			}
			//rounding, just in case
			for(let i = 0; i < this.baseBuildCost.length; i++){
				if(this.baseBuildCost[i].cost == 0.0) continue;
				
				//if linear for this resource, keep same - especially if it is very small but important cost
				if(this.baseBuildCost[i].linearCostIncrease) continue;
				
				tmpTotalCost[i].cost = (Math.floor(tmpTotalCost[i].cost*100))/100;
			}
			return tmpTotalCost;
		}
		else{
			return false;
		}
	}
	calculateUpgradeCost(startLevel, targetLevel){
		
		if(startLevel > targetLevel) return this.calculateDowngradeRefund(startLevel, targetLevel);
		
		let tmpUpgradeCost = resourcesCopyCostArray(this.baseUpgradeCost);// resourcesCreateEmptyCostResourcesArray();
		let tmpTotalCost = resourcesCreateEmptyCostResourcesArray();
		
		if(startLevel == targetLevel) return tmpTotalCost;
		
		for(let i = 0; i < this.baseUpgradeCost.length; i++){
			if(this.baseUpgradeCost[i].cost == 0.0) continue;
			tmpTotalCost[i].costIncrease = this.baseUpgradeCost[i].costIncrease;
			tmpTotalCost[i].linearCostIncrease = this.baseUpgradeCost[i].linearCostIncrease;
			tmpTotalCost[i].refund = this.baseUpgradeCost[i].refund;
		}
		if(targetLevel > startLevel){
			for(let j = 0; j < targetLevel; j++){
				if(j >= startLevel){
					//add cost at current amount (starting with 0, finishing at target-1)
					for(let i = 0; i < this.baseUpgradeCost.length; i++){
						//if cost == 0, skip it
						if(this.baseUpgradeCost[i].cost == 0.0) continue;
						tmpTotalCost[i].cost += tmpUpgradeCost[i].cost;
					}
				}
				//increase cost of next upgrade
				resourcesLevelUpCost(tmpUpgradeCost);
			}
			//rounding, just in case
			for(let i = 0; i < this.baseBuildCost.length; i++){
				if(this.baseUpgradeCost[i].cost == 0.0) continue;
				//if linear for this resource, keep same - especially if it is very small but important cost
				if(this.baseUpgradeCost[i].linearCostIncrease) continue;
				tmpTotalCost[i].cost = (Math.floor(tmpTotalCost[i].cost*100))/100;
			}
			return tmpTotalCost;
		}
		else{
			return false;
		}
	}
	
	calculateDemolishRefund(startAmount, targetAmount){
		if(startAmount < targetAmount) return this.calculateBuildCost(startAmount, targetAmount);
		
		let tmpDemolishRefund = resourcesCopyCostArray(this.baseBuildCost); 
		let tmpTotalRefund = resourcesCreateEmptyCostResourcesArray();
		
		if(startAmount == targetAmount) return tmpTotalRefund;
		
		for(let i = 0; i < this.baseBuildCost.length; i++){
			if(this.baseBuildCost[i].cost == 0.0) continue;
			tmpTotalRefund[i].costIncrease = this.baseBuildCost[i].costIncrease;
			tmpTotalRefund[i].linearCostIncrease = this.baseBuildCost[i].linearCostIncrease;
			tmpTotalRefund[i].refund = this.baseBuildCost[i].refund;
		}
		
		for(let j = 0; j < startAmount; j++){
			if(j >= targetAmount){
				//add cost of next building (from 0, finishing at current - 1)
				for(let i = 0; i < this.baseBuildCost.length; i++){
					//if cost == 0, skip it
					if(this.baseBuildCost[i].cost == 0.0) continue;		
					tmpTotalRefund[i].cost += tmpDemolishRefund[i].cost;
				}
			}
			//increase cost/refund of next building
			resourcesLevelUpCost(tmpDemolishRefund);
		}
		//apply refund penalty
		for(let i = 0; i < this.baseBuildCost.length; i++){
			tmpTotalRefund[i].cost *= tmpTotalRefund[i].refund;
		}
		//rounding, just in case
		for(let i = 0; i < this.baseBuildCost.length; i++){
			if(this.baseBuildCost[i].cost == 0.0) continue;
			
			//if linear for this resource, keep same - especially if it is very small but important cost
			if(this.baseBuildCost[i].linearCostIncrease) continue;
			
			tmpTotalRefund[i].cost = (Math.floor(tmpTotalRefund[i].cost*100))/100;
		}
		
		//returns only demolish refund, doesn't include upgrade refund
		return tmpTotalRefund;
	}
	calculateDowngradeRefund(startLevel, targetLevel){
		if(startLevel < targetLevel) return this.calculateUpgradeCost(startLevel, targetLevel);
		
		let tmpDowngradeRefund = resourcesCopyCostArray(this.baseUpgradeCost); 
		let tmpTotalRefund = resourcesCreateEmptyCostResourcesArray();
		
		if(startLevel == targetLevel) return tmpTotalCost;
		
		for(let i = 0; i < this.baseUpgradeCost.length; i++){
			if(this.baseUpgradeCost[i].cost == 0.0) continue;
			tmpTotalRefund[i].costIncrease = this.baseUpgradeCost[i].costIncrease;
			tmpTotalRefund[i].linearCostIncrease = this.baseUpgradeCost[i].linearCostIncrease;
			tmpTotalRefund[i].refund = this.baseUpgradeCost[i].refund;
		}
		
		for(let j = 0; j < startLevel; j++){
			if( j >= targetLevel){
				//add cost of next upgrade (from 0, finishing at current - 1)
				for(let i = 0; i < this.baseUpgradeCost.length; i++){
					//if cost == 0, skip it
					if(this.baseUpgradeCost[i].cost == 0.0) continue;
					tmpTotalRefund[i].cost += tmpDowngradeRefund[i].cost;
				}
			}
			//increase cost/refund of next building
			resourcesLevelUpCost(tmpDowngradeRefund);
		}
		//apply refund penalty
		for(let i = 0; i < this.baseUpgradeCost.length; i++){
			tmpTotalRefund[i].cost *= tmpTotalRefund[i].refund;
		}
		//rounding, just in case
		for(let i = 0; i < this.baseUpgradeCost.length; i++){
			if(this.baseUpgradeCost[i].cost == 0.0) continue;
			
			//if linear for this resource, keep same - especially if it is very small but important cost
			if(this.baseUpgradeCost[i].linearCostIncrease) continue;
			
			tmpTotalRefund[i].cost = (Math.floor(tmpTotalRefund[i].cost*100))/100;
		}
		
		//returns only downgrade refund, doesn't include amount of buildings
		return tmpTotalRefund;
	}
	
	getProducedEnergy(buildingCount, buildingUpgrades){
		let tmpEnergy = this.powerProduced;
		if(tmpEnergy == 0) return 0;
		if(this.powerProducedCountMultiplier != 1.0 && buildingCount > 0) tmpEnergy *= Math.pow(this.powerProducedCountMultiplier,buildingCount);
		if(this.powerConsumedUpgradeMultiplier != 1.0 && buildingUpgrades > 0) tmpEnergy *= Math.pow(this.powerConsumedUpgradeMultiplier,buildingUpgrades);
		
		tmpEnergy = Math.ceil(tmpEnergy);
		
		return tmpEnergy;
	}
	getRequiredEnergy(buildingCount, buildingUpgrades){
		let tmpEnergy = this.powerConsumed;
		if(tmpEnergy == 0) return 0;
		if(this.powerConsumedCountMultiplier != 1.0 && buildingCount > 0) tmpEnergy *= Math.pow(this.powerConsumedCountMultiplier,buildingCount);
		if(this.powerConsumedUpgradeMultiplier != 1.0 && buildingUpgrades > 0) tmpEnergy *= Math.pow(this.powerConsumedUpgradeMultiplier,buildingUpgrades);
		
		tmpEnergy = Math.ceil(tmpEnergy);
		
		return tmpEnergy;
	}
	getStaffNeeded(buildingCount, buildingUpgrades){
		let tmpStaff = this.staffNeededBase;
		if(tmpStaff == 0) return 0;
		if(this.staffNeededCountMultiplier != 1.0 && buildingCount > 0) tmpStaff *= Math.pow(this.staffNeededCountMultiplier,buildingCount);
		if(this.staffNeededLevelMultiplier != 1.0 && buildingUpgrades > 0) tmpStaff *= Math.pow(this.staffNeededLevelMultiplier,buildingUpgrades);
		
		tmpStaff = Math.ceil(tmpStaff);
		
		return tmpStaff;
	}
}
class BuildingObject{
	index = -1;
	blueprintIndex = -1;
	planetIndex = -1;
	
	powerProduced = 0;
	powerConsumed = 0;
	
	dailyProduction = [];
	dailyConsumption = [];
	
	customBuildDemolishAmount = BuildingsBulkBuyAmount;
	customUpgradeDowngradeAmount = BuildingsBulkBuyAmount;
	
	nextBuildCost = [];
	nextBuildCostMore = [];
	nextBuildCostEvenMore = [];
	nextBuildCostCustom = [];
	
	nextUpgradeCost = [];
	nextUpgradeCostMore = [];
	nextUpgradeCostEvenMore = [];
	nextUpgradeCostCustom = [];
	
	totalBuildCost = [];
	totalUpgradeCost = [];
	lastUpgradeCost = [];
	
	nextDemolishRefund = [];
	nextDemolishRefundMore = [];
	nextDemolishRefundEvenMore = [];
	nextDemolishRefundCustom = [];
	
	nextDowngradeRefund = [];
	nextDowngradeRefundMore = [];
	nextDowngradeRefundEvenMore = [];
	nextDowngradeRefundCustom = [];
	
	count = 0;
	level = 0;
	
	staffAssigned = 0;
	staffRequired = 0;
	
	enabled = true;
	folded = false;
	
	//init starting upgrade/build prices and 0-amount refunds
	initBuilding(){
		this.initBuildCost();
		this.initUpgradeCost();
		this.initDemolishRefund();
		this.initDowngradeRefund();
		
		this.initPowers();
		this.initStaff();
		
		this.refreshProductionAndConsumption();
	}
	initBuildCost(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.nextBuildCost = tmpBlueprintObject.calculateBuildCost(0, 1);
		this.nextBuildCostMore = tmpBlueprintObject.calculateBuildCost(0, BuildingsBuildMoreAmount);
		this.nextBuildCostEvenMore = tmpBlueprintObject.calculateBuildCost(0, BuildingsBuildEvenMoreAmount);
		
		this.nextBuildCostCustom = tmpBlueprintObject.calculateBuildCost(0, this.customBuildDemolishAmount);
		this.refreshTotalBuildCost();
	}
	initUpgradeCost(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.nextUpgradeCost = tmpBlueprintObject.calculateUpgradeCost(0, 1);
		this.nextUpgradeCostMore = tmpBlueprintObject.calculateUpgradeCost(0, BuildingsUpgradeMoreAmount);
		this.nextUpgradeCostEvenMore = tmpBlueprintObject.calculateUpgradeCost(0, BuildingsUpgradeEvenMoreAmount);
		
		this.nextUpgradeCostCustom = tmpBlueprintObject.calculateUpgradeCost(0, this.customUpgradeDowngradeAmount);
		
		this.lastUpgradeCost = tmpBlueprintObject.calculateUpgradeCost(0, 0);
		this.refreshTotalUpgradeCost();
	}
	
	initDemolishRefund(){
		
		this.nextDemolishRefund =  resourcesCreateEmptyCostResourcesArray();
		this.nextDemolishRefundMore =  resourcesCreateEmptyCostResourcesArray();
		this.nextDemolishRefundEvenMore =  resourcesCreateEmptyCostResourcesArray();
		this.nextDemolishRefundCustom =  resourcesCreateEmptyCostResourcesArray();
		
	}
	initDowngradeRefund(){
		this.nextDowngradeRefund =  resourcesCreateEmptyCostResourcesArray();
		this.nextDowngradeRefundMore =  resourcesCreateEmptyCostResourcesArray();
		this.nextDowngradeRefundEvenMore =  resourcesCreateEmptyCostResourcesArray();
		this.nextDowngradeRefundCustom =  resourcesCreateEmptyCostResourcesArray();
	
	}
	
	initPowers(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.powerProduced = tmpBlueprintObject.getProducedEnergy(0,0);
		this.powerConsumed = tmpBlueprintObject.getRequiredEnergy(0,0);
	}
	initStaff(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.staffRequired = tmpBlueprintObject.getStaffNeeded(0,0);
	}
	
	refreshBuilding(){
		this.refreshProductionAndConsumption();
		this.refreshAllCostsAndRefunds();
		this.refreshPowers();
		this.refreshStaff();
	}
	
	//get costs/refunds based on current count and level
	refreshAllCostsAndRefunds(){
		this.refreshBuildCost();
		this.refreshUpgradeCost();
		this.refreshDemolishRefund();
		this.refreshDowngradeRefund();
	}
	
	refreshBuildCost(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.nextBuildCost = tmpBlueprintObject.calculateBuildCost(this.count, this.count + 1);
		this.nextBuildCostMore = tmpBlueprintObject.calculateBuildCost(this.count, this.count + BuildingsBuildMoreAmount);
		this.nextBuildCostEvenMore = tmpBlueprintObject.calculateBuildCost(this.count, this.count + BuildingsBuildEvenMoreAmount);
		
		this.nextBuildCostCustom = tmpBlueprintObject.calculateBuildCost(this.count, this.count + this.customBuildDemolishAmount);
	}
	refreshUpgradeCost(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.nextUpgradeCost = tmpBlueprintObject.calculateUpgradeCost(this.level, this.level + 1);
		this.nextUpgradeCostMore = tmpBlueprintObject.calculateUpgradeCost(this.level, this.level + BuildingsUpgradeMoreAmount);
		this.nextUpgradeCostEvenMore = tmpBlueprintObject.calculateUpgradeCost(this.level, this.level + BuildingsUpgradeEvenMoreAmount);
		
		this.nextUpgradeCostCustom = tmpBlueprintObject.calculateUpgradeCost(this.level, this.level + this.customUpgradeDowngradeAmount);
		
		this.lastUpgradeCost = tmpBlueprintObject.calculateUpgradeCost(this.level - 1, this.level);
	}
	
	refreshDemolishRefund(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.nextDemolishRefund = tmpBlueprintObject.calculateDemolishRefund(this.count - 1, this.count);
		this.nextDemolishRefundMore = tmpBlueprintObject.calculateDemolishRefund(this.count - BuildingsBuildMoreAmount, this.count);
		this.nextDemolishRefundEvenMore = tmpBlueprintObject.calculateDemolishRefund(this.count - BuildingsBuildEvenMoreAmount, this.count);
		
		this.nextDemolishRefundCustom = tmpBlueprintObject.calculateDemolishRefund(this.count - this.customBuildDemolishAmount, this.count);
	}
	refreshDowngradeRefund(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.nextDowngradeRefund = tmpBlueprintObject.calculateDowngradeRefund(this.level - 1, this.level);
		this.nextDowngradeRefundMore = tmpBlueprintObject.calculateDowngradeRefund(this.level - BuildingsUpgradeMoreAmount, this.level);
		this.nextDowngradeRefundEvenMore = tmpBlueprintObject.calculateDowngradeRefund(this.level - BuildingsUpgradeEvenMoreAmount, this.level);
		
		this.nextDowngradeRefundCustom = tmpBlueprintObject.calculateDowngradeRefund(this.level - this.customUpgradeDowngradeAmount, this.level);
		
		this.lastUpgradeCost = tmpBlueprintObject.calculateUpgradeCost(this.level - 1, this.level);
	}
	
	refreshPowers(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.powerProduced = tmpBlueprintObject.getProducedEnergy(this.count,this.level);
		this.powerConsumed = tmpBlueprintObject.getRequiredEnergy(this.count,this.level);
	}
	refreshStaff(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.staffRequired = tmpBlueprintObject.getStaffNeeded(this.count,this.level);
	}
	
	//refresh only custom-amount related, for on-change event of input fields
	refreshCustomBuildCost(tmpInputValue){
		if(isNaN(tmpInputValue)) return false;
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.nextBuildCostCustom = tmpBlueprintObject.calculateBuildCost(this.count, this.count + tmpInputValue);
		this.customBuildDemolishAmount = tmpInputValue;
	}
	refreshCustomUpgradeCost(tmpInputValue){
		if(isNaN(tmpInputValue)) return false;
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.nextUpgradeCostCustom = tmpBlueprintObject.calculateUpgradeCost(this.level, this.level + tmpInputValue);
		this.customUpgradeDowngradeAmount = tmpInputValue;
	}
	
	refreshCustomDemolishReturn(tmpInputValue){
		if(isNaN(tmpInputValue)) return false;
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.nextDemolishRefundCustom = tmpBlueprintObject.calculateDemolishRefund(this.count, this.count - tmpInputValue);
		this.customBuildDemolishAmount = tmpInputValue;
	}
	refreshCustomDowngradeReturn(tmpInputValue){
		if(isNaN(tmpInputValue)) return false;
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.nextDowngradeRefundCustom = tmpBlueprintObject.calculateDowngradeRefund(this.count, this.count - tmpInputValue);
		this.customUpgradeDowngradeAmount = tmpInputValue;
	}
	
	//get total build and upgrade cost for single building - for when new building gets built or when multiple are upgraded
	//last upgrade cost is also refunded on demolish
	//is total build cost even needed...?
	refreshTotalBuildCost(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.totalBuildCost = tmpBlueprintObject.calculateBuildCost(0, this.count);
	}
	refreshTotalUpgradeCost(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.totalUpgradeCost = tmpBlueprintObject.calculateUpgradeCost(0, this.level);
	}
	
	//current building production
	refreshProductionAndConsumption(){
		this.refreshDailyProduction();
		this.refreshDailyConsumption();
	}
	refreshDailyProduction(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.dailyProduction = tmpBlueprintObject.getBuildingProduction(this.count, this.level);
	}
	refreshDailyConsumption(){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		this.dailyConsumption = tmpBlueprintObject.getBuildingConsumption(this.count, this.level);
	}
	
	//return resource object if this building were to be built/demolished or upgraded/downgraded
	calculateDailyProduction(targetAmount, targetLevel){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		return tmpBlueprintObject.getBuildingProduction(targetAmount, targetLevel);
	}
	calculateDailyConsumption(targetAmount, targetLevel){
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		
		return tmpBlueprintObject.getBuildingConsumption(targetAmount, targetLevel);
	}
	
	
	tryBuild(tryBuildAmount = 1){
		if(tryBuildAmount == 0) {
			console.log("Nothing was built.");
			return false;
		}
		
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		let tmpPlanetStorage = PlanetsArray[this.planetIndex].resourceStorage;
		
		//for all buildings
		let tmpBuildCost = tmpBlueprintObject.calculateBuildCost(this.count, this.count + tryBuildAmount);
		//extra cost
		let tmpUpgradesCost = resourcesGetMultipliedCost(this.totalUpgradeCost, tryBuildAmount);
		
		let tmpComparsionResult = resourcesIsEnough(tmpPlanetStorage,tmpBuildCost);
		
		if(tmpComparsionResult == -1) {
			console.log("Its enough to build all " + tryBuildAmount);
			return true;
		}
		else{
			if(BuildingsTryBuyMaxEnabled) {
				let tmpPreviousBuildCost = resourcesCreateEmptyCostResourcesArray();
				let tmpPartialBuildCost = resourcesCreateEmptyCostResourcesArray();
				let tmpNextBuildCost = tmpBlueprintObject.calculateBuildCost(this.count, this.count + 1);
				
				for(let i = 1; i <= tryBuildAmount; i++) {
					//add cost of single building
					resourcesIncreaseCost(tmpPartialBuildCost,tmpNextBuildCost);
					//add cost of upgrades for that single building
					resourcesIncreaseCost(tmpPartialBuildCost,this.totalUpgradeCost);
					
					let tmpPartialComparsionResult = resourcesIsEnough(tmpPlanetStorage,tmpPartialBuildCost);
					
					if(tmpPartialComparsionResult != -1) {
						console.log("Can only build it " + (i - 1) + " times.");
						console.log("Insufficient resource: " + ResourcesNamesArray[tmpPartialComparsionResult]);
						//console.log(tmpPartialBuildCost);
						return true;
					}
					
					tmpPreviousBuildCost = resourcesCopyCostArray(tmpNextBuildCost);
					resourcesLevelUpCost(tmpNextBuildCost);
				}
				console.log("Insufficient resource: " + ResourcesNamesArray[tmpComparsionResult]);
				return false;
			}
			else{
				console.log("Insufficient resource: " + ResourcesNamesArray[tmpComparsionResult]);
				return false;
			}
		}		
	}
	tryUpgrade(tryUpgradeAmount = 1){
		if(tryUpgradeAmount == 0) {
			console.log("Nothing was upgraded.");
			return false;
		}
		
		let tmpBlueprintObject = BuildingsArray[this.blueprintIndex];
		let tmpPlanetStorage = PlanetsArray[this.planetIndex].resourceStorage;
		
		//full upgrade cost - try upgrade * amount of buildings
		let tmpUpgradeCost = resourcesGetMultipliedCost(tmpBlueprintObject.calculateUpgradeCost(this.level, this.level + tryUpgradeAmount), this.count);
		
		let tmpComparsionResult = resourcesIsEnough(tmpPlanetStorage,tmpUpgradeCost);
		
		if(tmpComparsionResult == -1){
			console.log("Its enough to upgrade all " + tryUpgradeAmount);
			return true;
		}
		else{
			if(BuildingsTryBuyMaxEnabled){
				let tmpPreviousUpgradeCost = resourcesCreateEmptyCostResourcesArray();
				let tmpPartialUpgradeCost = resourcesCreateEmptyCostResourcesArray();
				let tmpNextUpgradeCost = tmpBlueprintObject.calculateUpgradeCost(this.level, this.level + 1);
				
				for(let i = 1; i <= tryUpgradeAmount; i++){
					resourcesIncreaseCost(tmpPartialUpgradeCost,resourcesGetMultipliedCost(tmpNextUpgradeCost,this.count));
					let tmpPartialComparsionResult = resourcesIsEnough(tmpPlanetStorage,tmpPartialUpgradeCost);
					
					if(tmpPartialComparsionResult != -1){
						console.log("Can only upgrade it " + (i-1) + " times.");
						console.log("Insufficient resource: " + ResourcesNamesArray[tmpPartialComparsionResult]);
						console.log(tmpPartialUpgradeCost)
						return true;
					}
					
					tmpPreviousUpgradeCost = resourcesCopyCostArray(tmpNextUpgradeCost);
					resourcesLevelUpCost(tmpNextUpgradeCost);
				}
				console.log("Insufficient resource: " + ResourcesNamesArray[tmpComparsionResult]);
				return false;
			}
			else{
				console.log("Insufficient resource: " + ResourcesNamesArray[tmpComparsionResult]);
				return false;
			}
		}		
	}
}


var BuildingsBuildMoreAmount = 10;
var BuildingsBuildEvenMoreAmount = 50;
var BuildingsUpgradeMoreAmount = 5;
var BuildingsUpgradeEvenMoreAmount = 10;

var BuildingsBulkBuyDefaultAmount = 10;
var BuildingsBulkBuyLimit = 100;
var BuildingsBulkBuyLimitEnabled = true;

var BuildingsBulkBuyAmount = BuildingsBulkBuyDefaultAmount;
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
		BuildingsTryBuyMaxEnabled = newConfigObject.buildingsTryBuyMax;
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

class BuildingObject{
	
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


