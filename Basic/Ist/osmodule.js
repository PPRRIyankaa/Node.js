const os = require('os');

// The os provide the operating system realted utility method and properties. 

console.log(os.arch());
console.log(os.platform())
console.log(os.freemem()/(1024*1024))
console.log(os.totalmem()/(1024*1024*1024))
console.log(os.hostname())
console.log(os.type())