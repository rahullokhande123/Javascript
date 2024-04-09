function validate(){
    let myname = document.f1.nm.value;
    let mycity = document.f1.city.value;
    alert(myname + " " + mycity);
    if(myname == ""){
        alert("Enter Your Name");
        document.f1.nm.focus();
        return false;
    }
}
// ==========================================================
function display(){
    let num =prompt("Enter Number");
    num1=num*num*num;
    document.getElementById("demo").innerHTML = num1;

}
//===========================================================
