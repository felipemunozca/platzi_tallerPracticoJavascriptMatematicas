//declaracion de variables
const inputPrecio = document.querySelector('#inputPrecio');
const inputPorcentaje = document.querySelector('#inputPorcentaje');
const btnCalcular = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');


//evento al presionar el boton
btnCalcular.addEventListener('click', function(e){
    e.preventDefault();

    calcularDescuento();
});


//funcion para hacer el calculo
function calcularDescuento() {

    const precio = inputPrecio.value;
    const descuento = inputPorcentaje.value;
    //formula en la carpeta de imagenes archivo clase_06_formula_descuento.
    const precioFinal = (precio * (100 - descuento) / 100);
    resultado.innerHTML = `$ ${precioFinal}`;
}