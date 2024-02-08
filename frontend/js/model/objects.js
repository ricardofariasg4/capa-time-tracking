const SEGUNDO = 1000
const MINUTO = SEGUNDO * 60
const HORA = MINUTO * 60
const ACAO_BOTAO = 1

const cardObj = {
  tituloAtividade: null,
  descricaoAtividade: null,
  humorMedio: null, 
  status: null,
  categoriaProjeto: null,
  data: null,
  tempoDespendido: null
}

const pessoaObj = {
  nome: null,
  curso: null,
  cargo: null,
  grupo: null
}

const tempo = {
  horas: 0,
  minutos: 0,
  segundos: 0
}

// Exporta tudo
export { SEGUNDO, MINUTO, HORA, ACAO_BOTAO, cardObj, pessoaObj, tempo }