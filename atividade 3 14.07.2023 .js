//atividade 1
//a)Numero de caracteres de string.
var frase = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.";
console.log ("Nuemro de caracteres", frase.length);
//b)A string com todas suas letras em maiúsculo.
console.log("String em maiúsculo:", frase.toUpperCase());
// c) O número de vogais da string.
let vogais = frase.match(/[aeiou]/gi);
console.log("Número de vogais:", vogais ? vogais.length : 0);
// d) A string com todas suas letras em minúsculo.
console.log("String em minúsculo:", frase.toLowerCase());
// e) Fazer a busca pela palavra "humanidade" e exibir o índice onde ela está.
let indice = frase.indexOf("humanidade");
console.log("Índice da palavra 'humanidade':", indice);

// atividade 2

var numerosPares = [];

for (let i = 0; i < 100; i += 2) {
  numerosPares.push(i);
}

var numerosParesString = numerosPares.join(", ");

console.log(numerosParesString);