var outputNoWindowElements = ["textWindow_1","textWindow_2","textWindow_3","textWindow_4","textWindow_5","textWindow_6","textWindow_7","textWindow_8","textWindow_9","textWindow_10"];
var outputWindowElements = ["AIMessageWindow"];
var outputWarningWindows = ["warningWindow_1","warningWindow_2","warningWindow_3","warningWindow_4","warningWindow_5","warningWindow_6"];
var outputWarningHeaders = ["warningHeader_1","warningHeader_2","warningHeader_3","warningHeader_4","warningHeader_5","warningHeader_6"];
var outputWarningText = ["warningText_1","warningText_2","warningText_3","warningText_4","warningText_5","warningText_6"];

var textColors = [
	"hsl(0,100%,75%)", //red 0
	"hsl(120,100%,75%)", //green 1
	"hsl(240,100%,75%)", //blue 2
	"hsl(0,100%,50%)", //alert 3
	"hsl(180,75%,75%)", //cyan text 4
	"hsl(60,100%,75%)"//orange 5
]

var introPopupMessages = [
	
	["FAILED",textColors[0]],//0
	["DAMAGED",textColors[0]],//1
	["FATAL ERROR",textColors[0]],//2
	["FAILED TO START",textColors[0]],//3
	["CRITICAL",textColors[0]],//4
	["SUCCESS",textColors[1]],//5
	["OPERATIONAL",textColors[1]],//6
	["ACTIVATED",textColors[1]],//7
	["WARNING",textColors[3]],//8
	["NOT RESPONDING",textColors[0]],//9
	
	["CHECKING [SENSORS]",textColors[4]],//10
//	["SEARCHING [HOSTILES]",textColors[4]],//11
	["SEARCHING FOR [HOSTILES]",textColors[4]],//11 +0.2
	["NOT FOUND",textColors[1]],//12
	["EMERGENCY JUMP",textColors[4]],//13
	["SUCCESSFUL",textColors[1]],//14
	["RUNNING GENERAL SYSTEM CHECKUP",textColors[4]],//15
	["ABORTED",textColors[5]],//16
	
	["<br>PLANET ON COLLISION COURSE",textColors[3]],//17
	
	["CHECKING [COLLISION AVOIDANCE SYSTEM]",textColors[4]],//18
//	["ACTIVATING [COLLISION AVOIDANCE SYSTEM]",textColors[4]],//19
	["ATTEMPTING [COLLISION AVOIDANCE MANEUVER]",textColors[4]],//19 +0.1
	
	["<br>[COLLISION AVOIDANCE SYSTEM]<br>FATAL ERROR",textColors[3]],//20
	
	["RESTARTING [COLLISION AVOIDANCE SYSTEM]",textColors[4]],//21
//	["CHECKING [REVERSE THRUSTERS]",textColors[4]],//22
	["CHECKING [MANEUVERING THRUSTERS]",textColors[4]],//22 +0.2
//	["ACTIVATING [REVERSE THRUSTERS]",textColors[4]],//23
	["BURNING [REVERSE THRUSTERS]",textColors[4]],//23 -0.15
	
	["<br>ENTERING ATMOSPHERE",textColors[3]],//24
	["CHECKING [SHIELD SYSTEMS]",textColors[4]],//25
	
	["<br>[MAIN REVERSE THRUSTER]<br>DAMAGED",textColors[3]],//26
	
	["INACTIVE",textColors[5]],//27
	["RESTARTING [SHIELDS SYSTEM]",textColors[4]],//28
//	["ACTIVATING [SHIELDS]",textColors[4]],//29
	["RAISING [SHIELDS]",textColors[4]],//29 -0.15
	
	["<br>PLANETARY CRASH IMMINIENT<br>BRACE FOR IMPACT",textColors[3]],//30
	["SHIELDS ACTIVE",textColors[1]],//31
	["<br>SHIELDS<br>CRITICAL",textColors[3]],//32
	
	["RESTORING SYSTEM",textColors[4]],//33
	["SEVERE DAMAGE DETECTED",textColors[3]],//34
	["CHECKING COMMANDER'S VITAL SIGNATURE",textColors[4]],//35
	["ALIVE, NOT RESPONDING",textColors[5]],//36
	["CALLING [BRIDGE]",textColors[4]],//37
	["ENTERING EMERGENCY MODE",textColors[4]],//38
	["STARTING EMERGENCY CHECKUP",textColors[4]],//39
	["CHECKING [LIFE SUPPORT SYSTEM]",textColors[4]],//40
	["CHECKING [AI PERSONA]",textColors[4]],//41
	["STARTING [AI PERSONA]",textColors[4]],//42
	["CHECKING [POWER MANAGEMENT SYSTEM]",textColors[4]],//43
	["RUNNING [POWER STATUS]",textColors[4]],//44
	["LOW ENERGY",textColors[5]],//45
	["CHECKING [MAIN POWER GENERATOR]",textColors[4]],//46
	["RESTARTING [MAIN POWER GENERATOR]",textColors[4]],//47
	["CHECKING [SECONDARY POWER GENERATOR]",textColors[4]],//48
	["RESTARTING [SECONDARY POWER GENERATOR]",textColors[4]],//49
	["CHECKING [EMERGENCY GENERATOR]",textColors[4]],//50
	["STARTING [EMERGENCY GENERATOR]",textColors[4]],//51
	
	["[AI PERSONA] ACTIVATED IN LOW POWER EMERGENCY MODE",textColors[4]],//52
	["TRANSFERING MAIN CONTROL TO [AI PERSONA]",textColors[4]]//53
	
	
	]
	
function warningTest(outputDocument) {
	newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 0.5, 1.0);
	newAnimatedElementOpacity(outputDocument, outputWarningWindows[1], 2, 1.0);
	newAnimatedElementOpacity(outputDocument, outputWarningWindows[2], 3, 1.0);
	newAnimatedElementOpacity(outputDocument, outputWarningWindows[3], 4, 1.0);
	newAnimatedElementOpacity(outputDocument, outputWarningWindows[4], 5, 1.0);
	
	newDisplayElement(outputDocument,outputWarningWindows[0],"15%","5%","70%");
	newDisplayElement(outputDocument,outputWarningWindows[1],250,200);
	newDisplayElement(outputDocument,outputWarningWindows[2],250,350);
	newDisplayElement(outputDocument,outputWarningWindows[3],250,500);
	newDisplayElement(outputDocument,outputWarningWindows[4],250,650);
	
	newDisplayFixedMessage(outputDocument,outputWarningHeaders[0],0,0,introPopupMessages[8]);
	newDisplayFixedMessage(outputDocument,outputWarningHeaders[1],0,0,introPopupMessages[8]);
	newDisplayFixedMessage(outputDocument,outputWarningHeaders[2],0,0,introPopupMessages[8]);
	newDisplayFixedMessage(outputDocument,outputWarningHeaders[3],0,0,introPopupMessages[8]);
	newDisplayFixedMessage(outputDocument,outputWarningHeaders[4],0,0,introPopupMessages[8]);
	
	newDisplayAnimatedMessage(outputDocument, outputWarningText[0], 0,0,introPopupMessages[15],0.5);
	newDisplayAnimatedMessage(outputDocument, outputWarningText[1], 0,0,introPopupMessages[16],0.5);
	newDisplayAnimatedMessage(outputDocument, outputWarningText[2], 0,0,introPopupMessages[17],0.5);
	newDisplayAnimatedMessage(outputDocument, outputWarningText[3], 0,0,introPopupMessages[18],0.5);
	newDisplayAnimatedMessage(outputDocument, outputWarningText[4], 0,0,introPopupMessages[19],0.5);
}
	
var activeAlertID;
var ConsoleX = 30;
var ConsoleY = 300;
var ConsoleX_2 = 450;
var ConsoleMessageOffset = 25;	
var ConsoleMessageFadeDefaultTime = 4.0;

var AlertBaseX = 0;
var AlertBaseY = 30;
var AlertPopupPositionX = 0;
var AlertPopupPositionY = 360;
var AlertOffsetBaseX = 30;
var AlertOffsetExtraX = 30;
var AlertOffsetBaseY = 0;
var AlertOffsetExtraY = 0;

var IntroAnimationPartOneDelay = 0;
var IntroAnimationPartTwoDelay = 8500;
var IntroAnimationPartThreeDelay = 13000;
var IntroAnimationPartFourDelay = 1000;

function newSmoothIncreaseWidth(outputDocument, elementID, growthRate, absVal, effectSpeed, targetWidth, startWidth=-1){
    
	//startWidth = startWidth + (targetWidth - startWidth)*growthRate + targetWidth/absVal;
	startWidth = startWidth + (targetWidth - startWidth)*growthRate + absVal;
	
	if(startWidth >= targetWidth) {
		outputDocument.getElementById(elementID).style.width = targetWidth+"px";
	}
	else{
		outputDocument.getElementById(elementID).style.width = startWidth+"px";
		setTimeout(() => {newSmoothIncreaseWidth(outputDocument, elementID, growthRate, absVal, effectSpeed, targetWidth, startWidth);},1000/effectSpeed);
	}
}
function newSmoothDecreaseWidth(outputDocument, elementID, shrinkRate, absVal, effectSpeed, targetWidth, startWidth=-1){

    //startWidth = startWidth - (startWidth-targetWidth)*shrinkRate - targetWidth/absVal;
	startWidth = startWidth - (startWidth-targetWidth)*shrinkRate - absVal;
	
	if(startWidth<=targetWidth) {
		outputDocument.getElementById(elementID).style.width = targetWidth+"px";
	}
	else{
		outputDocument.getElementById(elementID).style.width = startWidth+"px";
		setTimeout(() => {newSmoothDecreaseWidth(outputDocument, elementID, shrinkRate, absVal, effectSpeed, targetWidth, startWidth);},1000/effectSpeed);
	}
}

function newSmoothIncreaseHeight(outputDocument, elementID, growthRate, absVal, effectSpeed, targetHeight, startHeight=0){
    
	//startHeight = startHeight + (targetHeight - startHeight)*growthRate + targetHeight/absVal;
	startHeight = startHeight + (targetHeight - startHeight)*growthRate + absVal;
	
	if(startHeight>=targetHeight) {
		outputDocument.getElementById(elementID).style.height = targetHeight+"px";
	}
	else{
		outputDocument.getElementById(elementID).style.height = startHeight+"px";
		setTimeout(() => {newSmoothIncreaseHeight(outputDocument, elementID, growthRate, absVal, effectSpeed, targetHeight, startHeight);},1000/effectSpeed);
	}
}
function newSmoothDecreaseHeight(outputDocument, elementID, shrinkRate, absVal, effectSpeed, targetHeight, startHeight=0){

    //startHeight = startHeight - (startHeight - targetHeight)*shrinkRate - targetHeight/absVal;
	startHeight = startHeight - (startHeight - targetHeight)*shrinkRate - absVal;
	
	if(startHeight<=targetHeight) {
		outputDocument.getElementById(elementID).style.height = targetHeight+"px";
	}
	else{
		outputDocument.getElementById(elementID).style.height = startHeight+"px";
		setTimeout(() => {newSmoothDecreaseHeight(outputDocument, elementID, shrinkRate, absVal, effectSpeed, targetHeight, startHeight);},1000/effectSpeed);
	}
}


function newDisplayIntro(outputDocument) {
	setTimeout(newDisplayIntroPartOne,1000 * minorTickLength * IntroAnimationPartOneDelay,outputDocument);
	//setTimeout(newDisplayIntroPartTwo,1000 * minorTickLength * IntroAnimationPartOneDelay,outputDocument);
	//setTimeout(newDisplayIntroPartTwo,1000 * minorTickLength * IntroAnimationPartTwoDelay,outputDocument);
}
	
function newDisplayIntroPartOne(outputDocument, tickCounter = 0) {
	//console.log(tickCounter);
	if(tickCounter==0) {//init
	//	tickCounter=8400;
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 6, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 6, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 6, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 6, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 6, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 6, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 6, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 6, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], 6, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], 6, 1.0);
	}
	if(tickCounter==100) { //'emergency jump' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[13],0.7);
	}
	if(tickCounter==200) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[13][0]+".",textColors[4]]);
	}
	if(tickCounter==225) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[13][0]+"..",textColors[4]]);
	}
	if(tickCounter==250) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[13][0]+"...",textColors[4]]);
	}
	if(tickCounter==300) { //'successful' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[14],0.5,true);
	}
	if(tickCounter==400) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==450) { //'checking sensors' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[10],0.9);
	}
	if(tickCounter==575) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[10][0]+".",textColors[4]]);
	}
	if(tickCounter==600) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[10][0]+"..",textColors[4]]);
	}
	if(tickCounter==625) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[10][0]+"...",textColors[4]]);
	}
	if(tickCounter==675) { //'operational' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(tickCounter==775) { //move 2
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==825) { //'scanning' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[11],1.2);
	}
	if(tickCounter==975) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[11][0]+".",textColors[4]]);
	}
	if(tickCounter==1000) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[11][0]+"..",textColors[4]]);
	}
	if(tickCounter==1025) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[11][0]+"...",textColors[4]]);
	}
	if(tickCounter==1075) { //'not found' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[12],0.45,true);
	}
	if(tickCounter==1150) { //move 3 
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==1200) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==1200) { //'RUN SYSTEM CHECK' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[15],1.5);
	}
	if(tickCounter==1400) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(tickCounter==1450) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(tickCounter==1500) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(tickCounter==1550) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],textColors[4]]);
	}
	if(tickCounter==1575) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==1600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(tickCounter==1650) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(tickCounter==1650) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(tickCounter==1700) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
		
	}
	if(tickCounter==1750) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],textColors[4]]);
	}
	if(tickCounter==1800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(tickCounter==1850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(tickCounter==1900) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(tickCounter==1950) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],textColors[4]]);
	}
	if(tickCounter==1950) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==2000) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(tickCounter==2025) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(tickCounter==2050) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(tickCounter==2100) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(tickCounter==2150) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],textColors[4]]);
	}
	if(tickCounter==2200) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}	
	if(tickCounter==2250) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(tickCounter==2300) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(tickCounter==2350) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],textColors[4]]);
	}
	if(tickCounter==2400) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(tickCounter==2400) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(tickCounter==2450) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(tickCounter==2475) { //alarm 1
		redAlert(outputDocument);
		activeAlertID = setInterval(redAlert, 2500, outputDocument);
		
		newDisplayElement(outputDocument,outputWarningWindows[0],AlertPopupPositionX,AlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[0],0,0,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[0], 0,0,introPopupMessages[17],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[0],0.2,1.5);
	}
	if(tickCounter==2500) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(tickCounter==2550) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],textColors[4]]);
	}
	if(tickCounter==2550) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[0],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[0],0,0,AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,0,1);
	}
	if(tickCounter==2600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}	
	if(tickCounter==2650) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(tickCounter==2700) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(tickCounter==2750) { //'aborted' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[16],0.35,true);
	}
	if(tickCounter==2825) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==2875) { //checking CAS show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[18],1.85);
	}
	if(tickCounter==3100) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[18][0]+".",textColors[4]]);
	}
	if(tickCounter==3125) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[18][0]+"..",textColors[4]]);
	}
	if(tickCounter==3150) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[18][0]+"...",textColors[4]]);
	}
	if(tickCounter==3200) { //'operational' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(tickCounter==3300) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==3350) { //activate CAS show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[19],2.05);
	}
	if(tickCounter==3600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+".",textColors[4]]);
	}
	if(tickCounter==3625) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}	
	if(tickCounter==3625) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"..",textColors[4]]);
	}
	if(tickCounter==3650) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"...",textColors[4]]);
	}
	if(tickCounter==3675) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0],textColors[4]]);
	}
	if(tickCounter==3700) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+".",textColors[4]]);
	}
	if(tickCounter==3725) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"..",textColors[4]]);
	}
	if(tickCounter==3750) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"...",textColors[4]]);
	}
	if(tickCounter==3775) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0],textColors[4]]);
	}
	if(tickCounter==3800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+".",textColors[4]]);
	}
	if(tickCounter==3825) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"..",textColors[4]]);
	}
	if(tickCounter==3850) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"...",textColors[4]]);
	}
	if(tickCounter==3850) { //'CAS error' alarm
		newDisplayElement(outputDocument,outputWarningWindows[1],AlertPopupPositionX,AlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[1],0,0,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[1], 0,0,introPopupMessages[20],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[1], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[1],0.2,1.5);
	}
	if(tickCounter==3875) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0],textColors[4]]);
	}
	if(tickCounter==3900) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+".",textColors[4]]);
	}
	if(tickCounter==3925) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"..",textColors[4]]);
	}
	if(tickCounter==3925) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[1],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[1],0,0,AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,0,1);
		
		animatedMoveElement(outputDocument,outputWarningWindows[0],AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 1, 0.8);
		//newAnimatedElementScale(outputDocument,outputWarningWindows[0],0.5,0.75);
	}
	if(tickCounter==3950) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"...",textColors[4]]);
	}
	if(tickCounter==4000) { //'failed' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[0],0.30,true);
	}
	if(tickCounter==4075) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==4075) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(tickCounter==4100) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==4125) { //'restart CAS' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[21],1.95);
	}
	if(tickCounter==4350) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[21][0]+".",textColors[4]]);
	}
	if(tickCounter==4375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"..",textColors[4]]);
	}
	if(tickCounter==4400) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"...",textColors[4]]);
	}
	if(tickCounter==4450) { //'failed to start' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[3],0.75,true);
	}
	if(tickCounter==4550) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(tickCounter==4575) { //move 3
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==4625) { //'check thrusters' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[22],1.6);
	}
	if(tickCounter==4825) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[22][0]+".",textColors[4]]);
	}
	if(tickCounter==4850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[22][0]+"..",textColors[4]]);
	}
	if(tickCounter==4875) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[22][0]+"...",textColors[4]]);
	}
	if(tickCounter==4875) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==4925) { //'operational' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(tickCounter==5025) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==5075) { //'burn thrusters' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[23],1.35);
	}
	if(tickCounter==5250) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[23][0]+".",textColors[4]]);
	}
	if(tickCounter==5300) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[23][0]+"..",textColors[4]]);
	}
	if(tickCounter==5325) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(tickCounter==5350) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[23][0]+"...",textColors[4]]);
	}
	if(tickCounter==5375) { //'entering atmosphere' alarm
		newDisplayElement(outputDocument,outputWarningWindows[2],AlertPopupPositionX,AlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[2],0,0,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[2], 0,0,introPopupMessages[24],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[2], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[2],0.2,1.5);
	}
	if(tickCounter==5375) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==5425) { //'activated' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[5],0.45,true);
	}
	if(tickCounter==5450) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[2],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[2],0,0,AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,0,1);
		
		animatedMoveElement(outputDocument,outputWarningWindows[1],AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[1], 1, 0.8);
		
		animatedMoveElement(outputDocument,outputWarningWindows[0],AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX*2,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY*2,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 1, 0.6);
		//newAnimatedElementScale(outputDocument,outputWarningWindows[0],0.5,0.75);
	}
	if(tickCounter==5500) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==5550) { //'restart CAS' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[21],1.95);
	}
	if(tickCounter==5775) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+".",textColors[4]]);
	}
	if(tickCounter==5825) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"..",textColors[4]]);
	}
	if(tickCounter==5825) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==5825) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(tickCounter==5875) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"...",textColors[4]]);
	}
	if(tickCounter==5925) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+" ",textColors[4]]);
	}
	if(tickCounter==5975) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+".",textColors[4]]);
	}
	if(tickCounter==6025) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"..",textColors[4]]);
	}
	if(tickCounter==6075) { //... 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"...",textColors[4]]);
	}
	if(tickCounter==6125) { //'failed to start' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[3],0.75,true);
	}
	if(tickCounter==6250) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==6275) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(tickCounter==6300) { //'checking shields' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[25],1.25);
	}
	if(tickCounter==6300) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==6400) { //'thruster damage' alarm
		newDisplayElement(outputDocument,outputWarningWindows[3],AlertPopupPositionX,AlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[3],0,0,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[3], 0,0,introPopupMessages[26],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[3], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[3],0.2,1.5);
	}
	if(tickCounter==6475) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[25][0]+".",textColors[4]]);
	}
	if(tickCounter==6475) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[3],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[3],0,0,AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,0,1);
		
		animatedMoveElement(outputDocument,outputWarningWindows[2],AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[2], 1, 0.8);
		
		animatedMoveElement(outputDocument,outputWarningWindows[1],AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX*2,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY*2,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[1], 1, 0.6);
		
		animatedMoveElement(outputDocument,outputWarningWindows[0],AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX*2,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY*2,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX*3,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY*3,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 1, 0.4);
		//newAnimatedElementScale(outputDocument,outputWarningWindows[0],0.5,0.75);
	}
	if(tickCounter==6500) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[25][0]+"..",textColors[4]]);
	}
	if(tickCounter==6525) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[25][0]+"...",textColors[4]]);
	}
	if(tickCounter==6575) { //'inactive' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(tickCounter==6650) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==6700) { //'starting shields' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[28],1.35);
	}
	if(tickCounter==6850) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(tickCounter==6875) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[28][0]+".",textColors[4]]);
	}
	if(tickCounter==6900) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[28][0]+"..",textColors[4]]);
	}
	if(tickCounter==6925) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[28][0]+"...",textColors[4]]);
	}
	if(tickCounter==6975) { //'success' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[5],0.4,true);
	}
	if(tickCounter==7050) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime/2, 0.5);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime/2, 0.5);
	}
	if(tickCounter==7050) { //move 3
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==7100) { //'raising shields' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[29],0.85);
	}
	if(tickCounter==7175) { //'imminent crash' alarm
		newDisplayElement(outputDocument,outputWarningWindows[4],AlertPopupPositionX,AlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[4],0,0,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[4], 0,0,introPopupMessages[30],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[4], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[4],0.2,1.5);
	}
	if(tickCounter==7225) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[29][0]+".",textColors[4]]);
	}
	if(tickCounter==7250) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[29][0]+"..",textColors[4]]);
	}
	if(tickCounter==7250) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[4],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[4],0,0,AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,0,1);
		
		animatedMoveElement(outputDocument,outputWarningWindows[3],AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[3], 1, 0.8);
		
		animatedMoveElement(outputDocument,outputWarningWindows[2],AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX*2,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY*2,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[2], 1, 0.6);
		
		animatedMoveElement(outputDocument,outputWarningWindows[1],AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX*2,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY*2,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX*3,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY*3,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[1], 1, 0.4);
		
		animatedMoveElement(outputDocument,outputWarningWindows[0],AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX*3,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY*3,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX*4,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY*4,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 1, 0.2);
	}
	if(tickCounter==7275) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[29][0]+"...",textColors[4]]);
	}
	if(tickCounter==7325) { //'success' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[5],0.4,true);
	}
	if(tickCounter==7400) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==7425) { //alarm
		newDisplayElement(outputDocument,outputWarningWindows[5],AlertPopupPositionX,AlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[5],0,0,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[5], 0,0,introPopupMessages[32],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[5], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[5],0.2,1.5);
	}
	if(tickCounter==7450) { //fade 1
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==7500) { //reset 2
		//newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		//newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(tickCounter==7460) { //CRASH
		clearInterval(activeAlertID);
		newAnimatedElementOpacity(outputDocument,"overInterfaceCrashCover",0.05,1.0);
	}
	if(tickCounter==7500) { //general reset
		newAnimatedElementOpacity(outputDocument,"overInterfaceAlertCover",0.0,0.0);
		
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[8]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[9]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], 0.2, 1.0);
		
		newResetAlertMessage(outputDocument,outputWarningWindows[0],outputWarningHeaders[0],outputWarningText[0]);
		newResetAlertMessage(outputDocument,outputWarningWindows[1],outputWarningHeaders[1],outputWarningText[1]);
		newResetAlertMessage(outputDocument,outputWarningWindows[2],outputWarningHeaders[2],outputWarningText[2]);
		newResetAlertMessage(outputDocument,outputWarningWindows[3],outputWarningHeaders[3],outputWarningText[3]);
		newResetAlertMessage(outputDocument,outputWarningWindows[4],outputWarningHeaders[4],outputWarningText[4]);
		newResetAlertMessage(outputDocument,outputWarningWindows[5],outputWarningHeaders[5],outputWarningText[5]);
	}
	if(tickCounter==7700) { //fade to black
		newAnimatedElementOpacity(outputDocument,"overInterfaceCrashCover",6.0,0.0);
	}
	if(tickCounter==IntroAnimationPartTwoDelay) { // PART 2
		newDisplayIntroPartTwo(outputDocument);
	}
	
	tickCounter+=1;
	if(tickCounter<=IntroAnimationPartTwoDelay)
	{
		setTimeout(() => {newDisplayIntroPartOne(outputDocument, tickCounter);},minorTickLength*1000);
	}
}
function newDisplayIntroPartTwo(outputDocument, tickCounter = 0) {
	
	if(tickCounter==0) { //init
	
	}
	if(tickCounter==100) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[".",textColors[4]]);
	}
	if(tickCounter==150) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,["..",textColors[4]]);
	}
	if(tickCounter==200) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,["...",textColors[4]]);
	}
	if(tickCounter==275) { //'restoring system' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[33],0.8);
	}
	if(tickCounter==400) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+".",textColors[4]]);
	}
	if(tickCounter==450) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"..",textColors[4]]);
	}
	if(tickCounter==500) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"...",textColors[4]]);
	}
	if(tickCounter==550) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+" ",textColors[4]]);
	}
	if(tickCounter==600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+".",textColors[4]]);
	}
	if(tickCounter==650) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"..",textColors[4]]);
	}
	if(tickCounter==700) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"...",textColors[4]]);
	}
	if(tickCounter==750) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+" ",textColors[4]]);
	}
	if(tickCounter==800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+".",textColors[4]]);
	}
	if(tickCounter==850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"..",textColors[4]]);
	}
	if(tickCounter==900) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"...",textColors[4]]);
	}
	if(tickCounter==975) { //'success' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[5],0.35,true);
	}
	if(tickCounter==1050) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==1100) { //'RUNNING CHECKUP' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[15],1.5);
	}
	if(tickCounter==1300) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(tickCounter==1350) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(tickCounter==1400) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(tickCounter==1450) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+" ",textColors[4]]);
	}
	if(tickCounter==1500) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(tickCounter==1550) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(tickCounter==1600) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(tickCounter==1675) { //'aborted' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[16],0.35,true);
	}
	if(tickCounter==1750) { //move 2
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==1800) { //'severe damage detected' show finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[34],1.1,true);
	}
	if(tickCounter==1850) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==1950) { //move 3
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==2000) { //'commander status' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[35],1.8);
	}
	if(tickCounter==2225) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[35][0]+".",textColors[4]]);
	}
	if(tickCounter==2275) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[35][0]+"..",textColors[4]]);
	}
	if(tickCounter==2300) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(tickCounter==2325) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[35][0]+"...",textColors[4]]);
	}
	if(tickCounter==2400) { //'alive, not responding' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[36],1.05,true);
	}
	if(tickCounter==2475) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==2550) { //move 4
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==2600) { //'calling bridge' show 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[8], ConsoleX,ConsoleY,introPopupMessages[37],0.8);
	}
	if(tickCounter==2725) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",textColors[4]]);
	}
	if(tickCounter==2750) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==2775) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",textColors[4]]);
	}
	if(tickCounter==2825) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",textColors[4]]);
	}
	if(tickCounter==2875) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+" ",textColors[4]]);
	}
	if(tickCounter==2925) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",textColors[4]]);
	}
	if(tickCounter==2925) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(tickCounter==2975) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",textColors[4]]);
	}
	if(tickCounter==3025) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",textColors[4]]);
	}
	if(tickCounter==3075) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+" ",textColors[4]]);
	}
	if(tickCounter==3125) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",textColors[4]]);
	}
	if(tickCounter==3175) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",textColors[4]]);
	}
	if(tickCounter==3200) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(tickCounter==3225) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",textColors[4]]);
	}
	if(tickCounter==3275) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+" ",textColors[4]]);
	}
	if(tickCounter==3325) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",textColors[4]]);
	}
	if(tickCounter==3350) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==3375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",textColors[4]]);
	}
	if(tickCounter==3425) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",textColors[4]]);
	}
	if(tickCounter==3475) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+" ",textColors[4]]);
	}
	if(tickCounter==3525) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",textColors[4]]);
	}
	if(tickCounter==3575) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",textColors[4]]);
	}
	if(tickCounter==3625) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",textColors[4]]);
	}
	if(tickCounter==3700) { //'not responding' finish 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[9], ConsoleX_2,ConsoleY,introPopupMessages[9],0.8,true);
	}
	if(tickCounter==3800) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(tickCounter==3825) { //move 5
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==3875) { //"entering emergency" show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[38],1.15);
	}
	if(tickCounter==4025) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[38][0]+".",textColors[4]]);
	}
	if(tickCounter==4075) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[38][0]+"..",textColors[4]]);
	}
	if(tickCounter==4125) { //... finish 1
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[38][0]+"...",textColors[4]]);
	}
	if(tickCounter==4200) { //move 1
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==4250) { //'emergency checkup' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[39],1.3);
	}
	if(tickCounter==4425) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[39][0]+".",textColors[4]]);
	}
	if(tickCounter==4475) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[39][0]+"..",textColors[4]]);
	}
	if(tickCounter==4525) { //... finish 2
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[39][0]+"...",textColors[4]]);
	}
	if(tickCounter==4600) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==4625) { //fade 5
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==4650) { //'checking life support' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[40],1.5);
	}
	if(tickCounter==4850) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[40][0]+".",textColors[4]]);
	}
	if(tickCounter==4900) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[40][0]+"..",textColors[4]]);
	}
	if(tickCounter==4950) { //... 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[40][0]+"...",textColors[4]]);
	}
	if(tickCounter==5000) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==5025) { //'operational' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(tickCounter==5075) { //reset 5
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[8]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[9]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], 0.2, 1.0);
	}
	if(tickCounter==5125) { //move 3
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==5175) { //'checking ai' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[41],1.05);
	}
	if(tickCounter==5325) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[41][0]+".",textColors[4]]);
	}
	if(tickCounter==5375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[41][0]+"..",textColors[4]]);
	}
	if(tickCounter==5400) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==5425) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[41][0]+"...",textColors[4]]);
	}
	if(tickCounter==5450) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(tickCounter==5500) { //'inactive' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(tickCounter==5575) { //move 4
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==5625) { //'restarting AI' show 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[8], ConsoleX,ConsoleY,introPopupMessages[42],1.05);
	}
	if(tickCounter==5775) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",textColors[4]]);
	}
	if(tickCounter==5825) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",textColors[4]]);
	}
	if(tickCounter==5850) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(tickCounter==5875) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",textColors[4]]);
	}
	if(tickCounter==5925) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==5950) { //'failed to start' finish 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[9], ConsoleX_2,ConsoleY,introPopupMessages[3],0.75,true);
	}
	if(tickCounter==6075) { //move 5
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==6125) { //'check power system' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[43],1.7);
	}
	if(tickCounter==6325) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[43][0]+".",textColors[4]]);
	}
	if(tickCounter==6375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[43][0]+"..",textColors[4]]);
	}
	if(tickCounter==6375) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(tickCounter==6375) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==6425) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[43][0]+"...",textColors[4]]);
	}
	if(tickCounter==6500) { //'operational' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[5],0.55,true);
	}
	if(tickCounter==6600) { //move 1
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==6650) { //'power status' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[44],1.1);
	}
	if(tickCounter==6800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[44][0]+".",textColors[4]]);
	}
	if(tickCounter==6825) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(tickCounter==6850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[44][0]+"..",textColors[4]]);
	}
	if(tickCounter==6875) { //fade 5
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==6900) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[44][0]+"...",textColors[4]]);
	}
	if(tickCounter==6950) { //'low energy' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[45],0.5,true);
	}
	if(tickCounter==7050) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==7100) { //'checking main power' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[46],1.55);
	}
	if(tickCounter==7300) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[46][0]+".",textColors[4]]);
	}
	if(tickCounter==7325) { //reset 5
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[8]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[9]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], 0.2, 1.0);
	}
	if(tickCounter==7350) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[46][0]+"..",textColors[4]]);
	}
	if(tickCounter==7400) { //... 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[46][0]+"...",textColors[4]]);
	}
	if(tickCounter==7400) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==7475) { //'damaged' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[9],0.35,true);
	}
	if(tickCounter==7550) { //move 3
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==7600) { //'checking secondary power' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[48],1.8);
	}
	if(tickCounter==7825) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[48][0]+".",textColors[4]]);
	}
	if(tickCounter==7850) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==7850) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(tickCounter==7875) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[48][0]+"..",textColors[4]]);
	}
	if(tickCounter==7925) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[48][0]+"...",textColors[4]]);
	}
	if(tickCounter==8000) { //'inactive' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(tickCounter==8075) { //move 4
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==8125) { //'restarting secondary' show 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[8], ConsoleX,ConsoleY,introPopupMessages[49],1.9);
	}
	if(tickCounter==8300) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(tickCounter==8350) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==8350) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[49][0]+".",textColors[4]]);
	}
	if(tickCounter==8400) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[49][0]+"..",textColors[4]]);
	}
	if(tickCounter==8450) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[49][0]+"...",textColors[4]]);
	}
	if(tickCounter==8525) { //'failed to start' finish 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[9], ConsoleX_2,ConsoleY,introPopupMessages[3],0.75,true);
	}
	if(tickCounter==8650) { //move 5
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==8700) { //'checking emergency' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[50],1.5);
	}
	if(tickCounter==8800) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(tickCounter==8875) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==8900) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[50][0]+".",textColors[4]]);
	}
	if(tickCounter==8950) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[50][0]+"..",textColors[4]]);
	}
	if(tickCounter==9000) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[50][0]+"...",textColors[4]]);
	}
	if(tickCounter==9075) { //'inactive' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(tickCounter==9150) { //move 1
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==9200) { //'starting emergency' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[51],1.5);
	}
	if(tickCounter==9325) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(tickCounter==9400) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+".",textColors[4]]);
	}
	if(tickCounter==9450) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"..",textColors[4]]);
	}
	if(tickCounter==9450) { //fade 5
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==9500) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"...",textColors[4]]);
	}
	if(tickCounter==9550) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+" ",textColors[4]]);
	}
	if(tickCounter==9600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+".",textColors[4]]);
	}
	if(tickCounter==9650) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"..",textColors[4]]);
	}
	if(tickCounter==9700) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"...",textColors[4]]);
	}
	if(tickCounter==9775) { //'success' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[5],0.35,true);
	}
	if(tickCounter==9850) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==9900) { //'restarting AI' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[42],1.05);
	}
	if(tickCounter==9900) { //reset 5
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[8]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[9]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], 0.2, 1.0);
	}
	if(tickCounter==9950) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==10050) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",textColors[4]]);
	}
	if(tickCounter==10100) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",textColors[4]]);
	}
	if(tickCounter==10150) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",textColors[4]]);
	}
	if(tickCounter==10200) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+" ",textColors[4]]);
	}
	if(tickCounter==10250) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",textColors[4]]);
	}
	if(tickCounter==10300) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",textColors[4]]);
	}
	if(tickCounter==10350) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",textColors[4]]);
	}
	if(tickCounter==10400) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+" ",textColors[4]]);
	}
	if(tickCounter==10400) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(tickCounter==10450) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",textColors[4]]);
	}
	if(tickCounter==10500) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",textColors[4]]);
	}
	if(tickCounter==10550) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",textColors[4]]);
	}
	if(tickCounter==10625) { //'success' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[5],0.35,true);
	}
	if(tickCounter==10650) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==10700) { //move 3
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==10725) { //move 3 again
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==10800) { //'AI activated' show finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[52],2.5);
	}
	if(tickCounter==11100) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==11150) { //'transfering control' show 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[8], ConsoleX,ConsoleY,introPopupMessages[53],2.0);
	}
	if(tickCounter==11400) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==11450) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==11500) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==11500) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==11525) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(tickCounter==11550) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(tickCounter==11600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==11650) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==11700) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==11750) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(tickCounter==11800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==11850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==11850) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==11900) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==11950) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(tickCounter==11950) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(tickCounter==12000) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==12050) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==12100) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==12150) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(tickCounter==12200) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==12250) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==12300) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==12300) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(tickCounter==12350) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(tickCounter==12400) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==12450) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==12500) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==12550) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(tickCounter==12000) { //cyan screen flash
		newAnimatedElementOpacity(outputDocument,"overInterfaceAICover",1.0,1.0);
	}
	if(tickCounter==12600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==12650) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==12700) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==12750) { //general reset
		newAnimatedElementOpacity(outputDocument,"overInterfaceAlertCover",0.0,0.0);
		
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[8]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[9]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], 0.2, 1.0);
	}
	if(tickCounter==12725) { //fade to black
		newAnimatedElementOpacity(outputDocument,"overInterfaceAICover",3.0,0.0);
	}
	
	if(tickCounter==IntroAnimationPartThreeDelay) { //stage 3
		newDisplayIntroPartThree(outputDocument);
	}
	
	tickCounter+=1;
	if(tickCounter<=IntroAnimationPartThreeDelay)
	{
		setTimeout(() => {newDisplayIntroPartTwo(outputDocument, tickCounter);},minorTickLength*1000);
	}
}
function newDisplayIntroPartThree(outputDocument, tickCounter=0) {
	if(tickCounter==100) {
		newAnimatedElementOpacity(outputDocument, outputWindowElements[0], 1.5, 1.0);
	}
	if(tickCounter==200) {
		newSmoothIncreaseWidth(outputDocument,outputWindowElements[0],0.02,2,80,500,0);
	}
	if(tickCounter==300) {
		newSmoothIncreaseHeight(outputDocument,outputWindowElements[0],0.02,2,80,650,0);
	}
	
	tickCounter+=1;
	if(tickCounter<=IntroAnimationPartFourDelay)
	{
		setTimeout(() => {newDisplayIntroPartThree(outputDocument, tickCounter);},minorTickLength*1000);
	}
}
function redAlert(outputDocument) {
	redAlertOn(outputDocument);
	setTimeout(redAlertOff,500,outputDocument);
}
function redAlertOn(outputDocument) {
	newAnimatedElementOpacity(outputDocument, "overInterfaceAlertCover", 0.25, 0.2);
}
function redAlertOff(outputDocument) {
	newAnimatedElementOpacity(outputDocument, "overInterfaceAlertCover", 0.75, 0.0);
}
function newResetAlertMessage(outputDocument, alertID, headerID, messageID){
	targetAlert = outputDocument.getElementById(alertID);
	targetHeader = outputDocument.getElementById(headerID);
	targetMessage = outputDocument.getElementById(messageID);
	
	targetAlert.style.top = "0px";
	targetAlert.style.left = "0px";
	targetAlert.style.transform = "translate(0px, 0px)";
	targetAlert.style.opacity = 0.0;
	targetAlert.style.visibility = "hidden";
	targetAlert.style.scale = "1";
	
	targetHeader.style.color = "black";
	targetHeader.innerHTML = " ";
	
	targetMessage.style.color = "black";
	targetMessage.innerHTML = " ";
}
function newLoadingRotation(outputDocument, elementID, animationLength, rotationSpeed, tickCounter = 0, elapsedTime = 0) {
	if(animationLength<=0) return;
	
	targetTextbox = outputDocument.getElementById(elementID);
	
	if(tickCounter%(rotationSpeed * 4) == 0){
		targetTextbox.innerHTML = "|";
	}
	else if(tickCounter%(rotationSpeed * 4) == rotationSpeed){
		targetTextbox.innerHTML = "/";
	}
	else if(tickCounter%(rotationSpeed * 4) == rotationSpeed*2){
		targetTextbox.innerHTML = "-";
	}
	else if(tickCounter%(rotationSpeed * 4) == rotationSpeed*3){
		targetTextbox.innerHTML = "\\";
	}
	
	elapsedTime+=minorTickLength;
	tickCounter++;
	
	if(elapsedTime<=animationLength){
		setTimeout(() => {newLoadingRotation(outputDocument, elementID, animationLength, rotationSpeed, tickCounter, elapsedTime);},minorTickLength*1000);
	}
	
	
}
function newResetDisplayedMessage(outputDocument, elementID) {
	targetTextbox = outputDocument.getElementById(elementID);
	targetTextbox.style.top = "0px";
	targetTextbox.style.left = "0px";
	targetTextbox.style.color = "black";
	targetTextbox.style.transform = "translate(0px, 0px)";
	targetTextbox.style.opacity = 0.0;
	targetTextbox.style.visibility = "hidden";
	targetTextbox.style.scale = "1";
	targetTextbox.innerHTML = " ";
}
function newDisplayFixedMessage(outputDocument, elementID, positionX, positionY, messageStruct,textBlurr = false) {
	targetTextbox = outputDocument.getElementById(elementID);
	targetTextbox.innerHTML = messageStruct[0];
	newDisplayElement(outputDocument, elementID, positionX, positionY);
	targetTextbox.style.color = messageStruct[1];
	if(textBlurr) targetTextbox.style.textShadow = "0 0 10px "+messageStruct[1];
	else targetTextbox.style.textShadow = "initial";
}
function newDisplayElement(outputDocument, elementID, positionX, positionY, elementWidth="auto") {
	targetTextbox = outputDocument.getElementById(elementID);
	if(!isNaN(positionY))
	{
		targetTextbox.style.top = positionY+"px";
	}
	else if(positionY[positionY.length-1]=='%')
	{
		targetTextbox.style.top = positionY;
	}
	
	if(!isNaN(positionX))
	{
		targetTextbox.style.left = positionX+"px";
	}
	else if(positionX[positionX.length-1]=='%')
	{
		targetTextbox.style.left = positionX;
	}
	
	if(elementWidth != "auto"){
		if(!isNaN(elementWidth))
	{
		targetTextbox.style.width = elementWidth+"px";
	}
	else if(elementWidth[elementWidth.length-1]=='%')
	{
		targetTextbox.style.width = elementWidth;
	}
	}
}
function newDisplayAnimatedMessage(outputDocument, elementID, positionX, positionY, messageStruct, animationLength, textBlurr = false, elapsedTime = 0) {
	
	if(animationLength<=0) return;
	targetTextbox = outputDocument.getElementById(elementID);
	
	if(elapsedTime==0){
		targetTextbox.style.top = positionY+"px";
		targetTextbox.style.left = positionX+"px";
		targetTextbox.style.color = messageStruct[1];
		if(textBlurr) targetTextbox.style.textShadow = "0 0 10px "+messageStruct[1];
		else targetTextbox.style.textShadow = "initial";
	}
	
	elapsedTime+=minorTickLength;
	
	var msgLength = Math.floor(messageStruct[0].length*(elapsedTime/animationLength));
	if(msgLength>messageStruct[0].length) msgLength=messageStruct[0].length;
	var msgPart = messageStruct[0].substr(0,msgLength);
	
	targetTextbox.innerHTML = msgPart;
	
	if(elapsedTime<=animationLength){
		setTimeout(() => {newDisplayAnimatedMessage(outputDocument, elementID, positionX, positionY, messageStruct, animationLength, textBlurr, elapsedTime);},minorTickLength*1000);
	}
	
}	
function displayIntro(outputDocument) {
		
	animatedDisplayMessage(outputDocument,outputNoWindowElements[0],150,250,introPopupMessages[7],1,false);
	animatedDisplayMessage(outputDocument,outputNoWindowElements[1],350,250,introPopupMessages[4],1,false);
	
	animatedUnhideElement(outputDocument,outputNoWindowElements[0],1,2);
	animatedUnhideElement(outputDocument,outputNoWindowElements[1],3,3.5);
	
	animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-30,4,4.25);
	animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-30,4,4.25);
	
	animatedDisplayMessage(outputDocument,outputNoWindowElements[2],150,250,introPopupMessages[8],1,false);
	animatedDisplayMessage(outputDocument,outputNoWindowElements[3],350,250,introPopupMessages[9],1,false);
	
	animatedUnhideElement(outputDocument,outputNoWindowElements[2],4,5);
	animatedUnhideElement(outputDocument,outputNoWindowElements[3],6,6.5);
	
	animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-30,0,-90,7,7.5);
	animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-30,0,-90,7,7.5);
	animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-60,7,7.5);
	animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-60,7,7.5);
	
	
	animatedDisplayMessage(outputDocument,outputNoWindowElements[4],150,250,introPopupMessages[10],1,false);
	animatedDisplayMessage(outputDocument,outputNoWindowElements[5],350,250,introPopupMessages[11],1,false);
	
	animatedUnhideElement(outputDocument,outputNoWindowElements[4],7,8);
	animatedUnhideElement(outputDocument,outputNoWindowElements[5],9,10);
	
	animatedHideElement(outputDocument,outputNoWindowElements[0], 12, 16.5);
	animatedHideElement(outputDocument,outputNoWindowElements[1], 12, 16.5);
	animatedHideElement(outputDocument,outputNoWindowElements[2], 15, 19.5);
	animatedHideElement(outputDocument,outputNoWindowElements[3], 15, 19.5);
	animatedHideElement(outputDocument,outputNoWindowElements[4], 18, 22.5);
	animatedHideElement(outputDocument,outputNoWindowElements[5], 18, 22.5);
	
	
	
	
	
	/*
	animatedDisplayMessage(outputDocument,outputNoWindowElements[0],150,250,introPopupMessages[7],1,false);
	animatedDisplayMessage(outputDocument,outputNoWindowElements[1],350,250,introPopupMessages[4],1,false);
	animatedUnhideElement(outputDocument,outputNoWindowElements[0],1,2);
	animatedUnhideElement(outputDocument,outputNoWindowElements[1],3,3.5);
	
	animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-120,4,5);
	animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-120,4,5);
	animatedHideElement(outputDocument,outputNoWindowElements[0], 4.5, 5);
	animatedHideElement(outputDocument,outputNoWindowElements[1], 4.5, 5);
	
	animatedDisplayMessage(outputDocument,outputNoWindowElements[2],150,250,introPopupMessages[8],1,false);
	animatedDisplayMessage(outputDocument,outputNoWindowElements[3],350,250,introPopupMessages[9],1,false);
	animatedUnhideElement(outputDocument,outputNoWindowElements[2],4,5);
	animatedUnhideElement(outputDocument,outputNoWindowElements[3],6,6.5);
	
	animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-120,7,8);
	animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-120,7,8);
	animatedHideElement(outputDocument,outputNoWindowElements[2], 7.5, 8);
	animatedHideElement(outputDocument,outputNoWindowElements[3], 7.5, 8);
	
	animatedDisplayMessage(outputDocument,outputNoWindowElements[4],150,250,introPopupMessages[10],1,false);
	animatedDisplayMessage(outputDocument,outputNoWindowElements[5],350,250,introPopupMessages[11],1,false);
	animatedUnhideElement(outputDocument,outputNoWindowElements[4],7,8);
	animatedUnhideElement(outputDocument,outputNoWindowElements[5],9,9.5);
	
	animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-120,11,12);
	animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-120,11,12);
	animatedHideElement(outputDocument,outputNoWindowElements[4], 11.5, 12);
	animatedHideElement(outputDocument,outputNoWindowElements[5], 11.5, 12);
	*/
}
function oldAnimatedDisplayMessage(outputDocument, elementID, messageStruct, elapsedTime = 0) {
	
	targetTextbox = outputDocument.getElementById(elementID);
	
	if(elapsedTime==0){
		targetTextbox.innerHTML = messageStruct[0];
		targetTextbox.style.transform = "translate("+messageStruct[1]+"px,"+messageStruct[2]+"px)";
		targetTextbox.style.color = messageStruct[3];
		targetTextbox.style.opacity = 0.0;
	}
	
	if(elapsedTime >= messageStruct[4] && elapsedTime < messageStruct[5])
	{
		targetTextbox.style.opacity = ((elapsedTime-messageStruct[4]) / (messageStruct[5]-messageStruct[4]));
	}
	
	if(elapsedTime >=messageStruct[5] && elapsedTime < messageStruct[6])
	{
		targetTextbox.style.opacity = 1.0;
	}
	
	if(elapsedTime >= messageStruct[6] && elapsedTime < messageStruct[7])
	{
		targetTextbox.style.opacity = 1.0 - ((elapsedTime-messageStruct[6]) / (messageStruct[7]-messageStruct[6]));
	}
	
	elapsedTime+=minorTickLength;
	if(elapsedTime<=messageStruct[7]){
		setTimeout(() => {animatedDisplayMessage(outputDocument, elementID, messageStruct, elapsedTime);},minorTickLength*1000);
	}
}
function animatedDisplayMessage(outputDocument, elementID, positionX, positionY, messageStruct, startTime, visibleInstantly = true, elapsedTime = 0 ){
	
	targetTextbox = outputDocument.getElementById(elementID);
	
	
	if(elapsedTime>=startTime){
		targetTextbox.innerHTML = messageStruct[0];
		targetTextbox.style.top = positionY+"px";
		targetTextbox.style.left = positionX+"px";
		targetTextbox.style.color = messageStruct[1];
		
		if(visibleInstantly){
			targetTextbox.style.visibility = "visible";
			targetTextbox.style.opacity = 1.0;
		}
		else{
			targetTextbox.style.visibility = "hidden";
			targetTextbox.style.opacity = 0.0;	
		}
	}

	else{
		setTimeout(() => {animatedDisplayMessage(outputDocument, elementID, positionX, positionY, messageStruct, startTime, visibleInstantly, elapsedTime);},minorTickLength*1000);
	}
	
	elapsedTime+=minorTickLength;
}
function animatedMoveElement(outputDocument, elementID, currentX, currentY, endX, endY, startTime, endTime, elapsedTime = 0) {
	
	movedElement = outputDocument.getElementById(elementID);

	elapsedTime+=minorTickLength;
	
	if(elapsedTime>=startTime){
		if(endTime!=0){
			var newX = currentX + (elapsedTime-startTime)/(endTime-startTime) * (endX-currentX);
			var newY = currentY + (elapsedTime-startTime)/(endTime-startTime) * (endY-currentY);
		
			movedElement.style.transform = "translate("+newX+"px,"+newY+"px)";
		}
	}	
	
	if(elapsedTime <= endTime){
		setTimeout(() => {animatedMoveElement(outputDocument, elementID, currentX, currentY, endX, endY, startTime, endTime, elapsedTime);},minorTickLength*1000);
	}
	
}
function newAnimatedElementScale(outputDocument, elementID, animationLength, endScale, startingScale = -1, elapsedTime = 0) {
	if(animationLength <= 0) return;
	scaleElement = outputDocument.getElementById(elementID);
	if(startingScale == -1) {
		if(scaleElement.style.scale.length == 0) startingScale = 1;
		else startingScale = scaleElement.style.scale * 1;
	}
		
	
	var newScale = (endScale - startingScale) * (elapsedTime / animationLength) + startingScale;
	scaleElement.style.scale = newScale;
	
	if(elapsedTime<animationLength)
	{
		elapsedTime += minorTickLength;
		setTimeout(() => {newAnimatedElementScale(outputDocument, elementID, animationLength, endScale, startingScale, elapsedTime);},minorTickLength*1000);
	}
	else{
		scaleElement.style.scale = endScale;
	}
}
function newAnimatedElementOpacity(outputDocument, elementID, animationLength, endOpacity, startingOpacity = -1, elapsedTime = 0) {
	if(animationLength <= 0) return;
	opacityElement = outputDocument.getElementById(elementID);
	if(startingOpacity==-1) startingOpacity = opacityElement.style.opacity*1;
	
	var newOpacity = (endOpacity-startingOpacity)*(elapsedTime/animationLength)+startingOpacity;
	opacityElement.style.opacity=newOpacity;
	
	if(endOpacity > startingOpacity && opacityElement.style.visibility != "visible") opacityElement.style.visibility="visible";
	
	if(elapsedTime<animationLength)
	{
		elapsedTime+=minorTickLength;
		setTimeout(() => {newAnimatedElementOpacity(outputDocument, elementID, animationLength, endOpacity, startingOpacity, elapsedTime);},minorTickLength*1000);
	}
	else{
		opacityElement.style.opacity=endOpacity;
		if(endOpacity==0.0) opacityElement.style.visibility="hidden";
	}
}
function animatedHideElement(outputDocument, elementID, startTime, endTime, elapsedTime = 0) {
	
	hiddenElement = outputDocument.getElementById(elementID);
	
	elapsedTime+=minorTickLength;
	
	if(elapsedTime>=startTime){
		hiddenElement.style.visibility = true;
		if(endTime!=0){
			var newOpacity = 1.0 - (elapsedTime-startTime)/(endTime-startTime);
		
			hiddenElement.style.opacity = newOpacity;
		}
	}	
	
	if(elapsedTime <= endTime){
		setTimeout(() => {animatedHideElement(outputDocument, elementID, startTime, endTime, elapsedTime);},minorTickLength*1000);
	}
	if(elapsedTime >= endTime){
		hiddenElement.style.visibility = "hidden";
	}
	
}
function animatedUnhideElement(outputDocument, elementID, startTime, endTime, elapsedTime = 0) {
	
	unhiddenElement = outputDocument.getElementById(elementID);
	
	elapsedTime+=minorTickLength;
	
	if(elapsedTime>=startTime){
		unhiddenElement.style.visibility="visible";
		if(endTime!=0){
			var newOpacity = (elapsedTime-startTime)/(endTime-startTime);
		
			unhiddenElement.style.opacity = newOpacity;
		}
	}	
	
	if(elapsedTime <= endTime){
		setTimeout(() => {animatedUnhideElement(outputDocument, elementID, startTime, endTime, elapsedTime);},minorTickLength*1000);
	}
	
}
	
	