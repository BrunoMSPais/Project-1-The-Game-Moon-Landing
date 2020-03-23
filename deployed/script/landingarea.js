class Landingarea {
    constructor(game, image, x, y, width, height) {
        this.game = game;
        this.context = game.context;
        this.canvas = document.querySelector('canvas');

        this.image = new Image();
        this.image.src = "pics/ground-layouts/ground-layout-01.png"

        this.x = 0;
        this.y = 520;
        this.width = 1475;
        this.height = 400;


    }

    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
        // this.context.save();
        // this.context.fillStyle = url('pics/apolo-11/apollo-11.png');
        // this.context.fillRect(this.x, this.y, this.width, this.height);
        // this.context.restore();
    }
}