class Circle {
    constructor(game, x, y, radius) {
      this.context = game.context;
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  
    draw() {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, Math.PI, true);
      this.context.lineTo(511, 680);
      this.context.stroke();
    }
    collision(player) {
      const left = player.x;
      const right = player.x + player.playerWidth;
      const bottom = player.y + player.playerHeight;
  
      return (
        right >= this.x - this.radius &&
        left <= this.x + this.radius &&
        bottom >= this.y - this.radius
      );
    }
  }