const tower =
document.getElementById(
"towerSection"
);

window.addEventListener(

"scroll",

()=>{

const scroll =
window.pageYOffset;

tower.style.backgroundPositionY =

scroll * 0.35 + "px";

}
);