/* ========================================= */
/* AUDIO MANAGER */
/* ========================================= */

const windAudio =
document.getElementById(
"windAudio"
);

const musicAudio =
document.getElementById(
"musicAudio"
);

windAudio.volume = .25;
musicAudio.volume = 0;

/* ========================================= */
/* START AUDIO */
/* ========================================= */

function startExperienceAudio(){

windAudio.play().catch(()=>{});

musicAudio.play().catch(()=>{});

let volume = 0;

const fade = setInterval(()=>{

volume += .01;

musicAudio.volume = volume;

if(volume >= .4){

clearInterval(fade);

}

},100);

}

/* ========================================= */
/* PORTONE CLICK */
/* ========================================= */

document
.getElementById("openInvitation")
.addEventListener(

"click",

()=>{

startExperienceAudio();

}

);