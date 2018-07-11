//Enemy class for bug creation 
class Enemy{
    constructor(speed, y){
        this.x = 0; 
        this.y = y; 
        this.speed = speed; //rate at which the bug travels across the screen
        this.sprite = 'images/enemy-bug.png';
    }
    update(dt){
        this.x += this.speed * dt;
        if(this.x >= 500){ //resets the enemies' location after clearing the screen.
            this.x = 0;
        };
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }   
}


//checks for collision of the bugs and player using the pythagorean theorem to judge distance between the objects. 
//Information and the basis of this code was found at: 
// https://www.youtube.com/watch?v=XYzA_kPWyJ8
function checkCollisions(x1,y1,x2,y2){
    let pt = Math.sqrt(Math.pow((x2-x1),2)+ Math.pow((y2-y1),2));
    if (pt<= 50){
        player.x=200;
        player.y=400;
    };
}
//Player class - Set for Player One, as there is a planed implementation for another player later.
class PlayerOne{
    constructor(){
        this.x = 200; 
        this.y = 400;
        this.sprite = 'images/char-boy.png';
    }
    update(){ //checks for winning conditions, TODO: change alert into modal.
        if(this.y <= -50){
            alert("You win! Congratulations!!");
            this.x = 200;
            this.y = 400;
        }        
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(pressedKey){ //allows for the player to move their piece using the arrow keys
        if((this.x >= 0 && this.x <= 400) && (this.y <= 400)){
            if((pressedKey === 'left')&&(this.x > 99)){
                this.x -=100;
            }else if((pressedKey === 'right')&&(this.x < 399)){
                this.x +=100;
            }else if(pressedKey === 'up'){
                this.y -= 90;
            }else if((pressedKey === 'down')&&(this.y < 399) ){
                this.y += 90;
            }else{
                this.x+=0;
                this.y+=0;
            } 
            }
        };        
} //end of PlayerOne class
let bugOne = new Enemy(200, 50);
let bugTwo = new Enemy(100, 140);
let bugThree = new Enemy(75, 230);
let player = new PlayerOne;
let allEnemies=[bugOne, bugTwo, bugThree];

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

