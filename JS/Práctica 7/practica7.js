// Escribe una función que reciba un array de números y devuelva solo los números pares
let array = [1,4,2,6,8,19,45,6]

function pares(array) {
    let array_res = []

    array.forEach(function(n) {
        if (n % 2 == 0){
            array_res.push(n)
        }
    });

    return array_res;
}

console.log(pares(array))