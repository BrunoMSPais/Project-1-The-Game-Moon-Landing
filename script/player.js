class Player {
    constructor(game) {
        // this.game = game;
        this.height = game.height;
        this.width = game.width;
        this.context = game.context;
        this.x = 737;
        this.y = 50;
        this.playerWidth = 100;
        this.playerHeight = 50;
        this.velocityX = 0;
        this.velocityY = 0.02;

        this.gravity = 0.02; //gravity acceleration

        this.score = 0; //sore counter
        
        this.image = new Image();
        this.image.src = 'pics/apolo-11/apollo-11.png';
      }

      draw() {
        this.context.drawImage(this.image, this.x, this.y, this.playerWidth, this.playerHeight);
      }

      update() {
        //stop moving:
        if(this.y >= 920) {
            this.velocityY = 0;
        }
        this.y += this.velocityY;
        this.y += this.gravity;
        this.velocityY += this.gravity;
        console.log('Y: ', this.y);
        this.x += this.velocityX;
        console.log('X: ', this.X);
        
      }
  }