var database = require("../database/config");

function buscarUltimasMedidas_umidade(idSensor, limite_linhas) {

    instrucaoSql = ''

    // if (process.env.AMBIENTE_PROCESSO == "producao") {
    //     instrucaoSql = `select top ${limite_linhas}
    //     dht11_temperatura as temperatura, 
    //     dht11_umidade as umidade,  
    //                     momento,
    //                     FORMAT(momento, 'HH:mm:ss') as momento_grafico
    //                 from medida
    //                 where fk_aquario = ${idSensor}
    //                 order by id desc`;
    // } else 
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
	        Dado as umidade, 
	        DataLeitura, DATE_FORMAT(DataLeitura,'%H:%i:%s') as DataLeitura
        FROM Leitura WHERE fkSensor = ${idSensor}
                    ORDER BY idLeitura DESC LIMIT ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal_umidade(idSensor) {

    instrucaoSql = ''

    // if (process.env.AMBIENTE_PROCESSO == "producao") {
    //     instrucaoSql = `select top 1
    //     dht11_temperatura as temperatura, 
    //     dht11_umidade as umidade,  
    //                     CONVERT(varchar, momento, 108) as momento_grafico, 
    //                     fk_aquario 
    //                     from medida where fk_aquario = ${idSensor = 1} 
    //                 order by id desc`;

    // } else 
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
        Dado as umidade,
        DATE_FORMAT(DataLeitura,'%H:%i:%s') as DataLeitura, 
                        fkSensor 
                        from Leitura where fkSensor = ${idSensor} 
                    order by idLeitura desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas_temperatura(idSensor, limite_linhas) {

    instrucaoSql = ''

    // if (process.env.AMBIENTE_PROCESSO == "producao") {
    //     instrucaoSql = `select top ${limite_linhas}
    //     dht11_temperatura as temperatura, 
    //     dht11_umidade as umidade,  
    //                     momento,
    //                     FORMAT(momento, 'HH:mm:ss') as momento_grafico
    //                 from medida
    //                 where fk_aquario = ${idSensor}
    //                 order by id desc`;
    // } else 
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
	        Dado as temperatura, 
	        DataLeitura, DATE_FORMAT(DataLeitura,'%H:%i:%s') as DataLeitura
        FROM Leitura WHERE fkSensor = ${idSensor}
                    ORDER BY idLeitura DESC LIMIT ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal_temperatura(idSensor) {

    instrucaoSql = ''

    // if (process.env.AMBIENTE_PROCESSO == "producao") {
    //     instrucaoSql = `select top 1
    //     dht11_temperatura as temperatura, 
    //     dht11_umidade as umidade,  
    //                     CONVERT(varchar, momento, 108) as momento_grafico, 
    //                     fk_aquario 
    //                     from medida where fk_aquario = ${idSensor = 1} 
    //                 order by id desc`;

    // } else 
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
        Dado as temperatura,
        DATE_FORMAT(DataLeitura,'%H:%i:%s') as DataLeitura, 
                        fkSensor 
                        from Leitura where fkSensor = ${idSensor} 
                    order by idLeitura desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas_chave(idSensor, limite_linhas) {

    instrucaoSql = ''

    // if (process.env.AMBIENTE_PROCESSO == "producao") {
    //     instrucaoSql = `select top ${limite_linhas}
    //     dht11_temperatura as temperatura, 
    //     dht11_umidade as umidade,  
    //                     momento,
    //                     FORMAT(momento, 'HH:mm:ss') as momento_grafico
    //                 from medida
    //                 where fk_aquario = ${idSensor}
    //                 order by id desc`;
    // } else 
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
	        Dado as chave, 
	        DataLeitura, DATE_FORMAT(DataLeitura,'%H:%i:%s') as DataLeitura
        FROM Leitura WHERE fkSensor = ${idSensor}
                    ORDER BY idLeitura DESC LIMIT ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal_chave(idSensor) {

    instrucaoSql = ''

    // if (process.env.AMBIENTE_PROCESSO == "producao") {
    //     instrucaoSql = `select top 1
    //     dht11_temperatura as temperatura, 
    //     dht11_umidade as umidade,  
    //                     CONVERT(varchar, momento, 108) as momento_grafico, 
    //                     fk_aquario 
    //                     from medida where fk_aquario = ${idSensor = 1} 
    //                 order by id desc`;

    // } else 
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
        Dado as chave,
        DATE_FORMAT(DataLeitura,'%H:%i:%s') as DataLeitura, 
                        fkSensor 
                        from Leitura where fkSensor = ${idSensor} 
                    order by idLeitura desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas_movimento(idSensor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
	        COUNT(Dado) as Total 
            FROM Leitura WHERE fkSensor = ${idSensor} AND Dado LIKE '1';`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal_movimento(idSensor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
        Dado as chave,
        DATE_FORMAT(DataLeitura,'%H:%i:%s') as DataLeitura, 
                        fkSensor 
                        from Leitura where fkSensor = ${idSensor} 
                    order by idLeitura desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas_umidade,
    buscarUltimasMedidas_temperatura,
    buscarUltimasMedidas_chave,
    buscarUltimasMedidas_movimento,
    buscarMedidasEmTempoReal_umidade,
    buscarMedidasEmTempoReal_temperatura,
    buscarMedidasEmTempoReal_chave,
    buscarMedidasEmTempoReal_movimento
}
