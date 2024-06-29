//01

/* Escreva um programa em Javascript e crie uma variável chamada 
"nome_do_carro" e atribua-a um valor "Fusca". Exiba-a ao usuário. */


// Criando a variável "nome_do_carro" e atribuindo o valor "Fusca"
var nome_do_carro = "Fusca";

// Exibindo a variável ao usuário
console.log("O nome do carro é:", nome_do_carro);

//02

/* Escreva um programa em Javascript e crie uma variável chamada 
"nome_do_carro" e atribua-a um valor "Fusca". Exiba-a ao usuário. */


// Solicita ao usuário que informe o nome
var nomeDoUsuario = prompt("Por favor, informe o seu nome:");
// Exibe a mensagem de saudação com o nome do usuário
alert("Olá, " + nomeDoUsuario + "!");

//03

/* Escreva um programa em Javascript em que o usuário informe o seu
nome e em seguida o programa perguntará a idade do usuário.
Agora o programa deve exibir a mensagem:
"Olá, [NomeDoUsuario], sua idade é [idade]". */


// Solicita ao usuário que informe o nome
var nomeDoUsuario = prompt("Por favor, informe o seu nome:");
// Solicita ao usuário que informe sua idade
var idadeDoUsuario = prompt("Olá, " + nomeDoUsuario +"! Por favor, informe a sua idade:");
// Exibe a mensagem de saudação com o nome do usuário
alert("Olá, " + nomeDoUsuario + "Sua idade é:" + idadeDoUsuario + "anos.");

//04

/* Considerando a figura "Áreas de Figuras Planas", escreva
um programa para cada forma que calcule e exiba em tela cada
uma de suas respectivas áreas.
O usuário irá informar os valores de cada variável. */

// Área do quadrado
var ladoQuadrado = parseFloat(prompt("Por favor, informe o lado do quadrado:"));
var areaQuadrado = ladoQuadrado * ladoQuadrado;
console.log("A área do quadrado é: " + areaQuadrado);



// Área do retângulo
var baseRetangulo = parseFloat(prompt("Por favor, informe a base do retângulo"));
var alturaRetangulo = parseFloat(prompt("Por favor, informe a altura do retângulo"));
var areaRetangulo = baseRetangulo * alturaRetangulo;
console.log("A área do retângulo é: " + areaRetangulo);



// Área do paralelogramo
var baseParalelogramo = parseFloat(prompt("Por favor, informe a base do paralelogramo"));
var alturaParalelogramo = parseFloat(prompt("Por favor, informe a altura do paralelogramo"));
var areaParalelogramo = baseParalelogramo * alturaParalelogramo;
console.log("A área do retângulo é: " + areaRetangulo);



// Área do losango
var diagonalMaior = parseFloat(prompt("Por favor, informe a diagonal MAIOR do losango"));
var diagonalMenor = parseFloat(prompt("Por favor, informe a diagonal MENOR do losango"));
var areaLosango = (diagonalMaior * diagonalMenor) / 2;
console.log("A área do losango é: " + areaLosango);



// Área do Trapézio
var baseMaiorTrapezio = parseFloat(prompt("Por favor, informe a base MAIOR do trapézio"));
var baseMenorTrapezio = parseFloat(prompt("Por favor, informe a base MENOR do trapézio"));
var alturaTrapezio = parseFloat(prompt("Por favor, informe a altura do trapézio"));
var areaTrapezio = (baseMaiorTrapezio + baseMenorTrapezio) / 2;
console.log("A área do trapézio é: " + areaTrapezio);



// Área do Triângulo
var baseTriangulo = parseFloat(prompt("Por favor, informe a base do triângulo:"));
var alturaTriangulo = parseFloat(prompt("Agora, informe a altura do triângulo:"));
var areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("A área do triângulo é: " + areaTriangulo);



// Área do Círculo
var raioCirculo = parseFloat(prompt("Por favor, informe o raio do círculo:"));
var areaCirculo = Math.PI * raioCirculo * raioCirculo;
console.log("A área do círculo é: " + areaCirculo);