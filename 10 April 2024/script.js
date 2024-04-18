//================= If/ Else ======================

// let marks = prompt("enter marks");
// if(marks>90){
//    console.log('Excellent');
// }
// else if(marks>60 && marks<90){
//     console.log("Good");
// }
// else {
//     console.log("Work Harder")
// }

//========================== Switch Statment ================================
let day;
const date = new Date();
console.log(date.getMonth());
switch (date.getDay()){
    case 0:
    day = "sunday";
    break;
    case 1:
    day = "monday";
    break;
    case 2:
    day = "tuesday";
    break;
    case 3:
    day = "wednesday";
    break;
    case 4:
    day = "thursday";
    break;
    case 5:
    day = "friday";
    break;
    case 6:
    day = "saturday";
    break;
    default:
        day = "not valid";
        break;
}
console.log(day);
document.getElementById("demo").innerHTML = day;

// ========================= Loop ==========================
let i;
let text = " ";
for( i=0;i<=10;i++){
    console.log(i);
    text += i+ "<br>";
    document.getElementById("demo").innerHTML = text;
}
//============== for in =================
const person= {
    fname: "Rahul",
    lname: "Lokhande",
    age: "24",
    city: "Bhopal",
};
let text1 = "";
for(let x in person){
    text += person[x] + "<br>";
    document.getElementById("demo").innerHTML = text;
}

// What is foren

