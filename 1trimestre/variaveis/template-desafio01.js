// crie um perfil de super-herói que interpole
// uma frase e um objeto com as características
// de um herói a sua escolha
const nome = "Técnico"
const profissional = {
    profissão: "eletricista",
    cursos: "elétrica",
    salário: "de R$1.500 a R$4.000" 
}
const perfil = `\nOlá ${nome}, \nvocê é ${profissional.profissão}, \nfaz curso de ${profissional.cursos} \ne ganha ${profissional.salário} dependendo da sua formação`
console.log(perfil)