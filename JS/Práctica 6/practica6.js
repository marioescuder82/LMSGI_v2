// Código que comprueba si un número es un palíndromo utilizando unicamente condicionales, bucles y operadores básicos

numero_orig = 1233321
numero = numero_orig

digitos = 0
while(numero >= 1) {
    numero = numero / 10
    digitos++
}

console.log(digitos)

numero = numero_orig

digito_ant = 0
divisor = 10
num_1 = 0
digitos_count = 0
for(let i = 0; i < digitos / 2; i++) {
    digito = numero % divisor
    num_1 = (num_1 * 10) + (digito - digito_ant) / (divisor / 10)    
    digito_ant = digito
    divisor *= 10
    digitos_count++
}

divisor = 1
for(let i = 0; i < digitos_count - 1; i++) {
    divisor *= 10
}

if (digitos % 2 == 0) {
    divisor *= 10
}

let num_2 = (numero / divisor) - ((numero % divisor) / divisor)

console.log("Número 1: " + num_1)
console.log("Número 2: " + num_2)

if (num_1 == num_2) {
    console.log(numero + " es palíndromo")
}
else {
    console.log(numero + " NO es palíndromo")
}

// Código que comprueba si un número es un palíndromo sin límites en su uso
numero = 1234321
if (numero.toString() == numero.toString().split('').reverse().join('')) {
    console.log(numero + " es palíndromo")
}
else {
    console.log(numero + " NO es palíndromo")
}

// Escribe una función que reciba un array de números y devuelva solo los números pares
let array = [1,4,2,6,8,19,45,6]
let array_res = []

array.forEach(function(n) {
    if (n % 2 == 0){
        array_res.push(n)
    }
});

console.log(array_res)