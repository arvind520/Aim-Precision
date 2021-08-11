var box = document.querySelector('#playArea');
var maxHeight = box.clientHeight;
var maxWidth = box.clientWidth;
console.log(maxHeight+" "+maxWidth);

var intervalIdvar;
var disappearingTime; 

var scoreCounter = 0;
var score = document.getElementById("score");

var time = document.getElementById("time");
var timer=60;
var timecounter=0;
var timeIntervalId; 


function start(){
    scoreCounter = 0;
    timer=60;
    timecounter=0;
    timeIntervalId = setInterval(()=>{
        timecounter++;
        time.innerHTML = `${timer-timecounter}s`;
        if((timer-timecounter)==0){
            clearInterval(timeIntervalId);
            clearInterval(intervalId);
            clearInterval(disappearingTime);
        }
    }, 1000);
    intervalId = setInterval(function(){
                    // Math.floor(Math.random() * ((maxHeight-50) - min + 1)) + min
                    let Rtop = parseInt(Math.random()* ((maxHeight-50)-50)+50);   // 0+50 to maxHeight-50
                    let Rleft = parseInt(Math.random()* ((maxWidth-50)-50)+50);
                
                    let div = document.createElement("div");
                    div.style.width = "50px"; 
                    div.style.height = "50px"; 
                    div.style.borderRadius = "50%";
                    div.style.backgroundColor = "yellow";
                    div.style.position = "absolute";
                    div.style.top = Rtop+"px";
                    div.style.left = Rleft+"px";
                    div.className +='circle';
                    box.appendChild(div); 

                    
                    // console.log(score);

                    disappearingTime = setTimeout(function(){      //for removing newly created circle
                        box.removeChild(div);
                        scoreCounter-=10;
                       

                        if(scoreCounter < 0){
                            score.style.color = "#FF0000";
                        }
                        
                        // score.classList.remove +="green";
                        // score.classList.add +="red";

                        score.innerHTML=scoreCounter;
                    },1400);

                    if(div.addEventListener('click', function(){
                        box.removeChild(div);
                        scoreCounter+=10;
                        
                        
                        if(scoreCounter >= 0){
                            score.style.color = "#00FF00";;
                        }
                        // score.classList.remove +="green";
                        // score.classList.add +="red";

                        score.innerHTML=scoreCounter;
                    }));
                    
                    // console.log(Rtop+"px"+" "+Rleft+"px");
                }, 1500);
}

function stopGame(){
    clearInterval(intervalId);
    clearInterval(timeIntervalId);
    clearInterval(disappearingTime);
    timecounter=0;
    time.innerHTML = `${timer-timecounter}s`;
    scoreCounter=0;
    // score.style.color += "black";
    score.innerHTML=scoreCounter;
    
    let childDiv = document.querySelector('.circle');
    childDiv.parentNode.removeChild(childDiv);
}