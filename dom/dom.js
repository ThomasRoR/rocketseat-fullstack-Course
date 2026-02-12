// // console.log(document.title)

// // const guest = document.getElementById('guest-2')
// // console.log(guest)

// // const guestsByClass = document.getElementsByClassName('guest')
// // console.log(guestsByClass)

// // const guestQuery = document.querySelector('#guest-1')
// // console.log(guestQuery)

// // const guestQuery2 = document.querySelector('.guest')
// // console.log(guestQuery2)

// // const guestQueryAll = document.querySelectorAll('.guest')
// // console.log(guestQueryAll)

// ----------------------

// // const guest = document.querySelector('#guest-1')
// // // console.log(guest.textContent)
// // // guest.textContent = 'Hello Guest 1!'
// // console.log(guest.textContent) // todo o conteudo, mesmo o escondido
// // console.log(guest.innerText) // so o conteudo visivel
// // console.log(guest.innerHTML) // todo o conteudo, incluindo tags HTML

// --------------------------


// // const input = document.querySelector('#name')
// // input.classList.add('input-error') // adiciona a classe
// // input.classList.remove('input-error') // remove a classe
// // input.classList.toggle('input-error') // adiciona se nao existir, remove se existir

// // const button = document.querySelector('button')
// // button.style.backgroundColor = 'blue' // altera o estilo inline

// ------------

// const guests = document.querySelector('ul')

// const addGuest = document.createElement('li')
// addGuest.classList.add('guest')
// const guestName = document.createElement('span')

// guestName.textContent = 'Novo Convidado'

// //addGuest.append(guestName) // adiciona o span ao li

// // append adiciona no final e prepend no inicio

// addGuest.appendChild(guestName) // adiciona o span ao li, appendChild adiciona um unico elemento

// guests.append(addGuest)   // adiciona o li ao ul

// ----------------------

// const input = document.querySelector('input')
// input.setAttribute('disabled', true) // desabilita o input
// input.removeAttribute('disabled') // habilita o input
// // input.setAttribute('type', 'file') // altera o tipo do input

// ----------------------

// window.addEventListener('load', () => { // escuta o evento de carregamento da pagina
//     alert('Pagina carregada!')
// })
// // window =  objeto global do navegador
// addEventListener ('click', (evento) => { // escuta cliques em toda a pagina
//     evento.preventDefault() // previne o comportamento padrao do evento
//     console.log(evento.target) // mostra o elemento que foi clicado
//     console.log(evento.target.textContent) // mostra o texto do elemento que foi clicado

// })

// ----------------------

// const ul = document.querySelector('ul') // seleciona a ul
// ul.addEventListener('scroll', () => {// escuta o evento de scroll na ul
//     console.log(ul.scrollTop) // mostra a posicao do scroll
//     if (ul.scrollTop >= 178) {// se o scroll chegar a 178px
//         ul.scrollTo({ // rola a lista para o topo
//             top: 0, // posicao 0px
//             behavior: 'smooth' // rolagem suave
//         })
//     }
// })

// const button = document.querySelector('button') // seleciona o botao
// button.addEventListener('click', (event) => { // escuta o evento de clique no botao
//     event.preventDefault() // previne o comportamento padrao do botao
//     console.log('clicou');
// })

// ----------------------

// const form = document.querySelector('form') // seleciona o formulario
// form.onsubmit = (event) => {
//     event.preventDefault() // previne o comportamento padrao do formulario
//     console.log('submit');  
// }  // escuta o evento de submit do formulario

// form.addEventListener('submit', (event) => {
//     event.preventDefault() // previne o comportamento padrao do formulario
//     console.log('submit com addEventListener');  
// })  // escuta o evento de submit do formulario

// // onsubmit so pode ter um evento, addEventListener pode ter varios

// ----------------------

// const input = document.querySelector('input') // seleciona o input
// // keydown - quando a tecla e pressionada captura tudo ( crtl , shift, alt )
// input.addEventListener('keydown', (event) => {
//     console.log(event) // mostra a tecla pressionada
// })
// // keypress - quando a tecla e pressionada captura apenas caracteres
// input.addEventListener('keypress', (event) => {
//     console.log('keypress: ' + event.key) // mostra a tecla pressionada
// })
// // onchange - quando o valor do input muda e o foco sai do input
// input.addEventListener('change', (event) => {
//     console.log('input changed') // mostra o valor do input
// })

// ----------------------

// const input = document.querySelector('input') // seleciona o input
// const form = document.querySelector('form') // seleciona o formulario
// // input.addEventListener('input', (event) => {
// //     let value = input.value;
// //     const  regex = /\D+/g // regex para capturar tudo que nao for numero
// //     console.log(value.match(regex)); // mostra os caracteres nao numericos

// //     const isValid = regex.test(value) // testa se o valor do input e valido
// //     console.log(isValid);
    
    
// // }) // escuta o evento de input ( quando o valor do input muda )

// form.addEventListener('submit', (event) => {
//     event.preventDefault() // previne o comportamento padrao do formulario
//     const value = input.value;
//     const regex = /\D+/g // regex para capturar tudo que nao for numero
    
//     if (regex.test(value)){ // testa se o valor do input e valido
//         alert(`O nome ${value} foi adicionado com sucesso!`)
//     } else {
//         alert('Por favor, digite apenas letras')
//     }

//     //const value = input.value.replace(/\D+/g, '') // remove tudo que nao for numero;
//     //console.log(value);
    
//  }) // escuta o evento de submit do formulario

// ----------------------

const input = document.querySelector('input') // seleciona o input
const form = document.querySelector('form') // seleciona o formulario

form.onsubmit = (event) => {
    event.preventDefault() // previne o comportamento padrao do formulario
    const value = input.value;
    const hasNumberRegex = /\d+/g // regex para capturar tudo que nao for numero

    if (hasNumberRegex.test(value)){ // testa se o valor do input e valido
        alert(`O nome ${value} nao pode conter numeros!`)
    } else {
        alert(`O nome ${value} foi adicionado com sucesso!`)
    }   

    console.log(value);
    


}