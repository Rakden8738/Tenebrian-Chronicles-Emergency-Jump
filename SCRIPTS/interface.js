function connectionTest_interface(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"interface\" reporting issues.");
		return false;
	}
}

var InterfaceMainMenuIconPaths = [
	"RESOURCES/MAIN_INTERFACE/ICONS/Symbol_questionmark.png", 
	"RESOURCES/MAIN_INTERFACE/ICONS/Padlock.png",
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Planets.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/System.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Galaxy.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Networks.png",
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Fleets.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Research.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Objectives.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Government.png",
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Diplomacy.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Book.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Settings.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Home.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Settings.png",
];

var InterfaceMainMenuButtonImagesID = [
	"questionmark placeholder",
	"padlock placeholder",
	
	"mainInterfaceWindowPlanetsImage",
	"mainInterfaceWindowSystemsImage",
	"mainInterfaceWindowGalaxyImage",
	"mainInterfaceWindowNetworksImage",
	
	"mainInterfaceWindowFleetsImage",
	"mainInterfaceWindowResearchImage",
	"mainInterfaceWindowMissionsImage",
	"mainInterfaceWindowGovernmentImage",
	
	"mainInterfaceWindowDiplomacyImage",
	"mainInterfaceWindowArchivesImage",
	"mainInterfaceWindowSettingsImage",
	"mainInterfaceWindowHomeImage",
	"mainInterfaceWindowSettingsShortcutImage",
];

var InterfaceAutoRefreshMainMenu = false;
var InterfaceAutoRefreshSeconds = 5.0;
var InterfaceMainMenuDebugAccess = true;


function interfaceRefreshMenuButtons(outputDocument){
	
	if(InterfaceMainMenuDebugAccess){
		//planets
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[2]).src = InterfaceMainMenuIconPaths[2];
		//systems
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[3]).src = InterfaceMainMenuIconPaths[3];
		//galaxy
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[4]).src = InterfaceMainMenuIconPaths[4];
		//networks
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[5]).src = InterfaceMainMenuIconPaths[5];
		//fleets
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[6]).src = InterfaceMainMenuIconPaths[6];
		//research
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[7]).src = InterfaceMainMenuIconPaths[7];
		//missions
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[8]).src = InterfaceMainMenuIconPaths[8];
		//government
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[9]).src = InterfaceMainMenuIconPaths[9];
		//diplomacy
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[10]).src = InterfaceMainMenuIconPaths[10];
		//archive
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[11]).src = InterfaceMainMenuIconPaths[11];
		//settings
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[12]).src = InterfaceMainMenuIconPaths[12];
		
		//home
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[13]).src = InterfaceMainMenuIconPaths[13];
		//mini settings
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[14]).src = InterfaceMainMenuIconPaths[14];
	}
	
	
	if(InterfaceAutoRefreshMainMenu){
		setTimeout(() => {
			interfaceRefreshMenuButtons(outputDocument);
			},1000*InterfaceAutoRefreshSeconds);
	}
}




