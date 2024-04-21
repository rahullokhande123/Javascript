//================= Point Value ======================
// let x = Math.trunc(15.66);

//=============== Point Value ========================
// let x = Math.sign(45); // return 1
// let x = Math.sign(-45); // return -1
// let x = Math.sign(0); // return 0

//================== Power Of ==========================
// let x = Math.pow(2,4); //Esse Power Calculate Hota H, Esme 1st No. Power Or 2nd No. Base Hota H.

//================== Sqr No. =============================
// let x = Math.sqrt(64); // Ye Output me Squre No. Deta H  

//================= abs nagativ to positiv  no. =========
// let x = Math.abs(-5.67);

//=========== Ceilling No. Up To Top No. ===============
// let x = Math.ceil(15.6);

//================= floor no. down Side ================
// let x = Math.floor(-5.9);

//================= Min (Minnimum No.) =================
// let x = Math.min(5,10,3,50,20);

//================== max (Maximum No.) =================
// let x = Math.max(5,10,3,50,20);

//============ random value ==========================
// let x = Math.random();
// let x = Math.random()*10; // *range no. pr ak range provide kr deta h




// let x = (Math.random()*10)+1;// es method se renge no. bhi aa sakta h
// console.log(x);
// document.getElementById("demo").innerHTML = x;



//======================================================================
let name= "Rahul";
let lname= "Lokhande";

const count = ()=>{
        console.log(name,lname);
};
count();
document.getElementById("demo").innerHTML= `Hellow, <br> ${name} ${lname} <br> Wellcome To Cybrom.`;
//======================================================================
let num;
console.log(num);
const show = ()=>{
    if(num>10 && num <100){
        num= (Math.random()*100)+1;
        console.log(num);
    }
}
document.getElementById("demo2").innerHTML = num;
