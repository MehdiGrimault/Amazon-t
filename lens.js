


setTimeout(() => {
    let results = document.querySelectorAll("[data-action-url]");
    function allowedUrl (url) {
        for (const element of secondHandUrl) {
            if (url.startsWith(element)) {
            return true;
            }
        }
        return false;
    }

    let secondHandUrl = ["https://www.leboncoin","https://www.backmarket","https://www.vinted","https://omaj","https://www.ebay","https://gensdeconfiance","https://www.troc","https://ladycocotte","https://www.happycash","https://le-ricochet","https://www.onceagain", "https://www.easycash","https://biicou","https://www.label-emmaus","https://fr.vestiairecollective","https://www.depop","https://www.recyclivre","https://shop.labourseauxlivres","https://www.livrensemble"]

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
        imgLink.className="imgLink" ;
        let titleLink = document.createElement('a');
        titleLink.className="titleLink";
        let pName = document.createElement('p');
        pName.className="pName";
        divArticle.prepend(imgLink,pName,titleLink);

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
    <div id="header">
      <img src=${src}>
      <h1>Fais ton choix parmi ces articles de 2nde main !</h1>
    </div>
    ${responses.join('')}
    <a href="javascript:void(0)"  id="popup-exit">Fermer</a>
</div>
</div>`;

//Ajoute le paragraphe créé comme premier enfant de l'élément body
if(responses.length>0){
  b.prepend(newDiv);
}
//Ajout du CSS
let stylePopup = document.createElement('style');
stylePopup.innerHTML = `

#popup-overlay {
  position: fixed;
  top: 20%;
  right: 5%;
  z-index: 98;
  display: none;
  height: 60%;
  width: 40%;
}

#popup-overlay.open {
    display: block !important;

}

/*première div qui contient les autres div d'articles*/
.popup-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-row-gap:15px;
    grid-column-gap:15px;
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

/*div pour chaque article*/
.popup-content div {
  display: grid;
  grid-template-rows: 100px 100px;
  grid-auto-columns: 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  color:white;
  background-color:rgba(65,167,152,255);
  border-radius : 5px;
  height: 200px;
}

.popup-content div .imgLink { 
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 1;
  grid-column-end: 1;
  display:flex;
  justify-content:center;
  align-items:center;
  margin: 10px;
}

.popup-content div .imgLink img{
  border-radius:5px;
  position:relative;
  margin:auto;
  height:125%;
}

.popup-content div .pName { 
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 2;
  grid-column-end: 2;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 30px;
}

.popup-content div .titleLink { 
  grid-row-start: 2;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column: span 2;
  color:white;
  text-decoration:underline;
  display:flex;
  justify-content:center;
  align-items:center;
}

.popup-content div .titleLink p { 
  text-align: center;
}


#header {
  grid-column: span 2;
  height: 100px;
  left: 5%;
  top: 5%;
}

#header {
  background: rgb(164,212,180);
  margin-bottom: 15px;
}

#header img {
  position: relative;
  height: 100%;
}

#header h1 {
  position: absolute;
  margin-left: 18%;
  text-align: center;
  color: black;
  font-size: 20px;
  margin-top: 7%;
}


#popup-exit {
    text-decoration: none;
    position: absolute;
    top : 0px;
    right: 0px;
    color: rgba(65,167,152,255);
    background: white;
    border:solid;
    border-color:rgba(65,167,152,255);
    padding: 5px 10px;
    border-radius: 5px;
}

#scroll{
  overflow:scroll;
  }
   
`;

document.head.appendChild(stylePopup);

togglePopup();

function togglePopup() {
let popup = document.querySelector("#popup-overlay");
popup.classList.toggle("open");

}

document.querySelector("#popup-exit").addEventListener("click", togglePopup);
}, 2000);
