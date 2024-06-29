/* 1- Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado
for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser
aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do 
primeiro valor lido pelo segundo valor. */
while (true) {
    var valor1 = parseFloat(prompt("Digite o primeiro valor: "));
    var valor2 = parseFloat(prompt("Digite o segundo valor (maior que zero): "));
    if (valor2 <= 0 || isNaN(valor2)) {
        MostrarErro("O segundo valor deve ser maior que zero. Tente novamente.");
    } else {
        break;
    }
}
        var resultado = valor1 / valor2;
        Mostrar(`O resultado da divisão de ${valor1} pelo ${valor2} é ${resultado}`)


/* 2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0.
Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO". */

        var final = 0;
        var i = 30;

        while (i > final) {
            var texto = "Está chegando lá..." + i + "<br/>"
            console.log(texto)
            document.write(texto)
            i--;

        }
        document.write("EXPLOSÃO!!!")

/* 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 */
        let i = 10;

        while(i >= 1) {
            console.log(i);
            document.write(`${i} <br>`);
            i--;
        }

/* 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números
inteiros entre 15 (inclusive) e 100 (inclusive). */
    let mediaInt = 15;
    let soma = 0; // Inicializa a soma dos números inteiros

    while (mediaInt >= 15 && mediaInt <= 100) {
        soma += mediaInt;
        mediaInt++;
    }
    Mostrar((soma / 85).toFixed(2)); //toFixed para mostrar apenas dois valores depois da vírgula

/*5 - Faça   algoritmo que calcule e escreva a média aritmética dos dois números inteiros
informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre
será menor que o segundo. */

    let num1 = parseInt(prompt("Informe o primeiro número inteiro: "));
    let num2 = parseInt(prompt("Informe o segundo número inteiro: "));

    let media = (num1 + num2) / 2;

    let somaInteiros = 0; // Inicializa a soma dos números inteiros entre os dois números informados.
    let quantidadeNumeros = Math.abs(num2 - num1) + 1; // Conta quantos números inteiros existem entre os dois números (incluindo eles mesmos).
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) { // Calcula a soma de todos os números inteiros entre os dois números informados.
        somaInteiros += i;
    }
    let mediaInteiros = somaInteiros / quantidadeNumeros;
    Mostrar(`A média aritmética entre ${num1} e ${num2}, incluindo todos os números inteiros entre eles, é: ${mediaInteiros}`);

/*6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final.
Considere que a nota de aprovação é 9,5. " eLogo após escrever a mensagem "Calcular a média de
outro aluno Sim/Não? solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente,
caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados. */

    let alunosAprovados = 0;
    let calcularOutroAluno = true;

    while (calcularOutroAluno) {
        let nota1 = parseFloat(prompt("Informe a primeira nota do aluno: "));
        let nota2 = parseFloat(prompt("Informe a segunda nota do aluno: "));

        let media = (nota1 + nota2) / 2;

        Mostrar(`A média do aluno é: ${media}`);

        if (media >= 9.5) {
            alunosAprovados++;
    }

        let resposta = prompt("Calcular a média de outro aluno? (S/N)");

        if (resposta.toUpperCase() !== "S") {
            calcularOutroAluno = false;
    }
}
Mostrar(`Quantidade de alunos aprovados: ${alunosAprovados}`);

/* 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples)
desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido,
deve ser solicitado um novo valor ao usuário. */

    let notas = []; // array vazio
    let somaS = 0;
    let i = 0;

    while (i < 6) {
        let nota;
        do { // O do-while é um tipo de loop que executa um bloco de código uma vez e depois repete a execução do bloco enquanto uma condição específica é verdadeira.
            nota = parseFloat(prompt(`Informe a ${i + 1}ª nota (entre 0 e 10):`));
            if (nota < 0 || nota > 10) {
                MostrarErro("Nota inválida. Informe um valor entre 0 e 10.");
            }
        } while (nota < 0 || nota > 10);

        notas.push(nota); //O método push() é usado em arrays em JS para adicionar novos elementos ao final do array.
        somaS += nota;
        i++;
    }

    let mediaS = somaS / 6;
    Mostrar(`A média do aluno é: ${mediaS.toFixed(2)}`);

/* 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive).
Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário */
    let N = parseInt(prompt("Informe um valor inteiro maior que zero: "));
    if (N <= 0 || isNaN(N)) {
        MostrarErro("O segundo valor deve ser maior que zero. Tente novamente.");
    }

    for (let i = 1; i <= N; i++) { // for (inicialização; condição; expressão final) -> usada para repetir um bloco de código várias vezes.
        Mostrar(i);
    }

// 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.
    let numerosInt = '';
    for(let i = 1; i <= 10; i++){
        numerosInt += (i + 100) + " ";
    }
    Mostrar(numerosInt);

// 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

    let tabuadaN = parseInt(prompt("Informe até que tabuada você deseja exibir: "))
    
    for (let i = 1; i <= N; i++) {
        Mostrar(`Tabuada de ${i}:`);
        for (let j = 1; j <= 10; j++) {
            Mostrar(`${i} x ${j} = ${i * j}`);
        }
        Mostrar(); // Adiciona uma linha em branco entre as tabuadas
    }

/* 11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão
    entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo. */

    let dentroIntervalo = 0;
    let foraIntervalo = 0;

    for (let i = 0; i < 10; i++) {
        let valor = parseInt(prompt(`Informe o ${i + 1}º valor:`));
        if (valor >= 24 && valor <= 42) {
            dentroIntervalo++;
        } else {
            foraIntervalo++;
        }
    }
Mostrar(`Valores dentro do intervalo: ${dentroIntervalo}`);
Mostrar(`Valores fora do intervalo: ${foraIntervalo}`);



        function Mostrar(conteudo) {
            alert(conteudo);
            document.write(`${conteudo} <br><br>`);
        }
        
        function MostrarErro(conteudo) {
            alert(conteudo);
        }