function name1(){
    console.log("Hello")
}
name1();
// 1 ================It's Arrow Function-----

const name=()=>{
    console.log("Hello Class");
};
name();

//2 ================ It's Arrow Function with + ---------
const name3=(num)=>{
    console.log("Hello"+ num);
};
name3("Johan");
name3("Gread");
name3("Lucky");

//3 =========================================
const display = (fname,lname)=>{
    console.log(fname + " " + lname);
};
display("Shubham","Kose");



//4 ================ Use this for single line arrow f()
const rahul=()=> console.log("Hello Rahul");
rahul();

//5 ==================================
const add = (x,y)=>{
    return x + y;
}
console.log(add(3,4))



//6 ====================Value Dekstop pr print krna.
const add1 = (x, y) => {
    return x + y;
};
document.getElementById("demo").innerHTML = add1(4,4);


// //=================== Work Dibuging===

// let num1 = prompt ("Enter first No.");
// console.log(num1);
// let num2 = prompt ("Enter first No.");
// console.log(num2);

// const multiply = (num1,num2)=>{
//         return num1 * num2;
// }
// let output = multiply(num1,num2);
// console.log(output);
// document.getElementById("demo").innerHTML ="sum of "+ num1 +" and "+ num2 + " is " +" = " +output;

// //========================Event Heandaling(Button Me Function Purfurm Krna.)

const display1 =()=>{
    alert("Wellcome to js class");
};