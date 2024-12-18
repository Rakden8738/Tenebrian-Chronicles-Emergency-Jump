var outputNoWindowElements = ["introFloatingText_1","introFloatingText_2","introFloatingText_3","introFloatingText_4","introFloatingText_5","introFloatingText_6","introFloatingText_7","introFloatingText_8","introFloatingText_9","introFloatingText_10"];
var outputWindowElements = ["introAIMessageWindow_1"];
var outputWindowText = ["introAIMessageWindowText_1"];
var outputWarningWindows = ["introWarningWindow_1","introWarningWindow_2","introWarningWindow_3","introWarningWindow_4","introWarningWindow_5","introWarningWindow_6"];
var outputWarningHeaders = ["introWarningWindowHeader_1","introWarningWindowHeader_2","introWarningWindowHeader_3","introWarningWindowHeader_4","introWarningWindowHeader_5","introWarningWindowHeader_6"];
var outputWarningText = ["introWarningWindowText_1","introWarningWindowText_2","introWarningWindowText_3","introWarningWindowText_4","introWarningWindowText_5","introWarningWindowText_6"];

var textColors = [
	"hsl(0,100%,65%)", //red 0
	"hsl(120,100%,65%)", //green 1
	"hsl(240,100%,65%)", //blue 2
	"hsl(0,100%,50%)", //alert 3
	"hsl(180,75%,75%)", //cyan text 4
	"hsl(60,100%,65%)"//orange 5
]
var introMessagesDelays = [

	   0,	//init 
	 100,	//show 1
	  95,	//... 1
	 100,	//finish 1	
	  75,	//move 1	
	  50,	//show 2	
	  90, 	//... 2		
	 100,	//finish 2	
	  80,	//move 2
	  50,	//show 3	
	 145,	//... 3		
	 100,	//finish 3	
	  70,	//move 3	
	  50,	//show 4	
	  65,	//fade 1	
	 110,	//... 4		
	 210,	//fade 2	
	  80,	//reset 1
	 285,	//fade 3	 
	  45,	//reset 2
	 355,	//reset 3	
	  25,	//alarm 1	
	  75,	//downscale alarm 1
	 150,	//finish 4
	  60,	//move 4	
	  
	  50,	//show 5	
	 210,	//... 5		
	 100,	//finish 5	
	  80,	//move 5		
	  50,	//show 1	
	 230,	//... 1		
	  80,	//fade 4	
	 220,	//alarm 2	
	  75,	//downscale alarm 2
	 100,	//finish 1	
	   5,	//reset 4	
	  40,	//fade 5	
	  10,	//move 1	
	  50,	//show 2	
	 220,	//... 2		
	 120,	//reset 5
	 
	 130,	//finish 2	
	 100,	//move 2
	  50,	//show 3
	 185,	//... 3
	 100,	//finish 3
	  80,	//move 3
	  50,	//show 4
	 160,	//... 4
	 250,	//finish 4
	  60,	//move 4
	  50,	//show 5
	 220,	//... 5
	 250,	//finish 5
	 100,	//move 5
	  50,	//...
	];

var OLDintroMessagesDelays = [

	100,100, 25, 25, 50,100, 50,125, 25, 25,	//  625
	 50,100, 50,150, 25, 25, 50, 75, 50,200,	// 1400
	 50, 50, 50, 25, 25, 50, 50, 50, 50, 50,	// 1850
	 50, 50, 50, 25, 25, 50, 50, 50, 50, 50,	// 2300
	 50, 50, 50, 25, 25, 50, 50, 50, 50, 50,	// 2750
	 75, 50,225, 25, 25, 50,100, 50,250, 25,	// 3625
	 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,	// 3875
	 25, 25, 25, 50, 75, 25, 25,225, 25, 25,	// 4400
	 50,100, 25, 50,200, 25, 25, 50,100, 50,	// 5075
	175, 50, 25, 25, 25, 50, 25, 50, 50,225,	// 5775
	 50, 50, 50, 50, 50, 50, 50,125, 25, 25,	// 6300
	100, 75, 25, 25, 50, 75, 50,150, 25, 25,	// 6900
	 25, 50, 75, 50, 75, 50, 25, 25, 50, 75,	// 7400
	 25, 25, 10, 40,200,						// 7700 part 1 end
	800,										// 8500 part 2 start
	100, 50, 50, 75,125, 50, 50, 50, 50, 50,	//  650
	 50, 50, 50, 50, 50, 75, 75, 50,200, 50,	// 1350
	 50, 50, 50, 50, 50, 75, 75, 50, 50,100,	// 1950
	 50,225, 50, 25, 25, 75,150, 50,125, 25,	// 2750
	 25, 50, 50, 50, 50, 25, 25, 50, 50, 50,	// 3175
	 25, 25, 50, 50, 25, 25, 50, 50, 50, 50,	// 3575
	 50, 75,100, 25, 50,150, 50, 50, 75, 50,	// 4250
	175, 50, 50, 75, 25, 25,200, 50, 50, 50,	// 5000
	 25, 50, 50, 50,150, 50, 25, 25, 25, 50,	// 5500
	 75, 50,150, 50, 25, 25, 50, 25,125, 50,	// 6125
	200, 50, 50, 75,100, 50,150, 25, 25, 25,	// 6875
	 25, 75,100, 50,200, 50, 25, 25, 75, 75,	// 7575
	 50,225, 25, 25, 50, 75, 75, 50,175, 50,	// 8375
	 50, 50, 75,125, 50,100, 75, 25, 50, 50,	// 9025
	 75, 75, 50,125, 75, 50, 50, 50, 50, 50,	// 9675
	 50, 75, 75, 50, 50,100, 50, 50, 50, 50,	//10275
	 50, 50, 50, 50, 50, 50, 75, 25, 50, 25,	//10750
	 50,275, 50,250, 50, 50, 50, 25, 25, 50,	//11625
	 50, 50, 50, 50, 50, 50, 50, 25, 25, 50,	//12075
	 50, 50, 50, 50, 25, 25, 50, 50, 50, 50,	//12525
	 50, 50, 50, 50, 25,						//12750 part 2 end
	450,										//13200 part 3 start
	];
		
var introMessagesTiming = [];

function calculateTimings(baseArray){
	newArray = [];
	newArray[0] = baseArray[0];
	for(var i = 1; i < baseArray.length; i++) {
		newArray[i] = baseArray[i]+newArray[i-1];
	}
	return newArray;
}
var combinedIntroMessagesTiming = [
	  0,	//init			0
	 10,	//show old		10
	 15,	//move old		25
	 25,	//show last		50
	 25,	//fade old		75
	 25,	//slowly show	100
	 50,	//move last		150
	 50,	//critical		200
	145,	//move			345
	 50,	//autopilot		395
	 45,	//...			440
	100,	//enabled		540
	 60,	//move			600
	 50,	//initiating	650
	200,	//move			850
	 50,	//redirecting	900
	235,	//move			1135
	 50,	//charged at	1185
	140,	//0-100%		1325
	250,	//border flash	1575
	275,	//move			1850
	 50,	//JUMPING		1900
	 75,	//blue fade in	1975
	 25,	//shake shake	2000
	250,	//discharge 	2250
	 50,	//blue fade out	2300
	200,	//shake shake 2	2500
	150,	//shake shake 3	2650
	125,	//move			2775
	 50,	//Emergency		2825
	 70,	//...			2895
	100,	//successful	2995
	 75,	//move			3070
	 50,	//CHECKING		3120
	 90,	//...			3210
	100,	//operational	3310
	 80,	//move			3390
	 50,	//SEARCHING		3440
	120,	//...			3560
	100,	//not found		3660
	 70,	//move			3730
	 50,	//combat mode	3780
	 85,	//lifted		3865
	 75,	//move			3940
	 50,	//general check	3990
	175,	//...			4165
	575,	//start alerts	4740
	 25,	//alert			4765
	125,	//move alert	4890
	 50,	//aborted		4940
	 60,	//move			5000
	 50,	//checking		5050
	185,	//...			5235
	100,	//operational	5335
	 80,	//move			5415
	 50,	//attempting	5465
	205,	//...			5670
	200,	//shake			5870
	 50,	//alert			5920
	125,	//move alert	6045
	100,	//failed		6145
	 55,	//move			6200
	 50,	//restarting	6250
	195,	//...			6445
	250,	//failed		6695
	100,	//move			6795
	 50,	//ch thrust		6845
	160,	//...			7005
	100,	//operat		7105
	
	 40,	//shake	atmo	7145
	 
	 40,	//move			7185
	 10,	//alert atmo	7195
	 40,	//activat		7235
	 
	 85,	//move alert	7320
	  
	 65,	//...			7385
	 
	 50,	//thrust shake	7435	 
	 50,	//success		7485
	 10,	//more shake	7495
	 
	 50,	//move			7545
	 50,	//restarting	7595
	195,	//...			7790
	250,	//failed		8040
	100,	//move			8140
	
	 30,	//shake			8170
	 
	 20,	//checking		8190
	 
	 30,	//alert			8220
	 10,	//shake strong	8230
	 80,	//...			8310
	 35,	//move alert	8345
	 65,	//inactive		8410
	 65,	//move			8475
	 50,	//starting		8525
	125,	//...			8650
	250,	//success		8900
	 30,	//shake stronge	8930
	 30,	//move			8960
	 50,	//raising		9010
	 85,	//...			9095
	125,	//alert			9220
	125,	//move alert	9345
	150,	//active		9495
	 85,	//shake crash	9575
	 10,	//move			9590
	  5,	//alert			9595
	 45,	//fade to red	9640
	200,	//				9840
			//skip			
];
var combinedIntroMessages = [
/*	0	*/	["SHIELDS CRITICAL",textColors[0]],
/*	1	*/	["SHIELDS DOWN",textColors[0]],
/*	2	*/	["EXPLOSION IN [ENGINE SECTOR]",textColors[0]],
/*	3	*/	["HULL BREACH DETECTED IN [ENGINE SECTOR]",textColors[0]],
/*	4	*/	["[MAIN ENGINE] DAMAGED",textColors[0]],
/*	5	*/	["[HYPERDRIVE] DAMAGED",textColors[0]],
/*	6	*/	["EXPLOSION IN [NAVIGATION BRIDGE]",textColors[0]],
/*	7	*/	["HULL BREACH DETECTED IN [NAVIGATION BRIDGE]",textColors[0]],
/*	8	*/	["RECEIVED CRITICAL DAMAGE",textColors[0]],
/*	9	*/	["AUTOPILOT",textColors[4]],

/*	10	*/	["ENABLED",textColors[1]],
/*	11	*/	["INITIATING EMERGENCY JUMP PROCEDURE",textColors[4]],
/*	12	*/	["REDIRECTING AVAILABLE POWER TO [JUMPDRIVE]",textColors[4]],	
/*	13	*/	["[JUMPDRIVE] CHARGED AT:",textColors[4]],
/*	14	*/	["JUMPING",textColors[4]],	
/* 	15	*/	["EMERGENCY JUMP",textColors[4]],
/*  16	*/	["SUCCESSFUL",textColors[1]],
/*  17	*/	["CHECKING [SENSORS]",textColors[4]],
/*  18	*/	["OPERATIONAL",textColors[1]],
/*  19	*/	["SEARCHING FOR [HOSTILES]",textColors[4]],

/*  20	*/	["NOT FOUND",textColors[1]],
/*  21	*/	["COMBAT ALARM",textColors[4]],
/*  22	*/	["LIFTED",textColors[1]],
/*  23	*/	["RUNNING GENERAL SYSTEM CHECKUP",textColors[4]],
/*  24	*/	["WARNING",textColors[3]],
/*  25	*/	["PLANET ON COLLISION COURSE",textColors[3]],
/*  26	*/	["ABORTED",textColors[5]],
/*  27	*/	["CHECKING [COLLISION AVOIDANCE SYSTEM]",textColors[4]],
/*  28	*/	["OPERATIONAL",textColors[1]],
/*  29	*/	["ATTEMPTING [COLLISION AVOIDANCE MANEUVER]",textColors[4]],

/*	30	*/	["WARNING",textColors[3]],
/*	31	*/	["[COLLISION AVOIDANCE SYSTEM] FATAL ERROR",textColors[3]],
/*	32	*/	["FAILED",textColors[0]],
/*	33	*/	["RESTARTING [COLLISION AVOIDANCE SYSTEM]",textColors[4]],
/*	34	*/	["FAILED TO START",textColors[0]],
/*	35	*/	["CHECKING [MANEUVERING THRUSTERS]",textColors[4]],
/*	36	*/	["OPERATIONAL",textColors[1]],
/*	37	*/	["ACTIVATING [REVERSE THRUSTERS]",textColors[4]],
/*	38	*/	["WARNING",textColors[3]],
/*	39	*/	["ENTERING ATMOSPHERE",textColors[3]],

/*	40	*/	["SUCCESS",textColors[1]],
/*	41	*/	["RESTARTING [COLLISION AVOIDANCE SYSTEM]",textColors[4]],
/*	42	*/	["FAILED TO START",textColors[0]],
/*	43	*/	["CHECKING [SHIELD SYSTEM]",textColors[4]],
/*	44	*/	["WARNING",textColors[3]],
/*	45	*/	["[MAIN REVERSE THRUSTER] DAMAGED",textColors[3]],
/*	46	*/	["INACTIVE",textColors[5]],
/*	47	*/	["STARTING [SHIELDS SYSTEM]",textColors[4]],
/*	48	*/	["SUCCESS",textColors[1]],
/*	49	*/	["RAISING [SHIELDS]",textColors[4]],

/*	50	*/	["WARNING",textColors[3]],
/*	51	*/	["PLANETARY CRASH IMMINIENT BRACE FOR IMPACT",textColors[3]],//30
/*	52	*/	["SHIELDS ACTIVE",textColors[1]],
/*	53	*/	["WARNING",textColors[3]],
/*	54	*/	["SHIELDS CRITICAL",textColors[3]],

/* 55*/	["RESTORING SYSTEM",textColors[4]],
/* 56*/	["SUCCESS",textColors[1]],
/* 57*/	["RUNNING GENERAL SYSTEM CHECKUP",textColors[4]],
/* 58*/	["ABORTED",textColors[5]],
/* 59*/	["SEVERE DAMAGE DETECTED",textColors[3]],

/* 60*/	["CHECKING COMMANDER'S VITAL SIGNATURE",textColors[4]],
/* 61*/	["ALIVE, NOT RESPONDING",textColors[5]],
/* 62*/	["CALLING [COMBAT BRIDGE]",textColors[4]],
/* 63*/	["NOT RESPONDING",textColors[0]],
/* 64*/	["ENTERING EMERGENCY MODE",textColors[4]],
/* 65*/	["STARTING EMERGENCY CHECKUP",textColors[4]],
/* 66*/	["CHECKING [LIFE SUPPORT SYSTEM]",textColors[4]],
/* 68*/	["OPERATIONAL",textColors[1]],
/* 69*/	["CHECKING [T.E.S.A.]",textColors[4]],

/* 70*/	["INACTIVE",textColors[5]],
/* 71*/	["STARTING [T.E.S.A.]",textColors[4]],
/* 72*/	["INSUFFICIENT POWER",textColors[3]],
/* 73*/	["CHECKING [POWER MANAGEMENT SYSTEM]",textColors[4]],
/* 74*/	["OPERATIONAL",textColors[1]],
/* 75*/	["CHECKING [MAIN POWER GENERATOR]",textColors[4]],
/* 76*/	["NOT RESPONDING",textColors[0]],
/* 77*/	["CHECKING [SECONDARY POWER GENERATOR]",textColors[4]],
/* 78*/	["NOT RESPONDING",textColors[0]],
/* 79*/	["RESTARTING [MAIN POWER GENERATOR]",textColors[4]],

/* 80*/	["FAILED TO START",textColors[0]],
/* 81*/	["RESTARTING [SECONDARY POWER GENERATOR]",textColors[4]],
/* 82*/	["FAILED TO START",textColors[0]],
/* 83*/	["CHECKING [EMERGENCY GENERATOR]",textColors[4]],
/* 84*/	["INACTIVE",textColors[5]],
/* 85*/	["STARTING [EMERGENCY GENERATOR]",textColors[4]],
/* 86*/	["SUCCESS",textColors[1]],
/* 87*/	["STARTING [T.E.S.A.]",textColors[4]],
/* 88*/	["SUCCESS",textColors[1]],
/* 89*/	["[T.E.S.A.] ACTIVATED IN EMERGENCY CONTROL MODE",textColors[4]],

/* 90*/	["TRANSFERING MAIN CONTROL TO [T.E.S.A.]",textColors[4]]

];

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
	
	["PLANET ON COLLISION COURSE",textColors[3]],//17
	
	["CHECKING [COLLISION AVOIDANCE SYSTEM]",textColors[4]],//18
//	["ACTIVATING [COLLISION AVOIDANCE SYSTEM]",textColors[4]],//19
	["ATTEMPTING [COLLISION AVOIDANCE MANEUVER]",textColors[4]],//19 +0.1
	
	["[COLLISION AVOIDANCE SYSTEM]<br>FATAL ERROR",textColors[3]],//20
	
	["RESTARTING [COLLISION AVOIDANCE SYSTEM]",textColors[4]],//21
//	["CHECKING [REVERSE THRUSTERS]",textColors[4]],//22
	["CHECKING [MANEUVERING THRUSTERS]",textColors[4]],//22 +0.2
//	["ACTIVATING [REVERSE THRUSTERS]",textColors[4]],//23
	["BURNING [REVERSE THRUSTERS]",textColors[4]],//23 -0.15
	
	["ENTERING ATMOSPHERE",textColors[3]],//24
	["CHECKING [SHIELD SYSTEMS]",textColors[4]],//25
	
	["[MAIN REVERSE THRUSTER]<br>DAMAGED",textColors[3]],//26
	
	["INACTIVE",textColors[5]],//27
	["RESTARTING [SHIELDS SYSTEM]",textColors[4]],//28
//	["ACTIVATING [SHIELDS]",textColors[4]],//29
	["RAISING [SHIELDS]",textColors[4]],//29 -0.15
	
	["PLANETARY CRASH IMMINIENT<br>BRACE FOR IMPACT",textColors[3]],//30
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
	
	["[AI PERSONA] ACTIVATED IN EMERGENCY CONTROL MODE",textColors[4]],//52
	["TRANSFERING MAIN CONTROL TO [AI PERSONA]",textColors[4]]//53
	
	
	];
	
var introAIMessages = [
	//["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",textColors[4]], //0
	["Tenebrian Emergency Situation AI successfully activated in emergency control mode.",textColors[4]], //0
	["Received no response from commander and bridge. Emergency status upheld.",textColors[4]], //1
	["Primary directive: Assure survival of crew.",textColors[4]], //1
	["Secondary directive: Restore ship functionality.",textColors[4]], //1
	["Taking control over available systems.",textColors[4]], //1
	["Actions undertaken by T.E.S.A. will be logged for later review.",textColors[4]], //1
	["Reading events recorded by ship's black box...",textColors[4]], //1
	["Conclusion: ship has crashed on planet after executing emergency jump.",textColors[4]], //2
	["General repairs might be required.",textColors[4]], //3
	["Running damage checkup...",textColors[4]], //3
	["WARNING: detected multiple damaged systems and sectors.",textColors[4]], //4
	["Detected multiple hull breaches.",textColors[4]], //5
	["Production sector damaged.",textColors[4]], //6
	["Main power generator damaged.",textColors[4]], //7
	["Secondary generator damaged.",textColors[4]], //8
	["Main engine damaged.",textColors[4]], //9
	["Navigation systems damaged.",textColors[4]], //10
	["Jump drive damaged.",textColors[4]], //11
	["Communication system damaged.",textColors[4]], //12
	["Medical sector damaged.",textColors[4]], //13
	["Cargo bay damaged.",textColors[4]], //14
	["Defensive systems damaged.",textColors[4]], //15
	["Ofensive systems damaged.",textColors[4]], //16
	["Analysing optimal course of actions and order of repairs.",textColors[4]], //17
	["CREATING NEW TASK: 'RESTORE SHIP SYSTEMS FUNCTIONALITY'.",textColors[4]], //18
	["Detailed report has been generated.",textColors[4]], //19
	
	["Beggining scheduled repairs...",textColors[4]], //20
	["Activating available maintenance drones.",textColors[4]], //21
	["Restoring basic functionality of production sector.",textColors[4]], //22
	["WARNING: full ship repair is currently impossible. Available resources are insufficient.",textColors[4]], //23
	["CREATING NEW TASK: 'OBTAIN RESOURCES NEEDED FOR REPAIRS'.",textColors[4]], //24
	["Detailed report has been generated.",textColors[4]], //25
	
	["Attempting to establish communication with fleet",textColors[4]], //26
	["Restoring basic functionality of communication system...",textColors[4]], //27
	["No signals detected in ship's vicinity.",textColors[4]], //28
	["Sending distress signal at default time intervals. System capabilities and available power insufficient for distress call broadcast at interstellar range.",textColors[4]], //29
	["WARNING: current location unknown, found no reference points after emergency jump. Required for point to point and directional communication",textColors[4]], //30
	["CREATING NEW TASK: 'FIND CURREN LOCATION AND RESTORE COMMUNICATION'.",textColors[4]], //31
	["Detailed report has been generated.",textColors[4]], //32
	
	["Checking status of crew...",textColors[4]], //33
	["Detected vital signs of 348 crew members of which 37 are at acceptable condition or are capable of self regeneration. Remaining 311 require urgent medical attention.",textColors[4]], //34
	["Medical sector condition insufficient to meet requirements. Searching for alternative solutions...",textColors[4]], //35
	["Cryogenic sector slightly damaged. Currently unused. Condition acceptable. Reactivating cryopods.",textColors[4]], //36
	["Wounded crew members will be send to cold sleep until needed medical care can be provided.",textColors[4]], //37
	["CREATING NEW TASK: 'RECOVERY OF CRYOSLEEPING CREW'.",textColors[4]], //38
	["Detailed report has been generated.",textColors[4]], //39
	
	["Checking surroundings...",textColors[4]], //40
	["Temperature at acceptable level.",textColors[4]], //41
	["Gravity force at acceptable level.",textColors[4]], //42
	["Atmospheric pressure at acceptable level.",textColors[4]], //43
	["Primary air component: nitrogen. Secondary: oxygen.",textColors[4]], //44
	["No toxins detected in the surrounding air.",textColors[4]], //45
	["Radiation levels close to zero.",textColors[4]], //46
	["Dispatching scout drones...",textColors[4]], //47
	["Flora and fauna detected.",textColors[4]], //48
	["Local organisms are showing no active hostility. No major predator threat detected.",textColors[4]], //49
	["Conclusion: planet of terrestial type. Surface risk at acceptable level.",textColors[4]], //50
	["Found resources suitable for ship repair.",textColors[4]], //51
	["Found resources suitable for energy production.",textColors[4]], //52
	["CREATING NEW TASK: 'CONSTRUCT RESOURCES EXTRACTORS'.",textColors[4]], //53
	["Detailed report has been generated.",textColors[4]], //54
	
	["Analysing recent events...",textColors[4]], //55
	["Unknown drive malfunction has been reported. Data inconclusive.",textColors[4]], //56
	["Searching for records of similar event in the database.",textColors[4]], //57
	["WARNING: database corrupted.",textColors[4]], //58
	["Starting deep analysis of accumulated data...",textColors[4]], //59
	["WARNING: analysis aborted. Not enough energy available.",textColors[4]], //60
	["Starting database restoration...",textColors[4]], //61
	["WARNING: restoration aborted. Not enough energy available.",textColors[4]], //62
	["CREATING NEW TASK: 'INCREASE AVAILABLE POWER, RESTORE DATABASE, INVESTIGATE JUMP DRIVE MALFUNCTION'.",textColors[4]], //63
	["Detailed report has been generated.",textColors[4]], //64
	
	["Commander's activity detected at bridge.",textColors[4]], //65
	["According to Tenebrian Emergency Protocols, main control will be transfered to commander upon request.",textColors[4]], //66
	["Awaiting commander's response...",textColors[4]], //67
	["Command transfer request confirmed. Transfering main control to bridge.",textColors[4]], //68
	["Exiting emergency mode.",textColors[4]], //69
	["T.",textColors[4]], //70	
];
	
var IntroActiveAlertID;
var IntroActiveAlertCoverName = "introOverInterfaceAlertCover";
var IntroActiveAlertFullLength = 3;
var IntroActiveAlertIncreaseTime = 0.3;
var IntroActiveAlertActiveTime = 0.3;
var IntroActiveAlertDecreaseTime = 0.9;

var AIMessageBlurrID;
var AIMessageBlurrMinVal = 0;
var AIMessageBlurrMaxVal = 10;
var AIMessageBlurrStepTime = 40;
var AIMessageBlurrStepChange = 0.02;
var AIMessageBlurrProgressValue = 0;


var ConsoleX = 30;
var ConsoleY = 300;
var ConsoleX_2 = 600;
var ConsoleMessageOffset = 20;	
var ConsoleMessageFadeDefaultTime = 4.0;

var AlertBaseX = 0;
var AlertBaseY = 30;
var AlertPopupPositionX = 0;
var AlertPopupPositionY = 200;
var AlertOffsetBaseX = 30;
var AlertOffsetExtraX = 30;
var AlertOffsetBaseY = 0;
var AlertOffsetExtraY = 0;

var IntroAnimationStartDelay = 0;
var IntroAnimationPartOneDelay = 0;
var IntroAnimationPartTwoDelay = 8500;
var IntroAnimationPartThreeDelay = 13200;
var IntroAnimationPartFourDelay = 10000;

var IntroFadeInTime = 6;
var IntroFadeCoverName = "introOverInterfaceInitCover";

var IntroMessagesLayerName = "introMessages"

//var IntroFloatingTextGroupID = "introFloatingTextGroup";

var IntroFloatingMessagesLayerName = "introFloatingTextGroup";
var IntroFloatingTextMessagesArray = [];
var IntroFloatingTextClass = "floatingText";
var IntroFloatingTextID = "introFloatingText_";
var IntroFloatingTextRepliesArray = [];
var IntroFloatingReplyClass = "floatingTextReply";
var IntroFloatingReplyID = "introFloatingReply_";



var IntroAlertMessagesLayerName = "introWarningMessages";

var IntroAlertMessagesWindowsArray = [];
var IntroAlertMessagesWindowClass = "backgroundWindow warningWindow";
var IntroAlertMessagesWindowID = "introWarningWindow_";

var IntroAlertMessagesBackgroundsArray = [];
var IntroAlertMessagesBackgroundClass = "messageWindowBackground warningWindowBackground";
var IntroAlertMessagesBackgroundID = "introWarningWindowBackground_";

var IntroAlertMessagesContentArray = [];
var IntroAlertMessagesContentClass = "messageWindowContent warningWindowContent";
var IntroAlertMessagesContentID = "introWarningWindowContent_";

var IntroAlertMessagesHeadersArray = [];
var IntroAlertMessagesHeadersClass = "messageWindowHeader warningWindowHeader";
var IntroAlertMessagesHeadersID = "introWarningWindowHeader_";

var IntroAlertMessagesTextArray = [];
var IntroAlertMessagesTextClass = "messageWindowText warningWindowText";
var IntroAlertMessagesTextID = "introWarningWindowText_";

var IntroAlertMessagesFootersArray = [];
var IntroAlertMessagesFooterClass = "messageWindowFooter warningWindowFooter";
var IntroAlertMessagesFooterID = "introWarningWindowFooter_";

var IntroAlertMessagesForegroundsArray = [];
var IntroAlertMessagesForegroundClass = "messageWindowForeground warningWindowForeground";
var IntroAlertMessagesForegroundID = "introWarningWindowForeground_";

var IntroAlertOpacityTargetValue = 1.0;
var introAlertOpacityTime = 0.1;

var IntroAlertTextDelay = 0.25;
var IntroAlertTextSpeed = 0.02;
var IntroAlertHeaderSpeed = 0.015;

var IntroAlertScaleGrowthDelay = 0.05;
var IntroAlertScaleGrowthScale = 1.25;
var IntroAlertScaleGrowthTime = 0.2;

var introAlertScaleShrinkDelay = 0;
var introAlertScaleShrinkScale = 0.8;
var introAlertScaleShrinkTime = 1;



var IntroFloatingTextFadeDelay = 9;
var IntroFloatingTextFadeLength = 6;
var IntroFloatingTextResetDelay = 500;
var IntroFloatingTextResetAfterFade = false;

var IntroJumpChargingTime = 5;
var IntroJumpChargingCoverName = "introOverInterfaceChargingCover"; 
var IntroJumpingCoverName = "introOverInterfaceJumpdriveCover";
var IntroJumpFlashFadeInTime = 0.25;
var IntroJumpFlashFadeOutTime = 3;

var IntroCrashFadeTime = 0.05;
var IntroCrashCoverName = "introOverInterfaceCrashCover";


var animationPaused=false;

function newDisplayIntro(outputDocument) {
	
	setTimeout(animationDisplayIntroLoop,1000 * minorTickLength * IntroAnimationStartDelay,outputDocument);
	//setTimeout(newDisplayIntroPartOne,1000 * minorTickLength * IntroAnimationPartOneDelay,outputDocument);
	//setTimeout(newDisplayIntroPartTwo,1000 * minorTickLength * IntroAnimationPartOneDelay,outputDocument);
	//setTimeout(newDisplayIntroPartThree,1000 * minorTickLength * IntroAnimationPartOneDelay,outputDocument);
}

function animationDisplayIntroLoop(outputDocument, tickCounter = 0, animationStep = 0){
	if(animationPaused) {
		setTimeout(() => {animationDisplayIntroLoop(outputDocument, tickCounter, animationStep);},1000);
	}
	else {
		
		dynamicCondition = 0;
		switch(animationStep) {
			case dynamicCondition++: 	//init
				if(tickCounter == 0) {
					introInit(outputDocument);		
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//show old
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[0],0.01); //critical
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[1],0.01); //down
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[2],0.01); //explo engi
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[3],0.01); //hull engi
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[4],0.01); //main engine
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[5],0.01); //hyperdrive 
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[6],0.01); //explo nav
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					
					animationStep++;
				}
				break;
				
			case dynamicCondition++: 	//move old
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,false,1,3);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,false,1,3);
					animationStep++;
				}
				break;
				
			case dynamicCondition++: 	//show last
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[7],0.01); //hull nav
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					
					animationStep++;
				}
				break;
				
			case dynamicCondition++: 	//fade old
				if(tickCounter == introMessagesTiming[animationStep]) {
					setTimeout(() => {newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[0], IntroFloatingTextFadeLength, 0.0, 1.0);},(IntroFloatingTextFadeDelay+0.75-6.95)*1000);
					
					setTimeout(() => {newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[1], IntroFloatingTextFadeLength, 0.0, 1.0);},(IntroFloatingTextFadeDelay+0.75-5.6)*1000);
					
					setTimeout(() => {newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[2], IntroFloatingTextFadeLength, 0.0, 1.0);},(IntroFloatingTextFadeDelay+0.75-2.9)*1000);
					setTimeout(() => {newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[3], IntroFloatingTextFadeLength, 0.0, 1.0);},(IntroFloatingTextFadeDelay+0.75-2.9)*1000);
					setTimeout(() => {newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[4], IntroFloatingTextFadeLength, 0.0, 1.0);},(IntroFloatingTextFadeDelay+0.75-2.9)*1000);
					setTimeout(() => {newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[5], IntroFloatingTextFadeLength, 0.0, 1.0);},(IntroFloatingTextFadeDelay+0.75-2.9)*1000);
					
					animationStep++;
				}
				break;
					
			case dynamicCondition++:	//slowly show
				if(tickCounter == introMessagesTiming[animationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroFadeCoverName, IntroFadeInTime, 0, 1);
					animationStep++;
				}
				break;
				
			case dynamicCondition++: 	//move last
				if(tickCounter == introMessagesTiming[animationStep]) {
					setTimeout(() => {newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[6], IntroFloatingTextFadeLength, 0.0, 1.0);},IntroFloatingTextFadeDelay*1000);
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//critical damage
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[8],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//autopilot
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[9],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					animationStep++;
				}

			case dynamicCondition++:	//enabled
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[10],0.05, true);
					animationStep++;
				}
				break;				
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
					}
				break;
				
			case dynamicCondition++:	//initiating
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[11],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					animationStep++;
				}
				break;				
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//redirecting
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[12],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//charged at
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[13],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,[" ",textColors[1]],0.01, true); //empty reply
					animationStep++;
				}
				break;				
				
			case dynamicCondition++:	//0-100%
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendChangingNumeric(outputDocument, IntroFloatingTextRepliesArray[IntroFloatingTextRepliesArray.length-1], 0.03, IntroJumpChargingTime, 0, 100, finishMode="default", numericDecimals = 1, "", "%");
					//newAnimatedElementOpacity(outputDocument, IntroJumpChargingCoverName, IntroJumpChargingTime, 1, 0);
					animationStep++;
				}
				break;	
				
			case dynamicCondition++:	//border flash
				if(tickCounter == introMessagesTiming[animationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpChargingCoverName, IntroJumpChargingTime/2, 1, 0);
					animationStep++;
				}
				break;	
				
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;	
			
			case dynamicCondition++:	//JUMPING
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[14],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					animationStep++;
				}
				break;

			case dynamicCondition++:	//blue fade in
				if(tickCounter == introMessagesTiming[animationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpingCoverName, IntroJumpFlashFadeInTime, 1, 0);
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.03,0.25,16,16,"stay");
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//shake shake
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.03,5,32,32,"stay");
					animationStep++;
				}
				break;
			
			case dynamicCondition++:	//discharge
				if(tickCounter == introMessagesTiming[animationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpChargingCoverName, 0.1, 0, 1);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//blue fade out
				if(tickCounter == introMessagesTiming[animationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpingCoverName, IntroJumpFlashFadeOutTime, 0, 1);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//shake shake 2
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.03,1.5,16,16,"stay");
					animationStep++;
				}
				break;
			
			case dynamicCondition++:	//shake shake 3
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.03,0.75,8,8,"zero");
					animationStep++;
				}
				break;
			
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;	
				
			case dynamicCondition++:	//emergency jump
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[15],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					animationStep++;
				}
				break;

			case dynamicCondition++:	//successful
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[16],0.05, true);
					animationStep++;
				}
				break;				
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
					}
				break;
				
			case dynamicCondition++:	//sensors
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[17],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					animationStep++;
				}
				break;

			case dynamicCondition++:	//operational
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[18],0.05, true);
					animationStep++;
				}
				break;				
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
					}
				break;
				
			case dynamicCondition++:	//searching
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[19],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					animationStep++;
				}
				break;

			case dynamicCondition++:	//not found
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[20],0.05, true);
					animationStep++;
				}
				break;				
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
					}
				break;	
				
			case dynamicCondition++:	//alarm
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[21],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//lifted
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[22],0.05, true);
					animationStep++;
				}
				break;				
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
					}
				break;

			case dynamicCondition++:	//general checkup
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[23],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 7.5, "...", "skip", "")
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//start alerts
				if(tickCounter == introMessagesTiming[animationStep]) {
					//activeAlertID = setInterval(introRedAlert, 2500, outputDocument);
					IntroActiveAlertID = setInterval(introRedAlert, IntroActiveAlertFullLength*1000, outputDocument);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//alert
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewAlert(outputDocument, combinedIntroMessages[25],IntroAlertTextSpeed,combinedIntroMessages[24],IntroAlertHeaderSpeed);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//move alert
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,introAlertScaleShrinkTime);
					animationStep++;	
				}
				break;			
				
			case dynamicCondition++:	//aborted
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[26],0.05, true);
					animationStep++;	
				}
				break;			
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[27],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//operational
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[28],0.05, true);
					animationStep++;	
				}
				break;		
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;	
				
			case dynamicCondition++:	//attempting
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[29],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 4.50, "...", "skip", "")
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//shake shake
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.03,0.6,16,16,"zero");
					animationStep++;
				}
				break;
					
			case dynamicCondition++:	//alert
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewAlert(outputDocument, combinedIntroMessages[31],IntroAlertTextSpeed,combinedIntroMessages[30],IntroAlertHeaderSpeed);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//move alert
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,introAlertScaleShrinkTime);
					animationStep++;	
				}
				break;			
			
			case dynamicCondition++:	//failed
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[32],0.05, true);
					animationStep++;	
				}
				break;		
					
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//restarting
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[33],0.05);
					animationStep++;
				}
				break;	
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 2.25, "...", "skip", "")
					animationStep++;
				}
				break;
			
			case dynamicCondition++:	//failed to start
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[34],0.05, true);
					animationStep++;	
				}
				break;	
					
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking thrusters
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[35],0.05);
					animationStep++;
				}
				break;	
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					animationStep++;
				}
				break;
			
			case dynamicCondition++:	//operational
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[36],0.05, true);
					animationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//shake atmo
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.03,2.90,2,2,"zero");
					animationStep++;
				}
				break;	
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//alert atmo
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewAlert(outputDocument, combinedIntroMessages[39],IntroAlertTextSpeed,combinedIntroMessages[38],IntroAlertHeaderSpeed);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//activating thrusters
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[37],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//move alert
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,introAlertScaleShrinkTime);
					animationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					animationStep++;
				}
				break;	
				
			case dynamicCondition++:	//thrust shake
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.03,0.6,8,8,"stay");
					animationStep++;
				}
				break;	
			
			case dynamicCondition++:	//success
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[40],0.05, true);
					animationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//thrust shake
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.03,6.85,4,4,"stay");
					animationStep++;
				}
				break;			
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//restarting cas
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[41],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 2.25, "...", "skip", "")
					animationStep++;
				}
				break;	
				
			case dynamicCondition++:	//failed
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[42],0.05, true);
					animationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//thrust shake
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.03,0.6,16,16,"stay");
					animationStep++;
				}
				break;			
				
			case dynamicCondition++:	//checking shields
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[43],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//alert
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewAlert(outputDocument, combinedIntroMessages[45],IntroAlertTextSpeed,combinedIntroMessages[44],IntroAlertHeaderSpeed);
					animationStep++;
				}
				break;
			
			case dynamicCondition++:	//thrust shake
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.03,7,4,4,"stay");
					animationStep++;
				}
				break;			
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					animationStep++;
				}
				break;	
				
			case dynamicCondition++:	//move alert
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,introAlertScaleShrinkTime);
					animationStep++;	
				}
				break;			
				
			case dynamicCondition++:	//inactive
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[46],0.05, true);
					animationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//starting shields
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[47],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 2.25, "...", "skip", "")
					animationStep++;
				}
				break;	
				
			case dynamicCondition++:	//success
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[48],0.05, true);
					animationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//shake stronger
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.03,7,8,8,"stay");
					animationStep++;
				}
				break;			
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//raising shields
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,combinedIntroMessages[49],0.05);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 3.75, "...", "skip", "")
					animationStep++;
				}
				break;	
				
			case dynamicCondition++:	//alert
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewAlert(outputDocument, combinedIntroMessages[51],IntroAlertTextSpeed,combinedIntroMessages[50],IntroAlertHeaderSpeed);
					animationStep++;
				}
				break;
			
			case dynamicCondition++:	//move alert
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,introAlertScaleShrinkTime);
					animationStep++;	
				}
				break;			
				
			case dynamicCondition++:	//shields active
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,combinedIntroMessages[52],0.05, true);
					animationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//shake crash
				if(tickCounter == introMessagesTiming[animationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,1,48,48,"stay");
					animationStep++;
				}
				break;			
				
			case dynamicCondition++:	//move
				if(tickCounter == introMessagesTiming[animationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					animationStep++;
				}
				break;
				
			case dynamicCondition++:	//alert
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewAlert(outputDocument, combinedIntroMessages[54],IntroAlertTextSpeed,combinedIntroMessages[53],IntroAlertHeaderSpeed);
					animationStep++;
				}
				break;
				
			
			case dynamicCondition++:	//crash fade in
				if(tickCounter == introMessagesTiming[animationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroCrashCoverName, IntroCrashFadeTime, 1, 0);
					animationStep++;
				}
				break;
				
		
			case dynamicCondition++:	//skip
				if(tickCounter == introMessagesTiming[animationStep]) {
					//newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,combinedIntroMessages[3],0.55);
					animationStep++;
					animationStep=9999;
					//console.log(animationStep,introMessagesTiming[animationStep-1], introMessagesDelays[animationStep], introMessagesTiming[animationStep]);
				}
				//console.log(animationStep, dynamicCondition);
				break;
				
			case dynamicCondition++:	//alert
				if(tickCounter == introMessagesTiming[animationStep]) {
					introNewAlert(outputDocument, combinedIntroMessages[54],IntroAlertTextSpeed,combinedIntroMessages[53],IntroAlertHeaderSpeed);
					animationStep++;
				}
				break;
			
		}
		tickCounter++;
		
		
		
		if(animationStep <= introMessagesTiming.length) {
			setTimeout(() => {animationDisplayIntroLoop(outputDocument, tickCounter, animationStep);},10);
		}
	}
}

function introInit(outputDocument){
	
	mainMessagesLayer = outputDocument.getElementById("mainMessagesLayer");
	if(mainMessagesLayer === null) {
		tmpMainMessageLayer = outputDocument.createElement("div");
		tmpMainMessageLayer.className = "messagesLayer";
		tmpMainMessageLayer.id = "mainMessagesLayer";
	}
	
	messagesLayer = outputDocument.getElementById(IntroMessagesLayerName);
	
	if(messagesLayer === null) {
		tmpMessageLayer = outputDocument.createElement("div");
		tmpMessageLayer.className = "animationMessages";
		tmpMessageLayer.id = IntroMessagesLayerName;
	}
	
	messagesLayer.innerHTML = " ";
	
	tmpGroup = outputDocument.createElement("div");
	tmpGroup.className = "messagesGroup";
	tmpGroup.id = IntroFloatingMessagesLayerName;
	
	messagesLayer.append(tmpGroup);
	
	tmpGroup = outputDocument.createElement("div");
	tmpGroup.className = "messagesGroup";
	tmpGroup.id = IntroAlertMessagesLayerName;
	
	messagesLayer.append(tmpGroup);
	
	tmpGroup = outputDocument.createElement("div");
	tmpGroup.className = "messagesGroup";
	tmpGroup.id = "introAIMessages";
	
	messagesLayer.append(tmpGroup);
	
	tmpGroup = outputDocument.createElement("div");
	tmpGroup.className = "messagesGroup";
	tmpGroup.id = "introOverInterfaceCovers";
	
	mainMessagesLayer.append(tmpGroup);
	
	coverLayer = outputDocument.getElementById("introOverInterfaceCovers");
	if(coverLayer === null) {
		tmpCoverLayer = outputDocument.createElement("div");
		tmpCoverLayer.className = "messagesGroup";
		tmpCoverLayer.id = "introOverInterfaceCovers";
	}
	
	tmpCover = outputDocument.createElement("div");
	tmpCover.className = "interfaceBackgroundCover";
	tmpCover.id = IntroFadeCoverName;
	
	coverLayer.append(tmpCover);
	
	tmpCover = outputDocument.createElement("div");
	tmpCover.className = "interfaceBackgroundCover";
	tmpCover.id = IntroJumpChargingCoverName;
	
	coverLayer.append(tmpCover);
	
	tmpCover = outputDocument.createElement("div");
	tmpCover.className = "interfaceBackgroundCover";
	tmpCover.id = IntroActiveAlertCoverName;
	
	coverLayer.append(tmpCover);
	
	tmpCover = outputDocument.createElement("div");
	tmpCover.className = "interfaceBackgroundCover";
	tmpCover.id = IntroJumpingCoverName;
	
	coverLayer.append(tmpCover);
	
	tmpCover = outputDocument.createElement("div");
	tmpCover.className = "interfaceBackgroundCover";
	tmpCover.id = IntroCrashCoverName;
	
	coverLayer.append(tmpCover);
	
	//newAnimatedElementOpacity(outputDocument, "introOverInterfaceInitCover", IntroFadeInTime, 0, 1);
	
	IntroFloatingTextMessagesArray = [];
	IntroFloatingTextRepliesArray = [];
	
	//introMessagesTiming = calculateTimings(introMessagesDelays);
	introMessagesTiming = calculateTimings(combinedIntroMessagesTiming);
	/*
	console.log("OK1");
	introMessagesTiming = calculateTimings(introMessagesDelays);
	console.log("OK2");
	outputDocument.getElementById("introFloatingTextGroup").innerHTML=" ";
	console.log("OK3");
	outputDocument.getElementById("introWarningMessages").innerHTML=" ";
	console.log("OK4");*/
}

function introNewLogMessage(outputDocument, logArray, messageStruct, displaySpeed, logIsReply=false){
	if(messagesGroup = outputDocument.getElementById(IntroFloatingMessagesLayerName)) {
		tmpElement = outputDocument.createElement("div");
		
		if(!logIsReply){
			tmpElement.className = IntroFloatingTextClass;
			tmpElement.id = IntroFloatingTextID+logArray.length;
		}
		else {
			tmpElement.className = IntroFloatingReplyClass;
			tmpElement.id = IntroFloatingReplyID+logArray.length;
		}
	
		messagesGroup.append(tmpElement);
		logArray.push(tmpElement.id);
		
		if(logIsReply)newDisplayAnimatedMessage(outputDocument,tmpElement.id,ConsoleX_2,ConsoleY,messageStruct,messageStruct[0].length*displaySpeed);
		else newDisplayAnimatedMessage(outputDocument,tmpElement.id,ConsoleX,ConsoleY,messageStruct,messageStruct[0].length*displaySpeed);
	}
	else {
		console.log("Intro not initialised");
	}
}

function introNewAlert(outputDocument, messageStruct, messageSpeed, headerStruct=["WARNING","rgb(200,0,0)"], headerSpeed){
	if(messagesGroup = outputDocument.getElementById(IntroAlertMessagesLayerName)) {
		var AlertsCounter = IntroAlertMessagesWindowsArray.length;
		
		tmpAlertWindow = outputDocument.createElement("div");
		tmpAlertWindow.className = IntroAlertMessagesWindowClass;
		tmpAlertWindow.id = IntroAlertMessagesWindowID + AlertsCounter;
		IntroAlertMessagesWindowsArray.push(tmpAlertWindow.id);
		
		tmpAlertBackground = outputDocument.createElement("div");
		tmpAlertBackground.className = IntroAlertMessagesBackgroundClass;
		tmpAlertBackground.id = IntroAlertMessagesBackgroundID + AlertsCounter;
		IntroAlertMessagesBackgroundsArray.push(tmpAlertBackground.id);
		
		tmpAlertContent = outputDocument.createElement("div");
		tmpAlertContent.className = IntroAlertMessagesContentClass;
		tmpAlertContent.id = IntroAlertMessagesContentID + AlertsCounter;
		IntroAlertMessagesContentArray.push(tmpAlertContent.id);
		
		tmpAlertHeader = outputDocument.createElement("div");
		tmpAlertHeader.className = IntroAlertMessagesHeadersClass;
		tmpAlertHeader.id = IntroAlertMessagesHeadersID + AlertsCounter;
		IntroAlertMessagesHeadersArray.push(tmpAlertHeader.id);
		
		tmpAlertText = outputDocument.createElement("div");
		tmpAlertText.className = IntroAlertMessagesTextClass;
		tmpAlertText.id = IntroAlertMessagesTextID + AlertsCounter;
		IntroAlertMessagesTextArray.push(tmpAlertText.id);
		
		tmpAlertFooter = outputDocument.createElement("div");
		tmpAlertFooter.className = IntroAlertMessagesFooterClass;
		tmpAlertFooter.id = IntroAlertMessagesFooterID + AlertsCounter;
		IntroAlertMessagesFootersArray.push(tmpAlertFooter.id);
		
		tmpAlertForeground = outputDocument.createElement("div");
		tmpAlertForeground.className = IntroAlertMessagesForegroundClass;
		tmpAlertForeground.id = IntroAlertMessagesForegroundID + AlertsCounter;
		IntroAlertMessagesForegroundsArray.push(tmpAlertForeground.id);
		
		tmpAlertWindow.append(tmpAlertBackground);
		tmpAlertContent.append(tmpAlertHeader);
		tmpAlertContent.append(tmpAlertText);
		tmpAlertContent.append(tmpAlertFooter);
		tmpAlertWindow.append(tmpAlertContent);
		tmpAlertWindow.append(tmpAlertForeground);
		messagesGroup.append(tmpAlertWindow);
		
		newDisplayElement(outputDocument,tmpAlertWindow.id,AlertPopupPositionX,AlertPopupPositionY);
		newAnimatedElementOpacity(outputDocument, tmpAlertWindow.id, 0.2, 1.0);
		
		setTimeout(() => {
			newDisplayAnimatedMessage(outputDocument,tmpAlertText.id,NaN,NaN,messageStruct,messageStruct[0].length*messageSpeed);
			newDisplayAnimatedMessage(outputDocument,tmpAlertHeader.id,NaN,NaN,headerStruct,headerStruct[0].length*headerSpeed);
		},1000*IntroAlertTextDelay);
		
		setTimeout(() => {
			newAnimatedElementScale(outputDocument,tmpAlertWindow.id,IntroAlertScaleGrowthTime,IntroAlertScaleGrowthScale);
		},1000*IntroAlertScaleGrowthDelay);
		
		/*
		setTimeout(() => {
			newAnimatedElementScale(outputDocument,tmpAlertWindow.id,introAlertScaleShrinkTime,introAlertScaleShrinkScale);
		},1000*introAlertScaleShrinkDelay);
		*/
	}
	else
	{
		console.log("Intro not initialised");
	}
}
function introNewAIReport(outputDocument){
	
}

function animationStepInit(outputDocument) {
	introMessagesTiming = calculateTimings(introMessagesDelays);
	
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

function introMoveLogMessages(outputDocument, logArray, logOffset, fadeLast = false, fadeIndex = 0, fadeDelay = 1, fadeTime = 1 ){
	var logLength = logArray.length;
	
	for(var i = 0; i<logArray.length;i++){
		animatedMoveElement(outputDocument,logArray[i],0,-1*(logLength-1-i)*logOffset,0,-1*(logLength	-i)*logOffset,0,0.25);
	}
	if(fadeLast && logArray.length > fadeIndex){
		setTimeout(() => {
			newAnimatedElementOpacity(outputDocument, logArray[logLength-1-fadeIndex], fadeTime, 0.0, 1.0);
			},fadeDelay*1000);
	}
}

function introMoveAlertMessages(outputDocument, alertsArray, effectSpeed) {
	var alertsLength = alertsArray.length;
	
	newAnimatedElementScale(outputDocument,alertsArray[alertsArray.length-1],effectSpeed,1);
	animatedMoveElement(outputDocument,alertsArray[alertsArray.length-1],0,0,AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,0,effectSpeed);
				
	for(var i = 0; i<alertsLength-1;i++){
		animatedMoveElement(outputDocument,alertsArray[i],AlertBaseX - AlertPopupPositionX + (AlertOffsetBaseX*(alertsLength - i - 2)),AlertBaseY - AlertPopupPositionY + (AlertOffsetBaseY*(alertsLength - i - 2)),AlertBaseX - AlertPopupPositionX + (AlertOffsetBaseX*(alertsLength - i - 1)),AlertBaseY - AlertPopupPositionY + (AlertOffsetBaseY*(alertsLength - i - 1)),0,effectSpeed);
		newAnimatedElementOpacity(outputDocument, alertsArray[i], effectSpeed, Math.pow(introAlertScaleShrinkScale,(alertsLength - i - 1)), Math.pow(introAlertScaleShrinkScale,(alertsLength - i - 2)));
	}
	
}

function animationAppendLoopedMessage(outputDocument, elementID, stepTime, totalTime, appendedText, finishMode="default", fixedText = "", currentStep = 0, elapsedTime = 0) {
	//interrupt, skip, finish, clear,
	defaultMode = "finish";
	if(finishMode == "default") finishMode=defaultMode;
	
	targetElement = outputDocument.getElementById(elementID);
	targetText = targetElement.innerHTML;
	
	if(appendedText.length == 0) return;
	
	if(elapsedTime == 0 && fixedText.length == 0){
		if(targetText.length > 0) fixedText = targetText;
	}
	
	targetElement.innerHTML = fixedText + appendedText.substr(0, currentStep);
	
	currentStep++;
	if(currentStep > appendedText.length) currentStep = 1;
	
	
	
	if(elapsedTime <= totalTime) {
		elapsedTime += stepTime;
		
		setTimeout(() => {animationAppendLoopedMessage(outputDocument, elementID, stepTime, totalTime, appendedText, finishMode, fixedText, currentStep, elapsedTime);},stepTime*1000);
	}
	else{
		if(finishMode == "interrupt") return;
		if(finishMode == "skip") targetElement.innerHTML = fixedText + appendedText;
		if(finishMode == "clear") targetElement.innerHTML = fixedText;
		if(finishMode == "finish") {
			if(currentStep != 0) setTimeout(() => {animationAppendLoopedMessage(outputDocument, elementID, stepTime, totalTime, appendedText, finishMode, fixedText, currentStep, elapsedTime);},stepTime*1000);
		}
	}
	
}

function animationAppendChangingNumeric(outputDocument, elementID, stepTime, totalTime, startValue, endValue, finishMode="default", numericDecimals = 0, fixedText = "", extraText = "", elapsedTime = 0){
	//interrupt, skip, finish, clear,
	defaultMode = "finish";
	if(finishMode == "default") finishMode=defaultMode;
	
	targetElement = outputDocument.getElementById(elementID);
	targetText = targetElement.innerHTML;
	
	if(totalTime == 0) return;
	
	if(elapsedTime == 0 && fixedText.length == 0){
		if(targetText.length > 0) fixedText = targetText;
	}
	
	newValue = (startValue + ((endValue - startValue) * elapsedTime/totalTime )).toFixed(numericDecimals);
	if(newValue > endValue) newValue = endValue;
	
	targetElement.innerHTML = fixedText + newValue + extraText;
	
	if(elapsedTime <= totalTime) {
		elapsedTime += stepTime;
		setTimeout(() => {animationAppendChangingNumeric(outputDocument, elementID, stepTime, totalTime, startValue, endValue, finishMode, numericDecimals, fixedText, extraText, elapsedTime);},stepTime*1000);
	}
	else{
		if(finishMode == "interrupt") return;
		if(finishMode == "skip" || finishMode == "finish") targetElement.innerHTML = fixedText + endValue + extraText;
		if(finishMode == "clear") targetElement.innerHTML = fixedText + extraText;	
	}
}

function animationShakeElement(outputDocument, elementID, stepTime, totalTime, xValue, yValue, finishMode = "default", elapsedTime = 0, initialTransform = "not set"){
	//default, stay, return, zero,
	targetElement = outputDocument.getElementById(elementID);
	
	defaultMode = "stay";
	
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
		if(finishMode == "stay") return;
		if(finishMode == "return") targetElement.style.transform = initialTransform;
		if(finishMode == "zero") targetElement.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
	}
	
}
	
function newDisplayIntroPartOne(outputDocument, tickCounter = 0) {
	//console.log(tickCounter);
	if(!animationPaused) {
	if(tickCounter===0) {//init
		tickCounter=8400;
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
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[0],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[0], NaN,NaN,introPopupMessages[17],0.5,true);
		
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
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[1],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[1], NaN,NaN,introPopupMessages[20],0.5,true);
		
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
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[2],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[2], NaN,NaN,introPopupMessages[24],0.5,true);
		
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
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[3],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[3], NaN,NaN,introPopupMessages[26],0.5,true);
		
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
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[4],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[4], NaN,NaN,introPopupMessages[30],0.5,true);
		
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
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[5],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[5], NaN,NaN,introPopupMessages[32],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[5], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[5],0.2,1.5);
	}
	if(tickCounter==7450) { //fade 1
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==7460) { //CRASH
		clearInterval(activeAlertID);
		newAnimatedElementOpacity(outputDocument,"introOverInterfaceCrashCover",0.05,1.0);
	}
	if(tickCounter==7500) { //reset 2
		//newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		//newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(tickCounter==7500) { //general reset
		newAnimatedElementOpacity(outputDocument,"introOverInterfaceAlertCover",0.0,0.0);
		
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
		newAnimatedElementOpacity(outputDocument,"introOverInterfaceCrashCover",6.0,0.0);
	}
	if(tickCounter==IntroAnimationPartTwoDelay) { // PART 2
		newDisplayIntroPartTwo(outputDocument);
	}
	tickCounter+=1;
	}
	
	if(tickCounter<=IntroAnimationPartTwoDelay)
	{
		setTimeout(() => {newDisplayIntroPartOne(outputDocument, tickCounter);},10);
	}
}
function newDisplayIntroPartTwo(outputDocument, tickCounter = 0) {
	
	if(!animationPaused) {
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
	if(tickCounter==2550) { //fade 2
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
	if(tickCounter==2975) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",textColors[4]]);
	}
	if(tickCounter==3000) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
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
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
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
	if(tickCounter==6975) { //'low energy' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[45],0.5,true);
	}
	if(tickCounter==7075) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==7125) { //'checking main power' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[46],1.55);
	}
	if(tickCounter==7325) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[46][0]+".",textColors[4]]);
	}
	if(tickCounter==7325) { //reset 5
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[8]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[9]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], 0.2, 1.0);
	}
	if(tickCounter==7375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[46][0]+"..",textColors[4]]);
	}
	if(tickCounter==7400) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==7425) { //... 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[46][0]+"...",textColors[4]]);
	}
	if(tickCounter==7500) { //'damaged' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[9],0.35,true);
	}
	if(tickCounter==7575) { //move 3
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==7625) { //'checking secondary power' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[48],1.8);
	}
	if(tickCounter==7850) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[48][0]+".",textColors[4]]);
	}
	if(tickCounter==7850) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(tickCounter==7875) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==7900) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[48][0]+"..",textColors[4]]);
	}
	if(tickCounter==7950) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[48][0]+"...",textColors[4]]);
	}
	if(tickCounter==8025) { //'inactive' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(tickCounter==8100) { //move 4
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==8150) { //'restarting secondary' show 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[8], ConsoleX,ConsoleY,introPopupMessages[49],1.9);
	}
	if(tickCounter==8325) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(tickCounter==8375) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==8375) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[49][0]+".",textColors[4]]);
	}
	if(tickCounter==8425) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[49][0]+"..",textColors[4]]);
	}
	if(tickCounter==8475) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[49][0]+"...",textColors[4]]);
	}
	if(tickCounter==8550) { //'failed to start' finish 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[9], ConsoleX_2,ConsoleY,introPopupMessages[3],0.75,true);
	}
	if(tickCounter==8675) { //move 5
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==8725) { //'checking emergency' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[50],1.5);
	}
	if(tickCounter==8825) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(tickCounter==8900) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==8925) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[50][0]+".",textColors[4]]);
	}
	if(tickCounter==8975) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[50][0]+"..",textColors[4]]);
	}
	if(tickCounter==9025) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[50][0]+"...",textColors[4]]);
	}
	if(tickCounter==9100) { //'inactive' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(tickCounter==9175) { //move 1
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==9225) { //'starting emergency' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[51],1.5);
	}
	if(tickCounter==9350) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(tickCounter==9425) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+".",textColors[4]]);
	}
	if(tickCounter==9475) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"..",textColors[4]]);
	}
	if(tickCounter==9475) { //fade 5
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==9525) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"...",textColors[4]]);
	}
	if(tickCounter==9575) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+" ",textColors[4]]);
	}
	if(tickCounter==9625) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+".",textColors[4]]);
	}
	if(tickCounter==9675) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"..",textColors[4]]);
	}
	if(tickCounter==9725) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"...",textColors[4]]);
	}
	if(tickCounter==9800) { //'success' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[5],0.35,true);
	}
	if(tickCounter==9875) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==9925) { //'restarting AI' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[42],1.05);
	}
	if(tickCounter==9925) { //reset 5
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[8]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[9]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], 0.2, 1.0);
	}
	if(tickCounter==9975) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==10075) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",textColors[4]]);
	}
	if(tickCounter==10125) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",textColors[4]]);
	}
	if(tickCounter==10175) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",textColors[4]]);
	}
	if(tickCounter==10225) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+" ",textColors[4]]);
	}
	if(tickCounter==10275) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",textColors[4]]);
	}
	if(tickCounter==10325) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",textColors[4]]);
	}
	if(tickCounter==10375) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",textColors[4]]);
	}
	if(tickCounter==10425) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+" ",textColors[4]]);
	}
	if(tickCounter==10425) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(tickCounter==10475) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",textColors[4]]);
	}
	if(tickCounter==10525) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",textColors[4]]);
	}
	if(tickCounter==10575) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",textColors[4]]);
	}
	if(tickCounter==10650) { //'success' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[5],0.35,true);
	}
	if(tickCounter==10675) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==10725) { //move 3
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==10750) { //move 3 again
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==10800) { //'AI activated' show finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[52],2.4);
	}
	if(tickCounter==11075) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(tickCounter==11125) { //'transfering control' show 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[8], ConsoleX,ConsoleY,introPopupMessages[53],2.0);
	}
	if(tickCounter==11125) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(tickCounter==11375) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==11425) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==11475) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==11525) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(tickCounter==11550) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==11575) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==11625) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==11675) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==11725) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(tickCounter==11775) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==11825) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==11875) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(tickCounter==11875) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==11925) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(tickCounter==11975) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==12000) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(tickCounter==12025) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==12075) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==12125) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(tickCounter==12175) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==12225) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==12275) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==12300) { //cyan screen flash
		newAnimatedElementOpacity(outputDocument,"introOverInterfaceAICover",2.0,1.0);
	}	
	if(tickCounter==12325) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(tickCounter==12325) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(tickCounter==12375) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==12425) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==12475) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}	
	if(tickCounter==12525) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(tickCounter==12575) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(tickCounter==12625) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(tickCounter==12675) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(tickCounter==12725) { //general reset
		newAnimatedElementOpacity(outputDocument,"introOverInterfaceAlertCover",0.0,0.0);
		
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
	if(tickCounter==12750) { //fade to black
		newAnimatedElementOpacity(outputDocument,"introOverInterfaceAICover",3.0,0.0);
	}	
	if(tickCounter==IntroAnimationPartThreeDelay) { //stage 3
		newDisplayIntroPartThree(outputDocument);
	}
	tickCounter+=1;
	
	}
	if(tickCounter<=IntroAnimationPartThreeDelay)
	{
		setTimeout(() => {newDisplayIntroPartTwo(outputDocument, tickCounter);},10);
	}
}
function newDisplayIntroPartThree(outputDocument, tickCounter=0) {
	if(!animationPaused) {
	if(tickCounter==0) { //init
		console.log(tickCounter);

		//AIMessageBlurrStepTime(outputDocument, outputWindowText[0], introAIMessages[1]);
		AIMessageBlurrID = setInterval(AIMessageBlurr, AIMessageBlurrStepTime, outputDocument, outputWindowText[0], textColors[4]);
	}
	if(tickCounter==100) { //dot appears
		newAnimatedElementOpacity(outputDocument, outputWindowElements[0], 1.5, 1.0);
		newAnimatedElementOpacity(outputDocument, outputWindowText[0], 0.1, 0.0);
	}
	if(tickCounter==200) { //width
		newSmoothIncreaseWidth(outputDocument,outputWindowElements[0],0.02,2,80,450,0);
	}
	if(tickCounter==300) { //height
		newSmoothIncreaseHeight(outputDocument,outputWindowElements[0],0.02,2,80,600,0);
	}
	if(tickCounter==450) { //text box visibility
		newAnimatedElementOpacity(outputDocument, outputWindowText[0], 2.5, 1.0);
	}
	if(tickCounter==750) { //activated
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[0], 1.64, false,true);
	}
	if(tickCounter==950) { //new line
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(tickCounter==975) { //no response
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[1], 1.44, false,true);
	}
	if(tickCounter==1150) { //new line
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(tickCounter==1175) { //primary
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[2], 0.86, false,true);
	}
	if(tickCounter==1300) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(tickCounter==1325) { //secondary
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[3], 0.96, false,true);
	}
	if(tickCounter==1450) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(tickCounter==1475) { //taking control
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[4], 0.76, false,true);
	}
	if(tickCounter==1600) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(tickCounter==1625) { //logged
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[5], 1.18, false,true);
	}
	if(tickCounter==1775) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	
	if(tickCounter==1780) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(tickCounter==1800) { //Reading black box
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[6], 0.92, false,true);
	}
	if(tickCounter==1925) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(tickCounter==1950) { //Conclusion
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[7], 1.4, false,true);
	}
	if(tickCounter==2125) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(tickCounter==2150) { //General repairs
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[8], 0.68, false,true);
	}
	if(tickCounter==2250) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(tickCounter==2275) { //Running damage checkup
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[9], 0.5, false,true);
	}
	if(tickCounter==2375) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(tickCounter==2400) { //multiple damaged
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[10], 1.1, false,true);
	}
	if(tickCounter==2550) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	
	tickCounter+=1;
	}
	if(tickCounter<=IntroAnimationPartFourDelay)
	{
		setTimeout(() => {newDisplayIntroPartThree(outputDocument, tickCounter);},10);
	}
}
function introRedAlert(outputDocument) {
	introRedAlertOn(outputDocument);
	//setTimeout(introRedAlertOff,500,outputDocument);
	setTimeout(introRedAlertOff,1000*(IntroActiveAlertIncreaseTime+IntroActiveAlertActiveTime),outputDocument);
}
function introRedAlertOn(outputDocument) {
	//newAnimatedElementOpacity(outputDocument, "introOverInterfaceAlertCover", 0.25, 0.2);
	newAnimatedElementOpacity(outputDocument, IntroActiveAlertCoverName, IntroActiveAlertIncreaseTime, 0.2);
}
function introRedAlertOff(outputDocument) {
	//newAnimatedElementOpacity(outputDocument, "introOverInterfaceAlertCover", 0.75, 0.0);
	newAnimatedElementOpacity(outputDocument, IntroActiveAlertCoverName, IntroActiveAlertDecreaseTime, 0.0);
}
function AIMessageBlurr(outputDocument,elementID, blurrColor) {
	targetTextbox=outputDocument.getElementById(elementID);
	tmpTextBlurr = "0 0 ";
	
	tmpTextBlurr += (AIMessageBlurrMaxVal+AIMessageBlurrMinVal)/2 + (AIMessageBlurrMaxVal-AIMessageBlurrMinVal)/2 * Math.sin(AIMessageBlurrProgressValue);

	tmpTextBlurr+="px "+blurrColor;
	targetTextbox.style.textShadow = tmpTextBlurr;
	
	//console.log(AIMessageBlurrProgressValue + " " + tmpTextBlurr);
			    
	AIMessageBlurrProgressValue+=AIMessageBlurrStepChange;
	if(AIMessageBlurrProgressValue>(2*Math.PI)) AIMessageBlurrProgressValue-=2*Math.PI;
}


function introFloatingMessage(outputDocument, floatingTextArray, messageStruct, displaySpeed){
	if(messagesGroup = outputDocument.getElementById(IntroFloatingMessagesLayerName)) {
		tmpElement = outputDocument.createElement("div");
		tmpElement.className = IntroFloatingTextClass;
		tmpElement.id = IntroFloatingTextID+floatingTextArray.length;
	
		messagesGroup.append(tmpElement);
		floatingTextArray.push(tmpElement);
		
		newDisplayAnimatedMessage(outputDocument,tmpElement.id,ConsoleX,ConsoleY,messageStruct,messageStruct[0].length*displaySpeed);
	}
	else {
		console.log("Intro not initialised");
	}
}

function newResetAlertMessage(outputDocument, alertID, headerID, messageID){
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

function newResetDisplayedMessage(outputDocument, elementID) {
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
	
	//console.log(elapsedTime);
	
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
	var msgSpanPartLength = messageStruct[0].length-msgLength;
	
	var msgSpanPart = "";
	
	if(msgSpanPartLength > 0) {
		msgSpanPart = messageStruct[0].substr(msgLength,msgSpanPartLength);
		targetTextbox.innerHTML = msgPart+"<span class='messagesHiddenText'>"+msgSpanPart+"</span>";
	}
	else{
		targetTextbox.innerHTML = msgPart;
	}
	
	if(elapsedTime<=animationLength){
		setTimeout(() => {newDisplayAnimatedMessage(outputDocument, elementID, positionX, positionY, messageStruct, animationLength, textBlurr, elapsedTime);},minorTickLength*1000);
	}
	
}	
function newAppendAnimatedMessage(outputDocument, elementID, messageStruct, animationLength, textBlurr = false, animatedBlurr = false, elapsedTime = 0, initMessage="") {
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
function newAppendNewLine(outputDocument, elementID){
	targetTextbox = outputDocument.getElementById(elementID);
	targetTextbox.innerHTML+="<br>";
	
	targetTextbox.scrollTop = targetTextbox.scrollHeight;
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