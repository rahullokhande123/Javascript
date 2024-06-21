async function Dohomework(){
    return new Promise((resolove,reject)=>{
        setTimeout(()=>{
            let homework=true;
            if(homework){
                resolove("You have complited your work");
            }
            else{
                reject("You have not completed your work");
            }
        },1500);
    });
}
async function havelunch(){
    return new Promise((resolove,reject)=>{
        setTimeout(()=>{
            let lunch = true;
            if(lunch){
                resolove("You have finished your lunch");
            }
            else{
                reject("You have not done your lunch");
            }
        },2000);
    });
}
async function takenrest(){
    return new Promise((resolove,reject)=>{
        setTimeout(()=>{
            let rest = false;
            if(rest){
                resolove("Yes taken rest");
            }
            else{
                resolove("Not taken rest");
            }
        },2500);
    });
}

// async function allworkdone(){
//     const dohomework= await Dohomework();
//     console.log(dohomework);

//     const lunchresult=await havelunch();
//     console.log(lunchresult);

//     const restresult=await takenrest();
//     console.log(restresult);

//     console.log("All tasks are finished");
// }
// allworkdone();

async function allworkdone(){
    let show1= await Dohomework();
    console.log(show1);

    let show2 =await havelunch();
    console.log(show2);

    let show3 = await takenrest();
    console.log(show3);

    console.log("All work done");
}
allworkdone();