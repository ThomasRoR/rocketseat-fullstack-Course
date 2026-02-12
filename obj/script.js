const obj = {} // cria um objeto vazio

console.log(obj);

const user = {
    email: 'example@example.com', // chave: valor
    name:{ // objeto dentro de outro objeto
        first: 'Thomas',
        last: 'Raimundo'
    },
    adress: {
        street: 'Rua tal',
        number: 123,
        city: 'São Paulo',
        postalCode: '01234-567'
    },
    message: () => { // método do objeto
        console.log('Hello, world!');
    },
}
//--------------------------------
// acessando valores do objeto usando a notação de ponto
console.log(user.email);
console.log(user.name.first);
user.message();

// notação de colchetes
console.log(user['adress']['city']);
console.log(user['email']);
user['message']();
// --------------------------------
const user = {
    name: 'Alice',
    message: function() { // se for uma arrow function, o this não funcionará corretamente
        console.log(`Hello, ${this.name}!`); // usando this para acessar a propriedade do objeto
    },
}

user.message(); // Output: Hello, Alice!
// --------------------------------
const product = {
    name: 'Laptop',
    price: 1200
};

console.log(product.price);
product.price = 1000; // atualizando o valor da propriedade price
console.log(product.price);

console.log(product['name']);
product['name'] = 'Gaming Laptop'; // atualizando o valor da propriedade name usando notação de colchetes
console.log(product['name']);
// --------------------------------

opitonal chaining (encadeamento opcional)
const user = {
    name: 'Bob',
    Id: 1,
    // adress: {
    //     // street: 'Avenida Central',
    //     // number: 456,
    //     // city: 'Rio de Janeiro',
    //     // geo: {
    //     //     lat: -22.9068,
    //     //     lng: -43.1729
    //     }
    // },
    message: function() {
        console.log(`Hello, ${this.name}!`);
    }
};

console.log(user?.adress?.street); // Acessa a rua se adress existir ? se não, retorna undefined
user.message?.(); // Chama o método message se ele existir

// --------------------------------

// operador de coalescência nula (??) retorna o operando do lado direito quando o operando do lado esquerdo é null ou undefined
const content = null;
console.log(content ?? 'conteudo padrao'); // retorna 'conteudo padrao' porque content é null

const user = {
    name: 'Charlie',
    pic: undefined
};
console.log(user.pic ?? 'default'); // retorna 'default' porque user.pic é undefined

// --------------------------------

// funcao construtora de objetos
function createProduct(name){ // função construtora
    const product = {}; // criando um novo objeto vazio
    product.name = name;// adicionando uma propriedade ao objeto
    product.describe = function(){ // adicionando um método ao objeto
        console.log(`Produto: ${this.name}`); // usando this para acessar a propriedade do objeto
    };

    return product; // retornando o objeto criado
}

const prod1 = new createProduct('Smartphone'); // criando um novo objeto usando a função construtora
prod1.describe(); // Produto: Smartphone
// new createProduct cria um novo objeto vazio e define o contexto do this para esse novo objeto dentro da função construtora

function person(name){ // função construtora
    this.name = name;// propriedade do objeto
    this.message = function(){ // método do objeto
        console.log(`Hello, ${this.name}!`);
    }
}

const p1 = new person('David');
p1.message(); // Hello, David!

// --------------------------------


let message = 'TesTe haaaaAaaaa';
// manipulando strings com métodos de objetos
console.log(message);
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// --------------------------------

let message = 'TesTe haaaaAaaaa';
console.log(message.length); // comprimento da string

let password = '123456'

if (password.length >= 6){ // verificando o comprimento da senha
    console.log('Senha forte');
} else {
    console.log('Senha fraca');
}

let value = 12345
console.log(value.toString().length); // comprimento do número convertido em string


// --------------------------------

let message = 'Estou estudando os fundamentos de JavaScript';
console.log(message);

// substituindo parte da string
console.log(message.replace('JavaScript', 'JS'));
// extraindo parte da string
console.log(message.slice(0, 16)); // de 7 até 16 (não inclui o caractere na posição 16)
console.log(message.slice(-11));// de tras pra frente
// dividindo a string em um array de palavras
console.log(message.split(' '));

let text = '   Espaços em branco   ';
console.log(text.trim()); // removendo espaços em branco no início e no final da string

// --------------------------------

const creditCard = '1234567890123456';
// console.log(creditCard.length);

const last4Digits = creditCard.slice(-4); // pegando os últimos 4 dígitos
// console.log('Last 4 digits:', last4Digits);

const maskedNumber = last4Digits.padStart(creditCard.length, '*'); // preenchendo com '*' até o comprimento original
console.log('Masked Number:', maskedNumber); // Output: ************3456

const number = '42';
console.log(number.padEnd(10, '#')); // preenchendo com '#' até o comprimento 10

// --------------------------------

let text = 'Estudar, Aprender, Praticar';
let separate = text.split(',');
console.log(separate); // dividindo a string em um array usando ', ' como separador

let joinedText = separate.join(' - '); // juntando o array em uma string usando ' - ' como separador
console.log(joinedText);

// --------------------------------

// encontrando um conteudo dentro de uma string
let message = 'Estou aprendendo o JavaScript';
console.log(message.indexOf('JavaScript')); // retorna o índice onde a palavra começa
console.log(message.indexOf('nao existe')); // retorna -1 se a palavra não for encontrada

console.log(message.includes('Aprendendo')); // retorna true se a palavra for encontrada
console.log(message.toLocaleLowerCase().includes('aprendendo')); // ignorando maiúsculas/minúsculas

// --------------------------------