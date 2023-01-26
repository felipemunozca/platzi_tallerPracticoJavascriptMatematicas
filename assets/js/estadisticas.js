/***** Clase 21 *****/
    //PlatziMath: clases y métodos estáticos 21/30
    //Una vez que ya tengo todas mis funciones definidas, puedo crear un objeto en donde englobarlas a todas y luego solo llamarlas utilizando una clase estandar para todas.
    //Esta es una buena practica cuando tengo muchas funciones y no recuerde los nombres, solo necesito saber el nombre del objeto y ahi me apareceran todas las funciones disponibles.
    //Este objeto sera igual a una clase, por lo que siempre comienzan con la primera letra en mayuscula, es una conveniencia para quien lea el codigo entienda que es, para este caso sera PlatziMath.
    const PlatziMath = {};

    //ademas a cada funcion que haya creado en este documento, le debo agregar el nombre de la clase, luego un punto, y despues el nombre de la funcion.
    PlatziMath.esPar = function esParSimple(arregloNumeros) {
        return !(arregloNumeros.length % 2);
    }

    PlatziMath.esImpar = function esImpar(arregloNumeros) {
        return arregloNumeros.length % 2;
    }

    //Si en la consola del navegador escribo PlatziMath me aparecen todas las funciones que se asocian a ese nombre.


/***** Clase 11 *****/
    /**
     * La moda
     * Consiste en encontrar el valor que se repite la mayor cantidad de veces en una lista de valores.
     * La moda no solo se puede trabajar con números, sino que aplica tambien para cualquier tipo de dato.
     */

    /**
     * La mediana
     * Es el valor que se ubica en la mitad de la lista de valores, cuando la lista es impar.
     * Cuando la lista es par, entonces se toman los dos valores centrales, se suman y se divide entre dos.
     */

    /**
     * Promedio
     * El nombre técnico es media aritmética.
     * Se calcula sumando todos los valores y luego dividiendo esa suma por la cantidad de valores.
     */


/***** Clase 12 *****/

    //crear una funcion que reciba un arreglo con una lista de numeros.
    function calcularPromedio12(arregloNumeros) {
        //creo una variable con valor cero, a la que le ire sumando el valor de cada numero en el arreglo por cada vuelta que haga el ciclo for.
        let sumaNumeros = 0;

        //creo un ciclo for que recorra el arreglo.
        for (let i = 0; i < arregloNumeros.length; i++) {
            sumaNumeros = sumaNumeros + arregloNumeros[i];
        }

        //Formula: sumar todos los elementos del arreglo. Despues dividirlo por la cantidad de elementos.
        //la propiedad length me permite saber la cantidad de elementos dentro del arreglo.
        const promedio = sumaNumeros / arregloNumeros.length;
        
        console.log(promedio);
        return promedio;

        //En la consola del navegador escribo el nombre de la funcion mas los valores del arreglo entre llaves [], por ejemplo:
        //calcularPromedio12([1,2,3,4,5])
        //La respuesta en la consola deberia ser:
        //3
    }


/***** Clase 13 *****/

    //Ahora vamos a replicar la funcion para calcular el promedio, pero esta vez utilizando el método reduce()
    //reduce() recibe dos valores como parametros. El primero el valor acumulado de cada suma y el segundo el nuevo numero a sumar.
    //DOCUMENTACION OFICIAL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

    function calcularPromedio13(arregloNumeros) {

        function sumarTodosLosElementos(valorAcumulado, nuevoValor) {
            return valorAcumulado + nuevoValor;
            //con esta funcion, si envio como arreglo los numeros [1,2,3,4] 
            //en la primera vuelta de ejecucion, valorAcumulado sera 0 y nuevoValor sera 1
            //en la segunda vuelta, valorAcumulado sera 1 y nuevoValor sera 2.
            //en la tercera vuelta, valorAcumulado sera 3 y nuevoValor sera 3. 
            //en la cuarta vuelta, valorAcumulado sera 6 y nuevoValor sera 4. 
        }

        const sumaNumeros = arregloNumeros.reduce(sumarTodosLosElementos);

        const promedio = sumaNumeros / arregloNumeros.length;
        console.log(promedio);
        return promedio;

        //En la consola del navegador escribo lo siguiente: calcularPromedio13([1,2,3,4]).
        //La respuesta en la consola sera de 2.5 ya que es la operacion de 10 / 4.

        /**
         * Tambien puedo escribir la funcion que cree para sumar utilizando arrow function, por ejemplo
         * 
        const sumarTodosLosElementos = (valorAcumulado, nuevoValor) => {
            valorAcumulado + nuevoValor;
        }
         * 
         * una diferencia es que no es necesario escribir return para obtener el valor de operacion, tambien se puede escribir el codigo sin las llaves {} y el codigo se ejecutara de igual forma.
         * 
        const ejemplo = (a, b) => a + b;
         */
    }


/***** Clase 14 *****/

    //Ahora vamos a crear dos funciones, para determinar si un grupo de numeros es par o impar.

    function esPar(arregloNumeros){
        //para determinar si un numero es par o impar si puede hacer realizando un calculo simple para determinar el residuo tiene o no valor.
        //por ejemplo: 10 / 2 = 5 y el residuo seria igual a 0 (par).
        //por ejemplo: 11 / 2 = 5 y el residuo seria igual a 1 (impar).
        //Entonces, para llevar esta formula a JS, utilizo el signo % el cual me dara dos posibles: TRUE o FALSE.
        // % = asignacion de residuo

        //creo una validacion para determinar si el largo de ArregloNumeros es par o no. Si la cantidad de numeros en el arreglo sea impar, la respuesta sera FALSE ya que se cumple la condicion, en caso que la cantidad de numeros sea par, la respuesta sera true.
        if (arregloNumeros.length % 2) {
            return false;
        } else {
            return true;
        }
    }

    //otra forma de hacer esta misma funcion. Es utilizando el caracter de negacion ! para indicarle al codigo que el valor que busco que me retorne es contrario al que necesito.
    function esParSimple(arregloNumeros) {
        return !(arregloNumeros.length % 2);
    }
    //Si en el navegador escribo esParSimple([1,2,3,4]) la respuesta sera TRUE.

    //creo una funcion para saber si un arreglo de numeros es impar, ya que no busco una negacion, escribo el return tal cual. Si en la consola en el navegador escribo esImpar([1,2,3,4,5]) la respuesta en la consola sera "1", en cambio si escribo esImpar([1,2,3,4]) la respuesta sera "0". 
    function esImpar(arregloNumeros) {
        return arregloNumeros.length % 2;
    }

    //Funcion para calcular la mediana.
    //Con la mediana podre ordenar los numeros de un arreglo y el que este en el medio sera la medio, en caso de ser impar solo sera un valor, en caso de ser par seran dos valores, que se deberan sumar y luego sacar el promedio de esos dos valores.
    function calcularMediana(arregloNumeros) {
        const elArregloEsPar = esParSimple(arregloNumeros);

        if (elArregloEsPar) {
            //si es par, entra en esta seccion de codigo.
        } else {
            //si es impar, entra en esta seccion de codigo.
            //Math.floor() Obtiene el numero entero anterior mas cercano (redondear hacia abajo).
            //DOCUMENTACION OFICIAL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
            const indexMitadArregloImpar = Math.floor(arregloNumeros.length / 2);
            console.log(indexMitadArregloImpar);
            console.log(arregloNumeros[indexMitadArregloImpar]);
            //En la consola del navegador escribo medianaImpar([10,20,30,40,50]) y las respuestas son 2 y 30.
            //las respuestas son correctas ya que, en el arreglo de "5" posiciones, la "2" es la que esta en el media, ya que se empieza a contar desde el cero. Y el valor que esta en la posicion "2" es "30".

            //creo una nueva variable, a la cual le asignare el valor de la posicion en el arreglo que tenga el numero en el medio.
            const medianaListaImpar = arregloNumeros[indexMitadArregloImpar];
            return medianaListaImpar;
        }
    }


/***** Clase 15 *****/

    //Calcular la mediana de una lista par.

    function calcularMediana15(arregloNumeros) {
        const elArregloEsPar = esParSimple(arregloNumeros);

        if (elArregloEsPar) {
            //si es par, entra en esta seccion de codigo.
            //Al ser una cantidad de numeros par, deberan rescatarse dos valores desde el arreglo y luego sacar el promedio de ambos.
            //para obtener los dos numeros, al primero debo restale -1 para volver una posicion en el arreglo. El segundo lo obtengo de la forma en la que estaba haciendolo hasta ahora.
            const indexMitadArregloPar1 = (arregloNumeros.length / 2) - 1;
            const indexMitadArregloPar2 = arregloNumeros.length / 2;

            //para calcular el promedio, voy a reutilizar la funcion de la clase 13, la cual recibe un arreglo de numeros, asi que lo primero que debo hacer es crear un nuevo arreglo.
            const mitadArreglo = [];
            mitadArreglo.push(arregloNumeros[indexMitadArregloPar1]);
            mitadArreglo.push(arregloNumeros[indexMitadArregloPar2]);
            return calcularPromedio13(mitadArreglo);
            //En la terminal del navegador, escribo calcularMediana15([10,20,30,40]) y al ejecutar la funcion la respuesta sera 25. Es el resultado de 20+30 / 2.

        } else {
            const indexMitadArregloImpar = Math.floor(arregloNumeros.length / 2);
            //console.log(indexMitadArregloImpar);
            //console.log(arregloNumeros[indexMitadArregloImpar]);

            const medianaListaImpar = arregloNumeros[indexMitadArregloImpar];
            return medianaListaImpar;
        }
    }


/***** Clase 16 *****/

    //crear una funcion que recibira un listado de numeros desordenados y la idea es ordenarlos de menor a mayor para poder obtener la mediana real.

    function ordenarArreglo(arregloNumerosDesordenado) {
        //Se crea una funcion dentro de una funcion, que obtendra dos valores. El primero sera el valor inicial y el segundo el nuevo valor.
        //Ver imagen 16_metodo_sort.png como referencia.
        function ordenarArregloConSort(valorInicial, nuevoValor) {
            //creo diferentes condicionales para todas las convinaciones posibles,
            //SI el valor inicial es mayor al nuevo valor el orden se mantiene.
            //SI el valor inicial es igual al nuevo valor, el orden de los numeros se mantiene.
            //SI el valor inicial es menor al nuevo valor, ambos numeros se invertiran.
            /* 
            if (valorInicial > nuevoValor) {
                return 1;
            } else if (valorInicial == nuevoValor) {
                return 0;
            } else if (valorInicial < nuevoValor) {
                return -1;
            } 
            */

            //Se puede mejorar el codigo, para no tener que utilizar tantos ciclos if, en vez de eso solo es necesario realizar una operacion matematica y rescatar el resultado de esa operacion.
            return valorInicial - nuevoValor;
            //Algunos valores de ejemplo:
            //return 10 - 5 = 5     --> Aqui se cumple valorInicial > nuevoValor  
            //return 5 - 5 = 0      --> Aqui se cumple valorInicial == nuevoValor
            //return 5 - 10 = -5    --> Aqui se cumple valorInicial < nuevoValor

        }

        //En la consola escribir ordenarArreglo([1,2,4,5,3]) y la respuesta sera (5) [1,2,3,4,5]

        const lista = arregloNumerosDesordenado.sort(ordenarArregloConSort);
        //El método sort() ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado.
        //DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

        return lista;
    }


    function ordenarArregloSimple(arregloNumerosDesordenado) {
        //otra forma de desarrollar la funcion para ordenar los numeros de un arreglo, es utilizando el metodo sort() directo sobre el arreglo y luego pasando dos parametros a y b
        //y mediante una arrow function, le indico que operacion matematica hacer, en este caso restar a - b.
        //finalmente, retornar la respuesta.
        const lista = arregloNumerosDesordenado.sort((a, b) => a - b);

        return lista;

        //En la consola del navegador escribo ordenarArregloSimple([1,2,4,5,2]) y la respuesta sera: (5) [1,2,3,4,5]
    }

    //Ahora ya puedo calcular la mediana de una lista par, puedo reutilizar la funcion ya creada, en este caso la copiare de nuevo para recordar que es lo que estoy haciendo y el orden de los pasos.
    //le paso como parametro, el supuesto arreglo de numeros desordenado.
    function calcularMediana16(arregloNumerosDesordenado) {
        //creo una nueva variable que sera la referencia al arreglo que tenia declarado antes, para no tener que cambiar la estructura de mi codigo.
        //Ademas, esta nueva variable sera igual a la funcion para ordenar el arreglo que recibira los numeros desordenados para ordenarlos de menor a mayor.
        const arregloNumeros = ordenarArregloSimple(arregloNumerosDesordenado);
        const elArregloEsPar = esParSimple(arregloNumeros);

        if (elArregloEsPar) {
            const indexMitadArregloPar1 = (arregloNumeros.length / 2) - 1;
            const indexMitadArregloPar2 = arregloNumeros.length / 2;

            const mitadArreglo = [];
            mitadArreglo.push(arregloNumeros[indexMitadArregloPar1]);
            mitadArreglo.push(arregloNumeros[indexMitadArregloPar2]);
            return calcularPromedio13(mitadArreglo);
        } else {
            const indexMitadArregloImpar = Math.floor(arregloNumeros.length / 2);

            const medianaListaImpar = arregloNumeros[indexMitadArregloImpar];
            return medianaListaImpar;
        }

        //En la consola del navegador escribir: calcularMediana16([2000,1000,100000,3000])
        //la respuesta sera 2500.
        //antes sin ordenar los numeros la respuesta era 50500.
    }


/***** Clase 17 *****/

    //Crear una funcion para guardar la cantidad de veces que aparece un elemento en una lista. 
    //La lista puede ser no solamente de numeros, sino que de palabras tambien.
    function calcularModa(arreglo) {
        //creo un objeto vacio, en donde se ira almacenando cada valor que venga dentro del arreglo.
        const contadorLista = {}

        //creo un ciclo for que va a recorrer todo el arreglo, y guardara en memoria cada elemento que se lea.
        //utilizando la variable contadorLista, le digo que cree una nueva propiedad la cual tendra el nombre de cada elemento y cada vez que encuentre ese nombre que lo guarde con el valor de 1.
        for (let i = 0; i < arreglo.length; i++) {
            const elemento = arreglo[i];

            //creo un condicional para determinar si un valor ya fue leido en el ciclo, que en vez de agregarle un 1, le sume 1.
            //SI contadorLista[elemento] ya existe que le sume 1. Si no existe, que le asigne el valor de 1.
            if (contadorLista[elemento]) {
                contadorLista[elemento] += 1;
            } else {
                contadorLista[elemento] = 1;
            }
            
        }

        console.log(contadorLista);

        //Si en la consola del navegador escribo un arreglo con letras y numeros: calcularModa([1,2,3,1,'a',3,'abc','abc']) la respuesta sera:
        //{1: 2, 2: 1, 3: 2, a: 1, abc: 2}
    }

/***** Clase 18 *****/

    //18/30 Calculando la moda: arrays a partir de objetos
    //crear una funcion para identificar que elemento es el que mas veces se ha repetido.

    //Con el javascript modermo existen diferentes metodos que nos ayudan a crear arreglos a partir de objetos.
    //Object.entries
    //Object.keys
    //Object.values

    function calcularModa18(arreglo) {
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
        console.log(contadorLista, listaArreglo);
        //al imprimir listaArreglo los valores comenzaran a contarse desde el cero 0. y tendran dos entradas cada uno, la primera es el valor que registra el usuario dentro del arreglo, la segunda es la cantidad de veces que se menciona dicho valor.

        //creo una nueva variable a la cual le asigno la funcion, el arreglo y la posicion, en este caso 1, del valor que quiero obtener.
        const listaArregloOrdenada = ordenarArregloBidimensional(listaArreglo, 1);
        //console.log(listaArregloOrdenada);
        //creo una nueva variable, la cual tendra el valor del elemento que mas veces se repita. 
        //Ya que la lista se ordena de menor a mayor, lo que debo hacer es obtener el valor del ULTIMO elemento, para ello tomo el largo del arreglo y le resto -1, ese seria el ultimo valor.
        //Por ejemplo, si mi arreglo tiene 5 numeros, el primero es el 0, el segundo es el 1, el tercero es el 2, el cuarto es el 3, el quinto es el 4. Por eso para llegar a la quinta posicion, le resto 1.
        const listaNumeroMaximo = listaArregloOrdenada[listaArregloOrdenada.length - 1];
        //imprimo el valor de moda indicando que desde la variablelistaNumeroMaximo obtenga el valor cero ya que es un arreglo con solo dos valores. Por ejemplo: ['abc', 2]
        console.log('La moda es: ' + listaNumeroMaximo[0]);
        
        //creo una nueva variable a la que le asigno el valor que mas veces se repite en el arreglo y luego lo retorno para finalizar la funcion.
        const moda = listaNumeroMaximo[0];
        return moda;
    }

    //creo una nueva funcion para ordenar un arreglo en dos dimensiones.
    //Dos diemnsiones se refiere a que dentro del arreglo, existe otro arreglo, para este ejemplo, el primero seran los numeros o palabras que utilicemos, y el segundo, la cantidad de veces que se declaren.
    //calcularModa18([1,2,abc,1,'abc','abc'])
    //[ ['1',2],  ['2',1],  ['abc',3] ]
    function ordenarArregloBidimensional(listaDesordenada, i) {
        function ordenarArregloConSort(valorAcumulado, nuevoValor) {
            //Si tengo que rescatar un dato de un arreglo y no se cual es, utilizo una [i] para decir que la posicion sera enviada como paramentro al momento de ejecutar la funcion.
            return valorAcumulado[i] - nuevoValor[i];
        }
        
        const lista = listaDesordenada.sort(ordenarArregloConSort);
        return lista;
    }