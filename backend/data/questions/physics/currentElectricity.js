const currentElectricityQuestions = [
  {
    id: "P-CE-001",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Electric Current",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "A charge of 20 C flows through a conductor in 5 seconds. What is the current?",
    options: ["2 A", "4 A", "5 A", "10 A"],
    correctAnswerIndex: 1,
    correctAnswerText: "4 A",
    solution: {
      concept: "Electric current is the rate of flow of electric charge.",
      steps: ["I = Q/t.", "Q = 20 C and t = 5 s.", "I = 20/5 = 4 A."],
      finalAnswer: "4 A",
    },
  },

  {
    id: "P-CE-002",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Drift Velocity",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "In a metallic conductor, the average velocity acquired by free electrons due to an applied electric field is called:",
    options: [
      "Thermal velocity",
      "Drift velocity",
      "Escape velocity",
      "Angular velocity",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Drift velocity",
    solution: {
      concept:
        "Free electrons in a conductor acquire a small average velocity opposite to the applied electric field.",
      steps: [
        "Electrons undergo random thermal motion.",
        "When an electric field is applied, they acquire a small net average velocity.",
        "This average velocity is called drift velocity.",
      ],
      finalAnswer: "Drift velocity",
    },
  },

  {
    id: "P-CE-003",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Ohm's Law",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "According to Ohm's law, at constant temperature, the current through a conductor is:",
    options: [
      "Directly proportional to potential difference",
      "Inversely proportional to potential difference",
      "Independent of potential difference",
      "Proportional to the square of potential difference",
    ],
    correctAnswerIndex: 0,
    correctAnswerText: "Directly proportional to potential difference",
    solution: {
      concept:
        "Ohm's law states V = IR for a conductor at constant temperature.",
      steps: [
        "V = IR.",
        "For constant resistance R, I = V/R.",
        "Therefore current is directly proportional to potential difference.",
      ],
      finalAnswer: "Directly proportional to potential difference",
    },
  },

  {
    id: "P-CE-004",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Resistance",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "A resistor of resistance 5 Ω is connected across a 20 V battery. What current flows through it?",
    options: ["2 A", "4 A", "5 A", "10 A"],
    correctAnswerIndex: 1,
    correctAnswerText: "4 A",
    solution: {
      concept: "Use Ohm's law: V = IR.",
      steps: ["V = 20 V.", "R = 5 Ω.", "I = V/R.", "I = 20/5 = 4 A."],
      finalAnswer: "4 A",
    },
  },

  {
    id: "P-CE-005",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Resistivity",
    difficulty: "Easy",
    type: "Practice",
    questionText: "The resistance of a uniform wire is given by:",
    options: ["R = ρA/L", "R = ρL/A", "R = LA/ρ", "R = ρ/(LA)"],
    correctAnswerIndex: 1,
    correctAnswerText: "R = ρL/A",
    solution: {
      concept:
        "Resistance depends on the material, length and cross-sectional area of the conductor.",
      steps: [
        "The relation is R = ρL/A.",
        "Here ρ is resistivity, L is length and A is cross-sectional area.",
      ],
      finalAnswer: "R = ρL/A",
    },
  },

  {
    id: "P-CE-006",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Resistance and Dimensions",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A wire has resistance R. If its length is doubled while its cross-sectional area remains unchanged, its new resistance is:",
    options: ["R/2", "R", "2R", "4R"],
    correctAnswerIndex: 2,
    correctAnswerText: "2R",
    solution: {
      concept: "For a given material, R ∝ L.",
      steps: [
        "R = ρL/A.",
        "If L becomes 2L and A remains unchanged:",
        "R' = ρ(2L)/A.",
        "Therefore R' = 2R.",
      ],
      finalAnswer: "2R",
    },
  },

  {
    id: "P-CE-007",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Series Combination",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "Three resistors of 2 Ω, 3 Ω and 5 Ω are connected in series. What is their equivalent resistance?",
    options: ["5 Ω", "6 Ω", "10 Ω", "30 Ω"],
    correctAnswerIndex: 2,
    correctAnswerText: "10 Ω",
    solution: {
      concept:
        "For resistors connected in series, equivalent resistance is the sum of individual resistances.",
      steps: [
        "R₁ = 2 Ω, R₂ = 3 Ω and R₃ = 5 Ω.",
        "R = R₁ + R₂ + R₃.",
        "R = 2 + 3 + 5 = 10 Ω.",
      ],
      finalAnswer: "10 Ω",
    },
  },

  {
    id: "P-CE-008",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Parallel Combination",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "Two resistors of 6 Ω and 3 Ω are connected in parallel. What is their equivalent resistance?",
    options: ["1 Ω", "2 Ω", "3 Ω", "9 Ω"],
    correctAnswerIndex: 1,
    correctAnswerText: "2 Ω",
    solution: {
      concept: "For two resistors in parallel, 1/R = 1/R₁ + 1/R₂.",
      steps: [
        "1/R = 1/6 + 1/3.",
        "1/R = 1/6 + 2/6 = 3/6 = 1/2.",
        "Therefore R = 2 Ω.",
      ],
      finalAnswer: "2 Ω",
    },
  },

  {
    id: "P-CE-009",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Electrical Power",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A resistor of 10 Ω carries a current of 2 A. What power is dissipated in the resistor?",
    options: ["10 W", "20 W", "40 W", "80 W"],
    correctAnswerIndex: 2,
    correctAnswerText: "40 W",
    solution: {
      concept: "Electrical power can be calculated using P = I²R.",
      steps: ["I = 2 A and R = 10 Ω.", "P = I²R.", "P = 2² × 10.", "P = 40 W."],
      finalAnswer: "40 W",
    },
  },

  {
    id: "P-CE-010",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Electrical Energy",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "A 100 W bulb operates for 5 hours. How much electrical energy does it consume?",
    options: ["0.2 kWh", "0.5 kWh", "5 kWh", "20 kWh"],
    correctAnswerIndex: 1,
    correctAnswerText: "0.5 kWh",
    solution: {
      concept: "Electrical energy consumed is E = Pt.",
      steps: [
        "Power = 100 W = 0.1 kW.",
        "Time = 5 hours.",
        "E = 0.1 × 5.",
        "E = 0.5 kWh.",
      ],
      finalAnswer: "0.5 kWh",
    },
  },

  {
    id: "P-CE-011",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Kirchhoff's Current Law",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "At a junction in an electrical circuit, currents of 5 A and 3 A enter the junction. If a current of 6 A leaves through one branch, what current leaves through the other branch?",
    options: ["1 A", "2 A", "3 A", "8 A"],
    correctAnswerIndex: 1,
    correctAnswerText: "2 A",
    solution: {
      concept:
        "Kirchhoff's current law states that total current entering a junction equals total current leaving it.",
      steps: [
        "Total current entering = 5 + 3 = 8 A.",
        "One outgoing current = 6 A.",
        "Let the other outgoing current be I.",
        "8 = 6 + I.",
        "Therefore I = 2 A.",
      ],
      finalAnswer: "2 A",
    },
  },

  {
    id: "P-CE-012",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Kirchhoff's Voltage Law",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A simple closed circuit contains a 12 V battery and two series resistors of 2 Ω and 4 Ω. What is the current in the circuit?",
    options: ["1 A", "2 A", "3 A", "6 A"],
    correctAnswerIndex: 1,
    correctAnswerText: "2 A",
    solution: {
      concept:
        "Using Kirchhoff's voltage law, the algebraic sum of potential changes around a closed loop is zero.",
      steps: [
        "Total resistance = 2 + 4 = 6 Ω.",
        "Applying the loop rule: 12 - 6I = 0.",
        "Therefore 6I = 12.",
        "I = 2 A.",
      ],
      finalAnswer: "2 A",
    },
  },

  {
    id: "P-CE-013",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Cell and Internal Resistance",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A cell of emf 12 V and internal resistance 1 Ω is connected to an external resistance of 5 Ω. What current flows through the circuit?",
    options: ["1 A", "2 A", "3 A", "6 A"],
    correctAnswerIndex: 1,
    correctAnswerText: "2 A",
    solution: {
      concept: "For a cell with internal resistance, current is I = E/(R + r).",
      steps: [
        "Emf E = 12 V.",
        "External resistance R = 5 Ω.",
        "Internal resistance r = 1 Ω.",
        "I = E/(R + r).",
        "I = 12/(5 + 1) = 2 A.",
      ],
      finalAnswer: "2 A",
    },
  },

  {
    id: "P-CE-014",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Wheatstone Bridge",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A Wheatstone bridge is balanced when P = 2 Ω, Q = 4 Ω and R = 3 Ω. What is the value of S?",
    options: ["1.5 Ω", "6 Ω", "8 Ω", "12 Ω"],
    correctAnswerIndex: 1,
    correctAnswerText: "6 Ω",
    solution: {
      concept: "For a balanced Wheatstone bridge, P/Q = R/S.",
      steps: ["P/Q = R/S.", "2/4 = 3/S.", "1/2 = 3/S.", "Therefore S = 6 Ω."],
      finalAnswer: "6 Ω",
    },
  },

  {
    id: "P-CE-015",
    subject: "P",
    chapter: "Current Electricity",
    topic: "Temperature Dependence of Resistance",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "A metallic resistor has resistance 10 Ω at 20°C. Its temperature coefficient of resistance is 0.004 °C⁻¹. What is its resistance at 70°C?",
    options: ["10.2 Ω", "11 Ω", "12 Ω", "14 Ω"],
    correctAnswerIndex: 2,
    correctAnswerText: "12 Ω",
    solution: {
      concept:
        "For a conductor over a suitable temperature range, R = R₀[1 + αΔT].",
      steps: [
        "R₀ = 10 Ω.",
        "α = 0.004 °C⁻¹.",
        "Temperature change ΔT = 70 - 20 = 50°C.",
        "R = 10[1 + (0.004 × 50)].",
        "R = 10(1 + 0.2).",
        "R = 12 Ω.",
      ],
      finalAnswer: "12 Ω",
    },
  },
];

export default currentElectricityQuestions;
