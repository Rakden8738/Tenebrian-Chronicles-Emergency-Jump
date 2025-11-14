function connectionTest_galaxy(outputDocument) {
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"galaxy\" reporting issues.");
		return false;
	}
}

var GalaxyMapRefreshActive = false;
var GalaxyMapInitialized = false;
var GalaxyDiscoveredSectorsChanged = false;
var GalaxyMapDisplayedSystems = 0;

var GalaxyMapCanvas;
var GalaxyMapCanvasID = "galaxyMapCanvas";
var GalaxyMapCanvasContainer;
var GalaxyMapCanvasContainerID = "galaxyMapCanvasContainer";
var GalaxyMapContext;
var GalaxyMapHeight = 300;
var GalaxyMapWidth = 400;

var GalaxyMapSystemCoordinates = [];
var GalaxyMapGateLinksCoordinates = [];

var GalaxyMapLine = 2;
var GalaxyMapFont = "Kdam Thmor Pro";

var GalaxyMapSystemPositionScale = 50;
var GalaxyMapSystemSize = 8;
var GalaxyMapSystemExtraSize = 3;
var GalaxyMapGateLineSize = 3;
var GalaxyMapGateLineColor = "hsla(180,100%,65%,0.8)";
var GalaxyMapGateFocusedLineColor = "hsla(180,100%,65%,1.0)";
var GalaxyMapGateFadingLineColor = "hsla(180,0%,65%,0.0)";
var GalaxyMapGateTextOffsetX = 0;
var GalaxyMapGateTextOffsetY = 25;

var GalaxyMapTextLineHeight = 15;

var GalaxyMapRefreshSpeed = 0.25;
var GalaxyMapRefreshInProgress = false;
var GalaxyMapRefreshActive = false;
var GalaxyWindowResizeDetected = false;

var GalaxyCameraPositionX = 0;
var GalaxyCameraPositionY = 0;
var GalaxyMapCursorPositionX = -100000;
var GalaxyMapCursorPositionY = -100000;
var GalaxyMapCursorFullPositionX = -1000;
var GalaxyMapCursorFullPositionY = -1000;
var GalaxyMapCursorCoordinateX = -1000;
var GalaxyMapCursorCoordinateY = -1000;

//var GalaxyMapMouseDetectionDistance = 30;
var GalaxyMapMouseDetectionCoordinatesDistance = 0.5;
var GalaxyMapMouseDetectionPixelDistance = GalaxyMapMouseDetectionCoordinatesDistance * GalaxyMapSystemPositionScale;
var GalaxyMapSystemBodyRadiusHighlighted = 2;

var GalaxyMapSelectedSystem = -1;
var GalaxyMapSelectionDistance = 9;
var GalaxyMapSelectionRadius = 9;
var GalaxyMapLastSelectionTime = -1;
var GalaxyMapDoubleClickTime = 500;

var GalaxyMapZoomLevel = 0;
var GalaxyMapZoomScale = 1.5;
var GalaxyMapZoom = 1;
var GalaxyMapMaxZoomLevel = 3;
var GalaxyMapMinZoomLevel = -3;
var GalaxyMapZoomMousewheelLevel = 0.25;

var GalaxyMapArrowMoveStep = GalaxyMapSystemPositionScale * 1;

var GalaxyMapPerspectiveEnabled = true;
var GalaxyMapPerspectiveBase = 1.5;
var GalaxyMapPerspectiveDivider = 10;
var GalaxyMapPerspectiveSectorsAllowedUnderGrid = true;
var GalaxyMapPerspectiveLinksAllowedUnderGrid = true;

var GalaxyMinX = 0;
var GalaxyMaxX = 0;
var GalaxyMinY = 0;
var GalaxyMaxY = 0;

var GalaxyGridMaximumNegX = -10 * GalaxyMapSystemPositionScale;
var GalaxyGridMinimumX = 10 * GalaxyMapSystemPositionScale;
var GalaxyGridMaximumNegY = -8 * GalaxyMapSystemPositionScale;
var GalaxyGridMinimumY = 8 * GalaxyMapSystemPositionScale;

var GalaxyMinMaxMargin = 0;

var GalaxyOutputDocument;

var GalaxyMapGridWidth;
var GalaxyMapGridHeight;
var GalaxyMapGradientFadingDistance = GalaxyMapSystemPositionScale * 1;
var GalaxyMapGradientColor = "hsla(180,100%,40%,0.15)";
var GalaxyMapGridVerticalGradient;
var GalaxyMapGridHorizontalGradient;
var GalaxyMapGradientVerticalFadingPoint;
var GalaxyMapGradientHorizontalFadingPoint;

var GalaxyMapCrosshairThickness = 2;
var GalaxyMapCrosshairColor = "hsla(180,100%,75%,0.5)";
var GalaxyMapCrosshairOffset = 6;
var GalaxyMapCrosshairSize = 15;

var GalaxyMapSystemFrameColor = "hsla(180,100%,75%,1)";
var GalaxyMapSystemFrameColorFaded = "hsla(180,100%,75%,0.5)";

var GalaxyMapCapitalCrownOffsetX = 0;
var GalaxyMapCapitalCrownOffsetY = -20;
var GalaxyMapCapitalCrownPoints = [
	//crown
	[6,0],
	[9,-12],
	[3,-8],
	[0,-15],
	[-3,-8],
	[-9,-12],
	[-6,0],
	[6,0],
	//line
	[6,-4],
	[-6,-4]
];

var GalaxyMapZoomInProgress = false;
var GalaxyMapSmoothZoomEnabled = true;
var GalaxyMapSmoothZoomSpeed = 0.005;
var GalaxyMapSmoothZoomStep = 0;
var GalaxyMapSmoothZoomSpeedSteps = 20;

var GalaxyMapMovementInProgress = false;
var GalaxyMapSmoothMovementEnabled = true;
var GalaxyMapSmoothMoveSpeed = 0.005;
var GalaxyMapSmoothMovementStep = 0;
var GalaxyMapSmoothMoveSpeedSteps = 30;

var GalaxyMapDraggingInitialCameraX = -1000;
var GalaxyMapDraggingInitialCameraY = -1000;
var GalaxyMapMouseDownPositionX = -1000;
var GalaxyMapMouseDownPositionY = -1000;

var GalaxyMapMouseDragStart = false;
var GalaxyMapMouseDownPositionDetected = false;
var GalaxyMapMouseUpPositionDetected = false;
var GalaxyMapMouseDragOngoing = false;
var GalaxyMapMouseDragInterrupt = false;

var GalaxyMapLastHoveredSystem = -1;
var GalaxyMapLastHoveredGateLink = -1;

function galaxyRefreshGalaxyMapCanvas(outputDocument, quickRefresh = false, debugMode = false){
	if(debugMode) console.log("MANUAL");

	if(!GalaxyMapRefreshInProgress || quickRefresh) {
		GalaxyMapRefreshInProgress = true;
		
		if(true){
			if(!GalaxyMapInitialized) {	
				GalaxyMapCanvasContainer = outputDocument.getElementById(GalaxyMapCanvasContainerID);
				GalaxyMapCanvas = outputDocument.getElementById(GalaxyMapCanvasID);
				GalaxyMapContext = GalaxyMapCanvas.getContext("2d");
				
				//GalaxyMapContext.font = "25px " + GalaxyMapFont;
				//GalaxyMapContext.textAlign = "center";
				
				GalaxyOutputDocument = outputDocument;
				window.addEventListener("resize", galaxyWindowResize);
				galaxyWindowResize();
				galaxyRefreshMapLimit();
			
				GalaxyMapCanvas.onmousemove = function(e) {galaxyMapTrackMousePosition(e, outputDocument,GalaxyMapCanvas);}
				GalaxyMapCanvas.onclick = function(e) {galaxyMapMouseClick(e, outputDocument,GalaxyMapCanvas);}
				GalaxyMapCanvas.onmouseout = function(e) {galaxyMapMouseExit(e, outputDocument,GalaxyMapCanvas);}
				GalaxyMapCanvas.onmousedown = function(e) {galaxyMapMouseDown(e, outputDocument,GalaxyMapCanvas);}
				GalaxyMapCanvas.onmouseup = function(e) {galaxyMapMouseUp(e, outputDocument,GalaxyMapCanvas);}
				GalaxyMapCanvas.onmousewheel = function(e) {galaxyMapMouseWheel(e, outputDocument,GalaxyMapCanvas);}
				
				GalaxyMapInitialized = true;
			}
			
			GalaxyMapLastHoveredSystem = -1;
			GalaxyMapLastHoveredGateLink = -1;
				
			var tmpDiscoveredSectors = 0;
			if(GalaxyDiscoveredSectorsChanged) {
				galaxyRefreshMapLimit();
				GalaxyDiscoveredSectorsChanged = false;
			}
			
			var tmpScale = GalaxyMapZoom;
			
			//distance to systems
			var tmpMinDistanceSystem = 10000;
			var tmpClosestSystemIndex = -1;
			for(var i = 0; i < SystemsArray.length; i++){
				if(GalaxyMapPerspectiveEnabled){
					var tmpPosition = [
						GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - SystemsArray[i].position[0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,SystemsArray[i].position[2]/GalaxyMapPerspectiveDivider*tmpScale),
						GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - SystemsArray[i].position[1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,SystemsArray[i].position[2]/GalaxyMapPerspectiveDivider*tmpScale)
					];
					
					var tmpSystemDistance = Math.pow((
						Math.pow((tmpPosition[0] - GalaxyMapCursorPositionX),2) + 
						Math.pow((tmpPosition[1] - GalaxyMapCursorPositionY),2)),(1/2))/GalaxyMapSystemPositionScale/tmpScale;
						
					//if(i==0) console.log(tmpPosition[0],tmpPosition[1],GalaxyMapCursorPositionX,GalaxyMapCursorPositionY,tmpSystemDistance);
				}
				else{
					var tmpSystemDistance = Math.pow((
						Math.pow((SystemsArray[i].position[0] - GalaxyMapCursorCoordinateX),2) + 
						Math.pow((SystemsArray[i].position[1] - GalaxyMapCursorCoordinateY),2)),(1/2));
				}

				if(tmpSystemDistance < tmpMinDistanceSystem) {
					tmpMinDistanceSystem = tmpSystemDistance;
					tmpClosestSystemIndex = i;
				}
			}
			//distance to gates
			var tmpMinDistanceGate = 10000;
			var tmpClosestGateIndex = -1;
			for(var i = 0; i < GatesArray.length; i++){
				var tmpSystem1End = GatesArray[i][0];
				var tmpSystem2End = GatesArray[i][1];
				//var tmpGateDistance = distanceToSegment(GalaxyMapCursorCoordinateX,GalaxyMapCursorCoordinateY,tmpSystem1End[1][0],tmpSystem1End[1][1],tmpSystem2End[1][0],tmpSystem2End[1][1]);
				
				if(GalaxyMapPerspectiveEnabled){
					var tmpPosition1 = [
						GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpSystem1End[1][0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem1End[1][2]/GalaxyMapPerspectiveDivider*tmpScale),
						GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpSystem1End[1][1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem1End[1][2]/GalaxyMapPerspectiveDivider*tmpScale)
					];
					var tmpPosition2 = [
						GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpSystem2End[1][0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem2End[1][2]/GalaxyMapPerspectiveDivider*tmpScale),
						GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpSystem2End[1][1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem2End[1][2]/GalaxyMapPerspectiveDivider*tmpScale)
					];
					
					var tmpGateDistance = distanceToSegment(GalaxyMapCursorPositionX,GalaxyMapCursorPositionY,tmpPosition1[0],tmpPosition1[1],tmpPosition2[0],tmpPosition2[1])/tmpScale/GalaxyMapSystemPositionScale;
					
					//if(i==0) console.log(tmpPosition1[0],tmpPosition1[1],tmpPosition2[0],tmpPosition2[1],GalaxyMapCursorPositionX,GalaxyMapCursorPositionY, tmpGateDistance);
					
				}
				else{
					var tmpGateDistance = distanceToSegment(GalaxyMapCursorCoordinateX,GalaxyMapCursorCoordinateY,tmpSystem1End[1][0],tmpSystem1End[1][1],tmpSystem2End[1][0],tmpSystem2End[1][1]);
				}
				
				if(tmpGateDistance < tmpMinDistanceGate) {
					tmpMinDistanceGate = tmpGateDistance;
					tmpClosestGateIndex = i;
				}
			}
			
			if(tmpMinDistanceSystem <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale){
				if(tmpClosestSystemIndex != GalaxyMapLastHoveredSystem){
					//console.log("HOVER SYSTEM new system");
					GalaxyMapLastHoveredSystem = tmpClosestSystemIndex;
				}
				//else console.log("HOVER SYSTEM same system");
			}
			//else console.log("HOVER SYSTEM no system");
			
			if(tmpMinDistanceGate <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale && tmpMinDistanceGate < (tmpMinDistanceSystem - 0.2)){
				if(tmpClosestGateIndex != GalaxyMapLastHoveredGateLink){
					//console.log("HOVER GATE new link");
					GalaxyMapLastHoveredGateLink = tmpClosestGateIndex;
				}
				//else console.log("HOVER GATE same link");
			}
			//else console.log("HOVER GATE no link");
			
			
			//init
			GalaxyMapContext.clearRect(0, 0, GalaxyMapWidth, GalaxyMapHeight);
			
			GalaxyMapContext.font = "12px " + GalaxyMapFont;
			GalaxyMapContext.textAlign = "center";
			GalaxyMapContext.lineWidth = GalaxyMapLine;
			
			//gates under the grid
			if(GalaxyMapPerspectiveEnabled && GalaxyMapPerspectiveLinksAllowedUnderGrid){
				for(var i = 0; i < GatesArray.length; i++){
					GalaxyMapContext.lineWidth = GalaxyMapGateLineSize;
					
					var tmpGate = GatesArray[i];
					var gate1PositionX = GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpGate[0][1][0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpGate[0][1][2]/GalaxyMapPerspectiveDivider*tmpScale);
					var gate1PositionY = GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpGate[0][1][1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpGate[0][1][2]/GalaxyMapPerspectiveDivider*tmpScale);
					var gate2PositionX = GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpGate[1][1][0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpGate[1][1][2]/GalaxyMapPerspectiveDivider*tmpScale);
					var gate2PositionY = GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpGate[1][1][1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpGate[1][1][2]/GalaxyMapPerspectiveDivider*tmpScale);
					
					var tmpGradientLineColor = tmpGate[2][2][0];
					var tmpGradientFocusedColor = tmpGate[2][2][1];
					var tmpGradientFadeColor = tmpGate[2][2][2];
					
					//if both ends are above grid, just skip.
					if(tmpGate[0][1][2] >= 0 && tmpGate[1][1][2] >= 0) {
						continue; 
					}
					//if at least one end is below grid
					else{
						if(!tmpGate[0][2] && !tmpGate[1][2]) continue;	//neither discovered, skip
						else if(tmpGate[0][2] && tmpGate[1][2]) { //both discovered
							GalaxyMapContext.strokeStyle = tmpGradientLineColor;
						
							//additionally, if both discovered and mouse is close enough
							if(i == tmpClosestGateIndex && tmpMinDistanceGate <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale && tmpMinDistanceGate < (tmpMinDistanceSystem - 0.2)){
								GalaxyMapContext.strokeStyle = tmpGradientFocusedColor;
							}
						}
						else{
							var tmpGradient = GalaxyMapContext.createLinearGradient(
								gate1PositionX,
								gate1PositionY,
								gate2PositionX,
								gate2PositionY
							);
						
							//if first system is the discovered one
							if(tmpGate[0][2]){
								tmpGradient.addColorStop(0, tmpGradientLineColor);
							}
							else{
								tmpGradient.addColorStop(0, "transparent");
							}
							
							//fade at middle
							tmpGradient.addColorStop(0.5, tmpGradientFadeColor);
							
							//if second system is the discovered one
							if(tmpGate[1][2]){
								tmpGradient.addColorStop(1, tmpGradientLineColor);
							}
							else{
								tmpGradient.addColorStop(1, "transparent");
							}
							GalaxyMapContext.strokeStyle = tmpGradient;
						}
						
						//if both are below grid, draw standard way
						if(tmpGate[0][1][2] < 0 && tmpGate[1][1][2] < 0) {
							GalaxyMapContext.beginPath();
						
							GalaxyMapContext.moveTo(gate1PositionX, gate1PositionY);
							GalaxyMapContext.lineTo(gate2PositionX, gate2PositionY);
							
							GalaxyMapContext.stroke();		
						}
						else{
							var tmpGateDepthDistance = tmpGate[1][1][2] - tmpGate[0][1][2];
							var tmpGateDepthZeroPointDistance = 0 - tmpGate[0][1][2];
							var tmpGateDepthZeroPointRatio = tmpGateDepthZeroPointDistance/tmpGateDepthDistance;
							
							var tmpZeroPointPositionX = gate1PositionX + (gate2PositionX - gate1PositionX) * tmpGateDepthZeroPointRatio;
							var tmpZeroPointPositionY = gate1PositionY + (gate2PositionY - gate1PositionY) * tmpGateDepthZeroPointRatio;
							
							GalaxyMapContext.beginPath();
							
							//if "left" gate is below grid and other above
							if(tmpGate[0][1][2] < 0 && tmpGate[1][1][2] >= 0){
								GalaxyMapContext.moveTo(gate1PositionX, gate1PositionY);
								GalaxyMapContext.lineTo(tmpZeroPointPositionX, tmpZeroPointPositionY);
							}
							//if "right" gate is below grid and other above
							if(tmpGate[0][1][2] >= 0 && tmpGate[1][1][2] < 0){
								GalaxyMapContext.moveTo(tmpZeroPointPositionX, tmpZeroPointPositionY);
								GalaxyMapContext.lineTo(gate2PositionX, gate2PositionY);
							}
							
							GalaxyMapContext.stroke();	
						}
					}
				}
				GalaxyMapContext.lineWidth = GalaxyMapLine;
			}
			
			//systems under the grid
			if(GalaxyMapPerspectiveEnabled && GalaxyMapPerspectiveSectorsAllowedUnderGrid){
				for(var i  = 0; i < SystemsArray.length; i++){
					var tmpSystem = SystemsArray[i];
					if(tmpSystem.position[2] >= 0.0) continue;
					
					if(!tmpSystem.discovered) continue;
					tmpDiscoveredSectors++;
					
					var tmpAbsPosition = [
						GalaxyMapCanvas.width/2 - GalaxyCameraPositionX + tmpSystem.position[0] * GalaxyMapSystemPositionScale * tmpScale,
						GalaxyMapCanvas.height/2 - GalaxyCameraPositionY + tmpSystem.position[1] * GalaxyMapSystemPositionScale * tmpScale
					];
					
					//if perspective enabled, modify position value if system is not at middle of screen
					if(GalaxyMapPerspectiveEnabled){
						var tmpPosition = [
							GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpSystem.position[0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem.position[2]/GalaxyMapPerspectiveDivider*tmpScale),
							GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpSystem.position[1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem.position[2]/GalaxyMapPerspectiveDivider*tmpScale)
						];
					}
					else{
						var tmpPosition = tmpAbsPosition;
					}
					
					//depth line to grid if above
					if(GalaxyMapPerspectiveEnabled && tmpSystem.position[2] > 1){
						GalaxyMapContext.strokeStyle = "hsla(0,0%,75%,0.2)";
						GalaxyMapContext.beginPath();
						GalaxyMapContext.moveTo(tmpAbsPosition[0],tmpAbsPosition[1]);
						GalaxyMapContext.lineTo(tmpPosition[0],tmpPosition[1]);
						GalaxyMapContext.moveTo(tmpAbsPosition[0]-8,tmpAbsPosition[1]);
						GalaxyMapContext.lineTo(tmpAbsPosition[0]-2,tmpAbsPosition[1]);
						GalaxyMapContext.moveTo(tmpAbsPosition[0]+8,tmpAbsPosition[1]);
						GalaxyMapContext.lineTo(tmpAbsPosition[0]+2,tmpAbsPosition[1]);
						GalaxyMapContext.moveTo(tmpAbsPosition[0],tmpAbsPosition[1]-8);
						GalaxyMapContext.lineTo(tmpAbsPosition[0],tmpAbsPosition[1]-2);
						GalaxyMapContext.moveTo(tmpAbsPosition[0],tmpAbsPosition[1]+8);
						GalaxyMapContext.lineTo(tmpAbsPosition[0],tmpAbsPosition[1]+2);
						GalaxyMapContext.closePath();
						GalaxyMapContext.stroke();
					}
					
					//if player's capital add crown
					if(tmpSystem.id == SystemsHomeSystem) { 
						GalaxyMapContext.strokeStyle = "hsla(180,100%,75%,1.0)";
						GalaxyMapContext.beginPath();
						
						GalaxyMapContext.moveTo(
							GalaxyMapCapitalCrownPoints[0][0] + tmpPosition[0] + GalaxyMapCapitalCrownOffsetX,
							GalaxyMapCapitalCrownPoints[0][1] + tmpPosition[1] + (tmpSystem.starSize[1] * tmpScale) + GalaxyMapCapitalCrownOffsetY 
						);
						for(var j = 1; j < (GalaxyMapCapitalCrownPoints.length - 3); j++){
							GalaxyMapContext.lineTo(
								GalaxyMapCapitalCrownPoints[j][0] + tmpPosition[0] + GalaxyMapCapitalCrownOffsetX ,
								GalaxyMapCapitalCrownPoints[j][1] + tmpPosition[1] + (tmpSystem.starSize[1] * tmpScale) + GalaxyMapCapitalCrownOffsetY 
							);
						}
						GalaxyMapContext.closePath();
						
						GalaxyMapContext.stroke();
						
						GalaxyMapContext.beginPath();
						
						GalaxyMapContext.moveTo(
							GalaxyMapCapitalCrownPoints[GalaxyMapCapitalCrownPoints.length - 2][0] + tmpPosition[0] + GalaxyMapCapitalCrownOffsetX,
							GalaxyMapCapitalCrownPoints[GalaxyMapCapitalCrownPoints.length - 2][1] + tmpPosition[1] + (tmpSystem.starSize[1] * tmpScale) + GalaxyMapCapitalCrownOffsetY 
						);
						
						GalaxyMapContext.lineTo(
							GalaxyMapCapitalCrownPoints[GalaxyMapCapitalCrownPoints.length - 1][0] + tmpPosition[0] + GalaxyMapCapitalCrownOffsetX,
							GalaxyMapCapitalCrownPoints[GalaxyMapCapitalCrownPoints.length - 1][1] + tmpPosition[1] + (tmpSystem.starSize[1] * tmpScale) + GalaxyMapCapitalCrownOffsetY 
						);
						
						GalaxyMapContext.stroke();
					}
					
					//if selected, add frame
					if(GalaxyMapSelectedSystem == i) {
						GalaxyMapContext.strokeStyle = GalaxyMapSystemFrameColor;
						
						GalaxyMapContext.beginPath();
						GalaxyMapContext.arc(
						tmpPosition[0] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						tmpPosition[1] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						GalaxyMapSelectionRadius, 0, (1/2)*Math.PI
						);
						GalaxyMapContext.stroke();
						
						GalaxyMapContext.beginPath();
						GalaxyMapContext.arc(
						tmpPosition[0] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						tmpPosition[1] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						GalaxyMapSelectionRadius, (1/2)*Math.PI, (2/2)*Math.PI
						);
						GalaxyMapContext.stroke();
						
						GalaxyMapContext.beginPath();
						GalaxyMapContext.arc(
						tmpPosition[0] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						tmpPosition[1] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						GalaxyMapSelectionRadius, (2/2)*Math.PI, (3/2)*Math.PI
						);
						GalaxyMapContext.stroke();
						
						GalaxyMapContext.beginPath();
						GalaxyMapContext.arc(
						tmpPosition[0] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						tmpPosition[1] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						GalaxyMapSelectionRadius, (3/2)*Math.PI, (4/2)*Math.PI
						);
						GalaxyMapContext.stroke();
					}
					
					//if mouse close enough, enlarge and add transparent frame
					if(i == tmpClosestSystemIndex && tmpMinDistanceSystem <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale){
						var tmpRadius = GalaxyMapSystemSize + ((tmpSystem.starSize[1] * tmpScale) * (GalaxyMapSystemExtraSize)) + GalaxyMapSystemBodyRadiusHighlighted;
						
						GalaxyMapContext.strokeStyle = GalaxyMapSystemFrameColorFaded;
						
						GalaxyMapContext.beginPath();
						GalaxyMapContext.arc(
						tmpPosition[0] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						tmpPosition[1] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						GalaxyMapSelectionRadius, 0, (1/2)*Math.PI
						);
						GalaxyMapContext.stroke();
						
						GalaxyMapContext.beginPath();
						GalaxyMapContext.arc(
						tmpPosition[0] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						tmpPosition[1] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						GalaxyMapSelectionRadius, (1/2)*Math.PI, (2/2)*Math.PI
						);
						GalaxyMapContext.stroke();
						
						GalaxyMapContext.beginPath();
						GalaxyMapContext.arc(
						tmpPosition[0] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						tmpPosition[1] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						GalaxyMapSelectionRadius, (2/2)*Math.PI, (3/2)*Math.PI
						);
						GalaxyMapContext.stroke();
						
						GalaxyMapContext.beginPath();
						GalaxyMapContext.arc(
						tmpPosition[0] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						tmpPosition[1] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
						GalaxyMapSelectionRadius, (3/2)*Math.PI, (4/2)*Math.PI
						);
						GalaxyMapContext.stroke();
					}
					else {
						var tmpRadius = GalaxyMapSystemSize + ((tmpSystem.starSize[1] * tmpScale) * (GalaxyMapSystemExtraSize));
					}
					
					//draw system itself
					GalaxyMapContext.fillStyle = tmpSystem.starType[1];
					GalaxyMapContext.strokeStyle = tmpSystem.starType[2];
					GalaxyMapContext.beginPath();
					GalaxyMapContext.arc(
						tmpPosition[0],
						tmpPosition[1],
						tmpRadius, 0, 2*Math.PI
					);
					GalaxyMapContext.closePath();
					GalaxyMapContext.fill();
					GalaxyMapContext.stroke();
					
					//depth line to grid if below
					if(GalaxyMapPerspectiveEnabled && tmpSystem.position[2] < -1){
						GalaxyMapContext.strokeStyle = "hsla(0,0%,75%,0.2)";
						GalaxyMapContext.beginPath();
						GalaxyMapContext.moveTo(tmpAbsPosition[0],tmpAbsPosition[1]);
						GalaxyMapContext.lineTo(tmpPosition[0],tmpPosition[1]);
						
						GalaxyMapContext.moveTo(tmpAbsPosition[0]-8,tmpAbsPosition[1]);
						GalaxyMapContext.lineTo(tmpAbsPosition[0]-2,tmpAbsPosition[1]);
						GalaxyMapContext.moveTo(tmpAbsPosition[0]+8,tmpAbsPosition[1]);
						GalaxyMapContext.lineTo(tmpAbsPosition[0]+2,tmpAbsPosition[1]);
						GalaxyMapContext.moveTo(tmpAbsPosition[0],tmpAbsPosition[1]-8);
						GalaxyMapContext.lineTo(tmpAbsPosition[0],tmpAbsPosition[1]-2);
						GalaxyMapContext.moveTo(tmpAbsPosition[0],tmpAbsPosition[1]+8);
						GalaxyMapContext.lineTo(tmpAbsPosition[0],tmpAbsPosition[1]+2);
						
						GalaxyMapContext.closePath();
						GalaxyMapContext.stroke();
					}

				}
				//system names
				for(var i  = 0; i < SystemsArray.length; i++){
					var tmpSystem = SystemsArray[i];
					if(tmpSystem.position[2] >= 0.0) continue;
					
					if(!tmpSystem.discovered) continue;
					tmpDiscoveredSectors++;
					
					var tmpAbsPosition = [
						GalaxyMapCanvas.width/2 - GalaxyCameraPositionX + tmpSystem.position[0] * GalaxyMapSystemPositionScale * tmpScale,
						GalaxyMapCanvas.height/2 - GalaxyCameraPositionY + tmpSystem.position[1] * GalaxyMapSystemPositionScale * tmpScale
					];
					
					//if perspective enabled, modify position value if system is not at middle of screen
					if(GalaxyMapPerspectiveEnabled){
						var tmpPosition = [
							GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpSystem.position[0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem.position[2]/GalaxyMapPerspectiveDivider*tmpScale),
							GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpSystem.position[1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem.position[2]/GalaxyMapPerspectiveDivider*tmpScale)
						];
					}
					else{
						var tmpPosition = tmpAbsPosition;
					}
					
					if((i == tmpClosestSystemIndex && tmpMinDistanceSystem <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale) != true){
						//write text
						//shadow/dark outline
						GalaxyMapContext.strokeStyle = "hsla(0,0%,0%,1)";
						GalaxyMapContext.fillStyle = "hsl(0,0%,0%,1)";
						GalaxyMapContext.lineWidth = GalaxyMapLine+1;
						GalaxyMapContext.fillText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
						GalaxyMapContext.strokeText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
						
						//text itself
						GalaxyMapContext.lineWidth = GalaxyMapLine;
						GalaxyMapContext.fillStyle = tmpSystem.starType[1];
						GalaxyMapContext.fillText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
						
					}
					/*
					//write text
					//shadow/dark outline
					GalaxyMapContext.strokeStyle = "hsla(0,0%,0%,1)";
					GalaxyMapContext.fillStyle = "hsl(0,0%,0%,1)";
					GalaxyMapContext.lineWidth = GalaxyMapLine+1;
					GalaxyMapContext.fillText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					GalaxyMapContext.strokeText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					
					//text itself
					GalaxyMapContext.lineWidth = GalaxyMapLine;
					GalaxyMapContext.fillStyle = tmpSystem.starType[1];
					GalaxyMapContext.fillText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					
					if(i == tmpClosestSystemIndex && tmpMinDistanceSystem <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale){
						//write text
						
						GalaxyMapContext.font = "9px " + GalaxyMapFont;
						
						//shadow/dark outline
						var tmpSystemPositionText = "[" + tmpSystem.position + "]";
						GalaxyMapContext.strokeStyle = "hsla(0,0%,0%,1)";
						GalaxyMapContext.fillStyle = "hsl(0,0%,0%,1)";
						GalaxyMapContext.lineWidth = GalaxyMapLine + 1;
						GalaxyMapContext.fillText(tmpSystemPositionText,tmpPosition[0],tmpPosition[1] + GalaxyMapTextLineHeight + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
						GalaxyMapContext.strokeText(tmpSystemPositionText,tmpPosition[0],tmpPosition[1] + GalaxyMapTextLineHeight + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
						
						//text itself
						GalaxyMapContext.lineWidth = GalaxyMapLine;
						GalaxyMapContext.fillStyle = tmpSystem.starType[1];
						GalaxyMapContext.fillText(tmpSystemPositionText,tmpPosition[0],tmpPosition[1] + GalaxyMapTextLineHeight + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
						
						GalaxyMapContext.font = "12px " + GalaxyMapFont;
					}
					*/
				}
			
			}
			
			GalaxyMapContext.font = "12px " + GalaxyMapFont;
			GalaxyMapContext.textAlign = "center";
			GalaxyMapContext.lineWidth = GalaxyMapLine;
			
			//gradients
			GalaxyMapGridVerticalGradient = GalaxyMapContext.createLinearGradient(
				0,GalaxyMinY * tmpScale + GalaxyMapHeight/2 - GalaxyCameraPositionY,
				0,GalaxyMaxY * tmpScale + GalaxyMapHeight/2 - GalaxyCameraPositionY);
			GalaxyMapGridVerticalGradient.addColorStop(0, "transparent");
			GalaxyMapGridVerticalGradient.addColorStop(GalaxyMapGradientVerticalFadingPoint, GalaxyMapGradientColor);
			GalaxyMapGridVerticalGradient.addColorStop(1 - GalaxyMapGradientVerticalFadingPoint, GalaxyMapGradientColor);
			GalaxyMapGridVerticalGradient.addColorStop(1, "transparent");
			
			GalaxyMapGridHorizontalGradient = GalaxyMapContext.createLinearGradient(
				GalaxyMinX * tmpScale + GalaxyMapWidth/2 - GalaxyCameraPositionX,0,
				GalaxyMaxX * tmpScale + GalaxyMapWidth/2 - GalaxyCameraPositionX,0);
			GalaxyMapGridHorizontalGradient.addColorStop(0, "transparent");
			GalaxyMapGridHorizontalGradient.addColorStop(GalaxyMapGradientHorizontalFadingPoint, GalaxyMapGradientColor);
			GalaxyMapGridHorizontalGradient.addColorStop(1 - GalaxyMapGradientHorizontalFadingPoint, GalaxyMapGradientColor);
			GalaxyMapGridHorizontalGradient.addColorStop(1, "transparent");
			
			//vertical lines
			for(var i = ((GalaxyMinX + GalaxyMapSystemPositionScale)); i < (GalaxyMaxX); i += (GalaxyMapSystemPositionScale)){
				if(i == 0) GalaxyMapContext.strokeStyle = "hsla(180,100%,60%,0.30)";
				else {
					//GalaxyMapContext.strokeStyle = "hsla(210,100%,40%,0.15)";
					GalaxyMapContext.strokeStyle = GalaxyMapGridVerticalGradient;
				}
				
				GalaxyMapContext.beginPath();
				//GalaxyMapContext.moveTo(i - GalaxyCameraPositionX,GalaxyMinY);
				//GalaxyMapContext.lineTo(i - GalaxyCameraPositionX,GalaxyMaxY);
				GalaxyMapContext.moveTo(
					(i) * tmpScale - GalaxyCameraPositionX + GalaxyMapWidth/2,
					(GalaxyMinY) * tmpScale - GalaxyCameraPositionY + GalaxyMapHeight/2);
				GalaxyMapContext.lineTo(
					(i) * tmpScale - GalaxyCameraPositionX + GalaxyMapWidth/2,
					(GalaxyMaxY) * tmpScale - GalaxyCameraPositionY + GalaxyMapHeight/2);
				GalaxyMapContext.closePath();
				GalaxyMapContext.stroke();
			}

			//horizontal lines
			for(var i = ((GalaxyMinY + GalaxyMapSystemPositionScale)); i < (GalaxyMaxY); i += (GalaxyMapSystemPositionScale)){
				if(i == 0) GalaxyMapContext.strokeStyle = "hsla(180,100%,60%,0.30)";
				else {
					//GalaxyMapContext.strokeStyle = "hsla(210,100%,40%,0.15)";
					GalaxyMapContext.strokeStyle = GalaxyMapGridHorizontalGradient;
				}
				
				GalaxyMapContext.beginPath();
				//GalaxyMapContext.moveTo(i - GalaxyCameraPositionX,GalaxyMinY);
				//GalaxyMapContext.lineTo(i - GalaxyCameraPositionX,GalaxyMaxY);
				GalaxyMapContext.moveTo(
					(GalaxyMinX) * tmpScale - GalaxyCameraPositionX + GalaxyMapWidth/2,
					(i) * tmpScale - GalaxyCameraPositionY + GalaxyMapHeight/2);
				GalaxyMapContext.lineTo(
					(GalaxyMaxX) * tmpScale - GalaxyCameraPositionX + GalaxyMapWidth/2,
					(i) * tmpScale - GalaxyCameraPositionY + GalaxyMapHeight/2);
				GalaxyMapContext.closePath();
				GalaxyMapContext.stroke();
			}
			
			//gate connections
			for(var i = 0; i < GatesArray.length; i++){
				
				GalaxyMapContext.lineWidth = GalaxyMapGateLineSize;
				
				var tmpGate = GatesArray[i];
				
				//if perspective enabled, positions of link ends are adjusted if not right at the middle of canvas
				if(GalaxyMapPerspectiveEnabled) {
					if(tmpGate[0][1][2] < 0 && tmpGate[1][1][2] < 0 && GalaxyMapPerspectiveLinksAllowedUnderGrid) {
						//if both ends are below grid, just skip.
						continue; 
					}					
					var gate1PositionX = GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpGate[0][1][0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpGate[0][1][2]/GalaxyMapPerspectiveDivider*tmpScale);
					var gate1PositionY = GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpGate[0][1][1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpGate[0][1][2]/GalaxyMapPerspectiveDivider*tmpScale);
					var gate2PositionX = GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpGate[1][1][0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpGate[1][1][2]/GalaxyMapPerspectiveDivider*tmpScale);
					var gate2PositionY = GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpGate[1][1][1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpGate[1][1][2]/GalaxyMapPerspectiveDivider*tmpScale);
				}
				else{
					var gate1PositionX = GalaxyMapCanvas.width/2 - GalaxyCameraPositionX + tmpGate[0][1][0] * GalaxyMapSystemPositionScale * tmpScale;
					var gate1PositionY = GalaxyMapCanvas.height/2 - GalaxyCameraPositionY + tmpGate[0][1][1] * GalaxyMapSystemPositionScale * tmpScale;
					var gate2PositionX = GalaxyMapCanvas.width/2 - GalaxyCameraPositionX + tmpGate[1][1][0] * GalaxyMapSystemPositionScale * tmpScale;
					var gate2PositionY = GalaxyMapCanvas.height/2 - GalaxyCameraPositionY + tmpGate[1][1][1] * GalaxyMapSystemPositionScale * tmpScale;
				}
								
				var linkPoint1 = [gate1PositionX + (gate2PositionX - gate1PositionX)*0.15, gate1PositionY + (gate2PositionY - gate1PositionY)*0.15];
				var linkPoint2 = [gate1PositionX + (gate2PositionX - gate1PositionX)*0.50, gate1PositionY + (gate2PositionY - gate1PositionY)*0.50];
				var linkPoint3 = [gate1PositionX + (gate2PositionX - gate1PositionX)*0.85, gate1PositionY + (gate2PositionY - gate1PositionY)*0.85];
				
				var tmpGradientLineColor = tmpGate[2][2][0];
				var tmpGradientFocusedColor = tmpGate[2][2][1];
				var tmpGradientFadeColor = tmpGate[2][2][2];
				
				if(!tmpGate[0][2] && !tmpGate[1][2]) continue;	//neither discovered, skip
				else if(tmpGate[0][2] && tmpGate[1][2]) { //both discovered
					GalaxyMapContext.strokeStyle = tmpGradientLineColor;
					
					//additionally, if both discovered and mouse is close enough
					if(GalaxyMapPerspectiveEnabled){
						if(i == tmpClosestGateIndex && tmpMinDistanceGate <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale && tmpMinDistanceGate < (tmpMinDistanceSystem - 0.2)){
							GalaxyMapContext.strokeStyle = tmpGradientFocusedColor;
						}
					}
					else{
						if(i == tmpClosestGateIndex && tmpMinDistanceGate <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale && tmpMinDistanceGate < (tmpMinDistanceSystem - 0.2)){
							GalaxyMapContext.strokeStyle = tmpGradientFocusedColor;
						}
					}
				}
				else{
					var tmpGradient = GalaxyMapContext.createLinearGradient(
						gate1PositionX,
						gate1PositionY,
						gate2PositionX,
						gate2PositionY
					);
				
					//if first system is the discovered one
					if(tmpGate[0][2]){
						tmpGradient.addColorStop(0, tmpGradientLineColor);
					}
					else{
						tmpGradient.addColorStop(0, "transparent");
					}
					
					//fade at middle
					tmpGradient.addColorStop(0.5, tmpGradientFadeColor);
					
					//if second system is the discovered one
					if(tmpGate[1][2]){
						tmpGradient.addColorStop(1, tmpGradientLineColor);
					}
					else{
						tmpGradient.addColorStop(1, "transparent");
					}
					GalaxyMapContext.strokeStyle = tmpGradient;
				}
				
				if(GalaxyMapPerspectiveEnabled && GalaxyMapPerspectiveLinksAllowedUnderGrid){
					//if both are above grid, draw standard way
					if(tmpGate[0][1][2] >= 0 && tmpGate[1][1][2] >= 0) {
						
						GalaxyMapContext.beginPath();
					
						GalaxyMapContext.moveTo(gate1PositionX, gate1PositionY);
						GalaxyMapContext.lineTo(gate2PositionX, gate2PositionY);
						
						GalaxyMapContext.stroke();		
					}
					else{
						var tmpGateDepthDistance = tmpGate[1][1][2] - tmpGate[0][1][2];
						var tmpGateDepthZeroPointDistance = 0 - tmpGate[0][1][2];
						var tmpGateDepthZeroPointRatio = tmpGateDepthZeroPointDistance/tmpGateDepthDistance;
						
						var tmpZeroPointPositionX = gate1PositionX + (gate2PositionX - gate1PositionX) * tmpGateDepthZeroPointRatio;
						var tmpZeroPointPositionY = gate1PositionY + (gate2PositionY - gate1PositionY) * tmpGateDepthZeroPointRatio;
					
						GalaxyMapContext.beginPath();
							
						//if "left" gate is above grid and other below
						if(tmpGate[0][1][2] >= 0 && tmpGate[1][1][2] < 0){
							GalaxyMapContext.moveTo(gate1PositionX, gate1PositionY);
							GalaxyMapContext.lineTo(tmpZeroPointPositionX, tmpZeroPointPositionY);
						}
						//if "right" gate is above grid and other below
						if(tmpGate[0][1][2] < 0 && tmpGate[1][1][2] >= 0){
							GalaxyMapContext.moveTo(tmpZeroPointPositionX, tmpZeroPointPositionY);
							GalaxyMapContext.lineTo(gate2PositionX, gate2PositionY);
						}
						GalaxyMapContext.stroke();
					}
				}
				else{
					GalaxyMapContext.beginPath();
					
					GalaxyMapContext.moveTo(gate1PositionX, gate1PositionY);
					GalaxyMapContext.lineTo(gate2PositionX, gate2PositionY);
					
					GalaxyMapContext.stroke();
				}
			}
			
			GalaxyMapContext.lineWidth = GalaxyMapLine;
			
			//systems
			for(var i  = 0; i < SystemsArray.length; i++){
				var tmpSystem = SystemsArray[i];
				if(GalaxyMapPerspectiveSectorsAllowedUnderGrid && GalaxyMapPerspectiveEnabled && tmpSystem.position[2] < 0) continue;
				
				if(!tmpSystem.discovered) continue;
				tmpDiscoveredSectors++;
				
				var tmpAbsPosition = [
					GalaxyMapCanvas.width/2 - GalaxyCameraPositionX + tmpSystem.position[0] * GalaxyMapSystemPositionScale * tmpScale,
					GalaxyMapCanvas.height/2 - GalaxyCameraPositionY + tmpSystem.position[1] * GalaxyMapSystemPositionScale * tmpScale
				];
				
				//if perspective enabled, modify position value if system is not at middle of screen
				if(GalaxyMapPerspectiveEnabled){
					var tmpPosition = [
						GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpSystem.position[0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem.position[2]/GalaxyMapPerspectiveDivider*tmpScale),
						GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpSystem.position[1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem.position[2]/GalaxyMapPerspectiveDivider*tmpScale)
					];
				}
				else{
					var tmpPosition = tmpAbsPosition;
				}
				
				//depth line to grid if above
				if(GalaxyMapPerspectiveEnabled && tmpSystem.position[2] > 1){
					GalaxyMapContext.strokeStyle = "hsla(0,0%,75%,0.2)";
					GalaxyMapContext.beginPath();
					GalaxyMapContext.moveTo(tmpAbsPosition[0],tmpAbsPosition[1]);
					GalaxyMapContext.lineTo(tmpPosition[0],tmpPosition[1]);
					GalaxyMapContext.moveTo(tmpAbsPosition[0]-8,tmpAbsPosition[1]);
					GalaxyMapContext.lineTo(tmpAbsPosition[0]-2,tmpAbsPosition[1]);
					GalaxyMapContext.moveTo(tmpAbsPosition[0]+8,tmpAbsPosition[1]);
					GalaxyMapContext.lineTo(tmpAbsPosition[0]+2,tmpAbsPosition[1]);
					GalaxyMapContext.moveTo(tmpAbsPosition[0],tmpAbsPosition[1]-8);
					GalaxyMapContext.lineTo(tmpAbsPosition[0],tmpAbsPosition[1]-2);
					GalaxyMapContext.moveTo(tmpAbsPosition[0],tmpAbsPosition[1]+8);
					GalaxyMapContext.lineTo(tmpAbsPosition[0],tmpAbsPosition[1]+2);
					GalaxyMapContext.stroke();
				}
				
				//if player's capital add crown
				if(tmpSystem.id == SystemsHomeSystem) { 
					GalaxyMapContext.strokeStyle = "hsla(180,100%,75%,1.0)";
					GalaxyMapContext.beginPath();
					
					GalaxyMapContext.moveTo(
						GalaxyMapCapitalCrownPoints[0][0] + tmpPosition[0] + GalaxyMapCapitalCrownOffsetX,
						GalaxyMapCapitalCrownPoints[0][1] + tmpPosition[1] + (tmpSystem.starSize[1] * tmpScale) + GalaxyMapCapitalCrownOffsetY 
					);
					for(var j = 1; j < (GalaxyMapCapitalCrownPoints.length - 3); j++){
						GalaxyMapContext.lineTo(
							GalaxyMapCapitalCrownPoints[j][0] + tmpPosition[0] + GalaxyMapCapitalCrownOffsetX ,
							GalaxyMapCapitalCrownPoints[j][1] + tmpPosition[1] + (tmpSystem.starSize[1] * tmpScale) + GalaxyMapCapitalCrownOffsetY 
						);
					}
					GalaxyMapContext.closePath();
					
					GalaxyMapContext.stroke();
					
					GalaxyMapContext.beginPath();
					
					GalaxyMapContext.moveTo(
						GalaxyMapCapitalCrownPoints[GalaxyMapCapitalCrownPoints.length - 2][0] + tmpPosition[0] + GalaxyMapCapitalCrownOffsetX,
						GalaxyMapCapitalCrownPoints[GalaxyMapCapitalCrownPoints.length - 2][1] + tmpPosition[1] + (tmpSystem.starSize[1] * tmpScale) + GalaxyMapCapitalCrownOffsetY 
					);
					
					GalaxyMapContext.lineTo(
						GalaxyMapCapitalCrownPoints[GalaxyMapCapitalCrownPoints.length - 1][0] + tmpPosition[0] + GalaxyMapCapitalCrownOffsetX,
						GalaxyMapCapitalCrownPoints[GalaxyMapCapitalCrownPoints.length - 1][1] + tmpPosition[1] + (tmpSystem.starSize[1] * tmpScale) + GalaxyMapCapitalCrownOffsetY 
					);
					
					GalaxyMapContext.stroke();
				}
				
				//if selected, add frame
				if(GalaxyMapSelectedSystem == i) {
					GalaxyMapContext.strokeStyle = GalaxyMapSystemFrameColor;
					
					GalaxyMapContext.beginPath();
					GalaxyMapContext.arc(
					tmpPosition[0] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					tmpPosition[1] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					GalaxyMapSelectionRadius, 0, (1/2)*Math.PI
					);
					GalaxyMapContext.stroke();
					
					GalaxyMapContext.beginPath();
					GalaxyMapContext.arc(
					tmpPosition[0] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					tmpPosition[1] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					GalaxyMapSelectionRadius, (1/2)*Math.PI, (2/2)*Math.PI
					);
					GalaxyMapContext.stroke();
					
					GalaxyMapContext.beginPath();
					GalaxyMapContext.arc(
					tmpPosition[0] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					tmpPosition[1] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					GalaxyMapSelectionRadius, (2/2)*Math.PI, (3/2)*Math.PI
					);
					GalaxyMapContext.stroke();
					
					GalaxyMapContext.beginPath();
					GalaxyMapContext.arc(
					tmpPosition[0] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					tmpPosition[1] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					GalaxyMapSelectionRadius, (3/2)*Math.PI, (4/2)*Math.PI
					);
					GalaxyMapContext.stroke();
				}
				
				//if mouse close enough, enlarge and add transparent frame
				if(i == tmpClosestSystemIndex && tmpMinDistanceSystem <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale){
					var tmpRadius = GalaxyMapSystemSize + ((tmpSystem.starSize[1] * tmpScale) * (GalaxyMapSystemExtraSize)) + GalaxyMapSystemBodyRadiusHighlighted;
					
					GalaxyMapContext.strokeStyle = GalaxyMapSystemFrameColorFaded;
					
					GalaxyMapContext.beginPath();
					GalaxyMapContext.arc(
					tmpPosition[0] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					tmpPosition[1] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					GalaxyMapSelectionRadius, 0, (1/2)*Math.PI
					);
					GalaxyMapContext.stroke();
					
					GalaxyMapContext.beginPath();
					GalaxyMapContext.arc(
					tmpPosition[0] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					tmpPosition[1] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					GalaxyMapSelectionRadius, (1/2)*Math.PI, (2/2)*Math.PI
					);
					GalaxyMapContext.stroke();
					
					GalaxyMapContext.beginPath();
					GalaxyMapContext.arc(
					tmpPosition[0] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					tmpPosition[1] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					GalaxyMapSelectionRadius, (2/2)*Math.PI, (3/2)*Math.PI
					);
					GalaxyMapContext.stroke();
					
					GalaxyMapContext.beginPath();
					GalaxyMapContext.arc(
					tmpPosition[0] + (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					tmpPosition[1] - (GalaxyMapSelectionDistance + (tmpSystem.starSize[1] * tmpScale)),
					GalaxyMapSelectionRadius, (3/2)*Math.PI, (4/2)*Math.PI
					);
					GalaxyMapContext.stroke();
				}
				else {
					var tmpRadius = GalaxyMapSystemSize + ((tmpSystem.starSize[1] * tmpScale) * (GalaxyMapSystemExtraSize));
				}
				
				//draw system itself
				GalaxyMapContext.fillStyle = tmpSystem.starType[1];
				GalaxyMapContext.strokeStyle = tmpSystem.starType[2];
				GalaxyMapContext.beginPath();
				GalaxyMapContext.arc(
					tmpPosition[0],
					tmpPosition[1],
					tmpRadius, 0, 2*Math.PI
				);
				GalaxyMapContext.closePath();
				GalaxyMapContext.fill();
				GalaxyMapContext.stroke();
				
				//depth line to grid if below
				if(GalaxyMapPerspectiveEnabled && tmpSystem.position[2] < -1){
					GalaxyMapContext.strokeStyle = "hsla(0,0%,75%,0.2)";
					GalaxyMapContext.beginPath();
					GalaxyMapContext.moveTo(tmpAbsPosition[0],tmpAbsPosition[1]);
					GalaxyMapContext.lineTo(tmpPosition[0],tmpPosition[1]);
					
					GalaxyMapContext.moveTo(tmpAbsPosition[0]-8,tmpAbsPosition[1]);
					GalaxyMapContext.lineTo(tmpAbsPosition[0]-2,tmpAbsPosition[1]);
					GalaxyMapContext.moveTo(tmpAbsPosition[0]+8,tmpAbsPosition[1]);
					GalaxyMapContext.lineTo(tmpAbsPosition[0]+2,tmpAbsPosition[1]);
					GalaxyMapContext.moveTo(tmpAbsPosition[0],tmpAbsPosition[1]-8);
					GalaxyMapContext.lineTo(tmpAbsPosition[0],tmpAbsPosition[1]-2);
					GalaxyMapContext.moveTo(tmpAbsPosition[0],tmpAbsPosition[1]+8);
					GalaxyMapContext.lineTo(tmpAbsPosition[0],tmpAbsPosition[1]+2);
					
					GalaxyMapContext.stroke();
				}

			}
			//system names
			for(var i  = 0; i < SystemsArray.length; i++){
				var tmpSystem = SystemsArray[i];
				if(GalaxyMapPerspectiveSectorsAllowedUnderGrid && GalaxyMapPerspectiveEnabled && tmpSystem.position[2] < 0) continue;
				
				if(!tmpSystem.discovered) continue;
				tmpDiscoveredSectors++;
				
				var tmpAbsPosition = [
					GalaxyMapCanvas.width/2 - GalaxyCameraPositionX + tmpSystem.position[0] * GalaxyMapSystemPositionScale * tmpScale,
					GalaxyMapCanvas.height/2 - GalaxyCameraPositionY + tmpSystem.position[1] * GalaxyMapSystemPositionScale * tmpScale
				];
				
				//if perspective enabled, modify position value if system is not at middle of screen
				if(GalaxyMapPerspectiveEnabled){
					var tmpPosition = [
						GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpSystem.position[0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem.position[2]/GalaxyMapPerspectiveDivider*tmpScale),
						GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpSystem.position[1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem.position[2]/GalaxyMapPerspectiveDivider*tmpScale)
					];
				}
				else{
					var tmpPosition = tmpAbsPosition;
				}
				
				if((i == tmpClosestSystemIndex && tmpMinDistanceSystem <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale) != true){
					//write text
					//shadow/dark outline
					GalaxyMapContext.strokeStyle = "hsla(0,0%,0%,1)";
					GalaxyMapContext.fillStyle = "hsl(0,0%,0%,1)";
					GalaxyMapContext.lineWidth = GalaxyMapLine+1;
					GalaxyMapContext.fillText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					GalaxyMapContext.strokeText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					
					//text itself
					GalaxyMapContext.lineWidth = GalaxyMapLine;
					GalaxyMapContext.fillStyle = tmpSystem.starType[1];
					GalaxyMapContext.fillText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
				}
				/*
				//write text
				//shadow/dark outline
				GalaxyMapContext.strokeStyle = "hsla(0,0%,0%,1)";
				GalaxyMapContext.fillStyle = "hsl(0,0%,0%,1)";
				GalaxyMapContext.lineWidth = GalaxyMapLine+1;
				GalaxyMapContext.fillText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
				GalaxyMapContext.strokeText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
				
				//text itself
				GalaxyMapContext.lineWidth = GalaxyMapLine;
				GalaxyMapContext.fillStyle = tmpSystem.starType[1];
				GalaxyMapContext.fillText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
				
				if(i == tmpClosestSystemIndex && tmpMinDistanceSystem <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale){
					//write text
					
					GalaxyMapContext.font = "9px " + GalaxyMapFont;
					
					//shadow/dark outline
					var tmpSystemPositionText = "[" + tmpSystem.position + "]";
					GalaxyMapContext.strokeStyle = "hsla(0,0%,0%,1)";
					GalaxyMapContext.fillStyle = "hsl(0,0%,0%,1)";
					GalaxyMapContext.lineWidth = GalaxyMapLine + 1;
					GalaxyMapContext.fillText(tmpSystemPositionText,tmpPosition[0],tmpPosition[1] + GalaxyMapTextLineHeight + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					GalaxyMapContext.strokeText(tmpSystemPositionText,tmpPosition[0],tmpPosition[1] + GalaxyMapTextLineHeight + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					
					//text itself
					GalaxyMapContext.lineWidth = GalaxyMapLine;
					GalaxyMapContext.fillStyle = tmpSystem.starType[1];
					GalaxyMapContext.fillText(tmpSystemPositionText,tmpPosition[0],tmpPosition[1] + GalaxyMapTextLineHeight + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					
					GalaxyMapContext.font = "12px " + GalaxyMapFont;
				}
				*/
			}
			
			//crosshair
			GalaxyMapContext.strokeStyle = GalaxyMapCrosshairColor;	
			GalaxyMapContext.lineWidth = GalaxyMapCrosshairThickness;
			
			GalaxyMapContext.beginPath();
			
			GalaxyMapContext.moveTo(GalaxyMapCanvas.width/2, GalaxyMapCanvas.height/2 - GalaxyMapCrosshairOffset);
			GalaxyMapContext.lineTo(GalaxyMapCanvas.width/2, GalaxyMapCanvas.height/2 - GalaxyMapCrosshairSize);
			GalaxyMapContext.moveTo(GalaxyMapCanvas.width/2, GalaxyMapCanvas.height/2 + GalaxyMapCrosshairOffset);
			GalaxyMapContext.lineTo(GalaxyMapCanvas.width/2, GalaxyMapCanvas.height/2 + GalaxyMapCrosshairSize);
			GalaxyMapContext.moveTo(GalaxyMapCanvas.width/2 - GalaxyMapCrosshairOffset, GalaxyMapCanvas.height/2);
			GalaxyMapContext.lineTo(GalaxyMapCanvas.width/2 - GalaxyMapCrosshairSize, GalaxyMapCanvas.height/2);
			GalaxyMapContext.moveTo(GalaxyMapCanvas.width/2 + GalaxyMapCrosshairOffset, GalaxyMapCanvas.height/2);
			GalaxyMapContext.lineTo(GalaxyMapCanvas.width/2 + GalaxyMapCrosshairSize, GalaxyMapCanvas.height/2);
			
			GalaxyMapContext.stroke();
			
			//focus hovered gate connection
			for(var i = 0; i < GatesArray.length; i++){
				if(i == tmpClosestGateIndex && tmpMinDistanceGate <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale && tmpMinDistanceGate < (tmpMinDistanceSystem - 0.2)){
					GalaxyMapContext.lineWidth = GalaxyMapGateLineSize;
					var tmpGate = GatesArray[i];
					
					if(tmpGate[0][2] && tmpGate[1][2]){
						//if perspective enabled, positions of link ends are adjusted if not right at the middle of canvas
						if(GalaxyMapPerspectiveEnabled) {
							if(tmpGate[0][1][2] < 0 && tmpGate[1][1][2] < 0 && GalaxyMapPerspectiveLinksAllowedUnderGrid) {
								//if both ends are below grid, just skip.
								continue; 
							}					
							var gate1PositionX = GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpGate[0][1][0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpGate[0][1][2]/GalaxyMapPerspectiveDivider*tmpScale);
							var gate1PositionY = GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpGate[0][1][1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpGate[0][1][2]/GalaxyMapPerspectiveDivider*tmpScale);
							var gate2PositionX = GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpGate[1][1][0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpGate[1][1][2]/GalaxyMapPerspectiveDivider*tmpScale);
							var gate2PositionY = GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpGate[1][1][1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpGate[1][1][2]/GalaxyMapPerspectiveDivider*tmpScale);
						}
						else{
							var gate1PositionX = GalaxyMapCanvas.width/2 - GalaxyCameraPositionX + tmpGate[0][1][0] * GalaxyMapSystemPositionScale * tmpScale;
							var gate1PositionY = GalaxyMapCanvas.height/2 - GalaxyCameraPositionY + tmpGate[0][1][1] * GalaxyMapSystemPositionScale * tmpScale;
							var gate2PositionX = GalaxyMapCanvas.width/2 - GalaxyCameraPositionX + tmpGate[1][1][0] * GalaxyMapSystemPositionScale * tmpScale;
							var gate2PositionY = GalaxyMapCanvas.height/2 - GalaxyCameraPositionY + tmpGate[1][1][1] * GalaxyMapSystemPositionScale * tmpScale;
						}
										
						var linkPoint1 = [gate1PositionX + (gate2PositionX - gate1PositionX)*0.15, gate1PositionY + (gate2PositionY - gate1PositionY)*0.15];
						var linkPoint2 = [gate1PositionX + (gate2PositionX - gate1PositionX)*0.50, gate1PositionY + (gate2PositionY - gate1PositionY)*0.50];
						var linkPoint3 = [gate1PositionX + (gate2PositionX - gate1PositionX)*0.85, gate1PositionY + (gate2PositionY - gate1PositionY)*0.85];
						
						GalaxyMapContext.font = "9px " + GalaxyMapFont;
						
						GalaxyMapContext.strokeStyle = "hsla(0,0%,0%,1)";
						GalaxyMapContext.fillStyle = "hsl(0,0%,0%,1)";
						GalaxyMapContext.lineWidth = GalaxyMapLine+1;
						GalaxyMapContext.fillText(tmpGate[0][0] + "-" + tmpGate[1][0],linkPoint2[0] + GalaxyMapGateTextOffsetX,linkPoint2[1] + GalaxyMapGateTextOffsetY);
						GalaxyMapContext.strokeText(tmpGate[0][0] + "-" + tmpGate[1][0],linkPoint2[0] + GalaxyMapGateTextOffsetX,linkPoint2[1] + GalaxyMapGateTextOffsetY);
						GalaxyMapContext.fillText("Dist.: " + tmpGate[3].toFixed(2),linkPoint2[0] + GalaxyMapGateTextOffsetX,linkPoint2[1] + GalaxyMapGateTextOffsetY + GalaxyMapTextLineHeight);
						GalaxyMapContext.strokeText("Dist.: " + tmpGate[3].toFixed(2),linkPoint2[0] + GalaxyMapGateTextOffsetX,linkPoint2[1] + GalaxyMapGateTextOffsetY + GalaxyMapTextLineHeight);
						GalaxyMapContext.lineWidth = GalaxyMapLine;
						GalaxyMapContext.fillStyle = GalaxyMapGateFocusedLineColor;
						GalaxyMapContext.fillText(tmpGate[0][0] + "-" + tmpGate[1][0],linkPoint2[0] + GalaxyMapGateTextOffsetX,linkPoint2[1] + GalaxyMapGateTextOffsetY);
						GalaxyMapContext.fillText("Dist.: " + tmpGate[3].toFixed(2),linkPoint2[0] + GalaxyMapGateTextOffsetX,linkPoint2[1] + GalaxyMapGateTextOffsetY + GalaxyMapTextLineHeight);
						
						GalaxyMapContext.font = "12px " + GalaxyMapFont;
					}		
				}
			}
			
			GalaxyMapContext.lineWidth = GalaxyMapLine;
			
			//focus hovered system name
			for(var i  = 0; i < SystemsArray.length; i++){
				if(i == tmpClosestSystemIndex && tmpMinDistanceSystem <= GalaxyMapMouseDetectionCoordinatesDistance/tmpScale){
					
					var tmpSystem = SystemsArray[i];
					if(!tmpSystem.discovered) continue;
					tmpDiscoveredSectors++;
					
					var tmpAbsPosition = [
						GalaxyMapCanvas.width/2 - GalaxyCameraPositionX + tmpSystem.position[0] * GalaxyMapSystemPositionScale * tmpScale,
						GalaxyMapCanvas.height/2 - GalaxyCameraPositionY + tmpSystem.position[1] * GalaxyMapSystemPositionScale * tmpScale
					];
					
					//if perspective enabled, modify position value if system is not at middle of screen
					if(GalaxyMapPerspectiveEnabled){
						var tmpPosition = [
							GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpSystem.position[0] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem.position[2]/GalaxyMapPerspectiveDivider*tmpScale),
							GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpSystem.position[1] * GalaxyMapSystemPositionScale * tmpScale) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem.position[2]/GalaxyMapPerspectiveDivider*tmpScale)
						];
					}
					else{
						var tmpPosition = tmpAbsPosition;
					}
					
					//write text
					//shadow/dark outline
					GalaxyMapContext.strokeStyle = "hsla(0,0%,0%,1)";
					GalaxyMapContext.fillStyle = "hsl(0,0%,0%,1)";
					GalaxyMapContext.lineWidth = GalaxyMapLine+1;
					GalaxyMapContext.fillText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					GalaxyMapContext.strokeText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					
					//text itself
					GalaxyMapContext.lineWidth = GalaxyMapLine;
					GalaxyMapContext.fillStyle = tmpSystem.starType[1];
					GalaxyMapContext.fillText(tmpSystem.name,tmpPosition[0],tmpPosition[1] + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					
					//write text
					
					GalaxyMapContext.font = "9px " + GalaxyMapFont;
					
					//shadow/dark outline
					var tmpSystemPositionText = "[" + tmpSystem.position[0] + "," + (-1)*tmpSystem.position[1] + "," + tmpSystem.position[2] + "]";
					GalaxyMapContext.strokeStyle = "hsla(0,0%,0%,1)";
					GalaxyMapContext.fillStyle = "hsl(0,0%,0%,1)";
					GalaxyMapContext.lineWidth = GalaxyMapLine + 1;
					GalaxyMapContext.fillText(tmpSystemPositionText,tmpPosition[0],tmpPosition[1] + GalaxyMapTextLineHeight + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					GalaxyMapContext.strokeText(tmpSystemPositionText,tmpPosition[0],tmpPosition[1] + GalaxyMapTextLineHeight + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					
					//text itself
					GalaxyMapContext.lineWidth = GalaxyMapLine;
					GalaxyMapContext.fillStyle = tmpSystem.starType[1];
					GalaxyMapContext.fillText(tmpSystemPositionText,tmpPosition[0],tmpPosition[1] + GalaxyMapTextLineHeight + 25 + GalaxyMapSystemExtraSize * tmpSystem.starSize[1] * tmpScale);
					
					GalaxyMapContext.font = "12px " + GalaxyMapFont;
				}
				
			}
			
			if(tmpDiscoveredSectors > GalaxyMapDisplayedSystems){
				GalaxyMapDisplayedSystems = tmpDiscoveredSectors;
				GalaxyDiscoveredSectorsChanged = true;
			}
			galaxyMapUpdateSidePanel(outputDocument);
		} 
		else {
			//console.log("System NOT redrawn - system changing." + debugMode);
		}	
		
		setTimeout(() => { 
			GalaxyMapRefreshInProgress = false;
			if(GalaxyMapRefreshActive && !quickRefresh) galaxyRefreshGalaxyMapCanvas(outputDocument);
			else {
				//console.log("Aborting timeout." + debugMode);
			}
		}, 1000 * GalaxyMapRefreshSpeed);	
	}
	else {
		//console.log("System NOT redrawn - refresh in progress." + debugMode);
	}
}

function galaxyWindowResize() {
	if(!GalaxyWindowResizeDetected) {
		GalaxyWindowResizeDetected = true;
		
		var tmpBoundingClientRect = GalaxyMapCanvasContainer.getBoundingClientRect();
		
		GalaxyMapCanvas.height = tmpBoundingClientRect.height;
		GalaxyMapCanvas.width = tmpBoundingClientRect.width;
		
		GalaxyMapHeight = GalaxyMapCanvas.height;
		GalaxyMapWidth = GalaxyMapCanvas.width;
		
		setTimeout(() => {
			galaxyVerifyResize();
		},900 * GalaxyMapRefreshSpeed);
	}
}
function galaxyVerifyResize(){
	var tmpBoundingClientRect = GalaxyMapCanvasContainer.getBoundingClientRect();
	GalaxyWindowResizeDetected = false;
	if(Math.floor(tmpBoundingClientRect.height) != GalaxyMapHeight || Math.floor(tmpBoundingClientRect.width) != GalaxyMapWidth){
		galaxyWindowResize();
	}
}
function galaxyRefreshMapLimit(){
	
	var tmpMinX = 0;
	var tmpMinY = 0;
	var tmpMaxX = 0;
	var tmpMaxY = 0;
	
	for(var i = 0; i< SystemsArray.length; i++){
		var tmpSystem = SystemsArray[i];
		if(!tmpSystem.discovered) continue;
		
		if(tmpSystem.position[0] < tmpMinX) tmpMinX = tmpSystem.position[0];
		if(tmpSystem.position[0] > tmpMaxX) tmpMaxX = tmpSystem.position[0];
		if(tmpSystem.position[1] < tmpMinY) tmpMinY = tmpSystem.position[1];
		if(tmpSystem.position[1] > tmpMaxY) tmpMaxY = tmpSystem.position[1];
		
		//console.log(tmpSystem.name + ": ", tmpSystem.position[0], tmpSystem.position[1])
		//console.log(tmpMinX,tmpMaxX,tmpMinY,tmpMaxY);
	}
	
	//console.log("Final: ", tmpMinX,tmpMaxX,tmpMinY,tmpMaxY);
	
	if(tmpMinX*GalaxyMapSystemPositionScale-GalaxyMinMaxMargin < GalaxyMinX) GalaxyMinX = Math.floor(tmpMinX*GalaxyMapSystemPositionScale/GalaxyMapSystemPositionScale)*GalaxyMapSystemPositionScale;
	if(tmpMaxX*GalaxyMapSystemPositionScale+GalaxyMinMaxMargin > GalaxyMaxX) GalaxyMaxX = Math.ceil(tmpMaxX*GalaxyMapSystemPositionScale/GalaxyMapSystemPositionScale)*GalaxyMapSystemPositionScale;
	if(tmpMinY*GalaxyMapSystemPositionScale-GalaxyMinMaxMargin < GalaxyMinY) GalaxyMinY = Math.floor(tmpMinY*GalaxyMapSystemPositionScale/GalaxyMapSystemPositionScale)*GalaxyMapSystemPositionScale;
	if(tmpMaxY*GalaxyMapSystemPositionScale+GalaxyMinMaxMargin > GalaxyMaxY) GalaxyMaxY = Math.ceil(tmpMaxY*GalaxyMapSystemPositionScale/GalaxyMapSystemPositionScale)*GalaxyMapSystemPositionScale;
	
	if(GalaxyMinX > GalaxyGridMaximumNegX) GalaxyMinX = GalaxyGridMaximumNegX;
	if(GalaxyMinY > GalaxyGridMaximumNegY) GalaxyMinY = GalaxyGridMaximumNegY;
	if(GalaxyMaxX < GalaxyGridMinimumX) GalaxyMaxX = GalaxyGridMinimumX;
	if(GalaxyMaxY < GalaxyGridMinimumY) GalaxyMaxY = GalaxyGridMinimumY;
	
	//for gradient
	GalaxyMapGridWidth = GalaxyMaxX - GalaxyMinX;
	GalaxyMapGridHeight = GalaxyMaxY - GalaxyMinY;
	
	GalaxyMapGradientVerticalFadingPoint = (GalaxyMapGradientFadingDistance) / GalaxyMapGridHeight;
	GalaxyMapGradientHorizontalFadingPoint = (GalaxyMapGradientFadingDistance) / GalaxyMapGridWidth;

	//console.log("Result: ", GalaxyMinX,GalaxyMaxX,GalaxyMinY,GalaxyMaxY);
}

function galaxyMapZoomLimit(){
	//if limit reached, reduce it to limit
	var zoomedToLimit = false;
	
	if(GalaxyMapZoomLevel < GalaxyMapMinZoomLevel) GalaxyMapZoomLevel = GalaxyMapMinZoomLevel;
	if(GalaxyMapZoomLevel > GalaxyMapMaxZoomLevel) GalaxyMapZoomLevel = GalaxyMapMaxZoomLevel;
	
	return zoomedToLimit;
}
function galaxyZoomMap(outputDocument, targetZoomLevel, toFull = false){
	var tmpZoomLevelChange = targetZoomLevel;	
	
	if(Math.abs(GalaxyMapZoomLevel%1) < 0.0001 || Math.abs(GalaxyMapZoomLevel%1) > (1 - 0.0001)){
		GalaxyMapZoomLevel = Math.round(GalaxyMapZoomLevel);
	}
	
	//GalaxyMapZoomLevel
	if(toFull && GalaxyMapZoomLevel%1 != 0){
		if(tmpZoomLevelChange > 0){
			tmpZoomLevelChange = (Math.ceil(GalaxyMapZoomLevel) - GalaxyMapZoomLevel);
		}
		if(tmpZoomLevelChange < 0){
			tmpZoomLevelChange = (Math.floor(GalaxyMapZoomLevel) - GalaxyMapZoomLevel);
		}
	}
	
	if(GalaxyMapSmoothZoomEnabled && !GalaxyMapZoomInProgress){
		galaxyScaleGalaxyMapSmooth(outputDocument, tmpZoomLevelChange);
	}
	else{
		galaxyRecalculateScale(outputDocument, tmpZoomLevelChange);
	}
}
function galaxyRecalculateScale(outputDocument, newScale = NaN){
	var oldZoom = GalaxyMapZoom;
	
	if(!isNaN(newScale)) GalaxyMapZoomLevel += newScale;
	
	galaxyMapZoomLimit();
	
	GalaxyMapZoom = Math.pow(GalaxyMapZoomScale,GalaxyMapZoomLevel);
	
	GalaxyCameraPositionX /= oldZoom/GalaxyMapZoom;
	GalaxyCameraPositionY /= oldZoom/GalaxyMapZoom;
	
	//console.log("Smooth XY change: " + GalaxyCameraPositionX + "/" + GalaxyCameraPositionY);
	
	galaxyRefreshGalaxyMapCanvas(outputDocument, true);
}
function galaxyScaleGalaxyMapSmooth(outputDocument, scrollChange){
	//init smooth
	if(GalaxyMapSmoothZoomStep == 0){
		GalaxyMapZoomInProgress = true;
	}
	
	//console.log(GalaxyMapZoomLevel);
	
	var scrolledToLimit = false;
	var oldZoom = GalaxyMapZoom;
	
	//GalaxyCameraPositionX += movementVector[0]/GalaxyMapSmoothMoveSpeedSteps;
	//GalaxyCameraPositionY += movementVector[1]/GalaxyMapSmoothMoveSpeedSteps;
	galaxyRecalculateScale(outputDocument, scrollChange/GalaxyMapSmoothZoomSpeedSteps);
	
	//var tmpZoom = scrollChange/GalaxyMapSmoothZoomStep;
	
	GalaxyMapSmoothZoomStep++;
	
	//make number even and neat, no float imprecision
	//EDIT: Possibly unnecessary?
	if(GalaxyMapSmoothZoomStep == GalaxyMapSmoothZoomSpeedSteps) {
		//GalaxyCameraPositionX /= oldZoom/GalaxyMapZoom;
		//GalaxyCameraPositionY /= oldZoom/GalaxyMapZoom;
	}
	
	//console.log("XY change end: " + GalaxyCameraPositionX + "/" + GalaxyCameraPositionY);
	
	//if limit reached, reduce it to limit
	scrolledToLimit = galaxyMapZoomLimit();
	
	//if still steps left and not extended to limit
	if(GalaxyMapSmoothZoomStep < GalaxyMapSmoothZoomSpeedSteps && !scrolledToLimit){
		setTimeout(() => {galaxyScaleGalaxyMapSmooth(outputDocument, scrollChange);}, 1000 * GalaxyMapSmoothZoomSpeed)
	}
	else{
		//reset the smooth movement
		//if(scrolledToLimit) console.log("Zoom stop. Reason: Zoom limit.");
		//if(GalaxyMapSmoothZoomStep < GalaxyMapSmoothZoomSpeedSteps) console.log("Zoom stop. Reason: " + GalaxyMapSmoothZoomStep + " >= " + GalaxyMapSmoothZoomSpeedSteps);
		GalaxyMapSmoothZoomStep = 0;
		GalaxyMapZoomInProgress = false;
	}
	
	//refresh either way
	galaxyRefreshGalaxyMapCanvas(outputDocument, true);
}

function galaxyMoveGalaxyMapLeft(outputDocument){
	if(GalaxyMapSmoothMovementEnabled && !GalaxyMapMovementInProgress){
		galaxyMoveGalaxyMapSmooth(outputDocument, [GalaxyMapArrowMoveStep * (-1),0]);
	}
	else{
		GalaxyCameraPositionX -= GalaxyMapArrowMoveStep;
		if(GalaxyCameraPositionX < GalaxyMinX) GalaxyCameraPositionX = GalaxyMinX;
		galaxyRefreshGalaxyMapCanvas(outputDocument, true);
	}
}
function galaxyMoveGalaxyMapRight(outputDocument){
	if(GalaxyMapSmoothMovementEnabled && !GalaxyMapMovementInProgress){
		galaxyMoveGalaxyMapSmooth(outputDocument, [GalaxyMapArrowMoveStep,0]);
	}
	else{
		GalaxyCameraPositionX += GalaxyMapArrowMoveStep;
		if(GalaxyCameraPositionX > GalaxyMaxX) GalaxyCameraPositionX = GalaxyMaxX;
		galaxyRefreshGalaxyMapCanvas(outputDocument, true);
	}
}
function galaxyMoveGalaxyMapUp(outputDocument){
	if(GalaxyMapSmoothMovementEnabled && !GalaxyMapMovementInProgress){
		galaxyMoveGalaxyMapSmooth(outputDocument, [0,GalaxyMapArrowMoveStep * (-1)]);
	}
	else{
		GalaxyCameraPositionY -= GalaxyMapArrowMoveStep;
		if(GalaxyCameraPositionY < GalaxyMinY) GalaxyCameraPositionY = GalaxyMinY;
		galaxyRefreshGalaxyMapCanvas(outputDocument, true);
	}
}
function galaxyMoveGalaxyMapDown(outputDocument){
	if(GalaxyMapSmoothMovementEnabled && !GalaxyMapMovementInProgress){
		galaxyMoveGalaxyMapSmooth(outputDocument, [0,GalaxyMapArrowMoveStep]);
	}
	else{
		GalaxyCameraPositionY += GalaxyMapArrowMoveStep;
		if(GalaxyCameraPositionY > GalaxyMaxY) GalaxyCameraPositionY = GalaxyMaxY;
		galaxyRefreshGalaxyMapCanvas(outputDocument, true);
	}
}
function galaxyMoveGalaxyMapSmooth(outputDocument, movementVector){
	//init smooth
	if(GalaxyMapSmoothMovementStep == 0){
		GalaxyMapMovementInProgress = true;
	}
	
	var movedToLimit = false;
	
	GalaxyCameraPositionX += movementVector[0]/GalaxyMapSmoothMoveSpeedSteps;
	GalaxyCameraPositionY += movementVector[1]/GalaxyMapSmoothMoveSpeedSteps;
	
	GalaxyMapSmoothMovementStep++;
	
	//make number even and neat, no float imprecision
	if(GalaxyMapSmoothMovementStep == GalaxyMapSmoothMoveSpeedSteps) {
		GalaxyCameraPositionX = Math.round(GalaxyCameraPositionX);
		GalaxyCameraPositionY = Math.round(GalaxyCameraPositionY);
	}
	
	//if limit reached, reduce it to limit
	movedToLimit = galaxyMapCameraPositionLimit();
	
	//if still steps left and not extended to limit
	if(GalaxyMapSmoothMovementStep < GalaxyMapSmoothMoveSpeedSteps && !movedToLimit){
		setTimeout(() => {galaxyMoveGalaxyMapSmooth(outputDocument, movementVector);}, 1000 * GalaxyMapSmoothMoveSpeed)
	}
	else{
		//reset the smooth movement
		GalaxyMapSmoothMovementStep = 0;
		GalaxyMapMovementInProgress = false;
	}
	
	//refresh either way
	galaxyRefreshGalaxyMapCanvas(outputDocument, true);
}

function galaxyMapCameraPositionLimit(){
	//if limit reached, reduce it to limit
	var movedToLimit = false;
	
	if(GalaxyCameraPositionX < (GalaxyMinX * GalaxyMapZoom)) {GalaxyCameraPositionX = (GalaxyMinX * GalaxyMapZoom); movedToLimit = true; }
	if(GalaxyCameraPositionX > (GalaxyMaxX * GalaxyMapZoom)) {GalaxyCameraPositionX = (GalaxyMaxX * GalaxyMapZoom); movedToLimit = true; }
	if(GalaxyCameraPositionY < (GalaxyMinY * GalaxyMapZoom)) {GalaxyCameraPositionY = (GalaxyMinY * GalaxyMapZoom); movedToLimit = true; }
	if(GalaxyCameraPositionY > (GalaxyMaxY * GalaxyMapZoom)) {GalaxyCameraPositionY = (GalaxyMaxY * GalaxyMapZoom); movedToLimit = true; }
	
	return movedToLimit;
}
function galaxyMapFocusOnCoordinates(outputDocument, coordinateX, coordinateY){
	
	
	if(GalaxyMapSmoothMovementEnabled && !GalaxyMapMovementInProgress){
		galaxyMoveGalaxyMapSmooth(outputDocument, [(coordinateX * GalaxyMapSystemPositionScale * GalaxyMapZoom) - GalaxyCameraPositionX,(coordinateY * GalaxyMapSystemPositionScale * GalaxyMapZoom) - GalaxyCameraPositionY]);
	}
	else{
		GalaxyCameraPositionX = coordinateX * GalaxyMapSystemPositionScale * GalaxyMapZoom;
		GalaxyCameraPositionY = coordinateY * GalaxyMapSystemPositionScale * GalaxyMapZoom;
		galaxyRefreshGalaxyMapCanvas(outputDocument, true);
	}
}
function galaxyMapFocusOnSystemByIndex(outputDocument, systemIndex){
	if(systemIndex >= 0 && systemIndex < SystemsArray.length){
		var tmpSystem = SystemsArray[systemIndex];
	
		galaxyMapFocusOnCoordinates(outputDocument, tmpSystem.position[0],tmpSystem.position[1]);
	}
}
function galaxyResetCameraPosition(outputDocument){
	if(GalaxyMapSmoothMovementEnabled && !GalaxyMapMovementInProgress){
		galaxyMoveGalaxyMapSmooth(outputDocument, [(-1) * GalaxyCameraPositionX, (-1) * GalaxyCameraPositionY]);
	}
	else{
		GalaxyCameraPositionX = 0;
		GalaxyCameraPositionY = 0;
		galaxyRefreshGalaxyMapCanvas(outputDocument, true);
	}	
}

function galaxyMapTrackMousePosition(e, outputDocument, canvasObject) {
	var tmpRect = canvasObject.getBoundingClientRect();
    var tmpPosX = e.clientX - tmpRect.left;
	var tmpPosY = e.clientY - tmpRect.top;
	var tmpWidth = tmpRect.right - tmpRect.left;
	var tmpHeight = tmpRect.bottom - tmpRect.top;
	
	var tmpScaleX = tmpWidth/canvasObject.width;
	var tmpScaleY = tmpHeight/canvasObject.height;
	
	GalaxyMapCursorPositionX = Math.round(tmpPosX/tmpScaleX);
	GalaxyMapCursorPositionY = Math.round(tmpPosY/tmpScaleY);
	
	//var tmpPositionFullX = (tmpPosX + GalaxyCameraPositionX - GalaxyMapWidth/2) / GalaxyMapZoom;
	//var tmpPositionFullY = (tmpPosY + GalaxyCameraPositionY - GalaxyMapHeight/2) / GalaxyMapZoom;
	
	GalaxyMapCursorFullPositionX = (tmpPosX + GalaxyCameraPositionX - GalaxyMapWidth/2) / GalaxyMapZoom;
	GalaxyMapCursorFullPositionY = (tmpPosY + GalaxyCameraPositionY - GalaxyMapHeight/2) / GalaxyMapZoom;
	
	//var tmpCoordinatesX = GalaxyMapCursorFullPositionX/GalaxyMapSystemPositionScale;
	//var tmpCoordinatesY = GalaxyMapCursorFullPositionY/GalaxyMapSystemPositionScale;
	
	GalaxyMapCursorCoordinateX = GalaxyMapCursorFullPositionX/GalaxyMapSystemPositionScale;
	GalaxyMapCursorCoordinateY = GalaxyMapCursorFullPositionY/GalaxyMapSystemPositionScale;
	
	galaxyMapUpdateSidePanel(outputDocument);
}
function galaxyMapMouseClick(e, outputDocument, canvasObject) {
	if(GalaxyMapMouseDragOngoing || GalaxyMapMouseDragStart){
		if(!GalaxyMapMouseDragStart) GalaxyMapMouseDragOngoing = false;
	}
	else{
		var tmpRect = canvasObject.getBoundingClientRect();
		var tmpPosX = e.clientX - tmpRect.left;
		var tmpPosY = e.clientY - tmpRect.top;
		var tmpClickPositionFullX = (tmpPosX + GalaxyCameraPositionX - GalaxyMapWidth/2) / GalaxyMapZoom;
		var tmpClickPositionFullY = (tmpPosY + GalaxyCameraPositionY - GalaxyMapHeight/2) / GalaxyMapZoom;
		var tmpClickCoordinatesX = tmpClickPositionFullX/GalaxyMapSystemPositionScale;
		var tmpClickCoordinatesY = tmpClickPositionFullY/GalaxyMapSystemPositionScale;
		
		var tmpGalaxyMapSelectedSystem = -1;
		
		var tmpNearestSystem;
		var tmpNearestSystemDistance = 1000000;
		for(var i = 0; i < SystemsArray.length; i++){
			if(GalaxyMapPerspectiveEnabled){
				var tmpPosition = [
					GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - SystemsArray[i].position[0] * GalaxyMapSystemPositionScale * GalaxyMapZoom) * Math.pow(GalaxyMapPerspectiveBase,SystemsArray[i].position[2]/GalaxyMapPerspectiveDivider*GalaxyMapZoom),
					GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - SystemsArray[i].position[1] * GalaxyMapSystemPositionScale * GalaxyMapZoom) * Math.pow(GalaxyMapPerspectiveBase,SystemsArray[i].position[2]/GalaxyMapPerspectiveDivider*GalaxyMapZoom)
				];
				var tmpClickDistance = Math.pow((
					Math.pow((tmpPosition[0] - tmpPosX),2) + 
					Math.pow((tmpPosition[1] - tmpPosY),2)),
				(1/2))/GalaxyMapSystemPositionScale/GalaxyMapZoom;
			}
			else{
				var tmpSystemPosition = SystemsArray[i].position;
				var tmpClickDistance = Math.pow((
					Math.pow(tmpClickCoordinatesX - tmpSystemPosition[0],2) + 
					Math.pow(tmpClickCoordinatesY - tmpSystemPosition[1],2)),
				(1/2));
			}
			
			if(tmpClickDistance < tmpNearestSystemDistance) {
				tmpNearestSystemDistance = tmpClickDistance;
				tmpNearestSystem = SystemsArray[i];
				
				if(tmpClickDistance < (GalaxyMapMouseDetectionCoordinatesDistance/GalaxyMapZoom)) {
					tmpGalaxyMapSelectedSystem = i;
				}
			}
		}
		
		if(tmpGalaxyMapSelectedSystem != -1) {
			if(GalaxyMapSelectedSystem == tmpGalaxyMapSelectedSystem){
				//console.log("Selected same system");
			}
			else{
				//console.log("Selected new system");
				galaxyMapUpdateSidePanel(outputDocument);
			}
		}
		else{
			if(GalaxyMapSelectedSystem == -1){
				//console.log("No system selected");
			}
			else{
				//console.log("Unselected system");
				galaxyMapUpdateSidePanel(outputDocument);
			}
		}
		
		
		var tmpNearestGateLink;
		var tmpNearestGateLinkDistance = 10000000;
		for(var i = 0; i < GatesArray.length; i++){
			//[ [Sys1Name, Position, Discovered, VectorToSys2] , [Sys2Name, Position, Discovered, VectorToSys1] , [NetworkName, NetworkID] , Distance]
			var tmpSystem1End = GatesArray[i][0];
			var tmpSystem2End = GatesArray[i][1];
			
			if(GalaxyMapPerspectiveEnabled){
				var tmpPosition1 = [
					GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpSystem1End[1][0] * GalaxyMapSystemPositionScale * GalaxyMapZoom) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem1End[1][2]/GalaxyMapPerspectiveDivider*GalaxyMapZoom),
					GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpSystem1End[1][1] * GalaxyMapSystemPositionScale * GalaxyMapZoom) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem1End[1][2]/GalaxyMapPerspectiveDivider*GalaxyMapZoom)
				];
				var tmpPosition2 = [
					GalaxyMapCanvas.width/2 - (GalaxyCameraPositionX - tmpSystem2End[1][0] * GalaxyMapSystemPositionScale * GalaxyMapZoom) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem2End[1][2]/GalaxyMapPerspectiveDivider*GalaxyMapZoom),
					GalaxyMapCanvas.height/2 - (GalaxyCameraPositionY - tmpSystem2End[1][1] * GalaxyMapSystemPositionScale * GalaxyMapZoom) * Math.pow(GalaxyMapPerspectiveBase,tmpSystem2End[1][2]/GalaxyMapPerspectiveDivider*GalaxyMapZoom)
				];
				var tmpGateDistance = distanceToSegment(tmpPosX,tmpPosY,tmpPosition1[0],tmpPosition1[1],tmpPosition2[0],tmpPosition2[1])/GalaxyMapZoom/GalaxyMapSystemPositionScale;
			}
			else{
				var tmpClickDistance = distanceToSegment(tmpClickCoordinatesX,tmpClickCoordinatesY,tmpSystem1End[1][0],tmpSystem1End[1][1],tmpSystem2End[1][0],tmpSystem2End[1][1]);
			}
			
			//var tmpClickDistance = distanceToSegment(tmpClickCoordinatesX,tmpClickCoordinatesY,tmpSystem1End[1][0],tmpSystem1End[1][1],tmpSystem2End[1][0],tmpSystem2End[1][1]);
			
			if(tmpClickDistance < tmpNearestGateLinkDistance) {
				tmpNearestGateLinkDistance = tmpClickDistance;
				tmpNearestGateLink = GatesArray[i];
			}
		}
		
		if((Date.now() - GalaxyMapLastSelectionTime) < GalaxyMapDoubleClickTime){
			if(tmpGalaxyMapSelectedSystem == GalaxyMapSelectedSystem && tmpGalaxyMapSelectedSystem != -1) {
				//console.log("Doubleclick " + SystemsArray[tmpGalaxyMapSelectedSystem].name);
				interfaceGalaxyMapEnterSystem(outputDocument);
			}
		}
		GalaxyMapSelectedSystem = tmpGalaxyMapSelectedSystem;
		
		GalaxyMapLastSelectionTime = Date.now();
		
		//console.log("Nearest system: " + tmpNearestSystem.name + ", distance: " + tmpNearestSystemDistance);
		//console.log("Nearest link: " + tmpNearestGateLink[0][0] + "-" + tmpNearestGateLink[1][0] + ", distance: " + tmpNearestGateLinkDistance);
		//console.log("");
	}
	
	
}
function galaxyMapMouseExit(e, outputDocument, canvasObject) {
	if(!GalaxyMapMouseDragStart){
		GalaxyMapCursorPositionX = -100000;
		GalaxyMapCursorPositionY = -100000;
	}
}
function galaxyMapMouseDown(e, outputDocument, canvasObject){
	//console.log("Mouse down event: " + Date.now());
	GalaxyMapMouseDownPositionDetected = true;
	GalaxyMapMouseDownPositionX = GalaxyMapCursorPositionX;
	GalaxyMapMouseDownPositionY = GalaxyMapCursorPositionY;
	
	setTimeout( () => {
		if(!GalaxyMapMouseUpPositionDetected) {
			galaxyMapDragStart(e, outputDocument, canvasObject);
		}
		
		GalaxyMapMouseDownPositionDetected = false;
	}, 200);
}
function galaxyMapMouseUp(e, outputDocument, canvasObject){
	//console.log("Mouse up event: " + Date.now());
	GalaxyMapMouseUpPositionDetected = true;
	
	setTimeout( () => {
		GalaxyMapMouseUpPositionDetected = false;
		GalaxyMapMouseDragInterrupt = true;
	}, 50);
}
function galaxyMapDragStart(e, outputDocument, canvasObject){
	GalaxyMapMouseDragStart = true;
	
	GalaxyMapDraggingInitialCameraX = GalaxyCameraPositionX;
	GalaxyMapDraggingInitialCameraY = GalaxyCameraPositionY;
	
	galaxyMapDrag(e, outputDocument, canvasObject);
}
function galaxyMapDrag(e, outputDocument, canvasObject){
	if(GalaxyMapMouseDragInterrupt) {
		GalaxyMapMouseDragStart = false;
		GalaxyMapMouseDragInterrupt = false;
		
		galaxyMapCameraPositionLimit();
		
		setTimeout(() => {
			GalaxyMapMouseDragStart = false;
			GalaxyMapMouseDragOngoing = false;
			GalaxyMapMouseDragInterrupt = false;
			
			galaxyMapCameraPositionLimit();
		},150);
		return;
	}
	GalaxyMapMouseDragOngoing = true;
	
	GalaxyCameraPositionX = GalaxyMapDraggingInitialCameraX + ((GalaxyMapMouseDownPositionX - GalaxyMapCursorPositionX) / 1);
	GalaxyCameraPositionY = GalaxyMapDraggingInitialCameraY + ((GalaxyMapMouseDownPositionY - GalaxyMapCursorPositionY) / 1); 
	
	galaxyRefreshGalaxyMapCanvas(outputDocument, true);
	
	if(GalaxyMapMouseDragStart){
		setTimeout(() => {
			galaxyMapDrag(e, outputDocument, canvasObject);
		}, 30)
	}
	else{
		galaxyMapCameraPositionLimit();
	}
}
function galaxyMapMouseWheel(e, outputDocument, canvasObject){
	var tmpChange = e.deltaY;
	var oldZoom = GalaxyMapZoom;
	
	var tmpRect = canvasObject.getBoundingClientRect();
	var tmpWheelPosX = (e.clientX - tmpRect.left + GalaxyCameraPositionX - GalaxyMapWidth/2) / oldZoom;
	var tmpWheelPosY = (e.clientY - tmpRect.top + GalaxyCameraPositionY - GalaxyMapHeight/2) / oldZoom;
	
	if(tmpChange < 0){
		galaxyRecalculateScale	(outputDocument, GalaxyMapZoomMousewheelLevel);
	}
	else if(tmpChange > 0){
		galaxyRecalculateScale	(outputDocument, -GalaxyMapZoomMousewheelLevel);
	}
	
	var newZoom = GalaxyMapZoom;
	
	GalaxyCameraPositionX -= (e.clientX - tmpRect.left - GalaxyMapWidth/2) * (1 - newZoom/oldZoom);
	GalaxyCameraPositionY -= (e.clientY - tmpRect.top - GalaxyMapHeight/2) * (1 - newZoom/oldZoom);
	
	galaxyMapCameraPositionLimit();
	galaxyRefreshGalaxyMapCanvas(outputDocument, true);
}

var GalaxyMapSideMenuInitialised = false;

var GalaxyMapSideMenuSelectedSystemNameElement;
var GalaxyMapSideMenuSelectedSystemOwnerElement;
var GalaxyMapSideMenuSelectedSystemPositionElement;
var GalaxyMapSideMenuSelectedSystemDistanceElement;
var GalaxyMapSideMenuHoveredSystemNameElement;
var GalaxyMapSideMenuHoveredSystemOwnerElement;
var GalaxyMapSideMenuHoveredSystemPositionElement;
var GalaxyMapSideMenuHoveredSystemDistanceElement;
var GalaxyMapSideMenuHoveredLinkNameElement;
var GalaxyMapSideMenuHoveredLinkNetworkElement;
var GalaxyMapSideMenuHoveredLinkLengthElement;
var GalaxyMapSideMenuCanvasMiddleCoordinatesElement;
var GalaxyMapSideMenuCanvasCursorCoordinatesElement;
var GalaxyMapSideMenuCanvasMapScaleElement;

var GalaxyMapSideMenuSelectedSystemNameElementID = "galaxyMapSelectedElementTableRowSystemNameValue";
var GalaxyMapSideMenuSelectedSystemOwnerElementID = "galaxyMapSelectedElementTableRowSystemControlledByValue";
var GalaxyMapSideMenuSelectedSystemPositionElementID = "galaxyMapSelectedElementTableRowSystemPositionValue";
var GalaxyMapSideMenuSelectedSystemDistanceElementID = "galaxyMapSelectedElementTableRowSystemDistanceValue";
var GalaxyMapSideMenuHoveredSystemNameElementID = "galaxyMapHoveredElementTableRowSystemNameValue";
var GalaxyMapSideMenuHoveredSystemOwnerElementID = "galaxyMapHoveredElementTableRowSystemControlledByValue";
var GalaxyMapSideMenuHoveredSystemPositionElementID = "galaxyMapHoveredElementTableRowSystemPositionValue";
var GalaxyMapSideMenuHoveredSystemDistanceElementID = "galaxyMapSelectedHoveredElementTableDistanceToHoveredValue";
var GalaxyMapSideMenuHoveredLinkNameElementID = "galaxyMapHoveredElementTableRowLinkLinkNameValue";
var GalaxyMapSideMenuHoveredLinkNetworkElementID = "galaxyMapHoveredElementTableRowLinkNetworkValue";
var GalaxyMapSideMenuHoveredLinkLengthElementID = "galaxyMapHoveredElementTableRowLinkLengthValue";
var GalaxyMapSideMenuCanvasMiddleCoordinatesElementID = "galaxyMapCanvasInfoTableRowMiddleCoordinatesValue";
var GalaxyMapSideMenuCanvasCursorCoordinatesElementID = "galaxyMapCanvasInfoTableRowCursorCoordinatesValue";
var GalaxyMapSideMenuCanvasMapScaleElementID = "galaxyMapCanvasInfoTableRowMapScaleValue";

var GalaxyMapSideMenuSelectedSystemTable;
var GalaxyMapSideMenuSelectedSystemTableID = "galaxyMapSelectedElementTable";

var GalaxyMapSideMenuHoveredTable;
var GalaxyMapSideMenuHoveredTableID = "galaxyMapHoveredElementTable";

var GalaxyMapSideMenuHoveredSystemTableRows = [];
var GalaxyMapSideMenuHoveredSystemTableRowsClass = "galaxyMapHoveredSystemTableRow";
var GalaxyMapSideMenuHoveredLinkTableRows = [];
var GalaxyMapSideMenuHoveredLinkTableRowsClass = "galaxyMapHoveredLinkTableRow";

var GalaxyMapSideMenuSelectedHoveredRows = [];
var GalaxyMapSideMenuSelectedHoveredRowsClass = "galaxyMapSelectedHoveredSystemTableRow";

var GalaxyMapSideMenuCanvasTable;
var GalaxyMapSideMenuCanvasTableID = "galaxyMapCanvasInfoTable";

var GalaxyMapSideMenuDisplayedClickSystem = -1;
var GalaxyMapSideMenuDisplayedHoverSystem = -1;
var GalaxyMapSideMenuDisplayedGateLink = -1;

function galaxyMapUpdateSidePanel(outputDocument){
	if(!GalaxyMapSideMenuInitialised){
		GalaxyMapSideMenuSelectedSystemTable = outputDocument.getElementById(GalaxyMapSideMenuSelectedSystemTableID);
		
		GalaxyMapSideMenuSelectedSystemNameElement = outputDocument.getElementById(GalaxyMapSideMenuSelectedSystemNameElementID);
		GalaxyMapSideMenuSelectedSystemOwnerElement = outputDocument.getElementById(GalaxyMapSideMenuSelectedSystemOwnerElementID);
		GalaxyMapSideMenuSelectedSystemPositionElement = outputDocument.getElementById(GalaxyMapSideMenuSelectedSystemPositionElementID);
		GalaxyMapSideMenuSelectedSystemDistanceElement = outputDocument.getElementById(GalaxyMapSideMenuSelectedSystemDistanceElementID);
		
		GalaxyMapSideMenuHoveredTable = outputDocument.getElementById(GalaxyMapSideMenuHoveredTableID);
		GalaxyMapSideMenuHoveredSystemTableRows = outputDocument.getElementsByClassName(GalaxyMapSideMenuHoveredSystemTableRowsClass);
		GalaxyMapSideMenuHoveredLinkTableRows = outputDocument.getElementsByClassName(GalaxyMapSideMenuHoveredLinkTableRowsClass);
		
		GalaxyMapSideMenuHoveredSystemNameElement = outputDocument.getElementById(GalaxyMapSideMenuHoveredSystemNameElementID);
		GalaxyMapSideMenuHoveredSystemOwnerElement = outputDocument.getElementById(GalaxyMapSideMenuHoveredSystemOwnerElementID);
		GalaxyMapSideMenuHoveredSystemPositionElement = outputDocument.getElementById(GalaxyMapSideMenuHoveredSystemPositionElementID);
		
		GalaxyMapSideMenuHoveredSystemDistanceElement = outputDocument.getElementById(GalaxyMapSideMenuHoveredSystemDistanceElementID);
		
		GalaxyMapSideMenuHoveredLinkNameElement = outputDocument.getElementById(GalaxyMapSideMenuHoveredLinkNameElementID);
		GalaxyMapSideMenuHoveredLinkNetworkElement = outputDocument.getElementById(GalaxyMapSideMenuHoveredLinkNetworkElementID);
		GalaxyMapSideMenuHoveredLinkLengthElement = outputDocument.getElementById(GalaxyMapSideMenuHoveredLinkLengthElementID);
	
		GalaxyMapSideMenuSelectedHoveredRows = outputDocument.getElementsByClassName(GalaxyMapSideMenuSelectedHoveredRowsClass);
		
		GalaxyMapSideMenuCanvasTable = outputDocument.getElementById(GalaxyMapSideMenuCanvasTableID);
		
		GalaxyMapSideMenuCanvasMiddleCoordinatesElement = outputDocument.getElementById(GalaxyMapSideMenuCanvasMiddleCoordinatesElementID);
		GalaxyMapSideMenuCanvasCursorCoordinatesElement = outputDocument.getElementById(GalaxyMapSideMenuCanvasCursorCoordinatesElementID);
		GalaxyMapSideMenuCanvasMapScaleElement = outputDocument.getElementById(GalaxyMapSideMenuCanvasMapScaleElementID);
	}
	
	if(GalaxyMapSelectedSystem == -1){
		//hide first table
		GalaxyMapSideMenuSelectedSystemTable.style.display = "none";
		
		GalaxyMapSideMenuDisplayedClickSystem = -1;
	}
	else if(GalaxyMapSideMenuDisplayedClickSystem != GalaxyMapSelectedSystem) {
		//show new system
		GalaxyMapSideMenuSelectedSystemTable.style.display = "";
		
		GalaxyMapSideMenuDisplayedClickSystem = GalaxyMapSelectedSystem;
		
		GalaxyMapSideMenuSelectedSystemNameElement.innerHTML = SystemsArray[GalaxyMapSelectedSystem].name;
		GalaxyMapSideMenuSelectedSystemOwnerElement.innerHTML = DiplomacyFactionNames[SystemsArray[GalaxyMapSelectedSystem].owner][0];
		GalaxyMapSideMenuSelectedSystemOwnerElement.style.color = DiplomacyFactionNames[SystemsArray[GalaxyMapSelectedSystem].owner][1];
		GalaxyMapSideMenuSelectedSystemPositionElement.innerHTML = "[" + SystemsArray[GalaxyMapSelectedSystem].position[0] + "/" + (-1)*SystemsArray[GalaxyMapSelectedSystem].position[1] + "/" + SystemsArray[GalaxyMapSelectedSystem].position[2] + "]";
		
		GalaxyMapSideMenuSelectedSystemDistanceElement.innerHTML = Math.pow((
		Math.pow(SystemsArray[GalaxyMapSelectedSystem].position[0] - SystemsArray[SystemsHomeSystem].position[0],2) + 
		Math.pow(SystemsArray[GalaxyMapSelectedSystem].position[1] - SystemsArray[SystemsHomeSystem].position[1],2) + 
		Math.pow(SystemsArray[GalaxyMapSelectedSystem].position[2] - SystemsArray[SystemsHomeSystem].position[2],2)
		), (1/2)).toFixed(3);
	}
	
	if(GalaxyMapLastHoveredSystem == -1){
		//hide first half of second table
		for(var i = 0; i < GalaxyMapSideMenuHoveredSystemTableRows.length; i++) GalaxyMapSideMenuHoveredSystemTableRows[i].style.display = "none";
		
		GalaxyMapSideMenuDisplayedHoverSystem = -1;
	}
	else if(GalaxyMapSideMenuDisplayedHoverSystem != GalaxyMapLastHoveredSystem && GalaxyMapLastHoveredSystem != GalaxyMapSelectedSystem) {
		//show highlighted system
		for(var i = 0; i < GalaxyMapSideMenuHoveredSystemTableRows.length; i++) GalaxyMapSideMenuHoveredSystemTableRows[i].style.display = "";
		
		GalaxyMapSideMenuDisplayedHoverSystem = GalaxyMapLastHoveredSystem;
		
		GalaxyMapSideMenuHoveredSystemNameElement.innerHTML = SystemsArray[GalaxyMapLastHoveredSystem].name;
		GalaxyMapSideMenuHoveredSystemOwnerElement.innerHTML = DiplomacyFactionNames[SystemsArray[GalaxyMapLastHoveredSystem].owner][0];
		GalaxyMapSideMenuHoveredSystemOwnerElement.style.color = DiplomacyFactionNames[SystemsArray[GalaxyMapLastHoveredSystem].owner][1];
		GalaxyMapSideMenuHoveredSystemPositionElement.innerHTML = "[" + SystemsArray[GalaxyMapLastHoveredSystem].position[0] + "/" + (-1)*SystemsArray[GalaxyMapLastHoveredSystem].position[1] + "/" + SystemsArray[GalaxyMapLastHoveredSystem].position[2] + "]";
	}
	else if(GalaxyMapLastHoveredSystem == GalaxyMapSelectedSystem){
		//if hovered is same as selected, also hide it
		for(var i = 0; i < GalaxyMapSideMenuHoveredSystemTableRows.length; i++) GalaxyMapSideMenuHoveredSystemTableRows[i].style.display = "none";
	}
	
	if(GalaxyMapSelectedSystem != -1 && GalaxyMapLastHoveredSystem != -1 && GalaxyMapSelectedSystem != GalaxyMapLastHoveredSystem){
		//if there is selected system and hovered system, show relative distance
		for(var i = 0; i < GalaxyMapSideMenuSelectedHoveredRows.length; i++) GalaxyMapSideMenuSelectedHoveredRows[i].style.display = "";
		
		GalaxyMapSideMenuHoveredSystemDistanceElement.innerHTML = Math.pow((
		Math.pow(SystemsArray[GalaxyMapSelectedSystem].position[0] - SystemsArray[GalaxyMapLastHoveredSystem].position[0],2) + 
		Math.pow(SystemsArray[GalaxyMapSelectedSystem].position[1] - SystemsArray[GalaxyMapLastHoveredSystem].position[1],2) + 
		Math.pow(SystemsArray[GalaxyMapSelectedSystem].position[2] - SystemsArray[GalaxyMapLastHoveredSystem].position[2],2)
		), (1/2)).toFixed(3);
	}
	else{
		//if there is only selection, only hover or neither, hide relative distance
		for(var i = 0; i < GalaxyMapSideMenuSelectedHoveredRows.length; i++) GalaxyMapSideMenuSelectedHoveredRows[i].style.display = "none";
	}
	
	if(GalaxyMapLastHoveredGateLink == -1){
		//hide second half of second table
		for(var i = 0; i < GalaxyMapSideMenuHoveredLinkTableRows.length; i++) GalaxyMapSideMenuHoveredLinkTableRows[i].style.display = "none";
		
		GalaxyMapSideMenuDisplayedGateLink = -1;
	}
	else if(GalaxyMapSideMenuDisplayedGateLink != GalaxyMapLastHoveredGateLink) {
		//show highlighted link
		for(var i = 0; i < GalaxyMapSideMenuHoveredLinkTableRows.length; i++) GalaxyMapSideMenuHoveredLinkTableRows[i].style.display = "";
		
		GalaxyMapSideMenuDisplayedGateLink = GalaxyMapLastHoveredGateLink;
		
		var tmpLink = GatesArray[GalaxyMapLastHoveredGateLink];
		
		GalaxyMapSideMenuHoveredLinkNameElement.innerHTML = tmpLink[0][0] + " - " + tmpLink[1][0];// + " link";
		GalaxyMapSideMenuHoveredLinkNetworkElement.innerHTML = "\"" + tmpLink[2][0] + "\" network";
		GalaxyMapSideMenuHoveredLinkLengthElement.innerHTML = tmpLink[3].toFixed(3);
	}
	
	//canvas info
	GalaxyMapSideMenuCanvasMiddleCoordinatesElement.innerHTML = (GalaxyCameraPositionX/GalaxyMapSystemPositionScale/GalaxyMapZoom).toFixed(2) + "/" + ((-1)*GalaxyCameraPositionY/GalaxyMapSystemPositionScale/GalaxyMapZoom).toFixed(2);
	GalaxyMapSideMenuCanvasCursorCoordinatesElement.innerHTML = GalaxyMapCursorCoordinateX.toFixed(2) + "/" + ((-1)*GalaxyMapCursorCoordinateY).toFixed(2);
	GalaxyMapSideMenuCanvasMapScaleElement.innerHTML = "x" + (GalaxyMapZoom).toFixed(2);
}
//aaaa