///CAPITULO 4 	- CONDICIONAIS
/// 4.1 QUANTOS PONTOS TEM O TIME DE FUTEBOL
<html>
<head>
<title>Capitulo 4</title>
</head>
<script>

///Funcao para pular linha
function pularLinha(){

	document.write("<hr>");
}

///Funcao para exibir
function show(text){

	document.write(text);
	pularLinha();
}

///Declaracao e inicializacao de variaveis
var vitorias = prompt("Quantos jogos o Gremio venceu?");
var empates = prompt("Quantos jogos o Gremio empatou");
var pontos = (vitorias *3) + empates;

show("O Gremio tem " + pontos + "pontos!");

</script>
<body></body>
</html>
