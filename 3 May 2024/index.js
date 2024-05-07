// const var1 = "hello";
// // localStorage.clearAll(); // data clear krne ke liye jitne bhi add hue h
// const save= ()=>{
//     window.localStorage.setItem('data',var1)
//     // localStorage.clear('data')
// }

// let save1 = localStorage.getItem('data')
// //to retrieve data from localstorage;

// localStorage.clear('data')  // ak data clear krne ke liye

// //============================= Array object data save krna =======================
let arr = [12,13,234,45,"gh"];
window.localStorage.setItem('val',JSON.stringify(arr));
let answer = window.localStorage.getItem('val');
let output = JSON.parse(answer)
console.log(answer[4])




// const save =()=>{
//     window.localStorage.setItem("arr",arr)
//     let answer = window.localStorage.getItem('arr');
// }