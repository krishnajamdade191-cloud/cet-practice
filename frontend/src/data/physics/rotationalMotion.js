const rotationalMotionQuestions = [
  {
    id: "P-ROT-001",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Angular Displacement",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A wheel rotates through 180°. What is its angular displacement in radians?",

    options: ["π/2 rad", "π rad", "2π rad", "180 rad"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Angular displacement can be converted from degrees to radians using 180° = π radians.",

      steps: [
        "Given angular displacement = 180°.",
        "We know 180° = π radians.",
        "Therefore, angular displacement = π radians.",
      ],

      finalAnswer: "π rad",

      examTip: "180° = π rad, 360° = 2π rad and 90° = π/2 rad.",
    },
  },

  {
    id: "P-ROT-002",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Angular Velocity",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A wheel completes 5 revolutions in 10 s. What is its average angular velocity?",

    options: ["π/2 rad/s", "π rad/s", "2π rad/s", "5π rad/s"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Angular velocity is angular displacement divided by time.",

      steps: [
        "One complete revolution = 2π radians.",
        "Angular displacement for 5 revolutions = 5 × 2π = 10π rad.",
        "Time = 10 s.",
        "Angular velocity = 10π/10.",
        "Angular velocity = π rad/s.",
      ],

      finalAnswer: "π rad/s",

      examTip:
        "Convert revolutions into radians before calculating angular velocity.",
    },
  },

  {
    id: "P-ROT-003",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Angular Acceleration",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A rotating body changes its angular velocity from 10 rad/s to 30 rad/s in 5 s. What is its angular acceleration?",

    options: ["2 rad/s²", "4 rad/s²", "5 rad/s²", "8 rad/s²"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Angular acceleration is the rate of change of angular velocity.",

      steps: [
        "Initial angular velocity ω₁ = 10 rad/s.",
        "Final angular velocity ω₂ = 30 rad/s.",
        "Time = 5 s.",
        "Angular acceleration α = (ω₂ - ω₁)/t.",
        "α = (30 - 10)/5.",
        "α = 4 rad/s².",
      ],

      finalAnswer: "4 rad/s²",

      examTip: "Angular acceleration α is analogous to linear acceleration a.",
    },
  },

  {
    id: "P-ROT-004",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Relation Between Linear and Angular Velocity",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A point on the rim of a wheel of radius 0.5 m has an angular velocity of 4 rad/s. What is its linear speed?",

    options: ["1 m/s", "2 m/s", "4 m/s", "8 m/s"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Linear velocity and angular velocity are related by v = rω.",

      steps: [
        "Radius r = 0.5 m.",
        "Angular velocity ω = 4 rad/s.",
        "v = rω.",
        "v = 0.5 × 4.",
        "v = 2 m/s.",
      ],

      finalAnswer: "2 m/s",

      examTip: "For circular motion, v = rω.",
    },
  },

  {
    id: "P-ROT-005",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Torque",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A force of 10 N acts perpendicular to a lever arm of length 0.5 m. What torque is produced?",

    options: ["2 N·m", "5 N·m", "10 N·m", "20 N·m"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Torque is τ = rF sinθ.",

      steps: [
        "Force F = 10 N.",
        "Lever arm r = 0.5 m.",
        "The force is perpendicular, so θ = 90°.",
        "τ = rF sin90°.",
        "τ = 0.5 × 10 × 1.",
        "τ = 5 N·m.",
      ],

      finalAnswer: "5 N·m",

      examTip:
        "Maximum torque occurs when force is perpendicular to the lever arm.",
    },
  },

  {
    id: "P-ROT-006",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Torque",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A force of 20 N acts at an angle of 30° to a lever arm of length 2 m. What is the magnitude of the torque?",

    options: ["10 N·m", "20 N·m", "30 N·m", "40 N·m"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Torque is τ = rF sinθ, where θ is the angle between the position vector and force.",

      steps: [
        "r = 2 m.",
        "F = 20 N.",
        "θ = 30°.",
        "τ = rF sin30°.",
        "τ = 2 × 20 × 1/2.",
        "τ = 20 N·m.",
      ],

      finalAnswer: "20 N·m",

      examTip: "Use sinθ in the torque formula, not cosθ.",
    },
  },

  {
    id: "P-ROT-007",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Moment of Inertia",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "What is the moment of inertia of a point mass of 2 kg located 3 m from the axis of rotation?",

    options: ["6 kg·m²", "9 kg·m²", "18 kg·m²", "27 kg·m²"],

    correctAnswerIndex: 2,

    solution: {
      concept: "For a point mass, moment of inertia is I = mr².",

      steps: [
        "Mass m = 2 kg.",
        "Distance from axis r = 3 m.",
        "I = mr².",
        "I = 2 × 3².",
        "I = 2 × 9.",
        "I = 18 kg·m².",
      ],

      finalAnswer: "18 kg·m²",

      examTip:
        "Moment of inertia depends on the square of the distance from the axis.",
    },
  },

  {
    id: "P-ROT-008",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Radius of Gyration",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A body has mass 4 kg and moment of inertia 36 kg·m² about an axis. What is its radius of gyration?",

    options: ["2 m", "3 m", "6 m", "9 m"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Moment of inertia can be written as I = Mk², where k is the radius of gyration.",

      steps: [
        "I = 36 kg·m².",
        "Mass M = 4 kg.",
        "I = Mk².",
        "36 = 4k².",
        "k² = 9.",
        "k = 3 m.",
      ],

      finalAnswer: "3 m",

      examTip: "Radius of gyration is k = √(I/M).",
    },
  },

  {
    id: "P-ROT-009",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Angular Momentum",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A rotating body has moment of inertia 5 kg·m² and angular velocity 4 rad/s. What is its angular momentum?",

    options: ["1.25 kg·m²/s", "9 kg·m²/s", "20 kg·m²/s", "25 kg·m²/s"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Angular momentum of a rigid body rotating about a fixed axis is L = Iω.",

      steps: [
        "Moment of inertia I = 5 kg·m².",
        "Angular velocity ω = 4 rad/s.",
        "L = Iω.",
        "L = 5 × 4.",
        "L = 20 kg·m²/s.",
      ],

      finalAnswer: "20 kg·m²/s",

      examTip: "Angular momentum L = Iω.",
    },
  },

  {
    id: "P-ROT-010",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Rotational Kinetic Energy",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A disc has moment of inertia 2 kg·m² and rotates with angular velocity 5 rad/s. What is its rotational kinetic energy?",

    options: ["10 J", "20 J", "25 J", "50 J"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Rotational kinetic energy is K = 1/2 Iω².",

      steps: [
        "I = 2 kg·m².",
        "ω = 5 rad/s.",
        "K = 1/2 Iω².",
        "K = 1/2 × 2 × 5².",
        "K = 25 J.",
      ],

      finalAnswer: "25 J",

      examTip:
        "Rotational KE has the same structure as translational KE: 1/2 mv² becomes 1/2 Iω².",
    },
  },

  {
    id: "P-ROT-011",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Torque and Angular Acceleration",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A torque of 12 N·m acts on a body having a moment of inertia of 3 kg·m². What angular acceleration is produced?",

    options: ["2 rad/s²", "3 rad/s²", "4 rad/s²", "36 rad/s²"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Rotational form of Newton's second law is τ = Iα.",

      steps: [
        "Torque τ = 12 N·m.",
        "Moment of inertia I = 3 kg·m².",
        "Using τ = Iα:",
        "α = τ/I.",
        "α = 12/3.",
        "α = 4 rad/s².",
      ],

      finalAnswer: "4 rad/s²",

      examTip: "Linear: F = ma. Rotational: τ = Iα.",
    },
  },

  {
    id: "P-ROT-012",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Rolling Motion",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A wheel of radius 0.5 m rolls without slipping with a linear speed of 10 m/s. What is its angular velocity?",

    options: ["5 rad/s", "10 rad/s", "20 rad/s", "25 rad/s"],

    correctAnswerIndex: 2,

    solution: {
      concept: "For pure rolling motion, v = rω.",

      steps: [
        "Linear speed v = 10 m/s.",
        "Radius r = 0.5 m.",
        "Using v = rω:",
        "ω = v/r.",
        "ω = 10/0.5.",
        "ω = 20 rad/s.",
      ],

      finalAnswer: "20 rad/s",

      examTip: "For rolling without slipping, v = Rω.",
    },
  },

  {
    id: "P-ROT-013",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Rolling Motion",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A solid disc rolls without slipping down an incline. Which type of energy is involved in its motion?",

    options: [
      "Only translational kinetic energy",
      "Only rotational kinetic energy",
      "Both translational and rotational kinetic energy",
      "Only potential energy",
    ],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "A rolling body simultaneously translates through space and rotates about its centre of mass.",

      steps: [
        "The centre of mass of the disc moves forward, giving it translational kinetic energy.",
        "The disc also rotates about its centre, giving it rotational kinetic energy.",
        "Therefore, the total kinetic energy contains both components.",
      ],

      finalAnswer: "Both translational and rotational kinetic energy",

      examTip: "For rolling motion: K = 1/2 Mv² + 1/2 Iω².",
    },
  },

  {
    id: "P-ROT-014",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Conservation of Angular Momentum",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A skater spinning with arms extended pulls her arms inward. If no external torque acts, what happens to her angular velocity?",

    options: [
      "It decreases",
      "It remains constant",
      "It increases",
      "It becomes zero",
    ],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "When external torque is zero, angular momentum remains conserved.",

      steps: [
        "Angular momentum L = Iω.",
        "With no external torque, L remains constant.",
        "When the skater pulls her arms inward, her moment of inertia decreases.",
        "To keep Iω constant, angular velocity must increase.",
        "Therefore, she spins faster.",
      ],

      finalAnswer: "Angular velocity increases",

      examTip: "No external torque → angular momentum conserved.",
    },
  },

  {
    id: "P-ROT-015",
    subject: "P",
    chapter: "Rotational Motion",
    topic: "Rotational Dynamics",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A wheel starts from rest and rotates with a constant angular acceleration of 2 rad/s². What angular displacement does it cover in 5 s?",

    options: ["10 rad", "20 rad", "25 rad", "50 rad"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "For uniformly accelerated rotational motion, θ = ω₀t + 1/2 αt².",

      steps: [
        "Initial angular velocity ω₀ = 0.",
        "Angular acceleration α = 2 rad/s².",
        "Time t = 5 s.",
        "θ = ω₀t + 1/2 αt².",
        "θ = 0 + 1/2 × 2 × 5².",
        "θ = 25 rad.",
      ],

      finalAnswer: "25 rad",

      examTip:
        "Rotational equations are analogous to linear equations: s ↔ θ, u ↔ ω₀, a ↔ α.",
    },
  },
];

export default rotationalMotionQuestions;
