const acQuestions = [
  {
    id: "P-AC-001",
    subject: "P",
    chapter: "Alternating Current",
    topic: "Alternating Current",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The current in an AC circuit is represented by I = I₀ sin(ωt). The maximum value of current is:",
    options: ["I₀", "I₀/2", "I₀/√2", "2I₀"],
    correctAnswerIndex: 0,
    correctAnswerText: "I₀",
    solution: {
      concept:
        "In an AC equation I = I₀ sin(ωt), I₀ represents the peak or maximum current.",
      steps: [
        "The sine function varies between -1 and +1.",
        "Therefore the maximum value of I is obtained when sin(ωt) = 1.",
        "Hence Imax = I₀.",
      ],
      finalAnswer: "I₀",
    },
  },

  {
    id: "P-AC-002",
    subject: "P",
    chapter: "Alternating Current",
    topic: "RMS Value",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The RMS value of an alternating current having peak value I₀ is:",
    options: ["I₀", "I₀/2", "I₀/√2", "√2 I₀"],
    correctAnswerIndex: 2,
    correctAnswerText: "I₀/√2",
    solution: {
      concept: "For a sinusoidal AC, the RMS current is Iᵣₘₛ = I₀/√2.",
      steps: [
        "For a sinusoidal alternating current, RMS value is obtained by dividing the peak value by √2.",
        "Therefore Iᵣₘₛ = I₀/√2.",
      ],
      finalAnswer: "I₀/√2",
    },
  },

  {
    id: "P-AC-003",
    subject: "P",
    chapter: "Alternating Current",
    topic: "RMS Voltage",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "An AC supply has an RMS voltage of 220 V. What is its peak voltage approximately?",
    options: ["110 V", "220 V", "311 V", "440 V"],
    correctAnswerIndex: 2,
    correctAnswerText: "311 V",
    solution: {
      concept: "For sinusoidal AC, V₀ = √2 Vᵣₘₛ.",
      steps: ["Vᵣₘₛ = 220 V.", "V₀ = √2 × 220.", "V₀ ≈ 1.414 × 220 ≈ 311 V."],
      finalAnswer: "Approximately 311 V",
    },
  },

  {
    id: "P-AC-004",
    subject: "P",
    chapter: "Alternating Current",
    topic: "AC Frequency",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "An alternating current completes 50 cycles in one second. Its frequency is:",
    options: ["25 Hz", "50 Hz", "100 Hz", "0.02 Hz"],
    correctAnswerIndex: 1,
    correctAnswerText: "50 Hz",
    solution: {
      concept:
        "Frequency is the number of complete cycles occurring per second.",
      steps: [
        "Number of cycles = 50.",
        "Time = 1 s.",
        "Frequency = 50/1 = 50 Hz.",
      ],
      finalAnswer: "50 Hz",
    },
  },

  {
    id: "P-AC-005",
    subject: "P",
    chapter: "Alternating Current",
    topic: "AC Resistor",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "In a purely resistive AC circuit, the phase difference between voltage and current is:",
    options: ["0°", "45°", "90°", "180°"],
    correctAnswerIndex: 0,
    correctAnswerText: "0°",
    solution: {
      concept:
        "In a pure resistor, voltage and current reach their maximum values simultaneously.",
      steps: [
        "For a resistor, V = IR applies instantaneously.",
        "Therefore voltage and current are in phase.",
        "The phase difference is zero.",
      ],
      finalAnswer: "0°",
    },
  },

  {
    id: "P-AC-006",
    subject: "P",
    chapter: "Alternating Current",
    topic: "Inductive Reactance",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The inductive reactance of an inductor of inductance L connected to an AC source of angular frequency ω is:",
    options: ["ωL", "L/ω", "1/ωL", "ω/L"],
    correctAnswerIndex: 0,
    correctAnswerText: "ωL",
    solution: {
      concept:
        "Inductive reactance is the opposition offered by an inductor to alternating current.",
      steps: [
        "The formula for inductive reactance is Xₗ = ωL.",
        "Therefore it increases with both angular frequency and inductance.",
      ],
      finalAnswer: "Xₗ = ωL",
    },
  },

  {
    id: "P-AC-007",
    subject: "P",
    chapter: "Alternating Current",
    topic: "Capacitive Reactance",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The capacitive reactance of a capacitor of capacitance C in an AC circuit is:",
    options: ["ωC", "1/ωC", "ω/C", "C/ω"],
    correctAnswerIndex: 1,
    correctAnswerText: "1/ωC",
    solution: {
      concept:
        "Capacitive reactance is the opposition offered by a capacitor to AC.",
      steps: [
        "The formula is Xc = 1/(ωC).",
        "Therefore capacitive reactance decreases when frequency increases.",
      ],
      finalAnswer: "Xc = 1/(ωC)",
    },
  },

  {
    id: "P-AC-008",
    subject: "P",
    chapter: "Alternating Current",
    topic: "Inductive Reactance",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "An inductor of inductance 0.2 H is connected to an AC source of frequency 50 Hz. What is its inductive reactance? Take π = 3.14.",
    options: ["31.4 Ω", "62.8 Ω", "100 Ω", "125.6 Ω"],
    correctAnswerIndex: 1,
    correctAnswerText: "62.8 Ω",
    solution: {
      concept: "Inductive reactance is Xₗ = 2πfL.",
      steps: [
        "f = 50 Hz.",
        "L = 0.2 H.",
        "Xₗ = 2 × 3.14 × 50 × 0.2.",
        "Xₗ = 62.8 Ω.",
      ],
      finalAnswer: "62.8 Ω",
    },
  },

  {
    id: "P-AC-009",
    subject: "P",
    chapter: "Alternating Current",
    topic: "Phase Relation",
    difficulty: "Medium",
    type: "Practice",
    questionText: "In a purely inductive AC circuit, the current:",
    options: [
      "Leads voltage by 90°",
      "Lags voltage by 90°",
      "Is in phase with voltage",
      "Lags voltage by 180°",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Lags voltage by 90°",
    solution: {
      concept:
        "In a pure inductive circuit, current lags the applied voltage by 90°.",
      steps: [
        "For an ideal inductor, voltage leads current by 90°.",
        "Equivalently, current lags voltage by 90°.",
      ],
      finalAnswer: "Current lags voltage by 90°",
    },
  },

  {
    id: "P-AC-010",
    subject: "P",
    chapter: "Alternating Current",
    topic: "Phase Relation",
    difficulty: "Medium",
    type: "Practice",
    questionText: "In a purely capacitive AC circuit, the current:",
    options: [
      "Lags voltage by 90°",
      "Leads voltage by 90°",
      "Is in phase with voltage",
      "Lags voltage by 180°",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Leads voltage by 90°",
    solution: {
      concept: "In a pure capacitive circuit, current leads voltage by 90°.",
      steps: [
        "For an ideal capacitor, current reaches its maximum value before voltage.",
        "The phase difference is 90°.",
        "Therefore current leads voltage by 90°.",
      ],
      finalAnswer: "Current leads voltage by 90°",
    },
  },

  {
    id: "P-AC-011",
    subject: "P",
    chapter: "Alternating Current",
    topic: "Series LCR Circuit",
    difficulty: "Hard",
    type: "Practice",
    questionText: "In a series LCR circuit, the impedance is:",
    options: [
      "R + Xₗ + Xc",
      "√[R² + (Xₗ − Xc)²]",
      "R² + XₗXc",
      "√[R² + Xₗ² + Xc²]",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "√[R² + (Xₗ − Xc)²]",
    solution: {
      concept: "In a series LCR circuit, the net reactance is Xₗ − Xc.",
      steps: [
        "Resistance contributes R.",
        "The net reactive component is Xₗ − Xc.",
        "Therefore impedance is Z = √[R² + (Xₗ − Xc)²].",
      ],
      finalAnswer: "Z = √[R² + (Xₗ − Xc)²]",
    },
  },

  {
    id: "P-AC-012",
    subject: "P",
    chapter: "Alternating Current",
    topic: "Resonance",
    difficulty: "Hard",
    type: "Practice",
    questionText: "In a series LCR circuit, resonance occurs when:",
    options: ["R = Xₗ", "Xₗ = Xc", "R = Xc", "Xₗ = R + Xc"],
    correctAnswerIndex: 1,
    correctAnswerText: "Xₗ = Xc",
    solution: {
      concept: "At resonance, inductive and capacitive reactances are equal.",
      steps: [
        "Resonance condition is Xₗ = Xc.",
        "Therefore net reactance becomes zero.",
        "The impedance then becomes minimum and equal to R.",
      ],
      finalAnswer: "Xₗ = Xc",
    },
  },

  {
    id: "P-AC-013",
    subject: "P",
    chapter: "Alternating Current",
    topic: "Resonant Frequency",
    difficulty: "Hard",
    type: "Practice",
    questionText: "The resonant angular frequency of a series LCR circuit is:",
    options: ["√(LC)", "1/√(LC)", "√(L/C)", "√(C/L)"],
    correctAnswerIndex: 1,
    correctAnswerText: "1/√(LC)",
    solution: {
      concept: "At resonance, Xₗ = Xc.",
      steps: ["ωL = 1/(ωC).", "Therefore ω²LC = 1.", "Hence ω₀ = 1/√(LC)."],
      finalAnswer: "ω₀ = 1/√(LC)",
    },
  },

  {
    id: "P-AC-014",
    subject: "P",
    chapter: "Alternating Current",
    topic: "Power Factor",
    difficulty: "Hard",
    type: "Practice",
    questionText: "The power factor of a purely resistive AC circuit is:",
    options: ["0", "1/2", "1", "√2"],
    correctAnswerIndex: 2,
    correctAnswerText: "1",
    solution: {
      concept:
        "Power factor is cosφ, where φ is the phase difference between voltage and current.",
      steps: [
        "In a pure resistor, voltage and current are in phase.",
        "Therefore φ = 0°.",
        "Power factor = cos0° = 1.",
      ],
      finalAnswer: "1",
    },
  },

  {
    id: "P-AC-015",
    subject: "P",
    chapter: "Alternating Current",
    topic: "Transformer",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "An ideal transformer has 500 turns in the primary and 1000 turns in the secondary. If the primary voltage is 120 V, the secondary voltage is:",
    options: ["60 V", "120 V", "240 V", "480 V"],
    correctAnswerIndex: 2,
    correctAnswerText: "240 V",
    solution: {
      concept: "For an ideal transformer, Vs/Vp = Ns/Np.",
      steps: [
        "Np = 500 and Ns = 1000.",
        "Vp = 120 V.",
        "Vs/120 = 1000/500 = 2.",
        "Therefore Vs = 240 V.",
      ],
      finalAnswer: "240 V",
    },
  },
];

export default acQuestions;
