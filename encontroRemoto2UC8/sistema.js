let n = 10;

let contador = 0;

while (contador <= n) {
    if (contador === 0) {
        console.log("O nº atual é zero")
    } else if (contador % 2 == 0) {
        console.log("O nº " + contador + " é par")
    } else {
        console.log("O nº " + contador + " é ímpar")
    }

    contador++
}

// for (let contador = 0; contador <= n; contador++) {
//     // console.log(contador);
    
// if (contador === 0) {
//     console.log("O nº atual é zero")
// } else if (contador % 2 == 0) {
//     console.log("O nº " + contador + " é par")
// } else {
//     console.log("O nº " + contador + " é ímpar")
// }
// }

let listaAlunos = ["Ze", "Lu", "Bia"]

// console.log(listaAlunos[1])

// listaAlunos.forEach(element => {
//     console.log(element)
// });