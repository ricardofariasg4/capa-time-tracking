import * as object from '../model/objects.js'

function criarCard () 
{
    // <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
    //     <div class="card-header">Header</div>
    //     <div class="card-body">
    //         <h5 class="card-title">Dark card title</h5>
    //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     </div>
    // </div>

    console.log('criar card')

    let divCol = document.createElement('div')
    let card = document.createElement('div')
    let cardHeader = document.createElement('div')
    let cardBody = document.createElement('div')
    let cardTitle = document.createElement('h5')
    let cardText = document.createElement('p')
    let divRowCard = document.createElement('div')
    let divColCardEmoji = document.createElement('div')
    let divColCardStatus = document.createElement('div')
    let divColCardProjeto = document.createElement('div')

    divCol.setAttribute('class', 'col')
    card.setAttribute('class', 'card-group')
    card.setAttribute('class', 'card text-bg-dark mb-3')
    card.setAttribute('style', 'max-width: 20rem;')
    cardHeader.setAttribute('class', 'card-header')
    cardBody.setAttribute('class', 'card-body')
    cardTitle.setAttribute('class', 'card-title')
    cardText.setAttribute('class', 'card-text')

    divRowCard.setAttribute('class', 'row')
    divColCardEmoji.setAttribute('class', 'col-12')
    divColCardStatus.setAttribute('class', 'col-12')
    divColCardProjeto.setAttribute('class', 'col-12')

    divColCardEmoji.innerText = object.cardObj.humorMedio
    divColCardStatus.innerText = object.cardObj.status
    divColCardProjeto.innerText = object.cardObj.categoriaProjeto
    cardTitle.innerText = object.cardObj.tituloAtividade
    cardText.innerText = object.cardObj.descricaoAtividade
    cardHeader.innerText = 'Tempo despendido: '+object.cardObj.tempoDespendido

    divRowCard.appendChild(divColCardEmoji)
    divRowCard.appendChild(divColCardStatus)
    divRowCard.appendChild(divColCardProjeto)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(divRowCard)
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

    let opcoesEmojis = ["🧐 encontre sua reação", "😃 Isso foi divertido", "😑 Um pouco entediante", "🙄 Aturei...", "😡 Vai dar não"]

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
        let option = document.createElement('option')
        option.value = i
        option.text = opcoesEmojis[i]
        selectEmoji.appendChild(option)
    }

    divEmoji.appendChild(labelEmoji)
    divEmoji.appendChild(selectEmoji)
    secaoInfoComplementar.appendChild(divEmoji)

    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Captura as opções de projeto do backend (começar backend)

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

    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Captura as opções de projeto do backend (começar backend)

    let opcoesStatus = ["✅ finalizado", "❌ cancelado", "⏳ em andamento"]

    let divStatus = document.createElement('div')
    let labelStatus = document.createElement('label')
    let selectStatus = document.createElement('select')
    let opcaoSelecionadaStatus = document.createElement('option')

    // Configuração da div status
    divStatus.setAttribute('id', 'div-status')
    divStatus.setAttribute('class', 'col-12 col-lg-4 mb-3')

    // Configuração label status
    labelStatus.setAttribute('for', 'seletor-status')
    labelStatus.setAttribute('id', 'label-status')
    labelStatus.setAttribute('class', 'form-label')
    labelStatus.innerText = 'progresso da atividade *'

    // Configuração do select
    selectStatus.setAttribute('id', 'seletor-status')
    selectStatus.setAttribute('class', 'form-select')
    selectStatus.setAttribute('aria-label', 'Status')

    // Configuração da opção selecionada (padrão)
    opcaoSelecionadaStatus.value = 0
    opcaoSelecionadaStatus.text = opcoesStatus[0]
    selectStatus.appendChild(opcaoSelecionadaStatus)
    
    for (let i=1; i<opcoesStatus.length; i++)
    {
        let option = document.createElement('option')
        option.value = i
        option.text = opcoesStatus[i]
        selectStatus.appendChild(option)
    }
    
    divStatus.appendChild(labelStatus)
    divStatus.appendChild(selectStatus)
    secaoInfoComplementar.appendChild(divStatus)

    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
    // console.log('criarSecaoCronometro')
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

// Exporta as funções
export { criarCard, capturaInfoComplementar, criarSecaoCronometro }