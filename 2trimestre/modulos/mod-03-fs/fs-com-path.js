// importar PATH e FS
// Path possui (join para juntar caminhos e resolve
// para deduzir subdiretórios e S.O.)
const fs = require ('fs')
const path = require('path')

//Salvar o Caminho em uma variável
//const caminho = path.join(__dirname, 'README.md')
try{
    const caminho = path .resolve(__dirname, 'README.md')//Abrir, ler, deletar, editar
const arquivo = fs.readFileSync (caminho, 'utf-8')

console.log(arquivo)
} catch (erro) {
 console.log(erro)
}

const caminho = path .resolve(__dirname, 'README.md')//Abrir, ler, deletar, editar
const arquivo = fs.readFileSync (caminho, 'utf-8')

console.log(arquivo)