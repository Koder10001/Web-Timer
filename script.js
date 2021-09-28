var timeStart;
var isBlur = false;
var interval = 300;
window.onblur = ()=>{
    timeStart = Date.now();
    isBlur = true;
    setText();
}
window.onfocus = ()=>{
    isBlur = false;
    setText();
}
function setText(){
    let timer = document.querySelector("#timer");
    timer.innerHTML = parseInt((Date.now() - timeStart)/1000) + "s";
    if(isBlur){
        setTimeout(setText,interval)
    }
}
