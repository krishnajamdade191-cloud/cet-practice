const thermalPhysicsQuestions = [
  {
    id: "P-THP-001",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Temperature Scales",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A temperature of 27°C is equal to what temperature on the Kelvin scale?",

    options: ["246 K", "273 K", "300 K", "327 K"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "The Kelvin temperature is obtained from Celsius temperature using K = °C + 273.15.",

      steps: [
        "Temperature = 27°C.",
        "K = 27 + 273.15.",
        "K = 300.15 K.",
        "Approximately, K = 300 K.",
      ],

      finalAnswer: "300 K approximately",

      examTip: "For most CET calculations, use K = °C + 273.",
    },
  },

  {
    id: "P-THP-002",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Thermal Expansion",
    difficulty: "Easy",
    type: "Practice",

    questionText: "When a solid is heated, its dimensions generally:",

    options: ["Decrease", "Remain unchanged", "Increase", "Become zero"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Most solids expand when their temperature increases.",

      steps: [
        "Heating increases the average separation between atoms or molecules.",
        "As a result, the dimensions of the solid generally increase.",
      ],

      finalAnswer: "Increase",

      examTip:
        "For ordinary solids, higher temperature generally produces thermal expansion.",
    },
  },

  {
    id: "P-THP-003",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Linear Expansion",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A metal rod of length 2 m has a coefficient of linear expansion of 1 × 10⁻⁵ K⁻¹. What is the increase in length for a temperature rise of 50 K?",

    options: ["0.0001 m", "0.001 m", "0.01 m", "0.1 m"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Linear expansion is given by ΔL = αLΔT.",

      steps: [
        "α = 1 × 10⁻⁵ K⁻¹.",
        "L = 2 m.",
        "ΔT = 50 K.",
        "ΔL = αLΔT.",
        "ΔL = (1 × 10⁻⁵)(2)(50).",
        "ΔL = 100 × 10⁻⁵ m.",
        "ΔL = 1 × 10⁻³ m.",
      ],

      finalAnswer: "0.001 m",

      examTip:
        "A temperature difference in kelvin and Celsius has the same numerical value.",
    },
  },

  {
    id: "P-THP-004",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Specific Heat Capacity",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "How much heat is required to raise the temperature of 2 kg of water by 5°C? Take the specific heat capacity of water as 4200 J/kg·K.",

    options: ["4200 J", "21000 J", "42000 J", "84000 J"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Heat required for a temperature change is Q = mcΔT.",

      steps: [
        "Mass m = 2 kg.",
        "Specific heat c = 4200 J/kg·K.",
        "Temperature change ΔT = 5 K.",
        "Q = mcΔT.",
        "Q = 2 × 4200 × 5.",
        "Q = 42000 J.",
      ],

      finalAnswer: "42000 J",

      examTip:
        "Specific heat tells how much heat is required to raise 1 kg of a substance by 1 K.",
    },
  },

  {
    id: "P-THP-005",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Heat Capacity",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A body requires 500 J of heat to increase its temperature by 10 K. What is its heat capacity?",

    options: ["5 J/K", "50 J/K", "500 J/K", "5000 J/K"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Heat capacity is the heat required to raise the temperature of a body by one degree.",

      steps: [
        "Heat supplied Q = 500 J.",
        "Temperature rise ΔT = 10 K.",
        "Heat capacity C = Q/ΔT.",
        "C = 500/10.",
        "C = 50 J/K.",
      ],

      finalAnswer: "50 J/K",

      examTip:
        "Heat capacity is for the entire body, while specific heat capacity is per unit mass.",
    },
  },

  {
    id: "P-THP-006",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Calorimetry",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A 100 g metal block at 100°C is placed in 100 g of water at 20°C. If the final temperature is 30°C and heat loss is neglected, what is the ratio of the specific heat of the metal to that of water?",

    options: ["1/7", "1/3", "3/7", "7/3"],

    correctAnswerIndex: 0,

    solution: {
      concept:
        "In calorimetry, heat lost by the hot body equals heat gained by the cold body when there is no heat loss.",

      steps: [
        "Mass of metal = mass of water = 100 g.",
        "Metal cools from 100°C to 30°C, so its temperature change is 70°C.",
        "Water warms from 20°C to 30°C, so its temperature change is 10°C.",
        "Heat lost by metal = heat gained by water.",
        "m c_m × 70 = m c_w × 10.",
        "Mass cancels from both sides.",
        "70c_m = 10c_w.",
        "c_m/c_w = 10/70 = 1/7.",
      ],

      finalAnswer: "1/7",

      examTip:
        "Always use the magnitude of temperature change when applying heat lost = heat gained.",
    },
  },

  {
    id: "P-THP-007",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Latent Heat",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "How much heat is required to melt 0.5 kg of ice at 0°C? Take the latent heat of fusion of ice as 3.36 × 10⁵ J/kg.",

    options: ["8.4 × 10⁴ J", "1.68 × 10⁵ J", "3.36 × 10⁵ J", "6.72 × 10⁵ J"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Heat required during a phase change is Q = mL.",

      steps: [
        "Mass of ice m = 0.5 kg.",
        "Latent heat of fusion L = 3.36 × 10⁵ J/kg.",
        "Q = mL.",
        "Q = 0.5 × 3.36 × 10⁵.",
        "Q = 1.68 × 10⁵ J.",
      ],

      finalAnswer: "1.68 × 10⁵ J",

      examTip:
        "During melting, temperature remains constant while latent heat is supplied.",
    },
  },

  {
    id: "P-THP-008",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Heat Transfer",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "Heat transfer through a metal rod from its hot end to its cold end mainly occurs by:",

    options: ["Convection", "Conduction", "Radiation", "Evaporation"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Conduction is the dominant mode of heat transfer through solids.",

      steps: [
        "In a solid metal, particles remain in fixed average positions.",
        "Thermal energy is transferred through microscopic interactions and, in metals, mobile electrons also contribute.",
        "This process is called conduction.",
      ],

      finalAnswer: "Conduction",

      examTip:
        "Solids → mainly conduction; fluids → conduction and convection; radiation needs no material medium.",
    },
  },

  {
    id: "P-THP-009",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Thermal Conductivity",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "The rate of heat conduction through a slab is directly proportional to its:",

    options: [
      "Thickness only",
      "Area and temperature difference",
      "Thickness and inversely proportional to area",
      "Mass only",
    ],

    correctAnswerIndex: 1,

    solution: {
      concept: "For a uniform slab, heat conduction rate is H = kAΔT/L.",

      steps: [
        "H = kAΔT/L.",
        "For a given material and thickness, H is directly proportional to area A.",
        "It is also directly proportional to temperature difference ΔT.",
        "Therefore, the rate is directly proportional to area and temperature difference.",
      ],

      finalAnswer: "Area and temperature difference",

      examTip: "Increasing thickness reduces the rate of conduction.",
    },
  },

  {
    id: "P-THP-010",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Newton's Law of Cooling",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "According to Newton's law of cooling, for a small temperature difference, the rate of cooling is approximately proportional to:",

    options: [
      "The absolute temperature",
      "The square of the temperature difference",
      "The temperature difference between the body and surroundings",
      "The mass of the body only",
    ],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Newton's law of cooling states that the rate of heat loss is approximately proportional to the temperature difference between the body and surroundings for small temperature differences.",

      steps: [
        "Let the body's temperature be T.",
        "Let the surrounding temperature be T_s.",
        "For small temperature differences, the rate of cooling is proportional to T - T_s.",
        "Therefore, greater temperature difference gives faster cooling.",
      ],

      finalAnswer:
        "The temperature difference between the body and surroundings",

      examTip:
        "The approximation is most useful when the temperature difference is relatively small.",
    },
  },

  {
    id: "P-THP-011",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Thermodynamics",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A gas absorbs 500 J of heat and does 200 J of work on the surroundings. According to the first law of thermodynamics, what is the change in internal energy?",

    options: ["300 J", "500 J", "700 J", "−300 J"],

    correctAnswerIndex: 0,

    solution: {
      concept:
        "Using the convention where W is work done by the system, the first law is ΔQ = ΔU + W.",

      steps: [
        "Heat supplied ΔQ = 500 J.",
        "Work done by the gas W = 200 J.",
        "Using ΔQ = ΔU + W:",
        "500 = ΔU + 200.",
        "Therefore, ΔU = 300 J.",
      ],

      finalAnswer: "300 J",

      examTip:
        "Always identify whether W means work done by the system or work done on the system.",
    },
  },

  {
    id: "P-THP-012",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Thermodynamic Processes",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "In an isothermal process for an ideal gas, the change in internal energy is:",

    options: ["Positive", "Negative", "Zero", "Infinite"],

    correctAnswerIndex: 2,

    solution: {
      concept: "For an ideal gas, internal energy depends only on temperature.",

      steps: [
        "An isothermal process occurs at constant temperature.",
        "The internal energy of an ideal gas depends only on its temperature.",
        "Since temperature does not change, the internal energy does not change.",
        "Therefore, ΔU = 0.",
      ],

      finalAnswer: "Zero",

      examTip: "Ideal gas + constant temperature → ΔU = 0.",
    },
  },

  {
    id: "P-THP-013",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Thermodynamic Processes",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "For an adiabatic process, the heat exchanged between the system and surroundings is:",

    options: ["Maximum", "Zero", "Equal to work done", "Always positive"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "An adiabatic process is one in which there is no heat exchange with the surroundings.",

      steps: [
        "By definition, an adiabatic process has no heat transfer.",
        "Therefore, Q = 0.",
        "Any change in internal energy is associated with work done by or on the system.",
      ],

      finalAnswer: "Zero",

      examTip: "Adiabatic → Q = 0.",
    },
  },

  {
    id: "P-THP-014",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Ideal Gas",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "One mole of an ideal gas is at 300 K. Taking R = 8.31 J/mol·K, what is its internal energy if it is a monatomic gas?",

    options: ["1246.5 J", "2493 J", "3740 J", "4986 J"],

    correctAnswerIndex: 0,

    solution: {
      concept: "For a monatomic ideal gas, internal energy is U = (3/2)nRT.",

      steps: [
        "n = 1 mol.",
        "T = 300 K.",
        "R = 8.31 J/mol·K.",
        "U = (3/2)nRT.",
        "U = (3/2)(1)(8.31)(300).",
        "U = 1246.5 J.",
      ],

      finalAnswer: "1246.5 J",

      examTip: "For a monatomic ideal gas, U = 3nRT/2.",
    },
  },

  {
    id: "P-THP-015",
    subject: "P",
    chapter: "Thermal Physics",
    topic: "Thermodynamic Efficiency",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A heat engine absorbs 1000 J of heat from a hot reservoir and rejects 600 J to a cold reservoir. What is its efficiency?",

    options: ["20%", "30%", "40%", "60%"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "The efficiency of a heat engine is η = W/Q_H, where W is the useful work output and Q_H is the heat absorbed from the hot reservoir.",

      steps: [
        "Heat absorbed Q_H = 1000 J.",
        "Heat rejected Q_C = 600 J.",
        "Work output W = Q_H - Q_C.",
        "W = 1000 - 600 = 400 J.",
        "Efficiency η = W/Q_H.",
        "η = 400/1000 = 0.4.",
        "Efficiency = 40%.",
      ],

      finalAnswer: "40%",

      examTip: "Heat engine: W = Q_H - Q_C and η = W/Q_H.",
    },
  },
];

export default thermalPhysicsQuestions;
