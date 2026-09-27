const magnetismQuestions = [
  {
    id: "P-MAG-001",
    subject: "P",
    chapter: "Magnetism",
    topic: "Magnetic Materials",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "Which of the following materials is strongly attracted by a magnetic field?",
    options: ["Diamagnetic", "Paramagnetic", "Ferromagnetic", "Non-magnetic"],
    correctAnswerIndex: 2,
    correctAnswerText: "Ferromagnetic",
    solution: {
      concept:
        "Ferromagnetic materials are strongly attracted by magnetic fields because their magnetic domains can align.",
      steps: [
        "Ferromagnetic materials have strong magnetic ordering.",
        "Examples include iron, cobalt and nickel.",
      ],
      finalAnswer: "Ferromagnetic",
    },
  },

  {
    id: "P-MAG-002",
    subject: "P",
    chapter: "Magnetism",
    topic: "Magnetic Field Lines",
    difficulty: "Easy",
    type: "Practice",
    questionText: "Outside a bar magnet, magnetic field lines emerge from:",
    options: [
      "South pole and enter north pole",
      "North pole and enter south pole",
      "Both poles randomly",
      "The centre of the magnet",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "North pole and enter south pole",
    solution: {
      concept: "Magnetic field lines form closed loops.",
      steps: [
        "Outside a magnet, field lines emerge from the north pole.",
        "They enter the south pole.",
        "Inside the magnet, they continue from south to north.",
      ],
      finalAnswer: "North pole and enter south pole",
    },
  },

  {
    id: "P-MAG-003",
    subject: "P",
    chapter: "Magnetism",
    topic: "Magnetic Dipole",
    difficulty: "Easy",
    type: "Practice",
    questionText: "The magnetic field lines of a bar magnet:",
    options: [
      "Intersect each other",
      "Form closed loops",
      "Always remain straight",
      "Exist only outside the magnet",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Form closed loops",
    solution: {
      concept:
        "Magnetic field lines have no beginning or end and form continuous closed loops.",
      steps: [
        "Outside the magnet they run from north to south.",
        "Inside the magnet they run from south to north.",
        "Thus they form closed loops.",
      ],
      finalAnswer: "Form closed loops",
    },
  },

  {
    id: "P-MAG-004",
    subject: "P",
    chapter: "Magnetism",
    topic: "Magnetic Susceptibility",
    difficulty: "Easy",
    type: "Practice",
    questionText: "For a diamagnetic material, magnetic susceptibility is:",
    options: [
      "Positive and large",
      "Positive and small",
      "Negative",
      "Zero in all cases",
    ],
    correctAnswerIndex: 2,
    correctAnswerText: "Negative",
    solution: {
      concept:
        "Diamagnetic materials develop a magnetic moment opposite to the applied magnetic field.",
      steps: [
        "Magnetic susceptibility χ indicates the response of a material to an applied magnetic field.",
        "For diamagnetic materials, χ is small and negative.",
      ],
      finalAnswer: "Negative",
    },
  },

  {
    id: "P-MAG-005",
    subject: "P",
    chapter: "Magnetism",
    topic: "Paramagnetism",
    difficulty: "Easy",
    type: "Practice",
    questionText: "A paramagnetic substance is:",
    options: [
      "Weakly repelled by a magnetic field",
      "Weakly attracted by a magnetic field",
      "Strongly repelled by a magnetic field",
      "Completely unaffected by a magnetic field",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Weakly attracted by a magnetic field",
    solution: {
      concept:
        "Paramagnetic materials have unpaired magnetic moments that tend to align with an applied field.",
      steps: [
        "Paramagnetic substances are attracted toward regions of stronger magnetic field.",
        "The attraction is relatively weak compared with ferromagnetic materials.",
      ],
      finalAnswer: "Weakly attracted by a magnetic field",
    },
  },

  {
    id: "P-MAG-006",
    subject: "P",
    chapter: "Magnetism",
    topic: "Magnetic Moment",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A magnetic dipole of moment 2 A·m² is placed in a magnetic field of 0.5 T at 90°. What is the torque on the dipole?",
    options: ["0.5 N·m", "1 N·m", "2 N·m", "4 N·m"],
    correctAnswerIndex: 2,
    correctAnswerText: "1 N·m",
    solution: {
      concept: "Torque on a magnetic dipole is τ = MB sinθ.",
      steps: [
        "M = 2 A·m².",
        "B = 0.5 T.",
        "θ = 90°, so sinθ = 1.",
        "τ = 2 × 0.5 × 1.",
        "τ = 1 N·m.",
      ],
      finalAnswer: "1 N·m",
    },
  },

  {
    id: "P-MAG-007",
    subject: "P",
    chapter: "Magnetism",
    topic: "Torque on Magnetic Dipole",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A magnetic dipole is placed parallel to a uniform magnetic field. The torque acting on it is:",
    options: ["Maximum", "Zero", "MB", "M/B"],
    correctAnswerIndex: 1,
    correctAnswerText: "Zero",
    solution: {
      concept: "Torque is τ = MB sinθ.",
      steps: [
        "For a dipole parallel to the field, θ = 0°.",
        "sin 0° = 0.",
        "Therefore τ = 0.",
      ],
      finalAnswer: "Zero",
    },
  },

  {
    id: "P-MAG-008",
    subject: "P",
    chapter: "Magnetism",
    topic: "Magnetic Potential Energy",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The potential energy of a magnetic dipole of moment M in a uniform magnetic field B is:",
    options: ["MB cosθ", "-MB cosθ", "MB sinθ", "-MB sinθ"],
    correctAnswerIndex: 1,
    correctAnswerText: "-MB cosθ",
    solution: {
      concept:
        "The potential energy of a magnetic dipole in a uniform magnetic field is U = -MB cosθ.",
      steps: [
        "The dipole tends to align with the magnetic field.",
        "Its potential energy is U = -MB cosθ.",
      ],
      finalAnswer: "U = -MB cosθ",
    },
  },

  {
    id: "P-MAG-009",
    subject: "P",
    chapter: "Magnetism",
    topic: "Earth's Magnetism",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The angle made by the Earth's total magnetic field with the horizontal is called:",
    options: [
      "Angle of declination",
      "Angle of dip",
      "Magnetic inclination",
      "Both B and C",
    ],
    correctAnswerIndex: 3,
    correctAnswerText: "Both B and C",
    solution: {
      concept:
        "The angle between Earth's total magnetic field and the horizontal plane is called dip or magnetic inclination.",
      steps: [
        "The Earth's magnetic field generally has both horizontal and vertical components.",
        "The angle made by the total field with the horizontal is the angle of dip.",
        "It is also called magnetic inclination.",
      ],
      finalAnswer: "Both B and C",
    },
  },

  {
    id: "P-MAG-010",
    subject: "P",
    chapter: "Magnetism",
    topic: "Earth's Magnetism",
    difficulty: "Medium",
    type: "Practice",
    questionText: "At the magnetic equator, the angle of dip is approximately:",
    options: ["0°", "30°", "60°", "90°"],
    correctAnswerIndex: 0,
    correctAnswerText: "0°",
    solution: {
      concept:
        "At the magnetic equator, Earth's magnetic field is approximately horizontal.",
      steps: [
        "Angle of dip measures the inclination of Earth's magnetic field to the horizontal.",
        "At the magnetic equator, the field is horizontal.",
        "Therefore dip is approximately 0°.",
      ],
      finalAnswer: "0°",
    },
  },

  {
    id: "P-MAG-011",
    subject: "P",
    chapter: "Magnetism",
    topic: "Magnetic Field and Matter",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "Which type of magnetic material has magnetic susceptibility that is small and positive?",
    options: [
      "Diamagnetic",
      "Paramagnetic",
      "Ferromagnetic",
      "Superconducting",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Paramagnetic",
    solution: {
      concept:
        "Paramagnetic substances have small positive magnetic susceptibility.",
      steps: [
        "Diamagnetic materials have negative susceptibility.",
        "Paramagnetic materials have small positive susceptibility.",
        "Ferromagnetic materials generally have very large positive susceptibility.",
      ],
      finalAnswer: "Paramagnetic",
    },
  },

  {
    id: "P-MAG-012",
    subject: "P",
    chapter: "Magnetism",
    topic: "Magnetic Field Components",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "At a place, the horizontal component of Earth's magnetic field is equal to the vertical component. What is the angle of dip?",
    options: ["0°", "30°", "45°", "90°"],
    correctAnswerIndex: 2,
    correctAnswerText: "45°",
    solution: {
      concept: "For Earth's magnetic field, tanδ = Bv/Bh.",
      steps: [
        "Given Bv = Bh.",
        "Therefore tanδ = Bv/Bh = 1.",
        "tanδ = 1 corresponds to δ = 45°.",
      ],
      finalAnswer: "45°",
    },
  },

  {
    id: "P-MAG-013",
    subject: "P",
    chapter: "Magnetism",
    topic: "Ferromagnetism",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "The temperature above which a ferromagnetic substance loses its ferromagnetic properties and becomes paramagnetic is called:",
    options: [
      "Curie temperature",
      "Critical temperature",
      "Boiling temperature",
      "Absolute temperature",
    ],
    correctAnswerIndex: 0,
    correctAnswerText: "Curie temperature",
    solution: {
      concept:
        "Ferromagnetic materials lose their long-range magnetic ordering above the Curie temperature.",
      steps: [
        "Below the Curie temperature, ferromagnetic ordering can exist.",
        "Above it, thermal agitation disrupts the ordering.",
        "The material behaves as a paramagnet.",
      ],
      finalAnswer: "Curie temperature",
    },
  },

  {
    id: "P-MAG-014",
    subject: "P",
    chapter: "Magnetism",
    topic: "Hysteresis",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "The phenomenon in which magnetization of a ferromagnetic material lags behind the magnetizing field is called:",
    options: ["Induction", "Hysteresis", "Polarization", "Refraction"],
    correctAnswerIndex: 1,
    correctAnswerText: "Hysteresis",
    solution: {
      concept:
        "Hysteresis describes the lag of magnetization behind the applied magnetic field.",
      steps: [
        "When the magnetizing field changes, the magnetization does not change instantaneously.",
        "The resulting lag is called hysteresis.",
        "The area of the hysteresis loop represents energy loss per cycle per unit volume.",
      ],
      finalAnswer: "Hysteresis",
    },
  },

  {
    id: "P-MAG-015",
    subject: "P",
    chapter: "Magnetism",
    topic: "Magnetic Materials",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "For making a permanent magnet, a material should preferably have:",
    options: [
      "Low retentivity and low coercivity",
      "High retentivity and high coercivity",
      "High permeability and zero retentivity",
      "Low coercivity and zero magnetization",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "High retentivity and high coercivity",
    solution: {
      concept:
        "A permanent magnet should retain magnetization and resist demagnetization.",
      steps: [
        "High retentivity means the material retains a large amount of magnetization.",
        "High coercivity means a strong opposing field is required to demagnetize it.",
        "Therefore both properties should be high.",
      ],
      finalAnswer: "High retentivity and high coercivity",
      examTip: "Permanent magnets → high retentivity + high coercivity.",
    },
  },
];

export default magnetismQuestions;
