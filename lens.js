
let results = document.querySelectorAll("[data-action-url]");

setTimeout(() => {
    
    function allowedUrl (url) {
        for (const element of secondHandUrl) {
            if (url.startsWith(element)) {
            return true;
            }
        }
        return false;
    }

    let secondHandUrl = ["https://www.leboncoin","https://www.backmarket","https://www.vinted","https://omaj","https://www.ebay"]

    let responses = [];


for (const result of results) {
    let url = result.getAttribute("data-action-url");
    if (allowedUrl(url) && result.getAttribute("class") === "Vd9M6 " ) {
        let link = result.firstElementChild.getAttribute("href");
        let title = result.firstElementChild.firstElementChild.getAttribute("data-item-title");
        let img = result.firstElementChild.firstElementChild.getAttribute("data-thumbnail-url");
        let name = result.firstElementChild.firstElementChild.lastElementChild.firstElementChild.lastElementChild.firstElementChild.innerText;

        let divArticle = document.createElement('div');

        let imgLink = document.createElement('a'); 
        let titleLink = document.createElement('a');
        let pName = document.createElement('p');
        divArticle.prepend(titleLink,imgLink, pName);

        imgLink.href = link;
        titleLink.href = link;
        pName.innerText = name;

        let imgArticle = document.createElement('img');
        imgArticle.src = img;
        imgLink.prepend(imgArticle);

        let titleArticle = document.createElement('p');
        titleArticle.innerText = title;
        titleLink.prepend(titleArticle);


        



        responses.push(divArticle.outerHTML);
    }
}
console.log(responses);

let b = document.body;
let src = chrome.runtime.getURL("logo.png");
let newDiv = document.createElement('div');
newDiv.innerHTML = `<div id="popup-overlay">
<div class="popup-content">
    ${responses.join('')}
    <a href="javascript:void(0)"  id="popup-exit">Fermer</a>
</div>
</div>`;

//Ajoute le paragraphe créé comme premier enfant de l'élément body
b.prepend(newDiv);

// Ajout du CSS
let stylePopup = document.createElement('style');
stylePopup.innerHTML = `#popup-overlay {
    position : fixed;
    top : 100px;
    left : 100px;
    right :0;
    bottom : 0;
    background : rgba(0, 0, 0, 0.7);
    z-index: 98;
    display: none;
    height: 500px;
    width: 1000px;
}

#popup-overlay.open {
    display: block !important;

}


.popup-content {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    width: 100%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    background: rgb(164,212,180);
    position: relative;
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    border-radius : 5px;
    overflow: scroll;
}


.popup-content div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    position: flex;
    justify-content : center;
    align-items: space-between;
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
}, 1000);
