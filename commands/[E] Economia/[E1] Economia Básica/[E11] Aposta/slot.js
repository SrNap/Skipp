module.exports = {
  name: "slot",
  $if: "old",
  description: "Aposte em um jogo de slot",
  usage: "slot <quantia>",
  code: `
$if[$randomText[perdeu;perdeu;perdeu;perdeu;perdeu;perdeu;perdeu;ganhou;ganhou;ganhou]==ganhou]
> <@$authorID>, você apostou **$noMentionMessage Cash** e **ganhou $multi[$noMentionMessage;2] Cash**! Confira a sequência abaixo.
$randomText[🍉 | 🍉 | 🍉; 🍎 | 🍎 | 🍎; 🍊 | 🍊 | 🍊; 🍋 | 🍋 | 🍋; 🍌 | 🍌 | 🍌; 🍓 | 🍓 | 🍓; 🍎 | 🍎 | 🍎; 🍉 | 🍉 | 🍉; 🍊 | 🍊 | 🍊; 🍌 | 🍌 | 🍌; 🍋 | 🍋 | 🍋; 🍓 | 🍓 | 🍓]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$multi[$noMentionMessage]];$authorID]

$else

> <@$authorID>, você apostou **$noMentionMessage Cash** e **perdeu $noMentionMessage Cash**! Confira a sequência abaixo.
$randomText[🍉 | 🍋 | 🍎; 🍎 | 🍊 | 🍌; 🍌 | 🍓 | 🍉; 🍓 | 🍋 | 🍊; 🍎 | 🍉 | 🍌; 🍊 | 🍓 | 🍋; 🍌 | 🍎 | 🍓; 🍉 | 🍊 | 🍋; 🍋 | 🍌 | 🍉; 🍓 | 🍎 | 🍊]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];$noMentionMessage];$authorID]

$endif

$onlyIf[$noMentionMessage<=$getGlobalUserVar[Cash;$authorID];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não possui essa quantia!]
$onlyIf[$noMentionMessage>=100;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode apostar uma quantia menor que **50 Cash**!]

$onlyIf[$isNumber[$noMentionMessage]==true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar uma quantia válida!]
$onlyIf[$noMentionMessage!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar uma quantia para apostar!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - slot]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
`
}