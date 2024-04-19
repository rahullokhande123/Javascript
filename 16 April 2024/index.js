//================= Point Value ======================
// let x = Math.trunc(15.66);
//=============== Point Value ========================
// let x = Math.sign(45); // return 1
// let x = Math.sign(-45); // return -1
// let x = Math.sign(0); // return 0
//================== Power Of ==========================
// let x = Math.pow(1,1000);
//================== Sqr No. =============================
// let x = Math.sqrt(64);
//================= abc nagativ to positiv  no. =========
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
// const count = ()=>{
//     let name= "Rahul";
//     let lname= "Lokhande";
//         console.log(name,lname);
// };
// count();
// document.getElementById("demo2").innerHTML= `Hellow, ${name} ${lname} Wellcome To Cybrom`;
//======================================================================
let num;
const show = ()=>{
    if(num>10 && 100>num){
        let num= (Math.random()*100)+1;
        console.log(num);
    }
}
document.getElementById("demo2").innerHTML = num;
