let display=document.getElementById("display");
let djoe=document.getElementById("djoe");
let button=Array.from(document.getElementsByClassName("button")

);

button.map(button=>{
    button.addEventListener("click",(e)=>{
        switch(e.target.innerText){
            case "c":
                display.innerText="";
                break;
                case "DEL":
                    display.innerText=display.innerText.slice(0,-1);
                    break;
                    case "=":
                        display.innerText=eval(display.innerText)
                        break;
            default:
                display.innerText+=e.target.innerText;

        }

    })
})

djoe.addEventListener("click", djoe2);
let music=document.getElementById("music")
let play=document.getElementById("play")
let counter=0;

function djoe2(){
    if(counter==0){
        counter=1;
       music.play();

    }else{
        counter=0;
        music.pause();
    }

    
}