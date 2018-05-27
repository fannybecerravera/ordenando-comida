/*Imagina que estás pidiendo comida en un restaurante.
 Tu plato favorito es ceviche, así que lo elegirías si está en el menú.
 Si no hay ceviche, elegirías tacos al pastor. 
 Si eso no está, te irías por empanada chilena. 
 En el caso raro que ninguna de esas opciones esté disponible, te irías por una hamburguesa. 
 Escribe una función, que de acuerdo a la disponibilidad de los platos en el menú, decidas qué ordenar. */

 switch (prompt("¿Cuál es el plato que deceas ordenar?")) {
    case"ceviche":
      alert("¡Lo siento!No se encuentra disponible este plato por el momento");
      break;
    case"tacos al pastor":
    alert("¡Lo siento! No se encuentra disponible este plato por el momento");
    case"empanada chilena":
    alert("¡Este plato si esta diponible!");
    break;
    default:
    alert("En caso de que no este el plato que te guste te ofrecemos hambuerguesas");
}


    
    
