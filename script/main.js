var youwon="YOU WON!";
var aiwon="YOU LOST!";
var round=0;
var RPS=["rock","paper","scissors"];
var yourpoint=0;
var aipoint=0;
var turn="your turn!";
var start=false;

function AIchoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    turn="Computer Chose " + RPS[randomNumber-1];
        
        return RPS[randomNumber-1];
}

function paper(){

    if(round<5 && start){
     round++;       
        var AI=AIchoice();
        document.getElementById('turn').innerHTML=turn;
        
            if(AI=="rock"){
                yourpoint++;
            }else if(AI=="scissors"){
                aipoint++;  
            }

            document.getElementById('yourpoint').innerHTML=yourpoint;
            document.getElementById('aipoint').innerHTML=aipoint;

    }
    if(round==5){
            endgame();
        }
}

function rock(){

    if(round<5 && start){
     round++;   
        var AI=AIchoice();
        document.getElementById('turn').innerHTML=turn;
        
            if(AI=="scissors"){
                yourpoint++;
            }else if(AI=="paper"){
                aipoint++;  
            }

            document.getElementById('yourpoint').innerHTML=yourpoint;
            document.getElementById('aipoint').innerHTML=aipoint;
        
    }
    if (round==5) {
         
                endgame();
        }
}

function scissors(){

    if(round<5 && start){
     round++;        
        var AI=AIchoice();
        document.getElementById('turn').innerHTML=turn;
        
            if(AI=="paper"){
                yourpoint++;
            }else if(AI=="rock"){
                aipoint++;  
            }

            document.getElementById('yourpoint').innerHTML=yourpoint;
            document.getElementById('aipoint').innerHTML=aipoint;

    }
    if(round==5){
            endgame();
    }
}

function endgame(){

    if(aipoint>yourpoint){
        
        document.getElementById('winner').innerHTML=aiwon;
        document.getElementById('winner').style.color='red';

    }else if(aipoint<yourpoint){

        document.getElementById('winner').innerHTML=youwon;
        document.getElementById('winner').style.color='#4EFF22';

    }else if(start){

        document.getElementById('winner').innerHTML="DRAW";
        document.getElementById('winner').style.color='white';

    }

    if (round==5){
        document.getElementById('start').innerHTML="PLAY AGAIN"
    }
}

function startgame(){
    start=true;
    round=0;
    document.getElementById('start').innerHTML="RESTART"  
    document.getElementById('winner').innerHTML="Rock Paper Scissors";
    document.getElementById('winner').style.color='white';
    aipoint=0; yourpoint=0;
    document.getElementById('yourpoint').innerHTML=yourpoint;
    document.getElementById('aipoint').innerHTML=aipoint;
    document.getElementById('turn').innerHTML="Your Turn !";
}