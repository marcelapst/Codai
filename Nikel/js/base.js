const nome = "Túlio";
let nome2 = "";
let pessoaDefault = {
  nome: "Túlio",
  idade: "24",
  trabalho: "Dentista",
};

let nomes = ["Túlio", "Nicole", "Vítor"];
let pessoas = [
  {
    nome: "Túlio",
    idade: "24",
    trabalho: "Dentista",
  },
  {
    nome: "Nicole",
    idade: "30",
    trabalho: "Professora",
  },
  {
    nome: "Vítor",
    idade: "26",
    trabalho: "Médico",
  },
];

function alterarnome() {
  nome2 = "Henrique";
  console.log("Valor alterado:");
  console.log(nome2);
}

function recebeEalteranome(novoNome) {
  nome2 = novoNome;
  console.log("Valor alterado recebendo um nome:");
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
  console.log("---IMPRIMIR PESSOAS---");
  pessoas.forEach((item) => {
    console.log("Nome");
    console.log(item.nome);

    console.log("Idade:");
    console.log(item.idade);

    console.log("Trabalho:");
    console.log(item.trabalho);
  });
}

imprimirPessoas();

adicionarPessoa({
  nome: "Juca",
  idade: "18",
  trabalho: "Autonomo",
});

imprimirPessoas();
