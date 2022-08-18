const numero = Number(prompt("Digite um número de 1 à 10 para saber a sua tabuada: "))


// somente for

// for(i = 0; i <= 10; i++){

//     console.log(numero*i)
// }


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

for(i in array){

    console.log(`${numero} x ${i} = ${numero*i}`)
}



