//Defino unas cuantas funciones
function primeraFuncion(){
  segundaFuncion();
}
function segundaFuncion(){
  terceraFuncion();
}
function terceraFuncion(){
  alert("Hasta aqui funciono")
  cuartaFuncion();
}
function cuartaFuncion(){
  titulo.innerHTML = "Este es un NUEVO titulo";
}
//Esta es la funcion original
var titulo = document.getElementById("mititulo");
titulo.onclick = function(){

  primeraFuncion();

}
