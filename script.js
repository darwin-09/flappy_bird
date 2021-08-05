let gameContainer = document.getElementById("game-container");
// var gameObstacle = document.getElementById("obstacle");
let bird = document.getElementById("bird");
let skyContainer = document.getElementById('sky');
let birdBottomPosition = 200;
let birdLeftPosition = 100;
let gravity = 2; 
let randomHeight;
let score = document.getElementById('score');
let scoreCounter = 0;

let flappyBird = {
    x_pos: 100,
    y_pos: 200
}

let obstacle = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: 500
}



function gameDisplay() {
    gameContainer.style.height = window.innerHeight + "px";
    flappyBird.y_pos -= gravity;
    bird.style.bottom = flappyBird.y_pos + "px";
    bird.style.left = flappyBird.x_pos + "px"; 
    bird.style.transform = "rotate(0deg)"
}


function gameOver() {
    if (flappyBird.y_pos <= 0) {
        // alert("game over!");
        flappyBird.x_pos = 200
        location.reload();
    }
    

}


function generateObstacle() {
    let obstacle = document.createElement('div');
    let randomHeight = Math.ceil(Math.random() * 200) + 500;
    obstacle.classList.add('obstacle');
    obstacle.id = "obstacle";
    skyContainer.appendChild(obstacle);
    obstacle.height = randomHeight;
    obstacle.style.height = randomHeight + "px";
    setInterval(moveObstacle, 50);
}



function moveObstacle() {
    randomHeight = Math.ceil(Math.random() * 200) + 200;
    obstacle.right += 10;
    document.getElementById('obstacle').style.right = obstacle.right + "px"

    if (obstacle.right >= 650) {
        obstacle.right = 0; // stops from adding many div
       
        console.log(randomHeight);
        console.log(flappyBird.x_pos);
        
        document.getElementById('obstacle').style.height = randomHeight + "px"
        document.getElementById('obstacle').style.right = obstacle.right + "px"
        // skyContainer.removeChild(obstacle);
    }
    
}

generateObstacle();


function gameLoop() {
    gameDisplay();
    gameOver(); 

    if (flappyBird.y_pos < randomHeight && obstacle.right >= 475 && obstacle.right <= 550) {
        flappyBird.x_pos = 200
        location.reload();
    } else if (flappyBird.y_pos > randomHeight && obstacle.right >= 475 && obstacle.right <= 480 ) {
        scoreCounter++;
        score.innerHTML = scoreCounter;
    }
}


document.onkeydown = (e) => {
    if (e.key == " " && flappyBird.y_pos < 700) {
        flappyBird.y_pos  += 50;
        bird.style.transform = "rotate(-25deg)"
        console.log(flappyBird.y_pos)
    }
}
 

setInterval(gameLoop, 30);

