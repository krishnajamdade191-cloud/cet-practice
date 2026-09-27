const unitsQuestions = [
  {
    id: "P-UN-001",
    subject: "P",
    chapter: "Units and Measurements",
    topic: "SI Units",
    difficulty: "Easy",
    type: "Practice",

    questionText: "Which of the following is the SI unit of force?",

    options: ["Dyne", "Newton", "Joule", "Watt"],

    correctAnswerIndex: 1,

    solution: {
      concept: "The SI unit of force is derived from Newton's second law.",

      steps: [
        "Newton's second law is F = ma.",
        "The SI unit of mass is kilogram (kg).",
        "The SI unit of acceleration is metre per second squared (m/s²).",
        "Therefore, the unit of force is kg·m/s².",
        "This derived SI unit is called the Newton (N).",
      ],

      finalAnswer: "Newton (N)",

      examTip: "Remember: Force → Newton, Work/Energy → Joule, Power → Watt.",
    },
  },

  {
    id: "P-UN-002",
    subject: "P",
    chapter: "Units and Measurements",
    topic: "Dimensions",
    difficulty: "Easy",
    type: "Practice",

    questionText: "What is the dimensional formula of velocity?",

    options: ["[LT⁻¹]", "[LT⁻²]", "[MLT⁻¹]", "[MLT⁻²]"],

    correctAnswerIndex: 0,

    solution: {
      concept: "Velocity is displacement divided by time.",

      steps: [
        "Velocity = Displacement / Time.",
        "The dimensional formula of displacement is [L].",
        "The dimensional formula of time is [T].",
        "Therefore, velocity = [L]/[T].",
      ],

      finalAnswer: "[LT⁻¹]",

      examTip: "Velocity and speed have the same dimensions.",
    },
  },

  {
    id: "P-UN-003",
    subject: "P",
    chapter: "Units and Measurements",
    topic: "Dimensions",
    difficulty: "Easy",
    type: "Practice",

    questionText: "What is the dimensional formula of acceleration?",

    options: ["[LT⁻¹]", "[LT⁻²]", "[MLT⁻¹]", "[ML⁻¹T⁻²]"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Acceleration is the rate of change of velocity with time.",

      steps: [
        "Acceleration = Velocity / Time.",
        "The dimensional formula of velocity is [LT⁻¹].",
        "Dividing by time [T] gives [LT⁻²].",
      ],

      finalAnswer: "[LT⁻²]",

      examTip: "Velocity → LT⁻¹, acceleration → LT⁻².",
    },
  },

  {
    id: "P-UN-004",
    subject: "P",
    chapter: "Units and Measurements",
    topic: "Significant Figures",
    difficulty: "Easy",
    type: "Practice",

    questionText: "How many significant figures are present in 0.00450?",

    options: ["2", "3", "4", "5"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Leading zeros are not significant, while zeros between or after significant digits in a decimal number can be significant.",

      steps: [
        "The zeros before 4 are leading zeros and are not significant.",
        "The digits 4 and 5 are significant.",
        "The zero after 5 is significant because it is a trailing zero in a decimal number.",
        "Therefore, 0.00450 contains three significant figures.",
      ],

      finalAnswer: "3 significant figures",

      examTip: "Leading zeros do not count as significant figures.",
    },
  },

  {
    id: "P-UN-005",
    subject: "P",
    chapter: "Units and Measurements",
    topic: "Unit Conversion",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A length is measured as 2.5 km. What is its value in metres?",

    options: ["25 m", "250 m", "2500 m", "25000 m"],

    correctAnswerIndex: 2,

    solution: {
      concept: "1 kilometre = 1000 metres.",

      steps: [
        "Given length = 2.5 km.",
        "Convert kilometres into metres.",
        "2.5 × 1000 = 2500 m.",
      ],

      finalAnswer: "2500 m",

      examTip: "When converting km to m, multiply by 1000.",
    },
  },

  {
    id: "P-UN-006",
    subject: "P",
    chapter: "Units and Measurements",
    topic: "Dimensions",
    difficulty: "Medium",
    type: "Practice",

    questionText: "The dimensional formula of work is:",

    options: ["[MLT⁻²]", "[ML²T⁻²]", "[ML²T⁻¹]", "[M²LT⁻²]"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Work is the product of force and displacement.",

      steps: [
        "Work = Force × Displacement.",
        "The dimensional formula of force is [MLT⁻²].",
        "The dimensional formula of displacement is [L].",
        "Therefore, Work = [MLT⁻²] × [L].",
        "Hence, Work = [ML²T⁻²].",
      ],

      finalAnswer: "[ML²T⁻²]",

      examTip: "Work and energy have the same dimensional formula.",
    },
  },

  {
    id: "P-UN-007",
    subject: "P",
    chapter: "Units and Measurements",
    topic: "Dimensions",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "Which of the following quantities has the same dimensions as pressure?",

    options: ["Force", "Energy", "Stress", "Momentum"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Pressure is force per unit area.",

      steps: [
        "Pressure = Force / Area.",
        "Stress is also defined as force per unit area.",
        "Therefore, pressure and stress have the same dimensions.",
      ],

      finalAnswer: "Stress",

      examTip: "Pressure and stress both have dimensions [ML⁻¹T⁻²].",
    },
  },

  {
    id: "P-UN-008",
    subject: "P",
    chapter: "Units and Measurements",
    topic: "Dimensional Analysis",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "The time period T of a simple pendulum depends on its length l and acceleration due to gravity g. Using dimensional analysis, which relation is possible?",

    options: ["T ∝ l/g", "T ∝ √(l/g)", "T ∝ √(g/l)", "T ∝ lg"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Dimensional analysis can be used to determine the form of a physical relation.",

      steps: [
        "Let T ∝ lᵃgᵇ.",
        "Dimensions of T = [T].",
        "Dimensions of l = [L].",
        "Dimensions of g = [LT⁻²].",
        "Therefore, [T] = [L]ᵃ[LT⁻²]ᵇ.",
        "Comparing powers of L: a + b = 0.",
        "Comparing powers of T: -2b = 1.",
        "Therefore, b = -1/2.",
        "Hence, a = 1/2.",
        "So T ∝ l¹ᐟ²g⁻¹ᐟ² = √(l/g).",
      ],

      finalAnswer: "T ∝ √(l/g)",

      examTip:
        "Dimensional analysis gives the dependence but cannot determine numerical constants such as 2π.",
    },
  },
];

export default unitsQuestions;
