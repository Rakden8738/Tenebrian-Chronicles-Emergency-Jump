//var InterfaceDocument;

var MainGameVersion = [0,1,0];

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
		TestedModule = "galaxy";
		connectionTest_galaxy(outputDocument);
		TestedModule = "systems";
		connectionTest_systems(outputDocument);
		TestedModule = "diplomacy";
		connectionTest_diplomacy(outputDocument);
		TestedModule = "planets";
		connectionTest_planets(outputDocument);
		TestedModule = "networks";
		connectionTest_networks(outputDocument);
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
	
	scenario_earlyAlpha2();
	
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

function logBase(tmpValue, tmpBase) {
	return Math.log(tmpValue) / Math.log(tmpBase);
}

function distanceToSegment(x, y, x1, y1, x2, y2){
	var A = x - x1;
	var B = y - y1;
	var C = x2 - x1;
	var D = y2 - y1;
	
	var dot = A * C + B * D;
	var len_sq = C * C + D * D;
	var param = -1;
	if (len_sq != 0) param = dot / len_sq;
	else{
		return(Math.sqrt(A * A + B * B));
	}

	var xx, yy;

	if (param < 0) {
		xx = x1;
		yy = y1;
	}
	else if (param > 1) {
		xx = x2;
		yy = y2;
	}
	else {
		xx = x1 + param * C;
		yy = y1 + param * D;
	}

	var dx = x - xx;
	var dy = y - yy;
	return Math.sqrt(dx * dx + dy * dy);
}





