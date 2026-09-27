import { useEffect, useState } from "react";
import "./index.css";
import physicsQuestions from "./data/physicsQuestions";
import physicsWeightage from "./data/physicsWeightage";
const TEST_CONFIG = {
  P: {
    totalQuestions: 50,
    subjects: ["P"],
    sections: [
      {
        id: "P",
        name: "Physics",
        questions: 50,
        time: 45,
      },
    ],
  },

  C: {
    totalQuestions: 50,
    subjects: ["C"],
    sections: [
      {
        id: "C",
        name: "Chemistry",
        questions: 50,
        time: 45,
      },
    ],
  },

  M: {
    totalQuestions: 50,
    subjects: ["M"],
    sections: [
      {
        id: "M",
        name: "Mathematics",
        questions: 50,
        time: 90,
      },
    ],
  },

  PC: {
    totalQuestions: 100,
    subjects: ["P", "C"],
    sections: [
      {
        id: "PC",
        name: "Physics + Chemistry",
        questions: 100,
        time: 90,
      },
    ],
  },

  PM: {
    totalQuestions: 100,
    subjects: ["P", "M"],
    sections: [
      {
        id: "P",
        name: "Physics",
        questions: 50,
        time: 45,
      },
      {
        id: "M",
        name: "Mathematics",
        questions: 50,
        time: 90,
      },
    ],
  },

  CM: {
    totalQuestions: 100,
    subjects: ["C", "M"],
    sections: [
      {
        id: "C",
        name: "Chemistry",
        questions: 50,
        time: 45,
      },
      {
        id: "M",
        name: "Mathematics",
        questions: 50,
        time: 90,
      },
    ],
  },

  PCM: {
    totalQuestions: 150,
    subjects: ["P", "C", "M"],
    sections: [
      {
        id: "PC",
        name: "Physics + Chemistry",
        questions: 100,
        time: 90,
      },
      {
        id: "M",
        name: "Mathematics",
        questions: 50,
        time: 90,
      },
    ],
  },
};

const SUBJECT_NAMES = {
  P: "Physics",
  C: "Chemistry",
  M: "Mathematics",
};

const CHAPTERS = {
  P: [
    "Units and Measurements",
    "Vectors",
    "Kinematics",
    "Laws of Motion",
    "Work, Energy and Power",
    "Rotational Motion",
    "Gravitation",
    "Properties of Matter",
    "Thermal Physics",
    "Oscillations",
    "Waves",
    "Electrostatics",
    "Current Electricity",
    "Magnetic Effects of Current",
    "Magnetism",
    "Electromagnetic Induction",
    "Alternating Current",
    "Ray Optics",
    "Wave Optics",
    "Dual Nature of Matter",
    "Atoms and Nuclei",
    "Semiconductors",
  ],

  C: [
    "Some Basic Concepts of Chemistry",
    "Structure of Atom",
    "Periodic Classification",
    "Chemical Bonding",
    "States of Matter",
    "Thermodynamics",
    "Equilibrium",
    "Redox Reactions",
    "Solutions",
    "Electrochemistry",
    "Chemical Kinetics",
    "Surface Chemistry",
    "Coordination Compounds",
    "Organic Chemistry Basics",
    "Hydrocarbons",
    "Alcohols, Phenols and Ethers",
    "Aldehydes and Ketones",
    "Amines",
    "Biomolecules",
    "Polymers",
  ],

  M: [
    "Mathematical Logic",
    "Matrices",
    "Trigonometric Functions",
    "Pair of Straight Lines",
    "Circle",
    "Conic Sections",
    "Vectors",
    "Three Dimensional Geometry",
    "Line",
    "Plane",
    "Linear Programming",
    "Probability",
    "Statistics",
    "Complex Numbers",
    "Sequences and Series",
    "Permutations and Combinations",
    "Binomial Theorem",
    "Differentiation",
    "Applications of Derivatives",
    "Integration",
    "Applications of Integration",
    "Differential Equations",
  ],
};

/*
==========================================================
CREATE DEMO QUESTIONS
==========================================================
*/

function createQuestions(subject, chapters, totalQuestions) {
  if (subject !== "P") {
    const questions = [];

    for (let i = 0; i < totalQuestions; i++) {
      const chapter = chapters[i % chapters.length];

      questions.push({
        id: `${subject}-${i + 1}`,
        subject,
        chapter,
        questionNumber: i + 1,
        questionText: `${SUBJECT_NAMES[subject]} practice question ${i + 1} from ${chapter}.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: i % 4,
      });
    }

    return questions;
  }

  // ---------------------------------
  // 1. Get questions from selected chapters
  // ---------------------------------

  const selectedQuestions = physicsQuestions.filter((question) =>
    chapters.includes(question.chapter),
  );

  // ---------------------------------
  // 2. Separate Class 11 and Class 12
  // ---------------------------------

  const class11Questions = selectedQuestions.filter((question) => {
    const info = physicsWeightage[question.chapter];
    return info?.classLevel === 11;
  });

  const class12Questions = selectedQuestions.filter((question) => {
    const info = physicsWeightage[question.chapter];
    return info?.classLevel === 12;
  });

  // ---------------------------------
  // 3. Weighted random selection
  // ---------------------------------

  function weightedRandomQuestions(questionPool, count) {
    const available = [...questionPool];
    const selected = [];

    while (selected.length < count && available.length > 0) {
      const weightedQuestions = available.map((question) => ({
        question,
        weight: physicsWeightage[question.chapter]?.weight || 1,
      }));

      const totalWeight = weightedQuestions.reduce(
        (sum, item) => sum + item.weight,
        0,
      );

      let random = Math.random() * totalWeight;

      let selectedIndex = 0;

      for (let i = 0; i < weightedQuestions.length; i++) {
        random -= weightedQuestions[i].weight;

        if (random <= 0) {
          selectedIndex = i;
          break;
        }
      }

      selected.push(weightedQuestions[selectedIndex].question);

      available.splice(selectedIndex, 1);
    }

    return selected;
  }

  // ---------------------------------
  // 4. CET 20:80 Class 11 / Class 12
  // ---------------------------------

  const class11Count = Math.round(totalQuestions * 0.2);
  const class12Count = totalQuestions - class11Count;

  let selectedClass11 = weightedRandomQuestions(class11Questions, class11Count);

  let selectedClass12 = weightedRandomQuestions(class12Questions, class12Count);

  // ---------------------------------
  // 5. Handle insufficient questions
  // ---------------------------------

  let finalQuestions = [...selectedClass11, ...selectedClass12];

  if (finalQuestions.length < totalQuestions) {
    const alreadySelectedIds = new Set(
      finalQuestions.map((question) => question.id),
    );

    const remainingQuestions = selectedQuestions.filter(
      (question) => !alreadySelectedIds.has(question.id),
    );

    const additionalQuestions = [...remainingQuestions].sort(
      () => Math.random() - 0.5,
    );

    finalQuestions = [
      ...finalQuestions,
      ...additionalQuestions.slice(0, totalQuestions - finalQuestions.length),
    ];
  }

  // ---------------------------------
  // 6. Shuffle final paper
  // ---------------------------------

  finalQuestions = finalQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, totalQuestions);

  // ---------------------------------
  // 7. Add question number
  // ---------------------------------

  return finalQuestions.map((question, index) => ({
    ...question,
    questionNumber: index + 1,
    correctAnswer: question.correctAnswerIndex,
  }));
}

/*
==========================================================
APP
==========================================================
*/

function App() {
  const [screen, setScreen] = useState("combination");

  const [selectedCombination, setSelectedCombination] = useState(null);

  const [selectedChapters, setSelectedChapters] = useState({
    P: [],
    C: [],
    M: [],
  });

  const [testSections, setTestSections] = useState([]);

  const [activeSection, setActiveSection] = useState(0);

  const [activeQuestion, setActiveQuestion] = useState(0);

  const [answers, setAnswers] = useState({});

  const [marked, setMarked] = useState({});

  const [result, setResult] = useState(null);

  const [timeLeft, setTimeLeft] = useState(0);

  /*
  ==========================================================
  TIMER
  ==========================================================
  */

  useEffect(() => {
    if (screen !== "test") {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          clearInterval(timer);

          handleSectionFinish();

          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [screen, activeSection]);

  /*
  ==========================================================
  COMBINATION
  ==========================================================
  */

  function chooseCombination(combination) {
    setSelectedCombination(combination);
  }

  function goToChapters() {
    if (!selectedCombination) {
      return;
    }

    setScreen("chapters");
  }

  /*
  ==========================================================
  CHAPTERS
  ==========================================================
  */

  function toggleChapter(subject, chapter) {
    setSelectedChapters((previous) => {
      const exists = previous[subject].includes(chapter);

      if (exists) {
        return {
          ...previous,

          [subject]: previous[subject].filter((item) => item !== chapter),
        };
      }

      return {
        ...previous,

        [subject]: [...previous[subject], chapter],
      };
    });
  }

  function selectAll(subject) {
    setSelectedChapters((previous) => ({
      ...previous,

      [subject]: [...CHAPTERS[subject]],
    }));
  }

  function clearAll(subject) {
    setSelectedChapters((previous) => ({
      ...previous,

      [subject]: [],
    }));
  }

  /*
  ==========================================================
  GENERATE TEST
  ==========================================================
  */

  function generateTest() {
    const config = TEST_CONFIG[selectedCombination];

    const subjects = config.subjects;

    const missingSubject = subjects.find(
      (subject) => selectedChapters[subject].length === 0,
    );

    if (missingSubject) {
      alert(
        `Please select at least one chapter for ${SUBJECT_NAMES[missingSubject]}.`,
      );

      return;
    }

    const generatedSections = config.sections.map((section) => {
      let questions = [];

      /*
          PC section contains both Physics
          and Chemistry.
          */

      if (section.id === "PC") {
        const physics = createQuestions("P", selectedChapters.P, 50);

        const chemistry = createQuestions("C", selectedChapters.C, 50);

        questions = [...physics, ...chemistry];
      } else {
        /*
          Individual section.
          */
        questions = createQuestions(
          section.id,
          selectedChapters[section.id],
          50,
        );
      }

      return {
        ...section,

        questions,

        completed: false,
      };
    });

    setTestSections(generatedSections);

    setActiveSection(0);

    setActiveQuestion(0);

    setAnswers({});

    setMarked({});

    setTimeLeft(generatedSections[0].time * 60);

    setScreen("test");
  }

  /*
  ==========================================================
  SELECT QUESTION
  ==========================================================
  */

  function selectQuestion(index) {
    setActiveQuestion(index);
  }

  /*
  ==========================================================
  SELECT ANSWER
  ==========================================================
  */

  function selectAnswer(optionIndex) {
    const section = testSections[activeSection];

    const question = section.questions[activeQuestion];

    setAnswers((previous) => ({
      ...previous,

      [question.id]: optionIndex,
    }));
  }

  /*
  ==========================================================
  MARK FOR REVIEW
  ==========================================================
  */

  function toggleMark() {
    const section = testSections[activeSection];

    const question = section.questions[activeQuestion];

    setMarked((previous) => ({
      ...previous,

      [question.id]: !previous[question.id],
    }));
  }

  /*
  ==========================================================
  NEXT QUESTION
  ==========================================================
  */

  function nextQuestion() {
    const section = testSections[activeSection];

    if (activeQuestion < section.questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    }
  }

  /*
  ==========================================================
  PREVIOUS QUESTION
  ==========================================================
  */

  function previousQuestion() {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    }
  }

  /*
  ==========================================================
  FINISH CURRENT SECTION
  ==========================================================
  */

  function handleSectionFinish() {
    const current = testSections[activeSection];

    const updated = testSections.map((section, index) => {
      if (index === activeSection) {
        return {
          ...section,
          completed: true,
        };
      }

      return section;
    });

    setTestSections(updated);

    /*
  If another section exists,
  unlock it and give it its
  FULL timer.
  */

    if (activeSection < testSections.length - 1) {
      const next = activeSection + 1;

      setActiveSection(next);

      setActiveQuestion(0);

      setTimeLeft(testSections[next].time * 60);
    } else {
      /*
    ==========================
    FINAL RESULT CALCULATION
    ==========================
    */

      let correct = 0;
      let wrong = 0;
      let attempted = 0;
      let total = 0;

      testSections.forEach((section) => {
        section.questions.forEach((question) => {
          total++;

          const selectedAnswer = answers[question.id];

          if (selectedAnswer === undefined) {
            return;
          }

          attempted++;

          if (selectedAnswer === question.correctAnswerIndex) {
            correct++;
          } else {
            wrong++;
          }
        });
      });

      const unattempted = total - attempted;

      setResult({
        total,
        attempted,
        correct,
        wrong,
        unattempted,
      });

      setScreen("result");
    }
  }

  /*
  ==========================================================
  SECTION SWITCHING
  ==========================================================
  */

  function switchSection(index) {
    /*
    Student cannot jump forward
    into a locked section.
    */

    if (index > activeSection) {
      return;
    }

    /*
    Completed previous sections
    cannot be reopened.
    */

    if (index < activeSection) {
      return;
    }

    setActiveSection(index);

    setActiveQuestion(0);
  }

  /*
  ==========================================================
  FORMAT TIMER
  ==========================================================
  */

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return (
      `${String(minutes).padStart(2, "0")}:` +
      `${String(remainingSeconds).padStart(2, "0")}`
    );
  }

  /*
  ==========================================================
  COMBINATION SCREEN
  ==========================================================
  */

  if (screen === "combination") {
    return (
      <div className="app">
        <header className="header">
          <p className="eyebrow">MHT-CET PCM PRACTICE</p>

          <h1>Create Your Test</h1>

          <p className="subtitle">Choose the subjects you want to practice.</p>
        </header>

        <main className="container">
          <section className="card">
            <h2>Choose Subject Combination</h2>

            <div className="combination-grid">
              {Object.keys(TEST_CONFIG).map((combination) => {
                const config = TEST_CONFIG[combination];

                return (
                  <button
                    key={combination}
                    className={`combination-card ${
                      selectedCombination === combination ? "selected" : ""
                    }`}
                    onClick={() => chooseCombination(combination)}
                  >
                    <div className="combination-name">{combination}</div>

                    <div>{config.totalQuestions} Questions</div>

                    <div className="time">
                      {config.sections
                        .map((section) => `${section.time} min`)
                        .join(" + ")}
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedCombination && (
              <div className="selected-info">
                <h3>{selectedCombination} Test</h3>

                <p>
                  Questions:{" "}
                  <strong>
                    {TEST_CONFIG[selectedCombination].totalQuestions}
                  </strong>
                </p>

                <p>
                  Timing:{" "}
                  <strong>
                    {TEST_CONFIG[selectedCombination].sections
                      .map((section) => `${section.name}: ${section.time} min`)
                      .join(" → ")}
                  </strong>
                </p>

                <button className="continue-button" onClick={goToChapters}>
                  Choose Chapters →
                </button>
              </div>
            )}
          </section>
        </main>
      </div>
    );
  }

  /*
  ==========================================================
  CHAPTER SCREEN
  ==========================================================
  */

  if (screen === "chapters") {
    const subjects = TEST_CONFIG[selectedCombination].subjects;

    return (
      <div className="app">
        <header className="header">
          <p className="eyebrow">CUSTOM TEST</p>

          <h1>Select Chapters</h1>

          <p className="subtitle">Choose chapters for each selected subject.</p>
        </header>

        <main className="container">
          <section className="card">
            <div className="test-summary">
              <div>
                <strong>{selectedCombination}</strong>

                <span>
                  {TEST_CONFIG[selectedCombination].totalQuestions} Questions
                </span>
              </div>

              <div>
                <span>Timing</span>

                <strong>
                  {TEST_CONFIG[selectedCombination].sections
                    .map((section) => `${section.time} min`)
                    .join(" + ")}
                </strong>
              </div>
            </div>
          </section>

          {subjects.map((subject) => (
            <section className="card chapter-card" key={subject}>
              <div className="chapter-header">
                <div>
                  <p className="eyebrow">SUBJECT</p>

                  <h2>{SUBJECT_NAMES[subject]}</h2>

                  <p className="muted">
                    50 questions will be distributed across your selected
                    chapters.
                  </p>
                </div>

                <div className="chapter-actions">
                  <button
                    className="small-button"
                    onClick={() => selectAll(subject)}
                  >
                    Select All
                  </button>

                  <button
                    className="small-button secondary"
                    onClick={() => clearAll(subject)}
                  >
                    Clear
                  </button>
                </div>
              </div>

              <div className="chapter-grid">
                {CHAPTERS[subject].map((chapter) => {
                  const checked = selectedChapters[subject].includes(chapter);

                  return (
                    <label
                      className={`chapter-option ${checked ? "checked" : ""}`}
                      key={chapter}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleChapter(subject, chapter)}
                      />

                      <span>{chapter}</span>
                    </label>
                  );
                })}
              </div>
            </section>
          ))}

          <div className="bottom-actions">
            <button
              className="back-button"
              onClick={() => setScreen("combination")}
            >
              ← Back
            </button>

            <button className="continue-button" onClick={generateTest}>
              Generate Test →
            </button>
          </div>
        </main>
      </div>
    );
  }

  /*
  ==========================================================
  RESULT
  ==========================================================
  */
  if (screen === "result") {
    const percentage =
      result && result.total > 0
        ? ((result.correct / result.total) * 100).toFixed(1)
        : "0.0";

    return (
      <main className="container">
        <section className="card result">
          <p className="eyebrow">TEST COMPLETE</p>

          <h1>Test Completed</h1>

          <p className="subtitle">Your test has been submitted.</p>

          {result && (
            <div className="result-summary">
              <h2>
                {result.correct} / {result.total}
              </h2>

              <p>Score: {result.correct}</p>

              <p>Percentage: {percentage}%</p>

              <p>Attempted: {result.attempted}</p>

              <p>Correct: {result.correct}</p>

              <p>Wrong: {result.wrong}</p>

              <p>Unattempted: {result.unattempted}</p>
            </div>
          )}

          <button
            className="continue-button"
            onClick={() => {
              setScreen("combination");

              setSelectedCombination(null);

              setResult(null);
            }}
          >
            Create Another Test
          </button>
        </section>
      </main>
    );
  }

  /*
  ==========================================================
  TEST SCREEN
  ==========================================================
  */

  const section = testSections[activeSection];

  const question = section.questions[activeQuestion];

  return (
    <div className="exam-page">
      <header className="exam-header">
        <div>
          <p className="eyebrow">{selectedCombination} TEST</p>

          <strong>{section.name}</strong>
        </div>

        <div className="exam-timer">{formatTime(timeLeft)}</div>
      </header>

      <div className="section-bar">
        {testSections.map((item, index) => {
          const locked = index > activeSection;

          const completed = item.completed;

          return (
            <button
              key={item.id}
              className={`section-tab ${
                index === activeSection ? "active" : ""
              } ${completed ? "completed" : ""}`}
              disabled={locked || completed}
              onClick={() => switchSection(index)}
            >
              {item.name}

              {completed && " ✓"}

              {locked && " 🔒"}
            </button>
          );
        })}
      </div>

      <div className="exam-layout">
        {/* QUESTION NAVIGATION */}

        <aside className="question-panel">
          <h3>Questions</h3>

          <p className="muted">Select any question.</p>

          <div className="question-numbers">
            {section.questions.map((item, index) => {
              const answered = answers[item.id] !== undefined;

              const review = marked[item.id];

              return (
                <button
                  key={item.id}
                  className={`
                      question-number
                      ${index === activeQuestion ? "current" : ""}
                      ${answered ? "answered" : ""}
                      ${review ? "review" : ""}
                    `}
                  onClick={() => selectQuestion(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          <div className="question-legend">
            <div>
              <span className="legend-box current"></span>
              Current
            </div>

            <div>
              <span className="legend-box answered"></span>
              Answered
            </div>

            <div>
              <span className="legend-box review"></span>
              Review
            </div>
          </div>
        </aside>

        {/* QUESTION */}

        <main className="card question-area">
          <div className="question-top">
            <div>
              Question <strong>{activeQuestion + 1}</strong> of{" "}
              <strong>{section.questions.length}</strong>
            </div>

            <div>{question.chapter}</div>
          </div>

          <h2 className="question-text">{question.questionText}</h2>

          <div className="options">
            {question.options.map((option, index) => {
              const selected = answers[question.id] === index;

              return (
                <button
                  key={option}
                  className={`answer-option ${
                    selected ? "selected-option" : ""
                  }`}
                  onClick={() => selectAnswer(index)}
                >
                  <span>{String.fromCharCode(65 + index)}</span>

                  {option}
                </button>
              );
            })}
          </div>

          <div className="question-actions">
            <button className="review-button" onClick={toggleMark}>
              {marked[question.id] ? "Remove Review" : "Mark for Review"}
            </button>

            <div>
              <button
                className="back-button"
                disabled={activeQuestion === 0}
                onClick={previousQuestion}
              >
                ← Previous
              </button>

              {activeQuestion < section.questions.length - 1 ? (
                <button className="continue-button" onClick={nextQuestion}>
                  Next →
                </button>
              ) : (
                <button
                  className="finish-button"
                  onClick={() => {
                    if (window.confirm("Submit this section and continue?")) {
                      handleSectionFinish();
                    }
                  }}
                >
                  Submit Section
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
