// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = "Mozilla"){
    return (`[Covered under MPL](https://opensource.org/licenses/MPL-2.0)`)
} else if(license = 'Apache') {
   return (`[Covered under Apache](https://opensource.org/licenses/Apache-2.0)`)
} else if(license = 'MIT') {
   return (`[Covered under MIT](https://opensource.org/licenses/MIT)`)
  
}else{
  return ('')
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
function generateMarkdown(data) {
  const license = renderLicenseBadge 
  const licenseLink = renderLicenseLink()
  return `# ${data.title}
![badge](https://img.shields.io/badge/license-${data.license}-blueviolet)

## Table of Contents
*  [Description](#description)
*  [Installation](#installation)
*  [Usage](#usage)
*  [License](#license)
*  [Contributing](#contributing)
*  [Tests](#tests)
*  [Questions](#questions)

## Description
${data.motivation}
${data.build}
${data.solve}
${data.challenges}
${data.special}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseLink}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
[GitHub](https://github.com/${data.github})
[email](mailto:${data.email})
${data.questions}
`;
}

module.exports = generateMarkdown;


