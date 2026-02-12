// let newArray = () => { // cria um array com 5 elementos
//     const arr = [1, 2, 3, 4, 5];
//     return arr;
// }
// const newArray2 = new Array(); // cria um array vazio
// const available = new Array(10); // cria um array com 10 posições vazias

// console.log(newArray());
// console.log(newArray2);
// console.log(available);

// // ----------------------

// const fruits = ['Banana', 'Maçã', 'Pera', 'Uva'];
// console.log(fruits[0]); // Acessa o primeiro elemento do array
// console.log(fruits.length); // Mostra o tamanho do array
// console.log(fruits[fruits.length - 1]); // Acessa o último elemento do array


// for (let i = fruits.length; i > 0; i--) { // Itera sobre o array de trás para frente
//     console.log(`fruta: ${fruits[i - 1]}`);
// }

// // ----------------------

// let fullName = 'John Doe';
// let charsArray = fullName.split(' ');// divide a string em um array de strings usando o espaço como separador
// console.log(charsArray);

// // CRIA UM ARRAY COM CADA CARACTERE DA STRING
// let charsArray2 = Array.from(fullName); // cria um array com cada caractere da string
// console.log(charsArray2);

// // ----------------------

// let user = [];
// user.push('John'); // adiciona um elemento no final do array
// user.push('Doe');
// user.push(30); // adiciona um elemento no final do array
// console.log(user);
// user.unshift('Mr.'); // adiciona um elemento no início do array
// console.log(user);
// user.pop(); // remove o último elemento do array
// console.log(user);
// user.shift(); // remove o primeiro elemento do array
// console.log(user);

// // ----------------------

// const fruits = ['Banana', 'Maçã', 'Pera'];
// let position = fruits.indexOf('Maçã'); // procura a posição do elemento 'Maçã' no array
// console.log(position); // mostra a posição do elemento 'Maçã'

// fruits.splice(position, 1); // remove o elemento position que é maçã do array
// // xx.splice(start, deleteCount)

// console.log(fruits);
// // ----------------------

// let myArray = [
//     'a',
//     1,
//     true,
//     { name: 'John',
//         email: 'email@example.com'
//      },
//     function () { console.log('Hello!') }
// ]

// console.log(myArray);
// myArray[4](); // chama a função que está na posição 4 do array
// console.log(myArray[3].email); // acessa a propriedade email do objeto que está na posição 3 do array

// // ----------------------

// // verificar se um elemento existe no array
// let fruits = ['Banana', 'Maçã', 'Pera', 'Uva'];


// console.log(fruits.includes('Maçã')); // true
// console.log(fruits.includes('Laranja')); // false

// // ---------------------- 

