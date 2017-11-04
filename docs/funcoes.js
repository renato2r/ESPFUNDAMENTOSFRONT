/*window.onload = function () {
    lerTodasPessoas();
}*/

function salvarPessoa() {
    var nome, idade, id, inputNome, inputidade,span; //VARIAVEIS PARA SALVAR PESSOA
    inputNome = document.getElementById("nome");
    inputidade = document.getElementById("idade");
    nome = inputNome.value;
    idade = parseInt(inputidade.value);
    id = parseInt(localStorage.length);
    
    var pessoa = {id: id+1, nome: nome, idade: idade};        
    
    var pessoa_json = JSON.stringify(pessoa);
    
    localStorage.setItem(id+1, pessoa_json);
    
    var pacienteTr = document.createElement("tr");

    var idTd      = document.createElement("td");    
    var nomeTd    = document.createElement("td");
    var idadeTd   = document.createElement("td");
    
    idTd.textContent    = id+1;
    nomeTd.textContent  = nome;
    idadeTd.textContent = idade;    
    
    pacienteTr.appendChild(idTd);
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(idadeTd);
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);    
    
    span = document.getElementById("mensagem2");
    span.innerHTML = "Pessoa Salva!";
} 
/*
function lerPessoa() {
    var pessoa_json = localStorage.getItem("2");
    var span = document.getElementById("mensagem");
    if (pessoa_json == null){
        span.innerHTML = "Não há pessoa Salva!";    
    }else{
        var pessoa = JSON.parse(pessoa_json);
        span.innerHTML = "O nome é: " + pessoa.nome + " e a idade é: " + pessoa.idade;
    }
} */

function lerTodasPessoas() {
    for (var i = 0; i < (localStorage.length+1); i++){
        var text;
        text = i.toString();        
        var pessoa_json = localStorage.getItem( text );
        if (pessoa_json != null){
            var pessoa = JSON.parse(pessoa_json);
        
            var pacienteTr = document.createElement("tr");

            var idTd    = document.createElement("td");
            var nomeTd  = document.createElement("td");
            var idadeTd = document.createElement("td");

            idTd.textContent    = pessoa.id;
            nomeTd.textContent  = pessoa.nome;
            idadeTd.textContent = pessoa.idade;    

            pacienteTr.appendChild(idTd);
            pacienteTr.appendChild(nomeTd);
            pacienteTr.appendChild(idadeTd);

            var tabela = document.querySelector("#tabela-pacientes");
            tabela.appendChild(pacienteTr);                            
        }
    }
}

/*function apagarPessoa() {
    var nome, inputNome, span;
    inputNome = document.getElementById("nome");
    nome = inputNome.value;
    
    localStorage.setItem("nomeSalvo", nome);

    span = document.getElementById("mensagem");
    span.innerHTML = "Nome Salvo!";
} */