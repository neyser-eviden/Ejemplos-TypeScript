// Tipos primitivos: string, number, boolean, null undefined

// tipos no primitivos: El resto

let casa=
{
    calle: "Calle Villaverde",
    numero: 13,
    portero: false,
    familia:
    {
        padre: "Juan",
        hijo: "Pepe" 
    }
}

console.log(casa)
console.log(casa.calle)
console.log(casa.numero)
console.log(casa.portero)

let casa2:
{
    calle:string,
    numero:number,
    portero:boolean,
    familia:
    {
        padre: string,
        hijo: string 
    }
}=
{
    calle: "Calle Villaverde 2",
    numero: 18,
    portero: true,
    familia:
    {
        padre:"Luis",
        hijo: "Garcia"
    }
}

casa2.calle = "Alguna"

console.log(casa2)
console.log(casa.familia.padre)
