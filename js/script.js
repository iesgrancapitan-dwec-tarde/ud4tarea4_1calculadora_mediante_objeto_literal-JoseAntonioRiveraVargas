// Creamos un div y le agregamos el id --> Calculadora 
const calculadora = document.createElement('div');
calculadora.setAttribute('id', 'calculadora');

//  Le agregamos ancho, margen, fonde de color, padding y borde redondeado
calculadora.style.width = '400px';
calculadora.style.margin = 'auto';
calculadora.style.backgroundColor = '#eee';
calculadora.style.padding = '20px';
calculadora.style.borderRadius = '10px';

// Creamos la barra de resultado de tipo text con el id resultado y por defecto esta deshabilitado
const resultado = document.createElement('input');
resultado.setAttribute('type', 'text');
resultado.setAttribute('id', 'resultado');
resultado.setAttribute('disabled', 'true');

// A la barra de resultado le agregamos estilo css
resultado.style.width = '100%';
resultado.style.height = '50px';
resultado.style.fontSize = '20px';
resultado.style.textAlign = 'right';
resultado.style.marginBottom = '20px';

// agregramos a la calculadora la barra de resultado
calculadora.appendChild(resultado);

// Creamos un array con todos los valores de la calculadora
const buttons = ['CE', '←', '%', '+', '7', '8', '9', '-', '4', '5', '6', 'X', '1', '2', '3', '÷', '0', '±', ',', '='];

// recorremos el array creando un boton por cada elemento con su estilo correspondiente y le agregamos a la calculadora 
buttons.forEach((value) => {
  const button = document.createElement('button');
  button.innerText = value;
  button.style.margin = '10px';
  button.style.width = '20%';
  button.style.height = '50px';
  button.style.fontSize = '20px';
  calculadora.appendChild(button);


  button.addEventListener("click", function (e) {
    if (!isNaN(value)) {
      resultado.value == 0 ? resultado.value = value : resultado.value += value;
    }
    if(value == 'CE'){
      resultado.value = 0;
    }
    if (value == '←') {
      resultado.value = parseInt(resultado.value.toString().slice(0, -1));
    };
    if (value == ',') {
      resultado.value += ","
    };


  });
});

// Agregamos la calculadora al body del html
document.body.appendChild(calculadora);

// Tarea 4.1. Calculadora mediante objeto literal pendiente
// Inicialmente en el display aparece el cero sin decimal.
resultado.value = 0;

// En el display sólo puede aparecer un punto decimal.
function formatearResultado(num) {
  resultado.value = parseFloat(num).toFixed(1);
}

// 