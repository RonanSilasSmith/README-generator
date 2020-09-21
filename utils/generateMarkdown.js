// function to generate markdown for README
const fs = require('fs');


const generateMarkdown = mddata => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', mddata, err => {
    if(err){
      reject(err)
      return
    }

    resolve();
  })
  });
}

module.exports = generateMarkdown;
