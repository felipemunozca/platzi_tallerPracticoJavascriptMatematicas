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



    /* function calcularMediana(lista){
        const listaEsPar=esPar(lista);
        if(listaEsPar){

        }else{
            const indexMitadListaImpar=Math.floor(lista.length/2);
            const medianaListaImpar=lista[indexMitadListaImpar];
            console.log(indexMitadListaImpar);
            console.log(medianaListaImpar);
            return medianaListaImpar;
        }
    } */