class Gameover {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.loseImage = new Image();
        this.loseImage.src = 'pics/apolo-11/apollo-11-crash-explosion.png';
    }
    
    
    //LOSING CONDITION
    lose() {
        //detecting borders for game over 
        if (this.game.player.x < -40 ||
            this.game.player.x + this.game.player.playerWidth -20> 1475 ||
            this.game.player.y <0 ||
            this.game.checkCollision(this.game.player, this.game.target)/* || 
            this.game.player.y >= 920 */) {
                console.log("LOSE FROM GAMEOVER CONSTRUCTOR");
                // this.drawImage(this.loseImage, this.game.player.x, this.game.player.y);
                this.game.end = true;
                this.reset();
            }
        }
        
        //WINNING CONDITION
        win() {
            //if player lands on tagert 
            if (this.game.checkCollision(this.game.player, this.game.target) && !this.lose) {
                console.log("WIN FROM GAMEOVER CONSTRUCTOR!");
                this.game.end = true;
                
                this.reset();
            }
        }

    reset() {
        // window.addEventListener((this.win() || this.lose()),event =>{
        //     this.game.context.clearRect(0, 0, 1475, 920);
        //     this.game.context.font = '48px serif #fff';
        //     this.game.context.fillText('Press SPACE BAR to continue',1250, 900, 500);

        //         console.log('reset is working'); 
        //         window.addEventListener('keypress', event => {
        //             if (event.keyCode === 32) {
        //                 this.game.start();
        //             }
        //         });
            
        // });
    }
}