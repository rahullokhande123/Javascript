document.getElementById("demo").innerHTML = "Hello Frinds";
document.write("<h2>This is a Cybrom</h2><p> lorem </p>");
document.getElementById("demo").style.backgroundColor = "red";
// ======================= Backtics ======================

let fname = "Rahul";
let lname = "Lokhande";

// -------> Normal Way.
document.getElementById("demo").innerHTML = "Hello" + " " + fname + " " + lname + " " + "Wellcome to cybrom";

//------> In Backtics.
document.getElementById("demo").innerHTML = `Hello ${fname},${lname}, "wellcome to cybrom"`;

// ==================================================================

function display(){
    document.getElementById("demo2").style.backgroundColor = "gray";
    document.getElementById("demo2").style.color = "black";
    document.getElementById("demo2").style.border = "2px solid black"
    document.getElementById("demo2").style.fontSize = "30px";
    document.getElementById("demo2").innerHTML = `
        <table>
        <tr>
        <th>Name</th>
        <th>Course</th>
        <th>City</th>
        </tr>


        <tr>
        <td>Johan</td>
        <td>Javascript</td>
        <td>Bhopal</td>
        </tr>


        <tr>
        <td>Brad Smith</td>
        <td>React</td>
        <td>Indore</td>
        </tr>
        </table>
`
}
// ==================================================================
function display2(){
    document.getElementById("demo3").style.backgroundColor = "black";
    document.getElementById("demo3").style.color = "white";
    document.getElementById("demo3").style.border = "2px dotted white"
    document.getElementById("demo3").style.borderRadius = "10px";
};

// ==========================================
// function display2(){
//     let x = document.getElementById("demo3");
//     x.style.backgroundColor = "black";
//     x.style.color = "white";
//     x.style.border = "2px dotted white"
//     x.style.borderRadius = "10px";
// };