/**
 * En este desafío vas a recibir un array de objetos. 
 * Cada objeto representa a un usuario. 
 * Debes encontrar al usuario con cierto ID y retornar su nombre. En caso de no existir, debes retornar false.
 * 
 * Input:
 * const users = [];
 * users.push({ id: 123, name: 'Juanito Alcachofa' });
 * users.push({ id: 456, name: 'Juanita Alcaparra' });
 * 
 * solution(users, 456);
 * solution(users, 999);
 * 
 * Output:
 * Juanita Alcaparra
 * false
 */


//Solución del reto:
export function solution(users, id) {
    const userWithID = users.find(user => user.id == id);

    if (userWithID) {
        return userWithID.name;
    } else {
        return false;
    }
}