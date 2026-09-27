const lawsOfMotionQuestions = [
  {
    id: "P-LOM-001",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Newton's First Law",
    difficulty: "Easy",
    type: "Practice",

    questionText: "Newton's first law of motion is also known as the law of:",

    options: [
      "Acceleration",
      "Inertia",
      "Conservation of momentum",
      "Gravitation",
    ],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Newton's first law describes the tendency of a body to resist any change in its state of rest or uniform motion.",

      steps: [
        "A body remains at rest or continues moving with uniform velocity in a straight line unless acted upon by an external unbalanced force.",
        "This property of resisting a change in its state of motion is called inertia.",
        "Therefore, Newton's first law is also called the law of inertia.",
      ],

      finalAnswer: "Inertia",

      examTip: "Newton's first law → law of inertia.",
    },
  },

  {
    id: "P-LOM-002",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Newton's Second Law",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A force of 20 N acts on a body of mass 5 kg. What acceleration is produced?",

    options: ["2 m/s²", "4 m/s²", "5 m/s²", "100 m/s²"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Newton's second law gives F = ma.",

      steps: [
        "Force F = 20 N.",
        "Mass m = 5 kg.",
        "Using F = ma:",
        "a = F/m.",
        "a = 20/5.",
        "a = 4 m/s².",
      ],

      finalAnswer: "4 m/s²",

      examTip: "Acceleration = Force / Mass.",
    },
  },

  {
    id: "P-LOM-003",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Newton's Third Law",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "According to Newton's third law, action and reaction forces:",

    options: [
      "Act on the same body in the same direction",
      "Act on different bodies in opposite directions",
      "Act on the same body in opposite directions",
      "Always cancel each other",
    ],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Newton's third law states that every action has an equal and opposite reaction.",

      steps: [
        "The action and reaction forces have equal magnitudes.",
        "They act in opposite directions.",
        "Most importantly, they act on two different bodies.",
        "Therefore, they do not cancel each other on a single free-body diagram.",
      ],

      finalAnswer: "They act on different bodies in opposite directions.",

      examTip:
        "The most important point: action and reaction act on different bodies.",
    },
  },

  {
    id: "P-LOM-004",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Momentum",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A body of mass 4 kg moves with a velocity of 5 m/s. What is its momentum?",

    options: ["0.8 kg·m/s", "9 kg·m/s", "20 kg·m/s", "25 kg·m/s"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Linear momentum is p = mv.",

      steps: [
        "Mass m = 4 kg.",
        "Velocity v = 5 m/s.",
        "p = mv.",
        "p = 4 × 5.",
        "p = 20 kg·m/s.",
      ],

      finalAnswer: "20 kg·m/s",

      examTip: "Momentum is a vector quantity because it depends on velocity.",
    },
  },

  {
    id: "P-LOM-005",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Impulse",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A force of 10 N acts on an object for 2 s. What is the impulse delivered to the object?",

    options: ["5 N·s", "12 N·s", "20 N·s", "40 N·s"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Impulse is the product of force and the time interval for which it acts.",

      steps: [
        "Impulse J = FΔt.",
        "F = 10 N.",
        "Δt = 2 s.",
        "J = 10 × 2.",
        "J = 20 N·s.",
      ],

      finalAnswer: "20 N·s",

      examTip: "Impulse is also equal to the change in momentum.",
    },
  },

  {
    id: "P-LOM-006",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Friction",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A 10 kg block rests on a horizontal surface. If the coefficient of friction is 0.2 and g = 10 m/s², what is the limiting friction?",

    options: ["2 N", "10 N", "20 N", "50 N"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Limiting friction is fₘₐₓ = μN.",

      steps: [
        "Mass m = 10 kg.",
        "On a horizontal surface, normal reaction N = mg.",
        "N = 10 × 10 = 100 N.",
        "Coefficient of friction μ = 0.2.",
        "Limiting friction = μN.",
        "fₘₐₓ = 0.2 × 100 = 20 N.",
      ],

      finalAnswer: "20 N",

      examTip: "On a horizontal surface with no vertical forces, N = mg.",
    },
  },

  {
    id: "P-LOM-007",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Friction",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A 5 kg block is pulled horizontally by a force of 20 N on a frictionless surface. What is its acceleration?",

    options: ["2 m/s²", "4 m/s²", "5 m/s²", "100 m/s²"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "On a frictionless surface, the applied force is the net horizontal force.",

      steps: [
        "Applied force F = 20 N.",
        "Mass m = 5 kg.",
        "Net force = 20 N.",
        "Using F = ma:",
        "a = F/m.",
        "a = 20/5 = 4 m/s².",
      ],

      finalAnswer: "4 m/s²",

      examTip: "If the surface is frictionless, friction force is zero.",
    },
  },

  {
    id: "P-LOM-008",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Friction",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A 10 kg block is pulled horizontally by a 50 N force. The frictional force opposing motion is 20 N. What is the acceleration of the block?",

    options: ["2 m/s²", "3 m/s²", "5 m/s²", "7 m/s²"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "The net force is the difference between the applied force and the opposing frictional force.",

      steps: [
        "Applied force = 50 N.",
        "Friction = 20 N in the opposite direction.",
        "Net force = 50 - 20 = 30 N.",
        "Mass = 10 kg.",
        "Using F = ma:",
        "a = 30/10.",
        "a = 3 m/s².",
      ],

      finalAnswer: "3 m/s²",

      examTip: "Always calculate net force before applying F = ma.",
    },
  },

  {
    id: "P-LOM-009",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Tension",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A 2 kg mass hangs vertically from a light string and is at rest. Taking g = 10 m/s², what is the tension in the string?",

    options: ["5 N", "10 N", "20 N", "40 N"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "For a stationary hanging mass, the upward tension balances its weight.",

      steps: [
        "Mass m = 2 kg.",
        "Weight = mg = 2 × 10 = 20 N.",
        "The mass is at rest, so net force is zero.",
        "Therefore, tension T = weight.",
        "T = 20 N.",
      ],

      finalAnswer: "20 N",

      examTip: "For a stationary hanging mass, T = mg.",
    },
  },

  {
    id: "P-LOM-010",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Connected Bodies",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "Two blocks of masses 2 kg and 3 kg are connected by a light string on a frictionless horizontal surface. A horizontal force of 10 N is applied to the 3 kg block. What is the acceleration of the system?",

    options: ["1 m/s²", "2 m/s²", "3 m/s²", "5 m/s²"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "For connected bodies moving together, treat the complete system as one body to find acceleration.",

      steps: [
        "Total mass = 2 + 3 = 5 kg.",
        "External horizontal force = 10 N.",
        "Using F = Ma:",
        "a = 10/5.",
        "a = 2 m/s².",
      ],

      finalAnswer: "2 m/s²",

      examTip:
        "For connected blocks, first calculate the acceleration of the entire system.",
    },
  },

  {
    id: "P-LOM-011",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Connected Bodies",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "Two blocks of masses 2 kg and 3 kg are connected by a light string on a frictionless surface. A force of 10 N is applied to the 3 kg block. What is the tension in the string?",

    options: ["2 N", "4 N", "6 N", "10 N"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Both blocks have the same acceleration because they are connected by an inextensible string.",

      steps: [
        "Total mass = 2 + 3 = 5 kg.",
        "Applied force = 10 N.",
        "System acceleration = 10/5 = 2 m/s².",
        "Now consider only the 2 kg block.",
        "The only horizontal force acting on it is tension T.",
        "Using T = ma:",
        "T = 2 × 2.",
        "T = 4 N.",
      ],

      finalAnswer: "4 N",

      examTip:
        "After finding system acceleration, isolate one block to calculate tension.",
    },
  },

  {
    id: "P-LOM-012",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Inclined Plane",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A block slides down a frictionless inclined plane making an angle of 30° with the horizontal. Taking g = 10 m/s², what is its acceleration along the plane?",

    options: ["2.5 m/s²", "5 m/s²", "8.66 m/s²", "10 m/s²"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "For a frictionless inclined plane, acceleration along the plane is a = g sinθ.",

      steps: [
        "Inclination θ = 30°.",
        "g = 10 m/s².",
        "a = g sinθ.",
        "a = 10 × sin30°.",
        "sin30° = 1/2.",
        "a = 5 m/s².",
      ],

      finalAnswer: "5 m/s²",

      examTip:
        "For a frictionless incline, only the component mg sinθ accelerates the block along the plane.",
    },
  },

  {
    id: "P-LOM-013",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Pseudo Force",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A passenger in a bus accelerating forward suddenly feels pushed backward. This happens because of:",

    options: [
      "Gravitational force",
      "Centripetal force",
      "Inertia",
      "Electrostatic force",
    ],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Inertia is the tendency of a body to resist a change in its state of motion.",

      steps: [
        "Initially, the passenger and bus are at rest relative to each other.",
        "When the bus accelerates forward, the lower part of the passenger moves forward with the bus.",
        "The upper part tends to remain in its original state due to inertia.",
        "Relative to the accelerating bus, the passenger appears to move backward.",
        "Therefore, the sensation is explained by inertia.",
      ],

      finalAnswer: "Inertia",

      examTip:
        "Bus starts suddenly → passenger tends backward. Bus stops suddenly → passenger tends forward.",
    },
  },

  {
    id: "P-LOM-014",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Circular Motion",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A 2 kg object moves in a circle of radius 4 m with speed 6 m/s. What centripetal force is required?",

    options: ["9 N", "12 N", "18 N", "36 N"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Centripetal force is Fc = mv²/r.",

      steps: [
        "Mass m = 2 kg.",
        "Speed v = 6 m/s.",
        "Radius r = 4 m.",
        "Fc = mv²/r.",
        "Fc = 2 × 6² / 4.",
        "Fc = 2 × 36 / 4.",
        "Fc = 72/4.",
        "Fc = 18 N.",
      ],

      finalAnswer: "18 N",

      examTip:
        "Centripetal force always acts toward the centre of the circular path.",
    },
  },

  {
    id: "P-LOM-015",
    subject: "P",
    chapter: "Laws of Motion",
    topic: "Momentum and Impulse",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A 0.5 kg ball moving at 20 m/s strikes a wall and rebounds with a velocity of 10 m/s in the opposite direction. What is the magnitude of the change in momentum?",

    options: ["5 kg·m/s", "10 kg·m/s", "15 kg·m/s", "20 kg·m/s"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Change in momentum is Δp = pf - pi. Direction must be included when calculating momentum.",

      steps: [
        "Take the initial direction as positive.",
        "Initial velocity vi = +20 m/s.",
        "Final velocity vf = -10 m/s because the ball rebounds.",
        "Initial momentum pi = mvi = 0.5 × 20 = 10 kg·m/s.",
        "Final momentum pf = mvf = 0.5 × (-10) = -5 kg·m/s.",
        "Change in momentum = pf - pi.",
        "Δp = -5 - 10 = -15 kg·m/s.",
        "Therefore, the magnitude of change in momentum is 15 kg·m/s.",
      ],

      finalAnswer: "15 kg·m/s",

      examTip:
        "When an object rebounds, the velocity changes sign. This is a common CET trap.",
    },
  },
];

export default lawsOfMotionQuestions;
