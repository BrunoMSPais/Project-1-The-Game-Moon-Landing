class Game {
    constructor(canvas) {
        this.canvas = document.querySelector('canvas');
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.landingarea = new Landingarea(this);
        this.target = new Target(this);
        this.gameover = new Gameover(this);
        this.player = new Player(this);
        this.controls = new Controls(this);
        this.controls.setControls();
        this.end = false;
    }
    //Drawing
    draw(timestamp) {
        this.clearAll();
        //DRAW THE LANDING AREA
        this.landingarea.draw();
        //DRAW TARGET LANDING AREA
        this.target.draw();
        //SHOW PLAYER
        this.player.draw();
        this.update(timestamp);
        this.gameover.lose();
        this.gameover.win();
        const animation = window.requestAnimationFrame(timestamp => this.draw(timestamp));
        if (this.end) {
            window.cancelAnimationFrame(animation);
        }
    }
    //Updating 
    update(timestamp) {
        this.player.update();
    }
    //Animation 
    animation(timestamp) {
        this.draw();
        this.update(timestamp);
    }
    // Collision Logic 
    checkCollision(player, object) {
        if (object) {
            if(
                player.x < object.x + object.width &&
                player.x + player.playerWidth > object.x &&
                player.y-50 < object.y + object.height &&
                player.y-50 + player.playerHeight > object.y &&
                player.velocityX == 0 &&
                player.velocityY <= 1.5
            ) {
                return true;
            }

            // if(this.landingarea){
            //     return true;
            // }
        }
    }

    //Clear
    clearAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    //Start
    start() {
        if (this.end === false) {
            console.log('game started');
            this.animation();
        }
    }
}