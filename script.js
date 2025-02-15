function makeBubbles(){
    var clutter = "";

    for(var i =1; i<=89; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#botcont").innerHTML = clutter;
}


var score = 0;
var hitrn = 0;
var timer = 60;


function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


function scoreBoard(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function changeScore(){
    document.querySelector("#botcont").addEventListener("click", function(a){
        var clickednum = (Number(a.target.textContent));
        if(clickednum == hitrn){
            scoreBoard();
            makeBubbles();
            getNewHit();
        }
    });
    
}


function runTimer(){
    var time = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerInterval").textContent = timer;
        }
        else{
            // clearInterval(time);
            document.querySelector("#botcont").innerHTML = `<h1>Game Over</h1> 
            <p>Total Score : ${score}</p> 
            <button id="playAgainButton" style="height: 60px; width: 150px; cursor: pointer; color:rgb(14, 97, 148); background-color:  rgb(156, 209, 242); 
            border: white; font-size: 20px; border-radius: 30px;"> Play Again </button>`;
        }
    }, 1000);
}


makeBubbles();
getNewHit();
runTimer();
changeScore();