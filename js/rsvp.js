/* ========================================= */
/* RSVP */
/* ========================================= */

const form =
document.getElementById(
"rsvpForm"
);

form.addEventListener(

"submit",

async(e)=>{

e.preventDefault();

/* ========================================= */
/* DATA */
/* ========================================= */

const data =
new FormData(form);

/* ========================================= */
/* SEND */
/* ========================================= */

try{

await fetch(

form.action,

{

method:"POST",

body:data,

headers:{

Accept:
"application/json"

}

}

);

/* ========================================= */
/* SUCCESS */
/* ========================================= */

showWaxSeal();

}catch(error){

console.log(error);

}

}
);

/* ========================================= */
/* WAX */
/* ========================================= */

function showWaxSeal(){

const modal =
document.querySelector(
".modal-container"
);

modal.innerHTML = `

<div class="thank-you">

<div id="waxAnimation"
class="show">

🕯️

</div>

<h2>

Grazie.

</h2>

<p>

Vi aspettiamo a Torre del Parco.

</p>

</div>

`;

}