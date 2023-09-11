let currentSearch = window.location.search;
let newSearch = currentSearch.slice(3);
let input = newSearch.split('&')[0];

let b = document.body;
let newP = document.createElement('div');
let src = chrome.runtime.getURL("logo.png");
newP.innerHTML = `<div id="popup-overlay">
<div class="popup-content">
    <h2>Ça te dirait de faire un geste pour la Planète ?</h2>
    <p>Prends quelques minutes pour chercher ton article en seconde main !</p>
    <a href=https://www.leboncoin.fr/recherche?text=${input} id="popup-link">LeBonCoin</a>
    <a href=https://www.backmarket.fr/search?q=${input} id="popup-link">Back Marcket</a>
    <a href=https://www.vinted.fr/catalog?search_text=${input} id="popup-link">Vinted</a>
    <a href="javascript:void(0)"  id="popup-exit">Fermer</a>
    <img src=${src}>
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

img {
    width: 100px;
    height: 100px;
    position: absolute;
    bottom : 10px;
    right: 10px;
}

.popup-content {
    max-width: 600px;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    background: rgb(164,212,180);
    position: absolute;
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    border-radius : 5px;
    
}

.popup-content p {
    margin : 20px 0;
}

#popup-link {
    text-decoration: none;
    color: rgba(65,167,152,255);
    background: white;
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
}

#popup-exit {
    text-decoration: none;
    position: absolute;
    top : -15px;
    right: -25px;
    color: rgba(65,167,152,255);
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

document.querySelector("#popup-exit").addEventListener("click", togglePopup);


