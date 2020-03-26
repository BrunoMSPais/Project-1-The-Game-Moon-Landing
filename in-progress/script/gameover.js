class Gameover {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.loseImg = new Image();
        this.loseImg.src = '/in-progress/pics/apolo-11/apollo-11-crash-explosion.png';
        this.winImg = new Image();
        this.winImg.src = '/in-progress/pics/apolo-11/apollo-11.png ';
    }

    //LOSING CONDITION
    lose() {
        //detecting borders for game over 
        if (this.game.player.x < -40 ||
            this.game.player.y <0 ||
            (this.game.player.draw() == this.game.landingarea.draw()/* && this.game.player.y == this.game.landingarea.y) */|| this.game.player.x >= 1415 || 
            this.game.player.y >= 900 && 
            !this.win())) {
            console.log("LOSE FROM GAMEOVER CONSTRUCTOR");
            this.game.end = true;
            this.context.drawImage(this.loseImg, this.game.player.x, this.game.player.y, 100, 100);
        }
    }

    //WINNING CONDITION
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