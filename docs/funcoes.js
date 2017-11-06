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
                             Zona);
    
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
    var pessoa_json = localStorage.getItem( text );    
    var pessoa = JSON.parse(pessoa_json);            
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

function salvarDadosDemograficos() {
    var DtNascimento, DiaNasc, MesNasc, AnoNasc, IndicadorSegDtNascimento, DtObito, diaObit, mesObit, anoObit, Fonte, Sexo, NomeMae, NomePai, SitFamiliar, RacaCor, Estados, Cidades, PaisNasc, DtEntradaPais, Pluralidade, OrdemNascimento, ComentarioIdent, id, span; //VARIAVEIS PARA SALVAR PESSOA
    var inputDtNascimento, inputDiaNasc, inputMesNasc, inputAnoNasc, inputIndicadorSegDtNascimento, inputDtObito, inputdiaObit, inputmesObit, inputanoObit, inputFonte, inputSexo, inputNomeMae, inputNomePai, inputSitFamiliar, inputRacaCor, inputEstados, inputCidades, inputPaisNasc, inputDtEntradaPais, inputPluralidade, inputOrdemNascimento, inputComentarioIdent;
    
    inputDtNascimento  = document.getElementById("txtDtNascimento");
    
    inputDiaNasc  = document.getElementsByName("diaNasc");
    if (inputDiaNasc.item(0).checked){
        DiaNasc = 'A';
    }else if (inputDiaNasc.item(1).checked){
        DiaNasc = 'E';
    }else if (inputDiaNasc.item(2).checked){
        DiaNasc = 'U';
    }
    
    inputMesNasc  = document.getElementsByName("mesNasc");
    if (inputMesNasc.item(0).checked){
        MesNasc = 'A';
    }else if (inputMesNasc.item(1).checked){
        MesNasc = 'E';
    }else if (inputMesNasc.item(2).checked){
        MesNasc = 'U';
    }
    
    inputAnoNasc  = document.getElementsByName("anoNasc");
    if (inputAnoNasc.item(0).checked){
        AnoNasc = 'A';
    }else if (inputAnoNasc.item(1).checked){
        AnoNasc = 'E';
    }else if (inputAnoNasc.item(2).checked){
        AnoNasc = 'U';
    }
    
    inputIndicadorSegDtNascimento = document.getElementById("txtindicadorSegDtNascimento");
    inputDtObito = document.getElementById("txtDtObito");    
    
    inputdiaObit  = document.getElementsByName("diaObit");
    if (inputdiaObit.item(0).checked){
        diaObit = 'A';
    }else if (inputdiaObit.item(1).checked){
        diaObit = 'E';
    }else if (inputdiaObit.item(2).checked){
        diaObit = 'U';
    }
    
    inputmesObit  = document.getElementsByName("mesObit");
    if (inputmesObit.item(0).checked){
        mesObit = 'A';
    }else if (inputmesObit.item(1).checked){
        mesObit = 'E';
    }else if (inputmesObit.item(2).checked){
        mesObit = 'U';
    }
    
    inputanoObit  = document.getElementsByName("anoObit");
    if (inputanoObit.item(0).checked){
        anoObit = 'A';
    }else if (inputanoObit.item(1).checked){
        anoObit = 'E';
    }else if (inputanoObit.item(2).checked){
        anoObit = 'U';
    }
    
    inputFonte  = document.getElementsByName("Fonte");
    if (inputanoObit.item(0).checked){
        Fonte = '1';
    }else if (inputanoObit.item(1).checked){
        Fonte = '2';
    }else if (inputanoObit.item(2).checked){
        Fonte = '3';
    }else if (inputanoObit.item(3).checked){
        Fonte = '4';
    }else if (inputanoObit.item(4).checked){
        Fonte = '9';
    }
    
    inputSexo  = document.getElementsByName("Sexo");
    if (inputSexo.item(0).checked){
        Sexo = 'M';
    }else if (inputSexo.item(1).checked){
        Sexo = 'F';
    }else if (inputSexo.item(2).checked){
        Sexo = 'I';
    }else if (inputSexo.item(3).checked){
        Sexo = 'U';
    }
    
    inputNomeMae         = document.getElementById("txtNomeMae");
    inputNomePai         = document.getElementById("txtNomePai");
    inputSitFamiliar     = document.getElementById("txtSitFamiliar");
    inputRacaCor         = document.getElementById("txtRacaCor");
    inputEstados         = document.getElementById("Estados");
    inputCidades         = document.getElementById("Cidades");
    inputPaisNasc        = document.getElementById("txtPaisNasc");
    inputDtEntradaPais   = document.getElementById("txtDtEntradaPais");
    inputPluralidade     = document.getElementById("txtPluralidade");
    inputOrdemNascimento = document.getElementById("txtOrdemNascimento");
    inputComentarioIdent = document.getElementById("txtComentarioIdent");
    
    DtNascimento             = inputDtNascimento.value;
    IndicadorSegDtNascimento = inputIndicadorSegDtNascimento.value;
    DtObito = inputDtObito.value;
    NomeMae         = inputNomeMae.value;
    NomePai         = inputNomePai.value;
    SitFamiliar     = inputSitFamiliar.value;
    RacaCor         = inputRacaCor.value;
    Estados         = inputEstados.value;
    Cidades         = inputCidades.value;
    PaisNasc        = inputPaisNasc.value;
    DtEntradaPais   = inputDtEntradaPais.value;
    Pluralidade     = inputPluralidade.value;
    OrdemNascimento = inputOrdemNascimento.value;
    ComentarioIdent = inputComentarioIdent.value;
    
    var text;
    var i = localStorage.length;
    text = i.toString();
    var pessoa_json = localStorage.getItem( text );    
    var pessoa = JSON.parse(pessoa_json);            
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
                             pessoa.NomeCompleto,
                             pessoa.Sobrenome,
                             pessoa.Titulo,
                             pessoa.Sufixo,
                             pessoa.Uso,
                             DtNascimento, 
                             DiaNasc, 
                             MesNasc, 
                             AnoNasc, 
                             IndicadorSegDtNascimento, 
                             DtObito, 
                             diaObit, 
                             mesObit, 
                             anoObit, 
                             Fonte, 
                             Sexo, 
                             NomeMae, 
                             NomePai, 
                             SitFamiliar, 
                             RacaCor, 
                             Estados, 
                             Cidades, 
                             PaisNasc, 
                             DtEntradaPais, 
                             Pluralidade, 
                             OrdemNascimento, 
                             ComentarioIdent);
    
    var pessoa_json = JSON.stringify(pessoa);
    localStorage.removeItem(pessoa.id);
    localStorage.setItem(pessoa.id, pessoa_json);    
    
}

function salvarEndereco() {
    var TipoEndereco, AbrevTipoSub, NumSub, NomeEdificio, NumAndar, TipoAndar, Complemento, NumProp, NumSessaoLote, NomeLogradouro, Bairro, CodTipoLog, CodSufixoLog, Estados, Cidades, PaisNasc, CodigoPostal, id, span; //VARIAVEIS PARA SALVAR PESSOA
    var inputTipoEndereco, inputAbrevTipoSub, inputNumSub, inputNomeEdificio, inputNumAndar, inputTipoAndar, inputComplemento, inputNumProp, inputNumSessaoLote, inputNomeLogradouro, inputBairro, inputCodTipoLog, inputCodSufixoLog, inputEstados, inputCidades, inputPaisNasc, inputCodigoPostal;
    
    
    inputTipoEndereco   = document.getElementById("txtTipoEndereco");
    inputAbrevTipoSub   = document.getElementById("txtAbrevTipoSub");
    inputNumSub         = document.getElementById("txtNumSub");
    inputNomeEdificio   = document.getElementById("txtNomeEdificio");
    inputNumAndar       = document.getElementById("txtNumAndar");
    inputTipoAndar      = document.getElementById("txtTipoAndar");
    inputComplemento    = document.getElementById("txtComplemento");
    inputNumProp        = document.getElementById("txtNumProp");
    inputNumSessaoLote  = document.getElementById("txtNumSessaoLote");
    inputNomeLogradouro = document.getElementById("txtNomeLogradouro");
    inputBairro         = document.getElementById("txtBairro");
    inputCodTipoLog     = document.getElementById("txtCodTipoLog");
    inputCodSufixoLog   = document.getElementById("txtCodSufixoLog");
    inputEstados        = document.getElementById("estados");
    inputCidades        = document.getElementById("cidades");
    inputPaisNasc       = document.getElementById("txtPaisNasc");
    inputCodigoPostal   = document.getElementById("txtCodigoPostal");
    
    TipoEndereco	   = 	inputTipoEndereco.value;
    AbrevTipoSub	   =	inputAbrevTipoSub.value;
    NumSub	           =	inputNumSub.value;
    NomeEdificio	   =	inputNomeEdificio.value;
    NumAndar	       = 	inputNumAndar.value;
    TipoAndar	       =	inputTipoAndar.value;
    Complemento	       =	inputComplemento.value;
    NumProp            =	inputNumProp.value;
    NumSessaoLote	   =	inputNumSessaoLote.value;
    NomeLogradouro	   =	inputNomeLogradouro.value;
    Bairro	           =	inputBairro.value;
    CodTipoLog	       =	inputCodTipoLog.value;
    CodSufixoLog	   =	inputCodSufixoLog.value;
    Estados	           =	inputEstados.value;
    Cidades	           =	inputCidades.value;
    PaisNasc	       =	inputPaisNasc.value;
    CodigoPostal	   =	inputCodigoPostal.value;
    
    var text;
    var i = localStorage.length;
    text = i.toString();
    var pessoa_json = localStorage.getItem( text );    
    var pessoa = JSON.parse(pessoa_json);            
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
                             pessoa.NomeCompleto,
                             pessoa.Sobrenome,
                             pessoa.Titulo,
                             pessoa.Sufixo,
                             pessoa.Uso,
                             pessoa.DtNascimento, 
                             pessoa.DiaNasc, 
                             pessoa.MesNasc, 
                             pessoa.AnoNasc, 
                             pessoa.IndicadorSegDtNascimento, 
                             pessoa.DtObito, 
                             pessoa.DiaObit, 
                             pessoa.MesObit, 
                             pessoa.AnoObit, 
                             pessoa.Fonte, 
                             pessoa.Sexo, 
                             pessoa.NomeMae, 
                             pessoa.NomePai, 
                             pessoa.SitFamiliar, 
                             pessoa.RacaCor, 
                             pessoa.Estados, 
                             pessoa.Cidades, 
                             pessoa.PaisNasc, 
                             pessoa.DtEntradaPais, 
                             pessoa.Pluralidade, 
                             pessoa.OrdemNascimento, 
                             pessoa.ComentarioIdent,
                             TipoEndereco,
                             AbrevTipoSub,
                             NumSub,
                             NomeEdificio,
                             NumAndar,
                             TipoAndar,
                             Complemento,
                             NumProp,
                             NumSessaoLote,
                             NomeLogradouro,
                             Bairro,
                             CodTipoLog,
                             CodSufixoLog,
                             Estados,
                             Cidades,
                             PaisNasc,
                             CodigoPostal);
    
    var pessoa_json = JSON.stringify(pessoa);
    localStorage.removeItem(pessoa.id);
    localStorage.setItem(pessoa.id, pessoa_json);    
    
}

function salvarComunicacoes() {
    var MeioComunicacoes, PreferenciaContato, CodUtilContato, DetalhesComEletronica, id, span; //VARIAVEIS PARA SALVAR PESSOA
    var inputMeioComunicacoes, inputPreferenciaContato, inputCodUtilContato, inputDetalhesComEletronica;
    
    inputMeioComunicacoes       = document.getElementById("txtMeioComunicacoes");
    inputPreferenciaContato     = document.getElementById("txtPreferenciaContato");
    inputCodUtilContato         = document.getElementById("txtCodUtilContato");
    inputDetalhesComEletronica  = document.getElementById("txtDetalhesComEletronica");     
    
    MeioComunicacoes        = inputMeioComunicacoes.value;
    PreferenciaContato      = inputPreferenciaContato.value; 
    CodUtilContato          = inputCodUtilContato.value;
    DetalhesComEletronica   = inputDetalhesComEletronica.value;
    
    var text;
    var i = localStorage.length;
    text = i.toString();
    var pessoa_json = localStorage.getItem( text );    
    var pessoa = JSON.parse(pessoa_json);            
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
                             pessoa.NomeCompleto,
                             pessoa.Sobrenome,
                             pessoa.Titulo,
                             pessoa.Sufixo,
                             pessoa.Uso,
                             pessoa.DtNascimento, 
                             pessoa.DiaNasc, 
                             pessoa.MesNasc, 
                             pessoa.AnoNasc, 
                             pessoa.IndicadorSegDtNascimento, 
                             pessoa.DtObito, 
                             pessoa.DiaObit, 
                             pessoa.MesObit, 
                             pessoa.AnoObit, 
                             pessoa.Fonte, 
                             pessoa.Sexo, 
                             pessoa.NomeMae, 
                             pessoa.NomePai, 
                             pessoa.SitFamiliar, 
                             pessoa.RacaCor, 
                             pessoa.Estados, 
                             pessoa.Cidades, 
                             pessoa.PaisNasc, 
                             pessoa.DtEntradaPais, 
                             pessoa.Pluralidade, 
                             pessoa.OrdemNascimento, 
                             pessoa.ComentarioIdent,
                             pessoa.TipoEndereco,
                             pessoa.AbrevTipoSub,
                             pessoa.NumSub,
                             pessoa.NomeEdificio,
                             pessoa.NumAndar,
                             pessoa.TipoAndar,
                             pessoa.Complemento,
                             pessoa.NumProp,
                             pessoa.NumSessaoLote,
                             pessoa.NomeLogradouro,
                             pessoa.Bairro,
                             pessoa.CodTipoLog,
                             pessoa.CodSufixoLog,
                             pessoa.Estados,
                             pessoa.Cidades,
                             pessoa.PaisNasc,
                             pessoa.CodigoPostal,                             
                             MeioComunicacoes,
                             PreferenciaContato,
                             CodUtilContato,
                             DetalhesComEletronica);
    
    var pessoa_json = JSON.stringify(pessoa);
    localStorage.removeItem(pessoa.id);
    localStorage.setItem(pessoa.id, pessoa_json);    
    
}

function salvarVinculo() {
    var VinculoInd, IdentificadorInd, RelDoVinculoInd, DtInicialVinculo, DtFinalVinculo, id, span; //VARIAVEIS PARA SALVAR PESSOA
    var inputVinculoInd, inputIdentificadorInd, inputRelDoVinculoInd, inputDtInicialVinculo, inputDtFinalVinculo;
    
    inputVinculoInd         = document.getElementById("txtVinculoInd");
    inputIdentificadorInd   = document.getElementById("txtIdentificadorInd");
    inputRelDoVinculoInd    = document.getElementById("txtRelDoVinculoInd");
    inputDtInicialVinculo   = document.getElementById("txtDtInicialVinculo");     
    inputDtFinalVinculo     = document.getElementById("txtDtFinalVinculo");     
    
    VinculoInd          = inputVinculoInd.value;
    IdentificadorInd    = inputIdentificadorInd.value; 
    RelDoVinculoInd     = inputRelDoVinculoInd.value;
    DtInicialVinculo    = inputDtInicialVinculo.value;
    DtFinalVinculo      = inputDtFinalVinculo.value;    
    
    var text;
    var i = localStorage.length;
    text = i.toString();
    var pessoa_json = localStorage.getItem( text );    
    var pessoa = JSON.parse(pessoa_json);            
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
                             pessoa.NomeCompleto,
                             pessoa.Sobrenome,
                             pessoa.Titulo,
                             pessoa.Sufixo,
                             pessoa.Uso,
                             pessoa.DtNascimento, 
                             pessoa.DiaNasc, 
                             pessoa.MesNasc, 
                             pessoa.AnoNasc, 
                             pessoa.IndicadorSegDtNascimento, 
                             pessoa.DtObito, 
                             pessoa.DiaObit, 
                             pessoa.MesObit, 
                             pessoa.AnoObit, 
                             pessoa.Fonte, 
                             pessoa.Sexo, 
                             pessoa.NomeMae, 
                             pessoa.NomePai, 
                             pessoa.SitFamiliar, 
                             pessoa.RacaCor, 
                             pessoa.Estados, 
                             pessoa.Cidades, 
                             pessoa.PaisNasc, 
                             pessoa.DtEntradaPais, 
                             pessoa.Pluralidade, 
                             pessoa.OrdemNascimento, 
                             pessoa.ComentarioIdent,
                             pessoa.TipoEndereco,
                             pessoa.AbrevTipoSub,
                             pessoa.NumSub,
                             pessoa.NomeEdificio,
                             pessoa.NumAndar,
                             pessoa.TipoAndar,
                             pessoa.Complemento,
                             pessoa.NumProp,
                             pessoa.NumSessaoLote,
                             pessoa.NomeLogradouro,
                             pessoa.Bairro,
                             pessoa.CodTipoLog,
                             pessoa.CodSufixoLog,
                             pessoa.Estados,
                             pessoa.Cidades,
                             pessoa.PaisNasc,
                             pessoa.CodigoPostal,                             
                             pessoa.MeioComunicacoes,
                             pessoa.PreferenciaContato,
                             pessoa.CodUtilContato,
                             pessoa.DetalhesComEletronica,
                             VinculoInd,
                             IdentificadorInd,
                             RelDoVinculoInd,
                             DtInicialVinculo,
                             DtFinalVinculo);
    
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
                     parmUso,
                     parmDtNascimento, 
                     parmDiaNasc, 
                     parmMesNasc, 
                     parmAnoNasc, 
                     parmIndicadorSegDtNascimento, 
                     parmDtObito, 
                     parmDiaObit, 
                     parmMesObit, 
                     parmAnoObit, 
                     parmFonte, 
                     parmSexo, 
                     parmNomeMae, 
                     parmNomePai, 
                     parmSitFamiliar, 
                     parmRacaCor, 
                     parmEstados, 
                     parmCidades, 
                     parmPaisNasc, 
                     parmDtEntradaPais, 
                     parmPluralidade, 
                     parmOrdemNascimento, 
                     parmComentarioIdent,
                     parmTipoEndereco,
                     parmAbrevTipoSub,
                     parmNumSub,
                     parmNomeEdificio,
                     parmNumAndar,
                     parmTipoAndar,
                     parmComplemento,
                     parmNumProp,
                     parmNumSessaoLote,
                     parmNomeLogradouro,
                     parmBairro,
                     parmCodTipoLog,
                     parmCodSufixoLog,
                     parmEstados,
                     parmCidades,
                     parmPaisNasc,
                     parmCodigoPostal,
                     parmMeioComunicacoes,
                     parmPreferenciaContato,
                     parmCodUtilContato,
                     parmDetalhesComEletronica,
                     parmVinculoInd,
                     parmIdentificadorInd,
                     parmRelDoVinculoInd,
                     parmDtInicialVinculo,
                     parmDtFinalVinculo) {
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
            uso: parmUso,
            dtNascimento: parmDtNascimento, 
            diaNasc:     parmDiaNasc, 
            mesNasc: parmMesNasc, 
            anoNasc:         parmAnoNasc, 
            indicadorSegDtNascimento:         parmIndicadorSegDtNascimento, 
            dtObito:         parmDtObito, 
            diaObit:         parmDiaObit, 
            mesObit:         parmMesObit, 
            anoObit:         parmAnoObit, 
            fonte:         parmFonte, 
            sexo:         parmSexo, 
            nomeMae:         parmNomeMae, 
            nomePai:         parmNomePai, 
            sitFamiliar:         parmSitFamiliar, 
            racaCor:         parmRacaCor, 
            estados:         parmEstados, 
            cidades:         parmCidades, 
            paisNasc:         parmPaisNasc, 
            dtEntradapais:         parmDtEntradaPais, 
            pluralidade: parmPluralidade, 
            ordemNascimento:         parmOrdemNascimento, 
            comentarioIdent:         parmComentarioIdent,
            TipoEndereco: parmTipoEndereco,
            AbrevTipoSub: parmAbrevTipoSub,
            NumSub: parmNumSub,
            NomeEdificio: parmNomeEdificio,
            NumAndar: parmNumAndar,
            TipoAndar: parmTipoAndar,
            Complemento: parmComplemento,
            NumProp: parmNumProp,
            NumSessaoLote: parmNumSessaoLote,
            NomeLogradouro: parmNomeLogradouro,
            Bairro: parmBairro,
            CodTipoLog: parmCodTipoLog,
            CodSufixoLog: parmCodSufixoLog,
            Estados: parmEstados,
            Cidades: parmCidades,
            PaisNasc: parmPaisNasc,
            CodigoPostal : parmCodigoPostal,
            MeioComunicacoes: parmMeioComunicacoes,
            PreferenciaContato: parmPreferenciaContato,
            CodUtilContato: parmCodUtilContato,
            DetalhesComEletronica: parmDetalhesComEletronica,
            VinculoInd: parmVinculoInd,
            IdentificadorInd: parmIdentificadorInd,
            RelDoVinculoInd: parmRelDoVinculoInd,
            DtInicialVinculo: parmDtInicialVinculo,
            DtFinalVinculo: parmDtFinalVinculo
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

            idTd.textContent    = pessoa.id;
            nomeTd.textContent  = pessoa.nomeCompleto;

            pacienteTr.appendChild(idTd);
            pacienteTr.appendChild(nomeTd);

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

