/*
// Variable que contiene el botón del formulario
let button = document.querySelector("#submit");

function ordenaFrase(frase) {
  let resultado = document.querySelector("#result");
  // Array de la frase
  let arrayFrase = frase.split(" ");
  let array2 = [];

  arrayFrase.forEach((element, indexel) => {
    for (let index = 0; index < arrayFrase.length; index++) {
      if (element.includes(index+1)) {
        //console.log(element, " includes:" + (index+1) + " on index:"+ indexel);
        array2.push({position: index+1, value: element});
      }
    }

  });
  // Ordenar el array de menor a mayor.
  array2.sort((a,b) => {
    return a.position - b.position
  });
  
  let orderedString = "";
  array2.forEach((elem, index) => {
    orderedString += elem.value + " ";
  })
  console.log(orderedString);
  resultado.textContent = orderedString;
  console.log(arrayFrase.sort());
}

// Al enviar el formulario
button.addEventListener("click", (e) => {
  // Prevenir el evento submit del formulario
  e.preventDefault();
  // Se declaran las variables a utilizar
  let input1 = document.querySelector("#string1").value;
  ordenaFrase(input1)
});
  
/*
En resumen: 
-> 
*/

// Variable que contiene el botón del formulario
let button = document.querySelector("#submit");

function ordenaFrase(frase) {
  let resultado = document.querySelector("#result");
  // Array de la frase
  let arrayFrase = frase.split(" ");
  let array2 = [];

  arrayFrase.forEach((element, indexel) => {
    for (let index = 0; index < arrayFrase.length; index++) {
      if (element.includes(index+1)) {
        console.log(element, " includes:" + (index+1) + " on index:"+ indexel);
        array2.push({position: index+1, value: element});
      }
    }

  });
  // Ordenar el array de menor a mayor.
  array2.sort((a,b) => {
    return a.position - b.position
  });
  
  let orderedString = "";
  array2.forEach((elem, index) => {
    orderedString += elem.value + " ";
  })
  console.log(orderedString);
  resultado.textContent = orderedString;
  console.log(arrayFrase.sort());
}

// Al enviar el formulario
button.addEventListener("click", (e) => {
  // Prevenir el evento submit del formulario
  e.preventDefault();
  // Se declaran las variables a utilizar
  let input1 = document.querySelector("#string1").value;
  ordenaFrase(input1)
});
  
/*
En resumen: 
-> 
*/