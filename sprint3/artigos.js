function getArticle() {
    const artigo = document.getElementById("post");
    localStorage.setItem("lastArticle", "Oi");
    artigo.innerText = localStorage.getItem("lastArticle");
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("testeArt").addEventListener('click', getArticle);
  });