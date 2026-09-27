const dualNatureQuestions = [
  {
    id: "P-DN-001",
    subject: "P",
    chapter: "Dual Nature",
    topic: "Photoelectric Effect",
    difficulty: "Easy",
    type: "Practice",
    questionText: "The photoelectric effect demonstrates the:",
    options: [
      "Wave nature of electrons only",
      "Particle nature of light",
      "Gravitational nature of light",
      "Nuclear nature of light",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Particle nature of light",
    solution: {
      concept:
        "The photoelectric effect is explained by treating light as packets of energy called photons.",
      steps: [
        "A photon transfers its energy to an electron.",
        "The electron can escape if the photon energy is sufficient.",
        "This supports the particle nature of electromagnetic radiation.",
      ],
      finalAnswer: "Particle nature of light",
    },
  },

  {
    id: "P-DN-002",
    subject: "P",
    chapter: "Dual Nature",
    topic: "Photon Energy",
    difficulty: "Easy",
    type: "Practice",
    questionText: "The energy of a photon of frequency ν is:",
    options: ["h/ν", "hν", "ν/h", "hcν"],
    correctAnswerIndex: 1,
    correctAnswerText: "hν",
    solution: {
      concept: "According to Planck's quantum theory, photon energy is E = hν.",
      steps: [
        "h is Planck's constant.",
        "ν is the frequency of radiation.",
        "Therefore photon energy is E = hν.",
      ],
      finalAnswer: "E = hν",
    },
  },

  {
    id: "P-DN-003",
    subject: "P",
    chapter: "Dual Nature",
    topic: "Photon Energy",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "If the frequency of electromagnetic radiation is doubled, the energy of each photon becomes:",
    options: ["Half", "Unchanged", "Twice", "Four times"],
    correctAnswerIndex: 2,
    correctAnswerText: "Twice",
    solution: {
      concept: "Photon energy is directly proportional to frequency.",
      steps: [
        "E = hν.",
        "If ν becomes 2ν, then E becomes h(2ν) = 2hν.",
        "Therefore photon energy doubles.",
      ],
      finalAnswer: "Twice",
    },
  },

  {
    id: "P-DN-004",
    subject: "P",
    chapter: "Dual Nature",
    topic: "Work Function",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The minimum energy required to remove an electron from the surface of a metal is called:",
    options: [
      "Kinetic energy",
      "Work function",
      "Stopping potential",
      "Binding energy",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Work function",
    solution: {
      concept:
        "The work function is the minimum energy required to liberate an electron from a metal surface.",
      steps: [
        "The electron must overcome the attraction of the metal surface.",
        "This minimum required energy is called the work function.",
      ],
      finalAnswer: "Work function",
    },
  },

  {
    id: "P-DN-005",
    subject: "P",
    chapter: "Dual Nature",
    topic: "Threshold Frequency",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The minimum frequency of incident radiation required to produce photoelectric emission is called:",
    options: [
      "Resonant frequency",
      "Threshold frequency",
      "Natural frequency",
      "Cyclotron frequency",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Threshold frequency",
    solution: {
      concept:
        "Photoelectric emission occurs only when photon energy is at least equal to the work function.",
      steps: [
        "At the threshold frequency ν₀, hν₀ = φ.",
        "ν₀ is therefore the minimum frequency needed for emission.",
      ],
      finalAnswer: "Threshold frequency",
    },
  },

  {
    id: "P-DN-006",
    subject: "P",
    chapter: "Dual Nature",
    topic: "Einstein Photoelectric Equation",
    difficulty: "Medium",
    type: "Practice",
    questionText: "Einstein's photoelectric equation is:",
    options: [
      "hν = φ + Kmax",
      "hν = φ - Kmax",
      "hν = Kmax - φ",
      "φ = hν + Kmax",
    ],
    correctAnswerIndex: 0,
    correctAnswerText: "hν = φ + Kmax",
    solution: {
      concept:
        "The energy of an incident photon is used partly to overcome the work function and the remainder appears as maximum kinetic energy.",
      steps: [
        "Photon energy = hν.",
        "Energy required to liberate the electron = φ.",
        "Remaining energy becomes maximum kinetic energy.",
        "Therefore hν = φ + Kmax.",
      ],
      finalAnswer: "hν = φ + Kmax",
    },
  },

  {
    id: "P-DN-007",
    subject: "P",
    chapter: "Dual Nature",
    topic: "Photoelectric Effect",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "If the intensity of incident light is increased while its frequency remains above threshold, the maximum kinetic energy of photoelectrons:",
    options: ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
    correctAnswerIndex: 2,
    correctAnswerText: "Remains unchanged",
    solution: {
      concept:
        "Maximum kinetic energy depends on photon frequency, not intensity.",
      steps: [
        "Einstein's equation is Kmax = hν - φ.",
        "If frequency remains unchanged, Kmax remains unchanged.",
        "Increasing intensity increases the number of photons and hence the photoelectric current.",
      ],
      finalAnswer: "Remains unchanged",
    },
  },

  {
    id: "P-DN-008",
    subject: "P",
    chapter: "Dual Nature",
    topic: "Photoelectric Effect",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "If the frequency of incident light is increased above the threshold frequency, the maximum kinetic energy of emitted photoelectrons:",
    options: [
      "Increases",
      "Decreases",
      "Remains unchanged",
      "Always becomes zero",
    ],
    correctAnswerIndex: 0,
    correctAnswerText: "Increases",
    solution: {
      concept: "Maximum kinetic energy is Kmax = hν - φ.",
      steps: [
        "Work function φ is fixed for a particular metal.",
        "Increasing ν increases hν.",
        "Therefore Kmax increases.",
      ],
      finalAnswer: "Increases",
    },
  },

  {
    id: "P-DN-009",
    subject: "P",
    chapter: "Dual Nature",
    topic: "Stopping Potential",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The maximum kinetic energy of photoelectrons is related to stopping potential V₀ by:",
    options: ["Kmax = eV₀", "Kmax = V₀/e", "Kmax = e/V₀", "Kmax = e + V₀"],
    correctAnswerIndex: 0,
    correctAnswerText: "Kmax = eV₀",
    solution: {
      concept:
        "The stopping potential is the potential required to stop the most energetic photoelectrons.",
      steps: [
        "The electrical energy needed to stop an electron is eV₀.",
        "This equals the maximum kinetic energy.",
        "Therefore Kmax = eV₀.",
      ],
      finalAnswer: "Kmax = eV₀",
    },
  },

  {
    id: "P-DN-010",
    subject: "P",
    chapter: "Dual Nature",
    topic: "de Broglie Wavelength",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The de Broglie wavelength associated with a particle of momentum p is:",
    options: ["λ = hp", "λ = h/p", "λ = p/h", "λ = h + p"],
    correctAnswerIndex: 1,
    correctAnswerText: "λ = h/p",
    solution: {
      concept:
        "de Broglie proposed that moving particles have an associated wavelength.",
      steps: [
        "The de Broglie relation is λ = h/p.",
        "Here h is Planck's constant and p is particle momentum.",
      ],
      finalAnswer: "λ = h/p",
    },
  },

  {
    id: "P-DN-011",
    subject: "P",
    chapter: "Dual Nature",
    topic: "de Broglie Wavelength",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "If the momentum of a particle is doubled, its de Broglie wavelength becomes:",
    options: ["Twice", "Four times", "Half", "Unchanged"],
    correctAnswerIndex: 2,
    correctAnswerText: "Half",
    solution: {
      concept: "de Broglie wavelength is inversely proportional to momentum.",
      steps: [
        "λ = h/p.",
        "If p becomes 2p, then λ' = h/(2p).",
        "Therefore λ' = λ/2.",
      ],
      finalAnswer: "Half",
    },
  },

  {
    id: "P-DN-012",
    subject: "P",
    chapter: "Dual Nature",
    topic: "de Broglie Wavelength",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "An electron and a proton have the same momentum. Which statement about their de Broglie wavelengths is correct?",
    options: [
      "Electron has a larger wavelength",
      "Proton has a larger wavelength",
      "Both have the same wavelength",
      "Their wavelengths are zero",
    ],
    correctAnswerIndex: 2,
    correctAnswerText: "Both have the same wavelength",
    solution: {
      concept:
        "de Broglie wavelength depends only on momentum through λ = h/p.",
      steps: [
        "Both particles have the same momentum p.",
        "For the electron, λₑ = h/p.",
        "For the proton, λₚ = h/p.",
        "Therefore their wavelengths are equal.",
      ],
      finalAnswer: "Both have the same wavelength",
    },
  },

  {
    id: "P-DN-013",
    subject: "P",
    chapter: "Dual Nature",
    topic: "Matter Waves",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "The wave nature of electrons was experimentally confirmed by:",
    options: [
      "Millikan's experiment",
      "Davisson-Germer experiment",
      "Rutherford scattering experiment",
      "Michelson-Morley experiment",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Davisson-Germer experiment",
    solution: {
      concept:
        "The Davisson-Germer experiment demonstrated electron diffraction.",
      steps: [
        "Electrons were scattered from a nickel crystal.",
        "The observed diffraction pattern demonstrated wave-like behavior.",
        "This supported de Broglie's matter-wave hypothesis.",
      ],
      finalAnswer: "Davisson-Germer experiment",
    },
  },

  {
    id: "P-DN-014",
    subject: "P",
    chapter: "Dual Nature",
    topic: "de Broglie Wavelength",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "For a non-relativistic particle, if its kinetic energy is increased by a factor of 4, its de Broglie wavelength becomes:",
    options: ["Four times", "Twice", "Half", "One-fourth"],
    correctAnswerIndex: 2,
    correctAnswerText: "Half",
    solution: {
      concept:
        "For a non-relativistic particle, λ = h/√(2mK), so wavelength is inversely proportional to √K.",
      steps: [
        "λ ∝ 1/√K for constant mass.",
        "If K becomes 4K, then λ' = λ/√4.",
        "Therefore λ' = λ/2.",
      ],
      finalAnswer: "Half",
    },
  },

  {
    id: "P-DN-015",
    subject: "P",
    chapter: "Dual Nature",
    topic: "Photoelectric Effect",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A metal has work function 2 eV. Light of photon energy 5 eV falls on it. What is the maximum kinetic energy of the emitted electrons?",
    options: ["2 eV", "3 eV", "5 eV", "7 eV"],
    correctAnswerIndex: 1,
    correctAnswerText: "3 eV",
    solution: {
      concept: "Einstein's photoelectric equation gives Kmax = Eγ − φ.",
      steps: [
        "Photon energy = 5 eV.",
        "Work function φ = 2 eV.",
        "Kmax = 5 − 2.",
        "Kmax = 3 eV.",
      ],
      finalAnswer: "3 eV",
    },
  },
];

export default dualNatureQuestions;
