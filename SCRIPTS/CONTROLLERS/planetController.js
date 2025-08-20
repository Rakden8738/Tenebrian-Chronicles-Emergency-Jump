function connectionTest_planets(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"planets\" reporting issues.");
		return false;
	}
}

var PlanetsArray = [];
var PlanetsCurrentPlanet = -1;

var PlanetPeroidBaseDays = 365.25;

var PlanetImageDefaultPath = "RESOURCES/PLANETS/";

var PlanetTypes = [
	"Unknown",
	"Terrestrial",
	"Desert",
];
var PlanetSubtypes = [
	"Unknown",
	"Paradise world",
	"Wasteland",
];
var PlanetAtmospheres = [
	["Unknown","Unknown"],
	["None","None"],
	["Oxygen","O2"],
	["Carbon dioxide","CO2"],
	["Nitrogen","N2"],
	["Hydrogen","H"],
	["Helium","He"],
	["Steam","H2O"],
	
];


class PlanetObject{
	constructor(){
		this.naturalResources = resourcesGetNewResourcesObject();
		
		this.resourceStorage = resourcesGetNewResourcesObject(0.0);
		this.resourceProduction = resourcesGetNewResourcesObject(0.0);
		this.resourceConsumption = resourcesGetNewResourcesObject(0.0);
	}
	
	name = "Unknown planet";
	id = -1;
	description = "No information is available about this planet in ship's computer database.";
	imagePath = "Default_1";
	type = PlanetTypes[0];
	subtype = PlanetSubtypes[0];
	atmosphere = PlanetAtmospheres[0];
	owner = -1;
	
	system = "Unknown sector";
	system_id = -1;
	
	orbitalPeroid = 365.256;
	orbitalDistance = 1.0;
	radius = 6371.0;
	averageTemperature = 15.0;
	gravity = 9.81;
	
	buildings = {};
	operators = 0;
	
	hazard = 0;
	
	naturalResources = {};
	
	//resources
	resourceStorage = {};
	resourceProduction = {};
	resourceConsumption = {};
	
	//energy
	energyAvailable = 0;
	energyRequired = 0;
	energyProduced = 0;
	
	registerSystem(systemID, loopback = true) {
		this.removeSystem();
		
		this.system_id = systemID;
		this.system = systemsGetSystemById(systemID).name;
		
		if(loopback) systemsGetSystemById(systemID).registerPlanet(this.id, false);
		
		this.recalculatePeroid();
		
	}
	removeSystem(){
		if(this.system_id != -1){
			systemsGetSystemById(this.system).removePlanet(this.id);
			
			this.system = "Unknown sector";
			this.system_id = -1;
		}
	}
	
	recalculatePeroid(){
		if(this.system_id != -1){
			//T² = (4π²/GM) * a³
			//for a == 1 and M == 1:
			//Assuming T = 400 => T² = 16000, then:
			//(4π²/G) = 160000,
			//T² = (160000 / 1) * 1³

			this.orbitalPeroid = Math.pow(((PlanetPeroidBaseDays*PlanetPeroidBaseDays) / systemsGetSystemById(this.system_id).starMass) * Math.pow(this.orbitalDistance,3), (1/2));
		}
	}
	calculateHazard(){
		this.hazard = 1;	
	}
	getEnergyBalanceValue(){
		if(this.energyRequired == 0) return 1;
		else return this.energyAvailable/this.energyRequired;
	}
	getEnergyBalanceString(){
		var tmpReply = "";
		
		tmpReply += this.energyAvailable + " / " + this.energyRequired + " ( ";
		if(this.energyRequired == 0) tmpReply+= "100% )";
		else if(this.energyAvailable/this.energyRequired >= 1) tmpReply+= "100% )";
		else tmpReply += Number(this.energyAvailable / this.energyRequired).toFixed(2) + "% )";
		
		return tmpReply;
	}
}

function planetsGetPlanetById(planetID){
	var tmpPlanet;
	
	for(var i = 0; i < PlanetsArray.length; i++) {
		if(PlanetsArray[i].id == planetID) {
			tmpPlanet = PlanetsArray[i];
			break;
		}
	}
	
	return tmpPlanet;
}

function planetsGetNextOverallPlanet(){
	if((PlanetsCurrentPlanet + 1) < PlanetsArray.length) return (PlanetsCurrentPlanet + 1);
	else return 0;
}
function planetsGetPreviousOverallPlanet(){
	if((PlanetsCurrentPlanet - 1) >= 0) return (PlanetsCurrentPlanet - 1);
	else return (PlanetsArray.length - 1);
}
