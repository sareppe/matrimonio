/* ========================================= */
/* CANVAS */
/* ========================================= */

const canvas =
document.getElementById(
"snowCanvas"
);

const ctx =
canvas.getContext("2d");

/* ========================================= */
/* SIZE */
/* ========================================= */

function resizeCanvas(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}

resizeCanvas();

window.addEventListener(
"resize",
resizeCanvas
);

/* ========================================= */
/* FLAKES */
/* ========================================= */

const flakes = [];

const totalFlakes = 22;

for(let i=0;i<totalFlakes;i++){

flakes.push({

x:
Math.random()*canvas.width,

y:
Math.random()*canvas.height,

r:
Math.random()*2+0.5,

speed:
Math.random()*0.2+0.08

});

}

/* ========================================= */
/* DRAW */
/* ========================================= */

function renderSnow(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

flakes.forEach(flake=>{

ctx.beginPath();

ctx.arc(

flake.x,
flake.y,
flake.r,

0,
Math.PI*2

);

ctx.fillStyle =
"rgba(255,255,255,.4)";

ctx.fill();

flake.y += flake.speed;

flake.x +=
Math.sin(
flake.y * 0.01
)*0.08;

if(flake.y > canvas.height){

flake.y = -10;

flake.x =
Math.random()*canvas.width;

}

});

requestAnimationFrame(
renderSnow
);

}

renderSnow();