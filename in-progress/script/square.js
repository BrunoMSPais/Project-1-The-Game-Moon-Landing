class Square {
    constructor(game, x, y, width, height) {
      this.context = game.context;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  
    draw() {
      this.context.beginPath();
      this.context.lineWidth = "1";
      this.context.strokeStyle = "transparent";
      this.context.rect(this.x, this.y, this.width, this.height);
      this.context.stroke();
    }
    collision(player) {
      const left = player.x;
      const right = player.x + player.playerWidth;
      const bottom = player.y + player.playerHeight + 50;
  
      const recLeft = this.x;
      const recRight = this.x + this.width;
      const recTop = this.y + this.height;
  
      return !(bottom < recTop || right < recLeft || left > recRight);
    }
  }