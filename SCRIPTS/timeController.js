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
var minorTickLength = 0.025;

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
	
		console.log("Timeout #" + timerDebugTimeoutCounter + ": " +tmpTimeoutElapsedTime + 
		", TOTAL: " + timerDebugTimeoutTotalElapsedTime +
		", AVG: " + timerDebugTimeoutAverageElapsedTime);
	}
	
	timerDebugTimeoutLastTime = debugTimeNow;
	timerDebugTimeoutCounter++;
	
	if(!timerDebugIntervalTimeoutInterrupt){		
		setTimeout(() => {
			timerTestFunction(outputDocument);
		}, timerDebugTimeoutTimeMs);
	}
}