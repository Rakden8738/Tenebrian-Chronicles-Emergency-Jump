
var InterfaceDocument;

var mainGameVersion = "v0.0.2";

var mainIntroDisplayedOrSkipped = 0;
var mainIntroInterfaceCoverID = "overInterfaceBackgroundCover";
var mainLoadFadeSpeed = 1;

var majorTickLength = 1.0;
var minorTickLength = 0.01;

function MAIN_TEST(){
console.log("MAIN OK");
}

function MAIN_ConnectionTest(ReceivedDocument, ConnectionTestElementID){
	InterfaceDocument = ReceivedDocument;	
	InterfaceDocument.getElementById(ConnectionTestElementID).innerHTML = "Loaded!";
	InterfaceDocument.getElementById(ConnectionTestElementID).hidden = true;

	console.log("Main module loaded.");
	console.log("Version: "+mainGameVersion);


}

function mainLoadGame(outputDocument){
	if(mainIntroDisplayedOrSkipped < 3){
		animationDisplayIntro(outputDocument);
	}
	else {
		newAnimatedElementOpacity(outputDocument, mainIntroInterfaceCoverID, mainLoadFadeSpeed, 0, 1);
	}
}



