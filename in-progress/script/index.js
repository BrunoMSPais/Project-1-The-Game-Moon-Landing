const canvas = document.querySelector('canvas');
const game = new Game(canvas);

window.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        game.start();
    }
});