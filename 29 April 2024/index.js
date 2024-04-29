function chalja(){
    setTimeout(loader,3000);
    // It is a Higher Order Functionl.
}
const loader=()=>{
    document.querySelector('#mainweb').style.display="block";
    document.querySelector('#imgs').style.display="none";
};