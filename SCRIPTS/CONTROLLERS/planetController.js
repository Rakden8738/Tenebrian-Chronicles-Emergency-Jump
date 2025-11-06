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
var PlanetsDefaultHomePlanetIndex = 0;
var PlanetsHomePlanetIndex = PlanetsDefaultHomePlanetIndex;

var PlanetPeroidBaseDays = 365.25;
var PlanetBaseHazardLevel = 10;
var PlanetDefaultRadius = 6000;
var PlanetDefaultRelSizeLogarithmBase = 2;

var PlanetImageDefaultPath = "RESOURCES/PLANETS/";

var PlanetTypes = {
	"Unknown":["Unknown","hsl(300,100%,50%)","hsl(300,100%,25%)",0],
	"Arid":["Arid","hsl(75,100%,50%)","hsl(75,100%,25%)",0],
	"Barren":["Barren","hsl(45,25%,50%)","hsl(45,25%,25%)",0],
	"Cryovolcanic":["Cryovolcanic","hsl(210,75%,75%)","hsl(210,75%,50%)",0],
	"Desert":["Desert","hsl(60,75%,75%)","hsl(60,75%,50%)",0],	//4
	"Frozen":["Frozen","hsl(180,25%,90%)","hsl(180,25%,25%)",0],
	"Gas Giant":["Gas Giant","hsl(270,75%,50%)","hsl(270,75%,25%)",0],
	"Jungle":["Jungle","hsl(120,100%,50%)","hsl(120,100%,25%)",0],
	"Volcanic":["Volcanic","hsl(10,100%,45%)","hsl(10,100%,25%)",0],
	"Metallic":["Metallic","hsl(0,15%,50%)","hsl(0,15%,25%)",0],	//9
	"Terrestrial":["Terrestrial","hsl(105,100%,50%)","hsl(105,100%,25%)",0],
	"Tundra":["Tundra","hsl(150,75%,65%)","hsl(150,75%,45%)",0],
	"Ocean":["Ocean","hsl(255,100%,50%)","hsl(255,100%,25%)",0],	//12
};
var PlanetSubtypes = {
	"Unknown":["Unknown"],
	"Paradise world":["Paradise world"],
	"Wasteland":["Wasteland"],
	"Barren":["Barren"],
	"Unstable":["Unstable"],
};
var PlanetTypeNames = [
	"Unknown",
	"Arid",
	"Barren",
	"Cryovolcanic",
	"Desert",
	"Frozen",
	"Gas Giant",
	"Jungle",
	"Volcanic",
	"Metallic",
	"Terrestrial",
	"Tundra",
	"Ocean",
];
var PlanetSubtypeNames = [
	"Unknown",
	"Paradise world",
	"Wasteland",
	"Barren",
	"Unstable",
];
var PlanetConditions = {
	"No atmosphere":["No atmosphere",0],		//no change, none-atmosphere already exists
	"Thin atmosphere":["Thin atmosphere",-1],	//reduces impact of dangerous atmosphere types
	"Dense atmosphere":["Dense atmosphere",1],	//raises impact of atmospheres
	
	"Extreme cold":["Extreme cold",5],
	"Cold":["Cold",3],
	"Hot":["Hot",2],
	"Extremely hot":["Extremely hot",5],
	
	"Fast rotation":["Fast rotation",1],		//short day and night cycle
	"Slow rotation":["Slow rotation",2],		//days and nights are long
	"Tidally locked":["Tidally locked",3],		//constant sun exposure or lack of it at half of planet
	
	"Extreme weather":["Extreme weather",2],
	"Mild climate":["Mild climate",-1],
	
	"Death world":["Death world",5],
	"Dangerous biosphere":["Dangerous biosphere",3],
	"Hostile natives":["Hostile natives",2],
	"Natives pressence":["Natives pressence",1],
	"Paradise world":["Paradise world",-3],
	
	"Shattered":["Shattered",5],		//world in pieces
	"Dead world":["Dead world",2],		//mostly devastated
	"Wasteland":["Wasteland",1],
	"Incompletely terraformed":["Incompletely terraformed",1], //unfinished terraformation makes things unpredictable
	"Habitable":["Habitable",-1],						//habitable by default
	"Terraformed":["Terraformed",-1],					//terraformed/optimized
	
	"High tectonic activity":["High tectonic activity",4],
	"Tectonic activity":["Tectonic activity",2],
	
	"Low gravity":["Low gravity",1],
	"High gravity":["High gravity",3],
	
	"Irradiated":["Irradiated",3],			//likely due to star activity
	"Radioactive":["Radioactive",5],		//ground itself
}

var OLDPlanetTypes = [
	["Unknown","hsl(300,100%,50%)","hsl(300,100%,25%)"],
	["Terrestrial","hsl(120,100%,50%)","hsl(90,100%,25%)"],
	["Desert","hsl(60,50%,50%)","hsl(60,50%,25%)"],
	["Metallic","hsl(0,25%,50%)","hsl(0,25%,25%)"],
	["Barren","hsl(30,25%,50%)","hsl(30,25%,25%)"],
	["Frozen","hsl(180,50%,75%)","hsl(180,50%,50%)"],
];
var OLDPlanetSubtypes = [
	"Unknown",
	"Paradise world",
	"Wasteland",
	"Barren",
	"Unstable",
];
var PlanetAtmospheres = {
	"Unknown":["Unknown","Unknown",2],					//unknown hazards
	"None":["None","None",1],							//lack of atmosphere is dangerous
	"Insignificant":["Insignificant","Insignificant",1],//likely thin but present
	
	"Ammonia":["Ammonia","NH3",2],					//reactive and toxic
	"Carbon dioxide":["Carbon dioxide","CO2",0],	//fairy neutral and stable
	"Carbon monoxide":["Carbon monoxide","CO",1],	//toxic and a bit reactive
	"Chlorine":["Chlorine","Cl",3],					//reactive and toxic
	"Ethane":["Etane","C2H6",0],					//fairy neutral and stable
	"Fluorine":["Fluorine","F2",4],
	"Helium":["Helium","He",0],						//fairy neutral and stable
	"Hydrogen":["Hydrogen","H2",1],					//a bit reactive
	"Methane":["Methane","CH4",0],					//fairy neutral and stable
	"Nitrogen":["Nitrogen","N2",0],					//fairy neutral and stable
	"Oxygen":["Oxygen","O2",-1],					//desired
	"Steam":["Steam","H2O",1],						//reduced visibility, water can harm electronics
	"Sulfur dioxide":["Sulfur dioxide","SO2",3],	//reactive and toxic
	
	"Ash":["Ash","Ash",2],							//dense, limits view, can jam things
	"Dust":["Dust","Dust",2],						//dense, limits view, can jam things
	"Organic":["Organic","Organic",3],				//hostile microbes
	
};


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
	
	conditions = [];
	
	atmosphere = PlanetAtmospheres[0];
	owner = -1;
	
	arrayID = -1;
	
	system = "Unknown sector";
	system_id = -1;
	
	orbitalPeroid = 365.256;
	orbitalDistance = 1.0;
	radius = PlanetDefaultRadius;//6371.0;
	averageTemperature = 15.0;
	gravity = 9.81;
	
	buildings = {};
	operators = 0;
	
	hazard = PlanetBaseHazardLevel;
	relativeSize = 0;
	
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
		if(this.system_id != systemID) this.removeSystem();
		
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
			var tmpPeroid = Math.pow(((PlanetPeroidBaseDays*PlanetPeroidBaseDays) / systemsGetSystemById(this.system_id).starMass) * Math.pow(this.orbitalDistance,3), (1/2));
			this.orbitalPeroid = tmpPeroid;
			return tmpPeroid;
		}
		else return false;
		
	}
	recalculateHazard(){
		var tmpHazard = PlanetBaseHazardLevel;
		tmpHazard += this.type[3];
		for(var i = 0; i < this.conditions.length; i++){
			tmpHazard += this.conditions[i][1];
		}
		tmpHazard += this.atmosphere[2];
		
		this.hazard = tmpHazard;
		return tmpHazard;
	}
	recalculateRelSize(){
		var tmpRelSize = Math.round(logBase((this.radius/PlanetDefaultRadius),PlanetDefaultRelSizeLogarithmBase));
		this.relativeSize = tmpRelSize;
		return tmpRelSize;
	}
	refreshPlanet(){
		this.recalculateRelSize();
		this.recalculateHazard();
		this.recalculatePeroid();
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