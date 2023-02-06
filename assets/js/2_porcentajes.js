/**
 * CLASE 6: Cómo calcular porcentajes
 * 
 * Se declararan de variables obtenidas desde porcentajes.html
 * Se crea evento al presionar el boton.
 * Se crea la funcion para hacer el calculo utilizando la formula que esta en la carpeta de imagenes: clase_06_formula_descuento.
 */

/* 
const inputPrecio = document.querySelector('#inputPrecio');
const inputPorcentaje = document.querySelector('#inputPorcentaje');
const btnCalcular = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

btnCalcular.addEventListener('click', function(e){
    e.preventDefault();
    calcularDescuento();
});

function calcularDescuento() {
    const precio = inputPrecio.value;
    const descuento = inputPorcentaje.value;
    const precioFinal = (precio * (100 - descuento) / 100);
    resultado.innerHTML = `$ ${precioFinal}`;
} 
*/


/**
 * CLASE 7: Calculando descuentos con JavaScript
 * 
 * Se declararan de variables obtenidas desde porcentajes.html
 * Se crea evento al presionar el boton "Calcular descuento".
 * Se crea una funcion calcularPrecioConDescuento() para hacer los calculos.
 * Un error que se produjo, es que al obtener los valores de los input, JavaScript los estaba recibiendo como TEXTOS aunque en el formulario se indicaba que serian
 *      numeros, por lo que una forma de corregir esto, es agregando la propiedad NUMBER para indicarle al compilador de JavaScript cual es el tipo de datos correcto 
 *      que se esta recibiendo.
 * 
 * Se crean validaciones previas, para confirmar que la informacion que se requiere es correcta.
 * Utilizando el simbolo de exclamacion ! JavaScript entiende que esa validacion es negativa. Esto se entiende de esta forma; SI NO hay un valorPrecio o un 
 *      valorDescuento, se mostrara un mensaje al usuario utilizando la etiqueta pResultado.
 * Utilizando "return", se corta la ejecucion del codigo, es decir, que si una de las validaciones no se cumple, se para la ejecucion del codigo y no leera las demas
 *      lineas de codigo de la funcion.
 * 
 * En el caso en que el usuario escriba un descuento mayor a 100, se le envia un mensaje indicandole que existe un error.
 * Finalmente, para ver el resultado, se utiliza innertext para enviar la respuesta directamente al HTML.
 */
const inputPrecio = document.querySelector('#precio');
const inputDescuento = document.querySelector('#descuento');
const btn = document.querySelector('#calcular');
const pResultado = document.querySelector('#resultado');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {

    //const valorPrecio = inputPrecio.value;
    //const valorDescuento = inputDescuento.value;
    const valorPrecio = Number(inputPrecio.value);
    const valorDescuento = Number(inputDescuento.value);

    if (!valorPrecio || !valorDescuento) {
        pResultado.innerText = 'Debe llenar ambos campos del formulario';
        return;
    }

    if (valorDescuento > 100) {
        pResultado.innerText = 'El porcentaje de descuento no puede ser mayor al 100%';
        return;
    }
    //FORMULA = (P * (100 - D)) /100
    const nuevoPrecio = (valorPrecio * (100 - valorDescuento)) / 100;
    pResultado.innerText = 'El nuevo precio con descuento es $' + nuevoPrecio;
};


/**
 * CLASE 8: Cupones de descuento
 * 
 * Se crean dos variables que recibiran los valores desde los input. La primera sera "valorPrecio" la cual sera de tipo NUMBER para definir su valor como un numero. 
 *      La segunda sera "cupon" que sera de tipo string (TEXTO) ya que debe leer una palabra o codigo.
 * Se crea una variable "descuento", a la cual no se le asigna ningun valor de momento. El valor se le asignara dependiendo del cupon que escriba el usuario. 
 *      Debe ser let, ya que el valor cambiara segun sea el caso.
 * 
 * Se crea un ciclo if-elseif-else con los nombres de los cupones y con el valor de "descuento" que cada uno tiene.
 * Se reempleza el ciclo if-elseif-else por un switch-case, esta opcion es mucho mas util para casos en los que se tengan muchos datos a comparar. Por ejemplo, si
 *      una empresa maneja muchos codigos de descuento dependiendo de los años que tenga un cliente comprando en esa empresa, crear multiples if-else puede ser 
 *      complicado de leer y mucho mas de editar y optimizar el codigo. Por lo que con switch-case es mas facil de entender, editar y mejorar.
 */
const inputPrecio2 = document.querySelector('#precio2');
const inputCupon = document.querySelector('#cupon');
const btn2 = document.querySelector('#calcular2');
const pResultado2 = document.querySelector('#resultado2');

btn2.addEventListener('click', calcularPrecioConCupon);

function calcularPrecioConCupon() {

    const valorPrecio = Number(inputPrecio2.value);
    const cupon = inputCupon.value;
    let descuento;

    if (!valorPrecio || !cupon) {
        pResultado2.innerText = 'Debe llenar ambos campos del formulario';
        return;
    }

    // if (cupon == 'JuanDC_es_Batman') {
    //     descuento = 30;
    // } else if (cupon == 'no_le_digas_a_nadie') {
    //     descuento = 20;
    // } else {
    //     pResultado2.innerText = 'El cupón no es valido';
    //     return;
    // }

    switch (cupon) {
        case 'JuanDC_es_Batman':
            descuento = 30;
            break;
        case 'no_le_digas_a_nadie':
            descuento = 20;
            break;
        default:
            pResultado2.innerText = 'El cupón no es válido';
            return;
    }

    // FORMULA = (P * (100 - D)) /100
    const nuevoPrecio = (valorPrecio * (100 - descuento)) / 100;
    pResultado2.innerText = 'El nuevo precio con cupón es $' + nuevoPrecio;
};


/**
 * CLASE 9: Método find vs. método filter
 * 
 * Se crea un objeto "objetoCupones", la palabra clave y el valor del descuento. La ventaja de trabajar con objetos, es que se puede colocar tantos codigos como sean 
 *      necesarios. Es muy util a la hora de crear nuevos cupones, editar los existentes o borrar los que ya no usen y la gran ventaja es que la aplicacion seguira 
 *      funcionando bien, ya que no se estara tocando la logica del programa.
 * 
 * Otra forma de trabajar con multiples cupones es utilizando un arreglo. 
 * Se crea un arreglo vacio "arregloCupones". Luego, mediante el metodo .push() se cargaran los "nombre" y "porcentaje" de cada cupon. La gran ventaja de utilizar 
 *      arreglos es que podemos guardar mas informacion, por ejemplo: fecha maxima, descuentos para cierto perfil, limite de cuanto es lo que se puede descontar.
 */
const inputPrecio3 = document.querySelector('#precio3');
const inputCupon3 = document.querySelector('#cupon3');
const btn3 = document.querySelector('#calcular3');
const pResultado3 = document.querySelector('#resultado3');

btn3.addEventListener('click', calcularPrecioConCupon);

// const objetoCupones = {
//     'JuanDC_es_Batman': 30,
//     'pero_es_un_secreto': 20,
//     'no_le_digas_a_nadie': 10,
// } 

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

/**
 * CLASE 9 [Continuación]
 * 
 * Se crea una funcion para calcular el valor del precio final con el descuento del cupon.
 * Se crea un solo condicional que validara todos los cupones que existen en el "objetoCupones". Se le pasa el texto que escribe el usuario como un parametro, si existe
 *      se rescatara el valor del descuento, en caso contrario, se mostrara un mensaje indicando un mensaje de error. 
 * 
 * Se crea una nueva funcion para comparar si el texto que escribio el usuario. Utilizando un "return" para buscar si dentro de los "nombre" del arreglo existe un texto
 *      igual a lo que escribio el usuario en el input. La respuesta se leera como un TRUE o FALSE.
 * 
 * Se crea una nueva variable "cuponEnArreglo" la cual es igual al arreglo de cupones junto al método .find() el cual nos devuelve el primer objeto que encuentre que 
 *      cumple con la condicion solicitada. En este caso se envia como argumento la funcion existeCuponEnArreglo().
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * 
 * Se crea un condicional, si el texto escrito por el usuario en el input existe en el arreglo, el valor de "descuento" sera igual al que este asignado en la propiedad 
 *      porcentaje del objeto.
 */
function calcularPrecioConCupon() {

    const valorPrecio = Number(inputPrecio3.value);
    const textoCupon = inputCupon3.value;
    let descuento;

    if (!valorPrecio || !textoCupon) {
        pResultado3.innerText = 'Debe llenar ambos campos del formulario';
        return;
    }

    // if (objetoCupones[textoCupon]) {
    //     descuento = objetoCupones[textoCupon];
    // } else {
    //     pResultado3.innerText = 'El cupón no es válido';
    //     return;
    // }

    function existeCuponEnArreglo(elementoArreglo) {
        return elementoArreglo.nombre == textoCupon;
    }

    const cuponEnArreglo = arregloCupones.find(existeCuponEnArreglo);

    if (cuponEnArreglo) {
        descuento = cuponEnArreglo.porcentaje;
    } else {
        pResultado3.innerText = 'El cupón no es válido';
        return;
    }

    const nuevoPrecio = (valorPrecio * (100 - descuento)) / 100;
    pResultado3.innerText = 'El nuevo precio con cupón es $' + nuevoPrecio;
    
}

/**
 * NOTA IMPORTANTE:
 * Para comentar grandes secciones de codigo y no ir linea por linea, seleccionar la porcion de codigo y presionar las teclas:
 * CTRL K + CTRL C para comentar.
 * CTRL K + CTRL U para descomentar.
 */