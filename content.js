

    let b = document.body;
    let newP = document.createElement('div');
    newP.innerHTML = `<div id="popup-overlay">
    <div class="popup-content">
      <h2>As-tu pensé à aller sur le Bon Coin ?</h2>
      <p>Cliquez sur le lien ci-dessous !</p>
      <a href=https://www.leboncoin.fr/ class="popup-link">Lien vers LeBonCoin</a>
      <a href="javascript:void(0)"  class="popup-exit">Fermer</a>
    </div>
  </div>`;
    
    //Ajoute le paragraphe créé comme premier enfant de l'élément body
    b.prepend(newP);

    togglePopup();



   function togglePopup() {
    let popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open");
    
  }


//document.querySelector(".popup-exit").addEventListener("click", togglePopup);
