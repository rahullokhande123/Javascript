// async function fun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("I'm studing");
//         },2000);
//     })
// }
// async function fun2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("in JavaScript");
//         },2000);
//     })
// }
// async function allfun(){
//     const show1= await fun1();
//     console.log(show1);

//     const show2 = await fun2();
//     console.log(show2);

//     console.log("Task Complete");
// }
// allfun();

// ====================== Promise Value Return In Array ===================
async function asy1(){
    let pr1 = new Promise((resole,reject)=>{
        resole("I'm devoloper");
    })
    let pr2 = new Promise((resole,reject)=>{
        resole("I want to");
    })
    let pr3 = new Promise((resole,reject)=>{
        resole("Erne Money");
    })

    const awa1 = await pr1;
    const awa2 = await pr2;
    const awa3 = await pr3;

    return [awa1,awa2,awa3];
}
async function display(){
    let store=await asy1();
    console.log(store);
}
display();

