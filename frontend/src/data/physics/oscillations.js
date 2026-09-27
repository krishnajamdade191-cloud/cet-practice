const oscillationsQuestions = [
  {
    id: "P-OSC-001",
    subject: "P",
    chapter: "Oscillations",
    topic: "Simple Harmonic Motion",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "Which of the following conditions represents simple harmonic motion?",
    options: [
      "Acceleration is proportional to displacement and directed away from the mean position",
      "Acceleration is proportional to displacement and directed towards the mean position",
      "Velocity is proportional to displacement and directed away from the mean position",
      "Force is independent of displacement",
    ],
    correctAnswerIndex: 1,
    correctAnswerText:
      "Acceleration is proportional to displacement and directed towards the mean position",
    solution: {
      concept:
        "In SHM, the restoring acceleration is directly proportional to displacement and opposite in direction.",
      steps: [
        "For SHM, acceleration is given by a = -ω²x.",
        "The negative sign indicates that acceleration is always directed towards the mean position.",
      ],
      finalAnswer:
        "Acceleration is proportional to displacement and directed towards the mean position.",
      examTip: "Remember the defining relation: a ∝ -x.",
    },
  },

  {
    id: "P-OSC-002",
    subject: "P",
    chapter: "Oscillations",
    topic: "Time Period and Frequency",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "A particle completes 20 oscillations in 10 seconds. What is its frequency?",
    options: ["0.5 Hz", "2 Hz", "10 Hz", "20 Hz"],
    correctAnswerIndex: 1,
    correctAnswerText: "2 Hz",
    solution: {
      concept: "Frequency is the number of oscillations completed per second.",
      steps: [
        "Number of oscillations = 20.",
        "Time = 10 s.",
        "Frequency f = Number of oscillations / Time.",
        "f = 20 / 10 = 2 Hz.",
      ],
      finalAnswer: "2 Hz",
    },
  },

  {
    id: "P-OSC-003",
    subject: "P",
    chapter: "Oscillations",
    topic: "Angular Frequency",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "An oscillator has a time period of 2 s. What is its angular frequency?",
    options: ["π/2 rad/s", "π rad/s", "2π rad/s", "4π rad/s"],
    correctAnswerIndex: 1,
    correctAnswerText: "π rad/s",
    solution: {
      concept: "Angular frequency is related to time period by ω = 2π/T.",
      steps: ["Given T = 2 s.", "ω = 2π/T.", "ω = 2π/2 = π rad/s."],
      finalAnswer: "π rad/s",
    },
  },

  {
    id: "P-OSC-004",
    subject: "P",
    chapter: "Oscillations",
    topic: "Velocity in SHM",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "For a particle executing SHM, where is its velocity maximum?",
    options: [
      "At the extreme position",
      "At the mean position",
      "Halfway between mean and extreme position only",
      "Velocity is constant everywhere",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "At the mean position",
    solution: {
      concept:
        "In SHM, the particle has maximum kinetic energy and hence maximum speed at the mean position.",
      steps: [
        "At the mean position, displacement x = 0.",
        "Using v = ω√(A² - x²), when x = 0, v = ωA.",
        "Therefore velocity is maximum at the mean position.",
      ],
      finalAnswer: "At the mean position",
      examTip:
        "In SHM: speed is maximum at mean position and zero at extreme positions.",
    },
  },

  {
    id: "P-OSC-005",
    subject: "P",
    chapter: "Oscillations",
    topic: "Acceleration in SHM",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "Where is the magnitude of acceleration maximum for a particle executing SHM?",
    options: [
      "At the mean position",
      "At either extreme position",
      "At x = A/2 only",
      "It is the same everywhere",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "At either extreme position",
    solution: {
      concept: "For SHM, a = -ω²x.",
      steps: [
        "The magnitude of acceleration is |a| = ω²|x|.",
        "Displacement has maximum magnitude at the extreme positions, where |x| = A.",
        "Therefore acceleration magnitude is maximum there.",
      ],
      finalAnswer: "At either extreme position",
    },
  },

  {
    id: "P-OSC-006",
    subject: "P",
    chapter: "Oscillations",
    topic: "Maximum Velocity",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A particle performs SHM with amplitude 0.20 m and angular frequency 5 rad/s. What is its maximum speed?",
    options: ["0.2 m/s", "0.5 m/s", "1.0 m/s", "2.5 m/s"],
    correctAnswerIndex: 2,
    correctAnswerText: "1.0 m/s",
    solution: {
      concept: "Maximum speed in SHM is vmax = ωA.",
      steps: [
        "Amplitude A = 0.20 m.",
        "Angular frequency ω = 5 rad/s.",
        "vmax = ωA = 5 × 0.20.",
        "vmax = 1.0 m/s.",
      ],
      finalAnswer: "1.0 m/s",
    },
  },

  {
    id: "P-OSC-007",
    subject: "P",
    chapter: "Oscillations",
    topic: "Maximum Acceleration",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A particle executes SHM with amplitude 0.10 m and angular frequency 4 rad/s. What is the maximum acceleration?",
    options: ["0.4 m/s²", "0.8 m/s²", "1.6 m/s²", "4.0 m/s²"],
    correctAnswerIndex: 2,
    correctAnswerText: "1.6 m/s²",
    solution: {
      concept: "Maximum acceleration in SHM is amax = ω²A.",
      steps: [
        "A = 0.10 m and ω = 4 rad/s.",
        "amax = ω²A.",
        "amax = 4² × 0.10.",
        "amax = 16 × 0.10 = 1.6 m/s².",
      ],
      finalAnswer: "1.6 m/s²",
    },
  },

  {
    id: "P-OSC-008",
    subject: "P",
    chapter: "Oscillations",
    topic: "Energy in SHM",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "At which position is the kinetic energy equal to the potential energy of a particle executing SHM?",
    options: ["x = 0", "x = A", "x = A/√2", "x = A/2"],
    correctAnswerIndex: 2,
    correctAnswerText: "x = A/√2",
    solution: {
      concept:
        "For SHM, total energy E = 1/2 kA² and potential energy U = 1/2 kx².",
      steps: [
        "If kinetic energy equals potential energy, then U = E/2.",
        "Therefore (1/2)kx² = (1/4)kA².",
        "Cancelling k gives x² = A²/2.",
        "Hence |x| = A/√2.",
      ],
      finalAnswer: "x = ±A/√2",
      examTip:
        "If the question asks for distance from the mean position, use A/√2.",
    },
  },

  {
    id: "P-OSC-009",
    subject: "P",
    chapter: "Oscillations",
    topic: "Spring-Mass System",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A mass attached to a spring oscillates with time period T. If the mass is made four times larger while the spring constant remains unchanged, the new time period will be:",
    options: ["T/2", "T", "2T", "4T"],
    correctAnswerIndex: 2,
    correctAnswerText: "2T",
    solution: {
      concept: "For a spring-mass system, T = 2π√(m/k).",
      steps: [
        "Initially, T = 2π√(m/k).",
        "New mass m' = 4m.",
        "T' = 2π√(4m/k).",
        "T' = 2T.",
      ],
      finalAnswer: "2T",
    },
  },

  {
    id: "P-OSC-010",
    subject: "P",
    chapter: "Oscillations",
    topic: "Simple Pendulum",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The length of a simple pendulum is increased by a factor of 4. How does its time period change?",
    options: [
      "It becomes half",
      "It remains unchanged",
      "It becomes twice",
      "It becomes four times",
    ],
    correctAnswerIndex: 2,
    correctAnswerText: "It becomes twice",
    solution: {
      concept: "For a simple pendulum, T = 2π√(L/g).",
      steps: [
        "Initially T ∝ √L.",
        "New length L' = 4L.",
        "Therefore T'/T = √(L'/L) = √4 = 2.",
      ],
      finalAnswer: "The time period becomes twice.",
    },
  },

  {
    id: "P-OSC-011",
    subject: "P",
    chapter: "Oscillations",
    topic: "Phase Difference",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "Two particles executing SHM have a phase difference of π radians. If they have the same amplitude and frequency, their displacements at any instant are:",
    options: ["Always equal", "Always opposite", "Always zero", "Unrelated"],
    correctAnswerIndex: 1,
    correctAnswerText: "Always opposite",
    solution: {
      concept:
        "A phase difference of π means the particles are half a cycle apart.",
      steps: [
        "Let the displacement of the first particle be x = A sin(ωt).",
        "For a phase difference of π, the second displacement is x₂ = A sin(ωt + π).",
        "Since sin(θ + π) = -sinθ, x₂ = -x₁.",
        "Therefore their displacements are always opposite.",
      ],
      finalAnswer: "Always opposite",
    },
  },

  {
    id: "P-OSC-012",
    subject: "P",
    chapter: "Oscillations",
    topic: "Velocity and Acceleration Relation",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "For a particle executing SHM with amplitude A and angular frequency ω, the ratio of maximum acceleration to maximum velocity is:",
    options: ["A", "ω", "ω²", "1/ω"],
    correctAnswerIndex: 1,
    correctAnswerText: "ω",
    solution: {
      concept:
        "Maximum velocity is vmax = ωA and maximum acceleration is amax = ω²A.",
      steps: [
        "amax = ω²A.",
        "vmax = ωA.",
        "Therefore amax/vmax = (ω²A)/(ωA).",
        "Hence the ratio is ω.",
      ],
      finalAnswer: "ω",
    },
  },

  {
    id: "P-OSC-013",
    subject: "P",
    chapter: "Oscillations",
    topic: "Energy Distribution",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A particle executing SHM has amplitude A. At what displacement from the mean position is its kinetic energy 75% of its total energy?",
    options: ["A/4", "A/2", "A/√2", "√3 A/2"],
    correctAnswerIndex: 1,
    correctAnswerText: "A/2",
    solution: {
      concept:
        "For SHM, potential energy as a fraction of total energy is x²/A².",
      steps: [
        "Kinetic energy is 75% of total energy.",
        "Therefore potential energy is 25% of total energy.",
        "Thus x²/A² = 1/4.",
        "Therefore |x| = A/2.",
      ],
      finalAnswer: "x = ±A/2",
      examTip: "Use K/E = 1 - x²/A².",
    },
  },

  {
    id: "P-OSC-014",
    subject: "P",
    chapter: "Oscillations",
    topic: "Spring Oscillation",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A 0.5 kg mass is attached to a spring of force constant 200 N/m. What is the angular frequency of oscillation?",
    options: ["10 rad/s", "20 rad/s", "40 rad/s", "100 rad/s"],
    correctAnswerIndex: 1,
    correctAnswerText: "20 rad/s",
    solution: {
      concept: "For a spring-mass oscillator, angular frequency is ω = √(k/m).",
      steps: [
        "k = 200 N/m and m = 0.5 kg.",
        "ω = √(200/0.5).",
        "ω = √400.",
        "ω = 20 rad/s.",
      ],
      finalAnswer: "20 rad/s",
    },
  },

  {
    id: "P-OSC-015",
    subject: "P",
    chapter: "Oscillations",
    topic: "SHM Conceptual Graph",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A particle starts SHM from its positive extreme position at t = 0. Which equation correctly represents its displacement?",
    options: [
      "x = A sin(ωt)",
      "x = A cos(ωt)",
      "x = -A sin(ωt)",
      "x = -A cos(ωt)",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "x = A cos(ωt)",
    solution: {
      concept:
        "The displacement equation depends on the initial position and phase.",
      steps: [
        "At t = 0, the particle is at the positive extreme, so x = A.",
        "For x = A cos(ωt), at t = 0, x = A cos(0) = A.",
        "Therefore this equation satisfies the initial condition.",
        "Its initial velocity is also zero, as expected at the extreme position.",
      ],
      finalAnswer: "x = A cos(ωt)",
      examTip:
        "Starting from +A → cosine form. Starting from mean position → sine form is commonly used.",
    },
  },
];

export default oscillationsQuestions;
