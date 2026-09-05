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
	"RESOURCES/ICONS/Settings2.png",		//14
	
	"RESOURCES/ICONS/Return_Arrow2.png",
	
	"RESOURCES/ICONS/Settings2.png",
	"RESOURCES/ICONS/Square ON.png",
	"RESOURCES/ICONS/Square OFF.png",	//18
	
	"RESOURCES/MAIN_INTERFACE/Button_300px_v2_OFF.png",
	"RESOURCES/MAIN_INTERFACE/Button_300px_v2_ON.png",	//20
	
	"RESOURCES/ICONS/Arrow2_Down.png",
	"RESOURCES/ICONS/Arrow2_Up.png",
	"RESOURCES/ICONS/Arrow2_Left.png",
	"RESOURCES/ICONS/Arrow2_Right.png",	//24
	
	"RESOURCES/ICONS/Arrow_Down.png",
	"RESOURCES/ICONS/Arrow_Up.png",
	"RESOURCES/ICONS/Arrow_Left.png",
	"RESOURCES/ICONS/Arrow_Right.png",	//28
	
	"RESOURCES/ICONS/Pause OFF_Small.png",
	"RESOURCES/ICONS/Pause ON_Small.png",
	"RESOURCES/ICONS/Play OFF_Small.png",
	"RESOURCES/ICONS/Play ON_Small.png",	
	"RESOURCES/ICONS/FastForward OFF_Small.png",
	"RESOURCES/ICONS/FastForward ON_Small.png",	//34
	
	"RESOURCES/ICONS/Star.png",	//35
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow_Up.png", //36
	
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow3_Up.png", 
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow3_Right.png", 
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow3_Down.png", 
	"RESOURCES/MAIN_INTERFACE/Interface_Arrow3_Left.png", //40
	
	"RESOURCES/ICONS/Plus_Fancy.png",
	"RESOURCES/ICONS/Plus_Simple.png",
	"RESOURCES/ICONS/Minus_Fancy.png",
	"RESOURCES/ICONS/Minus_Simple.png", //44
	
	"RESOURCES/ICONS/Target_Fancy.png",
	"RESOURCES/ICONS/Target_Simple.png",
	"RESOURCES/ICONS/Crown_Fancy.png",
	"RESOURCES/ICONS/Crown_Simple.png", //48
	
	"RESOURCES/ICONS/Build.png",
	"RESOURCES/ICONS/Power.png", //50
	
	"RESOURCES/MAIN_INTERFACE/Button_100x100.png",
	"RESOURCES/MAIN_INTERFACE/Button_200x100.png",
	"RESOURCES/MAIN_INTERFACE/Button_300x100.png",
	"RESOURCES/MAIN_INTERFACE/Button_400x100.png",
	"RESOURCES/MAIN_INTERFACE/Button_500x100.png",	//55
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
	
	"mainMenuWindowBuildingsImage",	//40
	"planetBuildingMenuWindowHeaderImage",
	"planetBuildingInfoPanelHeaderPreviousPlanetImage",
	"planetBuildingInfoPanelHeaderNextPlanetImage",
	"planetBuildingInfoPanelHeaderPlanetEnergyIconImage", //44
	
	"interfaceButton1x1",	//45
	"interfaceButton2x1",
	"interfaceButton3x1",
	"interfaceButton4x1",
	"interfaceButton5x1",	//49
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
	outputDocument.getElementById("mainMenuWindowPlanetsButton").disabled = false;
	outputDocument.getElementById("mainMenuWindowPlanetsButton").onclick = function() { interfaceEnterElement(outputDocument,PlanetOverviewMenuID); };
	
	//topbar image in settings menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[18]).src = InterfaceMainMenuIconPaths[2];
	
	//planet navigation buttons
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[19]).src = InterfaceMainMenuIconPaths[23];
	outputDocument.getElementById("planetOverviewInfoPanelHeaderSystemPreviousPlanetButton").onclick = function() { interfacePlanetOverviewSystemPreviousPlanet(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[20]).src = InterfaceMainMenuIconPaths[24];
	outputDocument.getElementById("planetOverviewInfoPanelHeaderSystemNextPlanetButton").onclick = function() { interfacePlanetOverviewSystemNextPlanet(outputDocument); };
	
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[21]).src = InterfaceMainMenuIconPaths[27];
	outputDocument.getElementById("planetOverviewPlayerPreviousPlanetButton").onclick = function() { interfacePlanetOverviewPlayerPreviousPlanet(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[22]).src = InterfaceMainMenuIconPaths[28];
	outputDocument.getElementById("planetOverviewPlayerNextPlanetButton").onclick = function() { interfacePlanetOverviewPlayerNextPlanet(outputDocument); };
	
	//function buttons
	
	outputDocument.getElementById("planetOverviewPlanetBuildingsButton").onclick = 
		function() { interfacePlanetOverviewPlanetBuildings(outputDocument); };
	outputDocument.getElementById("planetOverviewGoToSystemButton").onclick = 
		function() { interfacePlanetOverviewGoToSystem(outputDocument); };
	outputDocument.getElementById("planetOverviewGoToHubButton").onclick = 
		function() { interfacePlanetOverviewGoToHub(outputDocument); };
	outputDocument.getElementById("planetOverviewPlanetRoutesButton").onclick = 
		function() { interfacePlanetOverviewPlanetRoutes(outputDocument); };
		
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
function interfaceInitBuildMenu(outputDocument){
	//build in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[40]).src = InterfaceMainMenuIconPaths[49];
	outputDocument.getElementById("mainMenuWindowBuildingsButton").disabled = false;
	outputDocument.getElementById("mainMenuWindowBuildingsButton").onclick = function() { interfaceEnterElement(outputDocument,BuildMenuID); };
	
	
	//topbar image in build menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[41]).src = InterfaceMainMenuIconPaths[49];
	
	//planet navigation buttons
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[42]).src = InterfaceMainMenuIconPaths[23];
	outputDocument.getElementById("planetBuildingInfoPanelHeaderPreviousPlanet").onclick = function() { interfacePlanetBuildingsPreviousPlanet(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[43]).src = InterfaceMainMenuIconPaths[24];
	outputDocument.getElementById("planetBuildingInfoPanelHeaderNextPlanet").onclick = function() { interfacePlanetBuildingsNextPlanet(outputDocument); };
	
	//main buttons
	
	outputDocument.getElementById("planetBuildingGoToPlanetButton").onclick = 
		function() { interfacePlanetBuildingGoToPlanet(outputDocument); };
	
	//left menu options
	
	outputDocument.getElementById("planetBuildingInfoPanelBulkBuildSettingInput").onchange = function(){ interfaceBuildMenuBulkBuyChanged(outputDocument); };
	outputDocument.getElementById("planetBuildingInfoPanelAutoAssignSettingInput").onchange = function(){ interfaceBuildMenuAutoReassignStaff(outputDocument); };
	outputDocument.getElementById("planetBuildingInfoPanelAutoAssignSettingInput").checked = BuildingsAutoAssignStaffEnabled;
	outputDocument.getElementById("planetBuildingInfoPanelBuyMaxSettingInput").onchange = function(){ interfaceBuildMenuTryBuyMax(outputDocument); };
	outputDocument.getElementById("planetBuildingInfoPanelBuyMaxSettingInput").checked = BuildingsTryBuyMaxEnabled;
	outputDocument.getElementById("planetBuildingInfoPanelDemolishLockSettingInput").onchange = function(){ interfaceBuildMenuDemolishLock(outputDocument); };
	outputDocument.getElementById("planetBuildingInfoPanelDemolishLockSettingInput").checked = BuildingsDemolishLockEnabled;
	
	//categories
	
	interfaceBuildMenuInitCategories(outputDocument);
	
	//TMP DEBUG BUTTON
	//outputDocument.getElementById("planetBuildingSingleBuildingUnfoldBuildingButton_0").onclick = function(){ interfaceFoldUnfoldBuilding(outputDocument, 0); };
	//outputDocument.getElementById("planetBuildingSingleBuildingFoldBuildingButton_0").onclick =  function(){ interfaceFoldUnfoldBuilding(outputDocument, 0); };
		
	interfaceInitBuildingsList(outputDocument);
	interfaceRefreshBuildMenu(outputDocument);
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

var BuildingMenuSingleBuildingInfoResourceTableContainerClass = "planetBuildingElementsContainer planetBuildingSingleBuildingResourcesContainer planetBuildingUnfoldedOnlyBuilding";
var BuildingMenuSingleBuildingInfoResourceTableClass = "interfaceTable planetBuildingResourceListTable";
var BuildingMenuSingleBuildingInfoResourceTableBodyClass = "interfaceTableBody";

var BuildingMenuSingleBuildingInfoResourceTableHeaderRowClass = "interfaceTableRow";
var BuildingMenuSingleBuildingInfoResourceTableHeaderCellClass = "interfaceTableCell planetBuildingResourceHeaderCell";
var BuildingMenuSingleBuildingInfoResourceTableHeaderCellTextClass = "interfaceText planetBuildingResourceHeader";

//TODO - variables for resources in table 

//TODO - variables for energy in table 

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

var BuildingMenuSingleBuildingSingleAlertClass = "planetBuildingAlertIcon";
var BuildingMenuSingleBuildingSingleAlertUnpoweredIdPrefix = "planetBuildingSingleBuildingAlertUnpowered_";
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
var BuildingMenuSingleBuildingSingleAlertUnrestSensitiveIssueIdPrefix = "planetBuildingSingleBuildingAlertUnrestSensitiveIssue_";

var BuildingMenuSingleBuildingSingleAlertIconStaffCyan = "RESOURCES/ICONS/Portrait.png";
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
var BuildingMenuSingleBuildingSingleAlertIconHazardRed = "RESOURCES/ICONS/Hazard_Red.png";

var InterfaceBuildingMenuBuildingsOnList = 0;

function interfaceInitBuildingsList(outputDocument){
	var buildingListContainer = outputDocument.getElementById(InterfaceBuildingMenuPlanetListContainerID);
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
					tmpBuildingInfoResourceTableContainer.className = BuildingMenuSingleBuildingInfoResourceTableContainerClass;
						var tmpBuildingInfoResourceTable =  outputDocument.createElement("table");
						tmpBuildingInfoResourceTable.className = BuildingMenuSingleBuildingInfoResourceTableClass;
							var tmpBuildingInfoResourceTableBody = outputDocument.createElement("tbody");
							tmpBuildingInfoResourceTableBody.className = BuildingMenuSingleBuildingInfoResourceTableBodyClass;
								var tmpBuildingInfoResourceTableHeaderRow = outputDocument.createElement("tr");
								tmpBuildingInfoResourceTableHeaderRow.className = BuildingMenuSingleBuildingInfoResourceTableHeaderRowClass;
									var tmpBuildingInfoResourceTableHeaderCell = outputDocument.createElement("td");
									tmpBuildingInfoResourceTableHeaderCell.className = BuildingMenuSingleBuildingInfoResourceTableHeaderCellClass;
									tmpBuildingInfoResourceTableHeaderCell.colSpan = 5;
										var tmpBuildingInfoResourceTableHeaderCellText = outputDocument.createElement("span");
										tmpBuildingInfoResourceTableHeaderCellText.className = BuildingMenuSingleBuildingInfoResourceTableHeaderCellTextClass;
										tmpBuildingInfoResourceTableHeaderCellText.innerHTML = "Production and consumption per day:";
								
										//RESOURCE ROWS FOR LOOP GOES HERE, TODO
										
										//ENERGY ROWS GO HERE, TODO
								
										tmpBuildingInfoResourceTableHeaderCell.append(tmpBuildingInfoResourceTableHeaderCellText);
									tmpBuildingInfoResourceTableHeaderRow.append(tmpBuildingInfoResourceTableHeaderCell);
								tmpBuildingInfoResourceTableBody.append(tmpBuildingInfoResourceTableHeaderRow);
							tmpBuildingInfoResourceTable.append(tmpBuildingInfoResourceTableBody);
						tmpBuildingInfoResourceTableContainer.append(tmpBuildingInfoResourceTable);
					tmpBuildingInfoContainer.append(tmpBuildingInfoHeaderContainer);
					tmpBuildingInfoContainer.append(tmpBuildingInfoResourceTableContainer);
					
				var tmpBuildingBuildDemolishContainer = outputDocument.createElement("div");
				tmpBuildingBuildDemolishContainer.className = BuildingMenuSingleBuildingBuildDemolishContainerClass;
					var tmpBuildingBuildButtonsContainer = outputDocument.createElement("div");
					tmpBuildingBuildButtonsContainer.className = BuildingMenuSingleBuildingBuildButtonsContainerClass;
						var tmpBuildingBuildButton1 = outputDocument.createElement("button");
						tmpBuildingBuildButton1.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingBuildButton1.onclick = function() {interfaceBuildBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 1);};
							var tmpBuildingBuildButton1Image = outputDocument.createElement("img");
							tmpBuildingBuildButton1Image.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingBuildButton1Image.src = BuildingMenuSingleBuildingBuildImagePath;
						
							tmpBuildingBuildButton1.append(tmpBuildingBuildButton1Image);
						var tmpBuildingBuildButton5 = outputDocument.createElement("button");
						tmpBuildingBuildButton5.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingBuildButton5.onclick = function() {interfaceBuildBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 5);};
							var tmpBuildingBuildButton5Image = outputDocument.createElement("img");
							tmpBuildingBuildButton5Image.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingBuildButton5Image.src = BuildingMenuSingleBuildingBuildImagePath;
							var tmpBuildingBuildButton5Subtext = outputDocument.createElement("span");
							tmpBuildingBuildButton5Subtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingBuildButton5Subtext.innerHTML = "5";
						
							tmpBuildingBuildButton5.append(tmpBuildingBuildButton5Image);
							tmpBuildingBuildButton5.append(tmpBuildingBuildButton5Subtext);
						var tmpBuildingBuildButton25 = outputDocument.createElement("button");
						tmpBuildingBuildButton25.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingBuildButton25.onclick = function() {interfaceBuildBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 25);};
							var tmpBuildingBuildButton25Image = outputDocument.createElement("img");
							tmpBuildingBuildButton25Image.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingBuildButton25Image.src = BuildingMenuSingleBuildingBuildImagePath;
							var tmpBuildingBuildButton25Subtext = outputDocument.createElement("span");
							tmpBuildingBuildButton25Subtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingBuildButton25Subtext.innerHTML = "25";
						
							tmpBuildingBuildButton25.append(tmpBuildingBuildButton25Image);
							tmpBuildingBuildButton25.append(tmpBuildingBuildButton25Subtext);
						
						tmpBuildingBuildButtonsContainer.append(tmpBuildingBuildButton1);
						tmpBuildingBuildButtonsContainer.append(tmpBuildingBuildButton5);
						tmpBuildingBuildButtonsContainer.append(tmpBuildingBuildButton25);
					
					var tmpBuildingDemolishButtonsContainer = outputDocument.createElement("div");
					tmpBuildingDemolishButtonsContainer.className = BuildingMenuSingleBuildingDemolishButtonsContainerClass;
						var tmpBuildingDemolishButton1 = outputDocument.createElement("button");
						tmpBuildingDemolishButton1.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDemolishButton1.onclick = function() {interfaceDemolishBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 1);};
							var tmpBuildingDemolishButton1Image = outputDocument.createElement("img");
							tmpBuildingDemolishButton1Image.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDemolishButton1Image.src = BuildingMenuSingleBuildingDemolishImagePath;
						
							tmpBuildingDemolishButton1.append(tmpBuildingDemolishButton1Image);
						var tmpBuildingDemolishButton5 = outputDocument.createElement("button");
						tmpBuildingDemolishButton5.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDemolishButton5.onclick = function() {interfaceDemolishBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 5);};
							var tmpBuildingDemolishButton5Image = outputDocument.createElement("img");
							tmpBuildingDemolishButton5Image.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDemolishButton5Image.src = BuildingMenuSingleBuildingDemolishImagePath;
							var tmpBuildingDemolishButton5Subtext = outputDocument.createElement("span");
							tmpBuildingDemolishButton5Subtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingDemolishButton5Subtext.innerHTML = "5";
						
							tmpBuildingDemolishButton5.append(tmpBuildingDemolishButton5Image);
							tmpBuildingDemolishButton5.append(tmpBuildingDemolishButton5Subtext);
						var tmpBuildingDemolishButton25 = outputDocument.createElement("button");
						tmpBuildingDemolishButton25.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDemolishButton25.onclick = function() {interfaceDemolishBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 25);};
							var tmpBuildingDemolishButton25Image = outputDocument.createElement("img");
							tmpBuildingDemolishButton25Image.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDemolishButton25Image.src = BuildingMenuSingleBuildingDemolishImagePath;
							var tmpBuildingDemolishButton25Subtext = outputDocument.createElement("span");
							tmpBuildingDemolishButton25Subtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingDemolishButton25Subtext.innerHTML = "25";
						
							tmpBuildingDemolishButton25.append(tmpBuildingDemolishButton25Image);
							tmpBuildingDemolishButton25.append(tmpBuildingDemolishButton25Subtext);
						
						tmpBuildingDemolishButtonsContainer.append(tmpBuildingDemolishButton1);
						tmpBuildingDemolishButtonsContainer.append(tmpBuildingDemolishButton5);
						tmpBuildingDemolishButtonsContainer.append(tmpBuildingDemolishButton25);
					
					var tmpBuildingBuildDemolishButtonsContainer = outputDocument.createElement("div");
					tmpBuildingBuildDemolishButtonsContainer.className = BuildingMenuSingleBuildingBuildDemolishButtonsContainerClass;
						var tmpBuildingBuildCustomAmountButton = outputDocument.createElement("button");
						tmpBuildingBuildCustomAmountButton.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingBuildCustomAmountButton.onclick = function() {interfaceBuildBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex);};
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
						var tmpBuildingDemolishCustomAmountButton = outputDocument.createElement("button");
						tmpBuildingDemolishCustomAmountButton.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDemolishCustomAmountButton.onclick = function() {interfaceDemolishBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex);};
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
						var tmpBuildingUpgradeButton1 = outputDocument.createElement("button");
						tmpBuildingUpgradeButton1.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingUpgradeButton1.onclick = function() {interfaceUpgradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 1);};
							var tmpBuildingUpgradeButton1Image = outputDocument.createElement("img");
							tmpBuildingUpgradeButton1Image.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingUpgradeButton1Image.src = BuildingMenuSingleBuildingUpgradeImagePath;
						
							tmpBuildingUpgradeButton1.append(tmpBuildingUpgradeButton1Image);
						var tmpBuildingUpgradeButton5 = outputDocument.createElement("button");
						tmpBuildingUpgradeButton5.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingUpgradeButton5.onclick = function() {interfaceUpgradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 5);};
							var tmpBuildingUpgradeButton5Image = outputDocument.createElement("img");
							tmpBuildingUpgradeButton5Image.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingUpgradeButton5Image.src = BuildingMenuSingleBuildingUpgradeImagePath;
							var tmpBuildingUpgradeButton5Subtext = outputDocument.createElement("span");
							tmpBuildingUpgradeButton5Subtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingUpgradeButton5Subtext.innerHTML = "5";
						
							tmpBuildingUpgradeButton5.append(tmpBuildingUpgradeButton5Image);
							tmpBuildingUpgradeButton5.append(tmpBuildingUpgradeButton5Subtext);
						var tmpBuildingUpgradeButton25 = outputDocument.createElement("button");
						tmpBuildingUpgradeButton25.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingUpgradeButton25.onclick = function() {interfaceUpgradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 25);};
							var tmpBuildingUpgradeButton25Image = outputDocument.createElement("img");
							tmpBuildingUpgradeButton25Image.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingUpgradeButton25Image.src = BuildingMenuSingleBuildingUpgradeImagePath;
							var tmpBuildingUpgradeButton25Subtext = outputDocument.createElement("span");
							tmpBuildingUpgradeButton25Subtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingUpgradeButton25Subtext.innerHTML = "25";
						
							tmpBuildingUpgradeButton25.append(tmpBuildingUpgradeButton25Image);
							tmpBuildingUpgradeButton25.append(tmpBuildingUpgradeButton25Subtext);
						
						tmpBuildingUpgradeButtonsContainer.append(tmpBuildingUpgradeButton1);
						tmpBuildingUpgradeButtonsContainer.append(tmpBuildingUpgradeButton5);
						tmpBuildingUpgradeButtonsContainer.append(tmpBuildingUpgradeButton25);
					var tmpBuildingDowngradeButtonsContainer = outputDocument.createElement("div");
					tmpBuildingDowngradeButtonsContainer.className = BuildingMenuSingleBuildingDowngradeButtonsContainerClass;
						var tmpBuildingDowngradeButton1 = outputDocument.createElement("button");
						tmpBuildingDowngradeButton1.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDowngradeButton1.onclick = function() {interfaceDowngradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 1);};
							var tmpBuildingDowngradeButton1Image = outputDocument.createElement("img");
							tmpBuildingDowngradeButton1Image.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDowngradeButton1Image.src = BuildingMenuSingleBuildingDowngradeImagePath;
						
							tmpBuildingDowngradeButton1.append(tmpBuildingDowngradeButton1Image);
						var tmpBuildingDowngradeButton5 = outputDocument.createElement("button");
						tmpBuildingDowngradeButton5.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDowngradeButton5.onclick = function() {interfaceDowngradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 5);};
							var tmpBuildingDowngradeButton5Image = outputDocument.createElement("img");
							tmpBuildingDowngradeButton5Image.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDowngradeButton5Image.src = BuildingMenuSingleBuildingDowngradeImagePath;
							var tmpBuildingDowngradeButton5Subtext = outputDocument.createElement("span");
							tmpBuildingDowngradeButton5Subtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingDowngradeButton5Subtext.innerHTML = "5";
						
							tmpBuildingDowngradeButton5.append(tmpBuildingDowngradeButton5Image);
							tmpBuildingDowngradeButton5.append(tmpBuildingDowngradeButton5Subtext);
						var tmpBuildingDowngradeButton25 = outputDocument.createElement("button");
						tmpBuildingDowngradeButton25.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDowngradeButton25.onclick = function() {interfaceDowngradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex, 25);};
							var tmpBuildingDowngradeButton25Image = outputDocument.createElement("img");
							tmpBuildingDowngradeButton25Image.className = BuildingMenuSingleBuildingSingleButtonImageClass;
							tmpBuildingDowngradeButton25Image.src = BuildingMenuSingleBuildingDowngradeImagePath;
							var tmpBuildingDowngradeButton25Subtext = outputDocument.createElement("span");
							tmpBuildingDowngradeButton25Subtext.className = BuildingMenuSingleBuildingSingleButtonSubtextClass;
							tmpBuildingDowngradeButton25Subtext.innerHTML = "25";
						
							tmpBuildingDowngradeButton25.append(tmpBuildingDowngradeButton25Image);
							tmpBuildingDowngradeButton25.append(tmpBuildingDowngradeButton25Subtext);
						
						tmpBuildingDowngradeButtonsContainer.append(tmpBuildingDowngradeButton1);
						tmpBuildingDowngradeButtonsContainer.append(tmpBuildingDowngradeButton5);
						tmpBuildingDowngradeButtonsContainer.append(tmpBuildingDowngradeButton25);
						
					var tmpBuildingUpgradeDowngradeButtonsContainer = outputDocument.createElement("div");
					tmpBuildingUpgradeDowngradeButtonsContainer.className = BuildingMenuSingleBuildingUpgradeDowngradeButtonsContainerClass;
					
						var tmpBuildingUpgradeCustomAmountButton = outputDocument.createElement("button");
						tmpBuildingUpgradeCustomAmountButton.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingUpgradeCustomAmountButton.onclick = function() {interfaceUpgradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex);};
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
						var tmpBuildingDowngradeCustomAmountButton = outputDocument.createElement("button");
						tmpBuildingDowngradeCustomAmountButton.className = BuildingMenuSingleBuildingSingleButtonClass;
						tmpBuildingDowngradeCustomAmountButton.onclick = function() {interfaceDowngradeBuilding(outputDocument, tmpBuilding.index, tmpBuilding.blueprintIndex);};
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
											tmpBuildingUnfoldedOperatorsSingleEfficiencyPowerContainerImage.src = BuildingMenuSingleBuildingSingleAlertIconEnergyCyan;
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
											tmpBuildingUnfoldedOperatorsSingleEfficiencyStaffContainerImage.src = BuildingMenuSingleBuildingSingleAlertIconStaffCyan;
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
											tmpBuildingUnfoldedOperatorsSingleEfficiencyHazardContainerImage.src = BuildingMenuSingleBuildingSingleAlertIconHazardCyan;
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
											tmpBuildingUnfoldedOperatorsSingleEfficiencyDiscontentContainerImage.src = BuildingMenuSingleBuildingSingleAlertIconUnrestCyan;
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
											tmpBuildingUnfoldedOperatorsSingleEfficiencyMineralsContainerImage.src = BuildingMenuSingleBuildingSingleAlertIconMineralsCyan;
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
					
						var tmpBuildingControlAlertsUnpowered = outputDocument.createElement("img");
						tmpBuildingControlAlertsUnpowered.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsUnpowered.id = BuildingMenuSingleBuildingSingleAlertUnpoweredIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsUnpowered.src = BuildingMenuSingleBuildingSingleAlertIconTurnedOffYellow;
						tmpBuildingControlAlertsUnpowered.title = "This building is currently turned off and not functioning.";
						
						var tmpBuildingControlAlertsPowerCritical = outputDocument.createElement("img");
						var tmpBuildingControlAlertsPowerInsufficient = outputDocument.createElement("img");
						var tmpBuildingControlAlertsPowerConsumedAndGenerated = outputDocument.createElement("img");
						tmpBuildingControlAlertsPowerCritical.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsPowerCritical.id = BuildingMenuSingleBuildingSingleAlertPowerCriticalIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsPowerCritical.src = BuildingMenuSingleBuildingSingleAlertIconEnergyRed;
						tmpBuildingControlAlertsPowerCritical.title = "Not enough power for this building to start working even on low efficiency.";
						tmpBuildingControlAlertsPowerInsufficient.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsPowerInsufficient.id = BuildingMenuSingleBuildingSingleAlertPowerInsufficientIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsPowerInsufficient.src = BuildingMenuSingleBuildingSingleAlertIconEnergyYellow;
						tmpBuildingControlAlertsPowerInsufficient.title = "Insufficient power is reducing this building's efficiency.";
						tmpBuildingControlAlertsPowerConsumedAndGenerated.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsPowerConsumedAndGenerated.id = BuildingMenuSingleBuildingSingleAlertPowerConsumedAndGeneratedIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsPowerConsumedAndGenerated.src = BuildingMenuSingleBuildingSingleAlertIconEnergyGreen;
						tmpBuildingControlAlertsPowerConsumedAndGenerated.title = "This building requires power to start generating (more) power.";
						
						var tmpBuildingControlAlertsPowerSensitive = outputDocument.createElement("img");
						var tmpBuildingControlAlertsPowerSensitiveIssue = outputDocument.createElement("img");
						tmpBuildingControlAlertsPowerSensitive.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsPowerSensitive.id = BuildingMenuSingleBuildingSingleAlertPowerSensitiveIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsPowerSensitive.src = BuildingMenuSingleBuildingSingleAlertIconEnergySensitiveCyan;
						tmpBuildingControlAlertsPowerSensitive.title = "This building requires uninterrupted power supply to function.";
						
						tmpBuildingControlAlertsPowerSensitiveIssue.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsPowerSensitiveIssue.id = BuildingMenuSingleBuildingSingleAlertPowerSensitiveIssueIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsPowerSensitiveIssue.src = BuildingMenuSingleBuildingSingleAlertIconEnergySensitiveRed;
						tmpBuildingControlAlertsPowerSensitiveIssue.title = "Unstable power supply prevents this building from working.";
																				
						var tmpBuildingControlAlertsOverstaffed = outputDocument.createElement("img");
						var tmpBuildingControlAlertsUnderstaffed = outputDocument.createElement("img");
						var tmpBuildingControlAlertsNoStaff = outputDocument.createElement("img");
						var tmpBuildingControlAlertsNoStaffBonus = outputDocument.createElement("img");
						tmpBuildingControlAlertsOverstaffed.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsOverstaffed.id = BuildingMenuSingleBuildingSingleAlertOverstaffedIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsOverstaffed.src = BuildingMenuSingleBuildingSingleAlertIconStaffGreen;
						tmpBuildingControlAlertsOverstaffed.title = "This building is running with extra efficiency due to extra staff being present.";
						tmpBuildingControlAlertsUnderstaffed.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsUnderstaffed.id = BuildingMenuSingleBuildingSingleAlertUnderstaffedIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsUnderstaffed.src = BuildingMenuSingleBuildingSingleAlertIconStaffYellow;
						tmpBuildingControlAlertsUnderstaffed.title = "Insufficient staff is reducing this building's efficiency.";
						tmpBuildingControlAlertsNoStaff.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsNoStaff.id = BuildingMenuSingleBuildingSingleAlertNoStaffIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsNoStaff.src = BuildingMenuSingleBuildingSingleAlertIconStaffRed;
						tmpBuildingControlAlertsNoStaff.title = "This building is disabled due to lack of staff.";
						tmpBuildingControlAlertsNoStaffBonus.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsNoStaffBonus.id = BuildingMenuSingleBuildingSingleAlertNoStaffBonusIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsNoStaffBonus.src = BuildingMenuSingleBuildingSingleAlertIconStaffCyan;
						tmpBuildingControlAlertsNoStaffBonus.title = "This building is receiving no additional efficiency from extra staff.";
						
						var tmpBuildingControlAlertsStaffMandatory = outputDocument.createElement("img");
						var tmpBuildingControlAlertsStaffMandatoryIssue = outputDocument.createElement("img");
						var tmpBuildingControlAlertsStaffNotNeededIssue = outputDocument.createElement("img");
						tmpBuildingControlAlertsStaffMandatory.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsStaffMandatory.id = BuildingMenuSingleBuildingSingleAlertStaffMandatoryIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsStaffMandatory.src = BuildingMenuSingleBuildingSingleAlertIconStaffMandatoryCyan;
						tmpBuildingControlAlertsStaffMandatory.title = "This building only functions if fully staffed.";
						tmpBuildingControlAlertsStaffMandatoryIssue.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsStaffMandatoryIssue.id = BuildingMenuSingleBuildingSingleAlertStaffMandatoryIssueIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsStaffMandatoryIssue.src = BuildingMenuSingleBuildingSingleAlertIconStaffMandatoryRed;
						tmpBuildingControlAlertsStaffMandatoryIssue.title = "Insufficient staff prevents this building from working.";
						tmpBuildingControlAlertsStaffNotNeededIssue.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsStaffNotNeededIssue.id = BuildingMenuSingleBuildingSingleAlertStaffNotNeededIssueIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsStaffNotNeededIssue.src = BuildingMenuSingleBuildingSingleAlertIconStaffMandatoryGreen;
						tmpBuildingControlAlertsStaffNotNeededIssue.title = "Staff is not needed for this building.";
						
						var tmpBuildingControlAlertsHazardUnaffected = outputDocument.createElement("img");
						var tmpBuildingControlAlertsHazard = outputDocument.createElement("img");
						var tmpBuildingControlAlertsHazardIssue = outputDocument.createElement("img");
						var tmpBuildingControlAlertsHazardCritical = outputDocument.createElement("img");
						tmpBuildingControlAlertsHazardUnaffected.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsHazardUnaffected.id = BuildingMenuSingleBuildingSingleAlertHazardUnaffectedIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsHazardUnaffected.src = BuildingMenuSingleBuildingSingleAlertIconHazardGreen;
						tmpBuildingControlAlertsHazardUnaffected.title = "This building is not affected by hazardous conditions.";
						tmpBuildingControlAlertsHazard.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsHazard.id = BuildingMenuSingleBuildingSingleAlertHazardIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsHazard.src = BuildingMenuSingleBuildingSingleAlertIconHazardCyan;
						tmpBuildingControlAlertsHazard.title = "This building is sensitive to hazardous conditions.";
						tmpBuildingControlAlertsHazardIssue.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsHazardIssue.id = BuildingMenuSingleBuildingSingleAlertHazardIssueIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsHazardIssue.src = BuildingMenuSingleBuildingSingleAlertIconHazardYellow;
						tmpBuildingControlAlertsHazardIssue.title = "Hazardous environment reduces this building's efficiency.";
						tmpBuildingControlAlertsHazardCritical.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsHazardCritical.id = BuildingMenuSingleBuildingSingleAlertHazardCriticalIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsHazardCritical.src = BuildingMenuSingleBuildingSingleAlertIconHazardRed;
						tmpBuildingControlAlertsHazardCritical.title = "Environment is too hazardous for this building to function.";
					
						var tmpBuildingControlAlertsMineralsRequired = outputDocument.createElement("img");				//cyan
						var tmpBuildingControlAlertsMineralsRequiredDifferent = outputDocument.createElement("img");	//green
						var tmpBuildingControlAlertsMineralsOutputLimited = outputDocument.createElement("img");	//yellow
						var tmpBuildingControlAlertsMineralsOutputMissing = outputDocument.createElement("img");	//red
						var tmpBuildingControlAlertsMineralsRequiredOvermined = outputDocument.createElement("img");	//critical yellow
						var tmpBuildingControlAlertsMineralsRequiredMissing = outputDocument.createElement("img");	//critical red
						tmpBuildingControlAlertsMineralsRequired.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsMineralsRequired.id = BuildingMenuSingleBuildingSingleAlertMineralsRequiredIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsMineralsRequired.src = BuildingMenuSingleBuildingSingleAlertIconMineralsCyan;
						tmpBuildingControlAlertsMineralsRequired.title = "This building requires resource deposits to be present on planet.";
						tmpBuildingControlAlertsMineralsRequiredDifferent.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsMineralsRequiredDifferent.id = BuildingMenuSingleBuildingSingleAlertMineralsRequiredDifferentIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsMineralsRequiredDifferent.src = BuildingMenuSingleBuildingSingleAlertIconMineralsGreen;
						tmpBuildingControlAlertsMineralsRequiredDifferent.title = "Required resource deposits are different from expected output.";
						tmpBuildingControlAlertsMineralsOutputLimited.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsMineralsOutputLimited.id = BuildingMenuSingleBuildingSingleAlertMineralsOutputLimitedIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsMineralsOutputLimited.src = BuildingMenuSingleBuildingSingleAlertIconMineralsYellow;
						tmpBuildingControlAlertsMineralsOutputLimited.title = "Some of this building's output resources are completely missing and cannot be extracted here.";
						tmpBuildingControlAlertsMineralsOutputMissing.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsMineralsOutputMissing.id = BuildingMenuSingleBuildingSingleAlertMineralsOutputMissingIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsMineralsOutputMissing.src = BuildingMenuSingleBuildingSingleAlertIconMineralsRed;
						tmpBuildingControlAlertsMineralsOutputMissing.title = "There are no resources present that this building is expected to extract.";
						tmpBuildingControlAlertsMineralsRequiredOvermined.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsMineralsRequiredOvermined.id = BuildingMenuSingleBuildingSingleAlertMineralsInputInsufficientIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsMineralsRequiredOvermined.src = BuildingMenuSingleBuildingSingleAlertIconMineralsIssueYellow;
						tmpBuildingControlAlertsMineralsRequiredOvermined.title = "Resource deposits are insufficient for amount of buildings of this type. Efficiency reduced.";
						tmpBuildingControlAlertsMineralsRequiredMissing.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsMineralsRequiredMissing.id = BuildingMenuSingleBuildingSingleAlertMineralsInputMissingIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsMineralsRequiredMissing.src = BuildingMenuSingleBuildingSingleAlertIconMineralsIssueRed;
						tmpBuildingControlAlertsMineralsRequiredMissing.title = "Required resource deposits for this building are missing ";
						
						var tmpBuildingControlAlertsUnrestUnaffected = outputDocument.createElement("img");
						var tmpBuildingControlAlertsUnrestIssue = outputDocument.createElement("img");
						var tmpBuildingControlAlertsUnrestCritical = outputDocument.createElement("img");
						tmpBuildingControlAlertsUnrestUnaffected.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsUnrestUnaffected.id = BuildingMenuSingleBuildingSingleAlertUnrestUnaffectedIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsUnrestUnaffected.src = BuildingMenuSingleBuildingSingleAlertIconUnrestGreen;
						tmpBuildingControlAlertsUnrestUnaffected.title = "This building is not affected by unrest and discontent."; 
						tmpBuildingControlAlertsUnrestIssue.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsUnrestIssue.id = BuildingMenuSingleBuildingSingleAlertUnrestIssueIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsUnrestIssue.src = BuildingMenuSingleBuildingSingleAlertIconUnrestYellow;
						tmpBuildingControlAlertsUnrestIssue.title = "Unrest and discontent are reducing this building's efficiency.";
						tmpBuildingControlAlertsUnrestCritical.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsUnrestCritical.id = BuildingMenuSingleBuildingSingleAlertUnrestCriticalIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsUnrestCritical.src = BuildingMenuSingleBuildingSingleAlertIconUnrestRed;
						tmpBuildingControlAlertsUnrestCritical.title = "Unrest and discontent are making it too dangerous for this building to function.";
						
						var tmpBuildingControlAlertsUnrestSensitive = outputDocument.createElement("img");
						var tmpBuildingControlAlertsUnrestSensitiveIssue = outputDocument.createElement("img");
						tmpBuildingControlAlertsUnrestSensitive.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsUnrestSensitive.id = BuildingMenuSingleBuildingSingleAlertUnrestSensitiveIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsUnrestSensitive.src = BuildingMenuSingleBuildingSingleAlertIconUnrestSensitiveCyan;
						tmpBuildingControlAlertsUnrestSensitive.title = "This building can only work at secure and safe places.";
						tmpBuildingControlAlertsUnrestSensitiveIssue.className = BuildingMenuSingleBuildingSingleAlertClass;
						tmpBuildingControlAlertsUnrestSensitiveIssue.id = BuildingMenuSingleBuildingSingleAlertUnrestSensitiveIssueIdPrefix + tmpBuilding.index;
						tmpBuildingControlAlertsUnrestSensitiveIssue.src = BuildingMenuSingleBuildingSingleAlertIconUnrestSensitiveRed;
						tmpBuildingControlAlertsUnrestSensitiveIssue.title = "Unrest and discontent presence prevents this building from working.";
						
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsUnpowered);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsPowerCritical);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsPowerInsufficient);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsPowerConsumedAndGenerated);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsPowerSensitive);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsPowerSensitiveIssue);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsOverstaffed);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsUnderstaffed);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsNoStaff);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsNoStaffBonus);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsStaffMandatory);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsStaffMandatoryIssue);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsStaffNotNeededIssue);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsHazard);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsHazardIssue);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsHazardCritical);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsHazardUnaffected);
						
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsMineralsRequired);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsMineralsRequiredDifferent);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsMineralsOutputLimited);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsMineralsOutputMissing);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsMineralsRequiredOvermined);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsMineralsRequiredMissing);
						
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsUnrestUnaffected);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsUnrestIssue);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsUnrestCritical);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsUnrestSensitive);
						tmpBuildingControlAlertsContainer.append(tmpBuildingControlAlertsUnrestSensitiveIssue);
					
					tmpBuildingControlContainer.append(tmpBuildingFoldedOperatorsContainer);
					tmpBuildingControlContainer.append(tmpBuildingFoldedSideButtonsContainer);
					tmpBuildingControlContainer.append(tmpBuildingUnfoldedOperatorsContainer);
					tmpBuildingControlContainer.append(tmpBuildingUnfoldedSideButtonsContainer);
					tmpBuildingControlContainer.append(tmpBuildingControlAlertsContainer);
				
				tmpBuildingContainer.append(tmpBuildingInfoContainer);
				tmpBuildingContainer.append(tmpBuildingBuildDemolishContainer);
				tmpBuildingContainer.append(tmpBuildingUpgradeDowngradeContainer);
				tmpBuildingContainer.append(tmpBuildingControlContainer);
			tmpBuildingElement.append(tmpBuildingContainer);
		buildingListContainer.append(tmpBuildingElement);
		
		//count enabled buildings
		InterfaceBuildingMenuBuildingsOnList++;
		
		interfaceInitSingleBuildingAlerts(outputDocument, tmpBuilding.index);
		interfaceRefreshBuildingAlerts(outputDocument, tmpBuilding.index);
	}
	//console.log(InterfaceBuildingMenuBuildingsOnList);

	if(InterfaceBuildingMenuBuildingsOnList == 0) outputDocument.getElementById("planetBuildingMenuNoBuildingsAvailable").style.display = "block";
	else outputDocument.getElementById("planetBuildingMenuNoBuildingsAvailable").style.display = "none";
}

function interfaceInitSingleBuildingAlerts(outputDocument, buildingIndex){
	let tmpPlanet = PlanetsArray[PlanetsCurrentPlanet];
	let tmpBuilding = tmpPlanet.buildings[buildingIndex];
	let tmpBuildingBlueprint = BuildingsArray[tmpBuilding.blueprintIndex];
	
	let tmpBuildingControlAlertsUnpowered = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertUnpoweredIdPrefix + buildingIndex);
	
	let tmpBuildingControlAlertsPowerSensitive = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertPowerSensitiveIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsPowerSensitiveIssue = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertPowerSensitiveIssueIdPrefix + buildingIndex);
	
	let tmpBuildingControlAlertsPowerCritical = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertPowerCriticalIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsPowerInsufficient = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertPowerInsufficientIdPrefix + buildingIndex);
	
	let tmpBuildingControlAlertsPowerConsumedAndGenerated = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertPowerConsumedAndGeneratedIdPrefix + buildingIndex);
	
	let tmpBuildingControlAlertsStaffMandatory = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertStaffMandatoryIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsStaffMandatoryIssue = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertStaffMandatoryIssueIdPrefix + buildingIndex);
	
	let tmpBuildingControlAlertsStaffNotNeededIssue = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertStaffNotNeededIssueIdPrefix + buildingIndex);
	
	let tmpBuildingControlAlertsOverstaffed = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertOverstaffedIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsUnderstaffed = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertUnderstaffedIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsNoStaffBonus = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertNoStaffBonusIdPrefix + buildingIndex);
	
	let tmpBuildingControlAlertsNoStaff = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertNoStaffIdPrefix + buildingIndex);
	
	let tmpBuildingControlAlertsHazardSensitive = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertHazardIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsHazardIssue = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertHazardIssueIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsHazardCritical = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertHazardCriticalIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsHazardUnaffected = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertHazardUnaffectedIdPrefix + buildingIndex);
	
	let tmpBuildingControlAlertsMineralsRequired = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertMineralsRequiredIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsMineralsRequiredDifferent = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertMineralsRequiredDifferentIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsMineralsOutputLimited = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertMineralsOutputLimitedIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsMineralsOutputMissing = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertMineralsOutputMissingIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsMineralsInputInsufficient = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertMineralsInputInsufficientIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsMineralsInputMissing = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertMineralsInputMissingIdPrefix + buildingIndex);
	
	let tmpBuildingControlAlertsUnrestSensitive = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertUnrestSensitiveIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsUnrestSensitiveIssue = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertUnrestSensitiveIssueIdPrefix + buildingIndex);	
	
	let tmpBuildingControlAlertsUnrestUnaffected = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertUnrestUnaffectedIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsUnrestIssue = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertUnrestIssueIdPrefix + buildingIndex);
	let tmpBuildingControlAlertsUnrestCritical = outputDocument.getElementById(BuildingMenuSingleBuildingSingleAlertUnrestCriticalIdPrefix + buildingIndex);
	
	
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
	var tmpInputValue = outputDocument.getElementById("planetBuildingInfoPanelBulkBuildSettingInput").value;
	if(!buildingsTrySetBulkBuyInputs(outputDocument, tmpInputValue)){
		//if failed to set, reset value to 1
		outputDocument.getElementById("planetBuildingInfoPanelBulkBuildSettingInput").value = 1;
	}
	else if(tmpInputValue < 1){
		//if set to negative, set expected minimum (1)
		outputDocument.getElementById("planetBuildingInfoPanelBulkBuildSettingInput").value = 1;
	}
	else{
		//otherwise round value down if it isn't integral.
		outputDocument.getElementById("planetBuildingInfoPanelBulkBuildSettingInput").value = Math.floor(tmpInputValue);
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
	
	//buttons on/off
	outputDocument.getElementById("settingsMenuOptionAutosaveCheckbox").checked = SettingSaveAutosave;
	outputDocument.getElementById("settingsMenuOptionAnimatedMenuTabsChangeCheckbox").checked = SettingsInstantMenuNavigation;
	outputDocument.getElementById("settingsMenuOptionSkipIntroCheckbox").checked = ProgressIntroDisplayedOrSkipped;
	outputDocument.getElementById("settingsMenuOptionGalaxyMapParallaxCheckbox").checked = GalaxyMapPerspectiveEnabled;
	
	//other
	
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[30]).src = InterfaceMainMenuIconPaths[35];
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
			interfaceInitBuildingsList(outputDocument);
		}
		else{
			outputDocument.getElementById("planetBuildingMenuObjectNotOwned").style.display = "block";
			outputDocument.getElementById("planetBuildingMenuNoBuildingsAvailable").style.display = "none";
			outputDocument.getElementById(InterfaceBuildingMenuPlanetListContainerID).style.display = "none";
		}
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
			interfaceRefreshBuildingAlerts(outputDocument, i);
			
			InterfaceBuildingMenuBuildingsOnList++;
		}
			
		
		//
	}
	//display message if no buildings got listed with current category or at player's progress
	if(InterfaceBuildingMenuBuildingsOnList == 0) outputDocument.getElementById("planetBuildingMenuNoBuildingsAvailable").style.display = "block";
	else outputDocument.getElementById("planetBuildingMenuNoBuildingsAvailable").style.display = "none";
}

function interfaceRefreshBuildingAlerts(outputDocument, buildingIndex){
	let tmpBuilding = PlanetsArray[PlanetsCurrentPlanet].buildings[buildingIndex];
	let tmpBuildingBlueprint = BuildingsArray[tmpBuilding.blueprintIndex];
	
	//
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
				
				tmpSpanResourceValue.innerHTML = Number(tmpResourceAmount).toFixed(1);
				
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
var InterfacePlanetOverviewCurrentTabHeader = "planetOverviewResourcesPanelStorageButton";
var InterfacePlanetOverviewTabChanging = false;

function interfacePlanetOverviewChangeTab(outputDocument, destinationTabID, instantChange = SettingsInstantMenuNavigation) {
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
