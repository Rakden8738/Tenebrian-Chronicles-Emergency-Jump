function MAP_TEST(){
console.log("MAP OK");
}

var MapDiv;
var MapCanvas;
var MapContext;

var CanvasHeight;
var CanvasWidth;

var CanvasZeroX;
var CanvasZeroY;

var PlanetSize = 15;
var CanvasPadding = 0.10;
var CanvasPositionScale=1.2;

function MapInit(CanvasName){
	MapCanvas = document.getElementById(CanvasName);
	MapContext = MapCanvas.getContext("2d");
	MapContext.reset();

	CanvasHeight = MapCanvas.height;
	CanvasWidth = MapCanvas.width;

	CanvasDrawAreaScale = 1.0 - (2 * CanvasPadding);
	CanvasZeroX = CanvasPadding * CanvasWidth;
	CanvasZeroY = CanvasPadding * CanvasHeight;
}

function MapTEST(CanvasName, PlanetList){
	if(PlanetList.length > 0) {
		MapInit(CanvasName);
		for( let i = 0; i < PlanetList.length; i++ ) {
			MapContext.moveTo(CanvasZeroX + PlanetList[i].X_POS * CanvasPositionScale * CanvasDrawAreaScale, CanvasZeroY + PlanetList[i].Y_POS * CanvasPositionScale * CanvasDrawAreaScale);
			MapContext.fillStyle = "rgb("+PlanetList[i].COLOR_R+","+PlanetList[i].COLOR_G+","+PlanetList[i].COLOR_B+")";
			MapContext.beginPath();
			MapContext.arc(CanvasZeroX + PlanetList[i].X_POS * CanvasPositionScale * CanvasDrawAreaScale, CanvasZeroY + PlanetList[i].Y_POS * CanvasPositionScale * CanvasDrawAreaScale, PlanetSize*PlanetList[i].SCALE/100, 0, 2 * Math.PI);
			MapContext.stroke();
			MapContext.fill();
			MapContext.closePath();
		}
	}
}