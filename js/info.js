/* ================================================= */
/* COPY IBAN */
/* ================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const copyIbanButton =
    document.querySelector(".copy-iban-button");

  const copyFeedback =
    document.getElementById("copyFeedback");

  if(!copyIbanButton){
    return;
  }

  copyIbanButton.addEventListener("click", async () => {

    const targetId =
      copyIbanButton.getAttribute("data-copy-target");

    const target =
      document.getElementById(targetId);

    if(!target){
      return;
    }

    const iban =
      target.textContent
        .replace(/\s+/g," ")
        .trim();

    let copied = false;

    try{

      if(navigator.clipboard && window.isSecureContext){

        await navigator.clipboard.writeText(iban);
        copied = true;

      }

    }catch(error){
      copied = false;
    }

    if(!copied){

      const textarea =
        document.createElement("textarea");

      textarea.value = iban;
      textarea.setAttribute("readonly","");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "-9999px";

      document.body.appendChild(textarea);

      textarea.focus();
      textarea.select();

      try{
        document.execCommand("copy");
        copied = true;
      }catch(error){
        copied = false;
      }

      document.body.removeChild(textarea);

    }

    if(copyFeedback){

      copyFeedback.textContent =
        copied ? "IBAN copiato" : "Copia manualmente l'IBAN";

      copyFeedback.classList.add("is-visible");

      setTimeout(() => {
        copyFeedback.classList.remove("is-visible");
      },1800);

    }

  });

});