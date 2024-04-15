// let name = prompt("Name");
// let course = prompt("course");
// let city = prompt("City");
// console.log(name,course,city);
// ============================================
function show(){
    let name = prompt("Name");
    let course = prompt("course");
    let city = prompt("City");
    console.log(name,course,city);
    document.getElementById("demo4").innerHTML = course;  
}
function show2(){
    // const x=document.getElementById("demo2").innerHTML = "Rahul";
    // const y=document.getElementById("dem2").innerHTML = "BBA";
    // const z=document.getElementById("demo2").innerHTML = "Bhopal";
    let x = 'Rahul';
    let y = 'React';
    let z = 'Bhopal';
    document.getElementById("demo2").innerHTML = x + " " + y + " " + z;
      
}

//======================= In Backtics Fome =====================
function show2(){
    // const x=document.getElementById("demo2").innerHTML = "Rahul";
    // const y=document.getElementById("dem2").innerHTML = "BBA";
    // const z=document.getElementById("demo2").innerHTML = "Bhopal";
    let x = 'Ram';
    let y = 'React';
    let z = 'Bhopal';
    document.getElementById("demo3").innerHTML = `${x} ${y} ${z}`;
      
}


// Home Work ---> Function , Arrow Function , Events From AddEventLisner
// What Is Hoisting Topic