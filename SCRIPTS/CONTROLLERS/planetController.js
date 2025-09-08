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
	["Unknown","hsl(300,100%,50%)","hsl(300,100%,25%)"],
	["Terrestrial","hsl(120,100%,50%)","hsl(90,100%,25%)"],
	["Desert","hsl(60,50%,50%)","hsl(60,50%,25%)"],
	["Metallic","hsl(0,25%,50%)","hsl(0,25%,25%)"],
	["Barren","hsl(30,25%,50%)","hsl(30,25%,25%)"],
	["Frozen","hsl(180,50%,75%)","hsl(180,50%,50%)"],
];
var PlanetSubtypes = [
	"Unknown",
	"Paradise world",
	"Wasteland",
	"Barren",
	"Unstable",
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
	
	arrayID = -1;
	
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
	
	//display
	startingPosition = 0.0;
	
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

	getPosition(currentDate){
		var tmpPosition = [0,0];
		var tmpRotation =  (((currentDate % this.orbitalPeroid) / this.orbitalPeroid)  + this.startingPosition)%1;
		
		tmpPosition[0] = Math.sin(Math.PI*tmpRotation*2);
		tmpPosition[1] = Math.cos(Math.PI*tmpRotation*2);
		
		return tmpPosition;
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

function planetsGetNextOverallPlanetIndex(){
	if((PlanetsCurrentPlanet + 1) < PlanetsArray.length) return (PlanetsCurrentPlanet + 1);
	else return 0;
}
function planetsGetNextFactionPlanetIndex(factionID = -1){
	if(factionID != -1) var tmpFaction = factionID;
	else var tmpFaction = PlanetsArray[PlanetsCurrentPlanet].owner;
	var tmpCurrent = PlanetsCurrentPlanet + 1;
	
	while(tmpCurrent != PlanetsCurrentPlanet) {
		if(tmpCurrent >= PlanetsArray.length) tmpCurrent = 0;
		if(PlanetsArray[tmpCurrent].owner == tmpFaction) return tmpCurrent;
		else tmpCurrent++;
	}
	
	console.log("Next planet belonging to faction " + tmpFaction + " not found");
	return tmpCurrent;
}
function planetsGetNextSystemPlanetIndex(){
	var tmpSystem = PlanetsArray[PlanetsCurrentPlanet].system_id;
	var tmpCurrent = PlanetsCurrentPlanet + 1;
	
	while(tmpCurrent != PlanetsCurrentPlanet) {
		if(tmpCurrent >= PlanetsArray.length) tmpCurrent = 0;
		if(PlanetsArray[tmpCurrent].system_id == tmpSystem) return tmpCurrent;
		else tmpCurrent++;
	}
	
	console.log("Next planet in system " + tmpSystem + " not found");
	return tmpCurrent;
}



function planetsGetPreviousOverallPlanetIndex(){
	if((PlanetsCurrentPlanet - 1) >= 0) return (PlanetsCurrentPlanet - 1);
	else return (PlanetsArray.length - 1);
}
function planetsGetPreviousFactionPlanetIndex(factionID = -1){
	if(factionID != -1) var tmpFaction = factionID;
	else var tmpFaction = PlanetsArray[PlanetsCurrentPlanet].owner;
	
	var tmpCurrent = PlanetsCurrentPlanet - 1;
	
	while(tmpCurrent != PlanetsCurrentPlanet) {
		if(tmpCurrent < 0) tmpCurrent = PlanetsArray.length - 1;
		if(PlanetsArray[tmpCurrent].owner == tmpFaction) return tmpCurrent;
		else tmpCurrent--;
	}
	
	console.log("Previous planet belonging to faction " + tmpFaction + " not found");
	return tmpCurrent;
}
function planetsGetPreviousSystemPlanetIndex(){
	var tmpSystem = PlanetsArray[PlanetsCurrentPlanet].system_id;
	var tmpCurrent = PlanetsCurrentPlanet - 1;
	
	while(tmpCurrent != PlanetsCurrentPlanet) {
		if(tmpCurrent < 0) tmpCurrent = PlanetsArray.length - 1;
		if(PlanetsArray[tmpCurrent].system_id == tmpSystem) return tmpCurrent;
		else tmpCurrent--;
	}
	
	console.log("Previous planet in system " + tmpSystem + " not found");
	return tmpCurrent;
}