class sounds {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.canvas = document.querySelector('canvas');

        this.thruster = new Audio();
        this.thruster.src = 'sound/BlowTorch.wav';

        this.crash = new Audio();
        this.crash.src = 'sound/explosn4.wav';

        this.land = new Audio();
        this.land.src = 'sound/the-eagle-as-landed.mp3';
    
    }    
}

let sound, audio, soundbtn, audiobtn;
let icone = document.getElementById('sound-icone');
window.addEventListener('load', initAudioPlayer => {
    audio = new Audio(),
    audio.src = 'sound/shine.mp3',
    audio.loop = true,
    audio.currentTime = 35,
    audio.play(),

    // function muteSound(){
    //     if(audio.muted) {
    //         audio.muted = false;
    //         document.getElementById('sound-icone').classList.toggle('fas fa-volume-up');
    //     } else {
    //         audio.muted = true;
    //         document.getElementById('sound-icone').classList.toggle('fas fa-volume-mute');
    //     }
    // }
    document.getElementById('music').addEventListener('click', event =>{
        if(audio.muted) {
            audio.muted = false;
            event.target.innerHTML = 'mute';
        } else {
            audio.muted = true;
            event.target.innerHTML = 'unmute';
        }

    });
});

// {<i class="fas fa-volume-up"></i>}
// fas fa-volume-mute