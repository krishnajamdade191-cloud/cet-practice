const kinematicsQuestions = [
  {
    id: "P-KIN-001",
    subject: "P",
    chapter: "Kinematics",
    topic: "Distance and Displacement",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A particle moves 5 m east and then 3 m west. What are the total distance travelled and magnitude of displacement respectively?",

    options: ["2 m, 8 m", "8 m, 2 m", "5 m, 3 m", "8 m, 8 m"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Distance is the total path travelled, while displacement is the shortest directed distance between the initial and final positions.",

      steps: [
        "Distance travelled = 5 + 3 = 8 m.",
        "Take east as positive.",
        "Displacement = +5 - 3 = +2 m.",
        "Therefore, the magnitude of displacement is 2 m.",
      ],

      finalAnswer: "Distance = 8 m, Displacement = 2 m",

      examTip:
        "Distance is always greater than or equal to the magnitude of displacement.",
    },
  },

  {
    id: "P-KIN-002",
    subject: "P",
    chapter: "Kinematics",
    topic: "Average Speed",
    difficulty: "Easy",
    type: "Practice",

    questionText: "A car travels 60 km in 2 hours. What is its average speed?",

    options: ["20 km/h", "30 km/h", "60 km/h", "120 km/h"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Average speed is the total distance travelled divided by the total time taken.",

      steps: [
        "Total distance = 60 km.",
        "Total time = 2 h.",
        "Average speed = Total distance / Total time.",
        "Average speed = 60 / 2 = 30 km/h.",
      ],

      finalAnswer: "30 km/h",

      examTip: "For average speed, use total distance divided by total time.",
    },
  },

  {
    id: "P-KIN-003",
    subject: "P",
    chapter: "Kinematics",
    topic: "Average Velocity",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A particle moves from position x = 2 m to x = 14 m in 4 s. What is its average velocity?",

    options: ["2 m/s", "3 m/s", "4 m/s", "16 m/s"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Average velocity is displacement divided by the time interval.",

      steps: [
        "Initial position = 2 m.",
        "Final position = 14 m.",
        "Displacement = 14 - 2 = 12 m.",
        "Time interval = 4 s.",
        "Average velocity = 12 / 4 = 3 m/s.",
      ],

      finalAnswer: "3 m/s",

      examTip: "Velocity depends on displacement, not total distance.",
    },
  },

  {
    id: "P-KIN-004",
    subject: "P",
    chapter: "Kinematics",
    topic: "Equations of Motion",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A body starts from rest and accelerates uniformly at 2 m/s². What will be its velocity after 5 s?",

    options: ["5 m/s", "7 m/s", "10 m/s", "20 m/s"],

    correctAnswerIndex: 2,

    solution: {
      concept: "For uniformly accelerated motion, v = u + at.",

      steps: [
        "Initial velocity u = 0 m/s.",
        "Acceleration a = 2 m/s².",
        "Time t = 5 s.",
        "Using v = u + at:",
        "v = 0 + (2)(5).",
        "v = 10 m/s.",
      ],

      finalAnswer: "10 m/s",

      examTip: "When a body starts from rest, u = 0.",
    },
  },

  {
    id: "P-KIN-005",
    subject: "P",
    chapter: "Kinematics",
    topic: "Equations of Motion",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A body has an initial velocity of 5 m/s and acceleration of 2 m/s². Find the distance travelled in 4 s.",

    options: ["20 m", "28 m", "36 m", "40 m"],

    correctAnswerIndex: 1,

    solution: {
      concept: "For uniformly accelerated motion, s = ut + 1/2 at².",

      steps: [
        "Initial velocity u = 5 m/s.",
        "Acceleration a = 2 m/s².",
        "Time t = 4 s.",
        "s = ut + 1/2 at².",
        "s = (5)(4) + 1/2(2)(4²).",
        "s = 20 + 16.",
        "s = 36 m.",
      ],

      finalAnswer: "36 m",

      examTip: "Be careful when substituting t² in the second term.",
    },
  },

  {
    id: "P-KIN-006",
    subject: "P",
    chapter: "Kinematics",
    topic: "Equations of Motion",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A car moving with a velocity of 20 m/s is brought to rest with a uniform retardation of 4 m/s². What distance does it travel before stopping?",

    options: ["25 m", "40 m", "50 m", "100 m"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "When final velocity is known, the equation v² = u² + 2as is useful.",

      steps: [
        "Initial velocity u = 20 m/s.",
        "Final velocity v = 0 m/s.",
        "Retardation = 4 m/s², so acceleration a = -4 m/s².",
        "Using v² = u² + 2as:",
        "0² = 20² + 2(-4)s.",
        "0 = 400 - 8s.",
        "8s = 400.",
        "s = 50 m.",
      ],

      finalAnswer: "50 m",

      examTip: "Retardation should be taken as negative acceleration.",
    },
  },

  {
    id: "P-KIN-007",
    subject: "P",
    chapter: "Kinematics",
    topic: "Free Fall",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A stone is dropped from rest. Taking g = 10 m/s², what is its velocity after 3 s?",

    options: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "A freely falling body has acceleration equal to g. For a body dropped from rest, initial velocity is zero.",

      steps: [
        "Initial velocity u = 0.",
        "Acceleration a = g = 10 m/s².",
        "Time t = 3 s.",
        "Using v = u + at:",
        "v = 0 + (10)(3).",
        "v = 30 m/s.",
      ],

      finalAnswer: "30 m/s downward",

      examTip: "If the body is dropped, its initial velocity is zero.",
    },
  },

  {
    id: "P-KIN-008",
    subject: "P",
    chapter: "Kinematics",
    topic: "Free Fall",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A stone is dropped from a height of 45 m. Taking g = 10 m/s², how much time does it take to reach the ground?",

    options: ["2 s", "3 s", "4 s", "5 s"],

    correctAnswerIndex: 1,

    solution: {
      concept: "For an object dropped from rest, s = 1/2 gt².",

      steps: [
        "Height s = 45 m.",
        "Initial velocity u = 0.",
        "Acceleration g = 10 m/s².",
        "Using s = 1/2 gt²:",
        "45 = 1/2 × 10 × t².",
        "45 = 5t².",
        "t² = 9.",
        "t = 3 s.",
      ],

      finalAnswer: "3 s",

      examTip: "For free fall from rest, s = 1/2 gt².",
    },
  },

  {
    id: "P-KIN-009",
    subject: "P",
    chapter: "Kinematics",
    topic: "Velocity-Time Graph",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "The velocity of a particle increases uniformly from 10 m/s to 30 m/s in 5 s. What is its acceleration?",

    options: ["2 m/s²", "4 m/s²", "5 m/s²", "8 m/s²"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Acceleration is the rate of change of velocity with respect to time.",

      steps: [
        "Initial velocity u = 10 m/s.",
        "Final velocity v = 30 m/s.",
        "Time interval t = 5 s.",
        "Acceleration = (v - u) / t.",
        "a = (30 - 10) / 5.",
        "a = 20 / 5 = 4 m/s².",
      ],

      finalAnswer: "4 m/s²",

      examTip: "The slope of a velocity-time graph represents acceleration.",
    },
  },

  {
    id: "P-KIN-010",
    subject: "P",
    chapter: "Kinematics",
    topic: "Velocity-Time Graph",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A particle moves with a constant velocity of 8 m/s for 6 s. What is the displacement during this interval?",

    options: ["14 m", "24 m", "48 m", "64 m"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "For constant velocity, displacement is velocity multiplied by time.",

      steps: [
        "Velocity v = 8 m/s.",
        "Time t = 6 s.",
        "Displacement s = vt.",
        "s = 8 × 6.",
        "s = 48 m.",
      ],

      finalAnswer: "48 m",

      examTip: "The area under a velocity-time graph gives displacement.",
    },
  },

  {
    id: "P-KIN-011",
    subject: "P",
    chapter: "Kinematics",
    topic: "Average Speed",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A car travels the first half of a journey at 30 km/h and the second half at 60 km/h. What is its average speed for the complete journey?",

    options: ["40 km/h", "45 km/h", "50 km/h", "60 km/h"],

    correctAnswerIndex: 0,

    solution: {
      concept:
        "When equal distances are covered at different speeds, average speed is the harmonic mean: 2v₁v₂/(v₁ + v₂).",

      steps: [
        "Let the total distance be 2d.",
        "First half distance = d at 30 km/h.",
        "Time for first half = d/30.",
        "Second half distance = d at 60 km/h.",
        "Time for second half = d/60.",
        "Total time = d/30 + d/60.",
        "Total time = 2d/60 + d/60 = 3d/60 = d/20.",
        "Average speed = Total distance / Total time.",
        "Average speed = 2d / (d/20) = 40 km/h.",
      ],

      finalAnswer: "40 km/h",

      examTip:
        "For equal distances, do not take the simple average of the two speeds.",
    },
  },

  {
    id: "P-KIN-012",
    subject: "P",
    chapter: "Kinematics",
    topic: "Relative Velocity",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "Two cars move in the same direction with speeds 72 km/h and 54 km/h. What is the speed of the first car relative to the second car?",

    options: ["18 km/h", "36 km/h", "54 km/h", "126 km/h"],

    correctAnswerIndex: 0,

    solution: {
      concept:
        "For two objects moving in the same direction, relative velocity is the difference of their velocities.",

      steps: [
        "Velocity of first car = 72 km/h.",
        "Velocity of second car = 54 km/h.",
        "Relative velocity = 72 - 54.",
        "Relative velocity = 18 km/h.",
      ],

      finalAnswer: "18 km/h",

      examTip:
        "Same direction → subtract speeds. Opposite directions → add speeds.",
    },
  },

  {
    id: "P-KIN-013",
    subject: "P",
    chapter: "Kinematics",
    topic: "Equations of Motion",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A particle moving with an initial velocity of 10 m/s accelerates uniformly at 3 m/s². What distance does it cover during the 5th second?",

    options: ["20.5 m", "21.5 m", "23.5 m", "25.5 m"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Distance travelled during the nth second is given by sₙ = u + a/2(2n - 1).",

      steps: [
        "Initial velocity u = 10 m/s.",
        "Acceleration a = 3 m/s².",
        "For the 5th second, n = 5.",
        "Use sₙ = u + a/2(2n - 1).",
        "s₅ = 10 + 3/2(2 × 5 - 1).",
        "s₅ = 10 + 3/2(9).",
        "s₅ = 10 + 13.5.",
        "s₅ = 23.5 m.",
      ],

      finalAnswer: "23.5 m",

      examTip:
        "Distance in the nth second is different from total distance travelled in n seconds.",
    },
  },

  {
    id: "P-KIN-014",
    subject: "P",
    chapter: "Kinematics",
    topic: "Equations of Motion",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A body covers 20 m during the first 2 s and 40 m during the next 2 s under uniform acceleration. What is its acceleration?",

    options: ["2.5 m/s²", "5 m/s²", "7.5 m/s²", "10 m/s²"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "For uniformly accelerated motion, displacement can be calculated using s = ut + 1/2 at².",

      steps: [
        "Distance in first 2 s = 20 m.",
        "Therefore, 20 = 2u + 1/2 a(2²).",
        "So, 20 = 2u + 2a.",
        "Distance in the first 4 s = 20 + 40 = 60 m.",
        "Using s = ut + 1/2 at² for 4 s:",
        "60 = 4u + 1/2 a(4²).",
        "So, 60 = 4u + 8a.",
        "Multiply the first equation by 2: 40 = 4u + 4a.",
        "Subtract: 60 - 40 = (4u + 8a) - (4u + 4a).",
        "20 = 4a.",
        "Therefore, a = 5 m/s².",
      ],

      finalAnswer: "5 m/s²",

      examTip:
        "When a question gives distances for consecutive time intervals, write equations for cumulative distances carefully.",
    },
  },

  {
    id: "P-KIN-015",
    subject: "P",
    chapter: "Kinematics",
    topic: "Graphical Analysis",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A velocity-time graph is a straight line increasing from 0 m/s to 20 m/s in 10 s. What is the displacement of the particle during this interval?",

    options: ["50 m", "100 m", "150 m", "200 m"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Displacement is equal to the area under the velocity-time graph.",

      steps: [
        "The graph forms a triangle because velocity increases uniformly from zero.",
        "Base of triangle = 10 s.",
        "Height of triangle = 20 m/s.",
        "Area = 1/2 × base × height.",
        "Displacement = 1/2 × 10 × 20.",
        "Displacement = 100 m.",
      ],

      finalAnswer: "100 m",

      examTip:
        "For a triangular v-t graph, displacement = 1/2 × base × height.",
    },
  },
];

export default kinematicsQuestions;
