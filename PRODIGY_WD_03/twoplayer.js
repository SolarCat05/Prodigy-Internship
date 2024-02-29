var boxs=document.querySelectorAll("input");
var stat=document.querySelector(".status");


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


var player1,player2,currentplayer,currentplayername;
var running=false;

chooseMarker();


function chooseMarker(){
    $('.modalbox').removeClass('hidden');
    $('.choose-option').addClass('animated bounceInUp');
    
    $('.button-area span').click(function() {
      var marker = $(this).text();
      player1 = (marker === 'X' ? 'X' : 'O');
      player2 = (marker === 'X' ? 'O' : 'X');
      currentplayer=player1;
      currentplayername="Player 1"
      //console.log("Player 1 is"+player1+" and Player 2 is"+player2);
      //console.log("\n And the current player is "+currentplayer);
  
      $('.choose-option').addClass('animated bounceOutDown');
      setTimeout(function() {
        $('.modalbox').addClass('hidden');
        init();
      }, 700);
    });
}

function init(){
    boxs.forEach(box=>box.addEventListener("click",putfunc));
    stat.textContent=`${currentplayername}'s TURN`;
    running=true;
}

function putfunc(){
    if(currentplayer===player1){
        this.value=player1;
        this.disabled=true;
    }
    else{
        this.value=player2;
        this.disabled=true;
    }
    checkStatus();
}

function changePlayer(){
    currentplayer=(currentplayer===player1)? player2 : player1;
    currentplayername=(currentplayername == "Player 1")? "Player 2":"Player 1";
    stat.textContent=`${currentplayername}'s TURN`;
}

function gameRestart() { 
    boxs.forEach(box=>box.value="");
    boxs.forEach(box=>box.disabled=false);
    location.reload();
}


function checkStatus() {
    if(one.value=="O" && two.value=="O" && three.value=="O" || four.value=="O" && five.value=="O" && six.value=="O" || seven.value=="O" && eight.value=="O" && nine.value=="O" ||
    one.value=="O" && four.value=="O" && seven.value=="O" || two.value=="O" && five.value=="O" && eight.value=="O" || three.value=="O" && six.value=="O" && nine.value=="O" ||
    one.value=="O" && five.value=="O" && nine.value=="O" || three.value=="O" && five.value=="O" && seven.value=="O"){
        if(player1=="0"){
            endGameMessage(currentplayername);
            running=false;
        }
        else{
            endGameMessage(currentplayername);
            running=false;
        }
    }
    else if(one.value=="X" && two.value=="X" && three.value=="X" || four.value=="X" && five.value=="X" && six.value=="X" || seven.value=="X" && eight.value=="X" && nine.value=="X" ||
    one.value=="X" && four.value=="X" && seven.value=="X" || two.value=="X" && five.value=="X" && eight.value=="X" || three.value=="X" && six.value=="X" && nine.value=="X" ||
    one.value=="X" && five.value=="X" && nine.value=="X" || three.value=="X" && five.value=="X" && seven.value=="X"){
        if(player1=="X"){
            endGameMessage(currentplayername);
            running=false;
        }
        else{
            endGameMessage(currentplayername);
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

function endGameMessage(message){
    console.log(message);
    if(message=="Game Tied"){
        $('.end-game-message').text("Game Tied");
    }
    else{
        $('.end-game-message').text(message+" Wins!");
    }
    $('.choose-option').addClass('hidden');
    $('.modalbox').removeClass('hidden');
    $('.end-game').removeClass('hidden').addClass('animated bounceInUp'); 
}
