const atomsAndNucleiQuestions = [
  {
    id: "P-AN-001",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Bohr Model",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "According to Bohr's model, the angular momentum of an electron in the nth orbit of a hydrogen atom is:",
    options: ["nh", "nh/2π", "2πnh", "h/n"],
    correctAnswerIndex: 1,
    correctAnswerText: "nh/2π",
    solution: {
      concept: "Bohr's quantization condition",
      steps: [
        "Bohr proposed that the angular momentum of an electron is quantized.",
        "The quantization condition is mvr = nh/2π.",
        "Therefore, for the nth orbit, angular momentum is nh/2π.",
      ],
      finalAnswer: "nh/2π",
      examTip: "Remember: Bohr angular momentum = nh/2π.",
    },
  },

  {
    id: "P-AN-002",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Hydrogen Spectrum",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "Which series of the hydrogen spectrum lies mainly in the visible region?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Balmer series",
    solution: {
      concept: "Hydrogen spectral series",
      steps: [
        "The Lyman series lies in the ultraviolet region.",
        "The Balmer series corresponds to transitions ending at n = 2.",
        "These wavelengths mainly fall in the visible region.",
      ],
      finalAnswer: "Balmer series",
      examTip: "Lyman → UV, Balmer → visible, Paschen → IR.",
    },
  },

  {
    id: "P-AN-003",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Energy Levels",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The energy of an electron in the ground state of a hydrogen atom is:",
    options: ["-13.6 eV", "-3.4 eV", "0 eV", "13.6 eV"],
    correctAnswerIndex: 0,
    correctAnswerText: "-13.6 eV",
    solution: {
      concept: "Energy levels of hydrogen atom",
      steps: [
        "For hydrogen, the energy of the nth orbit is En = -13.6/n² eV.",
        "For the ground state, n = 1.",
        "Therefore, E1 = -13.6 eV.",
      ],
      finalAnswer: "-13.6 eV",
      examTip: "Ground-state energy of hydrogen is -13.6 eV.",
    },
  },

  {
    id: "P-AN-004",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Excitation Energy",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "What minimum energy is required to excite a hydrogen atom from n = 1 to n = 2?",
    options: ["3.4 eV", "10.2 eV", "13.6 eV", "17.0 eV"],
    correctAnswerIndex: 1,
    correctAnswerText: "10.2 eV",
    solution: {
      concept: "Energy difference between atomic levels",
      steps: [
        "For n = 1, E1 = -13.6 eV.",
        "For n = 2, E2 = -13.6/4 = -3.4 eV.",
        "Required energy = E2 - E1.",
        "Therefore, ΔE = -3.4 - (-13.6) = 10.2 eV.",
      ],
      finalAnswer: "10.2 eV",
      examTip:
        "Excitation energy is the positive difference between the two energy levels.",
    },
  },

  {
    id: "P-AN-005",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Rydberg Formula",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "An electron in a hydrogen atom makes a transition from n = 3 to n = 2. This transition belongs to which series?",
    options: ["Lyman", "Balmer", "Paschen", "Brackett"],
    correctAnswerIndex: 1,
    correctAnswerText: "Balmer",
    solution: {
      concept: "Hydrogen spectral series",
      steps: [
        "The spectral series is identified by the final energy level.",
        "Here the electron ends at n = 2.",
        "Transitions ending at n = 2 form the Balmer series.",
      ],
      finalAnswer: "Balmer",
      examTip: "Look only at the final orbit to identify the hydrogen series.",
    },
  },

  {
    id: "P-AN-006",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Photon Energy",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A photon has a wavelength of 620 nm. Approximately what is its energy?",
    options: ["1.0 eV", "2.0 eV", "3.0 eV", "4.0 eV"],
    correctAnswerIndex: 1,
    correctAnswerText: "2.0 eV",
    solution: {
      concept: "Energy of a photon",
      steps: [
        "Use E = hc/λ.",
        "In electron-volts, E(eV) ≈ 1240/λ(nm).",
        "For λ = 620 nm, E = 1240/620 = 2.0 eV.",
      ],
      finalAnswer: "2.0 eV",
      examTip: "For wavelength in nm, use E(eV) = 1240/λ.",
    },
  },

  {
    id: "P-AN-007",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Nuclear Size",
    difficulty: "Easy",
    type: "Practice",
    questionText: "The radius of a nucleus is approximately proportional to:",
    options: ["A", "A²", "A^(1/3)", "1/A"],
    correctAnswerIndex: 2,
    correctAnswerText: "A^(1/3)",
    solution: {
      concept: "Nuclear radius",
      steps: [
        "The empirical expression for nuclear radius is R = R0 A^(1/3).",
        "Here A is the mass number.",
        "Therefore, nuclear radius is proportional to A^(1/3).",
      ],
      finalAnswer: "A^(1/3)",
      examTip:
        "Nuclear volume is proportional to A, so radius varies as A^(1/3).",
    },
  },

  {
    id: "P-AN-008",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Mass Defect",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "If the mass defect of a nucleus is 0.01 u, its binding energy is approximately:",
    options: ["0.931 MeV", "9.31 MeV", "93.1 MeV", "931 MeV"],
    correctAnswerIndex: 1,
    correctAnswerText: "9.31 MeV",
    solution: {
      concept: "Mass-energy equivalence",
      steps: [
        "Binding energy = Δm × 931.5 MeV when Δm is in atomic mass units.",
        "Here Δm = 0.01 u.",
        "Binding energy = 0.01 × 931.5 = 9.315 MeV.",
      ],
      finalAnswer: "9.31 MeV",
      examTip: "1 u corresponds to approximately 931.5 MeV of energy.",
    },
  },

  {
    id: "P-AN-009",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Binding Energy",
    difficulty: "Medium",
    type: "Practice",
    questionText: "The binding energy per nucleon is a measure of:",
    options: [
      "Nuclear charge",
      "Nuclear stability",
      "Atomic radius",
      "Electron energy",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Nuclear stability",
    solution: {
      concept: "Binding energy per nucleon",
      steps: [
        "Binding energy is the energy required to separate a nucleus into its nucleons.",
        "Binding energy per nucleon indicates how strongly the nucleons are bound on average.",
        "A larger binding energy per nucleon generally corresponds to greater nuclear stability.",
      ],
      finalAnswer: "Nuclear stability",
      examTip:
        "Higher binding energy per nucleon generally means a more stable nucleus.",
    },
  },

  {
    id: "P-AN-010",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Radioactive Decay",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The half-life of a radioactive substance is 10 days. What fraction remains after 30 days?",
    options: ["1/2", "1/4", "1/8", "1/16"],
    correctAnswerIndex: 2,
    correctAnswerText: "1/8",
    solution: {
      concept: "Radioactive half-life",
      steps: [
        "30 days correspond to 30/10 = 3 half-lives.",
        "After one half-life, fraction remaining = 1/2.",
        "After three half-lives, fraction remaining = (1/2)^3 = 1/8.",
      ],
      finalAnswer: "1/8",
      examTip: "After n half-lives, remaining fraction = (1/2)^n.",
    },
  },

  {
    id: "P-AN-011",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Radioactive Decay Constant",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The half-life of a radioactive substance is 20 minutes. Its decay constant is approximately:",
    options: ["0.0173 min⁻¹", "0.0347 min⁻¹", "0.0693 min⁻¹", "0.693 min⁻¹"],
    correctAnswerIndex: 1,
    correctAnswerText: "0.0347 min⁻¹",
    solution: {
      concept: "Relation between half-life and decay constant",
      steps: [
        "Use T1/2 = 0.693/λ.",
        "Therefore λ = 0.693/20.",
        "λ ≈ 0.03465 min⁻¹.",
      ],
      finalAnswer: "0.0347 min⁻¹",
      examTip: "Always use consistent time units for λ and half-life.",
    },
  },

  {
    id: "P-AN-012",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Nuclear Fission",
    difficulty: "Easy",
    type: "Practice",
    questionText: "Which of the following is an example of nuclear fission?",
    options: [
      "Two hydrogen nuclei combining to form helium",
      "A uranium nucleus splitting into smaller nuclei",
      "Emission of visible light by an atom",
      "Removal of an electron from an atom",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "A uranium nucleus splitting into smaller nuclei",
    solution: {
      concept: "Nuclear fission",
      steps: [
        "Fission is the splitting of a heavy nucleus into two or more lighter nuclei.",
        "Uranium-235 can undergo fission after absorbing a neutron.",
        "The process releases energy and additional neutrons.",
      ],
      finalAnswer: "A uranium nucleus splitting into smaller nuclei",
      examTip: "Fission → heavy nucleus splits; fusion → light nuclei combine.",
    },
  },

  {
    id: "P-AN-013",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Nuclear Fusion",
    difficulty: "Medium",
    type: "Practice",
    questionText: "The main source of energy of the Sun is:",
    options: [
      "Nuclear fission",
      "Nuclear fusion",
      "Chemical combustion",
      "Radioactive decay only",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Nuclear fusion",
    solution: {
      concept: "Nuclear fusion",
      steps: [
        "The Sun contains extremely high temperature and pressure.",
        "Hydrogen nuclei combine through a series of fusion reactions.",
        "The resulting helium nucleus has slightly less mass than the original particles.",
        "The mass difference is released as energy.",
      ],
      finalAnswer: "Nuclear fusion",
      examTip: "Stars obtain their energy primarily through nuclear fusion.",
    },
  },

  {
    id: "P-AN-014",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Nuclear Binding Energy",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A nucleus has a mass defect of 0.20 u. What is its approximate binding energy?",
    options: ["18.6 MeV", "93.1 MeV", "186.3 MeV", "931.5 MeV"],
    correctAnswerIndex: 2,
    correctAnswerText: "186.3 MeV",
    solution: {
      concept: "Mass defect and binding energy",
      steps: [
        "Use BE = Δm × 931.5 MeV.",
        "Here Δm = 0.20 u.",
        "BE = 0.20 × 931.5.",
        "BE = 186.3 MeV.",
      ],
      finalAnswer: "186.3 MeV",
      examTip: "Do not confuse mass defect in u with binding energy in MeV.",
    },
  },

  {
    id: "P-AN-015",
    subject: "P",
    chapter: "Atoms and Nuclei",
    topic: "Bohr Radius",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "In the Bohr model of hydrogen, the radius of the nth orbit is proportional to:",
    options: ["n", "n²", "1/n", "1/n²"],
    correctAnswerIndex: 1,
    correctAnswerText: "n²",
    solution: {
      concept: "Bohr radius relation",
      steps: [
        "For a hydrogen atom, the radius of the nth orbit is rn = n²a0.",
        "Here a0 is the Bohr radius.",
        "Therefore, the radius is proportional to n².",
      ],
      finalAnswer: "n²",
      examTip: "Bohr orbit radius ∝ n², while energy ∝ -1/n².",
    },
  },
];

export default atomsAndNucleiQuestions;
