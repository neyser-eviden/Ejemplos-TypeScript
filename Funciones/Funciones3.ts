//let tipoNever = (cadena: string) => {if(cadena!="")while(true);}

let lanzarError=(texto: string) =>
    {
        throw new Error(texto);
    }

    lanzarError("Hola")
