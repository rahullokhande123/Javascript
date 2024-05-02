let arr = ["https://static.vecteezy.com/system/resources/previews/026/989/169/large_2x/hot-air-balloon-of-a-beautiful-transportation-with-futuristic-design-ai-generated-photo.jpg",
"https://static8.depositphotos.com/1491329/1068/i/450/depositphotos_10687188-stock-photo-foggy-landscape-early-morning-mist.jpg",
"https://c4.wallpaperflare.com/wallpaper/1020/859/762/beautiful-girl-woman-model-flag-of-usa-wallpaper-thumb.jpg"];

let count=0;
function slider(arg){
    if(arg=='left'){
        if(count <1){
            document.getElementById('im').src = arr[0];
        }
        else if(count==1){
            document.getElementById('im').src =arr[0];
            count--;
        }
        else if(count==2){
            document.getElementById('im').src =arr[1];
            count--;
        }
    }
    else if(arg=='right'){
        if(count==0){
            document.getElementById('im').src = arr[1];
            count++;
        }
        else if(count==1){
            document.getElementById('im').src = arr[2];
            count++;
        }
    }
}