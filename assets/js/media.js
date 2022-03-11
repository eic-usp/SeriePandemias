var covid = document.getElementById("covid");
var colera = document.getElementById("colera");
var gripe = document.getElementById("gripe");
var peste = document.getElementById("peste");
var tifo = document.getElementById("tifo");
var variola = document.getElementById("variola");
var repetir = document.getElementById("novamente");
var repeat1 = document.getElementById("play1");
var covid1 = docuument.getElementById("covid");

covid.onended = event => {
    window.location = "fim.html"
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
covid.onclick = event =>{
    window.location = "covid.html"
}