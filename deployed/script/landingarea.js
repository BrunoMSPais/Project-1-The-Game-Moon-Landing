class Landingarea {
    constructor(game) {
      this.game = game;
      this.context = game.context;
      this.canvas = document.querySelector("canvas");
  
      this.image = new Image();
      this.image.src = "pics/ground-layouts/ground-layout-01.png";
  
      this.x = 0;
      this.y = 619;
      this.width = 1475;
      this.height = 300;

    }
  
    draw() {
      this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  
      //INVISIBLE SHAPES UNDER THE IMAGE TO CONTROL COLISION CHECK
  
      this.context.beginPath();
      this.context.lineWidth = "1";
      this.context.strokeStyle = 'grey';
  
      this.drawTriangles();
      this.drawRectangles();
      this.drawCircles();
    }
  
    drawTriangles() {
      const player = this.game.player;
      let triangleArray = [
        new Triangle(this.game, 813, 820, 813, 870, 763, 870),
        new Triangle(this.game, 63, 870, 0, 870, 0, 835),
        new Triangle(this.game, 511, 650, 511, 870, 613, 870),
        // .... add other triangles here
        new Triangle(this.game, 411, 650, 411, 760, 283,760),
        new Triangle(this.game, 175, 770, 175, 870, 63, 870),
        new Triangle(this.game, 1043, 820, 1043, 890, 1155, 890),
        new Triangle(this.game, 1155, 890, 1240, 890, 1240, 720),
        new Triangle(this.game, 1280, 720, 1280, 795, 1380, 795),
        new Triangle(this.game, 1420, 795, 1475, 795, 1475, 735)
      ];
  
      triangleArray.forEach(triangle => {
        triangle.draw();
        if (triangle.collision(player)) {
          // returns true or false
          // now you can add some logic to this
          console.log("Triangle Collision Detected");
          // ....
          // ... your code here
          if(((player.x == triangle.x && triangle.y == player.y + player.height) ||
          (player.x == triangle.x + triangle.width && triangle.y + triangle.height == player.y+player.height) ||
          (Math.sqrt((triangle.height)**2 + (triangle.width)**2)) / 2 >= (player.x && player.y + player.height)) ||
          ((player.x + player.width >= triangle.x - triangle.width && player.y + player.height == triangle.y + triangle.height)||
          (player.x + player.width == triangle.x && player.y + player.height >= triangle.y) ||
          (Math.sqrt((triangle.height)**2 + (triangle.width)**2)) / 2 >= (player.x + player.width && player.y + player.height))
          ){

            return true;
          }

        }
      });
    }
  
    drawRectangles() {
      const player = this.game.player;
      let rectanglesArray = [
        new Square(this.game, 813, 820, 230, 40),
        new Square(this.game, 253, 760, 80, 40),
        new Square(this.game, 175, 770, 80, 40),
        new Square(this.game, 568, 870, 230, 40),
        new Square(this.game, 1240, 720, 40, 40),
        new Square(this.game, 1380, 795, 40, 40)
      ];
  
      rectanglesArray.forEach(rec => {
        rec.draw();
        if (rec.collision(player)) {
            console.log("Rec Collision Detected");
            // ....
            // ... your code here
          if (
              rec.x <= player.x + player.width &&
              rec.x + rec.width >= player.x &&
              rec.y <= player.y + player.height &&
              rec.y + rec.height >= player.y) {

                return true;
              }
        }
      });
    }
  
    drawCircles() {
      const player = this.game.player;
      let circlesArray = [new Circle(this.game, 455.5, 680, 55.5)];
  
      circlesArray.forEach(circle => {
        circle.draw();
        if (circle.collision(player)) {
          // returns true or false
          console.log("Circle Collision Detected");
          // ....
          // ... your code here
          this.game.gameover.lose();
          if (
              player.y + player.height <= circle.collision.radius ||
              Math.sqrt((circle.x - player.x + player.width)**2 + (circle.y - player.y + player.height)**2) <= circle.radius ||
              Math.sqrt((circle.x - player.x)**2 - (circle.y - player.y + player.height)**2) <= circle.radius) {


                return true;
              }
        }
      });
    }
}