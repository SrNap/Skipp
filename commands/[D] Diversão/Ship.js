module.exports = {
  name: "ship",
  aliases: ['shippar'],
  description: "Veja se um casal é compatível ou não!",
  usage: "ship <user1> <user2>",
  $if: "old",
  code: `
$clientTyping
$reply

❤️ **Hmmm, será que temos um novo casal aqui?** ❤️
\`$username[$mentioned[1;false]]\` + \`$username[$mentioned[2;false]]\` = **$random[0;100]%** de chance de dar certo!
$if[$random[0;100]==100]
💘 UAU! Vocês são literalmente almas gêmeas! É um amor escrito nas estrelas! 🌟💍
$elseIf[$random[0;100]>=80]
😍 Que casal perfeito! Vocês combinam demais, só falta oficializar isso! 💞
$endelseIf
$elseIf[$random[0;100]>=60]
😊 Existe química entre vocês, mas talvez precise de um empurrãozinho! 👀
$endelseIf
$elseIf[$random[0;100]>=40]
😬 Hmmm... Dá pra ver que não é o casal ideal, mas quem sabe? 🤔
$endelseIf
$elseIf[$random[0;100]>=20]
💀 O amor aqui tá complicado... Melhor manter só a amizade! 😅
$endelseIf
$else
💔 NÃO! Simplesmente não! Vocês juntos? Isso nunca vai dar certo! 🚫
$endif

$attachCanvas[ship]
  $fillText[ship;$random[0;100]%;#ffffff;50px Poppins-Bold;323;185]
  $drawImage[ship;./assets/images/layoutship.png;0;0;730;346]
  $drawImage[ship;$userAvatar[$mentioned[1]];75;70;206;206;103]
  $drawImage[ship;$userAvatar[$mentioned[2]];453;70;206;206;103]

  $createCanvas[ship;730;346]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Ship]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$onlyIf[$mentioned[1]!=$mentioned[2];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode shippar alguém consigo mesmo!]
$onlyIf[$mentioned[2]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você precisa mencionar dois usuários!]
$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você precisa mencionar dois usuários!]
`
}