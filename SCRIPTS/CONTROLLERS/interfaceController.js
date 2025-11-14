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

var InterfaceMainMenuIconPaths = [
	"RESOURCES/MAIN_INTERFACE/ICONS/Symbol_questionmark.png", 
	"RESOURCES/MAIN_INTERFACE/ICONS/Padlock.png",
	
	"RESOURCES/MAIN_INTERFACE/ICONS/PlanetsV2.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/System.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Galaxy.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Networks.png",
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Fleets.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Research.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Objectives.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Government.png",	//9
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Diplomacy.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Book.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Settings2.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Home.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Settings2.png",		//14
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Return_Arrow2.png",
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Settings2.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Square ON.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Square OFF.png",	//18
	
	"RESOURCES/MAIN_INTERFACE/Button_300px_v2_OFF.png",
	"RESOURCES/MAIN_INTERFACE/Button_300px_v2_ON.png",	//20
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Arrow2_Down.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Arrow2_Up.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Arrow2_Left.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Arrow2_Right.png",	//24
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Arrow_Down.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Arrow_Up.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Arrow_Left.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Arrow_Right.png",	//28
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Pause OFF_Small.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Pause ON_Small.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Play OFF_Small.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Play ON_Small.png",	
	"RESOURCES/MAIN_INTERFACE/ICONS/FastForward OFF_Small.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/FastForward ON_Small.png",	//34
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Star.png",	//35
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow_Up.png", //36
	
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow3_Up.png", 
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow3_Right.png", 
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow3_Down.png", 
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow3_Left.png", //40
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Plus_Fancy.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Plus_Simple.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Minus_Fancy.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Minus_Simple.png", //44
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Target_Fancy.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Target_Simple.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Crown_Fancy.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Crown_Simple.png", //48
];
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
	"mainMenuWindowGovernmentImage",
	
	"mainMenuWindowDiplomacyImage",	//10
	"mainMenuWindowArchivesImage",	
	"mainMenuWindowSettingsImage",
	
	"mainInterfaceWindowHomeImage",
	"mainInterfaceWindowSettingsShortcutImage",
	
	"interfaceReturnButton",
	
	"settingsMenuWindowHeaderImage",
	"gridButton300px",
	
	"planetOverviewMenuWindowHeaderImage",
	"planetOverviewInfoPanelHeaderSystemPreviousPlanetImage",
	"planetOverviewInfoPanelHeaderSystemNextPlanetImage",
	"planetOverviewInfoPanelHeaderPlayerPreviousPlanetImage",
	"planetOverviewInfoPanelHeaderPlayerNextPlanetImage", //22
	
	"mainInterfaceWindowPauseGameTimeImage",
	"mainInterfaceWindowPauseBonusTimeImage", //24
	
	"systemOverviewMenuWindowHeaderImage",
	"systemOverviewInfoPanelHeaderNetworkPreviousSystemImage",
	"systemOverviewInfoPanelHeaderNetworkNextSystemImage",
	"systemOverviewInfoPanelHeaderPlayerPreviousSystemImage",
	"systemOverviewInfoPanelHeaderPlayerNextSystemImage", //29
	
	"creditsMenuWindowHeaderImage",	//30
	
	"galaxyMapMenuWindowHeaderImage",
	"galaxyMapTopArrowButtonImage",
	"galaxyMapLeftArrowButtonImage",
	"galaxyMapRightArrowButtonImage",
	"galaxyMapBottomArrowButtonImage",	//35
	
	"galaxyMapZoomInButtonImage",
	"galaxyMapZoomOutButtonImage",
	"galaxyMapReturnHomeButtonImage",
	"galaxyMapFocusTargetButtonImage",	//39
	
];


//interface refresh and init

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
		if(SaveUnlockedMainMenuTabs[0]) interfaceInitPlanetOverviewMenu(outputDocument);
		//systems
		if(SaveUnlockedMainMenuTabs[1]) interfaceInitSystemOverviewMenu(outputDocument);
		//galaxy
		if(SaveUnlockedMainMenuTabs[2]) interfaceInitGalaxyMapMenu(outputDocument);
		//networks
		if(SaveUnlockedMainMenuTabs[3]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[5]).src = InterfaceMainMenuIconPaths[5];
		//fleets
		if(SaveUnlockedMainMenuTabs[4]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[6]).src = InterfaceMainMenuIconPaths[6];
		//research
		if(SaveUnlockedMainMenuTabs[5]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[7]).src = InterfaceMainMenuIconPaths[7];
		//missions
		if(SaveUnlockedMainMenuTabs[6]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[8]).src = InterfaceMainMenuIconPaths[8];
		//government
		if(SaveUnlockedMainMenuTabs[7]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[9]).src = InterfaceMainMenuIconPaths[9];
		//diplomacy
		if(SaveUnlockedMainMenuTabs[8]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[10]).src = InterfaceMainMenuIconPaths[10];
		//archive
		if(SaveUnlockedMainMenuTabs[9]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[11]).src = InterfaceMainMenuIconPaths[11];
		//settings
		if(SaveUnlockedMainMenuTabs[10]) interfaceInitSettingsMenu(outputDocument);
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
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[13]).onclick = function() { interfaceEnterMainMenu(outputDocument,InterfaceMainMenuID); };
	
	//mini settings
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[14]).src = InterfaceMainMenuIconPaths[14];
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[14]).onclick = function() { interfaceEnterElement(outputDocument,SettingsMenuID); };
	
	//pause game
	if(TimerGamePaused) {
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[23]).src = InterfaceMainMenuIconPaths[30];
	}
	else {
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[23]).src = InterfaceMainMenuIconPaths[29];
	}
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[23]).onclick = function() { timerSwitchGamePause(); };
	
	//pause accelerated time
	if(TimerAFKBonusActive) {
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[24]).src = InterfaceMainMenuIconPaths[34];
	}
	else {
		outputDocument.getElementById(InterfaceMainMenuButtonImagesID[24]).src = InterfaceMainMenuIconPaths[33];
	}
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[24]).onclick = function() { timerSwitchAFKTimeBonus(); };
	
	
	//all returns
	var tmpArray = outputDocument.getElementsByClassName(InterfaceMainMenuButtonImagesID[15]);
	for(var i = 0; i < tmpArray.length; i++) {
		tmpArray[i].src = InterfaceMainMenuIconPaths[15];
		tmpArray[i].onclick = function() { interfaceReturnFromElement(outputDocument,InterfaceMainMenuID); };
	}
	
	//300px buttons if present
	var tmpArray = outputDocument.getElementsByClassName(InterfaceMainMenuButtonImagesID[17]);
	for(var i = 0; i < tmpArray.length; i++) {
		tmpArray[i].src = InterfaceMainMenuIconPaths[20];
	}
}
function interfaceInitPlanetOverviewMenu(outputDocument) {
	//planets in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[2]).src = InterfaceMainMenuIconPaths[2];
	outputDocument.getElementById("mainMenuWindowPlanetsButton").disabled = false;
	outputDocument.getElementById("mainMenuWindowPlanetsButton").onclick = function() { interfaceEnterElement(outputDocument,PlanetOverviewMenuID); };
	
	//topbar image in settings menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[18]).src = InterfaceMainMenuIconPaths[2];
	
	//planet navigation buttons
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[19]).src = InterfaceMainMenuIconPaths[23];
	outputDocument.getElementById("planetOverviewInfoPanelHeaderSystemPreviousPlanet").onclick = function() { interfacePlanetOverviewSystemPreviousPlanet(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[20]).src = InterfaceMainMenuIconPaths[24];
	outputDocument.getElementById("planetOverviewInfoPanelHeaderSystemNextPlanet").onclick = function() { interfacePlanetOverviewSystemNextPlanet(outputDocument); };
	
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[21]).src = InterfaceMainMenuIconPaths[27];
	outputDocument.getElementById("planetOverviewPlayerPreviousPlanetContainer").onclick = function() { interfacePlanetOverviewPlayerPreviousPlanet(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[22]).src = InterfaceMainMenuIconPaths[28];
	outputDocument.getElementById("planetOverviewPlayerNextPlanetContainer").onclick = function() { interfacePlanetOverviewPlayerNextPlanet(outputDocument); };
	
	//function buttons
	
	outputDocument.getElementById("planetOverviewPlanetBuildingsButton").onclick = 
		function() { interfacePlanetOverviewPlanetBuildings(outputDocument); };
	outputDocument.getElementById("planetOverviewGoToSystemButton").onclick = 
		function() { interfacePlanetOverviewGoToSystem(outputDocument); };
	outputDocument.getElementById("planetOverviewGoToHubButton").onclick = 
		function() { interfacePlanetOverviewGoToHub(outputDocument); };
	outputDocument.getElementById("planetOverviewPlanetRoutesButton").onclick = 
		function() { interfacePlanetOverviewPlanetBuildings(outputDocument); };
		
	//planet resource tabs
	outputDocument.getElementById("planetOverviewResourcesPanelStorageButton").onclick = function() { 
		if(!InterfacePlanetOverviewTabChanging) {
			
			interfacePlanetOverviewChangeTab(outputDocument,ResourcePanelStorageTabID); 
			interfacePlanetOverviewActivateTabHeader(outputDocument,"planetOverviewResourcesPanelStorageButton");
		}
	};
	outputDocument.getElementById("planetOverviewResourcesPanelProductionButton").onclick = function() { 
		if(!InterfacePlanetOverviewTabChanging) {
			
			interfacePlanetOverviewChangeTab(outputDocument,ResourcePanelProductionTabID); 
			interfacePlanetOverviewActivateTabHeader(outputDocument,"planetOverviewResourcesPanelProductionButton");
		}
	};
	outputDocument.getElementById("planetOverviewResourcesPanelConsumptionButton").onclick = function() { 
		if(!InterfacePlanetOverviewTabChanging) {
			
			interfacePlanetOverviewChangeTab(outputDocument,ResourcePanelConsumptionTabID); 
			interfacePlanetOverviewActivateTabHeader(outputDocument,"planetOverviewResourcesPanelConsumptionButton");
		}
	};
	outputDocument.getElementById("planetOverviewResourcesPanelBalanceButton").onclick = function() { 
		if(!InterfacePlanetOverviewTabChanging) {
			
			interfacePlanetOverviewChangeTab(outputDocument,ResourcePanelBalanceTabID); 
			interfacePlanetOverviewActivateTabHeader(outputDocument,"planetOverviewResourcesPanelBalanceButton");
		}
	};
	outputDocument.getElementById("planetOverviewResourcesPanelResourcesButton").onclick = function() { 
		if(!InterfacePlanetOverviewTabChanging) {
			
			interfacePlanetOverviewChangeTab(outputDocument,ResourcePanelNaturalResourcesTabID); 
			interfacePlanetOverviewActivateTabHeader(outputDocument,"planetOverviewResourcesPanelResourcesButton");
		}
	};
	
	interfaceRefreshPlanetOverview(outputDocument);
	
}
function interfaceInitSystemOverviewMenu(outputDocument) {
	//system in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[3]).src = InterfaceMainMenuIconPaths[3];
	outputDocument.getElementById("mainMenuWindowSystemsButton").disabled = false;
	outputDocument.getElementById("mainMenuWindowSystemsButton").onclick = function() { interfaceEnterElement(outputDocument,SystemOverviewMenuID); };
	
	//topbar image in system overview menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[25]).src = InterfaceMainMenuIconPaths[3];
	
	//function buttons
	outputDocument.getElementById("systemOverviewShowMapButton").onclick = 
		function() { interfaceSystemOverviewShowOnMap(outputDocument); };
	
	//system navigation buttons
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[26]).src = InterfaceMainMenuIconPaths[23];
	outputDocument.getElementById("systemOverviewInfoPanelHeaderNetworkPreviousSystem").onclick = function() { interfaceSystemOverviewNetworkPreviousSystem(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[27]).src = InterfaceMainMenuIconPaths[24];
	outputDocument.getElementById("systemOverviewInfoPanelHeaderNetworkNextSystem").onclick = function() { interfaceSystemOverviewNetworkNextSystem(outputDocument); };
	
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[28]).src = InterfaceMainMenuIconPaths[27];
	outputDocument.getElementById("systemOverviewPlayerPreviousSystemContainer").onclick = function() { interfaceSystemOverviewDiscoveredPreviousSystem(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[29]).src = InterfaceMainMenuIconPaths[28];
	outputDocument.getElementById("systemOverviewPlayerNextSystemContainer").onclick = function() { interfaceSystemOverviewDiscoveredNextSystem(outputDocument); };
	
	interfaceRefreshSystemOverview(outputDocument);
}
function interfaceInitGalaxyMapMenu(outputDocument){
	//galaxy in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[4]).src = InterfaceMainMenuIconPaths[4];
	outputDocument.getElementById("mainMenuWindowGalaxyButton").disabled = false;
	outputDocument.getElementById("mainMenuWindowGalaxyButton").onclick = function() { interfaceEnterElement(outputDocument,GalaxyMapMenuID); };
	
	//topbar image in galaxy map menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[31]).src = InterfaceMainMenuIconPaths[4];
	
	//galaxy map navigation buttons
		//top
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[32]).src = InterfaceMainMenuIconPaths[37];//22
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[32]).onclick = function() { galaxyMoveGalaxyMapUp(outputDocument); };
		//right
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[34]).src = InterfaceMainMenuIconPaths[38];//24
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[34]).onclick = function() { galaxyMoveGalaxyMapRight(outputDocument); };
		//bottom
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[35]).src = InterfaceMainMenuIconPaths[39];//21
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[35]).onclick = function() { galaxyMoveGalaxyMapDown(outputDocument); };
		//left
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[33]).src = InterfaceMainMenuIconPaths[40];//23
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[33]).onclick = function() { galaxyMoveGalaxyMapLeft(outputDocument); };
	
		//zoom in
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[36]).src = InterfaceMainMenuIconPaths[41];//23
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[36]).onclick = function() { galaxyZoomMap(outputDocument, (+ 1), true); };
		//zoom out
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[37]).src = InterfaceMainMenuIconPaths[43];//23
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[37]).onclick = function() { galaxyZoomMap(outputDocument, (- 1), true); };
	
		//return home
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[38]).src = InterfaceMainMenuIconPaths[47];//23
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[38]).onclick = function() { galaxyResetCameraPosition(outputDocument); };
		//focus target
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[39]).src = InterfaceMainMenuIconPaths[45];//23
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[39]).onclick = function() { galaxyMapFocusOnSystemByIndex(outputDocument, GalaxyMapSelectedSystem);  };
	
	
	
		
	
	interfaceRefreshGalaxyMap(outputDocument);
}
function interfaceInitSettingsMenu(outputDocument) {
	//settings in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[12]).src = InterfaceMainMenuIconPaths[12];
	outputDocument.getElementById("mainMenuWindowSettingsButton").disabled = false;
	outputDocument.getElementById("mainMenuWindowSettingsButton").onclick = function() { interfaceEnterElement(outputDocument,SettingsMenuID); };
	
	//topbar image in settings menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[16]).src = InterfaceMainMenuIconPaths[16];
	
	//settings buttons
	outputDocument.getElementById("settingsMenuOptionAnimatedMenuTabsChangeCheckbox").onclick = function() { interfaceSettingsSwitchFastMenuChange(outputDocument); };
	outputDocument.getElementById("settingsMenuOptionSkipIntroCheckbox").onclick = function() { interfaceSettingsSwitchIntroSkip(outputDocument); };
	outputDocument.getElementById("settingsMenuOptionAutosaveCheckbox").onclick = function() { interfaceSettingsSwitchAutosave(outputDocument); };
	outputDocument.getElementById("settingsMenuOptionGalaxyMapParallaxCheckbox").onclick = function() { interfaceSettingsSwitchGalaxyMapParralax(outputDocument); };
	
	outputDocument.getElementById("settingsMenuOptionReplayIntroButton").onclick = function() { 
		/*outputDocument.getElementById("settingsMenuOptionReplayIntroImage").src = InterfaceMainMenuIconPaths[20];
		setTimeout(() => {
			outputDocument.getElementById("settingsMenuOptionReplayIntroImage").src = InterfaceMainMenuIconPaths[19];
		},InterfaceButtonsTurnOffClickEffectTimer*1000);*/
		animationDisplayIntro(outputDocument);
	};
	
	outputDocument.getElementById("settingsMenuOptionSaveGameButton").onclick = function() { 
		/*outputDocument.getElementById("settingsMenuOptionSaveGameImage").src = InterfaceMainMenuIconPaths[20];
		setTimeout(() => {
			outputDocument.getElementById("settingsMenuOptionSaveGameImage").src = InterfaceMainMenuIconPaths[19];
		},InterfaceButtonsTurnOffClickEffectTimer*1000);*/
		saveSaveGame();
	};
	
	outputDocument.getElementById("settingsMenuOptionExportSaveButton").onclick = function() { 
		saveExportSave(outputDocument);
	};
	outputDocument.getElementById("settingsMenuOptionImportSaveButton").onclick = function() { 
		loadImportSave(outputDocument);
	};
	outputDocument.getElementById("settingsMenuOptionWipeSaveButton").onclick = function() { 
		saveLoadWipeSave(outputDocument);
	};
	outputDocument.getElementById("settingsMenuOptionShowCreditsButton").onclick = function() { 
		interfaceEnterElement(outputDocument,CreditsMenuID);
	};
	
	//button on/off
	if(InterfaceChangeMenuTabInstant) {
		outputDocument.getElementById("settingsMenuOptionAnimatedMenuTabsChangeCheckbox").src = InterfaceMainMenuIconPaths[17];
	}
	else{
		outputDocument.getElementById("settingsMenuOptionAnimatedMenuTabsChangeCheckbox").src = InterfaceMainMenuIconPaths[18];
	}
	
	//button on/off
	if(SaveIntroDisplayedOrSkipped) {
		outputDocument.getElementById("settingsMenuOptionSkipIntroCheckbox").src = InterfaceMainMenuIconPaths[17];
	}
	else {
		outputDocument.getElementById("settingsMenuOptionSkipIntroCheckbox").src = InterfaceMainMenuIconPaths[18];
	}
	
	//button on/off
	if(SaveAutosave) {
		outputDocument.getElementById("settingsMenuOptionAutosaveCheckbox").src = InterfaceMainMenuIconPaths[17];
	}
	else{
		outputDocument.getElementById("settingsMenuOptionAutosaveCheckbox").src = InterfaceMainMenuIconPaths[18];
	}
	
	//button on/off
	if(GalaxyMapPerspectiveEnabled) {
		outputDocument.getElementById("settingsMenuOptionGalaxyMapParallaxCheckbox").src = InterfaceMainMenuIconPaths[17];
	}
	else{
		outputDocument.getElementById("settingsMenuOptionGalaxyMapParallaxCheckbox").src = InterfaceMainMenuIconPaths[18];
	}
			
	//other
	
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[30]).src = InterfaceMainMenuIconPaths[35];
}

function interfaceSettingsSwitchFastMenuChange(outputDocument) {
	if(InterfaceChangeMenuTabInstant) InterfaceChangeMenuTabInstant = false;
	else InterfaceChangeMenuTabInstant = true;
	
	interfaceInitSettingsMenu(outputDocument);
}
function interfaceSettingsSwitchIntroSkip(outputDocument) {
	if(SaveIntroDisplayedOrSkipped) SaveIntroDisplayedOrSkipped = false;
	else SaveIntroDisplayedOrSkipped = true;
	
	interfaceInitSettingsMenu(outputDocument);
}
function interfaceSettingsSwitchAutosave(outputDocument) {
	if(SaveAutosave) SaveAutosave = false;
	else SaveAutosave = true;
	
	interfaceInitSettingsMenu(outputDocument);
}
function interfaceSettingsSwitchGalaxyMapParralax(outputDocument){
	if(GalaxyMapPerspectiveEnabled) GalaxyMapPerspectiveEnabled = false;
	else GalaxyMapPerspectiveEnabled = true;
	interfaceInitSettingsMenu(outputDocument);
}

//refresh interface elements

function interfaceRefreshPlanetOverview(outputDocument) {
	//planet data
	if(PlanetsCurrentPlanet != -1) {
		outputDocument.getElementById("planetOverviewMenuPlanetImage").src = PlanetImageDefaultPath + PlanetsArray[PlanetsCurrentPlanet].imagePath + ".png";
		
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
			interfacePlanetOverviewChangeTab(outputDocument,ResourcePanelNaturalResourcesTabID, true); 
			interfacePlanetOverviewActivateTabHeader(outputDocument,"planetOverviewResourcesPanelResourcesButton");
			
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
function interfaceRefreshInterface(outputDocument) {
	//interfaceRefreshPlanetResources(outputDocument);
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
var ResourcePanelStorageTableID = "planetOverviewResourcesPanelStorageTable";
var ResourcePanelProductionTableID = "planetOverviewResourcesPanelProductionTable";
var ResourcePanelConsumptionTableID = "planetOverviewResourcesPanelConsumptionTable";
var ResourcePanelBalanceTableID = "planetOverviewResourcesPanelBalanceTable";
var ResourcePanelNaturalResourcesTableID = "planetOverviewResourcesPanelNaturalResourcesTable";

var ResourcePanelTableRowClass = "interfaceTableRow";
var ResourcePanelStorageTableRowID = "planetOverviewResourcesPanelStorageTableRow_";
var ResourcePanelProductionTableRowID = "planetOverviewResourcesPanelProductionTableRow_";
var ResourcePanelConsumptionTableRowID = "planetOverviewResourcesPanelConsumptionTableRow_";
var ResourcePanelBalanceTableRowID = "planetOverviewResourcesPanelBalanceTableRow_";
var ResourcePanelNaturalResourcesTableRowID = "planetOverviewResourcesPanelNaturalResourcesTableRow_";

var ResourcePanelTableCellClass = "interfaceTableCell";
var ResourcePanelTableCellClassName = "planetOverviewResourcesTabResourceName";
var ResourcePanelTableCellClassSpacing = "planetOverviewTableColumnSpacing";
var ResourcePanelTableCellClassValue = "planetOverviewResourcesTabResourceValue";
var ResourcePanelStorageTableCellID = "planetOverviewResourcesPanelStorageTableCell";
var ResourcePanelProductionTableCellID = "planetOverviewResourcesPanelProductionTableCell";
var ResourcePanelConsumptionTableCellID = "planetOverviewResourcesPanelConsumptionTableCell";
var ResourcePanelBalanceTableCellID = "planetOverviewResourcesPanelBalanceTableCell";
var ResourcePanelNaturalResourcesTableCellID = "planetOverviewResourcesPanelNaturalResourcesTableCell";

var ResourcePanelSingleResourceNameClass = "interfaceText planetOverviewResourceName"; 
var ResourcePanelStorageSingleResourceNameID = "planetOverviewStorageResourceName_";
var ResourcePanelProductionSingleResourceNameID = "planetOverviewProductionResourceName_";
var ResourcePanelConsumptionSingleResourceNameID = "planetOverviewConsumptionResourceName_";
var ResourcePanelBalanceSingleResourceNameID = "planetOverviewBalanceResourceName_";
var ResourcePanelNaturalResourcesSingleResourceNameID = "planetOverviewNaturalResourcesResourceName_";

var ResourcePanelSingleResourceValueClass = "interfaceText interfaceDynamicText planetOverviewResourceValue"; 
var ResourcePanelStorageSingleResourceValueID = "planetOverviewStorageResourceValue_";
var ResourcePanelProductionSingleResourceValueID = "planetOverviewProductionResourceValue_";
var ResourcePanelConsumptionSingleResourceValueID = "planetOverviewConsumptionResourceValue_";
var ResourcePanelBalanceSingleResourceValueID = "planetOverviewBalanceResourceValue_";
var ResourcePanelNaturalResourcesSingleResourceValueID = "planetOverviewNaturalResourcesResourceValue_";

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

function interfaceRefreshPlanetStorage(outputDocument) {
	if(PlanetsCurrentPlanet != -1) {
		var tmpElement = outputDocument.getElementById(ResourcePanelStorageTabID);
		tmpElement.innerHTML = "";
		
		var tmpResourceCounter = 0;
		
		var tmpTableElement = outputDocument.createElement("table");
		tmpTableElement.className = ResourcePanelTableClass;
		tmpTableElement.id = ResourcePanelStorageTableID;
		
		var tmpTableRow;
		var tmpTableRowsCounter = 0;
		
		for(var i = 0; i < resourcesNames.length; i++) {
			//if resource got discovered
			if(resourcesDiscovered[i]) {
				var tmpResourceName = resourcesNames[i];
				var tmpResourceAmount = PlanetsArray[PlanetsCurrentPlanet].resourceStorage[tmpResourceName];
				
				tmpResourceCounter++;
				
				if(tmpResourceCounter%2 == 1) {
					tmpTableRowsCounter++;
					
					tmpTableRow = outputDocument.createElement("tr");
					tmpTableRow.className = ResourcePanelTableRowClass;
					tmpTableRow.id = ResourcePanelStorageTableRowID+tmpTableRowsCounter;
				}
				
				var tmpResourceNameCell = outputDocument.createElement("td");
				tmpResourceNameCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassName;
				tmpResourceNameCell.id = ResourcePanelStorageTableCellID + "Name_" + i;
				
				var tmpSpanResourceName = outputDocument.createElement("span");
				tmpSpanResourceName.className = ResourcePanelSingleResourceNameClass;
				tmpSpanResourceName.id = ResourcePanelStorageSingleResourceNameID + i;
				
				tmpSpanResourceName.innerHTML = tmpResourceName+":&nbsp;";
				
				var tmpResourceValueCell = outputDocument.createElement("td");
				tmpResourceValueCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassValue;
				tmpResourceValueCell.id = ResourcePanelStorageTableCellID + "Value_" + i;
				
				var tmpSpanResourceValue = outputDocument.createElement("span");
				tmpSpanResourceValue.className = ResourcePanelSingleResourceValueClass;
				tmpSpanResourceValue.id = ResourcePanelStorageSingleResourceValueID + i;
				
				tmpSpanResourceValue.innerHTML = Number(tmpResourceAmount).toFixed(1);
				
				tmpResourceNameCell.append(tmpSpanResourceName);
				tmpResourceValueCell.append(tmpSpanResourceValue);
				
				tmpTableRow.append(tmpResourceNameCell);
				tmpTableRow.append(tmpResourceValueCell);
				
				if(tmpResourceCounter%2 == 0) {
					tmpTableElement.append(tmpTableRow);
				}
				else{
					var tmpResourceSpacingCell = outputDocument.createElement("td");
					tmpResourceSpacingCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassSpacing;
					tmpResourceSpacingCell.id = ResourcePanelStorageTableCellID + "Space_" + i;	
					
					tmpTableRow.append(tmpResourceSpacingCell);
				}
			}
		}
		if(tmpResourceCounter%2 == 1) {
			var tmpResourceNameCell = outputDocument.createElement("td");
			tmpResourceNameCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassName;
			tmpResourceNameCell.id = ResourcePanelStorageTableCellID + "Name_Empty";
			
			var tmpResourceValueCell = outputDocument.createElement("td");
			tmpResourceValueCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassValue;
			tmpResourceValueCell.id = ResourcePanelStorageTableCellID + "Value_Empty";
			
			tmpTableRow.append(tmpResourceNameCell);
			tmpTableRow.append(tmpResourceValueCell);
			
			tmpTableElement.append(tmpTableRow);
		}
		tmpElement.append(tmpTableElement);
	}
}



function interfaceRefreshPlanetNaturalResources(outputDocument) {
	if(PlanetsCurrentPlanet != -1) {
		var tmpElement = outputDocument.getElementById(ResourcePanelNaturalResourcesTabID);
		tmpElement.innerHTML = "";
		
		var tmpResourceCounter = 0;
		var tmpBonusCounter = 0;
		
		var tmpTableElement = outputDocument.createElement("table");
		tmpTableElement.className = ResourcePanelTableClass;
		tmpTableElement.id = ResourcePanelNaturalResourcesTableID;
		
		var tmpTableRow;
		var tmpTableRowsCounter = 0;
		
		//natural resources if default efficiency at 0.0
		for(var i = 0; i < resourcesNames.length; i++) {
			if(resourcesDiscovered[i] && resourcesNaturalResources[i]) {
				var tmpResourceName = resourcesNames[i];
				var tmpResourceAmount = PlanetsArray[PlanetsCurrentPlanet].naturalResources[tmpResourceName];
				
				//skip if it is still at 0
				if(tmpResourceAmount == 0) continue;
				
				tmpResourceCounter++;
				
				if(tmpResourceCounter%2 == 1) {
					tmpTableRowsCounter++;
					
					tmpTableRow = outputDocument.createElement("tr");
					tmpTableRow.className = ResourcePanelTableRowClass;
					tmpTableRow.id = ResourcePanelNaturalResourcesTableRowID + tmpTableRowsCounter;
				}
				
				var tmpResourceNameCell = outputDocument.createElement("td");
				tmpResourceNameCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassName;
				tmpResourceNameCell.id = ResourcePanelNaturalResourcesTableCellID + "Name_" + tmpResourceCounter;
				
				var tmpSpanResourceName = outputDocument.createElement("span");
				tmpSpanResourceName.className = ResourcePanelSingleResourceNameClass;
				tmpSpanResourceName.id = ResourcePanelNaturalResourcesSingleResourceNameID + tmpResourceCounter;
				
				tmpSpanResourceName.innerHTML = tmpResourceName+":&nbsp;";
				
				var tmpResourceValueCell = outputDocument.createElement("td");
				tmpResourceValueCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassValue;
				tmpResourceValueCell.id = ResourcePanelNaturalResourcesTableCellID + "Value_" + tmpResourceCounter;
				
				var tmpSpanResourceValue = outputDocument.createElement("span");
				tmpSpanResourceValue.className = ResourcePanelSingleResourceValueClass;
				tmpSpanResourceValue.id = ResourcePanelNaturalResourcesSingleResourceValueID + tmpResourceCounter;
				
				tmpSpanResourceValue.innerHTML = "x" + Number(tmpResourceAmount).toFixed(2);
				
				tmpResourceNameCell.append(tmpSpanResourceName);
				tmpResourceValueCell.append(tmpSpanResourceValue);
				
				tmpTableRow.append(tmpResourceNameCell);
				tmpTableRow.append(tmpResourceValueCell);
				
				if(tmpResourceCounter%2 == 0) {
					tmpTableElement.append(tmpTableRow);
				}
				else{
					var tmpResourceSpacingCell = outputDocument.createElement("td");
					tmpResourceSpacingCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassSpacing;
					tmpResourceSpacingCell.id = ResourcePanelNaturalResourcesTableCellID + "Space_" + tmpResourceCounter;	
					
					tmpTableRow.append(tmpResourceSpacingCell);
				}
			}
		}
		if(tmpResourceCounter%2 == 1) {
			var tmpResourceNameCell = outputDocument.createElement("td");
			tmpResourceNameCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassName;
			tmpResourceNameCell.id = ResourcePanelNaturalResourcesTableCellID + "Name_Empty";
			
			var tmpResourceValueCell = outputDocument.createElement("td");
			tmpResourceValueCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassValue;
			tmpResourceValueCell.id = ResourcePanelNaturalResourcesTableCellID + "Value_Empty";
			
			tmpTableRow.append(tmpResourceNameCell);
			tmpTableRow.append(tmpResourceValueCell);
			
			tmpTableElement.append(tmpTableRow);
			
			//extra for proper positioning
			tmpResourceCounter++;
		}
		
		//extra empty row
		tmpTableRowsCounter++;
					
		tmpTableRow = outputDocument.createElement("tr");
		tmpTableRow.className = ResourcePanelTableClass;
		tmpTableRow.id = ResourcePanelNaturalResourcesTableRowID + tmpTableRowsCounter;
		
		var tmpSingleResourceSpacingCell = outputDocument.createElement("td");
		tmpSingleResourceSpacingCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassSpacing;
		tmpSingleResourceSpacingCell.id = ResourcePanelNaturalResourcesTableCellID + "Space_Extra";	
		
		tmpSingleResourceSpacingCell.innerHTML = "&nbsp;";
		
		tmpTableRow.append(tmpSingleResourceSpacingCell);
		
		tmpTableElement.append(tmpTableRow);
		
		
		
		//production bonuses and penalties if efficiency other than default efficiency of 1.0
		for(var i = 0; i < resourcesNames.length; i++) {
			if(resourcesDiscovered[i] && !resourcesNaturalResources[i]) {
				var tmpResourceName = resourcesNames[i];
				var tmpResourceAmount = PlanetsArray[PlanetsCurrentPlanet].naturalResources[tmpResourceName];
				
				//skip if it is still at default 1.0
				if(tmpResourceAmount == 1.0) continue;
				
				tmpResourceCounter++;
				tmpBonusCounter++;
				
				if(tmpBonusCounter%2 == 1) {
					tmpTableRowsCounter++;
					
					tmpTableRow = outputDocument.createElement("tr");
					tmpTableRow.className = ResourcePanelTableRowClass;
					tmpTableRow.id = ResourcePanelNaturalResourcesTableRowID + tmpTableRowsCounter;
				}
				
				var tmpResourceNameCell = outputDocument.createElement("td");
				tmpResourceNameCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassName;
				tmpResourceNameCell.id = ResourcePanelNaturalResourcesTableCellID + "Name_" + tmpBonusCounter;
				
				var tmpSpanResourceName = outputDocument.createElement("span");
				tmpSpanResourceName.className = ResourcePanelSingleResourceNameClass;
				tmpSpanResourceName.id = ResourcePanelNaturalResourcesSingleResourceNameID + tmpBonusCounter;
				
				tmpSpanResourceName.innerHTML = tmpResourceName+":&nbsp;";
				
				var tmpResourceValueCell = outputDocument.createElement("td");
				tmpResourceValueCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassValue;
				tmpResourceValueCell.id = ResourcePanelNaturalResourcesTableCellID + "Value_" + tmpBonusCounter;
				
				var tmpSpanResourceValue = outputDocument.createElement("span");
				tmpSpanResourceValue.className = ResourcePanelSingleResourceValueClass;
				if(tmpResourceAmount > 1.0) tmpSpanResourceValue.className += " interfacePositiveText";
				else tmpSpanResourceValue.className += " interfaceNegativeText";
				tmpSpanResourceValue.id = ResourcePanelNaturalResourcesSingleResourceValueID + tmpBonusCounter;
				
				tmpSpanResourceValue.innerHTML = "x" + Number(tmpResourceAmount).toFixed(2);
				
				tmpResourceNameCell.append(tmpSpanResourceName);
				tmpResourceValueCell.append(tmpSpanResourceValue);
				
				tmpTableRow.append(tmpResourceNameCell);
				tmpTableRow.append(tmpResourceValueCell);
				
				if(tmpBonusCounter%2 == 0) {
					tmpTableElement.append(tmpTableRow);
				}
				else{
					var tmpResourceSpacingCell = outputDocument.createElement("td");
					tmpResourceSpacingCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassSpacing;
					tmpResourceSpacingCell.id = ResourcePanelNaturalResourcesTableCellID + "Space_" + tmpBonusCounter;	
					
					tmpTableRow.append(tmpResourceSpacingCell);
				}
			}
		}
		if(tmpBonusCounter%2 == 1) {
			var tmpResourceNameCell = outputDocument.createElement("td");
			tmpResourceNameCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassName;
			tmpResourceNameCell.id = ResourcePanelNaturalResourcesTableCellID + "Name_Empty";
			
			var tmpResourceValueCell = outputDocument.createElement("td");
			tmpResourceValueCell.className = ResourcePanelTableCellClass + " " + ResourcePanelTableCellClassValue;
			tmpResourceValueCell.id = ResourcePanelNaturalResourcesTableCellID + "Value_Empty";
			
			tmpTableRow.append(tmpResourceNameCell);
			tmpTableRow.append(tmpResourceValueCell);
			
			tmpTableElement.append(tmpTableRow);
		}
		
		tmpElement.append(tmpTableElement);
	}
}
function interfaceRefreshAsteroids(outputDocument) {
	if(SystemsCurrentSystem != -1) {
		var tmpSystem = SystemsArray[SystemsCurrentSystem];
		
		var tmpElement = outputDocument.getElementById(AsteroidsPanelID);
		tmpElement.innerHTML = "";
		
		var tmpTableElement = outputDocument.createElement("table");
		tmpTableElement.className = AsteroidsPanelTableClass;
		tmpTableElement.id = AsteroidsPanelTableID;
		
		var tmpResourceCounter = 0;
		var tmpTableRow;
		var tmpTableRowsCounter = 0;
		
		for(var i = 0; i < resourcesNames.length; i++) {
			if(resourcesDiscovered[i] && resourcesNaturalResources[i]) {
				var tmpResourceName = resourcesNames[i];
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
		}
	}
}


//interface menu navigation

var InterfaceChangeMenuTabCurrentID = InterfaceMainMenuID;
var InterfaceChangeMenuTabInstant = false;
var InterfaceChangeMenuTabFadeOutTime = 0.25;
var InterfaceChangeMenuTabFadeInDelay = 0.1;
var InterfaceChangeMenuTabFadeInTime = 0.25;
var InterfaceChangeMenuTabPathStack = [];
var InterfaceChangeMenuTabInProgress = false;

function interfaceEnterElement(outputDocument, destinationTabID, instantChange = InterfaceChangeMenuTabInstant) {
	if(!InterfaceChangeMenuTabInProgress) {
		if(InterfaceChangeMenuTabCurrentID == destinationTabID) return;
		InterfaceChangeMenuTabPathStack.push(InterfaceChangeMenuTabCurrentID);
		
		interfaceChangeMenuTab(outputDocument, destinationTabID);
	}
}
function interfaceReturnFromElement(outputDocument, destinationTabID, instantChange = InterfaceChangeMenuTabInstant) {
	if(!InterfaceChangeMenuTabInProgress) {
		interfaceChangeMenuTab(outputDocument, InterfaceChangeMenuTabPathStack.pop());
	}
}
function interfaceEnterMainMenu(outputDocument, destinationTabID, instantChange = InterfaceChangeMenuTabInstant) {
	if(!InterfaceChangeMenuTabInProgress) {
		InterfaceChangeMenuTabPathStack = [];
		interfaceChangeMenuTab(outputDocument, InterfaceMainMenuID);
	}
}
function interfaceChangeMenuTab(outputDocument, destinationTabID, instantChange = InterfaceChangeMenuTabInstant) {
	
	if(InterfaceChangeMenuTabCurrentID == "") {
		InterfaceChangeMenuTabCurrentID = InterfaceMainMenuID;
		
		var tmpElementsArray = outputDocument.getElementsByClassName("interfaceToggleableMenuElement");
		
		if(InterfaceChangeMenuTabInstant) {
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
	
	if(InterfaceChangeMenuTabInstant) {
		
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
	}
	
	interfaceRefreshInterface(outputDocument);
	
	return;
}


//bottom messages, pseudo-console output

var InterfaceBottomMessagesContainerID = "mainInterfaceBottomBarTextContainer";
var InterfaceBottomMessagesSingleMessageClass = "interfaceText interfaceDynamicText interfaceDimmedText interfaceBlockText";
var InterfaceBottomMessagesSingleMessageID = "mainInterfaceBottomTextMessage_";
var InterfaceBottomMessagesArray = [];
var InterfaceBottomMessagesClearOld = true;
var InterfaceBottomMessagesLifeTime = 10;
var InterfaceBottomMessagesKeepLast = true;
var InterfaceBottomMessagesDisplayTime = true;

function interfaceAddBottomMessage(outputDocument, messageText) {
	var tmpMessageTime = new Date().toLocaleTimeString();
	var tmpMessageExpire = Math.round(Date.now()/1000) + InterfaceBottomMessagesLifeTime;
	
	InterfaceBottomMessagesArray.push([messageText,tmpMessageTime,tmpMessageExpire]);
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


//planet overview menu navigation
//planet overview buttonsvar PlanetOverviewMenuID = "planetOverviewMenuWindow";

var InterfacePlanetOverviewCurrentTab = "";
var InterfacePlanetOverviewCurrentTabHeader = "planetOverviewResourcesPanelStorageButton";
var InterfacePlanetOverviewTabChanging = false;

function interfacePlanetOverviewChangeTab(outputDocument, destinationTabID, instantChange = InterfaceChangeMenuTabInstant) {
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
	console.log("Buildings on planet, yay. Wow.");
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
		if(InterfaceChangeMenuTabInstant) {
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
		if(InterfaceChangeMenuTabInstant) {
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
		if(InterfaceChangeMenuTabInstant) {		
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
		if(InterfaceChangeMenuTabInstant) {
			
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

function interfaceSystemOverviewDiscoveredPreviousSystem(outputDocument) {
	if(!InterfaceSystemOverviewSystemChanging) {
		SystemsCurrentSystem = systemsGetPreviousDiscoveredSystemIndex();
		if(InterfaceChangeMenuTabInstant) {
			interfaceRefreshSystemOverview(outputDocument);
		}
		else {
			interfaceSystemOverviewFadeSystemDetails(outputDocument);
		}
	}	
}
function interfaceSystemOverviewNetworkPreviousSystem(outputDocument) {
	if(systemsGetSystemById(SystemsCurrentSystem).network_id != (-1)) {
		if(!InterfaceSystemOverviewSystemChanging) {
			SystemsCurrentSystem = systemsGetPreviousNetworkSystemIndex();
			if(InterfaceChangeMenuTabInstant) {
				interfaceRefreshSystemOverview(outputDocument);
			}
			else {
				interfaceSystemOverviewFadeSystemDetails(outputDocument);
			}
		}
	}
}
function interfaceSystemOverviewDiscoveredNextSystem(outputDocument) {
	if(!InterfaceSystemOverviewSystemChanging) {
		SystemsCurrentSystem = systemsGetNextDiscoveredSystemIndex();
		if(InterfaceChangeMenuTabInstant) {		
			interfaceRefreshSystemOverview(outputDocument);
		}
		else {
			interfaceSystemOverviewFadeSystemDetails(outputDocument);
		}
	}	
}
function interfaceSystemOverviewNetworkNextSystem(outputDocument) {
	if(systemsGetSystemById(SystemsCurrentSystem).network_id != (-1)) {
		if(!InterfaceSystemOverviewSystemChanging) {
			SystemsCurrentSystem = systemGetNextNetworkPlanetIndex();
			if(InterfaceChangeMenuTabInstant) {
				interfaceRefreshSystemOverview(outputDocument);
			}
			else {
				interfaceSystemOverviewFadeSystemDetails(outputDocument);
			}
		}
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

function interfaceGalaxyMapEnterSystem(outputDocument){
	SystemsCurrentSystem = GalaxyMapSelectedSystem;
	
	interfaceEnterElement(outputDocument,SystemOverviewMenuID);
}
