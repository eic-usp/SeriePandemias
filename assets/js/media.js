var covid = document.getElementById("covid");
var colera = document.getElementById("colera");
var gripe = document.getElementById("gripe");
var peste = document.getElementById("peste");
var tifo = document.getElementById("tifo");
var variola = document.getElementById("variola");
var repetir = document.getElementById("novamente");
var repeat1 = document.getElementsByClassName("play1");

covid.onended = event => {
    window.location = "fim.html"
}
covid.onplay = event => {
  function insert() {
        covid.classList.add("play1")
        console.log(covid.classList)
    }
    insert()
}
colera.onended = event => {
    window.location = "fim.html"
}
gripe.onended = event => {
    window.location = "fim.html"
}
peste.onended = event => {
    window.location = "fim.html"
}
tifo.onended = event => {
    window.location = "fim.html"
}
variola.onended = event => {
    window.location = "fim.html"
}
repetir.onclick = event =>{
    repeat().then(function(){
        repeat1.classList.remove("play1")
    })
}
function repeat(){
    repeat1.play();
}
