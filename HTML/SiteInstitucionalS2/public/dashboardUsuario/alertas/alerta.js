var alertas = [];

function obterdados(idLeitura) {
    fetch(`/medidas/tempo-real/${idLeitura}`)
        .then(resposta => {

            if (resposta.ok) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idLeitura);
                });
            } else {

                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, idLeitura) {
    var temp = resposta[0].temperatura;

    console.log(idLeitura === resposta[0].fkSensor)
    
    var grauDeAviso ='';


    var limites = {
        muitoMovimento: 50,
        bomMovimento: 22,
        movimentado: 20,
        baixoMovimento: 10,
        poucoMovimento: 5

        // mudar parametros
    };

    var classe_temperatura = 'cor-alerta';

    if (temp >= limites.muitoMovimento) {
        classe_temperatura = 'cor-alerta perigo-quente';
        grauDeAviso = 'perigo quente'
        grauDeAvisoCor = 'cor-alerta perigo-quente'
        exibirAlerta(temp, idLeitura, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.muitoMovimento && temp >= limites.bomMovimento) {
        classe_temperatura = 'cor-alerta alerta-quente';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta alerta-quente'
        exibirAlerta(temp, idLeitura, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.bomMovimento && temp > limites.baixoMovimento) {
        classe_temperatura = 'cor-alerta ideal';
        removerAlerta(idLeitura);
    }
    else if (temp <= limites.baixoMovimento && temp > limites.poucoMovimento) {
        classe_temperatura = 'cor-alerta alerta-frio';
        grauDeAviso = 'alerta frio'
        grauDeAvisoCor = 'cor-alerta alerta-frio'
        exibirAlerta(temp, idLeitura, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.poucoMovimento) {
        classe_temperatura = 'cor-alerta perigo-frio';
        grauDeAviso = 'perigo frio'
        grauDeAvisoCor = 'cor-alerta perigo-frio'
        exibirAlerta(temp, idLeitura, grauDeAviso, grauDeAvisoCor)
    }

    var card;

    if (idLeitura == 1) {
        temp_aquario_1.innerHTML = temp + "°C";
        card = card_1
    } else if (idLeitura == 2) {
        temp_aquario_2.innerHTML = temp + "°C";
        card = card_2
    } else if (idLeitura == 3) {
        temp_aquario_3.innerHTML = temp + "°C";
        card = card_3
    } else if (idLeitura == 4) {
        temp_aquario_4.innerHTML = temp + "°C";
        card = card_4
    }

    card.className = classe_temperatura;
}

function exibirAlerta(temp, idLeitura, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idLeitura == idLeitura);

    if (indice >= 0) {
        alertas[indice] = { idLeitura, temp, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idLeitura, temp, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
    
// Dentro da div com classe grauDeAvisoCor há um caractere "invisível", 
// que pode ser inserido clicando com o seu teclado em alt+255 ou pelo código adicionado acima.
}

function removerAlerta(idLeitura) {
    alertas = alertas.filter(item => item.idLeitura != idLeitura);
    exibirCards();
}
 
function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ idLeitura, temp, grauDeAviso, grauDeAvisoCor }) {
    return `<div class="mensagem-alarme">
    <div class="informacao">
    <div class="${grauDeAvisoCor}">&#12644;</div> 
     <h3>Aquário ${idLeitura} está em estado de ${grauDeAviso}!</h3>
    <small>Temperatura ${temp}.</small>   
    </div>
    <div class="alarme-sino"></div>
    </div>`;
}
