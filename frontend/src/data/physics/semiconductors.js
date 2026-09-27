const semiconductorsQuestions = [
  {
    id: "P-SC-001",
    subject: "P",
    chapter: "Semiconductors",
    topic: "Intrinsic Semiconductor",
    difficulty: "Easy",
    type: "Practice",
    questionText: "A pure semiconductor without any impurity is called:",
    options: [
      "Extrinsic semiconductor",
      "Intrinsic semiconductor",
      "P-type semiconductor",
      "N-type semiconductor",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Intrinsic semiconductor",
    solution: {
      concept: "Intrinsic semiconductor",
      steps: [
        "A pure semiconductor consists only of the semiconductor material itself.",
        "No intentional impurity is added to increase conductivity.",
        "Such a semiconductor is called an intrinsic semiconductor.",
      ],
      finalAnswer: "Intrinsic semiconductor",
      examTip: "Intrinsic means pure semiconductor.",
    },
  },

  {
    id: "P-SC-002",
    subject: "P",
    chapter: "Semiconductors",
    topic: "Charge Carriers",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "In an intrinsic semiconductor, the number of electrons and holes is:",
    options: [
      "Always zero",
      "Equal",
      "Electrons are always greater",
      "Holes are always greater",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Equal",
    solution: {
      concept: "Charge carriers in intrinsic semiconductors",
      steps: [
        "Thermal energy creates electron-hole pairs in an intrinsic semiconductor.",
        "Each electron promoted to the conduction band leaves behind one hole.",
        "Therefore, the number of electrons equals the number of holes.",
      ],
      finalAnswer: "Equal",
      examTip: "For an intrinsic semiconductor, ne = nh.",
    },
  },

  {
    id: "P-SC-003",
    subject: "P",
    chapter: "Semiconductors",
    topic: "Doping",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The process of adding a controlled impurity to a pure semiconductor is called:",
    options: ["Ionisation", "Doping", "Recombination", "Polarisation"],
    correctAnswerIndex: 1,
    correctAnswerText: "Doping",
    solution: {
      concept: "Semiconductor doping",
      steps: [
        "A pure semiconductor has relatively low electrical conductivity.",
        "A small amount of suitable impurity is intentionally added to increase conductivity.",
        "This process is called doping.",
      ],
      finalAnswer: "Doping",
      examTip:
        "Doping converts an intrinsic semiconductor into an extrinsic semiconductor.",
    },
  },

  {
    id: "P-SC-004",
    subject: "P",
    chapter: "Semiconductors",
    topic: "N-type Semiconductor",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "Which impurity is generally added to silicon to form an N-type semiconductor?",
    options: ["Boron", "Aluminium", "Phosphorus", "Gallium"],
    correctAnswerIndex: 2,
    correctAnswerText: "Phosphorus",
    solution: {
      concept: "N-type semiconductor",
      steps: [
        "Silicon has four valence electrons.",
        "A pentavalent impurity has five valence electrons.",
        "Phosphorus is pentavalent and contributes one extra electron.",
        "Therefore, phosphorus doping produces an N-type semiconductor.",
      ],
      finalAnswer: "Phosphorus",
      examTip:
        "Pentavalent impurities such as P, As and Sb produce N-type semiconductors.",
    },
  },

  {
    id: "P-SC-005",
    subject: "P",
    chapter: "Semiconductors",
    topic: "P-type Semiconductor",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "Which impurity is generally added to silicon to form a P-type semiconductor?",
    options: ["Phosphorus", "Arsenic", "Antimony", "Boron"],
    correctAnswerIndex: 3,
    correctAnswerText: "Boron",
    solution: {
      concept: "P-type semiconductor",
      steps: [
        "Silicon has four valence electrons.",
        "A trivalent impurity has three valence electrons.",
        "Boron is trivalent and creates a vacancy called a hole.",
        "Therefore, boron doping produces a P-type semiconductor.",
      ],
      finalAnswer: "Boron",
      examTip:
        "Trivalent impurities such as B, Al and Ga produce P-type semiconductors.",
    },
  },

  {
    id: "P-SC-006",
    subject: "P",
    chapter: "Semiconductors",
    topic: "Majority Carriers",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "The majority charge carriers in an N-type semiconductor are:",
    options: ["Holes", "Electrons", "Protons", "Neutrons"],
    correctAnswerIndex: 1,
    correctAnswerText: "Electrons",
    solution: {
      concept: "Majority and minority carriers",
      steps: [
        "N-type semiconductor is formed by adding a pentavalent impurity.",
        "The impurity provides additional free electrons.",
        "Therefore, electrons are the majority charge carriers.",
      ],
      finalAnswer: "Electrons",
      examTip: "N-type → electrons are majority carriers.",
    },
  },

  {
    id: "P-SC-007",
    subject: "P",
    chapter: "Semiconductors",
    topic: "Majority Carriers",
    difficulty: "Easy",
    type: "Practice",
    questionText: "The majority charge carriers in a P-type semiconductor are:",
    options: ["Electrons", "Holes", "Protons", "Neutrons"],
    correctAnswerIndex: 1,
    correctAnswerText: "Holes",
    solution: {
      concept: "Majority and minority carriers",
      steps: [
        "P-type semiconductor is formed by adding a trivalent impurity.",
        "This creates holes in the crystal lattice.",
        "Therefore, holes are the majority charge carriers.",
      ],
      finalAnswer: "Holes",
      examTip: "P-type → holes are majority carriers.",
    },
  },

  {
    id: "P-SC-008",
    subject: "P",
    chapter: "Semiconductors",
    topic: "PN Junction",
    difficulty: "Medium",
    type: "Practice",
    questionText: "The depletion region of a PN junction contains mainly:",
    options: [
      "Large numbers of free electrons and holes",
      "Immobile positive and negative ions",
      "Only electrons",
      "Only holes",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Immobile positive and negative ions",
    solution: {
      concept: "Depletion region",
      steps: [
        "When P-type and N-type materials are joined, electrons and holes diffuse across the junction.",
        "They recombine near the junction.",
        "This leaves behind immobile charged ions.",
        "The region depleted of mobile charge carriers is called the depletion region.",
      ],
      finalAnswer: "Immobile positive and negative ions",
      examTip: "Depletion region has very few mobile carriers.",
    },
  },

  {
    id: "P-SC-009",
    subject: "P",
    chapter: "Semiconductors",
    topic: "Forward Bias",
    difficulty: "Medium",
    type: "Practice",
    questionText: "In forward biasing of a PN junction diode:",
    options: [
      "P-side is connected to negative terminal",
      "N-side is connected to positive terminal",
      "P-side is connected to positive terminal",
      "No external voltage is applied",
    ],
    correctAnswerIndex: 2,
    correctAnswerText: "P-side is connected to positive terminal",
    solution: {
      concept: "Forward bias of PN junction",
      steps: [
        "In forward bias, the P-side is connected to the positive terminal of the battery.",
        "The N-side is connected to the negative terminal.",
        "This reduces the depletion-region width and allows significant current to flow.",
      ],
      finalAnswer: "P-side is connected to positive terminal",
      examTip: "Forward bias: P → + and N → −.",
    },
  },

  {
    id: "P-SC-010",
    subject: "P",
    chapter: "Semiconductors",
    topic: "Diode Characteristics",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "For a silicon PN junction diode, the approximate forward voltage at which significant conduction begins is:",
    options: ["0.1 V", "0.3 V", "0.7 V", "1.5 V"],
    correctAnswerIndex: 2,
    correctAnswerText: "0.7 V",
    solution: {
      concept: "Knee voltage of a silicon diode",
      steps: [
        "A silicon diode requires a certain forward voltage before appreciable current flows.",
        "This knee or cut-in voltage is approximately 0.7 V.",
        "Therefore, significant conduction begins around 0.7 V.",
      ],
      finalAnswer: "0.7 V",
      examTip: "Silicon ≈ 0.7 V; germanium ≈ 0.3 V.",
    },
  },

  {
    id: "P-SC-011",
    subject: "P",
    chapter: "Semiconductors",
    topic: "Rectifier",
    difficulty: "Medium",
    type: "Practice",
    questionText: "The main purpose of a rectifier circuit is to convert:",
    options: [
      "DC into AC",
      "AC into DC",
      "Mechanical energy into electrical energy",
      "Light energy into heat",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "AC into DC",
    solution: {
      concept: "Rectification",
      steps: [
        "A rectifier uses semiconductor diodes to allow current primarily in one direction.",
        "It converts an alternating input into a unidirectional or pulsating output.",
        "Therefore, a rectifier converts AC into DC.",
      ],
      finalAnswer: "AC into DC",
      examTip: "Rectifier → AC to DC.",
    },
  },

  {
    id: "P-SC-012",
    subject: "P",
    chapter: "Semiconductors",
    topic: "Zener Diode",
    difficulty: "Medium",
    type: "Practice",
    questionText: "A Zener diode is commonly used for:",
    options: [
      "Voltage regulation",
      "Increasing frequency",
      "Generating mechanical energy",
      "Measuring resistance directly",
    ],
    correctAnswerIndex: 0,
    correctAnswerText: "Voltage regulation",
    solution: {
      concept: "Zener diode",
      steps: [
        "A Zener diode is designed to operate in the reverse-breakdown region.",
        "In this region, its voltage remains approximately constant over a useful current range.",
        "Therefore, it can be used to maintain a nearly constant output voltage.",
      ],
      finalAnswer: "Voltage regulation",
      examTip: "Zener diode → reverse bias → voltage regulation.",
    },
  },

  {
    id: "P-SC-013",
    subject: "P",
    chapter: "Semiconductors",
    topic: "LED",
    difficulty: "Easy",
    type: "Practice",
    questionText: "An LED emits light when it is generally operated in:",
    options: [
      "Forward bias",
      "Reverse bias only",
      "Zero bias",
      "Breakdown without bias",
    ],
    correctAnswerIndex: 0,
    correctAnswerText: "Forward bias",
    solution: {
      concept: "Light-emitting diode",
      steps: [
        "An LED is a semiconductor PN junction device.",
        "When forward biased, electrons and holes recombine near the junction.",
        "Energy released during recombination can appear as photons.",
        "Hence, an LED normally operates in forward bias.",
      ],
      finalAnswer: "Forward bias",
      examTip: "LED → forward biased PN junction that emits light.",
    },
  },

  {
    id: "P-SC-014",
    subject: "P",
    chapter: "Semiconductors",
    topic: "Transistor",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "In a transistor, the relation between emitter current IE, collector current IC and base current IB is:",
    options: ["IE = IC - IB", "IE = IC + IB", "IC = IE + IB", "IB = IE + IC"],
    correctAnswerIndex: 1,
    correctAnswerText: "IE = IC + IB",
    solution: {
      concept: "Transistor current relation",
      steps: [
        "The emitter current divides into collector current and base current.",
        "By applying Kirchhoff's current law at the transistor junction:",
        "IE = IC + IB.",
      ],
      finalAnswer: "IE = IC + IB",
      examTip: "Emitter current is the sum of collector and base currents.",
    },
  },

  {
    id: "P-SC-015",
    subject: "P",
    chapter: "Semiconductors",
    topic: "Logic Gates",
    difficulty: "Hard",
    type: "Practice",
    questionText: "For an AND gate, the output is HIGH only when:",
    options: [
      "At least one input is HIGH",
      "All inputs are LOW",
      "All inputs are HIGH",
      "Inputs are different",
    ],
    correctAnswerIndex: 2,
    correctAnswerText: "All inputs are HIGH",
    solution: {
      concept: "AND logic gate",
      steps: [
        "An AND gate performs logical multiplication.",
        "Its output is HIGH only when every input is HIGH.",
        "For a two-input AND gate, 1 AND 1 gives 1, while all other combinations give 0.",
      ],
      finalAnswer: "All inputs are HIGH",
      examTip: "AND → all inputs must be 1 for output 1.",
    },
  },
];

export default semiconductorsQuestions;
