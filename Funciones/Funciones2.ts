let sumarAnonimo = (x: number, y: number): number => {return x+y}
let fibonacciAnonima = (vecesSucecion: number): number[] =>
    {
        let numeros=[0,1]
        let i=2
        while (i<vecesSucecion) {
            numeros[i] = sumarAnonimo(numeros[i-2],numeros[i-1])
            i++
        }
        return numeros
    }

    console.log(fibonacciAnonima(15))