function connectionTest_diplomacy(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"diplomacy\" reporting issues.");
		return false;
	}
}

var DiplomacyDefaultPlayerFaction = 1;
var DiplomacyPlayerFaction = DiplomacyDefaultPlayerFaction;

var DiplomacyFactionNames = [];

var DiplomacyDefaultHostileFactionColor = "hsla(0,100%,40%,1.0)";

var DiplomacyPlayerFactionDefaultName = ["Erebian Autonomy","hsla(120,100%,50%,1.0)"];
var DiplomacyFactionFallbackName = ["Unrecognised faction","hsla(0,0%,50%,1.0)"];
var DiplomacyFactionNoFaction = ["No owner","hsla(0,0%,75%,1.0)"];

function diplomacyDefaultFactions(){
	var tmpArray = [];
	tmpArray[0] = DiplomacyFactionNoFaction;
	tmpArray[1] = DiplomacyPlayerFactionDefaultName;
	tmpArray[2] = ["Contested","hsla(60,75%,75%,1.0)"];
	tmpArray[3] = ["Independent","hsla(0,0%,50%,1.0)"];
	tmpArray[4] = ["Liber'atio Army",DiplomacyDefaultHostileFactionColor];
	tmpArray[5] = ["Empire of Jotun","hsla(300,50%,40%,1.0)"];
	tmpArray[6] = ["Clowns","hsla(330,75%,35%,1.0)"];
	return tmpArray;
}
