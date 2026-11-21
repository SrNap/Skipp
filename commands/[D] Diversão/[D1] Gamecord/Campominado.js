module.exports = {
  name: "CampoMinado",
  aliases: ["Minesweeper", "Campo Minado"],
  description: "Jogue o jogo Campo Minado",
  usage: "CampoMinado",
  code: `
$djsEval[const { Minesweeper } = require('discord-gamecord');

const Game = new Minesweeper({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Minesweeper',
    color: '#5865F2',
    description: 'Click on the buttons to reveal the blocks except mines.'
  },
  emojis: { flag: '🚩', mine: '💣' },
  mines: 5,
  timeoutTime: 60000,
  winMessage: 'Você venceu o jogo! Você evitou todas as minas.',
  loseMessage: 'Você perdeu o jogo! Cuidado com as minas da próxima vez.',
  playerOnlyMessage: 'Somente {player} pode usar esses botões.'
});

Game.startGame();
Game.on('gameOver', result => {
  console.log(result);  // =>  { result... }
});]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - CampoMinado]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}