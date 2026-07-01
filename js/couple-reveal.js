const continueToHero =
document.getElementById("continueToHero");

continueToHero.addEventListener("click", () => {

  document
    .getElementById("hero")
    .scrollIntoView({
      behavior: "smooth"
    });

});