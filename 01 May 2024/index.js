function slider(){
    setInterval(run,2000);
}
let count = 0;
function run(){
    if(count==0){
        document.getElementById('d2').style.marginLeft = "0px";
        document.getElementById('d2').style.transition= "margin-1s";
        count++;
    }
    else if(count==1){
        document.getElementById('d2').style.marginLeft = "-1400px";
        document.getElementById('d2').style.transition= "margin-1s";
        count++;
    }
    else if(count==2){
        document.getElementById('d2').style.marginLeft = "-2800px";
        document.getElementById('d2').style.transition= "margin-1s";
        count++;
    }
    else if(count==3){
        document.getElementById('d2').style.marginLeft = "-1400px";
        document.getElementById('d2').style.transition= "margin-1s";
        count++;
    }
    else if(count==4){
        document.getElementById('d2').style.marginLeft = "0px";
        document.getElementById('d2').style.transition= "margin-1s";
        count=0;
    }
    
}