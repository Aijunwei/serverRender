var mongoose = require('mongoose');
var db=mongoose.connect('mongodb://localhost/tododb');
db.connection.on("error", function (error) {  console.log("数据库连接失败：" + error); }); 
 db.connection.on("open", function () {  console.log("------数据库连接成功！------"); });
exports.mongoose=mongoose;