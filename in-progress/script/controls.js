class Controls {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.player = this.game.player;
    }

    setControls() {
        window.addEventListener('keydown', event => {
            event.preventDefault();
            switch (event.keyCode) {
                case 37: //left
                    console.log('move left called');
                    this.game.player.velocityX += -1;
                    this.player.image = new Image();
                    this.player.image.src = 'pics/apolo-11/apollo-11-move-left.png';
                    this.context.drawImage(this.player.image, this.x, this.y, this.playerWidth, this.playerHeight);
                    break;

                case 39: //right
                    console.log('move right called');
                    this.game.player.velocityX += 1;
                    this.player.image = new Image();
                    this.player.image.src = 'pics/apolo-11/apollo-11-move-right.png';
                    this.context.drawImage(this.player.image, this.x, this.y, this.playerWidth, this.playerHeight);
                    break;

                case 38: //up
                    console.log('move up called');
                    this.game.player.velocityY = -0.3;
                    this.player.image = new Image();
                    this.player.image.src='pics/apolo-11/apollo-11-move-up.png'; //alters the image to simulate animation
                    this.context.drawImage(this.player.image, this.x, this.y, this.playerWidth, this.playerHeight);
                    break;

                default:
                    this.player.image = new Image();
                    this.player.image.src='pics/apolo-11/apollo-11.png'; //alters the image to simulate animation
                    this.context.drawImage(this.player.image, this.x, this.y, this.playerWidth, this.playerHeight);
                    break;
            }
        });

        // window.addEventListener('keyup', event => {
        //     event.preventDefault();
        //     switch (event.keyCode) {
        //         case 37: //left
        //             console.log('move left canceld');
        //             // this.game.player.velocityX = 0; // no reset to 0 because the objective is to simulate the space envyroment were once you have a moving object it will keep moving until somethig alters is state
        //             this.player.image = new Image();
        //             this.player.image.src='pics/apolo-11/apollo-11.png';
        //             this.context.drawImage(this.player.image, this.x, this.y, this.playerWidth, this.playerHeight);
        //             break;

        //         case 39: //right
        //             console.log('move right canceld');
        //             // this.game.player.velocityX = 0;
        //             this.player.image = new Image();
        //             this.player.image.src='pics/apolo-11/apolo-11.png'; //resets the image
        //             this.context.drawImage(this.player.image, this.x, this.y, this.playerWidth, this.playerHeight);
        //             break;

        //         case 38: //up
        //             console.log('move up canceld');
        //             this.game.player.velocityY = 0; // lets the gravity take efect
        //             this.player.image = new Image();
        //             this.player.image.src='pics/apolo-11/apolo-11.png';
        //             this.context.drawImage(this.player.image, this.x, this.y, this.playerWidth, this.playerHeight);
        //             break;

        //         default:
        //             this.player.image = new Image();
        //             this.player.image.src='pics/apolo-11/apollo-11.png'; //alters the image to simulate animation
        //             this.context.drawImage(this.player.image, this.x, this.y, this.playerWidth, this.playerHeight);
        //             break;
        //     }
        // });
    }
}