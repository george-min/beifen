'use strict'
var cm = require("calcmodules");

var array = process.argv.splice(2);

if(array.length<3){
    console.log("参数不合法，无法计算!");
    process.exit();
}

var value1 = parseInt(array[0]);
var value2 = parseInt(array[2]);
if(array[1]==="+"){
    console.log(cm.add(value1,value2));
}else if(array[1]==="-"){
    console.log(cm.subtract(value1,value2));
}else if(array[1]==="*"){
    console.log(cm.multiplay(value1,value2));
}else if(array[1]==="/"){
    console.log(cm.divide(value1,value2));
}
