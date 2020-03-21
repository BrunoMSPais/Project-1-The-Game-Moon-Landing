class Target {
    constructor(game, image, x, y, width, height) {
        this.game = game;
        this.context = game.context;
        this.canvas = document.querySelector('canvas');

        this.image = new Image();
        this.image.src = "pics/target/landing-target.png";

        this.x = 920;
        this.y = 920-54;
        this.width = 230;
        this.height = 40;
    }

    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
        // this.context.save();
        // this.context.fillStyle = url('pics/apolo-11/apollo-11.png');
        // this.context.fillRect(this.x, this.y, this.width, this.height);
        // this.context.restore();
    }
}