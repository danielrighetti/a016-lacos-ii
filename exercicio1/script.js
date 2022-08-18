const array = [
    [27, 4, 20, 13, 14], //Índice 0 - Jogador 1
    [11, 15, 12, 8, 9],  //Índice 1 - Jogador 2
    [5, 5, 12, 16, 4],   //Índice 2- Jogador 3
    [20, 33, 11, 12, 19],  //Índice 3 - Jogador 4
    [3, 3, 4, 5, 10]      //Índice 4 - Jogador 5
]


for(i = 0; i <= 4; i++){

    console.log(`Jogador ${i + 1} : ${array[i]}`)
}










// outra resolução

// if(array.length === 5){
//     for(let i in array){
//         let jogador
//         jogador = `Jogador ${Number(i)+1}: `
//         for(let j of array[i]){
//             jogador += ` ${j} `
//         }
//         console.log(jogador)
//     }
// }else{
//     console.log("é necessário atualizar os dados do elenco")
// }

