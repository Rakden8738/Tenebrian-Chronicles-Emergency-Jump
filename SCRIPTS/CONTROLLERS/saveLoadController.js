var SaveObject;
var SaveProperties = [
	"gameVersion",
	"introDisplayed",
	"introSkipCounter",
	"saveTime",
	"settingsInstantMenuSwitch",
	"settingsAutosaveEnabled",
	"mainMenuUnlockedTabs",
	"totalElapsedDays",
	"accumulatedAFKTime",
	"AFKExtraSeconds"
];

var SaveAutosave = true;
var SaveDisableAutosaveOnLoadError = true;

var SaveIntroDisplayedOrSkipped = false;
var SaveIntroSkipCounter = 0;

var SaveUnlockedMainMenuTabs = [true,true,false,false,false,false,false,false,false,false,true];

function connectionTest_saveLoad(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"saveLoad\" reporting issues.");
		return false;
	}
}

function loadLoadGame(outputDocument){
	var tmpSaveObject = JSON.parse(localStorage.getItem("currentSave"));
	
	loadLoadGameObject(outputDocument, tmpSaveObject);
	
}
function loadVerifySave(unverifiedSave) {
	var tmpTime = Date.now();
	var tmpTime2 = (tmpTime - (tmpTime%1000))/1000;
	
	//check version
	if(Array.isArray(unverifiedSave.gameVersion)){
		if(MainGameVersion[0] != unverifiedSave.gameVersion[0]){
			console.log("Fatal error: Incompatible save detected.");
			interfaceAddBottomMessage(mainOutputDocument, "Fatal error: Incompatible save detected.");
			return false;
		}
		if(MainGameVersion[1] != unverifiedSave.gameVersion[1]){
			console.log("Error: Major version discrepancy detected. Disabling autosave to prevent accidental save corruption.");
			interfaceAddBottomMessage(mainOutputDocument, "Error: Major version discrepancy detected. Disabling autosave to prevent accidental save corruption.");
			SaveAutosave = false;
		}
		if(MainGameVersion[2] != unverifiedSave.gameVersion[2]){
			console.log("Warning: Minor version discrepancy detected.");
			interfaceAddBottomMessage(mainOutputDocument, "Warning: Minor version discrepancy detected.");
		}
	}
	else{
		console.log("Warning: Unrecognised or missing version variable.");
		interfaceAddBottomMessage(mainOutputDocument, "Warning: Unrecognised or missing version variable.");
	}
	if(unverifiedSave.gameVersion != MainGameVersion) {
		
	}
	
	var timeDifference = (tmpTime2 - unverifiedSave.saveTime);
	if(tmpTime2 < 1700000000) {
		console.log("Error: Save time is unreasonably old or corrupted.");
		interfaceAddBottomMessage(mainOutputDocument, "Error: Save time is unreasonably old or corrupted.");
		return false;
	}
	if(timeDifference < 0) {
		console.log("Warning: Time discrepancy detected.");
		interfaceAddBottomMessage(mainOutputDocument, "Warning: Time discrepancy detected.");
		if(timeDifference < (-3700)) {
			console.log("Warning: Time discrepancy exceeding daylight time saving margin.");
			interfaceAddBottomMessage(mainOutputDocument, "Warning: Time discrepancy exceeding daylight time saving margin.");
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
	newSaveObject["totalElapsedDays"] = TimerTotalElapsedDays;
	newSaveObject["accumulatedAFKTime"] = TimerAccumulatedFasterTime;
	newSaveObject["AFKExtraSeconds"] = TimerAFKExtraSeconds;
	
	return newSaveObject;
}

function saveSaveGame(quietSave = false){
	var tmpSave = JSON.stringify(saveCreateSaveObject());
	var oldSave = localStorage.getItem("currentSave");
	
	localStorage.setItem("backupSave", oldSave);
	localStorage.setItem("currentSave", tmpSave);
	
	if(!quietSave) {
		console.log("Game successfully saved.");
		interfaceAddBottomMessage(mainOutputDocument, "Game successfully saved.");
	}
}

var SaveExportImportTextareaID = "settingsMenuOptionExportImportTextarea";

function saveExportSave(outputDocument){
	var tmpSave = JSON.stringify(saveCreateSaveObject());
	var tmpExport = window.btoa(tmpSave);
	var tmpOutput = outputDocument.getElementById(SaveExportImportTextareaID);
	
	tmpOutput.value = tmpExport;
	
	console.log("Save exported to text field.");
	interfaceAddBottomMessage(mainOutputDocument, "Save exported to text field.");
}
function loadImportSave(outputDocument){
	var tmpInput = outputDocument.getElementById(SaveExportImportTextareaID);
	var tmpImport = window.atob(tmpInput.value);
	var tmpSave = JSON.parse(tmpImport);
	
	loadLoadGameObject(outputDocument, tmpSave, false);
}
function loadLoadGameObject(outputDocument, tmpSaveObject, forceLoad = true){
	
	var saveOK = false;
	
	if(tmpSaveObject === null) {
		console.log("Game save data not found.");
		interfaceAddBottomMessage(mainOutputDocument, "Game save data not found.");
	}
	else {
		saveOK = loadVerifySave(tmpSaveObject);
	}
	
	if(saveOK) {
		//console.log("Save ok");
		SaveObject = tmpSaveObject;
	
		SaveIntroDisplayedOrSkipped = SaveObject.introDisplayed;
		SaveIntroSkipCounter = SaveObject.introSkipCounter;
		SaveAutosave = SaveObject.settingsAutosaveEnabled;
		
		InterfaceChangeMenuTabInstant = SaveObject.settingsInstantMenuSwitch;
		
		//TimerDayOfYear = SaveObject.totalElapsedDays;
		
		var timeNow = Math.round(Date.now()/1000);
		var elapsedTime = timeNow - SaveObject.saveTime;
		
		TimerAFKExtraSeconds += elapsedTime + SaveObject.AFKExtraSeconds;
		
		if(TimerAFKExtraSeconds > TimerAFKMarginSeconds){
			//console.log("Welcome back, you have been away for about " + timerSecondsToTimeString(elapsedTime));
			//interfaceAddBottomMessage(outputDocument, "Welcome back, you have been away for about " + timerSecondsToTimeString(elapsedTime));
			TimerAFKDetected = true;
		}
		
		TimerAccumulatedFasterTime = SaveObject.accumulatedAFKTime;
		TimerTotalElapsedDays = SaveObject.totalElapsedDays;
		TimerDayOfYear = SaveObject.totalElapsedDays;
		
		console.log("Game loaded successfully.");
		interfaceAddBottomMessage(mainOutputDocument, "Game loaded successfully.");
		
		return;
	}
	
	if(forceLoad){
		//console.log("Force Load");
		if(tmpSaveObject === null){
			SaveObject = saveCreateSaveObject();
			SaveAutosave = true;
		}
		else {
			console.log("Save failed to load. Check log for details.");
			interfaceAddBottomMessage(mainOutputDocument, "Save failed to load. Check log for details.");
			if(SaveDisableAutosaveOnLoadError) {
				console.log("Disabling auto-save to prevent data from being overwritten.");
				interfaceAddBottomMessage(mainOutputDocument, "Disabling auto-save to prevent data from being overwritten.");
				SaveAutosave = false;
			}
			SaveObject = saveCreateSaveObject();
		}
	}
}

function saveLoadWipeSave(outputDocument){
	if(confirm("Are you sure you want to wipe current save?")){
		if(confirm("Are you REALLY sure?\nThis will also reload the page.")){
			localStorage.removeItem("currentSave");
			localStorage.removeItem("currentSave");
			window.location.reload();
		}
	}
}

function saveAutosaveLoop(){
	setTimeout(() => {
		if(SaveAutosave){
			saveSaveGame(true);
			console.log("Game autosaved.");
			interfaceAddBottomMessage(mainOutputDocument, "Game autosaved.");
		}
		saveAutosaveLoop();
		},300000);
}
