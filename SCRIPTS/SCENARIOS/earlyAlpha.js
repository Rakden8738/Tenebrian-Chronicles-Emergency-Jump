function scenario_earlyAlpha(){
	PlanetsArray = [];
	PlanetsArray.push(earlyAlpha_mainPlanet());
	
	
}
function earlyAlpha_mainPlanet(){
	var tmpPlanet = new PlanetObject();
	tmpPlanet.name = "Debugia";
	tmpPlanet.id = "10001";
	tmpPlanet.description = "This is debug planet for early alpha testing.";
	tmpPlanet.imagePath = "Terrestrial_1";
	tmpPlanet.type = PlanetTypes[1];
	tmpPlanet.subtype = PlanetSubtypes[1];
	tmpPlanet.atmosphere = PlanetAtmospheres[2];
	tmpPlanet.owner = "1";
	
	tmpPlanet.system = "Debug-7";
	tmpPlanet.system_id = "1001";
	
	tmpPlanet.orbitalPeroid = 365.256;
	
	tmpPlanet.naturalResources["Gravel"] = 2.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	return tmpPlanet;
}

