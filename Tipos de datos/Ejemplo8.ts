// Union --> Similar al tipo any pero más acotado

let numeroOrBooleano: number | boolean | string
numeroOrBooleano = 4
numeroOrBooleano = true
numeroOrBooleano = "Hola"

console.log(numeroOrBooleano)

type mezcla = number | boolean | string
let dato2:mezcla
dato2 = 5
dato2 = false
dato2 = "Hi"
console.log(dato2)

// Literal -->
let animal : "Gato"
console.log(animal)
