// IF - ELSE
let condicion = true

if (condicion)
    {
        console.log("Esto se ejecutará siempre")
    }


condicion = false

if (condicion)
{
    console.log("Esto no se ejecutará nunca")
}

if (condicion)
{
    console.log("Hago esto si la condición es: true")
}
else
{
    console.log("Hago esto si la condición es: false")
}

let x: number = 6
let y: number = 15

if (x+y>15)
{
    console.log("La suma es mayor que 15")
}
else if(x+y==10)
{
    console.log("La suma es igual a 10")
}
else if(x+y==11)
{
    console.log("La suma es igual a 11")
}
else
{
    console.log("La suma está entre 12 y 15")
}

// Operador Ternario

x>y? console.log("X es mayor que Y"): console.log("X es menor que Y")