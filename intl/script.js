// // intl é a api de internacionalização do JavaScript
// // usada para formatar números, datas e moedas de acordo com o localidade

// const currentLocale = Intl.DateTimeFormat().resolvedOptions(); // Obtém as opções de formatação de data e hora para o local atual
// console.log(currentLocale); // Exibe as opções no console

// console.log(new Intl.DateTimeFormat('pt-BR').format(new Date())); // Formata a data atual para o formato brasileiro (dd/mm/aaaa)

// const date = new Date()
// console.log(date.getTimezoneOffset() / 60);
// // Obtém o fuso horário local em minutos

// // -----------------------------------------
// const dateWithTimezone = new Date('2025-01-30T01:47:29.142+03:00'); // Cria uma data com fuso horário específico (+03:00)
// // console.log(dateWithTimezone.toISOString()); // Converte a data para o formato ISO 8601

// console.log(new Date().toLocaleString()); // Exibe a data e hora local atual no formato local
// console.log(dateWithTimezone.toLocaleString()); // Exibe a data com fuso horário especificado no formato local

// // -----------------------------------------