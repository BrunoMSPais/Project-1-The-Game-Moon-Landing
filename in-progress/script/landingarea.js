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

        this.context.rect(253, 760, 80, 40);
        this.context.stroke();

        this.context.rect(175, 770, 80, 40);
        this.context.stroke();

        this.context.rect(568, 870, 230, 40);
        this.context.stroke();

        this.context.rect(1240, 720, 40, 40);
        this.context.stroke();

        this.context.rect(1380, 795, 40, 40);
        this.context.stroke();

        //triangles
        this.context.beginPath();
        this.context.moveTo(813,820);
        this.context.lineTo(813,870);
        this.context.lineTo(763,870);
        this.context.lineTo(813,820);
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(511,650);
        this.context.lineTo(511,870);
        this.context.lineTo(613,870);
        this.context.lineTo(511,650);
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(411,650);
        this.context.lineTo(411,760);
        this.context.lineTo(283,760);
        this.context.lineTo(411,650);
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(175,770);
        this.context.lineTo(175,870);
        this.context.lineTo(63,870);
        this.context.lineTo(175,770);
        this.context.stroke();

        this.context.beginPath();
        this.context.moveTo(63,870);
        this.context.lineTo(0,870);
        this.context.lineTo(0,835);
        this.context.lineTo(63,870);
        this.context.stroke();

        this.context.moveTo(1043,820);
        this.context.lineTo(1043,890);
        this.context.lineTo(1155,890);
        this.context.lineTo(1043,820);
        this.context.stroke();

        this.context.moveTo(1155,890);
        this.context.lineTo(1240,890);
        this.context.lineTo(1240,720);
        this.context.lineTo(1155,890);
        this.context.stroke();

        this.context.moveTo(1280,720);
        this.context.lineTo(1280,795);
        this.context.lineTo(1380,795);
        this.context.lineTo(1280,720);
        this.context.stroke();

        this.context.moveTo(1420,795);
        this.context.lineTo(1475,795);
        this.context.lineTo(1475,735);
        this.context.lineTo(1420,795);
        this.context.stroke();

        //semi-circles
        this.context.beginPath();
        this.context.arc(455.5, 680, 55.5, 0, Math.PI, true);
        this.context.lineTo(511, 680);
        this.context.stroke();
    }
}