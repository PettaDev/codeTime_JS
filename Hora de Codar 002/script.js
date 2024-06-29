// 01
var nm1 = parseInt(prompt("Informe um número qualquer, que você deseja verificar se é maior ou menor que o próximo número"))
var nm2 = parseInt(prompt("Informe outro número qualquer, para saber se é menor ou maior que o número informado anteriormente"))

if (nm1 > nm2){
   alert("O maior número é o: " + nm1);
}

if (nm2 > nm1) {
   alert("O maior número é o: " + nm2);
}

//02
var valor = parseInt(prompt("Coloque um valor que deseja verificar se ele é : positivo, negativo ou zero"))
         
if (valor > 0) {
   alert("Positivo!")
}

if (valor < 0) {
   alert("Negativo!")
}

if (valor == 0) {
   alert("Ele é o Zero!")
}

//03
var nu1 = parseFloat(prompt("Usuário, digite um número"))
var nu2 = parseFloat(prompt("Usuário, digite outro número"))
var nu3 = parseFloat(prompt("Usuário, digite um último número"))

if (nu1 > nu2 && nu1 > nu3) {
  alert("O valor: " + nu1 + "é o maior de todos!")
} 
else if (nu2 > nu1 && nu2 > nu3) {
  alert("O valor: " + nu2 + "é o maior de todos!")
} 
else {
  alert("O valor: " + nu3 + "é o maior de todos!")
}

//04
let numb1 = parseFloat(prompt("Usuário, digite um número"))
let numb2 = parseFloat(prompt("Usuário, digite outro número"))
let numb3 = parseFloat(prompt("Usuário, digite um último número"))

let Maior, segundoMaior; //Utilizando let como variavel para que ela seja retribuida

if (numb1 > numb2 && numb1 > numb3) {
    Maior = numb1;                                   //Para que serve o ?
    segundoMaior = numb2 > numb3 ? numb2 : numb3;       //Se valor2 for maior que valor3, então segundoMaior receberá valor2.
                                                    //Caso contrário (ou seja, se valor3 for maior ou igual a valor2), segundoMaior receberá valor3.
} 
else if (numb2 > numb1 && numb2 > numb3) {
    Maior = numb2;
    segundoMaior = numb1 > numb3 ? numb1 : numb3; 
} 

else {
    Maior = numb3;
    segundoMaior = numb1 > numb2 ? numb1 : numb2;
}

let somaDosMaior = maior + segundoMaior; // retribuição da let

console.log("A soma dos dois maiores valores é:", somaDosMaiores);

//05

/* média artimética = Soma de todos / Quantidade de todos */

let num01 = parseFloat(prompt("Usuário, digite seu primeiro número: "))
let num02 = parseFloat(prompt("Usuário, digite seu segundo número:"))
let num03 = parseFloat(prompt("Usuário, digite seu terceiro número:"))
let num04 = parseFloat(prompt("Usuário, digite seu quarto número:"))
let num05 = parseFloat(prompt("Usuário, digite seu quinto número:"))
let num06 = parseFloat(prompt("Usuário, digite seu sexto número:"))

let mediaAritmetica, somaDeTodos, quantidadeDeTodos;

somaDeTodos = num01 + num02 + num03 + num04 + num05 + num06;
quantidadeDeTodos = 6;
mediaAritmetica = somaDeTodos / quantidadeDeTodos;

console.log("A média aritmética do seus número é: " + mediaAritmetica);

//06

let num1 = parseFloat(prompt("Usuário, digite seu primeiro número: "))
let num2 = parseFloat(prompt("Usuário, digite seu segundo número:"))
let num3 = parseFloat(prompt("Usuário, digite seu terceiro número:"))
let num4 = parseFloat(prompt("Usuário, digite seu quarto número:"))

let pRIMEIRO, uLTIMO, mAIOR;

pRIMEIRO = num1;
uLTIMO = num4;

mAIOR = Math.max(num1, num2, num3, num4)
alert("O primeiro número é :" + pRIMEIRO + ", o último número :" + uLTIMO + ", o maior número é: " + mAIOR)

//07
let num001 = parseInt(prompt("Usuário, digite seu primeiro número: "))
let num002 = parseInt(prompt("Usuário, digite seu segundo número:"))
let num003 = parseInt(prompt("Usuário, digite seu terceiro número:"))
let num004 = parseInt(prompt("Usuário, digite seu quarto número:"))
let num005 = parseInt(prompt("Usuário, digite seu quinto número:"))
let num006 = parseInt(prompt("Usuário, digite seu sexto número:"))

let somasInferior = 0

if (num001 < 72){
    somasInferior = somasInferior + num001;
}
if (num002 < 72){
    somasInferior = somasInferior + num002;
}
if (num003 < 72){
    somasInferior = somasInferior + num003;
}
if (num004 < 72){
    somasInferior = somasInferior + num004;
}
if (num005 < 72){
    somasInferior = somasInferior + num005;
}
if (num006 < 72){
    somasInferior = somasInferior + num006;
}

alert(`Você informou os seguintes número: ${num001}, ${num002}, ${num003}, ${num004}, ${num005}, ${num006} a soma dos números inferiores á 72 é igual a: ${somasInferior}`)

//08
let num0001 = parseInt(prompt("Usuário, digite seu primeiro número: "))
let num0002 = parseInt(prompt("Usuário, digite seu segundo número:"))
let num0003 = parseInt(prompt("Usuário, digite seu terceiro número:"))
let num0004 = parseInt(prompt("Usuário, digite seu quarto número:"))

let somaMedia = 0, quantidadeMedia, media;

if (isNaN(num0001) || isNaN(num0002) || isNaN(num0003) || isNaN(num0004)) {
alert('Usuário, você digitou uma letra no lugar de uma nota!')
}

// calcular a média de quatro número, somente se forem 0 < x < 10

if (num0001 > 0 && num0001 < 10){
    somaMedia += num0001
}
if (num0002 > 0 && num0002 < 10){
    somaMedia += num0001
}
if (num0003 > 0 && num0003 < 10){
    somaMedia += num0001
}
if (num0004 > 0 && num0004 < 10){
    somaMedia += num0001
}

quantidadeMedia = 4;
media = somaMedia / quantidadeMedia;


// Se a média for maior que cinco, o usuário receberá "Você passou no teste" else "tente novamente".

if (media > 5){
    alert("Você passou no teste, sua média foi: " + media)
}

else {
    alert("Você não passou no teste, sua média foi: " + media)
}

//09
let userAno = prompt("Usuário, digite o ano em que você nasceu")

if (isNaN(parseInt(userAno)) || userAno.length !== 4) {
  alert('Usuário, você não digitou um ano válido!')
}

else {
  userAno = parseInt(userAno)

  const nowDate = new Date().getFullYear()

  const calculateAge = nowDate - userAno

  if (calculateAge >= 18) {
    alert('Usuário, a partir desse ano, você é obrigado a votar!')
  }

  else{
    alert('Usuário, você ainda não pode votar!')
  }
}

//10
// Usuário -> colocar altura e sexo
var altura = parseFloat(prompt("Por favor, informe a sua altura em metros:"));
var sexo = parseInt(prompt("Por favor, informe o seu sexo (1 para feminino, 2 para masculino):"));

// Verificando se a pessoa é F ou M, e calculando o peso ideal de acordo com a fórmula:
var pesoIdeal; 
if (sexo === 1) { // Feminino - Igualdade Estrita -> compara dois valores para a igualdade
    pesoIdeal = (62.1 * altura) - 44.7;
} 
else if (sexo === 2) { // Masculino - Igualdade Estrita -> compara dois valores para a igualdade
    pesoIdeal = (72.7 * altura) - 58;
} 
else {
    console.log("Opção inválida para sexo.");
}
// Peso ideal:
if (pesoIdeal) {
    console.log("O peso ideal para uma pessoa com altura de " + altura.toFixed(2) + " metros é de " + pesoIdeal.toFixed(2) + " kg."); // tofixed(2) -> duas casas decimais se der muito grande.
}

//11
const num00001 = parseInt(prompt("Usuário, digite o primeiro valor"))
const num00002 = parseInt(prompt("Usuário, digite o segundo valor"))
if (isNaN(num00001) || isNaN(num00002)) {
  alert('Usuário, você digitou uma letra ao invés de um número')
}
else {
    const calculator = prompt("Escolha a operação que queira fazer: (1 - Adição; 2 - Subtração; 3 - Divisão; 4 - Multiplicação)")

    switch (calculator) {
        case "1":
            alert(`${num00001} + ${num00002} = ${num00001 + num00002}`) // $(num00001) - para concatenação
            break;                                      //break -  interromper a execução de um comando de repetição
        case "2":
            alert(`${num00001} - ${num00002} = ${num00001 - num00002}`)
            break;
        case "3":
            alert(`${num00001} ÷ ${num00002} = ${num00001 / num00002}`)
            break;
            case "4":
                alert(`${num00001} x ${num00002} = ${num00001 * num00002}`)
                break;
        default:                                        // permite que parâmetros formais sejam inicializados com valores padrão se nenhum valor ou valor undefined é passado.8
            alert("Selecione uma operação válida!")
            break;
    }
}