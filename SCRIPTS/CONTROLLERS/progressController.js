function connectionTest_progress(outputDocument) {
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"progress\" reporting issues.");
		return false;
	}
}

var ProgressIntroDisplayedOrSkipped = false;
var ProgressIntroSkipCounter = 0;

function progressToggleIntroSkip(){
	if(ProgressIntroDisplayedOrSkipped) progressDisableIntroSkip();
	else progressEnableIntroSkip();
}
function progressEnableIntroSkip(){
	ProgressIntroDisplayedOrSkipped = true;
}
function progressDisableIntroSkip(){
	ProgressIntroDisplayedOrSkipped = false;
}

var OLDProgressUnlockedMainMenuTabs = [true,true,true,false,false,false,false,false,false,false,true];
var ProgressDefaultUnlockedMainMenuTabs = {
	"Planet":true,
	"System":true,
	"Galaxy":true,
	"Network":false,	
	"Build":true,
	"Research":false,
	"Missions":false,
	"Fleet":false,
	"Diplomacy":false,
	"Government":false,
	"Archive":false,
	"Settings":true,
}
var ProgressUnlockedMainMenuTabs = ProgressDefaultUnlockedMainMenuTabs;//[true,true,true,false,false,false,false,false,false,false,true];



function progressGetProgressObject(){
	var newProgressObject = {};
	
	newProgressObject["introDisplayed"] = ProgressIntroDisplayedOrSkipped;
	newProgressObject["introSkipCounter"] = ProgressIntroSkipCounter;
	newProgressObject["mainMenuUnlockedTabs"] = ProgressUnlockedMainMenuTabs;
	
	return newProgressObject;
}
function progressSetProgressObject(newProgressObject){
	
	try{
		ProgressIntroDisplayedOrSkipped = newProgressObject.introDisplayed;
	} catch{ console.warn("Save is missing intro-displayed flag.")};
	try{
		ProgressIntroSkipCounter = newProgressObject.introSkipCounter;
	} catch{ console.warn("Save is missing count of intro skips.")};
	try{
		ProgressUnlockedMainMenuTabs = newProgressObject.mainMenuUnlockedTabs;
	} catch{ console.warn("Save is missing array of unlocked main menu tabs. Will be set to default.")};
}
