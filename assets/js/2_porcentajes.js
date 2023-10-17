/**
 * CLASE 6: Cómo calcular porcentajes
 * 
 * Se declararan de variables obtenidas desde porcentajes.html
 * Se crea evento al presionar el botón.
 * Se crea la función para hacer el calculo utilizando la formula que esta en la carpeta de img: clase_06_formula_descuento.
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
 * Se crea evento al presionar el botón "Calcular descuento".
 * Se crea una función calcularPrecioConDescuento() para hacer los cálculos.
 * Un error que se produjo, es que al obtener los valores de los input, JavaScript los estaba recibiendo como TEXTOS aunque en el 
 *      formulario se indicaba que serian números, por lo que una forma de corregir esto, es agregando la propiedad NUMBER para 
 *      indicarle al compilador de JavaScript cual es el tipo de datos correcto que se esta recibiendo.
 * 
 * Se crean validaciones previas, para confirmar que la información que se requiere es correcta.
 * Utilizando el símbolo de exclamación "!" JavaScript entiende que esa validación es NEGATIVA. Esto se entiende de esta forma; 
 *      SI NO hay un valorPrecio o un valorDescuento, se mostrara un mensaje al usuario utilizando la etiqueta resultado.
 * Utilizando "return", se corta la ejecución del código, es decir, que si una de las validaciones no se cumple, se para la ejecución 
 *      del código y no leerá las demás lineas de código de la función.
 * 
 * En el caso en que el usuario escriba un descuento mayor a 100, se le envía un mensaje indicándole que existe un error.
 * Finalmente, para ver el resultado, se utiliza innertext para enviar la respuesta directamente al HTML.
 */
const formUno = document.querySelector('#formUno');
const formUnoPrecio = document.querySelector('#formUnoPrecio');
const formUnoPorcentaje = document.querySelector('#formUnoPorcentaje');
const formUnoResultado = document.querySelector('#formUnoResultado');

formUno.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!formUnoPrecio.value || !formUnoPorcentaje.value) {
        formUnoResultado.innerText = 'Debe llenar ambos campos del formulario';
        return;
    }
    if (formUnoPorcentaje.value > 100) {
        formUnoResultado.innerText = 'El porcentaje de descuento no puede ser mayor al 100%';
        return;
    }
    if (formUnoPorcentaje.value < 0) {
        formUnoResultado.innerText = 'El porcentaje de descuento no puede ser un numero negativo';
        return;
    }

    calcularPrecioConPorcentaje();
});

const calcularPrecioConPorcentaje = () => {
    //FORMULA = (P * (100 - D)) /100
    let nuevoPrecio = (formUnoPrecio.value * (100 - formUnoPorcentaje.value)) / 100;
    let nuevoPrecioFormateado = Number(nuevoPrecio).toLocaleString("es-CL");

    formUnoResultado.innerHTML = `El nuevo precio con descuento es <strong>$${nuevoPrecioFormateado}</strong>`;
};



/**
 * CLASE 8: Cupones de descuento
 * 
 * Se crean dos variables que recibirán los valores desde los input. La primera sera "precio" la cual sera de tipo NUMBER 
 *      para definir su valor como un numero. La segunda sera "cupon" que sera de tipo string (TEXTO) ya que debe leer una palabra 
 *      o código.
 * Se crea una variable "descuento", a la cual no se le asigna ningún valor de momento. El valor se le asignara dependiendo del 
 *      cupón que escriba el usuario. Debe ser let, ya que el valor cambiara según sea el caso.
 * 
 * Se crea un ciclo if-elseif-else con los nombres de los cupones y con el valor de "descuento" que cada uno tiene.
 * Se reemplaza el ciclo if-elseif-else por un switch-case, esta opción es mucho mas util para casos en los que se tengan muchos 
 *      datos a comparar. Por ejemplo, si una empresa maneja muchos códigos de descuento dependiendo de los años que tenga un cliente 
 *      comprando en esa empresa, crear multiples if-else puede ser complicado de leer y mucho mas de editar y optimizar el código. 
 *      Por lo que con switch-case es mas fácil de entender, editar y mejorar.
 */
const formDos = document.querySelector('#formDos');
const formDosPrecio = document.querySelector('#formDosPrecio');
const formDosCupon = document.querySelector('#formDosCupon');
const formDosResultado = document.querySelector('#formDosResultado');

formDos.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!formDosPrecio.value || !formDosCupon.value) {
        formDosResultado.innerText = 'Debe llenar ambos campos del formulario';
        return;
    }

    calcularPrecioConSwitch();
});

const calcularPrecioConSwitch = () => {

    const precio = Number(formDosPrecio.value);
    const cupon = formDosCupon.value;
    let descuento;

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
            formDosResultado.innerText = 'El cupón no es válido, el valor del producto es el mismo.';
            return;
    }

    // FORMULA = (P * (100 - D)) /100
    let nuevoPrecio = (precio * (100 - descuento)) / 100;
    let nuevoPrecioFormateado = Number(nuevoPrecio).toLocaleString("es-CL");
    formDosResultado.innerHTML = `El nuevo precio aplicando el cupón es: <strong>$${nuevoPrecioFormateado}</strong>`;
};



/**
 * CLASE 9: Método find vs. método filter
 * 
 * Se crea un objeto "objetoCupones", la palabra clave y el valor del descuento. La ventaja de trabajar con objetos, es que se puede 
 *      colocar tantos códigos como sean necesarios. Es muy util a la hora de crear nuevos cupones, editar los existentes o borrar 
 *      los que ya no usen y la gran ventaja es que la aplicación seguirá funcionando bien, ya que no se estará tocando la lógica 
 *      del programa.
 * 
 * Otra forma de trabajar con multiples cupones es utilizando un arreglo. 
 * Se crea un arreglo vació "arregloCupones". Luego, mediante el método .push() se cargaran los "nombre" y "porcentaje" de cada 
 *      cupón. La gran ventaja de utilizar arreglos es que podemos guardar mas información, por ejemplo: fecha maxima, descuentos 
 *      para cierto perfil, limite de cuanto es lo que se puede descontar.
 */
const formTres = document.querySelector('#formTres');
const formTresPrecio = document.querySelector('#formTresPrecio');
const formTresCupon = document.querySelector('#formTresCupon');
const formTresResultado = document.querySelector('#formTresResultado');

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
 * Se crea una función para calcular el valor del precio final con el descuento del cupon.
 * Se crea un solo condicional que validara todos los cupones que existen en el "objetoCupones". Se le pasa el texto que escribe 
 *      el usuario como un parámetro, si existe se rescatara el valor del descuento, en caso contrario, se mostrara un mensaje 
 *      indicando un mensaje de error. 
 * 
 * Se crea una nueva función para comparar si el texto que escribió el usuario. Utilizando un "return" para buscar si dentro de los 
 *      "nombre" del arreglo existe un texto igual a lo que escribió el usuario en el input. La respuesta se leerá como un TRUE o FALSE.
 * 
 * Se crea una nueva variable "cuponEnArreglo" la cual es igual al arreglo de cupones junto al método .find() el cual devuelve el 
 *      primer objeto que encuentre que cumple con la condición solicitada. En este caso se envía como argumento la función 
 *      existeCuponEnArreglo().
 * 
 * DOCUMENTACIÓN OFICIAL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * 
 * Se crea un condicional, si el texto escrito por el usuario en el input existe en el arreglo, el valor de "descuento" sera igual 
 *      al que este asignado en la propiedad porcentaje del objeto.
 */
formTres.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!formTresPrecio.value || !formTresCupon.value) {
        formTresResultado.innerText = 'Debe llenar ambos campos del formulario';
        return;
    }

    calcularPrecioConArray();
});

function calcularPrecioConArray() {
    const precio = Number(formTresPrecio.value);
    const cupon = formTresCupon.value;
    let descuento;

    // if (objetoCupones[cupon]) {
    //     descuento = objetoCupones[cupon];
    // } else {
    //     pResultado3.innerText = 'El cupón no es válido';
    //     return;
    // }

    function existeCuponEnArreglo(elementoArreglo) {
        return elementoArreglo.nombre == cupon;
    }

    const cuponEnArreglo = arregloCupones.find(existeCuponEnArreglo);

    if (cuponEnArreglo) {
        descuento = cuponEnArreglo.porcentaje;
    } else {
        formTresResultado.innerText = 'El cupón ingresado no es válido.';
        return;
    }

    const nuevoPrecio = (precio * (100 - descuento)) / 100;
    let nuevoPrecioFormateado = Number(nuevoPrecio).toLocaleString("es-CL");
    formTresResultado.innerHTML = `El nuevo precio aplicando el cupón es: <strong>$${nuevoPrecioFormateado}</strong>`;
}

/**
 * NOTA IMPORTANTE:
 * Para comentar grandes secciones de código y no ir linea por linea, seleccionar la porción de código y presionar las teclas:
 * CTRL K + CTRL C para comentar.
 * CTRL K + CTRL U para des-comentar.
 */