class Target {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.canvas = document.querySelector('canvas');

        this.image = new Image();
        this.image.src = "pics/target/landing-target.png";

        this.x = 813;
        this.y = 780;
        this.width = 230;
        this.height = 80;
    }

    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}