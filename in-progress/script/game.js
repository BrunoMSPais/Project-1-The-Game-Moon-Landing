class Game {
    constructor(canvas) {
        this.canvas = document.querySelector('canvas');
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        
        this.landingarea = new Landingarea(this);
        
        this.target = new Target(this);

        // this.colision = new Colision(this);
        
        // this.sound;
        
        this.player = new Player(this);
        this.controls = new Controls(this);
        this.controls.setControls();
        
        this.end = false;
    }
    draw(timestamp) {
        this.clearAll();
        // this.context.clearRect(0, 0, this.width, this.height);
        //DRAW THE LANDING AREA
        this.landingarea.draw();
        //DRAW TARGET LANDING AREA
        this.target.draw();
        //SHOW PLAYER
        this.player.draw();
        this.update(timestamp);
        const animation = window.requestAnimationFrame(timestamp => this.draw(timestamp));
        // this.colision.draw();
    }
    
    update(timestamp) {
        this.player.update();
        
        //detect borders:
        if(this.player.x <= 0 || this.player.x >= 1350 || this.player.y >= 870 || this.player.y <= 50) {
            this.end = true;
        }
        
        this.win();
    }
    
    animation(timestamp) {
        this.draw();
        this.update(timestamp);
        // this.win();
    }
    
    start() {
        console.log('game started');
        this.animation();
        // this.draw();
        // this.reset();
    }
    
    clearAll() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    win() {
        if (/* target */
            this.player.x == this.target.x + this.target.width &&
            /* this.player.x + this.player.width == this.target.x && */
            this.player.y == this.target.y &&
            this.player.velocityX == 0 &&
            this.player.velocityY < 1
        ) {
            console.log('WIN')
            return true/* (!(
                player.x < target.x + target.width &&
                player.x + player.width > target.x &&
                player.y == target.y) && player.velocityX == 0 && player.velocityY < 0.5
            ) */
        }
    }
    
    endGame() {
        if(this.win()){
            this.end = true;
        }
    }
}




//LANDING CONDITIONS (inside target area / Xspeed = 0 / Yspeed <= 1.5)

//CRASH CONDITIONS (hit the surface sideways / it the suface with Xspeed > 0 and Yspeed > 1.5 / it the surface outside the landing target area)

//GAME LOSS CONDITIONS
