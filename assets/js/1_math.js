/**
 * CLASE 2: Fórmulas matemáticas en JavaScript
 * 
 * Se crea una variable para calcular el perímetro de un cuadrado con un valor establecido. En la consola del navegador escribir 
 *      perimetroCuadrado y la respuesta debería ser 20.
 * Se crea una variable para calcular el area de un cuadrado con un valor establecido. En la consola del navegador escribir 
 *      areaCuadrado y la respuesta debería ser 25.
 * En el caso en que el usuario no sepa los nombres de las variables no podrá imprimirlos, asi que utilizando un consola.log como 
 *      un objeto, se imprimirán los resultados de forma automática de todas las operaciones cuando se abra la consola.
 * Se crean tres variable para calcular el perímetro de un triangulo con un valor establecido.
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
 * Se crea una función para calcular todas las medidas de un triangulo.
 * Utilizando un return se logra devolver ambos valores del triangulo utilizando una sola función.
 * En la consola del navegador, escribir el nombre de la función y se pasa cuatro valores, calcularMedidasTriangulo(6, 6, 4, 5.5) 
 *      la respuesta en la consola sera: 
 *      area = 11 y perimetro = 16.
 * 
 * Se crea una función para calcular todas las medidas de un cuadrado.
 * Utilizando un return se logra devolver ambos valores del cuadrado utilizando una sola función.
 * En la consola del navegador, escribir el nombre de la función y se pasa un valor, calcularMedidasCuadrado(12) la respuesta en 
 *      la consola sera: 
 *      area = 144 y perimetro = 48.
 * 
 * Una forma de ordenar las impresiones del console.log por categorías es utilizar los métodos "group" y "groupEnd". 
 * Para utilizar esta opción de desarrollo, se utilizan las palabras reservadas .group() y .groupEnd() y dentro de estos eventos 
 *      console debe ir la misma palabra dentro de comillas simples ' ' y que haga mención al tema a ordenar, por ejemplo 
 *      'cuadrado', 'circulo'.
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
 * Se crea una nueva agrupación de console, esta vez llamada Círculo.
 * Se crean tres variables, una constante a la que se le asigna un valor fijo al radio del circulo, una constante con la formula del 
 *      calculo del diámetro de un circulo, y finalmente, una constante a la cual se le asigna el valor de PI.
 * 
 * Se crea una variable para calcular la circunferencia de un circulo con un valor establecido.
 * Se crea una variable para calcular el area de un circulo con un valor establecido. La formula para hacer el calculo es: 
 *      radio^2 (al cuadrado), para reemplazar el signo elevado ^ se utiliza ** y luego este valor se multiplica por PI.
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
 * Se crea una función para calcular la circunferencia y el area de un circulo.
 * Dentro de JavaScript existe el objeto "Math" el cual tiene propiedades y métodos para funciones y constantes matemáticas.
 * DOCUMENTACIÓN OFICIAL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 * 
 * El método .pow() se utiliza para calcular potencias. Este método recibe dos argumentos: el numero base y el valor de la potencia.
 * Ya que se esta utilizando Math, no es necesario crear una variable para asignarle el valor de PI, sino que se puede usar la 
 *      propiedad .PI que trae Math.
 * El método de PI trae muchos decimales, se puede limitar la cantidad de decimales utilizando toFixed() y entre los paréntesis 
 *      la cantidad de decimales a mostrar.
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
 * Se crea una función para calcular la altura de un triangulo isosceles. En un triangulo isosceles dos lados son iguales, uno 
 *      diferente, el cual siempre es la base.
 * La formula para el calculo es: altura (h) = raíz cuadrada (lados ** 2 - (base ** 2) /4)
 * En la consola del navegador, escribir el nombre de la función, y luego enviarle dos parámetros. Primero probar si funciona el 
 *      condicional de error, escribir calcularAlturaTriangulo(6, 6) y debería aparecer el mensaje de error. 
 *      Luego se debe probar con otros parámetros, calcularAlturaTriangulo(6, 4) y la altura sera de 5,6568...
 */
function calcularAlturaTriangulo(lados, base) {
    if (lados == base) {
        console.warn('Este no es un triangulo isosceles');
    } else {
        return Math.sqrt((lados ** 2) - ( (base ** 2) ) / 4 );
    }
}


/*** Variables para la interacción del HTML con JS ***/
const formCalcularCuadrado = document.querySelector('#formCalcularCuadrado');
const inputCuadrado = document.querySelector('#inputCuadrado');
const resultadoPerimetroCuadrado = document.querySelector('#resultadoPerimetroCuadrado');
const resultadoAreaCuadrado = document.querySelector('#resultadoAreaCuadrado');

const formCalcularTriangulo = document.querySelector('#formCalcularTriangulo');
const inputTrianguloLadoUno = document.querySelector('#inputTrianguloLadoUno');
const inputTrianguloLadoDos = document.querySelector('#inputTrianguloLadoDos');
const inputTrianguloBase = document.querySelector('#inputTrianguloBase');
const inputTrianguloAltura = document.querySelector('#inputTrianguloAltura');
const resultadoPerimetroTriangulo = document.querySelector('#resultadoPerimetroTriangulo');
const resultadoAreaTriangulo = document.querySelector('#resultadoAreaTringulo');

const formCalcularCirculo = document.querySelector('#formCalcularCirculo');
const inputCirculo = document.querySelector('#inputCirculo');
const resultadoDiametroCirculo = document.querySelector('#resultadoDiametroCirculo');
const resultadoCircunferenciaCirculo = document.querySelector('#resultadoCircunferenciaCirculo');
const resultadoAreaCirculo = document.querySelector('#resultadoAreaCirculo');

const formCalcularIsosceles = document.querySelector('#formCalcularIsosceles');
const inputLadosIsosceles = document.querySelector('#inputLadosIsosceles');
const inputBaseIsosceles = document.querySelector('#inputBaseIsosceles');
const resultadoAlturaIsosceles = document.querySelector('#resultadoAlturaIsosceles');


/*** Eventos ***/
formCalcularCuadrado.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputCuadrado.value == "") {
        alert('Debe agregar el valor del lado del cuadrado.')
        inputCuadrado.focus();
        return;
    }
    if (inputCuadrado.value < 0) {
        alert('El numero no puede ser negativo.')
        return;
    }

    calcularMedidasCuadrado();
});

formCalcularTriangulo.addEventListener('submit', (e) => {
    e.preventDefault()

    if (inputTrianguloLadoUno.value == "" ) {
        alert('Debe agregar el valor del lado uno del triangulo.')
        inputTrianguloLadoUno.focus();
        return;
    }
    if (inputTrianguloLadoDos.value == "" ) {
        alert('Debe agregar el valor del lado dos del triangulo.')
        inputTrianguloLadoDos.focus();
        return;
    }
    if (inputTrianguloBase.value == "" ) {
        alert('Debe agregar el valor de la base del triangulo.')
        inputTrianguloBase.focus();
        return;
    }
    if (inputTrianguloAltura.value == "" ) {
        alert('Debe agregar el valor de la altura del triangulo.')
        inputTrianguloAltura.focus();
        return;
    }
    if (inputTrianguloLadoUno.value < 0 || inputTrianguloLadoDos.value < 0 || inputTrianguloBase.value < 0 || inputTrianguloAltura.value < 0) {
        alert('El numero no puede ser negativo.')
        return;
    }

    calcularMedidasTriangulo();
});

formCalcularCirculo.addEventListener('submit', (e) => {
    e.preventDefault()

    if (inputCirculo.value == "") {
        alert('Debe agregar el valor del radio del circulo.')
        inputCirculo.focus();
        return;
    }
    if (inputCirculo.value < 0) {
        alert('El numero no puede ser negativo.')
        return;
    }

    calcularMedidasCirculo();
});

formCalcularIsosceles.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputLadosIsosceles.value == '') {
        alert('Debe agregar el valor de los lados del triangulo.')
        inputLadosIsosceles.focus();
        return;
    }
    if (inputBaseIsosceles.value == '') {
        alert('Debe agregar el valor de la base del triangulo.')
        inputBaseIsosceles.focus();
        return;
    }
    if (inputLadosIsosceles.value == inputBaseIsosceles.value) {
        alert('Estas medidas no son las de un triangulo Isosceles.')
        return;
    }
    if (inputLadosIsosceles.value < 0 || inputBaseIsosceles.value < 0) {
        alert('El numero no puede ser negativo.')
        return;
    }

    calcularMedidasIsosceles();
});

/*** Funciones ***/
function calcularMedidasCuadrado() {
    const perimetroCuadrado = parseInt(inputCuadrado.value) * 4;
    const areaCuadrado = parseInt(inputCuadrado.value) * parseInt(inputCuadrado.value);

    resultadoPerimetroCuadrado.innerHTML = `El perímetro es de: <strong>${perimetroCuadrado}</strong>`;
    resultadoAreaCuadrado.innerHTML = `El área es de: <strong>${areaCuadrado}</strong>`;
}

function calcularMedidasTriangulo() {
    const perimetroTriangulo =  parseInt(inputTrianguloLadoUno.value) + 
                                parseInt(inputTrianguloLadoDos.value) + 
                                parseInt(inputTrianguloBase.value);
    const areaTriangulo = (parseInt(inputTrianguloBase.value) * parseInt(inputTrianguloAltura.value)) / 2;

    resultadoPerimetroTriangulo.innerHTML = `El perímetro es de: <strong>${perimetroTriangulo}</strong>`;
    resultadoAreaTriangulo.innerHTML = `El área es de: <strong>${areaTriangulo}</strong>`;
}

function calcularMedidasCirculo() {
    const diametroCirculo = parseInt(inputCirculo.value) * 2;
    const circunferenciaCirculo = diametroCirculo * Math.PI;
    const areaCirculo = (Math.pow(parseInt(inputCirculo.value), 2) * Math.PI)

    resultadoDiametroCirculo.innerHTML = `El diámetro es de: <strong>${diametroCirculo}</strong>`;
    resultadoCircunferenciaCirculo.innerHTML = `La circunferencia es de: <strong>${circunferenciaCirculo.toFixed(3)}</strong>`;
    resultadoAreaCirculo.innerHTML = `El área es de: <strong>${areaCirculo.toFixed(3)}</strong>`;
}

function calcularMedidasIsosceles() {
    const alturaIsosceles = Math.sqrt((parseInt(inputLadosIsosceles.value) ** 2) - 
                                      (parseInt(inputBaseIsosceles.value) ** 2) / 4);

    resultadoAlturaIsosceles.innerHTML = `La altura es de: <strong>${alturaIsosceles.toFixed(3)}</strong>`;
}