const mypara = "Apple,Graps,Watermelan,apple,mango";
console.log(mypara.charAt(16));
console.log(mypara.charCodeAt(0));// Esse UTF code provide krta h
let x = mypara.split(","); // Yaha String Se Array Me Convert Krta H Or Array To String Ke LIye -> toString
console.log(x); 
let y = mypara.indexOf("Graps"); //Show Index No. Of Anny Caracter
console.log(y);
// includes
x= mypara.includes("Watermelan"); // True Or False Btat H Ki Ye Word Hai Ya Nhi 
                         //Or WO BHi Correct Hona Chahiye tb true dega nhi to false dega
console.log(x);

// ==================Search=============
x= mypara.search("Graps");  // Same Of indexof
console.log(x);

// match
x= mypara.match(/Apple/gi); // show of matching word in array formet
console.log(x);
