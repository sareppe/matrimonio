const coupleCanvas =
document.getElementById("coupleSnowCanvas");

const coupleCtx =
coupleCanvas.getContext("2d");

function resizeCoupleSnow(){
  coupleCanvas.width = window.innerWidth;
  coupleCanvas.height = window.innerHeight;
}

resizeCoupleSnow();

window.addEventListener("resize", resizeCoupleSnow);

const coupleFlakes = [];

for(let i = 0; i < 14; i++){

  coupleFlakes.push({
    x:Math.random() * coupleCanvas.width,
    y:Math.random() * coupleCanvas.height,
    r:Math.random() * 1.7 + .4,
    speed:Math.random() * .18 + .06,
    drift:Math.random() * .16
  });

}

function drawCoupleSnow(){

  coupleCtx.clearRect(
    0,
    0,
    coupleCanvas.width,
    coupleCanvas.height
  );

  coupleFlakes.forEach(flake => {

    coupleCtx.beginPath();

    coupleCtx.arc(
      flake.x,
      flake.y,
      flake.r,
      0,
      Math.PI * 2
    );

    coupleCtx.fillStyle =
      "rgba(255,255,255,.35)";

    coupleCtx.fill();

    flake.y += flake.speed;

    flake.x +=
      Math.sin(flake.y * .01) * flake.drift;

    if(flake.y > coupleCanvas.height){
      flake.y = -10;
      flake.x = Math.random() * coupleCanvas.width;
    }

  });

  requestAnimationFrame(drawCoupleSnow);

}

drawCoupleSnow();