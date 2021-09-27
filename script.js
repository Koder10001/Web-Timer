var timeStart;
var isBlur = false;
var interval = 500;
window.onblur = ()=>{
    timeStart = Date.now();
    isBlur = true;
    setTimeout(setText,interval)
}
window.onfocus = ()=>{
    isBlur = false;
}
function setText(){
    if(isBlur){
        let timer = document.querySelector("#timer");
        timer.innerHTML = parseInt((Date.now() - timeStart)/1000) + "s";
    }
    setTimeout(setText,interval)
}
