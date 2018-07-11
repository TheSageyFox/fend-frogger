// // Enemies our player must avoid
// var Enemy = function() {
//     // Variables applied to each of our instances go here,
//     // we've provided one for you to get started

//     // The image/sprite for our enemies, this uses
//     // a helper we've provided to easily load images
//     this.sprite = 'images/enemy-bug.png';
// };

// // Update the enemy's position, required method for game
// // Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
//     // You should multiply any movement by the dt parameter
//     // which will ensure the game runs at the same speed for
//     // all computers.
// };

class Enemy{
    constructor(){
        this.sprite = 'images/enemy-bug.png';
    }
   // // Update the enemy's position, required method for game
// // Parameter: dt, a time delta between ticks 
    update(dt){
        // You should multiply any movement by the dt parameter
//     // which will ensure the game runs at the same speed for
//     // all computers.
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
// let bugOne = new Enemy;
// This class requires an update(), render() and

class PlayerOne{
    constructor(){
        this.x = 200; 
        this.y = 400;
        this.sprite = 'images/char-boy.png';
    }
    update(){
        
    //     //check collisions
    //     // let bug = enemyArray;
    //     // let player = this;
    //     //  if ((bug.x < player.x + player.width) && (bug.x + bug.wdith > player.x) && ( bug.y < player.y + player.height) && (bug.height + bug.y > player.y)){
    //     //     this.x = 200;
    //     //     this.y = 400;
    //     //  }


    //     //****check for win*****
    //     // if(this.y>=400){
    //     //     resetPlayerOne();
    //     // }
        
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
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
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
