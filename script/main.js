class Game {
    constructor(canvas) {
        this.canvas = document.querySelector('canvas');
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;

        this.player = new Player(this);
        this.player.setControls;

        this.landing-area = new Lnanding-area(this);

        this.animationId;
        this.frame = 0;
        this.gameOn = true;
    }

    start() {
        console.log('game started');
        this.reset();
        this.animation();
    }

    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        //DRAW THE LANDING AREA
        this.landing-area.draw();
        //SHOW PLAYER
        this.player.draw();
    }
}


//DRAW TARGET LANDING AREA


//LANDING CONDITIONS (inside target area / Xspeed = 0 / Yspeed <= 1.5)

//CRASH CONDITIONS (hit the surface sideways / it the suface with Xspeed > 0 and Yspeed > 1.5 / it the surface outside the landing target area)

//GAME LOSS CONDITIONS