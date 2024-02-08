import { criarSecaoCronometro } from "./view/firstRender.js"
import { execucaoEventosCronometro } from "./controller/interacao.js"

console.log('index.js')
let sectionCronometro = criarSecaoCronometro()
sectionCronometro.addEventListener('click', evt => execucaoEventosCronometro(evt))