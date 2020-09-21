createTemplate = (questions) => {

let mddata = '';
let table = ``;
if(questions.name){
    mddata += 
`#${questions.name}


`
mddata += `
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
`
}
if(questions.description){
    mddata += `
##description

    ${questions.description}
    `
}
if(questions.installation){
    mddata += `
##Installation

    ${questions.installation}
    `
}
if(questions.contributers){
    mddata += `
##Contributers

    ${questions.contributers}
    `
}
if(questions.license){
    mddata += `
##License

    ${questions.license}
    `
}
if(questions.github){
    mddata += `
##Github

    https://github.com/${questions.github}
    `
}
if(questions.usage){
    mddata += `
##Usage

    ${questions.usage}
    `
}
if(questions.tests){
    mddata += `
##Tests

    ${questions.tests}
    `
}
if(questions.contact){
    mddata += `
###Questions:
how do I contact the repo owner?
${questions.contact}`
}

return mddata
}

module.exports = createTemplate;