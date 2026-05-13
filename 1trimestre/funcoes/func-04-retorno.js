// funções de retorno exigem a
//cláusula/termo 'return
//isso permite fazer operações 
//sequenciais com o resultado
//armazenar funções em variáveis

function sobraDosalario(meuSalario){
    const contaDeluz = 150.0
    const aluguel = 1400.0
    const resto = meuSalario - (contaDeluz + aluguel)
   return `o que restou no fim do mês ${resto.toFixed(2).replace('.',',')}`
}
const minhasSobras = sobraDosalario(1700.0)
// teste - experimento
console.log(sobraDosalario(5000.0))
console.log(sobraDosalario(10000.00))
