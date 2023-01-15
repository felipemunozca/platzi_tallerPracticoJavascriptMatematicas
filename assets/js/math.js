/***** CLASE 2 *****/
/*** Calcular el perimetro de un cuadrado con un valor establecido. ***/
    const ladoCuadrado = 5;
    const perimetroCuadrado = ladoCuadrado * 4;
    //en la consola del navegador escribir perimetroCuadrado y la respuesta deberia ser 20.


/*** Calcular el area de un cuadrado con un valor establecido. ***/
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    //en la consola del navegador escribir areaCuadrado y la respuesta deberia ser 25.

    //pero si el usuario no sabe los nombres de las funciones, no podra imprimirlos, asi que utilizando la consola.log imprimire los resultados de forma automatica cuando se abra la consola.
    //creo un objeto dentro un console.log
    console.log({
        ladoCuadrado,
        perimetroCuadrado,
        areaCuadrado,
    });


/*** Calcular el perimetro de un triangulo con un valor establecido. ***/
    const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const ladoTrianguloBase = 4;
    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

/*** Calcular el area de un triangulo con un valor establecido. ***/
    const alturaTriangulo = 5.5;
    const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

    console.log({
        ladoTriangulo1,
        ladoTriangulo2,
        ladoTrianguloBase,
        alturaTriangulo,
        perimetroTriangulo,
        areaTriangulo,
    });


/*** Funcion para calcular todas las medidas de un triangulo. ***/
    function calcularMedidasTriangulo(lado1, lado2, base, altura) {
        //utilizando un return devuelvo ambos valores del triangulo utilizando una sola funcion.
        return {
            perimetro: lado1 + lado2 + base,
            area: (base * altura) / 2,
        }
    }
    //en la consola del navegador, si escribo el nombre de la funcion y le paso los cuatro valores, hara el calculo solo
    //calcularMedidasTriangulo(6, 6, 4, 5.5)
    //la respuesta en la consola seria: area = 11 y perimetro = 16.


/*** Funcion para calcular todas las medidas de un cuadrado. ***/
    function calcularMedidasCuadrado(lado) {
        //utilizando un return devuelvo ambos valores del cuadrado utilizando una sola funcion.
        return {
            perimetro: lado * 4,
            area: lado * lado,
        }
    }
    //en la consola del navegador, si escribo el nombre de la funcion y le paso un valor, hara el calculo solo
    //calcularMedidasCuadrado(12)
    //la respuesta en la consola seria: area = 144 y perimetro = 48.


    //una forma de ordenar las impresiones del console.log es utilozar los metodos group y groupEnd.
    //solo debo agregar el primer console donde empieza la seccion de codigo, y el end donde termina la seccion del codigo, finalmente indecarle un nombre entre comillas simples ''.
    //esta es una forma util de ordenar las pruebas cuando estas debbugueando por la consola.

    console.group('Cuadrado');

    const ladoCuadradoB = 5;
    const perimetroCuadradoB = ladoCuadrado * 4;
    const areaCuadradoB = ladoCuadrado * ladoCuadrado;
    console.log({
        ladoCuadradoB,
        perimetroCuadradoB,
        areaCuadradoB,
    });

    function calcularMedidasCuadrado(lado) {
        return {
            perimetro: lado * 4,
            area: lado * lado,
        }
    }

    console.groupEnd('Cuadrado');