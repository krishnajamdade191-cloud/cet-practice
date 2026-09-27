const magneticEffectsQuestions = [
  {
    id: "P-MEC-001",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Magnetic Field",
    difficulty: "Easy",
    type: "Practice",
    questionText: "The SI unit of magnetic field is:",
    options: ["Weber", "Tesla", "Henry", "Ampere"],
    correctAnswerIndex: 1,
    correctAnswerText: "Tesla",
    solution: {
      concept: "Magnetic field is measured in tesla (T) in SI units.",
      steps: [
        "The SI unit of magnetic flux density is tesla.",
        "One tesla is equivalent to one weber per square metre.",
      ],
      finalAnswer: "Tesla",
    },
  },

  {
    id: "P-MEC-002",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Magnetic Field Due to Current",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The magnetic field around a long straight current-carrying conductor consists of:",
    options: [
      "Straight parallel lines",
      "Concentric circles",
      "Radial lines",
      "Elliptical lines",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Concentric circles",
    solution: {
      concept:
        "The magnetic field around a long straight current-carrying conductor forms concentric circles centered on the conductor.",
      steps: [
        "A current-carrying conductor produces a magnetic field around itself.",
        "The field lines form concentric circles in planes perpendicular to the conductor.",
      ],
      finalAnswer: "Concentric circles",
    },
  },

  {
    id: "P-MEC-003",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Magnetic Field Due to Straight Conductor",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The magnetic field at a distance r from a long straight current-carrying conductor is proportional to:",
    options: ["I/r", "Ir", "I/r²", "r/I"],
    correctAnswerIndex: 0,
    correctAnswerText: "I/r",
    solution: {
      concept: "For a long straight conductor, B = μ₀I/(2πr).",
      steps: [
        "From the formula, B is directly proportional to current I.",
        "B is inversely proportional to distance r.",
        "Therefore B ∝ I/r.",
      ],
      finalAnswer: "I/r",
    },
  },

  {
    id: "P-MEC-004",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Right Hand Thumb Rule",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The direction of the magnetic field around a straight current-carrying conductor can be determined using:",
    options: [
      "Fleming's left-hand rule",
      "Right-hand thumb rule",
      "Lenz's law",
      "Kirchhoff's law",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Right-hand thumb rule",
    solution: {
      concept:
        "The right-hand thumb rule gives the relationship between current direction and magnetic field direction.",
      steps: [
        "Point the right thumb in the direction of conventional current.",
        "The curled fingers indicate the direction of the magnetic field.",
      ],
      finalAnswer: "Right-hand thumb rule",
    },
  },

  {
    id: "P-MEC-005",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Force on Moving Charge",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A charged particle moving parallel to a uniform magnetic field experiences magnetic force equal to:",
    options: ["qvB", "qB/v", "Zero", "qv/B"],
    correctAnswerIndex: 2,
    correctAnswerText: "Zero",
    solution: {
      concept: "Magnetic force on a moving charge is F = qvB sinθ.",
      steps: [
        "If the particle moves parallel to the magnetic field, θ = 0°.",
        "sin 0° = 0.",
        "Therefore F = qvB × 0 = 0.",
      ],
      finalAnswer: "Zero",
    },
  },

  {
    id: "P-MEC-006",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Force on Moving Charge",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A charged particle moves perpendicular to a magnetic field of 0.5 T with speed 2 × 10⁶ m/s. If its charge is 1.6 × 10⁻¹⁹ C, what is the magnetic force?",
    options: [
      "1.6 × 10⁻¹³ N",
      "3.2 × 10⁻¹³ N",
      "8.0 × 10⁻¹⁴ N",
      "1.6 × 10⁻¹⁹ N",
    ],
    correctAnswerIndex: 0,
    correctAnswerText: "1.6 × 10⁻¹³ N",
    solution: {
      concept: "For perpendicular motion, magnetic force is F = qvB.",
      steps: [
        "q = 1.6 × 10⁻¹⁹ C.",
        "v = 2 × 10⁶ m/s.",
        "B = 0.5 T.",
        "F = qvB.",
        "F = (1.6 × 10⁻¹⁹)(2 × 10⁶)(0.5).",
        "F = 1.6 × 10⁻¹³ N.",
      ],
      finalAnswer: "1.6 × 10⁻¹³ N",
    },
  },

  {
    id: "P-MEC-007",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Force on Current-Carrying Conductor",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A current-carrying conductor of length L placed perpendicular to magnetic field B experiences force:",
    options: ["BIL", "BI/L", "BL/I", "I/(BL)"],
    correctAnswerIndex: 0,
    correctAnswerText: "BIL",
    solution: {
      concept:
        "The magnetic force on a current-carrying conductor is F = BIL sinθ.",
      steps: [
        "The conductor is perpendicular to the field, so θ = 90°.",
        "sin 90° = 1.",
        "Therefore F = BIL.",
      ],
      finalAnswer: "BIL",
    },
  },

  {
    id: "P-MEC-008",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Force Between Parallel Currents",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "Two long parallel conductors carrying currents in the same direction experience:",
    options: ["Repulsion", "Attraction", "No force", "A force only in vacuum"],
    correctAnswerIndex: 1,
    correctAnswerText: "Attraction",
    solution: {
      concept: "Parallel currents in the same direction attract each other.",
      steps: [
        "Each conductor produces a magnetic field around itself.",
        "The magnetic field of one conductor exerts a force on the current in the other.",
        "For currents in the same direction, the force is attractive.",
      ],
      finalAnswer: "Attraction",
    },
  },

  {
    id: "P-MEC-009",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Circular Current Loop",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The magnetic field at the centre of a circular loop of radius R carrying current I is proportional to:",
    options: ["I/R", "IR", "I/R²", "R/I"],
    correctAnswerIndex: 0,
    correctAnswerText: "I/R",
    solution: {
      concept: "For a single circular loop, B = μ₀I/(2R) at its centre.",
      steps: [
        "From B = μ₀I/(2R), the magnetic field is directly proportional to I.",
        "It is inversely proportional to R.",
        "Therefore B ∝ I/R.",
      ],
      finalAnswer: "I/R",
    },
  },

  {
    id: "P-MEC-010",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Solenoid",
    difficulty: "Medium",
    type: "Practice",
    questionText: "The magnetic field inside a long solenoid is approximately:",
    options: ["μ₀nI", "μ₀I/n", "μ₀n/I", "nI/μ₀"],
    correctAnswerIndex: 0,
    correctAnswerText: "μ₀nI",
    solution: {
      concept: "For a long solenoid, the magnetic field inside is B = μ₀nI.",
      steps: [
        "n is the number of turns per unit length.",
        "I is the current through the solenoid.",
        "Therefore B = μ₀nI.",
      ],
      finalAnswer: "μ₀nI",
    },
  },

  {
    id: "P-MEC-011",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Charged Particle in Magnetic Field",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A charged particle enters a uniform magnetic field perpendicular to the field. Its path will be:",
    options: ["Straight line", "Circular", "Parabolic", "Elliptical"],
    correctAnswerIndex: 1,
    correctAnswerText: "Circular",
    solution: {
      concept:
        "A magnetic force acting perpendicular to velocity can provide the centripetal force required for circular motion.",
      steps: [
        "For perpendicular motion, magnetic force F = qvB.",
        "The force is always perpendicular to the instantaneous velocity.",
        "It therefore changes the direction of velocity without changing its magnitude.",
        "The particle follows a circular path.",
      ],
      finalAnswer: "Circular",
    },
  },

  {
    id: "P-MEC-012",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Radius of Circular Path",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A charged particle of mass m and charge q enters a magnetic field B perpendicular to its velocity v. The radius of its circular path is:",
    options: ["qB/mv", "mv/qB", "qv/mB", "mB/qv"],
    correctAnswerIndex: 1,
    correctAnswerText: "mv/qB",
    solution: {
      concept: "The magnetic force provides the centripetal force.",
      steps: [
        "qvB = mv²/r.",
        "Cancel one factor of v.",
        "qB = mv/r.",
        "Therefore r = mv/(qB).",
      ],
      finalAnswer: "r = mv/(qB)",
    },
  },

  {
    id: "P-MEC-013",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Cyclotron",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "The cyclotron frequency of a charged particle moving in a uniform magnetic field is independent of:",
    options: [
      "Mass of the particle",
      "Charge of the particle",
      "Magnetic field",
      "Speed of the particle",
    ],
    correctAnswerIndex: 3,
    correctAnswerText: "Speed of the particle",
    solution: {
      concept:
        "The cyclotron angular frequency is ω = qB/m and the frequency is f = qB/(2πm).",
      steps: [
        "The frequency depends on charge q, magnetic field B and mass m.",
        "Speed v does not appear in the expression.",
        "Therefore cyclotron frequency is independent of speed for non-relativistic motion.",
      ],
      finalAnswer: "Speed of the particle",
    },
  },

  {
    id: "P-MEC-014",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Magnetic Dipole",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "The magnetic dipole moment of a current-carrying coil having N turns, current I and area A is:",
    options: ["NI/A", "NIA", "NA/I", "IA/N"],
    correctAnswerIndex: 1,
    correctAnswerText: "NIA",
    solution: {
      concept: "The magnetic dipole moment of a current loop is m = NIA.",
      steps: [
        "For one loop, magnetic moment is IA.",
        "For N identical turns, the moments add.",
        "Therefore m = NIA.",
      ],
      finalAnswer: "NIA",
    },
  },

  {
    id: "P-MEC-015",
    subject: "P",
    chapter: "Magnetic Effects of Current",
    topic: "Magnetic Torque",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A current-carrying coil is placed in a uniform magnetic field. The torque on the coil is maximum when the plane of the coil is:",
    options: [
      "Parallel to the magnetic field",
      "Perpendicular to the magnetic field",
      "At 45° to the magnetic field",
      "At 60° to the magnetic field",
    ],
    correctAnswerIndex: 0,
    correctAnswerText: "Parallel to the magnetic field",
    solution: {
      concept:
        "Torque on a current loop is τ = NIAB sinθ, where θ is the angle between the magnetic moment and magnetic field.",
      steps: [
        "The magnetic moment is perpendicular to the plane of the coil.",
        "For maximum torque, θ = 90°.",
        "Therefore the magnetic moment must be perpendicular to the magnetic field.",
        "Hence the plane of the coil must be parallel to the magnetic field.",
      ],
      finalAnswer: "Parallel to the magnetic field",
      examTip: "Maximum torque → magnetic moment ⟂ B → plane of coil ∥ B.",
    },
  },
];

export default magneticEffectsQuestions;
