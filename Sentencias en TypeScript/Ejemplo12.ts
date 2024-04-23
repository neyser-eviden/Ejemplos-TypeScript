// While
let num: number = 3
while (num<57 && num%2==1)
    {
        console.log("1) El número es "+num)
        num=num*2
    }

while (num<57 || num%2==1)
    {
        console.log("2) El número es: ",num)
        num = num*2
    }

// Do While
let i: number = 52
do {
    console.log("3) El número es "+i)
    i++
} while (i<7 || i<12);