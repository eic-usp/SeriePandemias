var covid = document.getElementById("covid");
var colera = document.getElementById("colera");
var gripe = document.getElementById("gripe");
var peste = document.getElementById("peste");
var tifo = document.getElementById("tifo");
var variola = document.getElementById("variola");

document.getElementById("Replay").disabled = true;

covid.onended = event => {
  document.getElementById("Replay").disabled = false;
}
colera.onended = event => {
    document.getElementById("Replay").disabled = false;
}
gripe.onended = event => {
    document.getElementById("Replay").disabled = false;
}
peste.onended = event => {
    document.getElementById("Replay").disabled = false;
}
tifo.onended = event => {
    document.getElementById("Replay").disabled = false;
}
variola.onended = event => {
    document.getElementById("Replay").disabled = false;
}
covid.onclick = event =>{
    document.getElementById("Replay").disabled = false;
}