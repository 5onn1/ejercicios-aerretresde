// Variable que contiene el botón del formulario
let button = document.querySelector("#submit");

// Al enviar el formulario
button.addEventListener("click", (e) => {
  // Se declaran las variables a utilizar
  let input1 = document.querySelector("#string1").value;
  let input2 = document.querySelector("#string2").value;
  let resultado = document.querySelector("#result");
  let result = null;
  // Prevenir el evento submit del formulario
  e.preventDefault();

  // Crear un array para cada input
  let arrayPalabra1 = input1.split("");
  let arrayPalabra2 = input2.split("");

  // Almacenar la longitud de cada array
  let longitudArrayUno = arrayPalabra1.length;
  let longitudArrayDos = arrayPalabra2.length;

  // Si la longitud de la primer palabra es mayor que la segunda palabra retornar falso.
  if (longitudArrayUno > longitudArrayDos) {
    result = false;
    resultado.textContent = "Resultado: Falso";
  // Si la longitud de la primer palabra es menor o igual que la segunda palabra entonces evaluar.
  } else {
    // Se crea un array para almacenar los caracteres que formarán la palabra y al finalizar se compara la longitud del array3 con el array de la palabra uno
    let array3 = [];
    console.log("Seguir evaluando");
    // Recorrer el primer array
    arrayPalabra1.forEach(element => {
      // Por cada elemento del primer array, recorrer el segundo array
      for (let index = 0; index < longitudArrayDos; index++) {
        // Asignar a una variable el elemento actual del segundo array
        const element2 = arrayPalabra2[index];
        // Si coniciden los elementos entonces:
        if (element == element2) {
          console.log("true: ", element + " es igual a: ", element2);
          // Ingresar el elemento que coincide en el tercer array,
          // deshabilitar el elemento para evitar repetirlo y
          // saltar a la siguiente iteración
          array3.push(element2);
          console.log("array3: " + array3);
          arrayPalabra2[index] = 1;
          console.log("arrayPalabra2:" + arrayPalabra2);
          break;
        }
      }
    });
    //console.log("Resultados: arrayPalabra1 -> " + arrayPalabra1 + ", array3: " + array3);
    if (array3.length == longitudArrayUno) {
      resultado.textContent = "Resultado: Verdadero";
    } else {
      resultado.textContent = "Resultado: Falso";
    }
  }
})

/*
En resumen: 
-> Se crea un array para cada palabra ingresada.
-> Se recorre el primer array.
-> Por cada elemento del primer array, se recorre el segundo array en busca de coincidencias.
-> Al haber coincidencias en el recorrido, se almacena el elemento del array 2 que coincidio con el primero en un nuevo array llamado "array3" y se deshabilita el elemento del array2 haciendo su valor igual a 1 para evitar que se vuelva a evaluar.
-> Al finalizar los recorridos, se compara la longitud del array3
 con la del array de la palabra_uno
 -> Si las longitudes son iguales, retorna true, en caso contrario retorna falso
 */