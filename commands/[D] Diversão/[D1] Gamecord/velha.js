module.exports = {
    name: "velha",
    aliases: ["jogodavelha", "jogo da velha", "Tic Tac Toe"],
    description: "Jogue jogo velha com seu amigo",
    usage:"velha <user>",
    code: `
    $djsEval[const { TicTacToe } = require('discord-gamecord');

const Game = new TicTacToe({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Jogo da velha',
    color: '#5865F2',
    statusTitle: 'Status',
    overTitle: 'Game Over'
  },
  emojis: {
    xButton: '❌',
    oButton: '🔵',
    blankButton: '➖'
  },
  mentionUser: true,
  timeoutTime: 60000,
  xButtonStyle: 'DANGER',
  oButtonStyle: 'PRIMARY',
  turnMessage: '{emoji} **›** É a vez do **{player}**.',
  winMessage: '{emoji} **›** **{player}** ganhou o jogo da velha.',
  tieMessage: 'O Jogo empatou! Ninguém ganhou o Jogo!',
  timeoutMessage: 'O Jogo ficou inacabado! Ninguém ganhou o Jogo!',
  playerOnlyMessage: 'Somente {player} e {opponent} podem usar esses botões.'
});

Game.startGame();
Game.on('gameOver', result => {
  console.log(result);  // =>  { result... }
});
]
$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** Mencione alguém para jogar!]
$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** Você não pode jogar contra você mesmo!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Velha] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}