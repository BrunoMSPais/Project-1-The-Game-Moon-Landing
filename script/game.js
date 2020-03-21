class Game {
    constructor(canvas) {
        this.canvas = document.querySelector('canvas');
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;

        this.player = new Player(this);
        this.player.setControls;

        this.landingarea = new Landingarea(this);

        this.animationId;
        this.frame = 0;
        this.gameStatus = "game";

        this.target = new Target(this);
    }

    start() {
        // if (this.gameStatus === "game") {
        //     this.animation();
        // }
        console.log('game started');
        this.draw();

        // this.reset();
        // this.animation();
    }

    update() {
        this.player.update();
    }

    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        //DRAW THE LANDING AREA
        this.landingarea.draw();
        //DRAW TARGET LANDING AREA
        this.target.draw();
        //SHOW PLAYER
        this.player.draw();
        // const animation =
        // window.requestAnimationFrame(timestamp =>
        //     this.draw(timestamp));
        //     if (this.end) {
        //         window.cancelAnimationFrame(animation);
        //     }
    }

    animation(timestamp) {
        this.draw();
        this.update(timestamp);

    }
}




//LANDING CONDITIONS (inside target area / Xspeed = 0 / Yspeed <= 1.5)

//CRASH CONDITIONS (hit the surface sideways / it the suface with Xspeed > 0 and Yspeed > 1.5 / it the surface outside the landing target area)

//GAME LOSS CONDITIONS