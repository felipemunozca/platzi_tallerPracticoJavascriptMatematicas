/***** Clase 23 *****/
    //Análisis salarial con JavaScript 23/30
    //lo primero es realizar una prueba, si desde este archivo puedo leer la informacion de salarios.js
    console.log(salarios)

    //Primer Desafio: analisis personal para Juanita.
    //utilizare el metodo find() que devuelve la primera coincidencia que encuentra.
    //persona sera la palabra para unirla a los objetos de salarios.js por ejemplo: persona.name, persona.trabajos.
    function encontrarPersona(personaBuscada) {
        /* 
        const persona = salarios.find((persona) => {
            return persona.name == personaBuscada;
        });
        return persona; 
        */

        //Esta misma funcion se puede hacer de una forma mas simple.

        return salarios.find(persona => persona.name == personaBuscada);

        //En la consola del navegador escribir encontrarPersona('Juanita')
    }


    //Ahora que ya puedo obtener la informacion de una persona en concreto, puedo calcular la mediana de su sueldo a partir de los años.
    function medianaPorPersona(nombrePersona) {
        //creo una variable lista trabajos que guardara la informacion de la persona y del objeto "trabajos" que esta dentro del arreglo.
        const listaTrabajos = encontrarPersona(nombrePersona).trabajos;

        //metodo map() nos permite reccorrer todos los elementos de un arreglo y luego crear un nuevo arreglo a partir de esos elementos.
        const salarios = listaTrabajos.map(function (elemento) {
            //retorno un nuevo elemento por cada iteracion, es decir, un nuevo objeto "salario".
            return elemento.salario;
        });

        //llamo a la funcion para calcular la mediana que esta creada en el archivo platziMath.js
        const medianaSalarios = PlatziMath.calcularMediana(salarios);

        console.log(medianaSalarios);
        return medianaSalarios;

        //En la consola del navegador escribo: medianaPorPersona('Juanita) y la respuesta sera:
        //950
    }


/***** Clase 24 *****/
    //Proyección salarial personal 24/30

    //creo una funcion para poder proyectar a futuro el salario de una persona.
    function proyeccionPorPersona(nombrePersona) {
        const listaTrabajos = encontrarPersona(nombrePersona).trabajos;

        //creo un arreglo donde se almacenen los distintos aumentos de salario que ha tenido Juanita en todos sus años de trabajo.
        //debe ser declarado con let, ya que sera un valorue cambiara.
        let porcentajesDeCrecimiento = [];

        //creo un ciclo for para recorrer el arreglo, pero en vez de partir en cero, parto en la posicion uno, ya que se entiende que en la posicion cero Juanita entro en su primer trabajo, por lo que me interesa saber cuanto a sido el aumento de salario que ha tenido desde su segundo año en adelante.
        for (let i = 1; i < listaTrabajos.length; i++) {
            //creo dos variables nuevas. La primera para obtener el valor actual del salario de Juanita. La segunda para obtener el valor anterior (pasado) del salario de juanita
            const salarioActual = listaTrabajos[i].salario;
            const salarioPasado = listaTrabajos[i - 1].salario;
            //creo una variable para obtener el crecimiento de los salarios de juanita.
            const crecimiento = salarioActual - salarioPasado;
            //creo una variable para convertir el crecimiento del salario en un porcentaje.
            const crecimientoEnPorcentaje = crecimiento / salarioPasado;
            //envio todos los calculos a mi arreglo vacio.
            porcentajesDeCrecimiento.push(crecimientoEnPorcentaje);
        }

        console.log(porcentajesDeCrecimiento);
        /**
         * En la consola del navegador escribir: proyeccionPorPersona('Juanita') . La respuesta de la consola sera:
         * 0: 0
         * 1: 2.4
         * 2: 0.23529411764705882
         * 3: 0.19047619047619047
         * 4: 0
         * 
         * aqui podemos ver el crecimiento que ha tenido juanita en cada periodo de dos años.
         */

        //Ahora es necesario sacar la mediana del porcentaje de crecimiento.
        const medianaPorcentajesDeCrecimiento = PlatziMath.calcularMediana(porcentajesDeCrecimiento);

        console.log(medianaPorcentajesDeCrecimiento);
        /**
         * En la consola del navegador escribir: proyeccionPorPersona('Juanita') . La respuesta de la consola sera:
         * 0.19047619047619047
         */

        //Ahora que tenemos la mediana, podemos calcular un estimado del nuevo salario de juanita en base a la mediana de su porcentaje de crecimiento.
        //primero tengo que obtener el ultimo salario
        const ultimoSalario = listaTrabajos[listaTrabajos.length - 1].salario;
        //segundo, calcular el aumento de salario en base al porcentaje de la mediana.
        const aumento = ultimoSalario * medianaPorcentajesDeCrecimiento;
        console.log(aumento)
        //el en la consola del navegador la respuesta sera: 238.09523809523807
        //finalmente, sumo el valor del ultimo salario mas el aumento para obtener el nuevo salario.
        const nuevoSalario = ultimoSalario + aumento;

        return nuevoSalario;

        /** 
         * En la consola del navegador escribir la funcion: proyeccionPorPersona('Juanita') . La respuesta de la consola sera:
         * 1488.095238095238
         * 
         * Ese es un valor estimando del nuevo salario deberia tener juanita en su proximo aumento salarial.
        */
    }


/***** Clase 25 *****/
    //Reestructurando información sobre la marcha 25/30

    //Ahora crearemos un analisis empresarial, dependiendo de que personas trabajaron en una empresa determinada.

    //creo un objeto vacio, al cual luego le agregare la informacion de las empresas.
    const empresas = {};

    //creo un ciclo for of para recorrer el arreglo "salarios" en el archivo salarios.js
    for (persona of salarios) {
        //por cada año tengo que buscar la empresa.
        //dentro tengo que crear otro for of, esta vez para recorrer el arreglo de "trabajos" que tiene cada persona dentro del arreglo "salarios".
        for (trabajo of persona.trabajos) {
            //SI dentro de empresas, NO existe una empresa con ese nombre, se agregara dentro del objeto. Si ya existe, la ignora. 
            //utilizo el simbolo ! para negar.
            if (!empresas[trabajo.empresa]) {
                empresas[trabajo.empresa] = {};
            }

            //SI dentro de empresas, NO existe una empresa con ese nombre, se agregara junto en el año en que se esta leyendo.
            //POR EJEMPLO: Si trabajamos en la empresa Industrias Mokepon, busco si alguien trabajo en el año 2018. Si no existe el registro, lo voy a crear y lo pasare a un nuevo arreglo.
            if (!empresas[trabajo.empresa][trabajo.year]) {
                empresas[trabajo.empresa][trabajo.year] = [];
            }

            //Finalmente, si ya tengo identificada la empresa y el año de trabajo, utilizo el metodo push para enviar el valor de salario.
            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
        }
    }

    //Con el console log (empresas) puedo ver toda la informacion ya ordenada en la consola del navegador.
    console.log(empresas)
    /**
     * La respuesta quedaria asi:
    Daily Planet: 
        2018: (4) [1000, 2000, 1500, 3500]
        2019: (4) [1500, 2500, 2000, 3700]
        2020: (4) [1000, 2000, 2000, 3800]
        2021: (4) [1500, 2500, 2500, 4000]
        2022: (4) [2000, 2500, 2500, 4050]
        2023: (4) [1500, 2500, 1500, 4050]
        [[Prototype]]: Object
    Freelance: 
        2018: (8) [250, 450, 600, 750, 500, 400, 500, 600]
        2019: (8) [250, 550, 625, 750, 500, 500, 500, 700]
        2020: (7) [400, 575, 750, 600, 500, 500, 150]
        2021: (3) [850, 550, 450]
        2022: (5) [850, 550, 550, 1550, 800]
        2023: (4) [850, 650, 350, 850]
        [[Prototype]]: Object
    Industrias Mokepon: {2020: Array(1), 2021: Array(2), 2022: Array(2), 2023: Array(2)}
    Inversionify: {2018: Array(1), 2019: Array(1), 2020: Array(2), 2021: Array(2)}
    LexCorp: {2018: Array(1), 2019: Array(1), 2020: Array(1), 2021: Array(1), 2022: Array(1), 2023: Array(1)}
    MarketerosCOL: {2018: Array(2), 2019: Array(3), 2020: Array(3), 2021: Array(4), 2022: Array(4), 2023: Array(5)}
    Mokepon: {2021: Array(2), 2022: Array(2), 2023: Array(2)}
    Wayne Enterprises: {2018: Array(2), 2019: Array(2), 2020: Array(2), 2021: Array(2), 2022: Array(2), 2023: Array(2)}
    [[Prototype]]: Object
     * 
     * Ahora puedo revisar la informacion de forma mas visual, y ver que en la empresa "Daily Planet" el año 2018 trabajaron 4 personas distintas y tengo registro de cuales fueron sus salarios.
     * Otro punto que se puede notar, es en "Freelance" la cantidad de personas va disminuyendo con el pasar de los años.
     */


/***** Clase 26 *****/
    //Salarios empresariales 26/30
    
    //Crearemos una funcion que nos ayude a realizar un analisis salaraial, obteniendo la mediana.
    //creo una funcion que recibira como parametros el nombre de la empresa y el año a analizar.
    function medianaPorEmpresaYear(nombre, year) {
        //Si el nombre de la empresa no existe, le envio un mensaje al usuario indicandole el problema.
        //Utilizo la variable "empresas" que cree en la clase pasada.
        //Si la empresa no pago salarios en el año indicado (puedo poner un año en el que la empresa aun no existia), le envio un mensaje al usuario con el problema. 
        //si el nombre y el año existen, puedo calcular la mediana.
        if (!empresas[nombre]) {
            console.warn('La empresa no existe');
            console.warn(`La empresa ${nombre} no existe`);
        } else if (!empresas[nombre][year]) {
            console.warn('La empresa no pago salarios en ese año');
            console.warn(`La empresa ${nombre} no pago salarios en el año ${year}`);
        } else {
            return PlatziMath.calcularMediana(empresas[nombre][year]);
        }

        /**
         * En la consola del navegador escribir la funcion: medianaPorEmpresaYear('Industrias Mokepon', 2018) . La respuesta en la consola sera:
         * La empresa Industrias Mokepon no pago salarios en el año 2018.
         * Ahora probare con otro año: medianaPorEmpresaYear('Industrias Mokepon', 2022) . La respuesta en la consola sera:
         * 1250
         */
    }


/***** Clase 27 *****/
    //Proyección de salarios por empresas 27/30

    //Crear una funcion para proyectar los salarios de una empresa.
    //recibira como paramatro, el nombre de la empresa.
    function proyeccionPorEmpresa(nombre) {
        //El primer paso sera calcular una lista de medianas de cada año.
        if (!empresas[nombre]) {
            console.warn(`La empresa ${nombre} no existe`);
        } else {
            //como la empresa existe, ahora debo crear un arreglo a partir de un objeto (arreglo bidimensional).
            //ahora necesito saber el año y la mediana de salarios, pero como no tengo un parametro con el año, los tengo que tratar de obtener todos.
            //para eso es mas conveniente utilizar la funcion medianaPorEmpresaYear() para los calculos y utilizando "keys" le digo que utilice como llaves, los años del arreglo de cada empresa.
            const empresaYears = Object.keys(empresas[nombre]);

            //creo una nueva variable, a la que le paso la variable empresaYears y utilizando el metodo map() creo un nuevo arreglo. Y por cada iteracion que haga, recibire un año (year) para enviar a la funcion de medianaPorEmpresaYear().
            const listaMedianaYears = empresaYears.map((year) => {
                return medianaPorEmpresaYear(nombre, year);
            });

            console.log({listaMedianaYears})
            //en la consola del navegador escribir: proyeccionPorEmpresa('Industrias Mokepon') . La respuesta en la consola sera:
            /**
             * listaMedianaYears: Array(4)
                0: 850
                1: 1050
                2: 1250
                3: 1250
                length: 4
             */

            //Ahora que ya tengo la mediana por empresa y por cada año, creo un ciclo for para recorrer cada valor y obtener el valor para ajustar el salario.
            let porcentajesDeCrecimiento = [];
            for (let i = 1; i < listaMedianaYears.length; i++) {
                //ya no necesito la propiedad .salario; ya que estoy recibiendo un arreglo que viene directo con los valores a utilizar.
                const salarioActual = listaMedianaYears[i];
                const salarioPasado = listaMedianaYears[i - 1];
                const crecimiento = salarioActual - salarioPasado;
                const crecimientoEnPorcentaje = crecimiento / salarioPasado;
                porcentajesDeCrecimiento.push(crecimientoEnPorcentaje);
            }

            const medianaPorcentajesDeCrecimiento = PlatziMath.calcularMediana(porcentajesDeCrecimiento);

            const ultimaMedianaDeSalario = listaMedianaYears[listaMedianaYears.length - 1];
            const aumento = ultimaMedianaDeSalario * medianaPorcentajesDeCrecimiento;
            console.log(aumento)
            const nuevaMedianaDeSalario = ultimaMedianaDeSalario + aumento;

            return nuevaMedianaDeSalario;

            /**
             * en la consola del navegador escribir: proyeccionPorEmpresa('Industrias Mokepon') . La respuesta en la consola sera:
             * 238.09523809523807   -> el aumento
             * 1488.095238095238    -> proyeccion de salario para el proximo año.
             */
        }
    }
    