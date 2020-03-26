const canvas = document.querySelector('canvas');
const game = new Game(canvas);
const sounTrack = document.getElementById('sound-track').checked;
const audio = document.querySelector('audio');

if(sounTrack) {
    audio.play();
} else {
    audio.muted();
}

window.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        game.start();
    }
});