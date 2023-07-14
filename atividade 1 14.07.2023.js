var cidades = ["recife","caruaru", "jaboatão","petrolina","olinda","triunfo","gravatá"];
cidades.sort();
console.log(cidades);
cidades.splice(8,1,"Serra talhada")
console.log(cidades+" :cidade adicionada ");
cidades.splice(9,1,"buique");
console.log(cidades+ ":cidade adicionada ");

var numero = [1,4,8,6,9,2,6,7,3,0,5];
var index = numero.indexOf(9);
console.log(index);