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