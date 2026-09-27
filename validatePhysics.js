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

console.log("\n========================================");
console.log("     PHYSICS QUESTION BANK CHECK");
console.log("========================================\n");

console.log(`Physics files found: ${files.length}\n`);

let totalQuestions = 0;
let errors = [];
let warnings = [];
let allIds = new Set();

async function validate() {
  for (const file of files) {
    const filePath = path.join(physicsFolder, file);

    console.log(`Checking: ${file}`);

    try {
      const content = fs.readFileSync(filePath, "utf8");

      /*
      ========================================
      MODULE EXPORT CHECK
      ========================================
      */

      if (content.includes("module.exports")) {
        errors.push(`${file}: Uses module.exports instead of export default`);
      }

      if (!content.includes("export default")) {
        errors.push(`${file}: Missing export default`);
      }

      /*
      ========================================
      LOAD THE ACTUAL JS MODULE
      ========================================
      */

      const encoded = Buffer.from(content).toString("base64");

      const module = await import(`data:text/javascript;base64,${encoded}`);

      const questions = module.default;

      if (!Array.isArray(questions)) {
        errors.push(`${file}: Default export is not an array`);

        continue;
      }

      console.log(`  Questions detected: ${questions.length}`);

      totalQuestions += questions.length;

      /*
      ========================================
      CHECK EACH QUESTION
      ========================================
      */

      questions.forEach((question, index) => {
        const location = `${file} → question ${index + 1}`;

        /*
        ----------------------------------------
        REQUIRED FIELDS
        ----------------------------------------
        */

        const requiredFields = [
          "id",
          "subject",
          "chapter",
          "topic",
          "difficulty",
          "type",
          "questionText",
          "options",
          "correctAnswerIndex",
          "solution",
        ];

        requiredFields.forEach((field) => {
          if (question[field] === undefined || question[field] === null) {
            errors.push(`${location}: Missing ${field}`);
          }
        });

        /*
        ----------------------------------------
        ID CHECK
        ----------------------------------------
        */

        if (question.id) {
          if (allIds.has(question.id)) {
            errors.push(`${location}: Duplicate ID ${question.id}`);
          }

          allIds.add(question.id);
        }

        /*
        ----------------------------------------
        SUBJECT CHECK
        ----------------------------------------
        */

        if (question.subject !== "P") {
          errors.push(
            `${location}: subject should be "P", found "${question.subject}"`,
          );
        }

        /*
        ----------------------------------------
        OPTIONS CHECK
        ----------------------------------------
        */

        if (!Array.isArray(question.options)) {
          errors.push(`${location}: options is not an array`);
        } else {
          if (question.options.length !== 4) {
            errors.push(
              `${location}: Has ${question.options.length} options instead of 4`,
            );
          }

          /*
          Check for empty options
          */

          question.options.forEach((option, optionIndex) => {
            if (
              option === undefined ||
              option === null ||
              String(option).trim() === ""
            ) {
              errors.push(`${location}: Option ${optionIndex + 1} is empty`);
            }
          });
        }

        /*
        ----------------------------------------
        CORRECT ANSWER INDEX CHECK
        ----------------------------------------
        */

        if (typeof question.correctAnswerIndex !== "number") {
          errors.push(`${location}: correctAnswerIndex is not a number`);
        } else if (
          question.correctAnswerIndex < 0 ||
          question.correctAnswerIndex > 3 ||
          !Number.isInteger(question.correctAnswerIndex)
        ) {
          errors.push(
            `${location}: Invalid correctAnswerIndex ${question.correctAnswerIndex}`,
          );
        }

        /*
        ----------------------------------------
        VERIFY CORRECT ANSWER EXISTS
        ----------------------------------------
        */

        if (
          Array.isArray(question.options) &&
          typeof question.correctAnswerIndex === "number" &&
          question.correctAnswerIndex >= 0 &&
          question.correctAnswerIndex < question.options.length
        ) {
          const correctAnswer = question.options[question.correctAnswerIndex];

          if (
            correctAnswer === undefined ||
            correctAnswer === null ||
            String(correctAnswer).trim() === ""
          ) {
            errors.push(`${location}: Correct answer option is empty`);
          }
        }

        /*
        ----------------------------------------
        QUESTION TEXT CHECK
        ----------------------------------------
        */

        if (
          typeof question.questionText !== "string" ||
          question.questionText.trim() === ""
        ) {
          errors.push(`${location}: questionText is empty or invalid`);
        }

        /*
        ----------------------------------------
        CHAPTER CHECK
        ----------------------------------------
        */

        if (
          typeof question.chapter !== "string" ||
          question.chapter.trim() === ""
        ) {
          errors.push(`${location}: chapter is empty or invalid`);
        }

        /*
        ----------------------------------------
        TOPIC CHECK
        ----------------------------------------
        */

        if (
          typeof question.topic !== "string" ||
          question.topic.trim() === ""
        ) {
          errors.push(`${location}: topic is empty or invalid`);
        }

        /*
        ----------------------------------------
        DIFFICULTY CHECK
        ----------------------------------------
        */

        const validDifficulties = ["Easy", "Medium", "Hard"];

        if (!validDifficulties.includes(question.difficulty)) {
          errors.push(
            `${location}: Invalid difficulty "${question.difficulty}"`,
          );
        }

        /*
        ----------------------------------------
        TYPE CHECK
        ----------------------------------------
        */

        if (question.type !== "Practice") {
          errors.push(
            `${location}: type should be "Practice", found "${question.type}"`,
          );
        }

        /*
        ----------------------------------------
        SOLUTION CHECK
        ----------------------------------------
        */

        if (
          typeof question.solution !== "object" ||
          question.solution === null
        ) {
          errors.push(`${location}: solution is missing or invalid`);
        } else {
          /*
          Concept
          */

          if (
            typeof question.solution.concept !== "string" ||
            question.solution.concept.trim() === ""
          ) {
            errors.push(`${location}: solution.concept is missing or empty`);
          }

          /*
          Steps
          */

          if (!Array.isArray(question.solution.steps)) {
            errors.push(`${location}: solution.steps is not an array`);
          } else if (question.solution.steps.length === 0) {
            warnings.push(`${location}: solution.steps is empty`);
          }

          /*
          Final answer
          */

          if (
            typeof question.solution.finalAnswer !== "string" ||
            question.solution.finalAnswer.trim() === ""
          ) {
            errors.push(
              `${location}: solution.finalAnswer is missing or empty`,
            );
          }

          /*
          Exam tip
          */

          if (
            question.solution.examTip !== undefined &&
            typeof question.solution.examTip !== "string"
          ) {
            errors.push(`${location}: solution.examTip must be a string`);
          }
        }
      });
    } catch (error) {
      errors.push(`${file}: Could not load file → ${error.message}`);
    }

    console.log("");
  }

  /*
  ========================================
  FINAL REPORT
  ========================================
  */

  console.log("\n========================================");
  console.log("             FINAL REPORT");
  console.log("========================================\n");

  console.log(`Physics files found : ${files.length}`);
  console.log(`Questions detected  : ${totalQuestions}`);
  console.log(`Unique IDs          : ${allIds.size}`);
  console.log(`Errors              : ${errors.length}`);
  console.log(`Warnings            : ${warnings.length}`);

  /*
  ========================================
  ERRORS
  ========================================
  */

  if (errors.length > 0) {
    console.log("\n========== ERRORS ==========\n");

    errors.forEach((error) => {
      console.log("❌ " + error);
    });
  }

  /*
  ========================================
  WARNINGS
  ========================================
  */

  if (warnings.length > 0) {
    console.log("\n========== WARNINGS ==========\n");

    warnings.forEach((warning) => {
      console.log("⚠️ " + warning);
    });
  }

  /*
  ========================================
  SUCCESS
  ========================================
  */

  if (errors.length === 0) {
    console.log("\n✅ ALL STRUCTURAL CHECKS PASSED.");
  }

  console.log("\n========================================\n");
}

validate();
