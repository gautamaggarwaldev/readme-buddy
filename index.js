#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import path from "path";


const questions = [
  { type: "input", name: "title", message: "Project Title:" },
  { type: "input", name: "description", message: "Project Description:" },
  { type: "input", name: "installation", message: "Installation Instructions:" },
  { type: "input", name: "usage", message: "Usage Instructions:" },
  { type: "input", name: "license", message: "License Type:" },
  { type: "input", name: "contributing", message: "Contribution Guidelines:" },
  { type: "input", name: "tests", message: "Test Instructions:" },
  { type: "input", name: "github", message: "GitHub Username:" },
  { type: "input", name: "email", message: "Email Address:" }
];

function generateREADME(answers) {
  return `# ${answers.title}

## Description
${answers.description}

## Installation
\`\`\`
${answers.installation}
\`\`\`

## Usage
\`\`\`
${answers.usage}
\`\`\`

## License
This project is licensed under the ${answers.license} License.

## Contributing
${answers.contributing}

## Tests
\`\`\`
${answers.tests}
\`\`\`

## Questions
For any questions, reach out via:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
  `;
}

inquirer.prompt(questions).then((answers) => {
  const filePath = path.join(process.cwd(), "README.md");
  fs.writeFileSync(filePath, generateREADME(answers));
  console.log("README.md generated successfully!");
});
