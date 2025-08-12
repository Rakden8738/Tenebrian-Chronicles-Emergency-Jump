function connectionTest_animations(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"animations\" reporting issues.");
		return false;
	}
}

var AnimationMoveBackgroundEnabled = true;
var AnimationMoveBackgroundStep = 0.1;
var AnimationMoveBackgroundTime = 0.2;
var AnimationMoveBackgroundStartPosition = 0.0;
var AnimationMoveBackgroundCurrentPosition = 0.0;
var AnimationMoveBackgroundReturnPoint = -2000.0;
var AnimationMoveBackgroundElementID = "interfaceBackgroundCoverStars";
var AnimationMoveBackgroundElement = null;

var animationHiddenTextMaskClass = "animationMessagesHiddenText";

function animationDisplayIntro(outputDocument) {
	
	IntroAnimationStep = 0;
	IntroTickCounter = 0;
	
	setTimeout(()=> {
		introPlayIntro(outputDocument);
	},1000 * minorTickLength * IntroAnimationStartDelay,outputDocument);
	//introInit(outputDocument);
}

function animationMoveBackground(outputDocument){
	if(AnimationMoveBackgroundElement === null) {
		AnimationMoveBackgroundElement = outputDocument.getElementById(AnimationMoveBackgroundElementID);
	}
	
	AnimationMoveBackgroundCurrentPosition-=AnimationMoveBackgroundStep;
	
	if(AnimationMoveBackgroundCurrentPosition < AnimationMoveBackgroundReturnPoint) {
		AnimationMoveBackgroundCurrentPosition = AnimationMoveBackgroundStartPosition;
	}
	
	AnimationMoveBackgroundElement.style.backgroundPositionX = (AnimationMoveBackgroundCurrentPosition+"px");
	
	if(AnimationMoveBackgroundEnabled){
		setTimeout(() => {
			animationMoveBackground(outputDocument);
		},1000*AnimationMoveBackgroundTime);
	}
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
	
	//console.log(elapsedTime);
	
	if(animationLength<=0) return;
	targetTextbox = outputDocument.getElementById(elementID);
	
	if(elapsedTime==0){
		targetTextbox.style.top = positionY+"px";
		targetTextbox.style.left = positionX+"px";
		targetTextbox.style.color = messageStruct[1];
		if(textBlurr) targetTextbox.style.textShadow = "0 0 10px "+messageStruct[1];
		else targetTextbox.style.textShadow = "inherit";
		
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Display animated start, "+IntroActiveAnimationCounter);
		}
	}
	
	elapsedTime+=minorTickLength;
	
	var msgLength = Math.floor(messageStruct[0].length*(elapsedTime/animationLength));
	if(msgLength>messageStruct[0].length) msgLength=messageStruct[0].length;
	
	var msgPart = messageStruct[0].substr(0,msgLength);
	var msgSpanPartLength = messageStruct[0].length-msgLength;
	
	var msgSpanPart = "";
	
	if(msgSpanPartLength > 0) {
		msgSpanPart = messageStruct[0].substr(msgLength,msgSpanPartLength);
		targetTextbox.innerHTML = msgPart+"<span class="+animationHiddenTextMaskClass+">"+msgSpanPart+"</span>";
	}
	else{
		targetTextbox.innerHTML = msgPart;
	}
	
	if(elapsedTime<=animationLength){
		setTimeout(() => {newDisplayAnimatedMessage(outputDocument, elementID, positionX, positionY, messageStruct, animationLength, textBlurr, elapsedTime);},minorTickLength*1000);
	}
	else if(IntroFastForwardStage != -1){ 
		IntroActiveAnimationCounter--;
		if(IntroDebugActive)console.log("Display animated stop, "+IntroActiveAnimationCounter);
	}
	
}	
function animatedMoveElement(outputDocument, elementID, startX, startY, endX, endY, startTime, endTime, elapsedTime = 0) {
	
	var currentX = parseFloat(startX);
	var currentY = parseFloat(startY);
	
	var movedElement = outputDocument.getElementById(elementID);
	
	if(elapsedTime==0){		
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Move Element start, "+IntroActiveAnimationCounter);
		}
	}

	elapsedTime+=minorTickLength;
	
	if(elapsedTime>=startTime){
		if(endTime!=0){
			var newX = currentX + ((elapsedTime-startTime)/(endTime-startTime) * (endX-currentX));
			var newY = currentY + ((elapsedTime-startTime)/(endTime-startTime) * (endY-currentY));
		
			movedElement.style.transform = "translate("+newX+"px,"+newY+"px)";
			
		}
	}	
	
	if(elapsedTime <= endTime){
		setTimeout(() => {animatedMoveElement(outputDocument, elementID, startX, startY, endX, endY, startTime, endTime, elapsedTime);},minorTickLength*1000);
	}
	else if(IntroFastForwardStage != -1){ 
		IntroActiveAnimationCounter--;
		if(IntroDebugActive)console.log("Move Element stop, "+IntroActiveAnimationCounter);
	}
}

function newAnimatedElementScale(outputDocument, elementID, animationLength, endScale, startingScale = -1, elapsedTime = 0) {
	if(animationLength <= 0) return;
	scaleElement = outputDocument.getElementById(elementID);
	if(startingScale == -1) {
		if(scaleElement.style.scale.length == 0) startingScale = 1;
		else startingScale = scaleElement.style.scale * 1;
	}
	
	if(elapsedTime==0){		
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Scale Element start, "+IntroActiveAnimationCounter);
		}
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
		
		if(IntroFastForwardStage != -1){ 
			IntroActiveAnimationCounter--;
			if(IntroDebugActive)console.log("Scale Element stop, "+IntroActiveAnimationCounter);
		}
	}
}
function newAnimatedElementOpacity(outputDocument, elementID, animationLength, endOpacity, startingOpacity = -1, elapsedTime = 0) {
	if(animationLength <= 0) return;
	
	if(elapsedTime==0){		
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Opacity Element start, "+IntroActiveAnimationCounter);
		}
	}
	
	opacityElement = outputDocument.getElementById(elementID);
	
	if(startingOpacity==-1) startingOpacity = opacityElement.style.opacity*1;
	
	var newOpacity = (endOpacity-startingOpacity)*(elapsedTime/animationLength)+startingOpacity;
	
	opacityElement.style.opacity = newOpacity;
	
	if(endOpacity > startingOpacity && opacityElement.style.visibility != "visible") opacityElement.style.visibility="visible";
	
	if(elapsedTime<animationLength)
	{
		elapsedTime+=minorTickLength;
		setTimeout(() => {newAnimatedElementOpacity(outputDocument, elementID, animationLength, endOpacity, startingOpacity, elapsedTime);},minorTickLength*1000);
	}
	else{
		opacityElement.style.opacity=endOpacity;
		if(endOpacity==0.0) opacityElement.style.visibility="hidden";
		
		if(IntroFastForwardStage != -1){ 
			IntroActiveAnimationCounter--;
			if(IntroDebugActive)console.log("Opacity Element stop, "+IntroActiveAnimationCounter);
		}
	}
}

function newAnimatedElementOpacity_Inherit(outputDocument, elementID, animationLength, endOpacity, startingOpacity = -1, elapsedTime = 0) {
	if(animationLength <= 0) return;
	
	if(elapsedTime==0){		
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Opacity Element start, "+IntroActiveAnimationCounter);
		}
	}
	
	opacityElement = outputDocument.getElementById(elementID);
	
	if(startingOpacity==-1) startingOpacity = opacityElement.style.opacity*1;
	
	var newOpacity = (endOpacity-startingOpacity)*(elapsedTime/animationLength)+startingOpacity;
	
	opacityElement.style.opacity = newOpacity;
	
	if(endOpacity > startingOpacity && opacityElement.style.visibility != "inherit") opacityElement.style.visibility = "inherit";
	
	if(elapsedTime<animationLength)
	{
		elapsedTime+=minorTickLength;
		setTimeout(() => {newAnimatedElementOpacity_Inherit(outputDocument, elementID, animationLength, endOpacity, startingOpacity, elapsedTime);},minorTickLength*1000);
	}
	else{
		opacityElement.style.opacity=endOpacity;
		if(endOpacity==0.0) opacityElement.style.visibility="hidden";
		
		if(IntroFastForwardStage != -1){ 
			IntroActiveAnimationCounter--;
			if(IntroDebugActive)console.log("Opacity Element stop, "+IntroActiveAnimationCounter);
		}
	}
}

function animatedHideElement(outputDocument, elementID, startTime, endTime, elapsedTime = 0) {
	
	hiddenElement = outputDocument.getElementById(elementID);
	
	if(elapsedTime==0){		
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Hide Element start, "+IntroActiveAnimationCounter);
		}
	}
	
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
	else if(IntroFastForwardStage != -1){ 
		IntroActiveAnimationCounter--;
		if(IntroDebugActive)console.log("Hide Element stop, "+IntroActiveAnimationCounter);
	}
	
	
	if(elapsedTime >= endTime){
		hiddenElement.style.visibility = "hidden";
	}
	
}
function animatedUnhideElement(outputDocument, elementID, startTime, endTime, elapsedTime = 0) {
	
	unhiddenElement = outputDocument.getElementById(elementID);
	
	if(elapsedTime==0){		
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Unhide Element start, "+IntroActiveAnimationCounter);
		}
	}
	
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
	else if(IntroFastForwardStage != -1){ 
		IntroActiveAnimationCounter--;
		if(IntroDebugActive)console.log("Unhide Element stop, "+IntroActiveAnimationCounter);
	}
}

function animationAppendChangingNumeric(outputDocument, elementID, stepTime, totalTime, startValue, endValue, finishMode="default", numericDecimals = 0, fixedText = "", extraText = "", elapsedTime = 0){
	//interrupt, skip, finish, clear,
	defaultMode = "finish";
	if(finishMode == "default") finishMode=defaultMode;
	
	targetElement = outputDocument.getElementById(elementID);
	targetText = targetElement.innerHTML;
	
	if(totalTime == 0) return;
	
	if(elapsedTime == 0){
		
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Changing numeric start, "+IntroActiveAnimationCounter);
		}
		if(fixedText.length == 0) {
			if(targetText.length > 0) fixedText = targetText;
		}
	}
	
	
	newValue = (startValue + ((endValue - startValue) * elapsedTime/totalTime )).toFixed(numericDecimals);
	if(newValue > endValue) newValue = endValue;
	
	targetElement.innerHTML = fixedText + newValue + extraText;
	
	if(elapsedTime <= totalTime) {
		elapsedTime += stepTime;
		setTimeout(() => {animationAppendChangingNumeric(outputDocument, elementID, stepTime, totalTime, startValue, endValue, finishMode, numericDecimals, fixedText, extraText, elapsedTime);},stepTime*1000);
	}
	else{
		if(IntroFastForwardStage != -1){ 
			IntroActiveAnimationCounter--;
			if(IntroDebugActive)console.log("Changing numeric stop, "+IntroActiveAnimationCounter);
		}
		
		if(finishMode == "interrupt") return;
		if(finishMode == "skip" || finishMode == "finish") targetElement.innerHTML = fixedText + endValue + extraText;
		if(finishMode == "clear") targetElement.innerHTML = fixedText + extraText;	
	}
}
function animationAppendLoopedMessage(outputDocument, elementID, stepTime, totalTime, appendedText, finishMode="default", fixedText = "", currentStep = 0, elapsedTime = 0) {
	//interrupt, skip, finish, clear,
	defaultMode = "finish";
	if(finishMode == "default") finishMode=defaultMode;
	
	targetElement = outputDocument.getElementById(elementID);
	targetText = targetElement.innerHTML;
	
	if(appendedText.length == 0) return;
	
	if(elapsedTime == 0) {
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Append looped start, "+IntroActiveAnimationCounter);
		}
		if(fixedText.length == 0) {
			if(targetText.length > 0) fixedText = targetText;
		}
	}
	
	targetElement.innerHTML = fixedText + appendedText.substr(0, currentStep);
	
	currentStep++;
	if(currentStep > appendedText.length) currentStep = 1;
	
	if(elapsedTime <= totalTime) {
		elapsedTime += stepTime;
		
		setTimeout(() => {animationAppendLoopedMessage(outputDocument, elementID, stepTime, totalTime, appendedText, finishMode, fixedText, currentStep, elapsedTime);},stepTime*1000);
	}
	else{
		if(IntroFastForwardStage != -1){ 
			IntroActiveAnimationCounter--;
			if(IntroDebugActive)console.log("Append looped stop, "+IntroActiveAnimationCounter);
		}
		
		if(finishMode == "interrupt") return;
		if(finishMode == "skip") targetElement.innerHTML = fixedText + appendedText;
		if(finishMode == "clear") targetElement.innerHTML = fixedText;
		if(finishMode == "finish") {
			if(currentStep != 0) setTimeout(() => {animationAppendLoopedMessage(outputDocument, elementID, stepTime, totalTime, appendedText, finishMode, fixedText, currentStep, elapsedTime);},stepTime*1000);
		}
	}
}

function animationShakeElement(outputDocument, elementID, stepTime, totalTime, xValue, yValue, finishMode = "default", elapsedTime = 0, initialTransform = "not set"){
	//default, stay, return, zero,
	targetElement = outputDocument.getElementById(elementID);
	
	defaultMode = "stay";
	
	if(elapsedTime==0){
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Shake element start, "+IntroActiveAnimationCounter);
		}
	}
	
	if(initialTransform == "not set") initialTransform = getComputedStyle(outputDocument.getElementById(elementID)).transform;

	newValueX = ((Math.random() - 0.5) * xValue).toFixed(1);
	newValueY = ((Math.random() - 0.5) * yValue).toFixed(1);
	newTransform = "matrix(1, 0, 0, 1," + newValueX + "," + newValueY +")";
	
	targetElement.style.transform = newTransform;
	
	if(elapsedTime <= totalTime) {
		elapsedTime += stepTime;
		setTimeout(() => {animationShakeElement(outputDocument, elementID, stepTime, totalTime, xValue, yValue, finishMode, elapsedTime, initialTransform);},stepTime*1000);
	}
	else{
		if(IntroFastForwardStage != -1){ 
			IntroActiveAnimationCounter--;
			if(IntroDebugActive)console.log("Shake element stop, "+IntroActiveAnimationCounter);
		}
		
		if(finishMode == "stay") return;
		if(finishMode == "return") targetElement.style.transform = initialTransform;
		if(finishMode == "zero") targetElement.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
	}
	
}



//getComputedStyle(document.getElementById("introMessages")).transform


//OBSOLETE FUNCTIONS


/*function newAppendAnimatedMessage(outputDocument, elementID, messageStruct, animationLength, textBlurr = false, animatedBlurr = false, elapsedTime = 0, initMessage="") {
	if(animationLength<=0) return;
	targetTextbox = outputDocument.getElementById(elementID);
	
	if(elapsedTime==0){
		
		initMessage = targetTextbox.innerHTML;
		targetTextbox.style.color = messageStruct[1];
		if(textBlurr) targetTextbox.style.textShadow = "0 0 10px "+messageStruct[1];
		else if(!animatedBlurr) targetTextbox.style.textShadow = "initial";
	}
	
	elapsedTime+=minorTickLength;
	
	var msgLength = Math.floor(messageStruct[0].length*(elapsedTime/animationLength));
	if(msgLength>messageStruct[0].length) msgLength=messageStruct[0].length;
	
	var msgPart = messageStruct[0].substr(0,msgLength);
	var msgSpanPartLength = messageStruct[0].length-msgLength;
	
	var msgSpanPart = "";
	if(msgSpanPartLength > 0) {
		msgSpanPart = messageStruct[0].substr(msgLength,msgSpanPartLength);
		targetTextbox.innerHTML = initMessage+msgPart+"<span class='messagesHiddenText'>"+msgSpanPart+"</span>";
	}
	else{
		targetTextbox.innerHTML = initMessage+msgPart;
	}
	
	if(elapsedTime<=animationLength){
		setTimeout(() => {newAppendAnimatedMessage(outputDocument, elementID, messageStruct, animationLength, textBlurr, animatedBlurr, elapsedTime, initMessage);},minorTickLength*1000);
	}
	
	targetTextbox.scrollTop = targetTextbox.scrollHeight;
}
*/
/*function newResetAlertMessage(outputDocument, alertID, headerID, messageID){
	targetAlert = outputDocument.getElementById(alertID);
	targetHeader = outputDocument.getElementById(headerID);
	targetMessage = outputDocument.getElementById(messageID);
	
	targetAlert.style.top = "0px";
	//targetAlert.style.left = "0px";
	targetAlert.style.transform = "translate(0px, 0px)";
	targetAlert.style.opacity = 0.0;
	targetAlert.style.visibility = "hidden";
	targetAlert.style.scale = "1";
	
	targetHeader.style.color = "black";
	targetHeader.innerHTML = " ";
	
	targetMessage.style.color = "black";
	targetMessage.innerHTML = " ";
}
*/
/*function newResetDisplayedMessage(outputDocument, elementID) {
	targetTextbox = outputDocument.getElementById(elementID);
	targetTextbox.style.top = "";
	targetTextbox.style.left = "";
	targetTextbox.style.color = "black";
	targetTextbox.style.transform = "translate(0px, 0px)";
	targetTextbox.style.opacity = 0.0;
	targetTextbox.style.visibility = "hidden";
	targetTextbox.style.scale = "1";
	targetTextbox.innerHTML = " ";
}
*/
/*function newDisplayFixedMessage(outputDocument, elementID, positionX, positionY, messageStruct,textBlurr = false) {
	targetTextbox = outputDocument.getElementById(elementID);
	targetTextbox.innerHTML = messageStruct[0];
	newDisplayElement(outputDocument, elementID, positionX, positionY);
	targetTextbox.style.color = messageStruct[1];
	if(textBlurr) targetTextbox.style.textShadow = "0 0 10px "+messageStruct[1];
	else targetTextbox.style.textShadow = "initial";
}
*/
/*function newAppendNewLine(outputDocument, elementID){
	targetTextbox = outputDocument.getElementById(elementID);
	targetTextbox.innerHTML+="<br>";
	
	targetTextbox.scrollTop = targetTextbox.scrollHeight;
}
*/
/*function oldAnimatedDisplayMessage(outputDocument, elementID, messageStruct, elapsedTime = 0) {
	
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
*/
/*function animatedDisplayMessage(outputDocument, elementID, positionX, positionY, messageStruct, startTime, visibleInstantly = true, elapsedTime = 0 ){
	
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
*/
/*function newSmoothIncreaseWidth(outputDocument, elementID, growthRate, absVal, effectSpeed, targetWidth, startWidth=-1){
    
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
*/
/*function newSmoothDecreaseWidth(outputDocument, elementID, shrinkRate, absVal, effectSpeed, targetWidth, startWidth=-1){

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
*/
/*function newSmoothIncreaseHeight(outputDocument, elementID, growthRate, absVal, effectSpeed, targetHeight, startHeight=0){
    
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
*/
/*function newSmoothDecreaseHeight(outputDocument, elementID, shrinkRate, absVal, effectSpeed, targetHeight, startHeight=0){

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
*/
/*function newLoadingRotation(outputDocument, elementID, animationLength, rotationSpeed, IntroTickCounter = 0, elapsedTime = 0) {
	if(animationLength<=0) return;
	
	targetTextbox = outputDocument.getElementById(elementID);
	
	if(IntroTickCounter%(rotationSpeed * 4) == 0){
		targetTextbox.innerHTML = "|";
	}
	else if(IntroTickCounter%(rotationSpeed * 4) == rotationSpeed){
		targetTextbox.innerHTML = "/";
	}
	else if(IntroTickCounter%(rotationSpeed * 4) == rotationSpeed*2){
		targetTextbox.innerHTML = "-";
	}
	else if(IntroTickCounter%(rotationSpeed * 4) == rotationSpeed*3){
		targetTextbox.innerHTML = "\\";
	}
	
	if(elapsedTime==0){		
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Rotate Element start, "+IntroActiveAnimationCounter);
		}
	}
	
	elapsedTime+=minorTickLength;
	IntroTickCounter++;
	
	if(elapsedTime<=animationLength){
		setTimeout(() => {newLoadingRotation(outputDocument, elementID, animationLength, rotationSpeed, IntroTickCounter, elapsedTime);},minorTickLength*1000);
	}
	else if(IntroFastForwardStage != -1){ 
		IntroActiveAnimationCounter--;
		if(IntroDebugActive)console.log("Rotate Element stop, "+IntroActiveAnimationCounter);
	}
}
*/
//AAAAAAAAAAAAAAAAAA