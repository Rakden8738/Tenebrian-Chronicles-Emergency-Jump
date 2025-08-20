function connectionTest_systems(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"systems\" reporting issues.");
		return false;
	}
}

var SystemsArray = [];
var SystemsCurrentSystem = -1;

var StarSizes = [
	"Dwarf",
	"Star",
	"Giant",
	"Supergiant",
	"Other",
];
var StarTypes = [
	["Brown","hsl(30,100%,35%)"],
	["Red","hsl(0,100%,40%)"],
	["Orange","hsl(35,100%,60%)"],
	["Yellow","hsl(60,100%,65%)"],
	["White","hsl(0,0%,100%)"],
	["Blue","hsl(210,100%,85%)"],
]

class SystemObject{
	constructor(){
	
	}
	
	name = "Unknown system";
	id = -1;
	description = "System is not recognised in the database.";
	
	owner = -1;
	
	network = "Not part of a network";
	network_id = -1;
	
	starType = StarTypes[1];
	starSize = StarSizes[1];
	
	starMass = 1.0;
	
	planetsIDArray = [];
	
	gatesNumber = 0;
	gatesIDs = [];
	
	registerPlanet(planetID, loopback = true){
		if(!this.planetsIDArray.includes(planetID)){
			console.log("Registering planet " + planetID + " in system " + this.id);
			this.planetsIDArray.push(planetID);
			
			if(loopback) planetsGetPlanetById(planetID).registerSystem(this.id, false);
		}
		else{
			console.log("Planet " + planetID + " already in this system " + this.id);
		}
	}
	removePlanet(planetID){
		if(this.planetsIDArray.includes(planetID)){
			this.planetsIDArray.splice(this.planetsIDArray.indexOf(planetID),1);
		}
		else{
			console.log("Planet " + planetID + " not found in system " + this.id);
		}
	}
	
	checkOwner(){
		var tmpOwner = 0;
		
		for(let i = 0; i < this.planetsIDArray.length; i++){
			if(tmpOwner == 0){
				if(planetsGetPlanetById(this.planetsIDArray[i]).owner != 0){
					tmpOwner = planetsGetPlanetById(this.planetsIDArray[i]).owner;
				}
			}
			else {
				if(planetsGetPlanetById(this.planetsIDArray[i]).owner != tmpOwner){
					this.owner = 2;
					return 2;
				}
			}
		}
		this.owner = tmpOwner;
		return tmpOwner;
	}
}

function systemsGetSystemById(systemID){
	var tmpSystem;
	
	for(var i = 0; i < SystemsArray.length; i++) {
		if(SystemsArray[i].id == systemID) {
			tmpSystem = SystemsArray[i];
			break;
		}
	}
	
	return tmpSystem;
}