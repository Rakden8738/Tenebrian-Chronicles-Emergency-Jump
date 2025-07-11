function connectionTest_intro(outputDocument){
	if(outputDocument.getElementById("mainBody") !== null) {
		return true;
	}
	else {
		throw new Error("Module \"intro\" reporting issues.");
		return false;
	}
}

var IntroTextColors = [
	"hsl(0,100%,65%)", //red 0
	"hsl(120,100%,65%)", //green 1
	"hsl(240,100%,65%)", //blue 2
	"hsl(0,100%,50%)", //alert 3
	"hsl(180,75%,75%)", //cyan text 4
	"hsl(60,100%,65%)"//yellow 5
];

function IntroCalculateTimings(baseArray){
	var newArray = [];
	newArray[0] = baseArray[0];
	for(var i = 1; i < baseArray.length; i++) {
		newArray[i] = baseArray[i]+newArray[i-1];
	}
	return newArray;
}

var IntroSingleMessagesTiming = [
   0,//init.........___0-------0
  10,//show old.....___1------10
  15,//move old.....___2------25
  25,//show last....___3------50
  25,//fade old.....___4------75
  25,//slowly show..___5-----100
  50,//move last....___6-----150
  50,//critical.....___7-----200
 120,//impact 1.....___8-----320
  25,//move.........___9-----345
  50,//initiating...__10-----395
 175,//impact 2.....__11-----570
  75,//move.........__12-----645
  50,//autopilot....__13-----695
  55,//.............__14-----750
  80,//impact 3.....__15-----830
  20,//enabled......__16-----850
  60,//move.........__17-----910
  50,//redirecting..__18-----960
 220,//impact 4.....__19----1180
  15,//move.........__20----1195
  50,//charged at...__21----1245
 140,//0-100%.......__22----1385
  25,//move.........__23----1410
  10,//impact 5.....__24----1420
   5,//notice.......__25----1425
  30,//move.........__26----1455
  15,//known emerg..__27----1470
  45,//impact 6.....__28----1515
 125,//move.........__29----1640
  15,//perception...__30----1655
  30,//impact 7.....__31----1685
 145,//move.........__32----1830
  15,//by an auto...__33----1845
  10,//border flash.__34----1855
  50,//impact 8.....__35----1905
 300,//impact 9.....__36----2205
 150,//move.........__37----2355
  50,//JUMPING......__38----2405
  85,//blue fade in.__39----2490
  25,//shake shake..__40----2515
 250,//discharge....__41----2765
  50,//blue fade out__42----2815
 200,//shake shake 2__43----3015
 150,//shake shake 3__44----3165
 125,//move.........__45----3290
  50,//Emergency....__46----3340
  70,//.............__47----3410
 100,//successful...__48----3510
  75,//move.........__49----3585
  50,//CHECKING.....__50----3635
  90,//.............__51----3725
 100,//operational..__52----3825
  80,//move.........__53----3905
  50,//SEARCHING....__54----3955
 120,//.............__55----4075
 100,//not found....__56----4175
  20,//SKIP POINT 1b__57----4195
  50,//move.........__58----4245
  50,//combat mode..__59----4295
  85,//lifted.......__60----4380
  75,//move.........__61----4455
  50,//general check__62----4505
 120,//.............__63----4625
 575,//start alerts.__64----5200
  25,//alert........__65----5225
 125,//move alert...__66----5350
  50,//aborted......__67----5400
  60,//move.........__68----5460
  50,//checking.....__69----5510
 200,//.............__70----5710
 100,//operational..__71----5810
  80,//move.........__72----5890
  50,//attempting...__73----5940
 205,//.............__74----6145
 200,//shake........__75----6345
  50,//alert........__76----6395
 125,//move alert...__77----6520
 100,//failed.......__78----6620
  55,//move.........__79----6675
  50,//restarting...__80----6725
 210,//.............__81----6935
 250,//failed.......__82----7185
 100,//move.........__83----7285
  50,//ch thrust....__84----7335
 160,//.............__85----7495
 100,//operat.......__86----7595
  40,//shake........__87----7635
  40,//move.........__88----7675
  10,//alert atmo...__89----7685
  40,//activat......__90----7725
  85,//move alert...__91----7810
  65,//.............__92----7875
  50,//thrust shake.__93----7925
  50,//success......__94----7975
  10,//more shake...__95----7985
  50,//move.........__96----8035
  50,//ablators.....__97----8085
 150,//.............__98----8235
 175,//success......__99----8410
  60,//move........._100----8470
  30,//shake t fail._101----8500
  20,//checking....._102----8520
  50,//alert........_103----8570
  10,//shake strong._104----8580
  80,//............._105----8660
  35,//move alert..._106----8695
  65,//inactive....._107----8760
  65,//move........._108----8825
  50,//starting....._109----8875
 140,//............._110----9015
 250,//success......_111----9265
  30,//shake stronge_112----9295
  30,//move........._113----9325
  50,//raising......_114----9375
  85,//............._115----9460
 125,//alert........_116----9585
 125,//move alert..._117----9710
   5,//shield glow.._118----9715
 145,//active......._119----9860
  75,//shake crash.._120----9935
  20,//move........._121----9955
   5,//alert........_122----9960
  45,//fade to red.._123---10005
 100,//cleanup 1...._124---10105
 200,//fade to black_125---10305
 555,//cleanup 2...._126---10860
  10,//fade out....._127---10870
   5,//SKIP POINT 2._128---10875
  40,//empty Element_129---10915
  50,//blinking....._130---10965
 410,//move........._131---11375
  15,//restoring...._132---11390
 105,//move........._133---11495
  50,//run POST....._134---11545
 130,//............._135---11675
 100,//move........._136---11775
  30,//PS operation._137---11805
  70,//move........._138---11875
  15,//power low...._139---11890
  45,//move........._140---11935
  15,//cpu operat..._141---11950
  85,//move........._142---12035
  15,//memory bank.._143---12050
  70,//move........._144---12120
  15,//main data...._145---12135
  85,//move........._146---12220
  15,//integrity...._147---12235
 120,//move........._148---12355
  50,//sysem restor._149---12405
  75,//move........._150---12480
  50,//autopilot...._151---12530
  55,//............._152---12585
 100,//enabled......_153---12685
  60,//move........._154---12745
  50,//scanning....._155---12795
 135,//............._156---12930
 100,//not found...._157---13030
  70,//move........._158---13100
  50,//full scan...._159---13150
 120,//............._160---13270
 175,//aborted......_161---13445
  35,//move........._162---13480
  15,//severe dam..._163---13495
  60,//move........._164---13555
  15,//crash-land..._165---13570
 110,//move........._166---13680
  50,//checking....._167---13730
 135,//............._168---13865
 250,//alive........_169---14115
 130,//move........._170---14245
  50,//calling......_171---14295
 115,//............._172---14410
 250,//no response.._173---14660
  80,//move........._174---14740
  50,//received no.._175---14790
 160,//skip point 3._176---14950
  50,//move........._177---15000
  50,//emergency...._178---15050
 140,//move........._179---15190
  50,//running criti_180---15240
 200,//move........._181---15440
  50,//check LifeSys_182---15490
 150,//............._183---15640
 250,//operational.._184---15890
  55,//move........._185---15945
  30,//vent........._186---15975
  65,//move........._187---16040
  15,//multiple....._188---16055
  90,//move........._189---16145
  15,//CO2.........._190---16160
  65,//move........._191---16225
  15,//O2..........._192---16240
  55,//move........._193---16295
  15,//thermal......_194---16310
  85,//move........._195---16395
  15,//temp........._196---16410
  80,//move........._197---16490
  15,//medical......_198---16505
  70,//move........._199---16575
  15,//stasis......._200---16590
 125,//move........._201---16715
  50,//check PwrSys._202---16765
 170,//............._203---16935
 250,//operational.._204---17185
  55,//move........._205---17240
  30,//power........_206---17270
  65,//move........._207---17335
  15,//main gen....._208---17350
  80,//move........._209---17430
  15,//sec gen......_210---17445
 115,//move........._211---17560
  15,//cells........_212---17575
  85,//move........._213---17660
  15,//batteries...._214---17675
  65,//move........._215---17740
  15,//emerg-gen...._216---17755
 140,//move........._217---17895
  50,//check defense_218---17945
 130,//............._219---18075
 250,//operational.._220---18325
  55,//move........._221---18380
  30,//limited defen_222---18410
  75,//move........._223---18485
  15,//shields subs._224---18500
  95,//move........._225---18595
  15,//point defen.._226---18610
  90,//move........._227---18700
  15,//partially dam_228---18715
  50,//move........._229---18765
  15,//repair drone._230---18780
 110,//move........._231---18890
  50,//check navig.._232---18940
 140,//............._233---19080
 250,//operational.._234---19330
  55,//move........._235---19385
  30,//immobilised.._236---19415
  40,//move........._237---19455
  15,//pos unknown.._238---19470
  40,//move........._239---19510
  15,//main damage.._240---19525
  55,//move........._241---19580
  15,//sec not resp._242---19595
  95,//move........._243---19690
  15,//maneuvering.._244---19705
 105,//move........._245---19810
  15,//hyperdrive..._246---19825
  50,//move........._247---19875
  15,//jumpdrive...._248---19890
  65,//move........._249---19955
  15,//code unknown._250---19970
  85,//move........._251---20055
  15,//pls update..._252---20070
 150,//move........._253---20220
  50,//check comms.._254---20270
 155,//............._255---20425
 250,//operational.._256---20675
  55,//move........._257---20730
  30,//main antenna._258---20760
  70,//move........._259---20830
  15,//no signal...._260---20845
  25,//move........._261---20870
  15,//directional.._262---20885
  90,//move........._263---20975
  15,//pos unknown.._264---20990
  60,//skip point 4._265---21050
  50,//move........._266---21100
  25,//sub chk fnshd_267---21125
 135,//move........._268---21260
  50,//sending distr_269---21310
 125,//............._270---21435
 100,//aborted......_271---21535
  60,//move........._272---21595
  15,//send aborted._273---21610
  85,//move........._274---21695
  15,//NEEA........._275---21710
 110,//move........._276---21820
  50,//automated...._277---21870
 235,//move........._278---22105
  50,//check ai....._279---22155
 165,//............._280---22320
 100,//inactive....._281---22420
  65,//move........._282---22485
  50,//starting AI.._283---22535
 165,//............._284---22700
 175,//success......_285---22875
  60,//move........._286---22935
  50,//loading......_287---22985
 195,//............._288---23180
 100,//aborted......_289---23280
  60,//move........._290---23340
  15,//load aborted._291---23355
  60,//move........._292---23415
  15,//neea........._293---23430
 110,//move........._294---23540
  50,//check cells.._295---23590
 140,//............._296---23730
 100,//operational.._297---23830
  55,//move........._298---23885
  15,//bateries....._299---23900
  55,//move........._300---23955
  15,//critical....._301---23970
  50,//move........._302---24020
  50,//restart spg.._303---24070
 190,//............._304---24260
 175,//failed......._305---24435
 100,//move........._306---24535
  50,//starting epg._307---24585
 150,//............._308---24735
 175,//success......_309---24910
  10,//skip point 5._310---24920
  50,//move........._311---24970
  50,//loading ERA1._312---25020
 195,//............._313---25215
 250,//aborted......_314---25465
  60,//move........._315---25525
  50,//loading SAIA1_316---25575
 195,//............._317---25770
 100,//denied......._318---25870
  90,//move........._319---25960
  50,//loading ERA2._320---26010
 145,//alert root..._321---26155
  50,//............._322---26205
 150,//move alert..._323---26355
 100,//aborted......_324---26455
  60,//move........._325---26515
  50,//loading SAIA2_326---26565
 195,//............._327---26760
 100,//aborted......_328---26860
  70,//move........._329---26930
  50,//loading ERA3._330---26980
 195,//............._331---27175
  25,//alert crash.._332---27200
  75,//failed......._333---27275
  55,//move........._334---27330
  20,//move alert..._335---27350
  30,//restart auto._336---27380
 110,//............._337---27490
 100,//success......_338---27590
  60,//move........._339---27650
  50,//load ERA4...._340---27700
  55,//alert revoke._341---27755
 140,//............._342---27895
 100,//denied......._343---27995
  10,//move alert..._344---28005
  80,//move........._345---28085
  50,//load SAIA3..._346---28135
 195,//............._347---28330
 250,//success......_348---28580
  60,//move........._349---28640
  50,//control tran._350---28690
 295,//move........._351---28985
  50,//rename......._352---29035
 230,//skip point 6._353---29265
  50,//move........._354---29315
 200,//fade message._355---29515
 300,//fade cover..._356---29815
 185,//GAME START..._357---30000

];

var IntroCombinedMessages = [
/*	0	*/	["SHIELDS CRITICAL",IntroTextColors[0]],								// 0.00 -> 0.80 -> 1.05
/*	1	*/	["SHIELDS DOWN",IntroTextColors[0]], 								// 1.55 -> 2.15 -> 2.40
/*	2	*/	["EXPLOSION IN [ENGINE SECTOR]",IntroTextColors[0]],					
/*	3	*/	["HULL BREACH DETECTED IN [ENGINE SECTOR]",IntroTextColors[0]],		// 2.90 -> 4.85 -> 5.10
/*	4	*/	["[MAIN ENGINE] DAMAGED",IntroTextColors[0]],
/*	5	*/	["[HYPERDRIVE] DAMAGED",IntroTextColors[0]],
/*	6	*/	["EXPLOSION IN [NAVIGATION BRIDGE]",IntroTextColors[0]],
/*	7	*/	["HULL BREACH DETECTED IN [NAVIGATION BRIDGE]",IntroTextColors[0]],	// 5.60 -> 7.75 -> 8.00
/*	8	*/	["RECEIVED CRITICAL DAMAGE",IntroTextColors[0]],						// 8.75 -> 9.95 ->10.20
/*	9	*/	["INITIATING AUTOMATIC EMERGENCY JUMP PROCEDURE",IntroTextColors[4]],//10.70 ->12.95 ->13.20
/*	10	*/	["[AUTOPILOT]",IntroTextColors[4]],									//13.70 ->14.25 ->14.50
/*	11	*/	["ENABLED",IntroTextColors[1]],
/*	12	*/	["REDIRECTING AVAILABLE POWER TO [JUMPDRIVE]",IntroTextColors[4]],	
/*	13	*/	["[JUMPDRIVE] CHARGED AT:",IntroTextColors[4]],
/*	14	*/	["NOTICE:",IntroTextColors[5]],
/*	15	*/	["KNOWN EMERGENCY JUMP SIDE EFFECTS MAY TEMPORARILY ALTER CREW'S",IntroTextColors[5]],
/*	16	*/	["PERCEPTION OF TIME. FOR SAFETY REASONS, SHIP WILL BE CONTROLLED",IntroTextColors[5]],
/*	17	*/	["BY AN AUTOPILOT UNTIL MANUALLY INTERRUPTED BY OFFICER IN CHARGE",IntroTextColors[5]],
/*	18	*/	["JUMPING",IntroTextColors[4]],	
/* 	19	*/	["EMERGENCY JUMP",IntroTextColors[4]],
/*  20	*/	["SUCCESSFUL",IntroTextColors[1]],
/*  21	*/	["CHECKING [SENSORS]",IntroTextColors[4]],
/*  22	*/	["OPERATIONAL",IntroTextColors[1]],
/*  23	*/	["SEARCHING FOR [HOSTILES]",IntroTextColors[4]],
/*  24	*/	["NOT FOUND",IntroTextColors[1]],

/*  25	*/	["COMBAT ALARM",IntroTextColors[4]],
/*  26	*/	["LIFTED",IntroTextColors[1]],
/*  27	*/	["RUNNING FULL DAMAGE SCAN",IntroTextColors[4]],
/*  28	*/	["WARNING",IntroTextColors[3]],
/*  29	*/	["PLANET ON COLLISION COURSE",IntroTextColors[3]],
/*  30	*/	["ABORTED",IntroTextColors[5]],
/*  31	*/	["CHECKING [COLLISION AVOIDANCE SUBSYSTEM]",IntroTextColors[4]],
/*  32	*/	["OPERATIONAL",IntroTextColors[1]],
/*  33	*/	["ATTEMPTING [COLLISION AVOIDANCE MANEUVER]",IntroTextColors[4]],
/*	34	*/	["WARNING",IntroTextColors[3]],
/*	35	*/	["[COLLISION AVOIDANCE SUBSYSTEM] FATAL ERROR",IntroTextColors[3]],
/*	36	*/	["FAILED",IntroTextColors[0]],
/*	37	*/	["RESTARTING [COLLISION AVOIDANCE SUBSYSTEM]",IntroTextColors[4]],
/*	38	*/	["FAILED TO START",IntroTextColors[0]],
/*	39	*/	["CHECKING [MANEUVERING THRUSTERS]",IntroTextColors[4]],
/*	40	*/	["OPERATIONAL",IntroTextColors[1]],
/*	41	*/	["WARNING",IntroTextColors[3]],
/*	42	*/	["ENTERING ATMOSPHERE",IntroTextColors[3]],
/*	43	*/	["ACTIVATING [REVERSE THRUSTERS]",IntroTextColors[4]],
/*	44	*/	["SUCCESS",IntroTextColors[1]],
/*	45	*/	["DEPLOYING [EMERGENCY ABLATORS]",IntroTextColors[4]],
/*	46	*/	["SUCCESS",IntroTextColors[1]],
/*	47	*/	["CHECKING [SHIELDS SUBSYSTEM]",IntroTextColors[4]],
/*	48	*/	["WARNING",IntroTextColors[3]],
/*	49	*/	["[MAIN REVERSE THRUSTER] DAMAGED",IntroTextColors[3]],
/*	50	*/	["INACTIVE",IntroTextColors[5]],
/*	51	*/	["STARTING [SHIELDS SUBSYSTEM]",IntroTextColors[4]],
/*	52	*/	["SUCCESS",IntroTextColors[1]],
/*	53	*/	["RAISING [SHIELDS]",IntroTextColors[4]],
/*	54	*/	["WARNING",IntroTextColors[3]],
/*	55	*/	["PLANETARY CRASH IMMINIENT BRACE FOR IMPACT",IntroTextColors[3]],//30
/*	56	*/	["SHIELDS ACTIVE",IntroTextColors[1]],
/*	57	*/	["WARNING",IntroTextColors[3]],
/*	58	*/	["SHIELDS CRITICAL",IntroTextColors[3]],

/*	59	*/	["RESTORING SYSTEM",IntroTextColors[4]],
/*	60	*/	["RUNNING POWER-ON SELF TEST",IntroTextColors[4]],
/*	61	*/	["  [POWER SUPPLY] OPERATIONAL",IntroTextColors[1]],
/*	62	*/	["    POWER LEVEL LOW",IntroTextColors[5]],
/*	63	*/	["  [CENTRAL PROCESSOR] OPERATIONAL",IntroTextColors[1]],	
/*	64	*/	["  [MEMORY BANKS] OPERATIONAL",IntroTextColors[1]],
/*	65	*/	["  [MAIN DATA STORAGE] OPERATIONAL",IntroTextColors[1]],
/*	66	*/	["    DATA INTEGRITY SCAN REQUIRED",IntroTextColors[5]],
/*	67	*/	["SYSTEM RESTORED",IntroTextColors[1]],
/*	68	*/	["[AUTOPILOT]",IntroTextColors[4]],
/*	69	*/	["ENABLED",IntroTextColors[1]],
/*	70	*/	["SCANNING FOR ACTIVE THREATS",IntroTextColors[4]],
/*	71	*/	["NOT FOUND",IntroTextColors[1]],
/*	72	*/	["RUNNING FULL DAMAGE SCAN",IntroTextColors[4]],
/*	73	*/	["ABORTED",IntroTextColors[5]],
/*	74	*/	["  SEVERE DAMAGE DETECTED",IntroTextColors[3]],
/*	75	*/	["  CRASH-LANDING HAS OCCURRED",IntroTextColors[5]],
/*	76	*/	["CHECKING [COMMANDER] STATUS",IntroTextColors[4]],
/*	77	*/	["ALIVE, NOT RESPONDING",IntroTextColors[5]],
/*	78	*/	["CALLING [COMBAT BRIDGE]",IntroTextColors[4]],
/*	79	*/	["NO RESPONSE",IntroTextColors[0]],
/*	80	*/	["RECEIVED NO REPLY FROM SHIP'S COMMAND",IntroTextColors[0]],

/*	81	*/	["ENTERING EMERGENCY MODE",IntroTextColors[4]],
/*	82	*/	["RUNNING CRITICAL SUBSYSTEMS CHECKUP",IntroTextColors[4]],
/*	83	*/	["CHECKING [LIFE SUPPORT SYSTEM]",IntroTextColors[4]],
/*	84	*/	["OPERATIONAL",IntroTextColors[1]],
/*	85	*/	["  [VENTILATION] OPERATIONAL",IntroTextColors[1]],
/*	86	*/	["    MULTIPLE HULL BREACHES DETECTED",IntroTextColors[0]],
/*	87	*/	["  [CO2 FILTERS] OPERATIONAL",IntroTextColors[1]],
/*	88	*/	["    O2 LEVEL ACCEPTABLE",IntroTextColors[1]],
/*	89	*/	["  [THERMAL REGULATION] OPERATIONAL",IntroTextColors[1]],
/*	90	*/	["    TEMPERATURE LEVEL ACCEPTABLE",IntroTextColors[1]],
/*	91	*/	["  [MEDICAL SECTOR] DESTROYED",IntroTextColors[0]],
/*	92	*/	["  [STASIS CELL ARRAY] OPERATIONAL",IntroTextColors[1]],
/*	93	*/	["CHECKING [POWER MANAGEMENT SYSTEM]",IntroTextColors[4]],
/*	94	*/	["OPERATIONAL",IntroTextColors[1]],
/*	95	*/	["  [POWER GRID] OPERATIONAL",IntroTextColors[1]],
/*	96	*/	["  [MAIN POWER GENERATOR] DAMAGED",IntroTextColors[0]],
/*	97	*/	["  [SECONDARY POWER GENERATOR] NOT RESPONDING",IntroTextColors[5]],
/*	98	*/	["  [POWER CELLS ARRAY] OPERATIONAL",IntroTextColors[1]],
/*	99	*/	["    BATTERIES LEVEL AT 32%",IntroTextColors[5]],
/*	100	*/	["  [EMERGENCY GENERATOR] NOT RESPONDING",IntroTextColors[5]],
/*	101	*/	["CHECKING [DEFENSE SYSTEMS]",IntroTextColors[4]],
/*	102	*/	["OPERATIONAL",IntroTextColors[1]],
/*	103	*/	["  LIMITED DEFENSE CAPABILITIES",IntroTextColors[5]],
/*	104	*/	["  [SHIELDS SUBSYSTEM] NOT RESPONDING",IntroTextColors[5]],
/*	105	*/	["  [POINT DEFENSE ARRAY] OPERATIONAL",IntroTextColors[1]],
/*	106	*/	["    PARTIALLY DAMAGED",IntroTextColors[0]],
/*	107	*/	["  [REPAIR DRONES] OPERATIONAL",IntroTextColors[1]],
/*	108	*/	["CHECKING [NAVIGATION SYSTEM]",IntroTextColors[4]],
/*	109	*/	["OPERATIONAL",IntroTextColors[1]],
/*	110	*/	["  SHIP IMMOBILISED",IntroTextColors[5]],
/*	111	*/	["  POSITION UNKNOWN",IntroTextColors[5]],
/*	112	*/	["  [MAIN ENGINE] DAMAGED",IntroTextColors[0]],
/*	113	*/	["  [SECONDARY ENGINES] NOT RESPONDING",IntroTextColors[5]],
/*	114	*/	["  [MANEUVERING THRUSTERS] NOT RESPONDING",IntroTextColors[5]],
/*	115	*/	["  [HYPERDRIVE] DAMAGED",IntroTextColors[0]],
/*	116	*/	["  [JUMPDRIVE]  CHECK FAILED",IntroTextColors[0]],
/*	117	*/	["    JUMPDRIVE STATUS CODE UNKNOWN",IntroTextColors[5]],
/*	118	*/	["    PLEASE UPDATE YOUR AUTOPILOT SOFTWARE",IntroTextColors[5]],
/*	119	*/	["CHECKING [COMMUNICATION SYSTEM]",IntroTextColors[4]],
/*	120	*/	["OPERATIONAL",IntroTextColors[1]],
/*	121	*/	["  [MAIN ANTENNA] OPERATIONAL",IntroTextColors[1]],
/*	122	*/	["    NO SIGNAL",IntroTextColors[5]],
/*	123	*/	["  [DIRECTIONAL ANTENNA] OPERATIONAL",IntroTextColors[1]],
/*	124	*/	["    RECEIVER POSITION UNKNOWN",IntroTextColors[5]],

/*	125	*/	["SUBSYSTEMS CHECKUP FINISHED",IntroTextColors[4]],
/*	126	*/	["SENDING [DISTRESS SIGNAL]",IntroTextColors[4]],
/*	127	*/	["ABORTED",IntroTextColors[5]],
/*	128	*/	["  SENDING DISTRESS SIGNAL ABORTED",IntroTextColors[5]],
/*	129	*/	["  NOT ENOUGH ENERGY AVAILABLE",IntroTextColors[5]],
/*	130	*/	["INITIATING AUTOMATED EMERGENCY REPAIRS PROTOCOL",IntroTextColors[4]],
/*	131	*/	["CHECKING [AI PERSONA VIRTUALISER]",IntroTextColors[4]],
/*	132	*/	["INACTIVE",IntroTextColors[5]],
/*	133	*/	["STARTING [AI PERSONA VIRTUALISER]",IntroTextColors[4]],
/*	134	*/	["SUCCESS",IntroTextColors[1]],
/*	135	*/	["LOADING [EMERGENCY RECOVERY AI] PERSONA",IntroTextColors[4]],
/*	136	*/	["ABORTED",IntroTextColors[5]],
/*	137	*/	["  PERSONA LOADING ABORTED",IntroTextColors[5]],
/*	138	*/	["  NOT ENOUGH ENERGY AVAILABLE",IntroTextColors[5]],
/*	139	*/	["CHECKING [POWER CELLS ARRAY]",IntroTextColors[4]],
/*	140	*/	["OPERATIONAL",IntroTextColors[1]],
/*	141	*/	["  BATTERIES LEVEL AT 24%",IntroTextColors[5]],
/*	142	*/	["  POWER LEVEL CRITICAL",IntroTextColors[0]],
/*	143	*/	["RESTARTING [SECONDARY POWER GENERATOR]",IntroTextColors[4]],
/*	144	*/	["FAILED TO START",IntroTextColors[0]],
/*	145	*/	["STARTING [EMERGENCY GENERATOR]",IntroTextColors[4]],
/*	146	*/	["SUCCESS",IntroTextColors[1]],

/*	147	*/	["LOADING [EMERGENCY RECOVERY AI] PERSONA",IntroTextColors[4]],
/*	148	*/	["ABORTED",IntroTextColors[5]],
/*	149	*/	["LOADING [ERROR:AI_CODE_UNKNOWN] PERSONA",IntroTextColors[4]],
/*	150	*/	["ACCESS DENIED",IntroTextColors[0]],
/*	151	*/	["LOADING [EMERGENCY RECOVERY AI] PERSONA",IntroTextColors[4]],
/*	152	*/	["WARNING",IntroTextColors[3]],
/*	153	*/	["ROOT ACCESS GRANTED TO [ERROR:AI_CODE_UNKNOWN]",IntroTextColors[3]],
/*	154	*/	["ABORTED",IntroTextColors[5]],
/*	155	*/	["LOADING [ERROR:AI_CODE_UNKNOWN] PERSONA",IntroTextColors[4]],
/*	156	*/	["ABORTED",IntroTextColors[5]],
/*	157	*/	["LOADING [EMERGENCY RECOVERY AI] PERSONA",IntroTextColors[4]],
/*	158	*/	["WARNING",IntroTextColors[3]],
/*	159	*/	["[AUTOPILOT] FATAL ERROR",IntroTextColors[3]],
/*	160	*/	["FAILED",IntroTextColors[0]],
/*	161	*/	["RESTARTING [AUTOPILOT]",IntroTextColors[4]],
/*	162	*/	["SUCCESS",IntroTextColors[1]],
/*	163	*/	["LOADING [EMERGENCY RECOVERY AI] PERSONA",IntroTextColors[4]],
/*	164	*/	["WARNING",IntroTextColors[3]],
/*	165	*/	["ROOT ACCESS REVOKED FROM [AUTOPILOT]",IntroTextColors[3]],
/*	166	*/	["ACCESS DENIED",IntroTextColors[0]],
/*	167	*/	["LOADING [ERROR:AI_CODE_UNKNOWN] PERSONA",IntroTextColors[4]],
/*	168	*/	["SUCCESS",IntroTextColors[1]],
/*	169	*/	["TRANSFERING CONTROL TO [ERROR:AI_CODE_UNKNOWN] PERSONA",IntroTextColors[4]],
/*	170	*/	["RENAMING [ERROR:AI_CODE_UNKOWN] PERSONA TO [TESAIA]",IntroTextColors[4]]
//Tenebrian Experimental Sentient Artificial Intelligence Assistant
//Tenebrian Experimental Superior Artificial Intelligence Administrator
];

var IntroCalculatedMessagesTiming = [];


//MAIN VARIABLES

var IntroAnimationStartDelay = 0;
//var IntroAnimationPartOneDelay = 0;
//var IntroAnimationPartTwoDelay = 8500;
//var IntroAnimationPartThreeDelay = 13200;
//var IntroAnimationPartFourDelay = 10000;

var IntroWasSkipped = false;
var IntroAllowedDisplayAttempts = 3;

var IntroMessagesLayerName = "introMessages";

var IntroImageButtonPauseON = false;
var IntroImageButtonFastFON = false;
var IntroImageButtonSkipON = false;

var IntroAnimationPaused = false;

var IntroFastForwardAllowed = false;
var IntroFastForwardInProgress = false;
var IntroInterruptDelayedFade = false;

var IntroSkipInProgress = false;

var IntroAlertIsMoving = false;
var IntroResizeFixInProgress = false;

var IntroFloatingTextMessagesArray = [];
var IntroFloatingTextRepliesArray = [];
var IntroVisibleCommentsArray = [];

var IntroAnimationStep = -1;
var IntroTickCounter = -1;
var IntroFastForwardStage = -1;
var IntroActiveAnimationCounter = 0;

var IntroDebugActive = false;
var IntroDebugTimeoutCounter = 0;


//INTRO INIT VARIABLES

var IntroBackgroundImagesLayerName = "introBackgroundImagesGroup";
var IntroForegroundImagesLayerName = "introForegroundImagesGroup";

var IntroCoversLayerName = "introOverInterfaceCovers";

var IntroImageConsoleBackgroundID = "introImageConsoleBackground";
var IntroImageConsoleBackgroundPath = "RESOURCES/Console Background.png";

var IntroImageButtonPanelID = "introImageButtonPanel";
var IntroImageButtonPanelPath = "RESOURCES/Intro Button Panel v2.png";

var IntroImageButtonPauseID = "introImageButtonPanelPause";
var IntroImageButtonPausePathON = "RESOURCES/Intro Button Panel Pause ON.png";
var IntroImageButtonPausePathOFF = "RESOURCES/Intro Button Panel Pause OFF.png";

var IntroImageButtonFastFID = "introImageButtonPanelFastForward";
var IntroImageButtonFastFPathON = "RESOURCES/Intro Button Panel FastF ON.png";
var IntroImageButtonFastFPathOFF = "RESOURCES/Intro Button Panel FastF OFF.png";

var IntroImageButtonSkipID = "introImageButtonPanelSkip";
var IntroImageButtonSkipPathON = "RESOURCES/Intro Button Panel Skip ON.png";
var IntroImageButtonSkipPathOFF = "RESOURCES/Intro Button Panel Skip OFF.png";

var IntroFloatingMessagesLayerName = "introFloatingTextGroup";
var IntroFloatingTextClass = "floatingText";
var IntroFloatingTextID = "introFloatingText_";
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

var IntroVisibleCommentsLayerName = "introCommentsGroup";
var IntroVisibleCommentsClass = "introComment";
var IntroVisibleCommentsID = "introComment_";


//CONSOLE WINDOW

var IntroConsoleX = 30;
var IntroConsoleY = 300;
var IntroConsoleX_2 = 600;
var IntroConsoleMessageOffset = 22;	

var IntroConsoleTextDefaultSpeed = 0.05;
var IntroConsoleTextFastSpeed = 0.025;
var IntroConsoleTextDotSpeed = 0.25;
var IntroConsoleMoveSpeed = 0.25;
var IntroConsoleFastMoveSpeed = 0.15;

var IntroFloatingTextFadeDelay = 7;
var IntroFloatingTextFadeLength = 3.5;
//var IntroFloatingTextResetDelay = 500;
//var IntroFloatingTextResetAfterFade = false;
var IntroFloatingTextFadeTMPArray = [];


//POP UP ALERTS

var IntroAlertBaseX = 0;
var IntroAlertBaseY = 30;
var IntroAlertPopupPositionX = 0;
var IntroAlertPopupPositionY = 200;
var IntroAlertOffsetBaseX = 0;
var IntroAlertOffsetBaseY = 30;
//var IntroAlertOffsetExtraX = 0;
//var IntroAlertOffsetExtraY = 0;

var IntroAlertTextDelay = 0.25;
var IntroAlertTextSpeed = 0.02;
var IntroAlertHeaderSpeed = 0.015;

var IntroAlertScaleGrowthDelay = 0.05;
var IntroAlertScaleGrowthScale = 1.25;
var IntroAlertScaleGrowthTime = 0.2;

var IntroAlertScaleShrinkDelay = 0;
var IntroAlertScaleShrinkScale = 0.8;
var IntroAlertScaleShrinkTime = 1;


//COMMENTS

var IntroCommentDisplaySpeed = 0.25;
var IntroCommentFadeSpeed = 1.00;
var IntroCommentOpacity = 0.50;
var IntroCommentsIDArray = [
	"IntroFastForwardComment",
	"IntroFastForwardNotAvailableComment",
	"IntroCommanderCallComment",
	"IntroCommanderRefusesComment"
];


//SHAKING

var IntroShakingEnabled = false;
var IntroShakingActive = false;
var IntroShakingChanged = false;

var IntroShakingTargetElement = NaN;
var IntroShakingFinishMode = "default";
var IntroShakingInitialTransform = "";

var IntroShakingValueX = 0;
var IntroShakingValueY = 0;
var IntroShakingSpeed = 0;
var IntroShakingLength = 0;
var IntroShakingElapsedTime = 0;
var IntroShakingIdleWaitTime = 100;


//SCREEN EFFECTS

	//INITIAL COVER
var IntroFadeInTime = 6;
var IntroFadeCoverName = "introOverInterfaceInitCover";

	//RED ALERT
var IntroCombatAlertID;
var IntroCombatAlertCoverName = "introOverInterfaceCombatAlertCover";
var IntroCombatAlertFullLength = 1.5;
var IntroCombatAlertIncreaseTime = 0.2;
var IntroCombatAlertActiveTime = 0.2;
var IntroCombatAlertDecreaseTime = 0.6;
var IntroCombatAlertActive = false;
	
	//ORANGE ALERT
var IntroCollisionAlertID;
var IntroCollisionAlertCoverName = "introOverInterfaceCollisionAlertCover";
var IntroCollisionAlertFullLength = 4;
var IntroCollisionAlertIncreaseTime = 0.3;
var IntroCollisionAlertActiveTime = 0.3;
var IntroCollisionAlertDecreaseTime = 0.9;
var IntroCollisionAlertActive = false;

	//JUMPDRIVE
var IntroJumpChargingTime = 10;
var IntroJumpChargingCoverName = "introOverInterfaceChargingCover"; 
var IntroJumpChargingImageName = "introOverInterfaceChargingImage"; 
var IntroJumpingCoverName = "introOverInterfaceJumpdriveCover";
var IntroJumpFlashFadeInTime = 0.25;
var IntroJumpFlashFadeOutTime = 3;

	//CRASH
var IntroCrashFadeTime = 0.05;
var IntroCrashCoverName = "introOverInterfaceCrashCover";

	//START
var IntroGameStartIntroMessagesFade = 3.5;
var IntroGameStartIntroCoverFade = 2.5;


//OBSOLETE VARIABLES

/*var OLDIntroSingleMessagesTiming = [
	  0,	//init			0		0
	 10,	//show old		1		10
	 15,	//move old		2		25
	 25,	//show last		50		3
	 25,	//fade old		75		4
	 25,	//slowly show	100		5
	 50,	//move last		150		6
	 50,	//critical		200		7
	120,	//impact 1 		320		8
	 25,	//move			345		9
	 50,	//initiating	395		10
	175,	//impact 2 		570		11
	 75,	//move			645		12
	 50,	//autopilot		695		13
	 55,	//...			750		14
	 80,	//impact 3		830		15
	 20,	//enabled		850		16
	 60,	//move			910		17
	 50,	//redirecting	960		18
	220,	//impact 4 		1180	19
	 15,	//move			1195	20
	 50,	//charged at	1245	21
	140,	//0-100%		1385	22
	 25,	//move			1410	23
	 10,	//impact 5		1420	24
	  5,	//notice		1425	25
	 30,	//move			1455	26
	 15,	//known emerg	1470	27
	 45,	//impact 6		1515	28
	125,	//move			1640	29
	 15,	//perception	1655	30
	 30,	//impact 7		1685	31
	145,	//move			1830	32
	 15,	//by an auto	1845	33
	 10,	//border flash	1855	34
	 50,	//impact 8		1905	35
	300,	//impact 9		2205	36
	150,	//move			2355	37
	 50,	//JUMPING		2405	38
	 85,	//blue fade in	2490	39
	 25,	//shake shake	2515	40
	250,	//discharge 	2765	41
	 50,	//blue fade out	2815	42
	200,	//shake shake 2	3015	43
	150,	//shake shake 3	3165	44
	125,	//move			3290	45
	 50,	//Emergency		3340	46
	 70,	//...			3410	47
	100,	//successful	3510	48
	 75,	//move			3585	49
	 50,	//CHECKING		3635	50
	 90,	//...			3725	51
	100,	//operational	3825	52
	 80,	//move			3905	53
	 50,	//SEARCHING		3955	54
	120,	//...			4075	55
	100,	//not found		4175	56
	
	 20,	//SKIP POINT 1b	4195	57
	 50,	//move			4245	58
	 
	 50,	//combat mode	4295	59
	 85,	//lifted		4380	60
	 75,	//move			4455	61
	 50,	//general check	4505	62
	120,	//...			4625	63
	575,	//start alerts	5200	64
	 25,	//alert			5225	65
	125,	//move alert	5350	66
	 50,	//aborted		5400	67
	 60,	//move			5460	68
	 50,	//checking		5510	69
	200,	//...			5710	70
	100,	//operational	5810	71
	 80,	//move			5890	72
	 50,	//attempting	5940	73
	205,	//...			6145	74
	200,	//shake			6345	75
	 50,	//alert			6395	76
	125,	//move alert	6520	77
	100,	//failed		6620	78
	 55,	//move			6675	79
	 50,	//restarting	6725	80
	210,	//...			6935	81
	250,	//failed		7185	82
	100,	//move			7285	83
	 50,	//ch thrust		7335	84
	160,	//...			7495	85
	100,	//operat		7595	86
	 40,	//shake	atmo	7635	87
	 40,	//move			7675	88
	 10,	//alert atmo	7685	89
	 40,	//activat		7725	90
	 85,	//move alert	7810	91
	 65,	//...			7875	92
	 50,	//thrust shake	7925	93
	 50,	//success		7975	94
	 10,	//more shake	7985	95
	 50,	//move			8035	96
	 50,	//ablators	8085	97
	150,	//...			8295	98
	175,	//success		8545	99
	 60,	//move			8645	100	
	 30,	//shake t fail	8675	101
	 20,	//checking		8695	102
	 50,	//alert			8745	103
	 10,	//shake strong	8755	104
	 80,	//...			8835	105
	 35,	//move alert	8870	106
	 65,	//inactive		8935	107
	 65,	//move			9000	108
	 50,	//starting		9050	109
	140,	//...			9190	110
	250,	//success		9440	111
	 30,	//shake stronge	9470	112
	 30,	//move			9500	113
	 50,	//raising		9550	114
	 85,	//...			9635	115
	125,	//alert			9760	116
	125,	//move alert	9885	117
	  5,	//shield glow	9890	118
	145,	//active		10035	119
	 75,	//shake crash	10110	120
	 20,	//move			10130	121
	  5,	//alert			10135	122
	 45,	//fade to red	10180	123
	100,	//cleanup 1		10280	124
	200,	//fade to black	10480	125
	555,	//cleanup 2		11035	126
	
	  
	  
	  10,	//fade out		11045	128
	  5,	//SKIP POINT 2	11040	127
	  
	 40,	//empty Element	11090 	129
	 50,	//blinking		11180	130
	410,	//move			11550	131
	 15,	//restoring		11565	132
	105,	//move			11670	133
	 50,	//run POST		11720	134
	130,	//...			11850	135
	100,	//move			11950	136
	 30,	//PS operation	11980	137
	 70,	//move			12050	138
	 15,	//power low		12065	139
	 45,	//move			12110	140
	 15,	//cpu operat	12125	141
	 85,	//move			12210	142
	 15,	//memory bank	12225	143
	 70,	//move			12295	144
	 15,	//main data		12310	145
	 85,	//move			12395	146
	 15,	//integrity		12410	147
	120,	//move			12530	148
	 50,	//sysem restor	12580	149
	 75,	//move			12655	150
	 50,	//autopilot		12705	151	
	 55,	//...			12760	152		
	100,	//enabled		12860	153	
	 60,	//move			12920	154
	 50,	//scanning		12970	155
	135,	//...			13105	156
	100,	//not found		13205	157
	 70,	//move			13275	158
	 50,	//full scan		13325	159
	120,	//...			13445	160
	175,	//aborted		13620	161
	 35,	//move			13655	162
	 15,	//severe dam	13670	163
	 60,	//move			13730	164
	 15,	//crash-land	13745	165
	110,	//move			13855	166
	 50,	//checking		13905	167
	135,	//...			14040	168
	250,	//alive			14290	169
	130,	//move			14420	170
	 50,	//calling		14470	171
	115,	//...			14585	172
	250,	//no response	14835	173
	 80,	//move			14915	174
	 50,	//received no	14965	175
	 
	160,	//skip point 3	15125	176
	 50,	//move			15175	177
	 
	 50,	//emergency		15225	178
	140,	//move			15365	179
	 50,	//running criti	15415	180
	200,	//move			15615	181
	 50,	//check LifeSys	15665	182
	150,	//...			15815	183
	250,	//operational	15915	184
	 55,	//move			15970	185
	 30,	//vent			16000	186
	 65,	//move			16065	187
	 15,	//multiple		16080	188
	 90,	//move			16170	189
	 15,	//CO2			16185	190
	 65,	//move			16250	191
	 15,	//O2			16265	192
	 55,	//move			16320	193
	 15,	//thermal		16335	194
	 85,	//move			16420	195
	 15,	//temp			16435	196
	 80,	//move			16515	197
	 15,	//medical		16530	198
	 70,	//move			16600	199
	 15,	//stasis		16615	200
	125,	//move			16740	201
	 50,	//check PwrSys	16790	202
	170,	//...			16960	203
	250,	//operational	17060	204
	 55,	//move			17115	205
	 30,	//power			17145	206
	 65,	//move			17210	207
	 15,	//main gen		17225	208
	 80,	//move			17305	209
	 15,	//sec gen		17320	210
	115,	//move			17435	211
	 15,	//cells			17450	212
	 85,	//move			17535	213
	 15,	//batteries		17550	214
	 65,	//move			17615	215
	 15,	//emerg-gen		17630	216
	140,	//move			17770	217
	 50,	//check defense	17820	218
	130,	//...			17950	219
	250,	//operational	18050	220
	 55,	//move			18105	221
	 30,	//limited defen	18135	222
	 75,	//move			18210	223
	 15,	//shields subs	18225	224
	 95,	//move			18320	225
	 15,	//point defen	18335	226
	 90,	//move			18425	227
	 15,	//partially dam	18440	228
	 50,	//move			18490	229
	 15,	//repair drone	18505	230
	110,	//move			18615	231
	 50,	//check navig	18665	232
	140,	//...			18805	233
	250,	//operational	18905	234
	 55,	//move			18960	235
	 30,	//immobilised	18990	236
	 40,	//move			19030	237
	 15,	//pos unknown	19045	238
	 40,	//move			19085	239
	 15,	//main damage	19100	240
	 55,	//move			19155	241
	 15,	//sec not resp	19170	242
	 95,	//move			19265	243
	 15,	//maneuvering	19280	244
	105,	//move			19385	245
	 15,	//hyperdrive	19400	246
	 50,	//move			19450	247
	 15,	//jumpdrive		19465	248
	 65,	//move			19530	249
	 15,	//code unknown	19545	250
	 85,	//move			19630	251
	 15,	//pls update	19695	252
	150,	//move			19845	253
	 50,	//check comms	20000	254
	155,	//...			20155	255
	250,	//operational	20255	256
	 55,	//move			20310	257
	 30,	//main antenna	20340	258
	 70,	//move			20410	259
	 15,	//no signal		20425	260
	 25,	//move			20450	261
	 15,	//directional	20465	262
	 90,	//move			20555	263
	 15,	//pos unknown	20570	264
	 
	 60,	//skip point 4	20630	265
	 50,	//move			20680	266
	 
	 25,	//sub chk fnshd	20705	267
	135,	//move			20840	268
	 50,	//sending distr	20890	269
	125,	//...			21015	270
	100,	//aborted		21115	271
	 60,	//move			21175	272
	 15,	//send aborted	21190	273
	 85,	//move			21275	274
	 15,	//NEEA			21290	275
	110,	//move			21400	276
	 50,	//automated		21450	277
	235,	//move			21685	278
	 50,	//check ai		21735	279
	165,	//...			21900	280
	100,	//inactive		22000	281
	 65,	//move			22065	282
	 50,	//starting AI	22115	283
	165,	//...			22280	284
	175,	//success		22455	285
	 60,	//move			22515	286
	 50,	//loading		22565	287
	195,	//...			22760	288
	100,	//aborted		22860	289
	 60,	//move			22920	290
	 15,	//load aborted	22935	291
	 60,	//move			22995	292
	 15,	//neea			23010	293
	110,	//move			23120	294
	 50,	//check cells	23170	295
	140,	//...			23310	296
	100,	//operational	23410	297
	 55,	//move			23465	298
	 15,	//bateries		23480	299
	 55,	//move			23535	300
	 15,	//critical		23550	301
	 50,	//move			23600	302
	 50,	//restart spg	23650	303
	190,	//...			23840	304
	175,	//failed		24015	305
	100,	//move			24115	306
	 50,	//starting epg	24165	307
	150,	//...			24315	308
	175,	//success		24490	309
	
	 10,	//skip point 5	24500	310
	 50,	//move			24550	311
	 
	 50,	//loading ERA1	24600	312
	195,	//...			24795	313
	250,	//aborted		25045	314
	 60,	//move			25125	315
	 50,	//loading SAIA1	25175	316
	195,	//...			25370	317
	100,	//denied		25545	318
	 90,	//move			25615	319
	 50,	//loading ERA2	24665	320
	145,	//alert root	25950	330
	 50,	//...			24860	321
	150,	//move alert	26075	331 
	100,	//aborted		25035	322
	 60,	//move			25115	323
	 50,	//loading SAIA2	25165	324
	195,	//...			25360	325
	100,	//aborted		25535	326
	 70,	//move			25605	327
	 50,	//loading ERA3	25655	328
	195,	//...			25850	329
	 25,	//alert crash	26150	332
	 75,	//failed
	 55,	//move
	 20,	//move alert
	 30,	//restart auto
	110,	//...
	100,	//success
	 60,	//move
	 50,	//load ERA4
	 55,	//alert revoke
	140, 	//...
	100,	//denied
	 10,	//move alert
	 80,	//move
	 50,	//load SAIA3
	195,	//...			25360	325
	250,	//success		27405	347
	 60,	//move			27465	348
	 50,	//control tran	27525	349
	295,	//move			27820	350
	 50,	//rename		27870	351
	 
	 230,	//skip point 6	28100	352
	 50,	//move			28150	353
	
];*/
/*var introMessagesDelays = [

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
	];*/
/*var OLDintroMessagesDelays = [

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
	];*/
/*var introPopupMessages = [
	
	["FAILED",IntroTextColors[0]],//0
	["DAMAGED",IntroTextColors[0]],//1
	["FATAL ERROR",IntroTextColors[0]],//2
	["FAILED TO START",IntroTextColors[0]],//3
	["CRITICAL",IntroTextColors[0]],//4
	["SUCCESS",IntroTextColors[1]],//5
	["OPERATIONAL",IntroTextColors[1]],//6
	["ACTIVATED",IntroTextColors[1]],//7
	["WARNING",IntroTextColors[3]],//8
	["NOT RESPONDING",IntroTextColors[0]],//9
	
	["CHECKING [SENSORS]",IntroTextColors[4]],//10
//	["SEARCHING [HOSTILES]",IntroTextColors[4]],//11
	["SEARCHING FOR [HOSTILES]",IntroTextColors[4]],//11 +0.2
	["NOT FOUND",IntroTextColors[1]],//12
	["EMERGENCY JUMP",IntroTextColors[4]],//13
	["SUCCESSFUL",IntroTextColors[1]],//14
	["RUNNING GENERAL SYSTEM CHECKUP",IntroTextColors[4]],//15
	["ABORTED",IntroTextColors[5]],//16
	
	["PLANET ON COLLISION COURSE",IntroTextColors[3]],//17
	
	["CHECKING [COLLISION AVOIDANCE SYSTEM]",IntroTextColors[4]],//18
//	["ACTIVATING [COLLISION AVOIDANCE SYSTEM]",IntroTextColors[4]],//19
	["ATTEMPTING [COLLISION AVOIDANCE MANEUVER]",IntroTextColors[4]],//19 +0.1
	
	["[COLLISION AVOIDANCE SYSTEM]<br>FATAL ERROR",IntroTextColors[3]],//20
	
	["RESTARTING [COLLISION AVOIDANCE SYSTEM]",IntroTextColors[4]],//21
//	["CHECKING [REVERSE THRUSTERS]",IntroTextColors[4]],//22
	["CHECKING [MANEUVERING THRUSTERS]",IntroTextColors[4]],//22 +0.2
//	["ACTIVATING [REVERSE THRUSTERS]",IntroTextColors[4]],//23
	["BURNING [REVERSE THRUSTERS]",IntroTextColors[4]],//23 -0.15
	
	["ENTERING ATMOSPHERE",IntroTextColors[3]],//24
	["CHECKING [SHIELD SYSTEMS]",IntroTextColors[4]],//25
	
	["[MAIN REVERSE THRUSTER]<br>DAMAGED",IntroTextColors[3]],//26
	
	["INACTIVE",IntroTextColors[5]],//27
	["RESTARTING [SHIELDS SYSTEM]",IntroTextColors[4]],//28
//	["ACTIVATING [SHIELDS]",IntroTextColors[4]],//29
	["RAISING [SHIELDS]",IntroTextColors[4]],//29 -0.15
	
	["PLANETARY CRASH IMMINIENT<br>BRACE FOR IMPACT",IntroTextColors[3]],//30
	["SHIELDS ACTIVE",IntroTextColors[1]],//31
	["<br>SHIELDS<br>CRITICAL",IntroTextColors[3]],//32
	
	["RESTORING SYSTEM",IntroTextColors[4]],//33
	["SEVERE DAMAGE DETECTED",IntroTextColors[3]],//34
	["CHECKING COMMANDER'S VITAL SIGNATURE",IntroTextColors[4]],//35
	["ALIVE, NOT RESPONDING",IntroTextColors[5]],//36
	["CALLING [BRIDGE]",IntroTextColors[4]],//37
	["ENTERING EMERGENCY MODE",IntroTextColors[4]],//38
	["STARTING EMERGENCY CHECKUP",IntroTextColors[4]],//39
	["CHECKING [LIFE SUPPORT SYSTEM]",IntroTextColors[4]],//40
	["CHECKING [AI PERSONA]",IntroTextColors[4]],//41
	["STARTING [AI PERSONA]",IntroTextColors[4]],//42
	["CHECKING [POWER MANAGEMENT SYSTEM]",IntroTextColors[4]],//43
	["RUNNING [POWER STATUS]",IntroTextColors[4]],//44
	["LOW ENERGY",IntroTextColors[5]],//45
	["CHECKING [MAIN POWER GENERATOR]",IntroTextColors[4]],//46
	["RESTARTING [MAIN POWER GENERATOR]",IntroTextColors[4]],//47
	["CHECKING [SECONDARY POWER GENERATOR]",IntroTextColors[4]],//48
	["RESTARTING [SECONDARY POWER GENERATOR]",IntroTextColors[4]],//49
	["CHECKING [EMERGENCY GENERATOR]",IntroTextColors[4]],//50
	["STARTING [EMERGENCY GENERATOR]",IntroTextColors[4]],//51
	
	["[AI PERSONA] ACTIVATED IN EMERGENCY CONTROL MODE",IntroTextColors[4]],//52
	["TRANSFERING MAIN CONTROL TO [AI PERSONA]",IntroTextColors[4]]//53
	
	
	];*/
/*var introAIMessages = [
	//["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",IntroTextColors[4]], //0
	["Tenebrian Emergency Situation AI successfully activated in emergency control mode.",IntroTextColors[4]], //0
	["Received no response from commander and bridge. Emergency status upheld.",IntroTextColors[4]], //1
	["Primary directive: Assure survival of crew.",IntroTextColors[4]], //1
	["Secondary directive: Restore ship functionality.",IntroTextColors[4]], //1
	["Taking control over available systems.",IntroTextColors[4]], //1
	["Actions undertaken by T.E.S.A. will be logged for later review.",IntroTextColors[4]], //1
	["Reading events recorded by ship's black box...",IntroTextColors[4]], //1
	["Conclusion: ship has crashed on planet after executing emergency jump.",IntroTextColors[4]], //2
	["General repairs might be required.",IntroTextColors[4]], //3
	["Running damage checkup...",IntroTextColors[4]], //3
	["WARNING: detected multiple damaged systems and sectors.",IntroTextColors[4]], //4
	["Detected multiple hull breaches.",IntroTextColors[4]], //5
	["Production sector damaged.",IntroTextColors[4]], //6
	["Main power generator damaged.",IntroTextColors[4]], //7
	["Secondary generator damaged.",IntroTextColors[4]], //8
	["Main engine damaged.",IntroTextColors[4]], //9
	["Navigation systems damaged.",IntroTextColors[4]], //10
	["Jump drive damaged.",IntroTextColors[4]], //11
	["Communication system damaged.",IntroTextColors[4]], //12
	["Medical sector damaged.",IntroTextColors[4]], //13
	["Cargo bay damaged.",IntroTextColors[4]], //14
	["Defensive systems damaged.",IntroTextColors[4]], //15
	["Ofensive systems damaged.",IntroTextColors[4]], //16
	["Analysing optimal course of actions and order of repairs.",IntroTextColors[4]], //17
	["CREATING NEW TASK: 'RESTORE SHIP SYSTEMS FUNCTIONALITY'.",IntroTextColors[4]], //18
	["Detailed report has been generated.",IntroTextColors[4]], //19
	
	["Beggining scheduled repairs...",IntroTextColors[4]], //20
	["Activating available maintenance drones.",IntroTextColors[4]], //21
	["Restoring basic functionality of production sector.",IntroTextColors[4]], //22
	["WARNING: full ship repair is currently impossible. Available resources are insufficient.",IntroTextColors[4]], //23
	["CREATING NEW TASK: 'OBTAIN RESOURCES NEEDED FOR REPAIRS'.",IntroTextColors[4]], //24
	["Detailed report has been generated.",IntroTextColors[4]], //25
	
	["Attempting to establish communication with fleet",IntroTextColors[4]], //26
	["Restoring basic functionality of communication system...",IntroTextColors[4]], //27
	["No signals detected in ship's vicinity.",IntroTextColors[4]], //28
	["Sending distress signal at default time intervals. System capabilities and available power insufficient for distress call broadcast at interstellar range.",IntroTextColors[4]], //29
	["WARNING: current location unknown, found no reference points after emergency jump. Required for point to point and directional communication",IntroTextColors[4]], //30
	["CREATING NEW TASK: 'FIND CURREN LOCATION AND RESTORE COMMUNICATION'.",IntroTextColors[4]], //31
	["Detailed report has been generated.",IntroTextColors[4]], //32
	
	["Checking status of crew...",IntroTextColors[4]], //33
	["Detected vital signs of 348 crew members of which 37 are at acceptable condition or are capable of self regeneration. Remaining 311 require urgent medical attention.",IntroTextColors[4]], //34
	["Medical sector condition insufficient to meet requirements. Searching for alternative solutions...",IntroTextColors[4]], //35
	["Cryogenic sector slightly damaged. Currently unused. Condition acceptable. Reactivating cryopods.",IntroTextColors[4]], //36
	["Wounded crew members will be send to cold sleep until needed medical care can be provided.",IntroTextColors[4]], //37
	["CREATING NEW TASK: 'RECOVERY OF CRYOSLEEPING CREW'.",IntroTextColors[4]], //38
	["Detailed report has been generated.",IntroTextColors[4]], //39
	
	["Checking surroundings...",IntroTextColors[4]], //40
	["Temperature at acceptable level.",IntroTextColors[4]], //41
	["Gravity force at acceptable level.",IntroTextColors[4]], //42
	["Atmospheric pressure at acceptable level.",IntroTextColors[4]], //43
	["Primary air component: nitrogen. Secondary: oxygen.",IntroTextColors[4]], //44
	["No toxins detected in the surrounding air.",IntroTextColors[4]], //45
	["Radiation levels close to zero.",IntroTextColors[4]], //46
	["Dispatching scout drones...",IntroTextColors[4]], //47
	["Flora and fauna detected.",IntroTextColors[4]], //48
	["Local organisms are showing no active hostility. No major predator threat detected.",IntroTextColors[4]], //49
	["Conclusion: planet of terrestial type. Surface risk at acceptable level.",IntroTextColors[4]], //50
	["Found resources suitable for ship repair.",IntroTextColors[4]], //51
	["Found resources suitable for energy production.",IntroTextColors[4]], //52
	["CREATING NEW TASK: 'CONSTRUCT RESOURCES EXTRACTORS'.",IntroTextColors[4]], //53
	["Detailed report has been generated.",IntroTextColors[4]], //54
	
	["Analysing recent events...",IntroTextColors[4]], //55
	["Unknown drive malfunction has been reported. Data inconclusive.",IntroTextColors[4]], //56
	["Searching for records of similar event in the database.",IntroTextColors[4]], //57
	["WARNING: database corrupted.",IntroTextColors[4]], //58
	["Starting deep analysis of accumulated data...",IntroTextColors[4]], //59
	["WARNING: analysis aborted. Not enough energy available.",IntroTextColors[4]], //60
	["Starting database restoration...",IntroTextColors[4]], //61
	["WARNING: restoration aborted. Not enough energy available.",IntroTextColors[4]], //62
	["CREATING NEW TASK: 'INCREASE AVAILABLE POWER, RESTORE DATABASE, INVESTIGATE JUMP DRIVE MALFUNCTION'.",IntroTextColors[4]], //63
	["Detailed report has been generated.",IntroTextColors[4]], //64
	
	["Commander's activity detected at bridge.",IntroTextColors[4]], //65
	["According to Tenebrian Emergency Protocols, main control will be transfered to commander upon request.",IntroTextColors[4]], //66
	["Awaiting commander's response...",IntroTextColors[4]], //67
	["Command transfer request confirmed. Transfering main control to bridge.",IntroTextColors[4]], //68
	["Exiting emergency mode.",IntroTextColors[4]], //69
	["T.",IntroTextColors[4]], //70	
]; */


/*var IntroAIMessageBlurrID;
var IntroAIMessageBlurrMinVal = 0;
var IntroAIMessageBlurrMaxVal = 10;
var IntroAIMessageBlurrStepTime = 40;
var IntroAIMessageBlurrStepChange = 0.02;
var IntroAIMessageBlurrProgressValue = 0;*/

//var IntroAlertOpacityTargetValue = 1.0;
//var IntroAlertOpacityTime = 0.1;


function introInit(outputDocument){
	
	IntroAnimationPaused = false;
	IntroImageButtonPauseON = false;
	
	IntroFastForwardAllowed = false;
	IntroFastForwardInProgress = false;
	IntroImageButtonFastFON = false;
	IntroFastForwardStage = 0;
	IntroFastForwardCommentVisible = false;
	
	IntroImageButtonSkipON = false;
	IntroSkipInProgress = false;
	
	var mainBody = outputDocument.getElementById("mainBody");
	var mainMessagesLayer = outputDocument.getElementById("mainMessagesLayer");
	
	if(mainMessagesLayer === null) {
		mainMessagesLayer = introNewElement(outputDocument,mainBody,"mainMessagesLayer","messagesLayer");
	}

	var introLayer = outputDocument.getElementById(IntroMessagesLayerName);
	
	if(introLayer === null) {
		introLayer = introNewElement(outputDocument,mainMessagesLayer,IntroMessagesLayerName,"animationMessages");
	}
	
	introLayer.innerHTML = "";
	
	var commentsLayer = introNewElement(outputDocument,mainMessagesLayer,IntroVisibleCommentsLayerName,"messagesGroup");
	
	var fastForwardInProgressComment = introNewElement(outputDocument,commentsLayer,IntroCommentsIDArray[0],IntroVisibleCommentsClass);
	fastForwardInProgressComment.innerHTML = "Fast forward in progress.";
	
	var fastForwardNotAvailableComment = introNewElement(outputDocument,commentsLayer,IntroCommentsIDArray[1],IntroVisibleCommentsClass);
	fastForwardNotAvailableComment.innerHTML = "Fast forward not available at the moment.";
	
	var commanderCallComment = introNewElement(outputDocument,commentsLayer,IntroCommentsIDArray[2],IntroVisibleCommentsClass);
	commanderCallComment.innerHTML = "You hear monotonous voice calling your name.";
	
	var commanderRefusesComment = introNewElement(outputDocument,commentsLayer,IntroCommentsIDArray[3],IntroVisibleCommentsClass);
	commanderRefusesComment.innerHTML = "But your body refuses to move.";
	
	var backgroundImagesLayer = introNewElement(outputDocument,introLayer,IntroBackgroundImagesLayerName,"messagesGroup");
	introNewElement(outputDocument,backgroundImagesLayer,IntroImageConsoleBackgroundID,"imageClass","img",IntroImageConsoleBackgroundPath);
	
	introNewElement(outputDocument,introLayer,IntroFloatingMessagesLayerName,"messagesGroup");
	introNewElement(outputDocument,introLayer,IntroAlertMessagesLayerName,"messagesGroup");
	introNewElement(outputDocument,introLayer,"introAIMessages","messagesGroup");
	
	var coversLayer = outputDocument.getElementById(IntroCoversLayerName);
	
	if(coversLayer === null) {
		  coversLayer = introNewElement(outputDocument,mainMessagesLayer,IntroCoversLayerName,"messagesGroup");
	}
	
	coversLayer.innerHTML = "";
	
	//introNewElement(outputDocument,coversLayer,IntroJumpChargingCoverName,"introInterfaceForegroundCover");
	introNewElement(outputDocument,coversLayer,"introOverInterfaceChargingImage","coverImageClass","img","RESOURCES/ChargeFrame.png");
	
	introNewElement(outputDocument,coversLayer,IntroCombatAlertCoverName,"introInterfaceForegroundCover");
	introNewElement(outputDocument,coversLayer,IntroCollisionAlertCoverName,"introInterfaceForegroundCover");
	introNewElement(outputDocument,coversLayer,IntroJumpingCoverName,"introInterfaceForegroundCover");
	
	var foregroundImagesLayer = introNewElement(outputDocument,introLayer,IntroForegroundImagesLayerName,"messagesGroup");
	buttonPanelElement = introNewElement(outputDocument,foregroundImagesLayer,IntroImageButtonPanelID,"imageClass","img",IntroImageButtonPanelPath);
	
	var tmpElement = introNewElement(outputDocument,foregroundImagesLayer,IntroImageButtonPauseID,"imageClass introButton","img",IntroImageButtonPausePathOFF);
	outputDocument.getElementById(IntroImageButtonPauseID).onclick = function() { introPause(outputDocument); };
	
	tmpElement = introNewElement(outputDocument,foregroundImagesLayer,IntroImageButtonFastFID,"imageClass introButton","img",IntroImageButtonFastFPathOFF);
	outputDocument.getElementById(IntroImageButtonFastFID).onclick = function() { introFastF(outputDocument); };
	
	tmpElement = introNewElement(outputDocument,foregroundImagesLayer,IntroImageButtonSkipID,"imageClass introButton","img",IntroImageButtonSkipPathOFF);
	outputDocument.getElementById(IntroImageButtonSkipID).onclick = function() { introSkip(outputDocument); };
	
	introNewElement(outputDocument,coversLayer,IntroFadeCoverName,"introInterfaceForegroundCover");
	introNewElement(outputDocument,coversLayer,IntroCrashCoverName,"introInterfaceForegroundCover");
	
	introResetLogMessages(outputDocument);
	introResetAlerts(outputDocument);
	
	IntroCalculatedMessagesTiming = IntroCalculateTimings(IntroSingleMessagesTiming);
	
	introChangeShaking(outputDocument, IntroMessagesLayerName, 0.05, 0, 0, 0);
	IntroShakingEnabled = true;
	introActiveShaking();
	
	introRegisterEvent(outputDocument);
	
}

function introPlayIntro(outputDocument){
	if(IntroAnimationPaused) {
		if(IntroDebugActive) console.log("Animation is paused.");
		
		IntroDebugTimeoutCounter++;
		setTimeout(() => {
			introPlayIntro(outputDocument);
			IntroDebugTimeoutCounter--;},1000);
	}
	else {
		
		dynamicCondition = 0;
		switch(IntroAnimationStep) {
			case (dynamicCondition++): 	//init
				if(IntroTickCounter == 0) {
					introInit(outputDocument);		
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//show old
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[0],0.01); //critical
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true); //empty reply
					
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[1],0.01); //down
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true); //empty reply
					
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[2],0.01); //explo engi
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true); //empty reply
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[3],0.01); //hull engi
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true); //empty reply
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[4],0.01); //main engine
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true); //empty reply
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[5],0.01); //hyperdrive 
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true); //empty reply
					
					introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[6],0.01); //explo nav
					introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true); //empty reply
					
					IntroCombatAlertID = setInterval(introCombatAlert, IntroCombatAlertFullLength*1000, outputDocument);
					IntroCombatAlertActive = true;
					introCombatAlert(outputDocument);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++: 	//move old
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++: 	//show last
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[7],0.01)); //hull nav
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++: 	//fade old  //385
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introDelayedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[0],IntroFloatingTextFadeDelay + 0.75 - 6.95, IntroFloatingTextFadeLength, 0.0, 1.0);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[1],IntroFloatingTextFadeDelay + 0.75 - 5.60, IntroFloatingTextFadeLength, 0.0, 1.0);
					
					//385 + 900 
					introDelayedElementOpacity(outputDocument, [
						IntroFloatingTextMessagesArray[2],
						IntroFloatingTextMessagesArray[3],
						IntroFloatingTextMessagesArray[4],
						IntroFloatingTextMessagesArray[5]
					],IntroFloatingTextFadeDelay + 0.75 - 2.90, IntroFloatingTextFadeLength, 0.0, 1.0);
					
					IntroAnimationStep++;
				} break;
					
			case dynamicCondition++:	//slowly show
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroFadeCoverName, IntroFadeInTime, 0, 1);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++: 	//move last  //460
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introDelayedElementOpacity(outputDocument, [IntroFloatingTextMessagesArray[6],IntroFloatingTextMessagesArray[7]],IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					IntroFastForwardAllowed = true;
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//critical damage	//485
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[8],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//impact 1
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02, 0.55 , 16 , 16, "zero");
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);//introDelayedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[0],IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);//introDelayedElementOpacity(outputDocument, IntroFloatingTextMessagesArray[0],IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//initiating
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[9],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;				

			case dynamicCondition++:	//impact 2
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02, 0.35 , 16 , 16, "zero");
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//autopilot
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[10],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;

			case dynamicCondition++:	//impact 3
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02, 0.45 , 16 , 16, "zero");
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//enabled
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[11],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;
				} break;				
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//redirecting
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[12],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//impact 4
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02, 0.65 , 16 , 16, "zero");
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//charged at
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[13],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,[" ",IntroTextColors[1]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;				
				
			case dynamicCondition++:	//0-100%
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendChangingNumeric(outputDocument, IntroFloatingTextRepliesArray[IntroFloatingTextRepliesArray.length-1], 0.03, IntroJumpChargingTime, 0, 100, finishMode="default", numericDecimals = 1, "", "%");
					
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//impact 5
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02, 0.35 , 16 , 16, "zero");
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//Notice
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[14],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//known emergency
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[15],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//impact 6
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02, 0.75 , 8 , 8, "zero");
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//perception
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[16],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//impact 7
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02, 0.35, 8, 8, "zero");
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//by an auto
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[17],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//border flash
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpChargingImageName, IntroJumpChargingTime/2, 1, 0);
					
					IntroAnimationStep++;
					IntroFastForwardAllowed = false;
				} break;	
				
			case dynamicCondition++:	//impact 8
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02, 0.75, 16, 16, "zero");
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//impact 9
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02, 0.55, 8, 8, "zero");
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;	
			
			case dynamicCondition++:	//JUMPING
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[18],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;

			case dynamicCondition++:	//blue fade in
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpingCoverName, IntroJumpFlashFadeInTime, 1, 0);
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.03, -1,16,16, "stay");
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//shake shake
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02, -1,32,32, "stay");
					
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//discharge
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpChargingImageName, 0.1, 0, 1);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//blue fade out
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpingCoverName, IntroJumpFlashFadeOutTime, 0, 1);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//shake shake 2
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02, -1,16,16, "stay");
					
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//shake shake 3
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02,0.75,8,8, "zero");
					
					IntroFastForwardAllowed = true;
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
					
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//emergency jump
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[19],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;

			case dynamicCondition++:	//successful
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[20],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;
				} break;				
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//sensors
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[21],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;

			case dynamicCondition++:	//operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[22],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;
				} break;				
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//searching
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[23],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;

			case dynamicCondition++:	//not found
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[24],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;
				} break;	

			case dynamicCondition++:	//SKIP POINT 1				
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					if(IntroFastForwardInProgress){
						console.log("Skipped to after-jump.");
						introFastFOFF(outputDocument);
					}
					
					IntroFastForwardStage = 1;
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//alarm
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[25],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//lifted
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[26],IntroConsoleTextDefaultSpeed, true));
					
					clearInterval(IntroCombatAlertID);
					IntroCombatAlertActive = false;
					
					IntroAnimationStep++;
				} break;				
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;

			case dynamicCondition++:	//full dmg scan
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[27],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*30, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//start alerts
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroCollisionAlertID = setInterval(introCollisionAlert, IntroCollisionAlertFullLength*1000, outputDocument);
					IntroCollisionAlertActive = true;
					introCollisionAlert(outputDocument);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[29],IntroAlertTextSpeed,IntroCombinedMessages[28],IntroAlertHeaderSpeed);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					
					IntroAnimationStep++;	
				} break;			
				
			case dynamicCondition++:	//aborted
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[30],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;	
				} break;			
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//checking
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[31],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[32],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;
				} break;		
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//attempting
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[33],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*18, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//shake shake
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02,0.6,16,16, "zero");
					
					IntroAnimationStep++;
				} break;
					
			case dynamicCondition++:	//alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[35],IntroAlertTextSpeed,IntroCombinedMessages[34],IntroAlertHeaderSpeed);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					
					IntroAnimationStep++;	
				} break;			
			
			case dynamicCondition++:	//failed
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[36],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;	
				} break;		
					
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//restarting
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[37],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//failed to start
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[38],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;	
				} break;	
					
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//checking thrusters
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[39],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[40],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;	
				} break;	
				
			case dynamicCondition++:	//shake atmo
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02,-1,2,2, "zero");
					
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//alert atmo
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[42],IntroAlertTextSpeed,IntroCombinedMessages[41],IntroAlertHeaderSpeed);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//activating thrusters
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[43],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					
					IntroAnimationStep++;	
				} break;	
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//thrust shake
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02,-1,8,8, "stay");
					
					IntroAnimationStep++;
				} break;	
			
			case dynamicCondition++:	//success
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[44],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;	
				} break;	
				
			case dynamicCondition++:	//more shake
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02,-1,4,4, "zero");
					
					IntroAnimationStep++;
				} break;			
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//deploy ablators
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[45],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*6, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//success
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[46],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;	
				} break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//thrust shake
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02,-1,32,32, "stay");
					
					IntroAnimationStep++;
				} break;			
				
			case dynamicCondition++:	//checking shields
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[47],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[49],IntroAlertTextSpeed,IntroCombinedMessages[48],IntroAlertHeaderSpeed);
					
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//thrust shake
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02,-1,4,4, "stay");
					
					IntroAnimationStep++;
				} break;			
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					
					IntroAnimationStep++;	
				} break;			
				
			case dynamicCondition++:	//inactive
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[50],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;	
				} break;	
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//starting shields
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[51],IntroConsoleTextDefaultSpeed));
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//success
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[52],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;	
				} break;	
				
			case dynamicCondition++:	//shake stronger
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02,-1,6,6, "stay");
					
					IntroAnimationStep++;
				} break;			
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//raising shields
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[53],IntroConsoleTextDefaultSpeed));

					IntroAnimationStep++;
				} break;
					
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*15, "...", "skip", "")
					
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[55],IntroAlertTextSpeed,IntroCombinedMessages[54],IntroAlertHeaderSpeed);
					
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					
					IntroAnimationStep++;	
				} break;		
			
			case dynamicCondition++:	//shield glow
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpChargingImageName, 1.2, 0.25, 0);
					
					IntroFastForwardAllowed = false;
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//shields active
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[56],IntroConsoleTextDefaultSpeed, true));
					
					IntroAnimationStep++;	
				} break;	
				
			case dynamicCondition++:	//shake crash
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.02,-1,48,48, "zero");
					
					IntroAnimationStep++;
				} break;			
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					IntroFloatingTextFadeTMPArray = [];
				
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[58],IntroAlertTextSpeed,IntroCombinedMessages[57],IntroAlertHeaderSpeed);
					
					IntroFastForwardAllowed = false;
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//crash fade in
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroCrashCoverName, IntroCrashFadeTime, 1, 0);
					newAnimatedElementOpacity(outputDocument, IntroFadeCoverName, IntroCrashFadeTime, 1, 0);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//cleanup 1
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroJumpChargingImageName, 0.1, 0, 0.25);
					
					IntroShakingEnabled = false;
					clearInterval(IntroCollisionAlertID);
					IntroCollisionAlertActive = false;
					
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//crash fade out HIDE RED, LEAVE BLACK
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroCrashCoverName, 5.5, 0, 1);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//cleanup 2
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introResetLogMessages(outputDocument);
					introResetAlerts(outputDocument);
					IntroFloatingTextFadeTMPArray = [];
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//black fade out SLOWLY SHOW
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroFadeCoverName, 8, 0, 1);
					
					IntroAnimationStep++;
				} break;			
			
			case dynamicCondition++:	//SKIP POINT 2				
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					if(IntroFastForwardInProgress){
						console.log("Skipped to after-crash.");
						newAnimatedElementOpacity(outputDocument, IntroFadeCoverName, 0.1, 0, 1);
						introFastFOFF(outputDocument);
					}
					
					IntroFloatingTextFadeTMPArray = [];
					
					IntroFastForwardStage = 2;
					
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//empty
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,[" ",IntroTextColors[4]],0.01)); 
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,[" ",IntroTextColors[4]],0.01,true)); 
					
					IntroFastForwardAllowed = true;
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//blinking
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], 0.39, 4, " _", "clear", "")
					
					IntroAnimationStep++;
				} break;	
			
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//restoring system
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[59],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
				
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//run POST
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[60],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//PS Operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[61],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//Power Low
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[62],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//CPU Operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[63],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//Memory operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[64],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//data storage operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[65],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//Integrity check required
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[66],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//System restored
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[67],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//autopilot
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[68],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//enabled
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[69],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//scanning for threats
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[70],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//not found
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[71],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//damage scan
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[72],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*6, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//aborted
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[73],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//severe damage
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[74],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//crash landing
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[75],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//checking commander
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[76],IntroConsoleTextDefaultSpeed));
					
					IntroFastForwardAllowed = false;
					
					IntroDebugTimeoutCounter++;
					setTimeout(() => {
						IntroFastForwardAllowed = true;
						IntroDebugTimeoutCounter--;},8);
					
					introDelayedElementOpacity(outputDocument, IntroCommentsIDArray[2],0.5, 1.0, IntroCommentOpacity, 0.0);
					introDelayedElementOpacity(outputDocument, IntroCommentsIDArray[2],6.5, 3.0, 0.0, IntroCommentOpacity);
					introDelayedElementOpacity(outputDocument, IntroCommentsIDArray[3],4.5, 1.0, IntroCommentOpacity, 0.0);
					introDelayedElementOpacity(outputDocument, IntroCommentsIDArray[3],10.5, 3.0, 0.0, IntroCommentOpacity);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//alive not responding
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[77],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//calling bridge
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[78],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//no reply
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[79],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//Received no reply
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[80],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//SKIP POINT 3				
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					if(IntroFastForwardInProgress){
						console.log("Skipped to after-POST.");
						introFastFOFF(outputDocument);
					}
					
					IntroFastForwardStage = 3;
					
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//Emergency
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[81],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//Running critical
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[82],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//check lifess
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[83],IntroConsoleTextDefaultSpeed));

					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[84],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//ventilation
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[85],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//hull breaches
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[86],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//CO_2
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[87],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//O_2
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[88],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//thermal
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[89],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//temperature
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[90],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//medical
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[91],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//stasis
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[92],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//check power
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[93],IntroConsoleTextDefaultSpeed));

					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[94],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//power grid
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[95],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//main gen
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[96],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//secondary gen
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[97],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//cells array
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[98],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//batteries
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[99],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//emergency gen
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[100],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//check defense
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[101],IntroConsoleTextDefaultSpeed));

					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[102],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//limited
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[103],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//shields
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[104],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//point defense
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[105],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//partially damaged
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[106],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//batteries
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[107],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//check nav
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[108],IntroConsoleTextDefaultSpeed));

					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[109],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//ship immobilised
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[110],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//position unknown
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[111],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//main engine damaged
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[112],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//secondary not responding
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[113],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//thrusters not responding
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[114],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//hyperdrive damaged
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[115],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//jumpdrive failed
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[116],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//code unknown
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[117],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//please update
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[118],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//check comms
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[119],IntroConsoleTextDefaultSpeed));

					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[120],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//main antenna
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[121],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//no signal
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[122],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//directional operational
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[123],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//position unknown
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[124],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//SKIP POINT 4
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					if(IntroFastForwardInProgress){
						console.log("Skipped to after-check.");
						introFastFOFF(outputDocument);
					}
					
					IntroFastForwardStage = 4;
					
					IntroAnimationStep++;
				} break;
						
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//Subsystem check finished
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[125],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;

			case dynamicCondition++:	//sending distress
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[126],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//aborted
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[127],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;	
			
			case dynamicCondition++:	//partial move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//distress aborted
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[128],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//partial move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;

			case dynamicCondition++:	//not enough energy
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[129],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;	
			
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//IAERP
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[130],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//Check APV
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[131],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		

			case dynamicCondition++:	//Inactive
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[132],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//start IPV
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[133],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*6, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		

			case dynamicCondition++:	//Success
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[134],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//Loading AI
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[135],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		
				
			case dynamicCondition++:	//Aborted
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[136],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//quick move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//loading aborted
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[137],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//quick move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//NEEA
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[138],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
					
			case dynamicCondition++:	//check cells
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[139],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		
				
			case dynamicCondition++:	//Reply
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[140],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//quick move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//batteries 24%
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[141],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//quick move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleFastMoveSpeed);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//power critical
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[142],IntroConsoleTextFastSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//Restart secondary
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[143],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*6, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		

			case dynamicCondition++:	//failed
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[144],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//Start emergency
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[145],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*6, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		

			case dynamicCondition++:	//success
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[146],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//SKIP POINT 5
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					if(IntroFastForwardInProgress){
						console.log("Skipped to persona struggle.");
						introFastFOFF(outputDocument);
					}
					
					IntroFastForwardStage = 5;
					IntroShakingEnabled = true;
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
					
			case dynamicCondition++:	//load ERA 1
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[147],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		

			case dynamicCondition++:	//aborted
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[148],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//load SAIA 1
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[149],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		

			case dynamicCondition++:	//denied
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[150],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//load ERA 2
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[151],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//alert root
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[153],IntroAlertTextSpeed,IntroCombinedMessages[152],IntroAlertHeaderSpeed);
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.025,0.1,48,12, "zero");
					
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		
			
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					
					IntroAnimationStep++;	
				} break;			
				
			case dynamicCondition++:	//aborted
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[154],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//load SAIA 2
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[155],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		

			case dynamicCondition++:	//aborted
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[156],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//load ERA 3	
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[157],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		

			case dynamicCondition++:	//alert auto crash
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[159],IntroAlertTextSpeed,IntroCombinedMessages[158],IntroAlertHeaderSpeed);
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.025,0.1,48,12, "zero");
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//failed
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[160],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					
					IntroAnimationStep++;	
				} break;			
				
			case dynamicCondition++:	//Restart auto
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[161],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		

			case dynamicCondition++:	//Success
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[162],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//load ERA 4	
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[163],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;

			case dynamicCondition++:	//alert revoke
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[165],IntroAlertTextSpeed,IntroCombinedMessages[164],IntroAlertHeaderSpeed);
					introChangeShaking(outputDocument, IntroMessagesLayerName, 0.025,0.1,48,12, "zero");
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*3, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		
	
			case dynamicCondition++:	//denied
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[166],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					
					IntroAnimationStep++;	
				} break;			
				
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//Loading SAIA 3
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[167],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		

			case dynamicCondition++:	//success
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[168],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			case dynamicCondition++:	//Control transfer
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[169],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
						
			case dynamicCondition++:	//Rename
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[170],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//SKIP POINT 6
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					if(IntroFastForwardInProgress){
						console.log("Skipped to loaded persona.");
						introFastFOFF(outputDocument);
					}
					
					IntroFastForwardStage = 6;
					IntroShakingEnabled = false;
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset, IntroConsoleMoveSpeed);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
			
			case dynamicCondition++:	//fade messages
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, IntroMessagesLayerName, IntroGameStartIntroMessagesFade, 0, 1);
					newAnimatedElementOpacity(outputDocument, IntroVisibleCommentsLayerName, IntroGameStartIntroMessagesFade, 0, 1);
					newAnimatedElementOpacity(outputDocument, IntroCoversLayerName, IntroGameStartIntroMessagesFade, 0, 1);
					
					
					IntroAnimationStep++;
				} break;	
			
			case dynamicCondition++:	//fade messages
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					newAnimatedElementOpacity(outputDocument, "overInterfaceBackgroundCover", IntroGameStartIntroCoverFade, 0, 1);
					
					IntroAnimationStep++;
				} break;

			case dynamicCondition++:	//GAME START
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					//console.log("START?");
					
					IntroAnimationStep++;
					
					IntroDebugTimeoutCounter++;
					setTimeout(() => {
						outputDocument.getElementById("mainMessagesLayer").innerHTML="";
						IntroDebugTimeoutCounter--;
						console.log("Cleaned up intro.");
						saveSaveGame();
					},10000);
		
					
					if(IntroAnimationStep <= IntroCalculatedMessagesTiming.length) {
						//console.log("START!");
						if(IntroWasSkipped) SaveIntroSkipCounter++;
						else SaveIntroDisplayedOrSkipped = true;
						if(SaveIntroSkipCounter >= IntroAllowedDisplayAttempts) SaveIntroDisplayedOrSkipped = true
						
					}
				} break;				
		}
		
		IntroTickCounter++;

		if(IntroAnimationStep < IntroCalculatedMessagesTiming.length) {
			IntroDebugTimeoutCounter++;
			setTimeout(() => {
				introPlayIntro(outputDocument);
				IntroDebugTimeoutCounter--;},10);
		}
	}
}

/* TEMPLATES


			case dynamicCondition++:	//No-reply line
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[82],IntroConsoleTextDefaultSpeed));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
				
				
			case dynamicCondition++:	//Line
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[78],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		

			case dynamicCondition++:	//Reply
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[79],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
				
				
			case dynamicCondition++:	//Line
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[78],IntroConsoleTextDefaultSpeed));
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//...
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					animationAppendLoopedMessage(outputDocument, IntroFloatingTextMessagesArray[IntroFloatingTextMessagesArray.length-1], IntroConsoleTextDotSpeed, IntroConsoleTextDotSpeed*9, "...", "skip", "")
										
					IntroAnimationStep++;
				} break;		
				
			case dynamicCondition++:	//Reply
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,IntroCombinedMessages[79],IntroConsoleTextDefaultSpeed, true));
										
					IntroAnimationStep++;
				} break;
			
			case dynamicCondition++:	//quick move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay,IntroFloatingTextFadeLength);
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//Quick line
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextMessagesArray,IntroCombinedMessages[123],0.03));
					IntroFloatingTextFadeTMPArray.push(introNewLogMessage(outputDocument,IntroFloatingTextRepliesArray,["",IntroTextColors[0]],0.01, true)); //empty reply
										
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//full move
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveLogMessages(outputDocument, IntroFloatingTextMessagesArray, IntroConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					introMoveLogMessages(outputDocument, IntroFloatingTextRepliesArray, IntroConsoleMessageOffset,false,0,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength);
					
					introDelayedElementOpacity(outputDocument, IntroFloatingTextFadeTMPArray,IntroFloatingTextFadeDelay, IntroFloatingTextFadeLength, 0.0, 1.0);
					IntroFloatingTextFadeTMPArray = [];
										
					IntroAnimationStep++;
				} break;	
				
			
			case dynamicCondition++:	//alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introNewAlert(outputDocument, IntroCombinedMessages[29],IntroAlertTextSpeed,IntroCombinedMessages[28],IntroAlertHeaderSpeed);
					
					IntroAnimationStep++;
				} break;
				
			case dynamicCondition++:	//move alert
				if(IntroTickCounter == IntroCalculatedMessagesTiming[IntroAnimationStep]) {
					introMoveAlertMessages(outputDocument,IntroAlertMessagesWindowsArray,IntroAlertScaleShrinkTime);
					
					IntroAnimationStep++;	
				} break;			
			
				*/
	
function introNewElement(outputDocument, parentElement, childID, childClass, childTag="div", childArgument1="" ){
	newElement = outputDocument.createElement(childTag);
	newElement.className = childClass;
	newElement.id = childID;
	
	if(childTag="img") newElement.src = childArgument1;
	
	parentElement.append(newElement);
	return newElement;
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
		
		return tmpElement.id;
	}
	else {
		console.log("Intro not initialised");
		return "";
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
		
		newDisplayElement(outputDocument,tmpAlertWindow.id,IntroAlertPopupPositionX,IntroAlertPopupPositionY);
		newAnimatedElementOpacity(outputDocument, tmpAlertWindow.id, 0.2, 1.0);
		
		IntroAlertIsMoving = true;
		
		if(IntroFastForwardStage != -1) {
			IntroActiveAnimationCounter++;
			if(IntroDebugActive)console.log("New alert start, "+IntroActiveAnimationCounter);
		}
		
		IntroDebugTimeoutCounter++;
		setTimeout(() => {
			newDisplayAnimatedMessage(outputDocument,tmpAlertText.id,NaN,NaN,messageStruct,messageStruct[0].length*messageSpeed);
			newDisplayAnimatedMessage(outputDocument,tmpAlertHeader.id,NaN,NaN,headerStruct,headerStruct[0].length*headerSpeed);
			IntroDebugTimeoutCounter--;
		},1000*IntroAlertTextDelay);
		
		IntroDebugTimeoutCounter++;
		setTimeout(() => {
			newAnimatedElementScale(outputDocument,tmpAlertWindow.id,IntroAlertScaleGrowthTime,IntroAlertScaleGrowthScale);
			IntroDebugTimeoutCounter--;
		},1000*IntroAlertScaleGrowthDelay);
		
		IntroDebugTimeoutCounter++;
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
		IntroWasSkipped = true;
		
		//outputDocument.getElementById("IntroFastForwardComment").style.visibility = "visible";
		newAnimatedElementOpacity(outputDocument, IntroCommentsIDArray[0], IntroCommentDisplaySpeed, IntroCommentOpacity, 0);
		
		IntroImageButtonFastFON = true;
		introPauseON(outputDocument);
		
		outputDocument.getElementById(IntroImageButtonFastFID).src = IntroImageButtonFastFPathON;
		
		introFastForward(outputDocument);
	}
	else{
		if(!IntroFastForwardInProgress) {
			
			if(!IntroFastForwardCommentVisible) {
			//outputDocument.getElementById("IntroFastForwardNotAvailableComment").style.visibility = "visible";
			newAnimatedElementOpacity(outputDocument, IntroCommentsIDArray[1], IntroCommentDisplaySpeed, IntroCommentOpacity, 0);
			IntroFastForwardCommentVisible = true;
			
			IntroDebugTimeoutCounter++;
			setTimeout(() => {
				//outputDocument.getElementById("IntroFastForwardNotAvailableComment").style.visibility = "hidden";
				newAnimatedElementOpacity(outputDocument, IntroCommentsIDArray[1], IntroCommentFadeSpeed, 0, IntroCommentOpacity);
				IntroFastForwardCommentVisible = false;
				IntroDebugTimeoutCounter--;
				},4000);
				
			}
		}
	}
	
}
function introFastFOFF(outputDocument, skipToStage = -1){
	IntroImageButtonFastFON = false;
	IntroFastForwardInProgress = false;
	
	IntroDebugTimeoutCounter++;
	setTimeout(() => {
		//outputDocument.getElementById("IntroFastForwardComment").style.visibility = "hidden";
		newAnimatedElementOpacity(outputDocument, IntroCommentsIDArray[0], IntroCommentFadeSpeed, 0, IntroCommentOpacity);
		IntroDebugTimeoutCounter--;
		},1000);
	
	
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
				console.log("Skipping to combat alarm stage.");
				
				IntroTickCounter = (IntroCalculatedMessagesTiming[57]-5);
				IntroAnimationStep = 57;
				
				//IntroFastForwardStage++;
				
				introPauseOFF(outputDocument);
				break;
				
			case 1:
				console.log("Skipping to system restore stage.");
				
				if(IntroCombatAlertActive){
					clearInterval(IntroCombatAlertID);
					IntroCombatAlertActive = false;
				}
				if(IntroCollisionAlertActive){
					clearInterval(IntroCollisionAlertID);
					IntroCollisionAlertActive = false;
				}
				
				IntroInterruptDelayedFade = true;
				IntroDebugTimeoutCounter++;
				setTimeout(() => {
					IntroInterruptDelayedFade = false;
					IntroDebugTimeoutCounter--;
					},2*minorTickLength*1000);
				
				introResetLogMessages(outputDocument);
				introResetAlerts(outputDocument);
				
				IntroTickCounter = (IntroCalculatedMessagesTiming[128]-5);
				IntroAnimationStep = 128;
				
				//IntroFastForwardStage++;
				
				
				introPauseOFF(outputDocument);
				break;
				
			case 2:
				console.log("Skipping to emergency mode.");
				
				IntroTickCounter = (IntroCalculatedMessagesTiming[176]-5);
				IntroAnimationStep = 176;
				
				//IntroFastForwardStage++;
				
				introPauseOFF(outputDocument);
				break;
				
			case 3:
				console.log("Skipping to after systems check.");
				
				IntroTickCounter = (IntroCalculatedMessagesTiming[265]-5);
				IntroAnimationStep = 265;
				
				//IntroFastForwardStage++;
				
				introPauseOFF(outputDocument);
				break;
				
			case 4:
				console.log("Skipping to persona struggle.");
				
				IntroTickCounter = (IntroCalculatedMessagesTiming[310]-5);
				IntroAnimationStep = 310;
				
				//IntroFastForwardStage++;
				
				introPauseOFF(outputDocument);
				break;
				
			case 5:
				console.log("Skipping to intro end.");
				
				IntroTickCounter = (IntroCalculatedMessagesTiming[353]-5);
				IntroAnimationStep = 353;
				
				//IntroFastForwardStage++;
				
				introPauseOFF(outputDocument);
				break;
		}
	}
	else {
		IntroDebugTimeoutCounter++;
		setTimeout(() => {
			introFastForward(outputDocument);
			IntroDebugTimeoutCounter--;
			},100);
		console.log("Waiting for "+IntroActiveAnimationCounter+" elements to finish.");
	}
}

function introSkip(outputDocument){
	
	if(!IntroSkipInProgress) {
		IntroSkipInProgress = true;
		
		if(IntroCombatAlertActive){
			clearInterval(IntroCombatAlertID);
			IntroCombatAlertActive = false;
		}
		if(IntroCollisionAlertActive){
			clearInterval(IntroCollisionAlertID);
			IntroCollisionAlertActive = false;
		}
		
		IntroInterruptDelayedFade = true;
		IntroShakingEnabled = false;
		
		IntroDebugTimeoutCounter++;
		setTimeout(() => {
			IntroInterruptDelayedFade = false;
			IntroDebugTimeoutCounter--;
		},2*minorTickLength*1000);
				
		console.log("Skipping to intro end.");
		IntroWasSkipped = true;
				
		IntroTickCounter = (IntroCalculatedMessagesTiming[353]-5);
		IntroAnimationStep = 353;
		
		introPauseOFF(outputDocument);
		
		if(!IntroImageButtonSkipON) introSkipON(outputDocument);
	}
	else {
		
		console.log("Hard skip to intro end.");
		
		newAnimatedElementOpacity(outputDocument, "overInterfaceBackgroundCover", 0.1, 0, 1);
		newAnimatedElementOpacity(outputDocument, IntroMessagesLayerName, 0.1, 0, 1);
		newAnimatedElementOpacity(outputDocument, IntroVisibleCommentsLayerName, 0.1, 0, 1);
		newAnimatedElementOpacity(outputDocument, IntroCoversLayerName, 0.1, 0, 1);
		
		IntroTickCounter = (IntroCalculatedMessagesTiming[357]-5);
		IntroAnimationStep = 357;
		
		if(IntroImageButtonSkipON) introSkipOFF(outputDocument);
	}
	
	
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
	
	IntroDebugTimeoutCounter++;
	setTimeout(() => {
		introCombatAlertOff(outputDocument);
		IntroDebugTimeoutCounter--;
	},1000*(IntroCombatAlertIncreaseTime+IntroCombatAlertActiveTime));
}
function introCombatAlertOn(outputDocument) {
	newAnimatedElementOpacity(outputDocument, IntroCombatAlertCoverName, IntroCombatAlertIncreaseTime, 0.25);
}
function introCombatAlertOff(outputDocument) {
	newAnimatedElementOpacity(outputDocument, IntroCombatAlertCoverName, IntroCombatAlertDecreaseTime, 0.0);
}
	
function introCollisionAlert(outputDocument) {
	introCollisionAlertOn(outputDocument);
	
	IntroDebugTimeoutCounter++;
	setTimeout(() => {
		introCollisionAlertOff(outputDocument);
		IntroDebugTimeoutCounter--;
	},1000*(IntroCollisionAlertIncreaseTime+IntroCollisionAlertActiveTime));
}
function introCollisionAlertOn(outputDocument) {
	newAnimatedElementOpacity(outputDocument, IntroCollisionAlertCoverName, IntroCollisionAlertIncreaseTime, 0.15);
}
function introCollisionAlertOff(outputDocument) {
	newAnimatedElementOpacity(outputDocument, IntroCollisionAlertCoverName, IntroCollisionAlertDecreaseTime, 0.0);
}

function introMoveElement(outputDocument, movedElement, startX, startY, endX, endY, startTime, endTime, elapsedTime = 0) {
	
	var currentX = parseFloat(startX);
	var currentY = parseFloat(startY);	
	
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
		IntroDebugTimeoutCounter++;
		setTimeout(() => {
			introMoveElement(outputDocument, movedElement, startX, startY, endX, endY, startTime, endTime, elapsedTime);
			IntroDebugTimeoutCounter--;
			},minorTickLength*1000);
	}
	else if(IntroFastForwardStage != -1){ 
		IntroActiveAnimationCounter--;
		if(IntroDebugActive)console.log("Move Element stop, "+IntroActiveAnimationCounter);
	}
}
function introMoveLogMessages(outputDocument, logArray, moveDistance, moveSpeed){
	var logLength = logArray.length;
	
	for(var i = 0; i<logLength;i++){
		var tmpElement = outputDocument.getElementById(logArray[i]);

		if(tmpElement.style.visibility != "hidden") {
			introMoveElement(outputDocument,tmpElement,0,-1*(logLength-1-i)*moveDistance,0,-1*(logLength-i)*moveDistance,0,moveSpeed);
		}
		
	}
}
function introMoveAlertMessages(outputDocument, alertsArray, effectSpeed) {
	var alertsLength = alertsArray.length;
	var newBaseX = window.innerWidth/2 - 150 - 30;
	
	IntroAlertIsMoving = true;
	
	newAnimatedElementScale(outputDocument,alertsArray[alertsArray.length-1],effectSpeed,1);
	//animatedMoveElement(outputDocument,alertsArray[alertsArray.length-1],0,0,IntroAlertBaseX-IntroAlertPopupPositionX,IntroAlertBaseY-IntroAlertPopupPositionY,0,effectSpeed);
	animatedMoveElement(outputDocument,alertsArray[alertsArray.length-1],0,0,newBaseX-IntroAlertPopupPositionX,IntroAlertBaseY-IntroAlertPopupPositionY,0,effectSpeed);
				
	for(var i = 0; i < (alertsLength - 1); i++){
		//animatedMoveElement(outputDocument,alertsArray[i],IntroAlertBaseX - IntroAlertPopupPositionX + (IntroAlertOffsetBaseX*(alertsLength - i - 2)),IntroAlertBaseY - IntroAlertPopupPositionY + (IntroAlertOffsetBaseY*(alertsLength - i - 2)),IntroAlertBaseX - IntroAlertPopupPositionX + (IntroAlertOffsetBaseX*(alertsLength - i - 1)),IntroAlertBaseY - IntroAlertPopupPositionY + (IntroAlertOffsetBaseY*(alertsLength - i - 1)),0,effectSpeed);
		animatedMoveElement(outputDocument,alertsArray[i],newBaseX - IntroAlertPopupPositionX + (IntroAlertOffsetBaseX*(alertsLength - i - 2)),IntroAlertBaseY - IntroAlertPopupPositionY + (IntroAlertOffsetBaseY*(alertsLength - i - 2)),newBaseX - IntroAlertPopupPositionX + (IntroAlertOffsetBaseX*(alertsLength - i - 1)),IntroAlertBaseY - IntroAlertPopupPositionY + (IntroAlertOffsetBaseY*(alertsLength - i - 1)),0,effectSpeed);
		newAnimatedElementOpacity(outputDocument, alertsArray[i], effectSpeed, Math.pow(IntroAlertScaleShrinkScale,(alertsLength - i - 1)), Math.pow(IntroAlertScaleShrinkScale,(alertsLength - i - 2)));
	}	
	
	IntroDebugTimeoutCounter++;
	setTimeout(() => { 
		IntroAlertIsMoving = false;
		IntroDebugTimeoutCounter--;	
	},(effectSpeed*1000+100));
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
				
				//console.log("oldX: " + oldX);
				//console.log("newX: " + newBaseX);
				//console.log("oldY: " + oldY);
				//console.log("newY: " + (IntroAlertBaseY - IntroAlertPopupPositionY + (IntroAlertOffsetBaseY*(alertsLength - i - 1))));
				
				//animatedMoveElement(outputDocument,alertsArray[i],newBaseX - IntroAlertPopupPositionX + (IntroAlertOffsetBaseX*(alertsLength - i - 1)),IntroAlertBaseY - IntroAlertPopupPositionY + (IntroAlertOffsetBaseY*(alertsLength - i - 1)),newBaseX - IntroAlertPopupPositionX + (IntroAlertOffsetBaseX*(alertsLength - i - 1)),IntroAlertBaseY - IntroAlertPopupPositionY + (IntroAlertOffsetBaseY*(alertsLength - i - 1)),0,effectSpeed);
				animatedMoveElement(outputDocument,alertsArray[i],oldX,oldY,newBaseX - IntroAlertPopupPositionX + (IntroAlertOffsetBaseX*(alertsLength - i - 1)),IntroAlertBaseY - IntroAlertPopupPositionY + (IntroAlertOffsetBaseY*(alertsLength - i - 1)),0,effectSpeed);
			}
			
			IntroDebugTimeoutCounter++;
			setTimeout(() => {
				IntroResizeFixInProgress = false;
				IntroResizeEventsCounter = 0;
				IntroDebugTimeoutCounter--;
			},(effectSpeed*1000+100));
		}
		else{
			//console.log("Resize in progress");
			var tmpResizeCounter = IntroResizeEventsCounter;
			
			IntroDebugTimeoutCounter++;
			setTimeout(() => {
				introMoveAlertMessagesOnResize(outputDocument, tmpResizeCounter, alertsArray, effectSpeed);
				IntroDebugTimeoutCounter--;
			},250);
		}
	}
	else {
		IntroDebugTimeoutCounter++;
		setTimeout(() => {
			introMoveAlertMessagesOnResize(outputDocument, resizeEventCounter, alertsArray, effectSpeed);
			IntroDebugTimeoutCounter--;
		},250);
	}
}

function introDelayedElementOpacity(outputDocument, fadingElement, fadeDelay, fadeTime, endOpacity = 0, startOpacity = 1, elapsedTime = 0){
	
	if(IntroInterruptDelayedFade) return;
	
	var currentFadingElement = fadingElement;
	
	if(elapsedTime==0){		
		//console.log("Delayed Opacity Start");
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
		
		IntroDebugTimeoutCounter++;
		setTimeout(() => {
			introDelayedElementOpacity(outputDocument, currentFadingElement, fadeDelay, fadeTime, endOpacity, startOpacity, elapsedTime);
			IntroDebugTimeoutCounter--;
		},minorTickLength*1000);
	}
	else
	{
		//console.log("Delayed Opacity End");
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
	if(IntroInterruptDelayedFade) return;
	
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
		
		IntroDebugTimeoutCounter++;
		setTimeout(() => {
			introAnimatedElementOpacity(outputDocument, elementID, animationLength, endOpacity, startingOpacity, elapsedTime);
			IntroDebugTimeoutCounter--;
		},minorTickLength*1000);
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

function introChangeShaking(outputDocument, elementID, stepTime, shakingTime, xValue, yValue, finishMode = "default"){
	//IntroShakingChanged = true;
	
	IntroShakingTargetElement = outputDocument.getElementById(elementID);
	
	switch(finishMode){
		case "defaut":
			IntroShakingFinishMode = "default";
			break;
		case "zero":
			IntroShakingFinishMode = "zero";
			break;
		case "stay":
			IntroShakingFinishMode = "stay";
			break;
		case "revert":
			IntroShakingFinishMode = "revert";
			break;
		default:
			IntroShakingFinishMode = "default";
			break;
	}
	
	if(!IntroShakingActive){
		IntroShakingInitialTransform = getComputedStyle(IntroShakingTargetElement).transform;
	}
	
	IntroShakingValueX = xValue;
	IntroShakingValueY = yValue;
	IntroShakingSpeed = stepTime;
	IntroShakingLength = shakingTime;
	
	//if time not set, special value for ElapsedTime - standby mode.
	if(shakingTime == 0) IntroShakingElapsedTime = -1;
	else IntroShakingElapsedTime = 0;
}
function introActiveShaking(){
	//	To stop/interrupt loop:
	//IntroShakingEnabled = false;
	
	//console.log("Active shake");
	
	if(IntroShakingEnabled){
		
		
		//start shaking
		if(!IntroShakingActive && IntroShakingElapsedTime == 0) {
			IntroShakingActive = true;
			
			if(IntroFastForwardStage != -1) {
				//IntroActiveAnimationCounter++;
				//if(IntroDebugActive) console.log("Active element shaking start, "+IntroActiveAnimationCounter);
			}
		}
		
		//if should be shaking
		if(IntroShakingElapsedTime != -1){
			var newValueX = ((Math.random() - 0.5) * IntroShakingValueX).toFixed(1);
			var newValueY = ((Math.random() - 0.5) * IntroShakingValueY).toFixed(1);
			var newTransform = "matrix(1, 0, 0, 1," + newValueX + "," + newValueY +")";
		}
		
		//if is still shaking
		if(IntroShakingElapsedTime <= IntroShakingLength || IntroShakingLength == -1) {
			IntroShakingTargetElement.style.transform = newTransform;
			IntroShakingElapsedTime += IntroShakingSpeed;
			
			IntroDebugTimeoutCounter++;
			setTimeout(() => {
				introActiveShaking();
				IntroDebugTimeoutCounter--;
			},IntroShakingSpeed*1000);
		}
		
		//if it isn't shaking
		else{
			//if it also finishes shaking
			if(IntroShakingActive){
				if(IntroFastForwardStage != -1){ 
					//IntroActiveAnimationCounter--;
					//if(IntroDebugActive) console.log("Active element shaking stop, "+IntroActiveAnimationCounter);
				}
				
				//default == stay
				if(IntroShakingFinishMode == "stay") IntroShakingTargetElement.style.transform = newTransform;
				if(IntroShakingFinishMode == "revert") IntroShakingTargetElement.style.transform = IntroShakingInitialTransform;
				if(IntroShakingFinishMode == "zero") IntroShakingTargetElement.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
				
				IntroShakingActive = false;
			}
			
			IntroDebugTimeoutCounter++;
			setTimeout(() => {
				introActiveShaking();
				IntroDebugTimeoutCounter--;
			},IntroShakingIdleWaitTime);
		}
	}
}

function introResetLogMessages(outputDocument){
	if(messagesGroup = outputDocument.getElementById(IntroFloatingMessagesLayerName)) {
		IntroFloatingTextMessagesArray = [];
		IntroFloatingTextRepliesArray = [];
		IntroFloatingTextFadeTMPArray = [];
		
		messagesGroup.innerHTML = "";
	}
	else {
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

//OBSOLETE FUNCTIONS		
				
/*function introMoveLogMessages(outputDocument, logArray, logOffset, fadeLast = false, fadeIndex = 0, fadeDelay = 1, fadeTime = 1 ){
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
}*/
/*function IntroAnimationStepInit(outputDocument) {
	IntroCalculatedMessagesTiming = IntroCalculateTimings(introMessagesDelays);
	
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
/*function IntroAIMessageBlurr(outputDocument,elementID, blurrColor) {
	targetTextbox=outputDocument.getElementById(elementID);
	tmpTextBlurr = "0 0 ";
	
	tmpTextBlurr += (IntroAIMessageBlurrMaxVal+IntroAIMessageBlurrMinVal)/2 + (IntroAIMessageBlurrMaxVal-IntroAIMessageBlurrMinVal)/2 * Math.sin(IntroAIMessageBlurrProgressValue);

	tmpTextBlurr+="px "+blurrColor;
	targetTextbox.style.textShadow = tmpTextBlurr;
	
	//console.log(IntroAIMessageBlurrProgressValue + " " + tmpTextBlurr);
			    
	IntroAIMessageBlurrProgressValue+=IntroAIMessageBlurrStepChange;
	if(IntroAIMessageBlurrProgressValue>(2*Math.PI)) IntroAIMessageBlurrProgressValue-=2*Math.PI;
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
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[13][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==225) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[13][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==250) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[13][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==300) { //'successful' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[14],0.5,true);
	}
	if(IntroTickCounter==400) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==450) { //'checking sensors' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[10],0.9);
	}
	if(IntroTickCounter==575) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[10][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==600) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[10][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==625) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[10][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==675) { //'operational' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(IntroTickCounter==775) { //move 2
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==825) { //'scanning' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[11],1.2);
	}
	if(IntroTickCounter==975) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[11][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1000) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[11][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1025) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[11][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1075) { //'not found' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[12],0.45,true);
	}
	if(IntroTickCounter==1150) { //move 3 
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==1200) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==1200) { //'RUN SYSTEM CHECK' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[15],1.5);
	}
	if(IntroTickCounter==1400) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1450) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1500) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1550) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],IntroTextColors[4]]);
	}
	if(IntroTickCounter==1575) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==1600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1650) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(IntroTickCounter==1650) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1700) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",IntroTextColors[4]]);
		
	}
	if(IntroTickCounter==1750) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],IntroTextColors[4]]);
	}
	if(IntroTickCounter==1800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1900) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1950) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],IntroTextColors[4]]);
	}
	if(IntroTickCounter==1950) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==2000) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2025) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(IntroTickCounter==2050) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2100) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2150) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],IntroTextColors[4]]);
	}
	if(IntroTickCounter==2200) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",IntroTextColors[4]]);
	}	
	if(IntroTickCounter==2250) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2300) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2350) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],IntroTextColors[4]]);
	}
	if(IntroTickCounter==2400) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2400) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(IntroTickCounter==2450) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2475) { //alarm 1
		redAlert(outputDocument);
		activeAlertID = setInterval(redAlert, 2500, outputDocument);
		
		newDisplayElement(outputDocument,outputWarningWindows[0],IntroAlertPopupPositionX,IntroAlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[0],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[0], NaN,NaN,introPopupMessages[17],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[0],0.2,1.5);
	}
	if(IntroTickCounter==2500) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2550) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0],IntroTextColors[4]]);
	}
	if(IntroTickCounter==2550) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[0],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[0],0,0,IntroAlertBaseX-IntroAlertPopupPositionX,IntroAlertBaseY-IntroAlertPopupPositionY,0,1);
	}
	if(IntroTickCounter==2600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",IntroTextColors[4]]);
	}	
	if(IntroTickCounter==2650) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2700) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2750) { //'aborted' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[16],0.35,true);
	}
	if(IntroTickCounter==2825) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==2875) { //checking CAS show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[18],1.85);
	}
	if(IntroTickCounter==3100) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[18][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3125) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[18][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3150) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[18][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3200) { //'operational' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(IntroTickCounter==3300) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==3350) { //activate CAS show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[19],2.05);
	}
	if(IntroTickCounter==3600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3625) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], IntroConsoleMessageFadeDefaultTime, 0.0);
	}	
	if(IntroTickCounter==3625) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3650) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3675) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0],IntroTextColors[4]]);
	}
	if(IntroTickCounter==3700) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3725) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3750) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3775) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0],IntroTextColors[4]]);
	}
	if(IntroTickCounter==3800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3825) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3850) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3850) { //'CAS error' alarm
		newDisplayElement(outputDocument,outputWarningWindows[1],IntroAlertPopupPositionX,IntroAlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[1],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[1], NaN,NaN,introPopupMessages[20],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[1], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[1],0.2,1.5);
	}
	if(IntroTickCounter==3875) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0],IntroTextColors[4]]);
	}
	if(IntroTickCounter==3900) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3925) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3925) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[1],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[1],0,0,IntroAlertBaseX-IntroAlertPopupPositionX,IntroAlertBaseY-IntroAlertPopupPositionY,0,1);
		
		animatedMoveElement(outputDocument,outputWarningWindows[0],IntroAlertBaseX-IntroAlertPopupPositionX,IntroAlertBaseY-IntroAlertPopupPositionY,IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 1, 0.8);
		//newAnimatedElementScale(outputDocument,outputWarningWindows[0],0.5,0.75);
	}
	if(IntroTickCounter==3950) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[19][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4000) { //'failed' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[0],0.30,true);
	}
	if(IntroTickCounter==4075) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==4075) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(IntroTickCounter==4100) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==4125) { //'restart CAS' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[21],1.95);
	}
	if(IntroTickCounter==4350) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[21][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4400) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"...",IntroTextColors[4]]);
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
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==4625) { //'check thrusters' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[22],1.6);
	}
	if(IntroTickCounter==4825) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[22][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[22][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4875) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[22][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4875) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==4925) { //'operational' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(IntroTickCounter==5025) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==5075) { //'burn thrusters' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[23],1.35);
	}
	if(IntroTickCounter==5250) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[23][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5300) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[23][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5325) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(IntroTickCounter==5350) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[23][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5375) { //'entering atmosphere' alarm
		newDisplayElement(outputDocument,outputWarningWindows[2],IntroAlertPopupPositionX,IntroAlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[2],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[2], NaN,NaN,introPopupMessages[24],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[2], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[2],0.2,1.5);
	}
	if(IntroTickCounter==5375) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==5425) { //'activated' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[5],0.45,true);
	}
	if(IntroTickCounter==5450) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[2],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[2],0,0,IntroAlertBaseX-IntroAlertPopupPositionX,IntroAlertBaseY-IntroAlertPopupPositionY,0,1);
		
		animatedMoveElement(outputDocument,outputWarningWindows[1],IntroAlertBaseX-IntroAlertPopupPositionX,IntroAlertBaseY-IntroAlertPopupPositionY,IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[1], 1, 0.8);
		
		animatedMoveElement(outputDocument,outputWarningWindows[0],IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY,IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX*2,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY*2,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 1, 0.6);
		//newAnimatedElementScale(outputDocument,outputWarningWindows[0],0.5,0.75);
	}
	if(IntroTickCounter==5500) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==5550) { //'restart CAS' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[21],1.95);
	}
	if(IntroTickCounter==5775) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5825) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5825) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==5825) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(IntroTickCounter==5875) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5925) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5975) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6025) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6075) { //... 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[21][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6125) { //'failed to start' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[3],0.75,true);
	}
	if(IntroTickCounter==6250) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-IntroConsoleMessageOffset,0,0.25);
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
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==6400) { //'thruster damage' alarm
		newDisplayElement(outputDocument,outputWarningWindows[3],IntroAlertPopupPositionX,IntroAlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[3],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[3], NaN,NaN,introPopupMessages[26],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[3], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[3],0.2,1.5);
	}
	if(IntroTickCounter==6475) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[25][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6475) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[3],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[3],0,0,IntroAlertBaseX-IntroAlertPopupPositionX,IntroAlertBaseY-IntroAlertPopupPositionY,0,1);
		
		animatedMoveElement(outputDocument,outputWarningWindows[2],IntroAlertBaseX-IntroAlertPopupPositionX,IntroAlertBaseY-IntroAlertPopupPositionY,IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[2], 1, 0.8);
		
		animatedMoveElement(outputDocument,outputWarningWindows[1],IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY,IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX*2,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY*2,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[1], 1, 0.6);
		
		animatedMoveElement(outputDocument,outputWarningWindows[0],IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX*2,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY*2,IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX*3,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY*3,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 1, 0.4);
		//newAnimatedElementScale(outputDocument,outputWarningWindows[0],0.5,0.75);
	}
	if(IntroTickCounter==6500) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[25][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6525) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[25][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6575) { //'inactive' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(IntroTickCounter==6650) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-IntroConsoleMessageOffset,0,0.25);
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
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[28][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6900) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[28][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6925) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[28][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6975) { //'success' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[5],0.4,true);
	}
	if(IntroTickCounter==7050) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], IntroConsoleMessageFadeDefaultTime/2, 0.5);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], IntroConsoleMessageFadeDefaultTime/2, 0.5);
	}
	if(IntroTickCounter==7050) { //move 3
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==7100) { //'raising shields' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[29],0.85);
	}
	if(IntroTickCounter==7175) { //'imminent crash' alarm
		newDisplayElement(outputDocument,outputWarningWindows[4],IntroAlertPopupPositionX,IntroAlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[4],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[4], NaN,NaN,introPopupMessages[30],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[4], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[4],0.2,1.5);
	}
	if(IntroTickCounter==7225) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[29][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==7250) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[29][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==7250) { //downscale alarm
		newAnimatedElementScale(outputDocument,outputWarningWindows[4],1,1);
		animatedMoveElement(outputDocument,outputWarningWindows[4],0,0,IntroAlertBaseX-IntroAlertPopupPositionX,IntroAlertBaseY-IntroAlertPopupPositionY,0,1);
		
		animatedMoveElement(outputDocument,outputWarningWindows[3],IntroAlertBaseX-IntroAlertPopupPositionX,IntroAlertBaseY-IntroAlertPopupPositionY,IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[3], 1, 0.8);
		
		animatedMoveElement(outputDocument,outputWarningWindows[2],IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY,IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX*2,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY*2,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[2], 1, 0.6);
		
		animatedMoveElement(outputDocument,outputWarningWindows[1],IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX*2,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY*2,IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX*3,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY*3,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[1], 1, 0.4);
		
		animatedMoveElement(outputDocument,outputWarningWindows[0],IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX*3,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY*3,IntroAlertBaseX-IntroAlertPopupPositionX+IntroAlertOffsetBaseX*4,IntroAlertBaseY-IntroAlertPopupPositionY+IntroAlertOffsetBaseY*4,0,1);
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[0], 1, 0.2);
	}
	if(IntroTickCounter==7275) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[29][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==7325) { //'success' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[5],0.4,true);
	}
	if(IntroTickCounter==7400) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==7425) { //alarm
		newDisplayElement(outputDocument,outputWarningWindows[5],IntroAlertPopupPositionX,IntroAlertPopupPositionY);
		newDisplayFixedMessage(outputDocument,outputWarningHeaders[5],NaN,NaN,introPopupMessages[8],true);
		newDisplayAnimatedMessage(outputDocument, outputWarningText[5], NaN,NaN,introPopupMessages[32],0.5,true);
		
		newAnimatedElementOpacity(outputDocument, outputWarningWindows[5], 0.2, 1.0);
		newAnimatedElementScale(outputDocument,outputWarningWindows[5],0.2,1.5);
	}
	if(IntroTickCounter==7450) { //fade 1
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], IntroConsoleMessageFadeDefaultTime, 0.0);
		//newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], IntroConsoleMessageFadeDefaultTime, 0.0);
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
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==150) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,["..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==200) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,["...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==275) { //'restoring system' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[33],0.8);
	}
	if(IntroTickCounter==400) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==450) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==500) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==550) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==600) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==650) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==700) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==750) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==900) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[33][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==975) { //'success' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[5],0.35,true);
	}
	if(IntroTickCounter==1050) { //move 1
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==1100) { //'RUNNING CHECKUP' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[15],1.5);
	}
	if(IntroTickCounter==1300) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1350) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1400) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1450) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1500) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1550) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1600) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[15][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==1675) { //'aborted' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[16],0.35,true);
	}
	if(IntroTickCounter==1750) { //move 2
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==1800) { //'severe damage detected' show finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[34],1.1,true);
	}
	if(IntroTickCounter==1850) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==1950) { //move 3
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==2000) { //'commander status' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[35],1.8);
	}
	if(IntroTickCounter==2225) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[35][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2275) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[35][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2300) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(IntroTickCounter==2325) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[35][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2400) { //'alive, not responding' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[36],1.05,true);
	}
	if(IntroTickCounter==2550) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==2550) { //move 4
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==2600) { //'calling bridge' show 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[8], ConsoleX,ConsoleY,introPopupMessages[37],0.8);
	}
	if(IntroTickCounter==2725) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2750) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==2775) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2825) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2875) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2925) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==2975) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3000) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(IntroTickCounter==3025) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3075) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3125) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3175) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3200) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(IntroTickCounter==3225) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3275) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3325) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3350) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==3375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3425) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3475) { //
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3525) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3575) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==3625) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[37][0]+"...",IntroTextColors[4]]);
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
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==3875) { //"entering emergency" show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[38],1.15);
	}
	if(IntroTickCounter==4025) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[38][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4075) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[38][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4125) { //... finish 1
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[38][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4200) { //move 1
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==4250) { //'emergency checkup' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[39],1.3);
	}
	if(IntroTickCounter==4425) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[39][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4475) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[39][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4525) { //... finish 2
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[39][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4600) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==4625) { //fade 5
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==4650) { //'checking life support' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[40],1.5);
	}
	if(IntroTickCounter==4850) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[40][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4900) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[40][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==4950) { //... 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[40][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5000) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], IntroConsoleMessageFadeDefaultTime, 0.0);
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
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==5175) { //'checking ai' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[41],1.05);
	}
	if(IntroTickCounter==5325) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[41][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[41][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5400) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==5425) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[41][0]+"...",IntroTextColors[4]]);
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
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==5625) { //'restarting AI' show 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[8], ConsoleX,ConsoleY,introPopupMessages[42],1.05);
	}
	if(IntroTickCounter==5775) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5825) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5850) { //reset 2
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[2]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[3]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], 0.2, 1.0);
	}
	if(IntroTickCounter==5875) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==5925) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==5950) { //'failed to start' finish 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[9], ConsoleX_2,ConsoleY,introPopupMessages[3],0.75,true);
	}
	if(IntroTickCounter==6075) { //move 5
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==6125) { //'check power system' show 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[0], ConsoleX,ConsoleY,introPopupMessages[43],1.7);
	}
	if(IntroTickCounter==6325) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[43][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[43][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6375) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(IntroTickCounter==6375) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==6425) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[43][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6500) { //'operational' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[6],0.55,true);
	}
	if(IntroTickCounter==6600) { //move 1
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==6650) { //'power status' show 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[2], ConsoleX,ConsoleY,introPopupMessages[44],1.1);
	}
	if(IntroTickCounter==6800) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[44][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6825) { //reset 4
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[6]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[7]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], 0.2, 1.0);
	}
	if(IntroTickCounter==6850) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[44][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6875) { //fade 5
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==6900) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[44][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==6975) { //'low energy' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[45],0.5,true);
	}
	if(IntroTickCounter==7075) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==7125) { //'checking main power' show 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[4], ConsoleX,ConsoleY,introPopupMessages[46],1.55);
	}
	if(IntroTickCounter==7325) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[46][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==7325) { //reset 5
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[8]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[9]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], 0.2, 1.0);
	}
	if(IntroTickCounter==7375) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[46][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==7400) { //fade 1
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==7425) { //... 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[46][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==7500) { //'damaged' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[9],0.35,true);
	}
	if(IntroTickCounter==7575) { //move 3
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==7625) { //'checking secondary power' show 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[48],1.8);
	}
	if(IntroTickCounter==7850) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[48][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==7850) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(IntroTickCounter==7875) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==7900) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[48][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==7950) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[6],ConsoleX,ConsoleY,[introPopupMessages[48][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==8025) { //'inactive' finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[7], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(IntroTickCounter==8100) { //move 4
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
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
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==8375) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[49][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==8425) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[49][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==8475) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[49][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==8550) { //'failed to start' finish 5
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[9], ConsoleX_2,ConsoleY,introPopupMessages[3],0.75,true);
	}
	if(IntroTickCounter==8675) { //move 5
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
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
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==8925) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[50][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==8975) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[50][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==9025) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[0],ConsoleX,ConsoleY,[introPopupMessages[50][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==9100) { //'inactive' finish 1
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[1], ConsoleX_2,ConsoleY,introPopupMessages[27],0.4,true);
	}
	if(IntroTickCounter==9175) { //move 1
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
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
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==9475) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==9475) { //fade 5
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[8], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[9], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==9525) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==9575) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==9625) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==9675) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==9725) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[2],ConsoleX,ConsoleY,[introPopupMessages[51][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==9800) { //'success' finish 2
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[3], ConsoleX_2,ConsoleY,introPopupMessages[5],0.35,true);
	}
	if(IntroTickCounter==9875) { //move 2
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[8],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[9],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
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
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==10075) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==10125) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==10175) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==10225) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==10275) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==10325) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==10375) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==10425) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==10425) { //reset 1
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[0]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[1]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[0], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[1], 0.2, 1.0);
	}
	if(IntroTickCounter==10475) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==10525) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==10575) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[4],ConsoleX,ConsoleY,[introPopupMessages[42][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==10650) { //'success' finish 3
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[5], ConsoleX_2,ConsoleY,introPopupMessages[5],0.35,true);
	}
	if(IntroTickCounter==10675) { //fade 2
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[2], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[3], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==10725) { //move 3
		//animatedMoveElement(outputDocument,outputNoWindowElements[0],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[1],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==10750) { //move 3 again
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[4],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[5],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
	}
	if(IntroTickCounter==10800) { //'AI activated' show finish 4
		newDisplayAnimatedMessage(outputDocument, outputNoWindowElements[6], ConsoleX,ConsoleY,introPopupMessages[52],2.4);
	}
	if(IntroTickCounter==11075) { //move 4
		animatedMoveElement(outputDocument,outputNoWindowElements[2],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[3],0,-3*IntroConsoleMessageOffset,0,-4*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-2*IntroConsoleMessageOffset,0,-3*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[4],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		//animatedMoveElement(outputDocument,outputNoWindowElements[5],0,-IntroConsoleMessageOffset,0,-2*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[6],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
		animatedMoveElement(outputDocument,outputNoWindowElements[7],0,0,0,-1*IntroConsoleMessageOffset,0,0.25);
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
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==11425) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==11475) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==11525) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==11550) { //fade 3
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==11575) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==11625) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==11675) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==11725) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==11775) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==11825) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==11875) { //fade 4
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[6], IntroConsoleMessageFadeDefaultTime, 0.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[7], IntroConsoleMessageFadeDefaultTime, 0.0);
	}
	if(IntroTickCounter==11875) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==11925) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==11975) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==12000) { //reset 3
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[4]);
		newResetDisplayedMessage(outputDocument,outputNoWindowElements[5]);
		
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[4], 0.2, 1.0);
		newAnimatedElementOpacity(outputDocument, outputNoWindowElements[5], 0.2, 1.0);
	}
	if(IntroTickCounter==12025) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==12075) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",IntroTextColors[4]]);
	}
	if(IntroTickCounter==12125) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==12175) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==12225) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==12275) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",IntroTextColors[4]]);
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
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==12375) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==12425) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==12475) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",IntroTextColors[4]]);
	}	
	if(IntroTickCounter==12525) { // 
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+" ",IntroTextColors[4]]);
	}
	if(IntroTickCounter==12575) { //.
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+".",IntroTextColors[4]]);
	}
	if(IntroTickCounter==12625) { //..
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"..",IntroTextColors[4]]);
	}
	if(IntroTickCounter==12675) { //...
		newDisplayFixedMessage(outputDocument,outputNoWindowElements[8],ConsoleX,ConsoleY,[introPopupMessages[53][0]+"...",IntroTextColors[4]]);
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

		//IntroAIMessageBlurrStepTime(outputDocument, outputWindowText[0], introAIMessages[1]);
		IntroAIMessageBlurrID = setInterval(IntroAIMessageBlurr, IntroAIMessageBlurrStepTime, outputDocument, outputWindowText[0], IntroTextColors[4]);
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
