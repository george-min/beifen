var fs = require("fs");

// fs.readdir("D:\\frontend_pro\\node-demo",function (err,data) {
//     for(var i=0;i<data.length;i++){
//         console.log(data[i]);
//     }
// })

/*
var datas = fs.readdirSync("D:\\frontend_pro\\node-demo");

for(var i=0;i<datas.length;i++){
    console.log(datas[i]);
}

console.log("完成结果！");
*/

fs.copyFile('C:\\Users\\Administrator\\Desktop\\test.txt', 'C:\\Users\\Administrator\\Desktop\\destination.txt', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
});