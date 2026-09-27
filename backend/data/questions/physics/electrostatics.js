const electrostaticsQuestions = [
  {
    id: "P-ELE-001",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Electric Charge",
    difficulty: "Easy",
    type: "Practice",
    questionText: "What is the SI unit of electric charge?",
    options: ["Ampere", "Volt", "Coulomb", "Ohm"],
    correctAnswerIndex: 2,
    correctAnswerText: "Coulomb",
    solution: {
      concept: "Electric charge is measured in coulomb (C) in SI units.",
      steps: [
        "The SI unit of charge is coulomb.",
        "One coulomb is the charge transported by a current of one ampere in one second.",
      ],
      finalAnswer: "Coulomb",
    },
  },

  {
    id: "P-ELE-002",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Coulomb's Law",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "According to Coulomb's law, the electrostatic force between two point charges is proportional to:",
    options: [
      "The product of the charges and directly proportional to distance",
      "The product of the charges and inversely proportional to square of distance",
      "The sum of the charges",
      "The square of the distance",
    ],
    correctAnswerIndex: 1,
    correctAnswerText:
      "The product of the charges and inversely proportional to square of distance",
    solution: {
      concept:
        "Coulomb's law gives the electrostatic force between two point charges.",
      steps: [
        "The magnitude of force is F = k|q₁q₂|/r².",
        "Therefore F is directly proportional to q₁q₂.",
        "It is inversely proportional to r².",
      ],
      finalAnswer: "The force is proportional to q₁q₂/r².",
    },
  },

  {
    id: "P-ELE-003",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Coulomb's Law",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "Two charges of 2 μC each are separated by 1 m in vacuum. Taking k = 9 × 10⁹ N m²/C², what is the force between them?",
    options: ["0.018 N", "0.036 N", "0.18 N", "36 N"],
    correctAnswerIndex: 1,
    correctAnswerText: "0.036 N",
    solution: {
      concept: "Use Coulomb's law: F = kq₁q₂/r².",
      steps: [
        "q₁ = q₂ = 2 × 10⁻⁶ C.",
        "r = 1 m.",
        "F = 9 × 10⁹ × (2 × 10⁻⁶)² / 1².",
        "F = 9 × 10⁹ × 4 × 10⁻¹².",
        "F = 0.036 N.",
      ],
      finalAnswer: "0.036 N",
    },
  },

  {
    id: "P-ELE-004",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Electric Field",
    difficulty: "Easy",
    type: "Practice",
    questionText: "The electric field at a point is defined as:",
    options: [
      "Force acting on any charge",
      "Force per unit positive test charge",
      "Charge per unit force",
      "Potential energy per unit charge",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Force per unit positive test charge",
    solution: {
      concept:
        "Electric field is defined as force experienced by a unit positive test charge.",
      steps: [
        "If a test charge q experiences force F, electric field is E = F/q.",
        "The test charge is taken to be positive and sufficiently small.",
      ],
      finalAnswer: "Force per unit positive test charge",
    },
  },

  {
    id: "P-ELE-005",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Electric Field Due to Point Charge",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The electric field due to a point charge q at distance r in vacuum is:",
    options: ["kq/r", "kq/r²", "kqr", "kq²/r²"],
    correctAnswerIndex: 1,
    correctAnswerText: "kq/r²",
    solution: {
      concept:
        "The electric field due to a point charge follows an inverse-square law.",
      steps: [
        "From Coulomb's law, force on a test charge q₀ is F = kqq₀/r².",
        "Electric field E = F/q₀.",
        "Therefore E = kq/r².",
      ],
      finalAnswer: "E = kq/r²",
    },
  },

  {
    id: "P-ELE-006",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Electric Field",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A charge of 4 μC produces an electric field of 9 × 10³ N/C at a point. What is the distance of the point from the charge? Take k = 9 × 10⁹ N m²/C².",
    options: ["1 m", "2 m", "4 m", "6 m"],
    correctAnswerIndex: 1,
    correctAnswerText: "2 m",
    solution: {
      concept: "For a point charge, E = kq/r².",
      steps: [
        "q = 4 × 10⁻⁶ C.",
        "E = 9 × 10³ N/C.",
        "r² = kq/E.",
        "r² = (9 × 10⁹ × 4 × 10⁻⁶)/(9 × 10³).",
        "r² = 4.",
        "Therefore r = 2 m.",
      ],
      finalAnswer: "2 m",
    },
  },

  {
    id: "P-ELE-007",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Electric Field Lines",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "Electric field lines for an isolated positive point charge are directed:",
    options: [
      "Radially inward",
      "Radially outward",
      "In circles around the charge",
      "Randomly",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Radially outward",
    solution: {
      concept:
        "Electric field direction is the direction of force on a positive test charge.",
      steps: [
        "A positive source charge repels a positive test charge.",
        "Therefore the electric field points away from the positive charge.",
      ],
      finalAnswer: "Radially outward",
    },
  },

  {
    id: "P-ELE-008",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Electric Potential",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The electric potential at a point due to a point charge q is:",
    options: ["kq/r", "kq/r²", "kqr", "kq²/r"],
    correctAnswerIndex: 0,
    correctAnswerText: "kq/r",
    solution: {
      concept:
        "Electric potential due to a point charge is potential energy per unit charge.",
      steps: [
        "The potential due to a point charge is V = kq/r.",
        "Unlike electric field, potential varies inversely with r rather than r².",
      ],
      finalAnswer: "V = kq/r",
    },
  },

  {
    id: "P-ELE-009",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Electric Potential",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A charge of 2 μC is placed in vacuum. What is the electric potential at a point 3 m away? Take k = 9 × 10⁹ N m²/C².",
    options: ["3000 V", "6000 V", "9000 V", "12000 V"],
    correctAnswerIndex: 1,
    correctAnswerText: "6000 V",
    solution: {
      concept: "Use V = kq/r.",
      steps: [
        "q = 2 × 10⁻⁶ C.",
        "r = 3 m.",
        "V = (9 × 10⁹ × 2 × 10⁻⁶)/3.",
        "V = 6000 V.",
      ],
      finalAnswer: "6000 V",
    },
  },

  {
    id: "P-ELE-010",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Potential Difference",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The work required to move a charge q through a potential difference V is:",
    options: ["q/V", "V/q", "qV", "q + V"],
    correctAnswerIndex: 2,
    correctAnswerText: "qV",
    solution: {
      concept: "Potential difference is work done per unit charge.",
      steps: ["V = W/q.", "Rearranging gives W = qV."],
      finalAnswer: "W = qV",
    },
  },

  {
    id: "P-ELE-011",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Electric Dipole",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "The electric dipole moment of charges +q and −q separated by distance d has magnitude:",
    options: ["qd", "q/d", "2qd", "q²d"],
    correctAnswerIndex: 0,
    correctAnswerText: "qd",
    solution: {
      concept:
        "The magnitude of electric dipole moment is p = qd, where d is the separation between the charges.",
      steps: [
        "An electric dipole consists of two equal and opposite charges.",
        "If the separation between them is d, dipole moment magnitude is p = qd.",
      ],
      finalAnswer: "p = qd",
    },
  },

  {
    id: "P-ELE-012",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Electric Dipole",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "An electric dipole is placed in a uniform electric field. The torque on it is maximum when the angle between the dipole moment and electric field is:",
    options: ["0°", "30°", "60°", "90°"],
    correctAnswerIndex: 3,
    correctAnswerText: "90°",
    solution: {
      concept: "Torque on an electric dipole is τ = pE sinθ.",
      steps: [
        "For maximum torque, sinθ must be maximum.",
        "The maximum value of sinθ is 1.",
        "This occurs when θ = 90°.",
      ],
      finalAnswer: "90°",
    },
  },

  {
    id: "P-ELE-013",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Gauss's Law",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "According to Gauss's law, the net electric flux through a closed surface is proportional to:",
    options: [
      "The area of the surface only",
      "The enclosed charge",
      "The external charge only",
      "The distance from the charge",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "The enclosed charge",
    solution: {
      concept:
        "Gauss's law states that total electric flux through a closed surface is Φ = Q_enclosed/ε₀.",
      steps: [
        "The total flux through a closed surface depends on the net charge enclosed by it.",
        "Charges outside the surface do not change the net flux through the closed surface.",
      ],
      finalAnswer: "The enclosed charge",
    },
  },

  {
    id: "P-ELE-014",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Capacitance",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A capacitor stores charge Q at potential difference V. Its capacitance is:",
    options: ["QV", "Q/V", "V/Q", "Q + V"],
    correctAnswerIndex: 1,
    correctAnswerText: "Q/V",
    solution: {
      concept:
        "Capacitance is defined as charge stored per unit potential difference.",
      steps: [
        "The definition of capacitance is C = Q/V.",
        "Therefore capacitance depends on the charge and potential difference according to this relation.",
      ],
      finalAnswer: "C = Q/V",
    },
  },

  {
    id: "P-ELE-015",
    subject: "P",
    chapter: "Electrostatics",
    topic: "Capacitor Energy",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A capacitor of capacitance 2 μF is charged to 100 V. What energy is stored in it?",
    options: ["0.001 J", "0.005 J", "0.01 J", "0.02 J"],
    correctAnswerIndex: 2,
    correctAnswerText: "0.01 J",
    solution: {
      concept: "Energy stored in a capacitor is U = 1/2 CV².",
      steps: [
        "C = 2 × 10⁻⁶ F.",
        "V = 100 V.",
        "U = 1/2 × 2 × 10⁻⁶ × (100)².",
        "U = 10⁻⁶ × 10⁴.",
        "U = 10⁻² J.",
        "Therefore U = 0.01 J.",
      ],
      finalAnswer: "0.01 J",
    },
  },
];

export default electrostaticsQuestions;
