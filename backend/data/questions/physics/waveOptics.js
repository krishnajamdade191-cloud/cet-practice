const waveOpticsQuestions = [
  {
    id: "P-WO-001",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Huygens Principle",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "According to Huygens' principle, every point on a wavefront acts as a source of:",
    options: [
      "Secondary wavelets",
      "Electric charges",
      "Magnetic poles",
      "Stationary waves only",
    ],
    correctAnswerIndex: 0,
    correctAnswerText: "Secondary wavelets",
    solution: {
      concept:
        "Huygens' principle states that every point on a wavefront behaves as a source of secondary wavelets.",
      steps: [
        "A wavefront represents points having the same phase.",
        "Each point on the wavefront produces secondary wavelets.",
        "The new wavefront is the envelope of these wavelets.",
      ],
      finalAnswer: "Secondary wavelets",
    },
  },

  {
    id: "P-WO-002",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Interference",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The phenomenon of redistribution of intensity due to superposition of two coherent light waves is called:",
    options: ["Diffraction", "Interference", "Polarization", "Refraction"],
    correctAnswerIndex: 1,
    correctAnswerText: "Interference",
    solution: {
      concept:
        "Interference occurs when coherent waves superpose and redistribute intensity.",
      steps: [
        "Two coherent waves overlap.",
        "Their amplitudes add according to the principle of superposition.",
        "This produces regions of maximum and minimum intensity.",
      ],
      finalAnswer: "Interference",
    },
  },

  {
    id: "P-WO-003",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Coherent Sources",
    difficulty: "Easy",
    type: "Practice",
    questionText: "Two sources are coherent if they have:",
    options: [
      "Different frequencies and random phase difference",
      "Same frequency and constant phase difference",
      "Different amplitudes only",
      "Zero intensity",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Same frequency and constant phase difference",
    solution: {
      concept:
        "Coherent sources maintain a constant phase difference and have the same frequency.",
      steps: [
        "For sustained interference, the phase relationship must remain constant.",
        "The sources must therefore have the same frequency and a constant phase difference.",
      ],
      finalAnswer: "Same frequency and constant phase difference",
    },
  },

  {
    id: "P-WO-004",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Young's Double Slit Experiment",
    difficulty: "Easy",
    type: "Practice",
    questionText: "In Young's double-slit experiment, the central fringe is:",
    options: [
      "Always dark",
      "Always bright",
      "Alternately bright and dark",
      "Absent",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Always bright",
    solution: {
      concept:
        "At the central point, the path difference between the two waves is zero.",
      steps: [
        "Path difference at the centre is Δ = 0.",
        "Zero path difference corresponds to constructive interference.",
        "Therefore the central fringe is bright.",
      ],
      finalAnswer: "Always bright",
    },
  },

  {
    id: "P-WO-005",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Fringe Width",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The fringe width in Young's double-slit experiment is given by:",
    options: ["β = dD/λ", "β = λD/d", "β = λd/D", "β = D/(λd)"],
    correctAnswerIndex: 1,
    correctAnswerText: "β = λD/d",
    solution: {
      concept:
        "Fringe width is the distance between two consecutive bright or dark fringes.",
      steps: [
        "For Young's experiment, β = λD/d.",
        "Here λ is wavelength, D is distance of screen from slits and d is slit separation.",
      ],
      finalAnswer: "β = λD/d",
    },
  },

  {
    id: "P-WO-006",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Fringe Width",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "In Young's double-slit experiment, wavelength is 600 nm, screen distance is 2 m and slit separation is 1 mm. What is the fringe width?",
    options: ["0.6 mm", "1.2 mm", "1.5 mm", "2.4 mm"],
    correctAnswerIndex: 1,
    correctAnswerText: "1.2 mm",
    solution: {
      concept: "Fringe width is β = λD/d.",
      steps: [
        "λ = 600 × 10⁻⁹ m.",
        "D = 2 m.",
        "d = 1 × 10⁻³ m.",
        "β = (600 × 10⁻⁹ × 2)/(1 × 10⁻³).",
        "β = 1.2 × 10⁻³ m.",
        "β = 1.2 mm.",
      ],
      finalAnswer: "1.2 mm",
    },
  },

  {
    id: "P-WO-007",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Interference Conditions",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "For constructive interference, the path difference between two coherent waves must be:",
    options: ["nλ", "(2n + 1)λ/2", "λ/4", "λ/8"],
    correctAnswerIndex: 0,
    correctAnswerText: "nλ",
    solution: {
      concept:
        "Constructive interference occurs when the path difference is an integral multiple of wavelength.",
      steps: [
        "For constructive interference, phase difference must be 2nπ.",
        "This corresponds to path difference Δ = nλ.",
      ],
      finalAnswer: "nλ",
    },
  },

  {
    id: "P-WO-008",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Interference Conditions",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "For destructive interference, the path difference between two coherent waves is:",
    options: ["nλ", "2nλ", "(2n + 1)λ/2", "λ"],
    correctAnswerIndex: 2,
    correctAnswerText: "(2n + 1)λ/2",
    solution: {
      concept:
        "Destructive interference occurs when the waves arrive out of phase by π.",
      steps: [
        "The phase difference for destructive interference is (2n + 1)π.",
        "The corresponding path difference is (2n + 1)λ/2.",
      ],
      finalAnswer: "(2n + 1)λ/2",
    },
  },

  {
    id: "P-WO-009",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Interference Intensity",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "Two coherent waves of equal amplitude A interfere constructively. The resultant amplitude is:",
    options: ["A/2", "A", "2A", "4A"],
    correctAnswerIndex: 2,
    correctAnswerText: "2A",
    solution: {
      concept: "For constructive interference, equal amplitudes add directly.",
      steps: [
        "Each wave has amplitude A.",
        "For zero phase difference, the resultant amplitude is A + A.",
        "Therefore resultant amplitude is 2A.",
      ],
      finalAnswer: "2A",
    },
  },

  {
    id: "P-WO-010",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Diffraction",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "Diffraction is most noticeable when the size of the aperture is:",
    options: [
      "Much larger than the wavelength",
      "Comparable to the wavelength",
      "Independent of wavelength",
      "Exactly zero",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Comparable to the wavelength",
    solution: {
      concept:
        "Diffraction becomes significant when the size of an aperture or obstacle is comparable to the wavelength.",
      steps: [
        "When aperture size is much larger than wavelength, spreading is small.",
        "When aperture size is comparable to wavelength, wave spreading becomes prominent.",
      ],
      finalAnswer: "Comparable to the wavelength",
    },
  },

  {
    id: "P-WO-011",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Single Slit Diffraction",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "For single-slit diffraction, the condition for the first minimum is:",
    options: ["a sinθ = λ", "a sinθ = λ/2", "a cosθ = λ", "a tanθ = λ"],
    correctAnswerIndex: 0,
    correctAnswerText: "a sinθ = λ",
    solution: {
      concept: "For a single slit of width a, minima occur when a sinθ = nλ.",
      steps: ["For the first minimum, n = 1.", "Therefore a sinθ = λ."],
      finalAnswer: "a sinθ = λ",
    },
  },

  {
    id: "P-WO-012",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Polarization",
    difficulty: "Hard",
    type: "Practice",
    questionText: "Polarization of light demonstrates that light is:",
    options: [
      "A longitudinal wave",
      "A transverse wave",
      "A mechanical wave only",
      "A scalar wave",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "A transverse wave",
    solution: {
      concept:
        "Only transverse waves can be polarized because their oscillations can be restricted to a particular direction.",
      steps: [
        "Polarization restricts the direction of oscillations.",
        "This is possible for transverse waves.",
        "Therefore polarization demonstrates the transverse nature of light.",
      ],
      finalAnswer: "A transverse wave",
    },
  },

  {
    id: "P-WO-013",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Brewster's Law",
    difficulty: "Hard",
    type: "Practice",
    questionText: "According to Brewster's law, at the polarizing angle iₚ:",
    options: ["μ = sin iₚ", "μ = cos iₚ", "μ = tan iₚ", "μ = cot iₚ"],
    correctAnswerIndex: 2,
    correctAnswerText: "μ = tan iₚ",
    solution: {
      concept:
        "Brewster's law relates the refractive index of a medium to its polarizing angle.",
      steps: [
        "At the polarizing angle, reflected and refracted rays are perpendicular.",
        "Brewster's law gives μ = tan iₚ.",
      ],
      finalAnswer: "μ = tan iₚ",
    },
  },

  {
    id: "P-WO-014",
    subject: "P",
    chapter: "Wave Optics",
    topic: "YDSE Fringe Shift",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "In Young's double-slit experiment, if the wavelength of light is doubled while all other quantities remain unchanged, the fringe width becomes:",
    options: ["Half", "Unchanged", "Twice", "Four times"],
    correctAnswerIndex: 2,
    correctAnswerText: "Twice",
    solution: {
      concept: "Fringe width is β = λD/d.",
      steps: [
        "With D and d unchanged, β is directly proportional to λ.",
        "If λ becomes 2λ, then β becomes 2β.",
      ],
      finalAnswer: "Twice",
    },
  },

  {
    id: "P-WO-015",
    subject: "P",
    chapter: "Wave Optics",
    topic: "Coherence and Interference",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "If two independent light bulbs are used as sources in Young's double-slit experiment, sustained interference fringes are not observed mainly because:",
    options: [
      "Their light has zero intensity",
      "They are not coherent sources",
      "Their wavelengths are always zero",
      "Light cannot undergo interference",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "They are not coherent sources",
    solution: {
      concept:
        "Sustained interference requires a stable phase relationship between the sources.",
      steps: [
        "Independent light sources emit waves with randomly varying phase relationships.",
        "Therefore the phase difference does not remain constant.",
        "The interference pattern averages out over time.",
      ],
      finalAnswer: "They are not coherent sources",
      examTip:
        "For sustained interference, remember: same frequency + constant phase difference.",
    },
  },
];

export default waveOpticsQuestions;
