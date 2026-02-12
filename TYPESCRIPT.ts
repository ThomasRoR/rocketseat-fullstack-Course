// const message = 'Hello'
// // indendtifica que nao da pra mudar
// message = 'type'
// // indendtifica que nao e uma funcao
// message()

// const user = {
//     name: 'thomas',
//     email: 'mail@mail'
// }
// // a propiedade nao existe
// console.log(user.avatar)

// let message = 'Hello'

// message = 'type'

// let messageFunction = (m:string) => {console.log(m)};
// messageFunction(message);

// const user = {
//     name: 'thomas',
//     email: 'mail@mail'
// }
// // a propiedade nao existe
// console.log(user.name)

// // TIPAGEM EXPLICITA
// let username:string
// username = 'test'

// let age:number
// age = 123

// let choice:boolean
// choice = false

// // inferencia de tipos - o type ja entende o tipo pelo valor inicial
// let message = 'hi'
// message = 1 // nao aceita pois o valor incial foi String

// let variable

// // se nao deifinir o tipo, naturalmente é any, a variavel any aceita qualquer valor.
// // tambem pode deixar explicito o tipo any let variable:any
// variable = 'a'
// variable = 1
// variable = true

// // tipagem em arrays

// //explicita (type annotation)
// let names: string[] = ['nome1','nome2','nome3']
// let numbers: number[] = [1,2,3]

// //inferencia
// let products = ['a','b','c']
// let prices = ['100','50','20']

//tipagem em funcoes

// function sum(num1:number, num2:number){ // tipo da funcao é VOID pois nao retorna nada, se nao retornar nada fica Void Auto
//     const result = num1 + num2
//     console.log(`resultado é ${result}`)
// }
// sum(1,3)

// function drec(num1:number, num2:number): number{ // tipo da funcao (retorno) é number
//     const result =  num1 - num2
//     return result
// } console.log(drec(1,3))

// const showMessage = (name:string):string => { // tipo da funcao é string
//     const message:string = `olá, ${name}`
//     return message
// } 
// console.log(showMessage('thomaS'))

// //tipagem em objetos
// let user:{name: string, age: number, avatar?:string}// definindo os atributos e os tipos dos atributos
// // as propiedades sao obrigatorias para criar uma objeto, pra tornar uma propiedade opcional tem que ter o ? ou tipagem undefined
// user = {name: 'Thomas', age: 20} // tem as obrigatorias mas nao da erro pois falta o avatar que é uma propiedade ?
// console.log(user)

// function signIn(emai:string, password:number){ // tipagem de parametro da funcao
//     //exemplo
// }
// signIn('email', 12345)

//  function signIn({email, password}:{email:string, password:number}){ 
//      //exemplo
//  }
//  signIn({email:'email@example', password: 1234})

// //undefined quando a variavel nao tem um valor atribuido
// let value:number
// console.log(value)
// value = 20
// console.log(value)

// // null é  quando é feito intencionalmente a ausencia de valor
// let email = null
// console.log(email)

// //union types | aceita varios tipos
// let response: string | null
// response = 'teste'
// response = null

// // FIM DOS TIPOS PRIMITIVOS (TIPOS PRE EXISTENTES DO TYPESCRIPT)

// // TIPOS CUSTOMIZADOS ->>

// // interfaces 
// interface Product {
//     id:number,
//     name:string,
// }

// function newProduct(product:Product){

// }
// newProduct({id:1, name:'teste'})

// // extended interface
// interface Person {
//     id:number,
//     name:string,
//     email?:string
// }
// interface Teacher extends Person { // significa que o Teacher tem as MESMAS propiedades de person + as suas propias
//     //id: number,
//     //name:string,
//     subjects: string[],
// }

// interface Students extends Person {
//     //id:number,
//     //name:string,
//     age:number,
// }

// let teacher: Teacher = {id: 1, name:'test', subjects:['JS','TS']}
// let student: Students = {id:1, name:'name', age:16

// // recurso type
// type Product = {
//     id:number,
//     name:string
// }

// function newProduct(product:Product){

// }

// newProduct({id: 1, name:'test'})

// type SelectResponse = Product[] | null

// function selectProducts(): SelectResponse {
//     return null
// }

// // interseccao de tipos
// type Person = {
//     id:number,
//     name:string
// }
// type Teacher = Person & {
//     subjects:string[]
// }
// type Student = Person & {
//     age:number
// }

// let teacher: Teacher
// let student: Student

// // diferenca entre interface e type
// interface IBaseProduct {
//     price:number
// }

// interface IProduct extends IBaseProduct {
//     id:number,
//     name:string
// }

// type TBaseProduct = {
//     price:number
// }

// type TProduct = TBaseProduct & {
//     id:number,
//     name:string    
// }

// let product1:IProduct = {id:1, name: 'produto', price:2500};
// let product2:TProduct = {id:1, name: 'produto', price:200};

// //interfaces podem ser sobreescritas (se nao existe a tipagem adiciona a nova, se ja existe modifica) diferente de type ( ja da erro na hora de criar )
// // o type permite modificar tipos primitos pra criar um novo customizado, o interface não permite

// // assercao de tipos 
// type UserResponse = {
//     ui:number,
//     name:string,
//     avatar:string
// }

// let userResponse = {} as UserResponse;// ta dizendo pro type que o objeto 1 é o tipo definido

// // restringindo valores
// type Size = 'small'|'medium'|'large'
// let size:Size
// size = "small"

// // Enums
// enum Profile { // representa um valor
//     Admin = 1,
//     Client = 2,
//     Seller = 3
// }

// let profile:number = Profile.Admin

// // generic

// function useState<T extends string | number = string>(){ // CRIA UM TIPO GENERICO (T) QUE DEIXA USAR (EXTENDS) STRING E NUMBER, CASO N SEJA PASSADO NA DEFINICAO USA O = (= STRING)
//     let state:T;

//     function get(){
//         return state;
//     }
//     function set(newValue: T){
//         state = newValue;
//     }
//     return{get, set};
// }

// let newState = useState();
// newState.get();
// newState.set(123);
// newState.set('aaaaa');

// // UTILITARIOS
// //partial
// interface User {
//     id:number,
//     name:string,
//     email:string
// }

// const newUser: User = {id:1, name:'eu', email:'email@email.com'}

// const updatedUser: Partial<User> = {name:'euMsm'} // deixa alterar somente 1 propiedade

// //pick
// interface Book {
//     title:string,
//     pages:number
// }
// const book: Pick<Book, 'title'> = {title:'title'} // posso escolher quais propiedades eu quero pegar

// //Omit
// interface Book {
//     title:string,
//     pages:number,
//     author: string,
//     description:string
// }

// const book: Omit<Book, 'description'> = {title:'ex', pages:100, author:'xd'} // omit deixa omitir a/as propiedades selecionadas

// // Record - mapeamento de um tipo de objeto para outermost
// // cria um objeto onde todas as chaves sao strings e todos os valores sao number
// const scores: Record<string, number> = {
//     'ex1':10,
//     'ex2':15
// }

// // limitar valores
// type Profile = 'admin' |'user'| 'guest'

// const user: Record<Profile, number> = {
//     'admin':1,
//     "guest":2,
//     "user":3,
// }

// // objetos personalizados

// interface User {
//     email:string,
//     name:string
// }
// const users: Record<number, User> = {
//     1: {name:'Eu', email:'MAIL@'},
//     2: {name:'vc', email:'MAIL@'},
// }

// // Typeof - definir uma tipagem apartir de algo
// interface Product {
// id: number
// name: string
// }
// const product1: Product = { id: 1, name: "Produto 1"}

// const product2: typeof product1 = { id:2, name:'Produto 2'}

// // keyof - extrair a chave de um objeto e usar como objeto

// const icons = {
//     'home': "./path/home.svg",
//     'add': "./path/add.svg",
//     'remove': "./path/remove.svg"
// }

// type Icon = typeof icons
// const icon: keyof Icon = 'add'

