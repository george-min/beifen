"use strict"

process.stdout.write("自定义计算器，请按提示输入信息：\n");
process.stdout.write("请按提示输入信息，1：加法，2：减法，3：乘法，4：除法 ：");
var flag = 1,type,value1,value2;
process.stdin.on("data",function (chunk) {
    if(flag===1){
        type = chunk.toString().trim();
        if(type==="1"||type==="2"||type==="3"||type==="4"){
            process.stdout.write("请输入第一个数字：");
            flag++;
        }else{
            process.stdout.write("输入不合法，请重新输入；\n");
            process.stdout.write("请按提示输入信息，1：加法，2：减法，3：乘法，4：除法 ：");
        }
    }else if(flag === 2){
        value1 = chunk.toString().trim();
        process.stdout.write("请输入第二个数字：");
        flag++;
    }else if(flag ===3){
        value2 = chunk.toString().trim();
        switch (type){
            case "1":
                console.log("结果是："+parseInt(value1)+parseInt(value2));
                break;
            case "2":
                console.log("结果是："+parseInt(value1)-parseInt(value2));
                break;
            case "3":
                console.log("结果是："+parseInt(value1)*parseInt(value2));
                break;
            case "4":
                console.log("结果是："+parseInt(value1)/parseInt(value2));
                break;
            default:break;
        }
        process.stdout.write("请按提示输入信息，1：加法，2：减法，3：乘法，4：除法\n");
        flag = 1;
    }
})