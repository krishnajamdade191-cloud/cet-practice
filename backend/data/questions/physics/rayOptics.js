const rayOpticsQuestions = [
  {
    id: "P-RO-001",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Reflection",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "According to the law of reflection, the angle of incidence is equal to:",
    options: [
      "Angle of refraction",
      "Angle of reflection",
      "Angle of deviation",
      "Angle of dispersion",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Angle of reflection",
    solution: {
      concept:
        "The law of reflection states that the angle of incidence equals the angle of reflection.",
      steps: [
        "Both angles are measured with respect to the normal.",
        "Therefore i = r.",
      ],
      finalAnswer: "Angle of reflection",
    },
  },

  {
    id: "P-RO-002",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Spherical Mirrors",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "For a spherical mirror, the focal length is related to the radius of curvature by:",
    options: ["f = R", "f = 2R", "f = R/2", "f = R²"],
    correctAnswerIndex: 2,
    correctAnswerText: "f = R/2",
    solution: {
      concept:
        "For a spherical mirror, the principal focus lies midway between the pole and centre of curvature.",
      steps: [
        "The distance from pole to centre of curvature is R.",
        "The focal point lies halfway between them.",
        "Therefore f = R/2.",
      ],
      finalAnswer: "f = R/2",
    },
  },

  {
    id: "P-RO-003",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Mirror Formula",
    difficulty: "Easy",
    type: "Practice",
    questionText: "The mirror formula for a spherical mirror is:",
    options: [
      "1/f = 1/v + 1/u",
      "1/f = 1/v - 1/u",
      "1/f = 1/u - 1/v",
      "f = u + v",
    ],
    correctAnswerIndex: 0,
    correctAnswerText: "1/f = 1/v + 1/u",
    solution: {
      concept:
        "Using the Cartesian sign convention, the mirror formula is 1/f = 1/v + 1/u.",
      steps: [
        "u is the object distance.",
        "v is the image distance.",
        "f is the focal length.",
        "The relation is 1/f = 1/v + 1/u.",
      ],
      finalAnswer: "1/f = 1/v + 1/u",
    },
  },

  {
    id: "P-RO-004",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Lens",
    difficulty: "Easy",
    type: "Practice",
    questionText: "The power of a lens is measured in:",
    options: ["Tesla", "Dioptre", "Watt", "Pascal"],
    correctAnswerIndex: 1,
    correctAnswerText: "Dioptre",
    solution: {
      concept: "The SI-derived practical unit of lens power is dioptre (D).",
      steps: [
        "Power of a lens is P = 1/f when f is measured in metres.",
        "The unit of P is m⁻¹, called dioptre.",
      ],
      finalAnswer: "Dioptre",
    },
  },

  {
    id: "P-RO-005",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Lens Power",
    difficulty: "Easy",
    type: "Practice",
    questionText:
      "What is the power of a convex lens having focal length 0.5 m?",
    options: ["+0.5 D", "+1 D", "+2 D", "-2 D"],
    correctAnswerIndex: 2,
    correctAnswerText: "+2 D",
    solution: {
      concept: "Power of a lens is P = 1/f, with f in metres.",
      steps: ["f = +0.5 m for a convex lens.", "P = 1/0.5.", "P = +2 D."],
      finalAnswer: "+2 D",
    },
  },

  {
    id: "P-RO-006",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Refraction",
    difficulty: "Medium",
    type: "Practice",
    questionText: "When light travels from air into glass, its speed:",
    options: ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
    correctAnswerIndex: 1,
    correctAnswerText: "Decreases",
    solution: {
      concept: "Light travels more slowly in an optically denser medium.",
      steps: [
        "Glass has a higher refractive index than air.",
        "Since n = c/v, a higher refractive index corresponds to lower speed.",
        "Therefore the speed decreases.",
      ],
      finalAnswer: "Decreases",
    },
  },

  {
    id: "P-RO-007",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Refractive Index",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The refractive index of a medium is 1.5. If the speed of light in vacuum is 3 × 10⁸ m/s, what is the speed of light in the medium?",
    options: ["1 × 10⁸ m/s", "2 × 10⁸ m/s", "3 × 10⁸ m/s", "4.5 × 10⁸ m/s"],
    correctAnswerIndex: 1,
    correctAnswerText: "2 × 10⁸ m/s",
    solution: {
      concept: "Refractive index is n = c/v.",
      steps: [
        "n = 1.5.",
        "c = 3 × 10⁸ m/s.",
        "v = c/n.",
        "v = (3 × 10⁸)/1.5 = 2 × 10⁸ m/s.",
      ],
      finalAnswer: "2 × 10⁸ m/s",
    },
  },

  {
    id: "P-RO-008",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Snell's Law",
    difficulty: "Medium",
    type: "Practice",
    questionText: "Snell's law of refraction is given by:",
    options: [
      "n₁ cos i = n₂ cos r",
      "n₁ sin i = n₂ sin r",
      "n₁ tan i = n₂ tan r",
      "n₁/i = n₂/r",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "n₁ sin i = n₂ sin r",
    solution: {
      concept:
        "Snell's law relates the angles of incidence and refraction to the refractive indices.",
      steps: [
        "For two media, Snell's law is n₁ sin i = n₂ sin r.",
        "Angles are measured from the normal.",
      ],
      finalAnswer: "n₁ sin i = n₂ sin r",
    },
  },

  {
    id: "P-RO-009",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Total Internal Reflection",
    difficulty: "Medium",
    type: "Practice",
    questionText: "Total internal reflection can occur when light travels:",
    options: [
      "From rarer to denser medium at any angle",
      "From denser to rarer medium with incidence angle greater than critical angle",
      "Only from vacuum to glass",
      "Only at normal incidence",
    ],
    correctAnswerIndex: 1,
    correctAnswerText:
      "From denser to rarer medium with incidence angle greater than critical angle",
    solution: {
      concept:
        "Total internal reflection requires both a suitable direction of travel and sufficiently large incidence angle.",
      steps: [
        "Light must travel from an optically denser medium to an optically rarer medium.",
        "The angle of incidence must exceed the critical angle.",
        "Then the ray is completely reflected back into the denser medium.",
      ],
      finalAnswer:
        "From denser to rarer medium with incidence angle greater than critical angle",
    },
  },

  {
    id: "P-RO-010",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Lens Formula",
    difficulty: "Medium",
    type: "Practice",
    questionText:
      "The lens formula for a thin lens using the Cartesian sign convention is:",
    options: [
      "1/f = 1/v + 1/u",
      "1/f = 1/v - 1/u",
      "1/f = 1/u - 1/v",
      "f = u + v",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "1/f = 1/v - 1/u",
    solution: {
      concept:
        "For a thin lens, the Cartesian sign convention gives 1/f = 1/v - 1/u.",
      steps: [
        "u is object distance.",
        "v is image distance.",
        "f is focal length.",
        "The lens formula is 1/f = 1/v - 1/u.",
      ],
      finalAnswer: "1/f = 1/v - 1/u",
    },
  },

  {
    id: "P-RO-011",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Lens Magnification",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "An object is placed 20 cm in front of a convex lens of focal length 10 cm. What is the magnification of the image?",
    options: ["-2", "-1", "+1", "+2"],
    correctAnswerIndex: 1,
    correctAnswerText: "-1",
    solution: {
      concept: "Use the lens formula and magnification relation m = v/u.",
      steps: [
        "Using Cartesian signs: u = -20 cm and f = +10 cm.",
        "1/f = 1/v - 1/u.",
        "1/10 = 1/v + 1/20.",
        "1/v = 1/20, so v = +20 cm.",
        "m = v/u = 20/(-20) = -1.",
      ],
      finalAnswer: "-1",
    },
  },

  {
    id: "P-RO-012",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Prism",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "At minimum deviation through a prism, the angle of incidence is:",
    options: [
      "Equal to the angle of emergence",
      "Always zero",
      "Twice the angle of emergence",
      "Half the angle of emergence",
    ],
    correctAnswerIndex: 0,
    correctAnswerText: "Equal to the angle of emergence",
    solution: {
      concept:
        "At minimum deviation, the light path through the prism is symmetric.",
      steps: [
        "At minimum deviation, i = e.",
        "The angle of refraction inside the prism is also symmetric at the two faces.",
        "Therefore the angle of incidence equals the angle of emergence.",
      ],
      finalAnswer: "Equal to the angle of emergence",
    },
  },

  {
    id: "P-RO-013",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Optical Instruments",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "The magnifying power of a simple microscope increases when its focal length:",
    options: [
      "Increases",
      "Decreases",
      "Becomes infinite",
      "Remains unchanged",
    ],
    correctAnswerIndex: 1,
    correctAnswerText: "Decreases",
    solution: {
      concept:
        "For a simple microscope, magnifying power is inversely related to focal length.",
      steps: [
        "For normal adjustment, magnifying power is approximately M = D/f.",
        "Here D is the least distance of distinct vision.",
        "Therefore smaller focal length gives larger magnifying power.",
      ],
      finalAnswer: "Decreases",
    },
  },

  {
    id: "P-RO-014",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Optical Instruments",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "The least distance of distinct vision for a normal human eye is approximately:",
    options: ["10 cm", "25 cm", "50 cm", "100 cm"],
    correctAnswerIndex: 1,
    correctAnswerText: "25 cm",
    solution: {
      concept:
        "The least distance of distinct vision for a normal eye is conventionally taken as 25 cm.",
      steps: [
        "For a normal adult eye, the nearest point of distinct vision is approximately 25 cm.",
        "This distance is denoted by D in optical instrument formulas.",
      ],
      finalAnswer: "25 cm",
    },
  },

  {
    id: "P-RO-015",
    subject: "P",
    chapter: "Ray Optics",
    topic: "Combination of Lenses",
    difficulty: "Hard",
    type: "Practice",
    questionText:
      "Two thin lenses of powers +2 D and +3 D are placed in contact. What is their combined power?",
    options: ["+1 D", "+5 D", "+6 D", "-1 D"],
    correctAnswerIndex: 1,
    correctAnswerText: "+5 D",
    solution: {
      concept: "For thin lenses in contact, their powers add algebraically.",
      steps: [
        "P₁ = +2 D.",
        "P₂ = +3 D.",
        "P = P₁ + P₂.",
        "P = +2 + +3 = +5 D.",
      ],
      finalAnswer: "+5 D",
    },
  },
];

export default rayOpticsQuestions;
