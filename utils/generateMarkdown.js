// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![License](https://img.sheilds.io/badge/license-${data.license}-purple)
  # ${data.title}

  ${data.description}

  ## Table of contents

   * [License](#license)
   * [Installation](#install)
   * [Usage](#userinfo)
   * [Tests](#tests)
   * [Contributions](#contribute)
   * [Questions](#questions)
   
  ## License

  ${data.license}

  ## Installation
  
  ${data.install}

  ## Usage

  ${data.userinfo}

  ## Tests

  ${data.tests}

  ## Contributions

  ${data.contribute}

  ## Questions

  If you have any questions, email me at ${data.email}
`;
}

module.exports = generateMarkdown;
