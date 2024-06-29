    /* 1- Crie um programa onde o usuário possa cadastrar estudantes sem limites, e,
    em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade
    de estudantes cadastrados e a lista com cada um deles.  */
    

    /*
    Anotações:
      1- Criar uma função para cadastra os estudantes com o Prompt para o usuário digitar os nomes e return para retornar o nome dos estudantes
      2- Criar outra função principal onde vai estar o array que vai armazernar os nomes
      3- Colocar um laço de repetição para cadastrar sem limite dentro da função principal
      4- Colocar dentro de while - laço de repetição - a funcão para cadastrar os estudantes
      5- Colocar um if -> se usuário digitar pare -> parar o laço de repetição utilizando .toUpperCase
      6- Adicionar o nome do estudante fornecido pelo usuário ao final do array estudantes utilizando .push
      7- Exibir no console a quatidade utilizando .lenght
      8- Exibir a lista com cada um deles utilizando .forEach
      9- (bonus) - exibir os nomes com um hífen antes.
    */

    /*
    .toUpperCase() -> Converte todos os caracteres de uma string em letras maiúsculas.
    .push() -> Adicionar um novo elemento ao final do array. 
    .length() -> Ela retorna o número de elementos em um array ou o número de caracteres em uma string.
    .forEach() -> Permite iterar sobre cada elemento de um array e executar uma função de retorno de chamada para cada um deles.
    */

    //////////////////////////////////////////////

    function cadastrarEstudante() { // 1-
        var nomeDoEstudante = prompt("Usuário digite o nome do Estudante: ");
        return nomeDoEstudante // 1- 
    }

    function principal() { // 2-
        var estudante = []; // array vazio

        while(true) { // 3-
        var nome = cadastrarEstudante(); // 4-

        if (nome.toUpperCase() === "PARE") { // 5-
            break;
        } 
        estudante.push(nome); // 6-
    }
    
    console.log("Quantidade de estudantes cadastrados: ", estudante.length); // 7-

    estudante.forEach(function(estudante) { // 8-
        console.log("-", estudante); // 9-
    });
}

principal()


//


/* 2- Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter",
"Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. 
Verifique se o planeta que o usuário informou está na array e informe ao usuário.*/

/* 
Anotações:
        1- Criar 6 array com os nomes de planetas - var a = []
        2- Pedir para o usuário digitar um nome de um planeta - prompt
        3- Verificar se o planeta está na arrey -> .includes()
        4- Colocar no console se os valores está na lista ou não - console.log
*/

/*
.includes() -> para verificar se o valor fornecido pelo usuário está presente na array
*/
//////////////////////////////////////////////

var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter"];// 1-

var checarPlanetas = prompt("Usuário digite o planeta que você quer checar: "); // 2-

var encontrados = planetas.includes(checarPlanetas);

if (encontrados) { // SE o planeta fornecido pelo usuário estiver dentro da array planetas;
    console.log("Usuário seu planeta está em nossa lista!");
} else {
    console.log("Usuário seu planeta não está em nossa lista!");
}


//


/* 
03 - Vamos criar uma lista de compras. 
Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas. X
Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". X
Peça novamente para o usuário digitar o nome de uma fruta para ser removida. X
Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". X 
Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada". X
*/

/* 
Anotações:
       
/*
.push -> Adicionando elementos a um array
.pop -> Removendo elementos de um array
.unshift -> Adicionando elementos no início de um array
.shift -> Removendo elementos do início de um array

        // Encontrando a posição de um elemento
        console.log("Posição do elemento: " + frutas.indexOf("manga"));
        console.log("O nono elemento é o: " + frutas[8]);

        // Removendo elementos de uma posição específica
        frutas.splice(1, 1);
        console.log("Resultado do Array após a remoção do item na posição 1: " + frutas);

        // slice
        // O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições inicial e final. 
        var frutas2 = frutas.slice(1, 3);
        console.log("Resultado do Array após o slice: " + frutas2); 

        // Verificando se um elemento existe no array
        console.log("Existe a fruta banana no array? " + frutas.includes("abacaxi"));

*/
// .length() -> Ela retorna o número de elementos em um array ou o número de caracteres em uma string.
// .join() -> Junta os valores de um array em uma string de acordo com o padrão passado.

//////////////////////////////////////////////

let listaFrutas = ["pera","maça","abacate"];
let sacola = [];

while (sacola.length < 3) {

    alert("A lista de frutas é: " + listaFrutas.join(", "));
    let frutaUsuario = prompt("Insira uma fruta para colocar na sacola(remover): (Uma de cada vez)");
    frutaUsuario = frutaUsuario.toLowerCase();

    if (listaFrutas.includes(frutaUsuario)){
        alert("Fruta foi retirada da lista");
        sacola.push(listaFrutas[listaFrutas.indexOf(frutaUsuario)]) 
        delete listaFrutas[listaFrutas.indexOf(frutaUsuario)]; // indexOf vai pegar a posição da frutaUsuario e retorna a fruta
        continue;
        
    } else {
        alert("Fruta indisponível no nosso mercado");
        continue;
    }
}

alert("Lista de compras finalizada");