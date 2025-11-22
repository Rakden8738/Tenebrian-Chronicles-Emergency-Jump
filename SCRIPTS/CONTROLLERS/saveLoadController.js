function connectionTest_saveLoad(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"saveLoad\" reporting issues.");
		return false;
	}
}

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

//var SaveAutosave = true;
var SaveDisableAutosaveOnLoadError = true;

var SaveIntroDisplayedOrSkipped = false;
var SaveIntroSkipCounter = 0;

var SaveUnlockedMainMenuTabs = [true,true,true,false,false,false,false,false,false,false,true];

var SaveExportImportTextareaID = "settingsMenuOptionExportImportTextarea";


function loadLoadGame(outputDocument){
	var tmpSaveObject = JSON.parse(localStorage.getItem("currentSave"));
	
	loadLoadGameObject(outputDocument, tmpSaveObject);
	
}


function saveCreateSaveObject(){
	var newSaveObject = {};
	
	newSaveObject["gameVersion"] = MainGameVersion;
	
	newSaveObject["config"] = settingsGetConfigObject();
	console.log("Creating new timer...");
	newSaveObject["timer"] = timerGetTimingsObject();
	
	
	newSaveObject["introDisplayed"] = SaveIntroDisplayedOrSkipped;
	newSaveObject["introSkipCounter"] = SaveIntroSkipCounter;
	newSaveObject["mainMenuUnlockedTabs"] = SaveUnlockedMainMenuTabs;
	
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
function saveExportSave(outputDocument){
	var tmpSaveObject = saveCreateSaveObject();
	var tmpSave = JSON.stringify(tmpSaveObject);
	var tmpExport;
	try{
		tmpExport = window.btoa(tmpSave);
	}
	catch ({name,message}) {
		//console.groupCollapsed();
		if(name == "InvalidCharacterError") {
			interfaceAddBottomMessage(mainOutputDocument, "Warning: Encoding issue detected while exporting data. Check console for details.");
			console.groupCollapsed("Warning: Encoding issue detected while exporting data.");
			
			try{
				var btoaErrorTest;
				
				var btoaErrorTestedElementName = "timer";
				var btoaErrorTestedElement = JSON.stringify(tmpSaveObject.timer);
				btoaErrorTest = window.btoa(btoaErrorTestedElement);
				
				btoaErrorTestedElementName = "config";
				btoaErrorTestedElement = JSON.stringify(tmpSaveObject.config);
				btoaErrorTest = window.btoa(btoaErrorTestedElement);
				
				btoaErrorTestedElementName = "general";
				console.warn("General save issue.");
				console.log(tmpSave);
			}
			catch ({name,message}) {
				if(name == "InvalidCharacterError") {
					console.warn("Warning: Issue detected while exporting data for module '" + btoaErrorTestedElementName + "'");
					console.log(btoaErrorTestedElement);
				}
				else console.error("Error: " + name + " for: '" + btoaErrorTestedElementName + "' element.");
			}
			console.groupEnd();
			tmpExport = window.btoa(tmpSave.replace(/[^\x20-\x7E]/g, "?"));
		}
		else console.error("Encoding error: " + name);
	}
	 
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
	interfaceInitSettingsMenu(outputDocument);
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
		
		settingsSetConfigObject(SaveObject.config);
		timerSetTimingsObject(SaveObject.timer);
		
		console.log("Game loaded successfully.");
		interfaceAddBottomMessage(mainOutputDocument, "Game loaded successfully.");
		
		return;
	}
	
	if(forceLoad){
		//console.log("Force Load");
		if(tmpSaveObject === null){
			console.log("Creating new save...");
			SaveObject = saveCreateSaveObject();

			SettingSaveAutosave = true;
		}
		else {
			console.log("Save failed to load. Check log for details.");
			interfaceAddBottomMessage(mainOutputDocument, "Save failed to load. Check log for details.");
			if(SaveDisableAutosaveOnLoadError) {
				console.log("Disabling auto-save to prevent data from being overwritten.");
				interfaceAddBottomMessage(mainOutputDocument, "Disabling auto-save to prevent data from being overwritten.");
				SettingSaveAutosave = false;
			}
			SaveObject = saveCreateSaveObject();
		}
	}
}

function loadVerifySave(unverifiedSave) {
	var tmpTime = Date.now();
	var tmpTime2 = (tmpTime - (tmpTime%1000))/1000;
	
	try{
	
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
			SettingSaveAutosave = false;
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
	
	var timeDifference = (tmpTime2 - unverifiedSave.timer.saveTime);
	
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
	}
	catch{
		return false;
	}
	
	return true;
}

function saveLoadWipeSave(outputDocument){
	if(confirm("Are you sure you want to wipe current save?")){
		if(confirm("Are you REALLY sure?\nThis will also reload the page.")){
			localStorage.removeItem("currentSave");
			//localStorage.removeItem("currentSave");
			window.location.reload();
		}
	}
}

function saveAutosaveLoop(){
	setTimeout(() => {
		if(SettingSaveAutosave){
			saveSaveGame(true);
			console.log("Game autosaved.");
			interfaceAddBottomMessage(mainOutputDocument, "Game autosaved.");
		}
		saveAutosaveLoop();
		},300000);
}
