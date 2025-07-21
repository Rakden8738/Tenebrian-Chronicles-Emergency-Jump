
var InterfaceDocument;

var MainGameVersion = "v0.0.4";



var mainIntroInterfaceCoverID = "overInterfaceBackgroundCover";
var mainLoadFadeSpeed = 1;




function MAIN_TEST(){
console.log("MAIN OK");
}

function MAIN_ConnectionTest(outputDocument, ConnectionTestElementID){
	outputDocument.getElementById(ConnectionTestElementID).innerHTML = "Loaded!";
	outputDocument.getElementById(ConnectionTestElementID).hidden = true;

	console.log("Main module loaded.");
	console.log("Version: "+MainGameVersion);


}

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
	
	interfaceRefreshMenuButtons(outputDocument);
	animationMoveBackground(outputDocument);
	
	if(SaveIntroDisplayedOrSkipped){
		newAnimatedElementOpacity(outputDocument, mainIntroInterfaceCoverID, mainLoadFadeSpeed, 0, 1);
	}
	else {
		animationDisplayIntro(outputDocument);
	}
}





