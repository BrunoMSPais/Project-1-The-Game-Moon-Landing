// class Colision {
//     constructor(game){
        
//         this.game = game;
//         this.player = this.game.player;
//         this.landingArea = this.game.landingarea;
//         this.target = this.game.target

//         this.context = game.context;
//         this.canvas = document.querySelector('canvas');

//         this.image = new Image();
//         this.surface = [];
//     }

//     // draw(){
//     //     var canvas = document.getElementById('canvas');
//     //     var ctx = canvas.getContext('2d');
//     //     ctx.fillStyle = 'green';
//     //     ctx.fillRect(10, 10, 100, 100);
//     // }

//     colisionDetection() {
//         for(let i=0; i<this.landingArea.width; i++){
//             for(let j=0; j<this.landingArea.height; j++) {
//                 this.surface.push([i][j]);
//                 let landingAreaSurface = surface[i][j];
//                 if((this.player.velocityX > 0 || this.player.velocityY) && !this.player.win() && (this.player.x == landingAreaSurface.x || this.player.y == landingAreaSurface.y)){
//                     // this.player.image = '../pics/apolo-11/apollo-11-crash-explosion.png'
//                     alert('crash');
//                     return true;
//                 }
//             }
//         }
//     }
// }