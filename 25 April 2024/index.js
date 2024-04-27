// ======================== Strings ===========================
//=================== Length Methode ==================
const mypara= "I m Rahul Lokhande ";
console.log(mypara.length);

//=================== Slice Methode ==================
// let x = mypara.slice(7,10);
// x= mypara.slice(7);
// x= mypara.slice(-19,-1);
// console.log(x);  // Esme Ye last element ko nhi print Krta H

// // //=================== Substring Methode ==================
// x= mypara.substring(7,30); //
// x= mypara.substring(7)
// x= mypara.substring(-19,-1); // Esme -wali value ko nhi dega uski jagah vo 0 se count krta h
// console.log(x);
// //=================== Replace Methode ==================
// x= mypara.replace("Rahul","arun");
// x= mypara.replaceAll("Rahul","arun"); // Replace All Se Pure Para Ka Me jitne bhi rahul hoge unko sabko vo replace kr dega
// console.log(x);
//=================== Replace Methode with regular expration ==================
// x= mypara.replace("rahul","arun");
// x= mypara.replaceAll(/rahul/gi,"arun"); // gi-globaly cash censtive
// console.log(x);

// //=================== To UperCase-LowerCase Methode ==================
const myname= "johan doe";
console.log(myname.toUpperCase());
const subject= "JAVASCRIPT";
console.log(subject.toLocaleLowerCase());

// //=================== Concat Methode ==================
// const newstring = myname + " " + subject;
// const newstring = `${myname} ${subject}`;
const newstring = myname.concat(" ",subject);
console.log(newstring);
