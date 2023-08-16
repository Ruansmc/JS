// > LAÇOS CONDICIONAIS

const input = require('readline-sync')

const numero_sorteado = 5;

const numero = Number(input.question('Qual numero voce escolhe?'))9

console.log(numero, typeof numero)

if (numero === numero_sorteado) {
    console.log('Voce acertou')
}
else {
    console.log('Voce Errou')
}
// Troque a estrutura do if and else por while

while (numero !== numero_sorteado) {
    console.log('Você errou o número. Tente novamente...')

}

console.log('Voce acertou!!!') // Quando o usuário acertar o número ela vai apresentar em tela "Voce acertou!"

// A variável não pode ser constante (const), ela tem que ser (let) pois o número vai mudar.,
// let numero = Numbero( input.question('Qual numero voce escolhe?'))