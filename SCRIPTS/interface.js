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
var SettingsMenuID = "settingsMenuWindow";
var PlanetOverviewMenuID = "planetOverviewMenuWindow";

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
];

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
	//outputDocument.getElementById(InterfaceMainMenuButtonImagesID[13]).onclick = function() { interfaceChangeMenuTab(outputDocument,InterfaceMainMenuID); };
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[13]).onclick = function() { interfaceEnterMainMenu(outputDocument,InterfaceMainMenuID); };
	
	//mini settings
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[14]).src = InterfaceMainMenuIconPaths[14];
	//outputDocument.getElementById(InterfaceMainMenuButtonImagesID[14]).onclick = function() { interfaceChangeMenuTab(outputDocument,SettingsMenuID); };
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
		tmpArray[i].src = InterfaceMainMenuIconPaths[19];
	}
}
function interfaceInitPlanetOverviewMenu(outputDocument){
	//planets in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[2]).src = InterfaceMainMenuIconPaths[2];
	outputDocument.getElementById("mainMenuWindowPlanetsButton").onclick = function() { interfaceEnterElement(outputDocument,PlanetOverviewMenuID); };
	
	//topbar image in settings menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[18]).src = InterfaceMainMenuIconPaths[2];
}
function interfaceInitSettingsMenu(outputDocument){
	//settings in main menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[12]).src = InterfaceMainMenuIconPaths[12];
	outputDocument.getElementById("mainMenuWindowSettingsButton").onclick = function() { interfaceEnterElement(outputDocument,SettingsMenuID); };
	
	//settings buttons
	outputDocument.getElementById("settingsMenuOptionAnimatedMenuTabsChangeCheckbox").onclick = function() { interfaceSettingsSwitchFastMenuChange(outputDocument); };
	outputDocument.getElementById("settingsMenuOptionSkipIntroCheckbox").onclick = function() { interfaceSettingsSwitchIntroSkip(outputDocument); };
	outputDocument.getElementById("settingsMenuOptionAutosaveCheckbox").onclick = function() { interfaceSettingsSwitchAutosave(outputDocument); };
	
	outputDocument.getElementById("settingsMenuOptionReplayIntroButton").onclick = function() { 
		outputDocument.getElementById("settingsMenuOptionReplayIntroImage").src = InterfaceMainMenuIconPaths[20];
		setTimeout(() => {
			outputDocument.getElementById("settingsMenuOptionReplayIntroImage").src = InterfaceMainMenuIconPaths[19];
		},InterfaceButtonsTurnOffClickEffectTimer*1000);
		animationDisplayIntro(outputDocument);
	};
	
	outputDocument.getElementById("settingsMenuOptionSaveGameButton").onclick = function() { 
		outputDocument.getElementById("settingsMenuOptionSaveGameImage").src = InterfaceMainMenuIconPaths[20];
		setTimeout(() => {
			outputDocument.getElementById("settingsMenuOptionSaveGameImage").src = InterfaceMainMenuIconPaths[19];
		},InterfaceButtonsTurnOffClickEffectTimer*1000);
		saveSaveGame();
	};
	
	//outputDocument.getElementById("settingsMenuOptionReplayIntroImage").src = InterfaceMainMenuIconPaths[19];
	//outputDocument.getElementById("settingsMenuOptionSaveGameImage").src = InterfaceMainMenuIconPaths[19];
	
	//button on/off
	if(InterfaceChangeMenuTabInstant){
		outputDocument.getElementById("settingsMenuOptionAnimatedMenuTabsChangeCheckbox").src = InterfaceMainMenuIconPaths[17];
		//outputDocument.getElementById("settingsMenuOptionAnimatedMenuTabsChangeText").innerHTML = "Instant movement between menus.";
	}
	else{
		outputDocument.getElementById("settingsMenuOptionAnimatedMenuTabsChangeCheckbox").src = InterfaceMainMenuIconPaths[18];
		//outputDocument.getElementById("settingsMenuOptionAnimatedMenuTabsChangeText").innerHTML = "";
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
			
	//topbar image in settings menu
	outputDocument.getElementById(InterfaceMainMenuButtonImagesID[16]).src = InterfaceMainMenuIconPaths[16];
	
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

var InterfaceChangeMenuTabCurrentID = InterfaceMainMenuID;

var InterfaceChangeMenuTabInstant = false;
var InterfaceChangeMenuTabFadeOutTime = 0.2;
var InterfaceChangeMenuTabFadeInDelay = 0.1;
var InterfaceChangeMenuTabFadeInTime = 0.2;
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
	
	return;
}


