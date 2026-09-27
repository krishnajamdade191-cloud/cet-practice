const propertiesOfMatterQuestions = [
  {
    id: "P-POM-001",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Elasticity",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "The property of a material by virtue of which it regains its original shape and size after removal of deforming force is called:",

    options: ["Plasticity", "Elasticity", "Viscosity", "Surface tension"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Elasticity is the property of a material to regain its original shape and size after the deforming force is removed.",

      steps: [
        "A deforming force can change the shape or dimensions of a body.",
        "If the body returns to its original configuration after removal of the force, the material exhibits elasticity.",
      ],

      finalAnswer: "Elasticity",

      examTip:
        "Elasticity and plasticity are opposites in this context: elastic materials recover their shape, while plastic deformation remains.",
    },
  },

  {
    id: "P-POM-002",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Stress",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A force of 100 N acts normally on an area of 2 m². What is the normal stress produced?",

    options: ["25 Pa", "50 Pa", "100 Pa", "200 Pa"],

    correctAnswerIndex: 1,

    solution: {
      concept: "Stress is the deforming force acting per unit area.",

      steps: [
        "Force F = 100 N.",
        "Area A = 2 m².",
        "Stress = F/A.",
        "Stress = 100/2.",
        "Stress = 50 Pa.",
      ],

      finalAnswer: "50 Pa",

      examTip: "Stress has the same dimensions as pressure.",
    },
  },

  {
    id: "P-POM-003",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Strain",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "A wire of original length 2 m increases in length by 1 mm. What is the longitudinal strain?",

    options: ["0.0005", "0.005", "0.05", "0.5"],

    correctAnswerIndex: 0,

    solution: {
      concept:
        "Longitudinal strain is the ratio of change in length to original length.",

      steps: [
        "Original length L = 2 m.",
        "Change in length ΔL = 1 mm = 0.001 m.",
        "Strain = ΔL/L.",
        "Strain = 0.001/2.",
        "Strain = 0.0005.",
      ],

      finalAnswer: "0.0005",

      examTip: "Strain has no unit because it is a ratio of two lengths.",
    },
  },

  {
    id: "P-POM-004",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Young's Modulus",
    difficulty: "Easy",
    type: "Practice",

    questionText: "Young's modulus is defined as the ratio of:",

    options: [
      "Stress to strain",
      "Strain to stress",
      "Force to displacement",
      "Pressure to volume",
    ],

    correctAnswerIndex: 0,

    solution: {
      concept:
        "Young's modulus measures the resistance of a material to longitudinal deformation.",

      steps: [
        "Young's modulus Y = Longitudinal stress / Longitudinal strain.",
        "Therefore, it is the ratio of stress to strain.",
      ],

      finalAnswer: "Stress to strain",

      examTip: "Y = stress/strain.",
    },
  },

  {
    id: "P-POM-005",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Hooke's Law",
    difficulty: "Easy",
    type: "Practice",

    questionText:
      "According to Hooke's law, within the elastic limit, stress is:",

    options: [
      "Inversely proportional to strain",
      "Directly proportional to strain",
      "Independent of strain",
      "Proportional to the square of strain",
    ],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Hooke's law states that, within the elastic limit, stress is directly proportional to strain.",

      steps: [
        "Stress ∝ strain.",
        "Therefore, stress = constant × strain.",
        "The constant is the relevant modulus of elasticity.",
      ],

      finalAnswer: "Directly proportional to strain",

      examTip: "Hooke's law is valid only within the elastic limit.",
    },
  },

  {
    id: "P-POM-006",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Young's Modulus",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A wire has a cross-sectional area of 2 × 10⁻⁶ m² and is subjected to a force of 100 N. What stress is produced?",

    options: ["5 × 10⁵ Pa", "5 × 10⁶ Pa", "5 × 10⁷ Pa", "5 × 10⁸ Pa"],

    correctAnswerIndex: 3,

    solution: {
      concept: "Stress is force divided by cross-sectional area.",

      steps: [
        "Force F = 100 N.",
        "Area A = 2 × 10⁻⁶ m².",
        "Stress = F/A.",
        "Stress = 100/(2 × 10⁻⁶).",
        "Stress = 50 × 10⁶ Pa.",
        "Therefore, stress = 5 × 10⁷ Pa.",
      ],

      finalAnswer: "5 × 10⁷ Pa",

      examTip:
        "Be careful with negative powers when dividing by very small areas.",
    },
  },

  {
    id: "P-POM-007",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Young's Modulus",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A wire of length 2 m and cross-sectional area 1 × 10⁻⁶ m² extends by 1 mm when a force of 100 N is applied. What is its Young's modulus?",

    options: ["1 × 10⁸ Pa", "2 × 10⁸ Pa", "2 × 10¹¹ Pa", "5 × 10¹¹ Pa"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Young's modulus is Y = (F/A)/(ΔL/L) = FL/(AΔL).",

      steps: [
        "F = 100 N.",
        "L = 2 m.",
        "A = 1 × 10⁻⁶ m².",
        "Extension ΔL = 1 mm = 1 × 10⁻³ m.",
        "Y = FL/(AΔL).",
        "Y = (100 × 2)/[(1 × 10⁻⁶)(1 × 10⁻³)].",
        "Y = 200/(1 × 10⁻⁹).",
        "Y = 2 × 10¹¹ Pa.",
      ],

      finalAnswer: "2 × 10¹¹ Pa",

      examTip:
        "Convert millimetres to metres before calculating Young's modulus.",
    },
  },

  {
    id: "P-POM-008",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Fluid Pressure",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "What is the pressure due to a water column of height 5 m? Take density of water = 1000 kg/m³ and g = 10 m/s².",

    options: ["5 × 10³ Pa", "5 × 10⁴ Pa", "5 × 10⁵ Pa", "5 × 10⁶ Pa"],

    correctAnswerIndex: 2,

    solution: {
      concept: "Pressure due to a liquid column is P = ρgh.",

      steps: [
        "Density ρ = 1000 kg/m³.",
        "Height h = 5 m.",
        "g = 10 m/s².",
        "P = ρgh.",
        "P = 1000 × 10 × 5.",
        "P = 50,000 Pa.",
        "Therefore, P = 5 × 10⁴ Pa.",
      ],

      finalAnswer: "5 × 10⁴ Pa",

      examTip: "Hydrostatic pressure depends on density, g and depth.",
    },
  },

  {
    id: "P-POM-009",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Pascal's Law",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A hydraulic lift has piston areas of 0.01 m² and 0.5 m². If a force of 100 N is applied to the smaller piston, what force can act on the larger piston ideally?",

    options: ["200 N", "500 N", "5000 N", "50,000 N"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Pascal's law states that pressure applied to an enclosed fluid is transmitted equally throughout the fluid.",

      steps: [
        "Pressure on smaller piston = F₁/A₁.",
        "Pressure on larger piston = F₂/A₂.",
        "Therefore, F₁/A₁ = F₂/A₂.",
        "F₂ = F₁(A₂/A₁).",
        "F₂ = 100 × (0.5/0.01).",
        "F₂ = 100 × 50.",
        "F₂ = 5000 N.",
      ],

      finalAnswer: "5000 N",

      examTip:
        "Hydraulic machines multiply force because pressure is transmitted through the fluid.",
    },
  },

  {
    id: "P-POM-010",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Buoyancy",
    difficulty: "Medium",
    type: "Practice",

    questionText:
      "A body displaces 0.02 m³ of water. Taking the density of water as 1000 kg/m³ and g = 10 m/s², what is the buoyant force on the body?",

    options: ["20 N", "100 N", "200 N", "2000 N"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "According to Archimedes' principle, buoyant force equals the weight of the displaced fluid.",

      steps: [
        "Displaced volume V = 0.02 m³.",
        "Density ρ = 1000 kg/m³.",
        "Buoyant force F_B = ρVg.",
        "F_B = 1000 × 0.02 × 10.",
        "F_B = 200 N.",
      ],

      finalAnswer: "200 N",

      examTip:
        "Buoyant force depends on the volume of fluid displaced, not directly on the object's mass.",
    },
  },

  {
    id: "P-POM-011",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Surface Tension",
    difficulty: "Hard",
    type: "Practice",

    questionText: "The SI unit of surface tension is:",

    options: ["N/m", "N/m²", "J/m²", "Both N/m and J/m²"],

    correctAnswerIndex: 3,

    solution: {
      concept:
        "Surface tension can be expressed as force per unit length and is numerically equivalent to surface energy per unit area.",

      steps: [
        "Surface tension = force/length, giving unit N/m.",
        "Surface energy per unit area has unit J/m².",
        "Since 1 J = 1 N·m, J/m² = N/m.",
        "Therefore, both units represent surface tension.",
      ],

      finalAnswer: "Both N/m and J/m²",

      examTip: "N/m and J/m² are dimensionally equivalent.",
    },
  },

  {
    id: "P-POM-012",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Capillarity",
    difficulty: "Hard",
    type: "Practice",

    questionText: "Water rises in a narrow glass capillary mainly because:",

    options: [
      "Water has high density",
      "Of surface tension and adhesive forces between water and glass",
      "Atmospheric pressure becomes zero",
      "Gravity disappears inside the capillary",
    ],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Capillary rise occurs because of surface tension and the balance between adhesive and cohesive forces.",

      steps: [
        "Water molecules are attracted to the glass surface.",
        "Adhesive forces between water and glass help pull the liquid upward.",
        "Surface tension maintains the curved liquid surface.",
        "The upward capillary force is balanced by the weight of the liquid column at equilibrium.",
      ],

      finalAnswer:
        "Surface tension and adhesive forces between water and glass",

      examTip: "Capillary action is important in plants, lamps and thin tubes.",
    },
  },

  {
    id: "P-POM-013",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Viscosity",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "According to Stokes' law, the viscous force on a small sphere moving slowly through a fluid is proportional to:",

    options: ["r²v", "rv", "r/v", "v²/r"],

    correctAnswerIndex: 1,

    solution: {
      concept:
        "Stokes' law gives viscous drag as F = 6πηrv for a small sphere moving slowly through a viscous fluid.",

      steps: [
        "Stokes' law is F = 6πηrv.",
        "For a given fluid, η is constant.",
        "Therefore, F is proportional to rv.",
      ],

      finalAnswer: "rv",

      examTip:
        "Stokes' law applies to slow motion of a small sphere through a viscous fluid.",
    },
  },

  {
    id: "P-POM-014",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Terminal Velocity",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "When a small sphere falls through a viscous liquid and reaches terminal velocity, its acceleration becomes:",

    options: ["Maximum", "Equal to g", "Zero", "Negative"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "Terminal velocity is reached when the net force on the falling object becomes zero.",

      steps: [
        "Initially, the sphere accelerates downward.",
        "As its speed increases, viscous drag increases.",
        "Eventually, upward viscous force plus buoyant force balances the downward weight.",
        "Net force becomes zero.",
        "Therefore, acceleration becomes zero.",
      ],

      finalAnswer: "Zero",

      examTip: "At terminal velocity, velocity is constant but not zero.",
    },
  },

  {
    id: "P-POM-015",
    subject: "P",
    chapter: "Properties of Matter",
    topic: "Fluid Flow",
    difficulty: "Hard",
    type: "Practice",

    questionText:
      "Water flows through a pipe whose cross-sectional area changes from 4 cm² to 2 cm². If the speed of water in the wider section is 3 m/s, what is its speed in the narrower section?",

    options: ["1.5 m/s", "3 m/s", "6 m/s", "12 m/s"],

    correctAnswerIndex: 2,

    solution: {
      concept:
        "For steady incompressible flow, the equation of continuity is A₁v₁ = A₂v₂.",

      steps: [
        "Area of wider section A₁ = 4 cm².",
        "Speed in wider section v₁ = 3 m/s.",
        "Area of narrower section A₂ = 2 cm².",
        "Using A₁v₁ = A₂v₂:",
        "4 × 3 = 2 × v₂.",
        "v₂ = 12/2.",
        "v₂ = 6 m/s.",
      ],

      finalAnswer: "6 m/s",

      examTip:
        "For incompressible steady flow, smaller area means greater fluid speed.",
    },
  },
];

export default propertiesOfMatterQuestions;
