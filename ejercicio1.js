// Variable que contiene el botón del formulario
let button = document.querySelector("#submit");

function palabraUnoEnDos(palabraUno, palabraDos) {
  if (palabraUno.length > palabraDos.length) {
    return false;
  } else {
    // Crear un array para cada input y almacenar su longitud
    let arrayPalabra1 = palabraUno.split("");
    let arrayPalabra2 = palabraDos.split("");

    // Array para almacenar los caracteres de arrayPalabra2 que coincidan con los de arrayPalabra1
    let array3 = [];
    // Por cada elemento del primer array, recorrer el segundo array
    arrayPalabra1.forEach(element => {
      for (let index = 0; index < arrayPalabra2.length; index++) {
        // Almacenar el elemento actual del segundo array
        const element2 = arrayPalabra2[index];
        /* Al coincidir, ingresar el elemento actual en array3 y deshabilitarlo de arrayPalabra2 para evitar repetirlo. */
        if (element == element2) {
          array3.push(element2);
          arrayPalabra2[index] = 1;
          break;
        }
      }
    });
    // Si las longitudes son iguales, entoces se puede formar la palabra
    if (array3.length == arrayPalabra1.length) {
      return true;
    } else {
      return false;
    }
  }
}

// Al enviar el formulario
button.addEventListener("click", (e) => {
  // Prevenir el evento submit del formulario
  e.preventDefault();
  // Se declaran las variables a utilizar
  let input1 = document.querySelector("#string1").value;
  let input2 = document.querySelector("#string2").value;
  let resultado = document.querySelector("#result");
  
  if (palabraUnoEnDos(input1, input2)) {
    resultado.textContent = "Resultado: Verdadero";
  } else {
    resultado.textContent = "Resultado: Falso";
  }
});

/*
En resumen: 
-> Se crea un array para cada palabra ingresada.
-> Se recorre arrayPalabra1.
-> Por cada elemento de arrayPalabra1, se recorre arrayPalabra2 en busca de coincidencias.
-> Al haber coincidencias se almacena el elemento de arrayPalabra2 que coincidio con arrayPalabra1 en array3 y se deshabilita el elemento de arrayPalabra2 haciendo su valor igual a 1 para evitar que se vuelva a evaluar.
-> Al finalizar los recorridos, se comparan las longitudes de array3 y arrayPalabra1.
-> Si las longitudes son iguales, retorna true, en caso contrario retorna false
*/