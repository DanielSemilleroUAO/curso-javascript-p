let a = 3,
  b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división; " + z);

z = a % b;
console.log("Resultado del modulo: " + z);

z = a ** b;
console.log("Resultado de la exponente: " + z);

// Operadores de incremento y decremento

// Incremento

// Pre incremento

z = ++a;
console.log(a);
console.log(z);

// Post incremento

z = b++;
console.log(b);
console.log(z);

// Decremento

// Pre decremento
z = --a;
console.log(a);
console.log(z);

// Post decremento
z = b--;
console.log(b);
console.log(z);

// Precedencia de operadores
(a = 3), (b = 2);
let c = 1,
  d = 4;

z = a * b + c / d;
console.log(z);

z = c + (a * b) / d;
console.log(z);

// Operadores de asignación
let e = 1;
// Operadores de asignación compuestos
e += 1;
console.log(e);

e -= 2;
console.log(e);

/*
*=
/=
**=
%=
*/

z = a == "3"; // No revisa el tipo de las variables
console.log(z);

z = a === "3"; // Revisa que el valor y el tipo son iguales
console.log(z);

z = a != "3";
console.log(z);

z = a !== "3";
console.log(z);

z = a < b;
console.log(z);

z = a > b;
console.log(z);

if (a % 2 === 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}

let resultado = Number("18x");
if (isNaN(resultado)) {
  console.log("No es un numero");
}

let mes = 11;
let estacion = 'Estación desconocida';

switch( mes ){
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor incorrecto';                
}
console.log(estacion);
