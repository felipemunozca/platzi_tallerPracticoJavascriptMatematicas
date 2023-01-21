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