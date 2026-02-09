export const QUESTIONS = [
    {
        id: 1,
        scenario: "",
        Question: "What would be the common reason for a local authority requiring  a periodic inspection and testing process?",
         options: [
            {id: 'a', text: "To confirm the installation is defective or has not detereiorated over time"},
            {id: 'b', text: "To confirm the installation complies with the design or construction parts of BS 7671"},
            {id: 'c', text: "To confirm the client is satisfied with all the work carried out"},
            {id: 'd', text: "To confirm that contractual elements have been undertaken to ISO 9001"},
        ],
        correctAnswer: 'a',
        explanation:"It is the local authority, such as district council, who issues licences and to ensure that building is safe and suitable for that use."
    },

    {
        id: 2,
        scenario: "",
        Question: "Which statutory document relates to the periodic inspection and testing process?",
            options: [
            {id: 'a', text: "BS 7671 IEE Wiring Regulations"},
            {id: 'b', text: "HSE GS38 Test Instruments and Leads"},
            {id: 'c', text: "Electricity at Work Regulations "},
            {id: 'd', text: "IET GN3 Inspection and Testing"},
        ],
        correctAnswer: 'c',
        explanation: " The Electricity at work Regulations EAWR is statutory document which means it is the law to comply with.",
    },
    {
        id: 3,
        scenario: "",
        Question: "What factor is a major consideration when an inspector is setting inspection and testing samples?", 
            options: [
            {id: 'a', text: "normal  working hours"},
            {id: 'b', text: "Quality of record kept"},
            {id: 'c', text: "Site access restrictions"},
            {id: 'd', text: "Likely weather conditions"},
        ],
        correctAnswer: 'b',
        explanation: 'AS stated in Guidance Note 3(3.8.3), a major consideration for an inspector who is deciding upon the amount of sampling required, \
                      the quality of records such as previous test data, certification, drawing and reports, are all factors which affect the decision.',
    },

    {
        id: 4,
        scenario: "",
        Question: "What factor could  have an impact on the limitations agreed with a client?",       
            options: [
            {id: 'a', text: "The sections of the building client occuipies"},
            {id: 'b', text: "The ability to access rooms at particular times"},
            {id: 'c', text: "The number of distribution circuits present"},
            {id: 'd', text: "The loss of supply to an essential data system"},
        ],
        correctAnswer: 'd',
        explanation: " If an inspector is unable to isolate a particular circuit, then this is a limitation. \
                       The other factors given all relate to the extent of an inspection with the exception to (b)  which simply requires the inspector to access a room at an agreed time.",
    },
    {
        id: 5,
        scenario: "",
        Question: "What is a major responsibility of and inspector, based on the overall condition of an installation, following a periodic inspection?",
            options: [
            {id: 'a', text: "Setting the period to the next test date"},
            {id: 'b', text: "Ensuring all minor works are completed"},
            {id: 'c', text: "Issuing Certification to the local authority"},
            {id: 'd', text: "Sending a general report to the DNO"},
        ],
        correctAnswer: 'a',
        explanation: " Once an inspector has compiled the report for the client, the inspector must make a judgment as to the duration to the next test date. \
                       This is then noted on the report and a notice may also be placed at the consumer's control equipment giving the date. \
                       The duration is based on the condition of the installation, the frequency and quality of maintenance, external influences and the type of equipment.",
    },
    {
        id: 6,
        scenario: "",
        Question: "What does the Electricity at Work Regulations state, with regard to, working on or near live parts?",
            options: [
            {id: 'a', text: "It is permitted  if the building is occupied during the works"},
            {id: 'b', text: "Suitable precautions must be taken to prevent injury"},
            {id: 'c', text: "Under no circumstances should this be undertaken"},
            {id: 'd', text: "Those undertaking the work shall have notified the HSE in advance"},,
        ],
        correctAnswer: 'b',
        explanation: " Regulation 14 of the Electricity at Work Regulations states: work on or near live conductors \
                       14. No persong shall be engaged in any work activity on so near any live conductor(other than one suitably covered with insulating material\
                       so as to prevent danger)",
    },
    {
        id: 7,
        scenario: "",
        Question: " At large installation is being inspected by four persons and the supply has been isolated. How should the means of isolation be secured?",
            options: [
            {id: 'a', text: "By using four notices on the installation main switch."},
            {id: 'b', text: "By using a device that accepts one lock having four keys."},
            {id: 'c', text: "By using four different colours of tape over the main switch."},
            {id: 'd', text: "By using a device that accepts one lock having four unique keys."},,
        ],
        correctAnswer: 'd',
        explanation: " In order or a supply to be secured in a way that effectively protects all four inspectors, a device must be used that accepts\
                       four locks, each having one unique key, so only when all parties are completed and satisfied, can the supply be restored",
    },

    {
        id:8 ,
        scenario: "",
        Question: "What is the minimum level of IP protection, for basic protection, when inspecting the accessible horizontal top surface of a distribution board ?",
            options: [
            {id: 'a', text: "IP2X."},
            {id: 'b', text: "IP4X."},
            {id: 'c', text: "IPX2"},
            {id: 'd', text: "IPX4."},,
        ],
        correctAnswer: 'b',
        explanation: " When inspecting the horizontal top surface of a distribution board for basic protection by brriers and enclosures, minimum permitted degree of IP protection is IP4X.\
                       if the surface is generally accessible. IP4x means there is no hole in the enclosure greater than 1mm in diameter",
    }, 

    {
        id:9 ,
        scenario: "",
        Question: "One item on an Inspection schedule requires the segregation of Band I  and Band II cables. What is a typical example of a Band I cable ?",
            options: [
            {id: 'a', text: "The cable supplying SELV lighting transforemer."},
            {id: 'b', text: "The cable supplying a self contained emergency light."},
            {id: 'c', text: "A cable supplying a 16 A BS EN 60309 socket outlet."},
            {id: 'd', text: "A cable linking detectors on an intruderalarm system."},,
        ],
        correctAnswer: 'd',
        explanation: 'Typically, the first three options are 230 V circuits and are therefore classed as Band II. A Band I circuit is one that operates at\
                      extra-low voltages, such as intruder alarm circuits, and these must be segregated from Band II circuits. ' ,
    },

    {
        id:10 ,
        scenario: "",
        Question: " What is an example of a defect which is classified C1?",
            options: [
            {id: 'a', text: "A missing lid on trunking containing sheathed cables."},
            {id: 'b', text: " A light switch having a damaged front exposing internal parts."},
            {id: 'c', text: "A circuit supplying   bathroom having no RCD  protection"},
            {id: 'd', text: "A 1.5 mm square cable protected by a 20 A circuit breaker."},,
        ],
        correctAnswer: 'b',
        explanation:'If damaged switch has internal parts exposed, there is an imminent risk of electric shock and would therefore be classed as \
                      C1: Danger present. The other options given require something else to occur for the example to become an imminent risk and are\
                          therefore, potentially dangerous.'   
       
    },

     {
        id:11,
        scenario: "",
        Question: " Which defect would be detected by the sense of hearing ?",
            options: [
            {id: 'a', text: "Loose neutral connection."},
            {id: 'b', text: "Damaged cable insulation."},
            {id: 'c', text: "Inadequate conduit fixing."},
            {id: 'd', text: "Fault bonding conductor."},,
        ],
        correctAnswer: 'a',
        explanation: 'A loose neutral connection would arc and spark creating a noise',
    },
    
    {
        id:12 ,
        scenario: "",
        Question: " What is the maximum residual current setting for an RCD providing fault protection only?",
            options: [
            {id: 'a', text: "30 mA as stated under additional protection."},
            {id: 'b', text: "100 mA when the RCD is a main switch."},
            {id: 'c', text: "It depends on the value of earth fault loop impedance."},
            {id: 'd', text: "it depends on the current rating of the circuit breaker."},,
        ],
        correctAnswer: 'c',
        explanation: 'The maximum residual current setting of an RCD only providing fault protection is based on the earth fault loop impedance \
                      of the circuit as detailed in Table 41.5  of BS 7671. Whilst many circuits may also require additional protection,\
                       which limits the setting to 30 mA as maximum, where an RCD is providing fault protection only, this would not apply ',
    },

    {
        id: 13,
        scenario: "",
        Question: "What does the second number of the IP code relate to ?",
            options: [
            {id: 'a', text: "Ingress of dust."},
            {id: 'b', text: "Ingress of fingers."},
            {id: 'c', text: "Ingress of solid objects."},
            {id: 'd', text: "Ingress of water or moisture."},,
        ],
        correctAnswer: 'd',
        explanation: ' The second number of an IP code relates to the protection against water and moisture. For example, an IP code IPX4 means\
                       the equipment id protected against splashes of water from all directions. ',
    },

     {
        id: 14,
        scenario: "",
        Question: " What is required following the issue of an FI code?",
            options: [
            {id: 'a', text: "Fault identified must be rectified immediately."},
            {id: 'b', text: "Further Investigation required without delay."},
            {id: 'c', text: "Further insulation bust be applied imminently."},
            {id: 'd', text: "Faulty installation must be isolated indtantly."},,
        ],
        correctAnswer: 'b',
        explanation: 'Where an FI cod is issued, it is because inspection has revealed and apparent defect that could not, \
                      due to limitations, be fully identified and further investigation may reveal a C1  or C2 item. In this \
                      situation, further investigation is required without delay. ',
    },
    
    {
        id: 15,
        scenario: "",
        Question: " What percentage does Guidance Note 3 suggest as an adequate level of basic instrument accuracy?",
            options: [
            {id: 'a', text: "1%."},
            {id: 'b', text: "3%."},
            {id: 'c', text: "5%."},
            {id: 'd', text: "7%."},,
        ],
        correctAnswer: 'c',
        explanation: ' Undere the section titled instrument Accuracy within Guidance Note 3, it is recommended that basic accuracy \
                      of 5 % is usually accurate.',
    },

    {
        id:16 ,
        scenario: "",
        Question: "Which value, displayed on an insulation resistance test instrument, would represent a suitable value, with no concerns,\
                   when testing a 230 V circuit using 500 V ?",
            options: [
            {id: 'a', text: "0.01."},
            {id: 'b', text: "0.50."},
            {id: 'c', text: "1.00."},
            {id: 'd', text: ">999."},,
        ],
        correctAnswer: 'd',
        explanation: ' Most instrument will display a >999 which means the value is over the measuring range of the instrument. When \
                       testing insulation resistance, this is considered a very high, good reading. Whilst option C displays the minimum \
                       permissible value of insulation resistance, a value this borderline should give an inspector reason for concern.\
                       The other two values are below the permissible minimum value and therefore unacceptable. ',
    },


    {
        id:17 ,
        scenario: "",
        Question: " What circumstances would remove the need for a ring-final continuity test during periodic testing?",
            options: [
            {id: 'a', text: "Where record exist and no alterations have been done."},
            {id: 'b', text: "Where no records exist and the circuit has not been altered."},
            {id: 'c', text: "Where the circuit is protected by and RCD but no records exist."},
            {id: 'd', text: "Where older records exist and the circuit has been altered."},
        ],
        correctAnswer: 'a',
        explanation: 'Guidance Note 3(3.10.2 Table 3.4) suggests that the rests to be made to an existing ring -final circuit would not include\
                       a test of ring-final circuit continuity if there are records of previous tests and no changes have been made to the circuit. ',
    },

    {
        id: 18,
        scenario: "",
        Question: " What would most likely influence instrument accuracy, leading to more frequent checks being needed?",
            options: [
            {id: 'a', text: " Storing in dry site store with a constant temperature."},
            {id: 'b', text: "Using the test instruments on very rare occasions."},
            {id: 'c', text: "Keeping it in a van with many other tools and equipment."},
            {id: 'd', text: "Storing it in an office cupboard and not using it often."},,
        ],
        correctAnswer: 'c',
        explanation: ' Keeping test instruments in vans means that it is subjected to  vibration and differing temperature ranges. \
                       these can all affect the accuracy of leads and instruments.',
    },

    {
        id: 19,
        scenario: "",
        Question: "What factor would most likely lead to tests being carried out in a sequence different to initial verification  ?",
            options: [
            {id: 'a', text: "The need to isolate at times suitable to the client."},
            {id: 'b', text: "No previous test records or circuit charts present ."},
            {id: 'c', text: "The inspection revealed many causes for concern."},
            {id: 'd', text: "There are signs of many unrecorded additional circuits."},
        ],
        correctAnswer: 'a',
        explanation: 'The range of tests would normally, in an installation having detailed records and data, be carried out in a \
                       sequence which suits the clients needs. All the other options would potentially require full tests to be under\
                       taken, in the recommended sequence, to establish a level of safety ',
    },

    
{
        id:20 ,
        scenario: "A continuity test is to be conducted to the main protective bonding conductors in large industrial installations\
                    Individual conductors connect the MET to gas installation pipework, water installlation pipework and extraneous \
                    steel framework of the building. Each conductor is concealed at variousparts along their runs. All connections are \
                    remote from the MET.",
        Question: " What must be undertaken before the conductors are disconnected from the MET ?",
                   
                    
      
      
        options: [
            {id: 'a', text: "An insulation resistance test between conductor."},
            {id: 'b', text: "The gas and water must be fully and securely isolated."},
            {id: 'c', text: "The electrical installation is isolated from the supply ."},
            {id: 'd', text: "A voltage check between the MET and a test earth electrode."},
        ],
        correctAnswer: 'c',
        explanation: 'It is essential that an electrical installation is fully and securely isolated from the supply before\
                      any protective bonding conductors are disconnected as there may be dangerous voltages that occur\
                      between the electrical earth and the actual earth the extraneous parts are connected to. ',
    },
   
    
{
        id:21 ,
        scenario: " A continuity test is to be conducted to the main protective bonding conductors in large industrial installations\
                    Individual conductors connect the MET to gas installation pipework, water installlation pipework and extraneous \
                    steel framework of the building. Each conductor is concealed at variousparts along their runs. All connections are \
                    remote from the MET.",
        Question:"Why are the conductors disconnected from the MET ?",
            options: [
            {id: 'a', text: "To ensure no dangerous potential differences occur."},
            {id: 'b', text: " To eliminate parallel paths through other earths."},
            {id: 'c', text: "To ensure the conductors are isolated from the supply."},
            {id: 'd', text: "To ensure no sparks or arcs create a risk with the gas."},
        ],
        correctAnswer: 'b',
        explanation: ' By disconnecting the individual conductors from the MET before they are tested, the ipen end eliminates parallel paths\
                       through other services or cpcs. This in turn will give a reasonably accurate resistance reading for the conductor under test ',
    },

    {
        id:22 ,
        scenario: "A continuity test is to be conducted to the main protective bonding conductors in large industrial installations\
                    Individual conductors connect the MET to gas installation pipework, water installlation pipework and extraneous \
                    steel framework of the building. Each conductor is concealed at variousparts along their runs. All connections are \
                    remote from the MET ",
        Question: "What instrument is used to carry out this test?",
            options: [
            {id: 'a', text: "Approved voltage tester."},
            {id: 'b', text: "Low resistance ohmmeter."},
            {id: 'c', text: "Earth Electrode tester."},
            {id: 'd', text: "Continuity tester."},,
        ],
        correctAnswer: 'b',
        explanation: 'Low resistance ohmmeter is required to get the correct reading of continuity of conductors ',
    },

    {
        id:23 ,
        scenario:"A continuity test is to be conducted to the main protective bonding conductors in large industrial installations\
                    Individual conductors connect the MET to gas installation pipework, water installation pipework and extraneous \
                    steel framework of the building. Each conductor is concealed at various parts along their runs. All connections are \
                    remote from the MET.",
        Question: "What additional item would be required for this test including the consideration needed for this item ?",
            options: [
            {id: 'a', text: "Wandering lead where the resistance of the lead is added to the reading for the overall result."},
            {id: 'b', text: "Proving unit to test the bonding clamp is suitably connected to the gas or water services."},
            {id: 'c', text: "A link between line and cpc where the resistance of the link is nulled or zeroed."},
            {id: 'd', text: "A zeroed or nulled wander lead as the conductors extend further than the standard test leads.."},,
        ],
        correctAnswer: 'd',
        explanation: 'As the connections of each extraneous part if located a distance from the MET. This test needs a wander lead which is nulled\
                     or zeroed. There is no line conductor to link to as this in not a circuit. ',
    },

    
{
        id: 24,
        scenario: " A continuity test is to be conducted to the main protective bonding conductors in large industrial installations\
                    Individual conductors connect the MET to gas installation pipework, water installation pipework and extraneous \
                    steel framework of the building. Each conductor is concealed at various parts along their runs. All connections are \
                    remote from the MET.",
        Question: "What would be the maximum expected reading for the connection to the gas, where the conductor is a 10 sq.mm calbe\
                    having a length of 17 m, when tested on the pipe after the clamp ?",
            options: [
            {id: 'a', text: "0.03 ohm."},
            {id: 'b', text: "0.05 ohm."},
            {id: 'c', text: "0.08 ohm."},
            {id: 'd', text: "1.05 ohm."},,
        ],
        correctAnswer: 'c',
        explanation: 'According to GN 3, resistance of clamp connection to the pipe = 0.05 ohms. GN 3, Appendix B suggests that 10 sq.mm\
                      conductor is 1.83 mOhms/m. So, (1.83X17)/1000 = 0.03 + 0.05 = 0.08 ohms',
  },

  {
        id:25 ,
        scenario: "An insulation resistance test is to be carried out on an existing 230 V single-phase distribution board which supplies ten \
                   general purpose lighting circuits in an office. The lighting circuits all have modular luminaires controlled by the modular switches",
        Question: " What voltage is applied for this test?",
            options: [
            {id: 'a', text: "50 V."},
            {id: 'b', text: "250 V."},
            {id: 'c', text: "500 V."},
            {id: 'd', text: "1000 V."},,
        ],
        correctAnswer: 'c',
        explanation: 'As detailed in BS 7671(Table 61) , the test voltage applied to circuits operating at vlotages up o 500 V, other than\
                       SELV or PELV, are tsted using 500 V DC.',
  },

  
{
        id:26 ,
        scenario: "An insulation resistance test is to be carried out on an existing 230 V single-phase distribution board which supplies ten \
                   general purpose lighting circuits in an office. The lighting circuits all have modular luminaires controlled by the modular switches",
        Question: " How is the test undertaken, to minimize disconnection of luminaires, following isolation of the supply ?",
            options: [
            {id: 'a', text: "At DB: all breaker and switches closed: test live to earth."},
            {id: 'b', text: "At DB: all circuit breakers and switches open: test live to earth."},
            {id: 'c', text: "At DB: all circuit breakers and switches open: test line to neutral."},
            {id: 'd', text: "At DB: all circuit breakers and switches closed: test line to neutral."},,
        ],
        correctAnswer: 'a',
        explanation: 'The test is conducted in DB with all circuit breakers closed, to test all circuits together, and all switches closed,\
                       to test entire circuits. The test is undertaken between live(line and neutral together, the risk of damage to luninaires\
                       is minimized as well as the likelihood of getting a low reading due to the connected luminaires',
  },


  {
        id:27,
        scenario: "An insulation resistance test is to be carried out on an existing 230 V single-phase distribution board which supplies ten \
                   general purpose lighting circuits in an office. The lighting circuits all have modular luminaires controlled by the modular switches",
        Question: " What two factors could cause an insulation resistance value to reduce?",
            options: [
            {id: 'a', text: "Short circuit lengths: fewer parallel circuits."},
            {id: 'b', text: "Long circuit lengths: fewer parallel circuits."},
            {id: 'c', text: "Short circuit lengths: many parallel circuits."},
            {id: 'd', text:  "Long circuit lengths: many parallel circuits."},,
        ],
        correctAnswer: 'd',
        explanation: 'The longer the circuit run is, and the more circuits are in parallel to each other, the lower the insulation resistance gets',
  },

   {
        id: 28,
        scenario: "An insulation resistance test is to be carried out on an existing 230 V single-phase distribution board which supplies ten \
                   general purpose lighting circuits in an office. The lighting circuits all have modular luminaires controlled by the modular switches",
        Question: "What would be the most appropriate action should a low overall reading be obtained?",
            options: [
            {id: 'a', text: "Close all circuit breakers and test at the other end of each circuit."},
            {id: 'b', text: "Open all circuit breakers and test all lines and earths together to neutral."},
            {id: 'c', text: "Open all circuit breakers and test individual circuit lives to earth."},
            {id: 'd', text:  "Close all circuit breakers and test live to earth on the supply side of the main switch."},
        ],
        correctAnswer: 'c',
        explanation: 'If a low value is obtained, the individual circuits should be tested to try and establish that one circuit may be casing the low reading.',
  },


{
        id: 29,
        scenario: "An insulation resistance test is to be carried out on an existing 230 V single-phase distribution board which supplies ten \
                   general purpose lighting circuits in an office. The lighting circuits all have modular luminaires controlled by the modular switches",
        Question: "What should the results of this test be compared with to establish if deterioration is occurring?",
            options: [
            {id: 'a', text: "Table 41.2 of BS 7671."},
            {id: 'b', text: "Table 41.4 of BS 7671."},
            {id: 'c', text: "Manufacturer's data."},
            {id: 'd', text:  "Previous test results."},
        ],
        correctAnswer: 'd',
        explanation: 'In order to establish if deterioration is occurring, the results would be compared with previous results to see if values have reduced',
  },

   {
        id: 30,
            scenario: "A test is to be carried out on an earth electrode providing the means of earthing for a barn which is to be converted.\
                       The supply to the barn is currently unavailable. The electrode is a 3 m rod type electrode.",
        Question: "What test instrument is used for this test?",
            options: [
            {id: 'a', text: "Low resistance ohmmeter."},
            {id: 'b', text: "Earth fault loop impedance tester."},
            {id: 'c', text: "Earth electrode resistance tester."},
            {id: 'd', text:  "Applied voltage induction tester."},
        ],
        correctAnswer: 'c',
        explanation: 'As no supply is present, the test must be undertaken using an earth electrode resistance tester. If the supply was available,\
                      the test could be carried out using an earth loop impedance tester. An instrument that uses test coils is an alternative, but\
                      this option was not given in the question',
  },


  {
        id: 31,
        scenario: "A test is to be carried out on an earth electrode providing the means of earthing for a barn which is to be converted.\
                   The supply to the barn is currently unavailable. The electrode is a 3 m rod type electrode.",
        Question: "What overall distance does Guidance Note 3 suggest positioning the current test electrode?",
            options: [
            {id: 'a', text: "10 m."},
            {id: 'b', text: "20 m."},
            {id: 'c', text: "25 m."},
            {id: 'd', text:  "30 m."},
        ],
        correctAnswer: 'd',
        explanation: 'The current test electrode (C2) should be positioned 10 x the earth electrode length away from the earth electrode.\
         As the earth electrode being tested is 3 m long, then:10 X 3 = 30 m',
  },

  {
        id:32 ,
        scenario: "A test is to be carried out on an earth electrode providing the means of earthing for a barn which is to be converted.\
                   The supply to the barn is currently unavailable. The electrode is a 3 m rod type electrode.",
        Question: "How many readings should be taken ?",
            options: [
            {id: 'a', text: "2."},
            {id: 'b', text: "3."},
            {id: 'c', text: "4."},
            {id: 'd', text:  "5."},
        ],
        correctAnswer: 'b',
        explanation: 'Guidance Note 3 (2.6.13) suggests that three readings are taken',
  },

  {
        id:33 ,
        scenario: "A test is to be carried out on an earth electrode providing the means of earthing for a barn which is to be converted.\
                     The supply to the barn is currently unavailable. The electrode is a 3 m rod type electrode.",
        Question: " What would be the maximum permitted overall reading if theinstallation is protected by a 300 mA RCD ?",
            
            options: [
            {id: 'a', text: "1667 ohms."},
            {id: 'b', text: "500 ohms."},
            {id: 'c', text: "167 ohms."},
            {id: 'd', text:  "100 ohms."},
        ],
        correctAnswer: 'c',
        explanation: 'By using Table 41.5 of BS 7671, or by calculation, the maximum permissible value is 50/0.3=167 ohms',
  },
  
  {
        id:34 ,
        scenario: "A test is to be carried out on an earth electrode providing the means of earthing for a barn which is to be converted.\
                    The supply to the barn is currently unavailable. The electrode is a 3 m rod type electrode.",   
        Question: "What is the recommended percentage deviation of the reading obtained?",
            options: [
            {id: 'a', text: "5%."},
            {id: 'b', text: "4%."},
            {id: 'c', text: "3%."},
            {id: 'd', text:  "2%."},
        ],
        correctAnswer: 'a',
        explanation: 'Guidance Note 3 (2.6.13) suggests that it is inadvisable to accept readings that deviate more than 5 % from the average taken',
  },

  {
        id: 35,
        scenario: "",
        Question: "What must be disconnected before a test is carried out to establish external earth fault loop impedance??",
            options: [
            {id: 'a', text: "The supply and earthing conductor."},
            {id: 'b', text: "The bonding and earthing conductor."},
            {id: 'c', text: "All power circuits and their cpcs (circuit protective conductors)."},
            {id: 'd', text:  "All lighting circuits and their cpcs (circuit protective conductors)."},
        ],
        correctAnswer: 'a',
        explanation: 'For this test to be carried out safely, the supply must be disconnected before the earthing conductor is disconnected from the MET.\
                      the reson the conductor is disconnected is to remove possible parallel paths to establish a reliable reading',                 
  }, 

  {
        id: 36,
        scenario: "",
        Question: "What is the maximum disconnection time for an RCD to	BS EN 61008 when tested at 1 x lΔN?",
            options: [
            {id: 'a', text: "40 ms."},
            {id: 'b', text: "200 ms."},
            {id: 'c', text: "300 ms."},
            {id: 'd', text:  "400 ms."},
        ],
        correctAnswer: 'c',
        explanation: 'Table 3A of Appendix 3 in BS 7671 gives the time current performances for RCDs, and a test at its residual current rating requires\
                      a disconnection within 300 milliseconds',
  },


  {
        id: 37,
        scenario: "",
        Question: " What is the maximum permitted value of measured earth fault loop impedance for a 20 A radial power final-circuit protected by a BS 88-2 system E fuse?",
            options: [
            {id: 'a', text: "1.34 ohms."},
            {id: 'b', text: "1.75 ohms."},
            {id: 'c', text: "2.24 ohms."},
            {id: 'd', text:  "3.2  ohms."},
        ],
        correctAnswer: 'a',
        explanation: 'Table 41.2 of BS 7671 gives maximum permissible value as 1.68 ohms, at operating temperatures, for circuits having a disconnection time of 0.4 seconds.\
                      The maximum measured value should not exceed 80 % of this when measured at normal temperatures so: 1.68 X 0.8 = 1.34 ohms',
  },

  {
        id:38,
        scenario: "",
        Question: "What is the maximum permissible value of voltage drop for a 230 V  power circuit?",
            options: [
            {id: 'a', text: "3 V."},
            {id: 'b', text: "5 V."},
            {id: 'c', text: "6.9 V."},
            {id: 'd', text:  "11.5 V."},
        ],
        correctAnswer: 'd',
        explanation: 'The maximum permissible voltage drop for a power circuit is 5 % of the supply voltage so:230 X 0.05 = 11.5 V',
  },


  {
        id:39 ,
        scenario: "",   
        Question: " When should the integral test button on an RCD be operatedduring a periodic test?",
            options: [
            {id: 'a', text: "Before all tests."},
            {id: 'b', text: "After instrument tests."},
            {id: 'c', text: "When the supply is isolated."},
            {id: 'd', text:  "During inspection and before testing."},
        ],
        correctAnswer: 'b',
        explanation: 'Operating the test button can influence test results as RCD disconnection times can improve with operation so to get a true reflection of\
                      the RCD receives, all test using the test instrument should be carried out before the operation of the test button',
  },


{
        id: 40,
        scenario: "",
        Question: " How Regularly should the test button on  an RCD be operated by the user of an installation?",
            options: [
            {id: 'a', text: "Every six days."},
            {id: 'b', text: "Every three months."},
            {id: 'c', text: "Every six months."},
            {id: 'd', text:  "Every three years."},
        ],
        correctAnswer: 'c',
        explanation: 'A notice should be present at every RCD stating that the RCD test button should be operated six monthly which, incidentally,\
         coincides with the changing of clocks for day light saving',
  },

  {
        id:41 ,
        scenario: "",
        Question: "What needs to be verified during the inspection of a new installation ?",
            
            options: [
            {id: 'a', text: "Fixed installation has not deteriorated."},
            {id: 'b', text: "Fixed installation is correctly selected."},
            {id: 'c', text: "Electrical equipment has not degraded."},
            {id: 'd', text:  "Electrical appliances comply with BS 7671."},
        ],
        correctAnswer: 'b',
        explanation: '',
  },

  {
        id: 42 ,
        scenario: "",
        Question: "What process involves checking if an installation has deteriorated ?",
            
            options: [
            {id: 'a', text: "Condition inspection."},
            {id: 'b', text: "Initial Verification."},
            {id: 'c', text: "Periodic Inspection and Testing."},
            {id: 'd', text:  "Initial Inspection and Testing."},
        ],
        correctAnswer: 'c',
        explanation: '',
  },

  {
        id: 43,
        scenario: "",
        Question: "What document must be issued following the installation of a new cooker circuit to an existing installation ?",
            
            options: [
            {id: 'a', text: "Electrical installation Report."},
            {id: 'b', text: "Electrical Installation Certificate."},
            {id: 'c', text: "Electrical Installation Condition Report."},
            {id: 'd', text:  "Minor Electrical Installation Works Certificate."},
        ],
        correctAnswer: 'b',
        explanation: '',
  },


{
        id: 44,
        scenario: "",
        Question: " What circumstance would require an Electrical Installation Condition Report to be issued?",
            
            options: [
            {id: 'a', text: "Remedial work has been carried out."},
            {id: 'b', text: "New occupier moving into a flat."},
            {id: 'c', text: "Supermarket has been rewired."},
            {id: 'd', text:  "New luminaires have been installed."},
        ],
        correctAnswer: 'b',
        explanation: '',
  },

  {
        id: 45,
        scenario: "Refurbishment of a leisure center with a swimming pool is taking place. An additional lighting circuit is to be installed.\
                   The new lights will be at a height of 2.4m above the pool.",
        Question: "What document must be completed following inspection and testing?",
            
            options: [
            {id: 'a', text: "Electrical Installation Certificate."},
            {id: 'b', text: "Schedule of Electrical Condition."},
            {id: 'c', text: "Electrical Installation Condition Report."},
            {id: 'd', text:  "Minor Electrical Installation Works Certificate."},
        ],
        correctAnswer: 'a',
        explanation: '',
  },

   {
        id: 46,
        scenario: "Refurbishment of a leisure center with a swimming pool is taking place. An additional lighting circuit is to be installed.\
                   The new lights will be at a height of 2.4m above the pool.",
        Question: "Which non-statutory document directly relates to the process of inspection and testing?",
            
            options: [
            {id: 'a', text: "ESQCR."},
            {id: 'b', text: "GS38."},
            {id: 'c', text: "GN3."},
            {id: 'd', text:  "EAWR."},
        ],
        correctAnswer: 'c',
        explanation: '',
  },

  {
        id: 47,
        scenario: "Refurbishment of a leisure center with a swimming pool is taking place. An additional lighting circuit is to be installed.\
                   The new lights will be at a height of 2.4m above the pool.",
        Question: "Document must the Inspector use to record the new lighting circuit reference method?",
            
            options: [
            {id: 'a', text: "Schedule of Circuit Detail/Test Results."},
            {id: 'b', text: "Schedule of Inspections."},
            {id: 'c', text: "Electrical Installation Schedule."},
            {id: 'd', text:  "Electrical Installation Certificate."},
        ],
        correctAnswer: 'a',
        explanation: '',
  },

  {
        id: 48,
        scenario: "Refurbishment of a leisure center with a swimming pool is taking place. An additional lighting circuit is to be installed.\
                   The new lights will be at a height of 2.4m above the pool.",
        Question: "What would be the most appropriate human sense to use when inspecting the IP rating of the new lights??",
            
            options: [
            {id: 'a', text: "Hearing."},
            {id: 'b', text: "Touch."},
            {id: 'c', text: "Smell."},
            {id: 'd', text:  "Sight."},
        ],
        correctAnswer: 'd',
        explanation: '',
  },

  {
        id: 49,
        scenario: "Refurbishment of a leisure center with a swimming pool is taking place. An additional lighting circuit is to be installed.\
                   The new lights will be at a height of 2.4m above the pool.", 
        Question: "What is the minimum IP rating required for the new lights??",
            
            options: [
            {id: 'a', text: "IPX8."},
            {id: 'b', text: "IPX5."},
            {id: 'c', text: "IPX4."},
            {id: 'd', text:  "IPX2."},
        ],
        correctAnswer: 'c',
        explanation: '',
  },

  {
        id: 50,
        scenario: "Refurbishment of a leisure center with a swimming pool is taking place. An additional lighting circuit is to be installed.\
                   The new lights will be at a height of 2.4m above the pool.",
        Question: " What would be the most appropriate action to take if the new lights do not comply with the minimum IP rating? ?",
            
            options: [
            {id: 'a', text: "Record on the Schedule of Inspections."},
            {id: 'b', text: "Rectify the issue and re-inspect."},
            {id: 'c', text: "Notify the client without delay."},
            {id: 'd', text:  "Record on the Electrical Installation Certificate."},
        ],
        correctAnswer: 'b',
        explanation: '',
  },
 
  {
        id: 51,
            scenario: "Refurbishment of a leisure center with a swimming pool is taking place. An additional lighting circuit is to be installed.\
                   The new lights will be at a height of 2.4m above the pool.",
        Question: " Which test must be carried out before earth fault loop impedance to ensure the installation is safe to emerges??",
            
            options: [
            {id: 'a', text: "Prospective Fault current."},
            {id: 'b', text: "Supply polarity."},
            {id: 'c', text: "Residual current device."},
            {id: 'd', text:  "Voltage drop."},
        ],
        correctAnswer: 'b',
        explanation: '',
  },

  {
        id: 52,
        scenario: "The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment license\
                    application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which\
                     there are no test results available.",
        Question: "Where must the Extent and Limitations of inspection and testing be recorded? ?",
            
            options: [
            {id: 'a', text: "Periodic Inspection Report Certificate."},
            {id: 'b', text: "Electrical Installation Condition Report."},
            {id: 'c', text: "Generic Schedule of Test Results."},
            {id: 'd', text:  "Electrical Installation Certificate."},
        ],
        correctAnswer: 'b',
        explanation: '',
  },

  {
        id: 53,
        scenario: "The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment license\                    application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which\
                   application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which\
                   there are no test results available.",
        Question: " Who will be involved in setting the sampling size for this installation?",
            
            options: [
            {id: 'a', text: "HSE, Inspector and Local Authority."},
            {id: 'b', text: "Inspector, Client and HSE."},
            {id: 'c', text: "Inspector, Client and Local Authority."},
            {id: 'd', text:  "Client, Local Authority and HSE."},
        ],
        correctAnswer: 'c',
        explanation: '',
  },

  {
        id: 54,
        scenario: "The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment license\                    application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which\
                    application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which\
                    there are no test results available.",
        Question: "What action should be taken with regard to the additional socket-outlet circuits ?",
            
            options: [
            {id: 'a', text: "Both should be sampled to check compliance with BS 7671."},
            {id: 'b', text: "One should be sampled to check compliance with BS 7671."},
            {id: 'c', text: "Both should be fully tested to check compliance with BS 7671."},
            {id: 'd', text:  "One should be fully inspected to check compliance with BS 7671."},
        ],
        correctAnswer: 'c',
        explanation: '',
  },

  {
        id: 55,
        scenario: "The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment license\
                    application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which\
                     there are no test results available.",
        Question: "Which test can be carried out without the use of GS38 compliant test leads ?",
            
            options: [
            {id: 'a', text: "Residual current device."},
            {id: 'b', text: "Prospective fult current."},
            {id: 'c', text: "Earth fault loop impedance."},
            {id: 'd', text:  "continuity of protective conductors."},
        ],
        correctAnswer: 'd',
        explanation: '',
  },

  {
        id: 56,
        scenario: "The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment license\
                    application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which\
                     there are no test results available.",
        Question: "Which test may be unnecessary on any existing ring-final circuits, for which previous test records are available?",
            
            options: [
            {id: 'a', text: "Earth fault loop impedance."},
            {id: 'b', text: "Ring-final circuit continuity."},
            {id: 'c', text: "Insulation resistance."},
            {id: 'd', text:  "Socket-outlet circuit continuity."},
        ],
        correctAnswer: 'b',
        explanation: '',
  },

  {
        id: 57,
        scenario: "The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested.\
                   The 10 mm2 conductor is 43m long.\
                   The installation has been safely isolated for this test.",
        Question: "What is the purpose of carrying out this test ?",
            
            options: [
            {id: 'a', text: "To confirm a requirement of ADS has been met."},
            {id: 'b', text: "To confirm exposed conductive parts are earthed."},
            {id: 'c', text: "To confirm extraneous conductive parts are present."},
            {id: 'd', text:  "To confirm electrical separation has been met."},
        ],
        correctAnswer: 'a',
        explanation: '',
  },

  {
        id: 58,
        scenario: "The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested.\
                   The 10 mm2 conductor is 43m long.\
                   The installation has been safely isolated for this test.",
        Question: " What instrument is to be used to carry out this test ?",
            
            options: [
            {id: 'a', text: "Low Resistance ohmmeter."},
            {id: 'b', text: "Prospective fault current tester."},
            {id: 'c', text: "Insulation resistance tester."},
            {id: 'd', text:  "Approved voltage indicator."},
        ],
        correctAnswer: 'a',
        explanation: '',
  },


  {
        id: 59,
        scenario: "The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested.\
                   The 10 mm2 conductor is 43m long.",
        Question: "Why must the installation remain safely isolated whilst this test is carried out?",
            
            options: [
            {id: 'a', text: "To remove the parallel path."},
            {id: 'b', text: "To remove the risk of electric shock."},
            {id: 'c', text: "To include parallel paths."},
            {id: 'd', text:  "To ensure accurate test results."},
        ],
        correctAnswer: 'b',
        explanation: '',
  },

  {
        id: 60,
        scenario: "The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested.\
                   The 10 mm2 conductor is 43m long.",
        Question: "Which additional piece of test equipment will be required for this test ?",
            
            options: [
            {id: 'a', text: "Proving unit."},
            {id: 'b', text: "Earth Electrode."},
            {id: 'c', text: "Rotating disc."},
            {id: 'd', text:  "Wander Lead."},
        ],
        correctAnswer: 'd',
        explanation: '',
  },

  {
    id: 61,
    scenario: "The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested.\
               The 10 mm2 conductor is 43 m long.",
    Question: "What is the only outcome that can be recorded on the Schedule of Inspections for this conductor? ",
    options: [
        {
            id: "a",
            text: "Tick "
        },
        {
            id: "b",
            text: "N/A"
        },
        {
            id: "c",
            text: "N/V "
        },
        {
            id: "d",
            text: "Lim "
        }
    ],
    correctAnswer: "a",
    explanation: ""
},


{
        id: 62,
       scenario: "The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested.\
                   The 10 mm2 conductor is 43m long.",     
        Question: "...is the expected measured conductor resistance value ?",
            
            options: [
            {id: 'a', text: "0.08 Ω."},
            {id: 'b', text: "0.12 Ω."},
            {id: 'c', text: "0.00 Ω."},
            {id: 'd', text:  "0.05 Ω."},
        ],
        correctAnswer: 'a',
        explanation: '',
  },

  {
        id: 63,
        scenario: "The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested.\
                   The 10 mm2 conductor is 43m long.",
        Question: "Which risk to other persons must be managed when correctly undertaking this test?",
            
            options: [
            {id: 'a', text: "Sharp edges."},
            {id: 'b', text: "Trip hazard."},
            {id: 'c', text: "Electrical shock."},
            {id: 'd', text:  "Burfns Risk."},
        ],
        correctAnswer: 'b',
        explanation: '',
  },


 {
        id: 64,
        scenario: "Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery.\
                   The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32A.\
                    The installation forms part of a public 400/230 V TN-S systeem.",
        Question: "What is the purpose of this test?",
            
            options: [
            {id: 'a', text: "To confirm the oven will not overload the circuit."},
            {id: 'b', text: "To confirm the cable will sta within temperature parameters."},
            {id: 'c', text: "To confirm the protective device will operate correctly."},
            {id: 'd', text:  "To confirm the function of the oven will not be impaired."},
        ],
        correctAnswer: 'd',
        explanation: '',
  },

  {
        id: 65,
        scenario: "Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery.\
                   The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32A.\
                    The installation forms part of a public 400/230 V TN-S systeem.",
        Question: "What instrument is used for this test?",
            
            options: [
            {id: 'a', text: "Low Resistance ohmmeter."},
            {id: 'b', text: "Multi-meter."},
            {id: 'c', text: "Approved voltage indicator."},
            {id: 'd', text:  "PFC tester."},
        ],
        correctAnswer: 'a',
        explanation: '',
  },

    {
   id: 66,
   scenario: "Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery.\
                   The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32A.\
                    The installation forms part of a public 400/230 V TN-S systeem.",
        Question: "What is the maximum percentage voltage drop allowed for this circuit?",
            
            options: [
            {id: 'a', text: "8%."},
            {id: 'b', text: "5%."},
            {id: 'c', text: "3%."},
            {id: 'd', text:  "6%."},
        ],
        correctAnswer: 'b',
        explanation: '',
  },

  {
     id: 67,
     scenario: "Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery.\
                   The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32A.\
                    The installation forms part of a public 400/230 V TN-S systeem.",
     Question: "What is the calculated value of voltage drop?",
            
            options: [
            {id: 'a', text: "14.8 V."},
            {id: 'b', text: "11.8 V."},
            {id: 'c', text: "13.5 V."},
            {id: 'd', text:  "14.2 V."},
        ],
        correctAnswer: 'd',
        explanation: '',
  },

  {
         id: 68,
        scenario: "Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery.\
                     The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32A.\
                        The installation forms part of a public 400/230 V TN-S systeem.",
        Question: "What is the most appropriat outcome based on the value of voltage drop?",
            
            options: [
            {id: 'a', text: "Lim."},
            {id: 'b', text: "C1."},
            {id: 'c', text: "C2."},
            {id: 'd', text:  "C3."},
        ],
        correctAnswer: 'd',
        explanation: '',
  },

   {
        id: 69,
        scenario: "The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation\
                   form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898.",
        Question: "What would be the effect of reversed Line-Neutral supply polarity?",
            
            options: [
            {id: 'a', text: "Circuit breakers will not disconnect an earth fault loop."},
            {id: 'b', text: "Single-pole switches will not control the load."},
            {id: 'c', text: "Equipment will not function correctly."},
            {id: 'd', text:  "Motors will spin in reverse direction."},
        ],
        correctAnswer: 'a',
        explanation: '',
  },

  {
        id: 70,
        scenario: "The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation\
                   form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898.",
        Question: "What instrument is used to carry out this test?",
            
            options: [
            {id: 'a', text: "Insulation resistance tester."},
            {id: 'b', text: "Low resistance ohmmeter."},
            {id: 'c', text: "Phase rotation test instrument."},
            {id: 'd', text:  "Approved voltage indicator."},
        ],
        correctAnswer: 'b',
        explanation: '',
  },

   {
    id:71,
    scenario: "The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation\
                form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898.",
                   
    Question: "What instrument safety check must be made before carrying out this test?",
    options: [
      {
        id: "a",
        text: "Check compliance with GS38.  "
      },
      {
        id: "b",
        text: "Check instrument within calibration."
      },
      {
        id: "c",
        text: "Check operation on a proving unit. "
      },
      {
        id: "d",
        text: "Check battery level."
      }
    ],
    correctAnswer: "a",
    explanation: ""
  },

  {
    id:72,
    scenario: "The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation\
               form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898.",
    Question: "What voltages are to be expected if the polarity is correct?",
    options: [
      {
        id: "a",
        text: "L-N Zero V, L-E 230 V, N-E 230 V"
      },
      {
        id: "b",
        text: "L-N 230 V, L-E Zero V, N-E Zero V "
      },
      {
        id: "c",
        text: "L-N Zero V, L-E Zero V, N-E 230 V"
      },
      {
        id: "d",
        text: "L-N 230 V, L-E 230 V, N-E Zero V  "
      }
    ],
    correctAnswer: "d",
    explanation: ""
  },

   {
    id: 73,
    scenario: "The supply polarity of a restaurant is to be tested as part of a periodic inspection and test.\
               The supply and installation form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898",
    Question: "Why may the testing of circuit polarity be unnecessary?",
    options: [
      {
        id: "a",
        text: "Alterations have been carried out."
      },
      {
        id: "b",
        text: "No changes have been made.  "
      },
      {
        id: "c",
        text: "Additions have been installed"
      },
      {
        id: "d",
        text: "High Zs value has been recorded."
      }
    ],
    correctAnswer: "b",
    explanation: ""
  },

    {
    id: 74,
    scenario: "",
    Question: "The catering unit is permanently sited and infrequently moved. What would this information help the inspector to determine?",
    options: [
      {
        id: "a",
        text: "The number of RCD tests required."
      },
      {
        id: "b",
        text: "The amount of sampling required.  "
      },
      {
        id: "c",
        text: "The number of circuits to be tested. "
      },
      {
        id: "d",
        text: "The condition of the cables."
      }
    ],
    correctAnswer: "b",
    explanation: ""
  },

  {
    id: 75,
    scenario: "",
    Question: "What needs to be verified with regard to the mobile catering consumer unit?",
    options: [
      {
        id: "a",
        text: "The bottom horizontal surface complies with IP4X."
      },
      {
        id: "b",
        text: "The enclosure is made of polycarbonate."
      },
      {
        id: "c",
        text: "The RCD main switch is rated at ≥ 63 A."
      },
      {
        id: "d",
        text: "The top horizontal surface complies with IP4X.  "
      }
    ],
    correctAnswer: "d",
    explanation: ""
  },

   {
    id: 76,
    scenario: "",
    Question: "What is the maximum test current applied to the RCD to confirm that fault protection is provided?",
    options: [
      {
        id: "a",
        text: "300 mA"
      },
      {
        id: "b",
        text: "60 mA"
      },
      {
        id: "c",
        text: "30 mA"
      },
      {
        id: "d",
        text: "15 mA"
      }
    ],
    correctAnswer: "c",
    explanation: ""
  },

    {
    id: 77,
    scenario: "",
    Question: "What is the maximum operating time of the RCD, when tested using a test current equal to the residual current rating?",
    options: [
      {
        id: "a",
        text: "300 ms"
      },
      {
        id: "b",
        text: "150 ms"
      },
      {
        id: "c",
        text: "40 ms"
      },
      {
        id: "d",
        text: "200 ms"
      }
    ],
    correctAnswer: "a",
    explanation: ""
  },

    {
    id: 78,
    scenario: "",
    Question: "The RCD is found to not operate at any test current. What is the most appropriate classification code to record?",
    options: [
      {
        id: "a",
        text: "F1"
      },
      {
        id: "b",
        text: "C1"
      },
      {
        id: "c",
        text: "C3"
      },
      {
        id: "d",
        text: "C2"
      }
    ],
    correctAnswer: "d",
    explanation: ""
  },

  {
    id: 79,
    scenario: "",
    Question: "What additional action must the inspector take regarding this observation?",
    options: [
      {
        id: "a",
        text: "Remove the portable generator until fault fixed"
      },
      {
        id: "b",
        text: "Inform the insurer in writing without delay."
      },
      {
        id: "c",
        text: "Inform the client in writing without delay. "
      },
      {
        id: "d",
        text: "Isolate the installation and prevent re-energizing."
      }
    ],
    correctAnswer: "c",
    explanation: ""
  },

   {
    id: 80,
    scenario: "Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse.\
               These circuits are supplied from a new single-phase, five way DB. Switching for each circuit is by 230 V contactors.\
               Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation\
               form a 400 V three-phase TN-C-S system.",
    Question: "What is the correct way to prepare one of these circuits for testing?",
    options: [
      {
        id: "a",
        text: "Switch on lights, connect cpc, un-plug lights."
      },
      {
        id: "b",
        text: "Switch on lights, disconnect cpc, plug-in lights."
      },
      {
        id: "c",
        text: "Bypass contactors, connect cpc, un-plug lights.  "
      },
      {
        id: "d",
        text: "Bypass contactors, disconnect cpc, plug-in lights."
      }
    ],
    correctAnswer: "c",
    explanation: ""
  },

  {
    id: 81,
    scenario: " Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse.\
               These circuits are supplied from a new single-phase, five way DB. Switching for each circuit is by 230 V contactors.\
               Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation\
               form a 400 V three-phase TN-C-S system.",
    Question: "What affects the insulation resistance of each circuit tested?",
    options: [
      {
        id: "a",
        text: "The csa and number of conductors."
      },
      {
        id: "b",
        text: "The csa and purpose of conductors."
      },
      {
        id: "c",
        text: "The number and the purpose of conductors.   "
      },
      {
        id: "d",
        text: "The number and length of conductors."
      }
    ],
    correctAnswer: "c",
    explanation: ""
  },

   {
    id: 82,
    scenario: "Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse.\
               These circuits are supplied from a new single-phase, five way DB. Switching for each circuit is by 230 V contactors.\
               Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation\
               form a 400 V three-phase TN-C-S system.",
    Question: "What is the legal status of the inspector?",
    options: [
      {
        id: "a",
        text: "Competent"
      },
      {
        id: "b",
        text: "Ordinary"
      },
      {
        id: "c",
        text: "Skilled"
      },
      {
        id: "d",
        text: "Instructed"
      }
    ],
    correctAnswer: "a",
    explanation: ""
  },

   {
    id: 83,
    scenario: "Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse.\
               These circuits are supplied from a new single-phase, five way DB. Switching for each circuit is by 230 V contactors.\
               Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation\
               form a 400 V three-phase TN-C-S system.",
    Question: "What condition can be detected during the insulation resistance test?",
    options: [
      {
        id: "a",
        text: "Degradation of cable insulation."
      },
      {
        id: "b",
        text: ".  Damage to cable insulation."
      },
      {
        id: "c",
        text: "Deterioration of cable insulation. "
      },
      {  
        id: "d",
        text: "De-rating of cable insulation."
      }
    ],
    correctAnswer: "b",
    explanation: ""
  },

   {
    id: 84,
    scenario: "Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse.\
               These circuits are supplied from a new single-phase, five way DB. Switching for each circuit is by 230 V contactors.\
               Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation\
               form a 400 V three-phase TN-C-S system.",
    Question: "The following test results were recorded. Calculate the total IR between Live and Earth for all circuits\
               Lights 1: Live-Live = 190 MΩ, Live-Earth = 176 MΩ\
               Lights 2: Live-Live = 187 MΩ, Live-Earth = 20 MΩ\
               Lights 3: Live-Live = 157 MΩ, Live-Earth = 162 MΩ\
               Lights 4: Live-Live = 122 MΩ, Live-Earth = 134 MΩ\
               Lights 5: Live-Live = 172 MΩ, Live-Earth = 178 MΩ",
    options: [
      {
        id: "a",
        text: "134 MΩ"
      },
      {
        id: "b",
        text: "13 MΩ"
      },
      {
        id: "c",
        text: "20 MΩ"
      },
      {
        id: "d",
        text: "178 MΩ"
      }
    ],
    correctAnswer: "b",
    explanation: ""
  },

    {
    id: 85,
    scenario: "Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse.\
               These circuits are supplied from a new single-phase, five way DB. Switching for each circuit is by 230 V contactors.\
               Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation\
               form a 400 V three-phase TN-C-S system.",
    Question: "What is the test voltage applied during the insulation resistance test? ",
    options: [
      {
        id: "a",
        text: "250 VAC"
      },
      {
        id: "b",
        text: "500 VDC"
      },
      {
        id: "c",
        text: "500 VAC"
      },
      {
        id: "d",
        text: "250 VDC"
      }
    ],
    correctAnswer: "b",
    explanation: ""
  },

  {
    id: 86,
    scenario: "Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse.\
               These circuits are supplied from a new single-phase, five way DB. Switching for each circuit is by 230 V contactors.\
               Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation\
               form a 400 V three-phase TN-C-S system.",
    Question: "What would be the most appropriate action to take if the result for lighting circuit 1 is 0.95 MΩ between live conductors?",
    options: [
      {
        id: "a",
        text: "Investigate lighting circuit 1 between Line-Neutral."
      },
      {
        id: "b",
        text: "Investigate lighting circuit 1 between Line-Earth."
      },
      {
        id: "c",
        text: "Record the result as a non-compliance."
      },
      {
        id: "d",
        text: ".  Record the result as acceptable"
      }
    ],
    correctAnswer: "a",
    explanation: ""
  },

  {
    id: 87,
    scenario: "A section of galvanized trunking is to be inspected as part of periodic inspection and testing of a factory.\
               The trunking contains unsheathed low voltage cables.",
    Question: "What is the minimum IP rating for the bottom horizontal surface of the trunking?",
    options: [
      {
        id: "a",
        text: "IPXXB"
      },
      {
        id: "b",
        text: "IP2X"
      },
      {
        id: "c",
        text: "IPX4"
      },
      {
        id: "d",
        text: "IPXXD"
      }
    ],
    correctAnswer: "d",
    explanation: ""
  },

  {
    id: 88,
    scenario: "A section of galvanized trunking is to be inspected as part of periodic inspection and testing of a factory.\
               The trunking contains unsheathed low voltage cables.",
    Question: "Which are the most appropriate human senses to check the security of the trunking lid?",
    options: [
      {
        id: "a",
        text: "Hearing and touch."
      },
      {
        id: "b",
        text: "Smell and hearing."
      },
      {
        id: "c",
        text: "Touch and sight."
      },
      {
        id: "d",
        text: "Sight and smell."
      }
    ],
    correctAnswer: "c",
    explanation: ""
  },

  {
    id: 89,
    scenario: "A section of galvanized trunking is to be inspected as part of periodic inspection and testing of a factory.\
               The trunking contains unsheathed low voltage cables.",
    Question: "What is the most likely reason for carrying out this periodic inspection?",
    options: [
      {
        id: "a",
        text: "New trunking has been installed"
      },
      {
        id: "b",
        text: "New contractors have been appointed."
      },
      {
        id: "c",
        text: "New occupiers have purchased the building.  "
      },
      {
        id: "d",
        text: "New cables have been installed in the trunking."
      }
    ],
    correctAnswer: "c",
    explanation: ""
  },

  {
    id: 90,
    scenario: "",
    Question: "Which test would detect incorrect polarity of the Live conductors at each socket outlet?",
    options: [
      {
        id: "a",
        text: "Line-Neutral at each socket-outlet."
      },
      {
        id: "b",
        text: "Line-Earth at the distribution board."
      },
      {
        id: "c",
        text: "Line-Earth at each socket-outlet.  "
      },
      {
        id: "d",
        text: ".  Line-Neutral at the distribution board."
      }
    ],
    correctAnswer: "c",
    explanation: ""
  },

  {
    id: 91,
    scenario: "",
    Question: "What is the expected measured r1 value?",
    options: [
      {
        id: "a",
        text: "0.32 Ω"
      },
      {
        id: "b",
        text: "0.27 Ω"
      },
      {
        id: "c",
        text: "0.52 Ω"
      },
      {
        id: "d",
        text: "0.43 Ω"
      }
    ],
    correctAnswer: "c",
    explanation: ""
  },

  {
    id: 92,
    scenario: "",
    Question: "What is the expected measured r2 value?",
    options: [
      {
        id: "a",
        text: "0.85 Ω"
      },
      {
        id: "b",
        text: ".  0.70 Ω"
      },
      {
        id: "c",
        text: ".  0.45 Ω"
      },
      {
        id: "d",
        text: ".  0.27 Ω"
      }
    ],
    correctAnswer: "b",
    explanation: ""
  },

  {
    id: 93,
    scenario: "",
    Question: "What pattern of test results is expected at each socket-outlet when the line and cpc conductors are correctly cross-connected?",
    options: [
      {
        id: "a",
        text: "Readings rise to the center and then fall."
      },
      {
        id: "b",
        text: "Readings increase around the ring."
      },
      {
        id: "c",
        text: "Readings are substantially the same. "
      },
      {
        id: "d",
        text: "Readings decrease around the ring."
      }
    ],
    correctAnswer: "c",
    explanation: ""
  },

    {
    id: 94,
    scenario: "",
    Question: "What is the expected measured value at each socket-outlet when the line and neutral conductors are correctly cross-connected?",
    options: [
      {
        id: "a",
        text: "0.13 Ω"
      },
      {
        id: "b",
        text: "0.16 Ω "
      },
      {
        id: "c",
        text: "0.49 Ω"
      },
      {
        id: "d",
        text: "0.22 Ω"
      }
    ],
    correctAnswer: "a",
    explanation: ""
  },

  {
    id: 95,
    scenario: "",
    Question: "What is a simplified way to verify the r1 and r2 ratio for this circuit?",
    options: [
      {
        id: "a",
        text: "r2 = r1 x1.67 "
      },
      {
        id: "b",
        text: "r2 = r1 x2.67 "
      },
      {
        id: "c",
        text: "r1 = r2 x1.67 "
      },
      {
        id: "d",
        text: "r1 = r2 x2.67"
      }
    ],
    correctAnswer: "b",
    explanation: ""
  },

  {
    id: 96,
    scenario: "",
    Question: "What column numbers would be completed on the Schedule of Test Results, detailing the results obtained during the ring-final circuit continuity test?",
    options: [
      {
        id: "a",
        text: "8, 9, 11, 12, 17"
      },
      {
        id: "b",
        text: "8, 9, 10, 11, 12"
      },
      {
        id: "c",
        text: "18, 19, 20, 21, 26"
      },
      {
        id: "d",
        text: "10, 11, 12, 13, 18"
      }
    ],
    correctAnswer: "c",
    explanation: ""
  },

  {
    id: 97,
    scenario: "",
    Question: "What is the expected value of Zs for this circuit if the Ze = 0.29 ohms?",
    options: [
      {
        id: "a",
        text: "0.24 Ω "
      },
      {
        id: "b",
        text: "0.58 Ω"
      },
      {
        id: "c",
        text: "0.28 Ω"
      },
      {
        id: "d",
        text: "0.53 Ω"
      }
    ],
    correctAnswer: "d",
    explanation: ""
  },

  {
    id: 98,
    scenario: "",
    Question: "The measured R1+R2 value for a radial cooker circuit, with a 6 mm2 line conductor and a 2.5 mm2 cpc, is 0.29 Ω. What is the length of this circuit?",
    options: [
      {
        id: "a",
        text: "23m"
      },
      {
        id: "b",
        text: "28m"
      },
      {
        id: "c",
        text: "38m"
      },
      {
        id: "d",
        text: "33m"
      }
    ],
    correctAnswer: "b",
    explanation: ""
  },

  {
    id: 99,
    scenario: "",
    Question: "What value is to be recorded as the earth electrode resistance?\
               Test1: 179 Ω, Test 2: 172 Ω, Test 3: 168 Ω",
    options: [
      {
        id: "a",
        text: "179 Ω"
      },
      {
        id: "b",
        text: "168 Ω"
      },
      {
        id: "c",
        text: "173 Ω"
      },
      {
        id: "d",
        text: "200 Ω"
      }
    ],
    correctAnswer: "c",
    explanation: ""
  },

    {
  id: 100,
    scenario: "",
    Question: "What is the maximum rating of RCD that can be used for fault protection on this installation?\
               Test1: 179 Ω, Test 2: 172 Ω, Test 3: 168 Ω",
    options: [
      {
        id: "a",
        text: "500 mA"
      },
      {
        id: "b",
        text: "300 mA"
      },
      {
        id: "c",
        text: "100 mA"
      },
      {
        id: "d",
        text: "30 mA"
      }
    ],
    correctAnswer: "c",
    explanation: ""
  },

   {
    id: 101,
    scenario: "",
    Question: "What is the purpose of Initial Verification?",
    options: [
      {
        id: "a",
        text: "To confirm the installation is defective or has not deteriorated over time."
      },
      {
        id: "b",
        text: "To confirm that the contractual elements have been undertaken to ISO 9001."
      },
      {
        id: "c",
        text: "To confirm that the Client is satisfied with all the work carried out."
      },
      {
        id: "d",
        text: "To confirm the installation complies with the design or construction aspects of BS 7671"
      }
    ],
    correctAnswer: "d",
    explanation: "GN3 - Section 2.1, para 2, and BS 7671 Reg. 641.1"
  },

  {
    id: 102,
    scenario: "",
    Question: "Why is Periodic Inspection and Testing carried out? ",
    options: [
      {
        id: "a",
        text: "To provide an engineering view that the installation was constructed correctly"
      },
      {
        id: "b",
        text: "To provide proof that all additions to the installation comply with current regulations "
      },
      {
        id: "c",
        text: "To provide proof that an installation complies with current regulations"
      },
      {
        id: "d",
        text: "To provide an engineering view that an installation can continue to be used safely"
      }
    ],
    correctAnswer: "d",
    explanation: "GN3, Section 3.1, para 1, and BS 7671 Reg. 651.1"
  },

   {
    id: 103,
    scenario: "",
    Question: "What situation would require the issue of an Electrical Installation Condition Report? ",
    options: [
      {
        id: "a",
        text: "Changing a building use from a house to a hotel "
      },
      {
        id: "b",
        text: "Changing a radial circuit into a ring-final circuit "
      },
      {
        id: "c",
        text: "The addition of a light to an existing circuit"
      },
      {
        id: "d",
        text: "The installation of a new distribution board"
      }
    ],
    correctAnswer: "a",
    explanation: "GN3, Section 3.2 (c) (iii)"
  },

   {
    id: 104,
    scenario: "",
    Question: "What is the MOST suitable document to be issued by an inspector following the installation of an outdoor socket-outlet supplied from an existing ring-final circuit?",
    options: [
      {
        id: "a",
        text: "Building Controls Certificate to Part P"
      },
      {
        id: "b",
        text: "Minor Electrical Installation Works Certificate"
      },
      {
        id: "c",
        text: "Electrical Installation Certificate"
      },
      {
        id: "d",
        text: "Electrical Installation Condition Report"
      }
    ],
    correctAnswer: "b",
    explanation: "GN3, Section 5.2 explains when a MEIWC would be appropriate"
  },

  {
    id: 105,
    scenario: "",
    Question: "decision does an inspector need to make when undertaking periodic inspection, which is not required during initial verification?",
    options: [
      {
        id: "a",
        text: "The suitability of test instruments"
      },
      {
        id: "b",
        text: "The type of certification to be used"
      },
      {
        id: "c",
        text: "The amount of sampling undertaken"
      },
      {
        id: "d",
        text: "The suitability of test results obtained"
      }
    ],
    correctAnswer: "c",
    explanation: "GN3, Section 3.8.3 comments on setting sample sizes. You cannot use sampling on Initial Verification as this is 100% Inspection and Testing."
  },

  {
    id: 106,
    scenario: "Refurbishment work has been undertaken in a small industrial unit. Two new socket-outlet radial circuits were installed and several luminaires\
              replaced on an existing lighting circuit.  There are no previous records or charts for the electrical installation, so the client requires inspection\
              and testing on the existing circuits.  The unit is currently vacant so the inspector has no restrictions on circuit or installation isolation.\
              The supply and installation form a 230V single-phase TN-C-S system. ",
    Question: "What non-statutory document contains the maximum values of earth fault loop impedance at normal test temperature?",
    options: [
      {
        id: "a",
        text: "BS7671"
      },
      {
        id: "b",
        text: "IET GN3"
      },
      {
        id: "c",
        text: "HSE GS38"
      },
      {
        id: "d",
        text: "EAWR"
      }
    ],
    correctAnswer: "b",
    explanation: "Whilst values are obtained at ambient temperature, the results need to be compared with 'corrected' values, which GN3 contains.\
    Values in BS 7671 (Chapter 41) are for conductor temperatures of 20°C, whereas GN3 accounts for conductor operating temperature of 70°C."
  },

   {
    id: 107,
    scenario: "Refurbishment work has been undertaken in a small industrial unit. Two new socket-outlet radial circuits were installed and several luminaires\
              replaced on an existing lighting circuit.  There are no previous records or charts for the electrical installation, so the client requires inspection\
              and testing on the existing circuits.  The unit is currently vacant so the inspector has no restrictions on circuit or installation isolation.\
              The supply and installation form a 230V single-phase TN-C-S system.",
    Question: "7.What must be carried out due to the lack of records and charts for the existing circuits?",
    options: [
      {
        id: "a",
        text: "Inspection would include cables concealed in walls"
      },
      {
        id: "b",
        text: "Inspection would include dismantling all equipment"
      },
      {
        id: "c",
        text: "Exploratory work is done to determine circuit control"
      },
      {
        id: "d",
        text: "small sample of circuits would be tested first"
      }
    ],
    correctAnswer: "c",
    explanation: "GN3 - various references in Section 3.8 advise on different approaches, but 3.8.3, Para 3 explains the procedure where no records exist"
  },

  {
    id: 108,
    scenario: "Refurbishment work has been undertaken in a small industrial unit. Two new socket-outlet radial circuits were installed and several luminaires\
              replaced on an existing lighting circuit.  There are no previous records or charts for the electrical installation, so the client requires inspection\
              and testing on the existing circuits.  The unit is currently vacant so the inspector has no restrictions on circuit or installation isolation.\
              The supply and installation form a 230V single-phase TN-C-S system.",
    Question: "What document must be used when verifying the two new socket-outlet circuits?",
    options: [
      {
        id: "a",
        text: "Electrical Installation Condition Report"
      },
      {
        id: "b",
        text: "Electrical Installation Certificate"
      },
      {
        id: "c",
        text: "Periodic Inspection and Test Report"
      },
      {
        id: "d",
        text: "Minor Work Certificate"
      }
    ],
    correctAnswer: "b",
    explanation: "GN3, Section 5.1 specifies the documents to use for the installation of new circuits - EIC"
  },

  {
    id: 109,
    scenario: "Refurbishment work has been undertaken in a small industrial unit. Two new socket-outlet radial circuits were installed and several luminaires\
              replaced on an existing lighting circuit.  There are no previous records or charts for the electrical installation, so the client requires inspection\
              and testing on the existing circuits.  The unit is currently vacant so the inspector has no restrictions on circuit or installation isolation.\
              The supply and installation form a 230V single-phase TN-C-S system.",
    
    Question: "What inspection limitation is already noted on an EICR?",
    options: [
      {
        id: "a",
        text: "Cables in trunking and conduit"
      },
      {
        id: "b",
        text: "Cables in distribution boards"
      },
      {
        id: "c",
        text: "Surface mounted switches"
      },
      {
        id: "d",
        text: "Surface mounted cables"
      }
    ],
    correctAnswer: "a",
    explanation: "BS 7671, Appendix 6, Model Forms. The EICR, Section D contains a statement regarding concealed cables."
  },

  {
    id: 110,
    scenario: "Refurbishment work has been undertaken in a small industrial unit. Two new socket-outlet radial circuits were installed and several luminaires\
              replaced on an existing lighting circuit.  There are no previous records or charts for the electrical installation, so the client requires inspection\
              and testing on the existing circuits.  The unit is currently vacant so the inspector has no restrictions on circuit or installation isolation.\
              The supply and installation form a 230V single-phase TN-C-S system.",
    Question: "What would be recorded on a test result sheet as the method of fault protection for the new socket outlet circuits?",
    options: [
      {
        id: "a",
        text: "ADS"
      },
      {
        id: "b",
        text: "Class II"
      },
      {
        id: "c",
        text: "RCD"
      },
      {
        id: "d",
        text: "Class III"
      }
    ],
    correctAnswer: "a",
    explanation: "BS 7671, Appendix 6, Model Forms shows a Schedule of Test Results, but it doesn't contain a specific column for recording 'ADS'. There is a column for recording Max. Measured Zs, which relies on the earthing system, hence ADS (Automatic Disconnection of Supply)."
  },

   {
    id: 111,
    scenario: "Refurbishment work has been undertaken in a small industrial unit. Two new socket-outlet radial circuits were installed and several luminaires\
              replaced on an existing lighting circuit.  There are no previous records or charts for the electrical installation, so the client requires inspection\
              and testing on the existing circuits.  The unit is currently vacant so the inspector has no restrictions on circuit or installation isolation.\
              The supply and installation form a 230V single-phase TN-C-S system.",
    Question: "What information must be recorded, on a schedule of test results, regarding test instruments?",
    options: [
      {
        id: "a",
        text: "Battery condition"
      },
      {
        id: "b",
        text: "Serial or asset number"
      },
      {
        id: "c",
        text: "Last calibration date"
      },
      {
        id: "d",
        text: "Next calibration date"
      }

         ],
    correctAnswer: "b",
    explanation: "BS 7671, Appendix 6, Model Forms clearly shows on the Schedule of Test Results (top-right-hand corner) that the Serial or Asset number of the instrument is to be recorded."
  },

  {
    id: 112,
    scenario: "Refurbishment work has been undertaken in a small industrial unit. Two new socket-outlet radial circuits were installed and several luminaires\
              replaced on an existing lighting circuit.  There are no previous records or charts for the electrical installation, so the client requires inspection\
              and testing on the existing circuits.  The unit is currently vacant so the inspector has no restrictions on circuit or installation isolation.\
              The supply and installation form a 230V single-phase TN-C-S system.",
    Question: "What must the person responsible for the design of the new socket outlet circuits recommend on an EIC?",
    options: [
      {
        id: "a",
        text: "Address of the person who is responsible for construction"
      },
      {
        id: "b",
        text: "How many schedules of test results are required"
      },
      {
        id: "c",
        text: "c.\tInterval where further inspection and testing is carried out"
      },
      {
        id: "d",
        text: "Amendment date of BS 7671 used for the inspection"
      }
    ],
    correctAnswer: "c",
    explanation: "BS 7671, Reg. 644.4 states that the next inspection interval is to be recorded, but on the EIC itself under the heading 'Next Inspection', it specifies the Designer as completing that section."
  },

    {
    id: 113,
    scenario: "Refurbishment work has been undertaken in a small industrial unit. Two new socket-outlet radial circuits were installed and several luminaires\
              replaced on an existing lighting circuit.  There are no previous records or charts for the electrical installation, so the client requires inspection\
              and testing on the existing circuits.  The unit is currently vacant so the inspector has no restrictions on circuit or installation isolation.\
              The supply and installation form a 230V single-phase TN-C-S system.",
    Question: "What would the retention of certification allow when future periodic inspection and testing is due?",
    options: [
      {
        id: "a",
        text: "sampled inspection and testing"
      },
      {
        id: "b",
        text: "Remote inspection and testing"
      },
      {
        id: "c",
        text: "No inspection and testing"
      },
      {
        id: "d",
        text: "Testing without any inspection"
      }
    ],
    correctAnswer: "a",
    explanation: "GN3, Sections 3.8.3 and 3.8.4 specify a need for previous records in order to set sample sizes."
  },

  {
    id: 114,
    scenario: "Refurbishment work has been undertaken in a small industrial unit. Two new socket-outlet radial circuits were installed and several luminaires\
              replaced on an existing lighting circuit.  There are no previous records or charts for the electrical installation, so the client requires inspection\
              and testing on the existing circuits.  The unit is currently vacant so the inspector has no restrictions on circuit or installation isolation.\
              The supply and installation form a 230V single-phase TN-C-S system.",
    Question: "What must an inspector carry out before inspecting terminations in the DB supplying the new and existing circuits?",
    options: [
      {
        id: "a",
        text: "Isolation of final circuits"
      },
      {
        id: "b",
        text: "Isolation of the new circuits"
      },
      {
        id: "c",
        text: "Isolation of the existing circuits"
      },
      {
        id: "d",
        text: "Isolation of the entire DB"
      }
    ],
    correctAnswer: "d",
    explanation: "Covers of enclosures should not be removed without first isolating. Where this question focusses on inspecting terminations inside the DB, then the entire DB needs to be isolated prior to the cover being removed"
  },

    {
    id: 115,
    scenario: "",
    Question: "What is the responsibility of the duty holder in the inspection and testing procedure?",
    options: [
      {
        id: "a",
        text: "Manage work efficiently"
      },
      {
        id: "b",
        text: "Manage the sequence of tests"
      },
      {
        id: "c",
        text: "Manage regular calibration dates"
      },
      {
        id: "d",
        text: "Manage associated risks"
      }
    ],
    correctAnswer: "d",
    explanation: "GN3, Section 1.1, para 2 states that it is 'the inspector's duty to ensure their own safety and that of others...' Whilst the inspector is responsible for all or part of an installation during the inspection and testing process, they are effectively the Duty Holder for the part under their control."
  },

  {
    id: 116,
    scenario: "",
    Question: "How regularly must an approved voltage indicator, used to check safe isolation, be checked for operation?",
    options: [
      {
        id: "a",
        text: "Every week"
      },
      {
        id: "b",
        text: "Every twelve months"
      },
      {
        id: "c",
        text: "Every three months"
      },
      {
        id: "d",
        text: "Every time it is used"
      }
    ],
    correctAnswer: "d",
    explanation: "The answer to this relies on your own knowledge and experience of safe isolation. You should check the voltage indicator every time it is used, both before and after testing for dead"
  },

  {
    id: 117,
    scenario: "",
    Question: "What should be undertaken if a Main Protective Bonding conductor cannot be seen throughout its length?",
    options: [
      {
        id: "a",
        text: "It should be tested for continuity"
      },
      {
        id: "b",
        text: "It should be exposed to see it throughout"
      },
      {
        id: "c",
        text: "It should be pulled to check for breaks"
      },
      {
        id: "d",
        text: "It should be replaced for another  "
      }
    ],
    correctAnswer: "a",
    explanation: "GN3, Section 2.6.5, Continuity testing, Test Method 2 - bonding and earthing conductors. Two paragraphs explain the procedure where it is not possible to see the conductor throughout its entire length."
  },

  {
    id: 118,
    scenario: "",
    Question: "What would be checked by visual inspection to verify that Additional Protection is suitably provided by RCD?",
    options: [
      {
        id: "a",
        text: "That the bn does not exceed 150mA"
      },
      {
        id: "b",
        text: "That the bn does not exceed 30mA"
      },
      {
        id: "c",
        text: "That the bn does not exceed 300mA"
      },
      {
        id: "d",
        text: "That the bn does not exceed 100mA"
      }
    ],
    correctAnswer: "b",
    explanation: "BS 7671, Reg. 415.1.1 states: '...not exceeding 30mA'"
  },

   {
    id: 119,
    scenario: "",
    Question: "When is it acceptable to insert a cross against any item in Section 2 of a schedule of inspections for new works?",
    options: [
      {
        id: "a",
        text: "When the Earthing Conductor is undersized"
      },
      {
        id: "b",
        text: "Should an item listed be not applicable"
      },
      {
        id: "c",
        text: "Under no circumstances, as all must comply"
      },
      {
        id: "d",
        text: "Where an installation earth electrode is corroded"
      }
    ],
    correctAnswer: "c",
    explanation: "BS 7671, Appendix 6, Model Forms. Note 2 on the EIC Schedule of Inspections clearly states that the only entries permitted are a tick or N/A. New installations must be 100% correct prior to bringing into service."
  },

  {
    id: 120,
    scenario: "",
    Question: "How would an obvious non-compliance be recorded on an inspection schedule during periodic inspection?",
    options: [
      {
        id: "a",
        text: "FI"
      },
      {
        id: "b",
        text: "C1,C2 or C3"
      },
      {
        id: "c",
        text: "\"X\""
      },
      {
        id: "d",
        text: "Lim"
      }
    ],
    correctAnswer: "b",
    explanation: "GN3, Section 3, Table 3.5 shows the coding to be used for non-compliances. C2 and C3 are used for obvious ones."
  },

   {
    id: 121,
    scenario: "",
    Question: "What would be verified using the sense of touch during an initial verification?",
    options: [
      {
        id: "a",
        text: "Suitable size of conductor"
      },
      {
        id: "b",
        text: "Identification of conductors"
      },
      {
        id: "c",
        text: "Termination of conductors"
      },
      {
        id: "d",
        text: "Suitable type of conductors"
      }
    ],
    correctAnswer: "c",
    explanation: "Termination of conductors is normally verified with a combination of 'tug' testing and use of a tool, such as a screwdriver, so it's definitely 'touch'. All other answers are visual."
  },

  {
    id: 122,
    scenario: "",
    Question: "What would be the MOST common reason for a crackling/arcing sound coming from an existing light switch?",
    options: [
      {
        id: "a",
        text: "Loose line termination"
      },
      {
        id: "b",
        text: "Overloaded circuit breaker"
      },
      {
        id: "c",
        text: "Oversized switch rating"
      },
      {
        id: "d",
        text: "Loose earth connection"
      }
    ],
    correctAnswer: "a",
    explanation: "Knowledge and experience would tell you that a loose line termination would crackle or arc, mainly due to the fact that it is carrying current to the load."
  },

    {
  id: 123,
    scenario: "",
    Question: "What classification code would be used when discovering a severely damaged socket-outlet during periodic inspection?",
    options: [
      {
        id: "a",
        text: "C3"
      },
      {
        id: "b",
        text: "C1"
      },
      {
        id: "c",
        text: "C2"
      },
      {
        id: "d",
        text: "FI"
      }
    ],
    correctAnswer: "a",
    explanation: "GN3, Section 3, Table 3.5 gives examples. in this instance, assuming live parts would be exposed, it is an obvious C1"
  },

   {
    id: 124,
    scenario: "",
    Question: "What code would be given where access to a room is a limitation and the inspector suspects corrosion to a bonding conductor?",
    options: [
      {
        id: "a",
        text: "C2"
      },
      {
        id: "b",
        text: "C3"
      },
      {
        id: "c",
        text: "FI"
      },
      {
        id: "d",
        text: "C1"
      }
    ],
    correctAnswer: "c",
    explanation: "GN3, Section 3, Table 3.5 gives examples. in this instance there is uncertainty, so F1 is used if it suspected the issue would yield either a Cl or C2 once it could be investigated properly."
  },

  {
    id: 125,
    scenario: "",
    Question: "What equipment IP rating is suitable for splashes of water from all directions?",
    options: [
      {
        id: "a",
        text: "IP X2"
      },
      {
        id: "b",
        text: "IP X1"
      },
      {
        id: "c",
        text: "IP X3"
      },
      {
        id: "d",
        text: "IP X4"
      }
    ],
    correctAnswer: "d",
    explanation: "BS 7671, Appendix 5, External Influences. The table detailing AD codes (Water) also contain equivalent IP codes with descriptions."
  }








  
















  




  








];  