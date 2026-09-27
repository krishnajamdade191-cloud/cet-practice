const workEnergyPowerQuestions = [
  {
    id: "P-WEP-001",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Work Done",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A force of 10 N acts on a body and displaces it by 5 m in the direction of the force. What is the work done?",

    options: ["2 J", "15 J", "50 J", "100 J"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Work done by a constant force is W = Fs cosθ.",

      steps: [
        "Force F = 10 N.",
        "Displacement s = 5 m.",
        "The force and displacement are in the same direction, so θ = 0°.",
        "W = Fs cos0°.",
        "W = 10 × 5 × 1.",
        "W = 50 J.",
      ],

      finalAnswer: "50 J",

      examTip: "When force and displacement are in the same direction, W = Fs.",
    },
  },

  {
    id: "P-WEP-002",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Work Done",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A force of 20 N acts on a body through a displacement of 4 m at an angle of 60° to the displacement. What is the work done?",

    options: ["20 J", "40 J", "80 J", "160 J"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Work done by a force at an angle is W = Fs cosθ.",

      steps: [
        "F = 20 N.",
        "s = 4 m.",
        "θ = 60°.",
        "W = Fs cos60°.",
        "W = 20 × 4 × 1/2.",
        "W = 40 J.",
      ],

      finalAnswer: "40 J",

      examTip: "Only the component of force along the displacement does work.",
    },
  },

  {
    id: "P-WEP-003",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Kinetic Energy",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A body of mass 2 kg moves with a speed of 5 m/s. What is its kinetic energy?",

    options: ["10 J", "20 J", "25 J", "50 J"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Kinetic energy is KE = 1/2 mv².",

      steps: [
        "Mass m = 2 kg.",
        "Speed v = 5 m/s.",
        "KE = 1/2 × m × v².",
        "KE = 1/2 × 2 × 5².",
        "KE = 25 J.",
      ],

      finalAnswer: "25 J",

      examTip: "Kinetic energy depends on the square of velocity.",
    },
  },

  {
    id: "P-WEP-004",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Potential Energy",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A 5 kg object is raised to a height of 4 m. Taking g = 10 m/s², what is the increase in gravitational potential energy?",

    options: ["20 J", "50 J", "100 J", "200 J"],

    correctAnswerIndex: 3,

    solution: {
      concept:
        "Gravitational potential energy near Earth's surface is U = mgh.",

      steps: [
        "m = 5 kg.",
        "h = 4 m.",
        "g = 10 m/s².",
        "U = mgh.",
        "U = 5 × 10 × 4.",
        "U = 200 J.",
      ],

      finalAnswer: "200 J",

      examTip: "Increase in gravitational potential energy = mgh.",
    },
  },

  {
    id: "P-WEP-005",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Power",
    difficulty: "Easy",
    type: "Practice",

    questionText: "A machine does 600 J of work in 20 s. What is its power?",

    options: ["20 W", "30 W", "40 W", "12000 W"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Power is the rate at which work is done: P = W/t.",

      steps: [
        "Work W = 600 J.",
        "Time t = 20 s.",
        "P = W/t.",
        "P = 600/20.",
        "P = 30 W.",
      ],

      finalAnswer: "30 W",

      examTip: "The SI unit of power is watt (W), where 1 W = 1 J/s.",
    },
  },

  {
    id: "P-WEP-006",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Work-Energy Theorem",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A net work of 100 J is done on a body. What is the change in its kinetic energy?",

    options: ["0 J", "50 J", "100 J", "200 J"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "The work-energy theorem states that net work done equals the change in kinetic energy.",

      steps: [
        "Net work done W = 100 J.",
        "According to the work-energy theorem, W = ΔKE.",
        "Therefore, ΔKE = 100 J.",
      ],

      finalAnswer: "100 J",

      examTip: "Net work = change in kinetic energy.",
    },
  },

  {
    id: "P-WEP-007",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Kinetic Energy",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "If the speed of a body is doubled, by what factor does its kinetic energy change?",

    options: ["2", "4", "6", "8"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Kinetic energy is proportional to the square of velocity: KE ∝ v².",

      steps: [
        "Initial kinetic energy is proportional to v².",
        "New velocity = 2v.",
        "New kinetic energy is proportional to (2v)².",
        "(2v)² = 4v².",
        "Therefore, kinetic energy becomes four times the original value.",
      ],

      finalAnswer: "4 times",

      examTip:
        "If velocity changes by a factor n, kinetic energy changes by n².",
    },
  },

  {
    id: "P-WEP-008",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Potential Energy",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A body of mass 2 kg is lifted vertically through 10 m. Taking g = 10 m/s², how much work is done against gravity?",

    options: ["20 J", "100 J", "200 J", "400 J"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Work done against gravity is equal to the increase in gravitational potential energy.",

      steps: [
        "m = 2 kg.",
        "h = 10 m.",
        "g = 10 m/s².",
        "Work = mgh.",
        "Work = 2 × 10 × 10.",
        "Work = 200 J.",
      ],

      finalAnswer: "200 J",

      examTip:
        "For vertical lifting at constant speed, work done against gravity = mgh.",
    },
  },

  {
    id: "P-WEP-009",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Spring Potential Energy",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A spring of force constant 200 N/m is compressed by 0.1 m. What elastic potential energy is stored in it?",

    options: ["0.5 J", "1 J", "2 J", "10 J"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Elastic potential energy stored in a spring is U = 1/2 kx².",

      steps: [
        "Spring constant k = 200 N/m.",
        "Compression x = 0.1 m.",
        "U = 1/2 kx².",
        "U = 1/2 × 200 × (0.1)².",
        "U = 100 × 0.01.",
        "U = 1 J.",
      ],

      finalAnswer: "1 J",

      examTip:
        "Remember to convert displacement into metres before using the formula.",
    },
  },

  {
    id: "P-WEP-010",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Power",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A force of 50 N moves a body with a constant velocity of 4 m/s in the direction of the force. What is the power delivered?",

    options: ["12.5 W", "46 W", "200 W", "250 W"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "When force and velocity are in the same direction, power is P = Fv.",

      steps: [
        "F = 50 N.",
        "v = 4 m/s.",
        "P = Fv.",
        "P = 50 × 4.",
        "P = 200 W.",
      ],

      finalAnswer: "200 W",

      examTip: "Instantaneous power due to a force is P = F·v.",
    },
  },

  {
    id: "P-WEP-011",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Conservation of Mechanical Energy",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A body is dropped from a height of 20 m. Neglecting air resistance and taking g = 10 m/s², what is its speed just before reaching the ground?",

    options: ["10 m/s", "15 m/s", "20 m/s", "40 m/s"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "In the absence of non-conservative forces, mechanical energy is conserved.",

      steps: [
        "Initially the body is at height h = 20 m and is at rest.",
        "Initial kinetic energy = 0.",
        "Initial potential energy = mgh.",
        "Just before reaching the ground, height is effectively zero.",
        "Final potential energy = 0.",
        "Therefore, mgh = 1/2 mv².",
        "Cancel m from both sides.",
        "gh = v²/2.",
        "v² = 2gh.",
        "v² = 2 × 10 × 20 = 400.",
        "v = 20 m/s.",
      ],

      finalAnswer: "20 m/s",

      examTip: "For an object falling freely from rest, v = √(2gh).",
    },
  },

  {
    id: "P-WEP-012",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Work Done by Friction",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A 4 kg block moving at 5 m/s on a rough horizontal surface comes to rest after travelling 10 m. What is the magnitude of the work done by friction?",

    options: ["25 J", "40 J", "50 J", "100 J"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "The work-energy theorem states that net work equals the change in kinetic energy.",

      steps: [
        "Initial kinetic energy = 1/2 mv².",
        "m = 4 kg and v = 5 m/s.",
        "Initial KE = 1/2 × 4 × 25 = 50 J.",
        "Final velocity is zero, so final KE = 0.",
        "Change in kinetic energy = 0 - 50 = -50 J.",
        "Friction is the force doing negative work on the block.",
        "Therefore, work done by friction = -50 J.",
        "Its magnitude is 50 J.",
      ],

      finalAnswer: "50 J in magnitude",

      examTip:
        "Friction usually does negative work when it opposes the motion.",
    },
  },

  {
    id: "P-WEP-013",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Variable Force",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A force varies with displacement according to F = 4x, where F is in newtons and x is in metres. What work is done in moving the body from x = 0 to x = 3 m?",

    options: ["6 J", "12 J", "18 J", "36 J"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "For a variable force, work is the area under the force-displacement graph or the integral W = ∫F dx.",

      steps: [
        "Given F = 4x.",
        "Work from x = 0 to x = 3 is W = ∫₀³ 4x dx.",
        "Integrating gives W = 2x² evaluated from 0 to 3.",
        "W = 2(3²) - 2(0²).",
        "W = 18 J.",
      ],

      finalAnswer: "18 J",

      examTip:
        "For variable force, do not directly use W = Fs unless the force is constant.",
    },
  },

  {
    id: "P-WEP-014",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Power and Efficiency",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A motor receives 1000 W of input power and delivers 800 W of useful output power. What is its efficiency?",

    options: ["20%", "40%", "80%", "125%"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Efficiency is the ratio of useful output power to input power multiplied by 100.",

      steps: [
        "Input power = 1000 W.",
        "Useful output power = 800 W.",
        "Efficiency = (Output/Input) × 100.",
        "Efficiency = (800/1000) × 100.",
        "Efficiency = 80%.",
      ],

      finalAnswer: "80%",

      examTip: "For a real machine, efficiency is less than 100%.",
    },
  },

  {
    id: "P-WEP-015",
    subject: "P",
    chapter: "Work Energy Power",
    topic: "Work-Energy Theorem",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A 2 kg body moving at 3 m/s is acted upon by a net force that does 16 J of work. What is its final speed?",

    options: ["4 m/s", "5 m/s", "6 m/s", "7 m/s"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Net work done equals the change in kinetic energy.",

      steps: [
        "Initial kinetic energy = 1/2 mv².",
        "m = 2 kg and initial velocity = 3 m/s.",
        "Initial KE = 1/2 × 2 × 3² = 9 J.",
        "Net work done = 16 J.",
        "Final KE = Initial KE + Net work.",
        "Final KE = 9 + 16 = 25 J.",
        "Using KE = 1/2 mv²:",
        "25 = 1/2 × 2 × v².",
        "Therefore, v² = 25.",
        "v = 5 m/s.",
      ],

      finalAnswer: "5 m/s",

      examTip:
        "You can use energy methods directly when work done by the net force is given.",
    },
  },
];

export default workEnergyPowerQuestions;
