class Player {
    constructor(game) {
        this.context = game.context;
        this.x = game.width / 2;
        this.y = 30;

        this.width = 25;
        this.heigth = 25;

        this.speedX = 0;
        this.speedY = 0;
    }

    draw() {
        this.context.save();
        this.context.fillStyle = url('/pics/apolo-11/apollo-11.png');
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.restore();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    setControls() {
        window.addEventListener("keydown", event => {
            switch (event.keyCode) {
              case 38: // up key
                this.speedY = -3;
                break;
              case 39: // right key
                this.speedX = 3;
                break;
              case 37: // left key
                this.speedX = -3;
                break;
            }
          });
          window.addEventListener("keyup", event => {
            this.speedX = 0;
            this.speedY = 0;
          });
        }
    }
    left() {
        return this.x + (this.width /2);
    }
    right() {
        return this.x + (this.width / 2);
    }
    top() {
        return this.y;
    }
    bottom() {
        return this.y + this.height;
    }
}