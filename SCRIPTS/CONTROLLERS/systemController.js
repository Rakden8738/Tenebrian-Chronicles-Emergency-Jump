function connectionTest_systems(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"systems\" reporting issues.");
		return false;
	}
}

var SystemsArray = [];
var SystemsCurrentSystem = -1;

var StarSizes = [
	"Dwarf",
	"Star",
	"Subgiant",
	"Giant",
	"Supergiant",
	"Hypergiant",
	"Other",
];
var StarTypes = [
	["Brown","hsl(30,100%,35%)","hsl(30,100%,25%)"],
	["Red","hsl(0,100%,40%)","hsl(0,100%,30%)"],
	["Orange","hsl(35,100%,60%)","hsl(35,100%,50%)"],
	["Yellow","hsl(60,100%,65%)","hsl(60,100%,55%)"],
	["White","hsl(0,0%,100%)","hsl(0,0%,90%)"],
	["Blue","hsl(210,100%,85%)","hsl(210,100%,75%)"],
];

class SystemObject{
	constructor(){
	
	}
	
	name = "Unknown system";
	id = -1;
	description = "System is not recognised in the database.";
	
	owner = -1;
	HUB_owner = -1; //placeholder
	
	arrayID = -1;
	
	network = "Standalone";
	network_id = -1;
	
	starType = StarTypes[1];
	starSize = StarSizes[1];
	
	starMass = 1.0;
	
	planetsIDArray = [];
	planetsByDistanceArray = [];
	
	position = [0.0,0.0,0.0];
	distanceFromZero = 0;
	visible = false;
	discovered = false;
	
	gatesNumber = 0;
	gatesIDs = [];
	
	asteroids = {};
	
	registerPlanet(planetID, loopback = true){
		if(!this.planetsIDArray.includes(planetID)){
			//console.log("Registering planet " + planetID + " in system " + this.id);
			this.planetsIDArray.push(planetID);
			
			if(loopback) planetsGetPlanetById(planetID).registerSystem(this.id, false);
		}
		else{
			console.log("Planet " + planetID + " already in this system " + this.id);
		}
		this.refreshDistanceArray();
	}
	removePlanet(planetID){
		if(this.planetsIDArray.includes(planetID)){
			this.planetsIDArray.splice(this.planetsIDArray.indexOf(planetID),1);
		}
		else{
			console.log("Planet " + planetID + " not found in system " + this.id);
		}
		this.refreshDistanceArray();
	}
	refresh(){
		this.checkOwner();
		this.refreshDistanceArray();
		this.getSystemDistance();
		this.checkIfDiscovered();
	}
	checkOwner(){
		var tmpOwner = 0;
		
		for(let i = 0; i < this.planetsIDArray.length; i++){
			if(tmpOwner == 0){
				if(planetsGetPlanetById(this.planetsIDArray[i]).owner != 0){
					tmpOwner = planetsGetPlanetById(this.planetsIDArray[i]).owner;
				}
			}
			else {
				if(planetsGetPlanetById(this.planetsIDArray[i]).owner != tmpOwner && planetsGetPlanetById(this.planetsIDArray[i]).owner != 0){
					this.owner = 2;
					return 2;
				}
			}
		}
		this.owner = tmpOwner;
		return tmpOwner;
	}
	refreshDistanceArray(){
		var tmpArray = [];
		
		for(var i = 0; i < this.planetsIDArray.length; i++){
			tmpArray.push([this.planetsIDArray[i],planetsGetPlanetById(this.planetsIDArray[i]).orbitalDistance]);
		}
		
		var minDistance = 99999;
		var indexDistance = -1;
		
		tmpArray.sort((a,b) => (a[1] > b[1]) ? 1 : ((b[1] > a[1]) ? -1 : 0));
		
		this.planetsByDistanceArray = tmpArray;
		return tmpArray;
	}
	getSystemDistance(){
		this.distanceFromZero = Math.pow(
			this.position[0]*this.position[0] +
			this.position[1]*this.position[1] +
			this.position[2]*this.position[2], (1/2));
	}
	checkIfDiscovered(){
		//to-do
		this.discovered = true;
		
		
		return true;
	}
	checkPlayerPressence(){
		
	}
}

function systemsGetSystemById(systemID){
	var tmpSystem;
	
	for(var i = 0; i < SystemsArray.length; i++) {
		if(SystemsArray[i].id == systemID) {
			tmpSystem = SystemsArray[i];
			break;
		}
	}
	
	return tmpSystem;
}
function systemsGetSystemIndexById(systemID){
	var tmpSystem = -1;
	
	for(var i = 0; i < SystemsArray.length; i++) {
		if(SystemsArray[i].id == systemID) {
			tmpSystem = i;
			break;
		}
	}
	
	return tmpSystem;
}

function systemsGetNextOverallSystemIndex(){
	if((SystemsCurrentSystem + 1) < SystemsArray.length) return (SystemsCurrentSystem + 1);
	else return 0;
}
function systemsGetNextDiscoveredSystemIndex(){
	var tmpCurrent = SystemsCurrentSystem + 1;
	
	while(tmpCurrent != SystemsCurrentSystem) {
		if(tmpCurrent >= SystemsArray.length) tmpCurrent = 0;
		if(SystemsArray[tmpCurrent].discovered) return tmpCurrent;
		else tmpCurrent++;
	}
	
	console.log("No other discovered systems found.");
	return tmpCurrent;
}
function systemGetNextNetworkPlanetIndex(){
	var tmpNetwork = SystemsArray[SystemsCurrentSystem].network_id;
	if (tmpNetwork == -1) {
		console.log("System is not part of a network.");
		return SystemsCurrentSystem;
	}
	var tmpCurrent = SystemsCurrentSystem + 1;
	
	while(tmpCurrent != SystemsCurrentSystem) {
		if(tmpCurrent >= SystemsArray.length) tmpCurrent = 0;
		if(SystemsArray[tmpCurrent].network_id == tmpNetwork) return tmpCurrent;
		else tmpCurrent++;
	}
	
	console.log("Next system in network " + tmpNetwork + " not found");
	return tmpCurrent;
}

function systemsGetPreviousOverallSystemIndex(){
	if((SystemsCurrentSystem - 1) >= 0) return (SystemsCurrentSystem - 1);
	else return (SystemsArray.length - 1);
}
function systemsGetPreviousDiscoveredSystemIndex(){
	var tmpCurrent = SystemsCurrentSystem - 1;
	
	while(tmpCurrent != SystemsCurrentSystem) {
		if(tmpCurrent < 0) tmpCurrent = SystemsArray.length - 1;
		if(SystemsArray[tmpCurrent].discovered) return tmpCurrent;
		else tmpCurrent--;
	}
	
	console.log("No other discovered systems found.");
	return tmpCurrent;
}
function systemsGetPreviousNetworkSystemIndex(){
	var tmpNetwork = SystemsArray[SystemsCurrentSystem].network_id;
	if (tmpNetwork == -1) {
		console.log("System is not part of a network.");
		return SystemsCurrentSystem;
	}
	var tmpCurrent = SystemsCurrentSystem - 1;
	
	while(tmpCurrent != SystemsCurrentSystem) {
		if(tmpCurrent < 0) tmpCurrent = SystemsArray.length - 1;
		if(SystemsArray[tmpCurrent].network_id == tmpNetwork) return tmpCurrent;
		else tmpCurrent--;
	}
	
	console.log("Previous system in network " + tmpNetwork + " not found");
	return tmpCurrent;
}

var SystemStarmapInitialized = false;
var SystemStarmapCanvas;
var SystemStarmapCanvasID = "systemOverviewCanvas";
var SystemStarmapContext;
var SystemStarmapPlanetCoordinates = [];
var SystemStarmapGateCoordinates = [];
var SystemStarmapHeight = 300;
var SystemStarmapWidth = 300;
var SystemStarmapLine = 2;
var SystemStarmapFont = "Kdam Thmor Pro";

var SystemStarmapStarArms = 16;
var SystemStarmapStarOuter = 15;
var SystemStarmapStarInner = 10;

var SystemStarmapPlanetMinimumDistance = 20;
var SystemStarmapPlanetMaximumDistance = 140;
var SystemStarmapPlanetBodyRadius = 8;
var SystemStarmapPlanetOutlineRadius = 12;

var SystemStarmapGateRadius = 5;
var SystemStarmapGateOffset = 5;

var SystemStarmapRefreshSpeed = 0.2;
var SystemStarmapRefreshInProgress = false;
var SystemStarmapRefreshActive = false;
var SystemStarmapCursorPositionX = -1000;
var SystemStarmapCursorPositionY = -1000;

var SystemStarmapMouseDetectionDistance = 30;
var SystemStarmapPlanetBodyRadiusHighlighted = 10;
var SystemStarmapGateRadiusHighlighted = 7;

var StarmapSystemChanging = false;

function systemRefreshSystemCanvas(outputDocument, debugMode = false){
	if(!SystemStarmapRefreshInProgress) {
		SystemStarmapRefreshInProgress = true;
		//console.log("Refresh iteration");
		if(!StarmapSystemChanging) {
			//console.log("Redrawing");
			if(!SystemStarmapInitialized) {	
				SystemStarmapCanvas = outputDocument.getElementById(SystemStarmapCanvasID);
				SystemStarmapContext = SystemStarmapCanvas.getContext("2d");
				
				SystemStarmapCanvas.height = SystemStarmapHeight;
				SystemStarmapCanvas.width = SystemStarmapWidth;
				SystemStarmapContext.font = "10px " + SystemStarmapFont;
				SystemStarmapContext.textAlign = "center";
			
				SystemStarmapCanvas.onmousemove = function(e) {systemStarmapTrackMousePosition(e, outputDocument,SystemStarmapCanvas);}
				SystemStarmapCanvas.onclick = function(e) {systemStarmapMouseClick(e, outputDocument,SystemStarmapCanvas);}
				SystemStarmapCanvas.onmouseout = function(e) {systemStarmapMouseExit(e, outputDocument,SystemStarmapCanvas);}
			
				SystemStarmapInitialized = true;
			}
			
			var tmpSector = SystemsArray[SystemsCurrentSystem];
			var tmpSectorPosition = tmpSector.position;
			var tmpStarType = tmpSector.starType;
			var tmpPlanetCount = tmpSector.planetsIDArray.length;
			var tmpGatesCount = tmpSector.gatesIDs.length;
			
			//calculate positions
			SystemStarmapPlanetCoordinates = [];
			SystemStarmapGateCoordinates = [];
			
			for(var i = 0; i < tmpPlanetCount; i++){
				
				var tmpPlanet = planetsGetPlanetById(tmpSector.planetsByDistanceArray[i][0]);
				var tmpCycle = (TimerTotalElapsedDays % Math.round(tmpPlanet.orbitalPeroid))/tmpPlanet.orbitalPeroid + tmpPlanet.startingPosition;
				
				var tmpDistance = SystemStarmapPlanetMinimumDistance + ((SystemStarmapPlanetMaximumDistance - SystemStarmapPlanetMinimumDistance) * (i + 1) / (tmpPlanetCount + 1));
				var tmpSinAngle = Math.sin(tmpCycle*Math.PI*2);
				var tmpCosAngle = Math.cos(tmpCycle*Math.PI*2);
				
				var tmpPlanetX = SystemStarmapWidth/2 + tmpSinAngle*(tmpDistance);
				var tmpPlanetY = SystemStarmapHeight/2 - tmpCosAngle*(tmpDistance);
				
				SystemStarmapPlanetCoordinates.push([tmpPlanetX,tmpPlanetY]);
			}
			
			for (var i = 0; i < tmpGatesCount; i++){
				var tmpRemoteSystem = systemsGetSystemById(tmpSector.gatesIDs[i]);
				var tmpGateVector = [tmpRemoteSystem.position[0]-tmpSector.position[0],tmpRemoteSystem.position[1]-tmpSector.position[1]];
				
				var tmpVectorLength = Math.pow(((tmpGateVector[0]*tmpGateVector[0])+(tmpGateVector[1]*tmpGateVector[1])),(1/2));
				var tmpSin = tmpGateVector[0]/tmpVectorLength;
				var tmpCos = tmpGateVector[1]/tmpVectorLength;
				
				var tmpGateX = SystemStarmapWidth/2 + (SystemStarmapPlanetMaximumDistance+SystemStarmapGateOffset) * tmpSin;
				var tmpGateY = SystemStarmapHeight/2 + (SystemStarmapPlanetMaximumDistance+SystemStarmapGateOffset) * tmpCos;
				
				SystemStarmapGateCoordinates.push([tmpGateX,tmpGateY]);
			}
			
			var tmpMinDistance = 9999;
			var tmpClosestObject = -1;
			var tmpIsClosestGate = false;
			var tmpIsClosestPlanet = false;
			
			
			for(var i = 0; i < tmpPlanetCount; i++){
				var tmpPlanetDistance = Math.pow((
					Math.pow((SystemStarmapPlanetCoordinates[i][0] - SystemStarmapCursorPositionX),2) + 
					Math.pow((SystemStarmapPlanetCoordinates[i][1] - SystemStarmapCursorPositionY),2)),(1/2));
				
				if (tmpPlanetDistance <= tmpMinDistance) {
					tmpMinDistance = tmpPlanetDistance;
					tmpClosestObject = i;
					tmpIsClosestPlanet = true;
					tmpIsClosestGate = false;
				}
			}
			for(var i = 0; i < tmpGatesCount; i++){
				var tmpGateDistance = Math.pow((
					Math.pow((SystemStarmapGateCoordinates[i][0] - SystemStarmapCursorPositionX),2) + 
					Math.pow((SystemStarmapGateCoordinates[i][1] - SystemStarmapCursorPositionY),2)),(1/2));
				
				if (tmpGateDistance <= tmpMinDistance) {
					tmpMinDistance = tmpGateDistance;
					tmpClosestObject = i;
					tmpIsClosestPlanet = false;
					tmpIsClosestGate = true;
				}
			}
		
			
			SystemStarmapContext.clearRect(0, 0, SystemStarmapWidth, SystemStarmapHeight);
			
			SystemStarmapContext.strokeStyle = tmpStarType[2];
			SystemStarmapContext.fillStyle = tmpStarType[1];
			SystemStarmapContext.lineWidth = SystemStarmapLine;
			
			//star
			SystemStarmapContext.beginPath();

			for(var i = 0; i < SystemStarmapStarArms; i++) {
				SystemStarmapContext.lineTo(SystemStarmapWidth/2 + SystemStarmapStarOuter*Math.cos(i/SystemStarmapStarArms*2*Math.PI),
											SystemStarmapHeight/2 - SystemStarmapStarOuter*Math.sin(i/SystemStarmapStarArms*2*Math.PI));
				SystemStarmapContext.lineTo(SystemStarmapWidth/2 + SystemStarmapStarInner*Math.cos((i+1/2)/SystemStarmapStarArms*2*Math.PI),
											SystemStarmapHeight/2 - SystemStarmapStarInner*Math.sin((i+1/2)/SystemStarmapStarArms*2*Math.PI));
			}
			
			SystemStarmapContext.closePath();
			SystemStarmapContext.stroke();
			SystemStarmapContext.fill();
			
			SystemStarmapContext.strokeStyle = "hsl(0,0%,0%)";
			SystemStarmapContext.strokeText(tmpSector.name, SystemStarmapWidth/2, SystemStarmapHeight/2 + 30);
			SystemStarmapContext.strokeStyle = tmpStarType[2];
			SystemStarmapContext.fillText(tmpSector.name, SystemStarmapWidth/2, SystemStarmapHeight/2 + 30);
			
			SystemStarmapContext.lineWidth = SystemStarmapLine;
			

			for(var i = 0; i < tmpPlanetCount; i++){
				
				var tmpPlanet = planetsGetPlanetById(tmpSector.planetsByDistanceArray[i][0]);
				var tmpCycle = (TimerTotalElapsedDays % Math.round(tmpPlanet.orbitalPeroid))/tmpPlanet.orbitalPeroid + tmpPlanet.startingPosition;
				
				var tmpDistance = SystemStarmapPlanetMinimumDistance + ((SystemStarmapPlanetMaximumDistance - SystemStarmapPlanetMinimumDistance) * (i + 1) / (tmpPlanetCount + 1));
				//var tmpSinAngle = Math.sin(tmpCycle*Math.PI*2);
				//var tmpCosAngle = Math.cos(tmpCycle*Math.PI*2);
				
				//var tmpPlanetX = SystemStarmapWidth/2 + tmpSinAngle*(tmpDistance);
				//var tmpPlanetY = SystemStarmapHeight/2 - tmpCosAngle*(tmpDistance);
				
				var tmpPlanetX = SystemStarmapPlanetCoordinates[i][0];
				var tmpPlanetY = SystemStarmapPlanetCoordinates[i][1];
				
				//ring
				SystemStarmapContext.lineWidth = SystemStarmapLine;
				SystemStarmapContext.strokeStyle = "hsla(180,100%,50%,0.3)";
				SystemStarmapContext.beginPath();

				SystemStarmapContext.arc(SystemStarmapWidth/2, SystemStarmapHeight/2, tmpDistance, 0, 2*Math.PI);

				SystemStarmapContext.closePath();
				SystemStarmapContext.stroke();
				
				//planet space
				SystemStarmapContext.beginPath();

				SystemStarmapContext.arc(
					tmpPlanetX,
					tmpPlanetY,
					SystemStarmapPlanetOutlineRadius, 0, 2*Math.PI
				);
				
				SystemStarmapContext.closePath();
				SystemStarmapContext.save();
				SystemStarmapContext.clip();
				
				SystemStarmapContext.clearRect(
					tmpPlanetX - SystemStarmapPlanetOutlineRadius - SystemStarmapLine, 
					tmpPlanetY - SystemStarmapPlanetOutlineRadius - SystemStarmapLine,
					tmpPlanetX + SystemStarmapPlanetOutlineRadius + SystemStarmapLine, 
					tmpPlanetY + SystemStarmapPlanetOutlineRadius + SystemStarmapLine);
				SystemStarmapContext.restore();
				
				
				//planet
				SystemStarmapContext.lineWidth = SystemStarmapLine;
				SystemStarmapContext.fillStyle = tmpPlanet.type[1];
				SystemStarmapContext.strokeStyle = tmpPlanet.type[2];
				SystemStarmapContext.beginPath();	

				if(tmpIsClosestPlanet && tmpClosestObject == i && tmpMinDistance < SystemStarmapMouseDetectionDistance) {
					SystemStarmapContext.arc(
						tmpPlanetX,
						tmpPlanetY,
						SystemStarmapPlanetBodyRadiusHighlighted, 0, 2*Math.PI
					);

				}
				else {
					SystemStarmapContext.arc(
						tmpPlanetX,
						tmpPlanetY,
						SystemStarmapPlanetBodyRadius, 0, 2*Math.PI
					);
				}
				
				SystemStarmapContext.closePath();
				SystemStarmapContext.fill();
				SystemStarmapContext.stroke();
				
			}
			
			for (var i = 0; i < tmpGatesCount; i++){
				//var tmpRemoteSystem = systemsGetSystemById(tmpSector.gatesIDs[i]);
				//var tmpGateVector = [tmpRemoteSystem.position[0]-tmpSector.position[0],tmpRemoteSystem.position[1]-tmpSector.position[1]];
				
				//var tmpVectorLength = Math.pow(((tmpGateVector[0]*tmpGateVector[0])+(tmpGateVector[1]*tmpGateVector[1])),(1/2));
				//var tmpSin = tmpGateVector[0]/tmpVectorLength;
				//var tmpCos = tmpGateVector[1]/tmpVectorLength;
				
				//var tmpGateX = SystemStarmapWidth/2 + (SystemStarmapPlanetMaximumDistance+SystemStarmapGateOffset) * tmpSin;
				//var tmpGateY = SystemStarmapHeight/2 + (SystemStarmapPlanetMaximumDistance+SystemStarmapGateOffset) * tmpCos;
				var tmpGateX = SystemStarmapGateCoordinates[i][0];
				var tmpGateY = SystemStarmapGateCoordinates[i][1];
				
				//gates
				SystemStarmapContext.lineWidth = SystemStarmapLine;
				SystemStarmapContext.strokeStyle = "hsl(180,100%,50%)";
				SystemStarmapContext.beginPath();	

				if(tmpIsClosestGate && tmpClosestObject == i && tmpMinDistance < SystemStarmapMouseDetectionDistance) {
					SystemStarmapContext.lineWidth = SystemStarmapLine + 1;
					SystemStarmapContext.arc(
						tmpGateX,
						tmpGateY,
						SystemStarmapGateRadiusHighlighted, 0, 2*Math.PI
					);
					
				}
				else {
					SystemStarmapContext.arc(
						tmpGateX,
						tmpGateY,
						SystemStarmapGateRadius, 0, 2*Math.PI
					);
				}
				
				
				SystemStarmapContext.closePath();
				SystemStarmapContext.stroke();
				SystemStarmapContext.lineWidth = SystemStarmapLine;
			}
			
			for(var i = 0; i < tmpPlanetCount; i++){
				
				var tmpPlanet = planetsGetPlanetById(tmpSector.planetsByDistanceArray[i][0]);
				//var tmpCycle = (TimerTotalElapsedDays % Math.round(tmpPlanet.orbitalPeroid))/tmpPlanet.orbitalPeroid + tmpPlanet.startingPosition;
				
				//var tmpDistance = SystemStarmapPlanetMinimumDistance + ((SystemStarmapPlanetMaximumDistance - SystemStarmapPlanetMinimumDistance) * (i + 1) / (tmpPlanetCount + 1));
				//var tmpSinAngle = Math.sin(tmpCycle*Math.PI*2);
				//var tmpCosAngle = Math.cos(tmpCycle*Math.PI*2);
				
				//var tmpPlanetX = SystemStarmapWidth/2 + tmpSinAngle*(tmpDistance);
				//var tmpPlanetY = SystemStarmapHeight/2 - tmpCosAngle*(tmpDistance);
				
				var tmpPlanetX = SystemStarmapPlanetCoordinates[i][0];
				var tmpPlanetY = SystemStarmapPlanetCoordinates[i][1];
				
				
				//names
				
				if(tmpIsClosestPlanet && tmpClosestObject == i && tmpMinDistance < SystemStarmapMouseDetectionDistance) {
					SystemStarmapContext.strokeStyle = "hsl(0,0%,0%)";
					SystemStarmapContext.fillStyle = "hsl(0,0%,0%)";
				}
				else {
					SystemStarmapContext.strokeStyle = "hsla(0,0%,0%,0.5)";
					SystemStarmapContext.fillStyle = "hsl(0,0%,0%,1)";
				}
				SystemStarmapContext.strokeText(tmpPlanet.name, tmpPlanetX, tmpPlanetY + 20);
				SystemStarmapContext.fillText(tmpPlanet.name, tmpPlanetX, tmpPlanetY + 20);
				SystemStarmapContext.strokeStyle = tmpStarType[2];
				
				if(tmpIsClosestPlanet && tmpClosestObject == i && tmpMinDistance < SystemStarmapMouseDetectionDistance) {
					if(tmpPlanet.owner == 1) SystemStarmapContext.fillStyle = "hsl(120,100%,50%)";
					else if (tmpPlanet.owner == 0 || tmpPlanet.owner == -1) SystemStarmapContext.fillStyle = "hsl(0,0%,75%)";
					else SystemStarmapContext.fillStyle = "hsl(0,100%,50%)";
				}
				else {
					if(tmpPlanet.owner == 1) SystemStarmapContext.fillStyle = "hsla(120,100%,50%,0.5)";
					else if (tmpPlanet.owner == 0 || tmpPlanet.owner == -1) SystemStarmapContext.fillStyle = "hsla(0,0%,75%,0.5)";
					else SystemStarmapContext.fillStyle = "hsla(0,100%,50%,0.5)";
				}
				
				SystemStarmapContext.lineWidth = 1;
				SystemStarmapContext.fillText(tmpPlanet.name, tmpPlanetX, tmpPlanetY + 20);
			}
			
			for (var i = 0; i < tmpGatesCount; i++){
				var tmpRemoteSystem = systemsGetSystemById(tmpSector.gatesIDs[i]);
				var tmpGateVector = [tmpRemoteSystem.position[0] - tmpSector.position[0], tmpRemoteSystem.position[1] - tmpSector.position[1]];
				
				var tmpVectorLength = Math.pow(((tmpGateVector[0] * tmpGateVector[0]) + (tmpGateVector[1] * tmpGateVector[1])), (1/2));
				var tmpSin = tmpGateVector[0]/tmpVectorLength;
				var tmpCos = tmpGateVector[1]/tmpVectorLength;
				
				var tmpGateX = SystemStarmapWidth/2 + (SystemStarmapPlanetMaximumDistance + SystemStarmapGateOffset) * tmpSin;
				var tmpGateY = SystemStarmapHeight/2 + (SystemStarmapPlanetMaximumDistance + SystemStarmapGateOffset) * tmpCos;
				
				var tmpTextPositionOffsetX = 0;
				var tmpTextPositionOffsetY = 0;
				
				if(tmpSin >= 0.5) {
					SystemStarmapContext.textAlign = "right";
					tmpTextPositionOffsetX = -10;
				}
				else if(tmpSin <= -0.5) {
					SystemStarmapContext.textAlign = "left";
					tmpTextPositionOffsetX = 10;
				}
				else {
					SystemStarmapContext.textAlign = "center";
					tmpTextPositionOffsetX = 0;
				}
				
				if(tmpCos >= 0.5) {
					tmpTextPositionOffsetY = -10;
				}
				if(tmpCos <= -0.5) {
					tmpTextPositionOffsetY = 20;
				}
				else {
					tmpTextPositionOffsetY = 5;
				}
				
				
				//names
				SystemStarmapContext.font = "9px " + SystemStarmapFont;
				if(tmpIsClosestGate && tmpClosestObject == i && tmpMinDistance < SystemStarmapMouseDetectionDistance) {
					SystemStarmapContext.strokeStyle = "hsl(0,0%,0%)";
					SystemStarmapContext.fillStyle = "hsl(0,0%,0%)";
				}
				else {
					SystemStarmapContext.strokeStyle = "hsla(0,0%,0%,0.5)";
					SystemStarmapContext.fillStyle = "hsl(0,0%,0%,1)";
				}
				SystemStarmapContext.strokeText(tmpRemoteSystem.name, tmpGateX + tmpTextPositionOffsetX, tmpGateY + tmpTextPositionOffsetY);
				SystemStarmapContext.strokeStyle = tmpStarType[2];
				if(tmpIsClosestGate && tmpClosestObject == i && tmpMinDistance < SystemStarmapMouseDetectionDistance) {
					SystemStarmapContext.fillStyle = "hsl(180,100%,50%)";
				}
				else {
					SystemStarmapContext.fillStyle = "hsla(180,100%,50%,0.5)";
				}
				SystemStarmapContext.lineWidth = 1;
				SystemStarmapContext.fillText(tmpRemoteSystem.name, tmpGateX + tmpTextPositionOffsetX, tmpGateY + tmpTextPositionOffsetY);
				
				//console.log(tmpSin, tmpCos);
				//console.log(tmpTextPositionOffsetX, tmpTextPositionOffsetY);
			}
			SystemStarmapContext.font = "10px " + SystemStarmapFont;
			SystemStarmapContext.textAlign = "center";
			
			//console.log("System redrawn." + debugMode);
		}
		else {
			//console.log("System NOT redrawn - system changing." + debugMode);
		}
		
		setTimeout(() => { 
			SystemStarmapRefreshInProgress = false;
			if(SystemStarmapRefreshActive) systemRefreshSystemCanvas(outputDocument);
			else {
				//console.log("Aborting timeout." + debugMode);
			}
		}, 1000 * SystemStarmapRefreshSpeed);
		
	}
	else {
		//console.log("System NOT redrawn - refresh in progress." + debugMode);
	}
	
}

function systemStarmapTrackMousePosition(e, outputDocument, canvasObject) {
	var tmpRect = canvasObject.getBoundingClientRect();
    var tmpPosX = e.clientX - tmpRect.left;
	var tmpPosY = e.clientY - tmpRect.top;
	var tmpWidth = tmpRect.right - tmpRect.left;
	var tmpHeight = tmpRect.bottom - tmpRect.top;
	
	var tmpScaleX = tmpWidth/canvasObject.width;
	var tmpScaleY = tmpHeight/canvasObject.height;
	
	SystemStarmapCursorPositionX = Math.round(tmpPosX/tmpScaleX);
	SystemStarmapCursorPositionY = Math.round(tmpPosY/tmpScaleY);
}
function systemStarmapMouseClick(e, outputDocument, canvasObject) {
	if(!InterfaceSystemOverviewSystemChanging){
		var tmpRect = canvasObject.getBoundingClientRect();
		var tmpPosX = e.clientX - tmpRect.left;
		var tmpPosY = e.clientY - tmpRect.top;
		var tmpWidth = tmpRect.right - tmpRect.left;
		var tmpHeight = tmpRect.bottom - tmpRect.top;
		
		var tmpScaleX = tmpWidth/canvasObject.width;
		var tmpScaleY = tmpHeight/canvasObject.height;
		
		SystemStarmapCursorPositionX = Math.round(tmpPosX/tmpScaleX);
		SystemStarmapCursorPositionY = Math.round(tmpPosY/tmpScaleY);
		
		var tmpSystem = SystemsArray[SystemsCurrentSystem];
		var tmpSystemPosition = tmpSystem.position;
		var tmpStarType = tmpSystem.starType;
		var tmpPlanetCount = tmpSystem.planetsIDArray.length;
		var tmpGatesCount = tmpSystem.gatesIDs.length;
		
		var tmpMinDistance = 9999;
		var tmpClosestObject = -1;
		var tmpIsClosestGate = false;
		var tmpIsClosestPlanet = false;
		
		for(var i = 0; i < tmpPlanetCount; i++){
			var tmpPlanetDistance = Math.pow((
				Math.pow((SystemStarmapPlanetCoordinates[i][0] - SystemStarmapCursorPositionX),2) + 
				Math.pow((SystemStarmapPlanetCoordinates[i][1] - SystemStarmapCursorPositionY),2)),(1/2));
			
			if (tmpPlanetDistance <= tmpMinDistance) {
				tmpMinDistance = tmpPlanetDistance;
				tmpClosestObject = i;
				tmpIsClosestPlanet = true;
				tmpIsClosestGate = false;
			}
		}
		for(var i = 0; i < tmpGatesCount; i++){
			var tmpGateDistance = Math.pow((
				Math.pow((SystemStarmapGateCoordinates[i][0] - SystemStarmapCursorPositionX),2) + 
				Math.pow((SystemStarmapGateCoordinates[i][1] - SystemStarmapCursorPositionY),2)),(1/2));
			
			if (tmpGateDistance <= tmpMinDistance) {
				tmpMinDistance = tmpGateDistance;
				tmpClosestObject = i;
				tmpIsClosestPlanet = false;
				tmpIsClosestGate = true;
			}
		}
		
		if(tmpMinDistance < SystemStarmapMouseDetectionDistance) {
			if(tmpIsClosestPlanet) {
				var tmpPlanet = planetsGetPlanetById(tmpSystem.planetsByDistanceArray[tmpClosestObject][0]);
				PlanetsCurrentPlanet = tmpPlanet.arrayID;
				interfaceEnterElement(outputDocument, PlanetOverviewMenuID);
			}
			else if(tmpIsClosestGate) {
				var tmpRemoteSystem = systemsGetSystemIndexById(tmpSystem.gatesIDs[tmpClosestObject]);
				SystemsCurrentSystem = tmpRemoteSystem;
				if(InterfaceChangeMenuTabInstant){
					interfaceRefreshSystemOverview(outputDocument);
				}
				else {
					interfaceSystemOverviewFadeSystemDetails(outputDocument);
				}
			}
		}
	}
}
function systemStarmapMouseExit(e, outputDocument, canvasObject) {
	SystemStarmapCursorPositionX = -1000;
	SystemStarmapCursorPositionY = -1000;
}




var StarmapTestTmpID = 3;
var StarmapTestCoordinates = [];

function StarmapInit(outputDocument) {
	StarmapTestTmpID = 3;
	StarmapTestCoordinates = [];
	
	var tmpCanvas = document.getElementById("systemOverviewCanvas");
	var tmpCtx = tmpCanvas.getContext("2d");

	//tmpCanvas.onclick = function(e) {StarmapDebugClick(e, outputDocument,tmpCanvas);}
	//tmpCanvas.onmouseover = function(e) {StarmapDebugOver(e, outputDocument,tmpCanvas);}
	//tmpCanvas.onmousemove = function(e) {StarmapDebugMove(e, outputDocument,tmpCanvas);}
	
	//StarmapTest(outputDocument, tmpCanvas, tmpCtx);
	StarmapTest2(outputDocument, tmpCanvas, tmpCtx);
}
function StarmapTest(outputDocument, tmpCanvas, tmpCtx) {
	
	StarmapTestCoordinates = [];
		
	var starmapHeight = 400;
	var starmapWidth = 400;
	var starType = StarTypes[StarmapTestTmpID];

	tmpCanvas.height = starmapHeight;
	tmpCanvas.width = starmapWidth;

	tmpCtx.clearRect(0, 0, starmapWidth, starmapHeight);

	tmpCtx.strokeStyle = starType[2];
	tmpCtx.fillStyle = starType[1];
	tmpCtx.lineWidth = 2;

	var starArms = 16;
	var starOuter = 26;
	var starInner = 12;

	//star
	tmpCtx.beginPath();

	for(var i = 0; i < starArms; i++) {
		tmpCtx.lineTo(starmapWidth/2 + starOuter*Math.cos(i/starArms*2*Math.PI),starmapHeight/2 - starOuter*Math.sin(i/starArms*2*Math.PI));
		tmpCtx.lineTo(starmapWidth/2 + starInner*Math.cos((i+1/2)/starArms*2*Math.PI),starmapHeight/2 - starInner*Math.sin((i+1/2)/starArms*2*Math.PI));
	}

	tmpCtx.closePath();
	tmpCtx.stroke();
	tmpCtx.fill();

	var tmpColors = [
		"hsl(0,100%,50%)",
		"hsl(90,100%,50%)",
		"hsl(180,100%,50%)",
		"hsl(270,100%,50%)",
	];

	for(var i = 0; i < 4; i++){
		
		var tmpDistance = starOuter*3+(25*i);
		
		//ring
		tmpCtx.lineWidth = 3;
		tmpCtx.strokeStyle = "hsl(180,100%,50%)";
		tmpCtx.beginPath();

		tmpCtx.arc(starmapWidth/2, starmapHeight/2, tmpDistance, 0, 2*Math.PI);

		tmpCtx.closePath();
		tmpCtx.stroke();
		
		//planet space
		tmpCtx.beginPath();

		tmpCtx.arc(
			starmapWidth/2 + Math.sin(i)*(tmpDistance),
			starmapHeight/2 - Math.cos(i)*(tmpDistance),
			12, 0, 2*Math.PI
		);
		
		StarmapTestCoordinates.push([starmapWidth/2 + Math.sin(i)*(tmpDistance),starmapHeight/2 - Math.cos(i)*(tmpDistance)]);
		
		tmpCtx.closePath();
		tmpCtx.save();
		tmpCtx.clip();
		
		
		tmpCtx.clearRect(
			starmapWidth/2 + Math.sin(i)*(tmpDistance) - 12, 
			starmapHeight/2 - Math.cos(i)*(tmpDistance) - 12,
			starmapWidth/2 + Math.sin(i)*(tmpDistance) + 13, 
			starmapHeight/2 - Math.cos(i)*(tmpDistance) + 13);
		tmpCtx.restore();
		//planet

		tmpCtx.lineWidth = 2;
		tmpCtx.strokeStyle = tmpColors[i];
		tmpCtx.fillStyle = tmpColors[i];
		tmpCtx.beginPath();	

		tmpCtx.arc(
			starmapWidth/2 + Math.sin(i)*(tmpDistance),
			starmapHeight/2 - Math.cos(i)*(tmpDistance),
			8, 0, 2*Math.PI
		);
		
		tmpCtx.closePath();
		tmpCtx.fill();
		tmpCtx.stroke();
	}

	setTimeout(() => {StarmapTest(outputDocument, tmpCanvas, tmpCtx)},1000);

}
function StarmapTest2(outputDocument, tmpCanvas, tmpCtx) {
	
		
	var starmapHeight = 600;
	var starmapWidth = 600;
	var starType = StarTypes[StarmapTestTmpID];

	tmpCanvas.height = starmapHeight;
	tmpCanvas.width = starmapWidth;

	tmpCtx.clearRect(0, 0, starmapWidth, starmapHeight);

	tmpCtx.strokeStyle = starType[2];
	tmpCtx.fillStyle = "hsl(180,100%,50%)";
	tmpCtx.lineWidth = 0;

	var starArms = 5;
	var starOuter = 225;
	var starInner = 120;
	
	var starClipOuter = 150;
	var starClipInner = 80;

	//star
	tmpCtx.beginPath();

	for(var i = 0; i < starArms; i++) {
		tmpCtx.lineTo(starmapWidth/2 + starOuter*Math.sin(i/starArms*2*Math.PI),starmapHeight/2 - starOuter*Math.cos(i/starArms*2*Math.PI));
		tmpCtx.lineTo(starmapWidth/2 + starInner*Math.sin((i+1/2)/starArms*2*Math.PI),starmapHeight/2 - starInner*Math.cos((i+1/2)/starArms*2*Math.PI));
	}

	tmpCtx.closePath();
	//tmpCtx.stroke();
	tmpCtx.fill();
	
	tmpCtx.beginPath();

	for(var i = 0; i < starArms; i++) {
		tmpCtx.lineTo(starmapWidth/2 + starClipOuter*Math.sin(i/starArms*2*Math.PI),starmapHeight/2 - starClipOuter*Math.cos(i/starArms*2*Math.PI));
		tmpCtx.lineTo(starmapWidth/2 + starClipInner*Math.sin((i+1/2)/starArms*2*Math.PI),starmapHeight/2 - starClipInner*Math.cos((i+1/2)/starArms*2*Math.PI));
	}
	
	
	tmpCtx.closePath();
	tmpCtx.save();
	tmpCtx.clip();
	
	
	tmpCtx.clearRect(
		0, 
		0,
		600, 
		600);
	tmpCtx.restore();
	
}

function StarmapDebugClick(e, outputDocument, canvasObject){
	var tmpRect = canvasObject.getBoundingClientRect();
    var tmpPosX = e.clientX - tmpRect.left;
	var tmpPosY = e.clientY - tmpRect.top;
	var tmpWidth = tmpRect.right - tmpRect.left;
	var tmpHeight = tmpRect.bottom - tmpRect.top;
	
	var tmpScaleX = tmpWidth/canvasObject.width;
	var tmpScaleY = tmpHeight/canvasObject.height;
	
	var tmpMinDist = 99999;
	var tmpClosest = 0;
	
	for(var i = 0; i < StarmapTestCoordinates.length; i++){
		var tmpX2 = Math.pow((tmpPosX/tmpScaleX - StarmapTestCoordinates[i][0]),2);
		var tmpY2 = Math.pow((tmpPosY/tmpScaleY - StarmapTestCoordinates[i][1]),2);
		var tmpDist = Math.pow((tmpX2+tmpY2),(1/2));
		
		if(tmpDist < tmpMinDist) {
			tmpMinDist = tmpDist;
			tmpClosest = i;
		}
	}
	
	if(tmpMinDist < 25){
		switch(tmpClosest){
			case 0:
				console.log("Clicked red.");
				break;
			case 1:
				console.log("Clicked lime.");
				break;
			case 2:
				console.log("Clicked cyan.");
				break;
			case 3:
				console.log("Clicked purple.");
				break;
		}
	}
	else{
		switch(tmpClosest){
			case 0:
				console.log("Clicked close to red.");
				break;
			case 1:
				console.log("Clicked close to lime.");
				break;
			case 2:
				console.log("Clicked close to cyan.");
				break;
			case 3:
				console.log("Clicked close to purple.");
				break;
		}
	}
	
	
	console.log("Click: " + [tmpPosX,tmpPosY]);
	return [tmpPosX,tmpPosY];
}
function StarmapDebugOver(e, outputDocument, canvasObject){
	var tmpRect = canvasObject.getBoundingClientRect();
    var tmpPosX = e.clientX - tmpRect.left;
	var tmpPosY = e.clientY - tmpRect.top;
	var tmpWidth = tmpRect.right - tmpRect.left;
	var tmpHeight = tmpRect.bottom - tmpRect.top;
	
	var tmpScaleX = tmpWidth/canvasObject.width;
	var tmpScaleY = tmpHeight/canvasObject.height;
	
	console.log("Over: " + [tmpPosX,tmpPosY]);
	return [tmpPosX,tmpPosY];
}
function StarmapDebugMove(e, outputDocument,canvasObject) {
	var tmpRect = canvasObject.getBoundingClientRect();
    var tmpPosX = e.clientX - tmpRect.left;
	var tmpPosY = e.clientY - tmpRect.top;
	var tmpWidth = tmpRect.right - tmpRect.left;
	var tmpHeight = tmpRect.bottom - tmpRect.top;
	
	var tmpScaleX = tmpWidth/canvasObject.width;
	var tmpScaleY = tmpHeight/canvasObject.height;
	
	outputDocument.getElementById("systemOverviewDebugX").innerHTML = (tmpPosX + " | " + tmpPosX/tmpScaleX);
	outputDocument.getElementById("systemOverviewDebugY").innerHTML = (tmpPosY + " | " + tmpPosY/tmpScaleY);
}

