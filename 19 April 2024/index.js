//  const x = new Date();
// const y= new Date(year,month,day,hours,minutes,seconds,milliseconds);
// const y = new Date (2018,1,28,14,33,18,5);
// const y = new Date (2018,1,28,14,33,18,); 
// const y = new Date (2018,1,28,14,33,);
// const y = new Date (2018,1,28,14,);
// const y = new Date (2018,1,28,);
// const y = new Date (2018,1,);
// const y = new Date (2022);
// const y = new Date (99,6,7);
// const y = new Date ("November 24, 2018 10:34:50");
// const y = new Date (1000000000000);
// const y = new Date (-1000000000000); // ager millisecond's ko - me denge to vo 1970 se - ki date time dega.
const y = new Date();
// const z = y.getFullYear();
const months = ['January','Feb','March','April','May','JUne','July','August','September','October','November','December'];
// const z = y.getMonth();
console.log(months[0]);
const d = months[y.getMonth()];
// document.getElementById("demo").innerHTML = y.toString();
// document.getElementById("demo").innerHTML = y.toUTCString();
// document.getElementById("demo").innerHTML = z;
document.getElementById("demo").innerHTML = d;