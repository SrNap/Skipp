module.exports = {
    name: "ppt",
    aliases: ["pedrapapeltesoura", "RockPaperScissors"],
    description: "Jogue pedra papel e tesoura com seu amigo",
    usage:"ppt <user>",
    code: `
    $djsEval[const { RockPaperScissors } = require('discord-gamecord');

const Game = new RockPaperScissors({
  message: message,
  isSlashGame: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Pedra, papel, tesoura',
    color: '#5865F2',
    description: 'Pressione o botão abaixo para fazer uma escolha.'
  },
  buttons: {
    rock: 'Pedra',
    paper: 'Papel',
    scissors: 'Tesoura'
  },
  emojis: {
    rock: '🌑',
    paper: '📄',
    scissors: '✂️'
  },
  mentionUser: true,
  timeoutTime: 60000,
  buttonStyle: 'PRIMARY',
  pickMessage: 'Você escolhe {emoji}.',
  winMessage: '**{player}** ganhou o jogo! Parabéns!',
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

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Ppt]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
    `
}