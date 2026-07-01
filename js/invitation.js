/* ================================================= */
/* PREMIUM INVITATION OPENING */
/* ================================================= */

const openInvitation =
  document.getElementById("openInvitation");

const invitationScene =
  document.getElementById("invitationScene");

const coupleReveal =
  document.getElementById("coupleReveal");

const openingHearts =
  document.querySelector(".opening-hearts");

let invitationAlreadyOpened = false;

function createOpeningHearts(){

  if(!openingHearts){
    return;
  }

  openingHearts.innerHTML = "";

  const hearts = [
    { x:-140, y:-150, s:1.15, r:"-18deg", d:"0s" },
    { x:-95,  y:-210, s:.82, r:"14deg",  d:".05s" },
    { x:-45,  y:-170, s:1.35, r:"-8deg", d:".1s" },
    { x:35,   y:-230, s:.95, r:"18deg",  d:".03s" },
    { x:92,   y:-175, s:1.18, r:"-14deg",d:".08s" },
    { x:145,  y:-225, s:.78, r:"12deg",  d:".14s" },
    { x:-170, y:-85,  s:.75, r:"20deg",  d:".16s" },
    { x:170,  y:-95,  s:.88, r:"-22deg", d:".12s" },
    { x:-20,  y:-270, s:.68, r:"8deg",   d:".18s" },
    { x:18,   y:-120, s:1.05, r:"-10deg",d:".2s" }
  ];

  hearts.forEach((heart, index) => {

    const element =
      document.createElement("span");

    element.className = "opening-heart";
    element.textContent = index % 3 === 0 ? "♡" : "♥";

    element.style.setProperty("--heart-x", `${heart.x}px`);
    element.style.setProperty("--heart-y", `${heart.y}px`);
    element.style.setProperty("--heart-scale", heart.s);
    element.style.setProperty("--heart-rotate", heart.r);
    element.style.animationDelay = heart.d;

    openingHearts.appendChild(element);

  });

}

function startInvitationOpening(){

  if(invitationAlreadyOpened){
    return;
  }

  invitationAlreadyOpened = true;

  createOpeningHearts();

  document.body.classList.add("experience-started");
  document.body.classList.add("invitation-opening");

  window.startExperienceAudio?.();

  if(openInvitation){
    openInvitation.disabled = true;
  }

  setTimeout(() => {

    if(coupleReveal){
      coupleReveal.classList.add("is-visible");
    }

  },950);

  setTimeout(() => {

    document.body.classList.add("invitation-opened");

  },1750);

  setTimeout(() => {

    if(coupleReveal){
      coupleReveal.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });
    }

  },1950);

  setTimeout(() => {

    document.body.classList.remove("invitation-opening");

    /*
      IMPORTANTISSIMO:
      non usare invitationScene.style.display = "none";
      altrimenti su mobile la pagina salta alla sezione successiva.
    */

    if(invitationScene){
      invitationScene.setAttribute("aria-hidden","true");
    }

  },2900);

}

if(openInvitation){

  openInvitation.addEventListener(
    "click",
    startInvitationOpening
  );

}