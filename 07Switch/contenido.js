var combustible = "Super90";

/*
if (combustible == "Diesel") {
  alert("1,09$");
}
if (combustible == "Super95"){
  alert("1,14$");
}
*/

switch(combustible){
  case "Diesel":
    alert("1,02$");
    break;
  case "Super97":
    alert("1,45$");
    break;
  case "Super95":
    alert("1,67$");
    break;
  default:
    alert("No existe en el catalogo");
}
