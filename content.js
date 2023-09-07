let currentSearch = window.location.search;
let newSearch = currentSearch.slice(3);
let input = newSearch.split('&')[0];

let b = document.body;
let newP = document.createElement('div');
newP.innerHTML = `<div id="popup-overlay">
<div class="popup-content">
    <h2>Ca te dirait de faire un geste pour la Planète ?</h2>
    <p>Prends quelques minutes pour chercher ton article en seconde Main !</p>
    <a href=https://www.leboncoin.fr/recherche?text=${input} class="popup-link">Lien vers LeBonCoin</a>
    <a href="javascript:void(0)"  class="popup-exit">Fermer</a>
</div>
</div>`;

//Ajoute le paragraphe créé comme premier enfant de l'élément body
b.prepend(newP);

// Ajout du CSS
let stylePopup = document.createElement('style');
stylePopup.innerHTML = `#popup-overlay {
    position : fixed;
    top : 0;
    left : 0;
    right :0;
    bottom : 0;
    background : rgba(0, 0, 0, 0.7);
    z-index: 98;
    display: none;
}

#popup-overlay.open {
    display: block !important;

}

.popup-content {
    max-width: 600px;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    background: rgb(143, 188, 143);
    position: absolute;
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    border-radius : 5px;
}

.popup-content p {
    margin : 20px 0;
}

.popup-link {
    text-decoration: none;
    color: black;
    background: white;
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
}

.popup-exit {
    position: absolute;
    top : -5px;
    right: -5px;
    text-decoration: none;
    color: black;
    background: white;
    padding: 5px 10px;
    border-radius: 5px;
}`;

document.head.appendChild(stylePopup);

togglePopup();

function togglePopup() {
let popup = document.querySelector("#popup-overlay");
popup.classList.toggle("open");

}

document.querySelector(".popup-exit").addEventListener("click", togglePopup);


