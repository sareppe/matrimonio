const openButton =
document.getElementById("openInvitation");

const doorScene =
document.getElementById("doorScene");

const coupleReveal =
document.getElementById("coupleReveal");

openButton.addEventListener("click", () => {

  document
    .querySelector(".door-left")
    .classList
    .add("open");

  document
    .querySelector(".door-right")
    .classList
    .add("open");

  document.body.classList.add("experience-started");

  setTimeout(() => {

    coupleReveal.scrollIntoView({
      behavior: "smooth"
    });

    coupleReveal.classList.add("is-visible");

  }, 2200);

});