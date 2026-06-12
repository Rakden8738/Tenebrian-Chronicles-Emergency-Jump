function connectionTest_resources(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"resources\" reporting issues.");
		return false;
	}
}

var ResourcesArray = [];
var ResourcesNamesArray = [];
var ResourceCategories = ["Raw resources", "Construction", "Refined Resources", "Electronics", "Carbons", "Fuels", "Nuclear", "Advanced Resources", "Reagents", "Military", "Other"];

var ResourcesInitDebug = false;

class ResourceTypeObject {
	index = -1;
	name = "Unobtanium";
	description = "Default material.";
	
	categories = [10];
	
	discovered = false;
	naturalResource = false;
}

class ResourceObject {
	constructor(resourceIndex){
		this.typeIndex = resourceIndex;
		this.typeName = ResourcesNamesArray[resourceIndex];
	}
	
	index = -1;
	typeIndex = -1;
	typeName = "";
	
	amount = 0.0;
}

class NaturalResourceObject {
	constructor(resourceIndex){
		this.typeIndex = resourceIndex;
		this.typeName = ResourcesNamesArray[resourceIndex];
	}
	
	index = -1;
	typeIndex = -1;
	typeName = "";
	
	quality = 1.0;
	quantity = 0.0;
}

class ResourceBonusObject {
	constructor(resourceIndex){
		this.typeIndex = resourceIndex;
		this.typeName = ResourcesNamesArray[resourceIndex];
	}
	
	index = -1;
	typeIndex = -1;
	typeName = "";
	
	bonus = 1.0;
}

function resourcesRefreshResources(){
	ResourcesNamesArray = [];
	for(let i = 0; i < ResourcesArray.length; i++){
		ResourcesNamesArray.push(ResourcesArray[i].name);
	}
}

function resourcesCreateEmptyNaturalResourcesArray(){
	var tmpNaturalResourcesArray = [];
	
	for(let i = 0; i < ResourcesArray.length; i++){
		if(ResourcesArray[i].naturalResource){
			var tmpNaturalResource = resourcesCreateNaturalResourceObject(i);
			tmpNaturalResource.index = tmpNaturalResourcesArray.length;
			//tmpNaturalResource.typeName = ResourcesArray[i].name;
			tmpNaturalResourcesArray.push(tmpNaturalResource);
		}
	}
	
	return tmpNaturalResourcesArray;
}
function resourcesCreateEmptyResourceBonusArray(){
	var tmpBonusResourcesArray = [];
	
	for(let i = 0; i < ResourcesArray.length; i++){
		if(!ResourcesArray[i].naturalResource){
			var tmpBonusResource = resourcesCreateBonusResourceObject(i);
			tmpBonusResource.index = tmpBonusResourcesArray.length;
			//tmpBonusResource.typeName = ResourcesArray[i].name;
			tmpBonusResourcesArray.push(tmpBonusResource);
		}
	}
	
	return tmpBonusResourcesArray;
}
function resourcesCreateEmptyStorageResourcesArray(){
	var tmpEmptyStorageArray = [];
	
	for(let i = 0; i < ResourcesArray.length; i++){
		var tmpStorageResource = resourcesCreateEmptyStorageResourceObject(i);
		tmpStorageResource.index = tmpEmptyStorageArray.length;
		//tmpStorageResource.typeName = ResourcesArray[i].name;
		tmpEmptyStorageArray.push(tmpStorageResource);
	}
	
	return tmpEmptyStorageArray;
}

function resourcesCreateNaturalResourceByName(resourceName, tmpAmount = 0, tmpQuality = 0){
	if(ResourcesNamesArray.includes(resourceName)){
		var tmpIndex = ResourcesNamesArray.indexOf(resourceName);
		
		return resourcesCreateNaturalResourceObject(resourceIndex, tmpAmount, tmpQuality);
	}
	else {
		console.warn("Failed to add natural resource: " + resourceName + " Resource type unknown.");
		return false;
	}	
}
function resourcesCreateNaturalResourceObject(resourceIndex, tmpAmount = 0, tmpQuality = 0){
	var tmpResource = new NaturalResourceObject(resourceIndex);
	//tmpResource.typeIndex = resourceIndex;
	tmpResource.quality = tmpQuality;
	tmpResource.quantity = tmpAmount;
	return tmpResource;
}
function resourcesCreateBonusResourceByName(resourceName, tmpBonus = 1.0){
	if(ResourcesNamesArray.includes(resourceName)){
		var tmpIndex = ResourcesNamesArray.indexOf(resourceName);
		
		return resourcesCreateBonusResourceObject(resourceIndex, tmpBonus);
	}
	else {
		console.warn("Failed to add bonus resource: " + resourceName + " Resource type unknown.");
		return false;
	}	
}
function resourcesCreateBonusResourceObject(resourceIndex, tmpBonus = 1.0){
	var tmpResource = new ResourceBonusObject(resourceIndex);
	//tmpResource.typeIndex = resourceIndex;
	tmpResource.bonus = tmpBonus;
	return tmpResource;
}
function resourcesCreateEmptyStorageResourceByName(resourceName, tmpAmount = 0.0){
	if(ResourcesNamesArray.includes(resourceName)){
		var tmpIndex = ResourcesNamesArray.indexOf(resourceName);
		
		return resourcesCreateEmptyStorageResourceObject(resourceIndex, tmpAmount);
	}
	else {
		console.warn("Failed to add storage resource: " + resourceName + " Resource type unknown.");
		return false;
	}	
}
function resourcesCreateEmptyStorageResourceObject(resourceIndex, tmpAmount = 0.0){
	var tmpResource = new ResourceObject(resourceIndex);
	//tmpResource.typeIndex = resourceIndex;
	tmpResource.amount = tmpAmount;
	return tmpResource;
}























function resourcesInitResources(outputDocument){
	ResourcesNames = resourcesRecreateResourceNames();
	ResourcesDiscovered = resourcesRecreateDiscoveredResources();
	ResourcesNaturalResources = resourcesRecreateNaturalResources();
}


var ResourcesNames = [
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
var ResourcesDiscovered = [];
var ResourcesNaturalResources = [];
var ResourcesResourceProperties = {
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
	var tmpKeys = Object.keys(ResourcesResourceProperties);
	var tmpArray = [];
	for(var i = 0; i<tmpKeys.length; i++){
		tmpArray.push(tmpKeys[i]);
	}
	return tmpArray;
}
function resourcesRecreateDiscoveredResources(){
	var tmpKeys = Object.keys(ResourcesResourceProperties);
	var tmpArray = [];
	for(var i = 0; i<tmpKeys.length; i++){
		tmpArray.push(ResourcesResourceProperties[tmpKeys[i]][0]);
	}
	return tmpArray;
}
function resourcesRecreateNaturalResources(){
	var tmpKeys = Object.keys(ResourcesResourceProperties);
	var tmpArray = [];
	for(var i = 0; i<tmpKeys.length; i++){
		if(ResourcesResourceProperties[tmpKeys[i]][2] == 0.0) tmpArray.push(true);
		else tmpArray.push(false);
	}
	return tmpArray;
}

function resourcesGetNewResourcesObject(resourceAmount = "default"){
	var tmpObject = {};
	var tmpKeys = Object.keys(ResourcesResourceProperties);
	for(var i = 0; i < tmpKeys.length; i++){
		if(resourceAmount == "default") tmpObject[tmpKeys[i]] = ResourcesResourceProperties[tmpKeys[i]][2];
		else tmpObject[tmpKeys[i]] = resourceAmount;
	}
	return tmpObject;
}

/*
function resourcesCheckIfEnough(resourcesRequired, resourcesAvailable, multipler = 1){
	for(var i = 0; i< ResourcesNames.length; i++){
		if(resourcesRequired[ResourcesNames[i]]*multipler > resourcesAvailable[ResourcesNames[i]]) return false;
	}
	return true;
}

function resourcesGetHowManyTimesFitsAndBottleneck(resourcesRequired, resourcesAvailable){
	var tmpTimesFits = -1;
	var tmpBottleneck = "";
	
	for(var i = 0; i< ResourcesNames.length; i++){
		if(resourcesRequired[ResourcesNames[i]] <= 0) {
			//console.log(ResourcesNames[i] + " == " + resourcesRequired[ResourcesNames[i]] + ", skip");
			continue;
		}
		
		if(tmpTimesFits == -1 || (resourcesAvailable[ResourcesNames[i]] / resourcesRequired[ResourcesNames[i]]) < tmpTimesFits){
			tmpTimesFits = Math.floor(resourcesAvailable[ResourcesNames[i]] / resourcesRequired[ResourcesNames[i]]);
			tmpBottleneck = ResourcesNames[i];
		}
	}
	
	return [tmpTimesFits,tmpBottleneck];
}

function resourcesSumResources(resourcesAdded, resourcesAvailable, multiplier = 1){
	var tmpResources = resourcesGetNewResourcesObject(0);
	
	for(var i = 0; i< ResourcesNames.length; i++){
		tmpResources[ResourcesNames[i]] = resourcesAvailable[ResourcesNames[i]] + (resourcesAdded[ResourcesNames[i]] * multiplier);
	}
	
	return tmpResources;
}
function resourcesSubstractResources(resourcesSubstracted, resourcesAvailable, multiplier = 1){
	var tmpResources = resourcesGetNewResourcesObject(0);
	
	for(var i = 0; i< ResourcesNames.length; i++){
		tmpResources[ResourcesNames[i]] = resourcesAvailable[ResourcesNames[i]] - (resourcesSubstracted[ResourcesNames[i]] * multiplier);
	}
	
	return tmpResources;
}*/
