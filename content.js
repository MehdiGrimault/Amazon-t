const button = document.getElementById("nav-search-submit-button");

button.addEventListener("click", function(){ 
    let input = document.getElementById("twotabsearchtextbox").value;
    let link = `https://www.leboncoin.fr/recherche?text=${input}`;
    alert(link); });

