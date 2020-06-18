'use strict'

var palabra = prompt('Ingrese la palabra:','');

var capitalizada = palabra.replace(/^\w/, (c) => c.toUpperCase());


alert("La palabra Capitalizada es: "+ capitalizada);
