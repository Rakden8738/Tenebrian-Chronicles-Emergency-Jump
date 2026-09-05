//var InterfaceDocument;

var MainGameVersion = [0,3,0];

var messagesMainLayerClass = "messagesLayer";
var messagesLayerClass = "animationMessages";
var messagesGroupClass = "messagesGroup";

var mainOutputDocument;
var mainBodyID = "mainBody";
var mainMessagesLayerID = "mainMessagesLayer";
var mainIntroInterfaceCoverID = "mainOverInterfaceBackgroundCover";

var mainLoadFadeSpeed = 1;

var mainDebugMode = true;

function mainLoadGame(outputDocument){
	mainOutputDocument = outputDocument;
	var TestedModule = "";
	
	try{
		TestedModule = "interface";
		connectionTest_interface(outputDocument);
		TestedModule = "progress";
		connectionTest_progress(outputDocument);
		TestedModule = "timer";
		connectionTest_timer(outputDocument);
		TestedModule = "saveLoad";
		connectionTest_saveLoad(outputDocument);
		TestedModule = "settings";
		connectionTest_settings(outputDocument);
		TestedModule = "animations";
		connectionTest_animations(outputDocument);
		TestedModule = "resources";
		connectionTest_resources(outputDocument);
		TestedModule = "galaxy";
		connectionTest_galaxy(outputDocument);
		TestedModule = "systems";
		connectionTest_systems(outputDocument);
		TestedModule = "diplomacy";
		connectionTest_diplomacy(outputDocument);
		TestedModule = "planets";
		connectionTest_planets(outputDocument);
		TestedModule = "networks";
		connectionTest_networks(outputDocument);
		TestedModule = "buildings";
		connectionTest_buildings(outputDocument);
		
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
	

	scenario_earlyAlpha2();
	loadLoadGame(outputDocument);
	if(SaveLoadErrorDetected) SettingSaveAutosave = false;
	saveAutosaveLoop(outputDocument);
	
	timerStart(outputDocument);
	
	//resourcesInitResources(outputDocument);
	
	interfaceRefreshMenuButtons(outputDocument);
	interfacePlanetOverviewChangeTab(outputDocument,"planetOverviewResourcesPanelStorage"); 
	interfacePlanetOverviewActivateTabHeader(outputDocument,"planetOverviewResourcesPanelStorageButton");
	
	animationMoveBackground(outputDocument);
	
	if(mainDebugMode) {
		//interfaceChangeMenuTab(outputDocument,SettingsMenuID);
		//interfaceChangeMenuTab(outputDocument,InterfaceMainMenuID);
	}
	
	if(ProgressIntroDisplayedOrSkipped){
		newAnimatedElementOpacity(outputDocument, mainIntroInterfaceCoverID, mainLoadFadeSpeed, 0, 1);
	}
	else {
		animationDisplayIntro(outputDocument);
	}
}

function logBase(tmpValue, tmpBase) {
	let tmpLog = Math.log(tmpValue) / Math.log(tmpBase);
	let tmpRoundLog = Math.round(Math.log(tmpValue) / Math.log(tmpBase));
	
	// console.log(Math.log(tmpValue) + " " + Math.log(tmpBase));
	// console.log(tmpLog);
	// console.log(tmpRoundLog);
	// console.log(tmpLog - tmpRoundLog);
	
	if(Math.abs(tmpLog - tmpRoundLog) < 0.000000001) return tmpRoundLog;
	
	return Math.log(tmpValue) / Math.log(tmpBase);
}

function distanceToSegment(x, y, x1, y1, x2, y2){
	var A = x - x1;
	var B = y - y1;
	var C = x2 - x1;
	var D = y2 - y1;
	
	var dot = A * C + B * D;
	var len_sq = C * C + D * D;
	var param = -1;
	if (len_sq != 0) param = dot / len_sq;
	else{
		return(Math.sqrt(A * A + B * B));
	}

	var xx, yy;

	if (param < 0) {
		xx = x1;
		yy = y1;
	}
	else if (param > 1) {
		xx = x2;
		yy = y2;
	}
	else {
		xx = x1 + param * C;
		yy = y1 + param * D;
	}

	var dx = x - xx;
	var dy = y - yy;
	return Math.sqrt(dx * dx + dy * dy);
}

function isNotNaN(inputString){
	if(isNaN(inputString.trim())) return false;
	else return true;
}

var mainOrdersOfMagnitudeArray = ["","k","M","T","Qa","Qi","Sx","Sp","Oc","No","Dc"];
var mainOrdersOfMagnitudeArrayLength = mainOrdersOfMagnitudeArray.length;

function bigNumberToString(inputNumber){
	if(isNaN(inputNumber)) {
		console.warn(inputNumber + " cannot be converted.");
		return "0.0";
	}
	else if(inputNumber == 0){
		return "0.0";
	}
	else{
		let tmpInputNumber;
		if(inputNumber < 0) tmpInputNumber = (-1) * inputNumber;
		else tmpInputNumber = inputNumber;
		
		// let tmpOoM = Math.floor(logBase(tmpInputNumber, 10));
		let tmpOoM = 0;
		let tmpPreDivisionNumber = tmpInputNumber;
		while(tmpInputNumber > 10){
			tmpOoM++;
			tmpInputNumber /= 10;
		}
		
		let tmpMainOoM = Math.floor(tmpOoM/3);
		for(let i = 0; i < tmpMainOoM; i++) inputNumber /= 1000;
		
		let tmpReturnNumberSplit = inputNumber.toString().split('.');
		let tmpReturnNumberText = "";
		if(tmpReturnNumberSplit.length > 1){
			tmpReturnNumberText = (tmpReturnNumberSplit[0] + '.' + tmpReturnNumberSplit[1].padEnd(2,'0').substr(0,2));
		}
		else{
			 tmpReturnNumberText = (tmpReturnNumberSplit[0] + ".00");
		}
		
		if(tmpMainOoM > 0){
			if (tmpMainOoM >= mainOrdersOfMagnitudeArrayLength) {
				tmpReturnNumberText += ('e' + (tmpMainOoM*3));
			}
			else{
				tmpReturnNumberText += (' ' + mainOrdersOfMagnitudeArray[tmpMainOoM]);
			}
		}
		
		return tmpReturnNumberText;
		
		/*
		if(tmpMainOoM <= 0 ){
			
		}
		else if (tmpMainOoM >= mainOrdersOfMagnitudeArrayLength){
			let tmpReturnNumber = inputNumber;
			
			// if(tmpReturnNumber > 0) tmpReturnNumber = Math.floor(tmpReturnNumber*100)/100;
			// else tmpReturnNumber = Math.ceil(tmpReturnNumber*100)/100;
			
			
			
			return (tmpReturnNumber).toFixed(2) + 'e' + (tmpMainOoM*3);
		}
		else{
			let tmpReturnNumber = inputNumber;
			for(let i = 0; i < tmpMainOoM; i++) tmpReturnNumber /= 1000;
			//if(tmpReturnNumber > 0) tmpReturnNumber = Math.floor(tmpReturnNumber*100)/100;
			//else tmpReturnNumber = Math.ceil(tmpReturnNumber*100)/100;
			
			let tmpReturnNumberSplit = tmpReturnNumber.toString().split('.');
			
			let tmpReturnNumberText = "";
			if(tmpReturnNumberSplit.length > 1){
				tmpReturnNumberText = (tmpReturnNumberSplit[0] + '.' + tmpReturnNumberSplit[1].padEnd(2,'0').substr(0,1));
			}
			else{
				tmpReturnNumberText = (tmpReturnNumberSplit[0] + ".00");
			}
			
			return tmpReturnNumberText + " " + mainOrdersOfMagnitudeArray[tmpMainOoM];
		}*/
	}
}





