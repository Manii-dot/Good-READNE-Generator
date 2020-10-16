// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # title
  ${data.title}
  # Description
  ${data.Description}
  # Table of Contents
  ${data.Contents}
  # Installation
  ${data.Installation}
  # Usage
  ${data.Usage}
  # License
  ${data.License}
  # Contributing
  ${data.Contributing}
  # Tests
  ${data.Tests}
  # Questions
  ${data.Questions}
  #Git_Hub
  Github: [https://github.com${data.Git_Hub}]
  #Email:
  ${data.Email}
`;
}

module.exports = generateMarkdown;
