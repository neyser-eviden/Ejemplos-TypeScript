function sumar(x: number, y: number): number
{
    console.log("funcion suma")
    return (x+y);
}

console.log(sumar(5,15));

function sinRetornoNiParametros(x: string):void
{
    console.log(x)
}

sinRetornoNiParametros("hola")


function fibonacci(vecesSusecion: number): number[]
{
    console.log("funcion fibonacci")
    let numeros=[0,1]
    let i=2
    while (i<vecesSusecion) {
        numeros[i] = sumar(numeros[i-2],numeros[i-1])
        i++
    }
    return numeros
}

console.log(fibonacci(15))