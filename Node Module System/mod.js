// Built in Modules

const path = require('path');
const os = require('os');
const filesystem = require('fs');
let parseObj = path.parse(__filename);
let totMemory = os.totalmem();
let freeMemory = os.freemem();

// async
filesystem.readdir('/Users/DELL/MYLaptop/Desktop', function (err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});
console.log('filename is:', parseObj);
console.log(`Total Memory ${totMemory}`);
console.log(`Free Memory ${freeMemory}`);
// extra
console.log(os.userInfo());
console.log(os.hostname());
console.log(os.homedir());
