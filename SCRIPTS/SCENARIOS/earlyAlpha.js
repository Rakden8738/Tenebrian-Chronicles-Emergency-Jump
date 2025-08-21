function scenario_earlyAlpha(){
	SystemsArray = [];
	PlanetsArray = [];
	
	SystemsArray.push(earlyAlpha_Debug7());
	SystemsArray[SystemsArray.length - 1].arrayID = SystemsArray.length - 1;
	SystemsArray.push(earlyAlpha_Liberty());
	SystemsArray[SystemsArray.length - 1].arrayID = SystemsArray.length - 1;
	
	PlanetsArray.push(earlyAlpha_Debugia());
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	PlanetsArray.push(earlyAlpha_TestZone());
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	PlanetsArray.push(earlyAlpha_Mineralia());
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	PlanetsArray.push(earlyAlpha_Conquista());
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	PlanetsArray.push(earlyAlpha_Libertia());
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	SystemsArray[0].registerPlanet(PlanetsArray[0].id);
	SystemsArray[0].registerPlanet(PlanetsArray[1].id);
	SystemsArray[0].registerPlanet(PlanetsArray[2].id);
	SystemsArray[1].registerPlanet(PlanetsArray[3].id);
	SystemsArray[1].registerPlanet(PlanetsArray[4].id);
	
	SystemsArray[0].checkOwner();
	SystemsArray[1].checkOwner();
	
	DiplomacyFactionNames = diplomacyDefaultFactions();
	
	SystemsCurrentSystem = 0;
	PlanetsCurrentPlanet = 0;
}


function earlyAlpha_Debug7(){
	var tmpSystem = new SystemObject();
	tmpSystem.name = "Debug-7";
	tmpSystem.id = "1";
	tmpSystem.description = "This is system for early alpha testing.";
	
	tmpSystem.starType = StarTypes[3];
	tmpSystem.starSize = StarSizes[1];
	tmpSystem.starMass = 1.0;
	
	return tmpSystem;
}

function earlyAlpha_Liberty(){
	var tmpSystem = new SystemObject();
	tmpSystem.name = "Liberty";
	tmpSystem.id = "2";
	tmpSystem.description = "This is system for early alpha testing, with independent faction pressence.";
	
	tmpSystem.starType = StarTypes[2];
	tmpSystem.starSize = StarSizes[2];
	tmpSystem.starMass = 4.0;
	
	return tmpSystem;
}


function earlyAlpha_Debugia(){
	var tmpPlanet = new PlanetObject();
	tmpPlanet.name = "Daboogiea";
	tmpPlanet.id = "1";
	tmpPlanet.description = "This is debug planet for early alpha testing.";
	tmpPlanet.imagePath = "Terrestrial_1";
	tmpPlanet.type = PlanetTypes[1];
	tmpPlanet.subtype = PlanetSubtypes[1];
	tmpPlanet.atmosphere = PlanetAtmospheres[2];
	tmpPlanet.owner = 1;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.resourceStorage["Building materials"] = 50.0;
	tmpPlanet.resourceStorage["Ship parts"] = 20.0;
	tmpPlanet.resourceStorage["Fuel"] = 50.0;
	
	tmpPlanet.calculateHazard();
	
	return tmpPlanet;
}
function earlyAlpha_TestZone(){
	var tmpPlanet = new PlanetObject();
	tmpPlanet.name = "Test Zone 17";
	tmpPlanet.id = "2";
	tmpPlanet.description = "This is second debug planet for early alpha testing.";
	tmpPlanet.imagePath = "Desert_1";
	tmpPlanet.type = PlanetTypes[2];
	tmpPlanet.subtype = PlanetSubtypes[2];
	tmpPlanet.atmosphere = PlanetAtmospheres[3];
	tmpPlanet.owner = 1;
	
	tmpPlanet.orbitalDistance = 1.52368055;
	tmpPlanet.radius = 5674.0;
	tmpPlanet.averageTemperature = 5.0;
	tmpPlanet.gravity = 7.67;
	
	tmpPlanet.naturalResources["Gravel"] = 2.0;
	tmpPlanet.naturalResources["Stone"] = 2.5;
	tmpPlanet.naturalResources["Iron"] = 0.5;
	tmpPlanet.naturalResources["Copper"] = 1.5;
	tmpPlanet.naturalResources["Water"] = 0.25;
	
	tmpPlanet.naturalResources["Ship parts"] = 2.0;
	tmpPlanet.naturalResources["Steel"] = 1.5;
	
	tmpPlanet.resourceStorage["Building materials"] = 50.0;
	tmpPlanet.resourceStorage["Ship parts"] = 20.0;
	tmpPlanet.resourceStorage["Fuel"] = 50.0;
	
	tmpPlanet.calculateHazard();
	
	return tmpPlanet;
}
function earlyAlpha_Mineralia(){
	var tmpPlanet = new PlanetObject();
	tmpPlanet.name = "Minerallia";
	tmpPlanet.id = "3";
	tmpPlanet.description = "This is third debug planet for early alpha testing. Rich with minerals and unclaimed.";
	tmpPlanet.imagePath = "Desert_4";
	tmpPlanet.type = PlanetTypes[3];
	tmpPlanet.subtype = PlanetSubtypes[3];
	tmpPlanet.atmosphere = PlanetAtmospheres[1];
	tmpPlanet.owner = 0;
	
	tmpPlanet.orbitalDistance = 2.4;
	tmpPlanet.radius = 4674.0;
	tmpPlanet.averageTemperature = -57.0;
	tmpPlanet.gravity = 6.11;
	
	tmpPlanet.naturalResources["Gravel"] = 2.0;
	tmpPlanet.naturalResources["Stone"] = 3.5;
	tmpPlanet.naturalResources["Iron"] = 5.0;
	tmpPlanet.naturalResources["Copper"] = 4.0;
	
	tmpPlanet.naturalResources["Ship parts"] = 5.0;
	tmpPlanet.naturalResources["Fuel"] = 4.0;
	tmpPlanet.naturalResources["Steel"] = 1.5;
	
	tmpPlanet.calculateHazard();
	
	return tmpPlanet;
}
function earlyAlpha_Conquista(){
	var tmpPlanet = new PlanetObject();
	tmpPlanet.name = "Conquista";
	tmpPlanet.id = "4";
	tmpPlanet.description = "This is fourth debug planet for early alpha testing. Used for invasion.";
	tmpPlanet.imagePath = "Desert_5";
	tmpPlanet.type = PlanetTypes[2];
	tmpPlanet.subtype = PlanetSubtypes[2];
	tmpPlanet.atmosphere = PlanetAtmospheres[2];
	tmpPlanet.owner = 1;
	
	tmpPlanet.orbitalDistance = 0.856;
	tmpPlanet.radius = 7231.0;
	tmpPlanet.averageTemperature = 37.0;
	tmpPlanet.gravity = 9.67;
	
	tmpPlanet.naturalResources["Gravel"] = 5.0;
	tmpPlanet.naturalResources["Stone"] = 2.5;
	tmpPlanet.naturalResources["Sand"] = 2.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Copper"] = 2.0;
	tmpPlanet.naturalResources["Water"] = 0.1;
	
	tmpPlanet.resourceStorage["Building materials"] = 50.0;
	tmpPlanet.resourceStorage["Ship parts"] = 250.0;
	tmpPlanet.resourceStorage["Fuel"] = 100.0;
	
	tmpPlanet.calculateHazard();
	
	return tmpPlanet;
}
function earlyAlpha_Libertia(){
	var tmpPlanet = new PlanetObject();
	tmpPlanet.name = "Libertia";
	tmpPlanet.id = "5";
	tmpPlanet.description = "This is fifth debug planet for early alpha testing. Controlled by different faction.";
	tmpPlanet.imagePath = "Terrestrial_4";
	tmpPlanet.type = PlanetTypes[1];
	tmpPlanet.subtype = PlanetSubtypes[2];
	tmpPlanet.atmosphere = PlanetAtmospheres[3];
	tmpPlanet.owner = 3;
	
	tmpPlanet.orbitalDistance = 1.22;
	tmpPlanet.radius = 6674.0;
	tmpPlanet.averageTemperature = 20.0;
	tmpPlanet.gravity = 9.97;
	
	tmpPlanet.naturalResources["Gravel"] = 2.0;
	tmpPlanet.naturalResources["Stone"] = 2.5;
	tmpPlanet.naturalResources["Iron"] = 0.5;
	tmpPlanet.naturalResources["Copper"] = 1.5;
	tmpPlanet.naturalResources["Water"] = 0.25;
	
	tmpPlanet.naturalResources["Ship parts"] = 2.0;
	tmpPlanet.naturalResources["Steel"] = 1.5;
	
	tmpPlanet.resourceStorage["Building materials"] = 50.0;
	tmpPlanet.resourceStorage["Ship parts"] = 20.0;
	tmpPlanet.resourceStorage["Fuel"] = 50.0;
	
	tmpPlanet.calculateHazard();
	
	return tmpPlanet;
}

function earlyAlpha_debugListResources(){
	for(var i = 0; i < resourcesNames.length; i++)
	{
		if(PlanetsArray[0].naturalResources[resourcesNames[i]] != resourcesResourceProperties[resourcesNames[i]][2]) 
		{
			console.log(resourcesNames[i]+": "+PlanetsArray[0].naturalResources[resourcesNames[i]]);
		}
	}
}