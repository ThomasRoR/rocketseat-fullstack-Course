// class Person { // cria a classe Person
//     constructor(name){ // método construtor da classe serve para inicializar objetos
//         console.log(`olá ${name}`);
        
//     }
// }

// const p1 = new Person('Raul'); // instancia a classe Person
// console.log();

// // -----------------------------------------
// class Product{
//     constructor(name,){
//         this.name = name // 
//     }
// }

// const product = new Product('Camiseta');
// console.log(product.name);
// // -----------------------------------------
// class User { // cria a classe User
//     constructor(name,email){ // método construtor da classe serve para inicializar objetos
//         this.name = name; // inicializa a propriedade name e atribui o valor do parâmetro name
//         this.email = email; // inicializa a propriedade email e atribui o valor do parâmetro email
//     }
//     sendEmail(){ // método da classe User
//         console.log('Enviando email para', this.email); // exibe uma mensagem no console com o email do usuário
//     }
// }

// const user = new User('Raul','email@mail.com'); // instancia a classe User criando um novo objeto user com nome e email
// console.log(user.name);
// user.sendEmail();
// // -----------------------------------------

// class Animal {
//     constructor(name){
//         this.name = name;
//     }

//     makeNoise(som) {
//         console.log(som +' som!');
        
//     }
// }

// class Dog extends Animal { // Dog herda a classe Animal os métodos e propriedades da classe Animal serão acessíveis na classe Dog
//  makeNoise() { // sobrescreve o método makeNoise da classe Animal
//     console.log('Au Au!');
// }
// }

// const dog = new Dog('theseus');
// dog.makeNoise(); // chama o método makeNoise da classe Animal através da instância dog da classe Dog

// class Cat extends Animal {
//     makeNoise() { // sobrescreve o método makeNoise da classe Animal
//         console.log('Miau Miau!');
//     }   
// }
// const cat = new Cat('Whiskers');
// cat.makeNoise(); // chama o método makeNoise da classe Cat através da instância cat da classe Cat

// class Bird extends Animal {}// Bird herda a classe Animal os métodos e propriedades da classe Animal serão acessíveis na classe Bird
// const bird = new Bird('Tweety');
// bird.makeNoise('PIAAAAA PIAAAAAAAAAAA'); // chama o método makeNoise da classe Animal através da instância bird da classe Bird

// // -----------------------------------------

// let obj = [15]
// let index = 150;

// try { // tenta executar o código dentro do bloco
//     if(!obj.includes(17)){
//         throw new Error('O valor não existe no array'); // lança um erro personalizado
//     }

//     if (index > 99){ // verifica se o índice é maior que 99
//         throw new RangeError('O valor é muito alto'); // lança um erro do tipo RangeError
//     }
// } catch (error) { // captura o erro gerado no bloco try
//     if (error instanceof TypeError) { // verifica se o erro é do tipo TypeError
//         console.log('Type Error - metodo inexistente');
//     } else if (error instanceof RangeError) { // verifica se o erro é do tipo RangeError
//         console.log(error.message); // exibe a mensagem do erro no console
//     } else {
//         console.log('nao foi possivel executar'); // exibe a mensagem do erro no console
//     }
// }
// // -----------------------------------------

// // como criar erros personalizados com classes
// class CustomError {
//     constructor(message){
//         this.message = 'CLASSE DE ERRO: ' + message; // inicializa a propriedade message com a mensagem personalizada
//     }
// }

// try { // tenta executar o código dentro do bloco
//     // throw new Error('este é um erro comum'); // lança um erro comum
//     throw new CustomError('este é um erro personalizado');
// } catch (error) { // captura o erro gerado no bloco try
//     if (error instanceof CustomError){ // verifica se o erro é do tipo CustomError
//         console.log(error.message);
//     } else {
//         console.log('Outro tipo de erro');
//     }
// }
// // -----------------------------------------