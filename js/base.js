const nome = "Evilin Wust";
let nome2 = "";
let pessoaDefault = {
    nome: "Evilin Wust",
    Idade: "20",
    Trabalho: "Programadora",
};

let nomes = ["Evilin", "Paula", "Rafael"];
let pessoas = [
    { nome: "Evilin", idade: 19, trabalho: "Programador" },
    { nome: "Paula", idade: 25, trabalho: "UX Designer" },
];

function alterarNome() {
    nome2 = "Paula Silva";
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nime);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    });
}

imprimirPessoas();

console.log("Pessoas:");

adicionarPessoa({
    nome: "Pedro Silva",
    idade: 28,
    trabalho: "Porteiro",
});

console.log("Pessoas:");
