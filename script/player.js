class Player {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.x = 737;
        this.y = 50;
        this.width = 100;
        this.height = 50;
        this.velocityX = 0;
        this.velocityY = 0;
        this.gravity = 0.05;
        this.gravitySpeed = 0;
        this.newPos = function () {
          this.gravitySpeed += this.gravity;
          this.x += this.speedX;
          this.y += this.speedY + this.gravitySpeed;
        }
        // this.direction = null;
        this.image = new Image();
        this.image.src = 'pics/apolo-11/apollo-11.png';
      }
      draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.context.save();
        // this.context.fillStyle = "pink";
        // this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.restore();
      }
      update() {
        this.y += this.velocityY;
        console.log('Y: ', this.y);
        this.x += this.velocityX;
        console.log('X: ', this.X);
      }
    
    // class Player {
    //   constructor(game) {
    //     this.game = game;
    //     this.context = game.context;
    //     this.x = game.width / 2;
    //     this.y = game.height - 230;
    //     this.width = 100;
    //     this.heigth = 200;
    //     this.speedX = 0;
    //     this.speedY = 0;
    //     // this.image = new Image();
    //     // this.image.src = 'pics/apolo-11/apollo-11.png';
        
    //   }
    //   draw() {
    //     // this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    //     this.context.save();
    //     this.context.fillStyle = "pink";
    //     this.context.fillRect(this.x, this.y, this.width, this.height);
    //     this.context.restore();
    //   }
    //   update() {
    //     // this.x += this.speedX;
    //     this.y += this.speedY;
    //   }
      setControls() {
        window.addEventListener("keydown", event => {
          switch (event.keyCode) {
            case 38: // up key
              console.log('moving up');
              this.speedY = -0.25;
              this.image.src = 'pics/apolo-11/apollo-11-move-up.png';
              break;
            case 39: // right key
              console.log('moving right');
              this.speedX = 0.25;
              this.image.src = 'pics/apolo-11/apollo-11-move-right.png';
              break;
            case 37: // left key
              console.log('moving left');
              this.speedX = -0.25;
              this.image.src = 'pics/apolo-11/apollo-11-move-left.png';
              break;
          }
        });
        window.addEventListener("keyup", event => {
        //   this.speedX = 0;
        //   this.speedY = 0;
          this.image.src = 'pics/apolo-11/apollo-11.png';
        });
      }
  }