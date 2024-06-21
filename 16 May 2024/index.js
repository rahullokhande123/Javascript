


// It's Callback Function========================================================

function myDisplayer(something){
    document.getElementById("demo").innerHTML = something;
}
function myCalculator(num1,num2,xyz){
       let sum=num1+num2;
       xyz(sum);
}
myCalculator(5,5,myDisplayer);


// ====================================Asynchronous===========================================

// ++++++++++++++++++++++++++ Asynchronous Example(SetTimeout) =================================

console.log("Johan");
setTimeout(myfunction,3000);
console.log(34);
function myfunction(){
    document.getElementById("demo2").innerHTML = "I'm from Bhopal";
    
}

// +++++++++++++++++++++++++ Asynchronous Example(SetInterval) =================================

setInterval(myfunction, 1000);
function myfunction(){
    let d= new Date();
    document.getElementById("demo").innerHTML= d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
}


