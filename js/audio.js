/* ================================================= */
/* EXPERIENCE AUDIO */
/* ================================================= */

window.startExperienceAudio = function(){

  const windAudio =
    document.getElementById("windAudio");

  const musicAudio =
    document.getElementById("musicAudio");

  if(windAudio){

    windAudio.volume = 0;

    windAudio.play().catch(() => {});

    fadeAudio(
      windAudio,
      0,
      0.12,
      2600
    );

  }

  if(musicAudio){

    musicAudio.volume = 0;

    musicAudio.play().catch(() => {});

    fadeAudio(
      musicAudio,
      0,
      0.28,
      4200
    );

  }

};

function fadeAudio(audio, from, to, duration){

  const startTime =
    performance.now();

  audio.volume = from;

  function updateVolume(currentTime){

    const progress =
      Math.min((currentTime - startTime) / duration, 1);

    const easedProgress =
      1 - Math.pow(1 - progress, 3);

    audio.volume =
      from + (to - from) * easedProgress;

    if(progress < 1){
      requestAnimationFrame(updateVolume);
    }

  }

  requestAnimationFrame(updateVolume);

}
