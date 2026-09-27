const emiQuestions = [
  {
    id: "P-EMI-001",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Faraday's Law",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "According to Faraday's law of electromagnetic induction, the induced emf in a circuit is proportional to:",
    options: [
      "Magnetic flux",
      "Rate of change of magnetic flux",
      "Magnetic field only",
      "Resistance of the circuit",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Rate of change of magnetic flux",
    solution: {
      concept:
        "Faraday's law states that the induced emf is equal to the negative rate of change of magnetic flux.",
      steps: [
        "The magnitude of induced emf is ε = |dΦ/dt|.",
        "Therefore emf depends on how rapidly magnetic flux changes.",
      ],
      finalAnswer: "Rate of change of magnetic flux",
    },
  },

  {
    id: "P-EMI-002",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Magnetic Flux",
    difficulty: "Easy",
    type: "Practice",
    questionText: "The SI unit of magnetic flux is:",
    options: ["Tesla", "Weber", "Henry", "Volt"],
    correctAnswerIndex: 1,
    correctAnswerText: "Weber",
    solution: {
      concept: "Magnetic flux is measured in weber (Wb) in the SI system.",
      steps: [
        "Magnetic flux is given by Φ = BA cosθ.",
        "Its SI unit is weber.",
      ],
      finalAnswer: "Weber",
    },
  },

  {
    id: "P-EMI-003",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Lenz's Law",
    difficulty: "Easy",
    type: "Practice",
    questionText: "Lenz's law determines the direction of:",
    options: [
      "Magnetic field",
      "Induced current",
      "Electric field only",
      "Gravitational force",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Induced current",
    solution: {
      concept:
        "Lenz's law states that the induced current flows in a direction that opposes the change in magnetic flux producing it.",
      steps: [
        "A changing magnetic flux induces an emf.",
        "The resulting current produces a magnetic field.",
        "This field opposes the change in flux.",
      ],
      finalAnswer: "Induced current",
    },
  },

  {
    id: "P-EMI-004",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Motional EMF",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "A conducting rod of length l moves with speed v perpendicular to a magnetic field B. The induced emf is:",
    options: ["Blv", "B/lv", "Bl/v", "Bv/l"],
    correctAnswerIndex: 0,
    correctAnswerText: "Blv",
    solution: {
      concept:
        "For a rod moving perpendicular to a magnetic field, motional emf is ε = Blv.",
      steps: [
        "The rod has length l.",
        "It moves with velocity v perpendicular to magnetic field B.",
        "Therefore ε = Blv.",
      ],
      finalAnswer: "Blv",
    },
  },

  {
    id: "P-EMI-005",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Magnetic Flux",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "A magnetic field of 2 T passes normally through an area of 0.5 m². What is the magnetic flux?",
    options: ["0.5 Wb", "1 Wb", "2 Wb", "4 Wb"],
    correctAnswerIndex: 1,
    correctAnswerText: "1 Wb",
    solution: {
      concept: "Magnetic flux is Φ = BA cosθ.",
      steps: [
        "The field is normal to the surface, so θ = 0°.",
        "cos0° = 1.",
        "Φ = BA = 2 × 0.5.",
        "Φ = 1 Wb.",
      ],
      finalAnswer: "1 Wb",
    },
  },

  {
    id: "P-EMI-006",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Induced EMF",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The magnetic flux through a coil changes from 0.2 Wb to 0.8 Wb in 0.3 s. What is the magnitude of average induced emf for a single-turn coil?",
    options: ["1 V", "2 V", "3 V", "4 V"],
    correctAnswerIndex: 1,
    correctAnswerText: "2 V",
    solution: {
      concept: "Average induced emf is ε = ΔΦ/Δt for a single-turn coil.",
      steps: [
        "Change in flux = 0.8 - 0.2 = 0.6 Wb.",
        "Time interval = 0.3 s.",
        "ε = 0.6/0.3.",
        "ε = 2 V.",
      ],
      finalAnswer: "2 V",
    },
  },

  {
    id: "P-EMI-007",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Motional EMF",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A rod of length 0.5 m moves at 4 m/s perpendicular to a magnetic field of 0.2 T. What is the induced emf?",
    options: ["0.2 V", "0.4 V", "0.8 V", "1.6 V"],
    correctAnswerIndex: 1,
    correctAnswerText: "0.4 V",
    solution: {
      concept: "Motional emf is ε = Blv.",
      steps: [
        "B = 0.2 T.",
        "l = 0.5 m.",
        "v = 4 m/s.",
        "ε = 0.2 × 0.5 × 4.",
        "ε = 0.4 V.",
      ],
      finalAnswer: "0.4 V",
    },
  },

  {
    id: "P-EMI-008",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Self Inductance",
    difficulty: "Medium",
    type: "Practice",
    questionText: "The SI unit of self-inductance is:",
    options: ["Tesla", "Weber", "Henry", "Farad"],
    correctAnswerIndex: 2,
    correctAnswerText: "Henry",
    solution: {
      concept: "Self-inductance is measured in henry (H).",
      steps: [
        "The induced emf due to self-induction is ε = -L(dI/dt).",
        "The SI unit of L is henry.",
      ],
      finalAnswer: "Henry",
    },
  },

  {
    id: "P-EMI-009",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Self Inductance",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "An inductor of inductance 2 H experiences a current change of 3 A in 0.5 s. What is the magnitude of induced emf?",
    options: ["6 V", "8 V", "12 V", "15 V"],
    correctAnswerIndex: 2,
    correctAnswerText: "12 V",
    solution: {
      concept: "The magnitude of self-induced emf is ε = L(ΔI/Δt).",
      steps: [
        "L = 2 H.",
        "ΔI = 3 A.",
        "Δt = 0.5 s.",
        "ε = 2 × (3/0.5).",
        "ε = 12 V.",
      ],
      finalAnswer: "12 V",
    },
  },

  {
    id: "P-EMI-010",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Energy Stored in Inductor",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The energy stored in an inductor of inductance L carrying current I is:",
    options: ["LI²", "1/2 LI²", "2LI²", "L/I²"],
    correctAnswerIndex: 1,
    correctAnswerText: "1/2 LI²",
    solution: {
      concept: "An inductor stores energy in its magnetic field.",
      steps: [
        "The energy stored is U = 1/2 LI².",
        "It depends on both inductance and square of current.",
      ],
      finalAnswer: "U = 1/2 LI²",
    },
  },

  {
    id: "P-EMI-011",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Mutual Induction",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "Mutual induction occurs when a change of current in one coil produces:",
    options: [
      "A magnetic field only in the same coil",
      "An induced emf in a nearby coil",
      "A permanent charge in the nearby coil",
      "No effect in any other coil",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "An induced emf in a nearby coil",
    solution: {
      concept:
        "Mutual induction is the production of induced emf in one coil due to changing current in another nearby coil.",
      steps: [
        "Current in the first coil produces magnetic flux.",
        "When this current changes, the flux linked with the second coil changes.",
        "This changing flux induces emf in the second coil.",
      ],
      finalAnswer: "An induced emf in a nearby coil",
    },
  },

  {
    id: "P-EMI-012",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "AC Generator",
    difficulty: "Hard",
    type: "Practice",
    questionText: "An AC generator works on the principle of:",
    options: [
      "Electromagnetic induction",
      "Electrostatic induction only",
      "Coulomb's law",
      "Heating effect of current",
    ],
    correctAnswerIndex: 0,
    correctAnswerText: "Electromagnetic induction",
    solution: {
      concept:
        "An AC generator converts mechanical energy into electrical energy using electromagnetic induction.",
      steps: [
        "A coil rotates in a magnetic field.",
        "The magnetic flux linked with the coil changes continuously.",
        "This changing flux induces an alternating emf.",
      ],
      finalAnswer: "Electromagnetic induction",
    },
  },

  {
    id: "P-EMI-013",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Eddy Currents",
    difficulty: "Hard",
    type: "Practice",
    questionText: "Eddy currents are reduced in transformer cores by using:",
    options: [
      "A solid thick iron block",
      "Laminated sheets insulated from each other",
      "A copper wire wrapped around the core",
      "A superconducting material only",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Laminated sheets insulated from each other",
    solution: {
      concept: "Eddy currents cause energy loss in changing magnetic fields.",
      steps: [
        "A solid conducting core allows large circulating eddy currents.",
        "Laminating the core increases the resistance of possible current paths.",
        "This reduces eddy-current losses.",
      ],
      finalAnswer: "Laminated sheets insulated from each other",
    },
  },

  {
    id: "P-EMI-014",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Transformer",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "An ideal transformer has 1000 turns in its primary coil and 200 turns in its secondary coil. If the primary voltage is 250 V, what is the secondary voltage?",
    options: ["25 V", "50 V", "125 V", "500 V"],
    correctAnswerIndex: 1,
    correctAnswerText: "50 V",
    solution: {
      concept: "For an ideal transformer, Vs/Vp = Ns/Np.",
      steps: [
        "Np = 1000 and Ns = 200.",
        "Vp = 250 V.",
        "Vs/Vp = Ns/Np.",
        "Vs/250 = 200/1000.",
        "Vs = 50 V.",
      ],
      finalAnswer: "50 V",
    },
  },

  {
    id: "P-EMI-015",
    subject: "P",
    chapter: "Electromagnetic Induction",
    topic: "Lenz's Law and Energy Conservation",
    difficulty: "Hard",
    type: "Practice",
    questionText: "Lenz's law is consistent with the law of conservation of:",
    options: ["Charge only", "Mass only", "Energy", "Momentum only"],
    correctAnswerIndex: 2,
    correctAnswerText: "Energy",
    solution: {
      concept:
        "Lenz's law gives the direction of induced current such that it opposes the change producing it.",
      steps: [
        "If the induced current supported the change in flux instead of opposing it, energy could be produced without external work.",
        "The opposition described by Lenz's law ensures that external work is required.",
        "Therefore electromagnetic induction is consistent with conservation of energy.",
      ],
      finalAnswer: "Energy",
      examTip: "Lenz's law is a direct consequence of conservation of energy.",
    },
  },
];

export default emiQuestions;
