function allowedUrl (url) {
    for (const element of secondHandUrl) {
      if (url.startsWith(element)) {
      return true;
      }
    }
    return false;
  }
  let results = document.querySelectorAll("[data-action-url]");
  let secondHandUrl = ["https://www.leboncoin","https://www.backmarket","https://www.vinted","https://omaj"]
  for (const result of results) {
      let url = result.getAttribute("data-action-url");
      if (!allowedUrl(url)) {
        if (result.parentNode.tagName === "DIV" ) {
          result.parentNode.style.display = "none";
        }
      }
    }
    results[0].parentNode.parentNode.parentNode.style = "display: flex; align-items: center; justify-content: center";