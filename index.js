var myutil = require('./lib/myutil');
var MyDate= require('./lib/date.js');
myutil.date = new MyDate();

module.exports = myutil;