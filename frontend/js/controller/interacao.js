import { criarCard, capturaInfoComplementar } from "../view/firstRender.js"
import * as object from "../model/objects.js"

var intervaloID = 0

// Funções abaixo
function passaTempo () 
{
    if (object.tempo.minutos === 60) {
        object.tempo.minutos = 0 
        object.tempo.horas++
    }
    
    if (object.tempo.segundos === 60) {
        object.tempo.segundos = 0
        object.tempo.minutos++
    }
    
    object.tempo.segundos++
    document.getElementById('cronometro-texto').innerText = `${object.tempo.horas.toString().padStart(2, '0')}:${object.tempo.minutos.toString().padStart(2, '0')}:${object.tempo.segundos.toString().padStart(2, '0')}`
}

function eventosSecaoComplementar ()
{
    // const cardObj = {
    //     tituloAtividade: null,
    //     descricaoAtividade: null,
    //     humorMedio: null, 
    //     status: null,
    //     categoriaProjeto: null,
    //     data: null,
    //     tempoDespendido: null
    // }

    // Percorrendo o cardObj
    let botaoSalvarComplementar = document.getElementById('botao-salvar-complementar')
    let botaoCancelarComplementar = document.getElementById('botao-cancelar-complementar')
    let resumoAtividade = document.getElementById('text-area-resumo')
    let emoji = document.getElementById('seletor-emoji')
    let status = document.getElementById('seletor-status')
    let seletorProjeto = document.getElementById('seletor-projeto')

    // Necessita de correção para receber o restante das propriedades
    botaoSalvarComplementar.onclick = () => {
        object.cardObj.descricaoAtividade = resumoAtividade.value
        object.cardObj.humorMedio = emoji.options[emoji.value].text
        object.cardObj.categoriaProjeto = seletorProjeto.options[seletorProjeto.value].text
        object.cardObj.status = status.options[status.value].text
        let data = new Date()
        
        const dia = String(data.getDate()).padStart(2, '0')
        const mes = String(data.getMonth() + 1).padStart(2, '0')
        const ano = data.getFullYear()

        const dataFormatada = `${dia}/${mes}/${ano}`

        object.cardObj.data = dataFormatada
        
        const arrayCardObj = Object.entries(object.cardObj)

        arrayCardObj.forEach(element => {
            console.log(element)
        });

        criarCard()
    }

    botaoCancelarComplementar.onclick = () => {
        // Limpa o Objeto object.cardObj  
        for (let key in object.cardObj) {
            object.cardObj[key] = null
        }

        // Reload na página
        location.reload()
    }
}

function execucaoEventosCronometro (evt)
{
    // Esses já existem antes
    let botaoPauseIcone = document.getElementById('botao-pause-icone')
    let botaoPauseTexto = document.getElementById('botao-pause-texto')
    let botaoPlayTexto = document.getElementById('botao-play-texto')
    let botaoPlayIcone = document.getElementById('botao-play-icone')
    
    let objetoClicado = evt.target.id.split('-')
    let inputProjeto = document.getElementById('input-projeto')
    let cronometroTexto = document.getElementById('cronometro-texto') 

    switch (objetoClicado[object.ACAO_BOTAO]) 
    {
        // Botão play vira pause
        case 'play':
            // Caso botão texto
            botaoPlayTexto.classList.remove('btn-success')
            botaoPlayTexto.classList.add('btn-secondary')
            botaoPlayTexto.textContent = 'pausar'
            botaoPlayTexto.setAttribute('id', 'botao-pause-texto')
            intervaloID = setInterval(passaTempo, object.SEGUNDO)

            // Caso botão icone
            botaoPlayIcone.classList.remove('btn-success')
            botaoPlayIcone.classList.add('btn-secondary')
            botaoPlayIcone.innerHTML = '<i id="i-pause-icone" class="bi bi-pause-fill"></i>'
            botaoPlayIcone.setAttribute('id', 'botao-pause-icone')
            break;

        // Carga do botão pause só existe no ato do click
        case 'pause':
            clearInterval(intervaloID)    
            
            // Botão pause vira play
            botaoPauseTexto.classList.remove('btn-secondary')
            botaoPauseTexto.classList.add('btn-success')
            botaoPauseTexto.textContent = 'retomar'
            botaoPauseTexto.setAttribute('id', 'botao-play-texto')

            botaoPauseIcone.classList.remove('btn-secondary')
            botaoPauseIcone.classList.add('btn-success')
            botaoPauseIcone.innerHTML = '<i id="i-play-icone" class="bi bi-play-fill"></i>'
            botaoPauseIcone.setAttribute('id', 'botao-play-icone')
            break;

        case 'stop':
            // Captura as informacoes de interesse
            object.cardObj.tituloAtividade = inputProjeto.value
            object.cardObj.tempoDespendido = cronometroTexto.textContent
            
            // Limpeza do cronometro
            clearInterval(intervaloID)
            inputProjeto.value = ''
            cronometroTexto.innerText = '00:00:00'
            object.tempo.horas = 0
            object.tempo.minutos = 0
            object.tempo.segundos = 0
            
            // Restaura o cronometro para configuracoes originais
            if (botaoPlayTexto || botaoPlayIcone)
            {
                botaoPlayTexto.setAttribute('id', 'botao-play-texto')
                botaoPlayTexto.classList.remove('btn-secondary')
                botaoPlayTexto.classList.add('btn-success')
                botaoPlayTexto.textContent = 'iniciar'
                
                botaoPlayIcone.setAttribute('id', 'botao-play-icone')
                botaoPlayIcone.classList.remove('btn-secondary')
                botaoPlayIcone.classList.add('btn-success')
                botaoPlayIcone.innerHTML = '<i id="i-play-icone" class="bi bi-play-fill"></i>'
            }

            if (botaoPauseTexto || botaoPauseIcone)
            {
                botaoPauseTexto.setAttribute('id', 'botao-play-texto')
                botaoPauseTexto.classList.remove('btn-secondary')
                botaoPauseTexto.classList.add('btn-success')
                botaoPauseTexto.textContent = 'iniciar'

                botaoPauseIcone.setAttribute('id', 'botao-play-texto')
                botaoPauseIcone.classList.remove('btn-secondary')
                botaoPauseIcone.classList.add('btn-success')
                botaoPauseIcone.innerHTML = '<i id="i-play-icone" class="bi bi-play-fill"></i>'
            }

            let secaoComplementar = capturaInfoComplementar()
            eventosSecaoComplementar(secaoComplementar)
            break;

        default:
            console.log('Comportamento não esperado!')
            break;
    }
}

// Exporta a execução de eventos do cronometro
export { eventosSecaoComplementar, execucaoEventosCronometro }