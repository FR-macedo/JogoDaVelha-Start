# JogoDaVelha-Start

### Exercitando lógica de programação com javascript

Esse jogo da velha simples construído com javascript foi feito para o curso de BACKEND do projeto Start no dia 21/09/24 como forma de exercitar o nosso aprendizado de lógica de programação a pedido do professor Felipe.

### Membros da equipe

- Francisco Macedo
- Ailton Neto
- Derick Santos
- Breno do Nascimento
- Luan Carlos
- Ronaldo Rodrigues

### Como rodar a aplicação

1. Clone o repositório na sua máquina, rodando este comando no terminal

```
git clone https://github.com/FR-macedo/JogoDaVelha-Start.git
```

2. Instale as dependencias necessárias, rodando este comando no terminal

```
npm i
```

3. Rode a aplicação utilizando este comando no terminal (necessária a instalação prévia do NODE)

```
npm run start
```

### Sobre a construção da aplicação

1. Função ImprimirTabuleiro()

    - Essa função servirá para imprimir o tabuleiro, ela itera por cada item de cada coluna com um loop for.

2. Função checarVItoria()

    - Essa função verifica se as celulas da matriz possuem os mesmo valores em linhas retas. Ela também verifica as duas diagonais.

3. Função tabuleiroLotado()

    - Essa função verifica o empate, caso todas as celulas estejam preenchidas ele retorna "true" e encerra a partida.

4. Função jogar()

    - Essa função é a "main" do nosso jogo, ela possui toda a lógica da aquisição dos inputs, da checagem da vitoria/empate e também realiza a troca entre os jogadores.
