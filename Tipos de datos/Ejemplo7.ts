// Any: Es un tipo de variable que puede contener datos de cualquier tipo, en cualquier momento
let variasCosas: any[] = ["Gato", 3, -4.56, true, null, undefined]
console.log(variasCosas)

// Enum
enum monedas{euro, dolar, yen}
enum animal{anfibio, reptil, ave, pez, mamifero}

let gato = 
{
    especie:"Común",
    edad:7,
    animal:animal.reptil
}

console.log(gato)