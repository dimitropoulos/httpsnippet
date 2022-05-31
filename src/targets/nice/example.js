const { HTTPSnippet } = require('httpsnippet');
const fs = require('fs');
const { yourTarget } = require('./path/to/your/custom/target');

const har = fs.readFileSync('./path/to/insomia/har/export');

const httpsnippet = new HTTPSnippet(JSON.parse(har));

httpsnippet.addTarget(yourTarget);

httpsnippet.convert('nice');

fs.writeFileSync('./path/to/output');
