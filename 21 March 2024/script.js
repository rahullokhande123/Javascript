function sum(para1,para2,para3){
    return para1 + para2 + para3;
}

// /Fucnction calling 
// sum(20,10,100);
// sum(1,2,3);

let result = sum (20,10,100);
console.log(result);

// ya fir hm es type se bhi kr sakte h-->
console.log(sum(20,10,100));


document.getElementById("demo").innerHTML = result;
// document.write(result);
// alert(result);




function cube(num){
    return num * num * num;
}

let hold = cube (5);
console.log(hold);
document.getElementById("demo2").innerHTML = hold;






function display (fname, lname){
    return fname + " " + lname;
}
display("john", "deo");
console.log(display("john","deo"));


// second method of fucnction =======================================

const display1 = function (fname,lname){
    return fname+ " " + lname;
}
console.log(display1("Johnny","lever"));




//==========================================================

let num1 = 45;
let num2 = 55;
let num3 = 65;
function multiply(num1,num2,num3){
    return num1 * num2 * num3;
}
multiply(num1,num2,num3);
console.log(multiply(num1,num2,num3));

let output = multiply(num1,num2,num3);
console.log(output);