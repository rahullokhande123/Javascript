// const x= new Date();
// const d= x.getDate(); // Date No. Deta H
// // const d= x.getDay(); // Day No. Dega
// // const d= x.getHours();  // Hours Deta H
// // const d= x.getMinutes(); // Minutes Deta H
// const d= x.getSeconds();  // Second Deta H
// const d= x.getMonth();
// document.getElementById("demo").innerHTML = d;

//=============================== Array Object ==================================
// ========================= Creating Array ( Array Literal) ====================
const myarray = ["BMW","FORD","NISSAN","KIA","TATA"];
console.log(myarray); 
console.log(myarray[0]); 
console.log(myarray[1]); 
console.log(myarray[2]); 
console.log(myarray[3]); 
console.log(myarray[4]); 

//===============================================================================
const newArray = new Array(34,56,89,278);
console.log(newArray);
//===============================================================================
const display= ()=>{
    console.log("Hello");
};
const array1 = ['John',34,{name: "Sanjana", age: 23}, display]  // Mixed Array 
console.log(array1);
console.log(array1[0]);
console.log(array1[2].name);

// ============================ In Array Objects ================================
const array2 = [
    {
        id:0,
        course:'React',
        price: 34000
    },
    {
        id:1,
        course:'Python',
        price: 35000
    },
    {
        id:2,
        course:'Javascript',
        price: 36000
    },
];
console.log(array2);

//======================================================================================

const fruits= ["Banana","Apple","Watermelon","Grapes","Mango"];
const x = fruits.length;
console.log(x);
//Method of get First element
// let fruit = fruits[0];
// Method of get last element 
let fruit = fruits[fruits.length-1];
document.getElementById("demo").innerHTML = fruit;