/**
 * CLASE 23: Análisis salarial con JavaScript
 * 
 * El primer paso sera realizar una prueba, si desde este archivo se puedo leer la informacion de 4_salarios.js, para esto lo primero es tanto este archivo como el 
 *      de salarios deben estar declarados como <script> en el archivo salaroos.html. Y tienen que estar en el orden exacto sino no funcionara.
 * 
 * Luego se podra comenzar con el primer Desafio: analisis personal para "Juanita".
 * Crear una variable "persona" la cual sera igual al metodo .find() que se utiliza para devolver la primera coincidencia que encuentra.
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * Se agrega "persona" que sera el termino que se utilizara para unirla a los objetos que estan creados en 4_salarios.js . Por ejemplo: perosna.name, persona.trabajos,
 *      NOTA: puede ser cualquier palabra, por lo general se utiliza "element".
 * 
 * Esta misma funcion se puede simplificar utilizando una arrow function.
 * 
 * En la consola del navegador, escribir: encontrarPersona('Juanita') y presionar enter. La respuesta de la consola será: {name: 'Juanita', trabajos: Array(6)}
 */

console.log(salarios)

function encontrarPersona(personaBuscada) {
    // const persona = salarios.find((persona) => {
    //     return persona.name == personaBuscada;
    // });
    // return persona;

    return salarios.find(persona => persona.name == personaBuscada);
}


/**
 * CLASE 23 [Continuación]
 * 
 * Ya que se puede obtener la informacion de una persona en especifico, se puedo calcular la mediana de un sueldo a partir de los años trabajados.
 * Se cre una variable "listaTrabajos" que sera igual a la informacion de la persona y del objeto "trabajos" que esta dentro del arreglo.
 * 
 * Se crea una variable "salarios" que sera igual al arreglo de "listaTrabajos" y utilizando el metodo .map() se recorre todos los elementos de dicho arreglo y luego
 *      se crea un nuevo arreglo a partir de la informacion. Luego se retorna un elemento junto a la propiedad "salario" que es un valor numerico.
 * 
 * Se crea una variable "medianaSalarios" que sera igual al modulo PlatziMath y a la funcion calcularMediana() que esta estan en el archivo 3_estadisticas.js .
 * 
 * En la consola del navegador, escribir: medianaPorPersona('Juanita) y presionar enter. La respuesta de la consola será: 950
 */
function medianaPorPersona(nombrePersona) {
    const listaTrabajos = encontrarPersona(nombrePersona).trabajos;
    // console.log(listaTrabajos);

    const salarios = listaTrabajos.map(function (elemento) {
        return elemento.salario;
    });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    // console.log(medianaSalarios);
    return medianaSalarios;
}


/**
 * CLASE 24: Proyección salarial personal
 * 
 * Se crea una función para poder proyectar a futuro, el salario de una persona.
 * Se crea un arreglo vacío "porcentajesDeCrecimiento" donde se almacenarán los distintos aumentos de salario que tendrá la persona en todos sus años de trabajo.
 *      Se declarará el arreglo con una variable let, ya que el valor debe poder cambiar.
 * Se crea un ciclo "for" para recorrer el arreglo, pero en vez de partir en la posición 0, se partirá en la posición 1. Esto se justifica porque en la posición cero
 *      la persona comenzó su primer trabajo, por lo que me interesa saber cuánto a sido su aumento salarial desde el segundo año en adelante.
 * 
 * Se crean dos variables: "salarioActual" obtiene el valor actual del salario de la persona. "salarioPasado" obtiene el valor anterior (pasado) del listado de 
 *      salarios de la persona.
 * Se crea una variable "crecimiento" para obtener el valor de la resta del salarioActual - el salarioPasado.
 * Se crea una variable "crecimientoEnPorcentaje" para obtener el valor de crecimiento. Dice ser en porcentaje, pero en realidad será un numero decimal.
 * se envían los resultados de los cálculos al arreglo utilizando el método push().
 * 
 * Si se realiza un console.log de "porcentajesDeCrecimiento" llamando a la función y pasándole un nombre como argumento: proyeccionPorPersona('Juanita') 
 *      la respuesta de la consola será:
 *      0: 0
 *      1: 2.4
 *      2: 0.23529411764705882
 *      3: 0.19047619047619047
 *      4: 0
 * 
 * Se crea una variable "medianaPorcentajesDeCrecimiento" la cual utilizara la función calcularMediana() del archivo 3_estadisticas.js .
 * 
 * Si se realiza un console.log de "medianaPorcentajesDeCrecimiento" llamando a la función y pasándole un nombre como argumento: proyeccionPorPersona('Juanita') 
 *      la respuesta de la consola será:
 *      0.19047619047619047
 * 
 * Se crea una variable "ultimoSalario" la cual será igual al valor del último registro que existe en el arreglo.
 * Se crea una variable "aumento" la cual será igual al resultado del valor del último salario POR el valor de la mediana de porcentajes.  
 *  
 * Si se realiza un console.log de "aumento" llamando a la función y pasándole un nombre como argumento: proyeccionPorPersona('Juanita') 
 *      la respuesta de la consola será:
 *      238.09523809523807
 * 
 * Se crea una variable "nuevoSalario" la cual será igual al resultado del último salario MAS el aumento.
 * 
 * En la consola del navegador, escribir: proyeccionPorPersona('Juanita) y presionar enter. La respuesta de la consola será: 1488.095238095238
 * Ese será el valor estimando del nuevo salario que deberá tener la persona en su próximo aumento salarial.
 */
function proyeccionPorPersona(nombrePersona) {
    const listaTrabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesDeCrecimiento = [];

    for (let i = 1; i < listaTrabajos.length; i++) {

        const salarioActual = listaTrabajos[i].salario;
        const salarioPasado = listaTrabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const crecimientoEnPorcentaje = crecimiento / salarioPasado;

        porcentajesDeCrecimiento.push(crecimientoEnPorcentaje);
    }

    // console.log(porcentajesDeCrecimiento);

    const medianaPorcentajesDeCrecimiento = PlatziMath.calcularMediana(porcentajesDeCrecimiento);
    // console.log(medianaPorcentajesDeCrecimiento);

    const ultimoSalario = listaTrabajos[listaTrabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesDeCrecimiento;
    // console.log(aumento)

    const nuevoSalario = ultimoSalario + aumento;
    return nuevoSalario;
}


/**
 * CLASE 25: Reestructurando información sobre la marcha
 * 
 * A continuación se comenzará a crear el análisis empresarial, es decir, será un análisis de las personas que trabajaron en una empresa determinada.
 * Se crea un objeto "listaEmpresas" el cual estará vacío, pero luego se le agregara la información de las empresas.
 * Se crea un ciclo "for of" para recorrer el arreglo "salarios" en el archivo 4_salarios.js .
 * Se crea un ciclo "for of" para recorrer el arreglo "trabajos" que tiene cada persona dentro del arreglo principal "salarios" (4_salarios.js).
 * 
 * Se crea un condicional, utilizando el símbolo de exclamación "!" para negar. Dentro del objeto "listaEmpresas", SI NO existe el nombre de la empresa que se esta 
 *      recibiendo, se agregará dentro del objeto. Si el nombre ya existe, se ignorará.
 * 
 * Se crea un condicional, que tendrá en primera instancia, la misma función que el anterior, pero esta vez, agregando la información de los años. SI NO existe el
 *      nombre de la empresa, se creará junto al año (que tenga un valor de salario). Si el nombre ya existe, se agregarán los demás años que se están leyendo. Si
 *      existe el nombre, pero no tiene valores en los años, se ignorará. La información que cumpla con ambas condiciones, se enviara a un arreglo nuevo vacío.
 *      Por ejemplo: 
 *      La empresa "Freelance" en el año "2018" tiene a Juanita con un salario de 250. Por lo que se cumplen ambas condiciones y se agrega esta información al arreglo.
 *      La empresa "Mokepon" en el año "2018" no tiene a ninguna Persona y ningún salario. Por lo que no se cumplen las condiciones y se ignora este año en el arreglo.
 * 
 * Finalmente, si ya se tienen establecidas las empresas y los años que registran salarios, se utiliza el método push() para enviar los salarios de las personas que
 *      cumplan ambas condiciones al arreglo.
 * 
 * En la consola del navegador, con el console.log de listaEmpresas, le respuesta en la consola será un objeto que dentro tiene múltiples arreglos por empresa y por año:
    Daily Planet: 
        2018: (4) [1000, 2000, 1500, 3500]
        2019: (4) [1500, 2500, 2000, 3700]
        2020: (4) [1000, 2000, 2000, 3800]
        2021: (4) [1500, 2500, 2500, 4000]
        2022: (4) [2000, 2500, 2500, 4050]
        2023: (4) [1500, 2500, 1500, 4050]
        [[Prototype]]: Object
    Freelance: {2018: Array(8), 2019: Array(8), 2020: Array(7), 2021: Array(3), 2022: Array(5), 2023: Array(4)}
    Industrias Mokepon: {2020: Array(1), 2021: Array(2), 2022: Array(2), 2023: Array(2)}
    Inversionify: {2018: Array(1), 2019: Array(1), 2020: Array(2), 2021: Array(2)}
    LexCorp: {2018: Array(1), 2019: Array(1), 2020: Array(1), 2021: Array(1), 2022: Array(1), 2023: Array(1)}
    MarketerosCOL: {2018: Array(2), 2019: Array(3), 2020: Array(3), 2021: Array(4), 2022: Array(4), 2023: Array(5)}
    Mokepon: {2021: Array(2), 2022: Array(2), 2023: Array(2)}
    Wayne Enterprises: {2018: Array(2), 2019: Array(2), 2020: Array(2), 2021: Array(2), 2022: Array(2), 2023: Array(2)}
    [[Prototype]]: Object  
 *    
 */
const listaEmpresas = {};

for (persona of salarios) {
    for (trabajo of persona.trabajos) {

        if (!listaEmpresas[trabajo.empresa]) {
            listaEmpresas[trabajo.empresa] = {};
        }

        if (!listaEmpresas[trabajo.empresa][trabajo.year]) {
            listaEmpresas[trabajo.empresa][trabajo.year] = [];
        }

        listaEmpresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log(listaEmpresas);


/**
 * CLASE 26: Salarios empresariales
 * 
 * Se crea una función para realizar un análisis salarial obteniendo la mediana por empresa y año. La función recibirá como parámetros un nombre y año.
 * 
 * Se utilizará el objeto "listaEmpresas", el cual ya tiene los condicionales creados para filtrar la información.
 * Se utilizaran console.warm para mostrar mensajes personalizados por la consola. 
 * Se crea un condicional if-else para diferentes opciones. Si el nombre de la empresa no existe, se mostrará un mensaje. Si la empresa existe, pero no tiene 
 *      sueldos asignados en un año determinado, se mostrará un mensaje. Si la empresa existe y el año tiene sueldos asignados, se calculará la mediana utilizando
 *      la función calcularMediana()
 * 
 * En la consola del navegador, escribir: medianaPorEmpresaYear('Platzi', 2018) y presionar enter. La respuesta de la consola será:
 * La empresa Platzi no existe
 * 
 * En la consola del navegador, escribir: medianaPorEmpresaYear('Industrias Mokepon', 2018) y presionar enter. La respuesta de la consola será:
 * La empresa Industrias Mokepon no pago salarios en el año 2018
 * 
 * En la consola del navegador, escribir: medianaPorEmpresaYear('Industrias Mokepon', 2022) y presionar enter. La respuesta de la consola será:
 * 1250
 */
function medianaPorEmpresaYear(nombre, year) {

    if (!listaEmpresas[nombre]) {
        // console.warn('La empresa no existe');
        console.warn(`La empresa ${nombre} no existe.`);
        
    } else if (!listaEmpresas[nombre][year]) {
        // console.warn('La empresa no pago salarios en ese año');
        console.warn(`La empresa ${nombre} no pago salarios en el año ${year}.`);
    
    } else {
        return PlatziMath.calcularMediana(listaEmpresas[nombre][year]);
    }
}


/**
 * CLASE 27: Proyección de salarios por empresas
 * 
 * Se crea una función para proyectar los salarios, esta vez por empresa. La función recibirá como argumento, el nombre de la empresa.
 * Se crea un condicional, SI NO existe la empresa en el arreglo, se mostrará un mensaje en la consola. Si el nombre de la empresa existe, se creará un arreglo a 
 *      partir de objeto (arreglo bidimensional). Además, se necesita saber el año, pero como no existe un parámetro para obtener el año, se deberán obtener todos los
 *      que existan en el arreglo principal (4_salarios.js). 
 * Se crea una variable "empresaYears" la cual será igual al constructor Object y el método key() el cual devolverá como llave el primer valor que encuentre en el
 *      arreglo con cada vuelta del ciclo, en este caso los años.
 * Se crea una variable "listaMedianaYears" la cual es igual al resultado de empresaYears junto al método .map() con el cual se creará un nuevo arreglo a partir de 
 *      esta información. Por cada iteración que haga el ciclo, se recibirá un año (year). Utilizando una función flecha se retorna la función medianaPorEmpresaYear()
 *      la que recibirá como parámetros, el nombre de la empresa y cada año que se obtenga después de recorrer el ciclo.
 * 
 * Si se realiza un console.log de "listaMedianaYears" llamando a la función y pasándole un nombre como argumento: proyeccionPorEmpresa('Industrias Mokepon') 
 *      la respuesta de la consola será:
 *      listaMedianaYears: Array(4)
 *          0: 850
 *          1: 1050
 *          2: 1250
 *          3: 1250
 *          length: 4
 *      
 * Se crea un arreglo "porcentajesDeCrecimiento" el cual estará vacío.
 * Se crea un ciclo "for" para recorrer los valores del arreglo "listaMedianaYears", con el cual se podrán obtener todos los valores de "salarios" sin tener que 
 *      declarar la propiedad ".salario" del arreglo principal (4_salarios.js). El ciclo partirá en la posición "1" ya que para calcular cual ha sido la variación 
 *      real, se necesita mas de un valor, por eso no parte en la posición "0".
 * Se crean dos variables, "salarioActual" la cual será igual al valor obtenido desde la "listaMedianaYears", por ejemplo, el salario de la posición 1 en adelante. 
 *      "salarioPasado" será igual al valor obtenido desde la "listaMedianaYears" pero restándole UNA posición, por ejemplo, el salario de la posición 0 en adelante. 
 * Se crea una variable "crecimiento" la cual será igual a la operación del salario actual MENOS el salario anterior.
 * Se crea una variable "crecimientoEnPorcentaje" el cual será igual a la operación de crecimiento DIVIDIDO el salario anterior. Se supone que el resultado será un 
 *      porcentaje, pero en realidad es un numero con decimales.
 * Utilizando el método push() se agregan las respuestas al arreglo vacío.
 * 
 * Se crea una variable "medianaPorcentajesDeCrecimiento" la cual será igual al resultado que se obtenga de la función calcularMediana().
 * Se crea una variable "ultimaMedianaDeSalario" la cual será igual al arreglo "listaMedianaYears" menos 1 posición.
 * Se crea una variable "aumento" la cual sera igual al resultado de la última mediana de salarios POR la mediana de porcentajes de crecimiento.
 * 
 * Si se realiza un console.log de "aumento" llamando a la función y pasándole un nombre como argumento: proyeccionPorEmpresa('Industrias Mokepon') 
 *      la respuesta de la consola será:
 *      238.09523809523807
 * 
 * Se crea una variable "nuevaMedianaDeSalario" la será igual al valor de la última mediana de salario MAS el aumento.
 * 
 * En la consola del navegador, escribir: proyeccionPorEmpresa('Industrias Mokepon') y presionar enter. La respuesta de la consola será: 
 * 1488.095238095238
 * Ese será el valor estimando del nuevo salario que deberá tener la persona en su próximo aumento salarial.
 */
function proyeccionPorEmpresa(nombre) {

    if (!listaEmpresas[nombre]) {
        console.warn(`La empresa ${nombre} no existe`);
    } else {
        const empresaYears = Object.keys(listaEmpresas[nombre]);
        // console.log(empresaYears);

        const listaMedianaYears = empresaYears.map((year) => {
            return medianaPorEmpresaYear(nombre, year);
        });
        // console.log({listaMedianaYears});

        let porcentajesDeCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const crecimientoEnPorcentaje = crecimiento / salarioPasado;

            porcentajesDeCrecimiento.push(crecimientoEnPorcentaje);
        }

        const medianaPorcentajesDeCrecimiento = PlatziMath.calcularMediana(porcentajesDeCrecimiento);

        const ultimaMedianaDeSalario = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimaMedianaDeSalario * medianaPorcentajesDeCrecimiento;
        // console.log(aumento);

        const nuevaMedianaDeSalario = ultimaMedianaDeSalario + aumento;

        return nuevaMedianaDeSalario;
    }
}


/**
 * CLASE 28: Top 10% de salarios
 * 
 * Se crea una función para calcular el valor de la mediana general.
 * Se crea una variable "nombres" la cual será igual al arreglo "salarios" y utilizando el método map() se creara un nuevo arreglo, el cual almacenara los 
 *      nombres (name) de cada persona que este registrada en el arreglo principal (4_salarios.js).
 * 
 * Si se realiza un console.log de "nombres" llamando a la función y pasándole un nombre como argumento: medianaGeneral() la respuesta de la consola será:
        (20) ['Juanita', 'Alex', 'Nath', 'Julia', 'Jonatan', 'Armando', 'Dilan', 'Zamir', 'Daniela', 'Daniel', 'Rigoberto', 'Alicia', 
        'Teodoro', 'Bruce Wayne', 'Alfred', 'Clark Kent', 'Lois Lane', 'Jimmy Olsen', 'Perry White', 'Lex Luthor']
 * 
 * Se crea una nueva variable "medianaPorCadaNombre" la cual será igual al arreglo "nombres" y utilizando el método map() se crea un nuevo arreglo. Utilizando una
 *      función flecha se ejecuta la función medianaPorPersona() y se le pasan los nombres como parámetro.
 * 
 * En la consola del navegador, escribir: medianaGeneral() y presionar enter. La respuesta de la consola será:
 * (20) [950, 800, 812.5, 2000, 1000, 800, 850, 800, 525, 500, 725, 1625, 825, 4275, 1750, 1500, 2500, 2000, 3900, 3750]
 */
function medianaGeneral() {
    const nombres = salarios.map(persona => persona.name);
    // console.log(nombres)

    const medianaPorCadaNombre = nombres.map(nombre => medianaPorPersona(nombre));

    return medianaPorCadaNombre;
}


/**
 * CLASE 28  [Continuación]
 * 
 * La función anterior se puede simplificar y reducir el código a una sola función. En vez de utilizar dos métodos map(), uno para obtener los nombres de las 
 *      personas y otro para obtener las medianas.
 * Se crea una variable "listaMedianas" la cual será igual al arreglo principal (4_salarios.js) y utilizando el método map() se declara una función flecha 
 *      para pasar como parámetro la función "medianaPorPersona" junto al nombre (name) de cada persona.
 * 
 * Se crea una variable "mediana" la cual es igual a la función calcularMediana() y se le pasara como parámetros todos los valores de la variable listaMedianas.
 *      Luego con el cálculo, la respuesta que se obtendrá es un valor único.
 * 
 * En la consola del navegador, escribir: medianaGeneralSimple() y presionar enter. La respuesta de la consola será:
 * 975
 */
function medianaGeneralSimple() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    // console.log(listaMedianas);

    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;
}


/**
 * CLASE 28 [Continuación]
 * 
 * Se crea una función para obtener las medianas más altas del 10% de personas que más salario ganan.
 * Se crea una variable "listaMedianas" la cual será igual al arreglo principal (4_salarios.js) junto al método .map para crear un nuevo arreglo. Además utilizando 
 *      una función flecha, se pasa la función medianaPorPersona() y se obtienen los nombres (name) de cada persona.
 * 
 * Se crea una variable "medianasOrdenadas" la cual será igual a la función ordenarArreglo() y se le pasara como argumento la variable "listaMedianas". Con este 
 *      paso todos los datos que se están enviando, retornaran ordenados de menor a mayor.
 * 
 * Si se realiza un console.log de "medianasOrdenadas" llamando a la función y pasándole un nombre como argumento: medianaTop10() la respuesta de la consola será:
        (20) [500, 525, 725, 800, 800, 800, 812.5, 825, 850, 950, 1000, 1500, 1625, 1750, 2000, 2000, 2500, 3750, 3900, 4275]
 * 
 * Se crea una variable "cantidad" la cual será igual al resultado de la fórmula para calcular el 10% (cantidad de datos * porcentaje) / 100 . La cantidad de datos
 *      se obtendrá con el largo del arreglo multiplicado por 10 y todo dividido en 100. El resultado será la cantidad de datos que representan el 10%.
 * 
 * Si se realiza un console.log de "cantidad" llamando a la función y pasándole un nombre como argumento: medianaTop10() la respuesta de la consola será:
        2
 * 
 * Se crea una variable "limite" la cual será igual a la operación de obtener el total de datos del arreglo MENOS la variable "cantidad". Este valor será la 
 *      cantidad de datos que debo omitir o cortar del arreglo. Por ejemplo: si el arreglo completo tiene 20 elementos, limite será igual a 18, por lo que esas
 *      serán las posiciones que se ignoraran y solo se consideraran las posiciones 19 y 20 que serían el 10% del arreglo.
 * 
 * Se crea una variable "top10" la cual será igual a la variable "listaMedianas" junto al método slice() se utiliza para hacer un corte imaginario en un arreglo,
 *      solo se debe definir un valor límite contando de atrás hacia adelante.
 * DOCUMENTACION OFICIAL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * 
 * Si se realiza un console.log de "top10" llamando a la función y pasándole un nombre como argumento: medianaTop10() la respuesta de la consola será:
        (2) [3900, 4275]
                0: 3900
                1: 4275
 * 
 * Se crea una variable "medianaTop10" la cual será igual a la función calcularMediana() la cual tendrá como argumentos los valores de "top10".
 * 
 * En la consola del navegador, escribir: medianaTop10() y presionar enter. La respuesta de la consola será: 
 * 4087.5
 */
function medianaTop10() {
    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)
    );

    const medianasOrdenadas = PlatziMath.ordenarArreglo(listaMedianas);
    // console.log(medianasOrdenadas);

    const cantidad = (listaMedianas.length * 10) / 100;
    // console.log(cantidad);

    const limite = listaMedianas.length - cantidad;
    console.log(`El limite es: ${limite}`)
        
    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    // console.log(top10);
    
    const medianaTop10 = PlatziMath.calcularMediana(top10);
    return medianaTop10;
}