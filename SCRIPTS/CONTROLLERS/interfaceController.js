function connectionTest_interface(outputDocument){
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
var SettingsMenuID = "settingsMenuWindow";

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
	"RESOURCES/MAIN_INTERFACE/ICONS/Settings.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Home.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Settings.png",		//14
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Return_Arrow.png",
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Settings.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Square ON.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Square OFF.png",	//18
	
	"RESOURCES/MAIN_INTERFACE/Button_300px_v2_OFF.png",
	"RESOURCES/MAIN_INTERFACE/Button_300px_v2_ON.png",	//20
	
	"RESOURCES/MAIN_INTERFACE/ICONS/Arrow_Down.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Arrow_Up.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Arrow_Left.png",
	"RESOURCES/MAIN_INTERFACE/ICONS/Arrow_Right.png",
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
	"planetOverviewInfoPanelHeaderPreviousPlanetImage",
	"planetOverviewInfoPanelHeaderNextPlanetImage", //20
];


//interface refresh and init

var InterfaceAutoRefreshMainMenu = false;
var InterfaceAutoRefreshSeconds = 5.0;
var InterfaceMainMenuDebugAccess = false;
var InterfaceButtonsTurnOffClickEffectTimer = 0.20;


function interfaceRefreshMenuButtons(outputDocument){
	
	interfaceInitMainInterface(outputDocument);
	
	if(InterfaceMainMenuDebugAccess){
		
		//main menu images
		//planets
		interfaceInitPlanetOverviewMenu(outputDocument);
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
		interfaceInitSettingsMenu(outputDocument);
	}
	else{
		//planets
		if(SaveUnlockedMainMenuTabs[0]) interfaceInitPlanetOverviewMenu(outputDocument);
		//systems
		if(SaveUnlockedMainMenuTabs[1]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[3]).src = InterfaceMainMenuIconPaths[3];
		//galaxy
		if(SaveUnlockedMainMenuTabs[2]) outputDocument.getElementById(InterfaceMainMenuButtonImagesID[4]).src = InterfaceMainMenuIconPaths[4];
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

	if(InterfaceAutoRefreshMainMenu){
		setTimeout(() => {
			interfaceRefreshMenuButtons(outputDocument);
			},1000*InterfaceAutoRefreshSeconds);
	}
}
function interfaceInitMainInterface(outputDocument){
		
	//home
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[13]).src = InterfaceMainMenuIconPaths[13];
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[13]).onclick = function() { interfaceEnterMainMenu(outputDocument,InterfaceMainMenuID); };
	
	//mini settings
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[14]).src = InterfaceMainMenuIconPaths[14];
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[14]).onclick = function() { interfaceEnterElement(outputDocument,SettingsMenuID); };
	
	//all returns
	var tmpArray = outputDocument.getElementsByClassName(InterfaceMainMenuButtonImagesID[15]);
	for(var i = 0; i < tmpArray.length; i++){
		tmpArray[i].src = InterfaceMainMenuIconPaths[15];
		tmpArray[i].onclick = function() { interfaceReturnFromElement(outputDocument,InterfaceMainMenuID); };
	}
	
	//300px buttons if present
	var tmpArray = outputDocument.getElementsByClassName(InterfaceMainMenuButtonImagesID[17]);
	for(var i = 0; i < tmpArray.length; i++){
		tmpArray[i].src = InterfaceMainMenuIconPaths[20];
	}
}
function interfaceInitPlanetOverviewMenu(outputDocument){
	//planets in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[2]).src = InterfaceMainMenuIconPaths[2];
	outputDocument.getElementById("mainMenuWindowPlanetsButton").onclick = function() { interfaceEnterElement(outputDocument,PlanetOverviewMenuID); };
	
	//topbar image in settings menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[18]).src = InterfaceMainMenuIconPaths[2];
	
	//planet navigation buttons
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[19]).src = InterfaceMainMenuIconPaths[23];
	outputDocument.getElementById("planetOverviewInfoPanelHeaderPreviousPlanet").onclick = function() { interfacePlanetOverviewPreviousPlanet(outputDocument); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[20]).src = InterfaceMainMenuIconPaths[24];
	outputDocument.getElementById("planetOverviewInfoPanelHeaderNextPlanet").onclick = function() { interfacePlanetOverviewNextPlanet(outputDocument); };
	
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
function interfaceInitSettingsMenu(outputDocument){
	//settings in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[12]).src = InterfaceMainMenuIconPaths[12];
	outputDocument.getElementById("mainMenuWindowSettingsButton").onclick = function() { interfaceEnterElement(outputDocument,SettingsMenuID); };
	
	//topbar image in settings menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[16]).src = InterfaceMainMenuIconPaths[16];
	
	//settings buttons
	outputDocument.getElementById("settingsMenuOptionAnimatedMenuTabsChangeCheckbox").onclick = function() { interfaceSettingsSwitchFastMenuChange(outputDocument); };
	outputDocument.getElementById("settingsMenuOptionSkipIntroCheckbox").onclick = function() { interfaceSettingsSwitchIntroSkip(outputDocument); };
	outputDocument.getElementById("settingsMenuOptionAutosaveCheckbox").onclick = function() { interfaceSettingsSwitchAutosave(outputDocument); };
	
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
	
	//button on/off
	if(InterfaceChangeMenuTabInstant){
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
	if(SaveAutosave){
		outputDocument.getElementById("settingsMenuOptionAutosaveCheckbox").src = InterfaceMainMenuIconPaths[17];
	}
	else{
		outputDocument.getElementById("settingsMenuOptionAutosaveCheckbox").src = InterfaceMainMenuIconPaths[18];
	}
			
	
}

function interfaceSettingsSwitchFastMenuChange(outputDocument){
	if(InterfaceChangeMenuTabInstant) InterfaceChangeMenuTabInstant = false;
	else InterfaceChangeMenuTabInstant = true;
	
	interfaceInitSettingsMenu(outputDocument);
}
function interfaceSettingsSwitchIntroSkip(outputDocument){
	if(SaveIntroDisplayedOrSkipped) SaveIntroDisplayedOrSkipped = false;
	else SaveIntroDisplayedOrSkipped = true;
	
	interfaceInitSettingsMenu(outputDocument);
}
function interfaceSettingsSwitchAutosave(outputDocument){
	if(SaveAutosave) SaveAutosave = false;
	else SaveAutosave = true;
	
	interfaceInitSettingsMenu(outputDocument);
}

//refresh interface elements

function interfaceRefreshPlanetOverview(outputDocument){
	//planet data
	if(PlanetsCurrentPlanet != -1){
		outputDocument.getElementById("planetOverviewMenuPlanetImage").src = PlanetImageDefaultPath + PlanetsArray[PlanetsCurrentPlanet].imagePath + ".png";
		
		outputDocument.getElementById("planetOverviewInfoPanelHeaderPlanetNameText").innerHTML = PlanetsArray[PlanetsCurrentPlanet].name;
		outputDocument.getElementById("planetOverviewInfoPanelHeaderSystemNameText").innerHTML = PlanetsArray[PlanetsCurrentPlanet].system;
		
		outputDocument.getElementById("planetOverviewMenuPlanetImage").src = PlanetImageDefaultPath + PlanetsArray[PlanetsCurrentPlanet].imagePath + ".png";
		
		if(DiplomacyFactionNames[PlanetsArray[PlanetsCurrentPlanet].owner] === undefined){
			outputDocument.getElementById("planetOverviewInfoOwnerValue").innerHTML = DiplomacyFactionFallbackName;
		}
		else{
			outputDocument.getElementById("planetOverviewInfoOwnerValue").innerHTML = DiplomacyFactionNames[PlanetsArray[PlanetsCurrentPlanet].owner];
		}
		
		outputDocument.getElementById("planetOverviewInfoTypeValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].type;
		outputDocument.getElementById("planetOverviewInfoSubtypeValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].subtype;
		
		outputDocument.getElementById("planetOverviewInfoDescriptionValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].description;
		
		outputDocument.getElementById("planetOverviewInfoAtmosphereValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].atmosphere[0] + " ("+PlanetsArray[PlanetsCurrentPlanet].atmosphere[1]+")";
		outputDocument.getElementById("planetOverviewInfoTemperatureValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].averageTemperature + "°C";
		outputDocument.getElementById("planetOverviewInfoHazardValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].hazard;
		
		outputDocument.getElementById("planetOverviewInfoPeroidValue").innerHTML = Number(PlanetsArray[PlanetsCurrentPlanet].orbitalPeroid).toFixed(1) + " days";
		outputDocument.getElementById("planetOverviewInfoDistanceValue").innerHTML = Number(PlanetsArray[PlanetsCurrentPlanet].orbitalDistance).toFixed(2) + " AU";
	
		outputDocument.getElementById("planetOverviewInfoRadiusValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].radius+" km";
		outputDocument.getElementById("planetOverviewInfoGravityValue").innerHTML = PlanetsArray[PlanetsCurrentPlanet].gravity+" m/s²";
		
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

		interfaceRefreshPlanetResources(outputDocument);		
	}
}

function interfaceRefreshInterface(outputDocument){
	//interfaceRefreshPlanetResources(outputDocument);
}

function interfaceRefreshPlanetResources(outputDocument){
	interfaceRefreshPlanetStorage(outputDocument);
	interfaceRefreshPlanetNaturalResources(outputDocument);
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
var ResourcePanelTableCellClassSpacing = "planetOverviewResourcesTabResourceSpacing";
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


function interfaceRefreshPlanetStorage(outputDocument){
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
			if(resourcesDiscovered[i]){
				var tmpResourceName = resourcesNames[i];
				var tmpResourceAmount = PlanetsArray[PlanetsCurrentPlanet].resourceStorage[tmpResourceName];
				
				tmpResourceCounter++;
				
				if(tmpResourceCounter%2 == 1){
					tmpTableRowsCounter++;
					
					tmpTableRow = outputDocument.createElement("tr");
					tmpTableRow.className = ResourcePanelTableClass;
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
				
				if(tmpResourceCounter%2 == 0){
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
		if(tmpResourceCounter%2 == 1){
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


function interfaceRefreshPlanetNaturalResources(outputDocument){
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
				
				if(tmpResourceCounter%2 == 1){
					tmpTableRowsCounter++;
					
					tmpTableRow = outputDocument.createElement("tr");
					tmpTableRow.className = ResourcePanelTableClass;
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
				
				if(tmpResourceCounter%2 == 0){
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
		if(tmpResourceCounter%2 == 1){
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
				
				if(tmpBonusCounter%2 == 1){
					tmpTableRowsCounter++;
					
					tmpTableRow = outputDocument.createElement("tr");
					tmpTableRow.className = ResourcePanelTableClass;
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
				
				if(tmpBonusCounter%2 == 0){
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
		if(tmpBonusCounter%2 == 1){
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

//interface menu navigation

var InterfaceChangeMenuTabCurrentID = InterfaceMainMenuID;
var InterfaceChangeMenuTabInstant = false;
var InterfaceChangeMenuTabFadeOutTime = 0.25;
var InterfaceChangeMenuTabFadeInDelay = 0.1;
var InterfaceChangeMenuTabFadeInTime = 0.25;
var InterfaceChangeMenuTabPathStack = [];

function interfaceEnterElement(outputDocument, destinationTabID, instantChange = InterfaceChangeMenuTabInstant){
	InterfaceChangeMenuTabPathStack.push(InterfaceChangeMenuTabCurrentID);
	interfaceChangeMenuTab(outputDocument, destinationTabID);
}
function interfaceReturnFromElement(outputDocument, destinationTabID, instantChange = InterfaceChangeMenuTabInstant){
	interfaceChangeMenuTab(outputDocument, InterfaceChangeMenuTabPathStack.pop());
}
function interfaceEnterMainMenu(outputDocument, destinationTabID, instantChange = InterfaceChangeMenuTabInstant){
	InterfaceChangeMenuTabPathStack = [];
	interfaceChangeMenuTab(outputDocument, InterfaceMainMenuID);
}
function interfaceChangeMenuTab(outputDocument, destinationTabID, instantChange = InterfaceChangeMenuTabInstant){
	
	if(InterfaceChangeMenuTabCurrentID == "") {
		InterfaceChangeMenuTabCurrentID = InterfaceMainMenuID;
		
		var tmpElementsArray = outputDocument.getElementsByClassName("interfaceToggleableMenuElement");
		
		if(InterfaceChangeMenuTabInstant) {
			for(var i = 0; i<tmpElementsArray.length; i++){
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
			for(var i = 0; i<tmpElementsArray.length; i++){
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
		newAnimatedElementOpacity(outputDocument, InterfaceChangeMenuTabCurrentID, InterfaceChangeMenuTabFadeOutTime, 0, tmpOpacity);
		setTimeout(()=>{
				newAnimatedElementOpacity(outputDocument, destinationTabID, InterfaceChangeMenuTabFadeInTime, 1, 0);
			},1000*(InterfaceChangeMenuTabFadeInDelay + InterfaceChangeMenuTabFadeOutTime));
	}
	
	InterfaceChangeMenuTabCurrentID = destinationTabID;
	
	//what to do on tab enter
	switch(InterfaceChangeMenuTabCurrentID){
		case PlanetOverviewMenuID:
			interfaceRefreshPlanetOverview(outputDocument);
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

function interfaceAddBottomMessage(outputDocument, messageText){
	var tmpMessageTime = new Date().toLocaleTimeString();
	var tmpMessageExpire = Math.round(Date.now()/1000) + InterfaceBottomMessagesLifeTime;
	
	InterfaceBottomMessagesArray.push([messageText,tmpMessageTime,tmpMessageExpire]);
	interfaceRefreshBottomMessages(outputDocument);
}
function interfaceRefreshBottomMessages(outputDocument){
	var tmpElement = outputDocument.getElementById(InterfaceBottomMessagesContainerID);
	var tmpTime = Math.round(Date.now()/1000);
	
	for(var i = 0; i < InterfaceBottomMessagesArray.length; )
	{
		if(InterfaceBottomMessagesKeepLast && InterfaceBottomMessagesArray.length <= 1) break;
		
		if(InterfaceBottomMessagesArray[i][2] <= tmpTime){
			InterfaceBottomMessagesArray.shift();
		}
		else i++;
	}
	
	tmpElement.innerHTML = "";
	
	for(var i = 0; i < InterfaceBottomMessagesArray.length; i++){
		var tmpNewLine = outputDocument.createElement("div");
		tmpNewLine.className = InterfaceBottomMessagesSingleMessageClass;
		tmpNewLine.id = (InterfaceBottomMessagesSingleMessageID + i);
		if(InterfaceBottomMessagesDisplayTime) tmpNewLine.innerHTML = "[" + InterfaceBottomMessagesArray[i][1]+"]: "+InterfaceBottomMessagesArray[i][0];
		else tmpNewLine.innerHTML = InterfaceBottomMessagesArray[i][0];
		tmpElement.append(tmpNewLine);
	}
	
	tmpElement.scrollTop = tmpElement.scrollHeight;
}


//planet overview buttonsvar PlanetOverviewMenuID = "planetOverviewMenuWindow";

var InterfacePlanetOverviewCurrentTab = "";
var InterfacePlanetOverviewCurrentTabHeader = "planetOverviewResourcesPanelStorageButton";
var InterfacePlanetOverviewTabChanging = false;

function interfacePlanetOverviewChangeTab(outputDocument, destinationTabID, instantChange = InterfaceChangeMenuTabInstant){

	if(destinationTabID == InterfacePlanetOverviewCurrentTab) return;
	
	if(InterfacePlanetOverviewCurrentTab == "") InterfacePlanetOverviewCurrentTab = "planetOverviewResourcesPanelStorage";
	
	var tmpOriginTab = outputDocument.getElementById(InterfacePlanetOverviewCurrentTab);
	var tmpDestinationTab = outputDocument.getElementById(destinationTabID);	
	
	if(InterfaceChangeMenuTabInstant) {
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
function interfacePlanetOverviewActivateTabHeader(outputDocument, headerTabID){
	
	if(InterfacePlanetOverviewCurrentTabHeader == "") InterfacePlanetOverviewCurrentTabHeader = "planetOverviewResourcesPanelStorageButton";
	
	var tmpOriginTab = outputDocument.getElementById(InterfacePlanetOverviewCurrentTabHeader);
	var tmpDestinationTab = outputDocument.getElementById(headerTabID);
	
	tmpOriginTab.style.opacity = "";
	tmpDestinationTab.style.opacity = 1.0;
	
	InterfacePlanetOverviewCurrentTabHeader = headerTabID;
}

function interfacePlanetOverviewPlanetBuildings(outputDocument){
	console.log("Buildings on planet, yay. Wow.");
}
function interfacePlanetOverviewGoToSystem(outputDocument){
	console.log("System overview, yay. Wow.");
}
function interfacePlanetOverviewGoToHub(outputDocument){
	console.log("System hub station, yay. Wow.");
}
function interfacePlanetOverviewPlanetRoutes(outputDocument){
	console.log("Planet auto routes, yay. Wow.");
}
function interfacePlanetOverviewPreviousPlanet(outputDocument){
	PlanetsCurrentPlanet = planetsGetPreviousOverallPlanet();
	
	interfaceRefreshPlanetOverview(outputDocument);
}
function interfacePlanetOverviewNextPlanet(outputDocument){
	PlanetsCurrentPlanet = planetsGetNextOverallPlanet();
	
	interfaceRefreshPlanetOverview(outputDocument);
}
