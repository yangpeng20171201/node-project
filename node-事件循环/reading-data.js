var fs = require("fs");
//文件地址要在前面加点
fs.readFile('./txt/input.txt', function (err, data) {
   if (err){
     //文件不存在，返回Error信息
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("程序执行完毕");