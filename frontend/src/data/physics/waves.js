const wavesQuestions = [
  {
    id: "P-WAV-001",
    subject: "P",
    chapter: "Waves",
    topic: "Wave Motion",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "Which of the following is necessary for the propagation of a mechanical wave?",
    options: [
      "Vacuum",
      "A material medium",
      "Only electric field",
      "Only magnetic field",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "A material medium",
    solution: {
      concept:
        "Mechanical waves require particles of a medium to transfer energy from one point to another.",
      steps: [
        "Mechanical waves propagate through vibrations of particles of a material medium.",
        "Therefore they cannot propagate through vacuum.",
      ],
      finalAnswer: "A material medium",
    },
  },

  {
    id: "P-WAV-002",
    subject: "P",
    chapter: "Waves",
    topic: "Wave Parameters",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "A wave has frequency 50 Hz and wavelength 2 m. What is its speed?",
    options: ["25 m/s", "50 m/s", "100 m/s", "150 m/s"],
    correctAnswerIndex: 2,
    correctAnswerText: "100 m/s",
    solution: {
      concept: "Wave speed is given by v = fλ.",
      steps: [
        "Frequency f = 50 Hz.",
        "Wavelength λ = 2 m.",
        "v = fλ = 50 × 2.",
        "v = 100 m/s.",
      ],
      finalAnswer: "100 m/s",
    },
  },

  {
    id: "P-WAV-003",
    subject: "P",
    chapter: "Waves",
    topic: "Frequency and Time Period",
    difficulty: "Easy",
    type: "Practice",
    questionText: "A wave has a time period of 0.02 s. What is its frequency?",
    options: ["20 Hz", "50 Hz", "100 Hz", "200 Hz"],
    correctAnswerIndex: 1,
    correctAnswerText: "50 Hz",
    solution: {
      concept: "Frequency is the reciprocal of time period: f = 1/T.",
      steps: ["T = 0.02 s.", "f = 1/T.", "f = 1/0.02 = 50 Hz."],
      finalAnswer: "50 Hz",
    },
  },

  {
    id: "P-WAV-004",
    subject: "P",
    chapter: "Waves",
    topic: "Transverse and Longitudinal Waves",
    difficulty: "Easy",
    type: "Practice",
    questionText: "In a transverse wave, the particles of the medium vibrate:",
    options: [
      "Parallel to the direction of wave propagation",
      "Perpendicular to the direction of wave propagation",
      "Only in circular paths",
      "Without any displacement",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Perpendicular to the direction of wave propagation",
    solution: {
      concept:
        "The defining feature of a transverse wave is that particle vibration is perpendicular to wave propagation.",
      steps: [
        "The wave travels in one direction.",
        "Particles oscillate at right angles to that direction.",
      ],
      finalAnswer: "Perpendicular to the direction of wave propagation",
    },
  },

  {
    id: "P-WAV-005",
    subject: "P",
    chapter: "Waves",
    topic: "Wave Equation",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "For a wave represented by y = A sin(ωt − kx), the quantity k is called:",
    options: [
      "Angular frequency",
      "Wave number",
      "Amplitude",
      "Phase velocity",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Wave number",
    solution: {
      concept:
        "In the standard wave equation y = A sin(ωt − kx), k is the wave number.",
      steps: [
        "The wave number is related to wavelength by k = 2π/λ.",
        "Therefore k represents the spatial variation of the wave.",
      ],
      finalAnswer: "Wave number",
    },
  },

  {
    id: "P-WAV-006",
    subject: "P",
    chapter: "Waves",
    topic: "Wave Number",
    difficulty: "Medium",
    type: "Practice",
    questionText: "A wave has wavelength 4 m. What is its wave number?",
    options: ["π/4 rad/m", "π/2 rad/m", "2π rad/m", "4π rad/m"],
    correctAnswerIndex: 1,
    correctAnswerText: "π/2 rad/m",
    solution: {
      concept: "Wave number is k = 2π/λ.",
      steps: ["λ = 4 m.", "k = 2π/4.", "k = π/2 rad/m."],
      finalAnswer: "π/2 rad/m",
    },
  },

  {
    id: "P-WAV-007",
    subject: "P",
    chapter: "Waves",
    topic: "Phase Difference",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "Two points on a progressive wave are separated by a distance equal to one-fourth of the wavelength. What is their phase difference?",
    options: ["π/4", "π/2", "π", "2π"],
    correctAnswerIndex: 1,
    correctAnswerText: "π/2",
    solution: {
      concept: "Phase difference due to spatial separation Δx is Δφ = 2πΔx/λ.",
      steps: ["Δx = λ/4.", "Δφ = 2π(λ/4)/λ.", "Δφ = π/2."],
      finalAnswer: "π/2 radians",
    },
  },

  {
    id: "P-WAV-008",
    subject: "P",
    chapter: "Waves",
    topic: "Superposition Principle",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The principle of superposition states that when two or more waves overlap, the resultant displacement is:",
    options: [
      "Always zero",
      "The product of individual displacements",
      "The algebraic sum of individual displacements",
      "Always equal to the larger displacement",
    ],
    correctAnswerIndex: 2,
    correctAnswerText: "The algebraic sum of individual displacements",
    solution: {
      concept:
        "The principle of superposition applies when waves overlap in a linear medium.",
      steps: [
        "Each wave produces its own displacement.",
        "The resultant displacement is the algebraic sum of the individual displacements at that point.",
      ],
      finalAnswer: "The algebraic sum of individual displacements",
    },
  },

  {
    id: "P-WAV-009",
    subject: "P",
    chapter: "Waves",
    topic: "Standing Waves",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "In a stationary wave, the points having zero displacement at all times are called:",
    options: ["Antinodes", "Nodes", "Crests", "Troughs"],
    correctAnswerIndex: 1,
    correctAnswerText: "Nodes",
    solution: {
      concept: "A stationary wave consists of fixed nodes and antinodes.",
      steps: [
        "At a node, the resultant displacement remains zero.",
        "At an antinode, the amplitude is maximum.",
      ],
      finalAnswer: "Nodes",
    },
  },

  {
    id: "P-WAV-010",
    subject: "P",
    chapter: "Waves",
    topic: "Standing Waves",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The distance between two consecutive nodes in a stationary wave is:",
    options: ["λ/4", "λ/2", "λ", "2λ"],
    correctAnswerIndex: 1,
    correctAnswerText: "λ/2",
    solution: {
      concept:
        "In a stationary wave, consecutive nodes are separated by half a wavelength.",
      steps: [
        "Node positions occur at intervals of λ/2.",
        "Therefore the distance between consecutive nodes is λ/2.",
      ],
      finalAnswer: "λ/2",
    },
  },

  {
    id: "P-WAV-011",
    subject: "P",
    chapter: "Waves",
    topic: "String Waves",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "The speed of a transverse wave on a stretched string is given by v = √(T/μ). If the tension is increased by a factor of 4, the wave speed becomes:",
    options: [
      "Half the original speed",
      "The same",
      "Twice the original speed",
      "Four times the original speed",
    ],
    correctAnswerIndex: 2,
    correctAnswerText: "Twice the original speed",
    solution: {
      concept: "For a stretched string, wave speed is v = √(T/μ).",
      steps: [
        "Initially v = √(T/μ).",
        "New tension T' = 4T.",
        "v' = √(4T/μ).",
        "Therefore v' = 2v.",
      ],
      finalAnswer: "Twice the original speed",
    },
  },

  {
    id: "P-WAV-012",
    subject: "P",
    chapter: "Waves",
    topic: "String Waves",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A string has linear mass density 0.01 kg/m and is under a tension of 100 N. What is the speed of a transverse wave on the string?",
    options: ["10 m/s", "50 m/s", "100 m/s", "200 m/s"],
    correctAnswerIndex: 2,
    correctAnswerText: "100 m/s",
    solution: {
      concept: "Wave speed on a stretched string is v = √(T/μ).",
      steps: [
        "T = 100 N.",
        "μ = 0.01 kg/m.",
        "v = √(100/0.01).",
        "v = √10000.",
        "v = 100 m/s.",
      ],
      finalAnswer: "100 m/s",
    },
  },

  {
    id: "P-WAV-013",
    subject: "P",
    chapter: "Waves",
    topic: "Interference",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "Two coherent waves of equal amplitude A meet in phase at a point. What is the resultant amplitude?",
    options: ["0", "A", "2A", "A/2"],
    correctAnswerIndex: 2,
    correctAnswerText: "2A",
    solution: {
      concept:
        "For constructive interference, waves arriving in phase add their amplitudes.",
      steps: [
        "Each wave has amplitude A.",
        "They arrive in phase.",
        "Resultant amplitude = A + A.",
        "Therefore resultant amplitude = 2A.",
      ],
      finalAnswer: "2A",
    },
  },

  {
    id: "P-WAV-014",
    subject: "P",
    chapter: "Waves",
    topic: "Beats",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "Two sound waves have frequencies 256 Hz and 260 Hz. What is the beat frequency?",
    options: ["2 Hz", "4 Hz", "256 Hz", "516 Hz"],
    correctAnswerIndex: 1,
    correctAnswerText: "4 Hz",
    solution: {
      concept:
        "Beat frequency is the absolute difference between the frequencies of two interfering sound waves.",
      steps: [
        "f₁ = 256 Hz.",
        "f₂ = 260 Hz.",
        "Beat frequency = |f₂ − f₁|.",
        "Beat frequency = |260 − 256| = 4 Hz.",
      ],
      finalAnswer: "4 Hz",
    },
  },

  {
    id: "P-WAV-015",
    subject: "P",
    chapter: "Waves",
    topic: "Doppler Effect",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "When a source of sound moves towards a stationary observer, the observed frequency is generally:",
    options: [
      "Less than the source frequency",
      "Equal to the source frequency",
      "Greater than the source frequency",
      "Always zero",
    ],
    correctAnswerIndex: 2,
    correctAnswerText: "Greater than the source frequency",
    solution: {
      concept:
        "The Doppler effect causes an apparent change in frequency due to relative motion between source and observer.",
      steps: [
        "When the source approaches the observer, successive wavefronts are closer together.",
        "The wavelength reaching the observer decreases.",
        "Since v = fλ and wave speed in the medium remains fixed, the observed frequency increases.",
      ],
      finalAnswer: "Greater than the source frequency",
      examTip:
        "Approaching source → apparent frequency increases. Receding source → apparent frequency decreases.",
    },
  },
];

export default wavesQuestions;
