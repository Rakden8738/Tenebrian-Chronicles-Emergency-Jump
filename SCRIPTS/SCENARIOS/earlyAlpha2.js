function scenario_earlyAlpha2(){
	SystemsArray = [];
	PlanetsArray = [];
	
	earlyAlpha_Systems();
	earlyAlpha_Planets();
	earlyAlpha_RegisterPlanets();
	earlyAlpha_CreateNetworks();
	
	DiplomacyFactionNames = diplomacyDefaultFactions();
	
	SystemsCurrentSystem = 0;
	PlanetsCurrentPlanet = 0;
	DiplomacyPlayerFaction = 1;
	PlanetsHomePlanetIndex = 0;
	SystemsHomeSystem = PlanetsArray[PlanetsHomePlanetIndex].system_id;
	
	//TimerDaysInYear = Math.round(PlanetsArray[0].orbitalPeroid);
}

//αβγδϵζηθικλμνξοπρστυϕχψω
//ΑΒΓΔϵΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥϕΧΨΩ

function earlyAlpha_Systems(){
	var tmpSystem;
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Debug-7";
	tmpSystem.id = "0";
	tmpSystem.description = "Player home system.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["Yellow"];
	tmpSystem.starSize = StarSizes["Star"];
	tmpSystem.starMass = 1.0;
	tmpSystem.position = [0.0,0.0,0.0];
	
	tmpSystem.asteroids["Silicon"] = 0.0;
	tmpSystem.asteroids["Carbon"] = 0.0;
	tmpSystem.asteroids["Ice"] = 0.1;
	tmpSystem.asteroids["Ore"] = 0.0;
	tmpSystem.asteroids["Iron"] = 1.0;
	tmpSystem.asteroids["Copper"] = 0.5;
	tmpSystem.asteroids["Transplutonics"] = 1.0;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Red Frontier";
	tmpSystem.id = "1";
	tmpSystem.description = "Distant system for testing map stretching.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["Red"];
	tmpSystem.starSize = StarSizes["Subgiant"];
	tmpSystem.starMass = 1.2;
	tmpSystem.position = [-10.6,-10.1,0.0];
	
	tmpSystem.asteroids["Silicon"] = 0.5;
	tmpSystem.asteroids["Carbon"] = 0.0;
	tmpSystem.asteroids["Ice"] = 0.0;
	tmpSystem.asteroids["Ore"] = 5.0;
	tmpSystem.asteroids["Iron"] = 3.0;
	tmpSystem.asteroids["Copper"] = 2.0;
	tmpSystem.asteroids["Transplutonics"] = 0.0;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Urist";
	tmpSystem.id = "2";
	tmpSystem.description = "Sector for testing shorter route to Paradisia.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["Blue"];
	tmpSystem.starSize = StarSizes["Giant"];
	tmpSystem.starMass = 2.3;
	tmpSystem.position = [3.0,1.0,-0.25];
	
	tmpSystem.asteroids["Silicon"] = 1.5;
	tmpSystem.asteroids["Carbon"] = 1.0;
	tmpSystem.asteroids["Ice"] = 0.0;
	tmpSystem.asteroids["Ore"] = 5.0;
	tmpSystem.asteroids["Iron"] = 1.0;
	tmpSystem.asteroids["Copper"] = 4.0;
	tmpSystem.asteroids["Transplutonics"] = 2.5;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Paradisia";
	tmpSystem.id = "3";
	tmpSystem.description = "Sector for testing colonization.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["Orange"];
	tmpSystem.starSize = StarSizes["Star"];
	tmpSystem.starMass = 0.9;
	tmpSystem.position = [7.0,0.0,1.0];
	
	tmpSystem.discovered = false;
	
	tmpSystem.asteroids["Silicon"] = 0.0;
	tmpSystem.asteroids["Carbon"] = 0.0;
	tmpSystem.asteroids["Ice"] = 0.0;
	tmpSystem.asteroids["Ore"] = 0.0;
	tmpSystem.asteroids["Iron"] = 0.0;
	tmpSystem.asteroids["Copper"] = 0.0;
	tmpSystem.asteroids["Transplutonics"] = 0.0;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Crossroads";
	tmpSystem.id = "4";
	tmpSystem.description = "Sector for testing shortcut to Aleph system and constructing gates.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["White"];
	tmpSystem.starSize = StarSizes["Dwarf"];
	tmpSystem.starMass = 0.77;
	tmpSystem.position = [5.0,-2.0,3.0];
	
	tmpSystem.asteroids["Silicon"] = 1.0;
	tmpSystem.asteroids["Carbon"] = 1.5;
	tmpSystem.asteroids["Ice"] = 3.0;
	tmpSystem.asteroids["Ore"] = 0.0;
	tmpSystem.asteroids["Iron"] = 2.0;
	tmpSystem.asteroids["Copper"] = 0.5;
	tmpSystem.asteroids["Transplutonics"] = 0.25;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Liberty";
	tmpSystem.id = "5";
	tmpSystem.description = "Sector with enemy faction.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["Yellow"];
	tmpSystem.starSize = StarSizes["Dwarf"];
	tmpSystem.starMass = 0.9;
	tmpSystem.position = [9.0,-5.0,5.0];
	
	tmpSystem.asteroids["Silicon"] = 0.0;
	tmpSystem.asteroids["Carbon"] = 3.0;
	tmpSystem.asteroids["Ice"] = 0.0;
	tmpSystem.asteroids["Ore"] = 3.0;
	tmpSystem.asteroids["Iron"] = 0.0;
	tmpSystem.asteroids["Copper"] = 0.0;
	tmpSystem.asteroids["Transplutonics"] = 0.5;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Paradise Lost";
	tmpSystem.id = "6";
	tmpSystem.description = "Sector for testing shortcuts within single network.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["Red"];
	tmpSystem.starSize = StarSizes["Dwarf"];
	tmpSystem.starMass = 0.41;
	tmpSystem.position = [4.0,-4.0,3.0];
	
	tmpSystem.asteroids["Silicon"] = 0.0;
	tmpSystem.asteroids["Carbon"] = 0.0;
	tmpSystem.asteroids["Ice"] = 0.5;
	tmpSystem.asteroids["Ore"] = 1.0;
	tmpSystem.asteroids["Iron"] = 4.0;
	tmpSystem.asteroids["Copper"] = 2.0;
	tmpSystem.asteroids["Transplutonics"] = 0.0;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Unknown Sector Alpha";
	tmpSystem.id = "7";
	tmpSystem.description = "First sector for testing no-network travel.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["Orange"];
	tmpSystem.starSize = StarSizes["Dwarf"];
	tmpSystem.starMass = 0.72;
	tmpSystem.position = [-2.0,-1.5,-2.0];
	
	tmpSystem.asteroids["Silicon"] = 0.0;
	tmpSystem.asteroids["Carbon"] = 0.0;
	tmpSystem.asteroids["Ice"] = 0.0;
	tmpSystem.asteroids["Ore"] = 1.0;
	tmpSystem.asteroids["Iron"] = 0.0;
	tmpSystem.asteroids["Copper"] = 6.0;
	tmpSystem.asteroids["Transplutonics"] = 2.0;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Unknown Sector Beta";
	tmpSystem.id = "8";
	tmpSystem.description = "Second sector for testing no-network travel.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["Orange"];
	tmpSystem.starSize = StarSizes["Subgiant"];
	tmpSystem.starMass = 1.18;
	tmpSystem.position = [-4.0,-1.0,-1.0];
	
	tmpSystem.asteroids["Silicon"] = 0.0;
	tmpSystem.asteroids["Carbon"] = 0.0;
	tmpSystem.asteroids["Ice"] = 0.0;
	tmpSystem.asteroids["Ore"] = 15.0;
	tmpSystem.asteroids["Iron"] = 10.0;
	tmpSystem.asteroids["Copper"] = 1.0;
	tmpSystem.asteroids["Transplutonics"] = 2.0;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Unknown Sector Gamma";
	tmpSystem.id = "9";
	tmpSystem.description = "Third sector for testing no-network travel.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["Red"];
	tmpSystem.starSize = StarSizes["Star"];
	tmpSystem.starMass = 0.93;
	tmpSystem.position = [10.3,-1.0,0.5];
	
	tmpSystem.asteroids["Silicon"] = 2.0;
	tmpSystem.asteroids["Carbon"] = 3.0;
	tmpSystem.asteroids["Ice"] = 0.25;
	tmpSystem.asteroids["Ore"] = 0.0;
	tmpSystem.asteroids["Iron"] = 0.0;
	tmpSystem.asteroids["Copper"] = 5.0;
	tmpSystem.asteroids["Transplutonics"] = 0.0;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Loki";
	tmpSystem.id = "10";
	tmpSystem.description = "Sector for testing different network travel.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["White"];
	tmpSystem.starSize = StarSizes["Dwarf"];
	tmpSystem.starMass = 1.27;
	tmpSystem.position = [0.0,2.0,0.0];
	
	tmpSystem.asteroids["Silicon"] = 5.0;
	tmpSystem.asteroids["Carbon"] = 0.0;
	tmpSystem.asteroids["Ice"] = 7.0;
	tmpSystem.asteroids["Ore"] = 3.0;
	tmpSystem.asteroids["Iron"] = 2.0;
	tmpSystem.asteroids["Copper"] = 0.0;
	tmpSystem.asteroids["Transplutonics"] = 0.0;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Ginnungagap";
	tmpSystem.id = "11";
	tmpSystem.description = "Sector for testing different network travel.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["Blue"];
	tmpSystem.starSize = StarSizes["Supergiant"];
	tmpSystem.starMass = 11.24;
	tmpSystem.position = [8.0,3.1,1.0];
	
	tmpSystem.asteroids["Silicon"] = 5.0;
	tmpSystem.asteroids["Carbon"] = 10.0;
	tmpSystem.asteroids["Ice"] = 30.0;
	tmpSystem.asteroids["Ore"] = 10.0;
	tmpSystem.asteroids["Iron"] = 20.0;
	tmpSystem.asteroids["Copper"] = 2.0;
	tmpSystem.asteroids["Transplutonics"] = 10.0;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "The Depths";
	tmpSystem.id = "12";
	tmpSystem.description = "Sector for testing different network travel.";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["Blue"];
	tmpSystem.starSize = StarSizes["Dwarf"];
	tmpSystem.starMass = 2.11;
	tmpSystem.position = [3.5,6.5,-4.5];
	
	tmpSystem.asteroids["Silicon"] = 5.0;
	tmpSystem.asteroids["Carbon"] = 10.0;
	tmpSystem.asteroids["Ice"] = 30.0;
	tmpSystem.asteroids["Ore"] = 10.0;
	tmpSystem.asteroids["Iron"] = 20.0;
	tmpSystem.asteroids["Copper"] = 2.0;
	tmpSystem.asteroids["Transplutonics"] = 10.0;
	
	SystemsArray.push(tmpSystem);
	
	
	tmpSystem = new SystemObject();
	tmpSystem.name = "Circus";
	tmpSystem.id = "13";
	tmpSystem.description = "Second undiscovered sector for testing purposes. ";
	tmpSystem.arrayID = SystemsArray.length;
	tmpSystem.starType = StarTypes["Brown"];
	tmpSystem.starSize = StarSizes["Hypergiant"];
	tmpSystem.starMass = 20.00;
	tmpSystem.position = [2.0,9.00,-13.0];
	
	tmpSystem.asteroids["Silicon"] = 5.0;
	tmpSystem.asteroids["Carbon"] = 10.0;
	tmpSystem.asteroids["Ice"] = 30.0;
	tmpSystem.asteroids["Ore"] = 10.0;
	tmpSystem.asteroids["Iron"] = 20.0;
	tmpSystem.asteroids["Copper"] = 2.0;
	tmpSystem.asteroids["Transplutonics"] = 10.0;
	
	SystemsArray.push(tmpSystem);
}
function earlyAlpha_Planets(){
	var tmpPlanet;
	
	//DEBUG-7
	//Yellow Star
	//Standard temp and age
	//TERRESTRIAL	Debugia
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Daboogiea";
	tmpPlanet.id = "0";
	tmpPlanet.description = "Crash site of T.E.S. Erebus. Capital planet of Erebian Autonomy.";
	tmpPlanet.imagePath = "Terrestrial_0s";
	tmpPlanet.type = PlanetTypes["Terrestrial"];
	tmpPlanet.conditions = [
		PlanetConditions["Mild climate"],
		PlanetConditions["Incompletely terraformed"],
		PlanetConditions["Habitable"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Oxygen"];
	tmpPlanet.owner = 1;
	tmpPlanet.system_id = "0";
	
	tmpPlanet.orbitalDistance = 1.06246;
	tmpPlanet.radius = 6371.0;
	tmpPlanet.averageTemperature = 15.0;
	tmpPlanet.gravity = 9.81;
	tmpPlanet.startingPosition = 0.272;
	
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
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	//DESERT		Test Zone 17
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Test Zone 17";
	tmpPlanet.id = "1";
	tmpPlanet.description = "Desert planet in Debug-7 system. Designated weapon testing area. Cold for a desert.";
	tmpPlanet.imagePath = "Desert_0s";
	tmpPlanet.type = PlanetTypes["Desert"];
	tmpPlanet.conditions = [
		PlanetConditions["Incompletely terraformed"],
		PlanetConditions["Wasteland"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Carbon dioxide"];
	tmpPlanet.owner = 1;
	tmpPlanet.system_id = "0";
	
	tmpPlanet.orbitalDistance = 1.52;
	tmpPlanet.radius = 5674.0;
	tmpPlanet.averageTemperature = 5.0;
	tmpPlanet.gravity = 7.67;
	tmpPlanet.startingPosition = 0.361;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//RED FRONTIER
	//Red Subgiant	//Old, barren
	//BARREN		Mineralia
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Minerallia";
	tmpPlanet.id = "2";
	tmpPlanet.description = "Mineral rich world that can become backbone of Erebian Autonomy's economy.";
	tmpPlanet.imagePath = "Barren_0s";
	tmpPlanet.type = PlanetTypes["Barren"];
	tmpPlanet.conditions = [
		PlanetConditions["No atmosphere"],
		PlanetConditions["Tectonic activity"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["None"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "1";
	
	tmpPlanet.orbitalDistance = 2.12;
	tmpPlanet.radius = 4674.0;
	tmpPlanet.averageTemperature = -43.0;
	tmpPlanet.gravity = 6.11;
	tmpPlanet.startingPosition = 0.471;
	
	tmpPlanet.naturalResources["Gravel"] = 2.0;
	tmpPlanet.naturalResources["Stone"] = 3.5;
	tmpPlanet.naturalResources["Iron"] = 5.0;
	tmpPlanet.naturalResources["Copper"] = 4.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	//URIST
	//Blue Giant	//Hot and young
	//LAVA			Akur
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Akur";
	tmpPlanet.id = "3";
	tmpPlanet.description = "Dwarf lava planet in Urist system. Very rich in minerals.";
	tmpPlanet.imagePath = "Lava_0s";
	tmpPlanet.type = PlanetTypes["Volcanic"];
	tmpPlanet.conditions = [
		PlanetConditions["High tectonic activity"],
		PlanetConditions["Extremely hot"],
		PlanetConditions["Low gravity"],
		PlanetConditions["Thin atmosphere"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Ash"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "2";
	
	tmpPlanet.orbitalDistance = 1.13;
	tmpPlanet.radius = 3674.0;
	tmpPlanet.averageTemperature = 173.2;
	tmpPlanet.gravity = 3.21;
	tmpPlanet.startingPosition = 0.221;
	
	tmpPlanet.naturalResources["Gravel"] = 2.0;
	tmpPlanet.naturalResources["Stone"] = 3.5;
	tmpPlanet.naturalResources["Iron"] = 5.0;
	tmpPlanet.naturalResources["Copper"] = 4.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	//GAS GIANT		Akir 
	//TO-DO
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Akir";
	tmpPlanet.id = "4";
	tmpPlanet.description = "Gas giant of the Urist system. Designated as reliable source of hydrogen.";
	tmpPlanet.imagePath = "GasGiant_0s";
	tmpPlanet.type = PlanetTypes["Gas Giant"];
	tmpPlanet.conditions = [
		PlanetConditions["High gravity"],
		PlanetConditions["Extreme weather"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Hydrogen"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "2";
	
	tmpPlanet.orbitalDistance = 1.92;
	tmpPlanet.radius = 15674.0;
	tmpPlanet.averageTemperature = -2.0;
	tmpPlanet.gravity = 17.67;
	tmpPlanet.startingPosition = 0.681;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	//CRYOVOLCANIC	Akam
	//TO-DO
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Akam";
	tmpPlanet.id = "5";
	tmpPlanet.description = "Dwarf planet of Urist system, located far between asteroid belts.";
	tmpPlanet.imagePath = "Cryovolcanic_0s";
	tmpPlanet.type = PlanetTypes["Cryovolcanic"];
	tmpPlanet.conditions = [
		PlanetConditions["Cold"],
		PlanetConditions["Tectonic activity"],
		PlanetConditions["Low gravity"],
		PlanetConditions["Thin atmosphere"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Ammonia"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "2";
	
	tmpPlanet.orbitalDistance = 3.71;
	tmpPlanet.radius = 4265.1;
	tmpPlanet.averageTemperature = -29.3;
	tmpPlanet.gravity = 3.91;
	tmpPlanet.startingPosition = 0.431;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
		
	//PARADISIA
	//Orange Star	//Standard temp and age
	//ARID			Igner
	//TO-DO
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Igner";
	tmpPlanet.id = "6";
	tmpPlanet.description = "Dry world of Paradisia system. Perfect for weapon manufacturing facilities.";
	tmpPlanet.imagePath = "Arid_0s";
	tmpPlanet.type = PlanetTypes["Arid"];
	tmpPlanet.conditions = [
		PlanetConditions["Hot"],
		PlanetConditions["Habitable"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Oxygen"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "3";
	
	tmpPlanet.orbitalDistance = 0.72;
	tmpPlanet.radius = 8217.0;
	tmpPlanet.averageTemperature = 47.0;
	tmpPlanet.gravity = 11.67;
	tmpPlanet.startingPosition = 0.097;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//WATER			Aquilia
	//TO-DO
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Aquilia";
	tmpPlanet.id = "7";
	tmpPlanet.description = "Oceans cover almost entire surface of this planet.";
	tmpPlanet.imagePath = "Water_1s";
	tmpPlanet.type = PlanetTypes["Ocean"];
	tmpPlanet.conditions = [
		PlanetConditions["Extreme weather"],
		PlanetConditions["Hot"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Oxygen"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "3";
	
	tmpPlanet.orbitalDistance = 0.97;
	tmpPlanet.radius = 8058.3;
	tmpPlanet.averageTemperature = 35.0;
	tmpPlanet.gravity = 10.11;
	tmpPlanet.startingPosition = 0.028;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	//TERRESTRIAL	Terria
	//TO-DO
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Terria";
	tmpPlanet.id = "8";
	tmpPlanet.description = "Habitable world in Paradisia star system.";
	tmpPlanet.imagePath = "Terrestrial_4s";
	tmpPlanet.type = PlanetTypes["Terrestrial"];
	tmpPlanet.conditions = [
		PlanetConditions["Mild climate"],
		PlanetConditions["Paradise world"],
		PlanetConditions["Habitable"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Oxygen"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "3";
	
	tmpPlanet.orbitalDistance = 1.23;
	tmpPlanet.radius = 6127.2;
	tmpPlanet.averageTemperature = 24.0;
	tmpPlanet.gravity = 9.56;
	tmpPlanet.startingPosition = 0.71;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	//GAS GIANT		Ventius
	//TO-DO
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Ventius";
	tmpPlanet.id = "9";
	tmpPlanet.description = "Gas giant of the Paradisia system.";
	tmpPlanet.imagePath = "GasGiant_5s";
	tmpPlanet.type = PlanetTypes["Gas Giant"];
	tmpPlanet.conditions = [
		PlanetConditions["Cold"],
		PlanetConditions["Slow rotation"],
		PlanetConditions["Extreme weather"],
		PlanetConditions["High gravity"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Methane"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "3";
	
	tmpPlanet.orbitalDistance = 3.47;
	tmpPlanet.radius = 21674.0;
	tmpPlanet.averageTemperature = -4.2;
	tmpPlanet.gravity = 21.37;
	tmpPlanet.startingPosition = 0.797;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//CROSSROADS
	//White Dwarf	//Cold and old
	//FROZEN		Traveller
	//TO-DO
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Traveller";
	tmpPlanet.id = "10";
	tmpPlanet.description = "Planet under control of independent faction.";
	tmpPlanet.imagePath = "Frozen_5s";
	tmpPlanet.type = PlanetTypes["Frozen"];
	tmpPlanet.conditions = [
		PlanetConditions["Cold"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Nitrogen"];
	tmpPlanet.owner = 3;
	tmpPlanet.system_id = "4";
	
	tmpPlanet.orbitalDistance = 1.72;
	tmpPlanet.radius = 4962.9;
	tmpPlanet.averageTemperature = -36.6;
	tmpPlanet.gravity = 6.91;
	tmpPlanet.startingPosition = 0.239;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//BARREN		Wanderer
	//TO-DO
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Wanderer";
	tmpPlanet.id = "11";
	tmpPlanet.description = "Barren but rich in minerals sector. Can be used as source of materials for constructing or reparing gate to Paradise Lost system.";
	tmpPlanet.imagePath = "Barren_5s";
	tmpPlanet.type = PlanetTypes["Barren"];
	tmpPlanet.conditions = [
		PlanetConditions["Thin atmosphere"],
		PlanetConditions["Cold"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Insignificant"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "4";
	
	tmpPlanet.orbitalDistance = 2.03;
	tmpPlanet.radius = 5299.1;
	tmpPlanet.averageTemperature = -57.8;
	tmpPlanet.gravity = 7.43;
	tmpPlanet.startingPosition = 0.561;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//LIBERTY
	//Yellow Dwarf	//enemy capital
	
	//METALLIC		Conquista
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Conquista";
	tmpPlanet.id = "12";
	tmpPlanet.description = "Second planet under Liber'atio's control.";
	tmpPlanet.imagePath = "Metallic_5s";
	tmpPlanet.type = PlanetTypes["Metallic"];
	tmpPlanet.conditions = [
		PlanetConditions["Wasteland"],
		PlanetConditions["Hot"],
		PlanetConditions["Dense atmosphere"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Carbon dioxide"];
	tmpPlanet.owner = 4;
	tmpPlanet.system_id = "5";
	
	tmpPlanet.orbitalDistance = 0.826;
	tmpPlanet.radius = 4891.4;
	tmpPlanet.averageTemperature = 54.0;
	tmpPlanet.gravity = 7.61;
	tmpPlanet.startingPosition = 0.142;
	
	tmpPlanet.naturalResources["Gravel"] = 5.0;
	tmpPlanet.naturalResources["Stone"] = 2.5;
	tmpPlanet.naturalResources["Sand"] = 2.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Copper"] = 2.0;
	tmpPlanet.naturalResources["Water"] = 0.1;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//TUNDRA	Libertia
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Libertia";
	tmpPlanet.id = "13";
	tmpPlanet.description = "Capital planet of Liber'atio Army faction control who also control local HUB station.";
	tmpPlanet.imagePath = "Tundra_0s";
	tmpPlanet.type = PlanetTypes["Tundra"];
	tmpPlanet.conditions = [
		PlanetConditions["Mild climate"],
		PlanetConditions["Habitable"],
		PlanetConditions["Cold"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Oxygen"];
	tmpPlanet.owner = 4;
	tmpPlanet.system_id = "5";
	
	tmpPlanet.orbitalDistance = 1.32;
	tmpPlanet.radius = 6427.0;
	tmpPlanet.averageTemperature = 4.0;
	tmpPlanet.gravity = 9.54;
	tmpPlanet.startingPosition = 0.645;
	
	tmpPlanet.naturalResources["Gravel"] = 2.0;
	tmpPlanet.naturalResources["Stone"] = 2.5;
	tmpPlanet.naturalResources["Iron"] = 0.5;
	tmpPlanet.naturalResources["Copper"] = 1.5;
	tmpPlanet.naturalResources["Water"] = 0.25;
	
	tmpPlanet.naturalResources["Ship parts"] = 2.0;
	tmpPlanet.naturalResources["Steel"] = 1.5;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//PARADISE LOST
	//Red Dwarf	//Low temp
	//METALLIC		O-01-45
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "O-01-45";
	tmpPlanet.id = "14";
	tmpPlanet.description = "ERROR: Contradiction of data detected. Proceed with caution.";
	tmpPlanet.imagePath = "Metallic_0s";
	tmpPlanet.type = PlanetTypes["Metallic"];
	tmpPlanet.conditions = [
		PlanetConditions["Irradiated"],
		PlanetConditions["Tidally locked"],
		PlanetConditions["Cold"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Unknown"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "6";
	
	tmpPlanet.orbitalDistance = 1.27;
	tmpPlanet.radius = 3951.8;
	tmpPlanet.averageTemperature = -14.1;
	tmpPlanet.gravity = 4.97;
	tmpPlanet.startingPosition = 0.276;
	
	tmpPlanet.naturalResources["Gravel"] = 0.50;
	tmpPlanet.naturalResources["Stone"] = 0.75;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Copper"] = 0.25;
	tmpPlanet.naturalResources["Water"] = 0.10;
	tmpPlanet.naturalResources["Ice"] = 5.00;
	
	tmpPlanet.naturalResources["Ship parts"] = 2.0;
	tmpPlanet.naturalResources["Steel"] = 1.5;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//FROZEN	T-03-46
	//TO-DO
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "T-03-46";
	tmpPlanet.id = "15";
	tmpPlanet.description = "My story is nowhere, unknown to all.";
	tmpPlanet.imagePath = "Frozen_9s";
	tmpPlanet.type = PlanetTypes["Frozen"];
	tmpPlanet.conditions = [
		PlanetConditions["Cold"],
		PlanetConditions["Extreme weather"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Nitrogen"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "6";
	
	tmpPlanet.orbitalDistance = 1.27;
	tmpPlanet.radius = 5274.1;
	tmpPlanet.averageTemperature = -9.2;
	tmpPlanet.gravity = 7.26;
	tmpPlanet.startingPosition = 0.776;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//UNKNOWN -2 1	//Orange Dwarf	//Average temp
	//DESERT		Unknown_-2_1_1
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "UNK Alpha-1";
	tmpPlanet.id = "16";
	tmpPlanet.description = "No information is available about this planet in the database.";
	tmpPlanet.imagePath = "Desert_7s";
	tmpPlanet.type = PlanetTypes["Desert"];
	tmpPlanet.conditions = [
		PlanetConditions["Extremely hot"],
		PlanetConditions["Slow rotation"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Dust"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "7";
	
	tmpPlanet.orbitalDistance = 0.56;
	tmpPlanet.radius = 3674.0;
	tmpPlanet.averageTemperature = 73.0;
	tmpPlanet.gravity = 4.27;
	tmpPlanet.startingPosition = 0.303;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//UNKNOWN -4 -1
	//Orange Subgiant	//Bunch of asteroids
	//no planets
	
	
	//UNKNOWN 10 -1
	//Red Star	//Average
	//ARID		Unknown_10_-1_1
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "UNK Gamma-1";
	tmpPlanet.id = "17";
	tmpPlanet.description = "No information is available about this planet in the database.";
	tmpPlanet.imagePath = "Arid_5s";
	tmpPlanet.type = PlanetTypes["Arid"];
	tmpPlanet.conditions = [
		PlanetConditions["Habitable"],
		PlanetConditions["Hot"],
		PlanetConditions["Wasteland"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Oxygen"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "9";
	
	tmpPlanet.orbitalDistance = 1.06;
	tmpPlanet.radius = 5621.0;
	tmpPlanet.averageTemperature = 39.1;
	tmpPlanet.gravity = 7.51;
	tmpPlanet.startingPosition = 0.892;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//LOKI
	//White Dwarf	//Cold
	//GAS GIANT		Fenrir
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Fenrir";
	tmpPlanet.id = "18";
	tmpPlanet.description = "Hot gas giant of the Loki system.";
	tmpPlanet.imagePath = "GasGiant_9s";
	tmpPlanet.type = PlanetTypes["Gas Giant"];
	tmpPlanet.conditions = [
		PlanetConditions["Extreme weather"],
		PlanetConditions["Hot"],
		PlanetConditions["Dense atmosphere"],
		PlanetConditions["High gravity"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Ethane"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "10";
	
	tmpPlanet.orbitalDistance = 0.53;
	tmpPlanet.radius = 17251.1;
	tmpPlanet.averageTemperature = 45.1;
	tmpPlanet.gravity = 16.27;
	tmpPlanet.startingPosition = 0.658;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	//OCEAN		Jörmungandr
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Jörmungandr";
	tmpPlanet.id = "19";
	tmpPlanet.description = "Large water world of Loki system. Partially frozen.";
	tmpPlanet.imagePath = "Water_6s";
	tmpPlanet.type = PlanetTypes["Ocean"];
	tmpPlanet.conditions = [
		PlanetConditions["Cold"],
		PlanetConditions["High gravity"],
		PlanetConditions["Dense atmosphere"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Oxygen"];
	tmpPlanet.owner = 5;
	tmpPlanet.system_id = "10";
	
	tmpPlanet.orbitalDistance = 0.91;
	tmpPlanet.radius = 10674.0;
	tmpPlanet.averageTemperature = 3.1;
	tmpPlanet.gravity = 12.67;
	tmpPlanet.startingPosition = 0.17;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//FROZEN	Hel
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Hel";
	tmpPlanet.id = "20";
	tmpPlanet.description = "Frozen world of Loki system. Claimed by hostile faction.";
	tmpPlanet.imagePath = "Frozen_1s";
	tmpPlanet.type = PlanetTypes["Frozen"];
	tmpPlanet.conditions = [
		PlanetConditions["Extreme cold"],
		PlanetConditions["Extreme weather"],
		PlanetConditions["Slow rotation"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Insignificant"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "10";
	
	tmpPlanet.orbitalDistance = 2.31;
	tmpPlanet.radius = 6011.1;
	tmpPlanet.averageTemperature = -79.2;
	tmpPlanet.gravity = 8.74;
	tmpPlanet.startingPosition = 0.806;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	//Ginnungagap
	//Blue Supergiant	//Cryo and lava
	//LAVA		Muspelheim	
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Muspelheimr";
	tmpPlanet.id = "21";
	tmpPlanet.description = "Hot unstable world in Ginnungagap system under Jotun control.";
	tmpPlanet.imagePath = "Lava_5s";
	tmpPlanet.type = PlanetTypes["Volcanic"];
	tmpPlanet.conditions = [
		PlanetConditions["Dense atmosphere"],
		PlanetConditions["Extremely hot"],
		PlanetConditions["High tectonic activity"],
		PlanetConditions["Radioactive"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Sulfur dioxide"];
	tmpPlanet.owner = 5;
	tmpPlanet.system_id = "11";
	
	tmpPlanet.orbitalDistance = 1.33;
	tmpPlanet.radius = 4616.0;
	tmpPlanet.averageTemperature = 271.3;
	tmpPlanet.gravity = 8.76;
	tmpPlanet.startingPosition = 0.866;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//JUNGLE	Miðgarðr 
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Miðgarðr ";
	tmpPlanet.id = "22";
	tmpPlanet.description = "Death World and capital of Jotun. Hostile fauna and flora detected and high concentration of microorganisms present in atmosphere. Extreme caution is advised.";
	tmpPlanet.imagePath = "Jungle_0s";
	tmpPlanet.type = PlanetTypes["Jungle"];
	tmpPlanet.conditions = [
		PlanetConditions["Death world"],
		PlanetConditions["Dangerous biosphere"],
		PlanetConditions["Hostile natives"],
		PlanetConditions["Hot"],
		PlanetConditions["Extreme weather"],
		PlanetConditions["High gravity"],
		PlanetConditions["Dense atmosphere"],
		PlanetConditions["Habitable"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Organic"];
	tmpPlanet.owner = 5;
	tmpPlanet.system_id = "11";
	
	tmpPlanet.orbitalDistance = 6.71;
	tmpPlanet.radius = 9886.2;
	tmpPlanet.averageTemperature = 34.8;
	tmpPlanet.gravity = 12.11;
	tmpPlanet.startingPosition = 0.379;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//CRYO		Niflheim
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Niflheimr";
	tmpPlanet.id = "23";
	tmpPlanet.description = "Cold unstable world in Ginnungagap system under Jotun control.";
	tmpPlanet.imagePath = "Cryovolcanic_5s";
	tmpPlanet.type = PlanetTypes["Cryovolcanic"];
	tmpPlanet.conditions = [
		PlanetConditions["Thin atmosphere"],
		PlanetConditions["Extreme cold"],
		PlanetConditions["High tectonic activity"],
		PlanetConditions["Shattered"],
		PlanetConditions["Low gravity"],
		PlanetConditions["Slow rotation"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Fluorine"];
	tmpPlanet.owner = 5;
	tmpPlanet.system_id = "11";
	
	tmpPlanet.orbitalDistance = 8.93;
	tmpPlanet.radius = 5674.0;
	tmpPlanet.averageTemperature = -143.0;
	tmpPlanet.gravity = 7.67;
	tmpPlanet.startingPosition = 0.241;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
	//The Deepth
	//Metallic		Adamantine
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Adamantine";
	tmpPlanet.id = "24";
	tmpPlanet.description = "Raw adamantine! Praise the miners!";
	tmpPlanet.imagePath = "Metallic_9s";
	tmpPlanet.type = PlanetTypes["Metallic"];
	tmpPlanet.conditions = [
		PlanetConditions["Cold"],
		PlanetConditions["Low gravity"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Nitrogen"];
	tmpPlanet.owner = 0;
	tmpPlanet.system_id = "12";
	
	tmpPlanet.orbitalDistance = 4.21;
	tmpPlanet.radius = 2137.0;
	tmpPlanet.averageTemperature = -3.0;
	tmpPlanet.gravity = 2.31;
	tmpPlanet.startingPosition = 0.165;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	//Circus
	//Barren	Slade
	tmpPlanet = new PlanetObject();
	
	tmpPlanet.name = "Slade";
	tmpPlanet.id = "25";
	tmpPlanet.description = "Horrifying screams come from the darkness below!";
	tmpPlanet.imagePath = "Barren_2s";
	tmpPlanet.type = PlanetTypes["Barren"];
	tmpPlanet.conditions = [
		PlanetConditions["Dense atmosphere"],
		PlanetConditions["Extremely hot"],
		PlanetConditions["Tidally locked"],
		PlanetConditions["Extreme weather"],
		PlanetConditions["Death world"],
		PlanetConditions["Dangerous biosphere"],
		PlanetConditions["Hostile natives"],
		PlanetConditions["Shattered"],
		PlanetConditions["Dead world"],
		PlanetConditions["High tectonic activity"],
		PlanetConditions["High gravity"],
		PlanetConditions["Radioactive"],
	];
	tmpPlanet.atmosphere = PlanetAtmospheres["Ash"];
	tmpPlanet.owner = 6;
	tmpPlanet.system_id = "13";
	
	tmpPlanet.orbitalDistance = 0.51;
	tmpPlanet.radius = 9153.0;
	tmpPlanet.averageTemperature = 666.0;
	tmpPlanet.gravity = 27.31;
	tmpPlanet.startingPosition = 0.666;
	
	tmpPlanet.naturalResources["Gravel"] = 1.0;
	tmpPlanet.naturalResources["Stone"] = 1.5;
	tmpPlanet.naturalResources["Iron"] = 1.0;
	tmpPlanet.naturalResources["Biomass"] = 1.5;
	tmpPlanet.naturalResources["Copper"] = 0.8;
	tmpPlanet.naturalResources["Water"] = 1.0;
	
	tmpPlanet.naturalResources["Building materials"] = 2.0;
	tmpPlanet.naturalResources["Ship parts"] = 0.1;
	tmpPlanet.naturalResources["Steel"] = 0.0;
	
	tmpPlanet.refreshPlanet();
	PlanetsArray.push(tmpPlanet);
	PlanetsArray[PlanetsArray.length - 1].arrayID = PlanetsArray.length - 1;
	
	
}
function earlyAlpha_RegisterPlanets(){
	for(var i = 0; i < PlanetsArray.length; i++){
		//console.log(PlanetsArray[i]);
		//console.log("Registering planet "+PlanetsArray[i].name+" in system: "+systemsGetSystemById(PlanetsArray[i].system_id).name);
		systemsGetSystemById(PlanetsArray[i].system_id).registerPlanet(PlanetsArray[i].id);
	}
	
	for(var i = 0; i < SystemsArray.length; i++){
		SystemsArray[i].refresh();
	}
}
function earlyAlpha_CreateNetworks(){
	networksLinkSystemsByName("Debug-7","Red Frontier","Da-Boog");
	networksLinkSystemsByName("Paradise Lost","Liberty","Da-Boog");
	
	networksLinkSystemsByName("Debug-7","Urist");
	networksLinkSystemsByName("Debug-7","Crossroads","Da-Boog");
	
	networksLinkSystemsByName("Urist","Paradisia","Da-Boog");
	
	networksLinkSystemsByName("Crossroads","Paradisia","Da-Bgoer");
	networksLinkSystemsByName("Crossroads","Liberty","Da-Boog");
	networksLinkSystemsByName("Loki","Ginnungagap","Ettin");
	
	networksLinkSystemsByName("The Depths","Urist");
	networksLinkSystemsByName("The Depths","Circus");
}

