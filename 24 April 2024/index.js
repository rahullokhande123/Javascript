// const arr = [1,2,3,4,5];

// const alen = arr.length;
// const newarray = arr.map(function callback(x){
//     console.log(x*x);
// });
// console.log(newarray);   // Map Higher Oder F() Kahlata H Or SetInterval or SetTimeout bhi h

// for(let i=0;i<=alen-1;i++){
//     console.log(arr[i]);
// }
// =============== Filter() ======================
// const arr1 = [1,2,3,4,5,6];
// const myArray = arr1.filter((item)=>{
//     return item%2==0; // item%2!=0 -> esse odd no. aayega.
// });
// console.log(myArray);

// //====================== Reduce() =================
const numbers = [1,2,3,4];
const sum = numbers.reduce(function (result,item){
    return result + item;
});
console.log(sum); 