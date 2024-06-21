let promise=new Promise((resolve,reject)=>{
    let something = true;
    if (something){
        resolve("Successfull");
    }
    else{
        reject("It is rejected");
    }
});
console.log(promise);
promise.then((res)=>{
    console.log(res);
    // alert(res);
    document.getElementById("demo").innerHTML = res;
})
.catch((err)=>{
    console.log(err);
});

//========================== Async await Mothed =============================
// 
async function myDispaly(){
    let myPromise = new Promise(function(resolve){
        resolve("I Love JavaScript !!");
    });
    document.getElementById('demo2').innerHTML = await myPromise;
}
myDispaly();

