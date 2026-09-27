const vectorsQuestions = [
  {
    id: "P-VEC-001",
    subject: "P",
    chapter: "Vectors",
    topic: "Scalar and Vector Quantities",
    difficulty: "Easy",
    type: "Practice",

    questionText: "Which of the following is a vector quantity?",

    options: ["Speed", "Distance", "Mass", "Velocity"],

    correctAnswerIndex: 3,

    solution: {
      concept: "A vector quantity has both magnitude and direction.",

      steps: [
        "Speed has magnitude only and is a scalar.",
        "Distance has magnitude only and is a scalar.",
        "Mass has magnitude only and is a scalar.",
        "Velocity has both magnitude and direction.",
        "Therefore, velocity is a vector quantity.",
      ],

      finalAnswer: "Velocity",

      examTip:
        "Velocity, acceleration, force, momentum and displacement are common vector quantities.",
    },
  },

  {
    id: "P-VEC-002",
    subject: "P",
    chapter: "Vectors",
    topic: "Vector Addition",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "Two vectors of magnitudes 3 N and 4 N act in the same direction. What is the magnitude of their resultant?",

    options: ["1 N", "5 N", "7 N", "12 N"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Vectors acting in the same direction are added directly.",

      steps: [
        "First vector = 3 N.",
        "Second vector = 4 N.",
        "Since both vectors act in the same direction:",
        "Resultant = 3 + 4.",
        "Resultant = 7 N.",
      ],

      finalAnswer: "7 N",

      examTip: "Same direction → add magnitudes.",
    },
  },

  {
    id: "P-VEC-003",
    subject: "P",
    chapter: "Vectors",
    topic: "Vector Addition",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "Two vectors of magnitudes 8 N and 3 N act in opposite directions. What is the magnitude of their resultant?",

    options: ["5 N", "11 N", "24 N", "2.67 N"],

    correctAnswerIndex: 0,

    solution: {
      concept:
        "For two vectors acting in opposite directions, the magnitude of the resultant is the difference of their magnitudes.",

      steps: [
        "First vector = 8 N.",
        "Second vector = 3 N.",
        "The vectors act in opposite directions.",
        "Resultant magnitude = |8 - 3|.",
        "Resultant magnitude = 5 N.",
      ],

      finalAnswer: "5 N",

      examTip: "Opposite direction → subtract magnitudes.",
    },
  },

  {
    id: "P-VEC-004",
    subject: "P",
    chapter: "Vectors",
    topic: "Unit Vector",
    difficulty: "Easy",
    type: "Practice",

    questionText: "What is the magnitude of a unit vector?",

    options: ["0", "1", "Depends on direction", "Depends on its components"],

    correctAnswerIndex: 1,

    solution: {
      concept: "A unit vector is a vector whose magnitude is exactly one.",

      steps: [
        "By definition, a unit vector has magnitude equal to 1.",
        "Its purpose is to represent direction without changing magnitude information.",
      ],

      finalAnswer: "1",

      examTip: "Unit vector = vector of magnitude 1.",
    },
  },

  {
    id: "P-VEC-005",
    subject: "P",
    chapter: "Vectors",
    topic: "Vector Components",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A vector of magnitude 10 units acts along the positive x-axis. What are its x and y components?",

    options: ["0, 10", "10, 0", "5, 5", "10, 10"],

    correctAnswerIndex: 1,

    solution: {
      concept: "A vector along the x-axis has no component in the y-direction.",

      steps: [
        "The vector magnitude is 10 units.",
        "It acts completely along the positive x-axis.",
        "Therefore, x-component = 10.",
        "There is no y-component.",
        "Therefore, y-component = 0.",
      ],

      finalAnswer: "x = 10, y = 0",

      examTip:
        "Along x-axis → y-component is zero. Along y-axis → x-component is zero.",
    },
  },

  {
    id: "P-VEC-006",
    subject: "P",
    chapter: "Vectors",
    topic: "Vector Components",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A vector of magnitude 10 units makes an angle of 60° with the positive x-axis. What is its x-component?",

    options: ["5 units", "5√3 units", "10 units", "10√3 units"],

    correctAnswerIndex: 0,

    solution: {
      concept:
        "For a vector A making an angle θ with the x-axis, its x-component is A cos θ.",

      steps: [
        "Magnitude A = 10.",
        "Angle θ = 60°.",
        "Ax = A cos θ.",
        "Ax = 10 cos 60°.",
        "cos 60° = 1/2.",
        "Ax = 10 × 1/2 = 5 units.",
      ],

      finalAnswer: "5 units",

      examTip: "x-component → A cos θ; y-component → A sin θ.",
    },
  },

  {
    id: "P-VEC-007",
    subject: "P",
    chapter: "Vectors",
    topic: "Vector Components",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A vector of magnitude 20 units makes an angle of 30° with the x-axis. What is its y-component?",

    options: ["10 units", "10√3 units", "20 units", "5 units"],

    correctAnswerIndex: 0,

    solution: {
      concept:
        "The component of a vector perpendicular to the x-axis is A sin θ.",

      steps: [
        "Magnitude A = 20.",
        "Angle θ = 30°.",
        "Ay = A sin θ.",
        "Ay = 20 sin 30°.",
        "sin 30° = 1/2.",
        "Ay = 20 × 1/2 = 10 units.",
      ],

      finalAnswer: "10 units",

      examTip:
        "Always check whether the given angle is measured from the x-axis or y-axis.",
    },
  },

  {
    id: "P-VEC-008",
    subject: "P",
    chapter: "Vectors",
    topic: "Resultant Vector",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "Two perpendicular vectors have magnitudes 6 N and 8 N. What is the magnitude of their resultant?",

    options: ["2 N", "10 N", "14 N", "48 N"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "For two perpendicular vectors, the resultant magnitude is obtained using Pythagoras' theorem.",

      steps: [
        "First vector = 6 N.",
        "Second vector = 8 N.",
        "Since they are perpendicular:",
        "R² = 6² + 8².",
        "R² = 36 + 64 = 100.",
        "R = √100 = 10 N.",
      ],

      finalAnswer: "10 N",

      examTip: "For perpendicular vectors: R = √(A² + B²).",
    },
  },

  {
    id: "P-VEC-009",
    subject: "P",
    chapter: "Vectors",
    topic: "Resultant Vector",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "Two vectors of magnitudes 5 N and 5 N act at an angle of 60°. What is the magnitude of their resultant?",

    options: ["5 N", "5√2 N", "5√3 N", "10 N"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "For two vectors A and B with angle θ between them, R = √(A² + B² + 2AB cos θ).",

      steps: [
        "A = 5 N.",
        "B = 5 N.",
        "θ = 60°.",
        "R² = 5² + 5² + 2(5)(5)cos60°.",
        "R² = 25 + 25 + 50(1/2).",
        "R² = 75.",
        "R = √75 = 5√3 N.",
      ],

      finalAnswer: "5√3 N",

      examTip: "For equal vectors A and A, R = 2A cos(θ/2).",
    },
  },

  {
    id: "P-VEC-010",
    subject: "P",
    chapter: "Vectors",
    topic: "Dot Product",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "Two vectors have magnitudes 4 and 5 and are perpendicular to each other. What is their dot product?",

    options: ["0", "9", "20", "1"],

    correctAnswerIndex: 0,

    solution: {
      concept: "The dot product of two vectors is A·B = AB cos θ.",

      steps: [
        "A = 4.",
        "B = 5.",
        "The angle between them is 90°.",
        "A·B = AB cos90°.",
        "cos90° = 0.",
        "Therefore, A·B = 0.",
      ],

      finalAnswer: "0",

      examTip: "Perpendicular vectors always have zero dot product.",
    },
  },

  {
    id: "P-VEC-011",
    subject: "P",
    chapter: "Vectors",
    topic: "Dot Product",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "If two vectors have magnitudes 6 and 4 and their dot product is 12, what is the angle between them?",

    options: ["30°", "45°", "60°", "90°"],

    correctAnswerIndex: 2,

    solution: {
      concept: "The dot product is given by A·B = AB cos θ.",

      steps: [
        "A = 6.",
        "B = 4.",
        "A·B = 12.",
        "Therefore, 12 = (6)(4)cos θ.",
        "12 = 24 cos θ.",
        "cos θ = 12/24 = 1/2.",
        "Therefore, θ = 60°.",
      ],

      finalAnswer: "60°",

      examTip: "First isolate cos θ from the dot-product formula.",
    },
  },

  {
    id: "P-VEC-012",
    subject: "P",
    chapter: "Vectors",
    topic: "Cross Product",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "Two vectors have magnitudes 4 and 6 and are perpendicular to each other. What is the magnitude of their cross product?",

    options: ["2", "10", "24", "0"],

    correctAnswerIndex: 2,

    solution: {
      concept: "The magnitude of the cross product is |A × B| = AB sin θ.",

      steps: [
        "A = 4.",
        "B = 6.",
        "The vectors are perpendicular, so θ = 90°.",
        "|A × B| = AB sin90°.",
        "|A × B| = 4 × 6 × 1.",
        "|A × B| = 24.",
      ],

      finalAnswer: "24",

      examTip: "For perpendicular vectors, cross-product magnitude is maximum.",
    },
  },

  {
    id: "P-VEC-013",
    subject: "P",
    chapter: "Vectors",
    topic: "Unit Vector",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "What is the unit vector in the direction of the vector 3i + 4j?",

    options: [
      "3i + 4j",
      "(3/5)i + (4/5)j",
      "(4/5)i + (3/5)j",
      "(1/3)i + (1/4)j",
    ],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "A unit vector in the direction of a vector is obtained by dividing the vector by its magnitude.",

      steps: [
        "Given vector A = 3i + 4j.",
        "Magnitude of A = √(3² + 4²).",
        "Magnitude = √(9 + 16) = √25 = 5.",
        "Unit vector = A / |A|.",
        "Therefore, unit vector = (3/5)i + (4/5)j.",
      ],

      finalAnswer: "(3/5)i + (4/5)j",

      examTip:
        "First calculate the magnitude, then divide every component by it.",
    },
  },

  {
    id: "P-VEC-014",
    subject: "P",
    chapter: "Vectors",
    topic: "Resultant Vector",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "Two vectors of magnitudes 10 N and 6 N have a resultant of 14 N. What is the angle between the two vectors?",

    options: ["30°", "60°", "90°", "120°"],

    correctAnswerIndex: 1,

    solution: {
      concept: "The resultant of two vectors is R² = A² + B² + 2AB cos θ.",

      steps: [
        "A = 10 N.",
        "B = 6 N.",
        "R = 14 N.",
        "Substitute into the resultant formula:",
        "14² = 10² + 6² + 2(10)(6)cos θ.",
        "196 = 100 + 36 + 120 cos θ.",
        "196 = 136 + 120 cos θ.",
        "60 = 120 cos θ.",
        "cos θ = 1/2.",
        "Therefore, θ = 60°.",
      ],

      finalAnswer: "60°",

      examTip:
        "Write the complete resultant formula before substituting values.",
    },
  },

  {
    id: "P-VEC-015",
    subject: "P",
    chapter: "Vectors",
    topic: "Vector Addition",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A force of 10 N acts along the positive x-axis and another force of 10 N acts along the positive y-axis. What is the magnitude and direction of the resultant force?",

    options: ["10 N at 45°", "20 N at 45°", "10√2 N at 45°", "20 N at 90°"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Perpendicular vector components can be combined using the resultant formula.",

      steps: [
        "Fx = 10 N.",
        "Fy = 10 N.",
        "The two components are perpendicular.",
        "Resultant R = √(Fx² + Fy²).",
        "R = √(10² + 10²).",
        "R = √200 = 10√2 N.",
        "Since the x and y components are equal, the resultant makes an angle of 45° with the x-axis.",
      ],

      finalAnswer: "10√2 N at 45° to the positive x-axis",

      examTip:
        "Equal perpendicular components always give a 45° resultant direction.",
    },
  },
];

export default vectorsQuestions;
