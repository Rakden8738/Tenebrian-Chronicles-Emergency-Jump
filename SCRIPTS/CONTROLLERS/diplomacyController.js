function connectionTest_diplomacy(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"diplomacy\" reporting issues.");
		return false;
	}
}

var DiplomacyFactionNames = [];

var DiplomacyFactionDefaultName = "New Erebian Stratocracy";
var DiplomacyFactionFallbackName = "Unrecognised faction";
var DiplomacyFactionNoFaction = "No owner";

function diplomacyDefaultFactions(){
	var tmpArray = [];
	tmpArray[0] = DiplomacyFactionNoFaction;
	tmpArray[1] = DiplomacyFactionDefaultName;
	tmpArray[2] = "Contested";
	return tmpArray;
}
