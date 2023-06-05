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
        DataLeitura,
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
        instrucaoSql = 
        `select count(*) as QtdAcionamento, fksensor as Sensor,
        if(minute(DataLeitura)>24 and minute(DataLeitura)<48, minute(DataLeitura)-24, 
        if(minute(DataLeitura)>48 and minute(DataLeitura)<60, minute(DataLeitura)-36, minute(DataLeitura))
        )
        as Ajustado
        from leitura where fksensor = ${idSensor}
        group by fkSensor, Ajustado order by ajustado;`;

        //             `SELECT 
	    //     Dado as chave, 
	    //     DataLeitura, DATE_FORMAT(DataLeitura,'%H:%i:%s') as DataLeitura
        // FROM Leitura WHERE fkSensor = ${idSensor}
        //             ORDER BY idLeitura DESC LIMIT ${limite_linhas}`;

        
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

function buscarMedidasAlerta_Temperatura_Consolacao(idSensor){
    instrucaoSql = ''

    if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `
        SELECT
            Sensor.idSensor as ID_Sensor, 
            Sensor.nome as Sensor,
            Sensor.funcionalidade as Tipo,
            LocalSensor.bairro as Bairro,
            Leitura.Dado as Dado,
            Leitura.DataLeitura as Data FROM Sensor JOIN LocalSensor ON idLocal = fkLocal 
		        JOIN Leitura ON idSensor = fkSensor WHERE fkLocal = 1 AND idSensor = ${idSensor} ORDER BY Data DESC LIMIT 1;
        `

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n "+ instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasAlerta_Temperatura_Bela_Vista(idSensor){
    instrucaoSql = ''

    if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `
        SELECT
            Sensor.idSensor as ID_Sensor, 
            Sensor.nome as Sensor,
            Sensor.funcionalidade as Tipo,
            LocalSensor.bairro as Bairro,
            Leitura.Dado as Dado,
            Leitura.DataLeitura as Data FROM Sensor JOIN LocalSensor ON idLocal = fkLocal 
		        JOIN Leitura ON idSensor = fkSensor WHERE fkLocal = 3 AND idSensor = ${idSensor} ORDER BY Data DESC LIMIT 1;
        `

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n "+ instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasAlerta_Temperatura_Paraiso(idSensor){
    instrucaoSql = ''

    if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `
        SELECT
            Sensor.idSensor as ID_Sensor, 
            Sensor.nome as Sensor,
            Sensor.funcionalidade as Tipo,
            LocalSensor.bairro as Bairro,
            Leitura.Dado as Dado,
            Leitura.DataLeitura as Data FROM Sensor JOIN LocalSensor ON idLocal = fkLocal 
		        JOIN Leitura ON idSensor = fkSensor WHERE fkLocal = 2 AND idSensor = ${idSensor} ORDER BY Data DESC LIMIT 1;
        `

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n "+ instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasAlerta_Temperatura_Cerqueira_Cesar(idSensor){
    instrucaoSql = ''

    if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `
        SELECT
            Sensor.idSensor as ID_Sensor, 
            Sensor.nome as Sensor,
            Sensor.funcionalidade as Tipo,
            LocalSensor.bairro as Bairro,
            Leitura.Dado as Dado,
            Leitura.DataLeitura as Data FROM Sensor JOIN LocalSensor ON idLocal = fkLocal 
		        JOIN Leitura ON idSensor = fkSensor WHERE fkLocal = 4 AND idSensor = ${idSensor} ORDER BY Data DESC LIMIT 1;
        `

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n "+ instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasAlerta_Temperatura_Jardim_Paulista(idSensor){
    instrucaoSql = ''

    if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `
        SELECT
            Sensor.idSensor as ID_Sensor, 
            Sensor.nome as Sensor,
            Sensor.funcionalidade as Tipo,
            LocalSensor.bairro as Bairro,
            Leitura.Dado as Dado,
            Leitura.DataLeitura as Data FROM Sensor JOIN LocalSensor ON idLocal = fkLocal 
		        JOIN Leitura ON idSensor = fkSensor WHERE fkLocal = 5 AND idSensor = ${idSensor} ORDER BY Data DESC LIMIT 1;
        `

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n "+ instrucaoSql);
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
    buscarMedidasEmTempoReal_movimento,
    buscarMedidasAlerta_Temperatura_Consolacao,
    buscarMedidasAlerta_Temperatura_Bela_Vista,
    buscarMedidasAlerta_Temperatura_Paraiso,
    buscarMedidasAlerta_Temperatura_Cerqueira_Cesar,
    buscarMedidasAlerta_Temperatura_Jardim_Paulista
}
