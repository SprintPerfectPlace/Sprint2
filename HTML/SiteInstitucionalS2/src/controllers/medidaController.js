var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas_umidade(req, res) {

    const limite_linhas = 7;

    var idSensor = 1;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas_umidade(idSensor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas_temperatura(req, res) {

    const limite_linhas = 7;

    var idSensor = 2;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas_temperatura(idSensor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas_chave(req, res) {

    const limite_linhas = 7;

    var idSensor = 3;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas_chave(idSensor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas_movimento(req, res) {

    var limite_linhas = 1;
    var idSensor = 3;

    console.log(`Recuperando a ultima medida`);

    medidaModel.buscarUltimasMedidas_movimento(idSensor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal_umidade(req, res) {

    var idSensor = 1;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal_umidade(idSensor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal_temperatura(req, res) {

    var idSensor = 2;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal_temperatura(idSensor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal_chave(req, res) {

    var idSensor = 3;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal_chave(idSensor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal_movimento(req, res) {

    var idSensor = 3;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal_chave(idSensor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasAlerta_Temperatura_Consolacao(req, res) {
    var idSensor = 2;

    console.log(`Recuperando medidas para o alerta`)

    medidaModel.buscarMedidasAlerta_Temperatura_Consolacao(idSensor).then(function (resultado) {
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar a medida para o alerta.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarMedidasAlerta_Temperatura_Bela_Vista(req, res) {
    var idSensor = 8;

    console.log(`Recuperando medidas para o alerta`)

    medidaModel.buscarMedidasAlerta_Temperatura_Bela_Vista(idSensor).then(function (resultado) {
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar a medida para o alerta.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarMedidasAlerta_Temperatura_Paraiso(req, res) {
    var idSensor = 5;

    console.log(`Recuperando medidas para o alerta`)

    medidaModel.buscarMedidasAlerta_Temperatura_Paraiso(idSensor).then(function (resultado) {
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar a medida para o alerta.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarMedidasAlerta_Temperatura_Cerqueira_Cesar(req, res) {
    var idSensor = 11;

    console.log(`Recuperando medidas para o alerta`)

    medidaModel.buscarMedidasAlerta_Temperatura_Cerqueira_Cesar(idSensor).then(function (resultado) {
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar a medida para o alerta.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarMedidasAlerta_Temperatura_Jardim_Paulista(req, res) {
    var idSensor = 14;

    console.log(`Recuperando medidas para o alerta`)

    medidaModel.buscarMedidasAlerta_Temperatura_Jardim_Paulista(idSensor).then(function (resultado) {
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar a medida para o alerta.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscarUltimasMedidas_umidade,
    buscarUltimasMedidas_temperatura,
    buscarUltimasMedidas_chave,
    buscarUltimasMedidas_movimento,
    buscarMedidasEmTempoReal_umidade,
    buscarMedidasEmTempoReal_temperatura,
    buscarMedidasEmTempoReal_chave,
    buscarMedidasEmTempoReal_movimento,
    buscarMedidasAlerta_Temperatura_Consolacao,
    buscarMedidasAlerta_Temperatura_Bela_Vista,
    buscarMedidasAlerta_Temperatura_Paraiso,
    buscarMedidasAlerta_Temperatura_Cerqueira_Cesar,
    buscarMedidasAlerta_Temperatura_Jardim_Paulista
}