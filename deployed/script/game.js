class Game {
    constructor(canvas) {
        this.canvas = document.querySelector('canvas');
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;

        this.landingarea = new Landingarea(this);
        
        this.target = new Target(this);

        // this.sound;

        this.player = new Player(this);
        this.controls = new Controls(this);
        this.controls.setControls();

        this.end = false;
    }
    draw(timestamp) {
        this.clearAll();
        // this.context.clearRect(0, 0, this.width, this.height);
        this.update(timestamp)
        //DRAW THE LANDING AREA
        this.landingarea.draw();
        //DRAW TARGET LANDING AREA
        this.target.draw();
        //SHOW PLAYER
        this.player.draw();
        this.update(timestamp);
        const animation = window.requestAnimationFrame(timestamp => this.draw(timestamp));
    }

    update(timestamp) {
        this.player.update();
        
        //detect borders:
        if(this.player.x <= 0 || this.player.x >= 1350 || this.player.y >= 870 || this.player.y <= 50) {
            this.end = true;
        }
    }

    animation(timestamp) {
        this.draw();
        this.update(timestamp);
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
    
    endGame() {
        this.end = true;
    }
}




//LANDING CONDITIONS (inside target area / Xspeed = 0 / Yspeed <= 1.5)

//CRASH CONDITIONS (hit the surface sideways / it the suface with Xspeed > 0 and Yspeed > 1.5 / it the surface outside the landing target area)

//GAME LOSS CONDITIONS
