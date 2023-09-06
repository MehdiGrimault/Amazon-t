const button = document.getElementById("nav-search-submit-button");

button.addEventListener("click", function(){ 
    //let input = document.getElementById("twotabsearchtextbox").value;
    //let link = `https://www.leboncoin.fr/recherche?text=${input}`;
    togglePopup();
   });

function togglePopup() {
    console.log("ok google");
   
// Crée l'élément p pour le paragraphe
let paragraph = document.createElement("p");
paragraph.textContent = "Cliquez sur le lien ci-dessous !";

// Ajoute la popup dans le corps (body) du document
document.body.appendChild(paragraph);
console.log("hello")
    // let popup = document.querySelector("#popup-overlay");
    // popup.classList.toggle("open");
}

//document.querySelector(".popup-exit").addEventListener("click", togglePopup);
