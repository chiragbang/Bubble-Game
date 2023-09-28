let rh = " ";
let score = 0;
let timer = 60;

function runTimer(){
    var timeInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#TimerVal").textContent = timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML = `<h2>Game Over</h2>`
            clearInterval(timeInt)
        }
    }, 1000);
}

function makeBubble() {
    var clutter = " ";

    for (var i = 1; i <= 114; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div id="bubble">${rn}</div>`
        document.querySelector("#pbtm").innerHTML = clutter;
    }
}

function newHit(){
    rh = Math.floor(Math.random()*10)
    document.querySelector("#HitVal").textContent = rh;
}

function increaseScore(){
    score += 10;
    document.querySelector("#ScoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent)
    if(clickedNum === rh){
        increaseScore();
        newHit();
        makeBubble();
    }
})



runTimer();
newHit();
makeBubble();

