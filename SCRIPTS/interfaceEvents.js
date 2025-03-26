//animations
//intro window resize

interfaceEventIntroResizeRegistered = false;
var IntroOutputDocument = "";
var IntroResizeEventsCounter = 0;

function introRegisterEvent(outputDocument){
	if(!interfaceEventIntroResizeRegistered) {
		IntroOutputDocument = outputDocument;
		window.addEventListener("resize", introWindowResize);
		interfaceEventIntroResizeRegistered = true;
	}
	
}

function introWindowResize() {
	if(interfaceEventIntroResizeRegistered) {
		IntroResizeEventsCounter++;
		if(!IntroResizeFixInProgress) {
			var tmpResizeCounter = IntroResizeEventsCounter;
			setTimeout(() => {
				introMoveAlertMessagesOnResize(IntroOutputDocument, tmpResizeCounter);
			},250);
			IntroResizeFixInProgress = true;
		}
	}
}