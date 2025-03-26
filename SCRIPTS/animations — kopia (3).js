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
	"hsl(60,100%,65%)"//yellow 5
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
var IntroCombinedMessagesTiming = [
	  0,	//init			0
	 10,	//show old		10
	 15,	//move old		25
	 25,	//show last		50
	 25,	//fade old		75
	 25,	//slowly show	100
	 50,	//move last		150
	 50,	//critical		200
	120,	//impact 1 
	 25,	//move			345
	 50,	//initiating
	175,	//impact 2 
	 75,	//move
	 50,	//autopilot		395
	 55,	//...			440
	 90,	//impact 3
	 20,	//enabled		540
	 60,	//move			600
	 50,	//redirecting	900
	220,	//impact 4 
	 15,	//move			1135
	 50,	//charged at	1185
	140,	//0-100%		1325
	 25,	//move
	 10,	//impact 5
	  5,	//notice
	 30,	//move
	 15,	//known emerg
	 45,	//impact 6
	120,	//move
	 15,	//perception
	 30,	//impact 7
	160,	//move
	 15,	//by an auto
	 10,	//border flash	1575
	 50,	//impact 8
	300,	//impact 9
	
	150,	//move			1850
	 50,	//JUMPING		1900
	 85,	//blue fade in	1975
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
	120,	//...			4165
	575,	//start alerts	4740
	 25,	//alert			4765
	125,	//move alert	4890
	 50,	//aborted		4940
	 60,	//move			5000
	 50,	//checking		5050
	200,	//...			5235
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
	210,	//...			6445
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
	210,	//...			7790
	250,	//failed		8040
	100,	//move			8140
	
	 30,	//shake t fail	8170
	 
	 20,	//checking		8190
	 
	 50,	//alert			8220
	 10,	//shake strong	8230
	 80,	//...			8310
	 35,	//move alert	8345
	 65,	//inactive		8410
	 65,	//move			8475
	 50,	//starting		8525
	140,	//...			8650
	250,	//success		8900
	 30,	//shake stronge	8930
	 30,	//move			8960
	 50,	//raising		9010
	 85,	//...			9095
	125,	//alert			9220
	125,	//move alert	9345
	  5,	//shield glow	9350
	145,	//active		9495
	 75,	//shake crash	9570
	 20,	//move			9590
	  5,	//alert			9595
	 45,	//fade to red	9640
	100,	//cleanup 1		9740
	200,	//fade to black	9940
	555,	//cleanup 2
	  5,	//fade out		10500
	 50,	//empty Element 10550 
	 50,	//blinking		10600
	410,	//move			11010
	 15,	//restoring		11025
	 80,	//...			11105
	325,	//success 		11430
	 60,	//move			11490
	 50,	//general check 11540
	140,	//...
	250,	//fully op
	110,	//move
	 50,	//crash land
	155,	//move
	 50,	//scanning
	135,	//... 
	100,	//not found
	 70,	//move
	 50,	//full damag
	120,	//...
	175,	//aborted
	 60,	//move
	 50,	//severe
	135,	//move
	 50,	//checking com
	135,	//...
	250,	//alive
	130,	//move
	 50,	//calling
	115,	//... 
	400,	//no reply
	 80,	//move
	 50,	//no reply
	210,	//move
	 50,	//enter emer
	140,	//move
	 50,	//critic subs
	200,	//move
	 50,	//life supp
	150,	//...
	175,	//operational
	 80,	//move
	 50,	//medical destro
	155,	//move
	 50,	//check vent
	160,	//... 
	175,	//operational
	 80,	//move
	 50,	//hull breaches
	180,	//move
	 50,	//check power mgmt	
	170,	//...
	175,	//operational
	 80,	//move
	 50,	//power low
	100,	//move
	 50,	//primary
	155,	//...
	100,	//not responding
	 95,	//move
	 50,	//secondary
	180,	//...
	100,	//not responding
	 95,	//move
	 50,	//power cells
	140,	//...
	100,	//operational	
	 80,	//move
	 50,	//check comms
	155,	//...
	175,	//operational
	 80,	//move
	 50,	//no signal
	 70,	//move
	 50,	//main antenna
	115,	//...
	100,	//operational
	 80,	//move
	 50,	//dire antenna
	150,	//...
	100,	//operational
	 80,	//move
	 50,	//check def sys
	130,	//...
	175,	//operational
	 80,	//move
	 50,	//limited
	165,	//move
	 50,	//check shield
	140,	//...
	100,	//not responding
	 95,	//move
	 50,	//check point
	150,	//...
	175,	//partially
	130,	//move
	 50,	//check repair
	120,	//...
	100,	//operational
	 80,	//move
	 50,	//check nav
	140,	//...
	175,	//operational
	 80,	//move
	 50,	//immobilized
	105,	//move
	 50,	//main engi
	110,	//...
	100, 	//not responding
	 95,	//move
	 50,	//second engi
	140, 	//...
	100, 	//not responding
	 95,	//move
	 50,	//check thrust
	160,	//...
	100, 	//not responding
	 95,	//move
	 50,	//check hyper
	105,	//...
	100, 	//not responding
	 95,	//move
	 50,	//check jumpd
	100,	//...
	250,	//unknown code
	120,	//move
	 50,	//please update
	210,	//move
	 50,	//check virtu
	165,	//...
	100,	//inactive
	 65,	//move
	 50,	//start virtu
	165,	//...
	100,	//success
	 60,	//move
	 50,	//load persona
	195,	//...
	100,	//interrupted
	 80,	//move
	 50,	//not enough
	305,	//move
	 50,	//restart main
	165,	//...
	175,	//failed to start
	 90,	//move
	 50,	//restart second
	190,	//...
	175,	//failed to start
	 90,	//move
	 50,	//check em gener
	150,	//...
	100,	//inactive
	 65,	//move
	 50,	//start em gener
	150,	//...
	100,	//success
	 60,	//move
	 50,	//start em pers 1
	195,	//...
	325,	//interrupted
	 80,	//move
	 50,	//start error 1
	195,	//...
	250,	//aborted
	 60,	//move
	 50,	//start em pers 2
	195,	//...
	175,	//interrupted
	 80,	//move
	 50,	//start error 2
	195,	//...
	100,	//aborted
	 60,	//move
	 50,	//start em pers 3
	195,	//...
	
	 25,	//alert root
	125,	//move alert
	150,	//alert auto 
	125,	//move alert 
	
	 50,	//failed
	 55,	//move
	 50,	//restart autopilot
	110,	//...
	
	 50,	//alert revoke
	125,	//move alert
	
	 75,	//success
	 60,	//move
	 50,	//start error 3
	195,	//...
	325,	//success
	 60,	//move
	 50,	//control
	295,	//move
	 50,	//rename
	285,	//move
	 50,	 
	 
			//skip			
];
var IntroCombinedMessages = [
/*	0	*/	["SHIELDS CRITICAL",textColors[0]],								// 0.00 -> 0.80 -> 1.05
/*	1	*/	["SHIELDS DOWN",textColors[0]], 								// 1.55 -> 2.15 -> 2.40
/*	2	*/	["EXPLOSION IN [ENGINE SECTOR]",textColors[0]],					
/*	3	*/	["HULL BREACH DETECTED IN [ENGINE SECTOR]",textColors[0]],		// 2.90 -> 4.85 -> 5.10
/*	4	*/	["[MAIN ENGINE] DAMAGED",textColors[0]],
/*	5	*/	["[HYPERDRIVE] DAMAGED",textColors[0]],
/*	6	*/	["EXPLOSION IN [NAVIGATION BRIDGE]",textColors[0]],
/*	7	*/	["HULL BREACH DETECTED IN [NAVIGATION BRIDGE]",textColors[0]],	// 5.60 -> 7.75 -> 8.00
/*	8	*/	["RECEIVED CRITICAL DAMAGE",textColors[0]],						// 8.75 -> 9.95 ->10.20
/*	9	*/	["INITIATING AUTOMATIC EMERGENCY JUMP PROCEDURE",textColors[4]],//10.70 ->12.95 ->13.20

/*	10	*/	["[AUTOPILOT]",textColors[4]],									//13.70 ->14.25 ->14.50
/*	11	*/	["ENABLED",textColors[1]],
/*	12	*/	["REDIRECTING AVAILABLE POWER TO [JUMPDRIVE]",textColors[4]],	
/*	13	*/	["[JUMPDRIVE] CHARGED AT:",textColors[4]],
/*	14	*/	["NOTICE:",textColors[5]],
/*	15	*/	["KNOWN EMERGENCY JUMP SIDE EFFECTS MAY TEMPORARILY ALTER CREW'S",textColors[5]],
/*	16	*/	["PERCEPTION OF TIME. FOR SAFETY REASONS, SHIP WILL BE CONTROLLED",textColors[5]],
/*	17	*/	["BY AN AUTOPILOT UNTIL MANUALLY INTERRUPTED BY OFFICER IN CHARGE",textColors[5]],
/*	18	*/	["JUMPING",textColors[4]],	
/* 	19	*/	["EMERGENCY JUMP",textColors[4]],

/*  20	*/	["SUCCESSFUL",textColors[1]],
/*  21	*/	["CHECKING [SENSORS]",textColors[4]],
/*  22	*/	["OPERATIONAL",textColors[1]],
/*  23	*/	["SEARCHING FOR [HOSTILES]",textColors[4]],
/*  24	*/	["NOT FOUND",textColors[1]],
/*  25	*/	["COMBAT ALARM",textColors[4]],
/*  26	*/	["LIFTED",textColors[1]],
/*  27	*/	["RUNNING FULL DAMAGE SCAN",textColors[4]],
/*  28	*/	["WARNING",textColors[3]],
/*  29	*/	["PLANET ON COLLISION COURSE",textColors[3]],

/*  30	*/	["ABORTED",textColors[5]],
/*  31	*/	["CHECKING [COLLISION AVOIDANCE SUBSYSTEM]",textColors[4]],
/*  32	*/	["OPERATIONAL",textColors[1]],
/*  33	*/	["ATTEMPTING [COLLISION AVOIDANCE MANEUVER]",textColors[4]],
/*	34	*/	["WARNING",textColors[3]],
/*	35	*/	["[COLLISION AVOIDANCE SUBSYSTEM] FATAL ERROR",textColors[3]],
/*	36	*/	["FAILED",textColors[0]],
/*	37	*/	["RESTARTING [COLLISION AVOIDANCE SUBSYSTEM]",textColors[4]],
/*	38	*/	["FAILED TO START",textColors[0]],
/*	39	*/	["CHECKING [MANEUVERING THRUSTERS]",textColors[4]],

/*	40	*/	["OPERATIONAL",textColors[1]],
/*	41	*/	["WARNING",textColors[3]],
/*	42	*/	["ENTERING ATMOSPHERE",textColors[3]],
/*	43	*/	["ACTIVATING [REVERSE THRUSTERS]",textColors[4]],
/*	44	*/	["SUCCESS",textColors[1]],
/*	45	*/	["RESTARTING [COLLISION AVOIDANCE SUBSYSTEM]",textColors[4]],
/*	46	*/	["FAILED TO START",textColors[0]],
/*	47	*/	["CHECKING [SHIELDS SUBSYSTEM]",textColors[4]],
/*	48	*/	["WARNING",textColors[3]],
/*	49	*/	["[MAIN REVERSE THRUSTER] DAMAGED",textColors[3]],

/*	50	*/	["INACTIVE",textColors[5]],
/*	51	*/	["STARTING [SHIELDS SUBSYSTEM]",textColors[4]],
/*	52	*/	["SUCCESS",textColors[1]],
/*	53	*/	["RAISING [SHIELDS]",textColors[4]],
/*	54	*/	["WARNING",textColors[3]],
/*	55	*/	["PLANETARY CRASH IMMINIENT BRACE FOR IMPACT",textColors[3]],//30
/*	56	*/	["SHIELDS ACTIVE",textColors[1]],
/*	57	*/	["WARNING",textColors[3]],
/*	58	*/	["SHIELDS CRITICAL",textColors[3]],

/*	59	*/	["RESTORING SYSTEM",textColors[4]],

/*	60	*/	["RUNNING POWER-ON SELF TEST",textColors[4]],
/*	61	*/	["  [POWER SUPPLY] OPERATIONAL",textColors[1]],
/*	62	*/	["    POWER LEVEL LOW",textColors[5]],
/*	63	*/	["  [CENTRAL PROCESSOR] OPERATIONAL",textColors[1]],	
/*	64	*/	["  [MEMORY BANKS] OPERATIONAL",textColors[1]],
/*	65	*/	["  [MAIN DATA STORAGE] OPERATIONAL",textColors[1]],
/*	66	*/	["    DATA INTEGRITY SCAN REQUIRED",textColors[5]],
/*	67	*/	["SYSTEM RESTORED",textColors[1]],
/*	68	*/	["[AUTOPILOT]",textColors[4]],
/*	69	*/	["ENABLED",textColors[1]],

/*	70	*/	["SCANNING FOR ACTIVE THREATS",textColors[4]],
/*	71	*/	["NOT FOUND",textColors[1]],
/*	72	*/	["RUNNING FULL DAMAGE SCAN",textColors[4]],
/*	73	*/	["ABORTED",textColors[5]],
/*	74	*/	["  SEVERE DAMAGE DETECTED",textColors[3]],
/*	75	*/	["  CRASH-LANDING HAS OCCURRED",textColors[5]],
/*	76	*/	["CHECKING [COMMANDER] STATUS",textColors[4]],
/*	77	*/	["ALIVE, NOT RESPONDING",textColors[5]],
/*	78	*/	["CALLING [COMBAT BRIDGE]",textColors[4]],
/*	79	*/	["NO RESPONSE",textColors[0]],

/*	80	*/	["RECEIVED NO REPLY FROM SHIP'S COMMAND",textColors[0]],
/*	81	*/	["ENTERING EMERGENCY MODE",textColors[4]],
/*	82	*/	["RUNNING CRITICAL SUBSYSTEMS CHECKUP",textColors[4]],
/*	83	*/	["CHECKING [LIFE SUPPORT SYSTEM]",textColors[4]],
/*	84	*/	["OPERATIONAL",textColors[1]],
/*	85	*/	["  [VENTILATION] OPERATIONAL",textColors[1]],
/*	86	*/	["    MULTIPLE HULL BREACHES DETECTED",textColors[0]],
/*	87	*/	["  [CO2 FILTERS] OPERATIONAL",textColors[1]],
/*	88	*/	["    O2 LEVEL ACCEPTABLE",textColors[1]],
/*	89	*/	["  [THERMAL REGULATION] OPERATIONAL",textColors[1]],

/*	90	*/	["    TEMPERATURE LEVEL ACCEPTABLE",textColors[1]],
/*	91	*/	["  [MEDICAL SECTOR] DESTROYED",textColors[0]],
/*	92	*/	["  [STASIS CELL ARRAY] OPERATIONAL",textColors[1]],
/*	93	*/	["CHECKING [POWER MANAGEMENT SYSTEM]",textColors[4]],
/*	94	*/	["OPERATIONAL",textColors[1]],
/*	95	*/	["  [POWER GRID] OPERATIONAL",textColors[1]],
/*	96	*/	["  [MAIN POWER GENERATOR] DAMAGED",textColors[0]],
/*	97	*/	["  [SECONDARY POWER GENERATOR] NOT RESPONDING",textColors[5]],
/*	98	*/	["  [POWER CELLS ARRAY] OPERATIONAL",textColors[1]],
/*	99	*/	["    BATTERIES LEVEL AT 32%",textColors[5]],

/*	100	*/	["  [EMERGENCY GENERATOR] NOT RESPONDING",textColors[5]],
/*	101	*/	["CHECKING [DEFENSE SYSTEMS]",textColors[4]],
/*	102	*/	["OPERATIONAL",textColors[1]],
/*	103	*/	["  LIMITED DEFENSE CAPABILITIES",textColors[5]],
/*	104	*/	["  [SHIELDS SUBSYSTEM] NOT RESPONDING",textColors[5]],
/*	105	*/	["  [POINT DEFENSE ARRAY] OPERATIONAL",textColors[1]],
/*	106	*/	["    PARTIALLY DAMAGED",textColors[0]],
/*	107	*/	["  [REPAIR DRONES] OPERATIONAL",textColors[1]],
/*	108	*/	["CHECKING [NAVIGATION SYSTEM]",textColors[4]],
/*	109	*/	["OPERATIONAL",textColors[1]],

/*	110	*/	["  SHIP IMMOBILISED",textColors[5]],
/*	111	*/	["  POSITION UNKNOWN",textColors[5]],
/*	112	*/	["  [MAIN ENGINE] DAMAGED",textColors[0]],
/*	113	*/	["  [SECONDARY ENGINES] NOT RESPONDING",textColors[5]],
/*	114	*/	["  [MANEUVERING THRUSTERS] NOT RESPONDING",textColors[5]],
/*	115	*/	["  [HYPERDRIVE] DAMAGED",textColors[0]],
/*	116	*/	["  [JUMPDRIVE]  CHECK FAILED",textColors[0]],
/*	117	*/	["    JUMPDRIVE STATUS CODE UNKNOWN",textColors[5]],
/*	118	*/	["    PLEASE UPDATE YOUR AUTOPILOT SOFTWARE",textColors[5]],
/*	119	*/	["CHECKING [COMMUNICATION SYSTEM]",textColors[4]],

/*	120	*/	["OPERATIONAL",textColors[1]],
/*	121	*/	["  [MAIN ANTENNA] OPERATIONAL",textColors[4]],
/*	122	*/	["    NO SIGNAL",textColors[5]],
/*	123	*/	["  [DIRECTIONAL ANTENNA] OPERATIONAL",textColors[4]],
/*	124	*/	["    RECEIVER POSITION UNKNOWN",textColors[5]],
/*	125	*/	["SUBSYSTEMS CHECKUP FINISHED",textColors[4]],
/*	126	*/	["SENDING [DISTRESS SIGNAL]",textColors[4]],
/*	127	*/	["INTERRUPTED",textColors[5]],
/*	128	*/	["  SENDING DISTRESS SIGNAL INTERRUPTED",textColors[5]],
/*	129	*/	["  NOT ENOUGH ENERGY AVAILABLE",textColors[5]],

/*	130	*/	["INITIATING AUTOMATED EMERGENCY REPAIRS PROTOCOL",textColors[4]],
/*	131	*/	["CHECKING [AI PERSONA VIRTUALISER]",textColors[4]],
/*	132	*/	["INACTIVE",textColors[5]],
/*	133	*/	["STARTING [AI PERSONA VIRTUALISER]",textColors[4]],
/*	134	*/	["SUCCESS",textColors[1]],
/*	135	*/	["LOADING [EMERGENCY RECOVERY AI] PERSONA",textColors[4]],
/*	136	*/	["INTERRUPTED",textColors[5]],
/*	137	*/	["  PERSONA LOADING INTERRUPTED",textColors[5]],
/*	138	*/	["  NOT ENOUGH ENERGY AVAILABLE",textColors[5]],
/*	139	*/	["CHECKING [POWER CELLS ARRAY]",textColors[4]],

/*	140	*/	["OPERATIONAL",textColors[1]],
/*	141	*/	["  BATTERIES LEVEL AT 24%",textColors[5]],
/*	142	*/	["  POWER LEVEL CRITICAL",textColors[0]],
/*	143	*/	["RESTARTING [SECONDARY POWER GENERATOR]",textColors[4]],
/*	144	*/	["FAILED TO START",textColors[0]],
/*	145	*/	["STARTING [EMERGENCY GENERATOR]",textColors[4]],
/*	146	*/	["SUCCESS",textColors[1]],
/*	147	*/	["LOADING [EMERGENCY RECOVERY AI] PERSONA",textColors[4]],
/*	148	*/	["INTERRUPTED",textColors[5]],
/*	149	*/	["LOADING [ERROR:AI_CODE_UNKNOWN] PERSONA",textColors[4]],

/*	150	*/	["ABORTED",textColors[5]],
/*	151	*/	["LOADING [EMERGENCY RECOVERY AI] PERSONA",textColors[4]],
/*	152	*/	["INTERRUPTED",textColors[5]],
/*	153	*/	["LOADING [ERROR:AI_CODE_UNKNOWN] PERSONA",textColors[4]],
/*	154	*/	["ABORTED",textColors[5]],
/*	155	*/	["LOADING [EMERGENCY RECOVERY AI] PERSONA",textColors[4]],
/*	156	*/	["WARNING",textColors[3]],
/*	157	*/	["ROOT ACCESS GRANTED TO [ERROR:AI_CODE_UNKNOWN]",textColors[3]],
/*	158	*/	["WARNING",textColors[3]],
/*	159	*/	["[AUTOPILOT] FATAL ERROR",textColors[3]],

/*	160	*/	["FAILED",textColors[0]],
/*	161	*/	["RESTARTING [AUTOPILOT]",textColors[4]],
/*	162	*/	["WARNING",textColors[3]],
/*	163	*/	["ROOT ACCESS REVOKED FROM [AUTOPILOT]",textColors[3]],
/*	164	*/	["SUCCESS",textColors[1]],
/*	165	*/	["LOADING [ERROR:AI_CODE_UNKNOWN] PERSONA",textColors[4]],
/*	166	*/	["SUCCESS",textColors[1]],
/*	167	*/	["TRANSFERING CONTROL TO [ERROR:AI_CODE_UNKNOWN] PERSONA",textColors[4]],
/*	168	*/	["RENAMING [ERROR:AI_CODE_UNKNOWN] PERSONA TO [TESAIA]",textColors[4]]

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
	
var IntroCombatAlertID;
var IntroCombatAlertCoverName = "introOverInterfaceCombatAlertCover";
var IntroCombatAlertFullLength = 1.5;
var IntroCombatAlertIncreaseTime = 0.2;
var IntroCombatAlertActiveTime = 0.2;
var IntroCombatAlertDecreaseTime = 0.6;
	
var IntroCollisionAlertID;
var IntroCollisionAlertCoverName = "introOverInterfaceCollisionAlertCover";
var IntroCollisionAlertFullLength = 4;
var IntroCollisionAlertIncreaseTime = 0.3;
var IntroCollisionAlertActiveTime = 0.3;
var IntroCollisionAlertDecreaseTime = 0.9;

var AIMessageBlurrID;
var AIMessageBlurrMinVal = 0;
var AIMessageBlurrMaxVal = 10;
var AIMessageBlurrStepTime = 40;
var AIMessageBlurrStepChange = 0.02;
var AIMessageBlurrProgressValue = 0;


var IntroConsoleX = 30;
var IntroConsoleY = 300;
var IntroConsoleX_2 = 600;
var ConsoleMessageOffset = 24;	
var ConsoleMessageFadeDefaultTime = 4.0;

var AlertBaseX = 0;
var AlertBaseY = 30;
var AlertPopupPositionX = 0;
var AlertPopupPositionY = 200;
var AlertOffsetBaseX = 00;
var AlertOffsetExtraX = 0;
var AlertOffsetBaseY = 30;
var AlertOffsetExtraY = 0;

var IntroAnimationStartDelay = 0;
var IntroAnimationPartOneDelay = 0;
var IntroAnimationPartTwoDelay = 8500;
var IntroAnimationPartThreeDelay = 13200;
var IntroAnimationPartFourDelay = 10000;

var IntroFadeInTime = 6;
var IntroFadeCoverName = "introOverInterfaceInitCover";

var IntroMessagesLayerName = "introMessages";

var IntroBackgroundImagesLayerName = "introBackgroundImagesGroup";
var IntroForegroundImagesLayerName = "introForegroundImagesGroup";

var IntroImageConsoleBackgroundID = "introImageConsoleBackground";
var IntroImageConsoleBackgroundPath = "RESOURCES/Console Background.png";

var IntroImageButtonPanelID = "introImageButtonPanel";
var IntroImageButtonPanelPath = "RESOURCES/Intro Button Panel v2.png";

var IntroImageButtonPauseID = "introImageButtonPanelPause";
var IntroImageButtonPauseON = false;
var IntroImageButtonPausePathON = "RESOURCES/Intro Button Panel Pause ON.png";
var IntroImageButtonPausePathOFF = "RESOURCES/Intro Button Panel Pause OFF.png";

var IntroImageButtonFastFID = "introImageButtonPanelFastForward";
var IntroImageButtonFastFON = false;
var IntroImageButtonFastFPathON = "RESOURCES/Intro Button Panel FastF ON.png";
var IntroImageButtonFastFPathOFF = "RESOURCES/Intro Button Panel FastF OFF.png";

var IntroImageButtonSkipID = "introImageButtonPanelSkip";
var IntroImageButtonSkipON = false;
var IntroImageButtonSkipPathON = "RESOURCES/Intro Button Panel Skip ON.png";
var IntroImageButtonSkipPathOFF = "RESOURCES/Intro Button Panel Skip OFF.png";


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
var IntroAlertOpacityTime = 0.1;

var IntroAlertTextDelay = 0.25;
var IntroAlertTextSpeed = 0.02;
var IntroAlertHeaderSpeed = 0.015;

var IntroAlertScaleGrowthDelay = 0.05;
var IntroAlertScaleGrowthScale = 1.25;
var IntroAlertScaleGrowthTime = 0.2;

var IntroAlertScaleShrinkDelay = 0;
var IntroAlertScaleShrinkScale = 0.8;
var IntroAlertScaleShrinkTime = 1;

var IntroAlertIsMoving = false;
var IntroResizeFixInProgress = false;

var IntroFloatingTextFadeDelay = 9;
var IntroFloatingTextFadeLength = 6;
var IntroFloatingTextResetDelay = 500;
var IntroFloatingTextResetAfterFade = false;

var IntroJumpChargingTime = 10;
var IntroJumpChargingCoverName = "introOverInterfaceChargingCover"; 
var IntroJumpChargingImageName = "introOverInterfaceChargingImage"; 
var IntroJumpingCoverName = "introOverInterfaceJumpdriveCover";
var IntroJumpFlashFadeInTime = 0.25;
var IntroJumpFlashFadeOutTime = 3;

var IntroCrashFadeTime = 0.05;
var IntroCrashCoverName = "introOverInterfaceCrashCover";


var IntroAnimationStep = -1;
var IntroTickCounter = -1;

var IntroAnimationPaused = false;

var IntroFastForwardAllowed = false;
var IntroFastForwardInProgress = false;
var IntroFastForwardStage = -1;
var IntroActiveAnimationCounter = 0;

var IntroDebugActive = false;
 


function animationDisplayIntro(outputDocument) {
	
	IntroAnimationStep = 0;
	IntroTickCounter = 0;
	
	setTimeout(introPlayIntro,1000 * minorTickLength * IntroAnimationStartDelay,outputDocument);
	//introInit(outputDocument);
}

function introPlayIntro(outputDocument){
	if(IntroAnimationPaused) {
		console.log("Animation is paused.");
		setTimeout(() => {introPlayIntro(outputDocument);},1000);
	}
	else {
		
		dynamicCondition = 0;
		switch(IntroAnimationStep) {
			case (dynamicCondition++): 	//init
				if(IntroTickCounter == 0) {
					introInit(outputDocument);		
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//show old
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[0],0.01); //critical
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[1],0.01); //down
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[2],0.01); //explo engi
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[3],0.01); //hull engi
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[4],0.01); //main engine
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[5],0.01); //hyperdrive 
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[6],0.01); //explo nav
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					
					IntroCombatAlertID = setInterval(introCombatAlert, IntroCombatAlertFullLength*1000, outputDocument);
					introCombatAlert(outputDocument);
					
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++: 	//move old
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,false,1,3);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,false,1,3);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++: 	//show last
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[7],0.01); //hull nav
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++: 	//fade old
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					if(IntroFastForwardStage != -1){ 
						IntroActiveAnimationCounter+=6;
						if(IntroDebugActive)console.log("Fade old delay start x6, "+IntroActiveAnimationCounter);
					}
					
					//console.log(introMessagesTiming[IntroAnimationStep]);
					//console.log(introMessagesTiming[IntroAnimationStep+2]);
					//console.log(introMessagesTiming[IntroAnimationStep+2]-introMessagesTiming[IntroAnimationStep]);  //75 == 0.75
					
					//
					introDelayedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[0],IntroFloatingTextFadeDelay + 0.75 - 6.95, IntroFloatingTextFadeLength, 0.0, 1.0);
					introDelayedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[1],IntroFloatingTextFadeDelay + 0.75 - 5.60, IntroFloatingTextFadeLength, 0.0, 1.0);
					introDelayedElementOpacity(outputDocument, [IntroFloatingTextMessagesArray[2],
					IntroFloatingTextMessagesArray[3],
					IntroFloatingTextMessagesArray[4],
					IntroFloatingTextMessagesArray[5]],IntroFloatingTextFadeDelay + 0.75 - 5.60, IntroFloatingTextFadeLength, 0.0, 1.0);
					
					/*setTimeout(() => {
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[0], IntroFloatingTextFadeLength, 0.0, 1.0);
						if(IntroFastForwardStage != -1){ 
							IntroActiveAnimationCounter--;
							if(IntroDebugActive)console.log("Fade old delay stop x1, "+IntroActiveAnimationCounter);
						}
					},(IntroFloatingTextFadeDelay+0.75-6.95)*1000);
					
					setTimeout(() => {
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[1], IntroFloatingTextFadeLength, 0.0, 1.0);
						if(IntroFastForwardStage != -1){ 
							IntroActiveAnimationCounter--;
							if(IntroDebugActive)console.log("Fade old delay stop x1, "+IntroActiveAnimationCounter);
						}
					},(IntroFloatingTextFadeDelay+0.75-5.6)*1000);
					
					setTimeout(() => {
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[2], IntroFloatingTextFadeLength, 0.0, 1.0);
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[3], IntroFloatingTextFadeLength, 0.0, 1.0);
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[4], IntroFloatingTextFadeLength, 0.0, 1.0);
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[5], IntroFloatingTextFadeLength, 0.0, 1.0);
						
						if(IntroFastForwardStage != -1){ 
							IntroActiveAnimationCounter-=4;
							if(IntroDebugActive)console.log("Fade old delay stop x4, "+IntroActiveAnimationCounter);
						}
					},(IntroFloatingTextFadeDelay+0.75-2.9)*1000);*/
					
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//slowly show
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroFadeCoverName, IntroFadeInTime, 0, 1);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++: 	//move last
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					
					if(IntroFastForwardStage != -1){ 
						IntroActiveAnimationCounter++;
						if(IntroDebugActive)console.log("Fade last delay start, "+IntroActiveAnimationCounter);
					}
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[6],IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					/*
					setTimeout(() => {
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[6], IntroFloatingTextFadeLength, 0.0, 1.0);
						if(IntroFastForwardStage != -1){ 
							IntroActiveAnimationCounter--;
							if(IntroDebugActive)console.log("Fade last delay stop, "+IntroActiveAnimationCounter);
						}
					},IntroFloatingTextFadeDelay*1000);*/
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					
					IntroAnimationStep++;
					
					//IntroAnimationStep=96;
					//IntroTickCounter=introMessagesTiming[IntroAnimationStep]-100;
				}
				break;
				
			case dynamicCondition++:	//critical damage
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[8],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//impact 1
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.55,16,16,"zero");
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//initiating
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[9],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;				

			case dynamicCondition++:	//impact 2
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.35,16,16,"zero");
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//autopilot
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[10],0.05);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}

			case dynamicCondition++:	//impact 3
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.45,16,16,"zero");
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//enabled
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[11],0.05, true);
					IntroAnimationStep++;
				}
				break;				
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
					}
				break;
				
			case dynamicCondition++:	//redirecting
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[12],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//impact 4
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.65,16,16,"zero");
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//charged at
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[13],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,[" ",textColors[1]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;				
				
			case dynamicCondition++:	//0-100%
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendChangingNumeric(outputDocument, IntroFloatingTextRepliesArray[IntroFloatingTextRepliesArray.length-1], 0.03, IntroJumpChargingTime, 0, 100, finishMode="default", numericDecimals = 1, "", "%");
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
					}
				break;
				
			case dynamicCondition++:	//impact 5
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.35,16,16,"zero");
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//Notice
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[14],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
					}
				break;
				
			case dynamicCondition++:	//known emergency
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[15],0.03);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//impact 6
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.75,8,8,"zero");
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
					}
				break;
				
			case dynamicCondition++:	//perception
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[16],0.03);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//impact 7
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.35,8,8,"zero");
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
					}
				break;
				
			case dynamicCondition++:	//by an auto
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[17],0.03);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;
				
				
			case dynamicCondition++:	//border flash
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpChargingImageName, IntroJumpChargingTime/2, 1, 0);
					IntroAnimationStep++;
					
					IntroFastForwardAllowed = false;
				}
				break;	
				
			case dynamicCondition++:	//impact 8
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.75,16,16,"zero");
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//impact 8
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.55,8,8,"zero");
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					
					if(IntroFastForwardStage != -1){ 
						IntroActiveAnimationCounter+=10;
						if(IntroDebugActive)console.log("Fade notice delay start x10, "+IntroActiveAnimationCounter);
					}
					
					setTimeout(() => {
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[12], IntroFloatingTextFadeLength, 0.0, 1.0);
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextRepliesArray[12], IntroFloatingTextFadeLength, 0.0, 1.0);
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[13], IntroFloatingTextFadeLength, 0.0, 1.0);
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextRepliesArray[13], IntroFloatingTextFadeLength, 0.0, 1.0);
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[14], IntroFloatingTextFadeLength, 0.0, 1.0);
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextRepliesArray[14], IntroFloatingTextFadeLength, 0.0, 1.0);
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[15], IntroFloatingTextFadeLength, 0.0, 1.0);
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextRepliesArray[15], IntroFloatingTextFadeLength, 0.0, 1.0);
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[16], IntroFloatingTextFadeLength, 0.0, 1.0);
						newAnimatedElementOpacity(outputDocument, IntroFloatingTextRepliesArray[16],IntroFloatingTextFadeLength, 0.0, 1.0);

						if(IntroFastForwardStage != -1){ 
							IntroActiveAnimationCounter-=10;
							if(IntroDebugActive)console.log("Fade notice delay stop x10, "+IntroActiveAnimationCounter);
						}

					},(IntroFloatingTextFadeDelay+0.25)*1000);
					
					IntroAnimationStep++;
				}
				break;	
			
			case dynamicCondition++:	//JUMPING
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[18],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//blue fade in
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpingCoverName, IntroJumpFlashFadeInTime, 1, 0);
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.03,0.25,16,16,"stay");
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//shake shake
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,5.1,32,32,"stay");
					IntroAnimationStep++;
				}
				break;
			
			case dynamicCondition++:	//discharge
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					//newAnimatedElementOpacity(outputDocument, IntroJumpChargingCoverName, 0.1, 0, 1);
					newAnimatedElementOpacity(outputDocument, IntroJumpChargingImageName, 0.1, 0, 1);
					
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//blue fade out
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpingCoverName, IntroJumpFlashFadeOutTime, 0, 1);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//shake shake 2
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,1.6,16,16,"stay");
					IntroAnimationStep++;
				}
				break;
			
			case dynamicCondition++:	//shake shake 3
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.75,8,8,"zero");
					IntroAnimationStep++;
				}
				break;
			
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					if(IntroFastForwardInProgress){
						console.log("Skipped to after-jump.");
						introFastFOFF(outputDocument);
					}
					console.log("Skipped to after-jump.");
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
					
					IntroFastForwardAllowed = true;
					
					
				}
				break;	
				
			case dynamicCondition++:	//emergency jump
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[19],0.05);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//successful
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[20],0.05, true);
					IntroAnimationStep++;
				}
				break;				
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
					}
				break;
				
			case dynamicCondition++:	//sensors
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[21],0.05);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[22],0.05, true);
					IntroAnimationStep++;
				}
				break;				
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
					}
				break;
				
			case dynamicCondition++:	//searching
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[23],0.05);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//not found
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[24],0.05, true);
					IntroAnimationStep++;
				}
				break;				
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
					}
				break;	
				
			case dynamicCondition++:	//alarm
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[25],0.05);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//lifted
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[26],0.05, true);
					clearInterval(IntroCombatAlertID);
					IntroAnimationStep++;
				}
				break;				
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
					}
				break;

			case dynamicCondition++:	//full dmg scan
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[27],0.05);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 7.5, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//start alerts
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					//activeAlertID = setInterval(introRedAlert, 2500, outputDocument);
					IntroCollisionAlertID = setInterval(introCollisionAlert, IntroCollisionAlertFullLength*1000, outputDocument);
					introCollisionAlert(outputDocument);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[29],IntroAlertTextSpeed,IntroCombinedMessages[28],IntroAlertHeaderSpeed);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					IntroAnimationStep++;	
				}
				break;			
				
			case dynamicCondition++:	//aborted
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[30],0.05, true);
					IntroAnimationStep++;	
				}
				break;			
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[31],0.05);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[32],0.05, true);
					IntroAnimationStep++;	
				}
				break;		
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//attempting
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[33],0.05);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 4.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//shake shake
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.6,16,16,"zero");
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[35],IntroAlertTextSpeed,IntroCombinedMessages[34],IntroAlertHeaderSpeed);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					IntroAnimationStep++;	
				}
				break;			
			
			case dynamicCondition++:	//failed
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[36],0.05, true);
					IntroAnimationStep++;	
				}
				break;		
					
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//restarting
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[37],0.05);
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 2.25, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;
			
			case dynamicCondition++:	//failed to start
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[38],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
					
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking thrusters
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[39],0.05);
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;
			
			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[40],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//shake atmo
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,2.90,2,2,"zero");
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//alert atmo
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[42],IntroAlertTextSpeed,IntroCombinedMessages[41],IntroAlertHeaderSpeed);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//activating thrusters
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[43],0.05);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//thrust shake
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.6,8,8,"stay");
					IntroAnimationStep++;
				}
				break;	
			
			case dynamicCondition++:	//success
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[44],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//more shake
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,7,4,4,"stay");
					IntroAnimationStep++;
				}
				break;			
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//restarting cas
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[45],0.05);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 2.25, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//failed
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[46],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//thrust shake
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,0.8,16,16,"stay");
					IntroAnimationStep++;
				}
				break;			
				
			case dynamicCondition++:	//checking shields
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[47],0.05);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[49],IntroAlertTextSpeed,IntroCombinedMessages[48],IntroAlertHeaderSpeed);
					IntroAnimationStep++;
				}
				break;
			
			case dynamicCondition++:	//thrust shake
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,8,4,4,"stay");
					IntroAnimationStep++;
				}
				break;			
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					IntroAnimationStep++;	
				}
				break;			
				
			case dynamicCondition++:	//inactive
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[50],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//starting shields
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[51],0.05);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 2.25, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//success
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[52],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//shake stronger
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,7,6,6,"stay");
					IntroAnimationStep++;
				}
				break;			
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//raising shields
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[53],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 3.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[55],IntroAlertTextSpeed,IntroCombinedMessages[54],IntroAlertHeaderSpeed);
					IntroAnimationStep++;
				}
				break;
			
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					IntroAnimationStep++;	
				}
				break;		
			
			case dynamicCondition++:	//shield glow
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					//newAnimatedElementOpacity(outputDocument, IntroJumpChargingCoverName, 1.2, 0.25, 0);
					newAnimatedElementOpacity(outputDocument, IntroJumpChargingImageName, 1.2, 0.25, 0);
					
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//shields active
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[56],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//shake crash
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationShakeElement(outputDocument,IntroMessagesLayerName,0.02,1,48,48,"zero");
					IntroAnimationStep++;
				}
				break;			
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, 0.5);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, 0.5);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[58],IntroAlertTextSpeed,IntroCombinedMessages[57],IntroAlertHeaderSpeed);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//crash fade in
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroCrashCoverName, IntroCrashFadeTime, 1, 0);
					newAnimatedElementOpacity(outputDocument, IntroFadeCoverName, IntroCrashFadeTime, 1, 0);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//cleanup 1
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					//newAnimatedElementOpacity(outputDocument, IntroJumpChargingCoverName, 0.1, 0, 0.25);
					newAnimatedElementOpacity(outputDocument, IntroJumpChargingImageName, 0.1, 0, 0.25);
					
					clearInterval(IntroCollisionAlertID);
					IntroAnimationStep++;
				}
				break;
			
			case dynamicCondition++:	//crash fade out
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroCrashCoverName, 5.5, 0, 1);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//cleanup 2
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introResetLogMessages(outputDocument);
					introResetAlerts(outputDocument);
					IntroAnimationStep++;
				}
				break;
			
			case dynamicCondition++:	//black fade out
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroFadeCoverName, 8, 0, 1);
					IntroAnimationStep++;
				}
				break;
			
			case dynamicCondition++:	//empty
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,[" ",textColors[4]],0.01); 
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,[" ",textColors[4]],0.01,true); 
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//blinking
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.39, 4, " _", "clear", "")
					IntroAnimationStep++;
				}
				break;	
			
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//restoring system
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[59],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 3.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//success
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[60],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//system checkup
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[61],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 2.25, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//fully operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[62],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
						
			case dynamicCondition++:	//Crash landing
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[63],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//scanning active threats
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[64],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//not found
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[65],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//full damage scan
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[66],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 1.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//aborted
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[67],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//severe damage
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[68],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//commander's status
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[69],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 2.25, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//alive, not responding
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[70],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//calling bridge
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[71],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 3.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//no reply
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[72],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//no reply from command
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[73],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//Entering emergency mode
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[74],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//running critical subsystems checkup
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[75],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking life support
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[76],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 1.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[77],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//medical destroyed
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[78],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking ventilation
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[79],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 1.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[80],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//hull breaches
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[81],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking power system
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[82],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 1.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[83],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//low power
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[84],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking primary
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[85],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//not responding
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[86],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking secondary
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[87],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//not responding
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[88],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking power cells
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[89],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[90],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking comms
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[91],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 1.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[92],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//no signal
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[93],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking main antenna
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[94],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[95],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking direct antenna
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[96],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[97],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking defense
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[98],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 1.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[99],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//limited capabilities
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[100],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking shields
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[101],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//not responding
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[102],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking point defense
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[103],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 1.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//partially operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[104],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking repair drones
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[105],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[106],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking navigation
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[107],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 1.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[108],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//ship immobilised
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[109],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking main engine
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[110],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//not responding
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[111],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking second engine
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[112],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//not responding
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[113],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking thrusters
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[114],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//not responding
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[115],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking hyperdrive
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[116],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//not responding
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[117],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking jumpdrive
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[118],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 2.25, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//unknown code
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[119],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//please update
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[120],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking virtualiser
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[121],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//inactive
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[122],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//start virtualiser
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[123],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//success
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[124],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//loading persona
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[125],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//interrupted
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[126],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//not enough energy
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[127],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//restarting main power
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[128],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 1.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//failed to start
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[129],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//restarting secondary power
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[130],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 1.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//failed to start
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[131],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//checking emergency power
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[132],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//inactive
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[133],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//start emergency power
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[134],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//success
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[135],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//loading emergency 1
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[136],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 3.00, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//interrupted
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[137],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//loading error 1
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[138],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 2.25, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//interrupted
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[139],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//loading emergency 2
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[140],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 1.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//interrupted
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[141],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//loading error 2
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[142],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 0.75, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//interrupted
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[143],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//loading emergency 3
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[144],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 4.50, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
			
			case dynamicCondition++:	//alert root unknown
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[146],IntroAlertTextSpeed,IntroCombinedMessages[145],IntroAlertHeaderSpeed);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//alert autopilot crash
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[148],IntroAlertTextSpeed,IntroCombinedMessages[147],IntroAlertHeaderSpeed);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//failed
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[149],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//restarting autopilot
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[150],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 2.25, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//alert revoke root
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[152],IntroAlertTextSpeed,IntroCombinedMessages[151],IntroAlertHeaderSpeed);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//success
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[153],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//loading error 3
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[154],0.05);
					IntroAnimationStep++;
				}
				break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.25, 3.0, "...", "skip", "")
					IntroAnimationStep++;
				}
				break;	
				
			case dynamicCondition++:	//success
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[155],0.05, true);
					IntroAnimationStep++;	
				}
				break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//transfering control
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[156],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
			case dynamicCondition++:	//renaming
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[157],0.05);
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",textColors[0]],0.01, true); //empty reply
					IntroAnimationStep++;
				}
				break;

			case dynamicCondition++:	//move
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, ConsoleMessageOffset,true,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					IntroAnimationStep++;
				}
				break;
				
				
			case dynamicCondition++:	//skip
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					//newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,IntroCombinedMessages[3],0.55);
					IntroAnimationStep++;
					IntroAnimationStep=9999;
					//console.log(IntroAnimationStep,introMessagesTiming[IntroAnimationStep-1], introMessagesDelays[IntroAnimationStep], introMessagesTiming[IntroAnimationStep]);
				}
				//console.log(IntroAnimationStep, dynamicCondition);
				break;
				
			case dynamicCondition++:	//alert
				if(IntroTickCounter == introMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[54],IntroAlertTextSpeed,IntroCombinedMessages[53],IntroAlertHeaderSpeed);
					IntroAnimationStep++;
				}
				break;
			
		}
		IntroTickCounter++;
		
		
		
		if(IntroAnimationStep <= introMessagesTiming.length) {
			setTimeout(() => {introPlayIntro(outputDocument);},10);
		}
	}
}





//intro specific

function introInit(outputDocument){
	
	IntroAnimationPaused = false;
	IntroImageButtonPauseON = false;
	
	IntroFastForwardAllowed = true;
	IntroFastForwardInProgress = false;
	IntroImageButtonFastFON = false;
	IntroFastForwardStage = 0;
	
	
	
	IntroImageButtonSkipON = false;
	
	mainBody = outputDocument.getElementById("mainBody");
	
	mainMessagesLayer = outputDocument.getElementById("mainMessagesLayer");
	if(mainMessagesLayer === null) {
		mainMessagesLayer = introNewElement(outputDocument,mainBody,"mainMessagesLayer","messagesLayer");
	}

	introLayer = outputDocument.getElementById(IntroMessagesLayerName);
	if(introLayer === null) {
		introLayer = introNewElement(outputDocument,mainMessagesLayer,IntroMessagesLayerName,"animationMessages");
	}
	
	introLayer.innerHTML = "";
	
	backgroundImagesLayer = introNewElement(outputDocument,introLayer,IntroBackgroundImagesLayerName,"messagesGroup");
	introNewElement(outputDocument,backgroundImagesLayer,IntroImageConsoleBackgroundID,"imageClass","img",IntroImageConsoleBackgroundPath);
	
	introNewElement(outputDocument,introLayer,IntroFloatingMessagesLayerName,"messagesGroup");
	introNewElement(outputDocument,introLayer,IntroAlertMessagesLayerName,"messagesGroup");
	introNewElement(outputDocument,introLayer,"introAIMessages","messagesGroup");
	
	coversLayer = outputDocument.getElementById("introOverInterfaceCovers");
	if(coversLayer === null) {
		  coversLayer = introNewElement(outputDocument,mainMessagesLayer,"introOverInterfaceCovers","messagesGroup");
	}
	coversLayer.innerHTML = "";
	
	//introNewElement(outputDocument,coversLayer,IntroJumpChargingCoverName,"introInterfaceForegroundCover");
	introNewElement(outputDocument,coversLayer,"introOverInterfaceChargingImage","coverImageClass","img","RESOURCES/ChargeFrame.png");
	
	introNewElement(outputDocument,coversLayer,IntroCombatAlertCoverName,"introInterfaceForegroundCover");
	introNewElement(outputDocument,coversLayer,IntroCollisionAlertCoverName,"introInterfaceForegroundCover");
	introNewElement(outputDocument,coversLayer,IntroJumpingCoverName,"introInterfaceForegroundCover");
	
	foregroundImagesLayer = introNewElement(outputDocument,introLayer,IntroForegroundImagesLayerName,"messagesGroup");
	buttonPanelElement = introNewElement(outputDocument,foregroundImagesLayer,IntroImageButtonPanelID,"imageClass","img",IntroImageButtonPanelPath);
	
	tmpElement = introNewElement(outputDocument,foregroundImagesLayer,IntroImageButtonPauseID,"imageClass introButton","img",IntroImageButtonPausePathOFF);
	outputDocument.getElementById(IntroImageButtonPauseID).onclick = function() { introPause(outputDocument); };
	tmpElement = introNewElement(outputDocument,foregroundImagesLayer,IntroImageButtonFastFID,"imageClass introButton","img",IntroImageButtonFastFPathOFF);
	outputDocument.getElementById(IntroImageButtonFastFID).onclick = function() { introFastF(outputDocument); };
	tmpElement = introNewElement(outputDocument,foregroundImagesLayer,IntroImageButtonSkipID,"imageClass introButton","img",IntroImageButtonSkipPathOFF);
	outputDocument.getElementById(IntroImageButtonSkipID).onclick = function() { introSkip(outputDocument); };
	
	introNewElement(outputDocument,coversLayer,IntroFadeCoverName,"introInterfaceForegroundCover");
	introNewElement(outputDocument,coversLayer,IntroCrashCoverName,"introInterfaceForegroundCover");
	
	introResetLogMessages(outputDocument);
	introResetAlerts(outputDocument);
	
	introMessagesTiming = calculateTimings(IntroCombinedMessagesTiming);
	
	introRegisterEvent(outputDocument);
	
}
function introNewElement(outputDocument, parentElement, childID, childClass, childTag="div", childArgument1="" ){
	newElement = outputDocument.createElement(childTag);
	newElement.className = childClass;
	newElement.id = childID;
	
	if(childTag="img") newElement.src = childArgument1;
	
	parentElement.append(newElement);
	return newElement;
}

function introPause(outputDocument){
	if(!IntroFastForwardInProgress) {
		if(IntroImageButtonPauseON) introPauseOFF(outputDocument);
		else introPauseON(outputDocument);
	}
}
function introPauseON(outputDocument){
	IntroImageButtonPauseON = true;
	IntroAnimationPaused = true;
	outputDocument.getElementById(IntroImageButtonPauseID).src = IntroImageButtonPausePathON;
}
function introPauseOFF(outputDocument){
	IntroImageButtonPauseON = false; 
	IntroAnimationPaused = false;
	outputDocument.getElementById(IntroImageButtonPauseID).src = IntroImageButtonPausePathOFF;
}

function introFastF(outputDocument){
	//if(IntroImageButtonFastFON) introFastFOFF(outputDocument);
	//else introFastFON(outputDocument);
	if(!IntroImageButtonFastFON) introFastFON(outputDocument);
}
function introFastFON(outputDocument){
	if(IntroFastForwardAllowed) {
		
		IntroFastForwardInProgress = true;
		IntroImageButtonFastFON = true;
		introPauseON(outputDocument);
		
		outputDocument.getElementById(IntroImageButtonFastFID).src = IntroImageButtonFastFPathON;
		
		introFastForward(outputDocument);
	}
}
function introFastFOFF(outputDocument, skipToStage = -1){
	IntroImageButtonFastFON = false;
	IntroFastForwardInProgress = false;
	if(skipToStage != -1) IntroFastForwardStage = skipToStage;
	outputDocument.getElementById(IntroImageButtonFastFID).src = IntroImageButtonFastFPathOFF
}
function introFastForward(outputDocument){
	
	if(IntroActiveAnimationCounter==0){
		
		switch(IntroFastForwardStage) {
			case -1:
				console.log("Not at intro.");
				break;
			case 0:
				console.log("Skipping pre-jump stage.");
				IntroTickCounter = (3310 - 5);
				IntroAnimationStep = 45;
				IntroFastForwardStage++;
				
				//console.log(outputDocument);
				
				//introFastFOFF(outputDocument);
				introPauseOFF(outputDocument);
				
				break;
			case 1:
			
				break;
		}
	}
	else {
		setTimeout(() => {introFastForward(outputDocument);},25);
		console.log("Waiting for "+IntroActiveAnimationCounter+" elements to finish.");
	}
}


function introSkip(outputDocument){
	if(IntroImageButtonSkipON) introSkipOFF(outputDocument);
	else introSkipON(outputDocument);
}
function introSkipON(outputDocument){
	IntroImageButtonSkipON = true;
	outputDocument.getElementById(IntroImageButtonSkipID).src = IntroImageButtonSkipPathON;
}
function introSkipOFF(outputDocument){
	IntroImageButtonSkipON = false;
	outputDocument.getElementById(IntroImageButtonSkipID).src = IntroImageButtonSkipPathOFF
}

function introCombatAlert(outputDocument) {
	introCombatAlertOn(outputDocument);
	setTimeout(introCombatAlertOff,1000*(IntroCombatAlertIncreaseTime+IntroCombatAlertActiveTime),outputDocument);
}
function introCombatAlertOn(outputDocument) {
	newAnimatedElementOpacity(outputDocument, IntroCombatAlertCoverName, IntroCombatAlertIncreaseTime, 0.25);
}
function introCombatAlertOff(outputDocument) {
	newAnimatedElementOpacity(outputDocument, IntroCombatAlertCoverName, IntroCombatAlertDecreaseTime, 0.0);
}
	
function introCollisionAlert(outputDocument) {
	introCollisionAlertOn(outputDocument);
	setTimeout(introCollisionAlertOff,1000*(IntroCollisionAlertIncreaseTime+IntroCollisionAlertActiveTime),outputDocument);
}
function introCollisionAlertOn(outputDocument) {
	newAnimatedElementOpacity(outputDocument, IntroCollisionAlertCoverName, IntroCollisionAlertIncreaseTime, 0.15);
}
function introCollisionAlertOff(outputDocument) {
	newAnimatedElementOpacity(outputDocument, IntroCollisionAlertCoverName, IntroCollisionAlertDecreaseTime, 0.0);
}

function introMoveAlertMessages(outputDocument, alertsArray, effectSpeed) {
	var alertsLength = alertsArray.length;
	var newBaseX = window.innerWidth/2 - 150 - 30;
	
	IntroAlertIsMoving = true;
	
	newAnimatedElementScale(outputDocument,alertsArray[alertsArray.length-1],effectSpeed,1);
	//animatedMoveElement(outputDocument,alertsArray[alertsArray.length-1],0,0,AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,0,effectSpeed);
	animatedMoveElement(outputDocument,alertsArray[alertsArray.length-1],0,0,newBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,0,effectSpeed);
				
	for(var i = 0; i < (alertsLength - 1); i++){
		//animatedMoveElement(outputDocument,alertsArray[i],AlertBaseX - AlertPopupPositionX + (AlertOffsetBaseX*(alertsLength - i - 2)),AlertBaseY - AlertPopupPositionY + (AlertOffsetBaseY*(alertsLength - i - 2)),AlertBaseX - AlertPopupPositionX + (AlertOffsetBaseX*(alertsLength - i - 1)),AlertBaseY - AlertPopupPositionY + (AlertOffsetBaseY*(alertsLength - i - 1)),0,effectSpeed);
		animatedMoveElement(outputDocument,alertsArray[i],newBaseX - AlertPopupPositionX + (AlertOffsetBaseX*(alertsLength - i - 2)),AlertBaseY - AlertPopupPositionY + (AlertOffsetBaseY*(alertsLength - i - 2)),newBaseX - AlertPopupPositionX + (AlertOffsetBaseX*(alertsLength - i - 1)),AlertBaseY - AlertPopupPositionY + (AlertOffsetBaseY*(alertsLength - i - 1)),0,effectSpeed);
		newAnimatedElementOpacity(outputDocument, alertsArray[i], effectSpeed, Math.pow(IntroAlertScaleShrinkScale,(alertsLength - i - 1)), Math.pow(IntroAlertScaleShrinkScale,(alertsLength - i - 2)));
	}	
	
	setTimeout(() => { IntroAlertIsMoving = false; },(effectSpeed*1000+100));
}
function introMoveAlertMessagesOnResize(outputDocument, resizeEventCounter, alertsArray = IntroAlertMessagesWindowsArray, effectSpeed = 0.25){
	
	
	if(!IntroAlertIsMoving) {
		
		if(resizeEventCounter==IntroResizeEventsCounter) {
		
			//console.log("Repositioning element");
			
			var alertsLength = alertsArray.length;
			var newBaseX = window.innerWidth/2 - 150 - 30;
						
			for(var i = 0; i<=alertsLength-1;i++){
				console.log(getComputedStyle(outputDocument.getElementById(alertsArray[i])).transform);
				var tmpMatrix = getComputedStyle(outputDocument.getElementById(alertsArray[i])).transform.split(')')[0].substring(7).split(',');
				var oldX = tmpMatrix[4].trim();
				var oldY = tmpMatrix[5].trim();
				
				console.log("oldX: " + oldX);
				//console.log("newX: " + newBaseX);
				console.log("oldY: " + oldY);
				//console.log("newY: " + (AlertBaseY - AlertPopupPositionY + (AlertOffsetBaseY*(alertsLength - i - 1))));
				
				//animatedMoveElement(outputDocument,alertsArray[i],newBaseX - AlertPopupPositionX + (AlertOffsetBaseX*(alertsLength - i - 1)),AlertBaseY - AlertPopupPositionY + (AlertOffsetBaseY*(alertsLength - i - 1)),newBaseX - AlertPopupPositionX + (AlertOffsetBaseX*(alertsLength - i - 1)),AlertBaseY - AlertPopupPositionY + (AlertOffsetBaseY*(alertsLength - i - 1)),0,effectSpeed);
				animatedMoveElement(outputDocument,alertsArray[i],oldX,oldY,newBaseX - AlertPopupPositionX + (AlertOffsetBaseX*(alertsLength - i - 1)),AlertBaseY - AlertPopupPositionY + (AlertOffsetBaseY*(alertsLength - i - 1)),0,effectSpeed);
			}
			
			setTimeout(() => {
			IntroResizeFixInProgress = false;
			IntroResizeEventsCounter = 0;
			},(effectSpeed*1000+100));
		}
		else{
			console.log("Resize in progress");
			var tmpResizeCounter = IntroResizeEventsCounter;
			setTimeout(() => {
				introMoveAlertMessagesOnResize(outputDocument, tmpResizeCounter, alertsArray, effectSpeed);
			},250);
		}
	}
	else {
		setTimeout(() => {
		introMoveAlertMessagesOnResize(outputDocument, resizeEventCounter, alertsArray, effectSpeed);
		},250);
	}
}

function introMoveLogMessages(outputDocument, logArray, logOffset, fadeLast = false, fadeIndex = 0, fadeDelay = 1, fadeTime = 1 ){
	var logLength = logArray.length;
	
	for(var i = 0; i<logArray.length;i++){
		animatedMoveElement(outputDocument,logArray[i],0,-1*(logLength-1-i)*logOffset,0,-1*(logLength	-i)*logOffset,0,0.25);
	}
	if(fadeLast && logArray.length > fadeIndex){
		
		if(IntroFastForwardStage != -1){ 
				IntroActiveAnimationCounter++;
				if(IntroDebugActive)console.log("Delay fade start, "+IntroActiveAnimationCounter);
		}
		
		setTimeout(() => {
			newAnimatedElementOpacity(outputDocument, logArray[logLength-1-fadeIndex], fadeTime, 0.0, 1.0);
			if(IntroFastForwardStage != -1){ 
				IntroActiveAnimationCounter--;
				if(IntroDebugActive)console.log("Delay fade stop, "+IntroActiveAnimationCounter);
			}
			},fadeDelay*1000);
	}
}
function introDelayedElementOpacity(outputDocument, fadingElement, fadeDelay, fadeTime, endOpacity = 0, startOpacity = 1, elapsedTime = 0){
	
	
	var currentFadingElement = fadingElement;
	
	if(elapsedTime==0){		
		console.log("Delayed Opacity Start");
		if(IntroFastForwardStage != -1) {
			//IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Delayed Opacity Element start, "+IntroActiveAnimationCounter);
		}
		
		//create copy of array if TMP were to be changed outside of function
		
		if(Array.isArray(fadingElement)) {
			currentFadingElement = [...fadingElement];
		}
	}
	
	if(elapsedTime<fadeDelay)
	{
		//console.log("Delayed Opacity Continue, "+elapsedTime+" "+minorTickLength);
		elapsedTime+=minorTickLength;
		setTimeout(() => {
			introDelayedElementOpacity(outputDocument, currentFadingElement, fadeDelay, fadeTime, endOpacity, startOpacity, elapsedTime)
			},minorTickLength*1000);
	}
	else
	{
		console.log("Delayed Opacity End");
		if(Array.isArray(currentFadingElement)){
			for(var i = 0; i < currentFadingElement.length; i++) {
				introAnimatedElementOpacity(outputDocument, currentFadingElement[i], fadeTime, endOpacity, startOpacity);
			}
		}
		else {
			introAnimatedElementOpacity(outputDocument, currentFadingElement, fadeTime, endOpacity, startOpacity);
		}
		
		if(IntroFastForwardStage != -1){ 
			//IntroActiveAnimationCounter--;
			if(IntroDebugActive)console.log("Delayed Opacity Element stop, "+IntroActiveAnimationCounter);
		}
	}
}
function introAnimatedElementOpacity(outputDocument, elementID, animationLength, endOpacity, startingOpacity = -1, elapsedTime = 0) {
	if(animationLength <= 0) return;
	
	if(elapsedTime==0){		
		if(IntroFastForwardStage != -1) {
			//IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("Opacity Intro Element start, "+IntroActiveAnimationCounter);
		}
	}
	
	opacityElement = outputDocument.getElementById(elementID);
	
	if(startingOpacity==-1) startingOpacity = opacityElement.style.opacity*1;
	
	var newOpacity = (endOpacity-startingOpacity)*(elapsedTime/animationLength)+startingOpacity;
	opacityElement.style.opacity=newOpacity;
	
	if(endOpacity > startingOpacity && opacityElement.style.visibility != "visible") opacityElement.style.visibility="visible";
	
	if(elapsedTime<animationLength)
	{
		elapsedTime+=minorTickLength;
		setTimeout(() => {introAnimatedElementOpacity(outputDocument, elementID, animationLength, endOpacity, startingOpacity, elapsedTime);},minorTickLength*1000);
	}
	else{
		opacityElement.style.opacity=endOpacity;
		if(endOpacity==0.0) opacityElement.style.visibility="hidden";
		
		if(IntroFastForwardStage != -1){ 
			//IntroActiveAnimationCounter--;
			if(IntroDebugActive)console.log("Opacity Intro Element stop, "+IntroActiveAnimationCounter);
		}
	}
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
		
		if(logIsReply)newDisplayAnimatedMessage(outputDocument,tmpElement.id,IntroConsoleX_2,IntroConsoleY,messageStruct,messageStruct[0].length*displaySpeed);
		else newDisplayAnimatedMessage(outputDocument,tmpElement.id,IntroConsoleX,IntroConsoleY,messageStruct,messageStruct[0].length*displaySpeed);
	}
	else {
		console.log("Intro not initialised");
	}
}
function introResetLogMessages(outputDocument){
	if(messagesGroup = outputDocument.getElementById(IntroFloatingMessagesLayerName)) {
		IntroFloatingTextMessagesArray = [];
		IntroFloatingTextRepliesArray = [];
		
		messagesGroup.innerHTML = "";
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
		
		IntroAlertIsMoving = true;
		
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("New alert start, "+IntroActiveAnimationCounter);
		}
		
		setTimeout(() => {
			newDisplayAnimatedMessage(outputDocument,tmpAlertText.id,NaN,NaN,messageStruct,messageStruct[0].length*messageSpeed);
			newDisplayAnimatedMessage(outputDocument,tmpAlertHeader.id,NaN,NaN,headerStruct,headerStruct[0].length*headerSpeed);
		},1000*IntroAlertTextDelay);
		
		setTimeout(() => {
			newAnimatedElementScale(outputDocument,tmpAlertWindow.id,IntroAlertScaleGrowthTime,IntroAlertScaleGrowthScale);
		},1000*IntroAlertScaleGrowthDelay);
		
		
		setTimeout(() => {
			if(IntroFastForwardStage != -1){ 
				IntroActiveAnimationCounter--;
				if(IntroDebugActive)console.log("New alert stop, "+IntroActiveAnimationCounter);
			}
		},1000*(IntroAlertTextDelay+IntroAlertScaleGrowthDelay));
		
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
function introResetAlerts(outputDocument){
	
	if(messagesGroup = outputDocument.getElementById(IntroAlertMessagesLayerName)) {
		IntroAlertMessagesWindowsArray = [];
		IntroAlertMessagesBackgroundsArray = [];
		IntroAlertMessagesContentArray = [];
		IntroAlertMessagesHeadersArray = [];
		IntroAlertMessagesTextArray = [];
		IntroAlertMessagesFootersArray = [];
		IntroAlertMessagesForegroundsArray = [];
		
		messagesGroup.innerHTML = "";
	}
	else
	{
		console.log("Intro not initialised");
	}
}

function introNewAIReport(outputDocument){
	
}


//fixed 

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


//animated

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
		targetTextbox.innerHTML = msgPart+"<span class='messagesHiddenText'>"+msgSpanPart+"</span>";
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


//outdated code


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
	








/*function IntroAnimationStepInit(outputDocument) {
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
}*/
/*function introFloatingMessage(outputDocument, floatingTextArray, messageStruct, displaySpeed){
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
*/
/*function AIMessageBlurr(outputDocument,elementID, blurrColor) {
	targetTextbox=outputDocument.getElementById(elementID);
	tmpTextBlurr = "0 0 ";
	
	tmpTextBlurr += (AIMessageBlurrMaxVal+AIMessageBlurrMinVal)/2 + (AIMessageBlurrMaxVal-AIMessageBlurrMinVal)/2 * Math.sin(AIMessageBlurrProgressValue);

	tmpTextBlurr+="px "+blurrColor;
	targetTextbox.style.textShadow = tmpTextBlurr;
	
	//console.log(AIMessageBlurrProgressValue + " " + tmpTextBlurr);
			    
	AIMessageBlurrProgressValue+=AIMessageBlurrStepChange;
	if(AIMessageBlurrProgressValue>(2*Math.PI)) AIMessageBlurrProgressValue-=2*Math.PI;
}
*/
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
/*function displayIntro(outputDocument) {
		
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
/*function newDisplayIntroPartOne(outputDocument, IntroTickCounter = 0) {
	//console.log(IntroTickCounter);
	if(!introAnimationPaused) {
	if(IntroTickCounter===0) {//init
		IntroTickCounter=8400;
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
	if(IntroTickCounter==100) { //'emergency jump' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[13],0.7);
	}
	if(IntroTickCounter==200) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[13][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==225) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[13][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==250) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[13][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==300) { //'successful' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[14],0.5,true);
	}
	if(IntroTickCounter==400) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==450) { //'checking sensors' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[10],0.9);
	}
	if(IntroTickCounter==575) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[10][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==600) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[10][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==625) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[10][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==675) { //'operational' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(IntroTickCounter==775) { //move 2
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==825) { //'scanning' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[11],1.2);
	}
	if(IntroTickCounter==975) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[11][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==1000) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[11][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==1025) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[11][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==1075) { //'not found' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[12],0.45,true);
	}
	if(IntroTickCounter==1150) { //move 3 
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==1200) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==1200) { //'RUN SYSTEM CHECK' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[15],1.5);
	}
	if(IntroTickCounter==1400) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==1450) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==1500) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==1550) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],textColors[4]]);
	}
	if(IntroTickCounter==1575) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==1600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==1650) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(IntroTickCounter==1650) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==1700) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
		
	}
	if(IntroTickCounter==1750) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],textColors[4]]);
	}
	if(IntroTickCounter==1800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==1850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==1900) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==1950) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],textColors[4]]);
	}
	if(IntroTickCounter==1950) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==2000) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==2025) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(IntroTickCounter==2050) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==2100) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==2150) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],textColors[4]]);
	}
	if(IntroTickCounter==2200) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}	
	if(IntroTickCounter==2250) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==2300) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==2350) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],textColors[4]]);
	}
	if(IntroTickCounter==2400) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==2400) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(IntroTickCounter==2450) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==2475) { //alarm 1
		redAlert(outputDocument);
		activeAlertID = setInterval(redAlert, 2500, outputDocument);
		
		newDisplayElement(outputDocument,outputWarningWindows[0],AlertPopupPositionX,AlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[0],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[0], NaN,NaN,introPopupMessages[17],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[0],0.2,1.5);
	}
	if(IntroTickCounter==2500) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==2550) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],textColors[4]]);
	}
	if(IntroTickCounter==2550) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[0],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[0],0,0,AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,0,1);
	}
	if(IntroTickCounter==2600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}	
	if(IntroTickCounter==2650) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==2700) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==2750) { //'aborted' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[16],0.35,true);
	}
	if(IntroTickCounter==2825) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==2875) { //checking CAS show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[18],1.85);
	}
	if(IntroTickCounter==3100) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[18][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==3125) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[18][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==3150) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[18][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==3200) { //'operational' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(IntroTickCounter==3300) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==3350) { //activate CAS show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[19],2.05);
	}
	if(IntroTickCounter==3600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==3625) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}	
	if(IntroTickCounter==3625) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==3650) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==3675) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0],textColors[4]]);
	}
	if(IntroTickCounter==3700) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==3725) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==3750) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==3775) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0],textColors[4]]);
	}
	if(IntroTickCounter==3800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==3825) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==3850) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==3850) { //'CAS error' alarm
		newDisplayElement(outputDocument,outputWarningWindows[1],AlertPopupPositionX,AlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[1],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[1], NaN,NaN,introPopupMessages[20],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[1], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[1],0.2,1.5);
	}
	if(IntroTickCounter==3875) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0],textColors[4]]);
	}
	if(IntroTickCounter==3900) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==3925) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==3925) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[1],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[1],0,0,AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,0,1);
		
		animatedMoveElement(outputDocument,outputWarningWindows[0],AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 1, 0.8);
		//newAnimatedElementScale(outputDocument,outputWarningWindows[0],0.5,0.75);
	}
	if(IntroTickCounter==3950) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==4000) { //'failed' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[0],0.30,true);
	}
	if(IntroTickCounter==4075) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==4075) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(IntroTickCounter==4100) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==4125) { //'restart CAS' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[21],1.95);
	}
	if(IntroTickCounter==4350) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[21][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==4375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==4400) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==4450) { //'failed to start' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[3],0.75,true);
	}
	if(IntroTickCounter==4550) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(IntroTickCounter==4575) { //move 3
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==4625) { //'check thrusters' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[22],1.6);
	}
	if(IntroTickCounter==4825) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[22][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==4850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[22][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==4875) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[22][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==4875) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==4925) { //'operational' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(IntroTickCounter==5025) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==5075) { //'burn thrusters' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[23],1.35);
	}
	if(IntroTickCounter==5250) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[23][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==5300) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[23][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==5325) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(IntroTickCounter==5350) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[23][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==5375) { //'entering atmosphere' alarm
		newDisplayElement(outputDocument,outputWarningWindows[2],AlertPopupPositionX,AlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[2],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[2], NaN,NaN,introPopupMessages[24],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[2], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[2],0.2,1.5);
	}
	if(IntroTickCounter==5375) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==5425) { //'activated' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[5],0.45,true);
	}
	if(IntroTickCounter==5450) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[2],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[2],0,0,AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,0,1);
		
		animatedMoveElement(outputDocument,outputWarningWindows[1],AlertBaseX-AlertPopupPositionX,AlertBaseY-AlertPopupPositionY,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[1], 1, 0.8);
		
		animatedMoveElement(outputDocument,outputWarningWindows[0],AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY,AlertBaseX-AlertPopupPositionX+AlertOffsetBaseX*2,AlertBaseY-AlertPopupPositionY+AlertOffsetBaseY*2,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 1, 0.6);
		//newAnimatedElementScale(outputDocument,outputWarningWindows[0],0.5,0.75);
	}
	if(IntroTickCounter==5500) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==5550) { //'restart CAS' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[21],1.95);
	}
	if(IntroTickCounter==5775) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==5825) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==5825) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==5825) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(IntroTickCounter==5875) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==5925) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==5975) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==6025) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==6075) { //... 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==6125) { //'failed to start' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[3],0.75,true);
	}
	if(IntroTickCounter==6250) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==6275) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(IntroTickCounter==6300) { //'checking shields' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[25],1.25);
	}
	if(IntroTickCounter==6300) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==6400) { //'thruster damage' alarm
		newDisplayElement(outputDocument,outputWarningWindows[3],AlertPopupPositionX,AlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[3],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[3], NaN,NaN,introPopupMessages[26],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[3], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[3],0.2,1.5);
	}
	if(IntroTickCounter==6475) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[25][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==6475) { //downscale alarm
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
	if(IntroTickCounter==6500) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[25][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==6525) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[25][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==6575) { //'inactive' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(IntroTickCounter==6650) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==6700) { //'starting shields' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[28],1.35);
	}
	if(IntroTickCounter==6850) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(IntroTickCounter==6875) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[28][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==6900) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[28][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==6925) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[28][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==6975) { //'success' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[5],0.4,true);
	}
	if(IntroTickCounter==7050) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime/2, 0.5);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime/2, 0.5);
	}
	if(IntroTickCounter==7050) { //move 3
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==7100) { //'raising shields' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[29],0.85);
	}
	if(IntroTickCounter==7175) { //'imminent crash' alarm
		newDisplayElement(outputDocument,outputWarningWindows[4],AlertPopupPositionX,AlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[4],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[4], NaN,NaN,introPopupMessages[30],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[4], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[4],0.2,1.5);
	}
	if(IntroTickCounter==7225) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[29][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==7250) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[29][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==7250) { //downscale alarm
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
	if(IntroTickCounter==7275) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[29][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==7325) { //'success' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[5],0.4,true);
	}
	if(IntroTickCounter==7400) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==7425) { //alarm
		newDisplayElement(outputDocument,outputWarningWindows[5],AlertPopupPositionX,AlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[5],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[5], NaN,NaN,introPopupMessages[32],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[5], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[5],0.2,1.5);
	}
	if(IntroTickCounter==7450) { //fade 1
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==7460) { //CRASH
		clearInterval(activeAlertID);
		newAnimatedElementOpacity(outputDocument,"introOverInterfaceCrashCover",0.05,1.0);
	}
	if(IntroTickCounter==7500) { //reset 2
		//newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		//newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(IntroTickCounter==7500) { //general reset
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
	if(IntroTickCounter==7700) { //fade to black
		newAnimatedElementOpacity(outputDocument,"introOverInterfaceCrashCover",6.0,0.0);
	}
	if(IntroTickCounter==IntroAnimationPartTwoDelay) { // PART 2
		newDisplayIntroPartTwo(outputDocument);
	}
	IntroTickCounter+=1;
	}
	
	if(IntroTickCounter<=IntroAnimationPartTwoDelay)
	{
		setTimeout(() => {newDisplayIntroPartOne(outputDocument, IntroTickCounter);},10);
	}
}
*/
/*function newDisplayIntroPartTwo(outputDocument, IntroTickCounter = 0) {
	
	if(!introAnimationPaused) {
	if(IntroTickCounter==0) { //init
	
	}
	if(IntroTickCounter==100) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[".",textColors[4]]);
	}
	if(IntroTickCounter==150) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,["..",textColors[4]]);
	}
	if(IntroTickCounter==200) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,["...",textColors[4]]);
	}
	if(IntroTickCounter==275) { //'restoring system' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[33],0.8);
	}
	if(IntroTickCounter==400) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==450) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==500) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==550) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==650) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==700) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==750) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==900) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==975) { //'success' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[5],0.35,true);
	}
	if(IntroTickCounter==1050) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==1100) { //'RUNNING CHECKUP' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[15],1.5);
	}
	if(IntroTickCounter==1300) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==1350) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==1400) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==1450) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==1500) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==1550) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==1600) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==1675) { //'aborted' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[16],0.35,true);
	}
	if(IntroTickCounter==1750) { //move 2
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==1800) { //'severe damage detected' show finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[34],1.1,true);
	}
	if(IntroTickCounter==1850) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==1950) { //move 3
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==2000) { //'commander status' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[35],1.8);
	}
	if(IntroTickCounter==2225) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[35][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==2275) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[35][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==2300) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(IntroTickCounter==2325) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[35][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==2400) { //'alive, not responding' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[36],1.05,true);
	}
	if(IntroTickCounter==2550) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==2550) { //move 4
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==2600) { //'calling bridge' show 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[8], ConsoleX,ConsoleY,introPopupMessages[37],0.8);
	}
	if(IntroTickCounter==2725) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==2750) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==2775) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==2825) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==2875) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==2925) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==2975) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==3000) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(IntroTickCounter==3025) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==3075) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==3125) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==3175) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==3200) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(IntroTickCounter==3225) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==3275) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==3325) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==3350) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==3375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==3425) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==3475) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==3525) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==3575) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==3625) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==3700) { //'not responding' finish 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[9], ConsoleX_2,ConsoleY,introPopupMessages[9],0.8,true);
	}
	if(IntroTickCounter==3800) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(IntroTickCounter==3825) { //move 5
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==3875) { //"entering emergency" show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[38],1.15);
	}
	if(IntroTickCounter==4025) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[38][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==4075) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[38][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==4125) { //... finish 1
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[38][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==4200) { //move 1
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==4250) { //'emergency checkup' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[39],1.3);
	}
	if(IntroTickCounter==4425) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[39][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==4475) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[39][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==4525) { //... finish 2
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[39][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==4600) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==4625) { //fade 5
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==4650) { //'checking life support' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[40],1.5);
	}
	if(IntroTickCounter==4850) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[40][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==4900) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[40][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==4950) { //... 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[40][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==5000) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==5025) { //'operational' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(IntroTickCounter==5075) { //reset 5
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[8]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[9]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], 0.2, 1.0);
	}
	if(IntroTickCounter==5125) { //move 3
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==5175) { //'checking ai' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[41],1.05);
	}
	if(IntroTickCounter==5325) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[41][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==5375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[41][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==5400) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==5425) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[41][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==5450) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(IntroTickCounter==5500) { //'inactive' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(IntroTickCounter==5575) { //move 4
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==5625) { //'restarting AI' show 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[8], ConsoleX,ConsoleY,introPopupMessages[42],1.05);
	}
	if(IntroTickCounter==5775) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==5825) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==5850) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(IntroTickCounter==5875) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==5925) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==5950) { //'failed to start' finish 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[9], ConsoleX_2,ConsoleY,introPopupMessages[3],0.75,true);
	}
	if(IntroTickCounter==6075) { //move 5
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==6125) { //'check power system' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[43],1.7);
	}
	if(IntroTickCounter==6325) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[43][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==6375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[43][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==6375) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(IntroTickCounter==6375) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==6425) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[43][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==6500) { //'operational' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(IntroTickCounter==6600) { //move 1
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==6650) { //'power status' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[44],1.1);
	}
	if(IntroTickCounter==6800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[44][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==6825) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(IntroTickCounter==6850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[44][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==6875) { //fade 5
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==6900) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[44][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==6975) { //'low energy' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[45],0.5,true);
	}
	if(IntroTickCounter==7075) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==7125) { //'checking main power' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[46],1.55);
	}
	if(IntroTickCounter==7325) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[46][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==7325) { //reset 5
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[8]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[9]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], 0.2, 1.0);
	}
	if(IntroTickCounter==7375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[46][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==7400) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==7425) { //... 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[46][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==7500) { //'damaged' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[9],0.35,true);
	}
	if(IntroTickCounter==7575) { //move 3
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==7625) { //'checking secondary power' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[48],1.8);
	}
	if(IntroTickCounter==7850) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[48][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==7850) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(IntroTickCounter==7875) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==7900) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[48][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==7950) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[48][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==8025) { //'inactive' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(IntroTickCounter==8100) { //move 4
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==8150) { //'restarting secondary' show 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[8], ConsoleX,ConsoleY,introPopupMessages[49],1.9);
	}
	if(IntroTickCounter==8325) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(IntroTickCounter==8375) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==8375) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[49][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==8425) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[49][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==8475) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[49][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==8550) { //'failed to start' finish 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[9], ConsoleX_2,ConsoleY,introPopupMessages[3],0.75,true);
	}
	if(IntroTickCounter==8675) { //move 5
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==8725) { //'checking emergency' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[50],1.5);
	}
	if(IntroTickCounter==8825) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(IntroTickCounter==8900) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==8925) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[50][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==8975) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[50][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==9025) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[50][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==9100) { //'inactive' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(IntroTickCounter==9175) { //move 1
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==9225) { //'starting emergency' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[51],1.5);
	}
	if(IntroTickCounter==9350) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(IntroTickCounter==9425) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==9475) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==9475) { //fade 5
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==9525) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==9575) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==9625) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==9675) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==9725) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==9800) { //'success' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[5],0.35,true);
	}
	if(IntroTickCounter==9875) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==9925) { //'restarting AI' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[42],1.05);
	}
	if(IntroTickCounter==9925) { //reset 5
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[8]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[9]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], 0.2, 1.0);
	}
	if(IntroTickCounter==9975) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==10075) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==10125) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==10175) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==10225) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==10275) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==10325) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==10375) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==10425) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==10425) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(IntroTickCounter==10475) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==10525) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==10575) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==10650) { //'success' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[5],0.35,true);
	}
	if(IntroTickCounter==10675) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==10725) { //move 3
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==10750) { //move 3 again
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==10800) { //'AI activated' show finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[52],2.4);
	}
	if(IntroTickCounter==11075) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-3*ConsoleMessageOffset,0,-4*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*ConsoleMessageOffset,0,-3*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-ConsoleMessageOffset,0,-2*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*ConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*ConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==11125) { //'transfering control' show 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[8], ConsoleX,ConsoleY,introPopupMessages[53],2.0);
	}
	if(IntroTickCounter==11125) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(IntroTickCounter==11375) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==11425) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==11475) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==11525) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==11550) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==11575) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==11625) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==11675) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==11725) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==11775) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==11825) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==11875) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], ConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], ConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==11875) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==11925) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==11975) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==12000) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(IntroTickCounter==12025) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==12075) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==12125) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==12175) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==12225) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==12275) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==12300) { //cyan screen flash
		newAnimatedElementOpacity(outputDocument,"introOverInterfaceAICover",2.0,1.0);
	}	
	if(IntroTickCounter==12325) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(IntroTickCounter==12325) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==12375) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==12425) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==12475) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}	
	if(IntroTickCounter==12525) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",textColors[4]]);
	}
	if(IntroTickCounter==12575) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",textColors[4]]);
	}
	if(IntroTickCounter==12625) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",textColors[4]]);
	}
	if(IntroTickCounter==12675) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",textColors[4]]);
	}
	if(IntroTickCounter==12725) { //general reset
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
	if(IntroTickCounter==12750) { //fade to black
		newAnimatedElementOpacity(outputDocument,"introOverInterfaceAICover",3.0,0.0);
	}	
	if(IntroTickCounter==IntroAnimationPartThreeDelay) { //stage 3
		newDisplayIntroPartThree(outputDocument);
	}
	IntroTickCounter+=1;
	
	}
	if(IntroTickCounter<=IntroAnimationPartThreeDelay)
	{
		setTimeout(() => {newDisplayIntroPartTwo(outputDocument, IntroTickCounter);},10);
	}
}
*/
/*function newDisplayIntroPartThree(outputDocument, IntroTickCounter=0) {
	if(!introAnimationPaused) {
	if(IntroTickCounter==0) { //init
		console.log(IntroTickCounter);

		//AIMessageBlurrStepTime(outputDocument, outputWindowText[0], introAIMessages[1]);
		AIMessageBlurrID = setInterval(AIMessageBlurr, AIMessageBlurrStepTime, outputDocument, outputWindowText[0], textColors[4]);
	}
	if(IntroTickCounter==100) { //dot appears
		newAnimatedElementOpacity(outputDocument, outputWindowElements[0], 1.5, 1.0);
		newAnimatedElementOpacity(outputDocument, outputWindowText[0], 0.1, 0.0);
	}
	if(IntroTickCounter==200) { //width
		newSmoothIncreaseWidth(outputDocument,outputWindowElements[0],0.02,2,80,450,0);
	}
	if(IntroTickCounter==300) { //height
		newSmoothIncreaseHeight(outputDocument,outputWindowElements[0],0.02,2,80,600,0);
	}
	if(IntroTickCounter==450) { //text box visibility
		newAnimatedElementOpacity(outputDocument, outputWindowText[0], 2.5, 1.0);
	}
	if(IntroTickCounter==750) { //activated
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[0], 1.64, false,true);
	}
	if(IntroTickCounter==950) { //new line
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(IntroTickCounter==975) { //no response
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[1], 1.44, false,true);
	}
	if(IntroTickCounter==1150) { //new line
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(IntroTickCounter==1175) { //primary
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[2], 0.86, false,true);
	}
	if(IntroTickCounter==1300) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(IntroTickCounter==1325) { //secondary
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[3], 0.96, false,true);
	}
	if(IntroTickCounter==1450) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(IntroTickCounter==1475) { //taking control
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[4], 0.76, false,true);
	}
	if(IntroTickCounter==1600) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(IntroTickCounter==1625) { //logged
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[5], 1.18, false,true);
	}
	if(IntroTickCounter==1775) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	
	if(IntroTickCounter==1780) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(IntroTickCounter==1800) { //Reading black box
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[6], 0.92, false,true);
	}
	if(IntroTickCounter==1925) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(IntroTickCounter==1950) { //Conclusion
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[7], 1.4, false,true);
	}
	if(IntroTickCounter==2125) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(IntroTickCounter==2150) { //General repairs
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[8], 0.68, false,true);
	}
	if(IntroTickCounter==2250) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(IntroTickCounter==2275) { //Running damage checkup
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[9], 0.5, false,true);
	}
	if(IntroTickCounter==2375) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	if(IntroTickCounter==2400) { //multiple damaged
		newAppendAnimatedMessage(outputDocument, outputWindowText[0], introAIMessages[10], 1.1, false,true);
	}
	if(IntroTickCounter==2550) { //new line 
		newAppendNewLine(outputDocument,outputWindowText[0]);
	}
	
	IntroTickCounter+=1;
	}
	if(IntroTickCounter<=IntroAnimationPartFourDelay)
	{
		setTimeout(() => {newDisplayIntroPartThree(outputDocument, IntroTickCounter);},10);
	}
}
*/
///AAAAAAAAAAAAAAAAAA