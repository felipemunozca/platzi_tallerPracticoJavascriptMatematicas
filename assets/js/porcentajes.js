/***** Ejercicio clase 6  *****/
    /* 
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
    */

/***** Ejercicio clase 7  *****/
    //declarar variables.
    const inputPrecio = document.querySelector('#precio');
    const inputDescuento = document.querySelector('#descuento');
    const btn = document.querySelector('#calcular');
    const pResultado = document.querySelector('#resultado');

    //evento al precionar el boton.
    btn.addEventListener('click', calcularPrecioConDescuento);

    //funcion para hacer los calculos.
    function calcularPrecioConDescuento() {

        //const valorPrecio = inputPrecio.value;
        //const valorDescuento = inputDescuento.value;
        //Un error que se produjo, es que al obtener los valores de los input, javascript los estaba recibiendo como TEXTOS aunque en el formulario se indicaba que serian numeros, por lo que una forma de corregir esto, es agregando la propiedad NUMBER para indicarle a javascript cual es el tipo de datos correcto que se esta recibiendo.
        const valorPrecio = Number(inputPrecio.value);
        const valorDescuento = Number(inputDescuento.value);

        //se crean unas validaciones previas.

        //SI NO hay un valorPrecio o un valorDescuento, se le mostrara un mensaje al usuario utilizando la etiqueta pResultado.
        if (!valorPrecio || !valorDescuento) {
            pResultado.innerText = 'Debe llenar ambos campos del formulario';
            //utilizando return corto la ejecucion del codigo, es decir que si uno o los dos input no tienen valores, el ciclo if detectara eso, mostrara el mensaje y detendra la ejecucion de las siquientes lineas de codigo.
            return;
        }

        //En el caso en el que usuario escriba un descuento mayor a 100, le envio un mensaje indicandole que eso no puedo ser.
        if (valorDescuento > 100) {
            pResultado.innerText = 'El porcentaje de descuento no puede ser mayor al 100%';
            return;
        }

        // FORMULA = (P * (100 - D)) /100
        const nuevoPrecio = (valorPrecio * (100 - valorDescuento)) / 100;

        pResultado.innerText = 'El nuevo precio con descuento es $' + nuevoPrecio;
        console.log(nuevoPrecio)
    };