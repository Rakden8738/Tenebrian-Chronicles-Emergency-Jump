function connectionTest_settings(outputDocument) {
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"settings\" reporting issues.");
		return false;
	}
}

var SettingSaveAutosave = true;
var SettingsDisableAutosaveOnLoadError = true;
var SettingsInstantMenuNavigation = false;

function settingsToggleAutosave(){
	if(SettingSaveAutosave) settingsDisableAutosave();
	else settingsEnableAutosave();
}
function settingsEnableAutosave(){
	SettingSaveAutosave = true;
}
function settingsDisableAutosave(){
	SettingSaveAutosave = false;
}

function settingsToggleGalaxyMapParallax(){
	if(GalaxyMapPerspectiveEnabled) settingsDisableGalaxyMapParallax();
	else settingsEnableGalaxyMapParallax();
}
function settingsEnableGalaxyMapParallax(){
	GalaxyMapPerspectiveEnabled = true;
}
function settingsDisableGalaxyMapParallax(){
	GalaxyMapPerspectiveEnabled = false;
}


function settingsGetConfigObject(){
	var newConfigObject = {};
	
	newConfigObject["settingsInstantMenuSwitch"] = SettingsInstantMenuNavigation;
	newConfigObject["settingsAutosaveEnabled"] = SettingSaveAutosave;
	newConfigObject["settingsGalaxyMapParallax"]= GalaxyMapPerspectiveEnabled;
	
	return newConfigObject;
}
function settingsSetConfigObject(newConfigObject){
	
	try{
		SettingSaveAutosave = newConfigObject.settingsAutosaveEnabled;
	} catch{ console.warn("Save is missing flag for autosave setting.")};
	try{
		SettingsInstantMenuNavigation = newConfigObject.settingsInstantMenuSwitch;
	} catch{ console.warn("Save is missing flag for instant menu switch.")};
	try{
		GalaxyMapPerspectiveEnabled = newConfigObject.settingsGalaxyMapParallax;
	} catch{ console.warn("Save is missing flag for galaxy map parallax setting.")};
	
	
	
	
}