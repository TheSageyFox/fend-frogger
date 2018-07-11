class Enemy{
    constructor(speed, y){
        this.x = 0;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    }
    update(dt){
        this.x += this.speed * dt;
        if(this.x >= 500){
            this.x = 0;
        };
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
let bugOne = new Enemy(200, 50);
let bugTwo = new Enemy(100, 140);
let bugThree = new Enemy(75, 230);
// This class requires an update(), render() and

class PlayerOne{
    constructor(){
        this.x = 200; 
        this.y = 400;
        this.sprite = 'images/char-boy.png';
    }
    update(){
        
        //check collisions
        // let player = this;
        //  if ((baddie.x < player.x + player.width) && (baddie.x + baddie.wdith > player.x) 
        //     && ( baddie.y < player.y + player.height) && (baddie.height + baddie.y > player.y)){
        //     this.x = 200;
        //     this.y = 400;
        //  };


        if(this.y <= -50){
            this.x = 200;
            this.y = 400;
            alert("You win good job!");
        }

        
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(pressedKey){
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

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
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
let player = new PlayerOne;
