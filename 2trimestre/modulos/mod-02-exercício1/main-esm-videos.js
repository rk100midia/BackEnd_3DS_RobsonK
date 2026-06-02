import * as filme from "./mod-ems-video.js"

console.log(filme.alugarFilme('Homem-aranha', '25-02-2026',
     'R$25,00'))

console.log(filme.devolverFilme('Homem-aranha', '30-02-2026'))

console.log(filme.alugarFilme('Como eu era antes de você', 
    '30-11-2026', 'R$25,00'))

console.log(filme.devolverFilme('Como eu era antes de você',
     '10-12-2026'))
