const modal =
document.getElementById(
"rsvpModal"
);

const openModal =
document.getElementById(
"openRSVP"
);

const closeModal =
document.getElementById(
"closeRSVP"
);

openModal.onclick = ()=>{

modal.style.display =
"flex";

};

closeModal.onclick = ()=>{

modal.style.display =
"none";

};

window.onclick = (e)=>{

if(e.target === modal){

modal.style.display =
"none";

}

};