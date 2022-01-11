var fs = require('fs')
// var result;
// result = fs.readFileSync('./data.txt')

var child_process = require('child_process');
result = child_process.execSync('git rev-parse HEAD');
console.log(webpack,111)
module.exports = result;