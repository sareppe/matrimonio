/* ========================================= */
/* LENIS */
/* ========================================= */

const lenis = new Lenis({

duration:1.4,
smoothWheel:true,
smoothTouch:false

});

function raf(time){

lenis.raf(time);

requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

/* ========================================= */
/* FADE REVEAL */
/* ========================================= */

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:.15
}

);

document
.querySelectorAll(
".fade-up"
)
.forEach(el=>{

observer.observe(el);

});

/* ========================================= */
/* TIMELINE */
/* ========================================= */

const timelineItems =
document.querySelectorAll(
".timeline-item"
);

const timelineObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target
.classList
.add("visible");

entry.target
.classList
.add("active");

}

});

},

{
threshold:.3
}

);

timelineItems.forEach(item=>{

timelineObserver.observe(item);

});

/* ========================================= */
/* GSAP HERO */
/* ========================================= */

gsap.from(

".hero-content",

{
opacity:0,
y:80,
duration:1.8,
ease:"power3.out"
}

);

/* ========================================= */
/* PARALLAX */
/* ========================================= */

gsap.to(

".couple-image img",

{

y:-80,

scrollTrigger:{

trigger:"#coupleSection",
scrub:true

}

}

);

gsap.to(

".tower-content",

{

y:-120,

scrollTrigger:{

trigger:"#towerSection",
scrub:true

}

}

);

/* ========================================= */
/* CARD REVEAL */
/* ========================================= */

gsap.from(

".info-card",

{

opacity:0,
y:80,
duration:1,

stagger:.15,

scrollTrigger:{

trigger:"#infoSection"

}

}

);

/* ========================================= */
/* FINAL */
/* ========================================= */

gsap.from(

".final-content",

{

opacity:0,
scale:.9,

duration:2,

scrollTrigger:{

trigger:"#finalSection"

}

}

);

/* ================================================= */
/* COPY IBAN */
/* ================================================= */

const copyIbanButton =
  document.querySelector(".copy-iban-button");

const copyFeedback =
  document.getElementById("copyFeedback");

if(copyIbanButton){

  copyIbanButton.addEventListener("click", async () => {

    const targetId =
      copyIbanButton.getAttribute("data-copy-target");

    const target =
      document.getElementById(targetId);

    if(!target){
      return;
    }

    const iban =
      target.textContent.trim();

    try{

      await navigator.clipboard.writeText(iban);

      if(copyFeedback){

        copyFeedback.classList.add("is-visible");

        setTimeout(() => {
          copyFeedback.classList.remove("is-visible");
        },1800);

      }

    }catch(error){

      console.error("Copy failed", error);

    }

  });

}