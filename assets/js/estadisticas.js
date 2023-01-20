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
    function calcularPromedio(arregloNumeros) {
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
        //calcularPromedio([1,2,3,4,5])
        //La respuesta en la consola deberia ser:
        //3
    }