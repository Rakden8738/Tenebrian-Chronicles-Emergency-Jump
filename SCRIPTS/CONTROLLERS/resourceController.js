function connectionTest_resources(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"resources\" reporting issues.");
		return false;
	}
}

function resourcesInitResources(outputDocument){
	resourcesNames = resourcesRecreateResourceNames();
	resourcesDiscovered = resourcesRecreateDiscoveredResources();
	resourcesNaturalResources = resourcesRecreateNaturalResources();
}

var resourcesNames = [
	"Gravel",
	"Stone",
	"Sand",
	"Silicon",
	"Glass",
	"Crystals",
	
	"Ore",
	"Iron",
	"Copper",
	"Titanium",
	"Precious metals",
	"Tungsten",
	
	"Carbon",
	"Biomass",
	"Coal",
	"Hydrocarbons",
	"Fuel",
	
	"Circuts",
	"Computers",
	"Drones",
	"AI cores",
	
	"Water",
	"Ice",
	"Hydrogen",
	"Plasma",
	"Antimatter",
	
	"Transplutonics",
	"Uranium",
	"Plutonium",
	"Nuclear fuel",
	
	"Sulphur",
	"Chemicals",
	"Explosives",
	"Warheads",
	
	"Steel",
	"Plastic",
	"Alloys",
	"Construction materials",
	"Ship parts",
];
var resourcesResourceCategories = [
	"Raw resources",		//0
	"Construction",			//1
	"Refined resources",	//2
	"Electronics",			//3
	"Carbons",				//4
	"Fuels",				//5
	"Nuclear",				//6
	"Advanced resources",	//7
	"Reagents",				//8
	"Military",				//9
];
var resourcesDiscovered = [];
var resourcesNaturalResources = [];
var resourcesResourceProperties = {
	//name: pre-discovered, categories, base efficiency (1.0 for produced, 0.0 for mined)
	"Gravel":[true,[0,1],0.0],
	"Stone":[true,[0,1],0.0],
	"Sand":[false,[0],0.0],
	"Silicon":[false,[0],0.0],
	"Glass":[false,[2],1.0],
	"Crystals":[false,[7,9],1.0],
	
	"Ore":[true,[0],0.0],
	"Iron":[true,[1,2],0.0],
	"Copper":[true,[2,3],0.0],
	"Titanium":[false,[1,2],0.0],
	"Precious metals":[false,[7],0.0],
	"Tungsten":[false,[7,9],0.0],
	
	"Carbon":[true,[4,8],1.0],
	"Biomass":[true,[0,4],0.0],
	"Coal":[false,[4],0.0],
	"Hydrocarbons":[false,[4],0.0],
	"Fuel":[false,[4,5],1.0],
	
	"Circuts":[false,[1,3],1.0],
	"Computers":[false,[3],1.0],
	"Drones":[false,[3,9],1.0],
	"AI cores":[false,[3],1.0],
	
	"Water":[true,[0,8],0.0],
	"Ice":[true,[0],0.0],
	"Hydrogen":[false,[5,8],0.0],
	"Plasma":[false,[6,9],1.0],
	"Antimatter":[false,[5,6],1.0],
	
	"Transplutonics":[false,[0,6],0.0],
	"Uranium":[false,[2,6],1.0],
	"Plutonium":[false,[6,7],1.0],
	"Nuclear fuel":[false,[5,6],1.0],
	
	"Sulphur":[false,[8],0.0],
	"Chemicals":[false,[8],1.0],
	"Explosives":[false,[9],1.0],
	"Warheads":[false,[9],1.0],
	
	"Steel":[true,[1,2],1.0],
	"Plastic":[false,[2],1.0],
	"Alloys":[false,[7],1.0],
	"Building materials":[true,[1],1.0],
	"Ship parts":[true,[1],1.0],
};

function resourcesRecreateResourceNames(){
	var tmpKeys = Object.keys(resourcesResourceProperties);
	var tmpArray = [];
	for(var i = 0; i<tmpKeys.length; i++){
		tmpArray.push(tmpKeys[i]);
	}
	return tmpArray;
}
function resourcesRecreateDiscoveredResources(){
	var tmpKeys = Object.keys(resourcesResourceProperties);
	var tmpArray = [];
	for(var i = 0; i<tmpKeys.length; i++){
		tmpArray.push(resourcesResourceProperties[tmpKeys[i]][0]);
	}
	return tmpArray;
}
function resourcesRecreateNaturalResources(){
	var tmpKeys = Object.keys(resourcesResourceProperties);
	var tmpArray = [];
	for(var i = 0; i<tmpKeys.length; i++){
		if(resourcesResourceProperties[tmpKeys[i]][2] == 0.0) tmpArray.push(true);
		else tmpArray.push(false);
	}
	return tmpArray;
}

function resourcesGetNewResourcesObject(resourceAmount = "default"){
	var tmpObject = {};
	var tmpKeys = Object.keys(resourcesResourceProperties);
	for(var i = 0; i < tmpKeys.length; i++){
		if(resourceAmount == "default") tmpObject[tmpKeys[i]] = resourcesResourceProperties[tmpKeys[i]][2];
		else tmpObject[tmpKeys[i]] = resourceAmount;
	}
	return tmpObject;
}