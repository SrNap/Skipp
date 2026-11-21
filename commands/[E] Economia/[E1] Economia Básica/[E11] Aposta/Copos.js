module.exports = [{
  name: "copos",
  aliases: ["copo"],
  description: "Aposte em copos e ganhe dinheiro",
  usage: "copos <valor>",
  code: `
$title[🥛 Jogo dos Copos]
$description[Adivinhe em qual copo a bolinha está! Escolha: \`[1, 2, 3]\`

> 🥛🥛🥛]
$color[$getVar[Color]]
$footer[Valor apostado: $message[1];$authorAvatar]
$addTimestamp

$onlyIf[$isNumber[$noMentionMessage]==true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, insira um número válido para apostar!]
$onlyIf[$noMentionMessage>=100;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode apostar uma quantia menor que **100 Cash**!]
$onlyIf[$getGlobalUserVar[Cash]>=$noMentionMessage;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **Cash** suficiente para isso!]
$onlyIf[$noMentionMessage!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar uma quantia para apostar!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Copos]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]

$addButton[1;;primary;copos3_$authorID_$noMentionMessage;false;3️⃣]
$addButton[1;;primary;copos2_$authorID_$noMentionMessage;false;2️⃣]
$addButton[1;;primary;copos1_$authorID_$noMentionMessage;false;1️⃣]
`,
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
$if[$randomText[perder;perder;perder;perder;perder;perder;perder;ganhar;ganhar;ganhar]==ganhar]

$interactionUpdate[{newEmbed:{title:🥛 Jogo dos Copos}{description:Adivinhe em qual copo a bolinha está! Escolha: \`[1, 2, 3]\`

> ✅🥛🥛

🥛 **Sua Escolha**: \`1\`
### 🥳 Você ganhou!
Você ganhou <:Cash:1297005054099849247>**$numberSeparator[$multi[$advancedTextSplit[$interactionData[customId];_;3];2];.] Cash**!
}{color:#56e226}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$multi[$advancedTextSplit[$interactionData[customId];_;3];2]];$authorID]

$else

$interactionUpdate[{newEmbed:{title:🥛 Jogo dos Copos}{description:Adivinhe em qual copo a bolinha está! Escolha: \`[1, 2, 3]\`

> ❌🥛🥛

🥛 **Sua Escolha**: \`1\`
❌ **Escolha certa**: \`$randomText[2;3]\`
### 😭 Você perdeu!
Você perdeu <:Cash:1297005054099849247>**$numberSeparator[$advancedTextSplit[$interactionData[customId];_;3];.] Cash**!
}{color:#e22626}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];$advancedTextSplit[$interactionData[customId];_;3]];$authorID]

$endif

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==copos1;]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
$if[$randomText[perder;perder;perder;perder;perder;perder;perder;ganhar;ganhar;ganhar]==ganhar]

$interactionUpdate[{newEmbed:{title:🥛 Jogo dos Copos}{description:Adivinhe em qual copo a bolinha está! Escolha: \`[1, 2, 3]\`

> 🥛✅🥛

🥛 **Sua Escolha**: \`2\`
### 🥳 Você ganhou!
Você ganhou <:Cash:1297005054099849247>**$numberSeparator[$multi[$advancedTextSplit[$interactionData[customId];_;3];2];.] Cash**!
}{color:#56e226}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$multi[$advancedTextSplit[$interactionData[customId];_;3];2]];$authorID]

$else

$interactionUpdate[{newEmbed:{title:🥛 Jogo dos Copos}{description:Adivinhe em qual copo a bolinha está! Escolha: \`[1, 2, 3]\`

> 🥛❌🥛

🥛 **Sua Escolha**: \`2\`
❌ **Escolha certa**: \`$randomText[1;3]\`
### 😭 Você perdeu!
Você perdeu <:Cash:1297005054099849247>**$numberSeparator[$advancedTextSplit[$interactionData[customId];_;3];.] Cash**!
}{color:#e22626}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];$advancedTextSplit[$interactionData[customId];_;3]];$authorID]

$endif

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==copos2;]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
$if[$randomText[perder;perder;perder;perder;perder;perder;perder;ganhar;ganhar;ganhar]==ganhar]

$interactionUpdate[{newEmbed:{title:🥛 Jogo dos Copos}{description:Adivinhe em qual copo a bolinha está! Escolha: \`[1, 2, 3]\`

> 🥛🥛✅

🥛 **Sua Escolha**: \`3\`
### 🥳 Você ganhou!
Você ganhou <:Cash:1297005054099849247>**$numberSeparator[$multi[$advancedTextSplit[$interactionData[customId];_;3];2];.] Cash**!
}{color:#56e226}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$multi[$advancedTextSplit[$interactionData[customId];_;3];2]];$authorID]

$else

$interactionUpdate[{newEmbed:{title:🥛 Jogo dos Copos}{description:Adivinhe em qual copo a bolinha está! Escolha: \`[1, 2, 3]\`

> 🥛🥛❌

🥛 **Sua Escolha**: \`3\`
❌ **Escolha certa**: \`$randomText[1;2]\`
### 😭 Você perdeu!
Você perdeu <:Cash:1297005054099849247>**$numberSeparator[$advancedTextSplit[$interactionData[customId];_;3];.] Cash**!
}{color:#e22626}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];$advancedTextSplit[$interactionData[customId];_;3]];$authorID]

$endif

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==copos3;]
`
}]