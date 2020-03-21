const canvas = document.querySelector('canvas');
const game = new Game(canvas);
/* 
window.addEventListener('keypress',event => {
    if(!event.keyCode === 32) {
        ctx.fillStyle = "green";
        ctx.strokeStyle = "black";
        ctx.mozPathText("Sample String");
        ctx.fill()
        ctx.stroke()
    }
})
*/
window.addEventListener('keypress',event => {
    if(event.keyCode === 13) {
        game.start();
    }
});