function CSV_TEST(){
console.log("CSV OK");
}

var LoadedPlanets = [];

function LoadTEST(FieldName){
	var TextField = document.getElementById(FieldName);
	var AllText = TextField.value;
	var TextLines = AllText.split('\n');
	var PlanetAttributesHeader = TextLines[0];
	var HeaderAttributes = PlanetAttributesHeader.split(';');

	
	LoadedPlanets = [];
	for (let i = 1; i < TextLines.length; i++) {
		LoadedPlanets[i-1] = [];
		var TMPValues = TextLines[i].split(';');
		for (let j = 0; j < HeaderAttributes.length; j++) {
			if(HeaderAttributes[j].length > 0) {
				LoadedPlanets[i-1][HeaderAttributes[j]] = TMPValues[j];
			}
		}
	}
}