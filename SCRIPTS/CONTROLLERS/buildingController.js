function connectionTest_buildings(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"buildings	\" reporting issues.");
		return false;
	}
}

