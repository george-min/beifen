
var fs = require("fs");
var path = require("path");
var pt = "D:\\frontend_pro\\node-demo";
fs.readdir(pt,function (err, files) {
    files.forEach(function (item) {
        var childpath = path.join(pt,item);
        fs.stat(childpath,function (err,stat) {
            if(stat.isFile()){
                console.log(item+"是文件！");
            }else if(stat.isDirectory()){
                console.log(item+"是文件夹！");
            }
        })
    })
});