const array1=[];
array1[0]= "JohN";
array1[1]= "dOA";
array1[2]= 34;
console.log(array1);

//==================================================================

const fruits= ["BANANA","MANGO","APPLE","CHIKOO","KIWI"];
// const veggies = ["Okra","Carrot","Cabbage","Chilly"];
// const newarray = fruits.concat(veggies);
// console.log(newarray);


let flen = fruits.length;
console.log(flen);
let text = "<ul>";
for(let i =0;i<flen;i++){
    text += "<li>" +fruits[i]+ "</li>";
}
text +="</ul>";
document.getElementById("demo").innerHTML = text;

//========================================================

// // Last Me new element add krne ke liye(push ka use krte h)
// let y = fruits.push("Watermelan");
// console.log(y);  // Add krne ke bad size btata h in NO.
// console.log(fruits);

// Last se new element Hta ke ak new array me present krta H (pop)
// fruits.pop(y);
// console.log(fruits);

// // Starting se element Htane ke liye(shift ka use krte h)
// fruits.shift();
// console.log(fruits);

// // Starting Me element Add Krne ke liye(unshift ka use krte h)
// fruits.unshift("Papaya");
// console.log(fruits);

// // Alphabeticly Range Me Short karne ke liye (sort) ka use krte h BUt Ye NO. KO nhi Krega
// // Ye Small Letter Me work NHi Krega
// fruits.sort();
console.log(fruits);


//=========================================================================


// String Formatt Me Krne Ke LIye (toString) Ka Use Krte H

// console.log(Array.isArray(fruits)); // Check Krne Ke LIye ki ye Array h ya nhi (True/False) 
// console.log(typeof fruits); // // Esse Uska Type Pta Chalta H String, Object etc
// let y = fruits.toString();  //
// document.getElementById("demo").innerHTML = y;
// document.getElementById("demo").innerHTML = fruits.join("*"); // join method se 
//                             //Koi Bhi Symbol Hm Bich Me Join Kr Sakte H
       
// console.log(typeof y);

//==========================================================================

// Kisi element ko delet krke ya bina delet kiye Uski Jagah Dusre Element add krna 
let z = fruits.splice(2,2,"Grape","Apricot");
//               //
let a = fruits.slice(3);           
console.log(a);
console.log(fruits);

//=================================================================