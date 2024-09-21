const Scanner = require("readline-sync");

let tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

function imprimirTabuleiro() {
  console.log("-----------");

  for (let i = 0; i < 3; i++) {
    console.log(
      "|",
      tabuleiro[i][0],
      "|",
      tabuleiro[i][1],
      "|",
      tabuleiro[i][2],
      "|"
    );
    console.log("-----------");
  }
}

function checarVitoria(jogadorAtual) {
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[i][0] === jogadorAtual &&
      tabuleiro[i][1] === jogadorAtual &&
      tabuleiro[i][2] === jogadorAtual
    ) {
      return true;
    }
    if (
      tabuleiro[0][i] === jogadorAtual &&
      tabuleiro[1][i] === jogadorAtual &&
      tabuleiro[2][i] === jogadorAtual
    ) {
      return true;
    }
  }
  if (
    tabuleiro[0][0] === jogadorAtual &&
    tabuleiro[1][1] === jogadorAtual &&
    tabuleiro[2][2] === jogadorAtual
  ) {
    return true;
  }
  if (
    tabuleiro[0][2] === jogadorAtual &&
    tabuleiro[1][1] === jogadorAtual &&
    tabuleiro[2][0] === jogadorAtual
  ) {
    return true;
  }

  return false;
}

function tabuleiroLotado() {
  return tabuleiro.every(row => row.every(cell => cell !== " "));
}

function jogar() {
  let jogadorAtual = "X";
  let linha, coluna;

  while (true) {
    imprimirTabuleiro();

    console.log(
      "Vez do jogador ",
      jogadorAtual,
      ", informe as coordenadas do seu próximo movimento (um digito por vez)"
    );

    do {
      linha = Scanner.questionInt("Insira a Linha: ");
      coluna = Scanner.questionInt("insira a Coluna: ");
    } while (
      linha < 0 ||
      linha > 2 ||
      coluna < 0 ||
      coluna > 2 ||
      tabuleiro[linha][coluna] !== " "
    );

    tabuleiro[linha][coluna] = jogadorAtual;

    if (checarVitoria(jogadorAtual)) {
      imprimirTabuleiro();
      console.log("O jogador ", jogadorAtual, " venceu a partida!");
      break;
    }

    if (tabuleiroLotado()) {
      imprimirTabuleiro();
      console.log("Empate!");
      break;
    }

    jogadorAtual = jogadorAtual === "X" ? "0" : "X";
  }
}

jogar();
