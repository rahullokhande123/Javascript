
// ============= Rest Peramiter( Yaha Spret Peramiter Ka Part H) ===============
// let display = function(... num1){
//     console.log(num1);
// };

// display(3);
// display(4,5);
// display(5,6,12,3);  // Yah Array Ke Form Me Print Krta h

// let sum = function (x,y,z){
//     console.log(x+y+z);
// };
// const array1 = [3,2,3,4,5,6];
// sum(...array1); // Esme F() Ke Ander Jitne Peramiter Hoge Utne Hi Value Lega

// ===================== DeStructuring ===========================

// const myarray1 = [1,2,3,4,5,6];
// const [a,b,c,d] = myarray1; // Bich Me Jitne , denge utne element vo scip kr dega.
// console.log(a,b,c,d); // Pure Array KO Ak Variable me save krne ke liye 
//======================================
const myarray = [1,2,3,4,5,6];
const [a,b,c,d,...num]=myarray;
console.log(a,b,c,d);
console.log(num);

//=============================================================

const person ={
    name: "johan",
    id:1,
    age: 23,
};
// First Method================
// const {name,id,age} = person;
// console.log(name,id,age);
// Second Method ==============
const {name: username,id: i,age:myage }= person;
console.log(username,i,myage);

