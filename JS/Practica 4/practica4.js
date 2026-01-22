// Escribe un programa que pida al usuario su peso y su altura y calcule su Índice de Masa Corporal

let peso = prompt("Escribe tu peso (en kg): ")
let altura = prompt("Escribe tu altura (en metros): ")

let imc = peso/(altura*altura)

console.log(imc)

// En función del valor del índice, el programa deolverá
// * Bajo de peso, si es menor de 18.5
// * Normal, si está entre 18.5 y 24.9
// * Sobrepeso, si está entre 25 y 29.9
// * Obeso, si es 30 o mayor

if (imc < 18.5) {
    console.log("Bajo de peso")
}
else if (imc < 24.9) {
    console.log("Normal")
}
else if (imc < 29.9) {
    console.log("Sobrepeso")
}
else {
    console.log("Obeso")
}