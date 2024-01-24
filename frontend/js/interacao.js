const SEGUNDO = 1000
const MINUTO = SEGUNDO * 60
const HORA = MINUTO * 60

const tempo = {
    horas: 0,
    minutos: 0,
    segundos: 0
}

const cardObj = {
    tituloAtividade: null,
    descricaoAtividade: null,
    humorMedio: null, 
    status: null,
    categoriaProjeto: null,
    data: null,
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
    document.getElementById('cronometro-texto').innerText = `${tempo.horas.toString().padStart(2, '0')}:${tempo.minutos.toString().padStart(2, '0')}:${tempo.segundos.toString().padStart(2, '0')}`
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
    
    cardHeader.innerText = 'Tempo despendido: '+cardObj.tempoDespendido
    cardTitle.innerText = cardObj.tituloAtividade

    cardText.innerText = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    card.appendChild(cardBody)
    card.appendChild(cardHeader)
    divCol.appendChild(card)

    let sectionCards = document.getElementById('cartoes-de-projetos')
    sectionCards.appendChild(divCol)
}

function capturaInfoComplementar ()
{
    let secaoInfoComplementar = document.getElementById('secao-info-complementar')
    let divResumo = document.createElement('div')
    let labelResumo = document.createElement('label')
    let textAreaResumo = document.createElement('textarea')

    divResumo.setAttribute('id', 'div-resumo')
    divResumo.setAttribute('class', 'col-12 mb-3')
    
    labelResumo.setAttribute('id', 'label-resumo')
    labelResumo.setAttribute('class', 'form-label')
    labelResumo.setAttribute('for', 'text-area-resumo')
    labelResumo.innerText = 'resumo da atividade:'
    
    textAreaResumo.setAttribute('id', 'text-area-resumo')
    textAreaResumo.setAttribute('class', 'form-control')
    textAreaResumo.setAttribute('rows', '3')

    divResumo.appendChild(labelResumo)
    divResumo.appendChild(textAreaResumo)

    secaoInfoComplementar.appendChild(divResumo)

    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------

    let opcoesEmojis = ["🧐 encontre sua reação", "Isso foi divertido 😃", "Um pouco entediante 😑", "Aturei... 🙄", "Vai dar não 😡"]

    let divEmoji = document.createElement('div')
    let labelEmoji = document.createElement('label')
    let selectEmoji = document.createElement('select')
    let opcaoSelecionadaEmoji = document.createElement('option')

    // Configuração da div emoji
    divEmoji.setAttribute('id', 'div-emoji')
    divEmoji.setAttribute('class', 'col-12 col-lg-4 mb-3')

    // Configuração label emoji
    labelEmoji.setAttribute('for', 'seletor-emoji')
    labelEmoji.setAttribute('class', 'form-label')
    labelResumo.setAttribute('for', 'seletor-emoji')
    labelEmoji.innerText = 'como você se sente? *'

    // Configuração do select
    selectEmoji.setAttribute('id', 'seletor-emoji')
    selectEmoji.setAttribute('class', 'form-select')
    selectEmoji.setAttribute('aria-label', 'Encontre sua reação')

    // Configuração da opção selecionada (padrão)
    opcaoSelecionadaEmoji.value = 0
    opcaoSelecionadaEmoji.text = opcoesEmojis[0]
    selectEmoji.appendChild(opcaoSelecionadaEmoji)
    
    for (let i=1; i<opcoesEmojis.length; i++)
    {
        option = document.createElement('option')
        option.value = i
        option.text = opcoesEmojis[i]
        selectEmoji.appendChild(option)
    }

    divEmoji.appendChild(labelEmoji)
    divEmoji.appendChild(selectEmoji)
    secaoInfoComplementar.appendChild(divEmoji)

    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // <div class="col-12 col-lg-4 mb-3">
    //     <label for="seletor-emoji" class="form-label">a qual projeto está atrelado? *</label>
    //     <select id="seletor-emoji" class="form-select" aria-label="Projeto">
    //         <option selected>projeto exemplo</option>
    //         <option value="1">Projeto 1</option>
    //         <option value="2">Projeto 2</option>
    //         <option value="3">Projeto 3</option>
    //         <option value="4">Projeto 4</option>
    //     </select>	
    // </div>

    // Captura as opções de projeto do backend

    let divProjeto = document.createElement('div')
    let labelProjeto = document.createElement('label')
    let selectProjeto = document.createElement('select')
    let opcaoSelecionadaProjeto = document.createElement('option')

    // Configuração da div projeto
    divProjeto.setAttribute('id', 'div-projeto')
    divProjeto.setAttribute('class', 'col-12 col-lg-4 mb-3')

    // Configuração label projeto
    labelProjeto.setAttribute('for', 'seletor-projeto')
    labelProjeto.setAttribute('id', 'label-projeto')
    labelProjeto.setAttribute('class', 'form-label')
    labelProjeto.innerText = 'a qual projeto está atrelado? *'

    // Configuração do select
    selectProjeto.setAttribute('id', 'seletor-projeto')
    selectProjeto.setAttribute('class', 'form-select')
    selectProjeto.setAttribute('aria-label', 'Projetos')

    // Configuração da opção selecionada (padrão)
    opcaoSelecionadaProjeto.value = 0
    opcaoSelecionadaProjeto.text = 'Projetos'
    selectProjeto.appendChild(opcaoSelecionadaProjeto)
    
    divProjeto.appendChild(labelProjeto)
    divProjeto.appendChild(selectProjeto)
    secaoInfoComplementar.appendChild(divProjeto)

    // Cria botão de salvar ou cancelar
    let botaoSalvar = document.createElement('button')
    let botaoCancelar = document.createElement('button')
    let divBotoesComplementar = document.createElement('div')

    divBotoesComplementar.setAttribute('class', 'container-fluid')

    botaoSalvar.setAttribute('id', 'botao-salvar-complementar')
    botaoSalvar.setAttribute('class', 'col-6 btn btn-success')
    botaoSalvar.innerHTML = '<i id="i-salvar-icone" class="bi bi-check-circle"></i> salvar'
    
    botaoCancelar.setAttribute('id', 'botao-cancelar-complementar')
    botaoCancelar.setAttribute('class', 'col-6 btn btn-danger')
    botaoCancelar.innerHTML = '<i id="i-cancelar-icone" class="bi bi-x-circle"></i> cancelar'

    divBotoesComplementar.appendChild(botaoSalvar)
    divBotoesComplementar.appendChild(botaoCancelar)   

    secaoInfoComplementar.appendChild(divBotoesComplementar)

    return secaoInfoComplementar
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

    // Configuração geral da secao de cronometro
    divCronometro.setAttribute('id', 'definicao-projeto')
    divCronometro.setAttribute('class', 'row mx-auto input-group')
    inputCronometro.setAttribute('id', 'input-projeto')
    inputCronometro.setAttribute('type', 'text')
    inputCronometro.setAttribute('class', 'col-8 col-md-6 col-lg-9 form-control form-control-lg')
    inputCronometro.setAttribute('placeholder', 'qual o projeto de hoje?')

    // O cronometro
    spanCronometro.setAttribute('id', 'cronometro-texto')
    spanCronometro.setAttribute('class', 'col-2 col-md-2 col-lg-1 input-group-text justify-content-center')
    spanCronometro.innerText = '00:00:00'

    // Botão de iniciar e encerrar em texto
    botaoPlayTexto.setAttribute('id', 'botao-play-texto')
    botaoPlayTexto.setAttribute('class', 'd-none d-md-block col-md-2 col-lg-1 btn btn-success btn-sm')
    
    botaoStopTexto.setAttribute('id', 'botao-stop-texto')
    botaoStopTexto.setAttribute('class', 'd-none d-md-block col-md-2 col-lg-1 btn btn-danger btn-sm')

    botaoPlayTexto.innerText = 'iniciar'
    botaoStopTexto.innerText = 'encerrar'

    // Botao de iniciar e encerrar como icone
    botaoPlayIcone.setAttribute('id', 'botao-play-icone')
    botaoPlayIcone.setAttribute('class', 'd-md-none col-1 btn btn-success btn-sm')

    botaoStopIcone.setAttribute('id', 'botao-stop-icone')
    botaoStopIcone.setAttribute('class', 'd-md-none col-1 btn btn-danger btn-sm')
    
    botaoPlayIcone.innerHTML = '<i id="i-play-icone" class="bi bi-play-fill"></i>'
    botaoStopIcone.innerHTML = '<i id="i-stop-icone" class="bi bi-stop-fill"></i>'

    divCronometro.appendChild(inputCronometro)
    divCronometro.appendChild(spanCronometro)
    divCronometro.appendChild(botaoPlayTexto)
    divCronometro.appendChild(botaoPlayIcone)
    divCronometro.appendChild(botaoStopTexto)
    divCronometro.appendChild(botaoStopIcone)

    let sectionCronometro = document.getElementById('cronometros')
    sectionCronometro.appendChild(divCronometro)

    return sectionCronometro
}

function acaoPlay ()
{     

}

function eventosSecaoComplementar (objInteragido)
{
    console.log('flag 2')
    objInteragido.addEventListener('click', (e) => {
        console.log('flag 3')
        let objetoClicado = document.getElementById(e.target.id)

        if (objetoClicado)
        {
            let objetoClicadoBaseId = objetoClicado.id.split('-')[1]

            if (objetoClicadoBaseId === 'salvar')
            {
                console.log('flag 4')
                return true
            }
                
        }
    })
}

function alteraEstadoBotao (uso, forma, objetoClicado)
{
    console.log(objetoClicado)
    
    if (forma === 'texto')
    {
        switch (uso) 
        {
            case 'play':
                // Botao de play vira pause
                objetoClicado.classList.remove('btn-success')
                objetoClicado.classList.add('btn-secondary')
                objetoClicado.textContent = 'pausar'

                objetoClicado.setAttribute('id', 'botao-pause-texto')

                intervalo = setInterval(passaTempo, SEGUNDO)
                break
            
            case 'pause':
                clearInterval(intervalo)
                
                objetoClicado.classList.remove('btn-secondary')
                objetoClicado.classList.add('btn-success')
                
                objetoClicado.textContent = 'retomar'
                
                objetoClicado.setAttribute('id', 'botao-play-texto')

                break

            case 'stop':
                // Captura as informacoes de interesse
                cardObj.tituloAtividade = inputProjeto.value
                cardObj.tempoDespendido = cronometroTexto.textContent

                console.log(cardObj.tituloAtividade)
                console.log(cardObj.tempoDespendido)
                
                // Limpeza do cronometro
                clearInterval(intervalo)
                cronometroTexto.innerText = '00:00:00'    
                tempo.horas = 0
                tempo.minutos = 0
                tempo.segundos = 0
                
                // Restaura o cronometro para configuracoes originais
                botaoPlayTexto.setAttribute('id', 'botao-play-texto')
                botaoPlayIcone.setAttribute('id', 'botao-play-icone')
                botaoPlayTexto.classList.remove('btn-secondary')
                botaoPlayTexto.classList.add('btn-success')
                botaoPlayTexto.textContent = 'iniciar'
                botaoPlayIcone.classList.remove('btn-secondary')
                botaoPlayIcone.classList.add('btn-success')
                botaoPlayIcone.innerHTML = '<i class="bi bi-play-fill"></i>'
                inputProjeto.value = ''
                
                console.log('flag 1')

                secaoComplementar = capturaInfoComplementar()
                
                boolCriarCard = eventosSecaoComplementar(secaoComplementar)

                console.log('flag 5')

                console.log(boolCriarCard)

                if (boolCriarCard)
                {
                    console.log('flag 6')
                    criarCard()
                }
                    

                break
        }
    }
    else
    {
        switch (uso) 
        {
            case 'play':
                // Botao de play vira pause
                objetoClicado.classList.remove('btn-success')
                objetoClicado.classList.add('btn-secondary')
                objetoClicado.innerHTML = '<i class="bi bi-pause-fill"></i>'
                
                objetoClicado.setAttribute('id', 'botao-pause-icone')

                intervalo = setInterval(passaTempo, SEGUNDO)
                break
            
            case 'pause':
                clearInterval(intervalo)

                objetoClicado.classList.remove('btn-secondary')
                objetoClicado.classList.add('btn-success')
                objetoClicado.innerHTML = '<i class="bi bi-play-fill"></i>'

                objetoClicado.setAttribute('id', 'botao-play-icone')
                break

            case 'stop':
                
        }
    }

    
}

function execucaoEventosCronometro (evt)
{
    const FORMATO_BOTAO = 2
    const ACAO_BOTAO = 1
    let objetoClicado = evt.target.id.split('-')
    let botaoClicado = evt.target
    let inputProjeto = document.getElementById('input-projeto')

    switch (objetoClicado[FORMATO_BOTAO]) 
    {
        case 'texto':
            switch (objetoClicado[ACAO_BOTAO]) 
            {
                case 'play':
                    // Botao de play vira pause
                    botaoClicado.classList.remove('btn-success')
                    botaoClicado.classList.add('btn-secondary')
                    botaoClicado.textContent = 'pausar'
                    botaoClicado.setAttribute('id', 'botao-pause-texto')
                    intervalo = setInterval(passaTempo, SEGUNDO)
                    break;

                case 'pause':
                    clearInterval(intervalo)
                    botaoClicado.classList.remove('btn-secondary')
                    botaoClicado.classList.add('btn-success')
                    botaoClicado.textContent = 'retomar'
                    botaoClicado.setAttribute('id', 'botao-play-texto')
                    break;

                case 'stop':
                    // Captura as informacoes de interesse
                    cardObj.tituloAtividade = inputProjeto.value
                    cardObj.tempoDespendido = cronometroTexto.textContent
                    
                    // Limpeza do cronometro
                    clearInterval(intervalo)
                    cronometroTexto.innerText = '00:00:00'    
                    tempo.horas = 0
                    tempo.minutos = 0
                    tempo.segundos = 0
                    
                    // Restaura o cronometro para configuracoes originais
                    botaoClicado.setAttribute('id', 'botao-play-texto')
                    botaoClicado.classList.remove('btn-secondary')
                    botaoClicado.classList.add('btn-success')
                    botaoClicado.textContent = 'iniciar'
                    inputProjeto.value = ''

                    secaoComplementar = capturaInfoComplementar()
                    
                    boolCriarCard = eventosSecaoComplementar(secaoComplementar)

                    console.log('flag 5')

                    console.log(boolCriarCard)

                    if (boolCriarCard)
                    {
                        console.log('flag 6')
                        criarCard()
                    }
                    console.log('stop')
                    break;

                default:
                    console.log('Comportamento não esperado!')
                    break;
            }
            break;

        case 'icone':
            switch (objetoClicado[ACAO_BOTAO]) 
            {
                case 'play':
                    // Botao de play vira pause
                    if (botaoClicado.nodeName === 'I')
                        botaoClicado = document.getElementById('botao-play-icone')

                    botaoClicado.classList.remove('btn-success')
                    botaoClicado.classList.add('btn-secondary')
                    botaoClicado.innerHTML = '<i id="i-pause-icone" class="bi bi-pause-fill"></i>'
                    botaoClicado.setAttribute('id', 'botao-pause-icone')
                    intervalo = setInterval(passaTempo, SEGUNDO)
                    break

                case 'pause':
                    clearInterval(intervalo)
                    if (botaoClicado.nodeName === 'I')
                        botaoClicado = document.getElementById('botao-pause-icone')

                    botaoClicado.classList.remove('btn-secondary')
                    botaoClicado.classList.add('btn-success')
                    botaoClicado.innerHTML = '<i id="i-play-icone" class="bi bi-play-fill"></i>'
                    botaoClicado.setAttribute('id', 'botao-play-icone')
                    break

                case 'stop':
                    // Captura as informacoes de interesse
                    cardObj.tituloAtividade = inputProjeto.value
                    cardObj.tempoDespendido = cronometroTexto.textContent
                    
                    // Limpeza do cronometro
                    clearInterval(intervalo)
                    cronometroTexto.innerText = '00:00:00'    
                    tempo.horas = 0
                    tempo.minutos = 0
                    tempo.segundos = 0    
                    
                    // Restaura o cronometro para configuracoes originais
                    botaoClicado.setAttribute('id', 'botao-play-icone')
                    botaoClicado.classList.remove('btn-secondary')
                    botaoClicado.classList.add('btn-success')
                    botaoClicado.innerHTML = '<i id="i-play-icone" class="bi bi-play-fill"></i>'
                    inputProjeto.value = ''
                    secaoComplementar = capturaInfoComplementar()
                    boolCriarCard = eventosSecaoComplementar(secaoComplementar)
                    break;

                default:
                    console.log('default')
                    break;
            }
            break;
    
        default:
            console.log('Não foi possível identificar o formato.')
            break;
    }
}

// if (objetoClicado)
//     alteraEstadoBotao(objetoClicado.id.split('-')[1], objetoClicado.id.split('-')[2], objetoClicado) // uso - forma (ex: play - texto)


// Verifica se a página está pronta para ser manipulada
let sectionCronometro = criarSecaoCronometro()
// inicializaEventos()
sectionCronometro.addEventListener('click', evt => execucaoEventosCronometro(evt))