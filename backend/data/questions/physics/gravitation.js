const gravitationQuestions = [
  {
    id: "P-GRA-001",
    subject: "P",
    chapter: "Gravitation",
    topic: "Newton's Law of Gravitation",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "According to Newton's law of universal gravitation, the force between two masses is proportional to:",

    options: [
      "The sum of their masses",
      "The product of their masses and inversely proportional to the square of their separation",
      "The difference of their masses",
      "The square of their separation",
    ],

    correctAnswerIndex: 1,

    solution: {
      concept: "Newton's law of gravitation states that F = Gm₁m₂/r².",

      steps: [
        "The gravitational force is directly proportional to m₁m₂.",
        "It is inversely proportional to the square of the distance between their centres.",
        "Therefore, F ∝ m₁m₂/r².",
      ],

      finalAnswer: "The product of masses and inverse square of separation",

      examTip: "Gravitational force follows the inverse-square law.",
    },
  },

  {
    id: "P-GRA-002",
    subject: "P",
    chapter: "Gravitation",
    topic: "Gravitational Force",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "Two bodies of masses 2 kg and 3 kg are separated by 1 m. Taking G = 6.67 × 10⁻¹¹ N·m²/kg², what is the gravitational force between them?",

    options: [
      "2.00 × 10⁻¹¹ N",
      "4.00 × 10⁻¹¹ N",
      "4.00 × 10⁻¹⁰ N",
      "6.67 × 10⁻¹¹ N",
    ],

    correctAnswerIndex: 1,

    solution: {
      concept: "The gravitational force between two masses is F = Gm₁m₂/r².",

      steps: [
        "m₁ = 2 kg.",
        "m₂ = 3 kg.",
        "r = 1 m.",
        "G = 6.67 × 10⁻¹¹ N·m²/kg².",
        "F = Gm₁m₂/r².",
        "F = (6.67 × 10⁻¹¹ × 2 × 3)/1².",
        "F = 40.02 × 10⁻¹¹ N.",
        "F ≈ 4.00 × 10⁻¹⁰ N.",
      ],

      finalAnswer: "4.00 × 10⁻¹⁰ N",

      examTip: "Keep the powers of 10 separate while calculating.",
    },
  },

  {
    id: "P-GRA-003",
    subject: "P",
    chapter: "Gravitation",
    topic: "Variation of Gravitational Force",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "If the distance between two masses is doubled, what happens to the gravitational force between them?",

    options: [
      "It becomes twice",
      "It becomes four times",
      "It becomes half",
      "It becomes one-fourth",
    ],

    correctAnswerIndex: 3,

    solution: {
      concept:
        "Gravitational force varies inversely as the square of distance.",

      steps: [
        "F ∝ 1/r².",
        "If r becomes 2r, the new force is proportional to 1/(2r)².",
        "Therefore, F' = F/4.",
        "So the force becomes one-fourth of its original value.",
      ],

      finalAnswer: "One-fourth of the original force",

      examTip: "Distance ×2 → gravitational force ÷4.",
    },
  },

  {
    id: "P-GRA-004",
    subject: "P",
    chapter: "Gravitation",
    topic: "Acceleration Due to Gravity",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "What is the approximate value of acceleration due to gravity near the Earth's surface?",

    options: ["4.9 m/s²", "9.8 m/s²", "19.6 m/s²", "98 m/s²"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Near the Earth's surface, acceleration due to gravity is approximately 9.8 m/s².",

      steps: [
        "The standard value of g near Earth's surface is approximately 9.8 m/s².",
        "For many numerical problems, g is approximated as 10 m/s².",
      ],

      finalAnswer: "9.8 m/s²",

      examTip:
        "Use the value of g specified in the question; otherwise 9.8 m/s² is standard.",
    },
  },

  {
    id: "P-GRA-005",
    subject: "P",
    chapter: "Gravitation",
    topic: "Acceleration Due to Gravity",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "The acceleration due to gravity at a height above the Earth's surface is:",

    options: [
      "Greater than its surface value",
      "Equal to its surface value at every height",
      "Less than its surface value",
      "Always zero",
    ],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Acceleration due to gravity decreases as distance from the Earth's centre increases.",

      steps: [
        "At distance r from Earth's centre, g = GM/r².",
        "At a height h above the surface, the distance from the centre becomes R + h.",
        "Therefore, g_h = GM/(R + h)².",
        "Since R + h > R, g_h is smaller than the surface value.",
      ],

      finalAnswer: "Less than its surface value",

      examTip:
        "Higher altitude → greater distance from Earth's centre → smaller g.",
    },
  },

  {
    id: "P-GRA-006",
    subject: "P",
    chapter: "Gravitation",
    topic: "Escape Velocity",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "The escape velocity from the Earth's surface is approximately:",

    options: ["5.6 km/s", "9.8 km/s", "11.2 km/s", "22.4 km/s"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Escape velocity is the minimum speed required for an object to escape Earth's gravitational field without further propulsion.",

      steps: [
        "Escape velocity from Earth is approximately 11.2 km/s.",
        "It is related to the orbital velocity near Earth's surface by vₑ = √2 vₒ.",
      ],

      finalAnswer: "11.2 km/s",

      examTip: "Earth escape velocity ≈ 11.2 km/s.",
    },
  },

  {
    id: "P-GRA-007",
    subject: "P",
    chapter: "Gravitation",
    topic: "Orbital Velocity",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "The orbital velocity of a satellite moving in a circular orbit of radius r around Earth is:",

    options: ["√(GM/r)", "√(GMr)", "GM/r²", "GM/r"],

    correctAnswerIndex: 0,

    solution: {
      concept:
        "For a circular orbit, gravitational force provides the required centripetal force.",

      steps: [
        "Gravitational force = GMm/r².",
        "Centripetal force = mv²/r.",
        "Equating them:",
        "GMm/r² = mv²/r.",
        "Cancel m and simplify.",
        "v² = GM/r.",
        "Therefore, v = √(GM/r).",
      ],

      finalAnswer: "√(GM/r)",

      examTip:
        "Circular orbital velocity decreases as orbital radius increases.",
    },
  },

  {
    id: "P-GRA-008",
    subject: "P",
    chapter: "Gravitation",
    topic: "Gravitational Potential",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "The gravitational potential at a point at distance r from a mass M is:",

    options: ["GM/r", "-GM/r", "GM/r²", "-GM/r²"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Gravitational potential at distance r from a point mass is V = -GM/r when potential at infinity is taken as zero.",

      steps: [
        "The standard expression for gravitational potential is V = -GM/r.",
        "The negative sign indicates that the gravitational field is attractive and the potential is zero at infinity.",
      ],

      finalAnswer: "-GM/r",

      examTip:
        "Gravitational potential is a scalar and is negative for a bound system.",
    },
  },

  {
    id: "P-GRA-009",
    subject: "P",
    chapter: "Gravitation",
    topic: "Gravitational Potential Energy",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "Two masses m and M are separated by a distance r. What is their gravitational potential energy?",

    options: ["GMm/r", "-GMm/r", "GMm/r²", "-GMm/r²"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Gravitational potential energy of two point masses is U = -GMm/r when zero energy is taken at infinity.",

      steps: [
        "Gravitational potential at distance r from M is V = -GM/r.",
        "Potential energy of mass m is U = mV.",
        "Therefore, U = m(-GM/r).",
        "Hence, U = -GMm/r.",
      ],

      finalAnswer: "-GMm/r",

      examTip: "The negative sign indicates a bound gravitational system.",
    },
  },

  {
    id: "P-GRA-010",
    subject: "P",
    chapter: "Gravitation",
    topic: "Satellite Motion",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "If the orbital radius of a satellite is increased, its orbital speed:",

    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Orbital velocity is v = √(GM/r).",

      steps: [
        "Orbital velocity is proportional to 1/√r.",
        "Therefore, when orbital radius increases, orbital velocity decreases.",
      ],

      finalAnswer: "Decreases",

      examTip: "Higher circular orbit → lower orbital speed.",
    },
  },

  {
    id: "P-GRA-011",
    subject: "P",
    chapter: "Gravitation",
    topic: "Satellite Time Period",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "For a satellite in a circular orbit, the time period T is proportional to which quantity?",

    options: ["r", "√r", "r²", "r³ᐟ²"],

    correctAnswerIndex: 3,

    solution: {
      concept:
        "Kepler's third law for circular satellite orbits gives T² ∝ r³.",

      steps: [
        "For a circular orbit, T² ∝ r³.",
        "Taking the square root of both sides:",
        "T ∝ r³ᐟ².",
      ],

      finalAnswer: "r³ᐟ²",

      examTip: "Remember Kepler's third law: T² ∝ r³.",
    },
  },

  {
    id: "P-GRA-012",
    subject: "P",
    chapter: "Gravitation",
    topic: "Variation of g",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "At what depth below the Earth's surface does the value of g become half its surface value, assuming Earth has uniform density?",

    options: ["R/4", "R/2", "2R/3", "3R/4"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "For a point inside a uniformly dense Earth, acceleration due to gravity varies linearly with distance from the centre: g_d = g(1 - d/R).",

      steps: [
        "Let the depth be d.",
        "Given g_d = g/2.",
        "Using g_d = g(1 - d/R):",
        "g/2 = g(1 - d/R).",
        "Divide by g:",
        "1/2 = 1 - d/R.",
        "Therefore, d/R = 1/2.",
        "Hence, d = R/2.",
      ],

      finalAnswer: "R/2",

      examTip: "For a uniformly dense Earth, g decreases linearly with depth.",
    },
  },

  {
    id: "P-GRA-013",
    subject: "P",
    chapter: "Gravitation",
    topic: "Escape Velocity",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "If the mass of a planet remains the same but its radius becomes four times the original radius, how does its escape velocity change?",

    options: [
      "It becomes four times",
      "It becomes twice",
      "It becomes half",
      "It becomes one-fourth",
    ],

    correctAnswerIndex: 2,

    solution: {
      concept: "Escape velocity is vₑ = √(2GM/R).",

      steps: [
        "For the same planetary mass, vₑ ∝ 1/√R.",
        "New radius R' = 4R.",
        "Therefore, vₑ' = vₑ/√4.",
        "vₑ' = vₑ/2.",
        "Thus, escape velocity becomes half.",
      ],

      finalAnswer: "Half of the original value",

      examTip: "For constant mass: escape velocity ∝ 1/√R.",
    },
  },

  {
    id: "P-GRA-014",
    subject: "P",
    chapter: "Gravitation",
    topic: "Weightlessness",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "Astronauts inside an orbiting spacecraft experience apparent weightlessness mainly because:",

    options: [
      "There is no gravity in space",
      "The spacecraft and astronauts are in continuous free fall",
      "Their mass becomes zero",
      "Earth's atmosphere supports them",
    ],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Apparent weight depends on the normal reaction. During orbital free fall, the spacecraft and astronauts accelerate together under gravity.",

      steps: [
        "Gravity is still acting on the spacecraft and astronauts.",
        "The spacecraft continuously falls toward Earth while moving forward fast enough to remain in orbit.",
        "The astronauts and spacecraft have essentially the same gravitational acceleration.",
        "There is negligible normal reaction between the astronaut and spacecraft floor.",
        "Therefore, the astronauts experience apparent weightlessness.",
      ],

      finalAnswer: "The spacecraft and astronauts are in continuous free fall",

      examTip: "Weightlessness does not mean that gravitational force is zero.",
    },
  },

  {
    id: "P-GRA-015",
    subject: "P",
    chapter: "Gravitation",
    topic: "Geostationary Satellite",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "A geostationary satellite must have an orbital period approximately equal to:",

    options: ["12 hours", "18 hours", "24 hours", "48 hours"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "A geostationary satellite appears fixed over one point on Earth's equator because its orbital period matches Earth's rotation period.",

      steps: [
        "Earth completes one rotation in approximately 24 hours.",
        "The satellite must have the same angular velocity as Earth.",
        "Therefore, its orbital period must be approximately 24 hours.",
      ],

      finalAnswer: "24 hours",

      examTip:
        "Geostationary orbit: period ≈ 24 h, circular orbit, equatorial plane, same direction as Earth's rotation.",
    },
  },
];

export default gravitationQuestions;
