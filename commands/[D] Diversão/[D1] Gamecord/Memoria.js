module.exports = {
  name: "memória",
  aliases: ["memory", "jogodamemoria", "memoria"],
  description: "Jogue o jogo da memória",
  usage: "memória",
  code: `
  $djsEval[const { MatchPairs } = require('discord-gamecord');

const Game = new MatchPairs({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Match Pairs',
    color: '#5865F2',
    description: '**Clique nos botões para combinar os emojis com seus pares.**'
  },
  timeoutTime: 60000,
  emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
  winMessage: '**Você ganhou o jogo! Você virou um total de \`{tilesTurned}\` peças.**',
  loseMessage: '**Você perdeu o jogo! Você virou um total de \`{tilesTurned}\` peças.**',
  playerOnlyMessage: 'Somente {player} pode usar esses botões.'
});

Game.startGame();
Game.on('gameOver', result => {
  console.log(result);  // =>  { result... }
});]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Memória]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
  `
}