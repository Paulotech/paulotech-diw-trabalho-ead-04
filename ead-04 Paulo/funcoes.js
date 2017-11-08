//exercicio 00
var nome;
function escreverOla(nome){
	console.log("Olá,"+nome+"!");
}
escreverOla("Raphael");
escreverOla("Bruno");
escreverOla("Marcelle");
// exercicio 01
var a, b;
function media(a,b){
	console.log((a + b) / 2);
}
//exercicio 02
var num1, num2;
function escreverNumerosAte_for(num1, num2) {	
	for (var i = num1; num1 < num2 ? (i <= num2) : (i >= num2); num1 < num2 ? i++ : i --) {		
		console.log(i);
	}	
}

//exercicio 04
var x, y, z;
z = 0;
function divisiveis(x,y) {

	while (z < y){
		z = z + 1;
		if (z % x == 0) {
			console.log(z);
		}
	}
}
//exercicio 05
var vetor =  [6542, 1235, 3215, 6251, 3215, 3225, 4583, 2151, 2356, 1325, 9965, 1230, 4458, 6352];
function maiorMenor(vetor) {
	var numMaior = Math.max.apply(null,vetor);
	var numMenor = Math.min.apply(null,vetor);

	console.log("Numero Maior: " + numMaior);
	console.log("Numero Menor: " + numMenor);
		
}