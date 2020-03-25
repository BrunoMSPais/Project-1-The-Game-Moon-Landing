class Landingarea {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.canvas = document.querySelector('canvas');

        this.image = new Image();
        this.image.src = "pics/ground-layouts/ground-layout-01.png"

        this.x = 0;
        this.y = 619;
        this.width = 1474;
        this.height = 301;
    }

    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}