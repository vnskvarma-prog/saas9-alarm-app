// ── CONSTANTS ──────────────────────────────────────────────
const ALARMS = {
  "1000": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"STOP BUTTON PRESSED",
    d:"The machine was stopped through the stop push button. The alarm is displayed directly in the reset window.",
    f:"No particular operation required. Simply press RESET and restart the machine when ready." },

  "1001": { s:"LINE", c:"YELLOW", st:"PREVENTED START", p:"OPERATOR", by:"NO",
    n:"FILM INSERTION ENABLED",
    d:"Film insertion mode is active. The machine cannot run in normal production mode while this function is enabled.",
    f:"Deactivate the film insertion function from the HMI operator panel to return to normal production mode." },

  "1002": { s:"LINE", c:"RED", st:"PREVENTED START", p:"OPERATOR", by:"NO",
    n:"MACHINE REINIT NECESSARY",
    d:"The machine requires a REINIT (re-initialization) before it can start. The machine is not at the end-of-cycle position.",
    f:"Perform the REINIT procedure from the HMI to bring all sections to the end-of-cycle position, then restart." },

  "1003": { s:"LINE", c:"YELLOW", st:"PREVENTED START", p:"OPERATOR", by:"NO",
    n:"ALL A-B-C SECTIONS OFF",
    d:"The machine cannot run because all three sections (A, B and C) are switched off.",
    f:"Switch on at least one section from the operator panel, then restart the machine." },

  "1004": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"INSUFFICIENT LINE AIR PRESSURE",
    d:"Compressed air pressure in the main line is insufficient for safe machine operation.",
    f:"Check the main compressed air supply. Verify pressure gauges, check for leaks in pipes and fittings, and check the pressure regulator and air filter/dryer." },

  "1005": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"MECHANICAL TECHNICIAN", by:"NO",
    n:"INSUFFICIENT A SECTION AIR PRESSURE",
    d:"Compressed air pressure in the A section is insufficient.",
    f:"Check the correct functioning of the safety pneumatic system in the A section. Inspect all pipes, fittings, the pressure regulator, and air filter for the A section." },

  "1006": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"MECHANICAL TECHNICIAN", by:"NO",
    n:"INSUFFICIENT C SECTION AIR PRESSURE",
    d:"Compressed air pressure in the C section is insufficient.",
    f:"Check the correct functioning of the safety pneumatic system in the C section. Inspect pipes, fittings, pressure regulator and air filter. Check pressure switch/sensor for dirt or misalignment." },

  "1007": { s:"LINE", c:"RED", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"ELECTRICAL CABINET OVERLOAD – A SECTION DRIVES",
    d:"Excessive electrical absorption detected in the A section 24VDC drive cabinet. The machine performs an immediate stop of the A section.",
    f:"Check the reason for excessive absorption. Possible causes: breakage of the motor body or transmission; incorrect distribution of electrical current (e.g., a phase is missing). Inspect motor, transmission, and verify all three supply phases are present." },

  "1008": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"ASPIRATOR OVERLOAD CUT OUT – EXCESSIVE ABSORPTION",
    d:"Excessive electrical absorption detected in the aspirator motor.",
    f:"Check the reason for excessive absorption. Possible causes: motor or transmission body breakdown, or incorrect electrical current distribution (e.g. a phase is missing). Inspect motor and electrical supply." },

  "1009": { s:"LINE", c:"YELLOW", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"24VDC DRIVES A SECTION OVERLOAD CUT OUT",
    d:"Excessive electrical absorption detected in the A section 24VDC drives.",
    f:"Check the reason for excessive absorption. Inspect the motor drives, check for mechanical obstruction, and verify all electrical phases are present." },

  "1012": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"EXTERNAL CHILLER OVERLOAD CUT OUT – EXCESSIVE ABSORPTION",
    d:"Excessive electrical absorption detected in the external chiller motor.",
    f:"Check the reason for excessive absorption in the chiller. Possible causes: motor or compressor failure, incorrect current distribution. Inspect chiller motor and electrical supply." },

  "1013": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"LIFTING DEVICE OVERLOAD CUT OUT – EXCESSIVE ABSORPTION",
    d:"Excessive electrical absorption detected in the lifting device (paranco) motor.",
    f:"Check the reason for excessive absorption in the lifting device. Inspect the motor and electrical supply. Verify no mechanical obstruction." },

  "1016": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"A SECTION LAF FAN FAILURE",
    d:"A failure has been detected in the LAF (Laminar Air Flow) fan in the A section.",
    f:"Check the reason that caused the failure. Inspect the fan motor, electrical installation and connections. Replace the fan if faulty." },

  "1017": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"C SECTION LAF FAN FAILURE",
    d:"A failure has been detected in the LAF (Laminar Air Flow) fan in the C section.",
    f:"Check the reason that caused the failure. Inspect the fan motor, electrical installation and connections. Replace the fan if faulty." },

  "1018": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"A SECTION LAF FILTER FAILURE",
    d:"A failure has been detected in the LAF filter unit in the A section.",
    f:"Check the motor electrical installation. Inspect and clean or replace the LAF filter. Verify the filter differential pressure sensor." },

  "1019": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"C SECTION LAF FILTER FAILURE",
    d:"A failure has been detected in the LAF filter unit in the C section.",
    f:"Check the motor electrical installation. Inspect and clean or replace the LAF filter. Verify the filter differential pressure sensor." },

  "1020": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"LAF FAN 1 – OVERLOAD CUT OUT",
    d:"Excessive electrical absorption detected in LAF Fan 1.",
    f:"Check the reason for excessive absorption. Possible causes: motor or transmission body breakdown, incorrect current distribution (e.g. a phase is missing). Inspect fan motor and electrical supply." },

  "1021": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"LAF FAN 2 – OVERLOAD CUT OUT",
    d:"Excessive electrical absorption detected in LAF Fan 2.",
    f:"Check the reason for excessive absorption. Inspect fan motor and electrical supply. Verify all phases are present." },

  "1022": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"LAF FAN 3 – OVERLOAD CUT OUT",
    d:"Excessive electrical absorption detected in LAF Fan 3.",
    f:"Check the reason for excessive absorption. Inspect fan motor and electrical supply. Verify all phases are present." },

  "1023": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"LAF FAN 4 – OVERLOAD CUT OUT",
    d:"Excessive electrical absorption detected in LAF Fan 4.",
    f:"Check the reason for excessive absorption. Inspect fan motor and electrical supply. Verify all phases are present." },

  "1024": { s:"LINE", c:"YELLOW", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LAF NOT ENABLED",
    d:"The LAF (Laminar Air Flow) system is not enabled. The machine cannot run without the LAF active for GMP compliance.",
    f:"Enable the LAF system from the HMI settings. Verify the LAF fans are running correctly before restarting." },

  "1200": { s:"LINE", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"PRODUCT CONTROLS DISABLED",
    d:"Product quality controls are currently disabled. This is a warning status, not a production stop.",
    f:"Re-enable the product controls from the HMI when ready for production to ensure quality checks are active." },

  "1201": { s:"LINE", c:"YELLOW", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"MANUAL MODE ACTIVE",
    d:"The machine is operating in manual mode. Normal automatic production is not possible.",
    f:"Switch back to automatic mode from the HMI operator panel when ready for production." },

  "1209": { s:"LINE", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CONTINUITY GROUP OUT OF ORDER",
    d:"The continuity group (UPS/backup power) is not functioning correctly.",
    f:"Check the continuity group (UPS) status, connections, and battery. Contact electrical technician if needed." },

  "1210": { s:"LINE", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"ELECTRICAL CABINET CRITICAL TEMPERATURE",
    d:"The electrical cabinet temperature is approaching a critical level. This is a pre-warning before a stop alarm.",
    f:"Check cabinet cooling fan and ventilation slots for blockage. Ensure cabinet doors are properly closed. Check ambient room temperature." },

  "1211": { s:"LINE", c:"GREEN", st:"NO STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"STANDBY MODE ON",
    d:"The machine is in standby mode. This is activated when the product tank between SAAS and CT1 is full.",
    f:"The machine will resume automatically when the product level drops. No action required unless standby is unexpected." },

  "1301": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"DATABASE MANAGER ERROR",
    d:"The database manager software has detected an error. The system stops production to ensure data integrity.",
    f:"To restore correct functioning, press the relevant button on the HMI. If the problem persists, restart the HMI software. Contact technical support if recurring." },

  "1400": { s:"LINE", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"ELECTRICAL CABINET TEMPERATURE OUT OF TOLERANCE",
    d:"The electrical cabinet temperature has exceeded the allowed tolerance.",
    f:"Check the cabinet cooling fan. Ensure cabinet ventilation slots are not blocked. Check the ambient room temperature. Ensure all cabinet doors are properly closed." },

  "1600": { s:"LINE", c:"RED", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"LMC CONTROLLER ALARM",
    d:"An alarm has been triggered on the LMC (Line Management Controller).",
    f:"Check the LMC controller status display and error codes. Check communication cables and connections. Contact technical support if the error code is not identifiable." },

  "1901": { s:"LINE", c:"RED", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"SAFETY PLC NOT READY",
    d:"The safety PLC is not in the ready state. All machine motion stops immediately.",
    f:"Check the safety PLC status LEDs and error codes. Reset any active safety faults. Verify all safety guards are closed. Cycle power to the safety PLC if needed, then perform REINIT." },

  "1903": { s:"LINE", c:"RED", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"PVC MODULE NOT CONNECTED",
    d:"The PVC forming module is not connected or not communicating with the main PLC.",
    f:"Check the PVC module communication cables and connectors. Verify the module power supply. Check the PLC network settings." },

  "1904": { s:"LINE", c:"RED", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"ALU MODULE NOT CONNECTED",
    d:"The ALU forming module is not connected or not communicating with the main PLC.",
    f:"Check the ALU module communication cables and connectors. Verify the module power supply. Check the PLC network settings." },

  "2000": { s:"REEL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"FRONT REEL – END OF FILM",
    d:"The front film reel sensor (in fully back position) has detected that the film is finished.",
    f:"Replace the front film reel. Thread the new film through the machine following the film insertion procedure. Press RESET and restart." },

  "2001": { s:"REEL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"REAR REEL – END OF FILM",
    d:"The rear film reel sensor has detected that the film is finished.",
    f:"Replace the rear film reel. Thread the new film through the machine following the film insertion procedure. Press RESET and restart." },

  "2002": { s:"REEL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"IRREGULAR FRONT FILM UNWINDING",
    d:"Irregular unwinding detected on the front film reel. The film is unwinding in an incorrect position.",
    f:"Check the front reel mounting and film path. Verify the reel holder is properly locked. Inspect the film for damage or tangling. Reposition the band and restart." },

  "2003": { s:"REEL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"IRREGULAR REAR FILM UNWINDING",
    d:"Irregular unwinding detected on the rear film reel.",
    f:"Check the rear reel mounting and film path. Verify the reel holder is properly locked. Inspect the film for damage or tangling. Reposition the band and restart." },

  "2020": { s:"REEL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"NOT CENTERED PRINTING",
    d:"The print on the film is not correctly centered. The photocell for print centering has detected an off-center print.",
    f:"Check the print centering photocell alignment. Adjust the reel position and film tension. Refer to section 7.2.3 of the handbook for photocell adjustment procedure." },

  "2023": { s:"REEL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"PRINT CENTERING NOT ENABLED",
    d:"The print centering function is not enabled.",
    f:"Enable the print centering function from the HMI settings." },

  "2200": { s:"REEL", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"FRONT REEL ALMOST FINISHED",
    d:"Warning: the front film reel is almost finished. This is a pre-warning to prepare a new reel.",
    f:"Prepare a new front film reel for changeover. No immediate stop — machine continues running." },

  "2201": { s:"REEL", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"REAR REEL ALMOST FINISHED",
    d:"Warning: the rear film reel is almost finished.",
    f:"Prepare a new rear film reel for changeover. No immediate stop — machine continues running." },

  "2600": { s:"REEL", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"FRONT REEL MOTOR DRIVE FAILURE",
    d:"A failure has been detected in the front reel motor drive.",
    f:"Check the front reel motor drive. Inspect electrical connections and the drive unit for error codes. If necessary, repair any breakdowns." },

  "2601": { s:"REEL", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"REAR REEL MOTOR DRIVE FAILURE",
    d:"A failure has been detected in the rear reel motor drive.",
    f:"Check the rear reel motor drive. Inspect electrical connections and the drive unit for error codes. If necessary, repair any breakdowns." },

  "2903": { s:"REEL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 1 – OPEN",
    d:"Safety guard No.1 (reel section) is open or not correctly closed.",
    f:"Close and properly latch the safety guard. Check the guard sensor/interlock for correct operation. Perform REINIT if required after closing." },

  "2904": { s:"REEL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 6 – OPEN",
    d:"Safety guard No.6 (reel section) is open or not correctly closed.",
    f:"Close and properly latch the safety guard. Check the guard sensor/interlock for correct operation." },

  "2905": { s:"REEL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"UPPER SAFETY DOOR 1 – OPEN",
    d:"Upper safety door No.1 (reel section) is open.",
    f:"Close the upper safety door securely. Check the door interlock sensor. Perform REINIT if required." },

  "2906": { s:"REEL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"UPPER SAFETY DOOR 2 – OPEN",
    d:"Upper safety door No.2 is open.",
    f:"Close the upper safety door securely. Check the door interlock sensor." },

  "3001": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"FILM ADVANCEMENT DISABLED",
    d:"Film advancement in the A section has been disabled. The machine cannot run while this function is off.",
    f:"Enable the film advancement function from the HMI operator panel." },

  "3002": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"FORMING BLOW IS SWITCHED OFF",
    d:"The forming blow (air blow used to form suppository cavities) is switched off. The machine cannot start if the blowing is OFF.",
    f:"Switch on the forming blow button from the HMI. Verify the compressed air supply to the forming station." },

  "3003": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"FORMING DIES ARE NOT CLOSED",
    d:"The forming dies are not in the closed position. The machine cannot start while dies are open.",
    f:"Switch on again the button enabling the forming die closing operation. Check the pneumatic cylinder for the forming dies. Verify the die closing mechanism and position sensors." },

  "3005": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"FILM NOT FORMED",
    d:"The film has not been properly formed in the forming station. The forming control has detected incorrect or absent blister formation.",
    f:"Check that the film band is inside the guides. Verify the forming blow pressure and temperature. Check the forming dies condition and alignment. Ensure film is correctly threaded through the forming station." },

  "3400": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"FRONT MOLD TEMP A1 – EXCEEDS SETPOINT BY 20°C",
    d:"The front mold temperature A1 has exceeded the setpoint by 20°C. The system has disabled the heating element power supply for safety.",
    f:"Check the thermoregulation system for A1. Verify the temperature controller, heating element, and Pt100 probe. Wait for temperature to normalise or investigate over-temperature cause." },

  "3401": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"REAR MOLD TEMP A2 – EXCEEDS SETPOINT BY 20°C",
    d:"The rear mold temperature A2 has exceeded the setpoint by 20°C. Heating disabled for safety.",
    f:"Check the thermoregulation system for A2. Verify the temperature controller, heating element, and Pt100 probe." },

  "3404": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"FRONT MOLD TEMP A1 – OUT OF TOLERANCE",
    d:"Front mold temperature A1 is 5°C higher or lower than the set temperature. Alarm is enabled when the temperature is outside tolerance.",
    f:"Wait for the operating temperature to be reached — the alarm resets automatically. If temperature is not reached within an acceptable time, check the thermoregulation system and probe for malfunctioning." },

  "3405": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"REAR MOLD TEMP VALVE SEALING A2 – OUT OF TOLERANCE",
    d:"Rear mold temperature A2 (valve sealing) is 5°C higher or lower than the set temperature.",
    f:"Wait for the operating temperature to be reached. If not reached in time, check the thermoregulation system and Pt100 probe." },

  "3408": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"FRONT MOLD TEMP A3 – EXCEEDS SETPOINT BY 20°C",
    d:"Front mold temperature A3 has exceeded the setpoint by 20°C. Heating disabled for safety.",
    f:"Check the thermoregulation system for A3. Verify the temperature controller, heating element, and Pt100 probe." },

  "3409": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"REAR MOLD TEMP A4 – EXCEEDS SETPOINT BY 20°C",
    d:"Rear mold temperature A4 has exceeded the setpoint by 20°C. Heating disabled for safety.",
    f:"Check the thermoregulation system for A4. Verify the temperature controller, heating element, and Pt100 probe." },

  "3410": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"SEPARATOR TEMP A5 – EXCEEDS SETPOINT BY 20°C",
    d:"The separator temperature A5 has exceeded the setpoint by 20°C. The system has disabled the heating element power supply for safety.",
    f:"Check the thermoregulation system for A5. Verify the temperature controller, heating element, and Pt100 probe." },

  "3411": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"FRONT MOLD TEMP A3 – OUT OF TOLERANCE",
    d:"Front mold temperature A3 is 5°C higher or lower than the set temperature.",
    f:"Wait for the operating temperature to be reached — the alarm resets automatically. Check thermoregulation system if temperature is not reached." },

  "3412": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"REAR MOLD TEMP VALVE SEALING A4 – OUT OF TOLERANCE",
    d:"Rear mold temperature A4 (valve sealing) is 5°C higher or lower than the set temperature.",
    f:"Wait for the operating temperature to be reached. Check thermoregulation system if temperature is not reached." },

  "3413": { s:"FORM", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"SEPARATOR TEMP A5 – OUT OF TOLERANCE",
    d:"Separator temperature A5 is 5°C higher or lower than the set temperature.",
    f:"Wait for the operating temperature to be reached. Check thermoregulation system if temperature is not reached." },

  "3600": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"MAIN MOTOR FAILURE",
    d:"The main motor of the A section has reported a failure. The error code is shown by the Schneider drive display.",
    f:"Read the Schneider drive error code displayed. Check the main motor drive, electrical connections and mechanical transmission. Check for mechanical obstruction. Reset the motor drive fault, then perform REINIT before restarting." },

  "3902": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"EMERGENCY BUTTON PRESSED",
    d:"An emergency stop button has been pressed. All machine motion stops immediately.",
    f:"Identify and resolve the emergency situation. Verify the line is safe and nobody is working on the machine. Physically reset (twist or pull) the emergency stop button. Then press RESET on the mobile push button panel and perform REINIT." },

  "3903": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 5 – PVC SIDE – OPEN",
    d:"Safety guard No.5 (PVC side, forming section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "3904": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 6 – PVC SIDE – OPEN",
    d:"Safety guard No.6 (PVC side, forming section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "3905": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 5 – ALU SIDE – OPEN",
    d:"Safety guard No.5 (ALU side, forming section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "3906": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 6 – ALU SIDE – OPEN",
    d:"Safety guard No.6 (ALU side, forming section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "3907": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 2 – OPEN",
    d:"Safety guard No.2 (forming section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor and interlock for correct operation." },

  "3908": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 5 – OPEN",
    d:"Safety guard No.5 (forming section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor and interlock for correct operation." },

  "3909": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"UPPER SAFETY DOOR 3 – OPEN",
    d:"Upper safety door No.3 (forming section) is open.",
    f:"Close the upper safety door securely. Check the door interlock sensor. Perform REINIT after closing." },

  "3910": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"UPPER SAFETY DOOR 4 – OPEN",
    d:"Upper safety door No.4 (forming section) is open.",
    f:"Close the upper safety door securely. Check the door interlock sensor. Perform REINIT after closing." },

  "3911": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"UPPER SAFETY DOOR 5 – OPEN",
    d:"Upper safety door No.5 (forming section) is open.",
    f:"Close the upper safety door securely. Check the door interlock sensor. Perform REINIT after closing." },

  "3912": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"UPPER SAFETY DOOR 6 – OPEN",
    d:"Upper safety door No.6 (forming section) is open.",
    f:"Close the upper safety door securely. Check the door interlock sensor. Perform REINIT after closing." },

  "3913": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"UPPER SAFETY DOOR 11 – OPEN",
    d:"Upper safety door No.11 (forming section) is open.",
    f:"Close the upper safety door securely. Check the door interlock sensor. Perform REINIT after closing." },

  "4000": { s:"DOSE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"PUMP DISCONNECTED",
    d:"The dosing pump is disconnected or the PLC cannot detect it even when it is inserted.",
    f:"Check the pump physical connection and communication cable. Reconnect the pump properly. Enable the pump from the HMI." },

  "4008": { s:"DOSE", c:"RED", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"IRREGULAR FILLING PUMP CYCLE",
    d:"Improper pump operation detected during the distribution piston descent. The control is carried out by a sensor which detects the position of the lever operating the pistons during a certain phase of the pump cycle (synchronized through the encoder phase).",
    f:"Step 1: Check the efficiency of the sensor detecting the position of the distribution pistons (sensor ON = led lit = pistons are down). Step 2: Check that the product does not cause an exaggerated friction on the pistons. Step 3: Inspect the pump mechanism, nozzles and piston travel for blockages or mechanical faults." },

  "4009": { s:"DOSE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"PUMP PROBE NOT INSERTED PROPERLY",
    d:"This alarm appears after approximately two minutes of machine operation with the pump inserted, when the temperature detection probe is not properly inserted in its place. This may occur if the operator forgets to insert the probe after washing the pump.",
    f:"Insert the pump temperature probe correctly and fully into its seat. Ensure it is properly locked in position. Press RESET and restart." },

  "4012": { s:"DOSE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"CONSECUTIVE CYCLES WITHOUT DOSING PUMP ENABLED",
    d:"After 30 consecutive machine cycles during which the machine produced without the dosing pump being active, the machine stops at end of cycle.",
    f:"Step 1: Enable the dosing pump from the HMI settings. Step 2: Check pump power supply and connections. Step 3: Check for any other active dosing section alarms that may be preventing the pump from enabling. Step 4: Verify the pump is physically connected and the probe is inserted. Press RESET and restart." },

  "4014": { s:"DOSE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"NOT CLOSED UNDER PUMP DIE",
    d:"The mold positioned under the dosing pump is not in the closed position. The alarm indicates the need to close the molds under the pump using the HMI key.",
    f:"Close the molds under the pump using the relevant key/button on the HMI. Check the correct functioning of the pneumatic cylinder for the under-pump die. Verify the position sensor." },

  "4400": { s:"DOSE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"PUMP TEMPERATURE – EXCEEDS SETPOINT BY 20°C",
    d:"The pump temperature has exceeded the setpoint by 20°C. The system has disabled the heating element power supply for safety.",
    f:"Check the thermoregulation system for the pump. Verify the temperature controller, heating element and Pt100 probe. Investigate the cause of the over-temperature." },

  "4401": { s:"DOSE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"X5 NOZZLES TEMPERATURE – EXCEEDS SETPOINT BY 20°C",
    d:"The X5 nozzle temperature has exceeded the setpoint by 20°C. Heating element disabled for safety.",
    f:"Check the thermoregulation system for X5 nozzles. Verify the temperature controller, heating element and probe." },

  "4402": { s:"DOSE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"X1 PRODUCT TEMPERATURE ON PUMP – EXCEEDS SETPOINT BY 20°C",
    d:"The X1 product temperature on the pump has exceeded the setpoint by 20°C. Heating element disabled for safety.",
    f:"Check the thermoregulation system for X1. Verify the temperature controller, heating element and Pt100 probe." },

  "4403": { s:"DOSE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"PUMP TEMPERATURE CONTROL PROBE – OUT OF TOLERANCE",
    d:"Pump temperature is 2.5°C higher or lower than the set temperature.",
    f:"Wait for the operating temperature to be reached — alarm resets automatically. If temperature is not reached, check thermoregulation system and probe for malfunctioning." },

  "4404": { s:"DOSE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"X5 TEMPERATURE – OUT OF TOLERANCE",
    d:"X5 nozzle temperature is out of tolerance (2.5°C from setpoint).",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system and probe." },

  "4405": { s:"DOSE", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"X1 PRODUCT TEMPERATURE ON PUMP – OUT OF TOLERANCE",
    d:"X1 product temperature on the pump is out of tolerance (2.5°C from setpoint).",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system and probe." },

  "4901": { s:"DOSE", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 3 – OPEN",
    d:"Safety guard No.3 (dosing section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor and interlock. Perform REINIT after closing." },

  "4902": { s:"DOSE", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 4 – OPEN",
    d:"Safety guard No.4 (dosing section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor and interlock. Perform REINIT after closing." },

  "5000": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"PRODUCT TANK WRONG CONNECTION",
    d:"The wheeled product tank is not correctly connected or identified by the system.",
    f:"Check the tank connection plug and communication cable. Verify the tank is properly docked and all connectors are secure." },

  "5004": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"MIXER DISABLED",
    d:"The product tank mixer is disabled.",
    f:"Enable the mixer from the HMI settings. Check the mixer motor and connections." },

  "5005": { s:"TANK", c:"YELLOW", st:"PREVENTED START", p:"OPERATOR", by:"NO",
    n:"PERISTALTIC PUMP DISABLED",
    d:"The peristaltic pump is disabled. The machine cannot start production without the peristaltic pump enabled.",
    f:"Enable the peristaltic pump from the HMI. Check pump direction setting (refer to section 5.2.2 for pump rotation direction). Verify the pump safety unit is active." },

  "5008": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"PRODUCT TANK – INSUFFICIENT HEATING LIQUID",
    d:"The product tank heating liquid level is insufficient.",
    f:"Check the heating liquid level in the tank. Refill if necessary. Check for leaks in the heating circuit." },

  "5009": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"PRODUCT TANK EMPTY",
    d:"The product (suppository mass) tank is empty. The tank level sensor has detected no product.",
    f:"Refill the product tank with suppository mass. Verify the tank level sensor is functioning correctly. Resume production after refilling." },

  "5200": { s:"TANK", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CARRIED TANK CONNECTED AND READY",
    d:"Status message: the wheeled (carried) product tank is connected and ready for use.",
    f:"No action required. This is a status information message." },

  "5400": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"PRODUCT TANK TEMP – EXCEEDS SETPOINT BY 20°C",
    d:"Product tank temperature has exceeded the setpoint by 20°C. Heating element disabled for safety.",
    f:"Check the thermoregulation system for the product tank. Verify the temperature controller, heating element and probe." },

  "5401": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"PRODUCT TANK TEMP (SENSOR 2) – EXCEEDS SETPOINT BY 20°C",
    d:"Product tank temperature sensor 2 has exceeded the setpoint by 20°C. Heating element disabled for safety.",
    f:"Check the thermoregulation system. Verify the temperature controller, heating element and Pt100 probe." },

  "5402": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"PRODUCT TANK TEMP (SENSOR 3) – EXCEEDS SETPOINT BY 20°C",
    d:"Product tank temperature sensor 3 has exceeded the setpoint by 20°C.",
    f:"Check the thermoregulation system. Verify the temperature controller, heating element and probe." },

  "5404": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"PRODUCT TANK TEMPERATURE – OUT OF TOLERANCE",
    d:"Product tank temperature is out of tolerance (2.5°C from setpoint).",
    f:"Wait for the operating temperature to be reached — alarm resets automatically. If not reached, check the thermoregulation system and probe." },

  "5405": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"X2 PRODUCT INTO TANK TEMPERATURE – OUT OF TOLERANCE",
    d:"X2 product temperature at tank inlet is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system and probe." },

  "5409": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"THERMOBLANKET TEMPERATURE – EXCEEDS SETPOINT BY 20°C",
    d:"The thermoblanket temperature has exceeded the setpoint by 20°C.",
    f:"Check the thermoblanket thermoregulation system. Verify the controller, heating element and probe." },

  "5413": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"THERMOBLANKET XB1 TEMPERATURE – OUT OF TOLERANCE",
    d:"Thermoblanket XB1 temperature is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system and probe." },

  "5600": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"MIXER MOTOR DRIVE FAILURE",
    d:"A failure has been detected in the mixer motor drive.",
    f:"Check the mixer motor drive for error codes. Inspect electrical connections. If necessary, repair or replace the drive." },

  "5601": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"MIXER MOTOR DRIVE – FAILURE",
    d:"A failure has been detected in the mixer motor drive (secondary detection).",
    f:"Check the mixer motor drive error codes. Inspect electrical connections and mechanical components." },

  "5901": { s:"TANK", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"PRODUCT TANK GUARD – OPEN",
    d:"The product tank safety guard is open.",
    f:"Close the product tank guard securely. Check the guard interlock sensor. Perform REINIT after closing." },

  "5902": { s:"TANK", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"PERISTALTIC PUMP SAFETY GUARD – OPEN",
    d:"The peristaltic pump safety guard is open.",
    f:"Close the peristaltic pump safety guard securely. Check the guard interlock sensor. Perform REINIT after closing." },

  "5903": { s:"TANK", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"MIXER NOT ALIGNED",
    d:"The mixer is not in the correct aligned position.",
    f:"Manually align the mixer to the correct position. Check the alignment sensor. Perform REINIT." },

  "5905": { s:"TANK", c:"RED", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"PERISTALTIC PUMP SAFETY UNIT – ERROR",
    d:"An error has been detected on the peristaltic pump safety module (PLC safety unit in the electrical box).",
    f:"Check the correct functioning of the PLC safety modules in the relevant electrical box. Check safety module LED status codes. Contact electrical technician." },

  "5910": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"NO COMMUNICATION WITH CARRIED TANK",
    d:"The communication network of the wheeled (carried) product tank is not working properly.",
    f:"Check the correct electrical installation of the trolley tank communication cables. Verify connectors and network settings." },

  "6000": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"FILM LOOP AT B SECTION ENTRANCE – TOO LARGE",
    d:"The film loop at the B section entrance has accumulated too much film. The band tensioner detects this via a sensor. This can indicate incorrect operation of the band transport at B section entrance or incorrect synchronisation between A, B and C section speeds.",
    f:"Step 1: Disconnect the A section key. Step 2: Start the machine and wait for the B section to get rid of the excess film. Step 3: At this point, connect the A section too and start the machine again. Note: This control can be disabled via the bypass key which overrides some product controls." },

  "6001": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"FILM LOOP AT B SECTION ENTRANCE – TOO NARROW",
    d:"The film/blister band loop at the B section entrance is too narrow. The band tensioner arm has activated a sensor to enable the alarm. The alarm appears directly on the reset window. This means B section is running too fast relative to A section, consuming the loop faster than it is fed.",
    f:"Step 1: Disconnect the C section key. Step 2: Start the machine and wait for the formation of a sufficient band/film loop. Step 3: Stop the machine. Step 4: Reconnect the C section. Step 5: Restart the machine. Also check: inverter/frequency converter operation for B and C sections; the 4 proximity switches on the band tensioner arm for dirt or misalignment; film threading path; mechanical obstruction on the tensioner arm." },

  "6002": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"FILM LOOP AT B SECTION EXIT – TOO LARGE",
    d:"The film loop at the B section exit (before C section) is too large — the band tensioner arm has detected too much accumulated film.",
    f:"The band recovery is carried out automatically by starting the machine again. Initially only the C section starts; then when the machine has recovered all the exceeding band, the remaining two parts automatically start their operation. Press RESET and restart." },

  "6003": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"FILM LOOP AT B SECTION EXIT – TOO NARROW",
    d:"The film loop at the B section exit is too narrow — the band tensioner arm at the C section entrance has detected insufficient film stock.",
    f:"Step 1: Disconnect the C section key. Step 2: Start the machine and wait for the B section to feed the film loop until the band tensioner moves to the opposite side (so the sensor detecting too much band activates). Step 3: At this stage, stop the machine and connect again the C section. Step 4: At restart the C section will start and the band tensioner will reach the centre of the loop, then the other parts will start too." },

  "6009": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"MECHANICAL TECHNICIAN", by:"NO",
    n:"COOLING WATER PRESSURE SWITCH – FAULT",
    d:"The pressure switch on the water delivery line used for cooling the compressor has detected insufficient water pressure.",
    f:"Restore the correct water pressure to the cooling system. Check the cooling water supply valve, pump and pressure switch. Inspect for leaks or blockages in the cooling water circuit." },

  "6014": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"MECHANICAL TECHNICIAN", by:"NO",
    n:"MOULDS FLOWMETER FAILURE",
    d:"The sensor of the flowmeter has detected an insufficient water flow in the die cooling circuit.",
    f:"Check the cause which enabled this alarm. Inspect the cooling water circuit for blockages (the main cause could be a circuit blockage). Check the flowmeter sensor. If necessary, repair any damages to the cooling circuit." },

  "6015": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"STOP LIMIT TIME EXCEEDED",
    d:"The set value of suppository production has been reached by the line.",
    f:"If it is necessary to continue with production, press RESET and restart the machine. If the production is finished, close the current order from the HMI." },

  "6022": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"EXTERNAL CHILLER FAILURE",
    d:"The external chiller unit is not working properly.",
    f:"Check the correct status of the external chiller unit: electrical power supply, chiller refrigeration components, water temperature, and other components. Restore chiller operation before restarting." },

  "6400": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"COOLING STAGE TEMPERATURE – OUT OF TOLERANCE",
    d:"Cooling stage temperature is 5°C higher or lower than the set temperature.",
    f:"Wait for the operating temperature to be reached — alarm resets automatically. If not reached, check the thermoregulation system for the cooling stage." },

  "6401": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"T1 COOLING STAGE TEMPERATURE – OUT OF TOLERANCE",
    d:"Cooling stage T1 temperature is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the T1 thermoregulation system and cooling circuit." },

  "6402": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"COOLING STAGE 2 TEMPERATURE – OUT OF TOLERANCE",
    d:"Cooling stage 2 temperature is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system." },

  "6403": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"T2 ELECTRO FAN OUTPUT TEMPERATURE – OUT OF TOLERANCE",
    d:"Electro fan output temperature T2 is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the T2 thermoregulation system and fan." },

  "6404": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"COOLING STAGE 3 TEMPERATURE – OUT OF TOLERANCE",
    d:"Cooling stage 3 temperature is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system." },

  "6405": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"T3 ELECTRO FAN OUTPUT TEMPERATURE – OUT OF TOLERANCE",
    d:"Electro fan output temperature T3 is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the T3 thermoregulation system." },

  "6406": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"COOLING STAGE 4 TEMPERATURE – OUT OF TOLERANCE",
    d:"Cooling stage 4 temperature is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system." },

  "6407": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"T4 ELECTRO FAN OUTPUT TEMPERATURE – OUT OF TOLERANCE",
    d:"Electro fan output temperature T4 is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the T4 thermoregulation system and fan." },

  "6408": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"TL COOLING TEMPERATURE – OUT OF TOLERANCE",
    d:"TL cooling temperature is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system and cooling circuit." },

  "6409": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"TLM COOLING TEMPERATURE – OUT OF TOLERANCE",
    d:"TLM cooling temperature is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system and cooling circuit." },

  "6600": { s:"COOL", c:"RED", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"ADVANCING MOTOR FAILURE – STAGE 1",
    d:"The advancing motor for cooling stage 1 has reported a failure (indicated by the Schneider drive error code).",
    f:"Read the Schneider drive error code. Check the motor drive, electrical connections and mechanical transmission for the cooling stage advancing motor. Repair or replace as needed. Perform REINIT after repair." },

  "6601": { s:"COOL", c:"RED", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"ADVANCING MOTOR FAILURE – STAGE 2",
    d:"The advancing motor for cooling stage 2 has reported a failure.",
    f:"Read the Schneider drive error code. Check the motor drive, electrical connections and mechanical transmission. Repair or replace as needed. Perform REINIT after repair." },

  "6613": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"B1 FAN OVERLOAD CUT OUT – EXCESSIVE ABSORPTION",
    d:"Excessive electrical absorption detected in cooling fan B1.",
    f:"Check the reason for excessive absorption. Probable causes: motor or transmission body breakdown, incorrect electric current distribution (e.g. a phase is missing). Inspect fan motor and electrical supply." },

  "6614": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"B2 FAN OVERLOAD CUT OUT – EXCESSIVE ABSORPTION",
    d:"Excessive electrical absorption detected in cooling fan B2.",
    f:"Check the reason for excessive absorption. Inspect fan motor and electrical supply. Verify all phases are present." },

  "6615": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"B3 FAN OVERLOAD CUT OUT – EXCESSIVE ABSORPTION",
    d:"Excessive electrical absorption detected in cooling fan B3.",
    f:"Check the reason for excessive absorption. Inspect fan motor and electrical supply." },

  "6616": { s:"COOL", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"B4 FAN OVERLOAD CUT OUT – EXCESSIVE ABSORPTION",
    d:"Excessive electrical absorption detected in cooling fan B4.",
    f:"Check the reason for excessive absorption. Inspect fan motor and electrical supply." },

  "6904": { s:"COOL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 26 – OPEN",
    d:"Safety guard No.26 (cooling section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "6905": { s:"COOL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 25 – OPEN",
    d:"Safety guard No.25 (cooling section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "6906": { s:"COOL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 21 – OPEN",
    d:"Safety guard No.21 (cooling section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "6907": { s:"COOL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 24 – OPEN",
    d:"Safety guard No.24 (cooling section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "6908": { s:"COOL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 22 – OPEN",
    d:"Safety guard No.22 (cooling section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "6909": { s:"COOL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 23 – OPEN",
    d:"Safety guard No.23 (cooling section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "6916": { s:"COOL", c:"RED", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"EMERGENCY BUTTON – COOLING STAGE 2",
    d:"An emergency stop button at the cooling stage 2 area has been pressed.",
    f:"Identify and resolve the emergency situation. Verify the machine is safe. Reset the emergency stop button (twist or pull). Press RESET on the mobile panel and perform REINIT." },

  "7000": { s:"SEAL", c:"RED", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"IRREGULAR C SECTION FILM FEEDING",
    d:"Irregular film/band feeding has been detected in the C section. The analog angular sensor at the C section infeed band tensioner has detected a position outside the working limits.",
    f:"Check the C section infeed band tensioner and its analog angular sensor. Inspect C section transport rollers and film threading path. Verify correct film engagement with the tensioner arm. Adjust if necessary per section 7.2.10." },

  "7001": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"SKILLED OPERATOR", by:"NO",
    n:"HEATING PROTECTION NOT IN POSITION",
    d:"SCENARIO A: This alarm prevents the machine starting when the heat protection in C section is enabled (protection elements positioned between the open dies) AND the C section is not at the end-of-cycle position. This can occur if the C section was operated manually via the crank. SCENARIO B: After machine stops at end-of-cycle, the PLC waits the software-set time for the protection to position itself, then confirms. If the protection is NOT correctly positioned among the dies, a sensor sends a signal and this alarm triggers.",
    f:"FOR SCENARIO A: It is necessary to bring manually the C section to the end-of-cycle position (use the crank). FOR SCENARIO B: The operator must manually intervene to reposition the heating protection correctly between the dies. In both cases: check the positioning sensor for dirt, misalignment or damage; then press RESET and restart the machine." },

  "7400": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"FRONT MOLD TEMP C1 – EXCEEDS SETPOINT BY 20°C",
    d:"The front mold sealing temperature C1 has exceeded the setpoint by 20°C. The system has disabled the heating element power supply for safety.",
    f:"Check the thermoregulation system for C1. Verify the temperature controller, heating element and Pt100 probe. Investigate cause of over-temperature before restarting." },

  "7401": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"REAR MOLD TEMP C2 – EXCEEDS SETPOINT BY 20°C",
    d:"Rear mold sealing temperature C2 has exceeded the setpoint by 20°C. Heating element disabled for safety.",
    f:"Check the thermoregulation system for C2. Verify temperature controller, heating element and probe." },

  "7402": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"SEALING PRE-HEAT TEMP C3 – EXCEEDS SETPOINT BY 20°C",
    d:"Sealing pre-heating temperature C3 has exceeded the setpoint by 20°C. Heating disabled for safety.",
    f:"Check the thermoregulation system for C3. Verify temperature controller, heating element and probe." },

  "7403": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"SEALING PRE-HEAT TEMP C4 – EXCEEDS SETPOINT BY 20°C",
    d:"Sealing pre-heating temperature C4 has exceeded the setpoint by 20°C. Heating disabled for safety.",
    f:"Check the thermoregulation system for C4. Verify temperature controller, heating element and probe." },

  "7404": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"CODING DIE TEMP C5 – EXCEEDS SETPOINT BY 20°C",
    d:"Coding die temperature C5 has exceeded the setpoint by 20°C. Heating disabled for safety.",
    f:"Check the thermoregulation system for C5. Verify temperature controller, heating element and probe." },

  "7405": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"FRONT MOLD TEMP C1 – OUT OF TOLERANCE",
    d:"Front sealing mold temperature C1 is 5°C higher or lower than the set temperature.",
    f:"Wait for the operating temperature to be reached — alarm resets automatically. If not reached, check the thermoregulation system and probe." },

  "7406": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"REAR MOLD TEMP C2 – OUT OF TOLERANCE",
    d:"Rear sealing mold temperature C2 is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system and probe." },

  "7407": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"SEALING PRE-HEAT TEMP C3 – OUT OF TOLERANCE",
    d:"Sealing pre-heating temperature C3 is out of tolerance (5°C from setpoint).",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system and probe." },

  "7408": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"SEALING PRE-HEAT TEMP C4 – OUT OF TOLERANCE",
    d:"Sealing pre-heating temperature C4 is out of tolerance.",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system and probe." },

  "7409": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"LEFTHAND CRIMPING SEALING DIE TEMP C3 – EXCEEDS SETPOINT BY 20°C",
    d:"Lefthand crimping sealing die temperature C3 has exceeded the setpoint by 20°C. Heating disabled for safety.",
    f:"Check the thermoregulation system for C3 crimping die. Verify temperature controller, heating element and probe." },

  "7410": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"RIGHTHAND CRIMPING SEALING DIE TEMP C4 – EXCEEDS SETPOINT BY 20°C",
    d:"Righthand crimping sealing die temperature C4 has exceeded the setpoint by 20°C. Heating disabled for safety.",
    f:"Check the thermoregulation system for C4 crimping die. Verify temperature controller, heating element and probe." },

  "7411": { s:"SEAL", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"CODING DIE TEMP C5 – OUT OF TOLERANCE",
    d:"Coding die temperature C5 is out of tolerance (5°C from setpoint).",
    f:"Wait for the operating temperature to be reached. If not reached, check the thermoregulation system and probe." },

  "7600": { s:"SEAL", c:"RED", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"C SECTION MAIN MOTOR FAILURE",
    d:"The main motor of the C section has reported a failure.",
    f:"Read the drive error code. Check the C section motor drive, electrical connections and mechanical transmission. Reset the motor fault. Perform REINIT before restarting." },

  "7601": { s:"SEAL", c:"RED", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"CUT 1 – ADVANCEMENT MOTOR FAILURE",
    d:"The Cut 1 advancement motor (C section) has reported a failure via the Schneider drive.",
    f:"Read the Schneider drive error code. Check the Cut 1 motor drive, electrical connections and mechanical transmission. Inspect for obstruction. Perform REINIT after repair." },

  "7602": { s:"SEAL", c:"RED", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"CUT 2 – ADVANCEMENT MOTOR FAILURE",
    d:"The Cut 2 advancement motor (C section) has reported a failure.",
    f:"Read the Schneider drive error code. Check the Cut 2 motor drive, electrical connections and mechanical transmission. Inspect for obstruction. Perform REINIT after repair." },

  "7900": { s:"SEAL", c:"RED", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"UPPER SAFETY DOOR 41 – OPEN",
    d:"Upper safety door No.41 (sealing section) is open.",
    f:"Close the upper safety door securely. Check the door interlock sensor. Perform REINIT if required." },

  "7903": { s:"SEAL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 43 – OPEN",
    d:"Safety guard No.43 (sealing section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "7904": { s:"SEAL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 42 – OPEN",
    d:"Safety guard No.42 (sealing section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "7905": { s:"SEAL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"UPPER SAFETY DOOR 45 – OPEN",
    d:"Upper safety door No.45 (sealing section) is open.",
    f:"Close the upper safety door securely. Check the safety pneumatic system — a safety pressure system is installed after the solenoid valve for air blowing into the A or C section pneumatic system. The alarm activates if air pressure is still detected after opening the guard." },

  "7906": { s:"SEAL", c:"RED", st:"IMMEDIATE STOP", p:"OPERATOR", by:"NO",
    n:"UPPER SAFETY DOOR 46 – OPEN",
    d:"Upper safety door No.46 (sealing section) is open.",
    f:"Close the upper safety door securely. Check the safety pneumatic system (same as 7905). Verify no residual air pressure after guard is opened." },

  "8000": { s:"CUT", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"NO",
    n:"IRREGULAR FEEDING TO CUTTING STATION",
    d:"Irregular band feeding detected at the cutting station. The check uses a sensor detecting the position of a cam integral with the wheel dragged by the film. The wheel makes half a turn at each machine cycle. After every 6 containers (= 1 machine cycle), the PLC checks the cam position relative to the sensor. If position is wrong, alarm triggers. Note: if the dragged wheel does not rotate at all (e.g. during film introduction with no film), the alarm will NOT go off — by design.",
    f:"Step 1: Identify the cause of irregular feeding. Step 2: Re-insert the band correctly between the transport wheel and its backing piece. Step 3: Position the cam with its hollow part aligned inline with the sensor. Step 4: Restart the machine. Also check: sensor cleanliness and alignment; band tension coming from C section; transport wheel for wear or debris." },

  "8003": { s:"CUT", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"YES",
    n:"SCISSOR NOT OPEN",
    d:"The reed sensor for the cylinder positioning detected a wrong positioning during the machine cycle — the cutting scissor cylinder is not detected in the open position.",
    f:"Check the correct electrical installation. Check the correct pneumatic installation. Verify the correct mechanical movement of the scissor cylinder. Inspect the reed sensor and its mounting." },

  "8004": { s:"CUT", c:"YELLOW", st:"END OF CYCLE", p:"ELECTRICAL TECHNICIAN", by:"YES",
    n:"SCISSOR NOT CLOSED",
    d:"The reed sensor for the cylinder positioning detected a wrong positioning — the cutting scissor cylinder is not detected in the closed position during the machine cycle.",
    f:"Check the correct electrical installation. Check the correct pneumatic installation. Verify the correct mechanical movement of the scissor cylinder. Inspect the reed sensor and its mounting." },

  "8600": { s:"CUT", c:"RED", st:"IMMEDIATE STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"ROLL MOTOR FAILURE – CUTTING ADVANCEMENT",
    d:"The cutting advancement roll motor has reported a failure (indicated by the Schneider drive error code).",
    f:"Read the Schneider drive error code. Check the motor drive, electrical connections and mechanical transmission. Inspect for obstruction. Perform REINIT after repair." },

  "8900": { s:"CUT", c:"RED", st:"IMMEDIATE STOP", p:"SKILLED OPERATOR", by:"NO",
    n:"LOWER SAFETY GUARD 45 – OPEN",
    d:"Safety guard No.45 (cutting section) is open or not correctly closed.",
    f:"Close and latch the safety guard securely. Check the guard sensor/interlock. Perform REINIT after closing." },

  "8901": { s:"CUT", c:"RED", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"EMERGENCY BUTTON – CUTTING SECTION",
    d:"An emergency stop button at the cutting section has been pressed.",
    f:"Identify and resolve the emergency situation. Verify the machine is safe and nobody is working on it. Reset the emergency button (twist or pull to release). Press RESET and perform REINIT before restarting." },

  "9200": { s:"CT1", c:"YELLOW", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 SAFETY GUARD OPEN",
    d:"The CT1 safety guard door is open.",
    f:"Close the safety guard securely. Check the guard sensor and interlock." },

  "9202": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 SAFETY GUARD SAFETY UNIT ERROR",
    d:"An error has been detected on the CT1 safety guard PLC safety module. On the CT1 itself this triggers an IMMEDIATE STOP with RED lamp; on the SAAS machine it shows as a WARNING with NO STOP.",
    f:"Check the correct functioning of the PLC safety modules in the relevant electrical box. Check the safety module LED status codes. Contact Electrical Technician." },

  "9204": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 EMERGENCY BUTTON PRESSED",
    d:"The emergency stop button on the CT1 unit has been pressed. On CT1 itself: IMMEDIATE STOP with RED lamp. On SAAS machine: WARNING with NO STOP (machine keeps running).",
    f:"Verify the line is safe and nobody is working on the CT1. Reset the emergency button (twist or pull to release). Then press RESET on the mobile push button panel." },

  "9209": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 AIR PRESSURE SWITCH – LOW PRESSURE",
    d:"The current value of the CT1 air pressure is lower than the relevant parameter set on the HMI.",
    f:"Check the correct installation and supply of the CT1 pneumatic system. Verify the air pressure supply to the CT1 unit and check for leaks." },

  "9212": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 WASTE ERROR",
    d:"A waste/reject error has been detected on the CT1 — there is a mismatch between the signals of the quality control capacitive sensor.",
    f:"Check the correct functioning of the capacitive sensor. Verify the relative functioning of the sensor and check it is operating correctly." },

  "9214": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 FILM FEEDING NOT CORRECT",
    d:"The CT1 film/band advancement is not performing correctly.",
    f:"Check the correct functioning of the CT1 advancement system and the correct functioning of the conveyor belt." },

  "9215": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 BUFFER CONTAINER EMPTY",
    d:"The CT1 buffer tank is empty — it does not contain a sufficient quantity of suppositories.",
    f:"Wait for the SAAS machine to produce a sufficient amount of suppositories, then the CT1 will restart automatically." },

  "9216": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 STRIP RELEASE NOT CORRECT",
    d:"The strip is not being released correctly during the CT1 strip stacking phase.",
    f:"Check the correct functioning of the CT1 strip release system. Verify the strip stacking mechanism." },

  "9217": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 FILM STOCK EXHAUSTED",
    d:"The number of suppositories inside the CT1 buffer tank is lower than the relevant value set on the HMI.",
    f:"Wait for the SAAS machine to produce a sufficient amount of suppositories. The CT1 will restart automatically once enough stock is available." },

  "9218": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 STOP BUTTON PRESSED",
    d:"The stop button of the CT1 unit has been pressed.",
    f:"Press the RESET button on the CT1 unit to resume operation." },

  "9221": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 END PRODUCTION – FULL TANK",
    d:"The production order count has reached the target value set in the order opening phase. The CT1 buffer tank is full.",
    f:"End the current production order from the HMI. Close the current order." },

  "9226": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 OVERTIME REEDS",
    d:"The CT1 control has detected an incorrect movement of a pneumatic cylinder during the machine cycle.",
    f:"Check the incorrect cylinder on the CT1 panel and restore its operation. Verify the correct functioning of the cylinder." },

  "9910": { s:"CT1", c:"YELLOW", st:"NO STOP", p:"ELECTRICAL TECHNICIAN", by:"NO",
    n:"COMMUNICATION CT1 MISSING",
    d:"The CT1 communication network is not working properly. The SAAS machine has lost communication with the CT1 unit.",
    f:"Step 1: Check the CT1 communication network cables for loose connections or damage. Step 2: Check the correct electrical installation of the CT1 communication network. Step 3: Press the RESTART CONTROLLER button on the System page on the HMI. Step 4: If problem persists, check the CT1 network switch and power supply." },


  "1202": { s:"LINE", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"MACHINE READY",
    d:"The machine is ready to run. All conditions are met for starting production.",
    f:"You can press the START button to begin production." },

  "1203": { s:"LINE", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"MACHINE RUNNING",
    d:"The machine is currently running and producing.",
    f:"Press STOP to stop the machine when required." },

  "1204": { s:"LINE", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"REINIT ACTIVE",
    d:"The motors are carrying out the automatic REINIT (re-initialization) procedure to bring all sections to the end-of-cycle position.",
    f:"Wait for the REINIT procedure to complete automatically. At the end of the procedure it will be possible to start the machine." },

  "1206": { s:"LINE", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"TANK FILLING ACTIVE",
    d:"The automatic tank filling system is active. While this warning is displayed, dosing accuracy is not guaranteed.",
    f:"Wait for the filling to finish or interrupt it by disabling the tank level control from the HMI. Ensure at least 20 liters is in the tank before resuming production." },

  "1207": { s:"LINE", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"HOSES EMPTYING ACTIVE",
    d:"The hoses emptying procedure is active. While this warning is displayed dosing accuracy is not guaranteed.",
    f:"Wait for the hoses emptying procedure to complete. Ensure at least 20 liters of product is available in the tank before resuming." },

  "3000": { s:"FORM", c:"RED", st:"IMMEDIATE STOP", p:"SKILLED OPERATOR", by:"NO",
    n:"IRREGULAR STRESS ON CRIMPING DEVICES",
    d:"This alarm is activated when the torque limiter is activated to protect the transmission of the crimping (arricchimento) device. The torque limiter has detected abnormal mechanical stress.",
    f:"Step 1: Check if there is any mechanical obstruction in the crimping device. Remove any obstruction found. Step 2: Reset the torque limiter to the operating position. Step 3: Restart the machine." },

  "5406": { s:"TANK", c:"YELLOW", st:"END OF CYCLE", p:"OPERATOR", by:"YES",
    n:"THERMOBLANKET TEMPERATURE – OUT OF TOLERANCE",
    d:"The thermoblanket temperature is 2.5°C higher or lower than the set temperature.",
    f:"Wait for the operating temperature to be reached — alarm resets automatically. If not reached within an acceptable time, look for the eventual causes in the thermoregulation system and check the probe for malfunctioning." },

  "9214": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 FILM FEEDING NOT CORRECT",
    d:"The CT1 film/band advancement is not performing correctly.",
    f:"Check the correct functioning of the CT1 advancement system and the correct functioning of the conveyor belt." },

  "9215": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 BUFFER CONTAINER EMPTY",
    d:"The CT1 buffer tank does not contain a sufficient quantity of suppositories.",
    f:"Wait for the SAAS machine to produce a sufficient amount of suppositories. The CT1 will restart automatically once enough stock is available." },

  "9216": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 STRIP RELEASE NOT CORRECT",
    d:"The strip is not being released correctly during the CT1 strip stacking and release phase.",
    f:"Check the correct functioning of the CT1 strip release mechanism. Verify the strip stacking system operation." },

  "9221": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 END PRODUCTION – FULL TANK",
    d:"The production order count has reached the target value set in the order opening phase. The CT1 buffer tank is full.",
    f:"End the current production order from the HMI. Close the current order." },

  "9226": { s:"CT1", c:"GREEN", st:"NO STOP", p:"OPERATOR", by:"NO",
    n:"CT1 OVERTIME REEDS",
    d:"The CT1 control has detected an incorrect movement of a pneumatic cylinder during the machine cycle.",
    f:"Check the incorrect cylinder on the CT1 panel and restore its operation. Verify the correct functioning of the cylinder." },

};

const SIZES = {
  "1": { code:"Q", partNo:"Q100124841", material:"PVC (VP)", bg:"bg-blue-700" },
  "2": { code:"R", partNo:"R100124851", material:"PVC (VP)", bg:"bg-indigo-700" },
  "3": { code:"S", partNo:"S100124861", material:"PVC (VP)", bg:"bg-violet-700" },
  "4": { code:"F", partNo:"F100213631", material:"ALU (VA)", bg:"bg-amber-700" },
  "5": { code:"H", partNo:"H100213680", material:"ALU (VA)", bg:"bg-orange-700" },
};

const TABLES = [
  {
    tableRef: "fig.82",
    drawRef:  "fig.83",
    title:    "A Section — PVC/VP",
    subtitle: "SAAS 9 AP/VP \"A\" SECTION LIST FOR SIZE CHANGE PART",
    section:  "A",
    sizes:    [1,2,3],
    note:     "Handle code 015040570 (M6 thread) for PVC mould dies. Handle code 551510155 (M8 thread) for ALU valve sealing & knurling dies.",
    parts: [
      // Exactly as on PDF page 234 — description, fig, pos, partNo, qty, s1, s2, s3, s4, s5
      { pos:"1",    desc:"Rear Sealing Die",                            partNo:"0200", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"2",    desc:"Front Sealing Die",                           partNo:"0250", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"3",    desc:"Rear Pre-Heating Die",                        partNo:"0270", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"4",    desc:"Front Pre-Heating Die",                       partNo:"0280", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"5",    desc:"Rear Forming Die",                            partNo:"0330", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"6",    desc:"Front Forming Die",                           partNo:"0350", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"7",    desc:"Blade-Guide",                                 partNo:"0170", qty:"4",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"8",    desc:"Lateral Film Guides After Forming",           partNo:"8700", qty:"2",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"9",    desc:"Central Film Guide After Forming",            partNo:"9000", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"10",   desc:"Backing Piece for Container Forming Control", partNo:"0190", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"13",   desc:"Front Centring Die Under the Pump",           partNo:"2200", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"14",   desc:"Rear Centring Die Under the Pump",            partNo:"2100", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"15",   desc:"Front Film Guide at the Pump Exit",           partNo:"3700", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"16",   desc:"Rear Film Guide at the Pump Exit",            partNo:"3600", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"17",   desc:"Pump Body",                                   partNo:"2770", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"18",   desc:"Bracket Controlling the Pump Pistons",        partNo:"3000", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"19",   desc:"Plate for Transfer Pistons Connection",       partNo:"3150", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"20",   desc:"Filling Nozzle — NOT DECOMPOSABLE",           partNo:"3550", qty:"9",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"20",   desc:"Filling Nozzle — DECOMPOSABLE",               partNo:"3560", qty:"9",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"20.1", desc:"Nozzle Delivery-Tube — NOT DECOMPOSABLE",     partNo:"3400", qty:"9",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"20.1", desc:"Nozzle Delivery-Tube — DECOMPOSABLE",         partNo:"3410", qty:"9",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"24",   desc:"Backing Guide for Film Entrainment Roll",     partNo:"0500", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"25",   desc:"Roll for Film Entrainment",                   partNo:"0100", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"26",   desc:"Star-Wheel for Film Guide, with Hub",         partNo:"4000", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"27",   desc:"Film Guide",                                  partNo:"3500", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"28",   desc:"Spacer for Blowing Nozzles Regulation",       partNo:"0160", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"29",   desc:"Spacer Columns for Retractor Heated",         partNo:"0140", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
    ]
  },

  {
    tableRef: "fig.84",
    drawRef:  "fig.85",
    title:    "A Section — ALU/VA",
    subtitle: "SAAS 9 AP/VA \"A\" SECTION LIST FOR SIZE CHANGE PART",
    section:  "A",
    sizes:    [4,5],
    note:     "Handle code 551510155 (M8 thread) for ALU valve sealing and knurling dies. Note: Filling Nozzle and Nozzle Delivery-Tube reference Fig.83 part numbers (same parts).",
    parts: [
      // Exactly as on PDF page 236
      { pos:"1",    desc:"Drawing Die",                                 partNo:"---",  qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"H" },
      { pos:"2",    desc:"Rolls for Film Adjustment",                   partNo:"0150", qty:"2",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"3",    desc:"Bracket for False Nozzles Clamping",          partNo:"2300", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"4",    desc:"Front Contour Sealing Die",                   partNo:"2700", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"H" },
      { pos:"5",    desc:"Rear Contour Sealing Die",                    partNo:"2600", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"H" },
      { pos:"8",    desc:"Lateral Film Guides After Forming",           partNo:"8700", qty:"2",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"9",    desc:"Central Film Guide After Forming",            partNo:"9000", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"13",   desc:"Front Centring Die Under the Pump",           partNo:"2250", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"14",   desc:"Rear Centring Die Under the Pump",            partNo:"2150", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"15",   desc:"Front Film Guide at the Pump Exit",           partNo:"3700", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"16",   desc:"Rear Film Guide at the Pump Exit",            partNo:"3600", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"17",   desc:"Pump Body",                                   partNo:"2770", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"18",   desc:"Bracket Controlling the Pump Pistons",        partNo:"3000", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"19",   desc:"Plate for Transfer Pistons Connection",       partNo:"3150", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"20",   desc:"Filling Nozzle — NOT DECOMPOSABLE (ref.83)",  partNo:"3550", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"20",   desc:"Filling Nozzle — DECOMPOSABLE (ref.83)",      partNo:"3560", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"20.1", desc:"Nozzle Delivery-Tube — NOT DECOMPOSABLE (ref.83)", partNo:"3400", qty:"1", s1:"", s2:"", s3:"", s4:"F", s5:"F" },
      { pos:"20.1", desc:"Nozzle Delivery-Tube — DECOMPOSABLE (ref.83)",partNo:"3410", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"24",   desc:"Backing Guide for Film Entrainment Roll",     partNo:"0500", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"25",   desc:"Roll for Film Entrainment",                   partNo:"0100", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"H" },
      { pos:"26",   desc:"Star-Wheel for Film Guide, with Hub",         partNo:"4000", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"27",   desc:"Film Guide",                                  partNo:"3500", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
    ]
  },

  {
    tableRef: "fig.88",
    drawRef:  "fig.89",
    title:    "B Section — Cooling (All Sizes)",
    subtitle: "SAAS 9/AP FOUR STAGES \"B\" SECTION LIST FOR SIZE CHANGE PART",
    section:  "B",
    sizes:    [1,2,3,4,5],
    note:     "⚠️ B Section format change is needed ONLY if the packaging film HEIGHT has changed. Pin for Spacer: Sizes 1-3 use part 024061915; Sizes 4-5 use part 024061917. Spacer Pin on Cover: Sizes 1-3 use 024061916; Sizes 4-5 use 024061918.",
    parts: [
      // Exactly as on PDF page 238
      { pos:"28",   desc:"Upper Spirals Spacers",                       partNo:"4600",      qty:"17", s1:"Q",  s2:"Q",  s3:"Q",  s4:"F",  s5:"F" },
      { pos:"30",   desc:"Pin for Spacer Fixing the Spirals (S1-3: 024061915 / S4-5: 024061917)", partNo:"4300", qty:"16", s1:"Q+", s2:"Q+", s3:"Q+", s4:"Q+", s5:"Q+" },
      { pos:"31",   desc:"Spacer Pin on Cover (S1-3: 024061916 / S4-5: 024061918)",              partNo:"4700", qty:"4",  s1:"Q+", s2:"Q+", s3:"Q+", s4:"Q+", s5:"Q+" },
      { pos:"32",   desc:"Film Guide in the Cooling Section",           partNo:"4750",      qty:"1",  s1:"Q",  s2:"Q",  s3:"Q",  s4:"F",  s5:"F" },
    ]
  },

  {
    tableRef: "fig.90",
    drawRef:  "fig.91",
    title:    "C Section — PVC/VP",
    subtitle: "SAAS 9 AP/VP \"C\" SECTION LIST FOR SIZE CHANGE PART",
    section:  "C",
    sizes:    [1,2,3],
    note:     "Pos 55 (Rear Film Guide) and Pos 56 (Front Film Guide) show '---' for all PVC sizes — these parts are not changed during PVC format changeover.",
    parts: [
      // Exactly as on PDF page 240
      { pos:"33",   desc:"Star-Wheel for Film Guide, with Hub",         partNo:"4000", qty:"2",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"34",   desc:"Left Pre-Heating Die",                        partNo:"5060", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"35",   desc:"Right Pre-Heating Die",                       partNo:"5050", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"38",   desc:"Film Guide",                                  partNo:"5450", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"39",   desc:"Spacers for Pre-Heating",                     partNo:"5150", qty:"2",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"40",   desc:"Roll for Film Entrainment",                   partNo:"5410", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"41",   desc:"Front Top Sealing Die",                       partNo:"5380", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"42",   desc:"Rear Top Sealing Die",                        partNo:"5370", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"43",   desc:"Spacers for Pre-Heating",                     partNo:"5170", qty:"2",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"43.1", desc:"Top Sealing Front Pre-Heating Die",           partNo:"7300", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"43.2", desc:"Top Sealing Rear Pre-Heating Die",            partNo:"7500", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"44",   desc:"Front Knurling Die",                          partNo:"6300", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"45",   desc:"Rear Knurling Die",                           partNo:"6200", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"46",   desc:"Perforation and Shearing Die",                partNo:"---",  qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"47",   desc:"Film Entrainment Roll",                       partNo:"9100", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"48",   desc:"Guide for Film Entrainment Roll",             partNo:"9030", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"49",   desc:"Backing Guide for Film Entrainment Roll",     partNo:"9300", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"50",   desc:"Film Guide in Front of Trimming",             partNo:"9800", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"51",   desc:"Film Guide for Trimming Backing-Blades",      partNo:"9950", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"52",   desc:"Film Guide for Trimming Blades",              partNo:"9900", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"53",   desc:"Backing for Film Entrainment Roll",           partNo:"8300", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"",  s5:"" },
      { pos:"54",   desc:"Film Entrainment Roll",                       partNo:"8200", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"",  s5:"" },
      { pos:"55",   desc:"Rear Film Guide",                             partNo:"8500", qty:"1",  s1:"---",s2:"---",s3:"---",s4:"",s5:"" },
      { pos:"56",   desc:"Front Film Guide",                            partNo:"8400", qty:"1",  s1:"---",s2:"---",s3:"---",s4:"",s5:"" },
    ]
  },

  {
    tableRef: "fig.92",
    drawRef:  "fig.93",
    title:    "C Section — ALU/VA",
    subtitle: "SAAS 9 AP/VA \"C\" SECTION LIST FOR SIZE CHANGE PART",
    section:  "C",
    sizes:    [4,5],
    note:     "Pos 55 (Rear Film Guide) and Pos 56 (Front Film Guide) show '---' for all ALU sizes — not changed during ALU format changeover.",
    parts: [
      // Exactly as on PDF page 242
      { pos:"33",   desc:"Star-Wheel for Film Guide, with Hub",                partNo:"4000", qty:"2",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"34",   desc:"Left and Right Die for Crimping Sealing",            partNo:"4780", qty:"2",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"36",   desc:"Left Film Guide",                                    partNo:"8970", qty:"2",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"37",   desc:"Right Film Guide",                                   partNo:"8950", qty:"2",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"38",   desc:"Film Guide",                                         partNo:"5450", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"40",   desc:"Roll for Film Entrainment",                          partNo:"5410", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"H" },
      { pos:"41",   desc:"Front Top Sealing Die",                              partNo:"5300", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"42",   desc:"Rear Top Sealing Die",                               partNo:"5200", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"44",   desc:"Front Knurling Die",                                 partNo:"6310", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"H" },
      { pos:"45",   desc:"Rear Knurling Die",                                  partNo:"6210", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"H" },
      { pos:"46",   desc:"Perforation and Shearing Die",                       partNo:"---",  qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"47",   desc:"Film Entrainment Roll",                              partNo:"9100", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"H" },
      { pos:"48",   desc:"Guide for Film Entrainment Roll",                    partNo:"9030", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"49",   desc:"Backing Guide for Film Entrainment Roll",            partNo:"9300", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"50",   desc:"Film Guide in Front of Trimming",                    partNo:"9800", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"51",   desc:"Film Guide for Trimming Backing-Blades",             partNo:"9950", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"52",   desc:"Film Guide for Trimming Blades",                     partNo:"9900", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"53",   desc:"Guide for Film Entrainment Roll Backing Piece",      partNo:"8300", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"F" },
      { pos:"54",   desc:"Film Entrainment Roll",                              partNo:"8200", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"F", s5:"H" },
      { pos:"55",   desc:"Rear Film Guide",                                    partNo:"8500", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"---",s5:"---" },
      { pos:"56",   desc:"Front Film Guide",                                   partNo:"8400", qty:"1",  s1:"",  s2:"",  s3:"",  s4:"---",s5:"---" },
    ]
  },

  {
    tableRef: "fig.94",
    drawRef:  "fig.95",
    title:    "CT/1 Connection (All Sizes)",
    subtitle: "CT/1 CONNECTION LIST FOR SIZE CHANGE PART",
    section:  "CT1",
    sizes:    [1,2,3,4,5],
    note:     "Pos 4 and 5 are Italian-named in original handbook: Pos 4 = 'Riscontro Inferiore per Capacitivo' (Lower Check for Capacitive Sensor); Pos 5 = 'Dima di Regolazione Guide' (Guide Adjustment Template).",
    parts: [
      // Exactly as on PDF page 244
      { pos:"1",    desc:"Film Entrainment Roll",                        partNo:"0100", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"F", s5:"H" },
      { pos:"2",    desc:"Guide for Piling",                             partNo:"0500", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"Q", s5:"Q" },
      { pos:"3",    desc:"Guides Spacer",                                partNo:"0300", qty:"1",  s1:"Q", s2:"Q", s3:"Q", s4:"F", s5:"H" },
      { pos:"4",    desc:"Lower Check for Capacitive Sensor",            partNo:"0900", qty:"1",  s1:"Q", s2:"R", s3:"S", s4:"F", s5:"H" },
      { pos:"5",    desc:"Guide Adjustment Template",                    partNo:"1100", qty:"2",  s1:"Q", s2:"R", s3:"S", s4:"F", s5:"H" },
    ]
  },
];

const PREP_STEPS = [
  "Deactivate ALL resistances — wait until temperature falls to at least 30°C",
  "Open the film mover grippers",
  "Open the sealing, preheating and moulding dies",
  "Disable the moulding blower",
  "Open the under-pump centring dies",
  "Activate the 'Introduce A section film' command",
  "Disconnect pneumatic power supply for complete safety (see attached pneumatic chart)",
  "IF pump parts are being changed: close product tank feed tap → start machine → wait until dosage pump clears all pharmaceutical product from feed tube and pump",
];

const STEPS = [
  {
    ref: "8.1.1", title: "A Section — Film Supply and Movement",
    icon: "🎞️",
    items: [
      "If changing to different height reels: adjust front reel height by working on the screw in the centre of the product holder reel",
      "Adjust the inner part height of the movement grippers using the template provided as reference",
      "Replace the film coupling rollers in front of the aluminium valve sealing station",
      "Replace the band tensioner assembly components in front of the dosage pump",
      "Replace the guide and movement components of the A and B parts synchronisation assemblies",
    ]
  },
  {
    ref: "8.1.2a", title: "A Section — ALU Drawing Station",
    icon: "🏭",
    items: [
      "Dismantle the toothed wheel protective guard (1)",
      "Dismantle the two die opening and closing command protective guards (2)",
      "Loosen the six locking screws (3)",
      "Screw the eyelet (4) onto the die and remove it from the centring pin using the proper two-speed hoist — raise the die carefully to prevent extracting the pin so it bends and damages the centring tops",
      "Take the other die and before introducing it into its proper pins, ensure the toothed wheel (2) for die crimping command engages the toothed wheel on the machine at the position defined by the reference level marks on the wheels",
      "Introduce the die into the pins and tighten the six die locking screws",
    ]
  },
  {
    ref: "8.1.2b", title: "A Section — Top Sealing Valve Station",
    icon: "🔩",
    items: [
      "Loosen the grub nuts (1) — two per die — then remove the dies from the centring pins using the proper handle provided (code 551510155)",
      "Still using the provided handle, insert the new dies in the correct position using the centring pins and tighten the grub screws",
      "Release the pressure from the pneumatic system with the main valve (see pneumatic system) and insert the spacer (2)",
      "Replace the separator (3)",
    ]
  },
  {
    ref: "8.1.3", title: "A Section — PVC Plastic Forming Station",
    icon: "🔧",
    items: [
      "Loosen and remove the locking wheel (5)",
      "Raise the separator assembly (1)",
      "Replace the 'V spacer' assembly spacer (6) and the blower nozzle assembly spacer (7)",
      "Loosen the grub nuts (2) — two per die — then remove the dies from the centring pins using the proper handle provided (code 015040570)",
      "Still using the provided handle, insert the new dies in the correct position using the centring pins and tighten the grub screws (2) again",
      "Adjust the separator (3) height by loosening the screws and shifting it along the eyelets up to the die stops",
      "Replace the lower guides under the dies, the guides immediately following the station, and adjust the height of the upper opposing ones (4)",
    ]
  },
  {
    ref: "8.1.4", title: "A Section — Good Forming Control Station",
    icon: "✅",
    items: [
      "Replace the parts (probe and contrast) of the good moulding monitoring assembly",
    ]
  },
  {
    ref: "8.1.5", title: "A Section — Dosing Station",
    icon: "💉",
    items: [
      "Disconnect the product feed tube connection",
      "Disconnect the product recirculation tube connection",
      "Loosen the side handwheels (1)",
      "Loosen the handwheel at the back of the pump",
      "Remove the pump and, on the workbench, proceed to replace the parts indicated in the 'Changing format table'",
      "Replace the pump",
      "Tighten all the handwheels that had been removed previously",
      "Loosen the under pump centring grub nuts (3) then remove the dies from their relative centring pins using the handle (code 015040750); install the new dies proceeding in the opposite direction",
      "Replace the band guide behind the pump (4)",
      "Adjust the height of the punching unit using the relevant spacer",
    ]
  },
  {
    ref: "8.2", title: "B Section — Cooling Spirals",
    icon: "❄️",
    items: [
      "⚠️ Format change in the cooling area is needed ONLY if the packaging film height has been changed",
      "Loosen the handwheels at the corners of the upper spirals",
      "Remove the spiral using the appropriate handles",
      "Proceed with replacing the spacers and guides indicated in the changing format table",
      "Reposition the spiral and tighten the handwheels",
    ]
  },
  {
    ref: "8.3.1", title: "C Section — Film Movement",
    icon: "🎬",
    items: [
      "Replace the 2 wheels (1) and the guide (2)",
      "Replace the first band feed roller (3)",
      "Replace the second band feed roller (4) and the relative opposing ones",
      "Replace the end band feed roller to the cutter (5) and its contrast",
      "Replace the guide before the strip cutter shears (6)",
      "Replace the upper opposing spacer between the top sealing and the coding die (7)",
    ]
  },
  {
    ref: "8.3.2", title: "C Section — Sealing / Crimping Station",
    icon: "🔥",
    items: [
      "Dismantle the heat protective guards with their 4 screws (1)",
      "Dismantle the temperature probes (2) and resistances",
      "Replace the dies (3)",
      "Replace the guides (4)",
    ]
  },
  {
    ref: "8.3.3", title: "C Section — Top Sealing Pre-Heating Station",
    icon: "🌡️",
    items: [
      "Dismantle the heat protective guards with their 4 screws (1)",
      "Dismantle the temperature probes (2) and resistances",
      "Replace the spacers and the dies (3)",
    ]
  },
  {
    ref: "8.3.4", title: "C Section — Top Sealing Station",
    icon: "♨️",
    items: [
      "Replace the top sealing dies (1)",
    ]
  },
  {
    ref: "8.3.5", title: "C Section — Station for Heating Again After Stopping",
    icon: "🔆",
    items: [
      "Replace the reheating dies (1)",
    ]
  },
  {
    ref: "8.3.6", title: "C Section — Knurling and Coding Station",
    icon: "🖨️",
    items: [
      "Replace the knurling and coding dies (1)",
    ]
  },
  {
    ref: "8.3.7", title: "C Section — Cutting Station",
    icon: "✂️",
    items: [
      "⚠️ During transport of the cutting device pay attention to its heavy weight — move it with necessary equipment (hoist)",
      "Remove its aluminium protective cover",
      "Loosen the front locking screws and the four rear locking screws (1) and the two tie-rod joint screws — upper and lower (2)",
      "Remove the whole assembly without forcing the centring pins and lay it down on the workbench",
      "Install the new group on the machine — make sure you correctly fit the centring pins into it — and tighten the screws (1) and (2) again",
    ]
  },
  {
    ref: "8.3.8", title: "C Section — Trimming Station",
    icon: "⚡",
    items: [
      "⚠️ Be careful handling the cutting parts",
      "Before removing the safety guard of the cutting scissors unit: install the scissors locking screw (M8×45) into the specific hole indicated in the figure",
      "Dismantle the knife and circular counter-knife, take out the spacers, install the new spacers, then refit the knife and circular counter-knife",
      "Change the advancement wheel",
      "Change the band guides",
    ]
  },
  {
    ref: "8.3.9", title: "C Section — Photocell for Rejection Hole Detection",
    icon: "🔦",
    items: [
      "Adjust the height of the photocell for the detection of the hole for rejection: the beam must be at the same height of the hole",
    ]
  },
];


// ── SECTION COLORS ─────────────────────────────────────────
const SEC = {
  LINE: "bg-blue-700 text-blue-100",
  REEL: "bg-indigo-700 text-indigo-100",
  FORM: "bg-purple-700 text-purple-100",
  DOSE: "bg-orange-700 text-orange-100",
  TANK: "bg-teal-700 text-teal-100",
  COOL: "bg-cyan-700 text-cyan-100",
  SEAL: "bg-green-700 text-green-100",
  CUT:  "bg-rose-700 text-rose-100",
  CT1:  "bg-yellow-700 text-yellow-100",
};
const STOP_STYLE = {
  "END OF CYCLE":    "bg-yellow-900/40 text-yellow-300 border-yellow-700/40",
  "IMMEDIATE STOP":  "bg-red-900/40 text-red-300 border-red-700/40",
  "PREVENTED START": "bg-orange-900/40 text-orange-300 border-orange-700/40",
  "NO STOP":         "bg-slate-700/40 text-slate-400 border-slate-600/40",
};
const P_ICON = {
  "OPERATOR":"👷","SKILLED OPERATOR":"🔧",
  "MECHANICAL TECHNICIAN":"⚙️","ELECTRICAL TECHNICIAN":"⚡"
};

// ── ALARM CARD ─────────────────────────────────────────────
function AlarmCard({num, a, onClick}) {
  const isRed = a.c === "RED";
  const isGrn = a.c === "GREEN";
  return React.createElement("button", {
    onClick: function() { onClick(num); },
    className: "w-full text-left rounded-xl border p-4 transition-all hover:scale-105 cursor-pointer " +
      (isRed ? "bg-red-950/70 border-red-800/50 hover:border-red-500" :
       isGrn ? "bg-emerald-950/40 border-emerald-900/50" :
               "bg-slate-800/60 border-slate-700/40 hover:border-yellow-500/50")
  },
    React.createElement("div", {className: "flex items-start justify-between gap-2 mb-2"},
      React.createElement("div", {className: "flex items-center gap-1.5 flex-wrap"},
        React.createElement("span", {className: "text-xs font-bold px-2 py-0.5 rounded-full " + (SEC[a.s] || "bg-slate-700 text-slate-100")}, a.s),
        React.createElement("span", {className: "font-mono text-sm font-black " + (isRed?"text-red-400":isGrn?"text-emerald-400":"text-yellow-400")},
          (isRed?"🔴 ":isGrn?"🟢 ":"🟡 ") + num
        )
      ),
      React.createElement("span", {className: "text-xs px-1.5 py-0.5 rounded border " + (STOP_STYLE[a.st]||"")},
        a.st === "IMMEDIATE STOP" ? "⛔ IMMED" : a.st === "END OF CYCLE" ? "🔄 EOC" : a.st === "PREVENTED START" ? "🚫 NO START" : "✅ NO STOP"
      )
    ),
    React.createElement("p", {className: "text-white font-semibold text-sm leading-snug"}, a.n),
    a.d && React.createElement("p", {className: "text-slate-400 text-xs mt-1 line-clamp-2"}, a.d)
  );
}

// ── ALARM DETAIL MODAL ─────────────────────────────────────
function AlarmModal({num, a, onClose}) {
  const isRed = a.c === "RED";
  if (!a) return null;
  return React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm",
    onClick: onClose
  },
    React.createElement("div", {
      className: "w-full sm:max-w-2xl max-h-screen overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl",
      onClick: function(e) { e.stopPropagation(); }
    },
      // Header
      React.createElement("div", {className: "p-5 " + (isRed?"bg-red-950":"bg-slate-800") + " border-b border-slate-700 rounded-t-2xl"},
        React.createElement("div", {className: "flex items-start justify-between gap-3"},
          React.createElement("div", null,
            React.createElement("div", {className: "flex items-center gap-2 flex-wrap mb-2"},
              React.createElement("span", {className: "text-xs font-bold px-2 py-1 rounded-full " + (SEC[a.s]||"")}, a.s),
              React.createElement("span", {className: "font-mono font-black text-3xl " + (isRed?"text-red-400":"text-yellow-400")}, num),
              React.createElement("span", {className: "text-xs px-2 py-1 rounded-lg border " + (STOP_STYLE[a.st]||"")}, a.st)
            ),
            React.createElement("h2", {className: "text-white font-black text-base"}, a.n)
          ),
          React.createElement("button", {onClick: onClose, className: "text-slate-400 hover:text-white text-2xl"}, "✕")
        ),
        React.createElement("div", {className: "flex flex-wrap gap-2 mt-3"},
          React.createElement("span", {className: "text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full"},
            (P_ICON[a.p]||"👷") + " " + a.p
          ),
          React.createElement("span", {className: "text-xs px-2 py-1 rounded-full " + (isRed?"bg-red-800 text-red-200":"bg-yellow-900/50 text-yellow-300")},
            isRed ? "🔴 RED" : a.c === "GREEN" ? "🟢 GREEN" : "🟡 YELLOW"
          ),
          a.by === "YES" && React.createElement("span", {className: "text-xs bg-blue-900/60 text-blue-300 px-2 py-1 rounded-full"}, "🔑 Bypass Key")
        )
      ),
      // Body
      React.createElement("div", {className: "p-5 space-y-4"},
        a.d && React.createElement("div", null,
          React.createElement("h3", {className: "text-xs font-bold uppercase tracking-widest text-slate-500 mb-2"}, "📋 What It Means"),
          React.createElement("div", {className: "bg-slate-800/60 rounded-xl p-4 border border-slate-700/50"},
            React.createElement("p", {className: "text-slate-200 text-sm leading-relaxed"}, a.d)
          )
        ),
        a.f && React.createElement("div", null,
          React.createElement("h3", {className: "text-xs font-bold uppercase tracking-widest text-slate-500 mb-2"}, "🔧 How to Fix"),
          React.createElement("div", {className: "bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-4"},
            React.createElement("p", {className: "text-slate-200 text-sm leading-relaxed"}, a.f)
          )
        )
      )
    )
  );
}

// ── FORMAT PAGE ────────────────────────────────────────────
function FormatPage() {
  const [inp, setInp] = React.useState("");
  const [sz, setSz] = React.useState(null);
  const [tab, setTab] = React.useState("parts");
  const [openT, setOpenT] = React.useState(null);
  const [openS, setOpenS] = React.useState(null);
  const [chk, setChk] = React.useState({});

  function doSearch(v) {
    v = String(v).trim();
    if (SIZES[v]) { setSz(v); setInp(v); setTab("parts"); setOpenT(null); setOpenS(null); }
    else setSz(null);
  }

  var si = sz ? parseInt(sz) : 0;
  var sinfo = sz ? SIZES[sz] : null;
  var sTables = si ? TABLES.filter(function(t){return t.sizes.indexOf(si)>=0;}) : [];
  var sc = sz ? "s"+sz : null;
  var doneCount = Object.values(chk).filter(Boolean).length;

  var szBg = {"1":"bg-blue-700","2":"bg-indigo-700","3":"bg-violet-700","4":"bg-amber-700","5":"bg-orange-700"};

  return React.createElement("div", {className: "max-w-3xl mx-auto px-4 py-4 pb-8"},
    // Search header
    React.createElement("div", {className: "bg-slate-800/70 border border-slate-700/50 rounded-2xl p-4 mb-4"},
      React.createElement("p", {className: "text-white font-black text-sm mb-1"}, "🔄 Size Format Change Guide"),
      React.createElement("p", {className: "text-slate-500 text-xs mb-3"}, "Enter size number (1-5) to get parts list and steps"),
      React.createElement("div", {className: "flex gap-2 mb-3"},
        React.createElement("input", {
          type:"number", min:"1", max:"5", value:inp,
          onChange: function(e){setInp(e.target.value);},
          onKeyDown: function(e){if(e.key==="Enter") doSearch(inp);},
          placeholder:"Enter size number 1 to 5",
          className:"flex-1 bg-slate-900 border border-slate-600 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-orange-500"
        }),
        React.createElement("button", {
          onClick: function(){doSearch(inp);},
          className:"bg-orange-500 hover:bg-orange-400 text-white font-black px-5 rounded-xl text-sm"
        }, "GO")
      ),
      React.createElement("div", {className: "flex gap-2 flex-wrap"},
        Object.entries(SIZES).map(function(entry) {
          var n = entry[0]; var info = entry[1];
          return React.createElement("button", {
            key:n, onClick:function(){doSearch(n);},
            className:"text-xs font-bold px-3 py-1.5 rounded-full border " +
              (sz===n ? "bg-orange-500 border-orange-400 text-white" : "bg-slate-700/40 border-slate-600 text-slate-300")
          }, "Size "+n+" · "+info.code+" · "+info.material);
        })
      )
    ),

    // Invalid
    inp && !SIZES[inp] && React.createElement("div", {className:"bg-red-950/50 border border-red-700/50 rounded-xl p-3 text-center mb-4"},
      React.createElement("p", {className:"text-red-400 font-bold text-sm"}, "⚠️ Invalid — enter 1, 2, 3, 4 or 5 only")
    ),

    // Results
    sz && sinfo && React.createElement("div", null,
      // Size badge
      React.createElement("div", {className:"rounded-2xl border border-orange-700/30 bg-slate-800/50 p-4 mb-4 flex items-center gap-4"},
        React.createElement("div", {className:"w-14 h-14 " + (szBg[sz]||"bg-slate-700") + " rounded-xl flex items-center justify-center text-white font-black text-2xl"}, sz),
        React.createElement("div", null,
          React.createElement("p", {className:"text-white font-black text-base"}, "Size No."+sz+" — Code: "+sinfo.code),
          React.createElement("p", {className:"text-slate-400 text-xs mt-0.5"}, "Part Number: "+sinfo.partNo),
          React.createElement("p", {className:"text-slate-400 text-xs"}, "Material: "+sinfo.material)
        )
      ),

      // Tabs
      React.createElement("div", {className:"grid grid-cols-3 gap-2 mb-4"},
        ["parts","steps","prep"].map(function(t) {
          return React.createElement("button", {
            key:t, onClick:function(){setTab(t);},
            className:"py-2.5 rounded-xl text-xs font-black " + (tab===t?"bg-orange-500 text-white":"bg-slate-800 text-slate-400")
          }, t==="parts"?"📦 Parts":t==="steps"?"🔧 Steps":"⚙️ Prep");
        })
      ),

      // PARTS TAB
      tab==="parts" && React.createElement("div", {className:"space-y-3"},
        sTables.map(function(table, ti) {
          var isOpen = openT===ti;
          var visible = table.parts.filter(function(p){return p[sc] && p[sc]!==""});
          return React.createElement("div", {key:ti, className:"rounded-xl border border-slate-700/40 overflow-hidden"},
            React.createElement("button", {
              onClick:function(){setOpenT(isOpen?null:ti);},
              className:"w-full flex items-center justify-between p-4 bg-slate-800/60 text-left"
            },
              React.createElement("div", null,
                React.createElement("div", {className:"flex items-center gap-2"},
                  React.createElement("span", {className:"text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-mono"}, table.tableRef+"/"+table.drawRef),
                  React.createElement("span", {className:"text-white font-bold text-sm"}, table.title)
                ),
                React.createElement("p", {className:"text-slate-500 text-xs mt-0.5"}, visible.length+" parts for Size "+sz)
              ),
              React.createElement("span", {className:"text-slate-400 text-xl"}, isOpen?"▲":"▼")
            ),
            isOpen && React.createElement("div", null,
              table.note && React.createElement("div", {className:"px-4 py-2.5 bg-blue-950/40 border-b border-slate-700/30"},
                React.createElement("p", {className:"text-blue-200 text-xs leading-relaxed"}, "ℹ️ "+table.note)
              ),
              React.createElement("div", {className:"overflow-x-auto"},
                React.createElement("table", {className:"w-full text-xs min-w-96"},
                  React.createElement("thead", null,
                    React.createElement("tr", {className:"bg-slate-700/50 text-slate-400"},
                      React.createElement("th", {className:"px-3 py-2 text-left"},"Pos."),
                      React.createElement("th", {className:"px-3 py-2 text-left"},"Description"),
                      React.createElement("th", {className:"px-3 py-2 text-left"},"Part No."),
                      React.createElement("th", {className:"px-3 py-2 text-center"},"Qty"),
                      React.createElement("th", {className:"px-3 py-2 text-center"},"Code")
                    )
                  ),
                  React.createElement("tbody", null,
                    visible.map(function(part, pi) {
                      var code = part[sc];
                      var isCommon = code==="Q"||code==="F"||code==="Q+"||code==="---";
                      return React.createElement("tr", {
                        key:pi,
                        className:"border-t border-slate-700/20 " + (!isCommon?"bg-orange-950/25":pi%2===0?"bg-slate-800/20":"")
                      },
                        React.createElement("td", {className:"px-3 py-2 text-slate-500 font-mono"}, part.pos),
                        React.createElement("td", {className:"px-3 py-2 text-slate-200"}, part.desc),
                        React.createElement("td", {className:"px-3 py-2 text-green-400 font-mono"}, part.partNo),
                        React.createElement("td", {className:"px-3 py-2 text-center text-slate-300"}, part.qty),
                        React.createElement("td", {className:"px-3 py-2 text-center"},
                          React.createElement("span", {className:"inline-block px-2 py-0.5 rounded-full font-black border text-xs " +
                            (code==="---"?"bg-slate-800 text-slate-500 border-slate-600":
                             isCommon?"bg-slate-700/60 text-slate-300 border-slate-600":
                             "bg-orange-500/25 text-orange-300 border-orange-500/50")}, code)
                        )
                      );
                    })
                  )
                )
              ),
              React.createElement("div", {className:"px-4 py-2 border-t border-slate-700/30 text-xs text-slate-500 flex gap-4"},
                React.createElement("span", null, "Common = grey · Size-specific = orange · --- = not changed")
              )
            )
          );
        })
      ),

      // STEPS TAB
      tab==="steps" && React.createElement("div", {className:"space-y-2"},
        STEPS.map(function(step, si2) {
          var isOpen = openS===si2;
          return React.createElement("div", {key:si2, className:"rounded-xl border border-slate-700/40 overflow-hidden"},
            React.createElement("button", {
              onClick:function(){setOpenS(isOpen?null:si2);},
              className:"w-full flex items-center gap-3 p-3.5 bg-slate-800/60 text-left"
            },
              React.createElement("span", {className:"text-lg"}, step.icon),
              React.createElement("div", {className:"flex-1"},
                React.createElement("span", {className:"text-xs text-slate-500 font-mono"}, step.ref),
                React.createElement("p", {className:"text-white font-bold text-sm"}, step.title)
              ),
              React.createElement("span", {className:"text-slate-400 text-lg"}, isOpen?"▲":"▼")
            ),
            isOpen && React.createElement("div", {className:"border-t border-slate-700/30 p-4"},
              React.createElement("ol", {className:"space-y-3"},
                step.items.map(function(item, ii) {
                  var isW = item.indexOf("⚠️")===0;
                  return React.createElement("li", {key:ii, className:"flex gap-3 items-start"},
                    React.createElement("span", {className:"flex-shrink-0 w-6 h-6 rounded-full text-xs font-black flex items-center justify-center mt-0.5 " + (isW?"bg-yellow-700/50 text-yellow-300":"bg-slate-700 text-slate-300")}, isW?"!":ii+1),
                    React.createElement("p", {className:"text-xs leading-relaxed " + (isW?"text-yellow-200 font-semibold":"text-slate-200")}, item)
                  );
                })
              )
            )
          );
        })
      ),

      // PREP TAB
      tab==="prep" && React.createElement("div", {className:"space-y-3"},
        React.createElement("div", {className:"bg-yellow-950/40 border border-yellow-700/40 rounded-xl p-4"},
          React.createElement("div", {className:"flex items-center justify-between mb-3"},
            React.createElement("p", {className:"text-yellow-300 font-black text-sm"}, "⚠️ Machine Preparation Checklist"),
            React.createElement("span", {className:"text-xs bg-yellow-900/50 text-yellow-300 px-2 py-1 rounded-full"}, doneCount+"/"+PREP_STEPS.length+" done")
          ),
          React.createElement("div", {className:"space-y-2"},
            PREP_STEPS.map(function(step, i) {
              return React.createElement("button", {
                key:i, onClick:function(){setChk(function(p){var n=Object.assign({},p); n[i]=!n[i]; return n;});},
                className:"w-full flex items-start gap-3 p-3 rounded-xl border text-left " +
                  (chk[i]?"bg-green-950/40 border-green-700/40":"bg-slate-800/40 border-slate-700/30")
              },
                React.createElement("span", {className:"flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-black " + (chk[i]?"bg-green-600 border-green-500 text-white":"border-slate-500 text-slate-500")}, chk[i]?"✓":i+1),
                React.createElement("p", {className:"text-xs leading-relaxed " + (chk[i]?"text-green-300 line-through opacity-70":"text-slate-200")}, step)
              );
            })
          ),
          doneCount===PREP_STEPS.length && React.createElement("div", {className:"mt-3 bg-green-900/40 border border-green-700/40 rounded-xl p-3 text-center"},
            React.createElement("p", {className:"text-green-300 font-black"}, "✅ All complete — safe to begin format change")
          )
        ),
        React.createElement("div", {className:"bg-blue-950/40 border border-blue-700/40 rounded-xl p-4"},
          React.createElement("p", {className:"text-blue-300 font-black text-sm mb-3"}, "🔑 Tool Handles Required"),
          React.createElement("div", {className:"space-y-2"},
            [
              {code:"015040570",thread:"M6",use:"PVC mould dies"},
              {code:"551510155",thread:"M8",use:"ALU valve sealing and knurling dies"},
              {code:"015040750",thread:"M8",use:"Under-pump centring dies"},
            ].map(function(t,i) {
              return React.createElement("div", {key:i, className:"flex items-center gap-3 bg-slate-800/40 rounded-lg px-3 py-2"},
                React.createElement("span", {className:"text-green-400 font-mono text-xs font-bold"}, t.code),
                React.createElement("span", {className:"text-slate-500 text-xs"}, "("+t.thread+")"),
                React.createElement("span", {className:"text-slate-300 text-xs ml-auto"}, t.use)
              );
            })
          )
        )
      )
    ),

    // Default state
    !sz && !inp && React.createElement("div", {className:"space-y-3"},
      React.createElement("div", {className:"rounded-xl border border-slate-700/30 overflow-hidden"},
        React.createElement("div", {className:"px-4 py-3 bg-slate-800/60 border-b border-slate-700/30"},
          React.createElement("p", {className:"text-white font-bold text-sm"}, "All Available Sizes — SAAS 9 AP S/N 1577"),
          React.createElement("p", {className:"text-slate-500 text-xs mt-0.5"}, "Tap any size to view its complete changeover guide")
        ),
        Object.entries(SIZES).map(function(entry) {
          var n = entry[0]; var info = entry[1];
          return React.createElement("button", {
            key:n, onClick:function(){doSearch(n);},
            className:"w-full flex items-center gap-4 px-4 py-3.5 border-b border-slate-700/20 last:border-0 hover:bg-slate-700/30 text-left"
          },
            React.createElement("div", {className:"w-10 h-10 " + (szBg[n]||"bg-slate-700") + " rounded-xl flex items-center justify-center text-white font-black text-lg"}, n),
            React.createElement("div", {className:"flex-1"},
              React.createElement("p", {className:"text-white font-bold text-sm"}, "Size No."+n+" — Code: "+info.code),
              React.createElement("p", {className:"text-slate-500 text-xs"}, info.partNo+" · "+info.material)
            ),
            React.createElement("span", {className:"text-slate-500 text-lg"}, "›")
          );
        })
      )
    )
  );
}

// ── MAIN APP ───────────────────────────────────────────────
function App() {
  var useState = React.useState;
  var useMemo = React.useMemo;

  var pageState = useState("alarms");
  var page = pageState[0]; var setPage = pageState[1];

  var searchState = useState("");
  var search = searchState[0]; var setSearch = searchState[1];

  var sectionState = useState("ALL");
  var section = sectionState[0]; var setSection = sectionState[1];

  var stopState = useState("ALL");
  var stopFilter = stopState[0]; var setStopFilter = stopState[1];

  var colorState = useState("ALL");
  var colorFilter = colorState[0]; var setColorFilter = colorState[1];

  var selectedState = useState(null);
  var selected = selectedState[0]; var setSelected = selectedState[1];

  var sectionList = ["ALL","LINE","REEL","FORM","DOSE","TANK","COOL","SEAL","CUT","CT1"];
  var stopList = ["ALL","IMMEDIATE STOP","END OF CYCLE","PREVENTED START","NO STOP"];

  var secCounts = useMemo(function() {
    var c = {};
    Object.values(ALARMS).forEach(function(a) { c[a.s] = (c[a.s]||0)+1; });
    return c;
  }, []);

  var filtered = useMemo(function() {
    var q = search.trim().toLowerCase();
    return Object.entries(ALARMS).filter(function(entry) {
      var num = entry[0]; var a = entry[1];
      var mS = !q || num.includes(q) || a.n.toLowerCase().includes(q) || a.d.toLowerCase().includes(q) || a.f.toLowerCase().includes(q) || a.s.toLowerCase().includes(q);
      var mSec = section==="ALL" || a.s===section;
      var mStop = stopFilter==="ALL" || a.st===stopFilter;
      var mCol = colorFilter==="ALL" || a.c===colorFilter;
      return mS && mSec && mStop && mCol;
    }).sort(function(x,y) {
      var so = {"IMMEDIATE STOP":0,"PREVENTED START":1,"END OF CYCLE":2,"NO STOP":3};
      var co = {"RED":0,"YELLOW":1,"GREEN":2};
      if (so[x[1].st] !== so[y[1].st]) return so[x[1].st]-so[y[1].st];
      if (co[x[1].c] !== co[y[1].c]) return co[x[1].c]-co[y[1].c];
      return parseInt(x[0])-parseInt(y[0]);
    });
  }, [search, section, stopFilter, colorFilter]);

  var selAlarm = selected ? ALARMS[selected] : null;

  return React.createElement("div", {className:"min-h-screen bg-slate-950 text-white pb-16", style:{fontFamily:"monospace"}},

    // ── HEADER (alarms page) ──
    page==="alarms" && React.createElement("div", {className:"bg-slate-900 border-b border-slate-800 sticky top-0 z-40"},
      React.createElement("div", {className:"max-w-3xl mx-auto px-4 pt-4 pb-3"},
        // Title
        React.createElement("div", {className:"flex items-center gap-3 mb-3"},
          React.createElement("div", {className:"w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-lg font-black"}, "⚠"),
          React.createElement("div", {className:"flex-1"},
            React.createElement("h1", {className:"text-white font-black text-base leading-tight"}, "SAAS 9 AP · Alarm Reference"),
            React.createElement("p", {className:"text-slate-500 text-xs"}, "S/N 1577 · Aspen · "+Object.keys(ALARMS).length+" alarms")
          )
        ),
        // Search
        React.createElement("div", {className:"relative mb-2.5"},
          React.createElement("span", {className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm"}, "🔍"),
          React.createElement("input", {
            type:"text", value:search,
            onChange:function(e){setSearch(e.target.value);},
            placeholder:"Enter alarm code (e.g. 6001) or keyword...",
            className:"w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-8 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
          }),
          search && React.createElement("button", {onClick:function(){setSearch("");}, className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"}, "✕")
        ),
        // Section filter
        React.createElement("div", {className:"flex gap-1.5 overflow-x-auto pb-1"},
          sectionList.map(function(s) {
            var active = section===s;
            return React.createElement("button", {
              key:s, onClick:function(){setSection(s);},
              className:"flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full " +
                (active ? (s==="ALL"?"bg-orange-500 text-white":(SEC[s]||"bg-slate-600 text-white")) : "bg-slate-800 text-slate-400")
            }, s + (s!=="ALL" && secCounts[s] ? " "+secCounts[s] : ""));
          })
        ),
        // Stop filter
        React.createElement("div", {className:"flex gap-1.5 mt-1.5 overflow-x-auto pb-1"},
          stopList.map(function(t) {
            var active = stopFilter===t;
            return React.createElement("button", {
              key:t, onClick:function(){setStopFilter(t);},
              className:"flex-shrink-0 text-xs px-2.5 py-1 rounded-full border " +
                (active ? (t==="IMMEDIATE STOP"?"bg-red-700 border-red-600 text-white":t==="END OF CYCLE"?"bg-yellow-700 border-yellow-600 text-white":t==="PREVENTED START"?"bg-orange-700 border-orange-600 text-white":"bg-slate-600 border-slate-500 text-white") : "bg-transparent border-slate-700 text-slate-500")
            }, t==="ALL"?"All Stops":t==="IMMEDIATE STOP"?"⛔ Immed":t==="END OF CYCLE"?"🔄 EOC":t==="PREVENTED START"?"🚫 No Start":"✅ No Stop");
          }),
          ["RED","YELLOW","GREEN"].map(function(c) {
            return React.createElement("button", {
              key:c, onClick:function(){setColorFilter(colorFilter===c?"ALL":c);},
              className:"flex-shrink-0 text-xs px-2.5 py-1 rounded-full border " +
                (colorFilter===c ? (c==="RED"?"bg-red-700 border-red-600 text-white":c==="GREEN"?"bg-green-700 border-green-600 text-white":"bg-yellow-700 border-yellow-600 text-white") : "bg-transparent border-slate-700 text-slate-500")
            }, c==="RED"?"🔴 RED":c==="GREEN"?"🟢 GREEN":"🟡 YELLOW");
          })
        ),
        React.createElement("p", {className:"text-xs text-slate-600 mt-1.5"}, "Showing "+filtered.length+" of "+Object.keys(ALARMS).length+" alarms")
      )
    ),

    // ── FORMAT PAGE HEADER ──
    page==="format" && React.createElement("div", {className:"bg-slate-900 border-b border-slate-800 sticky top-0 z-40 px-4 py-3 flex items-center gap-3"},
      React.createElement("span", {className:"text-xl"}, "🔄"),
      React.createElement("h1", {className:"text-white font-black text-base"}, "Size Format Change Guide"),
      React.createElement("p", {className:"text-slate-500 text-xs ml-auto"}, "SAAS 9 AP · S/N 1577")
    ),

    // ── ALARM CONTENT ──
    page==="alarms" && React.createElement("div", {className:"max-w-3xl mx-auto px-4 py-4"},
      filtered.length===0
        ? React.createElement("div", {className:"text-center py-20"},
            React.createElement("p", {className:"text-5xl mb-4"}, "🔍"),
            React.createElement("p", {className:"text-slate-400 font-bold"}, "No alarm found"),
            React.createElement("button", {onClick:function(){setSearch("");setSection("ALL");setStopFilter("ALL");setColorFilter("ALL");}, className:"mt-4 text-orange-400 text-sm"}, "Clear filters")
          )
        : React.createElement("div", {className:"grid gap-2.5 sm:grid-cols-2"},
            filtered.map(function(entry) {
              var num = entry[0]; var a = entry[1];
              return React.createElement(AlarmCard, {key:num, num:num, a:a, onClick:setSelected});
            })
          )
    ),

    // ── FORMAT CONTENT ──
    page==="format" && React.createElement(FormatPage, null),

    // ── ALARM MODAL ──
    selected && selAlarm && React.createElement(AlarmModal, {num:selected, a:selAlarm, onClose:function(){setSelected(null);}}),

    // ── DEVELOPER CREDIT ──
    React.createElement("div", {className:"text-center py-4 px-4 border-t border-slate-800/50"},
      React.createElement("p", {className:"text-slate-600 text-xs"}, "SAAS 9 AP · S/N 1577 · Aspen Pharmacare"),
      React.createElement("p", {className:"text-slate-500 text-xs mt-1 font-bold"}, "Developed by Dr. Naga Sravan Kumar Varma Vegesna")
    ),

    // ── BOTTOM NAV ──
    React.createElement("div", {className:"fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 flex"},
      [
        {id:"alarms", icon:"⚠️", label:"Alarms"},
        {id:"format", icon:"🔄", label:"Format Change"},
      ].map(function(item) {
        return React.createElement("button", {
          key:item.id,
          onClick:function(){setPage(item.id);},
          className:"flex-1 flex flex-col items-center justify-center py-3 gap-0.5 " + (page===item.id?"text-orange-400":"text-slate-500")
        },
          React.createElement("span", {className:"text-xl"}, item.icon),
          React.createElement("span", {className:"text-xs font-bold"}, item.label)
        );
      })
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
