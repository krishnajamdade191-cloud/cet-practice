const fs = require("fs");
const path = require("path");

const physicsFolder = path.join(
  __dirname,
  "backend",
  "data",
  "questions",
  "physics",
);

const files = fs
  .readdirSync(physicsFolder)
  .filter((file) => file.endsWith(".js"));

let totalQuestions = 0;
let problems = [];
let warnings = [];

function normalize(text) {
  if (text === undefined || text === null) {
    return "";
  }

  return String(text).toLowerCase().replace(/\s+/g, " ").trim();
}

async function audit() {
  console.log("\n========================================");
  console.log("       PHYSICS ANSWER AUDIT");
  console.log("========================================\n");

  for (const file of files) {
    const filePath = path.join(physicsFolder, file);

    try {
      const content = fs.readFileSync(filePath, "utf8");
      const encoded = Buffer.from(content).toString("base64");

      const module = await import(`data:text/javascript;base64,${encoded}`);

      const questions = module.default;

      if (!Array.isArray(questions)) {
        problems.push(`${file}: Export is not an array`);
        continue;
      }

      console.log(`Checking ${file} → ${questions.length} questions`);

      totalQuestions += questions.length;

      questions.forEach((question, index) => {
        const location = `${file} → ${question.id || `question ${index + 1}`}`;

        /*
        ========================================
        1. Correct answer index vs option
        ========================================
        */

        const answerIndex = question.correctAnswerIndex;

        if (
          !Number.isInteger(answerIndex) ||
          answerIndex < 0 ||
          answerIndex >= question.options.length
        ) {
          problems.push(`${location}: Invalid correctAnswerIndex`);

          return;
        }

        const correctOption = question.options[answerIndex];

        /*
        ========================================
        2. Final answer comparison
        ========================================
        */

        const finalAnswer = question.solution?.finalAnswer;

        if (!finalAnswer) {
          problems.push(`${location}: Missing solution.finalAnswer`);
        } else {
          const normalizedOption = normalize(correctOption);

          const normalizedFinal = normalize(finalAnswer);

          /*
          Exact match
          */

          if (normalizedOption !== normalizedFinal) {
            /*
            Not automatically an error because
            finalAnswer may contain explanations,
            formulas, units, or equivalent wording.
            */

            warnings.push(
              `${location}: finalAnswer does not exactly match selected option | ` +
                `Option: "${correctOption}" | ` +
                `Final: "${finalAnswer}"`,
            );
          }
        }

        /*
        ========================================
        3. Check for duplicate options
        ========================================
        */

        const normalizedOptions = question.options.map(normalize);

        const uniqueOptions = new Set(normalizedOptions);

        if (uniqueOptions.size !== question.options.length) {
          problems.push(`${location}: Duplicate options detected`);
        }

        /*
        ========================================
        4. Check solution steps
        ========================================
        */

        if (
          !question.solution ||
          !Array.isArray(question.solution.steps) ||
          question.solution.steps.length === 0
        ) {
          problems.push(`${location}: Missing solution steps`);
        }

        /*
        ========================================
        5. Check question type
        ========================================
        */

        if (question.type !== "Practice") {
          problems.push(`${location}: Unexpected question type`);
        }
      });
    } catch (error) {
      problems.push(`${file}: Could not load → ${error.message}`);
    }
  }

  console.log("\n========================================");
  console.log("             FINAL REPORT");
  console.log("========================================\n");

  console.log(`Questions checked : ${totalQuestions}`);
  console.log(`Problems          : ${problems.length}`);
  console.log(`Warnings          : ${warnings.length}`);

  if (problems.length > 0) {
    console.log("\n========== PROBLEMS ==========\n");

    problems.forEach((problem) => {
      console.log("❌ " + problem);
    });
  }

  if (warnings.length > 0) {
    console.log("\n========== WARNINGS ==========\n");

    warnings.forEach((warning) => {
      console.log("⚠️ " + warning);
    });
  }

  if (problems.length === 0 && warnings.length === 0) {
    console.log("\n✅ No automatically detectable answer problems found.");
  }

  console.log("\n========================================\n");
}

audit();
