//var InterfaceDocument;

var MainGameVersion = [0,0,12];

var messagesMainLayerClass = "messagesLayer";
var messagesLayerClass = "animationMessages";
var messagesGroupClass = "messagesGroup";

var mainOutputDocument;
var mainBodyID = "mainBody";
var mainMessagesLayerID = "mainMessagesLayer";
var mainIntroInterfaceCoverID = "mainOverInterfaceBackgroundCover";

var mainLoadFadeSpeed = 1;

var mainDebugMode = true;

function mainLoadGame(outputDocument){
	mainOutputDocument = outputDocument;
	var TestedModule = "";
	
	try{
		TestedModule = "interface";
		connectionTest_interface(outputDocument);
		TestedModule = "timer";
		connectionTest_timer(outputDocument);
		TestedModule = "saveLoad";
		connectionTest_saveLoad(outputDocument);
		TestedModule = "animations";
		connectionTest_animations(outputDocument);
		TestedModule = "resources";
		connectionTest_resources(outputDocument);
		TestedModule = "resources";
		connectionTest_systems(outputDocument);
		TestedModule = "diplomacy";
		connectionTest_diplomacy(outputDocument);
		TestedModule = "planets";
		connectionTest_planets(outputDocument);
		TestedModule = "buildings";
		connectionTest_buildings(outputDocument);
		
		TestedModule = "intro";
		connectionTest_intro(outputDocument);
	}
	catch ({name, message}) {
		if(name=="ReferenceError") console.log("\""+TestedModule+"\" module not found.");
		else {
			console.log(name);
			console.log(message);
		}
		
		console.log("Game failed to load.");
		return false;
	}
	
	loadLoadGame(outputDocument);
	saveAutosaveLoop(outputDocument);
	timerStart(outputDocument);
	
	resourcesInitResources(outputDocument);
	
	interfaceRefreshMenuButtons(outputDocument);
	interfacePlanetOverviewChangeTab(outputDocument,"planetOverviewResourcesPanelStorage"); 
	interfacePlanetOverviewActivateTabHeader(outputDocument,"planetOverviewResourcesPanelStorageButton");
	
	scenario_earlyAlpha();
	
	animationMoveBackground(outputDocument);
	
	if(mainDebugMode) {
		//interfaceChangeMenuTab(outputDocument,SettingsMenuID);
		//interfaceChangeMenuTab(outputDocument,InterfaceMainMenuID);
	}
	
	if(SaveIntroDisplayedOrSkipped){
		newAnimatedElementOpacity(outputDocument, mainIntroInterfaceCoverID, mainLoadFadeSpeed, 0, 1);
	}
	else {
		animationDisplayIntro(outputDocument);
	}
}





