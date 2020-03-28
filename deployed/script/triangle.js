class Triangle {
    constructor(game, Ax, Ay, Bx, By, Cx, Cy) {
      this.context = game.context;
      this.Ax = Ax;
      this.Ay = Ay;
      this.Bx = Bx;
      this.By = By;
      this.Cx = Cx;
      this.Cy = Cy;
    }
  
    draw() {
      this.context.beginPath();
      this.context.lineWidth = "1";
      this.context.strokeStyle = "transparent";
      this.context.moveTo(this.Ax, this.Ay);
      this.context.lineTo(this.Bx, this.By);
      this.context.lineTo(this.Cx, this.Cy);
      this.context.lineTo(this.Ax, this.Ay);
      this.context.stroke();
    }
    collision(player) {
      const x = player.x + 50;
      const y = player.y + 50;
      const side1 = this.Cy - this.Ay;
      const side2 = this.Cx - this.Ax;
      const side3 = this.By - this.Ay;
      const side4 = y - this.Ay;
  
      const w1 =
        (this.Ax * side1 + side4 * side2 - x * side1) /
        (side3 * side2 - (this.Bx - this.Ax) * side1);
      const w2 = (side4 - w1 * side3) / side1;
      // returns true if collision is detected
      return w1 >= 0 && w2 >= 0 && w1 + w2 <= 1;
    }
  }