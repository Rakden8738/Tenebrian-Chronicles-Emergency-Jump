var SaveObject;
var SaveProperties = [
	"gameVersion",
	"introDisplayed",
	"introSkipCounter",
	"saveTime",
	"settingsInstantMenuSwitch",
	"settingsAutosaveEnabled",
	"mainMenuUnlockedTabs",
];

var SaveAutosave = true;
var SaveDisableAutosaveOnLoadError = true;

var SaveIntroDisplayedOrSkipped = false;
var SaveIntroSkipCounter = 0;

var SaveUnlockedMainMenuTabs = [true,false,false,false,false,false,false,false,false,false,true];

function connectionTest_saveLoad(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"saveLoad\" reporting issues.");
		return false;
	}
}

function loadLoadGame(){
	var tmpSaveObject = JSON.parse(localStorage.getItem("currentSave"));
	var saveOK = false;
	
	if(tmpSaveObject === null) {
		console.log("Game save data not found.");
	}
	else {
		saveOK = loadVerifySave(tmpSaveObject);
	}
	
	if(saveOK) {
		SaveObject = tmpSaveObject;
	
		SaveIntroDisplayedOrSkipped = SaveObject.introDisplayed;
		SaveIntroSkipCounter = SaveObject.introSkipCounter;
		InterfaceChangeMenuTabInstant = SaveObject.settingsInstantMenuSwitch;
		SaveAutosave = SaveObject.settingsAutosaveEnabled;
	
		console.log("Game loaded successfully.");
	}
	else {
		console.log("Save failed to load. Check log for details.");
		if(SaveDisableAutosaveOnLoadError) {
			console.log("Disabling auto-save to prevent data from being overwritten.");
			SaveAutosave = false;
		}
		SaveObject = saveCreateSaveObject();
	}
}
function loadVerifySave(unverifiedSave) {
	var tmpTime = Date.now();
	var tmpTime2 = (tmpTime - (tmpTime%1000))/1000;
	
	if(unverifiedSave.gameVersion != MainGameVersion) {
		console.log("Warning: Versions of save and game do not match.");
	}
	
	var timeDifference = (tmpTime2 - unverifiedSave.saveTime);
	if(tmpTime2 < 1700000000) {
		console.log("Error: Save time is unreasonably old or corrupted.");
		return false;
	}
	if(timeDifference < 0) {
		console.log("Warning: Time discrepancy detected.");
		if(timeDifference < (-3700)) {
			console.log("Warning: Time discrepancy exceeding daylight time saving margin.");
			return false;
		}
	}
	
	return true;
}

function saveCreateSaveObject(){
	var newSaveObject = {};
	newSaveObject["gameVersion"] = MainGameVersion;
	newSaveObject["saveTime"] = Math.round(Date.now()/1000);
	newSaveObject["introDisplayed"] = SaveIntroDisplayedOrSkipped;
	newSaveObject["introSkipCounter"] = SaveIntroSkipCounter;
	newSaveObject["settingsInstantMenuSwitch"] = InterfaceChangeMenuTabInstant;
	newSaveObject["settingsAutosaveEnabled"] = SaveAutosave;
	newSaveObject["mainMenuUnlockedTabs"] = SaveUnlockedMainMenuTabs;
	
	return newSaveObject;
}

function saveSaveGame(quietSave = false){
	var tmpSave = JSON.stringify(saveCreateSaveObject());
	var oldSave = localStorage.getItem("currentSave");
	
	localStorage.setItem("backupSave", oldSave);
	localStorage.setItem("currentSave", tmpSave);
	
	if(!quietSave) console.log("Game successfully saved.");
}
function saveAutosaveLoop(){
	setTimeout(() => {
		if(SaveAutosave){
			saveSaveGame(true);
			console.log("Game autosaved.");
		}
		saveAutosaveLoop();
		},300000);
}
