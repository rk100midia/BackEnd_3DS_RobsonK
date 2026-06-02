export function alugarFilme(nomeFilme, dataAluguel, preco){
 return ` O filme ${nomeFilme} foi alugado no dia: ${dataAluguel}
 pelo valor ${preco}`
}

export function devolverFilme(nomeFilme, dataEntrega) {
    return `Precisa devolver o filme ${nomeFilme} até o
    dia ${dataEntrega}`
}

