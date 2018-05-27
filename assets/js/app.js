/*Imagina que estás pidiendo comida en un restaurante.
 Tu plato favorito es ceviche, así que lo elegirías si está en el menú.
 Si no hay ceviche, elegirías tacos al pastor. 
 Si eso no está, te irías por empanada chilena. 
 En el caso raro que ninguna de esas opciones esté disponible, te irías por una hamburguesa. 
 Escribe una función, que de acuerdo a la disponibilidad de los platos en el menú, decidas qué ordenar. */

 
const restaurant = function (){ 
let foodOrden = prompt("¿Cuál es el plato que deseas ordenar");

if (foodOrden === "ceviche"){
    alert("¡Lo siento!No se encuentra disponible este plato por el momento");
}else if(foodOrden === "tacos de al pastor"){
    alert("¡Lo siento!No se encuentra disponible este plato por el momento")
}else if(foodOrden === "empanada chilena"){
  alert("¡Este plato si esta diponible!")
}else {
  alert("En caso de que no este el plato que te guste te ofrecemos hambuerguesas");
}
}   
restaurant();
