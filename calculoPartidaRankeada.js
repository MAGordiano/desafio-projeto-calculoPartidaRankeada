// Variaveis Globais
let vitoriasJogador = 155
let derrotasJogador = 59

function mensagem(){
    let saldoJogador = saldoVitorias(vitoriasJogador, derrotasJogador)
    classificacao(saldoJogador)
    console.log("O Herói tem de saldo de " + saldoJogador + ". Está no nível " + classificacao())
}

function saldoVitorias(vitorias, derrotas){
   diferenca = vitorias - derrotas

   return diferenca
}

function classificacao(saldo){
    let nivel
    if (saldo <= 10){
        nivel = "Ferro"
    } else if (saldo > 10 && saldo <= 20){
        nivel = "Bronze"
    } else if (saldo > 20 && saldo <= 50){
        nivel = "Prata"
    } else if (saldo > 50 && saldo <= 80){
        nivel = "Ouro"
    } else if (saldo > 80 && saldo <= 90){
        nivel = "Diamante"
    } else if (saldo > 90 && saldo <= 100){
        nivel = "Lendário"
    } else{
        nivel = "Imortal"
    }

    return nivel
}
 
mensagem()
