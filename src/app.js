const Scanner = require("readline-sync");

let tabuleiro = [
    ["","",""],
    ["","",""],
    ["","",""]
]

let jogadorAtual = "X";

function imprimirTabuleiro(){
    console.log("-----------")

    for (let i = 0; i < 3; i++) {
        console.log(
            "|",tabuleiro[i][0],"|",tabuleiro[i][1],"|",tabuleiro[i][2],"|"
        )
        console.log("-----------")
    }

}

function checarVitoria(jogadorAtual){
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] === jogadorAtual || tabuleiro[i][1] === jogadorAtual || tabuleiro[i][2] === jogadorAtual) {return true}
        if (tabuleiro[0][i] === jogadorAtual || tabuleiro[1][i] === jogadorAtual || tabuleiro[2][i] === jogadorAtual) {return true}
    }
        if (tabuleiro[0][0] === jogadorAtual || tabuleiro[1][1] === jogadorAtual || tabuleiro[2][2] === jogadorAtual) { return true}
        if (tabuleiro[0][2] === jogadorAtual || tabuleiro[1][1] === jogadorAtual || tabuleiro[2][0] === jogadorAtual) { return true}

    return false;

}

function tabuleiroLotado(){
    tabuleiro.every(linha )
}

function jogar(){
    imprimirTabuleiro();

    let linha, coluna;

}
