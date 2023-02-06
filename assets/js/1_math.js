/**
 * CLASE 2: Fórmulas matemáticas en JavaScript
 * 
 * Se crea una variable para calcular el perimetro de un cuadrado con un valor establecido. En la consola del navegador escribir perimetroCuadrado y la respuesta
 *      deberia ser 20.
 * Se crea una variable para calcular el area de un cuadrado con un valor establecido. En la consola del navegador escribir areaCuadrado y la respuesta deberia ser 25.
 * En el caso en que el usuario no sepa los nombres de las variables no podra imprimirlos, asi que utilizando un consola.log como un objeto, se imprimiran los
 *      resultados de forma automatica de todas las operaciones cuando se abra la consola.
 * Se crean tres variable para calcular el perimetro de un triangulo con un valor establecido.
 * Se crea una variable para calcular el area de un triangulo con un valor establecido.
 */

/* Cuadrado */
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

/* Triangulo */
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

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


/**
 * CLASE 2 [Continuación]
 * 
 * Se crea una funcion para calcular todas las medidas de un triangulo.
 * Utilizando un return se logra devolver ambos valores del triangulo utilizando una sola funcion.
 * En la consola del navegador, escribir el nombre de la funcion y se pasa cuatro valores, calcularMedidasTriangulo(6, 6, 4, 5.5) la respuesta en la consola 
 *      sera: area = 11 y perimetro = 16.
 * 
 * Se crea una funcion para calcular todas las medidas de un cuadrado.
 * Utilizando un return se logra devolver ambos valores del cuadrado utilizando una sola funcion.
 * En la consola del navegador, escribir el nombre de la funcion y se pasa un valor, calcularMedidasCuadrado(12) la respuesta en la consola sera: 
 *      area = 144 y perimetro = 48.
 * 
 * Una forma de ordenar las impresiones del console.log por categorias es utilizar los metodos group y groupEnd. Para utilizar esta opcion de desarrollo, se 
 *      utilizan las palabras reservadas .group() y .groupEnd() y dentro de estos eventos console debe ir la misma palabra dentro de comillas simples ' ' y 
 *      que haga mencion al tema a ordenar, por ejemplo 'cuadrado', 'circulo'.
 */

function calcularMedidasTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

function calcularMedidasCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
}

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


/**
 * CLASE 3: Math en JavaScript
 * 
 * Se crea una nueva agrupacion de console, esta vez llamada Círculo.
 * Se crean tres variables, una constante a la que se le asigna un valor fijo al radio del circulo, una constante con la formula del calculo del diametro de un circulo, 
 *      y finalmente, una constante a la cual se le asigna el valor de pi.
 * 
 * Se crea una variable para calcular la circunferencia de un circulo con un valor establecido.
 * Se crea una variable para calcular el area de un circulo con un valor establecido. La formula para hacer el calculao es: radio^2 (al cuadrado), para reemplazar el
 *      signo elevado ^ se utiliza ** y luego este valor se multiplica por PI.
 */
console.group('Círculo')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;

const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
});

/**
 * CLASE 3 [Continuación]
 * 
 * Se crea una funcion para calcular la circunferencia y el area de un circulo.
 * Dentro de JavaScript existe el objeto "Math" el cual tiene propiedades y métodos para funciones y constantes matemáticas.
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 * 
 * El metodo .pow() se utiliza para calcular potencias. Este metodo recibe dos argumentos: el numero base y el valor de la potencia.
 * Ya que se esta utilizando Math, no es necesario crear una variable para asignarle el valor de PI, sino que se puede usar la propiedad .PI que trae Math.
 * El metodo de PI trae muchos decimales, se puede limitar la cantidad de decimales utilizando toFixed() y entre los parentesis la cantidad de decimales.
 */
function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);
    
    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
        //area: radioAlCuadrado * Math.PI.toFixed(4),
    };
}

console.groupEnd('Círculo');


/**
 * CLASE 4: Reto: altura de un triángulo
 * 
 * Se crea una funcion para calcular la altura de un triangulo isosceles. En un triangulo isosceles dos lados son iguales, uno diferente, el cual siempre es la base.
 * La formula para el calculo es: altura (h) = raiz cuadrada (lados ** 2 - (base ** 2) /4)
 * En la consola del navegador, escribir el nombre de la funcion, y luego pasarle dos parametros. Primero probar si funciona el condicional de error, escribir
 *      calcularAlturaTriangulo(6, 6) y deberia aparecer el mensaje de error. Luego se debe probar con otros parametros, calcularAlturaTriangulo(6, 4) y la altura 
 *      sera de 5,6568...
 */
function calcularAlturaTriangulo(lados, base) {
    if (lados == base) {
        console.warn('Este no es un triangulo isosceles');
    } else {
        return Math.sqrt((lados ** 2) - ( (base ** 2) ) / 4 );
    }
}