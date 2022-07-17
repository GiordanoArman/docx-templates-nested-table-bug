const { createReport } = require('docx-templates');
const fs = require('fs');

console.log("createReport", createReport);

const template = fs.readFileSync('document.docx');

createReport({
  template,
  data: {}
}).then((buffer) => {
	fs.writeFileSync('report.docx', buffer);
});

