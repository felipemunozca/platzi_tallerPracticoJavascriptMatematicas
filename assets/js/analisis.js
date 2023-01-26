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
