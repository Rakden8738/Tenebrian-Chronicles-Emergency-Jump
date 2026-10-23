function connectionTest_interface(outputDocument) {
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"interface\" reporting issues.");
		return false;
	}
}

var InterfaceMainMenuID = "mainMenuWindow";
var PlanetOverviewMenuID = "planetOverviewMenuWindow";
var SystemOverviewMenuID = "systemOverviewMenuWindow";
var GalaxyMapMenuID = "galaxyMapMenuWindow";
var SettingsMenuID = "settingsMenuWindow";
var CreditsMenuID = "creditsMenuWindow";
var BuildMenuID = "planetBuildingMenuWindow";	

var InterfaceMainMenuIconPaths = [
	"RESOURCES/ICONS/Symbol_questionmark.png", 
	"RESOURCES/ICONS/Padlock.png",
	"RESOURCES/ICONS/PlanetsV2.png",
	"RESOURCES/ICONS/System.png",
	"RESOURCES/ICONS/Galaxy.png",
	"RESOURCES/ICONS/Networks.png",
	"RESOURCES/ICONS/Fleets.png",
	"RESOURCES/ICONS/Research.png",
	"RESOURCES/ICONS/Objectives.png",
	"RESOURCES/ICONS/Government.png",	//9
	
	"RESOURCES/ICONS/Diplomacy.png",
	"RESOURCES/ICONS/Book.png",
	"RESOURCES/ICONS/Settings2.png",
	"RESOURCES/ICONS/Home.png",
	"RESOURCES/ICONS/Settings2.png",		
	"RESOURCES/ICONS/Return_Arrow2.png",
	"RESOURCES/ICONS/Settings2.png",
	"RESOURCES/ICONS/Square ON.png",
	"RESOURCES/ICONS/Square OFF.png",
	"RESOURCES/MAIN_INTERFACE/Button_300px_v2_OFF.png",//19
	
	"RESOURCES/MAIN_INTERFACE/Button_300px_v2_ON.png",	
	"RESOURCES/ICONS/Arrow2_Down.png",
	"RESOURCES/ICONS/Arrow2_Up.png",
	"RESOURCES/ICONS/Arrow2_Left.png",
	"RESOURCES/ICONS/Arrow2_Right.png",
	"RESOURCES/ICONS/Arrow_Down.png",
	"RESOURCES/ICONS/Arrow_Up.png",
	"RESOURCES/ICONS/Arrow_Left.png",
	"RESOURCES/ICONS/Arrow_Right.png",	
	"RESOURCES/ICONS/Pause OFF_Small.png", //29
	
	"RESOURCES/ICONS/Pause ON_Small.png",
	"RESOURCES/ICONS/Play OFF_Small.png",
	"RESOURCES/ICONS/Play ON_Small.png",	
	"RESOURCES/ICONS/FastForward OFF_Small.png",
	"RESOURCES/ICONS/FastForward ON_Small.png",	
	"RESOURCES/ICONS/Star.png",	
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow_Up.png", 
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow3_Up.png", 
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow3_Right.png", 
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow3_Down.png", //39
	
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow3_Left.png",
	"RESOURCES/ICONS/Plus_Fancy.png",
	"RESOURCES/ICONS/Plus_Simple.png",
	"RESOURCES/ICONS/Minus_Fancy.png",
	"RESOURCES/ICONS/Minus_Simple.png",
	"RESOURCES/ICONS/Target_Fancy.png",
	"RESOURCES/ICONS/Target_Simple.png",
	"RESOURCES/ICONS/Crown_Fancy.png",
	"RESOURCES/ICONS/Crown_Simple.png",
	"RESOURCES/ICONS/Build.png",	//49
	
	"RESOURCES/ICONS/Power.png",
	"RESOURCES/MAIN_INTERFACE/Button_100x100.png",
	"RESOURCES/MAIN_INTERFACE/Button_200x100.png",
	"RESOURCES/MAIN_INTERFACE/Button_300x100.png",
	"RESOURCES/MAIN_INTERFACE/Button_400x100.png",
	"RESOURCES/MAIN_INTERFACE/Button_500x100.png",	//55
]; //InterfaceMainMenuIconPaths

var InterfaceMainMenuButtonImagesID = [
	"questionmark placeholder",
	"padlock placeholder",
	"mainMenuWindowPlanetsImage",
	"mainMenuWindowSystemsImage",
	"mainMenuWindowGalaxyImage",
	"mainMenuWindowNetworksImage",
	"mainMenuWindowFleetsImage",
	"mainMenuWindowResearchImage",
	"mainMenuWindowMissionsImage",
	"mainMenuWindowGovernmentImage",	//9
	
	"mainMenuWindowDiplomacyImage",	
	"mainMenuWindowArchivesImage",	
	"mainMenuWindowSettingsImage",
	"mainInterfaceWindowHomeImage",
	"mainInterfaceWindowSettingsShortcutButtonImage",
	"interfaceReturnButtonImage",
	"settingsMenuWindowHeaderImage",
	"gridButton300px",
	"planetOverviewMenuWindowHeaderImage",
	"planetOverviewInfoPanelHeaderSystemPreviousPlanetImage",	//19
	
	"planetOverviewInfoPanelHeaderSystemNextPlanetImage",
	"planetOverviewInfoPanelHeaderPlayerPreviousPlanetImage",
	"planetOverviewInfoPanelHeaderPlayerNextPlanetImage",
	"mainInterfaceWindowPauseGameTimeSwitchButtonImage",
	"mainInterfaceWindowPauseBonusTimeSwitchButtonImage",
	"systemOverviewMenuWindowHeaderImage",
	"systemOverviewNetworkPreviousSystemButtonImage",
	"systemOverviewNetworkNextSystemButtonImage",
	"systemOverviewPreviousSystemButtonImage",
	"systemOverviewNextSystemButtonImage", //29
	
	"creditsMenuWindowHeaderImage",	
	"galaxyMapMenuWindowHeaderImage",
	"galaxyMapTopArrowButtonImage",
	"galaxyMapLeftArrowButtonImage",
	"galaxyMapRightArrowButtonImage",
	"galaxyMapBottomArrowButtonImage",	
	"galaxyMapZoomInButtonImage",
	"galaxyMapZoomOutButtonImage",
	"galaxyMapReturnHomeButtonImage",
	"galaxyMapFocusTargetButtonImage",	//39
	
	"mainMenuWindowBuildingsImage",	
	"planetBuildingMenuWindowHeaderImage",
	"planetBuildingInfoPanelHeaderPreviousPlanetImage",
	"planetBuildingInfoPanelHeaderNextPlanetImage",
	"planetBuildingInfoPanelHeaderPlanetEnergyIconImage", 
	"interfaceButton1x1",
	"interfaceButton2x1",
	"interfaceButton3x1",
	"interfaceButton4x1",
	"interfaceButton5x1",	//49
]; //InterfaceMainMenuButtonImagesID

var InterfaceMainMenuButtonsID = [
	"mainMenuWindowPlanetsButton",
	"mainMenuWindowSystemsButton",
	"mainMenuWindowGalaxyButton",
	"mainMenuWindowNetworksButton",
	"mainMenuWindowBuildingsButton",
	"mainMenuWindowFleetsButton",
	"mainMenuWindowResearchButton",
	"mainMenuWindowMissionsButton",
	"mainMenuWindowGovernmentButton",
	"mainMenuWindowDiplomacyButton",
	
	"mainMenuWindowArchivesButton",	//10
	"mainInterfaceWindowHomeButton",
	"mainInterfaceWindowSettingsShortcutButton",
	"mainInterfaceWindowPauseGameTimeSwitchButton",
	"mainInterfaceWindowPauseBonusTimeSwitchButton",
	"interfaceReturnButton",
	"planetOverviewInfoPanelHeaderSystemPreviousPlanetButton",
	"planetOverviewInfoPanelHeaderSystemNextPlanetButton",
	"planetOverviewPlayerPreviousPlanetButton",
	"planetOverviewPlayerNextPlanetButton",
	
	"planetOverviewPlanetBuildingsButton",	//20
	"planetOverviewGoToSystemButton",
	"planetOverviewGoToHubButton",
	"planetOverviewPlanetRoutesButton",
	"planetOverviewResourcesPanelStorageButton",
	"planetOverviewResourcesPanelProductionButton",
	"planetOverviewResourcesPanelConsumptionButton",
	"planetOverviewResourcesPanelBalanceButton",
	"planetOverviewResourcesPanelResourcesButton",
	"systemOverviewShowMapButton",
	
	"systemOverviewNetworkPreviousSystemButton",	//30
	"systemOverviewNetworkNextSystemButton",
	"systemOverviewPreviousSystemButton",
	"systemOverviewNextSystemButton",
	"galaxyMapTopArrowButton",
	"galaxyMapLeftArrowButton",
	"galaxyMapRightArrowButton",
	"galaxyMapBottomArrowButton",
	"galaxyMapFocusTargetButton",
	"galaxyMapReturnHomeButton",
	
	"galaxyMapZoomInButton",		//40
	"galaxyMapZoomOutButton",
	"mainMenuWindowBuildingsButton",
	"planetBuildingInfoPanelHeaderPreviousPlanet",
	"planetBuildingInfoPanelHeaderNextPlanet",
	"planetBuildingGoToPlanetButton",
	"planetBuildingInfoPanelBulkBuildSettingInput",
	"planetBuildingInfoPanelAutoAssignSettingInput",
	"planetBuildingInfoPanelBuyMaxSettingInput",
	"planetBuildingInfoPanelDemolishLockSettingInput",
	
	"mainMenuWindowSettingsButton",	//50
	"settingsMenuOptionAnimatedMenuTabsChangeCheckbox",
	"settingsMenuOptionSkipIntroCheckbox",
	"settingsMenuOptionAutosaveCheckbox",
	"settingsMenuOptionGalaxyMapParallaxCheckbox",
	"settingsMenuOptionReplayIntroButton",
	"settingsMenuOptionSaveGameButton",
	"settingsMenuOptionExportSaveButton",
	"settingsMenuOptionImportSaveButton",
	"settingsMenuOptionWipeSaveButton",
	
	"settingsMenuOptionShowCreditsButton",	//60
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	
	"",
]; //InterfaceMainMenuButtonsID

//main interface refresh and init

var InterfaceAutoRefreshMainMenu = false;
var InterfaceAutoRefreshSeconds = 5.0;
var InterfaceMainMenuDebugAccess = false;
var InterfaceButtonsTurnOffClickEffectTimer = 0.20;

function interfaceRefreshMenuButtons(outputDocument) {
	interfaceInitMainInterface(outputDocument);
	
	if(InterfaceMainMenuDebugAccess) {
		
		//main menu images
		//planets
		interfaceInitPlanetOverviewMenu(outputDocument);
		//systems
		interfaceInitSystemOverviewMenu(outputDocument);
		//galaxy
		interfaceInitGalaxyMapMenu(outputDocument);
		//networks
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[5]).src = InterfaceMainMenuIconPaths[5];
		//buildings
		//outputDocument.getElementById(InterfaceMainMenuButtonImagesID[40]).src = InterfaceMainMenuIconPaths[49];
		interfaceInitBuildMenu(outputDocument);
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
		interfaceInitSettingsMenu(outputDocument);
	}
	else{
		//planets
		if(ProgressUnlockedMainMenuTabs["Planet"]) interfaceInitPlanetOverviewMenu(outputDocument);
		//systems
		if(ProgressUnlockedMainMenuTabs["System"]) interfaceInitSystemOverviewMenu(outputDocument);
		//galaxy
		if(ProgressUnlockedMainMenuTabs["Galaxy"]) interfaceInitGalaxyMapMenu(outputDocument);
		//networks
		if(ProgressUnlockedMainMenuTabs["Network"]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[5]).src = InterfaceMainMenuIconPaths[5];
		//buildings
		if(ProgressUnlockedMainMenuTabs["Build"]) interfaceInitBuildMenu(outputDocument);
		//fleets
		if(ProgressUnlockedMainMenuTabs["Fleet"]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[6]).src = InterfaceMainMenuIconPaths[6];
		//research
		if(ProgressUnlockedMainMenuTabs["Research"]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[7]).src = InterfaceMainMenuIconPaths[7];
		//missions
		if(ProgressUnlockedMainMenuTabs["Missions"]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[8]).src = InterfaceMainMenuIconPaths[8];
		//government
		if(ProgressUnlockedMainMenuTabs["Government"]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[9]).src = InterfaceMainMenuIconPaths[9];
		//diplomacy
		if(ProgressUnlockedMainMenuTabs["Diplomacy"]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[10]).src = InterfaceMainMenuIconPaths[10];
		//archive
		if(ProgressUnlockedMainMenuTabs["Archive"]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[11]).src = InterfaceMainMenuIconPaths[11];
		//settings
		if(ProgressUnlockedMainMenuTabs["Settings"]) interfaceInitSettingsMenu(outputDocument);
	}

	if(InterfaceAutoRefreshMainMenu) {
		setTimeout(() => {
			interfaceRefreshMenuButtons(outputDocument);
			},1000*InterfaceAutoRefreshSeconds);
	}
}
function interfaceInitMainInterface(outputDocument) {
		
	//home
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[13]).src = InterfaceMainMenuIconPaths[13];
	// outputDocument.getElementById(InterfaceMainMenuButtonImagesID[13]).onclick = function() { interfaceEnterMainMenu(outputDocument,InterfaceMainMenuID); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[11]).onclick = function() { interfaceEnterMainMenu(outputDocument,InterfaceMainMenuID); };
	
	//mini settings
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[14]).src = InterfaceMainMenuIconPaths[14];
	// outputDocument.getElementById(InterfaceMainMenuButtonImagesID[14]).onclick = function() { interfaceEnterElement(outputDocument,SettingsMenuID); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[12]).onclick = function() { interfaceEnterElement(outputDocument,SettingsMenuID); };
	
	//pause game
	if(TimerGamePaused) {
		// outputDocument.getElementById(InterfaceMainMenuButtonImagesID[23]).src = InterfaceMainMenuIconPaths[30];
		// outputDocument.getElementById(InterfaceMainMenuButtonImagesID[23]).checked = true;
		outputDocument.getElementById(InterfaceMainMenuButtonsID[13]).checked = true;
	}
	else {
		// outputDocument.getElementById(InterfaceMainMenuButtonImagesID[23]).src = InterfaceMainMenuIconPaths[29];
		// outputDocument.getElementById(InterfaceMainMenuButtonImagesID[23]).checked = false;
		outputDocument.getElementById(InterfaceMainMenuButtonsID[13]).checked = false;
	}
	// outputDocument.getElementById(InterfaceMainMenuButtonImagesID[23]).onclick = function() { timerSwitchGamePause(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[13]).onclick = function() { timerSwitchGamePause(outputDocument); };
	
	//pause accelerated time
	if(TimerAFKBonusActive) {
		// outputDocument.getElementById(InterfaceMainMenuButtonImagesID[24]).src = InterfaceMainMenuIconPaths[34];
		// outputDocument.getElementById(InterfaceMainMenuButtonImagesID[24]).checked = true;
		outputDocument.getElementById(InterfaceMainMenuButtonsID[14]).checked = true;
	}
	else {
		// outputDocument.getElementById(InterfaceMainMenuButtonImagesID[24]).src = InterfaceMainMenuIconPaths[33];
		// outputDocument.getElementById(InterfaceMainMenuButtonImagesID[24]).checked = false;
		outputDocument.getElementById(InterfaceMainMenuButtonsID[14]).checked = false;
	}
	// outputDocument.getElementById(InterfaceMainMenuButtonImagesID[24]).onclick = function() { timerSwitchAFKTimeBonus(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[14]).onclick = function() { timerSwitchAFKTimeBonus(outputDocument); };
	
	//all returns
	var tmpReturnButtonsArray = outputDocument.getElementsByClassName(InterfaceMainMenuButtonsID[15]);
	var tmpReturnButtonsImagesArray = outputDocument.getElementsByClassName(InterfaceMainMenuButtonImagesID[15]);
	for(var i = 0; i < tmpReturnButtonsArray.length; i++) {
		tmpReturnButtonsArray[i].onclick = function() { interfaceReturnFromElement(outputDocument,InterfaceMainMenuID); };
	}
	for(var i = 0; i < tmpReturnButtonsImagesArray.length; i++) {
		tmpReturnButtonsImagesArray[i].src = InterfaceMainMenuIconPaths[15];
	}
	//100px buttons if present
	var tmpArray = outputDocument.getElementsByClassName(InterfaceMainMenuButtonImagesID[45]);
	for(var i = 0; i < tmpArray.length; i++) {
		tmpArray[i].src = InterfaceMainMenuIconPaths[51];
	}
	//200px buttons if present
	var tmpArray = outputDocument.getElementsByClassName(InterfaceMainMenuButtonImagesID[46]);
	for(var i = 0; i < tmpArray.length; i++) {
		tmpArray[i].src = InterfaceMainMenuIconPaths[52];
	}
	//300px buttons if present
	var tmpArray = outputDocument.getElementsByClassName(InterfaceMainMenuButtonImagesID[47]);
	for(var i = 0; i < tmpArray.length; i++) {
		tmpArray[i].src = InterfaceMainMenuIconPaths[53];
	}
	//400px buttons if present
	var tmpArray = outputDocument.getElementsByClassName(InterfaceMainMenuButtonImagesID[48]);
	for(var i = 0; i < tmpArray.length; i++) {
		tmpArray[i].src = InterfaceMainMenuIconPaths[54];
	}
	//500px buttons if present
	var tmpArray = outputDocument.getElementsByClassName(InterfaceMainMenuButtonImagesID[49]);
	for(var i = 0; i < tmpArray.length; i++) {
		tmpArray[i].src = InterfaceMainMenuIconPaths[55];
	}
}
function interfaceInitPlanetOverviewMenu(outputDocument) {
	//planets in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[2]).src = InterfaceMainMenuIconPaths[2];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[0]).disabled = false;
	outputDocument.getElementById(InterfaceMainMenuButtonsID[0]).onclick = function() { interfaceEnterElement(outputDocument,PlanetOverviewMenuID); };
	
	//topbar image in settings menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[18]).src = InterfaceMainMenuIconPaths[2];
	
	//planet navigation buttons
		//in system
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[19]).src = InterfaceMainMenuIconPaths[23];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[16]).onclick = function() { interfacePlanetOverviewSystemPreviousPlanet(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[20]).src = InterfaceMainMenuIconPaths[24];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[17]).onclick = function() { interfacePlanetOverviewSystemNextPlanet(outputDocument); };
		//next player's
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[21]).src = InterfaceMainMenuIconPaths[27];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[18]).onclick = function() { interfacePlanetOverviewPlayerPreviousPlanet(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[22]).src = InterfaceMainMenuIconPaths[28];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[19]).onclick = function() { interfacePlanetOverviewPlayerNextPlanet(outputDocument); };
	
	//function buttons
	
	outputDocument.getElementById(InterfaceMainMenuButtonsID[20]).onclick = function() { interfacePlanetOverviewPlanetBuildings(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[21]).onclick = function() { interfacePlanetOverviewGoToSystem(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[22]).onclick = function() { interfacePlanetOverviewGoToHub(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[23]).onclick = function() { interfacePlanetOverviewPlanetRoutes(outputDocument); };
		
	//planet resource tabs
	outputDocument.getElementById(InterfaceMainMenuButtonsID[24]).onclick = function() { interfacePlanetOverviewChangeTab(outputDocument,ResourcePanelStorageTabID,InterfaceMainMenuButtonsID[24]); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[25]).onclick = function() { interfacePlanetOverviewChangeTab(outputDocument,ResourcePanelProductionTabID,InterfaceMainMenuButtonsID[25]); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[26]).onclick = function() { interfacePlanetOverviewChangeTab(outputDocument,ResourcePanelConsumptionTabID,InterfaceMainMenuButtonsID[26]); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[27]).onclick = function() { interfacePlanetOverviewChangeTab(outputDocument,ResourcePanelBalanceTabID,InterfaceMainMenuButtonsID[27]); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[28]).onclick = function() { interfacePlanetOverviewChangeTab(outputDocument,ResourcePanelNaturalResourcesTabID,InterfaceMainMenuButtonsID[28]); };


	interfaceRefreshPlanetOverview(outputDocument);
	
}
function interfaceInitSystemOverviewMenu(outputDocument) {
	//system in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[3]).src = InterfaceMainMenuIconPaths[3];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[1]).disabled = false;
	outputDocument.getElementById(InterfaceMainMenuButtonsID[1]).onclick = function() { interfaceEnterElement(outputDocument,SystemOverviewMenuID); };
	
	//topbar image in system overview menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[25]).src = InterfaceMainMenuIconPaths[3];
	
	//function buttons
	outputDocument.getElementById(InterfaceMainMenuButtonsID[29]).onclick = function() { interfaceSystemOverviewShowOnMap(outputDocument); };
	
	//system navigation buttons
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[26]).src = InterfaceMainMenuIconPaths[23];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[30]).onclick = function() { interfaceSystemOverviewNetworkPreviousSystem(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[27]).src = InterfaceMainMenuIconPaths[24];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[31]).onclick = function() { interfaceSystemOverviewNetworkNextSystem(outputDocument); };
	
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[28]).src = InterfaceMainMenuIconPaths[27];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[32]).onclick = function() { interfaceSystemOverviewDiscoveredPreviousSystem(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[29]).src = InterfaceMainMenuIconPaths[28];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[33]).onclick = function() { interfaceSystemOverviewDiscoveredNextSystem(outputDocument); };
	
	interfaceRefreshSystemOverview(outputDocument);
}
function interfaceInitGalaxyMapMenu(outputDocument){
	//galaxy in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[4]).src = InterfaceMainMenuIconPaths[4];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[2]).disabled = false;
	outputDocument.getElementById(InterfaceMainMenuButtonsID[2]).onclick = function() { interfaceEnterElement(outputDocument,GalaxyMapMenuID); };
	
	//topbar image in galaxy map menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[31]).src = InterfaceMainMenuIconPaths[4];
	
	//galaxy map navigation buttons
		//top
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[32]).src = InterfaceMainMenuIconPaths[37];//22
	outputDocument.getElementById(InterfaceMainMenuButtonsID[34]).onclick = function() { galaxyMoveGalaxyMapUp(outputDocument); };
		//right
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[34]).src = InterfaceMainMenuIconPaths[38];//24
	outputDocument.getElementById(InterfaceMainMenuButtonsID[36]).onclick = function() { galaxyMoveGalaxyMapRight(outputDocument); };
		//bottom
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[35]).src = InterfaceMainMenuIconPaths[39];//21
	outputDocument.getElementById(InterfaceMainMenuButtonsID[37]).onclick = function() { galaxyMoveGalaxyMapDown(outputDocument); };
		//left
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[33]).src = InterfaceMainMenuIconPaths[40];//23
	outputDocument.getElementById(InterfaceMainMenuButtonsID[35]).onclick = function() { galaxyMoveGalaxyMapLeft(outputDocument); };
	
		//zoom in
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[36]).src = InterfaceMainMenuIconPaths[41];//23
	outputDocument.getElementById(InterfaceMainMenuButtonsID[40]).onclick = function() { galaxyZoomMap(outputDocument, (+ 1), true); };
		//zoom out
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[37]).src = InterfaceMainMenuIconPaths[43];//23
	outputDocument.getElementById(InterfaceMainMenuButtonsID[41]).onclick = function() { galaxyZoomMap(outputDocument, (- 1), true); };
	
		//return home
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[38]).src = InterfaceMainMenuIconPaths[47];//23
	outputDocument.getElementById(InterfaceMainMenuButtonsID[39]).onclick = function() { galaxyResetCameraPosition(outputDocument); };
		//focus target
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[39]).src = InterfaceMainMenuIconPaths[45];//23
	outputDocument.getElementById(InterfaceMainMenuButtonsID[38]).onclick = function() { galaxyMapFocusOnSystemByIndex(outputDocument, GalaxyMapSelectedSystem);  };
	
	interfaceRefreshGalaxyMap(outputDocument);
}
function interfaceInitBuildMenu(outputDocument){
	//build in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[40]).src = InterfaceMainMenuIconPaths[49];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[42]).disabled = false;
	outputDocument.getElementById(InterfaceMainMenuButtonsID[42]).onclick = function() { interfaceEnterElement(outputDocument,BuildMenuID); };
	
	//topbar image in build menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[41]).src = InterfaceMainMenuIconPaths[49];
	
	//planet navigation buttons
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[42]).src = InterfaceMainMenuIconPaths[23];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[43]).onclick = function() { interfacePlanetBuildingsPreviousPlanet(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[43]).src = InterfaceMainMenuIconPaths[24];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[44]).onclick = function() { interfacePlanetBuildingsNextPlanet(outputDocument); };
	
	//main buttons
	outputDocument.getElementById(InterfaceMainMenuButtonsID[45]).onclick = function() { interfacePlanetBuildingGoToPlanet(outputDocument); };
	
	//left menu options
	
	outputDocument.getElementById(InterfaceMainMenuButtonsID[46]).onchange = function(){ interfaceBuildMenuBulkBuyChanged(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[46]).onkeyup = function(){ interfaceBuildMenuBulkBuyChanged(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[47]).onchange = function(){ interfaceBuildMenuAutoReassignStaff(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[47]).checked = BuildingsAutoAssignStaffEnabled;
	outputDocument.getElementById(InterfaceMainMenuButtonsID[48]).onchange = function(){ interfaceBuildMenuTryBuyMax(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[48]).checked = BuildingsTryBuyMaxEnabled;
	outputDocument.getElementById(InterfaceMainMenuButtonsID[49]).onchange = function(){ interfaceBuildMenuDemolishLock(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[49]).checked = BuildingsDemolishLockEnabled;
	
	
	interfaceBuildMenuInitPlanetTables(outputDocument);
	interfaceBuildMenuInitCategories(outputDocument);
	interfaceBuildMenuInitBuildingsList(outputDocument);
	
	interfaceRefreshBuildMenu(outputDocument);
}
function interfaceInitSettingsMenu(outputDocument) {
	//settings in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[12]).src = InterfaceMainMenuIconPaths[12];
	outputDocument.getElementById(InterfaceMainMenuButtonsID[50]).disabled = false;
	outputDocument.getElementById(InterfaceMainMenuButtonsID[50]).onclick = function() { interfaceEnterElement(outputDocument,SettingsMenuID); };
	
	//topbar image in settings menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[16]).src = InterfaceMainMenuIconPaths[16];
	
	//settings buttons
	outputDocument.getElementById(InterfaceMainMenuButtonsID[51]).onclick = function() { interfaceSettingsSwitchFastMenuChange(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[52]).onclick = function() { interfaceSettingsSwitchIntroSkip(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[53]).onclick = function() { interfaceSettingsSwitchAutosave(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[54]).onclick = function() { interfaceSettingsSwitchGalaxyMapParralax(outputDocument); };
	
	outputDocument.getElementById(InterfaceMainMenuButtonsID[55]).onclick = function() { animationDisplayIntro(outputDocument);	};
	
	outputDocument.getElementById(InterfaceMainMenuButtonsID[56]).onclick = function() { saveSaveGame(); };
	
	outputDocument.getElementById(InterfaceMainMenuButtonsID[57]).onclick = function() { saveExportSave(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[58]).onclick = function() { loadImportSave(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[59]).onclick = function() { saveLoadWipeSave(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonsID[60]).onclick = function() { interfaceEnterElement(outputDocument,CreditsMenuID); };
	
	//buttons on/off
	outputDocument.getElementById(InterfaceMainMenuButtonsID[51]).checked = SettingsInstantMenuNavigation;
	outputDocument.getElementById(InterfaceMainMenuButtonsID[52]).checked = ProgressIntroDisplayedOrSkipped;
	outputDocument.getElementById(InterfaceMainMenuButtonsID[53]).checked = SettingSaveAutosave;
	outputDocument.getElementById(InterfaceMainMenuButtonsID[54]).checked = GalaxyMapPerspectiveEnabled;
	
	//other
	
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[30]).src = InterfaceMainMenuIconPaths[35];
}


var BuildingMenuCategoriesContainerId = "planetBuildingMenuBuildingCategoriesContainer";
var BuildingMenuSingleCategoryContainerClass = "planetBuildingElementsContainer planetBuildingCategoryElement";
var BuildingMenuSingleCategoryInputClass = "interfaceInputCheckbox planetBuildingCategoryCheckbox";
var BuildingMenuSingleCategoryInputIdPrefix = "planetBuildingCategoryCheckbox_";
var BuildingMenuSingleCategoryNameClass = "interfaceText planetBuildingCategoryName";

function interfaceBuildMenuInitCategories(outputDocument){
	var tmpElement = outputDocument.getElementById(BuildingMenuCategoriesContainerId);
	tmpElement.innerHTML = "";
	
	for(let i = 0; i < BuildingCategories.length; i++){
		//let tmpI = i;
		var tmpCategory = outputDocument.createElement("div");
		tmpCategory.className = BuildingMenuSingleCategoryContainerClass;
		
		var tmpInput = outputDocument.createElement("input");
		tmpInput.type = "checkbox";
		tmpInput.className = BuildingMenuSingleCategoryInputClass;
		tmpInput.id = BuildingMenuSingleCategoryInputIdPrefix + i;
		tmpInput.onchange = function(){interfaceBuildMenuToggleCategory(outputDocument, i);};
		if(BuildingCategoriesEnabled[i]) tmpInput.checked = true;
		
		var tmpName = outputDocument.createElement("span");
		tmpName.className = BuildingMenuSingleCategoryNameClass;
		tmpName.innerHTML = BuildingCategories[i];
		
		tmpCategory.append(tmpInput);
		tmpCategory.append(tmpName);
		
		tmpElement.append(tmpCategory);
	}
}

var BuildingMenuLeftPanelRequiredResourcesTableClass = "interfaceTable planetBuildingInfoPanelResourceListTable";
var BuildingMenuLeftPanelRequiredResourcesTableBodyClass = "interfaceTableBody";
var BuildingMenuLeftPanelTableHeaderRowClass = "interfaceTableRow";
var BuildingMenuLeftPanelTableRowClass = "interfaceTableRow planetBuildingInfoPanelResourceListTableHeaderRow";
var BuildingMenuLeftPanelTableHeaderCellClass = "interfaceTableCell planetBuildingInfoPanelResourceListTableHeaderCell";

var BuildingMenuLeftPanelTableHiddenRowClass = " planetBuildingInfoPanelResourceListTableHiddenRow";
var BuildingMenuLeftPanelTableGoingPositiveRowClass = " planetBuildingInfoPanelResourceListTableRowGoingPositive";
var BuildingMenuLeftPanelTableGoingNegativeRowClass = " planetBuildingInfoPanelResourceListTableRowGoingNegative";

var BuildingMenuLeftPanelTableResourceNameCellClass = "interfaceTableCell planetBuildingInfoPanelResourceNameCell";
var BuildingMenuLeftPanelTableResourceAmountCellClass = "interfaceTableCell planetBuildingInfoPanelResourceAmountCell";
var BuildingMenuLeftPanelTableResourceProductionConsumptionCellClass = "interfaceTableCell planetBuildingInfoPanelResourceProductionConsumptionCell";

var BuildingMenuLeftPanelTableResourceImportExportCellClass = " planetBuildingInfoPanelResourceImportExportCell";
var BuildingMenuLeftPanelTableResourceChangeCellClass = " planetBuildingInfoPanelResourceChangeCell";
var BuildingMenuLeftPanelTableResourceResultCellClass = " planetBuildingInfoPanelResourceResultCell";

var BuildingMenuLeftPanelTableResourcePositiveCellClass = " planetBuildingInfoPanelResourcePositiveCell";
var BuildingMenuLeftPanelTableResourceNeutralCellClass = " planetBuildingInfoPanelResourceNeutralCell";
var BuildingMenuLeftPanelTableResourceNegativeCellClass = " planetBuildingInfoPanelResourceNegativeCell";
// var BuildingMenuLeftPanelTableResourceImportCellClass = " planetBuildingInfoPanelResourceImportCell";
// var BuildingMenuLeftPanelTableResourceExportCellClass = " planetBuildingInfoPanelResourceExportCell";

var BuildingMenuLeftPanelTableSpacingAfterNameCellClass = "interfaceTableCell planetBuildingInfoPanelResourceAfterNameSpacing";
var BuildingMenuLeftPanelTableSpacingBetweenValuesCellClass = "interfaceTableCell planetBuildingInfoPanelResourceBetweenValuesSpacing";

var BuildingMenuLeftPanelTableResourceHeaderTextClass = "interfaceText planetBuildingInfoPanelResourceListTableHeaderText";
var BuildingMenuLeftPanelTableResourceNameTextClass = "interfaceText planetBuildingInfoPanelResourceNameText";
var BuildingMenuLeftPanelTableResourceAmountTextClass = "interfaceText planetBuildingInfoPanelResourceAmountText";
var BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass = "interfaceText planetBuildingInfoPanelResourceProductionConsumptionText";

var BuildingMenuLeftPanelTableResourceImportExportTextClass = " planetBuildingInfoPanelResourceImportExportText";
var BuildingMenuLeftPanelTableResourceChangeTextClass = " planetBuildingInfoPanelResourceChangeText";
var BuildingMenuLeftPanelTableResourceResultTextClass = " planetBuildingInfoPanelResourceResultText";

var BuildingMenuLeftPanelTableResourcePositiveTextClass = " planetBuildingInfoPanelResourcePositiveText";
var BuildingMenuLeftPanelTableResourceNeutralTextClass = " planetBuildingInfoPanelResourceNeutralText";
var BuildingMenuLeftPanelTableResourceNegativeTextClass = " planetBuildingInfoPanelResourceNegativeText";
// var BuildingMenuLeftPanelTableResourceImportTextClass = "interfaceText planetBuildingInfoPanelResourceImportText";
// var BuildingMenuLeftPanelTableResourceExportTextClass = "interfaceText planetBuildingInfoPanelResourceExportText";

var BuildingMenuLeftPanelRequiredResourcesTableID = "planetBuildingInfoPanelRequiredResourcesTable";
var BuildingMenuLeftPanelRequiredResourcesTableBodyID = "planetBuildingInfoPanelRequiredResourcesTableBody";
var BuildingMenuLeftPanelRequiredResourcesTableHeaderID = "planetBuildingInfoPanelRequiredResourcesTableHeader";
var BuildingMenuLeftPanelRequiredResourcesTableRowIdPrefix = "planetBuildingInfoPanelRequiredResourcesTableRow_";
var BuildingMenuLeftPanelRequiredResourcesTableResourceNameTextIdPrefix = "planetBuildingInfoPanelRequiredResourceNameText_";
var BuildingMenuLeftPanelRequiredResourcesTableResourceAmountTextIdPrefix = "planetBuildingInfoPanelRequiredResourceAmountText_";
var BuildingMenuLeftPanelRequiredResourcesTableResourceChangeTextIdPrefix = "planetBuildingInfoPanelRequiredResourceChangeText_";
var BuildingMenuLeftPanelRequiredResourcesTableResourceResultTextIdPrefix = "planetBuildingInfoPanelRequiredResourceResultText_";

var BuildingMenuLeftPanelProducedResourcesTableID = "planetBuildingInfoPanelProductionChangesTable";
var BuildingMenuLeftPanelProducedResourcesTableBodyID = "planetBuildingInfoPanelProductionChangesTableBody";
var BuildingMenuLeftPanelProducedResourcesTableHeaderID = "planetBuildingInfoPanelProducedResourcesTableHeader";
var BuildingMenuLeftPanelProducedResourcesTableRowIdPrefix = "planetBuildingInfoPanelProductionChangesTableRow_";
var BuildingMenuLeftPanelProducedResourcesTableResourceNameTextIdPrefix = "planetBuildingInfoPanelProducedResourceNameText_";
var BuildingMenuLeftPanelProducedResourcesTableResourceAmountTextIdPrefix = "planetBuildingInfoPanelProducedResourceAmountText_";
var BuildingMenuLeftPanelProducedResourcesTableResourceChangeTextIdPrefix = "planetBuildingInfoPanelProducedResourceChangeText_";
var BuildingMenuLeftPanelProducedResourcesTableResourceResultTextIdPrefix = "planetBuildingInfoPanelProducedResourceResultText_";

var BuildingMenuLeftPanelConsumedResourcesTableID = "planetBuildingInfoPanelConsumptionChangesTable";
var BuildingMenuLeftPanelConsumedResourcesTableBodyID = "planetBuildingInfoPanelConsumptionChangesTableBody";
var BuildingMenuLeftPanelConsumedResourcesTableHeaderID = "planetBuildingInfoPanelConsumedResourcesTableHeader";
var BuildingMenuLeftPanelConsumedResourcesTableRowIdPrefix = "planetBuildingInfoPanelConsumptionChangesTableRow_";
var BuildingMenuLeftPanelConsumedResourcesTableResourceNameTextIdPrefix = "planetBuildingInfoPanelConsumedResourceNameText_";
var BuildingMenuLeftPanelConsumedResourcesTableResourceAmountTextIdPrefix = "planetBuildingInfoPanelConsumedResourceAmountText_";
var BuildingMenuLeftPanelConsumedResourcesTableResourceChangeTextIdPrefix = "planetBuildingInfoPanelConsumedResourceChangeText_";
var BuildingMenuLeftPanelConsumedResourcesTableResourceResultTextIdPrefix = "planetBuildingInfoPanelConsumedResourceResultText_";

var BuildingMenuLeftPanelAvailableResourcesTableID = "planetBuildingInfoPanelAvailableResourcesTable";
var BuildingMenuLeftPanelAvailableResourcesTableBodyID = "planetBuildingInfoPanelAvailableResourcesTableBody";
var BuildingMenuLeftPanelAvailableResourcesTableRowIdPrefix = "planetBuildingInfoPanelAvailableResourcesTableRow_";
var BuildingMenuLeftPanelAvailableResourcesTableResourceNameTextIdPrefix = "planetBuildingInfoPanelAvailableResourceNameText_";
var BuildingMenuLeftPanelAvailableResourcesTableResourceAmountTextIdPrefix = "planetBuildingInfoPanelAvailableResourceAmountText_";
var BuildingMenuLeftPanelAvailableResourcesTableResourceProductionConsumptionTextIdPrefix = "planetBuildingInfoPanelAvailableResourceProductionConsumptionText_";
var BuildingMenuLeftPanelAvailableResourcesTableResourceImportExportTextIdPrefix = "planetBuildingInfoPanelAvailableResourceImportExportText_";

function interfaceBuildMenuInitPlanetTables(outputDocument){
	var tmpRequiredResourcesTableBody = outputDocument.getElementById(BuildingMenuLeftPanelRequiredResourcesTableBodyID);
	var tmpProducedResourcesTableBody = outputDocument.getElementById(BuildingMenuLeftPanelProducedResourcesTableBodyID);
	var tmpConsumedResourcesTableBody = outputDocument.getElementById(BuildingMenuLeftPanelConsumedResourcesTableBodyID);
	var tmpAvailableResourcesTableBody = outputDocument.getElementById(BuildingMenuLeftPanelAvailableResourcesTableBodyID);
	
	//return;
	tmpRequiredResourcesTableBody.innerHTML = "";
	tmpProducedResourcesTableBody.innerHTML = "";
	tmpConsumedResourcesTableBody.innerHTML = "";
	tmpAvailableResourcesTableBody.innerHTML = "";
	
	//recreate error headers
	var tmpRequiredResourcesTableHeader = outputDocument.createElement("tr");
	var tmpProducedResourcesTableHeader = outputDocument.createElement("tr");
	var tmpConsumedResourcesTableHeader = outputDocument.createElement("tr");
	
	tmpRequiredResourcesTableHeader.className = BuildingMenuLeftPanelTableHeaderRowClass + BuildingMenuLeftPanelTableHiddenRowClass;
	tmpRequiredResourcesTableHeader.id = BuildingMenuLeftPanelRequiredResourcesTableHeaderID;
	tmpProducedResourcesTableHeader.className = BuildingMenuLeftPanelTableHeaderRowClass + BuildingMenuLeftPanelTableHiddenRowClass;
	tmpProducedResourcesTableHeader.id = BuildingMenuLeftPanelProducedResourcesTableHeaderID;
	tmpConsumedResourcesTableHeader.className = BuildingMenuLeftPanelTableHeaderRowClass + BuildingMenuLeftPanelTableHiddenRowClass;
	tmpConsumedResourcesTableHeader.id = BuildingMenuLeftPanelConsumedResourcesTableHeaderID;
	
	tmpRequiredResourcesTableBody.append(tmpRequiredResourcesTableHeader);
	tmpProducedResourcesTableBody.append(tmpProducedResourcesTableHeader);
	tmpConsumedResourcesTableBody.append(tmpConsumedResourcesTableHeader);
	
	var tmpRequiredResourcesTableHeaderCell = outputDocument.createElement("td");
	var tmpProducedResourcesTableHeaderCell = outputDocument.createElement("td");
	var tmpConsumedResourcesTableHeaderCell = outputDocument.createElement("td");
	tmpRequiredResourcesTableHeaderCell.className = BuildingMenuLeftPanelTableHeaderCellClass;
	tmpRequiredResourcesTableHeaderCell.colSpan = 7;
	tmpProducedResourcesTableHeaderCell.className = BuildingMenuLeftPanelTableHeaderCellClass;
	tmpProducedResourcesTableHeaderCell.colSpan = 7;
	tmpConsumedResourcesTableHeaderCell.className = BuildingMenuLeftPanelTableHeaderCellClass;
	tmpConsumedResourcesTableHeaderCell.colSpan = 7;
	
	tmpRequiredResourcesTableHeader.append(tmpRequiredResourcesTableHeaderCell);
	tmpProducedResourcesTableHeader.append(tmpProducedResourcesTableHeaderCell);
	tmpConsumedResourcesTableHeader.append(tmpConsumedResourcesTableHeaderCell);
	
	var tmpRequiredResourcesTableHeaderText = outputDocument.createElement("span");
	var tmpProducedResourcesTableHeaderText = outputDocument.createElement("span");
	var tmpConsumedResourcesTableHeaderText = outputDocument.createElement("span");
	
	tmpRequiredResourcesTableHeaderText.className = BuildingMenuLeftPanelTableResourceHeaderTextClass;
	tmpRequiredResourcesTableHeaderText.innerHTML = "No change to storage";
	tmpProducedResourcesTableHeaderText.className = BuildingMenuLeftPanelTableResourceHeaderTextClass;
	tmpProducedResourcesTableHeaderText.innerHTML = "Nothing produced";
	tmpConsumedResourcesTableHeaderText.className = BuildingMenuLeftPanelTableResourceHeaderTextClass;
	tmpConsumedResourcesTableHeaderText.innerHTML = "Nothing consumed";
	
	tmpRequiredResourcesTableHeaderCell.append(tmpRequiredResourcesTableHeaderText);
	tmpProducedResourcesTableHeaderCell.append(tmpProducedResourcesTableHeaderText);
	tmpConsumedResourcesTableHeaderCell.append(tmpConsumedResourcesTableHeaderText);
	
	for(let i = 0; i < ResourcesArray.length; i++){
		
		let tmpIndex = i;
		if(ResourceNamesDisplayInAlphabeticalOrder){
			tmpIndex = ResourcesNamesSortedArrayIndexes[i];
		}
		
		//rows
		let tmpRequiredResourcesTableRow = outputDocument.createElement("tr");
		tmpRequiredResourcesTableRow.className = BuildingMenuLeftPanelTableRowClass;
		//if(!ResourcesArray[tmpIndex].discovered) tmpRequiredResourcesTableRow.className += BuildingMenuLeftPanelTableHiddenRowClass;
		tmpRequiredResourcesTableRow.id = BuildingMenuLeftPanelRequiredResourcesTableRowIdPrefix + tmpIndex;
		tmpRequiredResourcesTableBody.append(tmpRequiredResourcesTableRow);
		
		let tmpRequiredResourcesNameCell = outputDocument.createElement("td");
		tmpRequiredResourcesNameCell.className = BuildingMenuLeftPanelTableResourceNameCellClass;
		let tmpRequiredResourcesNameCellText = outputDocument.createElement("span");
		tmpRequiredResourcesNameCellText.className = BuildingMenuLeftPanelTableResourceNameTextClass;
		tmpRequiredResourcesNameCellText.id = BuildingMenuLeftPanelRequiredResourcesTableResourceNameTextIdPrefix + tmpIndex;
		tmpRequiredResourcesNameCellText.innerHTML = ResourcesArray[tmpIndex].name;
		tmpRequiredResourcesNameCell.append(tmpRequiredResourcesNameCellText);
		let tmpRequiredResourcesSpacingCell = outputDocument.createElement("td");
		tmpRequiredResourcesSpacingCell.className = BuildingMenuLeftPanelTableSpacingAfterNameCellClass;
		let tmpRequiredResourcesAmountCell = outputDocument.createElement("td");
		tmpRequiredResourcesAmountCell.className = BuildingMenuLeftPanelTableResourceAmountCellClass;
		let tmpRequiredResourcesAmountCellText = outputDocument.createElement("span");
		tmpRequiredResourcesAmountCellText.className = BuildingMenuLeftPanelTableResourceAmountTextClass;
		tmpRequiredResourcesAmountCellText.id = BuildingMenuLeftPanelRequiredResourcesTableResourceAmountTextIdPrefix + tmpIndex;
		tmpRequiredResourcesAmountCellText.innerHTML = "0.0";
		tmpRequiredResourcesAmountCell.append(tmpRequiredResourcesAmountCellText);
		let tmpRequiredResourcesSpacingCell2 = outputDocument.createElement("td");
		tmpRequiredResourcesSpacingCell2.className = BuildingMenuLeftPanelTableSpacingBetweenValuesCellClass;
		let tmpRequiredResourcesChangeCell = outputDocument.createElement("td");
		tmpRequiredResourcesChangeCell.className = BuildingMenuLeftPanelTableResourceAmountCellClass + BuildingMenuLeftPanelTableResourceChangeCellClass;
		let tmpRequiredResourcesChangeCellText = outputDocument.createElement("span");
		tmpRequiredResourcesChangeCellText.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceChangeTextClass;
		tmpRequiredResourcesChangeCellText.id = BuildingMenuLeftPanelRequiredResourcesTableResourceChangeTextIdPrefix + tmpIndex;
		tmpRequiredResourcesChangeCellText.innerHTML = "- 0.0";
		tmpRequiredResourcesChangeCell.append(tmpRequiredResourcesChangeCellText);
		let tmpRequiredResourcesSpacingCell3 = outputDocument.createElement("td");
		tmpRequiredResourcesSpacingCell3.className = BuildingMenuLeftPanelTableSpacingBetweenValuesCellClass;
		let tmpRequiredResourcesResultCell = outputDocument.createElement("td");
		tmpRequiredResourcesResultCell.className = BuildingMenuLeftPanelTableResourceAmountCellClass + BuildingMenuLeftPanelTableResourceResultCellClass;
		let tmpRequiredResourcesResultCellText = outputDocument.createElement("span");
		tmpRequiredResourcesResultCellText.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceResultTextClass;
		tmpRequiredResourcesResultCellText.id = BuildingMenuLeftPanelRequiredResourcesTableResourceResultTextIdPrefix + tmpIndex;
		tmpRequiredResourcesResultCellText.innerHTML = "0.0";
		tmpRequiredResourcesResultCell.append(tmpRequiredResourcesResultCellText);
		
		tmpRequiredResourcesTableRow.append(
			tmpRequiredResourcesNameCell,
			tmpRequiredResourcesSpacingCell,
			tmpRequiredResourcesAmountCell,
			tmpRequiredResourcesSpacingCell2,
			tmpRequiredResourcesChangeCell,
			tmpRequiredResourcesSpacingCell3,
			tmpRequiredResourcesResultCell);
		
		
		let tmpProducedResourcesTableRow = outputDocument.createElement("tr");
		tmpProducedResourcesTableRow.className = BuildingMenuLeftPanelTableRowClass;
		//if(!ResourcesArray[tmpIndex].discovered) tmpProducedResourcesTableRow.className += BuildingMenuLeftPanelTableHiddenRowClass;
		tmpProducedResourcesTableRow.id = BuildingMenuLeftPanelProducedResourcesTableRowIdPrefix + tmpIndex;
		tmpProducedResourcesTableBody.append(tmpProducedResourcesTableRow);
		
		let tmpProducedResourcesNameCell = outputDocument.createElement("td");
		tmpProducedResourcesNameCell.className = BuildingMenuLeftPanelTableResourceNameCellClass;
		let tmpProducedResourcesNameCellText = outputDocument.createElement("span");
		tmpProducedResourcesNameCellText.className = BuildingMenuLeftPanelTableResourceNameTextClass;
		tmpProducedResourcesNameCellText.id = BuildingMenuLeftPanelProducedResourcesTableResourceNameTextIdPrefix + tmpIndex;
		tmpProducedResourcesNameCellText.innerHTML = ResourcesArray[tmpIndex].name;
		tmpProducedResourcesNameCell.append(tmpProducedResourcesNameCellText);
		let tmpProducedResourcesSpacingCell = outputDocument.createElement("td");
		tmpProducedResourcesSpacingCell.className = BuildingMenuLeftPanelTableSpacingAfterNameCellClass;
		let tmpProducedResourcesAmountCell = outputDocument.createElement("td");
		tmpProducedResourcesAmountCell.className = BuildingMenuLeftPanelTableResourceProductionConsumptionCellClass;
		let tmpProducedResourcesAmountCellText = outputDocument.createElement("span");
		tmpProducedResourcesAmountCellText.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass;
		tmpProducedResourcesAmountCellText.id = BuildingMenuLeftPanelProducedResourcesTableResourceAmountTextIdPrefix + tmpIndex;
		tmpProducedResourcesAmountCellText.innerHTML = "0.0";
		tmpProducedResourcesAmountCell.append(tmpProducedResourcesAmountCellText);
		let tmpProducedResourcesSpacingCell2 = outputDocument.createElement("td");
		tmpProducedResourcesSpacingCell2.className = BuildingMenuLeftPanelTableSpacingBetweenValuesCellClass;
		let tmpProducedResourcesChangeCell = outputDocument.createElement("td");
		tmpProducedResourcesChangeCell.className = BuildingMenuLeftPanelTableResourceProductionConsumptionCellClass + BuildingMenuLeftPanelTableResourceChangeCellClass;
		let tmpProducedResourcesChangeCellText = outputDocument.createElement("span");
		tmpProducedResourcesChangeCellText.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass + BuildingMenuLeftPanelTableResourcePositiveTextClass;
		tmpProducedResourcesChangeCellText.id = BuildingMenuLeftPanelProducedResourcesTableResourceChangeTextIdPrefix + tmpIndex;
		tmpProducedResourcesChangeCellText.innerHTML = "+ 0.0";
		tmpProducedResourcesChangeCell.append(tmpProducedResourcesChangeCellText);
		let tmpProducedResourcesSpacingCell3 = outputDocument.createElement("td");
		tmpProducedResourcesSpacingCell3.className = BuildingMenuLeftPanelTableSpacingBetweenValuesCellClass;
		let tmpProducedResourcesResultCell = outputDocument.createElement("td");
		tmpProducedResourcesResultCell.className = BuildingMenuLeftPanelTableResourceProductionConsumptionCellClass + BuildingMenuLeftPanelTableResourceResultCellClass;
		let tmpProducedResourcesResultCellText = outputDocument.createElement("span");
		tmpProducedResourcesResultCellText.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass + BuildingMenuLeftPanelTableResourceResultTextClass;
		tmpProducedResourcesResultCellText.id = BuildingMenuLeftPanelProducedResourcesTableResourceResultTextIdPrefix + tmpIndex;
		tmpProducedResourcesResultCellText.innerHTML = "0.0";
		tmpProducedResourcesResultCell.append(tmpProducedResourcesResultCellText);
		
		tmpProducedResourcesTableRow.append(
			tmpProducedResourcesNameCell,
			tmpProducedResourcesSpacingCell,
			tmpProducedResourcesAmountCell,
			tmpProducedResourcesSpacingCell2,
			tmpProducedResourcesChangeCell,
			tmpProducedResourcesSpacingCell3,
			tmpProducedResourcesResultCell);
			
		
		let tmpConsumedResourcesTableRow = outputDocument.createElement("tr");
		tmpConsumedResourcesTableRow.className = BuildingMenuLeftPanelTableRowClass;
		//if(!ResourcesArray[tmpIndex].discovered) tmpConsumedResourcesTableRow.className += BuildingMenuLeftPanelTableHiddenRowClass;
		tmpConsumedResourcesTableRow.id = BuildingMenuLeftPanelConsumedResourcesTableRowIdPrefix + tmpIndex;
		tmpConsumedResourcesTableBody.append(tmpConsumedResourcesTableRow);
		
		let tmpConsumedResourcesNameCell = outputDocument.createElement("td");
		tmpConsumedResourcesNameCell.className = BuildingMenuLeftPanelTableResourceNameCellClass;
		let tmpConsumedResourcesNameCellText = outputDocument.createElement("span");
		tmpConsumedResourcesNameCellText.className = BuildingMenuLeftPanelTableResourceNameTextClass;
		tmpConsumedResourcesNameCellText.id = BuildingMenuLeftPanelConsumedResourcesTableResourceNameTextIdPrefix + tmpIndex;
		tmpConsumedResourcesNameCellText.innerHTML = ResourcesArray[tmpIndex].name;
		tmpConsumedResourcesNameCell.append(tmpConsumedResourcesNameCellText);
		let tmpConsumedResourcesSpacingCell = outputDocument.createElement("td");
		tmpConsumedResourcesSpacingCell.className = BuildingMenuLeftPanelTableSpacingAfterNameCellClass;
		let tmpConsumedResourcesAmountCell = outputDocument.createElement("td");
		tmpConsumedResourcesAmountCell.className = BuildingMenuLeftPanelTableResourceProductionConsumptionCellClass;
		let tmpConsumedResourcesAmountCellText = outputDocument.createElement("span");
		tmpConsumedResourcesAmountCellText.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass;
		tmpConsumedResourcesAmountCellText.id = BuildingMenuLeftPanelConsumedResourcesTableResourceAmountTextIdPrefix + tmpIndex;
		tmpConsumedResourcesAmountCellText.innerHTML = "0.0";
		tmpConsumedResourcesAmountCell.append(tmpConsumedResourcesAmountCellText);
		let tmpConsumedResourcesSpacingCell2 = outputDocument.createElement("td");
		tmpConsumedResourcesSpacingCell2.className = BuildingMenuLeftPanelTableSpacingBetweenValuesCellClass;
		let tmpConsumedResourcesChangeCell = outputDocument.createElement("td");
		tmpConsumedResourcesChangeCell.className = BuildingMenuLeftPanelTableResourceProductionConsumptionCellClass + BuildingMenuLeftPanelTableResourceChangeCellClass;
		let tmpConsumedResourcesChangeCellText = outputDocument.createElement("span");
		tmpConsumedResourcesChangeCellText.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass + BuildingMenuLeftPanelTableResourceNegativeTextClass;
		tmpConsumedResourcesChangeCellText.id = BuildingMenuLeftPanelConsumedResourcesTableResourceChangeTextIdPrefix + tmpIndex;
		tmpConsumedResourcesChangeCellText.innerHTML = "- 0.0";
		tmpConsumedResourcesChangeCell.append(tmpConsumedResourcesChangeCellText);
		let tmpConsumedResourcesSpacingCell3 = outputDocument.createElement("td");
		tmpConsumedResourcesSpacingCell3.className = BuildingMenuLeftPanelTableSpacingBetweenValuesCellClass + BuildingMenuLeftPanelTableResourceResultCellClass;
		let tmpConsumedResourcesResultCell = outputDocument.createElement("td");
		tmpConsumedResourcesResultCell.className = BuildingMenuLeftPanelTableResourceProductionConsumptionCellClass;
		let tmpConsumedResourcesResultCellText = outputDocument.createElement("span");
		tmpConsumedResourcesResultCellText.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass + BuildingMenuLeftPanelTableResourceResultTextClass;
		tmpConsumedResourcesResultCellText.id = BuildingMenuLeftPanelConsumedResourcesTableResourceResultTextIdPrefix + tmpIndex;
		tmpConsumedResourcesResultCellText.innerHTML = "0.0";
		tmpConsumedResourcesResultCell.append(tmpConsumedResourcesResultCellText);
		
		tmpConsumedResourcesTableRow.append(
			tmpConsumedResourcesNameCell,
			tmpConsumedResourcesSpacingCell,
			tmpConsumedResourcesAmountCell,
			tmpConsumedResourcesSpacingCell2,
			tmpConsumedResourcesChangeCell,
			tmpConsumedResourcesSpacingCell3,
			tmpConsumedResourcesResultCell);
		
		
		let tmpAvailableResourcesTableRow = outputDocument.createElement("tr");
		tmpAvailableResourcesTableRow.className = BuildingMenuLeftPanelTableRowClass;
		//if(!ResourcesArray[tmpIndex].discovered) tmpAvailableResourcesTableRow.className += BuildingMenuLeftPanelTableHiddenRowClass;
		tmpAvailableResourcesTableRow.id = BuildingMenuLeftPanelAvailableResourcesTableRowIdPrefix + tmpIndex;
		tmpAvailableResourcesTableBody.append(tmpAvailableResourcesTableRow);
		
		let tmpAvailableResourcesNameCell = outputDocument.createElement("td");
		tmpAvailableResourcesNameCell.className = BuildingMenuLeftPanelTableResourceNameCellClass;
		let tmpAvailableResourcesNameCellText = outputDocument.createElement("span");
		tmpAvailableResourcesNameCellText.className = BuildingMenuLeftPanelTableResourceNameTextClass;
		tmpAvailableResourcesNameCellText.id = BuildingMenuLeftPanelAvailableResourcesTableResourceNameTextIdPrefix + tmpIndex;
		tmpAvailableResourcesNameCellText.innerHTML = ResourcesArray[tmpIndex].name;
		tmpAvailableResourcesNameCell.append(tmpAvailableResourcesNameCellText);
		let tmpAvailableResourcesSpacingCell = outputDocument.createElement("td");
		tmpAvailableResourcesSpacingCell.className = BuildingMenuLeftPanelTableSpacingAfterNameCellClass;
		let tmpAvailableResourcesAmountCell = outputDocument.createElement("td");
		tmpAvailableResourcesAmountCell.className = BuildingMenuLeftPanelTableResourceAmountCellClass;
		let tmpAvailableResourcesAmountCellText = outputDocument.createElement("span");
		tmpAvailableResourcesAmountCellText.className = BuildingMenuLeftPanelTableResourceAmountTextClass;
		tmpAvailableResourcesAmountCellText.id = BuildingMenuLeftPanelAvailableResourcesTableResourceAmountTextIdPrefix + tmpIndex;
		tmpAvailableResourcesAmountCellText.innerHTML = "0.0";
		tmpAvailableResourcesAmountCell.append(tmpAvailableResourcesAmountCellText);
		let tmpAvailableResourcesSpacingCell2 = outputDocument.createElement("td");
		tmpAvailableResourcesSpacingCell2.className = BuildingMenuLeftPanelTableSpacingBetweenValuesCellClass;
		let tmpAvailableResourcesChangeCell = outputDocument.createElement("td");
		tmpAvailableResourcesChangeCell.className = BuildingMenuLeftPanelTableResourceProductionConsumptionCellClass;
		let tmpAvailableResourcesChangeCellText = outputDocument.createElement("span");
		tmpAvailableResourcesChangeCellText.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass + BuildingMenuLeftPanelTableResourceNeutralTextClass;
		tmpAvailableResourcesChangeCellText.id = BuildingMenuLeftPanelAvailableResourcesTableResourceProductionConsumptionTextIdPrefix + tmpIndex;
		tmpAvailableResourcesChangeCellText.innerHTML = "0.0";
		tmpAvailableResourcesChangeCell.append(tmpAvailableResourcesChangeCellText);
		let tmpAvailableResourcesSpacingCell3 = outputDocument.createElement("td");
		tmpAvailableResourcesSpacingCell3.className = BuildingMenuLeftPanelTableSpacingBetweenValuesCellClass;
		let tmpAvailableResourcesImportExportCell = outputDocument.createElement("td");
		tmpAvailableResourcesImportExportCell.className = BuildingMenuLeftPanelTableResourceProductionConsumptionCellClass + BuildingMenuLeftPanelTableResourceImportExportCellClass;
		let tmpAvailableResourcesImportExportCellText = outputDocument.createElement("span");
		tmpAvailableResourcesImportExportCellText.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass + BuildingMenuLeftPanelTableResourceImportExportTextClass + BuildingMenuLeftPanelTableResourceNeutralTextClass;
		tmpAvailableResourcesImportExportCellText.id = BuildingMenuLeftPanelAvailableResourcesTableResourceImportExportTextIdPrefix + tmpIndex;
		tmpAvailableResourcesImportExportCellText.innerHTML = "0.0";
		tmpAvailableResourcesImportExportCell.append(tmpAvailableResourcesImportExportCellText);
		
		tmpAvailableResourcesTableRow.append(
			tmpAvailableResourcesNameCell,
			tmpAvailableResourcesSpacingCell,
			tmpAvailableResourcesAmountCell,
			tmpAvailableResourcesSpacingCell2,
			tmpAvailableResourcesChangeCell,
			tmpAvailableResourcesSpacingCell3,
			tmpAvailableResourcesImportExportCell);
		
	}
	interfaceBuildMenuPlanetTablesShowResourcesIfDiscovered(outputDocument);
	interfaceBuildMenuPlanetTablesRefreshAllTables(outputDocument);
}

function interfaceBuildMenuPlanetTablesShowResourcesIfDiscovered(outputDocument){
	for(let i = 0; i < ResourcesArray.length; i++){
		if(ResourcesArray[i].discovered){
			outputDocument.getElementById(BuildingMenuLeftPanelRequiredResourcesTableRowIdPrefix + i).className = BuildingMenuLeftPanelTableRowClass;
			outputDocument.getElementById(BuildingMenuLeftPanelProducedResourcesTableRowIdPrefix + i).className = BuildingMenuLeftPanelTableRowClass;
			outputDocument.getElementById(BuildingMenuLeftPanelConsumedResourcesTableRowIdPrefix + i).className = BuildingMenuLeftPanelTableRowClass;
			outputDocument.getElementById(BuildingMenuLeftPanelAvailableResourcesTableRowIdPrefix + i).className = BuildingMenuLeftPanelTableRowClass;
		}
		else{
			outputDocument.getElementById(BuildingMenuLeftPanelRequiredResourcesTableRowIdPrefix + i).className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableHiddenRowClass;
			outputDocument.getElementById(BuildingMenuLeftPanelProducedResourcesTableRowIdPrefix + i).className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableHiddenRowClass;
			outputDocument.getElementById(BuildingMenuLeftPanelConsumedResourcesTableRowIdPrefix + i).className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableHiddenRowClass;
			outputDocument.getElementById(BuildingMenuLeftPanelAvailableResourcesTableRowIdPrefix + i).className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableHiddenRowClass;
		}
	}
}
function interfaceBuildMenuPlanetTablesRefreshAllTables(outputDocument, buildingListId = 0, actionType = "build", amountVariant = 0){
	interfaceBuildMenuPlanetTablesRefreshRequiredResourcesTable(outputDocument, buildingListId, actionType, amountVariant);
	interfaceBuildMenuPlanetTablesRefreshProducedResourcesTable(outputDocument, buildingListId, actionType, amountVariant);
	interfaceBuildMenuPlanetTablesRefreshConsumedResourcesTable(outputDocument, buildingListId, actionType, amountVariant);
	interfaceBuildMenuPlanetTablesRefreshAvailableResourcesTable(outputDocument);
}


function interfaceBuildMenuPlanetTablesRefreshRequiredResourcesTable(outputDocument, buildingListId, actionType, amountVariant){
	let tmpCurrentPlanet = PlanetsArray[PlanetsCurrentPlanet];
	let tmpResourceObject = resourcesCreateEmptyCostResourcesArray(); 
	let tmpBuildingObject = PlanetsArray[PlanetsCurrentPlanet].buildings[buildingListId]; 
	
	let tmpTableHeaderRow = outputDocument.getElementById(BuildingMenuLeftPanelRequiredResourcesTableHeaderID);
	
	switch(actionType){
		case "build":
			switch(amountVariant){
				case 1:
					tmpResourceObject = tmpBuildingObject.nextBuildCost;
					break;
				case BuildingsBuildMoreAmount:
					tmpResourceObject = tmpBuildingObject.nextBuildCostMore;
					break;
				case BuildingsBuildEvenMoreAmount:
					tmpResourceObject = tmpBuildingObject.nextBuildCostEvenMore;
					break;
				case "input":
					tmpResourceObject = tmpBuildingObject.nextBuildCostCustom;
					break;
			}
			break;
		case "demolish":
			switch(amountVariant){
				case 1:
					tmpResourceObject = tmpBuildingObject.nextDemolishRefund;
					break;
				case BuildingsBuildMoreAmount:
					tmpResourceObject = tmpBuildingObject.nextDemolishRefundMore;
					break;
				case BuildingsBuildEvenMoreAmount:
					tmpResourceObject = tmpBuildingObject.nextDemolishRefundEvenMore;
					break;
				case "input":
					tmpResourceObject = tmpBuildingObject.nextDemolishRefundCustom;
					break;
			}
			break;
		case "upgrade":
			switch(amountVariant){
				case 1:
					tmpResourceObject = tmpBuildingObject.nextUpgradeCost;
					break;
				case BuildingsUpgradeMoreAmount:
					tmpResourceObject = tmpBuildingObject.nextUpgradeCostMore;
					break;
				case BuildingsUpgradeEvenMoreAmount:
					tmpResourceObject = tmpBuildingObject.nextUpgradeCostEvenMore;
					break;
				case "input":
					tmpResourceObject = tmpBuildingObject.nextUpgradeCostCustom;
					break;
			}
			break;
		case "downgrade":
			switch(amountVariant){
				case 1:
					tmpResourceObject = tmpBuildingObject.nextDowngradeRefund;
					break;
				case BuildingsUpgradeMoreAmount:
					tmpResourceObject = tmpBuildingObject.nextDowngradeRefundMore;
					break;
				case BuildingsUpgradeEvenMoreAmount:
					tmpResourceObject = tmpBuildingObject.nextDowngradeRefundEvenMore;
					break;
				case "input":
					tmpResourceObject = tmpBuildingObject.nextDowngradeRefundCustom;
					break;
			}
			break;
	}
	
	//console.log(tmpResourceObject);
	
	let tmpEmptyTable = true;
	if(actionType == "build" || actionType == "upgrade"){
		for(let i = 0; i < ResourcesArray.length; i++){
			let tmpChangingRow = outputDocument.getElementById(BuildingMenuLeftPanelRequiredResourcesTableRowIdPrefix + i);
			let tmpAmountSpan = outputDocument.getElementById(BuildingMenuLeftPanelRequiredResourcesTableResourceAmountTextIdPrefix + i);
			let tmpChangeSpan = outputDocument.getElementById(BuildingMenuLeftPanelRequiredResourcesTableResourceChangeTextIdPrefix + i);
			let tmpResultSpan = outputDocument.getElementById(BuildingMenuLeftPanelRequiredResourcesTableResourceResultTextIdPrefix + i);
			
			// console.log(tmpResourceObject[i]);
			
			let tmpAmountValue = tmpCurrentPlanet.resourceStorage[i].amount;
			let tmpChangeValue = tmpResourceObject[i].cost;
			let tmpResultValue = 0;
			
			tmpResultValue = tmpAmountValue - tmpChangeValue;
			
			if(tmpChangeValue == 0){
				tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableHiddenRowClass;
				continue;
			}
			
			tmpAmountSpan.innerHTML = bigNumberToString(tmpAmountValue);
			
			//value is a substracted cost, so if value is negative - must be some weird return-exception
			if(tmpChangeValue < 0){
				tmpChangeSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceChangeTextClass + BuildingMenuLeftPanelTableResourcePositiveTextClass;
				// tmpChangeSpan.innerHTML = '+' + bigNumberToString(tmpChangeValue);
				tmpChangeSpan.innerHTML = bigNumberToString(tmpChangeValue, true);
			}
			else{
				tmpChangeSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceChangeTextClass + BuildingMenuLeftPanelTableResourceNegativeTextClass;
				tmpChangeSpan.innerHTML = '-' + bigNumberToString(tmpChangeValue);
			}
			
			//if storage were to go negative as result, action is not allowed - make related row red
			if(tmpResultValue < 0){
				tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableGoingNegativeRowClass;
				//tmpResultSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceResultTextClass + BuildingMenuLeftPanelTableResourceNegativeTextClass;
				//console.log("Row value goes negative");
			}
			else{
				tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass;
				//tmpResultSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceResultTextClass;
			}
			
			tmpResultSpan.innerHTML = bigNumberToString(tmpResultValue);
			tmpEmptyTable = false;
		}
	}
	else{
		for(let i = 0; i < ResourcesArray.length; i++){
			let tmpChangingRow = outputDocument.getElementById(BuildingMenuLeftPanelRequiredResourcesTableRowIdPrefix + i);
			let tmpAmountSpan = outputDocument.getElementById(BuildingMenuLeftPanelRequiredResourcesTableResourceAmountTextIdPrefix + i);
			let tmpChangeSpan = outputDocument.getElementById(BuildingMenuLeftPanelRequiredResourcesTableResourceChangeTextIdPrefix + i);
			let tmpResultSpan = outputDocument.getElementById(BuildingMenuLeftPanelRequiredResourcesTableResourceResultTextIdPrefix + i);
			
			//console.log(tmpResourceObject[i]);
			
			let tmpAmountValue = tmpCurrentPlanet.resourceStorage[i].amount;
			let tmpChangeValue = tmpResourceObject[i].cost;
			let tmpResultValue = 0;
			
			tmpResultValue = tmpAmountValue + tmpChangeValue;
			
			if(tmpChangeValue == 0){
				tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableHiddenRowClass;
				continue;
			}
			
			tmpAmountSpan.innerHTML = bigNumberToString(tmpAmountValue);
			
			//value is added refund, so if value is negative - demolish/downgrade has some cost
			if(tmpChangeValue < 0){
				tmpChangeSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceChangeTextClass + BuildingMenuLeftPanelTableResourceNegativeTextClass;
				tmpChangeSpan.innerHTML = '-' + bigNumberToString(tmpChangeValue);
			}
			else{
				tmpChangeSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceChangeTextClass + BuildingMenuLeftPanelTableResourcePositiveTextClass;
				// tmpChangeSpan.innerHTML = '+' + bigNumberToString(tmpChangeValue);
				tmpChangeSpan.innerHTML = bigNumberToString(tmpChangeValue, true);
			}
			
			//if storage were to go negative as result, action is not allowed - make related row red
			if(tmpResultValue < 0){
				tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableGoingNegativeRowClass;
				//tmpResultSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceResultTextClass + BuildingMenuLeftPanelTableResourceNegativeTextClass;
				//console.log("Row value goes negative");
			}
			else{
				tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass;
				//tmpResultSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceResultTextClass;
			}
			
			tmpResultSpan.innerHTML = bigNumberToString(tmpResultValue);
			tmpEmptyTable = false;
		}
	}
	
	if(tmpEmptyTable){
		tmpTableHeaderRow.className = BuildingMenuLeftPanelTableHeaderCellClass;
	}
	else{
		tmpTableHeaderRow.className = BuildingMenuLeftPanelTableHeaderCellClass + BuildingMenuLeftPanelTableHiddenRowClass;
	}
}
function interfaceBuildMenuPlanetTablesRefreshProducedResourcesTable(outputDocument, buildingListId, actionType, amountVariant){
	let tmpCurrentPlanet = PlanetsArray[PlanetsCurrentPlanet];
	let tmpBuildingObject = PlanetsArray[PlanetsCurrentPlanet].buildings[buildingListId];
	let tmpBuildingBlueprintObject = BuildingsArray[tmpBuildingObject.blueprintIndex];
	
	let tmpTableHeaderRow = outputDocument.getElementById(BuildingMenuLeftPanelProducedResourcesTableHeaderID);
	
	let tmpCurrentProduction = tmpBuildingObject.dailyProduction;
	let tmpPredictedProduction = resourcesCreateEmptyCostResourcesArray();
	
	let tmpCurrentAmount = tmpBuildingObject.count;
	let tmpPredictedAmount = tmpBuildingObject.count;
	
	let amountChanging = amountVariant;
	if(amountVariant == "input"){
		if(actionType == "build" || actionType == "demolish") amountChanging = tmpBuildingObject.customBuildDemolishAmount;
		else amountChanging = tmpBuildingObject.customUpgradeDowngradeAmount;
	}
	
	switch(actionType){
		case "build":
			tmpPredictedProduction = tmpBuildingObject.calculateDailyProduction(tmpBuildingObject.count + amountChanging, tmpBuildingObject.level);
			tmpPredictedAmount += amountChanging;
			break;
		case "demolish":
			tmpPredictedProduction = tmpBuildingObject.calculateDailyProduction(tmpBuildingObject.count - amountChanging, tmpBuildingObject.level);
			tmpPredictedAmount -= amountChanging;
			if(tmpPredictedAmount < 0) tmpPredictedAmount = 0;
			break;
		case "upgrade":
			tmpPredictedProduction = tmpBuildingObject.calculateDailyProduction(tmpBuildingObject.count, tmpBuildingObject.level + amountChanging);
			break;
		case "downgrade":
			tmpPredictedProduction = tmpBuildingObject.calculateDailyProduction(tmpBuildingObject.count, tmpBuildingObject.level - amountChanging);
			break;
	}
	
	let tmpEmptyTable = true;
	
	for(let i = 0; i < ResourcesArray.length; i++){
		let tmpChangingRow = outputDocument.getElementById(BuildingMenuLeftPanelProducedResourcesTableRowIdPrefix + i);
		let tmpProductionSpan = outputDocument.getElementById(BuildingMenuLeftPanelProducedResourcesTableResourceAmountTextIdPrefix + i);
		let tmpChangeSpan = outputDocument.getElementById(BuildingMenuLeftPanelProducedResourcesTableResourceChangeTextIdPrefix + i);
		let tmpResultSpan = outputDocument.getElementById(BuildingMenuLeftPanelProducedResourcesTableResourceResultTextIdPrefix + i);
		
		let tmpProductionValue = (tmpCurrentPlanet.resourceProduction[i].amount - tmpCurrentPlanet.resourceConsumption[i].amount);
		let tmpChangeValue = (tmpPredictedProduction[i].amount * tmpPredictedAmount) - (tmpCurrentProduction[i].amount * tmpCurrentAmount);
		let tmpResultValue = tmpProductionValue + tmpChangeValue;
		
		if(tmpPredictedProduction[i].amount == 0 && tmpCurrentProduction[i].amount == 0){
			tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableHiddenRowClass;
			continue;
		}
		
		if(tmpChangeValue < 0){
				tmpChangeSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceChangeTextClass + BuildingMenuLeftPanelTableResourceNegativeTextClass;
				tmpChangeSpan.innerHTML = '-' + bigNumberToString(tmpChangeValue);
		}
		else if(tmpChangeValue > 0){
			tmpChangeSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceChangeTextClass + BuildingMenuLeftPanelTableResourcePositiveTextClass;
			tmpChangeSpan.innerHTML = '+' + bigNumberToString(tmpChangeValue);
		}
		else{
			tmpChangeSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceChangeTextClass + BuildingMenuLeftPanelTableResourceNeutralTextClass;
			tmpChangeSpan.innerHTML = bigNumberToString(tmpChangeValue);
		}
		
		if(tmpProductionValue < 0 && tmpResultValue >= 0){
			tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableGoingPositiveRowClass;
		}
		else if(tmpProductionValue >= 0 && tmpResultValue < 0){
			tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableGoingNegativeRowClass;
		}
		else{
			tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass;
		}
		
		tmpProductionSpan.innerHTML = bigNumberToString(tmpProductionValue);
		tmpChangeSpan.innerHTML = bigNumberToString(tmpChangeValue, true);
		tmpResultSpan.innerHTML = bigNumberToString(tmpResultValue);
		
		tmpEmptyTable = false;
	}
	
	if(tmpEmptyTable){
		tmpTableHeaderRow.className = BuildingMenuLeftPanelTableHeaderCellClass;
	}
	else{
		tmpTableHeaderRow.className = BuildingMenuLeftPanelTableHeaderCellClass + BuildingMenuLeftPanelTableHiddenRowClass;
	}
}
function interfaceBuildMenuPlanetTablesRefreshConsumedResourcesTable(outputDocument, buildingListId, actionType, amountVariant){
	let tmpCurrentPlanet = PlanetsArray[PlanetsCurrentPlanet];
	let tmpBuildingObject = PlanetsArray[PlanetsCurrentPlanet].buildings[buildingListId];
	let tmpBuildingBlueprintObject = BuildingsArray[tmpBuildingObject.blueprintIndex];
	
	let tmpTableHeaderRow = outputDocument.getElementById(BuildingMenuLeftPanelConsumedResourcesTableHeaderID);
	
	let tmpCurrentConsumption = tmpBuildingObject.dailyConsumption;
	let tmpPredictedConsumption = resourcesCreateEmptyCostResourcesArray();
	
	let tmpCurrentAmount = tmpBuildingObject.count;
	let tmpPredictedAmount = tmpBuildingObject.count;
	
	let amountChanging = amountVariant;
	if(amountVariant == "input"){
		if(actionType == "build" || actionType == "demolish") amountChanging = tmpBuildingObject.customBuildDemolishAmount;
		else amountChanging = tmpBuildingObject.customUpgradeDowngradeAmount;
	}
	
	switch(actionType){
		case "build":
			tmpPredictedConsumption = tmpBuildingObject.calculateDailyConsumption(tmpBuildingObject.count + amountChanging, tmpBuildingObject.level);
			tmpPredictedAmount += amountChanging;
			break;
		case "demolish":
			tmpPredictedConsumption = tmpBuildingObject.calculateDailyConsumption(tmpBuildingObject.count - amountChanging, tmpBuildingObject.level);
			tmpPredictedAmount -= amountChanging;
			if(tmpPredictedAmount < 0) tmpPredictedAmount = 0;
			break;
		case "upgrade":
			tmpPredictedConsumption = tmpBuildingObject.calculateDailyConsumption(tmpBuildingObject.count, tmpBuildingObject.level + amountChanging);
			break;
		case "downgrade":
			tmpPredictedConsumption = tmpBuildingObject.calculateDailyConsumption(tmpBuildingObject.count, tmpBuildingObject.level - amountChanging);
			break;
	}
	
	let tmpEmptyTable = true;
	
	for(let i = 0; i < ResourcesArray.length; i++){
		let tmpChangingRow = outputDocument.getElementById(BuildingMenuLeftPanelConsumedResourcesTableRowIdPrefix + i);
		let tmpConsumptionSpan = outputDocument.getElementById(BuildingMenuLeftPanelConsumedResourcesTableResourceAmountTextIdPrefix + i);
		let tmpChangeSpan = outputDocument.getElementById(BuildingMenuLeftPanelConsumedResourcesTableResourceChangeTextIdPrefix + i);
		let tmpResultSpan = outputDocument.getElementById(BuildingMenuLeftPanelConsumedResourcesTableResourceResultTextIdPrefix + i);
		
		let tmpConsumptionValue = (tmpCurrentPlanet.resourceProduction[i].amount - tmpCurrentPlanet.resourceConsumption[i].amount);
		let tmpChangeValue = (tmpPredictedConsumption[i].amount * tmpPredictedAmount) - (tmpCurrentConsumption[i].amount * tmpCurrentAmount);
		let tmpResultValue = tmpConsumptionValue - tmpChangeValue;
		
		if(tmpPredictedConsumption[i].amount == 0 && tmpCurrentConsumption[i].amount == 0){
			tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableHiddenRowClass;
			continue;
		}
		
		if(tmpChangeValue > 0){
			tmpChangeSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceChangeTextClass + BuildingMenuLeftPanelTableResourceNegativeTextClass;
			tmpChangeSpan.innerHTML = '-' + bigNumberToString(tmpChangeValue);
		}
		else if(tmpChangeValue < 0){
			tmpChangeSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceChangeTextClass + BuildingMenuLeftPanelTableResourcePositiveTextClass;
			tmpChangeSpan.innerHTML = '+' + bigNumberToString(tmpChangeValue);
		}
		else{
			tmpChangeSpan.className = BuildingMenuLeftPanelTableResourceAmountTextClass + BuildingMenuLeftPanelTableResourceChangeTextClass + BuildingMenuLeftPanelTableResourceNeutralTextClass;
			tmpChangeSpan.innerHTML = bigNumberToString(tmpChangeValue);
		}
		
		if(tmpConsumptionValue >= 0 && tmpResultValue < 0){
			tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableGoingNegativeRowClass;
		} 
		else if(tmpConsumptionValue < 0 && tmpResultValue >= 0){
			tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass + BuildingMenuLeftPanelTableGoingPositiveRowClass;
		}
		else{
			tmpChangingRow.className = BuildingMenuLeftPanelTableRowClass;
		}
		
		tmpConsumptionSpan.innerHTML = bigNumberToString(tmpConsumptionValue);
		tmpChangeSpan.innerHTML = bigNumberToString(tmpChangeValue, true);
		tmpResultSpan.innerHTML = bigNumberToString(tmpResultValue);
		
		tmpEmptyTable = false;
	}
	
	if(tmpEmptyTable){
		tmpTableHeaderRow.className = BuildingMenuLeftPanelTableHeaderCellClass;
	}
	else{
		tmpTableHeaderRow.className = BuildingMenuLeftPanelTableHeaderCellClass + BuildingMenuLeftPanelTableHiddenRowClass;
	}
}

function interfaceBuildMenuPlanetTablesRefreshAvailableResourcesTable(outputDocument){
	let tmpCurrentPlanet = PlanetsArray[PlanetsCurrentPlanet];
	for(let i = 0; i < ResourcesArray.length; i++){
		let tmpAmountSpan = outputDocument.getElementById(BuildingMenuLeftPanelAvailableResourcesTableResourceAmountTextIdPrefix + i);
		let tmpProductionConsumptionSpan = outputDocument.getElementById(BuildingMenuLeftPanelAvailableResourcesTableResourceProductionConsumptionTextIdPrefix + i);
		let tmpImportExportSpan = outputDocument.getElementById(BuildingMenuLeftPanelAvailableResourcesTableResourceImportExportTextIdPrefix + i);
		
		let tmpProductionConsumptionValue = (tmpCurrentPlanet.resourceProduction[i].amount - tmpCurrentPlanet.resourceConsumption[i].amount);
		let tmpImportExportValue = (tmpCurrentPlanet.routesImport[i].amount - tmpCurrentPlanet.routesExport[i].amount);
		
		tmpAmountSpan.innerHTML = bigNumberToString(tmpCurrentPlanet.resourceStorage[i].amount);
		tmpProductionConsumptionSpan.innerHTML = bigNumberToString(tmpProductionConsumptionValue);
		tmpImportExportSpan.innerHTML = bigNumberToString(tmpImportExportValue);
		
		if(tmpProductionConsumptionValue > 0){
			tmpProductionConsumptionSpan.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass + BuildingMenuLeftPanelTableResourcePositiveTextClass;
		}
		else if(tmpProductionConsumptionValue < 0){
			tmpProductionConsumptionSpan.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass + BuildingMenuLeftPanelTableResourceNegativeTextClass;
		}
		else{
			tmpProductionConsumptionSpan.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass + BuildingMenuLeftPanelTableResourceNeutralTextClass;
		}
		
		if(tmpImportExportValue > 0){
			tmpImportExportSpan.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass + BuildingMenuLeftPanelTableResourceImportExportTextClass + BuildingMenuLeftPanelTableResourcePositiveTextClass;
		}
		else if(tmpImportExportValue < 0){
			tmpImportExportSpan.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass + BuildingMenuLeftPanelTableResourceImportExportTextClass +  BuildingMenuLeftPanelTableResourceNegativeTextClass;
		}
		else{
			tmpImportExportSpan.className = BuildingMenuLeftPanelTableResourceProductionConsumptionTextClass + BuildingMenuLeftPanelTableResourceImportExportTextClass + BuildingMenuLeftPanelTableResourceNeutralTextClass;
		}
	}
}

var BuildingMenuSingleBuildingClassUnfolded = "planetBuildingUnfoldedBuilding";
var BuildingMenuSingleBuildingClassFolded = "planetBuildingFoldedBuilding";
var BuildingMenuSingleBuildingIdPrefix = "planetBuildingSingleBuilding_";
var BuildingMenuSingleBuildingContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingContainer";

var BuildingMenuSingleBuildingInfoContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingInfoContainer";

var BuildingMenuSingleBuildingInfoHeaderContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingHeaderContainer";

var BuildingMenuSingleBuildingInfoHeaderNameContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingNameContainer";
var BuildingMenuSingleBuildingInfoHeaderNameValueClass = "planetBuildingSingleBuildingHeaderText";
var BuildingMenuSingleBuildingInfoHeaderNameValueClassIdPrefix = "planetBuildingSingleBuildingName_";

var BuildingMenuSingleBuildingInfoHeaderAmountLevelContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingAmountLevelContainer";

var BuildingMenuSingleBuildingInfoHeaderLevelContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingLevelContainer";
var BuildingMenuSingleBuildingInfoHeaderLevelPrefixClass = "planetBuildingSingleBuildingHeaderText";
var BuildingMenuSingleBuildingInfoHeaderLevelValueClass = "planetBuildingSingleBuildingHeaderText interfaceDynamicText";
var BuildingMenuSingleBuildingInfoHeaderLevelValueClassIdPrefix = "planetBuildingSingleBuildingLevel_";

var BuildingMenuSingleBuildingInfoHeaderAmountContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingAmountContainer";
var BuildingMenuSingleBuildingInfoHeaderAmountPrefixClass = "planetBuildingSingleBuildingHeaderText";
var BuildingMenuSingleBuildingInfoHeaderAmountValueClass = "planetBuildingSingleBuildingHeaderText interfaceDynamicText";
var BuildingMenuSingleBuildingInfoHeaderAmountValueClassIdPrefix = "planetBuildingSingleBuildingAmount_";



var BuildingMenuSingleBuildingResourceTableContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingResourcesTableContainer planetBuildingUnfoldedOnlyBuilding";
var BuildingMenuSingleBuildingResourceTableClass = "interfaceTable planetBuildingSingleBuildingResourceTable";
var BuildingMenuSingleBuildingResourceTableIdPrefix = "planetBuildingSingleBuildingResourceTable_";
var BuildingMenuSingleBuildingResourceTableBodyClass = "interfaceTableBody planetBuildingSingleBuildingResourceTableBody";
var BuildingMenuSingleBuildingResourceTableBodyIdPrefix = "planetBuildingSingleBuildingResourceTableBody_";

var BuildingMenuSingleBuildingResourceTableProductionHeaderRowClass = "interfaceTableRow planetBuildingSingleBuildingResourceTableProductionHeaderRow";
var BuildingMenuSingleBuildingResourceTableProductionHeaderRowIdPrefix = "planetBuildingSingleBuildingResourceTableProductionHeaderRow_";
var BuildingMenuSingleBuildingResourceTableProductionHeaderCellClass = "interfaceTableCell planetBuildingSingleBuildingResourceTableProductionHeaderCell";
var BuildingMenuSingleBuildingResourceTableProductionHeaderCellIdPrefix = "planetBuildingSingleBuildingResourceTableProductionHeaderCell_";
var BuildingMenuSingleBuildingResourceTableProductionHeaderCellTextClass = "interfaceText planetBuildingSingleBuildingResourceTableProductionHeaderText";
var BuildingMenuSingleBuildingResourceTableProductionHeaderCellTextIdPrefix = "planetBuildingSingleBuildingResourceTableProductionHeaderText_";

var BuildingMenuSingleBuildingResourceTableConsumptionHeaderRowClass = "interfaceTableRow planetBuildingSingleBuildingResourceTableConsumptionHeaderRow";
var BuildingMenuSingleBuildingResourceTableConsumptionHeaderRowIdPrefix = "planetBuildingSingleBuildingResourceTableConsumptionHeaderRow_";
var BuildingMenuSingleBuildingResourceTableConsumptionHeaderCellClass = "interfaceTableCell planetBuildingSingleBuildingResourceTableConsumptionHeaderCell";
var BuildingMenuSingleBuildingResourceTableConsumptionHeaderCellIdPrefix = "planetBuildingSingleBuildingResourceTableConsumptionHeaderCell_";
var BuildingMenuSingleBuildingResourceTableConsumptionHeaderCellTextClass = "interfaceText planetBuildingSingleBuildingResourceTableConsumptionHeaderText";
var BuildingMenuSingleBuildingResourceTableConsumptionHeaderCellTextIdPrefix = "planetBuildingSingleBuildingResourceTableConsumptionHeaderText_";

var BuildingMenuSingleBuildingResourceTableProductionRowClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableProducedResourceRow";
var BuildingMenuSingleBuildingResourceTableProductionRowIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedResourceRow_";
var BuildingMenuSingleBuildingResourceTableConsumptionRowIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedResourceRow_";
var BuildingMenuSingleBuildingResourceTableConsumptionRowClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableConsumedResourceRow";

var BuildingMenuSingleBuildingResourceTableEnergyProducedRowClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableProducedEnergyRow";
var BuildingMenuSingleBuildingResourceTableEnergyProducedRowIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedEnergyRow_";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedRowClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableConsumedEnergyRow";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedRowIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedEnergyRow_";
var BuildingMenuSingleBuildingResourceTableRequiredStaffRowClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableRequiredStaffRow";
var BuildingMenuSingleBuildingResourceTableRequiredStaffRowIdPrefix = "planetBuildingSingleBuildingResourcesTableRequiredStaffRow_";

var BuildingMenuSingleBuildingResourceTableHiddenRowClass = " planetBuildingSingleBuildingResourceTableHiddenRow";
var BuildingMenuSingleBuildingResourceTableSpacingRowClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableSpacingRow";
var BuildingMenuSingleBuildingResourceTableSpacingRowTopClass = " planetBuildingSingleBuildingResourcesTableSpacingTopRow";
var BuildingMenuSingleBuildingResourceTableSpacingRowBottomClass = " planetBuildingSingleBuildingResourcesTableSpacingBottomRow";
var BuildingMenuSingleBuildingResourceTableSpacingRowExtraClass = " planetBuildingSingleBuildingResourcesTableSpacingExtraRow";
var BuildingMenuSingleBuildingResourceTableSpacingRowTopIdPrefix = "planetBuildingSingleBuildingResourcesTableSpacingTopRow_";
var BuildingMenuSingleBuildingResourceTableSpacingRowBottomIdPrefix = "planetBuildingSingleBuildingResourcesTableSpacingBottomRow_";
var BuildingMenuSingleBuildingResourceTableSpacingRowExtraIdPrefix = "planetBuildingSingleBuildingResourcesTableSpacingExtraRow_";
var BuildingMenuSingleBuildingResourceTableSpacingRowCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableSpacingRowCell";

var BuildingMenuSingleBuildingResourceTableProductionNameCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableProducedResourceNameCell";
var BuildingMenuSingleBuildingResourceTableProductionNameCellIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedResourceNameCell_";
var BuildingMenuSingleBuildingResourceTableProductionNameTextClass = "interfaceText planetBuildingSingleBuildingResourcesTableProducedResourceNameText";
var BuildingMenuSingleBuildingResourceTableProductionNameTextIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedResourceNameText_";
var BuildingMenuSingleBuildingResourceTableProductionValueCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableProducedResourceValueCell";
var BuildingMenuSingleBuildingResourceTableProductionValueCellIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedResourceValueCell_";
var BuildingMenuSingleBuildingResourceTableProductionValueTextClass = "interfaceText planetBuildingSingleBuildingResourcesTableProducedResourceValueText";
var BuildingMenuSingleBuildingResourceTableProductionValueTextIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedResourceValueText_";
var BuildingMenuSingleBuildingResourceTableProductionChangeCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableProducedResourceChangeCell";
var BuildingMenuSingleBuildingResourceTableProductionChangeCellIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedResourceChangeCell_";
var BuildingMenuSingleBuildingResourceTableProductionChangeTextClass = "interfaceText planetBuildingSingleBuildingResourcesTableProducedResourceChangeText";
var BuildingMenuSingleBuildingResourceTableProductionChangeTextIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedResourceChangeText_";

var BuildingMenuSingleBuildingResourceTableConsumptionNameCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableConsumedResourceNameCell";
var BuildingMenuSingleBuildingResourceTableConsumptionNameCellIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedResourceNameCell_";
var BuildingMenuSingleBuildingResourceTableConsumptionNameTextClass = "interfaceText planetBuildingSingleBuildingResourcesTableConsumedResourceNameText";
var BuildingMenuSingleBuildingResourceTableConsumptionNameTextIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedResourceNameText_";
var BuildingMenuSingleBuildingResourceTableConsumptionValueCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableConsumedResourceValueCell";
var BuildingMenuSingleBuildingResourceTableConsumptionValueCellIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedResourceValueCell_";
var BuildingMenuSingleBuildingResourceTableConsumptionValueTextClass = "interfaceText planetBuildingSingleBuildingResourcesTableConsumedResourceValueText";
var BuildingMenuSingleBuildingResourceTableConsumptionValueTextIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedResourceValueText_";
var BuildingMenuSingleBuildingResourceTableConsumptionChangeCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableConsumedResourceChangeCell";
var BuildingMenuSingleBuildingResourceTableConsumptionChangeCellIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedResourceChangeCell_";
var BuildingMenuSingleBuildingResourceTableConsumptionChangeTextClass = "interfaceText planetBuildingSingleBuildingResourcesTableConsumedResourceChangeText";
var BuildingMenuSingleBuildingResourceTableConsumptionChangeTextIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedResourceChangeText_";

var BuildingMenuSingleBuildingResourceTableEnergyProducedNameCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableProducedEnergyNameCell";
var BuildingMenuSingleBuildingResourceTableEnergyProducedNameCellIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedEnergyNameCell_";
var BuildingMenuSingleBuildingResourceTableEnergyProducedNameTextClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableProducedEnergyNameText";
var BuildingMenuSingleBuildingResourceTableEnergyProducedNameTextIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedEnergyNameText_";
var BuildingMenuSingleBuildingResourceTableEnergyProducedValueCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableProducedEnergyValueCell";
var BuildingMenuSingleBuildingResourceTableEnergyProducedValueCellIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedEnergyValueCell_";
var BuildingMenuSingleBuildingResourceTableEnergyProducedValueTextClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableProducedEnergyValueText";
var BuildingMenuSingleBuildingResourceTableEnergyProducedValueTextIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedEnergyValueText_";
var BuildingMenuSingleBuildingResourceTableEnergyProducedChangeCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableProducedEnergyChangeCell";
var BuildingMenuSingleBuildingResourceTableEnergyProducedChangeCellIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedEnergyChangeCell_";
var BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableProducedEnergyChangeText";
var BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextIdPrefix = "planetBuildingSingleBuildingResourcesTableProducedEnergyChangeText_";

var BuildingMenuSingleBuildingResourceTableEnergyConsumedNameCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableConsumedEnergyNameCell";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedNameCellIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedEnergyNameCell_";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedNameTextClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableConsumedEnergyNameText";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedNameTextIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedEnergyNameText_";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedValueCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableConsumedEnergyValueCell";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedValueCellIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedEnergyValueCell_";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedValueTextClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableConsumedEnergyValueText";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedValueTextIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedEnergyValueText_";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableConsumedEnergyChangeCell";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeCellIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedEnergyChangeCell_";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableConsumedEnergyChangeText";
var BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextIdPrefix = "planetBuildingSingleBuildingResourcesTableConsumedEnergyChangeText_";

var BuildingMenuSingleBuildingResourceTableStaffRequiredNameCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableStaffRequiredNameCell";
var BuildingMenuSingleBuildingResourceTableStaffRequiredNameCellIdPrefix = "planetBuildingSingleBuildingResourcesTableStaffRequiredNameCell_";
var BuildingMenuSingleBuildingResourceTableStaffRequiredNameTextClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableStaffRequiredNameText";
var BuildingMenuSingleBuildingResourceTableStaffRequiredNameTextIdPrefix = "planetBuildingSingleBuildingResourcesTableStaffRequiredNameText_";
var BuildingMenuSingleBuildingResourceTableStaffRequiredValueCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableStaffRequiredValueCell";
var BuildingMenuSingleBuildingResourceTableStaffRequiredValueCellIdPrefix = "planetBuildingSingleBuildingResourcesTableStaffRequiredValueCell_";
var BuildingMenuSingleBuildingResourceTableStaffRequiredValueTextClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableStaffRequiredValueText";
var BuildingMenuSingleBuildingResourceTableStaffRequiredValueTextIdPrefix = "planetBuildingSingleBuildingResourcesTableStaffRequiredValueText_";
var BuildingMenuSingleBuildingResourceTableStaffRequiredChangeCellClass = "interfaceTableCell planetBuildingSingleBuildingResourcesTableStaffRequiredChangeCell";
var BuildingMenuSingleBuildingResourceTableStaffRequiredChangeCellIdPrefix = "planetBuildingSingleBuildingResourcesTableStaffRequiredChangeCell_";
var BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextClass = "interfaceTableRow planetBuildingSingleBuildingResourcesTableStaffRequiredChangeText";
var BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextIdPrefix = "planetBuildingSingleBuildingResourcesTableStaffRequiredChangeText_";

var BuildingMenuSingleBuildingResourceTablePositiveValueClass = " planetBuildingSingleBuildingResourceTableValuePositive";
var BuildingMenuSingleBuildingResourceTableNeutralValueClass = " planetBuildingSingleBuildingResourceTableValueNeutral";
var BuildingMenuSingleBuildingResourceTableNegativeValueClass = " planetBuildingSingleBuildingResourceTableValueNegative";
var BuildingMenuSingleBuildingResourceTableSpacingCellClass = "interfaceTableCell planetBuildingSingleResourceTableSpacingCell";

var BuildingMenuSingleBuildingBuildDemolishContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingBuildDemolishContainer";
var BuildingMenuSingleBuildingBuildButtonsContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingButtonsContainer planetBuildingSingleBuildingBuildButtonsContainer planetBuildingUnfoldedOnlyBuilding";
var BuildingMenuSingleBuildingDemolishButtonsContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingButtonsContainer planetBuildingSingleBuildingDemolishButtonsContainer planetBuildingUnfoldedOnlyBuilding";
var BuildingMenuSingleBuildingBuildDemolishButtonsContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingButtonsContainer planetBuildingSingleBuildingBuildDemolishButtonsContainer";

var BuildingMenuSingleBuildingUpgradeDowngradeContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingUpgradeDowngradeContainer";
var BuildingMenuSingleBuildingUpgradeButtonsContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingButtonsContainer planetBuildingSingleBuildingUpgradeButtonsContainer planetBuildingUnfoldedOnlyBuilding";
var BuildingMenuSingleBuildingDowngradeButtonsContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingButtonsContainer planetBuildingSingleBuildingDowngradeButtonsContainer planetBuildingUnfoldedOnlyBuilding";
var BuildingMenuSingleBuildingUpgradeDowngradeButtonsContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingButtonsContainer planetBuildingSingleBuildingUpgradeDowngradeButtonsContainer";

var BuildingMenuSingleBuildingSingleButtonClass = "planetBuildingsSingleBuildingSingleButton";
var BuildingMenuSingleBuildingSingleButtonImageClass = "planetBuildingSingleBuildingSingleButtonImage";
var BuildingMenuSingleBuildingSingleButtonSubtextClass = "planetBuildingSingleBuildingSingleButtonText";
var BuildingMenuSingleBuildingSingleInputNumberClass = "interfaceInputNumber planetBuildingsSingleBuildingSingleInputNumber";

var BuildingMenuSingleBuildingSingleBuildDemolishInputIdPrefix = "planetBuildingsSingleBuildingSingleBuildDemolishInput_";
var BuildingMenuSingleBuildingSingleUpgradeDowngradeInputIdPrefix = "planetBuildingsSingleBuildingSingleUpgradeDowngradeInput_";

var BuildingMenuSingleBuildingBuildImagePath = "RESOURCES/ICONS/Plus_Fancy.png";
var BuildingMenuSingleBuildingDemolishImagePath = "RESOURCES/ICONS/Ex_Fancy.png";
var BuildingMenuSingleBuildingUpgradeImagePath = "RESOURCES/ICONS/Upgrade_Fancy.png";
var BuildingMenuSingleBuildingDowngradeImagePath = "RESOURCES/ICONS/Downgrade_Fancy.png";

var BuildingMenuSingleBuildingControlContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingControlContainer";
var BuildingMenuSingleBuildingFoldedOperatorContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingOperatorsContainer planetBuildingSingleBuildingOperatorsFoldedContainer planetBuildingFoldedOnlyBuilding";
var BuildingMenuSingleBuildingFoldedSideButtonsContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingSideButtonsContainer planetBuildingSingleBuildingSideButtonsFoldedContainer planetBuildingFoldedOnlyBuilding";
var BuildingMenuSingleBuildingUnfoldedOperatorContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingOperatorsContainer planetBuildingSingleBuildingOperatorsUnfoldedContainer planetBuildingUnfoldedOnlyBuilding";
var BuildingMenuSingleBuildingUnfoldedSideButtonsContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingSideButtonsContainer planetBuildingSingleBuildingSideButtonsUnfoldedContainer planetBuildingUnfoldedOnlyBuilding";
var BuildingMenuSingleBuildingControlAlertsContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingAlertsContainer";

var BuildingMenuSingleBuildingOperatorHeaderContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingOperatorHeaderContainer";
var BuildingMenuSingleBuildingOperatorHeaderTextContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingOperatorHeaderTextContainer";
var BuildingMenuSingleBuildingOperatorHeaderTextClass = "planetBuildingSingleBuildingOperatorHeaderText";

var BuildingMenuSingleBuildingOperatorControlMenuContainerClass = "planetBuildingElementsContainer planetBuildingsSingleBuildingControlMenuContainer";
var BuildingMenuSingleBuildingOperatorControlMenuLeftSideContainerClass = "planetBuildingElementsContainer planetBuildingsSingleBuildingControlMenuLeftContainer";

var BuildingMenuSingleBuildingOperatorButtonsContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingButtonsContainer planetBuildingSingleBuildingOperatorButtonsContainer";
var BuildingMenuSingleBuildingAddRemoveOperatorButtonClass = "planetBuildingsSingleBuildingAddRemoveOperatorButton";
var BuildingMenuSingleBuildingAddRemoveOperatorButtonImageClass = "planetBuildingsSingleBuildingAddRemoveOperatorButtonImage";
var BuildingMenuSingleBuildingAddOperatorButtonImagePath = "RESOURCES/ICONS/Plus_Simple.png";
var BuildingMenuSingleBuildingRemoveOperatorButtonImagePath = "RESOURCES/ICONS/Minus_Simple.png";

var BuildingMenuSingleBuildingOperatorCustomInputClass = "interfaceInputNumberFixed planetBuildingsSingleBuildingAddRemoveOperatorInputNumber";
var BuildingMenuSingleBuildingOperatorCustomInputIdPrefix = "planetBuildingSingleBuildingOperatorsInput_";

var BuildingMenuSingleBuildingOperatorsNumbersContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingOperatorNumbersContainer";
var BuildingMenuSingleBuildingAssignedOperatorsSpanClass = "planetBuildingSingleBuildingOperatorsAssigned interfaceDynamicText";
var BuildingMenuSingleBuildingSlashOperatorsSpanClass = "planetBuildingSingleBuildingOperatorsSlash";
var BuildingMenuSingleBuildingRequiredOperatorsSpanClass = "planetBuildingSingleBuildingOperatorsRequired interfaceDynamicText";
var BuildingMenuSingleBuildingOperatorsEfficiencyValueClass = "planetBuildingSingleBuildingOperatorEfficiencyValue";

var BuildingMenuSingleBuildingFoldedAssignedOperatorsSpanIdPrefix = "planetBuildingSingleBuildingFoldedOperatorsAssignedText_";
var BuildingMenuSingleBuildingFoldedRequiredOperatorsSpanIdPrefix = "planetBuildingSingleBuildingFoldedOperatorsRequiredText_";
var BuildingMenuSingleBuildingUnfoldedAssignedOperatorsSpanIdPrefix = "planetBuildingSingleBuildingUnfoldedOperatorsAssignedText_";
var BuildingMenuSingleBuildingUnfoldedRequiredOperatorsSpanIdPrefix = "planetBuildingSingleBuildingUnfoldedOperatorsRequiredText_";
var BuildingMenuSingleBuildingUnfoldedOperatorsEfficiencyValueIdPrefix = "planetBuildingSingleBuildingOperatorEfficiencyValue_";

var BuildingMenuSingleBuildingEfficiencyContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingEfficiencyContainer";
var BuildingMenuSingleBuildingEfficiencyPrefixClass = "planetBuildingSingleBuildingEfficiencyPrefix";
var BuildingMenuSingleBuildingEfficiencyValueClass = "planetBuildingSingleBuildingEfficiencyValue";
var BuildingMenuSingleBuildingEfficiencyValueIdPrefix = "planetBuildingSingleBuildingEfficiencyValue_";

var BuildingMenuSingleBUildingEfficiencyInfoIconContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingInfoIconContainer";
var BuildingMenuSingleBUildingEfficiencyInfoIconClass = "planetBuildingSingleBuildingInfoIcon";
var BuildingMenuSingleBUildingEfficiencyInfoIconPath = "RESOURCES/ICONS/Info.png";

var BuildingMenuSingleBuildingEfficiencyInfoContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingInfoContent";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingSingleEfficiencyContainer";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerPowerIdPrefix = "planetBuildingSingleBuildingSingleEfficiencyPowerContainer_";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerStaffIdPrefix = "planetBuildingSingleBuildingSingleEfficiencyStaffContainer_";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerHazardIdPrefix = "planetBuildingSingleBuildingSingleEfficiencyHazardContainer_";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerDiscontentIdPrefix = "planetBuildingSingleBuildingSingleEfficiencyDiscontentContainer_";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerMineralsIdPrefix = "planetBuildingSingleBuildingSingleEfficiencyMineralsContainer_";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyImageClass = "planetBuildingSingleBuildingSingleEfficiencyIcon";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyValueClass = "planetBuildingSingleBuildingSingleEfficiencyText";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyPowerValueIdPrefix = "planetBuildingSingleBuildingSingleEfficiencyPowerValue_";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyStaffValueIdPrefix = "planetBuildingSingleBuildingSingleEfficiencyStaffValue_";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyHazardValueIdPrefix = "planetBuildingSingleBuildingSingleEfficiencyHazardValue_";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyDiscontentValueIdPrefix = "planetBuildingSingleBuildingSingleEfficiencyDiscontentValue_";
var BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyMineralsValueIdPrefix = "planetBuildingSingleBuildingSingleEfficiencyMineralsValue_";

var BuildingMenuSingleBuildingOperatorControlMenuRightSideContainerClass = "planetBuildingElementsContainer planetBuildingsSingleBuildingControlMenuRightContainer";

var BuildingMenuSingleBuildingOperatorControlButtonSingleButtonClass = "planetBuildingsSingleBuildingOperatorControlButton";
var BuildingMenuSingleBuildingOperatorControlButtonSingleButtonImageClass = "planetBuildingsSingleBuildingOperatorControlButtonImage interfaceButton2x1";
var BuildingMenuSingleBuildingOperatorControlButtonSingleButtonImagePath = "RESOURCES/MAIN_INTERFACE/Button_200x100.png";
var BuildingMenuSingleBuildingOperatorControlButtonSingleButtonTextClass = "planetBuildingsSingleBuildingOperatorControlButtonText";

var BuildingMenuSingleBuildingSideButtonClass = "planetBuildingsSingleBuildingSideButton";
var BuildingMenuSingleBuildingSideButtonImageClass = "planetBuildingSingleBuildingSideButtonImage";
var BuildingMenuSingleBuildingSideButtonFoldedImagePath = "RESOURCES/ICONS/Folded.png";
var BuildingMenuSingleBuildingSideButtonUnoldedImagePath = "RESOURCES/ICONS/Unfolded.png";
var BuildingMenuSingleBuildingSideButtonPowerButtonIdPrefix = "planetBuildingsSingleBuildingPowerButton_";
var BuildingMenuSingleBuildingSideButtonPoweredOnImagePath = "RESOURCES/ICONS/PowerOn.png";
var BuildingMenuSingleBuildingSideButtonPoweredOffImagePath = "RESOURCES/ICONS/PowerOff.png";

var BuildingMenuSingleBuildingAlertContainerClass = "planetBuildingAlertIconContainer";
var BuildingMenuSingleBuildingSingleAlertClass = "planetBuildingAlertIcon";

//[containerID, iconID, iconPathIndex, altText]
var BuildingMenuSingleBuildingAlertContainerIdPrefixesArray = [
	["planetBuildingSingleBuildingAlertUnpowered_","planetBuildingSingleBuildingAlertUnpoweredImage_",10,"This building is currently turned off and not functioning."],
	["planetBuildingSingleBuildingAlertPowerCritical_","planetBuildingSingleBuildingAlertPowerCriticalImage_",15,"Not enough power for this building to start working even on low efficiency."],
	["planetBuildingSingleBuildingAlertPowerInsufficient_","planetBuildingSingleBuildingAlertPowerInsufficientImage_",14,"Insufficient power is reducing this building's efficiency."],
	["planetBuildingSingleBuildingAlertPowerConsumedAndGenerated_","planetBuildingSingleBuildingAlertPowerConsumedAndGeneratedImage_",13,"This building requires power to start generating (more) power."],
	["planetBuildingSingleBuildingAlertPowerSensitive_","planetBuildingSingleBuildingAlertPowerSensitiveImage_",16,"This building requires uninterrupted power supply to function."],
	
	["planetBuildingSingleBuildingAlertSensitiveIssue_","planetBuildingSingleBuildingAlertSensitiveIssueImage_",19,"Unstable power supply prevents this building from working."],
	["planetBuildingSingleBuildingAlertOverstaffed_","planetBuildingSingleBuildingAlertOverstaffedImage_",1,"This building is running with extra efficiency due to extra staff being present."],
	["planetBuildingSingleBuildingAlertUnderstaffed_","planetBuildingSingleBuildingAlertUnderstaffedImage_",2,"Insufficient staff is reducing this building's efficiency."],
	["planetBuildingSingleBuildingAlertNoStaff_","planetBuildingSingleBuildingAlertNoStaffImage_",3,"This building is disabled due to lack of staff."],
	["planetBuildingSingleBuildingAlertNoStaffBonus_","planetBuildingSingleBuildingAlertNoStaffBonusImage_",1,"This building is receiving no additional efficiency from extra staff."],
	
	["planetBuildingSingleBuildingAlertStaffMandatory_","planetBuildingSingleBuildingAlertStaffMandatoryImage_",4,"This building only functions if fully staffed."],
	["planetBuildingSingleBuildingAlertStaffMandatoryIssue_","planetBuildingSingleBuildingAlertStaffMandatoryIssueImage_",7,"Insufficient staff prevents this building from working."],
	["planetBuildingSingleBuildingAlertStaffNotNeededIssue_","planetBuildingSingleBuildingAlertStaffNotNeededIssueImage_",5,"Staff is not needed for this building."],
	["planetBuildingSingleBuildingAlertHazard_","planetBuildingSingleBuildingAlertHazardImage_",36,"This building is sensitive to hazardous conditions."],
	["planetBuildingSingleBuildingAlertHazardIssue_","planetBuildingSingleBuildingAlertHazardIssueImage_",38,"Hazardous environment reduces this building's efficiency."],
	
	["planetBuildingSingleBuildingAlertHazardCritical_","planetBuildingSingleBuildingAlertHazardCriticalImage_",39,"Environment is too hazardous for this building to function."],
	["planetBuildingSingleBuildingAlertHazardUnaffected_","planetBuildingSingleBuildingAlertHazardUnaffectedImage_",37,"This building is not affected by hazardous conditions."],
	["planetBuildingSingleBuildingAlertMineralsRequired_","planetBuildingSingleBuildingAlertMineralsRequiredImage_",28,"This building requires resource deposits to be present on planet."],
	["planetBuildingSingleBuildingAlertMineralsRequiredDifferent_","planetBuildingSingleBuildingAlertMineralsRequiredDifferentImage_",29,"Required resource deposits are different from expected output."],
	["planetBuildingSingleBuildingAlertMineralsOutputLimited_","planetBuildingSingleBuildingAlertMineralsOutputLimitedImage_",30,"Some of this building's output resources are completely missing and cannot be extracted here."],
	
	["planetBuildingSingleBuildingAlertMineralsOutputMissing_","planetBuildingSingleBuildingAlertMineralsOutputMissingImage_",31,"There are no resources present that this building can extract."],
	["planetBuildingSingleBuildingAlertMineralsInputInsufficient_","planetBuildingSingleBuildingAlertMineralsInputInsufficientImage_",34,"Resource deposits are insufficient for amount of buildings of this type. Efficiency reduced."],
	["planetBuildingSingleBuildingAlertMineralsInputMissing_","planetBuildingSingleBuildingAlertMineralsInputMissingImage_",35,"Required resource deposits for this building are missing."],
	["planetBuildingSingleBuildingAlertUnrestUnaffected_","planetBuildingSingleBuildingAlertUnrestUnaffectedImage_",21,"This building is not affected by unrest and discontent."],
	["planetBuildingSingleBuildingAlertUnrestIssue_","planetBuildingSingleBuildingAlertUnrestIssueImage_",22,"Unrest and discontent are reducing this building's efficiency."],
	
	["planetBuildingSingleBuildingAlertUnrestCritical_","planetBuildingSingleBuildingAlertUnrestCriticalImage_",23,"Unrest and discontent are making it too dangerous for this building to function."],
	["planetBuildingSingleBuildingAlertUnrestSensitive_","planetBuildingSingleBuildingAlertUnrestSensitiveImage_",24,"This building can only work at secure and safe places."],
	["planetBuildingSingleBuildingAlertUnrestSensitiveIssue_","planetBuildingSingleBuildingAlertUnrestSensitiveIssueImage_",27,"Unrest and discontent presence prevents this building from working."]//,
	//["","",,""],
];
var BuildingMenuSingleBuildingAlertIconPathesArray = [
	"RESOURCES/ICONS/Portrait.png",	//0
	"RESOURCES/ICONS/Portrait_Green.png",
	"RESOURCES/ICONS/Portrait_Yellow.png",
	"RESOURCES/ICONS/Portrait_Red.png",	
	
	"RESOURCES/ICONS/PortraitAlert.png",	//4
	"RESOURCES/ICONS/PortraitAlert_Green.png",
	"RESOURCES/ICONS/PortraitAlert_Yellow.png",
	"RESOURCES/ICONS/PortraitAlert_Red.png",
	
	"RESOURCES/ICONS/TurnedOff.png",	//8
	"RESOURCES/ICONS/TurnedOff_Green.png",
	"RESOURCES/ICONS/TurnedOff_Yellow.png",
	"RESOURCES/ICONS/TurnedOff_Red.png",
	
	"RESOURCES/ICONS/Power3.png",	//12
	"RESOURCES/ICONS/Power3_Green.png",
	"RESOURCES/ICONS/Power3_Yellow.png",
	"RESOURCES/ICONS/Power3_Red.png",
	
	"RESOURCES/ICONS/PowerAlert2.png",	//16
	"RESOURCES/ICONS/PowerAlert2_Green.png",
	"RESOURCES/ICONS/PowerAlert2_Yellow.png",
	"RESOURCES/ICONS/PowerAlert2_Red.png",
	
	"RESOURCES/ICONS/Discontent.png",	//20
	"RESOURCES/ICONS/Discontent_Green.png",
	"RESOURCES/ICONS/Discontent_Yellow.png",
	"RESOURCES/ICONS/Discontent_Red.png",
	
	"RESOURCES/ICONS/DiscontentAlert.png",	//24
	"RESOURCES/ICONS/DiscontentAlert_Green.png",
	"RESOURCES/ICONS/DiscontentAlert_Yellow.png",
	"RESOURCES/ICONS/DiscontentAlert_Red.png",
	
	"RESOURCES/ICONS/Minerals.png",	//28
	"RESOURCES/ICONS/Minerals_Green.png",
	"RESOURCES/ICONS/Minerals_Yellow.png",
	"RESOURCES/ICONS/Minerals_Red.png",
	
	"RESOURCES/ICONS/MineralsAlert.png",	//32
	"RESOURCES/ICONS/MineralsAlert_Green.png",
	"RESOURCES/ICONS/MineralsAlert_Yellow.png",
	"RESOURCES/ICONS/MineralsAlert_Red.png",
	
	"RESOURCES/ICONS/Hazard.png",	//36
	"RESOURCES/ICONS/Hazard_Green.png",
	"RESOURCES/ICONS/Hazard_Yellow.png",
	"RESOURCES/ICONS/Hazard_Red.png",
];	//BuildingMenuSingleBuildingAlertIconPathesArray



/* var BuildingMenuSingleBuildingSingleAlertUnpoweredIdPrefix = "planetBuildingSingleBuildingAlertUnpowered_";
var BuildingMenuSingleBuildingSingleAlertPowerCriticalIdPrefix = "planetBuildingSingleBuildingAlertPowerCritical_";
var BuildingMenuSingleBuildingSingleAlertPowerInsufficientIdPrefix = "planetBuildingSingleBuildingAlertPowerInsufficient_";
var BuildingMenuSingleBuildingSingleAlertPowerConsumedAndGeneratedIdPrefix = "planetBuildingSingleBuildingAlertPowerConsumedAndGenerated_";
var BuildingMenuSingleBuildingSingleAlertPowerSensitiveIdPrefix = "planetBuildingSingleBuildingAlertPowerSensitive_";
var BuildingMenuSingleBuildingSingleAlertPowerSensitiveIssueIdPrefix = "planetBuildingSingleBuildingAlertSensitiveIssue_";
var BuildingMenuSingleBuildingSingleAlertOverstaffedIdPrefix = "planetBuildingSingleBuildingAlertOverstaffed_";
var BuildingMenuSingleBuildingSingleAlertUnderstaffedIdPrefix = "planetBuildingSingleBuildingAlertUnderstaffed_";
var BuildingMenuSingleBuildingSingleAlertNoStaffIdPrefix = "planetBuildingSingleBuildingAlertNoStaff_";
var BuildingMenuSingleBuildingSingleAlertNoStaffBonusIdPrefix = "planetBuildingSingleBuildingAlertNoStaffBonus_";
var BuildingMenuSingleBuildingSingleAlertStaffMandatoryIdPrefix = "planetBuildingSingleBuildingAlertStaffMandatory_";
var BuildingMenuSingleBuildingSingleAlertStaffMandatoryIssueIdPrefix = "planetBuildingSingleBuildingAlertStaffMandatoryIssue_";
var BuildingMenuSingleBuildingSingleAlertStaffNotNeededIssueIdPrefix = "planetBuildingSingleBuildingAlertStaffNotNeededIssue_";
var BuildingMenuSingleBuildingSingleAlertHazardIdPrefix = "planetBuildingSingleBuildingAlertHazard_";
var BuildingMenuSingleBuildingSingleAlertHazardIssueIdPrefix = "planetBuildingSingleBuildingAlertHazardIssue_";
var BuildingMenuSingleBuildingSingleAlertHazardCriticalIdPrefix = "planetBuildingSingleBuildingAlertHazardCritical_";
var BuildingMenuSingleBuildingSingleAlertHazardUnaffectedIdPrefix = "planetBuildingSingleBuildingAlertHazardUnaffected_";

var BuildingMenuSingleBuildingSingleAlertMineralsRequiredIdPrefix = "planetBuildingSingleBuildingAlertMineralsRequired_";
var BuildingMenuSingleBuildingSingleAlertMineralsRequiredDifferentIdPrefix = "planetBuildingSingleBuildingAlertMineralsRequiredDifferent_";
var BuildingMenuSingleBuildingSingleAlertMineralsOutputLimitedIdPrefix = "planetBuildingSingleBuildingAlertMineralsOutputLimited_";
var BuildingMenuSingleBuildingSingleAlertMineralsOutputMissingIdPrefix = "planetBuildingSingleBuildingAlertMineralsOutputMissing_";
var BuildingMenuSingleBuildingSingleAlertMineralsInputInsufficientIdPrefix = "planetBuildingSingleBuildingAlertMineralsInputInsufficient_";
var BuildingMenuSingleBuildingSingleAlertMineralsInputMissingIdPrefix = "planetBuildingSingleBuildingAlertMineralsInputMissing_";

var BuildingMenuSingleBuildingSingleAlertUnrestUnaffectedIdPrefix = "planetBuildingSingleBuildingAlertUnrestUnaffected_";
var BuildingMenuSingleBuildingSingleAlertUnrestIssueIdPrefix = "planetBuildingSingleBuildingAlertUnrestIssue_";
var BuildingMenuSingleBuildingSingleAlertUnrestCriticalIdPrefix = "planetBuildingSingleBuildingAlertUnrestCritical_";
var BuildingMenuSingleBuildingSingleAlertUnrestSensitiveIdPrefix = "planetBuildingSingleBuildingAlertUnrestSensitive_";
var BuildingMenuSingleBuildingSingleAlertUnrestSensitiveIssueIdPrefix = "planetBuildingSingleBuildingAlertUnrestSensitiveIssue_"; */

/* var BuildingMenuSingleBuildingSingleAlertIconStaffCyan = "RESOURCES/ICONS/Portrait.png";
var BuildingMenuSingleBuildingSingleAlertIconStaffGreen = "RESOURCES/ICONS/Portrait_Green.png";
var BuildingMenuSingleBuildingSingleAlertIconStaffYellow = "RESOURCES/ICONS/Portrait_Yellow.png";
var BuildingMenuSingleBuildingSingleAlertIconStaffRed = "RESOURCES/ICONS/Portrait_Red.png";

var BuildingMenuSingleBuildingSingleAlertIconStaffMandatoryCyan = "RESOURCES/ICONS/PortraitAlert.png";
var BuildingMenuSingleBuildingSingleAlertIconStaffMandatoryGreen = "RESOURCES/ICONS/PortraitAlert_Green.png";
var BuildingMenuSingleBuildingSingleAlertIconStaffMandatoryYellow = "RESOURCES/ICONS/PortraitAlert_Yellow.png";
var BuildingMenuSingleBuildingSingleAlertIconStaffMandatoryRed = "RESOURCES/ICONS/PortraitAlert_Red.png";

var BuildingMenuSingleBuildingSingleAlertIconTurnedOffCyan = "RESOURCES/ICONS/TurnedOff.png";
var BuildingMenuSingleBuildingSingleAlertIconTurnedOffGreen = "RESOURCES/ICONS/TurnedOff_Green.png";
var BuildingMenuSingleBuildingSingleAlertIconTurnedOffYellow = "RESOURCES/ICONS/TurnedOff_Yellow.png";
var BuildingMenuSingleBuildingSingleAlertIconTurnedOffRed = "RESOURCES/ICONS/TurnedOff_Red.png";

var BuildingMenuSingleBuildingSingleAlertIconEnergyCyan = "RESOURCES/ICONS/Power3.png";
var BuildingMenuSingleBuildingSingleAlertIconEnergyGreen = "RESOURCES/ICONS/Power3_Green.png";
var BuildingMenuSingleBuildingSingleAlertIconEnergyYellow = "RESOURCES/ICONS/Power3_Yellow.png";
var BuildingMenuSingleBuildingSingleAlertIconEnergyRed = "RESOURCES/ICONS/Power3_Red.png";

var BuildingMenuSingleBuildingSingleAlertIconEnergySensitiveCyan = "RESOURCES/ICONS/PowerAlert2.png";
var BuildingMenuSingleBuildingSingleAlertIconEnergySensitiveGreen = "RESOURCES/ICONS/PowerAlert2_Green.png";
var BuildingMenuSingleBuildingSingleAlertIconEnergySensitiveYellow = "RESOURCES/ICONS/PowerAlert2_Yellow.png";
var BuildingMenuSingleBuildingSingleAlertIconEnergySensitiveRed = "RESOURCES/ICONS/PowerAlert2_Red.png";

var BuildingMenuSingleBuildingSingleAlertIconUnrestCyan = "RESOURCES/ICONS/Discontent.png";
var BuildingMenuSingleBuildingSingleAlertIconUnrestGreen = "RESOURCES/ICONS/Discontent_Green.png";
var BuildingMenuSingleBuildingSingleAlertIconUnrestYellow = "RESOURCES/ICONS/Discontent_Yellow.png";
var BuildingMenuSingleBuildingSingleAlertIconUnrestRed = "RESOURCES/ICONS/Discontent_Red.png";

var BuildingMenuSingleBuildingSingleAlertIconUnrestSensitiveCyan = "RESOURCES/ICONS/DiscontentAlert.png";
var BuildingMenuSingleBuildingSingleAlertIconUnrestSensitiveGreen = "RESOURCES/ICONS/DiscontentAlert_Green.png";
var BuildingMenuSingleBuildingSingleAlertIconUnrestSensitiveYellow = "RESOURCES/ICONS/DiscontentAlert_Yellow.png";
var BuildingMenuSingleBuildingSingleAlertIconUnrestSensitiveRed = "RESOURCES/ICONS/DiscontentAlert_Red.png";

var BuildingMenuSingleBuildingSingleAlertIconMineralsCyan = "RESOURCES/ICONS/Minerals.png";
var BuildingMenuSingleBuildingSingleAlertIconMineralsGreen = "RESOURCES/ICONS/Minerals_Green.png";
var BuildingMenuSingleBuildingSingleAlertIconMineralsYellow = "RESOURCES/ICONS/Minerals_Yellow.png";
var BuildingMenuSingleBuildingSingleAlertIconMineralsRed = "RESOURCES/ICONS/Minerals_Red.png";

var BuildingMenuSingleBuildingSingleAlertIconMineralsIssueCyan = "RESOURCES/ICONS/MineralsAlert.png";
var BuildingMenuSingleBuildingSingleAlertIconMineralsIssueGreen = "RESOURCES/ICONS/MineralsAlert_Green.png";
var BuildingMenuSingleBuildingSingleAlertIconMineralsIssueYellow = "RESOURCES/ICONS/MineralsAlert_Yellow.png";
var BuildingMenuSingleBuildingSingleAlertIconMineralsIssueRed = "RESOURCES/ICONS/MineralsAlert_Red.png";

var BuildingMenuSingleBuildingSingleAlertIconHazardCyan = "RESOURCES/ICONS/Hazard.png";
var BuildingMenuSingleBuildingSingleAlertIconHazardGreen = "RESOURCES/ICONS/Hazard_Green.png";
var BuildingMenuSingleBuildingSingleAlertIconHazardYellow = "RESOURCES/ICONS/Hazard_Yellow.png";
var BuildingMenuSingleBuildingSingleAlertIconHazardRed = "RESOURCES/ICONS/Hazard_Red.png"; */

var InterfaceBuildingMenuBuildingsOnList = 0;

function interfaceBuildMenuInitBuildingsList(outputDocument){
	var buildingListContainer = outputDocument.getElementById(InterfaceBuildingMenuPlanetListContainerID);
	// return;
	buildingListContainer.innerHTML = "";
	
	InterfaceBuildingMenuBuildingsOnList = 0;

	//console.log(PlanetsArray[PlanetsCurrentPlanet].name);
	for(let i = 0; i < PlanetsArray[PlanetsCurrentPlanet].buildings.length; i++) {
		let tmpBuilding = PlanetsArray[PlanetsCurrentPlanet].buildings[i];
		let tmpBuildingBlueprint = BuildingsArray[tmpBuilding.blueprintIndex];
		
		//check categories, if any matches enabled one, flag it
		let tmpCategoryOk = false;
		for(let j = 0; j < tmpBuildingBlueprint.categories.length; j++){
			if(BuildingCategoriesEnabled[tmpBuildingBlueprint.categories[j]]) {
				tmpCategoryOk = true;
				break;
			}
		}
		//if doesn't match any enabled category, skip
		//if(!tmpCategoryOk) continue;
		
		var tmpBuildingElement = outputDocument.createElement("div");
		if(tmpBuilding.folded) tmpBuildingElement.className = BuildingMenuSingleBuildingClassFolded;
		else tmpBuildingElement.className = BuildingMenuSingleBuildingClassUnfolded;
		tmpBuildingElement.id = BuildingMenuSingleBuildingIdPrefix + tmpBuilding.index;
		
		if(!tmpCategoryOk || !tmpBuildingBlueprint.unlocked) tmpBuildingElement.style.display = "none";
		else tmpBuildingElement.style.display = "block";
		
			var tmpBuildingContainer = outputDocument.createElement("div");
			tmpBuildingContainer.className = BuildingMenuSingleBuildingContainerClass;
				var tmpBuildingInfoContainer = outputDocument.createElement("div");
				tmpBuildingInfoContainer.className = BuildingMenuSingleBuildingInfoContainerClass;
					var tmpBuildingInfoHeaderContainer = outputDocument.createElement("div");
					tmpBuildingInfoHeaderContainer.className = BuildingMenuSingleBuildingInfoHeaderContainerClass;
						var tmpBuildingNameContainer = outputDocument.createElement("div");
						tmpBuildingNameContainer.className = BuildingMenuSingleBuildingInfoHeaderNameContainerClass;
							var tmpBuildingNameValue = outputDocument.createElement("span");
							tmpBuildingNameValue.className = BuildingMenuSingleBuildingInfoHeaderNameValueClass;
							tmpBuildingNameValue.id = BuildingMenuSingleBuildingInfoHeaderNameValueClassIdPrefix + tmpBuilding.index;
							tmpBuildingNameContainer.append(tmpBuildingNameValue);
							tmpBuildingNameContainer.innerHTML = tmpBuildingBlueprint.name;
							
						var tmpBuildingAmountLevelContainer = outputDocument.createElement("div");
						tmpBuildingAmountLevelContainer.className = BuildingMenuSingleBuildingInfoHeaderAmountLevelContainerClass;
							var tmpBuildingLevelContainer = outputDocument.createElement("div");
							tmpBuildingLevelContainer.className = BuildingMenuSingleBuildingInfoHeaderLevelContainerClass;
								var tmpBuildingLevelPrefix = outputDocument.createElement("span");
								tmpBuildingLevelPrefix.className = BuildingMenuSingleBuildingInfoHeaderLevelPrefixClass;
								tmpBuildingLevelPrefix.innerHTML = "Lv.";
								var tmpBuildingLevelValue = outputDocument.createElement("span");
								tmpBuildingLevelValue.className = BuildingMenuSingleBuildingInfoHeaderLevelValueClass ;
								tmpBuildingLevelValue.id = BuildingMenuSingleBuildingInfoHeaderLevelValueClassIdPrefix + tmpBuilding.index;
								tmpBuildingLevelValue.innerHTML = (tmpBuilding.level + 1);
								
								tmpBuildingLevelContainer.append(tmpBuildingLevelPrefix);
								tmpBuildingLevelContainer.innerHTML += "&nbsp;";
								tmpBuildingLevelContainer.append(tmpBuildingLevelValue);
							
							var tmpBuildingAmountContainer = outputDocument.createElement("div");
							tmpBuildingAmountContainer.className = BuildingMenuSingleBuildingInfoHeaderAmountContainerClass;
							
								var tmpBuildingAmountPrefix = outputDocument.createElement("span");
								tmpBuildingAmountPrefix.className = BuildingMenuSingleBuildingInfoHeaderAmountPrefixClass;
								tmpBuildingAmountPrefix.innerHTML = "×";
								var tmpBuildingAmountValue = outputDocument.createElement("span");
								tmpBuildingAmountValue.className = BuildingMenuSingleBuildingInfoHeaderAmountValueClass ;
								tmpBuildingAmountValue.id = BuildingMenuSingleBuildingInfoHeaderAmountValueClassIdPrefix + tmpBuilding.index;
								tmpBuildingAmountValue.innerHTML = tmpBuilding.count;
								
								tmpBuildingAmountContainer.append(tmpBuildingAmountPrefix);
								tmpBuildingAmountContainer.innerHTML += "&nbsp;";
								tmpBuildingAmountContainer.append(tmpBuildingAmountValue);
							tmpBuildingAmountLevelContainer.append(tmpBuildingLevelContainer);
							tmpBuildingAmountLevelContainer.append(tmpBuildingAmountContainer);
						tmpBuildingInfoHeaderContainer.append(tmpBuildingNameContainer);
						tmpBuildingInfoHeaderContainer.append(tmpBuildingAmountLevelContainer);
					
					var tmpBuildingInfoResourceTableContainer = outputDocument.createElement("div");
					tmpBuildingInfoResourceTableContainer.className = BuildingMenuSingleBuildingResourceTableContainerClass;
						var tmpBuildingInfoResourceTable =  outputDocument.createElement("table");
						tmpBuildingInfoResourceTable.className = BuildingMenuSingleBuildingResourceTableClass;
							var tmpBuildingInfoResourceTableBody = outputDocument.createElement("tbody");
							tmpBuildingInfoResourceTableBody.className = BuildingMenuSingleBuildingResourceTableBodyClass;
							
								var tmpBuildingInfoResourceTableProductionHeaderRow = outputDocument.createElement("tr");
								tmpBuildingInfoResourceTableProductionHeaderRow.className = BuildingMenuSingleBuildingResourceTableProductionHeaderRowClass;
								tmpBuildingInfoResourceTableProductionHeaderRow.id = BuildingMenuSingleBuildingResourceTableProductionHeaderRowIdPrefix + tmpBuilding.index;
								tmpBuildingInfoResourceTableBody.append(tmpBuildingInfoResourceTableProductionHeaderRow);
								
									var tmpBuildingInfoResourceTableProductionHeaderCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableProductionHeaderCell.className = BuildingMenuSingleBuildingResourceTableProductionHeaderCellClass;
									tmpBuildingInfoResourceTableProductionHeaderCell.id = BuildingMenuSingleBuildingResourceTableProductionHeaderCellIdPrefix + tmpBuilding.index;
									tmpBuildingInfoResourceTableProductionHeaderCell.colSpan = 5;
									tmpBuildingInfoResourceTableProductionHeaderRow.append(tmpBuildingInfoResourceTableProductionHeaderCell);
								
										var tmpBuildingInfoResourceTableProductionHeaderText = outputDocument.createElement("span");
										tmpBuildingInfoResourceTableProductionHeaderText.className = BuildingMenuSingleBuildingResourceTableProductionHeaderCellTextClass;
										tmpBuildingInfoResourceTableProductionHeaderText.id = BuildingMenuSingleBuildingResourceTableProductionHeaderCellTextIdPrefix;
										tmpBuildingInfoResourceTableProductionHeaderText.innerHTML = "Production:";
										tmpBuildingInfoResourceTableProductionHeaderCell.append(tmpBuildingInfoResourceTableProductionHeaderText);
									
								//produced
								
								var tmpBuildingIsProducing = false;
								
								for(let j = 0; j < ResourcesArray.length; j++){
									let tmpIndex = j;
									if(ResourceNamesDisplayInAlphabeticalOrder){
										tmpIndex = ResourcesNamesSortedArrayIndexes[j];
									}
									
									let tmpProducedResourceTableRow = outputDocument.createElement("tr");
									tmpProducedResourceTableRow.className = BuildingMenuSingleBuildingResourceTableProductionRowClass;
									tmpProducedResourceTableRow.id = BuildingMenuSingleBuildingResourceTableProductionRowIdPrefix + tmpBuilding.index + '_' + tmpIndex;
									tmpBuildingInfoResourceTableBody.append(tmpProducedResourceTableRow);
									
									if(tmpBuildingBlueprint.resourcesProduced[tmpIndex].amount == 0) {
										tmpProducedResourceTableRow.className += BuildingMenuSingleBuildingResourceTableHiddenRowClass;
									}
									else{
										tmpBuildingIsProducing = true;
									}
									
										let tmpProducedResourceTableNameCell = outputDocument.createElement("td");
										tmpProducedResourceTableNameCell.className = BuildingMenuSingleBuildingResourceTableProductionNameCellClass;
										tmpProducedResourceTableNameCell.id = BuildingMenuSingleBuildingResourceTableProductionNameCellIdPrefix + tmpBuilding.index + '_' + tmpIndex;
										tmpProducedResourceTableRow.append(tmpProducedResourceTableNameCell);
										
											let tmpProducedResourceTableNameSpan = outputDocument.createElement("span");
											tmpProducedResourceTableNameSpan.className = BuildingMenuSingleBuildingResourceTableProductionNameTextClass;
											tmpProducedResourceTableNameSpan.id = BuildingMenuSingleBuildingResourceTableProductionNameTextIdPrefix + tmpBuilding.index + '_' + tmpIndex;
											tmpProducedResourceTableNameSpan.innerHTML = tmpBuildingBlueprint.resourcesProduced[tmpIndex].typeName;
											tmpProducedResourceTableNameCell.append(tmpProducedResourceTableNameSpan);
										
										let tmpProducedResourceTableLeftSpacingCell = outputDocument.createElement("td");
										tmpProducedResourceTableLeftSpacingCell.className = BuildingMenuSingleBuildingResourceTableSpacingCellClass;
										tmpProducedResourceTableRow.append(tmpProducedResourceTableLeftSpacingCell);
										
										let tmpProducedResourceTableValueCell = outputDocument.createElement("td");
										tmpProducedResourceTableValueCell.className = BuildingMenuSingleBuildingResourceTableProductionValueCellClass;
										tmpProducedResourceTableValueCell.id = BuildingMenuSingleBuildingResourceTableProductionValueCellIdPrefix + tmpBuilding.index + '_' + tmpIndex;
										tmpProducedResourceTableRow.append(tmpProducedResourceTableValueCell);
										
											let tmpProducedResourceTableValueSpan = outputDocument.createElement("span");
											tmpProducedResourceTableValueSpan.className = BuildingMenuSingleBuildingResourceTableProductionValueTextClass;
											tmpProducedResourceTableValueSpan.id = BuildingMenuSingleBuildingResourceTableProductionValueTextIdPrefix + tmpBuilding.index + '_' + tmpIndex;
											tmpProducedResourceTableValueSpan.innerHTML = "0.0";
											tmpProducedResourceTableValueCell.append(tmpProducedResourceTableValueSpan);
										
										let tmpProducedResourceTableRightSpacingCell = outputDocument.createElement("td");
										tmpProducedResourceTableRightSpacingCell.className = BuildingMenuSingleBuildingResourceTableSpacingCellClass;
										tmpProducedResourceTableRow.append(tmpProducedResourceTableRightSpacingCell);
										
										let tmpProducedResourceTableChangeCell = outputDocument.createElement("td");
										tmpProducedResourceTableChangeCell.className = BuildingMenuSingleBuildingResourceTableProductionChangeCellClass;
										tmpProducedResourceTableChangeCell.id = BuildingMenuSingleBuildingResourceTableProductionChangeCellIdPrefix + tmpBuilding.index + '_' + tmpIndex;
										tmpProducedResourceTableRow.append(tmpProducedResourceTableChangeCell);
										
											let tmpProducedResourceTableChangeSpan = outputDocument.createElement("span");
											tmpProducedResourceTableChangeSpan.className = BuildingMenuSingleBuildingResourceTableProductionChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
											tmpProducedResourceTableChangeSpan.id = BuildingMenuSingleBuildingResourceTableProductionChangeTextIdPrefix + tmpBuilding.index + '_' + tmpIndex;
											//tmpProducedResourceTableChangeSpan.innerHTML = '+' + bigNumberToString(tmpBuildingBlueprint.resourcesProduced[tmpIndex].amount);
											tmpProducedResourceTableChangeSpan.innerHTML = '-';
											tmpProducedResourceTableChangeCell.append(tmpProducedResourceTableChangeSpan);
								}		
								
								var tmpBuildingInfoResourceTableTopSpacingRow = outputDocument.createElement("tr");
								tmpBuildingInfoResourceTableTopSpacingRow.className = BuildingMenuSingleBuildingResourceTableSpacingRowClass + BuildingMenuSingleBuildingResourceTableSpacingRowTopClass;
								tmpBuildingInfoResourceTableTopSpacingRow.id = BuildingMenuSingleBuildingResourceTableSpacingRowTopIdPrefix + tmpBuilding.index;
								tmpBuildingInfoResourceTableBody.append(tmpBuildingInfoResourceTableTopSpacingRow);
								
									var tmpBuildingInfoResourceTableTopSpacingCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableTopSpacingCell.className = BuildingMenuSingleBuildingResourceTableSpacingRowCellClass;
									tmpBuildingInfoResourceTableTopSpacingCell.colSpan = 5;
									tmpBuildingInfoResourceTableTopSpacingRow.append(tmpBuildingInfoResourceTableTopSpacingCell);
								
								var tmpBuildingInfoResourceTableConsumptionHeaderRow = outputDocument.createElement("tr");
								tmpBuildingInfoResourceTableConsumptionHeaderRow.className = BuildingMenuSingleBuildingResourceTableConsumptionHeaderRowClass;
								tmpBuildingInfoResourceTableConsumptionHeaderRow.id = BuildingMenuSingleBuildingResourceTableConsumptionHeaderRowIdPrefix + tmpBuilding.index;
								tmpBuildingInfoResourceTableBody.append(tmpBuildingInfoResourceTableConsumptionHeaderRow);
								
									var tmpBuildingInfoResourceTableConsumptionHeaderCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableConsumptionHeaderCell.className = BuildingMenuSingleBuildingResourceTableConsumptionHeaderCellClass;
									tmpBuildingInfoResourceTableConsumptionHeaderCell.id = BuildingMenuSingleBuildingResourceTableConsumptionHeaderCellIdPrefix + tmpBuilding.index;
									tmpBuildingInfoResourceTableConsumptionHeaderCell.colSpan = 5;
									tmpBuildingInfoResourceTableConsumptionHeaderRow.append(tmpBuildingInfoResourceTableConsumptionHeaderCell);
								
										var tmpBuildingInfoResourceTableConsumptionHeaderText = outputDocument.createElement("span");
										tmpBuildingInfoResourceTableConsumptionHeaderText.className = BuildingMenuSingleBuildingResourceTableConsumptionHeaderCellTextClass;
										tmpBuildingInfoResourceTableConsumptionHeaderText.id = BuildingMenuSingleBuildingResourceTableConsumptionHeaderCellTextIdPrefix;
										tmpBuildingInfoResourceTableConsumptionHeaderText.innerHTML = "Consumption:";
										tmpBuildingInfoResourceTableConsumptionHeaderCell.append(tmpBuildingInfoResourceTableConsumptionHeaderText);
								
								//consumed
								
								var tmpBuildingIsConsuming = false;
								
								for(let j = 0; j < ResourcesArray.length; j++){
									let tmpIndex = j;
									if(ResourceNamesDisplayInAlphabeticalOrder){
										tmpIndex = ResourcesNamesSortedArrayIndexes[j];
									}
									
									let tmpConsumedResourceTableRow = outputDocument.createElement("tr");
									tmpConsumedResourceTableRow.className = BuildingMenuSingleBuildingResourceTableConsumptionRowClass;
									tmpConsumedResourceTableRow.id = BuildingMenuSingleBuildingResourceTableConsumptionRowIdPrefix + tmpBuilding.index + '_' + tmpIndex;
									tmpBuildingInfoResourceTableBody.append(tmpConsumedResourceTableRow);
									
									if(tmpBuildingBlueprint.resourcesConsumed[tmpIndex].amount == 0) {
										tmpConsumedResourceTableRow.className += BuildingMenuSingleBuildingResourceTableHiddenRowClass;
									}
									else{
										tmpBuildingIsConsuming = true;
									}
									
										let tmpConsumedResourceTableNameCell = outputDocument.createElement("td");
										tmpConsumedResourceTableNameCell.className = BuildingMenuSingleBuildingResourceTableConsumptionNameCellClass;
										tmpConsumedResourceTableNameCell.id = BuildingMenuSingleBuildingResourceTableConsumptionNameCellIdPrefix + tmpBuilding.index + '_' + tmpIndex;
										tmpConsumedResourceTableRow.append(tmpConsumedResourceTableNameCell);
										
											let tmpConsumedResourceTableNameSpan = outputDocument.createElement("span");
											tmpConsumedResourceTableNameSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionNameTextClass;
											tmpConsumedResourceTableNameSpan.id = BuildingMenuSingleBuildingResourceTableConsumptionNameTextIdPrefix + tmpBuilding.index + '_' + tmpIndex;
											tmpConsumedResourceTableNameSpan.innerHTML = tmpBuildingBlueprint.resourcesConsumed[tmpIndex].typeName;
											tmpConsumedResourceTableNameCell.append(tmpConsumedResourceTableNameSpan);
										
										let tmpConsumedResourceTableLeftSpacingCell = outputDocument.createElement("td");
										tmpConsumedResourceTableLeftSpacingCell.className = BuildingMenuSingleBuildingResourceTableSpacingCellClass;
										tmpConsumedResourceTableRow.append(tmpConsumedResourceTableLeftSpacingCell);
										
										let tmpConsumedResourceTableValueCell = outputDocument.createElement("td");
										tmpConsumedResourceTableValueCell.className = BuildingMenuSingleBuildingResourceTableConsumptionValueCellClass;
										tmpConsumedResourceTableValueCell.id = BuildingMenuSingleBuildingResourceTableConsumptionValueCellIdPrefix + tmpBuilding.index + '_' + tmpIndex;
										tmpConsumedResourceTableRow.append(tmpConsumedResourceTableValueCell);
										
											let tmpConsumedResourceTableValueSpan = outputDocument.createElement("span");
											tmpConsumedResourceTableValueSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionValueTextClass;
											tmpConsumedResourceTableValueSpan.id = BuildingMenuSingleBuildingResourceTableConsumptionValueTextIdPrefix + tmpBuilding.index + '_' + tmpIndex;
											tmpConsumedResourceTableValueSpan.innerHTML = "0.0";
											tmpConsumedResourceTableValueCell.append(tmpConsumedResourceTableValueSpan);
										
										let tmpConsumedResourceTableRightSpacingCell = outputDocument.createElement("td");
										tmpConsumedResourceTableRightSpacingCell.className = BuildingMenuSingleBuildingResourceTableSpacingCellClass;
										tmpConsumedResourceTableRow.append(tmpConsumedResourceTableRightSpacingCell);
										
										let tmpConsumedResourceTableChangeCell = outputDocument.createElement("td");
										tmpConsumedResourceTableChangeCell.className = BuildingMenuSingleBuildingResourceTableConsumptionChangeCellClass;
										tmpConsumedResourceTableChangeCell.id = BuildingMenuSingleBuildingResourceTableConsumptionChangeCellIdPrefix + tmpBuilding.index + '_' + tmpIndex;
										tmpConsumedResourceTableRow.append(tmpConsumedResourceTableChangeCell);
										
											let tmpConsumedResourceTableChangeSpan = outputDocument.createElement("span");
											tmpConsumedResourceTableChangeSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionChangeTextClass + BuildingMenuSingleBuildingResourceTableNegativeValueClass;
											tmpConsumedResourceTableChangeSpan.id = BuildingMenuSingleBuildingResourceTableConsumptionChangeTextIdPrefix + tmpBuilding.index + '_' + tmpIndex;
											//tmpConsumedResourceTableChangeSpan.innerHTML = '-' + bigNumberToString(tmpBuildingBlueprint.resourcesConsumed[tmpIndex].amount);
											tmpConsumedResourceTableChangeSpan.innerHTML = '-';
											tmpConsumedResourceTableChangeCell.append(tmpConsumedResourceTableChangeSpan);
								}
								
								var tmpBuildingInfoResourceTableBottomSpacingRow = outputDocument.createElement("tr");
								tmpBuildingInfoResourceTableBottomSpacingRow.className = BuildingMenuSingleBuildingResourceTableSpacingRowClass + BuildingMenuSingleBuildingResourceTableSpacingRowBottomClass;
								tmpBuildingInfoResourceTableBottomSpacingRow.id = BuildingMenuSingleBuildingResourceTableSpacingRowBottomIdPrefix + tmpBuilding.index;
								tmpBuildingInfoResourceTableBody.append(tmpBuildingInfoResourceTableBottomSpacingRow);
								
									var tmpBuildingInfoResourceTableBottomSpacingCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableBottomSpacingCell.className = BuildingMenuSingleBuildingResourceTableSpacingRowCellClass;
									tmpBuildingInfoResourceTableBottomSpacingCell.colSpan = 5;
									tmpBuildingInfoResourceTableBottomSpacingRow.append(tmpBuildingInfoResourceTableBottomSpacingCell);
								
								if(tmpBuildingIsProducing && tmpBuildingIsConsuming){
									tmpBuildingInfoResourceTableTopSpacingRow.className = BuildingMenuSingleBuildingResourceTableSpacingRowClass + BuildingMenuSingleBuildingResourceTableSpacingRowTopClass;
								}
								else{
									tmpBuildingInfoResourceTableTopSpacingRow.className = BuildingMenuSingleBuildingResourceTableSpacingRowClass + BuildingMenuSingleBuildingResourceTableSpacingRowTopClass + BuildingMenuSingleBuildingResourceTableHiddenRowClass;
									
									if(tmpBuildingIsProducing){
										tmpBuildingInfoResourceTableProductionHeaderRow.className = BuildingMenuSingleBuildingResourceTableProductionHeaderRowClass;
										tmpBuildingInfoResourceTableConsumptionHeaderRow.className = BuildingMenuSingleBuildingResourceTableConsumptionHeaderRowClass + BuildingMenuSingleBuildingResourceTableHiddenRowClass;
									}
									else if(tmpBuildingIsConsuming){
										tmpBuildingInfoResourceTableProductionHeaderRow.className = BuildingMenuSingleBuildingResourceTableProductionHeaderRowClass + BuildingMenuSingleBuildingResourceTableHiddenRowClass;
										tmpBuildingInfoResourceTableConsumptionHeaderRow.className = BuildingMenuSingleBuildingResourceTableConsumptionHeaderRowClass;
									}
									else{
										tmpBuildingInfoResourceTableProductionHeaderRow.className = BuildingMenuSingleBuildingResourceTableProductionHeaderRowClass + BuildingMenuSingleBuildingResourceTableHiddenRowClass;
										tmpBuildingInfoResourceTableConsumptionHeaderRow.className = BuildingMenuSingleBuildingResourceTableConsumptionHeaderRowClass + BuildingMenuSingleBuildingResourceTableHiddenRowClass;
										
										tmpBuildingInfoResourceTableBottomSpacingRow.className = BuildingMenuSingleBuildingResourceTableSpacingRowClass + BuildingMenuSingleBuildingResourceTableSpacingRowBottomClass + BuildingMenuSingleBuildingResourceTableHiddenRowClass;
									}
								}
								
								var tmpBuildingInfoResourceTableProducedEnergyRow = outputDocument.createElement("tr");
								tmpBuildingInfoResourceTableProducedEnergyRow.className = BuildingMenuSingleBuildingResourceTableEnergyProducedRowClass;
								tmpBuildingInfoResourceTableProducedEnergyRow.id = BuildingMenuSingleBuildingResourceTableEnergyProducedRowIdPrefix + tmpBuilding.index;
								tmpBuildingInfoResourceTableBody.append(tmpBuildingInfoResourceTableProducedEnergyRow);
								
									var tmpBuildingInfoResourceTableProducedEnergyNameCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableProducedEnergyNameCell.className = BuildingMenuSingleBuildingResourceTableEnergyProducedNameCellClass;
									tmpBuildingInfoResourceTableProducedEnergyNameCell.id = BuildingMenuSingleBuildingResourceTableEnergyProducedNameCellIdPrefix + tmpBuilding.index;
									tmpBuildingInfoResourceTableProducedEnergyRow.append(tmpBuildingInfoResourceTableProducedEnergyNameCell);
									
										var tmpBuildingInfoResourceTableProducedEnergyNameText = outputDocument.createElement("span");
										tmpBuildingInfoResourceTableProducedEnergyNameText.className = BuildingMenuSingleBuildingResourceTableEnergyProducedNameTextClass;
										tmpBuildingInfoResourceTableProducedEnergyNameText.id = BuildingMenuSingleBuildingResourceTableEnergyProducedNameTextIdPrefix + tmpBuilding.index;
										tmpBuildingInfoResourceTableProducedEnergyNameText.innerHTML = "Energy produced:";
										tmpBuildingInfoResourceTableProducedEnergyNameCell.append(tmpBuildingInfoResourceTableProducedEnergyNameText);
									
									var tmpBuildingInfoResourceTableProducedEnergyLeftSpacingCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableProducedEnergyLeftSpacingCell.className = BuildingMenuSingleBuildingResourceTableSpacingCellClass;
									tmpBuildingInfoResourceTableProducedEnergyRow.append(tmpBuildingInfoResourceTableProducedEnergyLeftSpacingCell);
									
									var tmpBuildingInfoResourceTableProducedEnergyValueCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableProducedEnergyValueCell.className = BuildingMenuSingleBuildingResourceTableEnergyProducedValueCellClass;
									tmpBuildingInfoResourceTableProducedEnergyValueCell.id = BuildingMenuSingleBuildingResourceTableEnergyProducedValueCellIdPrefix + tmpBuilding.index;
									tmpBuildingInfoResourceTableProducedEnergyRow.append(tmpBuildingInfoResourceTableProducedEnergyValueCell);
									
										var tmpBuildingInfoResourceTableProducedEnergyValueText = outputDocument.createElement("span");
										tmpBuildingInfoResourceTableProducedEnergyValueText.className = BuildingMenuSingleBuildingResourceTableEnergyProducedValueTextClass;
										tmpBuildingInfoResourceTableProducedEnergyValueText.id = BuildingMenuSingleBuildingResourceTableEnergyProducedValueTextIdPrefix + tmpBuilding.index;
										tmpBuildingInfoResourceTableProducedEnergyValueText.innerHTML = "0";
										tmpBuildingInfoResourceTableProducedEnergyValueCell.append(tmpBuildingInfoResourceTableProducedEnergyValueText);
									
									var tmpBuildingInfoResourceTableProducedEnergyRightSpacingCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableProducedEnergyRightSpacingCell.className = BuildingMenuSingleBuildingResourceTableSpacingCellClass;
									tmpBuildingInfoResourceTableProducedEnergyRow.append(tmpBuildingInfoResourceTableProducedEnergyRightSpacingCell);
									
									var tmpBuildingInfoResourceTableProducedEnergyChangeCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableProducedEnergyChangeCell.className = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeCellClass;
									tmpBuildingInfoResourceTableProducedEnergyChangeCell.id = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeCellIdPrefix + tmpBuilding.index;
									tmpBuildingInfoResourceTableProducedEnergyRow.append(tmpBuildingInfoResourceTableProducedEnergyChangeCell);
								
										var tmpBuildingInfoResourceTableProducedEnergyChangeText = outputDocument.createElement("span");
										tmpBuildingInfoResourceTableProducedEnergyChangeText.className = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextClass;
										tmpBuildingInfoResourceTableProducedEnergyChangeText.id = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextIdPrefix + tmpBuilding.index;
										tmpBuildingInfoResourceTableProducedEnergyChangeText.innerHTML = "-";
										tmpBuildingInfoResourceTableProducedEnergyChangeCell.append(tmpBuildingInfoResourceTableProducedEnergyChangeText);
								
								var tmpBuildingInfoResourceTableConsumedEnergyRow = outputDocument.createElement("tr");
								tmpBuildingInfoResourceTableConsumedEnergyRow.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedRowClass;
								tmpBuildingInfoResourceTableConsumedEnergyRow.id = BuildingMenuSingleBuildingResourceTableEnergyConsumedRowIdPrefix + tmpBuilding.index;
								tmpBuildingInfoResourceTableBody.append(tmpBuildingInfoResourceTableConsumedEnergyRow);
								
									var tmpBuildingInfoResourceTableConsumedEnergyNameCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableConsumedEnergyNameCell.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedNameCellClass;
									tmpBuildingInfoResourceTableConsumedEnergyNameCell.id = BuildingMenuSingleBuildingResourceTableEnergyConsumedNameCellIdPrefix + tmpBuilding.index;
									tmpBuildingInfoResourceTableConsumedEnergyRow.append(tmpBuildingInfoResourceTableConsumedEnergyNameCell);
									
										var tmpBuildingInfoResourceTableConsumedEnergyNameText = outputDocument.createElement("span");
										tmpBuildingInfoResourceTableConsumedEnergyNameText.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedNameTextClass;
										tmpBuildingInfoResourceTableConsumedEnergyNameText.id = BuildingMenuSingleBuildingResourceTableEnergyConsumedNameTextIdPrefix + tmpBuilding.index;
										tmpBuildingInfoResourceTableConsumedEnergyNameText.innerHTML = "Energy consumed:";
										tmpBuildingInfoResourceTableConsumedEnergyNameCell.append(tmpBuildingInfoResourceTableConsumedEnergyNameText);
									
									var tmpBuildingInfoResourceTableConsumedEnergyLeftSpaceingCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableConsumedEnergyLeftSpaceingCell.className = BuildingMenuSingleBuildingResourceTableSpacingCellClass;
									tmpBuildingInfoResourceTableConsumedEnergyRow.append(tmpBuildingInfoResourceTableConsumedEnergyLeftSpaceingCell);
									
									var tmpBuildingInfoResourceTableConsumedEnergyValueCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableConsumedEnergyValueCell.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedValueCellClass;
									tmpBuildingInfoResourceTableConsumedEnergyValueCell.id = BuildingMenuSingleBuildingResourceTableEnergyConsumedValueCellIdPrefix + tmpBuilding.index;
									tmpBuildingInfoResourceTableConsumedEnergyRow.append(tmpBuildingInfoResourceTableConsumedEnergyValueCell);
									
										var tmpBuildingInfoResourceTableConsumedEnergyValueText = outputDocument.createElement("span");
										tmpBuildingInfoResourceTableConsumedEnergyValueText.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedValueTextClass;
										tmpBuildingInfoResourceTableConsumedEnergyValueText.id = BuildingMenuSingleBuildingResourceTableEnergyConsumedValueTextIdPrefix + tmpBuilding.index;
										tmpBuildingInfoResourceTableConsumedEnergyValueText.innerHTML = "0";
										tmpBuildingInfoResourceTableConsumedEnergyValueCell.append(tmpBuildingInfoResourceTableConsumedEnergyValueText);
									
									var tmpBuildingInfoResourceTableConsumedEnergyRightSpacingCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableConsumedEnergyRightSpacingCell.className = BuildingMenuSingleBuildingResourceTableSpacingCellClass;
									tmpBuildingInfoResourceTableConsumedEnergyRow.append(tmpBuildingInfoResourceTableConsumedEnergyRightSpacingCell);
									
									var tmpBuildingInfoResourceTableConsumedEnergyChangeCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableConsumedEnergyChangeCell.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeCellClass;
									tmpBuildingInfoResourceTableConsumedEnergyChangeCell.id = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeCellIdPrefix + tmpBuilding.index;
									tmpBuildingInfoResourceTableConsumedEnergyRow.append(tmpBuildingInfoResourceTableConsumedEnergyChangeCell);
								
										var tmpBuildingInfoResourceTableConsumedEnergyChangeText = outputDocument.createElement("span");
										tmpBuildingInfoResourceTableConsumedEnergyChangeText.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextClass;
										tmpBuildingInfoResourceTableConsumedEnergyChangeText.id = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextIdPrefix + tmpBuilding.index;
										tmpBuildingInfoResourceTableConsumedEnergyChangeText.innerHTML = "-";
										tmpBuildingInfoResourceTableConsumedEnergyChangeCell.append(tmpBuildingInfoResourceTableConsumedEnergyChangeText);
								
								if(tmpBuildingBlueprint.powerProduced > 0 && tmpBuildingBlueprint.powerConsumed > 0){
									tmpBuildingInfoResourceTableProducedEnergyRow.className = BuildingMenuSingleBuildingResourceTableEnergyProducedRowClass;
									tmpBuildingInfoResourceTableConsumedEnergyRow.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedRowClass;
								}
								else{
									if(tmpBuildingBlueprint.powerProduced > 0){
										tmpBuildingInfoResourceTableProducedEnergyRow.className = BuildingMenuSingleBuildingResourceTableEnergyProducedRowClass;
										tmpBuildingInfoResourceTableConsumedEnergyRow.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedRowClass + BuildingMenuSingleBuildingResourceTableHiddenRowClass;
									}
									else if(tmpBuildingBlueprint.powerConsumed > 0){
										tmpBuildingInfoResourceTableProducedEnergyRow.className = BuildingMenuSingleBuildingResourceTableEnergyProducedRowClass + BuildingMenuSingleBuildingResourceTableHiddenRowClass;
										tmpBuildingInfoResourceTableConsumedEnergyRow.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedRowClass;
									}
									else{
										tmpBuildingInfoResourceTableProducedEnergyRow.className = BuildingMenuSingleBuildingResourceTableEnergyProducedRowClass + BuildingMenuSingleBuildingResourceTableHiddenRowClass;
										tmpBuildingInfoResourceTableConsumedEnergyRow.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedRowClass + BuildingMenuSingleBuildingResourceTableHiddenRowClass;
										
										tmpBuildingInfoResourceTableBottomSpacingRow.className = BuildingMenuSingleBuildingResourceTableSpacingRowClass + BuildingMenuSingleBuildingResourceTableHiddenRowClass;
									}
								}
								
								var tmpBuildingInfoResourceTableExtraSpacingRow = outputDocument.createElement("tr");
								tmpBuildingInfoResourceTableExtraSpacingRow.className = BuildingMenuSingleBuildingResourceTableSpacingRowClass;
								tmpBuildingInfoResourceTableExtraSpacingRow.id = BuildingMenuSingleBuildingResourceTableSpacingRowExtraIdPrefix + tmpBuilding.index;
								tmpBuildingInfoResourceTableBody.append(tmpBuildingInfoResourceTableExtraSpacingRow);
								
									var tmpBuildingInfoResourceTableExtraSpacingCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableExtraSpacingCell.className = BuildingMenuSingleBuildingResourceTableSpacingRowCellClass;
									tmpBuildingInfoResourceTableExtraSpacingCell.colSpan = 5;
									tmpBuildingInfoResourceTableExtraSpacingRow.append(tmpBuildingInfoResourceTableExtraSpacingCell);
								
								var tmpBuildingInfoResourceTableRequiredStaffRow = outputDocument.createElement("tr");
								tmpBuildingInfoResourceTableRequiredStaffRow.className = BuildingMenuSingleBuildingResourceTableRequiredStaffRowClass;
								tmpBuildingInfoResourceTableRequiredStaffRow.id = BuildingMenuSingleBuildingResourceTableRequiredStaffRowIdPrefix + tmpBuilding.index;
								tmpBuildingInfoResourceTableBody.append(tmpBuildingInfoResourceTableRequiredStaffRow);
								
									var tmpBuildingInfoResourceTableRequiredStaffNameCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableRequiredStaffNameCell.className = BuildingMenuSingleBuildingResourceTableStaffRequiredNameCellClass;
									tmpBuildingInfoResourceTableRequiredStaffNameCell.id = BuildingMenuSingleBuildingResourceTableStaffRequiredNameCellIdPrefix + tmpBuilding.index;
									tmpBuildingInfoResourceTableRequiredStaffRow.append(tmpBuildingInfoResourceTableRequiredStaffNameCell);
									
										var tmpBuildingInfoResourceTableRequiredStaffNameText = outputDocument.createElement("span");
										tmpBuildingInfoResourceTableRequiredStaffNameText.className = BuildingMenuSingleBuildingResourceTableStaffRequiredNameTextClass;
										tmpBuildingInfoResourceTableRequiredStaffNameText.id = BuildingMenuSingleBuildingResourceTableStaffRequiredNameTextIdPrefix + tmpBuilding.index;
										tmpBuildingInfoResourceTableRequiredStaffNameText.innerHTML = "Staff required:";
										tmpBuildingInfoResourceTableRequiredStaffNameCell.append(tmpBuildingInfoResourceTableRequiredStaffNameText);
									
									var tmpBuildingInfoResourceTableRequiredStaffLeftSpacingCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableRequiredStaffLeftSpacingCell.className = BuildingMenuSingleBuildingResourceTableSpacingCellClass;
									tmpBuildingInfoResourceTableRequiredStaffRow.append(tmpBuildingInfoResourceTableRequiredStaffLeftSpacingCell);
									
									var tmpBuildingInfoResourceTableRequiredStaffValueCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableRequiredStaffValueCell.className = BuildingMenuSingleBuildingResourceTableStaffRequiredValueCellClass;
									tmpBuildingInfoResourceTableRequiredStaffValueCell.id = BuildingMenuSingleBuildingResourceTableStaffRequiredValueCellIdPrefix + tmpBuilding.index;
									tmpBuildingInfoResourceTableRequiredStaffRow.append(tmpBuildingInfoResourceTableRequiredStaffValueCell);
									
										var tmpBuildingInfoResourceTableRequiredStaffValueText = outputDocument.createElement("span");
										tmpBuildingInfoResourceTableRequiredStaffValueText.className = BuildingMenuSingleBuildingResourceTableStaffRequiredValueTextClass;
										tmpBuildingInfoResourceTableRequiredStaffValueText.id = BuildingMenuSingleBuildingResourceTableStaffRequiredValueTextIdPrefix + tmpBuilding.index;
										tmpBuildingInfoResourceTableRequiredStaffValueText.innerHTML = "0";
										tmpBuildingInfoResourceTableRequiredStaffValueCell.append(tmpBuildingInfoResourceTableRequiredStaffValueText);
									
									var tmpBuildingInfoResourceTableRequiredStaffRightSpacingCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableRequiredStaffRightSpacingCell.className = BuildingMenuSingleBuildingResourceTableSpacingCellClass;
									tmpBuildingInfoResourceTableRequiredStaffRow.append(tmpBuildingInfoResourceTableRequiredStaffRightSpacingCell);
									
									var tmpBuildingInfoResourceTableRequiredStaffChangeCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableRequiredStaffChangeCell.className = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeCellClass;
									tmpBuildingInfoResourceTableRequiredStaffChangeCell.id = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeCellIdPrefix + tmpBuilding.index;
									tmpBuildingInfoResourceTableRequiredStaffRow.append(tmpBuildingInfoResourceTableRequiredStaffChangeCell);
								
										var tmpBuildingInfoResourceTableRequiredStaffChangeText = outputDocument.createElement("span");
										tmpBuildingInfoResourceTableRequiredStaffChangeText.className = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextClass;
										tmpBuildingInfoResourceTableRequiredStaffChangeText.id = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextIdPrefix + tmpBuilding.index;
										tmpBuildingInfoResourceTableRequiredStaffChangeText.innerHTML = "-";
										tmpBuildingInfoResourceTableRequiredStaffChangeCell.append(tmpBuildingInfoResourceTableRequiredStaffChangeText);
								
								
							tmpBuildingInfoResourceTable.append(tmpBuildingInfoResourceTableBody);
						tmpBuildingInfoResourceTableContainer.append(tmpBuildingInfoResourceTable);
					tmpBuildingInfoContainer.append(tmpBuildingInfoHeaderContainer);
					tmpBuildingInfoContainer.append(tmpBuildingInfoResourceTableContainer);
					
				var tmpBuildingBuildDemolishContainer = outputDocument.createElement("div");
				tmpBuildingBuildDemolishContainer.className = BuildingMenuSingleBuildingBuildDemolishContainerClass;
					var tmpBuildingBuildButtonsContainer = outputDocument.createElement("div");
					tmpBuildingBuildButtonsContainer.className = BuildingMenuSingleBuildingBuildButtonsContainerClass;
						var tmpBuildingBuildButtonSingle = outputDocument.createElement("button");
						tmpBuildingBuildButtonSingle.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingBuildButtonSingle.onclick = function() {interfaceBuildBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 1);};
						tmpBuildingBuildButtonSingle.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "build", 1);};
						tmpBuildingBuildButtonSingle.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingBuildButtonSingleImage = outputDocument.createElement("img");
							tmpBuildingBuildButtonSingleImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingBuildButtonSingleImage.src = BuildingMenuSingleBuildingBuildImagePath;
						
							tmpBuildingBuildButtonSingle.append(tmpBuildingBuildButtonSingleImage);
						var tmpBuildingBuildButtonMore = outputDocument.createElement("button");
						tmpBuildingBuildButtonMore.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingBuildButtonMore.onclick = function() {interfaceBuildBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, BuildingsBuildMoreAmount);};
						tmpBuildingBuildButtonMore.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "build", BuildingsBuildMoreAmount);};
						tmpBuildingBuildButtonMore.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingBuildButtonMoreImage = outputDocument.createElement("img");
							tmpBuildingBuildButtonMoreImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingBuildButtonMoreImage.src = BuildingMenuSingleBuildingBuildImagePath;
							var tmpBuildingBuildButtonMoreSubtext = outputDocument.createElement("span");
							tmpBuildingBuildButtonMoreSubtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingBuildButtonMoreSubtext.innerHTML = BuildingsBuildMoreAmount;
						
							tmpBuildingBuildButtonMore.append(tmpBuildingBuildButtonMoreImage);
							tmpBuildingBuildButtonMore.append(tmpBuildingBuildButtonMoreSubtext);
						var tmpBuildingBuildButtonEvenMore = outputDocument.createElement("button");
						tmpBuildingBuildButtonEvenMore.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingBuildButtonEvenMore.onclick = function() {interfaceBuildBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, BuildingsBuildEvenMoreAmount);};
						tmpBuildingBuildButtonEvenMore.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "build", BuildingsBuildEvenMoreAmount);};
						tmpBuildingBuildButtonEvenMore.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingBuildButtonEvenMoreImage = outputDocument.createElement("img");
							tmpBuildingBuildButtonEvenMoreImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingBuildButtonEvenMoreImage.src = BuildingMenuSingleBuildingBuildImagePath;
							var tmpBuildingBuildButtonEvenMoreSubtext = outputDocument.createElement("span");
							tmpBuildingBuildButtonEvenMoreSubtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingBuildButtonEvenMoreSubtext.innerHTML = BuildingsBuildEvenMoreAmount;
						
							tmpBuildingBuildButtonEvenMore.append(tmpBuildingBuildButtonEvenMoreImage);
							tmpBuildingBuildButtonEvenMore.append(tmpBuildingBuildButtonEvenMoreSubtext);
						
						tmpBuildingBuildButtonsContainer.append(tmpBuildingBuildButtonSingle);
						tmpBuildingBuildButtonsContainer.append(tmpBuildingBuildButtonMore);
						tmpBuildingBuildButtonsContainer.append(tmpBuildingBuildButtonEvenMore);
					
					var tmpBuildingDemolishButtonsContainer = outputDocument.createElement("div");
					tmpBuildingDemolishButtonsContainer.className = BuildingMenuSingleBuildingDemolishButtonsContainerClass;
						var tmpBuildingDemolishButtonSingle = outputDocument.createElement("button");
						tmpBuildingDemolishButtonSingle.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDemolishButtonSingle.onclick = function() {interfaceDemolishBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 1);};
						tmpBuildingDemolishButtonSingle.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "demolish", 1);};
						tmpBuildingDemolishButtonSingle.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingDemolishButtonSingleImage = outputDocument.createElement("img");
							tmpBuildingDemolishButtonSingleImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDemolishButtonSingleImage.src = BuildingMenuSingleBuildingDemolishImagePath;
						
							tmpBuildingDemolishButtonSingle.append(tmpBuildingDemolishButtonSingleImage);
						var tmpBuildingDemolishButtonMore = outputDocument.createElement("button");
						tmpBuildingDemolishButtonMore.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDemolishButtonMore.onclick = function() {interfaceDemolishBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, BuildingsBuildMoreAmount);};
						tmpBuildingDemolishButtonMore.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "demolish", BuildingsBuildMoreAmount);};
						tmpBuildingDemolishButtonMore.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingDemolishButtonMoreImage = outputDocument.createElement("img");
							tmpBuildingDemolishButtonMoreImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDemolishButtonMoreImage.src = BuildingMenuSingleBuildingDemolishImagePath;
							var tmpBuildingDemolishButtonMoreSubtext = outputDocument.createElement("span");
							tmpBuildingDemolishButtonMoreSubtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingDemolishButtonMoreSubtext.innerHTML = BuildingsBuildMoreAmount;
						
							tmpBuildingDemolishButtonMore.append(tmpBuildingDemolishButtonMoreImage);
							tmpBuildingDemolishButtonMore.append(tmpBuildingDemolishButtonMoreSubtext);
						var tmpBuildingDemolishButtonEvenMore = outputDocument.createElement("button");
						tmpBuildingDemolishButtonEvenMore.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDemolishButtonEvenMore.onclick = function() {interfaceDemolishBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, BuildingsBuildEvenMoreAmount);};
						tmpBuildingDemolishButtonEvenMore.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "demolish", BuildingsBuildEvenMoreAmount);};
						tmpBuildingDemolishButtonEvenMore.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingDemolishButtonEvenMoreImage = outputDocument.createElement("img");
							tmpBuildingDemolishButtonEvenMoreImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDemolishButtonEvenMoreImage.src = BuildingMenuSingleBuildingDemolishImagePath;
							var tmpBuildingDemolishButtonEvenMoreSubtext = outputDocument.createElement("span");
							tmpBuildingDemolishButtonEvenMoreSubtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingDemolishButtonEvenMoreSubtext.innerHTML = BuildingsBuildEvenMoreAmount;
						
							tmpBuildingDemolishButtonEvenMore.append(tmpBuildingDemolishButtonEvenMoreImage);
							tmpBuildingDemolishButtonEvenMore.append(tmpBuildingDemolishButtonEvenMoreSubtext);
						
						tmpBuildingDemolishButtonsContainer.append(tmpBuildingDemolishButtonSingle);
						tmpBuildingDemolishButtonsContainer.append(tmpBuildingDemolishButtonMore);
						tmpBuildingDemolishButtonsContainer.append(tmpBuildingDemolishButtonEvenMore);
					
					var tmpBuildingBuildDemolishButtonsContainer = outputDocument.createElement("div");
					tmpBuildingBuildDemolishButtonsContainer.className = BuildingMenuSingleBuildingBuildDemolishButtonsContainerClass;
						var tmpBuildingBuildCustomAmountButton = outputDocument.createElement("button");
						tmpBuildingBuildCustomAmountButton.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingBuildCustomAmountButton.onclick = function() {interfaceBuildBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex);};
						tmpBuildingBuildCustomAmountButton.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "build", "input");};
						tmpBuildingBuildCustomAmountButton.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingBuildCustomAmountButtonImage = outputDocument.createElement("img");
							tmpBuildingBuildCustomAmountButtonImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingBuildCustomAmountButtonImage.src = BuildingMenuSingleBuildingBuildImagePath;
							
							tmpBuildingBuildCustomAmountButton.append(tmpBuildingBuildCustomAmountButtonImage);
							
						var tmpBuildingBuildDemolishCustomAmountInput = outputDocument.createElement("input");
						tmpBuildingBuildDemolishCustomAmountInput.className = BuildingMenuSingleBuildingSingleInputNumberClass;
						tmpBuildingBuildDemolishCustomAmountInput.min = 1;
						tmpBuildingBuildDemolishCustomAmountInput.step = 1;
						tmpBuildingBuildDemolishCustomAmountInput.value = BuildingsBulkBuyAmount;
						tmpBuildingBuildDemolishCustomAmountInput.id = BuildingMenuSingleBuildingSingleBuildDemolishInputIdPrefix + tmpBuilding.index;
						tmpBuildingBuildDemolishCustomAmountInput.onchange = function() {interfaceBuildMenuCustomBuildDemolishChanged(outputDocument, tmpBuilding.index);};
						
						var tmpBuildingDemolishCustomAmountButton = outputDocument.createElement("button");
						tmpBuildingDemolishCustomAmountButton.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDemolishCustomAmountButton.onclick = function() {interfaceDemolishBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex);};
						tmpBuildingDemolishCustomAmountButton.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "demolish", "input");};
						tmpBuildingDemolishCustomAmountButton.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingDemolishCustomAmountButtonImage = outputDocument.createElement("img");
							tmpBuildingDemolishCustomAmountButtonImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDemolishCustomAmountButtonImage.src = BuildingMenuSingleBuildingDemolishImagePath;
							
							tmpBuildingDemolishCustomAmountButton.append(tmpBuildingDemolishCustomAmountButtonImage);
							
						tmpBuildingBuildDemolishButtonsContainer.append(tmpBuildingBuildCustomAmountButton);
						tmpBuildingBuildDemolishButtonsContainer.append(tmpBuildingBuildDemolishCustomAmountInput);
						tmpBuildingBuildDemolishButtonsContainer.append(tmpBuildingDemolishCustomAmountButton);
					tmpBuildingBuildDemolishContainer.append(tmpBuildingBuildDemolishButtonsContainer);
					tmpBuildingBuildDemolishContainer.append(tmpBuildingBuildButtonsContainer);
					tmpBuildingBuildDemolishContainer.append(tmpBuildingDemolishButtonsContainer);
					
				var tmpBuildingUpgradeDowngradeContainer = outputDocument.createElement("div");
				tmpBuildingUpgradeDowngradeContainer.className = BuildingMenuSingleBuildingUpgradeDowngradeContainerClass;
					var tmpBuildingUpgradeButtonsContainer = outputDocument.createElement("div");
					tmpBuildingUpgradeButtonsContainer.className = BuildingMenuSingleBuildingUpgradeButtonsContainerClass;
						var tmpBuildingUpgradeButtonSingle = outputDocument.createElement("button");
						tmpBuildingUpgradeButtonSingle.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingUpgradeButtonSingle.onclick = function() {interfaceUpgradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 1);};
						tmpBuildingUpgradeButtonSingle.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "upgrade", 1);};
						tmpBuildingUpgradeButtonSingle.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingUpgradeButtonSingleImage = outputDocument.createElement("img");
							tmpBuildingUpgradeButtonSingleImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingUpgradeButtonSingleImage.src = BuildingMenuSingleBuildingUpgradeImagePath;
						
							tmpBuildingUpgradeButtonSingle.append(tmpBuildingUpgradeButtonSingleImage);
						var tmpBuildingUpgradeButtonMore = outputDocument.createElement("button");
						tmpBuildingUpgradeButtonMore.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingUpgradeButtonMore.onclick = function() {interfaceUpgradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, BuildingsUpgradeMoreAmount);};
						tmpBuildingUpgradeButtonMore.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "upgrade", BuildingsUpgradeMoreAmount);};
						tmpBuildingUpgradeButtonMore.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingUpgradeButtonMoreImage = outputDocument.createElement("img");
							tmpBuildingUpgradeButtonMoreImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingUpgradeButtonMoreImage.src = BuildingMenuSingleBuildingUpgradeImagePath;
							var tmpBuildingUpgradeButtonMoreSubtext = outputDocument.createElement("span");
							tmpBuildingUpgradeButtonMoreSubtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingUpgradeButtonMoreSubtext.innerHTML = BuildingsUpgradeMoreAmount;
						
							tmpBuildingUpgradeButtonMore.append(tmpBuildingUpgradeButtonMoreImage);
							tmpBuildingUpgradeButtonMore.append(tmpBuildingUpgradeButtonMoreSubtext);
						var tmpBuildingUpgradeButtonEvenMore = outputDocument.createElement("button");
						tmpBuildingUpgradeButtonEvenMore.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingUpgradeButtonEvenMore.onclick = function() {interfaceUpgradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, BuildingsUpgradeEvenMoreAmount);};
						tmpBuildingUpgradeButtonEvenMore.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "upgrade", BuildingsUpgradeEvenMoreAmount);};
						tmpBuildingUpgradeButtonEvenMore.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingUpgradeButtonEvenMoreImage = outputDocument.createElement("img");
							tmpBuildingUpgradeButtonEvenMoreImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingUpgradeButtonEvenMoreImage.src = BuildingMenuSingleBuildingUpgradeImagePath;
							var tmpBuildingUpgradeButtonEvenMoreSubtext = outputDocument.createElement("span");
							tmpBuildingUpgradeButtonEvenMoreSubtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingUpgradeButtonEvenMoreSubtext.innerHTML = BuildingsUpgradeEvenMoreAmount;
						
							tmpBuildingUpgradeButtonEvenMore.append(tmpBuildingUpgradeButtonEvenMoreImage);
							tmpBuildingUpgradeButtonEvenMore.append(tmpBuildingUpgradeButtonEvenMoreSubtext);
						
						tmpBuildingUpgradeButtonsContainer.append(tmpBuildingUpgradeButtonSingle);
						tmpBuildingUpgradeButtonsContainer.append(tmpBuildingUpgradeButtonMore);
						tmpBuildingUpgradeButtonsContainer.append(tmpBuildingUpgradeButtonEvenMore);
					var tmpBuildingDowngradeButtonsContainer = outputDocument.createElement("div");
					tmpBuildingDowngradeButtonsContainer.className = BuildingMenuSingleBuildingDowngradeButtonsContainerClass;
						var tmpBuildingDowngradeButtonSingle = outputDocument.createElement("button");
						tmpBuildingDowngradeButtonSingle.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDowngradeButtonSingle.onclick = function() {interfaceDowngradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 1);};
						tmpBuildingDowngradeButtonSingle.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "downgrade", 1);};
						tmpBuildingDowngradeButtonSingle.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingDowngradeButtonSingleImage = outputDocument.createElement("img");
							tmpBuildingDowngradeButtonSingleImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDowngradeButtonSingleImage.src = BuildingMenuSingleBuildingDowngradeImagePath;
						
							tmpBuildingDowngradeButtonSingle.append(tmpBuildingDowngradeButtonSingleImage);
						var tmpBuildingDowngradeButtonMore = outputDocument.createElement("button");
						tmpBuildingDowngradeButtonMore.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDowngradeButtonMore.onclick = function() {interfaceDowngradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, BuildingsUpgradeMoreAmount);};
						tmpBuildingDowngradeButtonMore.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "downgrade", BuildingsUpgradeMoreAmount);};
						tmpBuildingDowngradeButtonMore.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingDowngradeButtonMoreImage = outputDocument.createElement("img");
							tmpBuildingDowngradeButtonMoreImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDowngradeButtonMoreImage.src = BuildingMenuSingleBuildingDowngradeImagePath;
							var tmpBuildingDowngradeButtonMoreSubtext = outputDocument.createElement("span");
							tmpBuildingDowngradeButtonMoreSubtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingDowngradeButtonMoreSubtext.innerHTML = BuildingsUpgradeMoreAmount;
						
							tmpBuildingDowngradeButtonMore.append(tmpBuildingDowngradeButtonMoreImage);
							tmpBuildingDowngradeButtonMore.append(tmpBuildingDowngradeButtonMoreSubtext);
						var tmpBuildingDowngradeButtonEvenMore = outputDocument.createElement("button");
						tmpBuildingDowngradeButtonEvenMore.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDowngradeButtonEvenMore.onclick = function() {interfaceDowngradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, BuildingsUpgradeEvenMoreAmount);};
						tmpBuildingDowngradeButtonEvenMore.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "downgrade", BuildingsUpgradeEvenMoreAmount);};
						tmpBuildingDowngradeButtonEvenMore.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingDowngradeButtonEvenMoreImage = outputDocument.createElement("img");
							tmpBuildingDowngradeButtonEvenMoreImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDowngradeButtonEvenMoreImage.src = BuildingMenuSingleBuildingDowngradeImagePath;
							var tmpBuildingDowngradeButtonEvenMoreSubtext = outputDocument.createElement("span");
							tmpBuildingDowngradeButtonEvenMoreSubtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingDowngradeButtonEvenMoreSubtext.innerHTML = BuildingsUpgradeEvenMoreAmount;
						
							tmpBuildingDowngradeButtonEvenMore.append(tmpBuildingDowngradeButtonEvenMoreImage);
							tmpBuildingDowngradeButtonEvenMore.append(tmpBuildingDowngradeButtonEvenMoreSubtext);
						
						tmpBuildingDowngradeButtonsContainer.append(tmpBuildingDowngradeButtonSingle);
						tmpBuildingDowngradeButtonsContainer.append(tmpBuildingDowngradeButtonMore);
						tmpBuildingDowngradeButtonsContainer.append(tmpBuildingDowngradeButtonEvenMore);
						
					var tmpBuildingUpgradeDowngradeButtonsContainer = outputDocument.createElement("div");
					tmpBuildingUpgradeDowngradeButtonsContainer.className = BuildingMenuSingleBuildingUpgradeDowngradeButtonsContainerClass;
					
						var tmpBuildingUpgradeCustomAmountButton = outputDocument.createElement("button");
						tmpBuildingUpgradeCustomAmountButton.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingUpgradeCustomAmountButton.onclick = function() {interfaceUpgradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex);};
						tmpBuildingUpgradeCustomAmountButton.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "upgrade", "input");};
						tmpBuildingUpgradeCustomAmountButton.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingUpgradeCustomAmountButtonImage = outputDocument.createElement("img");
							tmpBuildingUpgradeCustomAmountButtonImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingUpgradeCustomAmountButtonImage.src = BuildingMenuSingleBuildingUpgradeImagePath;
							
							tmpBuildingUpgradeCustomAmountButton.append(tmpBuildingUpgradeCustomAmountButtonImage);
							
						var tmpBuildingUpgradeDowngradeCustomAmountInput = outputDocument.createElement("input");
						tmpBuildingUpgradeDowngradeCustomAmountInput.className = BuildingMenuSingleBuildingSingleInputNumberClass;
						tmpBuildingUpgradeDowngradeCustomAmountInput.min = 1;
						tmpBuildingUpgradeDowngradeCustomAmountInput.step = 1;
						tmpBuildingUpgradeDowngradeCustomAmountInput.value = BuildingsBulkBuyAmount;
						tmpBuildingUpgradeDowngradeCustomAmountInput.id = BuildingMenuSingleBuildingSingleUpgradeDowngradeInputIdPrefix + tmpBuilding.index;
						tmpBuildingUpgradeDowngradeCustomAmountInput.onchange = function() {interfaceBuildMenuCustomUpgradeDowngradeChanged(outputDocument, tmpBuilding.index);};
						
						var tmpBuildingDowngradeCustomAmountButton = outputDocument.createElement("button");
						tmpBuildingDowngradeCustomAmountButton.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDowngradeCustomAmountButton.onclick = function() {interfaceDowngradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex);};
						tmpBuildingDowngradeCustomAmountButton.onmouseenter = function() {interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, i, "downgrade", "input");};
						tmpBuildingDowngradeCustomAmountButton.onmouseleave = function() {interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, i);};
							var tmpBuildingDowngradeCustomAmountButtonImage = outputDocument.createElement("img");
							tmpBuildingDowngradeCustomAmountButtonImage.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDowngradeCustomAmountButtonImage.src = BuildingMenuSingleBuildingDowngradeImagePath;
							
							tmpBuildingDowngradeCustomAmountButton.append(tmpBuildingDowngradeCustomAmountButtonImage);
							
						tmpBuildingUpgradeDowngradeButtonsContainer.append(tmpBuildingUpgradeCustomAmountButton);
						tmpBuildingUpgradeDowngradeButtonsContainer.append(tmpBuildingUpgradeDowngradeCustomAmountInput);
						tmpBuildingUpgradeDowngradeButtonsContainer.append(tmpBuildingDowngradeCustomAmountButton);
					tmpBuildingUpgradeDowngradeContainer.append(tmpBuildingUpgradeDowngradeButtonsContainer);
					tmpBuildingUpgradeDowngradeContainer.append(tmpBuildingUpgradeButtonsContainer);
					tmpBuildingUpgradeDowngradeContainer.append(tmpBuildingDowngradeButtonsContainer);
				
				var tmpBuildingControlContainer = outputDocument.createElement("div");
				tmpBuildingControlContainer.className = BuildingMenuSingleBuildingControlContainerClass;
					var tmpBuildingFoldedOperatorsContainer = outputDocument.createElement("div");
					tmpBuildingFoldedOperatorsContainer.className = BuildingMenuSingleBuildingFoldedOperatorContainerClass;
					
						var tmpBuildingFoldedOperatorsButtonsContainer = outputDocument.createElement("div");
						tmpBuildingFoldedOperatorsButtonsContainer.className = BuildingMenuSingleBuildingOperatorButtonsContainerClass;
					
							var tmpBuildingFoldedOperatorsAddOperatorButton = outputDocument.createElement("button");
							tmpBuildingFoldedOperatorsAddOperatorButton.className = BuildingMenuSingleBuildingAddRemoveOperatorButtonClass;
							tmpBuildingFoldedOperatorsAddOperatorButton.onclick = function () {interfaceAddStaffToBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 1);};
								var tmpBuildingFoldedOperatorsAddOperatorButtonImage = outputDocument.createElement("img");
								tmpBuildingFoldedOperatorsAddOperatorButtonImage.className = BuildingMenuSingleBuildingAddRemoveOperatorButtonImageClass;
								tmpBuildingFoldedOperatorsAddOperatorButtonImage.src = BuildingMenuSingleBuildingAddOperatorButtonImagePath;
								
								tmpBuildingFoldedOperatorsAddOperatorButton.append(tmpBuildingFoldedOperatorsAddOperatorButtonImage);
							
							var tmpBuildingFoldedOperatorsRemoveOperatorButton = outputDocument.createElement("button");
							tmpBuildingFoldedOperatorsRemoveOperatorButton.className = BuildingMenuSingleBuildingAddRemoveOperatorButtonClass;
							tmpBuildingFoldedOperatorsRemoveOperatorButton.onclick = function () {interfaceRemoveStaffFromBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 1);};
								var tmpBuildingFoldedOperatorsRemoveOperatorButtonImage = outputDocument.createElement("img");
								tmpBuildingFoldedOperatorsRemoveOperatorButtonImage.className = BuildingMenuSingleBuildingAddRemoveOperatorButtonImageClass;
								tmpBuildingFoldedOperatorsRemoveOperatorButtonImage.src = BuildingMenuSingleBuildingRemoveOperatorButtonImagePath;
								
								tmpBuildingFoldedOperatorsRemoveOperatorButton.append(tmpBuildingFoldedOperatorsRemoveOperatorButtonImage);
								
							var tmpBuildingFoldedOperatorAssignedOperatorsSpan = outputDocument.createElement("span");
							tmpBuildingFoldedOperatorAssignedOperatorsSpan.className = BuildingMenuSingleBuildingAssignedOperatorsSpanClass;
							tmpBuildingFoldedOperatorAssignedOperatorsSpan.id = BuildingMenuSingleBuildingFoldedAssignedOperatorsSpanIdPrefix + tmpBuilding.index;
							tmpBuildingFoldedOperatorAssignedOperatorsSpan.innerHTML = tmpBuilding.staffAssigned;
							var tmpBuildingFoldedOperatorSlashOperatorsSpan = outputDocument.createElement("span");
							tmpBuildingFoldedOperatorSlashOperatorsSpan.className = BuildingMenuSingleBuildingSlashOperatorsSpanClass;
							tmpBuildingFoldedOperatorSlashOperatorsSpan.innerHTML = "/";
							var tmpBuildingFoldedOperatorRequiredOperatorsSpan = outputDocument.createElement("span");
							tmpBuildingFoldedOperatorRequiredOperatorsSpan.className = BuildingMenuSingleBuildingRequiredOperatorsSpanClass;
							tmpBuildingFoldedOperatorRequiredOperatorsSpan.id = BuildingMenuSingleBuildingFoldedRequiredOperatorsSpanIdPrefix + tmpBuilding.index;
							tmpBuildingFoldedOperatorRequiredOperatorsSpan.innerHTML = tmpBuilding.staffRequired;
							
							tmpBuildingFoldedOperatorsButtonsContainer.append(tmpBuildingFoldedOperatorsAddOperatorButton);
							tmpBuildingFoldedOperatorsButtonsContainer.append(tmpBuildingFoldedOperatorsRemoveOperatorButton);
							tmpBuildingFoldedOperatorsButtonsContainer.append(tmpBuildingFoldedOperatorAssignedOperatorsSpan);
							tmpBuildingFoldedOperatorsButtonsContainer.innerHTML += "&nbsp;";
							tmpBuildingFoldedOperatorsButtonsContainer.append(tmpBuildingFoldedOperatorSlashOperatorsSpan);
							tmpBuildingFoldedOperatorsButtonsContainer.innerHTML += "&nbsp;";
							tmpBuildingFoldedOperatorsButtonsContainer.append(tmpBuildingFoldedOperatorRequiredOperatorsSpan);
							
						tmpBuildingFoldedOperatorsContainer.append(tmpBuildingFoldedOperatorsButtonsContainer);
						
					var tmpBuildingFoldedSideButtonsContainer = outputDocument.createElement("div");
					tmpBuildingFoldedSideButtonsContainer.className = BuildingMenuSingleBuildingFoldedSideButtonsContainerClass;
					
						var tmpBuildingFoldedSideUnfoldButton = outputDocument.createElement("button");
						tmpBuildingFoldedSideUnfoldButton.className = BuildingMenuSingleBuildingSideButtonClass;
						tmpBuildingFoldedSideUnfoldButton.onclick = function(){interfaceFoldUnfoldBuilding(outputDocument,tmpBuilding.index);};
						
							var tmpBuildingFoldedSideUnfoldButtonImage = outputDocument.createElement("img");
							tmpBuildingFoldedSideUnfoldButtonImage.className = BuildingMenuSingleBuildingSideButtonImageClass;
							tmpBuildingFoldedSideUnfoldButtonImage.src = BuildingMenuSingleBuildingSideButtonFoldedImagePath;
						
							tmpBuildingFoldedSideUnfoldButton.append(tmpBuildingFoldedSideUnfoldButtonImage);
						tmpBuildingFoldedSideButtonsContainer.append(tmpBuildingFoldedSideUnfoldButton);
					
					var tmpBuildingUnfoldedOperatorsContainer = outputDocument.createElement("div");
					tmpBuildingUnfoldedOperatorsContainer.className = BuildingMenuSingleBuildingUnfoldedOperatorContainerClass;
					
						var tmpBuildingUnfoldedOperatorsHeaderContainer = outputDocument.createElement("div");
						tmpBuildingUnfoldedOperatorsHeaderContainer.className = BuildingMenuSingleBuildingOperatorHeaderContainerClass;
							var tmpBuildingUnfoldedOperatorsHeaderTextContainer = outputDocument.createElement("div");
							tmpBuildingUnfoldedOperatorsHeaderTextContainer.className = BuildingMenuSingleBuildingOperatorHeaderTextContainerClass;
								var tmpBuildingUnfoldedOperatorsHeaderText = outputDocument.createElement("span");
								tmpBuildingUnfoldedOperatorsHeaderText.className = BuildingMenuSingleBuildingOperatorHeaderTextClass;
								tmpBuildingUnfoldedOperatorsHeaderText.innerHTML = "Administrators:";
							
								tmpBuildingUnfoldedOperatorsHeaderTextContainer.append(tmpBuildingUnfoldedOperatorsHeaderText);
							tmpBuildingUnfoldedOperatorsHeaderContainer.append(tmpBuildingUnfoldedOperatorsHeaderTextContainer);
						
						var tmpBuildingUnfoldedOperatorsMenuContainer = outputDocument.createElement("div");
						tmpBuildingUnfoldedOperatorsMenuContainer.className = BuildingMenuSingleBuildingOperatorControlMenuContainerClass;
							var tmpBuildingUnfoldedOperatorsMenuLeftContainer = outputDocument.createElement("div");
							tmpBuildingUnfoldedOperatorsMenuLeftContainer.className = BuildingMenuSingleBuildingOperatorControlMenuLeftSideContainerClass;
								var tmpBuildingUnfoldedOperatorsButtonsContainer = outputDocument.createElement("div");
								tmpBuildingUnfoldedOperatorsButtonsContainer.className = BuildingMenuSingleBuildingOperatorButtonsContainerClass;
									var tmpBuildingUnfoldedOperatorsAddOperatorButton = outputDocument.createElement("button");
									tmpBuildingUnfoldedOperatorsAddOperatorButton.className = BuildingMenuSingleBuildingAddRemoveOperatorButtonClass;
									tmpBuildingUnfoldedOperatorsAddOperatorButton.onclick = function () {interfaceAddStaffToBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex);};
										var tmpBuildingUnfoldedOperatorsAddOperatorButtonImage = outputDocument.createElement("img");
										tmpBuildingUnfoldedOperatorsAddOperatorButtonImage.className = BuildingMenuSingleBuildingAddRemoveOperatorButtonImageClass;
										tmpBuildingUnfoldedOperatorsAddOperatorButtonImage.src = BuildingMenuSingleBuildingAddOperatorButtonImagePath;
										
										tmpBuildingUnfoldedOperatorsAddOperatorButton.append(tmpBuildingUnfoldedOperatorsAddOperatorButtonImage);
									
									var tmpBuildingUnfoldedOperatorsCustomAmountInput = outputDocument.createElement("input");
									tmpBuildingUnfoldedOperatorsCustomAmountInput.className = BuildingMenuSingleBuildingOperatorCustomInputClass;
									tmpBuildingUnfoldedOperatorsCustomAmountInput.min = 1;
									tmpBuildingUnfoldedOperatorsCustomAmountInput.step = 1;
									tmpBuildingUnfoldedOperatorsCustomAmountInput.value = BuildingsBulkBuyAmount;
									tmpBuildingUnfoldedOperatorsCustomAmountInput.id = BuildingMenuSingleBuildingOperatorCustomInputIdPrefix + tmpBuilding.index;
									tmpBuildingUnfoldedOperatorsCustomAmountInput.onchange = function() {interfaceBuildMenuCustomAgentsChanged(outputDocument, tmpBuilding.index);};
									
									var tmpBuildingUnfoldedOperatorsRemoveOperatorButton = outputDocument.createElement("button");
									tmpBuildingUnfoldedOperatorsRemoveOperatorButton.className = BuildingMenuSingleBuildingAddRemoveOperatorButtonClass;
									tmpBuildingUnfoldedOperatorsRemoveOperatorButton.onclick = function () {interfaceRemoveStaffFromBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex);};
										var tmpBuildingUnfoldedOperatorsRemoveOperatorButtonImage = outputDocument.createElement("img");
										tmpBuildingUnfoldedOperatorsRemoveOperatorButtonImage.className = BuildingMenuSingleBuildingAddRemoveOperatorButtonImageClass;
										tmpBuildingUnfoldedOperatorsRemoveOperatorButtonImage.src = BuildingMenuSingleBuildingRemoveOperatorButtonImagePath;
										
										tmpBuildingUnfoldedOperatorsRemoveOperatorButton.append(tmpBuildingUnfoldedOperatorsRemoveOperatorButtonImage);
										
									tmpBuildingUnfoldedOperatorsButtonsContainer.append(tmpBuildingUnfoldedOperatorsAddOperatorButton);
									tmpBuildingUnfoldedOperatorsButtonsContainer.append(tmpBuildingUnfoldedOperatorsCustomAmountInput);
									tmpBuildingUnfoldedOperatorsButtonsContainer.append(tmpBuildingUnfoldedOperatorsRemoveOperatorButton);
								
								var tmpBuildingUnfoldedOperatorsNumbersContainer = outputDocument.createElement("div");
								tmpBuildingUnfoldedOperatorsNumbersContainer.className = BuildingMenuSingleBuildingOperatorsNumbersContainerClass;
									var tmpBuildingUnfoldedOperatorAssignedOperatorsSpan = outputDocument.createElement("span");
									tmpBuildingUnfoldedOperatorAssignedOperatorsSpan.className = BuildingMenuSingleBuildingAssignedOperatorsSpanClass;
									tmpBuildingUnfoldedOperatorAssignedOperatorsSpan.id = BuildingMenuSingleBuildingUnfoldedAssignedOperatorsSpanIdPrefix + tmpBuilding.index;
									tmpBuildingUnfoldedOperatorAssignedOperatorsSpan.innerHTML = tmpBuilding.staffAssigned;
									var tmpBuildingUnfoldedOperatorSlashOperatorsSpan = outputDocument.createElement("span");
									tmpBuildingUnfoldedOperatorSlashOperatorsSpan.className = BuildingMenuSingleBuildingSlashOperatorsSpanClass;
									tmpBuildingUnfoldedOperatorSlashOperatorsSpan.innerHTML = "/";
									var tmpBuildingUnfoldedOperatorRequiredOperatorsSpan = outputDocument.createElement("span");
									tmpBuildingUnfoldedOperatorRequiredOperatorsSpan.className = BuildingMenuSingleBuildingRequiredOperatorsSpanClass;
									tmpBuildingUnfoldedOperatorRequiredOperatorsSpan.id = BuildingMenuSingleBuildingUnfoldedRequiredOperatorsSpanIdPrefix + tmpBuilding.index;
									tmpBuildingUnfoldedOperatorRequiredOperatorsSpan.innerHTML = tmpBuilding.staffRequired;
									var tmpBuildingUnfoldedOperatorEfficiencyOperatorsSpan = outputDocument.createElement("span");
									tmpBuildingUnfoldedOperatorEfficiencyOperatorsSpan.className = BuildingMenuSingleBuildingOperatorsEfficiencyValueClass;
									tmpBuildingUnfoldedOperatorEfficiencyOperatorsSpan.id = BuildingMenuSingleBuildingUnfoldedOperatorsEfficiencyValueIdPrefix + tmpBuilding.index;
									tmpBuildingUnfoldedOperatorEfficiencyOperatorsSpan.innerHTML = "(100%)";
									tmpBuildingUnfoldedOperatorEfficiencyOperatorsSpan.style.color = "hsl(120,100%,50%)";
									
									tmpBuildingUnfoldedOperatorsNumbersContainer.append(tmpBuildingUnfoldedOperatorAssignedOperatorsSpan);
									tmpBuildingUnfoldedOperatorsNumbersContainer.innerHTML += "&nbsp;";
									tmpBuildingUnfoldedOperatorsNumbersContainer.append(tmpBuildingUnfoldedOperatorSlashOperatorsSpan);
									tmpBuildingUnfoldedOperatorsNumbersContainer.innerHTML += "&nbsp;";
									tmpBuildingUnfoldedOperatorsNumbersContainer.append(tmpBuildingUnfoldedOperatorRequiredOperatorsSpan);
									tmpBuildingUnfoldedOperatorsNumbersContainer.innerHTML += "&ensp;";
									tmpBuildingUnfoldedOperatorsNumbersContainer.append(tmpBuildingUnfoldedOperatorEfficiencyOperatorsSpan);
								
								var tmpBuildingUnfoldedOperatorsEfficiencyContainer = outputDocument.createElement("div");
								tmpBuildingUnfoldedOperatorsEfficiencyContainer.className = BuildingMenuSingleBuildingEfficiencyContainerClass;
									var tmpBuildingUnfoldedOperatorsEfficiencyPrefixSpan = outputDocument.createElement("span");
									tmpBuildingUnfoldedOperatorsEfficiencyPrefixSpan.className = BuildingMenuSingleBuildingEfficiencyPrefixClass;
									tmpBuildingUnfoldedOperatorsEfficiencyPrefixSpan.innerHTML = "Efficiency:";
									var tmpBuildingUnfoldedOperatorsEfficiencyValueSpan = outputDocument.createElement("span");
									tmpBuildingUnfoldedOperatorsEfficiencyValueSpan.className = BuildingMenuSingleBuildingEfficiencyValueClass;
									tmpBuildingUnfoldedOperatorsEfficiencyValueSpan.id = BuildingMenuSingleBuildingEfficiencyValueIdPrefix + tmpBuilding.index;
									tmpBuildingUnfoldedOperatorsEfficiencyValueSpan.innerHTML = "100%";
									tmpBuildingUnfoldedOperatorsEfficiencyValueSpan.style.color = "hsl(120,100%,50%)";
									var tmpBuildingUnfoldedOperatorsEfficiencyInfoIconContainer = outputDocument.createElement("div");
									tmpBuildingUnfoldedOperatorsEfficiencyInfoIconContainer.className = BuildingMenuSingleBUildingEfficiencyInfoIconContainerClass;
										var tmpBuildingUnfoldedOperatorsEfficiencyInfoIcon = outputDocument.createElement("img");
										tmpBuildingUnfoldedOperatorsEfficiencyInfoIcon.className = BuildingMenuSingleBUildingEfficiencyInfoIconClass;
										tmpBuildingUnfoldedOperatorsEfficiencyInfoIcon.src = BuildingMenuSingleBUildingEfficiencyInfoIconPath;
										
										tmpBuildingUnfoldedOperatorsEfficiencyInfoIconContainer.append(tmpBuildingUnfoldedOperatorsEfficiencyInfoIcon);
									var tmpBuildingUnfoldedOperatorsEfficiencyListContainer = outputDocument.createElement("div");
									tmpBuildingUnfoldedOperatorsEfficiencyListContainer.className = BuildingMenuSingleBuildingEfficiencyInfoContainerClass;
										var tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainer = outputDocument.createElement("div");
										tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainer.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerClass;
										tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainer.id = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerPowerIdPrefix + tmpBuilding.index;
											var tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainerImage = outputDocument.createElement("img");
											tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainerImage.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyImageClass;
											// tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainerImage.src = BuildingMenuSingleBuildingSingleAlertIconEnergyCyan;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainerImage.src = BuildingMenuSingleBuildingAlertIconPathesArray[12];
											var tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainerText = outputDocument.createElement("span");
											tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainerText.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyValueClass;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainerText.id = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyPowerValueIdPrefix + tmpBuilding.index;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainerText.innerHTML = "100%";
											tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainerText.style.color = "hsl(120,100%,50%)";
										
											tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainerImage);
											tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainerText);
										var tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainer = outputDocument.createElement("div");
										tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainer.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerClass;
										tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainer.id = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerStaffIdPrefix + tmpBuilding.index;
											var tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainerImage = outputDocument.createElement("img");
											tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainerImage.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyImageClass;
											// tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainerImage.src = BuildingMenuSingleBuildingSingleAlertIconStaffCyan;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainerImage.src = BuildingMenuSingleBuildingAlertIconPathesArray[0];
											var tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainerText = outputDocument.createElement("span");
											tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainerText.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyValueClass;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainerText.id = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyStaffValueIdPrefix + tmpBuilding.index;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainerText.innerHTML = "100%";
											tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainerText.style.color = "hsl(120,100%,50%)";
										
											tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainerImage);
											tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainerText);
										var tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainer = outputDocument.createElement("div");
										tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainer.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerClass;
										tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainer.id = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerHazardIdPrefix + tmpBuilding.index;
											var tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainerImage = outputDocument.createElement("img");
											tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainerImage.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyImageClass;
											// tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainerImage.src = BuildingMenuSingleBuildingSingleAlertIconHazardCyan;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainerImage.src = BuildingMenuSingleBuildingAlertIconPathesArray[36];
											var tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainerText = outputDocument.createElement("span");
											tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainerText.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyValueClass;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainerText.id = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyHazardValueIdPrefix + tmpBuilding.index;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainerText.innerHTML = "100%";
											tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainerText.style.color = "hsl(120,100%,50%)";
										
											tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainerImage);
											tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainerText);
										var tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainer = outputDocument.createElement("div");
										tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainer.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerClass;
										tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainer.id = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerDiscontentIdPrefix + tmpBuilding.index;
											var tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainerImage = outputDocument.createElement("img");
											tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainerImage.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyImageClass;
											// tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainerImage.src = BuildingMenuSingleBuildingSingleAlertIconUnrestCyan;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainerImage.src = BuildingMenuSingleBuildingAlertIconPathesArray[20];
											var tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainerText = outputDocument.createElement("span");
											tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainerText.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyValueClass;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainerText.id = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyDiscontentValueIdPrefix + tmpBuilding.index;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainerText.innerHTML = "100%";
											tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainerText.style.color = "hsl(120,100%,50%)";
										
											tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainerImage);
											tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainerText);
										var tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainer = outputDocument.createElement("div");
										tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainer.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerClass;
										tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainer.id = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyContainerMineralsIdPrefix + tmpBuilding.index;
											var tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainerImage = outputDocument.createElement("img");
											tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainerImage.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyImageClass;
											// tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainerImage.src = BuildingMenuSingleBuildingSingleAlertIconMineralsCyan;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainerImage.src = BuildingMenuSingleBuildingAlertIconPathesArray[28];
											var tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainerText = outputDocument.createElement("span");
											tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainerText.className = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyValueClass;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainerText.id = BuildingMenuSingleBuildingEfficiencyInfoSingleEfficiencyMineralsValueIdPrefix + tmpBuilding.index;
											tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainerText.innerHTML = "100%";
											tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainerText.style.color = "hsl(120,100%,50%)";
										
											tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainerImage);
											tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainerText);
										tmpBuildingUnfoldedOperatorsEfficiencyListContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainer);
										tmpBuildingUnfoldedOperatorsEfficiencyListContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainer);
										tmpBuildingUnfoldedOperatorsEfficiencyListContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainer);
										tmpBuildingUnfoldedOperatorsEfficiencyListContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainer);
										tmpBuildingUnfoldedOperatorsEfficiencyListContainer.append(tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainer);
									tmpBuildingUnfoldedOperatorsEfficiencyContainer.append(tmpBuildingUnfoldedOperatorsEfficiencyPrefixSpan);
									tmpBuildingUnfoldedOperatorsEfficiencyContainer.innerHTML += "&ensp;";
									tmpBuildingUnfoldedOperatorsEfficiencyContainer.append(tmpBuildingUnfoldedOperatorsEfficiencyValueSpan);
									tmpBuildingUnfoldedOperatorsEfficiencyContainer.append(tmpBuildingUnfoldedOperatorsEfficiencyInfoIconContainer);
									tmpBuildingUnfoldedOperatorsEfficiencyContainer.append(tmpBuildingUnfoldedOperatorsEfficiencyListContainer);
								tmpBuildingUnfoldedOperatorsMenuLeftContainer.append(tmpBuildingUnfoldedOperatorsButtonsContainer);
								tmpBuildingUnfoldedOperatorsMenuLeftContainer.append(tmpBuildingUnfoldedOperatorsNumbersContainer);
								tmpBuildingUnfoldedOperatorsMenuLeftContainer.append(tmpBuildingUnfoldedOperatorsEfficiencyContainer);
							
							var tmpBuildingUnfoldedOperatorsMenuRightContainer = outputDocument.createElement("div");
							tmpBuildingUnfoldedOperatorsMenuRightContainer.className = BuildingMenuSingleBuildingOperatorControlMenuRightSideContainerClass;
								var tmpBuildingUnfoldedOperatorsButtonFILL = outputDocument.createElement("button");
								tmpBuildingUnfoldedOperatorsButtonFILL.className = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonClass;
									var tmpBuildingUnfoldOperatorsButtonFILLImage = outputDocument.createElement("img");
									tmpBuildingUnfoldOperatorsButtonFILLImage.className = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonImageClass;
									tmpBuildingUnfoldOperatorsButtonFILLImage.src = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonImagePath;
									var tmpBuildingUnfoldOperatorsButtonFILLSpan = outputDocument.createElement("span");
									tmpBuildingUnfoldOperatorsButtonFILLSpan.className = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonTextClass;
									tmpBuildingUnfoldOperatorsButtonFILLSpan.innerHTML = "FILL";
									
									tmpBuildingUnfoldedOperatorsButtonFILL.append(tmpBuildingUnfoldOperatorsButtonFILLImage);
									tmpBuildingUnfoldedOperatorsButtonFILL.append(tmpBuildingUnfoldOperatorsButtonFILLSpan);
								
								var tmpBuildingUnfoldedOperatorsButtonSET = outputDocument.createElement("button");
								tmpBuildingUnfoldedOperatorsButtonSET.className = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonClass;
									var tmpBuildingUnfoldOperatorsButtonSETImage = outputDocument.createElement("img");
									tmpBuildingUnfoldOperatorsButtonSETImage.className = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonImageClass;
									tmpBuildingUnfoldOperatorsButtonSETImage.src = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonImagePath;
									var tmpBuildingUnfoldOperatorsButtonSETSpan = outputDocument.createElement("span");
									tmpBuildingUnfoldOperatorsButtonSETSpan.className = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonTextClass;
									tmpBuildingUnfoldOperatorsButtonSETSpan.innerHTML = "SET";
									
									tmpBuildingUnfoldedOperatorsButtonSET.append(tmpBuildingUnfoldOperatorsButtonSETImage);
									tmpBuildingUnfoldedOperatorsButtonSET.append(tmpBuildingUnfoldOperatorsButtonSETSpan);
								
								var tmpBuildingUnfoldedOperatorsButtonNONE = outputDocument.createElement("button");
								tmpBuildingUnfoldedOperatorsButtonNONE.className = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonClass;
									var tmpBuildingUnfoldOperatorsButtonNONEImage = outputDocument.createElement("img");
									tmpBuildingUnfoldOperatorsButtonNONEImage.className = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonImageClass;
									tmpBuildingUnfoldOperatorsButtonNONEImage.src = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonImagePath;
									var tmpBuildingUnfoldOperatorsButtonNONESpan = outputDocument.createElement("span");
									tmpBuildingUnfoldOperatorsButtonNONESpan.className = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonTextClass;
									tmpBuildingUnfoldOperatorsButtonNONESpan.innerHTML = "NONE";
									
									tmpBuildingUnfoldedOperatorsButtonNONE.append(tmpBuildingUnfoldOperatorsButtonNONEImage);
									tmpBuildingUnfoldedOperatorsButtonNONE.append(tmpBuildingUnfoldOperatorsButtonNONESpan);
								
								var tmpBuildingUnfoldedOperatorsButtonALL = outputDocument.createElement("button");
								tmpBuildingUnfoldedOperatorsButtonALL.className = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonClass;
									var tmpBuildingUnfoldOperatorsButtonALLImage = outputDocument.createElement("img");
									tmpBuildingUnfoldOperatorsButtonALLImage.className = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonImageClass;
									tmpBuildingUnfoldOperatorsButtonALLImage.src = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonImagePath;
									var tmpBuildingUnfoldOperatorsButtonALLSpan = outputDocument.createElement("span");
									tmpBuildingUnfoldOperatorsButtonALLSpan.className = BuildingMenuSingleBuildingOperatorControlButtonSingleButtonTextClass;
									tmpBuildingUnfoldOperatorsButtonALLSpan.innerHTML = "ALL";
									
									tmpBuildingUnfoldedOperatorsButtonALL.append(tmpBuildingUnfoldOperatorsButtonALLImage);
									tmpBuildingUnfoldedOperatorsButtonALL.append(tmpBuildingUnfoldOperatorsButtonALLSpan);
								tmpBuildingUnfoldedOperatorsMenuRightContainer.append(tmpBuildingUnfoldedOperatorsButtonFILL);
								tmpBuildingUnfoldedOperatorsMenuRightContainer.append(tmpBuildingUnfoldedOperatorsButtonSET);
								tmpBuildingUnfoldedOperatorsMenuRightContainer.append(tmpBuildingUnfoldedOperatorsButtonNONE);
								tmpBuildingUnfoldedOperatorsMenuRightContainer.append(tmpBuildingUnfoldedOperatorsButtonALL);
							tmpBuildingUnfoldedOperatorsMenuContainer.append(tmpBuildingUnfoldedOperatorsMenuLeftContainer);
							tmpBuildingUnfoldedOperatorsMenuContainer.append(tmpBuildingUnfoldedOperatorsMenuRightContainer);
						tmpBuildingUnfoldedOperatorsContainer.append(tmpBuildingUnfoldedOperatorsHeaderContainer);
						tmpBuildingUnfoldedOperatorsContainer.append(tmpBuildingUnfoldedOperatorsMenuContainer);
					
					var tmpBuildingUnfoldedSideButtonsContainer = outputDocument.createElement("div");
					tmpBuildingUnfoldedSideButtonsContainer.className = BuildingMenuSingleBuildingUnfoldedSideButtonsContainerClass;
					
						var tmpBuildingUnfoldedSideFoldButton = outputDocument.createElement("button");
						tmpBuildingUnfoldedSideFoldButton.className = BuildingMenuSingleBuildingSideButtonClass;
						tmpBuildingUnfoldedSideFoldButton.onclick = function(){interfaceFoldUnfoldBuilding(outputDocument,tmpBuilding.index);};
							var tmpBuildingUnfoldedSideFoldButtonImage = outputDocument.createElement("img");
							tmpBuildingUnfoldedSideFoldButtonImage.className = BuildingMenuSingleBuildingSideButtonImageClass;
							tmpBuildingUnfoldedSideFoldButtonImage.src = BuildingMenuSingleBuildingSideButtonUnoldedImagePath;
							
							tmpBuildingUnfoldedSideFoldButton.append(tmpBuildingUnfoldedSideFoldButtonImage);
					
						var tmpBuildingUnfoldedPowerButton = outputDocument.createElement("button");
						tmpBuildingUnfoldedPowerButton.className = BuildingMenuSingleBuildingSideButtonClass;
							var tmpBuildingUnfoldedPowerButtonImage = outputDocument.createElement("img");
							tmpBuildingUnfoldedPowerButtonImage.className = BuildingMenuSingleBuildingSideButtonImageClass;
							tmpBuildingUnfoldedPowerButtonImage.id = BuildingMenuSingleBuildingSideButtonPowerButtonIdPrefix + tmpBuilding.index;
							tmpBuildingUnfoldedPowerButtonImage.onclick = function(){interfaceEnableDisableBuilding(outputDocument, tmpBuilding.index);};
							if(tmpBuilding.enabled) tmpBuildingUnfoldedPowerButtonImage.src = BuildingMenuSingleBuildingSideButtonPoweredOnImagePath;
							else tmpBuildingUnfoldedPowerButtonImage.src = BuildingMenuSingleBuildingSideButtonPoweredOffImagePath;
							
							tmpBuildingUnfoldedPowerButton.append(tmpBuildingUnfoldedPowerButtonImage);
						tmpBuildingUnfoldedSideButtonsContainer.append(tmpBuildingUnfoldedSideFoldButton);
						tmpBuildingUnfoldedSideButtonsContainer.append(tmpBuildingUnfoldedPowerButton);
					
					var tmpBuildingControlAlertsContainer = outputDocument.createElement("div");
					tmpBuildingControlAlertsContainer.className = BuildingMenuSingleBuildingControlAlertsContainerClass;
					
						for(let j = 0; j < BuildingMenuSingleBuildingAlertContainerIdPrefixesArray.length; j++){
							let tmpAlertContainer = outputDocument.createElement("div");
							tmpAlertContainer.className = BuildingMenuSingleBuildingAlertContainerClass;
							tmpAlertContainer.id = BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[j][0] + tmpBuilding.index;
							tmpAlertContainer.title = BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[j][3];
							
							let tmpAlertIcon = outputDocument.createElement("img");
							tmpAlertIcon.className = BuildingMenuSingleBuildingSingleAlertClass;
							tmpAlertIcon.id = BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[j][1] + tmpBuilding.index;
							tmpAlertIcon.src = BuildingMenuSingleBuildingAlertIconPathesArray[BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[j][2]];
							
							tmpAlertContainer.append(tmpAlertIcon);
							tmpBuildingControlAlertsContainer.append(tmpAlertContainer);
						}

					tmpBuildingControlContainer.append(tmpBuildingFoldedOperatorsContainer);
					tmpBuildingControlContainer.append(tmpBuildingFoldedSideButtonsContainer);
					tmpBuildingControlContainer.append(tmpBuildingUnfoldedOperatorsContainer);
					tmpBuildingControlContainer.append(tmpBuildingUnfoldedSideButtonsContainer);
					tmpBuildingUnfoldedOperatorsHeaderContainer.append(tmpBuildingControlAlertsContainer);
				
				tmpBuildingContainer.append(tmpBuildingInfoContainer);
				tmpBuildingContainer.append(tmpBuildingBuildDemolishContainer);
				tmpBuildingContainer.append(tmpBuildingUpgradeDowngradeContainer);
				tmpBuildingContainer.append(tmpBuildingControlContainer);
			tmpBuildingElement.append(tmpBuildingContainer);
		buildingListContainer.append(tmpBuildingElement);
		
		//count enabled buildings
		InterfaceBuildingMenuBuildingsOnList++;
		
		interfaceInitSingleBuildingAlerts(outputDocument, tmpBuilding.index);
		interfaceRefreshSingleBuilding(outputDocument, tmpBuilding.index);
		// interfaceRefreshBuildingAlerts(outputDocument, tmpBuilding.index);
		// interfaceRefreshBuildingProductionConsumptionTable(outputDocument, tmpBuilding.index);
		// interfaceRefreshBuildingClearChangeProductionConsumptionTable(outputDocument, tmpBuilding.index);
	}
	//console.log(InterfaceBuildingMenuBuildingsOnList);

	if(InterfaceBuildingMenuBuildingsOnList == 0) outputDocument.getElementById("planetBuildingMenuNoBuildingsAvailable").style.display = "block";
	else outputDocument.getElementById("planetBuildingMenuNoBuildingsAvailable").style.display = "none";
}

function interfaceInitSingleBuildingAlerts(outputDocument, buildingIndex){
	let tmpPlanet = PlanetsArray[PlanetsCurrentPlanet];
	let tmpBuilding = tmpPlanet.buildings[buildingIndex];
	let tmpBuildingBlueprint = BuildingsArray[tmpBuilding.blueprintIndex];
	
	let tmpBuildingControlAlertsUnpowered = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[0][0] + buildingIndex);
	let tmpBuildingControlAlertsPowerCritical = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[1][0] + buildingIndex);
	let tmpBuildingControlAlertsPowerInsufficient = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[2][0] + buildingIndex);
	let tmpBuildingControlAlertsPowerConsumedAndGenerated = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[3][0] + buildingIndex);
	let tmpBuildingControlAlertsPowerSensitive = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[4][0] + buildingIndex);
	
	let tmpBuildingControlAlertsPowerSensitiveIssue = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[5][0] + buildingIndex);
	let tmpBuildingControlAlertsOverstaffed = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[6][0] + buildingIndex);
	let tmpBuildingControlAlertsUnderstaffed = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[7][0] + buildingIndex);
	let tmpBuildingControlAlertsNoStaff = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[8][0] + buildingIndex);
	let tmpBuildingControlAlertsNoStaffBonus = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[9][0] + buildingIndex);
	
	let tmpBuildingControlAlertsStaffMandatory = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[10][0] + buildingIndex);
	let tmpBuildingControlAlertsStaffMandatoryIssue = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[11][0] + buildingIndex);
	let tmpBuildingControlAlertsStaffNotNeededIssue = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[12][0] + buildingIndex);
	let tmpBuildingControlAlertsHazardSensitive = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[13][0] + buildingIndex);
	let tmpBuildingControlAlertsHazardIssue = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[14][0] + buildingIndex);
	
	let tmpBuildingControlAlertsHazardCritical = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[15][0] + buildingIndex);
	let tmpBuildingControlAlertsHazardUnaffected = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[16][0] + buildingIndex);
	let tmpBuildingControlAlertsMineralsRequired = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[17][0] + buildingIndex);
	let tmpBuildingControlAlertsMineralsRequiredDifferent = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[18][0] + buildingIndex);
	let tmpBuildingControlAlertsMineralsOutputLimited = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[19][0] + buildingIndex);
	
	let tmpBuildingControlAlertsMineralsOutputMissing = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[20][0] + buildingIndex);
	let tmpBuildingControlAlertsMineralsInputInsufficient = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[21][0] + buildingIndex);
	let tmpBuildingControlAlertsMineralsInputMissing = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[22][0] + buildingIndex);
	let tmpBuildingControlAlertsUnrestUnaffected = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[23][0] + buildingIndex);
	let tmpBuildingControlAlertsUnrestIssue = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[24][0] + buildingIndex);
	
	let tmpBuildingControlAlertsUnrestCritical = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[25][0] + buildingIndex);
	let tmpBuildingControlAlertsUnrestSensitive = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[26][0] + buildingIndex);
	let tmpBuildingControlAlertsUnrestSensitiveIssue = outputDocument.getElementById(BuildingMenuSingleBuildingAlertContainerIdPrefixesArray[27][0] + buildingIndex);	
	
	//disabled symbol
	if(!tmpBuilding.enabled) tmpBuildingControlAlertsUnpowered.style.display = "inline-block";
	
	//planet power related
	if(tmpBuildingBlueprint.powerSensitive){
		if(tmpPlanet.energyRequired <= tmpPlanet.energyAvailable) tmpBuildingControlAlertsPowerSensitive.style.display = "inline-block";
		else tmpBuildingControlAlertsPowerSensitiveIssue.style.display = "inline-block";
	}
	else{
		if(tmpPlanet.energyRequired > 0){
			if(tmpPlanet.energyAvailable/tmpPlanet.energyRequired < tmpBuildingBlueprint.powerMinimum) tmpBuildingControlAlertsPowerCritical.style.display = "inline-block";
			else if(tmpPlanet.energyAvailable/tmpPlanet.energyRequired < 1) tmpBuildingControlAlertsPowerInsufficient.style.display = "inline-block";
		}
	}
	
	//power consumed and generated
	if(tmpBuildingBlueprint.powerProduced > 0 && tmpBuildingBlueprint.powerConsumed > 0) tmpBuildingControlAlertsPowerConsumedAndGenerated.style.display = "inline-block";

	//staff not needed
	if(tmpBuildingBlueprint.staffNoneNeeded) tmpBuildingControlAlertsStaffNotNeededIssue.style.display = "inline-block";
	else{
		//if staff is mandatory
		if(tmpBuildingBlueprint.staffMandatory){
			if(tmpBuilding.staffRequired > tmpBuilding.staffAssigned) tmpBuildingControlAlertsStaffMandatoryIssue.style.display = "inline-block";
			else tmpBuildingControlAlertsStaffMandatory.style.display = "inline-block";
		} //if not
		else{
			if(tmpBuilding.staffRequired > tmpBuilding.staffAssigned && tmpBuilding.staffAssigned > 0) tmpBuildingControlAlertsUnderstaffed.style.display = "inline-block";
		}
		
		//if there is exactly zero staff
		if(tmpBuilding.staffAssigned == 0) tmpBuildingControlAlertsNoStaff.style.display = "inline-block";
		
		//if there is too much staff
		if(tmpBuilding.staffAssigned > tmpBuilding.staffRequired){
			if(tmpBuildingBlueprint.staffOvertimeForbidden) tmpBuildingControlAlertsOverstaffed.style.display = "inline-block";
			else tmpBuildingControlAlertsNoStaffBonus.style.display = "inline-block";
		}
		else{
			
		}
	}
	
	//hazard related
	if(tmpBuildingBlueprint.hazardResistant) tmpBuildingControlAlertsHazardUnaffected.style.display = "inline-block";
	else{
		if(tmpBuildingBlueprint.hazardSensitive) tmpBuildingControlAlertsHazardSensitive.style.display = "inline-block";
		if(tmpPlanet.hazard > (tmpBuildingBlueprint.hazardTolerance + tmpBuildingBlueprint.hazardLimit)) tmpBuildingControlAlertsHazardCritical.style.display = "inline-block";
		else if (tmpPlanet.hazard > tmpBuildingBlueprint.hazardTolerance) tmpBuildingControlAlertsHazardIssue.style.display = "inline-block";
	}
	
	//unrest related
	if(tmpBuildingBlueprint.unrestResistant) tmpBuildingControlAlertsUnrestUnaffected.style.display = "inline-block";
	else{
		if(tmpBuildingBlueprint.unrestSensitive){
			if(tmpPlanet.unrest >= 0.0001) tmpBuildingControlAlertsUnrestSensitiveIssue.style.display = "inline-block";
			else tmpBuildingControlAlertsUnrestSensitive.style.display = "inline-block";
		}
		else{
			if(tmpPlanet.unrest > tmpBuilding.unrestLimit) tmpBuildingControlAlertsUnrestCritical.style.display = "inline-block";
			else if(tmpPlanet.unrest > tmpBuilding.unrestTolerance) tmpBuildingControlAlertsUnrestIssue.style.display = "inline-block";
		}
	}
	
	//minerals related
	if(tmpBuildingBlueprint.mineralsDependant){
		let tmpOutputResourceMissing = false;
		let tmpInputResourceMissing = false;
		
		if(tmpBuildingBlueprint.mineralsRequiredDifferent){
			
		}
		else{
			
		}
	}
}

function interfaceBuildMenuToggleCategory(outputDocument, categoryId){
	buildingsToggleBuildingCategoryDisplay(categoryId);
	//interfaceRefreshBuildMenu(outputDocument);
	interfaceRefreshBuildingsList(outputDocument);
} 

function interfaceBuildMenuBulkBuyChanged(outputDocument){
	let tmpInputElement = outputDocument.getElementById(InterfaceMainMenuButtonsID[46]);
	let tmpInputValue = tmpInputElement.value;
	let tmpParsedValue = buildingsValidateBulkBuyValue(tmpInputValue);
	
	if(tmpParsedValue == false){
		//validation failed, revert to last
		tmpInputElement.value = BuildingsBulkBuyAmount;
		
		//do not change values
		return;
	}
	else{
		//set values in input fields
		let tmpInputsArray = [];
		
		//build, demolish, upgrade, downgrade
		tmpInputsArray = outputDocument.getElementsByClassName(BuildingsBulkBuyNumericInputClass);
		for(let i = 0; i < tmpInputsArray.length; i++){
			tmpInputsArray[i].value = tmpParsedValue;
		}
		
		//agents
		tmpInputsArray = outputDocument.getElementsByClassName(BuildingsBulkOperatorsNumericInputClass);
		for(let i = 0; i < tmpInputsArray.length; i++){
			tmpInputsArray[i].value = tmpParsedValue;
		}
		
		//set values in current planet buildings
		let tmpCurrentPlanetBuildingsArray = PlanetsArray[PlanetsCurrentPlanet].buildings;
		for(let i = 0; i < tmpCurrentPlanetBuildingsArray.length; i++){
			tmpCurrentPlanetBuildingsArray[i].customBuildDemolishAmount = tmpParsedValue;
			tmpCurrentPlanetBuildingsArray[i].customUpgradeDowngradeAmount = tmpParsedValue;
			tmpCurrentPlanetBuildingsArray[i].customAgentsAddRemoveAmount = tmpParsedValue;
			tmpCurrentPlanetBuildingsArray[i].refreshAllCostsAndRefunds();
		}
		
		BuildingsBulkBuyAmount = tmpParsedValue;
	}
}
function interfaceBuildMenuCustomBuildDemolishChanged(outputDocument, buildingListId){
	let tmpInputElement = outputDocument.getElementById(BuildingMenuSingleBuildingSingleBuildDemolishInputIdPrefix + buildingListId);
	let tmpCurrentPlanetBuildingsArray = PlanetsArray[PlanetsCurrentPlanet].buildings;
	let tmpBuilding = tmpCurrentPlanetBuildingsArray[buildingListId];
	
	let tmpInputValue = tmpInputElement.value;
	let tmpParsedValue = buildingsValidateBulkBuyValue(tmpInputValue);
	
	if(tmpParsedValue == false){
		//validation failed, revert to last
		tmpInputElement.value = tmpBuilding.customUpgradeDowngradeAmount;
		
		//do not change values
		return;
	}
	else{
		tmpBuilding.customBuildDemolishAmount = tmpParsedValue;
		tmpBuilding.refreshBuildCost();
		tmpBuilding.refreshDemolishRefund();
	}
}
function interfaceBuildMenuCustomUpgradeDowngradeChanged(outputDocument, buildingListId){
	let tmpInputElement = outputDocument.getElementById(BuildingMenuSingleBuildingSingleUpgradeDowngradeInputIdPrefix + buildingListId);
	let tmpCurrentPlanetBuildingsArray = PlanetsArray[PlanetsCurrentPlanet].buildings;
	let tmpBuilding = tmpCurrentPlanetBuildingsArray[buildingListId];
	
	let tmpInputValue = tmpInputElement.value;
	let tmpParsedValue = buildingsValidateBulkBuyValue(tmpInputValue);
	
	if(tmpParsedValue == false){
		//validation failed, revert to last
		tmpInputElement.value = tmpBuilding.customBuildDemolishAmount;
		
		//do not change values
		return;
	}
	else{
		tmpBuilding.customUpgradeDowngradeAmount = tmpParsedValue;
		tmpBuilding.refreshUpgradeCost();
		tmpBuilding.refreshDowngradeRefund();
	}
}
function interfaceBuildMenuCustomAgentsChanged(outputDocument, buildingListId){
	let tmpInputElement = outputDocument.getElementById(BuildingMenuSingleBuildingOperatorCustomInputIdPrefix + buildingListId);
	let tmpCurrentPlanetBuildingsArray = PlanetsArray[PlanetsCurrentPlanet].buildings;
	let tmpBuilding = tmpCurrentPlanetBuildingsArray[buildingListId];
	
	let tmpInputValue = tmpInputElement.value;
	let tmpParsedValue = buildingsValidateBulkBuyValue(tmpInputValue);
	
	if(tmpParsedValue == false){
		//validation failed, revert to last
		tmpInputElement.value = tmpBuilding.customAgentsAddRemoveAmount;
		
		//do not change values
		return;
	}
	else{
		tmpBuilding.customAgentsAddRemoveAmount = tmpParsedValue;
	}
}

function interfaceBuildMenuAutoReassignStaff(outputDocument){
	buildingsToggleAutoAssignStaff();
}
function interfaceBuildMenuTryBuyMax(outputDocument){
	buildingsToggleTryBuyMax();
}
function interfaceBuildMenuDemolishLock(outputDocument){
	buildingsToggleDemolishLock();
}


function interfaceSettingsSwitchFastMenuChange(outputDocument) {
	settingsToggleInstantMenuNavigation();
	
	interfaceInitSettingsMenu(outputDocument);
}
function interfaceSettingsSwitchIntroSkip(outputDocument) {
	if(ProgressIntroDisplayedOrSkipped) ProgressIntroDisplayedOrSkipped = false;
	else ProgressIntroDisplayedOrSkipped = true;
	
	interfaceInitSettingsMenu(outputDocument);
}
function interfaceSettingsSwitchAutosave(outputDocument) {
	settingsToggleAutosave();
	
	interfaceInitSettingsMenu(outputDocument);
}
function interfaceSettingsSwitchGalaxyMapParralax(outputDocument){
	settingsToggleGalaxyMapParallax();
	
	interfaceInitSettingsMenu(outputDocument);
}

//refresh interface elements

function interfaceRefreshPlanetOverview(outputDocument) {
	//planet data
	if(PlanetsCurrentPlanet != -1) {
		if(PlanetImagesMediumSized){
			outputDocument.getElementById("planetOverviewMenuPlanetImage").src = PlanetImageDefaultPath + "medium/" + PlanetsArray[PlanetsCurrentPlanet].imagePath + ".png";
		}
		else if(PlanetImagesSmallSized){
			outputDocument.getElementById("planetOverviewMenuPlanetImage").src = PlanetImageDefaultPath + "small/" + PlanetsArray[PlanetsCurrentPlanet].imagePath + ".png";
		}
		else{
			outputDocument.getElementById("planetOverviewMenuPlanetImage").src = PlanetImageDefaultPath + PlanetImageFallbackImage + ".png";
		}
		
		outputDocument.getElementById("planetOverviewInfoPanelHeaderPlanetNameText").innerHTML = PlanetsArray[PlanetsCurrentPlanet].name;
		outputDocument.getElementById("planetOverviewInfoPanelHeaderSystemNameText").innerHTML = PlanetsArray[PlanetsCurrentPlanet].system;
		
		if(DiplomacyFactionNames[PlanetsArray[PlanetsCurrentPlanet].owner] === undefined) {
			outputDocument.getElementById("planetOverviewInfoOwnerValue").innerHTML = DiplomacyFactionFallbackName[0];
			outputDocument.getElementById("planetOverviewInfoOwnerValue").style.color = DiplomacyFactionFallbackName[1];
		}
		else{
			outputDocument.getElementById("planetOverviewInfoOwnerValue").innerHTML = DiplomacyFactionNames[PlanetsArray[PlanetsCurrentPlanet].owner][0];
			outputDocument.getElementById("planetOverviewInfoOwnerValue").style.color = DiplomacyFactionNames[PlanetsArray[PlanetsCurrentPlanet].owner][1];
		}
		//console.log(PlanetsArray[PlanetsCurrentPlanet]);
		outputDocument.getElementById("planetOverviewInfoTypeValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].type[0];
		//outputDocument.getElementById("planetOverviewInfoSubtypeValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].subtype;
		if(PlanetsArray[PlanetsCurrentPlanet].conditions.length > 0) {
			outputDocument.getElementById("planetOverviewInfoConditionsValue").innerHTML = "";
			for(var i = 0; i < PlanetsArray[PlanetsCurrentPlanet].conditions.length; i++) {
				if(i != 0) outputDocument.getElementById("planetOverviewInfoConditionsValue").innerHTML += ",&nbsp;";//"<br>";
				outputDocument.getElementById("planetOverviewInfoConditionsValue").innerHTML += PlanetsArray[PlanetsCurrentPlanet].conditions[i][0];
			}
		}
		else{
			outputDocument.getElementById("planetOverviewInfoConditionsValue").innerHTML += "No data.";
		}
		
		outputDocument.getElementById("planetOverviewInfoDescriptionValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].description;
		
		outputDocument.getElementById("planetOverviewInfoAtmosphereValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].atmosphere[0] + " ("+PlanetsArray[PlanetsCurrentPlanet].atmosphere[1]+")";
		outputDocument.getElementById("planetOverviewInfoTemperatureValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].averageTemperature + "°C";
		
		outputDocument.getElementById("planetOverviewInfoHazardValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].hazard;
		var tmpHazard = PlanetsArray[PlanetsCurrentPlanet].hazard;
		var tmpHue = 180;
		var tmpColorPrefix = "hsla(";
		var tmpColorSuffix = ",100%,50%,1.0)";
		
		if(tmpHazard <= PlanetBaseHazardLevel) {
			tmpHue = 130;
		} 
		else{
			tmpHue = 130 - 20 * (tmpHazard - PlanetBaseHazardLevel);
		}
		if(tmpHue < (-90)) tmpHue = (-90);
		outputDocument.getElementById("planetOverviewInfoHazardValue").style.color = tmpColorPrefix + tmpHue + tmpColorSuffix;
		
		outputDocument.getElementById("planetOverviewInfoPeroidValue").innerHTML = Number(PlanetsArray[PlanetsCurrentPlanet].orbitalPeroid).toFixed(1) + " days";
		outputDocument.getElementById("planetOverviewInfoDistanceValue").innerHTML = Number(PlanetsArray[PlanetsCurrentPlanet].orbitalDistance).toFixed(2) + " AU";
	
		outputDocument.getElementById("planetOverviewInfoRadiusValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].radius+" km";
		outputDocument.getElementById("planetOverviewInfoGravityValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].gravity+" m/s²";
		
		if(PlanetsArray[PlanetsCurrentPlanet].owner == DiplomacyPlayerFaction) {
			interfacePlanetOverviewEnableButtons(outputDocument);
			
			outputDocument.getElementById("planetOverviewInfoEnergyValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].getEnergyBalanceString();
			if(PlanetsArray[PlanetsCurrentPlanet].getEnergyBalanceValue() >= 1) {
				outputDocument.getElementById("planetOverviewInfoEnergyValue").style.color = "hsla(120,100%,65%,1)";
			}
			else if(PlanetsArray[PlanetsCurrentPlanet].getEnergyBalanceValue() > 0.5) {
				outputDocument.getElementById("planetOverviewInfoEnergyValue").style.color = "hsla(60,100%,65%,1)";
			}
			else{
				outputDocument.getElementById("planetOverviewInfoEnergyValue").style.color = "hsla(0,100%,65%,1)";
			}
		}
		else {
			// interfacePlanetOverviewChangeTab(outputDocument,ResourcePanelNaturalResourcesTabID, true); 
			interfacePlanetOverviewChangeTab(outputDocument, ResourcePanelNaturalResourcesTabID, InterfaceMainMenuButtonsID[28], true); 
			// interfacePlanetOverviewActivateTabHeader(outputDocument,"planetOverviewResourcesPanelResourcesButton");
			
			interfacePlanetOverviewDisableButtons(outputDocument);
			
			outputDocument.getElementById("planetOverviewInfoEnergyValue").innerHTML = "Unknown";
			outputDocument.getElementById("planetOverviewInfoEnergyValue").style.color = "hsla(0,0%,50%,1)";
		}

		interfaceRefreshPlanetResources(outputDocument);		
	}
}

var InterfacePlanetOverviewTabHeaderIDs = [
	"planetOverviewResourcesPanelResourcesButton",
	"planetOverviewResourcesPanelStorageButton",
	"planetOverviewResourcesPanelProductionButton",
	"planetOverviewResourcesPanelConsumptionButton",
	"planetOverviewResourcesPanelBalanceButton",
	
	"planetOverviewPlanetBuildingsButton",
	"planetOverviewPlanetShipyardButton",
	"planetOverviewPlanetRoutesButton",
];

function interfacePlanetOverviewEnableButtons(outputDocument) {
	//resource tabs
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[1]).disabled = false;
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[2]).disabled = false;
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[3]).disabled = false;
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[4]).disabled = false;
	
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[5]).disabled = false;
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[6]).disabled = false;
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[7]).disabled = false;
}
function interfacePlanetOverviewDisableButtons(outputDocument) {
	//resource tabs
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[1]).disabled = "disabled";
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[2]).disabled = "disabled";
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[3]).disabled = "disabled";
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[4]).disabled = "disabled";
	
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[5]).disabled = "disabled";
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[6]).disabled = "disabled";
	outputDocument.getElementById(InterfacePlanetOverviewTabHeaderIDs[7]).disabled = "disabled";
}


function interfaceRefreshSystemOverview(outputDocument) {
	//system data
	if(SystemsCurrentSystem != -1) {
		outputDocument.getElementById("systemOverviewInfoPanelHeaderSystemNameText").innerHTML = SystemsArray[SystemsCurrentSystem].name;
		outputDocument.getElementById("systemOverviewInfoPanelHeaderNetworkNameText").innerHTML = SystemsArray[SystemsCurrentSystem].network;
		
		if(DiplomacyFactionNames[SystemsArray[SystemsCurrentSystem].owner] === undefined) {
			outputDocument.getElementById("systemOverviewInfoOwnerValue").innerHTML = DiplomacyFactionFallbackName[0];
			outputDocument.getElementById("systemOverviewInfoOwnerValue").style.color = DiplomacyFactionFallbackName[1];
		}
		else{
			outputDocument.getElementById("systemOverviewInfoOwnerValue").innerHTML = DiplomacyFactionNames[SystemsArray[SystemsCurrentSystem].owner][0];
			outputDocument.getElementById("systemOverviewInfoOwnerValue").style.color = DiplomacyFactionNames[SystemsArray[SystemsCurrentSystem].owner][1];
		}
		
		if(SystemsArray[SystemsCurrentSystem].HUB_owner == DiplomacyPlayerFaction) {
			outputDocument.getElementById("systemOverviewStationButton").disabled = false;
			
			if(SystemsArray[SystemsCurrentSystem].owner == DiplomacyPlayerFaction) {
				outputDocument.getElementById("systemOverviewGatesButton").disabled = false;
			}
			else {
				outputDocument.getElementById("systemOverviewGatesButton").disabled = "disabled";
			}
		}
		else {
			outputDocument.getElementById("systemOverviewStationButton").disabled = "disabled";
			outputDocument.getElementById("systemOverviewGatesButton").disabled = "disabled";
		}
		
		
		outputDocument.getElementById("systemOverviewInfoDescriptionValue").innerHTML = SystemsArray[SystemsCurrentSystem].description;
		
		//outputDocument.getElementById("systemOverviewInfoTypeValue").innerHTML = SystemsArray[SystemsCurrentSystem].starType[0];
		//outputDocument.getElementById("systemOverviewInfoSizeValue").innerHTML = SystemsArray[SystemsCurrentSystem].starSize;
		if(SystemsArray[SystemsCurrentSystem].starSize != "Other") {
			
			outputDocument.getElementById("systemOverviewInfoTypeValue").innerHTML = SystemsArray[SystemsCurrentSystem].starType[0] + "&nbsp;" + SystemsArray[SystemsCurrentSystem].starSize[0];
		}
		else {
			
			outputDocument.getElementById("systemOverviewInfoTypeValue").innerHTML = SystemsArray[SystemsCurrentSystem].starType[0];
		}
		outputDocument.getElementById("systemOverviewInfoMassValue").innerHTML = SystemsArray[SystemsCurrentSystem].starMass + " M☉";
		
		outputDocument.getElementById("systemOverviewInfoPlanetsNumberValue").innerHTML = SystemsArray[SystemsCurrentSystem].planetsIDArray.length;
		outputDocument.getElementById("systemOverviewInfoGatesNumberValue").innerHTML = SystemsArray[SystemsCurrentSystem].gatesIDs.length;
		
		outputDocument.getElementById("systemOverviewInfoPositionValue").innerHTML = SystemsArray[SystemsCurrentSystem].position;
		outputDocument.getElementById("systemOverviewInfoDistanceValue").innerHTML = SystemsArray[SystemsCurrentSystem].distanceFromZero.toFixed(2);
		
		//console.log("Forced refresh");	
		systemRefreshSystemCanvas(outputDocument);
		interfaceRefreshSystemResources(outputDocument);		
	}
}
function interfaceRefreshGalaxyMap(outputDocument){
	galaxyRefreshGalaxyMapCanvas(outputDocument);
}
function interfaceRefreshBuildMenu(outputDocument){
	//planet data
	if(PlanetsCurrentPlanet != -1) {
		//header
		outputDocument.getElementById("planetBuildingInfoPanelHeaderSystemNameText").innerHTML = PlanetsArray[PlanetsCurrentPlanet].system;
		outputDocument.getElementById("planetBuildingInfoPanelHeaderSystemNameText").style.color = systemsGetSystemById(PlanetsArray[PlanetsCurrentPlanet].system_id).starType[1];
		outputDocument.getElementById("planetBuildingInfoPanelHeaderPlanetNameText").innerHTML = PlanetsArray[PlanetsCurrentPlanet].name;
		outputDocument.getElementById("planetBuildingInfoPanelHeaderPlanetTypeText").innerHTML = PlanetsArray[PlanetsCurrentPlanet].type[0];
		outputDocument.getElementById("planetBuildingInfoPanelHeaderPlanetTypeText").style.color = PlanetsArray[PlanetsCurrentPlanet].type[1];
		
		//energy
		interfaceRefreshBuildMenuEnergy(outputDocument);
		
		//building list
		if(PlanetsArray[PlanetsCurrentPlanet].owner == DiplomacyPlayerFaction){
			outputDocument.getElementById("planetBuildingMenuObjectNotOwned").style.display = "none";
			outputDocument.getElementById(InterfaceBuildingMenuPlanetListContainerID).style.display = "block";
			interfaceBuildMenuInitBuildingsList(outputDocument);
		}
		else{
			outputDocument.getElementById("planetBuildingMenuObjectNotOwned").style.display = "block";
			outputDocument.getElementById("planetBuildingMenuNoBuildingsAvailable").style.display = "none";
			outputDocument.getElementById(InterfaceBuildingMenuPlanetListContainerID).style.display = "none";
		}
		
		interfaceBuildMenuPlanetTablesRefreshAllTables(outputDocument);
		interfaceBuildingMenuShowOnlyAvailableResourcesTable(outputDocument);
	}
}
function interfaceRefreshBuildMenuEnergy(outputDocument){
	var tmpEnergyToday = PlanetsArray[PlanetsCurrentPlanet].energyAvailable;
	var tmpEnergyNeeded = PlanetsArray[PlanetsCurrentPlanet].energyRequired;
	var tmpEnergyTomorrow = PlanetsArray[PlanetsCurrentPlanet].energyProduced;
	
	var tmpEnergyBalance = tmpEnergyToday - tmpEnergyNeeded;
	var tmpEnergyColor;
	var tmpEnergyEfficiency;
	
	if(tmpEnergyBalance >= 0){
		tmpEnergyEfficiency = "100%";
		tmpEnergyColor = "hsl(120,100%,50%)";
	}
	else if(tmpEnergyToday == 0 && tmpEnergyNeeded > 0){
		tmpEnergyEfficiency = "0%";
		tmpEnergyColor = "hsl(0,100%,50%)";
	}
	else if(tmpEnergyToday/tmpEnergyNeeded >= 0.5){
		var tmpEnergyHue = Math.round((tmpEnergyToday/tmpEnergyNeeded - 0.5) * 200);
		tmpEnergyEfficiency = (100*(tmpEnergyToday/tmpEnergyNeeded)).toFixed(1) + '%';
		tmpEnergyColor = "hsl(" + tmpEnergyHue + ",100%,50%)";
	}
	else{
		tmpEnergyEfficiency = (100*(tmpEnergyToday/tmpEnergyNeeded)).toFixed(1) + '%';
		tmpEnergyColor = "hsl(0,100%,50%)";
	}
	
	outputDocument.getElementById("planetBuildingInfoPanelHeaderPlanetEnergyUsedText").innerHTML = tmpEnergyNeeded;
	outputDocument.getElementById("planetBuildingInfoPanelHeaderPlanetEnergyMaxText").innerHTML = tmpEnergyToday;
	outputDocument.getElementById("planetBuildingInfoPanelHeaderPlanetEnergyEfficiencyText").innerHTML = tmpEnergyEfficiency;
	outputDocument.getElementById("planetBuildingInfoPanelHeaderPlanetEnergyEfficiencyText").style.color = tmpEnergyColor;
	
	if(tmpEnergyBalance >= 0){
		outputDocument.getElementById("planetBuildingInfoPanelHeaderPlanetEnergyAvailableTextText").innerHTML = tmpEnergyBalance;
		outputDocument.getElementById("planetBuildingInfoPanelPlanetEnergyAvailableContainer").style.display = "block";
		outputDocument.getElementById("planetBuildingInfoPanelPlanetEnergyDeficitContainer").style.display = "none";
	}
	else{
		outputDocument.getElementById("planetBuildingInfoPanelHeaderPlanetEnergyDeficitTextText").innerHTML = (-1)*tmpEnergyBalance;
		outputDocument.getElementById("planetBuildingInfoPanelPlanetEnergyAvailableContainer").style.display = "none";
		outputDocument.getElementById("planetBuildingInfoPanelPlanetEnergyDeficitContainer").style.display = "block";
	}
}

function interfaceRefreshBuildingsList(outputDocument){
	InterfaceBuildingMenuBuildingsOnList = 0;
	
	for(let i = 0; i < PlanetsArray[PlanetsCurrentPlanet].buildings.length; i++) {
		let tmpBuilding = PlanetsArray[PlanetsCurrentPlanet].buildings[i];
		let tmpBuildingBlueprint = BuildingsArray[tmpBuilding.blueprintIndex];
		
		//check categories, if any matches enabled one, flag it
		let tmpCategoryOk = false;
		for(let j = 0; j < tmpBuildingBlueprint.categories.length; j++){
			if(BuildingCategoriesEnabled[tmpBuildingBlueprint.categories[j]]) {
				tmpCategoryOk = true;
				break;
			}
		}
		
		let tmpBuildingElement = outputDocument.getElementById(BuildingMenuSingleBuildingIdPrefix + tmpBuilding.index);
		if(!tmpCategoryOk || !tmpBuildingBlueprint.unlocked) tmpBuildingElement.style.display = "none";
		else {
			tmpBuildingElement.style.display = "block";
			
			//refresh element's energy if building is visible, no point otherwise
			
			//refresh element's alerts if building is visible, no point otherwise
			interfaceRefreshSingleBuilding(outputDocument, i);
			//interfaceRefreshBuildingAlerts(outputDocument, i);
			
			InterfaceBuildingMenuBuildingsOnList++;
		}
			
		
		//
	}
	//display message if no buildings got listed with current category or at player's progress
	if(InterfaceBuildingMenuBuildingsOnList == 0) outputDocument.getElementById("planetBuildingMenuNoBuildingsAvailable").style.display = "block";
	else outputDocument.getElementById("planetBuildingMenuNoBuildingsAvailable").style.display = "none";
}

function interfaceRefreshSingleBuilding(outputDocument, buildingIndex){
	interfaceRefreshBuildingRequiredStaff(outputDocument, buildingIndex);
	interfaceRefreshBuildingAlerts(outputDocument, buildingIndex);
	interfaceRefreshBuildingProductionConsumptionTable(outputDocument, buildingIndex);
	interfaceRefreshBuildingClearChangeProductionConsumptionTable(outputDocument, buildingIndex);
}

function interfaceRefreshBuildingRequiredStaff(outputDocument, buildingIndex){
	let tmpBuilding = PlanetsArray[PlanetsCurrentPlanet].buildings[buildingIndex];
	let tmpBuildingBlueprint = BuildingsArray[tmpBuilding.blueprintIndex];
	
	let tmpFoldedBuildingRequiredOperatorsCount = outputDocument.getElementById(BuildingMenuSingleBuildingFoldedRequiredOperatorsSpanIdPrefix + buildingIndex);
	let tmpUnfoldedBuildingRequiredOperatorsCount = outputDocument.getElementById(BuildingMenuSingleBuildingUnfoldedRequiredOperatorsSpanIdPrefix + buildingIndex);
	
	tmpFoldedBuildingRequiredOperatorsCount.innerHTML = tmpBuilding.staffRequired * tmpBuilding.count;
	tmpUnfoldedBuildingRequiredOperatorsCount.innerHTML = tmpBuilding.staffRequired * tmpBuilding.count;
}
function interfaceRefreshBuildingAlerts(outputDocument, buildingIndex){
	let tmpBuilding = PlanetsArray[PlanetsCurrentPlanet].buildings[buildingIndex];
	let tmpBuildingBlueprint = BuildingsArray[tmpBuilding.blueprintIndex];
	
	//
}
function interfaceRefreshBuildingProductionConsumptionTable(outputDocument, buildingIndex){
	interfaceRefreshBuildingCurrentProductionConsumptionTable(outputDocument, buildingIndex);
}
function interfaceRefreshBuildingCurrentProductionConsumptionTable(outputDocument, buildingIndex){
	let tmpBuilding = PlanetsArray[PlanetsCurrentPlanet].buildings[buildingIndex];
	let tmpBuildingBlueprint = BuildingsArray[tmpBuilding.blueprintIndex];
	
	 //current value, productions
	for(let i = 0; i < ResourcesArray.length; i++){
		let tmpProductionValue = tmpBuilding.dailyProduction[i].amount;
		if(tmpProductionValue == 0) continue;
		
		let tmpCurrentProducedValueSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableProductionValueTextIdPrefix + buildingIndex + '_' + i);
		
		tmpCurrentProducedValueSpan.innerHTML = bigNumberToString(tmpProductionValue * tmpBuilding.count);
	} 
	
	//current value, consumptions
	for(let i = 0; i < ResourcesArray.length; i++){
		let tmpConsumptionValue = tmpBuilding.dailyConsumption[i].amount;
		if(tmpConsumptionValue == 0) continue;
		
		let tmpCurrentConsumedValueSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableConsumptionValueTextIdPrefix + buildingIndex + '_' + i);
		
		tmpCurrentConsumedValueSpan.innerHTML = bigNumberToString(tmpConsumptionValue * tmpBuilding.count);
	}
	
	//power
	if(tmpBuilding.powerProduced > 0){
		let tmpPowerProducedValueSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableEnergyProducedValueTextIdPrefix + buildingIndex);
		tmpPowerProducedValueSpan.innerHTML = tmpBuilding.powerProduced * tmpBuilding.count;
	}
	if(tmpBuilding.powerConsumed > 0){
		let tmpPowerConsumedValueSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableEnergyConsumedValueTextIdPrefix + buildingIndex);
		tmpPowerConsumedValueSpan.innerHTML = tmpBuilding.powerConsumed * tmpBuilding.count;
	}
	
	//staff
	if(tmpBuilding.staffRequired > 0){
		let tmpStaffRequiredValueSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableStaffRequiredValueTextIdPrefix + buildingIndex);
		tmpStaffRequiredValueSpan.innerHTML = tmpBuilding.staffRequired * tmpBuilding.count;
	}
}
function interfaceRefreshBuildingRefreshChangeProductionConsumptionTable(outputDocument, buildingIndex, actionType, actionAmount){
	let tmpBuilding = PlanetsArray[PlanetsCurrentPlanet].buildings[buildingIndex];
	let tmpBuildingBlueprint = BuildingsArray[tmpBuilding.blueprintIndex];
	
	let tmpCurrentBuildingCount = tmpBuilding.count;
	let tmpCurrentBuildingLevel = tmpBuilding.level;
	let tmpTargetBuildingCount;
	let tmpTargetBuildingLevel;
	
	let tmpAmount = 1;
	
	if(actionAmount == "input"){
		if(actionType == "build" || actionType == "demolish"){
			tmpAmount = tmpBuilding.customBuildDemolishAmount;
		}
		else if (actionType == "upgrade" || actionType == "downgrade"){
			tmpAmount = tmpBuilding.customUpgradeDowngradeAmount;
		}
	}
	else{
		tmpAmount = actionAmount;
	}
	
	switch(actionType){
		case "reset":
			interfaceRefreshBuildingClearChangeProductionConsumptionTable(outputDocument, buildingIndex);
			return;
		case "build":
			tmpTargetBuildingCount = tmpCurrentBuildingCount + tmpAmount;
			tmpTargetBuildingLevel = tmpCurrentBuildingLevel;
			break;
		case "demolish":
			tmpTargetBuildingCount = tmpCurrentBuildingCount - tmpAmount;
			tmpTargetBuildingLevel = tmpCurrentBuildingLevel;
			break;
		case "upgrade":
			tmpTargetBuildingCount = tmpCurrentBuildingCount;
			tmpTargetBuildingLevel = tmpCurrentBuildingLevel + tmpAmount;
			break;
		case "downgrade":
			tmpTargetBuildingCount = tmpCurrentBuildingCount;
			tmpTargetBuildingLevel = tmpCurrentBuildingLevel - tmpAmount;
			break;
		default:
			interfaceRefreshBuildingClearChangeProductionConsumptionTable(outputDocument, buildingIndex);
			return;
	}
	
	if(tmpTargetBuildingCount < 0) tmpTargetBuildingCount = 0;
	if(tmpTargetBuildingLevel < 0) tmpTargetBuildingLevel = 0;
	
	let tmpSingleCurrentProducedResourcesArray = tmpBuilding.dailyProduction;
	let tmpTotalCurrentProducedResourcesArray = resourcesGetMultipliedProductionConsumption(tmpSingleCurrentProducedResourcesArray, (tmpCurrentBuildingCount));
	let tmpSingleChangedProducedResourcesArray = tmpBuildingBlueprint.getBuildingProduction(tmpTargetBuildingCount, tmpTargetBuildingLevel);
	let tmpTotalChangedProducedResourcesArray = resourcesGetMultipliedProductionConsumption(tmpSingleChangedProducedResourcesArray, (tmpTargetBuildingCount));
	let tmpDifferenceProducedResourcesArray = resourcesGetDifferenceProductionConsumption(tmpTotalChangedProducedResourcesArray,tmpTotalCurrentProducedResourcesArray);
	
	let tmpSingleCurrentConsumedResourcesArray = tmpBuilding.dailyConsumption;
	let tmpTotalCurrentConsumedResourcesArray = resourcesGetMultipliedProductionConsumption(tmpSingleCurrentConsumedResourcesArray, (tmpCurrentBuildingCount));
	let tmpSingleChangedConsumedResourcesArray = tmpBuildingBlueprint.getBuildingConsumption(tmpTargetBuildingCount, tmpTargetBuildingLevel);
	let tmpTotalChangedConsumedResourcesArray = resourcesGetMultipliedProductionConsumption(tmpSingleChangedConsumedResourcesArray, (tmpTargetBuildingCount));
	let tmpDifferenceConsumedResourcesArray = resourcesGetDifferenceProductionConsumption(tmpTotalChangedConsumedResourcesArray,tmpTotalCurrentConsumedResourcesArray);
	
	
	let tmpCurrentEnergyProduced = tmpCurrentBuildingCount * tmpBuilding.powerProduced;
	let tmpChangeEnergyProduced = tmpTargetBuildingCount * tmpBuildingBlueprint.getProducedEnergy(tmpTargetBuildingCount, tmpTargetBuildingLevel);
	let tmpDifferenceEnergyProduced = tmpChangeEnergyProduced - tmpCurrentEnergyProduced;
	
	let tmpCurrentEnergyConsumed = tmpCurrentBuildingCount * tmpBuilding.powerConsumed;
	let tmpChangeEnergyConsumed = tmpTargetBuildingCount * tmpBuildingBlueprint.getRequiredEnergy(tmpTargetBuildingCount, tmpTargetBuildingLevel);
	let tmpDifferenceEnergyConsumed = tmpChangeEnergyConsumed - tmpCurrentEnergyConsumed;
	
	let tmpCurrentAgentsRequired = tmpCurrentBuildingCount * tmpBuilding.staffRequired;
	let tmpChangeAgentsRequired = tmpTargetBuildingCount * tmpBuildingBlueprint.getStaffNeeded(tmpTargetBuildingCount, tmpTargetBuildingLevel);
	let tmpDifferenceAgentsRequired = tmpChangeAgentsRequired - tmpCurrentAgentsRequired;
	
	//production
	for(let i = 0; i < ResourcesArray.length; i++){
		let tmpCurrentProducedChangeSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableProductionChangeTextIdPrefix + buildingIndex + '_' + i);
		let tmpResultValue = tmpDifferenceProducedResourcesArray[i].amount;
		if(actionType == "build" || actionType == "upgrade"){
			if(tmpResultValue > 0.0){
				tmpCurrentProducedChangeSpan.className = BuildingMenuSingleBuildingResourceTableProductionChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
				tmpCurrentProducedChangeSpan.innerHTML = bigNumberToString(tmpResultValue, true);
			}
			else if(tmpResultValue == 0.0){
				tmpCurrentProducedChangeSpan.className = BuildingMenuSingleBuildingResourceTableProductionChangeTextClass;
				tmpCurrentProducedChangeSpan.innerHTML = '-';
			}
			else{
				tmpCurrentProducedChangeSpan.className = BuildingMenuSingleBuildingResourceTableProductionChangeTextClass + BuildingMenuSingleBuildingResourceTableNegativeValueClass;
				tmpCurrentProducedChangeSpan.innerHTML = bigNumberToString(tmpResultValue);
			}
		}
		else if (actionType == "demolish" || actionType == "downgrade"){
			if(tmpResultValue > 0.0){
				tmpCurrentProducedChangeSpan.className = BuildingMenuSingleBuildingResourceTableProductionChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
				tmpCurrentProducedChangeSpan.innerHTML = bigNumberToString(tmpResultValue, true);
			}
			else if(tmpResultValue == 0.0){
				tmpCurrentProducedChangeSpan.className = BuildingMenuSingleBuildingResourceTableProductionChangeTextClass;
				tmpCurrentProducedChangeSpan.innerHTML = '-';
			}
			else{
				tmpCurrentProducedChangeSpan.className = BuildingMenuSingleBuildingResourceTableProductionChangeTextClass + BuildingMenuSingleBuildingResourceTableNegativeValueClass;
				tmpCurrentProducedChangeSpan.innerHTML = bigNumberToString(tmpResultValue);
			}
		}
		else{
			tmpCurrentProducedChangeSpan.className = BuildingMenuSingleBuildingResourceTableProductionChangeTextClass;
			tmpCurrentProducedChangeSpan.innerHTML = '-';
		}
	} 
	//consumption
	for(let i = 0; i < ResourcesArray.length; i++){
		let tmpCurrentConsumedChangeSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableConsumptionChangeTextIdPrefix + buildingIndex + '_' + i);
		let tmpResultValue = tmpDifferenceConsumedResourcesArray[i].amount;
		if(actionType == "build" || actionType == "upgrade"){
			if(tmpResultValue > 0.0){
				tmpCurrentConsumedChangeSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionChangeTextClass + BuildingMenuSingleBuildingResourceTableNeutralValueClass;
				tmpCurrentConsumedChangeSpan.innerHTML = bigNumberToString(tmpResultValue, true);
			}
			else if(tmpResultValue == 0.0){
				tmpCurrentConsumedChangeSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionChangeTextClass;
				tmpCurrentConsumedChangeSpan.innerHTML = '-';
			}
			else{
				tmpCurrentConsumedChangeSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
				tmpCurrentConsumedChangeSpan.innerHTML = bigNumberToString(tmpResultValue);
			}
		}
		else if (actionType == "demolish" || actionType == "downgrade"){
			if(tmpResultValue > 0.0){
				tmpCurrentConsumedChangeSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionChangeTextClass + BuildingMenuSingleBuildingResourceTableNegativeValueClass;
				tmpCurrentConsumedChangeSpan.innerHTML = bigNumberToString(tmpResultValue, true);
			}
			else if(tmpResultValue == 0.0){
				tmpCurrentConsumedChangeSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionChangeTextClass;
				tmpCurrentConsumedChangeSpan.innerHTML = '-';
			}
			else{
				tmpCurrentConsumedChangeSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
				tmpCurrentConsumedChangeSpan.innerHTML = bigNumberToString(tmpResultValue);
			}
		}
		else{
			tmpCurrentConsumedChangeSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionChangeTextClass;
			tmpCurrentConsumedChangeSpan.innerHTML = '-';
		}
	}
	
	//energy
	let tmpPowerProducedValueSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextIdPrefix + buildingIndex);
	if(actionType == "build" || actionType == "upgrade"){
		if(tmpDifferenceEnergyProduced > 0.0){
			tmpPowerProducedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
			// tmpPowerProducedValueSpan.innerHTML = bigNumberToString(tmpDifferenceEnergyProduced, true);
			tmpPowerProducedValueSpan.innerHTML = '+' + tmpDifferenceEnergyProduced;
		}
		else if(tmpDifferenceEnergyProduced == 0.0){
			tmpPowerProducedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextClass;
			tmpPowerProducedValueSpan.innerHTML = '-';
		}
		else{
			tmpPowerProducedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextClass + BuildingMenuSingleBuildingResourceTableNegativeValueClass;
			// tmpPowerProducedValueSpan.innerHTML = bigNumberToString(tmpDifferenceEnergyProduced);
			tmpPowerProducedValueSpan.innerHTML = tmpDifferenceEnergyProduced;
		}
	}
	else if (actionType == "demolish" || actionType == "downgrade"){
		if(tmpDifferenceEnergyProduced > 0.0){
			tmpPowerProducedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextClass + BuildingMenuSingleBuildingResourceTableNegativeValueClass;
			// tmpPowerProducedValueSpan.innerHTML = bigNumberToString(tmpDifferenceEnergyProduced, true);
			tmpPowerProducedValueSpan.innerHTML = '+' + tmpDifferenceEnergyProduced;
		}
		else if(tmpDifferenceEnergyProduced == 0.0){
			tmpPowerProducedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextClass;
			tmpPowerProducedValueSpan.innerHTML = '-';
		}
		else{
			tmpPowerProducedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextClass + BuildingMenuSingleBuildingResourceTableNeutralValueClass;
			// tmpPowerProducedValueSpan.innerHTML = bigNumberToString(tmpDifferenceEnergyProduced);
			tmpPowerProducedValueSpan.innerHTML = tmpDifferenceEnergyProduced;
		}
	}
	else{
		tmpPowerProducedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextClass;
		tmpPowerProducedValueSpan.innerHTML = '-';
	}
	
	let tmpPowerConsumedValueSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextIdPrefix + buildingIndex);
	if(actionType == "build" || actionType == "upgrade"){
		if(tmpDifferenceEnergyConsumed > 0.0){
			tmpPowerConsumedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextClass + BuildingMenuSingleBuildingResourceTableNeutralValueClass;
			// tmpPowerConsumedValueSpan.innerHTML = bigNumberToString(tmpDifferenceEnergyConsumed, true);
			tmpPowerConsumedValueSpan.innerHTML = '+' + tmpDifferenceEnergyConsumed;
		}
		else if(tmpDifferenceEnergyConsumed == 0.0){
			tmpPowerConsumedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextClass;
			tmpPowerConsumedValueSpan.innerHTML = '-';
		}
		else{
			tmpPowerConsumedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
			// tmpPowerConsumedValueSpan.innerHTML = bigNumberToString(tmpDifferenceEnergyConsumed);
			tmpPowerConsumedValueSpan.innerHTML = tmpDifferenceEnergyConsumed;
		}
	}
	else if (actionType == "demolish" || actionType == "downgrade"){
		if(tmpDifferenceEnergyConsumed > 0.0){
			tmpPowerConsumedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextClass + BuildingMenuSingleBuildingResourceTableNegativeValueClass;
			// tmpPowerConsumedValueSpan.innerHTML = bigNumberToString(tmpDifferenceEnergyConsumed, true);
			tmpPowerConsumedValueSpan.innerHTML = '+' + tmpDifferenceEnergyConsumed;
		}
		else if(tmpDifferenceEnergyConsumed == 0.0){
			tmpPowerConsumedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextClass;
			tmpPowerConsumedValueSpan.innerHTML = '-';
		}
		else{
			tmpPowerConsumedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
			// tmpPowerConsumedValueSpan.innerHTML = bigNumberToString(tmpDifferenceEnergyConsumed);
			tmpPowerConsumedValueSpan.innerHTML = tmpDifferenceEnergyConsumed;
		}
	}
	else{
		tmpPowerConsumedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextClass;
		tmpPowerConsumedValueSpan.innerHTML = '-';
	}
	
	//staff
	let tmpStaffRequiredValueSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextIdPrefix + buildingIndex);
	if(actionType == "build" || actionType == "upgrade"){
		if(tmpDifferenceAgentsRequired > 0){
			tmpStaffRequiredValueSpan.className = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextClass + BuildingMenuSingleBuildingResourceTableNeutralValueClass;
			tmpStaffRequiredValueSpan.innerHTML = '+' + tmpDifferenceAgentsRequired;
		}
		else if(tmpDifferenceAgentsRequired == 0){
			tmpStaffRequiredValueSpan.className = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextClass;
			tmpStaffRequiredValueSpan.innerHTML = '-';
		}
		else{
			tmpStaffRequiredValueSpan.className = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
			tmpStaffRequiredValueSpan.innerHTML = tmpDifferenceAgentsRequired;
		}
	}
	else if (actionType == "demolish" || actionType == "downgrade"){
		if(tmpDifferenceAgentsRequired > 0){
			tmpStaffRequiredValueSpan.className = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextClass + BuildingMenuSingleBuildingResourceTableNegativeValueClass;
			tmpStaffRequiredValueSpan.innerHTML = '+' + tmpDifferenceAgentsRequired;
		}
		else if(tmpDifferenceAgentsRequired == 0){
			tmpStaffRequiredValueSpan.className = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextClass;
			tmpStaffRequiredValueSpan.innerHTML = '-';
		}
		else{
			tmpStaffRequiredValueSpan.className = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
			tmpStaffRequiredValueSpan.innerHTML = tmpDifferenceAgentsRequired;
		}
	}
	else{
		tmpStaffRequiredValueSpan.className = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextClass;
		tmpStaffRequiredValueSpan.innerHTML = '-';
	}
	
}
function interfaceRefreshBuildingClearChangeProductionConsumptionTable(outputDocument, buildingIndex){
	let tmpBuilding = PlanetsArray[PlanetsCurrentPlanet].buildings[buildingIndex];
	let tmpBuildingBlueprint = BuildingsArray[tmpBuilding.blueprintIndex];
	
	for(let i = 0; i < ResourcesArray.length; i++){
		let tmpCurrentProducedChangeSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableProductionChangeTextIdPrefix + buildingIndex + '_' + i);
		let tmpCurrentProducedMultiplier = tmpBuildingBlueprint.resourcesProduced[i].upgradeAmountIncrease;
		
		if(tmpCurrentProducedMultiplier > 1.0){
			tmpCurrentProducedChangeSpan.className = BuildingMenuSingleBuildingResourceTableProductionChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
			tmpCurrentProducedChangeSpan.innerHTML = '×' + bigNumberToString(tmpCurrentProducedMultiplier);
		}
		else if (tmpCurrentProducedMultiplier == 1.0){
			tmpCurrentProducedChangeSpan.className = BuildingMenuSingleBuildingResourceTableProductionChangeTextClass;// + BuildingMenuSingleBuildingResourceTableNeutralValueClass;
			tmpCurrentProducedChangeSpan.innerHTML = '-';
		}
		else{
			tmpCurrentProducedChangeSpan.className = BuildingMenuSingleBuildingResourceTableProductionChangeTextClass + BuildingMenuSingleBuildingResourceTableNegativeValueClass;
			tmpCurrentProducedChangeSpan.innerHTML = '×' + bigNumberToString(tmpCurrentProducedMultiplier);
		}
		
	} 
	
	for(let i = 0; i < ResourcesArray.length; i++){
		let tmpCurrentConsumedChangeSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableConsumptionChangeTextIdPrefix + buildingIndex + '_' + i);
		let tmpCurrentConsumedMultiplier = tmpBuildingBlueprint.resourcesConsumed[i].upgradeAmountIncrease;
		
		if(tmpCurrentConsumedMultiplier > 1.0){
			tmpCurrentConsumedChangeSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionChangeTextClass + BuildingMenuSingleBuildingResourceTableNeutralValueClass;
			tmpCurrentConsumedChangeSpan.innerHTML = '×' + bigNumberToString(tmpCurrentConsumedMultiplier);
		}
		else if(tmpCurrentConsumedMultiplier == 1.0){
			tmpCurrentConsumedChangeSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionChangeTextClass;
			tmpCurrentConsumedChangeSpan.innerHTML = '-';
		}
		else{
			tmpCurrentConsumedChangeSpan.className = BuildingMenuSingleBuildingResourceTableConsumptionChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
			tmpCurrentConsumedChangeSpan.innerHTML = '×' + bigNumberToString(tmpCurrentConsumedMultiplier);
		}
	}
	
	let tmpPowerProducedValueSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextIdPrefix + buildingIndex);
	let tmpPowerProducedMultiplier = tmpBuildingBlueprint.powerProducedUpgradeMultiplier;
	if(tmpPowerProducedMultiplier > 1.0){
		tmpPowerProducedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
		tmpPowerProducedValueSpan.innerHTML = '×' + bigNumberToString(tmpPowerProducedMultiplier);
	}
	else if(tmpPowerProducedMultiplier == 1.0){
		tmpPowerProducedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextClass;
		tmpPowerProducedValueSpan.innerHTML = '-';
	}
	else{
		tmpPowerProducedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyProducedChangeTextClass + BuildingMenuSingleBuildingResourceTableNegativeValueClass;
		tmpPowerProducedValueSpan.innerHTML = '×' + bigNumberToString(tmpPowerProducedMultiplier);
	}
	
	let tmpPowerConsumedValueSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextIdPrefix + buildingIndex);
	let tmpPowerConsumedMultiplier = tmpBuildingBlueprint.powerConsumedUpgradeMultiplier;
	if(tmpPowerConsumedMultiplier > 1.0){
		tmpPowerConsumedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextClass + BuildingMenuSingleBuildingResourceTableNeutralValueClass;
		tmpPowerConsumedValueSpan.innerHTML = '×' + bigNumberToString(tmpPowerConsumedMultiplier);
	}
	else if(tmpPowerConsumedMultiplier == 1.0){
		tmpPowerConsumedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextClass;
		tmpPowerConsumedValueSpan.innerHTML = '-';
	}
	else{
		tmpPowerConsumedValueSpan.className = BuildingMenuSingleBuildingResourceTableEnergyConsumedChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
		tmpPowerConsumedValueSpan.innerHTML = '×' + bigNumberToString(tmpPowerConsumedMultiplier);
	}
	
	let tmpStaffRequiredValueSpan = outputDocument.getElementById(BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextIdPrefix + buildingIndex);
	let tmpStaffRequiredMultiplier = tmpBuildingBlueprint.staffNeededLevelMultiplier;
	if(tmpStaffRequiredMultiplier > 1.0){
		tmpStaffRequiredValueSpan.className = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextClass + BuildingMenuSingleBuildingResourceTableNeutralValueClass;
		tmpStaffRequiredValueSpan.innerHTML = '×' + bigNumberToString(tmpStaffRequiredMultiplier);
	}
	else if(tmpStaffRequiredMultiplier == 1.0){
		tmpStaffRequiredValueSpan.className = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextClass;
		tmpStaffRequiredValueSpan.innerHTML = '-';
	}
	else{
		tmpStaffRequiredValueSpan.className = BuildingMenuSingleBuildingResourceTableStaffRequiredChangeTextClass + BuildingMenuSingleBuildingResourceTablePositiveValueClass;
		tmpStaffRequiredValueSpan.innerHTML = '×' + bigNumberToString(tmpStaffRequiredMultiplier);
	}
}

function interfaceFoldUnfoldBuilding(outputDocument, buildingListIndex){
	var tmpBuilding = PlanetsArray[PlanetsCurrentPlanet].buildings[buildingListIndex];
	var tmpBuildingElement = outputDocument.getElementById(BuildingMenuSingleBuildingIdPrefix + buildingListIndex);
	if(tmpBuilding.folded) {
		tmpBuildingElement.className = BuildingMenuSingleBuildingClassUnfolded;
		tmpBuilding.folded = false;
	}
	else {
		tmpBuildingElement.className = BuildingMenuSingleBuildingClassFolded;
		tmpBuilding.folded = true;
	}
}
function interfaceEnableDisableBuilding(outputDocument, buildingListIndex){
	var tmpBuilding = PlanetsArray[PlanetsCurrentPlanet].buildings[buildingListIndex];
	var tmpPowerIcon = outputDocument.getElementById(BuildingMenuSingleBuildingSideButtonPowerButtonIdPrefix + buildingListIndex);
	if(tmpBuilding.enabled) {
		tmpBuilding.enabled = false;
		tmpPowerIcon.src = BuildingMenuSingleBuildingSideButtonPoweredOffImagePath;
	}
	else {
		tmpBuilding.enabled = true;
		tmpPowerIcon.src = BuildingMenuSingleBuildingSideButtonPoweredOnImagePath;
	}
}

function interfaceBuildBuilding(outputDocument, buildingListIndex, blueprintIndex, amountToBuild = "input"){
	let tmpBuildAmount;
	if(amountToBuild == "input"){
		tmpBuildAmount = outputDocument.getElementById(BuildingMenuSingleBuildingSingleBuildDemolishInputIdPrefix + buildingListIndex).value;
	}
	else tmpBuildAmount = amountToBuild;
	
	console.log("BUILD: " + BuildingsArray[blueprintIndex].name + " AMOUNT: " + tmpBuildAmount);
	PlanetsArray[PlanetsCurrentPlanet].buildings[buildingListIndex].tryBuild(tmpBuildAmount);
	console.log("");
}
function interfaceDemolishBuilding(outputDocument, buildingListIndex, blueprintIndex, amountToDemolish = "input"){
	let tmpDemolishAmount;
	if(amountToDemolish == "input"){
		tmpDemolishAmount = outputDocument.getElementById(BuildingMenuSingleBuildingSingleBuildDemolishInputIdPrefix + buildingListIndex).value;
	}
	else tmpDemolishAmount = amountToDemolish;
	
	console.log("DEMOLISH: " + BuildingsArray[blueprintIndex].name + " AMOUNT: " + tmpDemolishAmount);
}
function interfaceUpgradeBuilding(outputDocument, buildingListIndex, blueprintIndex, amountToUpgrade = "input"){
	let tmpUpgradeAmount;
	if(amountToUpgrade == "input"){
		tmpUpgradeAmount = outputDocument.getElementById(BuildingMenuSingleBuildingSingleUpgradeDowngradeInputIdPrefix + buildingListIndex).value;
	}
	else tmpUpgradeAmount = amountToUpgrade;
	
	
	console.log("UPGRADE: " + BuildingsArray[blueprintIndex].name + " AMOUNT: " + tmpUpgradeAmount);
	PlanetsArray[PlanetsCurrentPlanet].buildings[buildingListIndex].tryUpgrade(tmpUpgradeAmount);
	console.log("");
}
function interfaceDowngradeBuilding(outputDocument, buildingListIndex, blueprintIndex, amountToDowngrade = "input"){
	let tmpDowngradeAmount;
	if(amountToDowngrade == "input"){
		tmpDowngradeAmount = outputDocument.getElementById(BuildingMenuSingleBuildingSingleUpgradeDowngradeInputIdPrefix + buildingListIndex).value;
	}
	else tmpDowngradeAmount = amountToDowngrade;
	
	console.log("DOWNGRADE: " + BuildingsArray[blueprintIndex].name + " AMOUNT: " + tmpDowngradeAmount);
}

function interfaceAddStaffToBuilding(outputDocument, buildingListIndex, blueprintIndex, amountToAssign = "input"){
	let tmpAddedStaff;
	if(amountToAssign == "input"){
		tmpAddedStaff = outputDocument.getElementById(BuildingMenuSingleBuildingOperatorCustomInputIdPrefix + buildingListIndex).value;
	}
	else tmpAddedStaff = amountToAssign;
	
	console.log("ASSIGN: " + BuildingsArray[blueprintIndex].name + " AMOUNT: " + tmpAddedStaff);
}
function interfaceRemoveStaffFromBuilding(outputDocument, buildingListIndex, blueprintIndex, amountToUnassign = "input"){
	let tmpRemovedStaff;
	if(amountToUnassign == "input"){
		tmpRemovedStaff = outputDocument.getElementById(BuildingMenuSingleBuildingOperatorCustomInputIdPrefix + buildingListIndex).value;
	}
	else tmpRemovedStaff = amountToUnassign;
	
	console.log("UNASSIGN: " + BuildingsArray[blueprintIndex].name + " AMOUNT: " + tmpRemovedStaff);
}
function interfaceSingleBuildingButtonsOnMouseEnter(outputDocument, buildingListId, actionType, amountVariant){
	// console.log("Mouse over detected.");
	//console.log(buildingListId, actionType, amountVariant);
	
	let tmpResourceObject = resourcesCreateEmptyStorageResourcesArray(); 
	let tmpBuildingObject = PlanetsArray[PlanetsCurrentPlanet].buildings[buildingListId];
	
	interfaceBuildMenuPlanetTablesRefreshAllTables(outputDocument, buildingListId, actionType, amountVariant);
	interfaceBuildingMenuShowAllButAvailableResourcesTables(outputDocument);
	interfaceRefreshBuildingRefreshChangeProductionConsumptionTable(outputDocument, buildingListId, actionType, amountVariant);
	BuildingMenuResourcesListAutoScrollInterrupt = true;
	
	setTimeout(() => {
		BuildingMenuResourcesListAutoScrollInterrupt = false;
		BuildingMenuResourcesListAutoScrollEnabled = false;
		interfaceAutoScrollResourcesListElement(outputDocument);
	},BuildingMenuResourcesListAutoScrollInterruptLength);
}
function interfaceSingleBuildingButtonsOnMouseLeave(outputDocument, buildingListId){
	// console.log("Mouse leave detected.");
	interfaceBuildingMenuShowOnlyAvailableResourcesTable(outputDocument);
	interfaceRefreshBuildingClearChangeProductionConsumptionTable(outputDocument, buildingListId);
	BuildingMenuResourcesListAutoScrollInterrupt = true;
	if(BuildingMenuResourcesListAutoScrollElement != null) BuildingMenuResourcesListAutoScrollElement.scroll(0,0);
}

var BuildingMenuAvailableResourcesTableContainerID = "planetBuildingInfoPanelAvailableResourcesContainer";
var BuildingMenuChangingTablesContainerID = "planetBuildingInfoPanelResourcesChangeContainer";
var BuildingMenuDisplayingChangingTables = false;

function interfaceBuildingMenuSwitchVisibleTables(outputDocument){
	console.log("Switching tables");
	
	if(BuildingMenuDisplayingChangingTables){
		interfaceBuildingMenuShowOnlyAvailableResourcesTable(outputDocument)
		BuildingMenuDisplayingChangingTables = false;
	}
	else{
		interfaceBuildingMenuShowAllButAvailableResourcesTables(outputDocument)
		BuildingMenuDisplayingChangingTables = true;
	}
}
function interfaceBuildingMenuShowOnlyAvailableResourcesTable(outputDocument){
	outputDocument.getElementById(BuildingMenuAvailableResourcesTableContainerID).style.display = "";
	outputDocument.getElementById(BuildingMenuChangingTablesContainerID).style.display = "none";
	BuildingMenuDisplayingChangingTables = false;
}
function interfaceBuildingMenuShowAllButAvailableResourcesTables(outputDocument){
	outputDocument.getElementById(BuildingMenuAvailableResourcesTableContainerID).style.display = "none";
	outputDocument.getElementById(BuildingMenuChangingTablesContainerID).style.display = "";
	BuildingMenuDisplayingChangingTables = true;
}

var BuildingMenuResourcesListAutoScrollEnabled = false;
var BuildingMenuResourcesListAutoScrollTimeCounter = 0;
var BuildingMenuResourcesListAutoScrollScrollPosition = 0;
var BuildingMenuResourcesListAutoScrollBottomReached = false;
var BuildingMenuResourcesListAutoScrollResetCountdown = 0;
var BuildingMenuResourcesListAutoScrollInterrupt = false;
var BuildingMenuResourcesListAutoScrollInterruptLength = 50;

var BuildingMenuResourcesListAutoScrollDelayMs = 2000;
var BuildingMenuResourcesListAutoScrollTickSpeedMs = 20;
var BuildingMenuResourcesListAutoScrollTickSpeedPx = 0.4;
var BuildingMenuResourcesListAutoScrollResetDelayMs = 2000;

var BuildingMenuResourcesListAutoScrollInitialised = false;
var BuildingMenuResourcesListAutoScrollElement;
var BuildingMenuResourcesListAutoScrollElementID = "planetBuildingInfoPanelResourcesContainer";

function interfaceAutoScrollResourcesListElement(outputDocument){
	if(!BuildingMenuResourcesListAutoScrollInitialised){
		// console.log("Initialising auto scroll.");
		BuildingMenuResourcesListAutoScrollElement = outputDocument.getElementById(BuildingMenuResourcesListAutoScrollElementID);
		BuildingMenuResourcesListAutoScrollInitialised = true;
	}
	
	if(!BuildingMenuResourcesListAutoScrollInterrupt) {
		if(BuildingMenuResourcesListAutoScrollElement.clientHeight >= BuildingMenuResourcesListAutoScrollElement.scrollHeight){
			// console.log("Element not overflowing.");
			BuildingMenuResourcesListAutoScrollEnabled = false;
			BuildingMenuResourcesListAutoScrollTimeCounter = 0;
			BuildingMenuResourcesListAutoScrollScrollPosition = 0;
			BuildingMenuResourcesListAutoScrollBottomReached = false;
			BuildingMenuResourcesListAutoScrollResetCountdown = 0;
			
			BuildingMenuResourcesListAutoScrollElement.scroll(0,0);
			return;
		}
		
		if(!BuildingMenuResourcesListAutoScrollEnabled){
			// console.log("Starting auto scroll...");
			BuildingMenuResourcesListAutoScrollEnabled = true;
			BuildingMenuResourcesListAutoScrollTimeCounter = 0;
			BuildingMenuResourcesListAutoScrollScrollPosition = 0;
			BuildingMenuResourcesListAutoScrollBottomReached = false;
			BuildingMenuResourcesListAutoScrollResetCountdown = 0;
		}
		
		if(BuildingMenuResourcesListAutoScrollBottomReached){
			// console.log("Auto-scroll waiting at bottom: " + BuildingMenuResourcesListAutoScrollResetCountdown + "/" + BuildingMenuResourcesListAutoScrollResetDelayMs);
			BuildingMenuResourcesListAutoScrollResetCountdown += BuildingMenuResourcesListAutoScrollTickSpeedMs;
			if(BuildingMenuResourcesListAutoScrollResetCountdown >= BuildingMenuResourcesListAutoScrollResetDelayMs){
				// console.log("Returning to top.");
				BuildingMenuResourcesListAutoScrollTimeCounter = 0;
				BuildingMenuResourcesListAutoScrollScrollPosition = 0;
				BuildingMenuResourcesListAutoScrollBottomReached = false;
				BuildingMenuResourcesListAutoScrollResetCountdown = 0;
				BuildingMenuResourcesListAutoScrollElement.scroll(0,0);
			}
		}
		
		if(BuildingMenuResourcesListAutoScrollTimeCounter >= BuildingMenuResourcesListAutoScrollDelayMs){
			if((BuildingMenuResourcesListAutoScrollElement.clientHeight + BuildingMenuResourcesListAutoScrollScrollPosition) >= BuildingMenuResourcesListAutoScrollElement.scrollHeight){
				// console.log("Auto-scroll reached the bottom.");
				BuildingMenuResourcesListAutoScrollBottomReached = true;
			}
			else{
				// console.log("Auto-scroll active.");
				BuildingMenuResourcesListAutoScrollScrollPosition += BuildingMenuResourcesListAutoScrollTickSpeedPx;
				BuildingMenuResourcesListAutoScrollElement.scroll(0,BuildingMenuResourcesListAutoScrollScrollPosition);
			}
		}
		else{
			// console.log("Auto-scroll waiting at top: " + BuildingMenuResourcesListAutoScrollTimeCounter + "/" + BuildingMenuResourcesListAutoScrollDelayMs);
		}
		
		setTimeout(() => {
			if(BuildingMenuResourcesListAutoScrollTimeCounter == 0) BuildingMenuResourcesListAutoScrollTimeCounter += BuildingMenuResourcesListAutoScrollInterruptLength;
			BuildingMenuResourcesListAutoScrollTimeCounter += BuildingMenuResourcesListAutoScrollTickSpeedMs;
			interfaceAutoScrollResourcesListElement(outputDocument);
		}, BuildingMenuResourcesListAutoScrollTickSpeedMs);
	}
	else{
		BuildingMenuResourcesListAutoScrollElement.scroll(0,0);
	}
}


function interfaceRefreshInterface(outputDocument) {
	//console.log("Test");
}

function interfaceRefreshPlanetResources(outputDocument) {
	interfaceRefreshPlanetStorage(outputDocument);
	interfaceRefreshPlanetNaturalResources(outputDocument);
}
function interfaceRefreshSystemResources(outputDocument) {
	interfaceRefreshAsteroids(outputDocument);
}

var ResourcePanelStorageTabID = "planetOverviewResourcesPanelStorage";
var ResourcePanelProductionTabID = "planetOverviewResourcesPanelProduction";
var ResourcePanelConsumptionTabID = "planetOverviewResourcesPanelConsumption";
var ResourcePanelBalanceTabID = "planetOverviewResourcesPanelBalance";
var ResourcePanelNaturalResourcesTabID = "planetOverviewResourcesPanelResources";

var ResourcePanelTableClass = "interfaceTable planetOverviewResourcesTabTable";
var ResourcePanelTableRowClass = "interfaceTableRow";
var ResourcePanelTableCellClass = "interfaceTableCell";
var ResourcePanelPseudoHeaderRowClass = "interfaceTableRow";
var ResourcePanelPseudoHeaderCellClass = "interfaceTableCell";

var ResourcePanelTableCellClassName = "planetOverviewResourcesTabResourceNameCell";

var ResourcePanelTableCellClassSpacing = "planetOverviewTableColumnSpacing";
var ResourcePanelTableCellClassValue = "planetOverviewResourcesTabResourceValueCell";

var ResourcePanelSingleResourceNameClass = "interfaceText"; 
var ResourcePanelSingleResourceValueClass = "interfaceText interfaceDynamicText"; 

var ResourcePanelStorageTableID = "planetOverviewResourcesPanelStorageTable";
var ResourcePanelStorageTableRowID = "planetOverviewResourcesPanelStorageTableRow_";
var ResourcePanelStorageTableCellID = "planetOverviewResourcesPanelStorageTableCell";
var ResourcePanelStorageSingleResourceNameID = "planetOverviewStorageResourceName_";
var ResourcePanelStorageSingleResourceValueID = "planetOverviewStorageResourceValue_";

var ResourcePanelProductionTableID = "planetOverviewResourcesPanelProductionTable";
var ResourcePanelProductionTableRowID = "planetOverviewResourcesPanelProductionTableRow_";
var ResourcePanelProductionTableCellID = "planetOverviewResourcesPanelProductionTableCell";
var ResourcePanelProductionSingleResourceNameID = "planetOverviewProductionResourceName_";
var ResourcePanelProductionSingleResourceValueID = "planetOverviewProductionResourceValue_";

var ResourcePanelConsumptionTableID = "planetOverviewResourcesPanelConsumptionTable";
var ResourcePanelConsumptionTableRowID = "planetOverviewResourcesPanelConsumptionTableRow_";
var ResourcePanelConsumptionTableCellID = "planetOverviewResourcesPanelConsumptionTableCell";
var ResourcePanelConsumptionSingleResourceNameID = "planetOverviewConsumptionResourceName_";
var ResourcePanelConsumptionSingleResourceValueID = "planetOverviewConsumptionResourceValue_";

var ResourcePanelBalanceTableID = "planetOverviewResourcesPanelBalanceTable";
var ResourcePanelBalanceTableRowID = "planetOverviewResourcesPanelBalanceTableRow_";
var ResourcePanelBalanceTableCellID = "planetOverviewResourcesPanelBalanceTableCell";
var ResourcePanelBalanceSingleResourceNameID = "planetOverviewBalanceResourceName_";
var ResourcePanelBalanceSingleResourceValueID = "planetOverviewBalanceResourceValue_";



var ResourcePanelNaturalBonusResourcesTableClass = "interfaceTable planetOverviewResourcesTabTable";
var ResourcePanelNaturalBonusResourcesTableID = "planetOverviewResourcesPanelNaturalBonusResourcesTable";
var ResourcePanelNaturalBonusResourcesTableRowClass = "planetOverviewResourcesPanelNaturalBonusResourcesTableRow";
var ResourcePanelNaturalBonusResourcesPseudoHeaderRowID = "planetOverviewResourcesPanelNaturalBonusResourcesTablePseudoHeader";
var ResourcePanelNaturalBonusResourcesHeaderCellClass = "planetOverviewResourcesPanelNaturalBonusResourcesTableHeaderCell";
var ResourcePanelNaturalBonusResourcesHeaderTextClass = "planetOverviewResourcesPanelNaturalBonusResourcesTableHeaderText";
var ResourcePanelNaturalBonusResourcesNameCellClass = "planetOverviewResourcesPanelNaturalBonusResourceNameCell";
var ResourcePanelNaturalBonusResourcesNameCellTextClass = "planetOverviewResourcesPanelNaturalBonusResourceNameText";
var ResourcePanelNaturalBonusResourcesMultiplierCellClass = "planetOverviewResourcesPanelNaturalBonusResourceMultiplierCell";
var ResourcePanelNaturalBonusResourcesMultiplierCellTextClass = "planetOverviewResourcesPanelNaturalBonusResourceMutiplierText";
var ResourcePanelNaturalBonusResourcesMultiplierBonusValueClass = "planetOverviewResourcesPanelNaturalBonusResourceBonusText";
var ResourcePanelNaturalBonusResourcesMultiplierPenaltyValueClass = "planetOverviewResourcesPanelNaturalBonusResourcePenaltyText";
var ResourcePanelNaturalBonusResourcesQuantityCellClass = "planetOverviewResourcesPanelNaturalBonusResourcesQuantityCell";
var ResourcePanelNaturalBonusResourcesQuantityValueClass = "planetOverviewResourcesPanelNaturalBonusResourceQuantityText";
var ResourcePanelNaturalBonusResourcesQualityCellClass = "planetOverviewResourcesPanelNaturalBonusResourcesQualityCell";
var ResourcePanelNaturalBonusResourcesQualityValueClass = "planetOverviewResourcesPanelNaturalBonusResourceQualityText";
var ResourcePanelNaturalBonusResourcesQualityHighClass = "planetOverviewResourcesPanelNaturalBonusResourceQualityHighText";
var ResourcePanelNaturalBonusResourcesQualityLowClass = "planetOverviewResourcesPanelNaturalBonusResourceQualityLowText";
var ResourcePanelNaturalBonusResourcesFooterCellClass = "planetOverviewResourcesPanelNaturalBonusResourcesTableFooterCell";
var ResourcePanelNaturalBonusResourcesFooterCellTextClass = "planetOverviewResourcesPanelNaturalBonusResourcesTableFooterText";

var ResourcePanelBonusResourcesTableRowClass = "planetOverviewResourcesPanelBonusResourcesTableRow";
var ResourcePanelNaturalResourcesTableRowClass = "planetOverviewResourcesPanelNaturalResourcesTableRow";
var ResourcePanelNoNaturalResourcesContainerClass = "planetOverviewResourcesPanelNoNaturalResourcesContainer";
var ResourcePanelNoNaturalResourcesTextClass = "planetOverviewResourcesPanelNoNaturalResourcesText";

var ResourcesPanelStorageResourcesTableRowClass = "planetOverviewResourcesPanelStorageTableRow";
var ResourcesPanelStorageResourcesNameCellClass = "planetOverviewResourcesPanelStorageResourceNameCell";
var ResourcesPanelStorageResourcesNameCellTextClass = "planetOverviewResourcesPanelStorageResourceNameText";
var ResourcesPanelStorageResourcesAmountCellClass = "planetOverviewResourcesPanelStorageResourceAmountCell";
var ResourcesPanelStorageResourcesAmountCellTextClass = "planetOverviewResourcesPanelStorageResourceAmountText";

var AsteroidsPanelID = "systemOverviewAsteroidsContainerContent";
var AsteroidsPanelTableClass = "interfaceTable";
var AsteroidsPanelTableID = "systemOverviewAsteroidsTable";
var AsteroidsPanelTableRowClass = "interfaceTableRow";
var AsteroidsPanelTableRowID = "systemOverviewAsteroidsTableRow_";

var AsteroidsPanelTableCellClass = "interfaceTableCell";
var AsteroidsPanelTableCellClassName = "systemOverviewAsteroidsResourceName";
var AsteroidsPanelTableCellClassValue = "systemOverviewAsteroidsResourceValue";
var AsteroidsPanelTableCellClassSpacing = "systemOverviewTableColumnSpacing";
var AsteroidsPanelTableCellID = "systemOverviewAsteroidsTableCell";

var AsteroidsPanelSingleResourceNameClass = "interfaceText systemOverviewAsteroidsName"; 
var AsteroidsPanelSingleResourceNameID = "systemOverviewAsteroidsName_";

var AsteroidsPanelSingleResourceValueClass = "interfaceText interfaceDynamicText systemOverviewAsteroidsValue"; 
var AsteroidsPanelSingleResourceValueID = "systemOverviewAsteroidsValue_";

var AsteroidsPanelNoResourcesClass = "interfaceText interfaceDynamicText interfaceDimmedText";
var AsteroidsPanelNoResourcesID = "systemOverviewAsteroidsNotFoundText";



var InterfaceNaturalResourcesHighQualityTreshold = 2.0;
var InterfaceNaturalResourcesLowQualityTreshold = 0.75;

function interfaceRefreshPlanetNaturalResources(outputDocument) {
	if(PlanetsCurrentPlanet != -1) {
		var tmpElement = outputDocument.getElementById(ResourcePanelNaturalResourcesTabID);
		tmpElement.innerHTML = "";
		
		var tmpPlanet = PlanetsArray[PlanetsCurrentPlanet];
		var tmpBonusResources = tmpPlanet.bonusResources;
		var tmpNatResources = tmpPlanet.naturalResources;
		
		var tmpHasBonusResources = false;
		var tmpHasNaturalResources = false;
		for(let i = 0; i < tmpBonusResources.length; i++){
			if(tmpBonusResources[i].bonus != 1 && ResourcesArray[tmpBonusResources[i].typeIndex].discovered){
				tmpHasBonusResources = true;
				break;
			}
		}
		for(let i = 0; i < tmpNatResources.length; i++){
			if(tmpNatResources[i].quantity > 0 && ResourcesArray[tmpNatResources[i].typeIndex].discovered){
				tmpHasNaturalResources = true;
				break;
			}
		}
		
		if(tmpHasBonusResources || tmpHasNaturalResources){
			var tmpNaturalBonusResourcesTable = outputDocument.createElement("table");
			tmpNaturalBonusResourcesTable.className = ResourcePanelNaturalBonusResourcesTableClass;
			tmpNaturalBonusResourcesTable.id = ResourcePanelNaturalBonusResourcesTableID;
			
			var tmpNaturalBonusResourcesTableBody = outputDocument.createElement("tbody");
			
			//pseudo header because of collspans
			var tmpNaturalBonusResourcesTablePseudoHeaderRow = outputDocument.createElement("tr");
			tmpNaturalBonusResourcesTablePseudoHeaderRow.className = ResourcePanelPseudoHeaderRowClass;
			tmpNaturalBonusResourcesTablePseudoHeaderRow.id = ResourcePanelNaturalBonusResourcesPseudoHeaderRowID;
			for(let j = 0; j < 7; j++){
				let tmpNaturalBonusResourceTablePseudoHeaderCell = outputDocument.createElement("td");
				tmpNaturalBonusResourceTablePseudoHeaderCell.className = ResourcePanelPseudoHeaderCellClass;
				if(j == 3) tmpNaturalBonusResourceTablePseudoHeaderCell.className = ResourcePanelPseudoHeaderCellClass + " " + ResourcePanelTableCellClassSpacing;
				tmpNaturalBonusResourcesTablePseudoHeaderRow.append(tmpNaturalBonusResourceTablePseudoHeaderCell);
			}
			tmpNaturalBonusResourcesTableBody.append(tmpNaturalBonusResourcesTablePseudoHeaderRow);
		}	
		if(tmpHasBonusResources){
			var tmpBonusResourcesTableHeaderRow = outputDocument.createElement("tr");
			tmpBonusResourcesTableHeaderRow.className = ResourcePanelTableRowClass;
			
			var tmpBonusResourcesTableHeaderCell = outputDocument.createElement("td");
			tmpBonusResourcesTableHeaderCell.className = ResourcePanelTableCellClass + " " + ResourcePanelNaturalBonusResourcesHeaderCellClass;
			tmpBonusResourcesTableHeaderCell.colSpan = 7;
			
			var tmpBonusResourcesTableHeaderSpan = outputDocument.createElement("span");
			tmpBonusResourcesTableHeaderSpan.className = ResourcePanelNaturalBonusResourcesHeaderTextClass;
			tmpBonusResourcesTableHeaderSpan.innerHTML = "Production bonuses and penalties:";
			
			tmpBonusResourcesTableHeaderCell.append(tmpBonusResourcesTableHeaderSpan);
			tmpBonusResourcesTableHeaderRow.append(tmpBonusResourcesTableHeaderCell);
			tmpNaturalBonusResourcesTableBody.append(tmpBonusResourcesTableHeaderRow);
			
			var tmpBonusResourcesTableRow;
			var tmpBonusCounter = 0;
			
			//bonuses
			for(let i = 0; i < tmpBonusResources.length; i++){
				if(tmpBonusResources[i].bonus != 1 && ResourcesArray[tmpBonusResources[i].typeIndex].discovered){
					if(tmpBonusResources[i].bonus < 1) continue;
					if(tmpBonusCounter%2 == 0){
						tmpBonusResourcesTableRow = outputDocument.createElement("tr");
						tmpBonusResourcesTableRow.className = ResourcePanelTableRowClass + " " + ResourcePanelBonusResourcesTableRowClass;
					}
					
					tmpBonusCounter++;
					
					var tmpBonusResourceNameCell = outputDocument.createElement("td");
					tmpBonusResourceNameCell.className = ResourcePanelTableCellClass + " " + ResourcePanelNaturalBonusResourcesNameCellClass;
					var tmpBonusResourceNameText = outputDocument.createElement("span");
					tmpBonusResourceNameText.className = ResourcePanelSingleResourceNameClass + " " + ResourcePanelNaturalBonusResourcesNameCellTextClass;
					tmpBonusResourceNameText.innerHTML = tmpBonusResources[i].typeName;
					
					tmpBonusResourceNameCell.append(tmpBonusResourceNameText);
					tmpBonusResourcesTableRow.append(tmpBonusResourceNameCell);
					
					var tmpBonusResourceMultiplierCell = outputDocument.createElement("td");
					tmpBonusResourceMultiplierCell.className = ResourcePanelTableCellClass + " " + ResourcePanelNaturalBonusResourcesMultiplierCellClass;
					tmpBonusResourceMultiplierCell.colSpan = 2;
					var tmpBonusResourceMultiplierText = outputDocument.createElement("span");
					tmpBonusResourceMultiplierText.className = ResourcePanelSingleResourceValueClass + " " + ResourcePanelNaturalBonusResourcesMultiplierCellTextClass;
					tmpBonusResourceMultiplierText.innerHTML = "×" + tmpBonusResources[i].bonus.toFixed(2);
					
					tmpBonusResourceMultiplierText.className += (" " + ResourcePanelNaturalBonusResourcesMultiplierBonusValueClass);
					
					tmpBonusResourceMultiplierCell.append(tmpBonusResourceMultiplierText);
					tmpBonusResourcesTableRow.append(tmpBonusResourceMultiplierCell);
					
					//if even elements, append the row
					if(tmpBonusCounter%2 == 0){
						tmpNaturalBonusResourcesTableBody.append(tmpBonusResourcesTableRow);
					}//else append spacing cell
					else{
						var tmpBonusResourceEmptyCell = outputDocument.createElement("td");
						tmpBonusResourceEmptyCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassSpacing;
						
						tmpBonusResourcesTableRow.append(tmpBonusResourceEmptyCell);
					}
				}
				else continue;
			}
			
			//penalties
			for(let i = 0; i < tmpBonusResources.length; i++){
				if(tmpBonusResources[i].bonus != 1 && ResourcesArray[tmpBonusResources[i].typeIndex].discovered){
					if(tmpBonusResources[i].bonus > 1) continue;
					if(tmpBonusCounter%2 == 0){
						tmpBonusResourcesTableRow = outputDocument.createElement("tr");
						tmpBonusResourcesTableRow.className = ResourcePanelTableRowClass + " " + ResourcePanelBonusResourcesTableRowClass;
					}
					
					tmpBonusCounter++;
					
					var tmpBonusResourceNameCell = outputDocument.createElement("td");
					tmpBonusResourceNameCell.className = ResourcePanelTableCellClass + " " + ResourcePanelNaturalBonusResourcesNameCellClass;
					var tmpBonusResourceNameText = outputDocument.createElement("span");
					tmpBonusResourceNameText.className = ResourcePanelSingleResourceNameClass + " " + ResourcePanelNaturalBonusResourcesNameCellTextClass;
					tmpBonusResourceNameText.innerHTML = tmpBonusResources[i].typeName;
					
					tmpBonusResourceNameCell.append(tmpBonusResourceNameText);
					tmpBonusResourcesTableRow.append(tmpBonusResourceNameCell);
					
					var tmpBonusResourceMultiplierCell = outputDocument.createElement("td");
					tmpBonusResourceMultiplierCell.className = ResourcePanelTableCellClass + " " + ResourcePanelNaturalBonusResourcesMultiplierCellClass;
					tmpBonusResourceMultiplierCell.colSpan = 2;
					var tmpBonusResourceMultiplierText = outputDocument.createElement("span");
					tmpBonusResourceMultiplierText.className = ResourcePanelSingleResourceValueClass + " " + ResourcePanelNaturalBonusResourcesMultiplierCellTextClass;
					tmpBonusResourceMultiplierText.innerHTML = "×" + tmpBonusResources[i].bonus.toFixed(2);
					
					tmpBonusResourceMultiplierText.className += (" " + ResourcePanelNaturalBonusResourcesMultiplierPenaltyValueClass);
					
					tmpBonusResourceMultiplierCell.append(tmpBonusResourceMultiplierText);
					tmpBonusResourcesTableRow.append(tmpBonusResourceMultiplierCell);
					
					//if even elements, append the row
					if(tmpBonusCounter%2 == 0){
						tmpNaturalBonusResourcesTableBody.append(tmpBonusResourcesTableRow);
					}//else append spacing cell
					else{
						var tmpBonusResourceEmptyCell = outputDocument.createElement("td");
						tmpBonusResourceEmptyCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassSpacing;
						
						tmpBonusResourcesTableRow.append(tmpBonusResourceEmptyCell);
					}
				}
				else continue;
			}
			
			//if uneven elements after ending, apply
			if(tmpBonusCounter%2 == 1){
				tmpNaturalBonusResourcesTableBody.append(tmpBonusResourcesTableRow);
			}
			
			
			//spacing between bonus and natural
			var tmpBonusResourceTableFooterRow = outputDocument.createElement("tr");
			tmpBonusResourceTableFooterRow.className = ResourcePanelTableRowClass;
			
			var tmpBonusResourcesTableFooterCell = outputDocument.createElement("td");
			tmpBonusResourcesTableFooterCell.className = ResourcePanelTableCellClass + " " + ResourcePanelNaturalBonusResourcesFooterCellClass;
			tmpBonusResourcesTableFooterCell.colSpan = 7;
			
			var tmpBonusResourcesTableFooterSpan = outputDocument.createElement("span");
			tmpBonusResourcesTableFooterSpan.className = ResourcePanelNaturalBonusResourcesFooterCellTextClass;
			tmpBonusResourcesTableFooterSpan.innerHTML = "&nbsp;";
			
			tmpBonusResourcesTableFooterCell.append(tmpBonusResourcesTableFooterSpan);
			tmpBonusResourceTableFooterRow.append(tmpBonusResourcesTableFooterCell);
			tmpNaturalBonusResourcesTableBody.append(tmpBonusResourceTableFooterRow);
			
			//tmpNaturalBonusResourcesTableBody.append(tmpBonusResourcesTableBody);
		}
		if(tmpHasNaturalResources){
			
			var tmpNaturalResourcesTableHeaderRow = outputDocument.createElement("tr");
			tmpNaturalResourcesTableHeaderRow.className = ResourcePanelTableRowClass;
			
			var tmpNaturalResourcesTableHeaderCell = outputDocument.createElement("td");
			tmpNaturalResourcesTableHeaderCell.className = ResourcePanelTableCellClass + " " + ResourcePanelNaturalBonusResourcesHeaderCellClass;
			tmpNaturalResourcesTableHeaderCell.colSpan = 7;
			
			var tmpNaturalResourcesTableHeaderSpan = outputDocument.createElement("span");
			tmpNaturalResourcesTableHeaderSpan.className = ResourcePanelNaturalBonusResourcesHeaderTextClass;
			tmpNaturalResourcesTableHeaderSpan.innerHTML = "Natural resources quantity and quality:";
			
			tmpNaturalResourcesTableHeaderCell.append(tmpNaturalResourcesTableHeaderSpan);
			tmpNaturalResourcesTableHeaderRow.append(tmpNaturalResourcesTableHeaderCell);
			tmpNaturalBonusResourcesTableBody.append(tmpNaturalResourcesTableHeaderRow);
			
			var tmpNaturalResourcesTableRow;
			var tmpNatResourceCounter = 0;
			
			for(let i = 0; i < tmpNatResources.length; i++){
				if(tmpNatResources[i].quantity > 0 && ResourcesArray[tmpNatResources[i].typeIndex].discovered){
					if(tmpNatResourceCounter%2 == 0){ 
						tmpNaturalResourcesTableRow = outputDocument.createElement("tr");
						tmpNaturalResourcesTableRow.className = ResourcePanelTableRowClass + " " + ResourcePanelNaturalResourcesTableRowClass;
					}
					
					tmpNatResourceCounter++;
					
					var tmpNaturalResourceNameCell = outputDocument.createElement("td");
					tmpNaturalResourceNameCell.className = ResourcePanelTableCellClass + " " + ResourcePanelNaturalBonusResourcesNameCellClass;
					var tmpNaturalResourceNameText = outputDocument.createElement("span");
					tmpNaturalResourceNameText.className = ResourcePanelSingleResourceNameClass + " " + ResourcePanelNaturalBonusResourcesNameCellTextClass;
					tmpNaturalResourceNameText.innerHTML = tmpNatResources[i].typeName;
					
					tmpNaturalResourceNameCell.append(tmpNaturalResourceNameText);
					tmpNaturalResourcesTableRow.append(tmpNaturalResourceNameCell);
					
					var tmpNaturalResourceQuantityCell = outputDocument.createElement("td");
					tmpNaturalResourceQuantityCell.className = ResourcePanelTableCellClass + " " + ResourcePanelNaturalBonusResourcesQuantityCellClass;
					var tmpNaturalResourceQuantityText = outputDocument.createElement("span");
					tmpNaturalResourceQuantityText.className = ResourcePanelSingleResourceValueClass + " " + ResourcePanelNaturalBonusResourcesQuantityValueClass;
					tmpNaturalResourceQuantityText.innerHTML = "×" + tmpNatResources[i].quantity.toFixed(2);
					
					tmpNaturalResourceQuantityCell.append(tmpNaturalResourceQuantityText);
					tmpNaturalResourcesTableRow.append(tmpNaturalResourceQuantityCell);
					
					var tmpNaturalResourceQualityCell = outputDocument.createElement("td");
					tmpNaturalResourceQualityCell.className = ResourcePanelTableCellClass + " " + ResourcePanelNaturalBonusResourcesQualityCellClass;
					var tmpNaturalResourceQualityText = outputDocument.createElement("span");
					tmpNaturalResourceQualityText.className = ResourcePanelSingleResourceValueClass + " " + ResourcePanelNaturalBonusResourcesQualityValueClass;
					
					if(tmpNatResources[i].quality >= InterfaceNaturalResourcesHighQualityTreshold) {
						tmpNaturalResourceQualityText.className += (" " + ResourcePanelNaturalBonusResourcesQualityHighClass);
						tmpNaturalResourceQualityText.innerHTML = "★";
					}
					else if (tmpNatResources[i].quality <= InterfaceNaturalResourcesLowQualityTreshold){
						tmpNaturalResourceQualityText.className +=  (" " + ResourcePanelNaturalBonusResourcesQualityLowClass);
						tmpNaturalResourceQualityText.innerHTML = "☆";
					}
					else{
						tmpNaturalResourceQualityText.innerHTML = "⋆";
					}
					tmpNaturalResourceQualityText.innerHTML += tmpNatResources[i].quality.toFixed(2);
					
					tmpNaturalResourceQualityCell.append(tmpNaturalResourceQualityText);
					tmpNaturalResourcesTableRow.append(tmpNaturalResourceQualityCell);
					
					//if even elements, append the row
					if(tmpNatResourceCounter%2 == 0){
						tmpNaturalBonusResourcesTableBody.append(tmpNaturalResourcesTableRow);
					}//else append spacing cell
					else{
						var tmpNaturalResourceEmptyCell = outputDocument.createElement("td");
						tmpNaturalResourceEmptyCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassSpacing;
						
						tmpNaturalResourcesTableRow.append(tmpNaturalResourceEmptyCell);
					}
				}
				else continue;
			}
			//if uneven elements after ending, apply
			if(tmpNatResourceCounter%2 == 1){
				tmpNaturalBonusResourcesTableBody.append(tmpNaturalResourcesTableRow);
			}
			tmpNaturalBonusResourcesTable.append(tmpNaturalBonusResourcesTableBody);
			
			tmpElement.append(tmpNaturalBonusResourcesTable);
		}
		else{
			var tmpNoNaturalResourcesContainer = outputDocument.createElement("div");
			tmpNoNaturalResourcesContainer.className = ResourcePanelNoNaturalResourcesContainerClass;
			var tmpNoNaturalResourcesMessage = outputDocument.createElement("span");
			tmpNoNaturalResourcesMessage.className = ResourcePanelNoNaturalResourcesTextClass;
			tmpNoNaturalResourcesMessage.innerHTML = "This planet has no known natural resources."
			
			tmpNoNaturalResourcesContainer.append(tmpNoNaturalResourcesMessage);
			tmpElement.append(tmpNoNaturalResourcesContainer);
		}
	}
}
function interfaceRefreshPlanetStorage(outputDocument) {
	if(PlanetsCurrentPlanet != -1) {
		var tmpElement = outputDocument.getElementById(ResourcePanelStorageTabID);
		var tmpPlanet = PlanetsArray[PlanetsCurrentPlanet];
		var tmpResourceStorage = tmpPlanet.resourceStorage;
		tmpElement.innerHTML = "";
		
		var tmpResourceCounter = 0;
		
		var tmpTableElement = outputDocument.createElement("table");
		tmpTableElement.className = ResourcePanelTableClass;
		tmpTableElement.id = ResourcePanelStorageTableID;
		
		var tmpTableRow;
		var tmpTableRowsCounter = 0;
		
		for(var i = 0; i < tmpResourceStorage.length; i++) {
			//if resource got discovered
			if(ResourcesArray[tmpResourceStorage[i].typeIndex].discovered) {
				
				var tmpResourceName = tmpResourceStorage[i].typeName;
				var tmpResourceAmount = tmpResourceStorage[i].amount;
				
				if(tmpResourceCounter%3 == 0) {
					tmpTableRowsCounter++;
					
					tmpTableRow = outputDocument.createElement("tr");
					tmpTableRow.className = ResourcePanelTableRowClass + " " + ResourcesPanelStorageResourcesTableRowClass;
					tmpTableRow.id = ResourcePanelStorageTableRowID + tmpTableRowsCounter;
				}
				else{
					var tmpResourceSpacingCell = outputDocument.createElement("td");
					tmpResourceSpacingCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassSpacing;
					tmpResourceSpacingCell.id = ResourcePanelStorageTableCellID + "Space_" + i;	
					
					tmpTableRow.append(tmpResourceSpacingCell);
				}
				
				tmpResourceCounter++;
				
				var tmpResourceNameCell = outputDocument.createElement("td");
				tmpResourceNameCell.className = ResourcePanelTableCellClass + " " + ResourcesPanelStorageResourcesNameCellClass;
				tmpResourceNameCell.id = ResourcePanelStorageTableCellID + "Name_" + i;
				
				var tmpSpanResourceName = outputDocument.createElement("span");
				tmpSpanResourceName.className = ResourcePanelSingleResourceNameClass + " " + ResourcesPanelStorageResourcesNameCellTextClass;
				tmpSpanResourceName.id = ResourcePanelStorageSingleResourceNameID + i;
				
				tmpSpanResourceName.innerHTML = tmpResourceName+":&nbsp;";
				
				var tmpResourceValueCell = outputDocument.createElement("td");
				tmpResourceValueCell.className = ResourcePanelTableCellClass + " " + ResourcesPanelStorageResourcesAmountCellClass;
				tmpResourceValueCell.id = ResourcePanelStorageTableCellID + "Value_" + i;
				
				var tmpSpanResourceValue = outputDocument.createElement("span");
				tmpSpanResourceValue.className = ResourcePanelSingleResourceValueClass + " " + ResourcesPanelStorageResourcesAmountCellTextClass;
				tmpSpanResourceValue.id = ResourcePanelStorageSingleResourceValueID + i;
				
				//tmpSpanResourceValue.innerHTML = Number(tmpResourceAmount).toFixed(1);
				tmpSpanResourceValue.innerHTML = bigNumberToString(tmpResourceAmount);
				
				tmpResourceNameCell.append(tmpSpanResourceName);
				tmpResourceValueCell.append(tmpSpanResourceValue);
				
				tmpTableRow.append(tmpResourceNameCell);
				tmpTableRow.append(tmpResourceValueCell);
				
				if(tmpResourceCounter%3 == 2) {
					tmpTableElement.append(tmpTableRow);
				}
			}
		}
		if(tmpResourceCounter%3 != 2) {
			tmpTableElement.append(tmpTableRow);
		}
		tmpElement.append(tmpTableElement);
	}
}
//function interfaceRefreshPlanetProduction(outputDocument){}
//function interfaceRefreshPlanetConsumption(outputDocument){}
function interfaceRefreshAsteroids(outputDocument) {
	if(SystemsCurrentSystem != -1) {
		//todo
		var tmpSystem = SystemsArray[SystemsCurrentSystem];
		
		var tmpElement = outputDocument.getElementById(AsteroidsPanelID);
		tmpElement.innerHTML = "";
		
		/* 
		var tmpTableElement = outputDocument.createElement("table");
		tmpTableElement.className = AsteroidsPanelTableClass;
		tmpTableElement.id = AsteroidsPanelTableID;
		
		var tmpResourceCounter = 0;
		var tmpTableRow;
		var tmpTableRowsCounter = 0;
		
		for(var i = 0; i < ResourcesNames.length; i++) {
			if(ResourcesDiscovered[i] && ResourcesNaturalResources[i]) {
				var tmpResourceName = ResourcesNames[i];
				var tmpResourceAmount = SystemsArray[SystemsCurrentSystem].asteroids[tmpResourceName];
				
				//skip if it is still at 0
				if(!tmpResourceAmount) continue;
				
				tmpResourceCounter++;
				
				tmpTableRowsCounter++;
					
				tmpTableRow = outputDocument.createElement("tr");
				tmpTableRow.className = AsteroidsPanelTableRowClass;
				tmpTableRow.id = AsteroidsPanelTableRowID + tmpTableRowsCounter;
				
				var tmpResourceNameCell = outputDocument.createElement("td");
				tmpResourceNameCell.className = AsteroidsPanelTableCellClass + " " + AsteroidsPanelTableCellClassName;
				tmpResourceNameCell.id = AsteroidsPanelTableCellID + "Name_" + tmpResourceCounter;
				
				var tmpSpanResourceName = outputDocument.createElement("span");
				tmpSpanResourceName.className = AsteroidsPanelSingleResourceNameClass;
				tmpSpanResourceName.id = AsteroidsPanelSingleResourceNameID + tmpResourceCounter;
				
				tmpSpanResourceName.innerHTML = tmpResourceName+":";
				
				var tmpResourceSpacingCell = outputDocument.createElement("td");
				tmpResourceSpacingCell.className = AsteroidsPanelTableCellClass + " " + AsteroidsPanelTableCellClassSpacing;
				tmpResourceSpacingCell.id = AsteroidsPanelSingleResourceNameID + "Space_" + i;	
				
				var tmpResourceValueCell = outputDocument.createElement("td");
				tmpResourceValueCell.className = AsteroidsPanelTableCellClass + " " + AsteroidsPanelTableCellClassValue;
				tmpResourceValueCell.id = AsteroidsPanelTableCellID + "Value_" + tmpResourceCounter;
				
				var tmpSpanResourceValue = outputDocument.createElement("span");
				tmpSpanResourceValue.className = AsteroidsPanelSingleResourceValueClass;
				tmpSpanResourceValue.id = AsteroidsPanelSingleResourceValueID + tmpResourceCounter;
				tmpSpanResourceValue.innerHTML = "x" + Number(tmpResourceAmount).toFixed(2);
				
				tmpResourceNameCell.append(tmpSpanResourceName);
				tmpResourceValueCell.append(tmpSpanResourceValue);
				
				tmpTableRow.append(tmpResourceNameCell);
				tmpTableRow.append(tmpResourceSpacingCell);
				tmpTableRow.append(tmpResourceValueCell);
				
				tmpTableElement.append(tmpTableRow);
				
			}
		}
		if(SystemsArray[SystemsCurrentSystem].HUB_owner != 1) {
			var tmpSpan = outputDocument.createElement("span");
			tmpSpan.className = AsteroidsPanelNoResourcesClass;
			tmpSpan.id = AsteroidsPanelNoResourcesID;
			tmpSpan.innerHTML = "Control over HUB station required to conduct scan.";
			
			tmpElement.append(tmpSpan);
		}
		else if(tmpResourceCounter > 0) {
			tmpElement.append(tmpTableElement);
		}
		else {
			var tmpSpan = outputDocument.createElement("span");
			tmpSpan.className = AsteroidsPanelNoResourcesClass;
			tmpSpan.id = AsteroidsPanelNoResourcesID;
			tmpSpan.innerHTML = "No asteroids fields found.";
			
			tmpElement.append(tmpSpan);
		} */
	}
}


//interface menu main navigation

var InterfaceChangeMenuTabCurrentID = InterfaceMainMenuID;
//var SettingsInstantMenuNavigation = false;
var InterfaceChangeMenuTabFadeOutTime = 0.25;
var InterfaceChangeMenuTabFadeInDelay = 0.1;
var InterfaceChangeMenuTabFadeInTime = 0.25;
var InterfaceChangeMenuTabPathStack = [];
var InterfaceChangeMenuTabInProgress = false;

function interfaceEnterElement(outputDocument, destinationTabID, instantChange = SettingsInstantMenuNavigation) {
	if(!InterfaceChangeMenuTabInProgress) {
		if(InterfaceChangeMenuTabCurrentID == destinationTabID) return;
		InterfaceChangeMenuTabPathStack.push(InterfaceChangeMenuTabCurrentID);
		
		interfaceChangeMenuTab(outputDocument, destinationTabID);
	}
}
function interfaceReturnFromElement(outputDocument, destinationTabID, instantChange = SettingsInstantMenuNavigation) {
	if(!InterfaceChangeMenuTabInProgress) {
		interfaceChangeMenuTab(outputDocument, InterfaceChangeMenuTabPathStack.pop());
	}
}
function interfaceEnterMainMenu(outputDocument, destinationTabID, instantChange = SettingsInstantMenuNavigation) {
	if(!InterfaceChangeMenuTabInProgress) {
		InterfaceChangeMenuTabPathStack = [];
		interfaceChangeMenuTab(outputDocument, InterfaceMainMenuID);
	}
}
function interfaceChangeMenuTab(outputDocument, destinationTabID, instantChange = SettingsInstantMenuNavigation) {
	
	if(InterfaceChangeMenuTabCurrentID == "") {
		InterfaceChangeMenuTabCurrentID = InterfaceMainMenuID;
		
		var tmpElementsArray = outputDocument.getElementsByClassName("interfaceToggleableMenuElement");
		
		if(SettingsInstantMenuNavigation) {
			for(var i = 0; i<tmpElementsArray.length; i++) {
				if(tmpElementsArray[i].id == InterfaceChangeMenuTabCurrentID) {
					tmpElementsArray[i].style.visibility = "visible";
					tmpElementsArray[i].style.opacity = 1.0;
				}
				else {
					tmpElementsArray[i].style.visibility = "hidden";
					tmpElementsArray[i].style.opacity = 0.0;
				}
			}
		}
		else {
			for(var i = 0; i<tmpElementsArray.length; i++) {
				if(tmpElementsArray[i].id == InterfaceChangeMenuTabCurrentID) {
					if(window.getComputedStyle(outputDocument.getElementById(tmpElementsArray[i].id)).visibility != "hidden") {
						var tmpOpacity = parseFloat(window.getComputedStyle(outputDocument.getElementById(tmpElementsArray[i].id)).opacity);
						
						newAnimatedElementOpacity(
							outputDocument, 
							tmpElementsArray[i].id, 
							InterfaceChangeMenuTabFadeOutTime, 
							0, 
							tmpOpacity
						);
					}
				}
				else {
					setTimeout(()=>{
						newAnimatedElementOpacity(
							outputDocument, 
							tmpElementsArray[i].id, 
							InterfaceChangeMenuTabFadeInTime, 
							1, 
							0);
					},1000*(InterfaceChangeMenuTabFadeInDelay + InterfaceChangeMenuTabFadeOutTime));
				}
			}
		}
		return;
	}
	
	if(destinationTabID == InterfaceChangeMenuTabCurrentID) return;
	
	var tmpOriginTab = outputDocument.getElementById(InterfaceChangeMenuTabCurrentID);
	var tmpDestinationTab = outputDocument.getElementById(destinationTabID);	
	
	if(SettingsInstantMenuNavigation) {
		
		tmpDestinationTab.style.visibility = "visible";
		tmpDestinationTab.style.opacity = 1.0;
		
		tmpOriginTab.style.visibility = "hidden";
		tmpOriginTab.style.opacity = 0.0;
		
		}
	else {
		var tmpOpacity = parseFloat(window.getComputedStyle(tmpOriginTab).opacity);
		InterfaceChangeMenuTabInProgress = true;
		newAnimatedElementOpacity(outputDocument, InterfaceChangeMenuTabCurrentID, InterfaceChangeMenuTabFadeOutTime, 0, tmpOpacity);
		setTimeout(()=>{
				newAnimatedElementOpacity(outputDocument, destinationTabID, InterfaceChangeMenuTabFadeInTime, 1, 0);
				setTimeout(()=>{
					InterfaceChangeMenuTabInProgress = false;
				},1000*(InterfaceChangeMenuTabFadeInTime + 0.05));
			},1000*(InterfaceChangeMenuTabFadeInDelay + InterfaceChangeMenuTabFadeOutTime));
	}
	
	switch(InterfaceChangeMenuTabCurrentID) {
		case SystemOverviewMenuID:
			SystemStarmapRefreshActive = false;
			break;
		case GalaxyMapMenuID:
			GalaxyMapRefreshActive = false;
			setTimeout(() => {testMouseDragInterrupt = true;},200);
			break;
	}
	
	InterfaceChangeMenuTabCurrentID = destinationTabID;
	
	//what to do on tab enter
	switch(InterfaceChangeMenuTabCurrentID) {
		case PlanetOverviewMenuID:
			interfaceRefreshPlanetOverview(outputDocument);
			break;
		case SystemOverviewMenuID:
			SystemStarmapRefreshActive = true;
			interfaceRefreshSystemOverview(outputDocument);
			break;
		case GalaxyMapMenuID:
			GalaxyMapRefreshActive = true;
			interfaceRefreshGalaxyMap(outputDocument);
			break;
		case BuildMenuID:
			interfaceRefreshBuildMenu(outputDocument);
			break;
	}
	
	interfaceRefreshInterface(outputDocument);
	
	return;
}



//planet overview menu navigation
//planet overview buttonsvar PlanetOverviewMenuID = "planetOverviewMenuWindow";

var InterfacePlanetOverviewCurrentTab = "";
var InterfacePlanetOverviewDefaultTabHeader = "planetOverviewResourcesPanelStorageButton";
var InterfacePlanetOverviewCurrentTabHeader = InterfacePlanetOverviewDefaultTabHeader;
var InterfacePlanetOverviewTabChanging = false;

function interfacePlanetOverviewChangeTab(outputDocument, destinationTabID, headerTabID, instantChange = SettingsInstantMenuNavigation) {
	
	if(!InterfacePlanetOverviewTabChanging){
		if(destinationTabID == InterfacePlanetOverviewCurrentTab) return;
		
		if(InterfacePlanetOverviewCurrentTab == "") InterfacePlanetOverviewCurrentTab = "planetOverviewResourcesPanelStorage";
		
		var tmpOriginTab = outputDocument.getElementById(InterfacePlanetOverviewCurrentTab);
		var tmpDestinationTab = outputDocument.getElementById(destinationTabID);	
		
		if(instantChange) {
			tmpOriginTab.style.visibility = "hidden";
			tmpOriginTab.style.opacity = 0.0;
			
			tmpDestinationTab.style.visibility = "inherit";
			tmpDestinationTab.style.opacity = 1.0;
			}
		else {
			var tmpOpacity = parseFloat(window.getComputedStyle(tmpOriginTab).opacity);
			
			InterfacePlanetOverviewTabChanging = true;
			
			newAnimatedElementOpacity_Inherit(outputDocument, InterfacePlanetOverviewCurrentTab, InterfaceChangeMenuTabFadeOutTime, 0, tmpOpacity);
			setTimeout(()=>{
					newAnimatedElementOpacity_Inherit(outputDocument, destinationTabID, InterfaceChangeMenuTabFadeInTime, 1, 0);
					setTimeout(()=>{
						InterfacePlanetOverviewTabChanging = false;
					},1000*(InterfaceChangeMenuTabFadeInTime+0.025));
				},1000*(InterfaceChangeMenuTabFadeInDelay + InterfaceChangeMenuTabFadeOutTime));
		}
		
		InterfacePlanetOverviewCurrentTab = destinationTabID;
		
		interfaceRefreshInterface(outputDocument);
		
		interfacePlanetOverviewActivateTabHeader(outputDocument, headerTabID);
	}
	
	return;
}
function interfacePlanetOverviewActivateTabHeader(outputDocument, headerTabID) {
	
	if(InterfacePlanetOverviewCurrentTabHeader == "") InterfacePlanetOverviewCurrentTabHeader = "planetOverviewResourcesPanelStorageButton";
	
	var tmpOriginTab = outputDocument.getElementById(InterfacePlanetOverviewCurrentTabHeader);
	var tmpDestinationTab = outputDocument.getElementById(headerTabID);
	
	tmpOriginTab.style.opacity = "";
	tmpDestinationTab.style.opacity = 1.0;
	
	InterfacePlanetOverviewCurrentTabHeader = headerTabID;
}

function interfacePlanetOverviewPlanetBuildings(outputDocument) {
	//console.log("Buildings on planet, yay. Wow.");
	if(!InterfacePlanetOverviewPlanetChanging) {
		interfaceEnterElement(outputDocument,BuildMenuID);
	}	
}
function interfacePlanetOverviewGoToSystem(outputDocument) {
	//console.log("System overview, yay. Wow.");
	if(!InterfacePlanetOverviewPlanetChanging) {
		SystemsCurrentSystem = systemsGetSystemIndexById(PlanetsArray[PlanetsCurrentPlanet].system_id);

		interfaceEnterElement(outputDocument,SystemOverviewMenuID);
	}
}
function interfacePlanetOverviewGoToHub(outputDocument) {
	console.log("System hub station, yay. Wow.");
}
function interfacePlanetOverviewPlanetRoutes(outputDocument) {
	console.log("Planet auto routes, yay. Wow.");
}

function interfacePlanetOverviewPlayerPreviousPlanet(outputDocument) {
	if(!InterfacePlanetOverviewPlanetChanging) {
		PlanetsCurrentPlanet = planetsGetPreviousFactionPlanetIndex(DiplomacyPlayerFaction);
		if(SettingsInstantMenuNavigation) {
			interfaceRefreshPlanetOverview(outputDocument);
		}
		else {
			interfacePlanetOverviewFadePlanetDetails(outputDocument);
		}
	}	
}
function interfacePlanetOverviewSystemPreviousPlanet(outputDocument) {
	if(!InterfacePlanetOverviewPlanetChanging) {
		PlanetsCurrentPlanet = planetsGetPreviousSystemPlanetIndex();
		if(SettingsInstantMenuNavigation) {
			interfaceRefreshPlanetOverview(outputDocument);
		}
		else {
			interfacePlanetOverviewFadePlanetDetails(outputDocument);
		}
	}	
}
function interfacePlanetOverviewPlayerNextPlanet(outputDocument) {
	if(!InterfacePlanetOverviewPlanetChanging) {
		PlanetsCurrentPlanet = planetsGetNextFactionPlanetIndex(DiplomacyPlayerFaction);
		if(SettingsInstantMenuNavigation) {		
			interfaceRefreshPlanetOverview(outputDocument);
		}
		else {
			interfacePlanetOverviewFadePlanetDetails(outputDocument);
		}
	}	
}
function interfacePlanetOverviewSystemNextPlanet(outputDocument) {
	if(!InterfacePlanetOverviewPlanetChanging) {
		PlanetsCurrentPlanet = planetsGetNextSystemPlanetIndex();
		if(SettingsInstantMenuNavigation) {
			
			interfaceRefreshPlanetOverview(outputDocument);
		}
		else {
			interfacePlanetOverviewFadePlanetDetails(outputDocument);
		}
	}
}

var InterfacePlanetOverviewPlanetChanging = false;
var InterfacePlanetOverviewPlanetFadeOutTime = 0.20;
var InterfacePlanetOverviewPlanetFadeInDelay = 0.10;
var InterfacePlanetOverviewPlanetFadeInTime = 0.20;
var InterfacePlanetOverviewNameContainerID = "planetOverviewInfoPanelHeader";
var InterfacePlanetOverviewPlanetContainerID = "planetOverviewMenuPlanetImage";
var InterfacePlanetOverviewInfoContainerID = "planetOverviewInfoPanelContent";
var InterfacePlanetOverviewResourcesContainerID = "planetOverviewResourcesPanelContent";

function interfacePlanetOverviewFadePlanetDetails(outputDocument) {
	InterfacePlanetOverviewPlanetChanging = true;
	
	newAnimatedElementOpacity_Inherit(outputDocument, InterfacePlanetOverviewNameContainerID, InterfacePlanetOverviewPlanetFadeOutTime, 0, 1);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfacePlanetOverviewPlanetContainerID, InterfacePlanetOverviewPlanetFadeOutTime, 0, 1);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfacePlanetOverviewInfoContainerID, InterfacePlanetOverviewPlanetFadeOutTime, 0, 1);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfacePlanetOverviewResourcesContainerID, InterfacePlanetOverviewPlanetFadeOutTime, 0, 1);
	
	setTimeout(()=>{
			interfaceRefreshPlanetOverview(outputDocument);
			//PlanetsCurrentPlanet = planetsGetNextSystemPlanetIndex();		
			setTimeout(()=>{
				interfacePlanetOverviewShowPlanetDetails(outputDocument);
			},1000*(InterfacePlanetOverviewPlanetFadeInDelay/2));
		},1000*(InterfacePlanetOverviewPlanetFadeInDelay/2 + InterfacePlanetOverviewPlanetFadeOutTime));
}
function interfacePlanetOverviewShowPlanetDetails(outputDocument) {
	newAnimatedElementOpacity_Inherit(outputDocument, InterfacePlanetOverviewNameContainerID, InterfacePlanetOverviewPlanetFadeInTime, 1, 0);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfacePlanetOverviewPlanetContainerID, InterfacePlanetOverviewPlanetFadeInTime, 1, 0);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfacePlanetOverviewInfoContainerID, InterfacePlanetOverviewPlanetFadeInTime, 1, 0);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfacePlanetOverviewResourcesContainerID, InterfacePlanetOverviewPlanetFadeInTime, 1, 0);
	setTimeout(()=>{
		InterfacePlanetOverviewPlanetChanging = false;
	},1000*(InterfacePlanetOverviewPlanetFadeInTime+0.025));
}


//system overview menu navigation

function interfaceSystemOverviewShowOnMap(outputDocument){
	if(!InterfaceSystemOverviewSystemChanging){
		GalaxyMapSelectedSystem = SystemsCurrentSystem;
		
		interfaceEnterElement(outputDocument,GalaxyMapMenuID);
		galaxyMapFocusOnSystemByIndex(outputDocument, GalaxyMapSelectedSystem);
	}
}

function interfaceSystemOverviewDiscoveredNextSystem(outputDocument) {
	if(!InterfaceSystemOverviewSystemChanging) {
		SystemsCurrentSystem = systemsGetNextDiscoveredSystemIndex();
		if(SettingsInstantMenuNavigation) {		
			interfaceRefreshSystemOverview(outputDocument);
		}
		else {
			interfaceSystemOverviewFadeSystemDetails(outputDocument);
		}
	}	
}
function interfaceSystemOverviewDiscoveredPreviousSystem(outputDocument) {
	if(!InterfaceSystemOverviewSystemChanging) {
		SystemsCurrentSystem = systemsGetPreviousDiscoveredSystemIndex();
		if(SettingsInstantMenuNavigation) {
			interfaceRefreshSystemOverview(outputDocument);
		}
		else {
			interfaceSystemOverviewFadeSystemDetails(outputDocument);
		}
	}	
}

function interfaceSystemOverviewNetworkNextSystem(outputDocument) {
	if(SystemsArray[SystemsCurrentSystem].network_id != (-1)) {
		if(!InterfaceSystemOverviewSystemChanging) {
			SystemsCurrentSystem = systemsGetNextNetworkSystemIndex();
			if(SettingsInstantMenuNavigation) {
				interfaceRefreshSystemOverview(outputDocument);
			}
			else {
				interfaceSystemOverviewFadeSystemDetails(outputDocument);
			}
		}
		else{
			//console.log("DEBUG: System change in progress.");
		}
	}
	else{
		//console.log("DEBUG: Not part of network. (" + systemsGetSystemById(SystemsCurrentSystem).network_id + ")");
	}
}
function interfaceSystemOverviewNetworkPreviousSystem(outputDocument) {
	if(SystemsArray[SystemsCurrentSystem].network_id != (-1)) {
		if(!InterfaceSystemOverviewSystemChanging) {
			SystemsCurrentSystem = systemsGetPreviousNetworkSystemIndex();
			if(SettingsInstantMenuNavigation) {
				interfaceRefreshSystemOverview(outputDocument);
			}
			else {
				interfaceSystemOverviewFadeSystemDetails(outputDocument);
			}
		}
		else{
			//console.log("DEBUG: System change in progress.");
		}
	}
	else{
		//console.log("DEBUG: Not part of network. (" + systemsGetSystemById(SystemsCurrentSystem).network_id + ")");
	}
}

var InterfaceSystemOverviewSystemChanging = false;
var InterfaceSystemOverviewSystemFadeOutTime = 0.15;
var InterfaceSystemOverviewSystemFadeInDelay = 0.20;
var InterfaceSystemOverviewSystemFadeInTime = 0.15;
var InterfaceSystemOverviewNameContainerID = "systemOverviewInfoPanelHeader";
var InterfaceSystemOverviewInfoContainerID = "systemOverviewInfoPanelContent";
var InterfaceSystemOverviewResourcesContainerID = "systemOverviewAsteroidsContainer";
var InterfaceSystemOverviewCanvasContainerID = "systemOverviewCanvasContainer";

function interfaceSystemOverviewFadeSystemDetails(outputDocument) {
	InterfaceSystemOverviewSystemChanging = true;
	StarmapSystemChanging = true;
	
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceSystemOverviewNameContainerID, InterfaceSystemOverviewSystemFadeOutTime, 0, 1);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceSystemOverviewInfoContainerID, InterfaceSystemOverviewSystemFadeOutTime, 0, 1);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceSystemOverviewResourcesContainerID, InterfaceSystemOverviewSystemFadeOutTime, 0, 1);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceSystemOverviewCanvasContainerID, InterfaceSystemOverviewSystemFadeOutTime, 0, 1);
	
	setTimeout(()=>{
		StarmapSystemChanging = false;
		SystemStarmapRefreshInProgress = false;
		interfaceRefreshSystemOverview(outputDocument, true);
		//PlanetsCurrentPlanet = planetsGetNextSystemPlanetIndex();		
		setTimeout(()=>{
			interfaceSystemOverviewShowSystemDetails(outputDocument);
		},1000*(InterfaceSystemOverviewSystemFadeInDelay/2));
	},1000*(InterfaceSystemOverviewSystemFadeInDelay/2 + InterfaceSystemOverviewSystemFadeOutTime));
}
function interfaceSystemOverviewShowSystemDetails(outputDocument) {
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceSystemOverviewNameContainerID, InterfaceSystemOverviewSystemFadeInTime, 1, 0);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceSystemOverviewInfoContainerID, InterfaceSystemOverviewSystemFadeInTime, 1, 0);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceSystemOverviewResourcesContainerID, InterfaceSystemOverviewSystemFadeInTime, 1, 0);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceSystemOverviewCanvasContainerID, InterfaceSystemOverviewSystemFadeInTime, 1, 0);
	setTimeout(()=>{
		InterfaceSystemOverviewSystemChanging = false;
	},1000*(InterfaceSystemOverviewSystemFadeInTime+0.025));
}


//galaxy map menu navigation

function interfaceGalaxyMapEnterSystem(outputDocument){
	SystemsCurrentSystem = GalaxyMapSelectedSystem;
	
	interfaceEnterElement(outputDocument,SystemOverviewMenuID);
}


//building menu navigation

function interfacePlanetBuildingGoToPlanet(outputDocument) {
	if(!InterfacePlanetBuildingsPlanetChanging) {
		interfaceEnterElement(outputDocument,PlanetOverviewMenuID);
	}
}


function interfacePlanetBuildingsPreviousPlanet(outputDocument) {
	if(!InterfacePlanetBuildingsPlanetChanging) {
		PlanetsCurrentPlanet = planetsGetPreviousFactionPlanetIndex(DiplomacyPlayerFaction);
		if(SettingsInstantMenuNavigation) {
			interfaceRefreshBuildMenu(outputDocument);
		}
		else {
			interfacePlanetBuildingsFadePlanetDetails(outputDocument);
		}
	}	
}
function interfacePlanetBuildingsNextPlanet(outputDocument) {
	if(!InterfacePlanetBuildingsPlanetChanging) {
		PlanetsCurrentPlanet = planetsGetNextFactionPlanetIndex(DiplomacyPlayerFaction);
		if(SettingsInstantMenuNavigation) {		
			interfaceRefreshBuildMenu(outputDocument);
		}
		else {
			interfacePlanetBuildingsFadePlanetDetails(outputDocument);
		}
	}	
}

var InterfacePlanetBuildingsPlanetChanging = false;
var InterfacePlanetBuildingsPlanetFadeOutTime = 0.15;
var InterfacePlanetBuildingsPlanetFadeInDelay = 0.20;
var InterfacePlanetBuildingsPlanetFadeInTime = 0.15;

var InterfaceBuildingMenuPlanetContainerID = "planetBuildingPlanetContainer";
var InterfaceBuildingMenuPlanetHeaderContainerID = "planetBuildingInfoPanelHeaderCurrentPlanet";
var InterfaceBuildingMenuPlanetEnergyContainerID = "planetBuildingPlanetEnergyContainer";
var InterfaceBuildingMenuResourcesContainerID = "planetBuildingInfoPanelResourcesContainer";
var InterfaceBuildingMenuPlanetListContainerID = "planetBuildingMenuBuildingListContainer";

function interfacePlanetBuildingsFadePlanetDetails(outputDocument) {
	InterfacePlanetBuildingsPlanetChanging = true;
	
	//newAnimatedElementOpacity_Inherit(outputDocument, InterfaceBuildingMenuPlanetContainerID, InterfacePlanetBuildingsPlanetFadeOutTime, 0, 1);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceBuildingMenuResourcesContainerID, InterfacePlanetBuildingsPlanetFadeOutTime, 0, 1);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceBuildingMenuPlanetListContainerID, InterfacePlanetBuildingsPlanetFadeOutTime, 0, 1);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceBuildingMenuPlanetHeaderContainerID, InterfacePlanetBuildingsPlanetFadeOutTime, 0, 1);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceBuildingMenuPlanetEnergyContainerID, InterfacePlanetBuildingsPlanetFadeOutTime, 0, 1);
	
	setTimeout(()=>{
			interfaceRefreshBuildMenu(outputDocument);
			//PlanetsCurrentPlanet = planetsGetNextSystemPlanetIndex();		
			setTimeout(()=>{
				interfacePlanetBuildingsShowPlanetDetails(outputDocument);
			},1000*(InterfacePlanetBuildingsPlanetFadeInDelay/2));
		},1000*(InterfacePlanetBuildingsPlanetFadeInDelay/2 + InterfacePlanetBuildingsPlanetFadeOutTime));
}
function interfacePlanetBuildingsShowPlanetDetails(outputDocument) {
	//newAnimatedElementOpacity_Inherit(outputDocument, InterfaceBuildingMenuPlanetContainerID, InterfacePlanetBuildingsPlanetFadeInTime, 1, 0);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceBuildingMenuResourcesContainerID, InterfacePlanetBuildingsPlanetFadeInTime, 1, 0);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceBuildingMenuPlanetListContainerID, InterfacePlanetBuildingsPlanetFadeInTime, 1, 0);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceBuildingMenuPlanetHeaderContainerID, InterfacePlanetBuildingsPlanetFadeInTime, 1, 0);
	newAnimatedElementOpacity_Inherit(outputDocument, InterfaceBuildingMenuPlanetEnergyContainerID, InterfacePlanetBuildingsPlanetFadeInTime, 1, 0);
	
	setTimeout(()=>{
		InterfacePlanetBuildingsPlanetChanging = false;
	},1000*(InterfacePlanetBuildingsPlanetFadeInTime+0.025));
}



//bottom messages, pseudo-console output

var InterfaceBottomMessagesContainerID = "mainInterfaceBottomBarTextContainer";
var InterfaceBottomMessagesSingleMessageClass = "interfaceConsoleText";
var InterfaceBottomMessagesSingleMessageID = "mainInterfaceBottomTextMessage_";
var InterfaceBottomMessagesArray = [];
var InterfaceBottomMessagesClearOld = true;
var InterfaceBottomMessagesLifeTime = 10;
var InterfaceBottomMessagesKeepLast = true;
var InterfaceBottomMessagesDisplayTime = true;

function interfaceAddBottomMessage(outputDocument, messageText, messageExpire = -1) {
	var tmpMessageTime = new Date().toLocaleTimeString();
	var tmpMessageExpire;
	if(messageExpire != -1 && isNotNaN(messageExpire)) tmpMessageExpire = messageExpire;
	else tmpMessageExpire = Math.round(Date.now()/1000) + InterfaceBottomMessagesLifeTime;
	
	InterfaceBottomMessagesArray.push([messageText,tmpMessageTime,tmpMessageExpire]);
	//console.warn(messageText);
	interfaceRefreshBottomMessages(outputDocument);
}
function interfaceRefreshBottomMessages(outputDocument) {
	var tmpElement = outputDocument.getElementById(InterfaceBottomMessagesContainerID);
	var tmpTime = Math.round(Date.now()/1000);
	
	for(var i = 0; i < InterfaceBottomMessagesArray.length; )
	{
		if(InterfaceBottomMessagesKeepLast && InterfaceBottomMessagesArray.length <= 1) break;
		
		if(InterfaceBottomMessagesArray[i][2] <= tmpTime) {
			InterfaceBottomMessagesArray.shift();
		}
		else i++;
	}
	
	tmpElement.innerHTML = "";
	
	for(var i = 0; i < InterfaceBottomMessagesArray.length; i++) {
		var tmpNewLine = outputDocument.createElement("div");
		tmpNewLine.className = InterfaceBottomMessagesSingleMessageClass;
		tmpNewLine.id = (InterfaceBottomMessagesSingleMessageID + i);
		if(InterfaceBottomMessagesDisplayTime) tmpNewLine.innerHTML = "[" + InterfaceBottomMessagesArray[i][1]+"]: "+InterfaceBottomMessagesArray[i][0];
		else tmpNewLine.innerHTML = InterfaceBottomMessagesArray[i][0];
		tmpElement.append(tmpNewLine);
	}
	
	tmpElement.scrollTop = tmpElement.scrollHeight;
}
