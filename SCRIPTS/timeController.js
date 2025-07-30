function connectionTest_timer(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"timer\" reporting issues.");
		return false;
	}
}

var majorTickLength = 2.0;
var minorTickLength = 0.015;

var timerDebugTimeoutLastTime = 0;
var timerDebugTimeoutTimeMs = 5000;
var timerDebugTimeoutCounter = 0;
var timerDebugTimeoutTotalElapsedTime = 0;
var timerDebugTimeoutAverageElapsedTime = 0;

var timerDebugIntervalRef = null;
var timerDebugIntervalLastTime = 0;
var timerDebugIntervalTimeMs = 5000;
var timerDebugIntervalCounter = 0;
var timerDebugIntervalActive = false;
var timerDebugIntervalTotalElapsedTime = 0;
var timerDebugIntervalAverageElapsedTime = 0;

var timerDebugIntervalTimeoutInterrupt = false;

var timerStarted = false;
var timerStartTime = -1;
var timerLastTime = -1;
var timerRegularSpeedSeconds = 4;
var timerFasterSpeedSeconds = 1;
var timerAccumulatedFasterTime = 0;
var timerAFKMarginSeconds = 15;
var timerAFKDetected = false;
var timerAFKExtraSeconds = 0;
var timerGamePaused = false;
var timerDebugActive = false;


function timerStart(outputDocument){
	timerStartTime = Math.round(Date.now()/1000);
	timerLastTime = timerStartTime;
	timerStandardFasterDifference = timerRegularSpeedSeconds - timerFasterSpeedSeconds;
	setTimeout(() => {
		console.log("Main timer is starting.");
		timerStarted = true;
		if(timerGamePaused) console.log("Warning: Flow of time is/was paused at start.");
		timerMain(outputDocument);
	}, 1000*timerRegularSpeedSeconds);
}

function timerMain(outputDocument){
	
	var timeNow = Math.round(Date.now()/1000);
	var elapsedSeconds = timeNow - timerLastTime;
	
	if(elapsedSeconds < 0) {
		console.log("Error. Negative time flow. Timer is stopping.");
		window.alert("Negative time flow detected. This may be due to system time change. Please refresh browser tab.");
	}
	
	if(elapsedSeconds > timerAFKMarginSeconds) {
		timerAFKExtraSeconds += elapsedSeconds;
		timerAFKDetected = true;
	}
	else if(timerAFKDetected){
		timerAccumulatedFasterTime += timerAFKExtraSeconds;
		console.log("Welcome back, you have been away for "+timerAFKExtraSeconds+" seconds.");
		timerAFKDetected = false;
		timerAFKExtraSeconds = 0;
	}
	
	timerLastTime = timeNow;
	
	if(timerGamePaused){
		timerAccumulatedFasterTime += elapsedSeconds;
	}
	else{
		
		timerTriggerNewDay(outputDocument, elapsedSeconds);
		
		if(timerAccumulatedFasterTime > timerStandardFasterDifference){
			
			timerAccumulatedFasterTime -= timerStandardFasterDifference;
			setTimeout(() => {
				timerMain(outputDocument);
			}, 1000*timerFasterSpeedSeconds);
		}
		else{
			setTimeout(() => {
				timerMain(outputDocument);
			}, 1000*timerRegularSpeedSeconds);
		}
	}
}

function timerTriggerNewDay(outputDocument, elapsedSeconds){
	
	if(timerDebugActive) timerOutputDebug(outputDocument, elapsedSeconds);
	
}

function timerOutputDebug(outputDocument, elapsedSeconds){
	var tmpConsoleOutputArray = [];
	tmpConsoleOutputArray["0_timerLastTime"] = timerLastTime;
	tmpConsoleOutputArray["1_timeNow"] = timerLastTime+elapsedSeconds;
	tmpConsoleOutputArray["2_elapsedSeconds"] = elapsedSeconds;
	tmpConsoleOutputArray["3_timerAFKDetected"] = timerAFKDetected;
	tmpConsoleOutputArray["4_timerAFKExtraSeconds"] = timerAFKExtraSeconds;
	tmpConsoleOutputArray["5_timerAccumulatedFasterTime"] = timerAccumulatedFasterTime;
	console.log(tmpConsoleOutputArray);
}

function timerTestFunction(outputDocument){
	var debugTimeNow = Date.now();
	
	if(timerDebugIntervalTimeoutInterrupt && timerDebugIntervalActive){
		timerDebugIntervalRef.clearInterval();
	}
	
	if(!timerDebugIntervalActive){
		
		timerDebugIntervalLastTime = Date.now();
		
		setInterval(() => {
			timerDebugIntervalCounter++;
			var tmpIntervalElapsedTime = (Date.now() - timerDebugIntervalLastTime);
			timerDebugIntervalTotalElapsedTime += tmpIntervalElapsedTime;
			timerDebugIntervalAverageElapsedTime = timerDebugIntervalTotalElapsedTime/timerDebugIntervalCounter;
			
			console.log("Interval #"+timerDebugIntervalCounter+": "+tmpIntervalElapsedTime +
			", TOTAL: " + timerDebugIntervalTotalElapsedTime +
			", AVG: " + timerDebugIntervalAverageElapsedTime);
			
			timerDebugIntervalLastTime = Date.now();
		},timerDebugIntervalTimeMs);
		
		timerDebugIntervalActive = true;
	}
	
	var tmpTimeoutElapsedTime = (debugTimeNow - timerDebugTimeoutLastTime);
	
	if(timerDebugTimeoutCounter>0){
		timerDebugTimeoutTotalElapsedTime += tmpTimeoutElapsedTime;
		timerDebugTimeoutAverageElapsedTime = timerDebugTimeoutTotalElapsedTime/timerDebugTimeoutCounter;
	
		/*console.log("Timeout #" + timerDebugTimeoutCounter + ": " +tmpTimeoutElapsedTime + 
		", TOTAL: " + timerDebugTimeoutTotalElapsedTime +
		", AVG: " + timerDebugTimeoutAverageElapsedTime);*/
	}
	
	timerDebugTimeoutLastTime = debugTimeNow;
	timerDebugTimeoutCounter++;
	
	if(!timerDebugIntervalTimeoutInterrupt){		
		setTimeout(() => {
			timerTestFunction(outputDocument);
		}, timerDebugTimeoutTimeMs);
	}
}