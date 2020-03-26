class Player {
  constructor(game) {
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
    
    
    this.image = new Image();
    this.image.src = '../pics/apolo-11/apollo-11.png';
    
    this.target = new Target(this);
  }
  
  draw() {
    this.context.drawImage(this.image, this.x, this.y, this.playerWidth, this.playerHeight);
  }
  
  update() {
    this.y += this.velocityY;
    this.y += this.gravity;
    this.velocityY += this.gravity;
    console.log('Y: ', this.y);
    this.x += this.velocityX;
    console.log('X: ', this.x);
    console.log('Y velocity:', this.velocityY);
    console.log('X velocity:', this.velocityX);
    
    //stop moving:
    if(this.y >= 870) {
      this.y = 870;
      this.velocityY = 0; // the player stops at the edge of the canvas but the console still keeps going on regestring ocorrences ?????
      // this.game.endGame(); // breaks the code :P (solution for the line above)
      this.gravity = 0;
      this.context.end = true;
    }
    
    // shows player speed and position in game
    let vX = document.getElementById('xSpeed').innerText = Math.abs(this.velocityX);
    let vY = document.getElementById('ySpeed').innerText = Math.round(Math.abs(this.velocityY)*10, 2);
    let altitude = document.getElementById('playerAltitude').innerText = Math.floor(this.height-this.y-this.playerHeight);
    let distance = document.getElementById('distanceToTarget').innerText = Math.floor(Math.sqrt((this.y-this.target.y)**2 + (this.x-this.target.x-115)**2)-50);
  }
}
