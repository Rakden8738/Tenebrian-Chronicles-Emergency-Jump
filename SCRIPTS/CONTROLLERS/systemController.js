function connectionTest_systems(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"systems\" reporting issues.");
		return false;
	}
}