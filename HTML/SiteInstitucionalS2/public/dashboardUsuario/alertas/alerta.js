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
    var temp = resposta[0].chave;

    console.log(idLeitura === resposta[0].fkSensor)
    
    var grauDeAviso ='';


    var limites = {
        muitoMovimento: 15,
        bomMovimento: 12,
        movimentado: 10,
        baixoMovimento: 5,
        poucoMovimento: 3

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
