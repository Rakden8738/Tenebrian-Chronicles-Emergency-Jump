//var InterfaceDocument;

var MainGameVersion = "v0.0.8";

var messagesMainLayerClass = "messagesLayer";
var messagesLayerClass = "animationMessages";
var messagesGroupClass = "messagesGroup";


var mainBodyID = "mainBody";
var mainMessagesLayerID = "mainMessagesLayer";
var mainIntroInterfaceCoverID = "mainOverInterfaceBackgroundCover";

var mainLoadFadeSpeed = 1;

var mainDebugMode = true;

function mainLoadGame(outputDocument){
	var TestedModule = "";
	try{
		TestedModule = "timer";
		connectionTest_timer(outputDocument);
		TestedModule = "saveLoad";
		connectionTest_saveLoad(outputDocument);
		TestedModule = "animations";
		connectionTest_animations(outputDocument);
		TestedModule = "interface";
		connectionTest_interface(outputDocument);
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
	
	loadLoadGame();
	saveAutosaveLoop();
	timerStart(outputDocument);
	
	interfaceRefreshMenuButtons(outputDocument);
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





