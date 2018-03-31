// console.log(__dirname);
// console.log(__filename);
// console.log(process.argv);

// //获取初始化元素单元值
// var argvs = process.argv;
// argvs = argvs.splice(2,1);
// console.log(argvs);

process.stdout.write("请输入加数：");
process.stdin.on("data",function (chunk) {
    console.log("接收到的数为："+ chunk.toString().trim());
})