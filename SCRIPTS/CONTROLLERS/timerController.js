function connectionTest_timer(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"timer\" reporting issues.");
		return false;
	}
}

var MajorTickLength = 2.0;
var MinorTickLength = 0.015;

var TimerDebugTimeoutLastTime = 0;
var TimerDebugTimeoutTimeMs = 5000;
var TimerDebugTimeoutCounter = 0;
var TimerDebugTimeoutTotalElapsedTime = 0;
var TimerDebugTimeoutAverageElapsedTime = 0;

var TimerDebugIntervalRef = null;
var TimerDebugIntervalLastTime = 0;
var TimerDebugIntervalTimeMs = 5000;
var TimerDebugIntervalCounter = 0;
var TimerDebugIntervalActive = false;
var TimerDebugIntervalTotalElapsedTime = 0;
var TimerDebugIntervalAverageElapsedTime = 0;

var TimerDebugIntervalTimeoutInterrupt = false;

var TimerStarted = false;
var TimerStartTime = -1;
var TimerLastTime = -1;
var TimerRegularSpeedSeconds = 4;
var TimerFasterSpeedSeconds = 1;
var TimerAccumulatedFasterTime = 0;
var TimerAFKBonusActive = true;
var TimerAFKMarginSeconds = 15;
var TimerAFKDetected = false;
var TimerAFKExtraSeconds = 0;
var TimerGamePaused = false;
var TimerDebugActive = false;

var TimerTotalElapsedDays = 0;
var TimerElapsedYears = 0;
var TimerDaysInYear = 400;
var TimerDayOfYear = 0;


function timerStart(outputDocument){
	TimerStartTime = Math.round(Date.now()/1000);
	TimerLastTime = TimerStartTime;
	TimerStandardFasterDifference = TimerRegularSpeedSeconds - TimerFasterSpeedSeconds;
	setTimeout(() => {
		console.log("Main timer is starting.");
		interfaceAddBottomMessage(outputDocument, "Main timer is starting.");
		TimerStarted = true;
		if(TimerGamePaused) {
			console.log("Warning: Flow of time is/was paused at start.");
			interfaceAddBottomMessage(outputDocument, "Warning: Flow of time is/was paused at start.");
		}
		timerMain(outputDocument);
	}, 1000*TimerFasterSpeedSeconds);
}

function timerMain(outputDocument){
	
	var timeNow = Math.round(Date.now()/1000);
	var elapsedSeconds = timeNow - TimerLastTime;
	
	//console.log(elapsedSeconds);
	
	if(elapsedSeconds < 0) {
		console.log("Error. Negative time flow. Timer is stopping.");
		interfaceAddBottomMessage(outputDocument, "Error. Negative time flow. Timer is stopping.");
		window.alert("Negative time flow detected. This may be due to system time change. Please refresh browser tab.");
	}
	
	if(elapsedSeconds > TimerAFKMarginSeconds) {
		TimerAFKExtraSeconds += elapsedSeconds;
		TimerAFKDetected = true;
		
		//console.log("AFK DETECTED: " + TimerAFKExtraSeconds);
	}
	else if(TimerAFKDetected){
		//console.log("AFK ENDING: " + TimerAccumulatedFasterTime + " + " + TimerAFKExtraSeconds);
		
		TimerAccumulatedFasterTime += TimerAFKExtraSeconds;
		console.log("Welcome back, you have been away for about " + timerSecondsToTimeString(TimerAFKExtraSeconds));
		interfaceAddBottomMessage(outputDocument, "Welcome back, you have been away for about " + timerSecondsToTimeString(TimerAFKExtraSeconds));
		TimerAFKDetected = false;
		TimerAFKExtraSeconds = 0;
	}
	
	if(isNaN(TimerAccumulatedFasterTime)){
			TimerAccumulatedFasterTime = 0;
			console.log("Warning: Accumulated time error detected. Save might be corrupted.");
			interfaceAddBottomMessage(outputDocument, "Warning: Accumulated time error detected. Save might be corrupted.");
	}
	
	TimerLastTime = timeNow;
	
	if(TimerGamePaused){
		TimerAccumulatedFasterTime += elapsedSeconds;
		setTimeout(() => {
				timerMain(outputDocument);
		}, 1000 * TimerFasterSpeedSeconds);
	}
	else{
		
		if(!TimerAFKDetected) timerTriggerNewDay(outputDocument, elapsedSeconds);
		
		if(TimerAccumulatedFasterTime >= TimerStandardFasterDifference && TimerAFKBonusActive){
			
			if(!TimerAFKDetected) TimerAccumulatedFasterTime -= TimerStandardFasterDifference;
			setTimeout(() => {
				timerMain(outputDocument);
			}, 1000 * TimerFasterSpeedSeconds);
		}
		else{
			setTimeout(() => {
				timerMain(outputDocument);
			}, 1000 * TimerRegularSpeedSeconds);
		}
	}
	
	timerUpdateCallendar(outputDocument);
}

function timerSwitchGamePause(){
	if(TimerGamePaused) {
		TimerGamePaused = false;
	}
	else {
		TimerGamePaused = true;
	}
}
function timerSwitchAFKTimeBonus(){
	if(TimerAFKBonusActive) {
		TimerAFKBonusActive = false;
	}
	else {
		TimerAFKBonusActive = true;
	}
}

function timerSecondsToTimeString(sumOfSeconds){
	var timeString = "";
	var timeSeconds = sumOfSeconds%60;
	var timeMinutes = ((sumOfSeconds - timeSeconds)/60)%60;
	var timeHours = ((((sumOfSeconds - timeSeconds)/60) - timeMinutes)/60)%24;
	var timeDays = ((((sumOfSeconds - timeSeconds)/60 - timeMinutes)/60 - timeHours)/24);
	
	if(timeDays > 0){
		timeString += timeDays;
		if(timeDays == 1)
			timeString += " day";
		else timeString += " days";
	}
	if(timeHours > 0){
		if(timeDays > 0) {
			if(timeMinutes == 0 && timeSeconds == 0) timeString += " and ";
			else timeString += ", ";
		}
		
		timeString += timeHours;
		if(timeHours == 1)
			timeString += " hour";
		else timeString += " hours";
	}
	if(timeMinutes > 0){
		if(timeDays > 0 || timeHours > 0) {
			if(timeSeconds == 0) timeString += " and ";
			else timeString += ", ";
		}
		timeString += timeMinutes;
		if(timeMinutes == 1)
			timeString += " minute";
		else timeString += " minutes";
	}
	if(timeSeconds > 0){
		if(timeDays > 0 || timeHours > 0 || timeMinutes > 0) timeString += " and ";
		
		timeString += timeSeconds;
		if(timeSeconds == 1)
			timeString += " second";
		else timeString += " seconds";
	}
	timeString += ".";
	return timeString;
}

function timerTriggerNewDay(outputDocument, elapsedSeconds){
	
	//console.log("TimerDayOfYear: "+TimerDayOfYear);
	//console.log("TimerTotalElapsedDays: "+TimerTotalElapsedDays);
	
	TimerDayOfYear++;
	TimerTotalElapsedDays++;
	
	SystemStarmapFlicker = Math.random();
	//if(SystemStarmapFlickerPhase > 314) SystemStarmapFlickerPhase = 0;
	
	while(TimerDayOfYear >= TimerDaysInYear) {
		TimerDayOfYear -= TimerDaysInYear;
		TimerElapsedYears++;
	}
	
	if(TimerDebugActive) timerOutputDebug(outputDocument, elapsedSeconds);
	
	//planet rotation
	//systemRefreshSystemCanvas(outputDocument);
}

var TimerCallendarLoaded = false;
var TimerCallendarYear;
var TimerCallendarDay;
var TimerCallendarClockSpeed;
var TimerCallendarAFKTime;
var TimerCallendarSecondRow;
var TimerCallendarTable;

var TimerAFKBonusButton;
var TimerPauseGameButton;

function timerUpdateCallendar(outputDocument){
	if(!TimerCallendarLoaded){
		TimerCallendarYear = outputDocument.getElementById("mainInterfaceDateYearText");
		TimerCallendarDay = outputDocument.getElementById("mainInterfaceDateDayText");
	
		TimerCallendarClockSpeed = outputDocument.getElementById("mainInterfaceClockSpeedText");
		TimerCallendarAFKTime = outputDocument.getElementById("mainInterfaceAFKTimeText");
		
		TimerCallendarSecondRow = outputDocument.getElementById("mainInterfaceAFKTimeTableRow");
		TimerCallendarTable = outputDocument.getElementById("mainInterfaceDateTableBody");
		
		TimerPauseGameButton = outputDocument.getElementById(InterfaceMainMenuButtonImagesID[23]);
		TimerAFKBonusButton = outputDocument.getElementById(InterfaceMainMenuButtonImagesID[24]);
		
		TimerCallendarLoaded = true;
	}
	
	TimerCallendarYear.innerHTML = (TimerElapsedYears + 1);
	TimerCallendarDay.innerHTML = (TimerDayOfYear + 1);
	
	if(TimerAFKBonusActive) {
		TimerCallendarClockSpeed.innerHTML = "x"+ Number(TimerRegularSpeedSeconds / TimerFasterSpeedSeconds).toFixed(2);
		TimerAFKBonusButton.src = InterfaceMainMenuIconPaths[34];
	}	
	else {
		TimerCallendarClockSpeed.innerHTML = "x"+ Number(TimerRegularSpeedSeconds / TimerRegularSpeedSeconds).toFixed(2);
		TimerAFKBonusButton.src = InterfaceMainMenuIconPaths[33];
	}
	
	if(TimerGamePaused){
		TimerPauseGameButton.src = InterfaceMainMenuIconPaths[30];
		TimerCallendarClockSpeed.innerHTML = "x"+ Number(0).toFixed(2);
	}
	else {
		TimerPauseGameButton.src = InterfaceMainMenuIconPaths[29];
	}
	
	TimerCallendarAFKTime.innerHTML = Math.floor(TimerAccumulatedFasterTime/TimerStandardFasterDifference);
	
	if(TimerAccumulatedFasterTime < TimerStandardFasterDifference) {
		TimerCallendarSecondRow.style.visibility = "hidden";
	}
	else TimerCallendarSecondRow.style.visibility = ""; 
}

function timerOutputDebug(outputDocument, elapsedSeconds){
	var tmpConsoleOutputArray = [];
	tmpConsoleOutputArray["0_timerLastTime"] = TimerLastTime;
	tmpConsoleOutputArray["1_timeNow"] = TimerLastTime + elapsedSeconds;
	tmpConsoleOutputArray["2_elapsedSeconds"] = elapsedSeconds;
	tmpConsoleOutputArray["3_timerAFKDetected"] = TimerAFKDetected;
	tmpConsoleOutputArray["4_timerAFKExtraSeconds"] = TimerAFKExtraSeconds;
	tmpConsoleOutputArray["5_timerAccumulatedFasterTime"] = TimerAccumulatedFasterTime;
	console.log(tmpConsoleOutputArray);
}

function timerTestFunction(outputDocument){
	var debugTimeNow = Date.now();
	
	if(TimerDebugIntervalTimeoutInterrupt && TimerDebugIntervalActive){
		TimerDebugIntervalRef.clearInterval();
	}
	
	if(!TimerDebugIntervalActive){
		
		TimerDebugIntervalLastTime = Date.now();
		
		setInterval(() => {
			TimerDebugIntervalCounter++;
			var tmpIntervalElapsedTime = (Date.now() - TimerDebugIntervalLastTime);
			TimerDebugIntervalTotalElapsedTime += tmpIntervalElapsedTime;
			TimerDebugIntervalAverageElapsedTime = TimerDebugIntervalTotalElapsedTime / TimerDebugIntervalCounter;
			
			console.log("Interval #" + TimerDebugIntervalCounter + ": " + tmpIntervalElapsedTime +
			", TOTAL: " + TimerDebugIntervalTotalElapsedTime +
			", AVG: " + TimerDebugIntervalAverageElapsedTime);
			
			TimerDebugIntervalLastTime = Date.now();
		},TimerDebugIntervalTimeMs);
		
		TimerDebugIntervalActive = true;
	}
	
	var tmpTimeoutElapsedTime = (debugTimeNow - TimerDebugTimeoutLastTime);
	
	if(TimerDebugTimeoutCounter>0){
		TimerDebugTimeoutTotalElapsedTime += tmpTimeoutElapsedTime;
		TimerDebugTimeoutAverageElapsedTime = TimerDebugTimeoutTotalElapsedTime / TimerDebugTimeoutCounter;
	
		/*console.log("Timeout #" + timerDebugTimeoutCounter + ": " +tmpTimeoutElapsedTime + 
		", TOTAL: " + timerDebugTimeoutTotalElapsedTime +
		", AVG: " + timerDebugTimeoutAverageElapsedTime);*/
	}
	
	TimerDebugTimeoutLastTime = debugTimeNow;
	TimerDebugTimeoutCounter++;
	
	if(!TimerDebugIntervalTimeoutInterrupt){		
		setTimeout(() => {
			timerTestFunction(outputDocument);
		}, TimerDebugTimeoutTimeMs);
	}
}