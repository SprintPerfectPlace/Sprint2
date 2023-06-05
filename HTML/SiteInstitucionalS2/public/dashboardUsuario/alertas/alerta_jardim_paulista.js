var alertas = [];

function atualizacaoPeriodica(idSensor) {
    obterdados(idSensor)
    setTimeout(atualizacaoPeriodica, 5000);
}

function obterdados(idSensor) {
    fetch(`/medidas/alerta_temperatura_jardim_paulista`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idSensor);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${idSensor} ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, idSensor) {
    var temp = resposta[0].Dado;
    var local = resposta[0].Bairro;


    var grauDeAviso = '';

    var limites = {
        muito_quente: 35,
        quente: 29,
        ideal: 24,
        frio: 13,
        muito_frio: 7
    };

    var classe_temperatura = 'cor-alerta';

    if (temp >= limites.muito_quente) {
        classe_temperatura = 'cor-alerta perigo-quente';
        grauDeAviso = 'perigo quente'
        grauDeAvisoCor = 'cor-alerta perigo-quente'
        exibirAlerta(temp, local, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.muito_quente && temp >= limites.quente) {
        classe_temperatura = 'cor-alerta alerta-quente';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta alerta-quente'
        exibirAlerta(temp, local, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.quente && temp > limites.frio) {
        classe_temperatura = 'cor-alerta ideal';
        removerAlerta();
    }
    else if (temp <= limites.frio && temp > limites.muito_frio) {
        classe_temperatura = 'cor-alerta alerta-frio';
        grauDeAviso = 'alerta frio'
        grauDeAvisoCor = 'cor-alerta alerta-frio'
        exibirAlerta(temp, local, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.muito_frio) {
        classe_temperatura = 'cor-alerta perigo-frio';
        grauDeAviso = 'perigo frio'
        grauDeAvisoCor = 'cor-alerta perigo-frio'
        exibirAlerta(temp, local, idSensor, grauDeAviso, grauDeAvisoCor)
    }

    // var card;

    // if (document.getElementById(`temp_sensor_${idSensor}`) != null) {
    //     document.getElementById(`temp_sensor_${idSensor}`).innerHTML = temp + "°C";
    // }

    // if (document.getElementById(`card_${idSensor}`)) {
    //     card = document.getElementById(`card_${idSensor}`)
    //     card.className = classe_temperatura;
    // }
}

function exibirAlerta(temp, local, idSensor, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idSensor == idSensor);

    if (indice >= 0) {
        alertas[indice] = { idSensor, local, temp, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idSensor, local, temp, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();

}

function removerAlerta() {
    alerta.style.display = 'none'
}

function exibirCards() {

    var alerta = document.getElementById("alerta");
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML = transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({local, temp, grauDeAviso, grauDeAvisoCor }) {
    return `
    <div class="mensagem-alarme">
        <div class="informacao">
            <div class="${grauDeAvisoCor}">&#12644;</div> 
            <h3>${local} está em estado de ${grauDeAviso}!</h3>
            <small>Temperatura ${temp}.</small>   
        </div>
        <div class="alarme-sino"></div>
    </div>
    `;
}

// function atualizacaoPeriodica() {
//     JSON.parse(sessionStorage.AQUARIOS).forEach(item => {
//         obterdados(item.id)
//     });
//     setTimeout(atualizacaoPeriodica, 5000);
// }