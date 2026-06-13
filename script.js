
const intro=document.getElementById('intro');
document.getElementById('enterBtn').onclick=()=>{
intro.classList.add('open');
setTimeout(()=>intro.style.display='none',1900);
};

const target=new Date('2027-12-27T15:00:00');
setInterval(()=>{
let d=target-new Date();
let days=Math.max(0,Math.floor(d/86400000));
document.getElementById('countdown').innerHTML=days+' giorni';
},1000);

const music=document.getElementById('bgMusic');
document.getElementById('musicBtn').onclick=()=>music.paused?music.play():music.pause();

const c=document.getElementById('snow'),x=c.getContext('2d');
function rs(){c.width=innerWidth;c.height=innerHeight} rs(); onresize=rs;
const f=[...Array(180)].map(()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*3,s:1+Math.random()*2}));
(function anim(){
x.clearRect(0,0,c.width,c.height);
x.fillStyle='rgba(255,255,255,.85)';
for(let a of f){x.beginPath();x.arc(a.x,a.y,a.r,0,6.28);x.fill();a.y+=a.s;if(a.y>innerHeight)a.y=0;}
requestAnimationFrame(anim);
})();
