/**
 * CLASE 21: PlatziMath: clases y métodos estáticos.
 * 
 * Una vez que ya se tienes todas las funciones definidas, ajustadas y probadas, se puede crear un objeto en donde englobarlas a todas y luego solo llamarlas 
 *      utilizando una palabra estándar para todas. Esta es una opción de desarrollo útil para el programador, ya que cuando se tienen muchas funciones y no se 
 *      recuerdan los nombres de todas, solo se necesita saber el nombre del objeto, y al escribirlo en la consola, aparecerán todas las funciones disponibles.
 * Se crea una nueva variable "PlatziMath" la cual será igual a un objeto vacío. Este objeto será igual a una clase por lo que siempre se debe comenzar con la letra en
 *      mayúscula, esto es para que cuando otra persona lea el código, entienda que de que se trata.
 * 
 * A continuación, a cada función se le agrega el nombre del objeto, luego un punto y el nombre de la función (puede ser el mismo u otro nuevo). Para este caso no se
 *      consideraran las funciones a media que se desarrollaran en medias clases y que después fueron completadas.
 * 
 * En la consola del navegador, escribir: PlatziMath y presionar enter. La respuesta de la consola será: Todas las funciones disponibles.
 */
const PlatziMath = {};


/**
 * CLASE 11: Qué es promedio, moda y mediana
 * 
 * La moda: 
 * Consiste en encontrar el valor que se repite la mayor cantidad de veces en una lista de valores.
 * La moda no solo se puede trabajar con números, sino que aplica también para cualquier tipo de dato.
 * 
 * La mediana:
 * Es el valor que se ubica en la mitad de la lista de valores, cuando la lista es impar.
 * Cuando la lista es par, entonces se toman los dos valores centrales, se suman y se divide entre dos.
 * 
 * Promedio:
 * El nombre técnico es media aritmética.
 * Se calcula sumando todos los valores y luego dividiendo esa suma por la cantidad de valores.
 */


/**
 * CLASE 12: Calculando el promedio
 * 
 * Se crea una función calcularPromedio() que reciba un arreglo con una lista de números.
 * Se crea una variable "sumaNumeros" con valor cero, a la que se le ira sumando el valor de cada número del arreglo por cada vuelta que haga el “ciclo for”. Para
 *      determinar la cantidad de vueltas, se le agrega la propiedad .length al arreglo, la cual permite saber la cantidad total de elementos que hay dentro.
 * 
 * En la consola del navegador, escribir: calcularPromedio([1,2,3,4,5]) y presionar enter. La respuesta de la consola será: 3.
 */
function calcularPromedio(arregloNumeros) {
    let sumaNumeros = 0;

    for (let i = 0; i < arregloNumeros.length; i++) {
        sumaNumeros = sumaNumeros + arregloNumeros[i];
    }

    // Formula: sumar todos los elementos del arreglo. Despues dividirlo por la cantidad de elementos.
    const promedio = sumaNumeros / arregloNumeros.length;
    
    // console.log(promedio);
    return promedio;
}


/**
 * CLASE 13: Método reduce
 * 
 * Ahora se replicara la función para calcular el promedio, pero esta vez utilizando el método .reduce(). 
 * Se crea una nueva función sumarTodosLosElementos() que tendrá dos parámetros: el valor acumulado de cada suma y el segundo es el nuevo número a sumar los cuales
 *      se irán retornando por cada vuelta.
 * 
 * La función sumarTodosLosElementos también se puede crear como una arrow function. Una diferencia con la primera es que no es necesario escribir return para obtener 
 *      el valor de operación. También se puede escribir el código sin llaves {}. Y se puede definir todo en una sola línea de código, por ejemplo:
 *      sumarTodosLosElementos = (a, b) => a + b;  
 * 
 * Se crea una nueva variable sumaNumeros, la cual obtiene el valor del arreglo y el método .reduce() el cual ejecuta una función "reductora" que se ejecutara en una
 *      matriz. El resultado final será un valor único obtenido de la operación de todos los elementos.
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * 
 * En la consola del navegador, escribir: calcularPromedioConReduce([1,2,3,4]) y presionar enter. La respuesta de la consola será: 2.5 . 
 */
PlatziMath.calcularPromedioConReduce =function calcularPromedioConReduce(arregloNumeros) {

    function sumarTodosLosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    // const sumarTodosLosElementos = (valorAcumulado, nuevoValor) => {
    //     valorAcumulado + nuevoValor;
    // }

    const sumaNumeros = arregloNumeros.reduce(sumarTodosLosElementos);

    const promedio = sumaNumeros / arregloNumeros.length;
    // console.log(promedio);
    return promedio;
}


/**
 * Clase 14: Calculando la mediana en una lista impar
 * 
 * Lo primero es entender cómo saber si un grupo de números es par o impar. Para esto se puede realizar un cálculo simple y utilizando una división el residuo de 
 *      la operación, se puede obtener la respuesta:
 *      Por ejemplo: 10 / 2 = 5     el residuo sería igual a 0 cero (par).
 *      Por ejemplo: 11 / 2 = 5     el residuo sería igual a 1 uno (impar).
 * Llevando esta idea a código JavaScript, se utiliza el operador de asignación de residuo (%) y la respuesta al cálculo será un TRUE o FALSE.
 * 
 * Se crea una función esPar() con una validación para determinar si el largo de ArregloNumeros es par o impar. Si la cantidad de números es impar, la respuesta será 
 *      FALSE y en caso que la cantidad de números sea par, la respuesta será TRUE.
 * 
 * La función esPar() se puede simplificar y en vez de utilizar condicionales se puede utilizar el carácter de negación (!) para indicarle al compilador de JavaScript 
 *      que si el valor a devolver por lógica debería ser false, se ejecutara el caso contrario, es decir true.
 * 
 * En la consola del navegador, escribir: esPar([1,2,3,4]) y presionar enter. La respuesta de la consola será: TRUE.
 * 
 * Se crea una función esImpar() a la cual se le pasa el arreglo con números. Se retorna el residuo de la operación.
 * 
 * En la consola del navegador, escribir: esImpar([1,2,3,4,5]) y presionar enter. La respuesta de la consola será: 1.
 * En otro caso; en la consola del navegador, escribir: esImpar([1,2,3,4]) y presionar enter. La respuesta de la consola será: 0.
 */

// function esPar(arregloNumeros){
//     if (arregloNumeros.length % 2) {
//         return false;
//     } else {
//         return true;
//     }
// }

PlatziMath.esPar = function esPar(arregloNumeros) {
    return !(arregloNumeros.length % 2);
}

PlatziMath.esImpar = function esImpar(arregloNumeros) {
    return arregloNumeros.length % 2;
}

/**
 * CLASE 14 [Continuación]
 * 
 * Se crea una función calcularMedianaPrimeraParte(). Se podrá ordenar los números de un arreglo de menor a mayor y el que este en el medio será la mediana.
 *      En el caso que la lista sea impar, solo habrá un valor en la mitad del arreglo.
 *      En el caso que la lista sea par, habrá dos valores en la mitad del arreglo, es por ello que se deben sumar y luego sacar un promedio de ambos.
 * 
 * Se utiliza un condicional para determinar si el "elArregloEsPar" es par o no. Para este caso será impar.
 * Se crea una nueva variable "indexMitadArregloImpar" la cual será igual al valor de Math.floor() que es un método que obtiene el numero entero anterior más cercano 
 *      es decir, redondear hacia abajo. Por ejemplo: 5.3 -> 5.
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
 * 
 * Se crea una nueva variable "medianaListaImpar"la cual será igual al valor de la posición que se encuentre en medio del arreglo.
 * 
 * En la consola del navegador, escribir: calcularMedianaPrimeraParte([10,20,30,40,50]) y presionar enter. La respuesta de la consola será:
 *      2       -> Posición del arreglo que se encuentra en el medio. [0,1,2,3,4]
 *      30      -> Valor de la mediana.
 */
function calcularMedianaPrimeraParte(arregloNumeros) {
    const elArregloEsPar = esPar(arregloNumeros);

    if (elArregloEsPar) {
        
    } else {
        const indexMitadArregloImpar = Math.floor(arregloNumeros.length / 2);
        console.log(indexMitadArregloImpar);
        console.log(arregloNumeros[indexMitadArregloImpar]);

        const medianaListaImpar = arregloNumeros[indexMitadArregloImpar];
        return medianaListaImpar;
    }
}


/**
 * CLASE 15: Calculando la mediana en una lista par
 * 
 * Se continúa trabajando en la función anterior, esta vez se terminará el código para cuando el arreglo de números sea par.
 * 
 * Si el arreglo es par, se deben rescatar dos valores desde el arreglo y luego sacar un promedio de ambos. Se declara una variable "indexMitadArregloPar1" la cual 
 *      será igual a la cantidad de datos en el arreglo dividido 2, y al resultado se le restara -1, esto es para volver UNA posición en el arreglo.
 *      Se declara una variable "indexMitadArregloPar1" la cual será igual a la cantidad de datos en el arreglo dividido 2
 * 
 * Para calcular el promedio, lo primero será crear un arreglo vacío, al cual mediante el método .push() se le cargaran los valores obtenidos en las variables 
 *      declaradas con anterioridad.
 * Finalmente, se reutilizara la función calcularPromedioConReduce() a la cual se le enviara el nuevo arreglo con dos valores para hacer el cálculo del promedio.
 * 
 * En la consola del navegador, escribir: calcularMedianaSegundaParte([10,20,30,40]) y presionar enter. La respuesta de la consola será: 25.
 */
function calcularMedianaSegundaParte(arregloNumeros) {
    const elArregloEsPar = esPar(arregloNumeros);

    if (elArregloEsPar) {
        const indexMitadArregloPar1 = (arregloNumeros.length / 2) - 1;
        const indexMitadArregloPar2 = arregloNumeros.length / 2;

        const mitadArreglo = [];
        mitadArreglo.push(arregloNumeros[indexMitadArregloPar1]);
        mitadArreglo.push(arregloNumeros[indexMitadArregloPar2]);

        return calcularPromedioConReduce(mitadArreglo);
    } else {
        const indexMitadArregloImpar = Math.floor(arregloNumeros.length / 2);
        console.log(indexMitadArregloImpar);
        console.log(arregloNumeros[indexMitadArregloImpar]);

        const medianaListaImpar = arregloNumeros[indexMitadArregloImpar];
        return medianaListaImpar;
    }
}


/**
 * CLASE 16: Método sort
 * 
 * Se crea una función ordenarArregloPrimeraParte() que recibirá en un arreglo un listado de números desordenados.
 * Se crea una función ordenarArregloConSort() para ordenar de menor a mayor los números del arreglo. Se le pasara un valor inicial y un nuevo valor como parámetros.
 * Se crea un condicional, se crean todas las combinaciones posibles a la hora de ordenar números:
 *      SI el valor inicial es mayor al nuevo valor (>), el orden de los números se mantiene.
 *      SI el valor inicial es igual al nuevo valor (=), el orden de los números se mantiene.
 *      SI el valor inicial es menor al nuevo valor (<), ambos números se invertirán.
 * 
 * Se puede mejorar el código quitando el condicional if-else y reemplezando toda esa estructura por una sola operación matemática, la cual seria una resta del 
 *      valor inicial - nuevo valor y utilizando un return, obtener el resultado de dicha resta. Con el resultado puedo aplicar la misma lógica del if-else, por ejemplo:
 *      return 10 - 5 = 5     --> Aquí se cumple valorInicial (>) nuevoValor  
 *      return 5 - 5 = 0      --> Aquí se cumple valorInicial (=) nuevoValor
 *      return 5 - 10 = -5    --> Aquí se cumple valorInicial (<) nuevoValor
 * 
 * Se crea una variable listaOrdenada a la cual se le pasa el arreglo con los numeros desordenados utilizando el método .sort() el cual ordenara los elementos de un 
 *      arreglo localmente y los devolverá como un arreglo ordenado de menor a mayor. (En el caso en que el arreglo sea de palabras, las devolverá por orden alfabético).
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * 
 * En la consola del navegador, escribir: ordenarArregloPrimeraParte([10,20,40,50,30]) y presionar enter. La respuesta de la consola será: (5) [10, 20, 30, 40, 50]
 */
function ordenarArregloPrimeraParte(arregloNumerosDesordenado) {

    function ordenarArregloConSort(valorInicial, nuevoValor) {
        // if (valorInicial > nuevoValor) {
        //     return 1;
        // } else if (valorInicial == nuevoValor) {
        //     return 0;
        // } else if (valorInicial < nuevoValor) {
        //     return -1;
        // } 

        return valorInicial - nuevoValor;
    }

    const listaOrdenada = arregloNumerosDesordenado.sort(ordenarArregloConSort);
    return listaOrdenada;
}

/**
 * CLASE 16 [Continuación]
 * 
 * Existe otra forma de ordenar números o palabra desde un arreglo utilizando .sort() y de hecho es la forma en que se recomienda en la documentación oficial.
 * Se crea una función ordenarArreglo() y en vez de crear nuevas funciones, se aplicar .sort() directo sobre el arreglo. Se le pasa como parámetros "a" y "b". 
 *      Luego utilizando una arrow function se le indica la operación matemática a realizar, en este caso, restar a -b. Finalmente retornar la respuesta. 
 */
PlatziMath.ordenarArreglo = function ordenarArreglo(arregloNumerosDesordenado) {
    const listaOrdenada = arregloNumerosDesordenado.sort((a, b) => a - b);
    return listaOrdenada;
}

/**
 * CLASE 16 [Continuación]
 * 
 * Ahora que puedo ordenar los números de un arreglo, puedo aplicar esto para obtener una mediana REAL.
 * 
 * Se crea una variable arregloNumeros que será igual a la función ordenarArreglo() junto con el arreglo de números desordenados.
 * Se crea una variable elArregloEsPar que será igual al valor de obtenido de la función esPar() junto al arreglo ordenado.
 * 
 * El resto del código se mantiene igual.
 * 
 * En la consola del navegador, escribir: calcularMediana([2000,1000,100000,3000]) y presionar enter. La respuesta de la consola será: 2500.
 * En la consola del navegador, escribir: calcularMediana([2000,1000,100000,3000,7000]) y presionar enter. La respuesta de la consola será: 3000.
 */
PlatziMath.calcularMediana = function calcularMediana(arregloNumerosDesordenado) {
    const arregloNumeros = PlatziMath.ordenarArreglo(arregloNumerosDesordenado);
    const elArregloEsPar = PlatziMath.esPar(arregloNumeros);

    if (elArregloEsPar) {
        const indexMitadArregloPar1 = (arregloNumeros.length / 2) - 1;
        const indexMitadArregloPar2 = arregloNumeros.length / 2;

        const mitadArreglo = [];
        mitadArreglo.push(arregloNumeros[indexMitadArregloPar1]);
        mitadArreglo.push(arregloNumeros[indexMitadArregloPar2]);
        return PlatziMath.calcularPromedioConReduce(mitadArreglo);
    } else {
        const indexMitadArregloImpar = Math.floor(arregloNumeros.length / 2);

        const medianaListaImpar = arregloNumeros[indexMitadArregloImpar];
        return medianaListaImpar;
    }
}


/**
 * CLASE 17: Calculando la moda: objetos a partir de arrays
 * 
 * Se crea una función calcularModaPrimeraParte() para almacenar la cantidad de veces que aparece un elemento en una lista (puede ser números o letras). 
 * Se crea un objeto vacío "contadorLista", en donde se ira almacenando cada valor que exista dentro del arreglo.
 * Se utiliza un ciclo "for" para recorrer todo el arreglo e ir guardando en memoria cada elemento que sea leído.  
 * Se utiliza una iteración if-else para determinar si un valor ya ha sido leído en el ciclo o no. Cada nueva palabra o número se iniciará con valor 1 la primera
 *      vez que se lea, y se le ira sumando +1 a cada elemento que ya se ha leído.
 *      Otra forma de leerlo: SI el elemento en "contadorLista" ya existe que le sume 1. Si no existe, se crea y se le asigna el valor de 1.
 * 
 * En la consola del navegador, escribir: calcularModaPrimeraParte(['abc',1,2,3,1,'a',3,'abc','abc']) y presionar enter. La respuesta de la consola será: 
 * .    {1: 2, 2: 1, 3: 2, abc: 3, a: 1}
 */
function calcularModaPrimeraParte(arreglo) {
    const contadorLista = {}

    for (let i = 0; i < arreglo.length; i++) {
        const elemento = arreglo[i];

        if (contadorLista[elemento]) {
            contadorLista[elemento] += 1;
        } else {
            contadorLista[elemento] = 1;
        }
        
    }

    console.log(contadorLista);
}


/**
 * CLASE 18: Calculando la moda: arrays a partir de objetos
 * 
 * Se completara la función calcularModa() esta vez la función deberá determinar cuál fue el elemento que más veces se ha repetido.
 * 
 * Se crea una variable "listaArreglo", la cual será igual Object.entries() el cual es método estático que devuelve un arreglo de un arreglo, es decir, cada 
 *      elemento se crea con su propio arreglo. Al imprimir "listaArreglo" los valores comenzaran a contarse desde el cero 0 y cada elemento tendrá dos entradas 
 *      cada uno, la primera es el valor que registra el usuario dentro del arreglo, la segunda es la cantidad de veces que se menciona dicho valor.
 *      Por ejemplo: (2) ['abc', 3]
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * 
 * Con JavaScript moderno existen diferentes métodos que nos ayudan a crear arreglos a partir de objetos: Object.entries, Object.keys, Object.values .
 * 
 * Se crea una variable "listaArregloOrdenada" la cual es igual a la función ordenarArregloBidimensional() que recibe dos parámetros. El primero es el arreglo de 
 *      arreglos. El segundo es la posición del valor que quiero obtener, en este caso "1" que es la posición donde se almacenan la cantidad de veces que se repite
 *      un elemento.
 * 
 * Se crea una variable "listaNumeroMaximo" la cual es igual al valor del arreglo que más veces se repitió. Y ya que la lista se ordena de menor a mayor, se debe
 *      obtener el valor del ULTIMO elemento del arreglo, para eso se utiliza la propiedad .length y se le resta "-1", esto se debe a que si el arreglo tiene 10
 *      posiciones, la lista del arreglo será del 0 al 9, por lo que para obtener la posición 9, le restar uno.
 * 
 * DESAFIO: crear un mensaje personalizado en consola para indicar cuál es la moda. A la variable "listaNumeroMaximo" se le debe agregar la posición del arreglo
 *      que tiene la palabra o número que más veces se repite, eso se logra llamando a la posición [0].
 * 
 * Se crea una variable "moda" la cual tendrá el valor retornado del cálculo de moda.
 * 
 * En la consola del navegador, escribir: calcularModa(['abc',1,2,3,1,'a',3,'abc','abc']) y presionar enter. La respuesta de la consola será: 'abc'
 */
PlatziMath.calcularModa = function calcularModa(arreglo) {
    const contadorLista = {}

    for (let i = 0; i < arreglo.length; i++) {
        const elemento = arreglo[i];

        if (contadorLista[elemento]) {
            contadorLista[elemento] += 1;
        } else {
            contadorLista[elemento] = 1;
        }

    }

    const listaArreglo = Object.entries(contadorLista);
    // console.log(listaArreglo);

    const listaArregloOrdenada = ordenarArregloBidimensional(listaArreglo, 1);
    // console.log(listaArregloOrdenada);

    const listaNumeroMaximo = listaArregloOrdenada[listaArregloOrdenada.length - 1];
    console.log('La moda es: ' + listaNumeroMaximo[0]);

    const moda = listaNumeroMaximo[0];
    return moda;
}

/**
 * CLASE 18 [Continuación]
 * 
 * Se crea una función ordenarArregloBidimensional() para ordenar un arreglo en dos dimensiones.
 * Dos dimensiones se refiere a que dentro del arreglo principal (4_salarios.js), existe otro arreglo. En este ejercicio, el primero serán los números o palabras que 
 *      estén en la lista y el segundo, será la cantidad de veces que se declaren.
 * La función recibe dos parámetros, el primero es el arreglo y el segundo la posición. Esta función esta siendo llamada desde calcularModa() y desde ahí se envían los
 *      valores para la función.
 * 
 * Se crea una función ordenarArregloConSort() que funciona igual a la ya creada, con un valor acumulado y un nuevo valor y se retornara el resultado.
 * En el caso en que se tiene que obtener un dato de un arreglo y no se sabe cuál es exactamente, se utiliza una [i] para indicar que la posición será enviada
 *      como parámetro en otro momento (se envía desde la función del cálculo de la moda).
 */
function ordenarArregloBidimensional(listaDesordenada, i) {

    function ordenarArregloConSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarArregloConSort);
    return lista;

}