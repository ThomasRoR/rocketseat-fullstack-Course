// // while
// let execute = true

// while (execute === true) { //  while ( condição ) { bloco de código }
//     let response = window.prompt("Digite 'sair' para encerrar o loop:"); 
//     if (response === 'sair') {
//         execute = false; // Altera a condição para encerrar o loop
//     }   
// } // while ( condição ) { bloco de código }


// // ----------------
// // loop infinito
// let value = true;

// while (value) { // enquanto value for true
//     console.log('executando');
// }

// // ----------------
// // loop do-while , executa pelo menos uma vez o bloco de código
// let i = 0
// do { // bloco de código
//     console.log(i);
//     i++;
// } while (i <= 10); // enquanto a condição for verdadeira

// // ----------------
// // for ( inicialização ; condição ; incremento ) { bloco de código } 
// // repete o bloco de código enquanto a condição for verdadeira

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// // exemplo de for tabuada
// let number = 7;
// for (let i = 1; i <= 10; i++) {
//     console.log(`Tabuada do ${number} * ${i} = ${number * i}:`);
// } 
// // exemplo de for com array
// const fruits = ['Banana', 'Maçã', 'Pera', 'Uva'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`fruta: ${fruits[i]}`);
// }
// // ----------------------

// // for in, excuta o bloco de código para cada propriedade do objeto
// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// for (let property in person) { // para cada propriedade em person
//     console.log(`${property}: ${person[property]}`); // exibe a propriedade e o valor

// }
// let colors = ['Red', 'Green', 'Blue'];
// for (let index in colors) { // para cada índice em colors
//     console.log(`Index ${index}: ${colors[index]}`); // exibe o índice e o valor
// }

// // ----------------------

// // for of, excuta o bloco de código para cada valor do array, diferente do for in que itera sobre os índices
// // tem que ser um array ou objeto iterável
// const colors = ['Red', 'Green', 'Blue'];
// for (let color of colors) { // para cada cor em colors
//     console.log(`Color: ${color}`); // exibe a cor
// }

// // ----------------------
// let option = 3;
// switch (option) { // switch ( expressão ) { case valor: bloco de código; break; ... }
//     case 1: // se opção for 1
//         console.log('Opção 1 selecionada'); // executa este bloco
//         break; // sai do switch
//     case 2: // se opção for 2
//         console.log('Opção 2 selecionada'); // executa este bloco
//         break; // sai do switch
//     case 3: // se opção for 3
//         console.log('Opção 3 selecionada'); // executa este bloco
//         break; // sai do switch
//     default: // se nenhuma das opções acima for selecionada
//         console.log('Opção inválida'); // executa este bloco
// }
// // // ----------------------

// // break para sair do loop
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     if (i === 5) {
//         break; // sai do loop quando i for 5
//     }
// }
// // ----------------------

// // continue para pular a iteração atual do loop e ir para a próxima

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue; // pula a iteração quando i for par
//     }
//     console.log(i); // exibe apenas os números ímpares
// }
// // ----------------------
