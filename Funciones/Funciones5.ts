// Funciones Callback

type Operacion = (valor1: number, valor2: number)=> number;

function operacion(
    x: number,
    y: number,
    func:Operacion
): number
{
    return func(x,y);
}

console.log(operacion(5,8,(x:number, y:number): number=>{return x*y;}));
console.log(operacion(5,8,(x:number, y:number): number=>{return x+y;}));
console.log(operacion(5,8,(x:number, y:number): number=>{return x-y;}));