/**
 * Calcula la Altura de un Triángulo Escaleno
 * 
 * En este desafío debes calcular la altura sin decimales de un triángulo escaleno (todos sus lados son distintos) o false en caso de que 
 * los parámetros recibidos no cumplan los requisitos del triángulo escaleno.
 * 
 * Input
 * trianguloEscaleno(16,8,10)
 * trianguloEscaleno(6,6,6)
 * 
 * Output
 * 4
 * false
 * 
 */



//Solucion del reto:

export function solution(lado1, lado2, lado3) {
    if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        return false;
    }

    const S = (lado1 + lado2 + lado3) / 2;
    const S1 = S - lado1;
    const S2 = S - lado2;
    const S3 = S - lado3;

    const H = (2 / lado1) * Math.sqrt(S * S1 * S2 * S3);
    const result = Math.floor(H);

    return result;
}
