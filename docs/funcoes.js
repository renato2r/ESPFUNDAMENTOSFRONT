function salvarIdentificador() {
    var DesignacaoDoIndividuo, AreaDoIdentificador, EmissorDoIndentificador, DtEmissaoDocumento, TipoIdentificador, NomeCartorio, Livro, Folha, Termo, Serie, Estado, SessaoEleitoral, Zona, id, span; //VARIAVEIS PARA SALVAR PESSOA
    var inputDesignacaoDoIndividuo, inputAreaDoIdentificador, inputEmissorDoIndentificador, inputDtEmissaoDocumento, inputTipoIdentificador, inputNomeCartorio, inputLivro, inputFolha, inputTermo, inputSerie, inputEstado, inputSessaoEleitoral, inputZona;
    
    inputDesignacaoDoIndividuo   = document.getElementById("txtDesignacaoDoIndividuo");
    inputAreaDoIdentificador     = document.getElementById("txtAreaDoIdentificador");
    inputEmissorDoIndentificador = document.getElementById("txtEmissorDoIndentificador");
    inputDtEmissaoDocumento      = document.getElementById("txtDtEmissaoDocumento");
    inputTipoIdentificador       = document.getElementById("txtTipoIdentificador");
    
    inputNomeCartorio            = document.getElementById("txtNomeCartorio");
    inputLivro                   = document.getElementById("txtLivro");
    inputFolha                   = document.getElementById("txtFolha");
    inputTermo                   = document.getElementById("txtTermo");
    
    inputSerie                   = document.getElementById("txtSerie");
    inputEstado                   = document.getElementById("txtEstado");    
        
    inputSessaoEleitoral         = document.getElementById("txtSessaoEleitoral");
    inputZona                    = document.getElementById("txtZona");
    
    DesignacaoDoIndividuo   = inputDesignacaoDoIndividuo.value;
    AreaDoIdentificador     = inputAreaDoIdentificador.value;
    EmissorDoIndentificador = inputEmissorDoIndentificador.value;
    DtEmissaoDocumento      = inputDtEmissaoDocumento.value;
    TipoIdentificador       = inputTipoIdentificador.value;
    NomeCartorio            = inputNomeCartorio.value;
    Livro                   = inputLivro.value;
    Folha                   = inputFolha.value;
    Termo                   = inputTermo.value;
    Serie                   = inputSerie.value;
    Estado                  = inputEstado.value;
    SessaoEleitoral         = inputSessaoEleitoral.value;
    Zona                    = inputZona.value;
    
    id = parseInt(localStorage.length);
    
    var pessoa = criarPessoa((parseInt(localStorage.length) +1),
                             DesignacaoDoIndividuo,
                             AreaDoIdentificador,
                             EmissorDoIndentificador,                  
                             DtEmissaoDocumento,
                             TipoIdentificador,
                             NomeCartorio,
                             Livro,
                             Folha,
                             Termo,
                             Serie,
                             Estado,
                             SessaoEleitoral,
                             Zona,
                             '',
                             '',
                             '',
                             '',
                             '');
    
    var pessoa_json = JSON.stringify(pessoa);
    
    localStorage.setItem(id+1, pessoa_json);    
}


function salvarNome() {
    var NomeCompleto, Sobrenome, Titulo, Sufixo, Uso, id, span; //VARIAVEIS PARA SALVAR PESSOA
    var inputNomeCompleto, inputSobrenome, inputTitulo, inputSufixo, inputUso;
    
    inputNomeCompleto  = document.getElementById("txtNomeCompleto");
    inputSobrenome     = document.getElementById("txtSobrenome");
    inputTitulo        = document.getElementById("txtTitulo");
    inputSufixo        = document.getElementById("txtSufixo");
    inputUso           = document.getElementById("txtUso");
    
    NomeCompleto       = inputNomeCompleto.value;
    Sobrenome          = inputSobrenome.value;
    Titulo             = inputTitulo.value;
    Sufixo             = inputSufixo.value;
    Uso                = inputUso.value;
    
    var text;
    var i = localStorage.length;
    text = i.toString();
    
    console.log(text);
    var pessoa_json = localStorage.getItem( text );    
    var pessoa = JSON.parse(pessoa_json);            
    console.log(pessoa.id);
    var pessoa = criarPessoa(pessoa.id,
                             pessoa.designacaoDoIndividuo,
                             pessoa.areaDoIdentificador,
                             pessoa.emissorDoIndentificador,                  
                             pessoa.dtEmissaoDocumento,
                             pessoa.tipoIdentificador,
                             pessoa.nomeCartorio,
                             pessoa.livro,
                             pessoa.folha,
                             pessoa.termo,
                             pessoa.serie,
                             pessoa.estado,
                             pessoa.sessaoEleitoral,
                             pessoa.zona,
                             NomeCompleto,
                             Sobrenome,
                             Titulo,
                             Sufixo,
                             Uso);
    
    var pessoa_json = JSON.stringify(pessoa);
    localStorage.removeItem(pessoa.id);
    localStorage.setItem(pessoa.id, pessoa_json);
}

function criarPessoa(parmId,
                     parmDesignacaoDoIndividuo,
                     parmAreaDoIdentificador,
                     parmEmissorDoIndentificador,
                     parmDtEmissaoDocumento,
                     parmTipoIdentificador,
                     parmNomeCartorio,
                     parmLivro,
                     parmFolha,
                     parmTermo,
                     parmSerie,
                     parmEstado,
                     parmSessaoEleitoral,
                     parmZona,
                     parmNomeCompleto,
                     parmSobrenome,
                     parmTitulo,
                     parmSufixo,
                     parmUso) {
        return{
            id : parmId,
            designacaoDoIndividuo : parmDesignacaoDoIndividuo,
            areaDoIdentificador: parmAreaDoIdentificador,
            emissorDoIndentificador: parmEmissorDoIndentificador,                  
            dtEmissaoDocumento: parmDtEmissaoDocumento,
            tipoIdentificador: parmTipoIdentificador,
            nomeCartorio: parmNomeCartorio,
            livro: parmLivro,
            folha: parmFolha,
            termo: parmTermo,
            serie: parmSerie,
            estado: parmEstado,
            sessaoEleitoral: parmSessaoEleitoral,
            zona: parmZona,                        
            nomeCompleto: parmNomeCompleto,
            sobrenome: parmSobrenome,
            titulo: parmTitulo,
            sufixo: parmSufixo,
            uso: parmUso
        }
}

function lerTodasPessoas() {
    for (var i = 0; i < (localStorage.length+1); i++){
        var text;
        text = i.toString();        
        console.log(text);
        var pessoa_json = localStorage.getItem( text );
        console.log(localStorage.getItem( text ));
        if (pessoa_json != null){
            var pessoa = JSON.parse(pessoa_json);
        
            var pacienteTr = document.createElement("tr");

            var idTd    = document.createElement("td");
            var nomeTd  = document.createElement("td");
            var idadeTd = document.createElement("td");

            idTd.textContent    = pessoa.id;
            nomeTd.textContent  = pessoa.nomeCompleto;
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
} 

function salvarIdentificador() {
    var DesignacaoDoIndividuo, AreaDoIdentificador, EmissorDoIndentificador, DtEmissaoDocumento, TipoIdentificador, NomeCartorio, Livro, Folha, Termo, Serie, Estado, SessaoEleitoral, Zona, id, span; //VARIAVEIS PARA SALVAR PESSOA
    var inputDesignacaoDoIndividuo, inputAreaDoIdentificador, inputEmissorDoIndentificador, inputDtEmissaoDocumento, inputTipoIdentificador, inputNomeCartorio, inputLivro, inputFolha, inputTermo, inputSerie, inputEstado, inputSessaoEleitoral, inputZona;
    
    inputDesignacaoDoIndividuo   = document.getElementById("txtDesignacaoDoIndividuo");
    inputAreaDoIdentificador     = document.getElementById("txtAreaDoIdentificador");
    inputEmissorDoIndentificador = document.getElementById("txtEmissorDoIndentificador");
    inputDtEmissaoDocumento      = document.getElementById("txtDtEmissaoDocumento");
    inputTipoIdentificador       = document.getElementById("txtTipoIdentificador");
    
    inputNomeCartorio            = document.getElementById("txtNomeCartorio");
    inputLivro                   = document.getElementById("txtLivro");
    inputFolha                   = document.getElementById("txtFolha");
    inputTermo                   = document.getElementById("txtTermo");
    
    inputSerie                   = document.getElementById("txtSerie");
    inputEstado                   = document.getElementById("txtEstado");    
        
    inputSessaoEleitoral         = document.getElementById("txtSessaoEleitoral");
    inputZona                    = document.getElementById("txtZona");
    
    DesignacaoDoIndividuo   = inputDesignacaoDoIndividuo.value;
    AreaDoIdentificador     = inputAreaDoIdentificador.value;
    EmissorDoIndentificador = inputEmissorDoIndentificador.value;
    DtEmissaoDocumento      = inputDtEmissaoDocumento.value;
    TipoIdentificador       = inputTipoIdentificador.value;
    NomeCartorio            = inputNomeCartorio.value;
    Livro                   = inputLivro.value;
    Folha                   = inputFolha.value;
    Termo                   = inputTermo.value;
    Serie                   = inputSerie.value;
    Estado                  = inputEstado.value;
    SessaoEleitoral         = inputSessaoEleitoral.value;
    Zona                    = inputZona.value;
    
    id = parseInt(localStorage.length);
    
    var pessoa = {id: id+1,
                  designacaoDoIndividuo: DesignacaoDoIndividuo,
                  areaDoIdentificador: AreaDoIdentificador,
                  emissorDoIndentificador: EmissorDoIndentificador,                  
                  dtEmissaoDocumento: DtEmissaoDocumento,
                  tipoIdentificador: TipoIdentificador,
                  nomeCartorio: NomeCartorio,
                  livro: Livro,
                  folha: Folha,
                  termo: Termo,
                  serie: Serie,
                  estado: Estado,
                  sessaoEleitoral: SessaoEleitoral,
                  zona: Zona};
    
    var pessoa_json = JSON.stringify(pessoa);
    
    localStorage.setItem(id+1, pessoa_json);    
}


*/

