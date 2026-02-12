// // DATAS E HORÁRIOS
// // ----------------------
// console.log(new Date()); // exibe a data e hora atual
// console.log(new Date().getTime()); // exibe o timestamp atual
// console.log(new Date(0)); // exibe a data correspondente ao timestamp 0 (01/01/1970)
// // ----------------------
// console.log(new Date(2024, 6, 3)); // define uma data específica (ano, mês, dia)`

// console.log(new Date(2022, 11, 25, 10, 30, 0)); // define uma data e hora específica (ano, mês, dia, hora, minuto, segundo)
// console.log(new Date('2024-07-03T14:30:00')); // define uma data e hora específica usando string no formato ISO 8601
// console.log(new Date('July 3, 2024 14:30:00')); // define uma data e hora específica usando string em formato legível

// // ----------------------
// // MÉTODOS DE DATA
// let date = new Date('2024-07-01T00:30:00');
// console.log(date);
// console.log(date.getDay()); // dia da semana (0-6) domingo = 0
// console.log(date.getDate()); // dia do mês (1-31)
// console.log(date.getMonth()); // mês (0-11) janeiro = 0
// console.log(date.getFullYear()); // ano (4 dígitos)
// console.log(date.getHours()); // hora (0-23)
// console.log(date.getMinutes()); // minutos (0-59)
// console.log(date.getSeconds()); // segundos (0-59)
// console.log(date.getMilliseconds()); // milissegundos (0-999)
// console.log(date.getTime()); // timestamp (milissegundos desde 01/01/1970)

// // ----------------------
// // alterando datas
// let date = new Date('July 3, 2024 14:30:00');
// console.log(date);
// date.setFullYear(2077); // altera o ano para 2077
// date.setMonth(11); // altera o mês para dezembro (11)
// date.setDate(25); // altera o dia para 25
// date.setHours(10); // altera a hora para 10
// date.setMinutes(0); // altera os minutos para 0
// date.setSeconds(0); // altera os segundos para 0
// console.log(date);

// // ----------------------
// // formatando datas

// let date = new Date('2020-07-03T14:30:00');
// let year = date.getFullYear();
// let month = String(date.getMonth() + 1).padStart(2, '0');
// let day = String(date.getDate()).padStart(2, '0');
// let hours = String(date.getHours()).padStart(2, '0');
// let minutes = String(date.getMinutes()).padStart(2, '0');
// let seconds = String(date.getSeconds()).padStart(2, '0');

// console.log(`${day}/${month}/${year} às ${hours}:${minutes}:${seconds}`);


// // ----------------------

// // convertendo datas para strings legíveis
// let date = new Date('2024-07-03T14:30:00');
// console.log(date.toDateString()); // exibe a data em formato legível
// console.log(date.toTimeString()); // exibe a hora em formato legível

// // ----------------------
// // exibe data de acordo com o local
// let date = new Date('2024-07-03T14:00:00');
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// // exibe data e hora de acordo com um local específico
// console.log(date.toLocaleString('en-US')); // formato dos EUA
// console.log(date.toLocaleString('pt-BR')); // formato do Brasil
// console.log(date.toLocaleString('ja-JP')); // formato do Japão

// // ----------------------

// // toLocaleString
// let date = new Date('2024-07-03T14:30:10');
// console.log(date.toLocaleString());
// console.log(date.toLocaleString('en-US',{ dateStyle: 'short' })); // mostra data curta
// console.log(date.toLocaleString('en-US',{ dateStyle: 'medium' })); // mostra data média
// console.log(date.toLocaleString('en-US',{ dateStyle: 'long' })); // mostra data longa
// console.log(date.toLocaleString('en-US',{ dateStyle: 'full' })); // mostra data completa

// console.log(date.toLocaleString('en-US',{ timeStyle: 'short' })); // mostra hora curta
// console.log(date.toLocaleString('en-US',{ timeStyle: 'medium' })); // mostra hora média
// console.log(date.toLocaleString('en-US',{ timeStyle: 'long' })); // mostra hora longa
// console.log(date.toLocaleString('en-US',{ timeStyle: 'full' })); // mostra hora completa

// console.log(date.toLocaleString('en-US',{ 
//     day: '2-digit',
//     month: '2-digit',
//     year: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit'
// })
// );

// let amount = 12.5

// console.log(amount.toLocaleString('pt-BR', {
//     style: 'currency',
//     currency: "BRL"
// }));