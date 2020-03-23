class Controls {
    constructor(game) {
        this.game = game;
        this.player = this.game.player;


    }

    setControls() {
        window.addEventListener('keydown', event => {
            event.preventDefault();
            switch (event.keyCode) {
                case 37: //left
                    console.log('move left called');
                    this.game.player.velocityX += -1;
                    // this.game.player.image = new Image()
                    // this.game.player.image.src = 'pics/apolo-11/apollo-11-move-left.png'; //alters the image to simulate animation
                    break;

                case 39: //right
                    console.log('move right called');
                    this.game.player.velocityX += 1;
                    // this.game.player.image = new Image()
                    // this.game.player.image.src = 'pics/apolo-11/apolo-11-move-right.png'; //alters the image to simulate animation
                    break;

                case 38: //up
                    console.log('move up called');
                    this.game.player.velocityY = -0.3;
                    // this.game.player.image = new Image()
                    // this.game.player.image.src = 'pics/apolo-11/apolo-11-move-up.png'; //alters the image to simulate animation
                    break;

                default:
                    break;
            }
        });

        window.addEventListener('keyup', event => {
            event.preventDefault();
            switch (event.keyCode) {
                case 37: //left
                    console.log('move left canceld');
                    // this.game.player.velocityX = 0; // no reset to 0 because the objective is to simulate the space envyroment were once you have a moving object it will keep moving until somethig alters is state
                    // this.game.player.image.src = 'pics/apolo-11/apollo-11.png';
                    break;

                case 39: //right
                    console.log('move right canceld');
                    // this.game.player.velocityX = 0;
                    // this.game.player.image.src = 'pics/apolo-11/apolo-11.png'; // resets the image
                    break;

                case 38: //up
                    console.log('move up canceld');
                    this.game.player.velocityY = 0; // lets the gravity take efect
                    // this.game.player.image.src = 'pics/apolo-11/apolo-11.png';
                    break;

                default:
                    break;
            }
        });
    }
}