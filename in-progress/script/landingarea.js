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

        //INVISIBLE SHAPES UNDER THE IMAGE TO CONTROL COLISION CHECK

        this.context.beginPath();
        this.context.lineWidth = "1";
        this.context.strokeStyle = "green";
        //rectangles
        this.context.rect(813, 820, 230, 40);
        this.context.stroke();

        //triangles
        this.context.beginPath();
        this.context.moveTo(813,820);
        this.context.lineTo(813,870);
        this.context.lineTo(763,870);
        this.context.lineTo(813,820);
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(411,620);
        this.context.lineTo(411,870);
        this.context.lineTo(613,870);
        this.context.lineTo(411,620);
        this.context.stroke();
    }
}