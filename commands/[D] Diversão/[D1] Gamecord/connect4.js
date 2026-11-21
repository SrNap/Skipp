module.exports = {
  name: "connect 4",
  aliases: ["connect4", "conectar4"],
  description: "Jogue connect 4 com seu amigo!",
  usage:"connect 4",
  code: `
  $djsEval[const { Connect4 } = require('discord-gamecord');

const Game = new Connect4({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Connect4',
    statusTitle: 'Status',
    color: '#5865F2'
  },
  emojis: {
    board: '⚪',
    player1: '🔴',
    player2: '🟡'
  },
  mentionUser: true,
  timeoutTime: 60000,
  buttonStyle: 'PRIMARY',
  turnMessage: '{emoji} É a vez do jogador **{player}**.',
  winMessage: '{emoji} **{player}** ganhou o jogo Connect4.',
  tieMessage: 'O jogo empatou! Ninguém ganhou o jogo!',
  timeoutMessage: 'O jogo ficou inacabado! Ninguém ganhou o jogo!',
  playerOnlyMessage: 'Apenas {player} e {opponent} podem usar estes botões.'
});

Game.startGame();
Game.on('gameOver', result => {
  console.log(result);  // =>  { result... }
});
]
$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** Mencione alguém para jogar!]
$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** Você não pode jogar contra você mesmo!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Connect4]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
    `
}