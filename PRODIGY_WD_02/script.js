
var num=document.querySelector("#timer");
var ms=0;
var se=0;
var mt=0;


const startbtn=document.querySelector(".start");
const lapbtn=document.querySelector(".lap");

const resumebtn=document.querySelector(".resume");
const resetbtn=document.querySelector(".reset");
const stopbtn=document.querySelector(".stop");

const laptimetext=document.querySelector("#laptext");
const hr=document.querySelector("hr");

resumebtn.classList.add("hidden");
resetbtn.classList.add("hidden");
stopbtn.classList.add("hidden");


const lapt=document.getElementById("lap-times");

function startFunction(){ 
    startTimer=setInterval(updateTimer,10);
    startbtn.classList.add("hidden");
    stopbtn.classList.remove("hidden");
    document.getElementById("lap").disabled=false;
}

function lapFunction(){
    var lap=document.getElementById("timer").innerText;
    laptimetext.classList.remove("hidden"); 
    hr.classList.remove("hidden");   
    const laptime=document.createElement("p");
    laptime.innerText=lap;
    document.getElementById("lap-times").appendChild(laptime);
        
}

function stopFunction(){
    clearInterval(startTimer);
    stopbtn.classList.add("hidden");
    resumebtn.classList.remove("hidden");
    lapbtn.classList.add("hidden");
    resetbtn.classList.remove("hidden");
}

function resetFunction(){
    ms=0;
    se=0;
    mt=0;
    num.innerText="00:00.00";
    clearInterval(startTimer);
    resumebtn.classList.add("hidden");
    resetbtn.classList.add("hidden");
    stopbtn.classList.add("hidden");
    lapbtn.classList.remove("hidden");
    startbtn.classList.remove("hidden");
    laptimetext.classList.add("hidden");
    hr.classList.add("hidden"); 
    document.getElementById("lap").disabled=true;
    const list=document.getElementById("lap-times");
    while(list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }

}

function resumeFunction(){
    stopbtn.classList.remove("hidden");
    resumebtn.classList.add("hidden");
    lapbtn.classList.remove("hidden");
    resetbtn.classList.add("hidden");
    startTimer=setInterval(updateTimer,10);
}


function updateTimer(){
    ms++;
    if(ms<10){
        ms=ms.toString().padStart(2, "0");
        return ms;
    }
    if(ms==100){
        se++;
        ms=0;
        ms=ms.toString().padStart(2, "0");
    }
    if(se<10){
        se=se.toString().padStart(2, "0");
    }
    if(se==60){
        mt++;
        se=0;
    }
    if(mt<10){
        mt=mt.toString().padStart(2, "0");
    }
    num.innerText=`${mt}:${se}.${ms}`;
}
