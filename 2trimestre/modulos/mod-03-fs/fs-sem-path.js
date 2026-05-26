const fs = require('fs')

// console.log(fs)

//const arquivo = fs.readFileSync(`./readme.md`, `putf-8`)
///workspaces/BackEnd_3DS_RobsonK/2trimestre/modulos/mod-03-fs/readme.md
//2trimestre/modulos/mod-03-fs/readme.md

const arquivoFinal = fs.readFileSync (__dirname +"/readme.md", 'utf-8')
console.log(arquivoFinal)