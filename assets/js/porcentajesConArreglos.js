/***** Ejercicio clase 9  *****/
    const inputPrecio3 = document.querySelector('#precio3');
    const inputCupon3 = document.querySelector('#cupon3');
    const btn3 = document.querySelector('#calcular3');
    const pResultado3 = document.querySelector('#resultado3');

    btn3.addEventListener('click', calcularPrecioConCupon);

    //creo un objeto para definir los cupones, la palabra clave y el valor del descuento. La ventaja de trabajar con objetos, es que puedo colocar tantos codigos como quiera, o luego borrar algunos que ya no use y la aplicacion seguiria funcionando bien, ya que no debo tocar el codigo de la logica del programa.
    /* 
    const objetoCupones = {
        'JuanDC_es_Batman': 30,
        'pero_es_un_secreto': 20,
        'no_le_digas_a_nadie': 10,
    } 
    */

    //Otra forma de trabajar con multiples cupones es utilizando un arreglo. Creo un arreglo vacio.
    //la ventaja de utilizar arreglos es que podemos guardar mas informacion, por ejemplo: fecha maxima, descuentos para cierto perfil, limite de cuanto es lo que se puede descontar.
    const arregloCupones = [];

    arregloCupones.push({
        nombre: 'JuanDC_es_Batman', 
        porcentaje: 30,
    });
    arregloCupones.push({
        nombre: 'pero_es_un_secreto', 
        porcentaje: 20,
    });
    arregloCupones.push({
        nombre: 'no_le_digas_a_nadie', 
        porcentaje: 10,
    });

    function calcularPrecioConCupon() {

        const valorPrecio = Number(inputPrecio3.value);
        const textoCupon = inputCupon3.value;
        let descuento;

        if (!valorPrecio || !textoCupon) {
            pResultado3.innerText = 'Debe llenar ambos campos del formulario';
            return;
        }

        //con 1 solo condicional validar todos los cupones y asignar su respectivo descuento utilizando objetos.
        /* 
        if (objetoCupones[textoCupon]) {
            descuento = objetoCupones[textoCupon];
        } else {
            pResultado3.innerText = 'El cupón no es válido';
            return;
        } 
        */

        //con 1 solo condicional validar todos los cupones y asignar su respectivo descuento utilizando arreglos utilizando el metodo filter.

        function existeCuponEnArreglo(elementoArreglo) {
            //utilizando un return para buscar si dentro de los "nombre" del arreglo si existe un texto igual a lo que escribio escribio el usuario en el input. La respuesta sera un TRUE o FALSE.
            return elementoArreglo.nombre == textoCupon;
        }

        //El método find nos devuelve el primer objeto que encuentre que cumple con la validacion. En este caso se envia como argumento una funcion.
        //DOCUMENTACION OFICIAL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        const cuponEnArreglo = arregloCupones.find(existeCuponEnArreglo);

        if (cuponEnArreglo) {
            //Si el texto escrito por el usuario en el input existe en el arreglo, el valor de descuento sera igual al que este asignado en la propiedad porcentaje del objeto.
            descuento = cuponEnArreglo.porcentaje;
        } else {
            pResultado3.innerText = 'El cupón no es válido';
            return;
        }

        const nuevoPrecio = (valorPrecio * (100 - descuento)) / 100;

        pResultado3.innerText = 'El nuevo precio con cupón es $' + nuevoPrecio;
    
    }

