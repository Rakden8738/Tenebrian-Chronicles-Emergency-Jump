var version = "v0.0.1";

var InterfaceDocument;

function MAIN_TEST(){
console.log("MAIN OK");
}

function MAIN_ConnectionTest(ReceivedDocument, ConnectionTestElementID){
	InterfaceDocument = ReceivedDocument;	
	InterfaceDocument.getElementById(ConnectionTestElementID).innerHTML = "Loaded!";
	InterfaceDocument.getElementById(ConnectionTestElementID).hidden = true;

	console.log("Main module loaded.");
	console.log("Version: "+version);


}

var majorTickLength = 1.0;
var minorTickLength = 0.01;

