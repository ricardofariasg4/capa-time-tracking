const SEGUNDO = 1000;
const MINUTO = SEGUNDO * 60;
const HORA = MINUTO * 60;

const tempo = {
    horas: 0,
    minutos: 0,
    segundos: 0
}

const projeto = {
    atividade: null,
    tempoDespendido: null
}


// Funções abaixo
function passaTempo () 
{
    if (tempo.minutos === 60) {
        tempo.minutos = 0
        tempo.horas++
    }
    
    if (tempo.segundos === 60) {
        tempo.segundos = 0
        tempo.minutos++
    }
    
    tempo.segundos++
    document.getElementById('cronometro-texto').innerText = `${tempo.horas.toString().padStart(2, '0')}:${tempo.minutos.toString().padStart(2, '0')}:${tempo.segundos.toString().padStart(2, '0')}`;
}

function criarCard () 
{
    // <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
    //     <div class="card-header">Header</div>
    //     <div class="card-body">
    //         <h5 class="card-title">Dark card title</h5>
    //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     </div>
    // </div>

    tempo.horas = parseInt(projeto.tempoDespendido.split(':')[0])
    tempo.minutos = parseInt(projeto.tempoDespendido.split(':')[1])
    tempo.segundos = parseInt(projeto.tempoDespendido.split(':')[2])

    let divCol = document.createElement('div')
    let card = document.createElement('div')
    let cardHeader = document.createElement('div')
    let cardBody = document.createElement('div')
    let cardTitle = document.createElement('h5')
    let cardText = document.createElement('p')

    divCol.setAttribute('class', 'col')
    card.setAttribute('class', 'card-group')
    card.setAttribute('class', 'card text-bg-dark mb-3')
    card.setAttribute('style', 'max-width: 18rem;')
    cardHeader.setAttribute('class', 'card-header')
    cardBody.setAttribute('class', 'card-body')
    cardTitle.setAttribute('class', 'card-title')
    cardText.setAttribute('class', 'card-text')
    
    cardHeader.innerText = 'Tempo despendido: '+tempo.horas.toString().padStart(2, '0')+':'+tempo.minutos.toString().padStart(2, '0')+':'+tempo.segundos.toString().padStart(2, '0')
    cardTitle.innerText = projeto.atividade

    cardText.innerText = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    card.appendChild(cardBody)
    card.appendChild(cardHeader)
    divCol.appendChild(card)

    let sectionCards = document.getElementById('cartoes-de-projetos')
    sectionCards.appendChild(divCol)

    tempo.horas = 0
    tempo.minutos = 0
    tempo.segundos = 0
}

function criarSecaoCronometro ()
{
    let iconeBotaoPause = document.createElement('i')
    iconeBotaoPause.setAttribute('class', 'bi bi-pause-fill')

    // Estrutura geral da secao de cronometro
    let divCronometro = document.createElement('div')
    let inputCronometro = document.createElement('input')
    let spanCronometro = document.createElement('span')
    let botaoPlayTexto = document.createElement('button')
    let botaoPlayIcone = document.createElement('button')
    let botaoStopTexto = document.createElement('button')
    let botaoStopIcone = document.createElement('button')
    let botaoPauseTexto = document.createElement('button')
    let botaoPauseIcone = document.createElement('button')

    // Configuração geral da secao de cronometro
    divCronometro.setAttribute('id', 'definicao-projeto')
    divCronometro.setAttribute('class', 'row input-group')
    inputCronometro.setAttribute('id', 'input-projeto')
    inputCronometro.setAttribute('type', 'text')
    inputCronometro.setAttribute('class', 'col-8 col-md-6 col-lg-9 form-control form-control-lg')
    inputCronometro.setAttribute('placeholder', 'Qual o projeto de hoje?')

    // Botão de iniciar e encerrar em texto
    botaoPlayTexto.setAttribute('id', 'botao-play-texto')
    botaoPlayTexto.setAttribute('class', 'd-none d-md-block col-md-2 col-lg-1 btn btn-success btn-sm')
    
    botaoStopTexto.setAttribute('id', 'botao-stop-text')
    botaoStopTexto.setAttribute('class', 'd-none d-md-block col-md-2 col-lg-1 btn btn-danger btn-sm')

    botaoPlayTexto.innerHTML = 'Iniciar'
    botaoStopTexto.innerHTML = 'Encerrar'

    // Botao de iniciar e encerrar como icone
    botaoPlayIcone.setAttribute('id', 'botao-play-icone')
    botaoPlayIcone.setAttribute('class', 'd-md-none col-1 btn btn-success btn-sm')

    botaoStopIcone.setAttribute('id', 'botao-stop-icone')
    botaoStopIcone.setAttribute('class', 'd-md-none col-1 btn btn-danger btn-sm')
    
    botaoPlayIcone.innerHTML = '<i class="bi bi-play-fill"></i>'
    botaoStopIcone.innerHTML = '<i class="bi bi-stop-fill"></i>'

    // O cronometro
    spanCronometro.setAttribute('id', 'cronometro-texto')
    spanCronometro.setAttribute('class', 'col-2 col-md-2 col-lg-1 input-group-text justify-content-center')
    spanCronometro.innerText = '00:00:00'

    divCronometro.appendChild(inputCronometro)
    divCronometro.appendChild(spanCronometro)
    divCronometro.appendChild(botaoPlayTexto)
    divCronometro.appendChild(botaoPlayIcone)
    divCronometro.appendChild(botaoStopTexto)
    divCronometro.appendChild(botaoStopIcone)

    let sectionCronometro = document.getElementById('cronometros')
    sectionCronometro.appendChild(divCronometro)

    return sectionCronometro;
}

function adicionarEventos (objInteragido)
{
    let areaProjetoPrincipal = document.getElementById('definicao-projeto')
    let intervalo = null

    objInteragido.addEventListener('click', (e) => {
        let objetoClicado = document.getElementById(e.target.id)

        if (objetoClicado)
        {
            let objetoClicadoBaseId = objetoClicado.id.split('-')[1]

            // Tratamento botao play
            if (objetoClicadoBaseId === 'play')
            {
                botaoPlayTexto = document.getElementById('botao-play-texto')
                botaoPlayIcone = document.getElementById('botao-play-icone')
                
                botaoPlayTexto.setAttribute('class', 'd-none d-md-block col-md-2 col-lg-1 btn btn-secondary btn-sm')
                botaoPlayTexto.innerHTML = 'Pausar'
                
                botaoPlayIcone.setAttribute('class', 'd-md-none col-1 btn btn-secondary btn-sm')
                botaoPlayIcone.innerHTML = '<i class="bi bi-pause-fill"></i>'

                botaoPlayTexto.setAttribute('id', 'botao-pause-texto')
                botaoPlayIcone.setAttribute('id', 'botao-pause-icone')
                
                intervalo = setInterval(passaTempo, SEGUNDO)
                return
            }
            
            // Tratamento botao pause
            if (objetoClicadoBaseId === 'pause')
            {
                // console.log('botao-pause-clicado')
                
                clearInterval(intervalo)
                botaoPauseTexto = document.getElementById('botao-pause-texto')
                botaoPauseIcone = document.getElementById('botao-pause-icone')

                botaoPlayTexto.setAttribute('class', 'd-none d-md-block col-md-2 col-lg-1 btn btn-success btn-sm')
                botaoPlayTexto.innerHTML = 'Retomar'
                
                botaoPlayIcone.setAttribute('class', 'd-md-none col-1 btn btn-success btn-sm')
                botaoPlayIcone.innerHTML = '<i class="bi bi-play-fill"></i>'
                
                botaoPlayTexto.setAttribute('id', 'botao-play-texto')
                botaoPlayIcone.setAttribute('id', 'botao-play-icone')
                return
            }

            // Tratamento botao stop
            if (objetoClicadoBaseId === 'stop')
            {
                
                // console.log('botao stop clicado')

                botaoPlayTexto.setAttribute('class', 'd-none d-md-block col-md-2 col-lg-1 btn btn-success btn-sm')
                botaoPlayTexto.innerHTML = 'Iniciar'
                
                botaoPlayIcone.setAttribute('class', 'd-md-none col-1 btn btn-success btn-sm')
                botaoPlayIcone.innerHTML = '<i class="bi bi-play-fill"></i>'
                return
            }
        }  
    })
}

// Verifica se a página está pronta para ser manipulada
document.addEventListener('DOMContentLoaded', () => {
    let sectionCronometro = criarSecaoCronometro()
    adicionarEventos(sectionCronometro)
})