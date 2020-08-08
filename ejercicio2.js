function ordenaFrase(frase) {
  // Párrafo donde se mostrará el resultado
  let resultado = document.querySelector("#result");
  // Array de la frase
  let arrayFrase = frase.split(" ");
  let array2 = [];
  // Se ingresan valores en array2 creando un array asociativo {position : value} done position es el numero en cada palabra y value es la palabra. 
  arrayFrase.forEach((element) => {
    for (let index = 0; index < arrayFrase.length; index++) {
      // Se recorre arrayFrase hasta detectar el número del elemento
      if (element.includes(index+1)) {
        array2.push({position: index+1, value: element});
        break;
      }
    }
  });
  // Ordenar array2 de menor a mayor según el valor de position.
  array2.sort((a,b) => {
    return a.position - b.position;
  });
  let array3 = [];
  // Se genera array3 a partir de array2 con los elementos en el oreden correcto. 
  array2.forEach(elem => {
    array3.push(elem.value);
  });
  // Generar la frase ya ordenada a partir del array3 
  let orderedString = array3.join(" ");
  // Mostrar la frase debajo del formulario.
  resultado.textContent = orderedString;
}

// Botón del formulario
let button = document.querySelector("#submit");

// Al enviar el formulario
button.addEventListener("click", (e) => {
  e.preventDefault();
  // Valor del input ingresado (frase).
  let input1 = document.querySelector("#string1").value;
  // Función que ordena la frase.
  ordenaFrase(input1);
});
  
/*
En resumen:
-> Se crea arrayFrase con las palabras de la frase.
-> Se recorre arrayFrase en busca de detectar el número de cada elemento.
-> Al detectar el número se ingresa el elemento en array2 de forma asociativa:
-> {position : value} done position es el numero en cada palabra y value es la palabra.
-> Se ordena ascendentemente array2 según el valor de position.
-> De array2 se extraen solo las palabras y se ingresan en array3.
-> Por último, a partir de array2 se crea la frase en orderedString.
*/