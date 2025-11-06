function connectionTest_networks(outputDocument) {
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"networks\" reporting issues.");
		return false;
	}
}

var NetworksColors = [
	//[default, focused, fading]
	["hsla(180,75%,65%,0.8)","hsla(180,75%,65%,1.0)","hsla(180,0%,65%,0.0)"],
	["hsla(240,75%,65%,0.8)","hsla(240,75%,65%,1.0)","hsla(240,0%,65%,0.0)"],
	["hsla(300,75%,65%,0.8)","hsla(300,75%,65%,1.0)","hsla(300,0%,65%,0.0)"],
	["hsla(0,75%,65%,0.8)","hsla(0,75%,65%,1.0)","hsla(0,0%,65%,0.0)"],
	["hsla(60,75%,65%,0.8)","hsla(60,75%,65%,1.0)","hsla(60,0%,65%,0.0)"],
	["hsla(120,75%,65%,0.8)","hsla(120,75%,65%,1.0)","hsla(120,0%,65%,0.0)"],
];
var NetworksArray = [];
var GatesArray = [];

var NetworksDebugMode = false;

function networksLinkSystemsByName(system1Name, system2Name, networkNewName = "") {
	if(system1Name == system2Name) return;
	
	var tmpSys1 = systemsGetSystemByName(system1Name);
	var tmpSys2 = systemsGetSystemByName(system2Name);
	
	networksLinkSystems(tmpSys1, tmpSys2, networkNewName);
	
}
function networksLinkSystemsById(system1ID, system2ID, networkNewName = "") {
	if(system1ID == system2ID) return;
	
	var tmpSys1 = systemsGetSystemById(system1ID);
	var tmpSys2 = systemsGetSystemById(system2ID);
	
	networksLinkSystems(tmpSys1, tmpSys2, networkNewName);
}
function networksLinkSystems(system1, system2, networkNewName = "") {
	
	var tmpNewNetworkName;
	var tmpNewNetworkID;
	var tmpNoNameGiven = true;
	var tmpSystem1Standalone = false;
	var tmpSystem2Standalone = false;
	
	if(NetworksDebugMode) console.log("Linking " + system1.name + " and " + system2.name + " systems.");
	
	if(system1.network_id == -1) {
		tmpSystem1Standalone = true;
		if(NetworksDebugMode) console.log(system1.name + " is standalone.");
	}
	if(system2.network_id == -1) {
		tmpSystem2Standalone = true;
		if(NetworksDebugMode) console.log(system2.name + " is standalone.");
	}
	
	if(tmpSystem1Standalone) {
		if(tmpSystem2Standalone) {
			//new network
			
			if(NetworksDebugMode) console.log("Both systems are standalone. New network will be created.");
		
			if(networkNewName === undefined) {
				tmpNewNetworkName = system1.name + "-" + system2.name + " network.";
			}
			else if (networkNewName.length = 0) {
				tmpNewNetworkName = system1.name + "-" + system2.name + " network.";
			}
			else{
				tmpNewNetworkName = networkNewName;
				tmpNoNameGiven = false;
			}
			
			if(NetworksDebugMode) console.log("Creating new network: " + tmpNewNetworkName);
			
			//check if such name exists
			var NameFound = false;
			
			for(var i = 0; i < NetworksArray.length; i++) {
				if(NetworksArray[i][0] == tmpNewNetworkName) {
					if(NetworksDebugMode) console.log("Warning: Network " + tmpNewNetworkName + " exists.");
					NameFound = true;
					break;
				}
			}
			
			if(NameFound) {
				tmpNameCounter = 0;
				while(true) {
					NameFound = false;
					for(var i = 0; i < NetworksArray.length; i++) {
						if(NetworksArray[i][0] == tmpNewNetworkName + "_" + tmpNameCounter) {
							if(NetworksDebugMode) console.log("Warning: Network " + (tmpNewNetworkName + "_" + tmpNameCounter) + " exists.");
							NameFound = true;
							break;
						}
					}
					
					if(!NameFound) {
						tmpNewNetworkName = tmpNewNetworkName + "_" + tmpNameCounter;
						if(NetworksDebugMode) console.log("Network name " + tmpNewNetworkName + " choosen.");
						
						break;
					}
					else{
						tmpNameCounter++;
					}
				}
			}		
			
			//get new ID for network
			var tmpI = 0;
			var IDFound = false;
			
			if(NetworksDebugMode) console.log("Searching for available network ID...");
			while(true) {
				IDFound = false;
				if(NetworksDebugMode) console.log("Checking network ID: " + tmpI);
				for(var i = 0; i < NetworksArray.length; i++) {
					
					if(tmpI == NetworksArray[i][1]) {
						IDFound = true;
						if(NetworksDebugMode) console.log("ID " + tmpI + " found for network " + NetworksArray[i][0]) ;
						break;
					}
				}
				
				if(!IDFound) {
					if(NetworksDebugMode) console.log("Accepting " + tmpI + " as new network's ID.");
					tmpNewNetworkID = tmpI;
					break;
				}
				else{
					tmpI++;
				}
			}
			
			if(NetworksDebugMode) console.log("Adding network " + tmpNewNetworkName + "/" + tmpNewNetworkID + " to array.");
			NetworksArray.push([tmpNewNetworkName,tmpNewNetworkID,NetworksColors[tmpNewNetworkID%NetworksColors.length]]);
		}
		else{
			//sys1 standalone but sys2 is part of network
			if(NetworksDebugMode) console.log("Taking network name from " + system2.name);
			
			tmpNewNetworkName = system2.network;
			tmpNewNetworkID = system2.network_id;
			
			if(NetworksDebugMode) console.log("Linking " + system1.name + " to existing network: " + tmpNewNetworkName + " ID: " + tmpNewNetworkID);
		}
	}
	else{
		if(tmpSystem2Standalone) {
			//sys2 standalone but sys1 is part of network
			if(NetworksDebugMode) console.log("Taking network name from " + system1.name);
			
			tmpNewNetworkName = system1.network;
			tmpNewNetworkID = system1.network_id;
			
			if(NetworksDebugMode) console.log("Linking " + system2.name + " to existing network: " + tmpNewNetworkName + " ID: " + tmpNewNetworkID);
		}
		else{
			//both systems have networks
			if(NetworksDebugMode) console.log("Neither sector is standalone.");
			
			//check if both are from same network
			if(system1.network == system2.network) {
				//no need for new network, skip to gates
				
				if(NetworksDebugMode) console.log("Sectors are already part of same network, no need to create new one.");
				tmpNewNetworkName = system1.network;
				tmpNewNetworkID = system1.network_id;
			}
			else{
				//merge networks
				
				if(NetworksDebugMode) console.log("Networks " + system1.network + " and " + system2.network + " will be merged.");
		
				if(networkNewName === undefined) {
					tmpNewNetworkName = system1.network + "-" + system2.network + " network.";
				}
				else if (networkNewName.length = 0) {
					tmpNewNetworkName = system1.network + "-" + system2.network + " network.";
				}
				else{
					tmpNewNetworkName = networkNewName;
					tmpNoNameGiven = false;
				}
				
				//TO-DO check if new network is already system 1 or system 2 one
				if(system1.network == networkNewName) {
					if(NetworksDebugMode) console.log("Merging into existing network: " + tmpNewNetworkName);
					tmpNewNetworkID = system1.network_id;
				}
				else if(system2.network == networkNewName) {
					if(NetworksDebugMode) console.log("Merging into existing network: " + tmpNewNetworkName);
					tmpNewNetworkID = system2.network_id;
				}
				else {
					if(NetworksDebugMode) console.log("Creating new network: " + tmpNewNetworkName);
					
					//check if such name exists
					var NameFound = false;
					
					for(var i = 0; i < NetworksArray.length; i++) {
						if(NetworksArray[i][0] == tmpNewNetworkName) {
							if(NetworksDebugMode) console.log("Warning: Network " + tmpNewNetworkName + " exists.");
							NameFound = true;
							break;
						}
					}
					
					if(NameFound) {
						tmpNameCounter = 0;
						while(true) {
							NameFound = false;
							for(var i = 0; i < NetworksArray.length; i++) {
								if(NetworksArray[i][0] == tmpNewNetworkName + "_" + tmpNameCounter) {
									if(NetworksDebugMode) console.log("Warning: Network " + (tmpNewNetworkName + "_" + tmpNameCounter) + " exists.");
									NameFound = true;
									break;
								}
							}
							
							if(!NameFound) {
								tmpNewNetworkName = tmpNewNetworkName + "_" + tmpNameCounter;
								if(NetworksDebugMode) console.log("Network name " + tmpNewNetworkName + " choosen.");
								
								break;
							}
							else{
								tmpNameCounter++;
							}
						}
					}		
					
					//get new ID for network
					var tmpI = 0;
					var IDFound = false;
					
					if(NetworksDebugMode) console.log("Searching for available network ID...");
					while(true) {
						IDFound = false;
						if(NetworksDebugMode) console.log("Checking network ID: " + tmpI);
						for(var i = 0; i < NetworksArray.length; i++) {
							if(tmpI == NetworksArray[i][1]) {
								IDFound = true;
								if(NetworksDebugMode) console.log("ID " + tmpI + " found for network " + NetworksArray[i][0]) ;
								break;
							}
						}
						
						if(!IDFound) {
							if(NetworksDebugMode) console.log("Accepting " + tmpI + " as new network's ID.");
							tmpNewNetworkID = tmpI;
							break;
						}
						else{
							tmpI++;
						}
					}
					if(NetworksDebugMode) console.log("Adding network " + tmpNewNetworkName + "/" + tmpNewNetworkID + " to array.");
					
					NetworksArray.push([tmpNewNetworkName,tmpNewNetworkID,NetworksColors[tmpNewNetworkID%NetworksColors.length]]);
				}
				
				
				if(NetworksDebugMode) console.log("Mergin networks " + system1.network + " and " + system2.network + " into " + tmpNewNetworkName);
				networksMergeNetworks(tmpNewNetworkName, system1.network, system2.network);
			}
		}
	}

	//link new gates
	if(system1.gatesIDs.indexOf(system2.id) == (-1)) {
		system1.gatesIDs.push(system2.id);
		system1.network = tmpNewNetworkName;
		system1.network_id = tmpNewNetworkID;
		
		if(NetworksDebugMode) console.log(system1.name + ": Gate to "+system2.name+" created.");
	}
	else{
		console.log(system1.name + ": Gate to "+system2.name+" already exists.");
	}

	if(system2.gatesIDs.indexOf(system1.id) == (-1)) {
		system2.gatesIDs.push(system1.id);
		system2.network = tmpNewNetworkName;
		system2.network_id = tmpNewNetworkID;
		
		if(NetworksDebugMode) console.log(system2.name + ": Gate to "+system1.name+" created.");
	}
	else{
		console.log(system2.name + ": Gate to "+system1.name+" already exists.");
	}
	
	system1.gatesNumber = system1.gatesIDs.length;
	system2.gatesNumber = system2.gatesIDs.length;
	
	registerNewGateConnection(system1, system2, tmpNewNetworkName, tmpNewNetworkID, NetworksColors[tmpNewNetworkID%NetworksColors.length]);
	
}

function networksMergeNetworks(newNetwork, oldNetwork1, oldNetwork2) {
	var newNetworkID = -1;
	for(var i = 0; i < NetworksArray.length; i++) {
		if(NetworksArray[i][0] == newNetwork) {
			newNetworkID = NetworksArray[i][1];
			break;
		}
	}
	if(NetworksDebugMode) console.log("ID of new network " + newNetwork + " is " + newNetworkID);
	
	for(var i = 0; i < SystemsArray.length; i++) {
		if(SystemsArray[i].network == oldNetwork1 || SystemsArray[i].network == oldNetwork2) {
			
			if(NetworksDebugMode) console.log("Assigning new network to system " + SystemsArray[i].name + " (" + SystemsArray[i].network + "/" + SystemsArray[i].network_id + ")");
			
			SystemsArray[i].network = newNetwork;
			SystemsArray[i].network_id = newNetworkID;
		}
	}
	
	var removedNetworkIndex = -1;
	if(NetworksDebugMode) console.log("Cleaning up networks " + oldNetwork1 + " and " + oldNetwork2);
	
	if(newNetwork != oldNetwork1) {
		for(var i = 0; i < NetworksArray.lenght; i++) {
			if(NetworksArray[i][0] == oldNetwork1) removedNetworkIndex = i;
			break;
		}
		NetworksArray.splice(removedNetworkIndex, 1);
		if(NetworksDebugMode) console.log("Removing " + oldNetwork1 + " network.");
		
		for(var i = 0; i < GatesArray.length; i++){
			if(GatesArray[i][2][0] == oldNetwork1){
				if(NetworksDebugMode) console.log("Updating " + GatesArray[i][0][0] + "-" + GatesArray[i][1][0] + " gate link.");
				GatesArray[i][2][0] = newNetwork;
				GatesArray[i][2][1] = newNetworkID;
				GatesArray[i][2][2] = NetworksColors[newNetworkID%NetworksColors.length];
			}
		}
	}
	else if(NetworksDebugMode) console.log("Network " + oldNetwork1 + " is new network.");
	
	if(newNetwork != oldNetwork2){
		for(var i = 0; i < NetworksArray.lenght; i++) {
			if(NetworksArray[i][0] == oldNetwork2) removedNetworkIndex = i;
			break;
		}
	
		NetworksArray.splice(removedNetworkIndex, 1);
	
		if(NetworksDebugMode) console.log("Removing " + oldNetwork2 + " network.");
		
		for(var i = 0; i < GatesArray.length; i++){
			if(GatesArray[i][2][0] == oldNetwork2){
				if(NetworksDebugMode) console.log("Updating " + GatesArray[i][0][0] + "-" + GatesArray[i][1][0] + " gate link.");
				GatesArray[i][2][0] = newNetwork;
				GatesArray[i][2][1] = newNetworkID;
				GatesArray[i][2][2] = NetworksColors[newNetworkID%NetworksColors.length];
			}
		}
	}
	else if(NetworksDebugMode) console.log("Network " + oldNetwork2 + " is new network.");
}
	
function registerNewGateConnection(system1Object, system2Object, networkName, networkID, networkColor) {
	
	for(var i = 0; i < GatesArray.length; i++){
		if(GatesArray[i][0][0] == system1Object.name && GatesArray[i][1][0] == system2Object.name) {
			console.log("Connection from " + system1.name + " to " + system2.name + " already exists.");
			return false;
		}
		if(GatesArray[i][1][0] == system1Object.name && GatesArray[i][0][0] == system2Object.name) {
			console.log("Connection from " + system2.name + " to " + system1.name + " already exists.");
			return false;
		}
	}
	
	//[ [Sys1Name, Position, Discovered, VectorToSys2] , [Sys2Name, Position, Discovered, VectorToSys1] , [NetworkName, NetworkID] , Distance]
	var newGateConnection = [[],[],[],0];
	
	//system 1
	newGateConnection[0] = [system1Object.name, system1Object.position, system1Object.discovered, [0,0,0]];
	//system 2
	newGateConnection[1] = [system2Object.name, system2Object.position, system2Object.discovered, [0,0,0]];
	//network
	newGateConnection[2] = [networkName, networkID, networkColor];
	
	//vectors
	newGateConnection[0][3] = [
		system2Object.position[0] - system1Object.position[0],
		system2Object.position[1] - system1Object.position[1],
		system2Object.position[2] - system1Object.position[2]
	];
	newGateConnection[1][3] = [
		system1Object.position[0] - system2Object.position[0],
		system1Object.position[1] - system2Object.position[1],
		system1Object.position[2] - system2Object.position[2]
	];
	
	//distance (based on vector)
	newGateConnection[3] = Math.pow((
		Math.pow(newGateConnection[0][3][0],2) +
		Math.pow(newGateConnection[0][3][1],2) +
		Math.pow(newGateConnection[0][3][2],2)),
	(1/2));
	
	GatesArray.push(newGateConnection);
	return newGateConnection;
}	
	

function networksUnlinkSystemsByName(system1Name, system2Name) {
	if(system1Name == system2Name) return;
	
	var tmpSys1 = systemsGetSystemByName(system1Name);
	var tmpSys2 = systemsGetSystemByName(system2Name);
	
	networksUnlinkSystems(tmpSys1, tmpSys2);
}
function networksUnlinkSystemsById(system1ID, system2ID) {
	if(system1ID == system2ID) return;
	
	var tmpSys1 = systemsGetSystemById(system1ID);
	var tmpSys2 = systemsGetSystemById(system2ID);
	
	networksUnlinkSystems(tmpSys1, tmpSys2);
}
function networksUnlinkSystems(system1, system2) {
	//to-do
}