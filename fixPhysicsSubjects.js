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

let changedFiles = 0;
let changedQuestions = 0;

console.log("\n========================================");
console.log("     FIX PHYSICS SUBJECT VALUES");
console.log("========================================\n");

for (const file of files) {
  const filePath = path.join(physicsFolder, file);

  let content = fs.readFileSync(filePath, "utf8");

  const originalContent = content;

  /*
  Change:

  subject: "Physics"

  to:

  subject: "P"
  */

  content = content.replace(/subject:\s*"Physics"/g, 'subject: "P"');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, "utf8");

    changedFiles++;

    const matches = originalContent.match(/subject:\s*"Physics"/g);

    changedQuestions += matches ? matches.length : 0;

    console.log(`✅ Fixed: ${file}`);
  } else {
    console.log(`✓ Already correct: ${file}`);
  }
}

console.log("\n========================================");
console.log("             FINAL REPORT");
console.log("========================================\n");

console.log(`Files changed     : ${changedFiles}`);
console.log(`Questions changed : ${changedQuestions}`);

console.log("\nAll Physics questions should now use:");

console.log('subject: "P"');

console.log("\n========================================\n");
