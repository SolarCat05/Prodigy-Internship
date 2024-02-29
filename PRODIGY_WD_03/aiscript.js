var boxs=document.querySelectorAll("input");
var stat=document.querySelector(".status");
var modal=document.querySelector(".modalbox");

//SELECTING ALL THE BOXES
const one=document.querySelector("#one");
const two=document.querySelector("#two");
const three=document.querySelector("#three");
const four=document.querySelector("#four");
const five=document.querySelector("#five");
const six=document.querySelector("#six");
const seven=document.querySelector("#seven");
const eight=document.querySelector("#eight");
const nine=document.querySelector("#nine");
//-----------------------------------

let arrayBox=[one.value,two.value,three.value,four.value,five.value,six.value,seven.value,eight.value,nine.value];
 console.log(arrayBox);

var running=false;
 var player,cpu, currentPlayer;

chooseMarker();

function chooseMarker(){
    modal.classList.remove("hidden");
    $('.choose-option').addClass('animated bounceInUp');
    
    $('.button-area span').click(function() {
      var marker = $(this).text();
      player = (marker === 'X' ? 'X' : 'O');
      cpu = (marker === 'X' ? 'O' : 'X');
      console.log("Player choose :"+player+"\n CPU is then :"+cpu);
      currentPlayer=player;
  
      $('.choose-option').addClass('animated bounceOutDown');

      setTimeout(function() {
        modal.classList.add("hidden");
        init();
      }, 700);
    });
}

function init(){
    boxs.forEach(box=>box.addEventListener("click",playerPutFunc));
    running=true;
}

function playerPutFunc(){
    if(player=="X"){
        this.value="X";
        this.disabled=true; 
        arrayBox=[one.value,two.value,three.value,four.value,five.value,six.value,seven.value,eight.value,nine.value];    }
    else{
        this.value="O";
        this.disabled=true;
        arrayBox=[one.value,two.value,three.value,four.value,five.value,six.value,seven.value,eight.value,nine.value];
    }
    checkStatus();
}


// // -----------------------CHECK THE STATUS--------------
function checkStatus() {
    if(one.value=="O" && two.value=="O" && three.value=="O" || four.value=="O" && five.value=="O" && six.value=="O" || seven.value=="O" && eight.value=="O" && nine.value=="O" ||
    one.value=="O" && four.value=="O" && seven.value=="O" || two.value=="O" && five.value=="O" && eight.value=="O" || three.value=="O" && six.value=="O" && nine.value=="O" ||
    one.value=="O" && five.value=="O" && nine.value=="O" || three.value=="O" && five.value=="O" && seven.value=="O"){
        if(player=="0"){
            endGameMessage();
            running=false;
        }
        else{
            endGameMessage();
            running=false;
        }
    }
    else if(one.value=="X" && two.value=="X" && three.value=="X" || four.value=="X" && five.value=="X" && six.value=="X" || seven.value=="X" && eight.value=="X" && nine.value=="X" ||
    one.value=="X" && four.value=="X" && seven.value=="X" || two.value=="X" && five.value=="X" && eight.value=="X" || three.value=="X" && six.value=="X" && nine.value=="X" ||
    one.value=="X" && five.value=="X" && nine.value=="X" || three.value=="X" && five.value=="X" && seven.value=="X"){
        if(player=="0"){
            endGameMessage();
            running=false;
        }
        else{
            endGameMessage();
            running=false;
        }
    }
    else  if(one.value!="" && two.value!="" && three.value!="" && four.value!="" && five.value!="" && six.value!="" && seven.value!="" && eight.value!="" && nine.value!="" ){
        var gameTied="Game Tied";
        endGameMessage(gameTied);
        running=false; 
    }
    else{
        changePlayer();
    }   
}


// -------------CHANGE THE PLAYER------------------------
function changePlayer(){
    currentPlayer=(currentPlayer===player)? cpu:player;
    if(currentPlayer===cpu){
        aiTurn();
    }
}

function aiTurn(){
    //var move=minmax();
    var value=minmax(arrayBox,cpu);
    return value;
    checkStatus();
}

function minmax(array,cpu){
    var i=0;
    var x=arrayBox[i];
    if(x==""){
        if()
    }
    

}

function availableSpots(){

}


// //----------------END GAME MESSAGE---------------------------
// function endGameMessage(message){
//     console.log(message);
//     if(message=="Game Tied"){
//         $('.end-game-message').text("Game Tied");
//     }
//     else{
//         $('.end-game-message').text("You Win!");
//     }
//     $('.choose-option').addClass('hidden');
//     $('.modalbox').removeClass('hidden');
//     $('.end-game').removeClass('hidden').addClass('animated bounceInUp'); 
// }

// //RESTART -----------------------------------------------
// function gameRestart() { 
//     boxs.forEach(box=>box.value="");
//     boxs.forEach(box=>box.disabled=false);
//     location.reload();
//  }
