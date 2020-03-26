class Gameover {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.loseImg = new Image();
        this.loseImg.src = '/in-progress/pics/apolo-11/apollo-11-crash-explosion.png';
        this.winImg = new Image();
        this.winImg.src = '/in-progress/pics/apolo-11/apollo-11.png ';
    }
    //LOSING IMAGE 
    lose() {
        //detecting borders for game over 
        if (this.game.player.x <= this.game.landingarea.x || this.game.player.x >= 1350 || this.game.player.y >= 870 || this.game.player.y <= 50 && (this.game.player.velocityX != 0 || this.game.player.velocityY > 1.5)) {
            console.log("LOSE FROM GAMEOVER CONSTRUCTOR");
            this.game.end = true;
            this.context.drawImage(this.loseImg, 3, 100, 100);
        }
    }
    //WINNING IMAGE
    win() {
        //if player lands on tagert 
        if (this.game.checkCollision(this.game.player, this.game.target)) {
            console.log("WIN FROM GAMEOVER CONSTRUCTOR!");
            this.game.end = true;
            this.context.drawImage(this.winImg, this.game.player.x, this.game.player.y, 300, 200);
        }
    }
    reset() {
        console.log('reset is working');
    }
}