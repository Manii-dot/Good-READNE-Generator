// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## title
  ${data.title}
  ## Description
  ${data.Description}
  ## Table of Contents
  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  ${data.Contents}
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## License
  ${data.License}
  ## Contributing
  ${data.Contributing}
  ## Tests
  ${data.Test}
  ## Questions
  ${data.Question}
  ##GitHub
  Github:${data.GitHub}
  ##Email:
  ${data.Email}
`;
}

module.exports = generateMarkdown;
