function multiplicar(x: number, y: number): number
{
    return x*y;
}

function aux(x: number, y: number)
{
    return x*y;
}

let funcionMultiplicar = multiplicar;

let funcionMultiplicar2: (x: number, y: number)=> number;

funcionMultiplicar2 = aux

console.log(funcionMultiplicar(3,4))
console.log(funcionMultiplicar2(5,4))
