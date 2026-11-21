module.exports = [{
  name: "roleta",
  aliases: ["roulette"],
  description: "Aposte em números da roleta e ganhe cash",
  usage: "roleta <valor>",
  code: `
$title[<a:Roleta:1363688647446233278> Roleta]
$description[Escolha um número da roleta: \`[1, 2, 3, 4, 5]\`

> 1️⃣2️⃣3️⃣4️⃣5️⃣]
$color[$getVar[Color]]
$footer[Valor apostado: $message[1];$authorAvatar]
$addTimestamp

$onlyIf[$isNumber[$noMentionMessage]==true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, insira um número válido para apostar!]
$onlyIf[$noMentionMessage>=100;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode apostar uma quantia menor que **100 Cash**!]
$onlyIf[$getGlobalUserVar[Cash]>=$noMentionMessage;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **Cash** suficiente para isso!]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$noMentionMessage!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar uma quantia para apostar!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Roleta]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]

$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}

$addButton[1;;primary;roleta5_$authorID_$noMentionMessage;false;5️⃣]
$addButton[1;;primary;roleta4_$authorID_$noMentionMessage;false;4️⃣]
$addButton[1;;primary;roleta3_$authorID_$noMentionMessage;false;3️⃣]
$addButton[1;;primary;roleta2_$authorID_$noMentionMessage;false;2️⃣]
$addButton[1;;primary;roleta1_$authorID_$noMentionMessage;false;1️⃣]

`,
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
$if[$randomText[perder;perder;perder;perder;perder;perder;perder;ganhar;ganhar;ganhar]==ganhar]

$interactionUpdate[{newEmbed:{title:<a:Roleta:1363688647446233278> Roleta}{description:Escolha um número da roleta: \`[1, 2, 3, 4, 5]\`

> ✅2️⃣3️⃣4️⃣5️⃣

<a:Roleta:1363688647446233278> **Sua Escolha**: \`1\`
### 🥳 Você ganhou!
Você ganhou <:Cash:1297005054099849247>**$numberSeparator[$multi[$advancedTextSplit[$interactionData[customId];_;3];2];.] Cash**!
}{color:#56e226}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$multi[$advancedTextSplit[$interactionData[customId];_;3];2]];$authorID]

$else

$interactionUpdate[{newEmbed:{title:<a:Roleta:1363688647446233278> Roleta}{description:Escolha um número da roleta: \`[1, 2, 3, 4, 5]\`

> ❌2️⃣3️⃣4️⃣5️⃣

<a:Roleta:1363688647446233278> **Sua Escolha**: \`1\`
❌ **Escolha certa**: \`$randomText[2;3;4;5]\`
### 😭 Você perdeu!
Você perdeu <:Cash:1297005054099849247>**$numberSeparator[$advancedTextSplit[$interactionData[customId];_;3];.] Cash**!
}{color:#e22626}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];$advancedTextSplit[$interactionData[customId];_;3]];$authorID]

$endif

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==roleta1;]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
$if[$randomText[perder;perder;perder;perder;perder;perder;perder;ganhar;ganhar;ganhar]==ganhar]

$interactionUpdate[{newEmbed:{title:<a:Roleta:1363688647446233278> Roleta}{description:Escolha um número da roleta: \`[1, 2, 3, 4, 5]\`

> 1️⃣✅3️⃣4️⃣5️⃣

<a:Roleta:1363688647446233278> **Sua Escolha**: \`2\`
### 🥳 Você ganhou!
Você ganhou <:Cash:1297005054099849247>**$numberSeparator[$multi[$advancedTextSplit[$interactionData[customId];_;3];2];.] Cash**!
}{color:#56e226}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$multi[$advancedTextSplit[$interactionData[customId];_;3];2]];$authorID]

$else

$interactionUpdate[{newEmbed:{title:<a:Roleta:1363688647446233278> Roleta}{description:Escolha um número da roleta: \`[1, 2, 3, 4, 5]\`

> 1️⃣❌3️⃣4️⃣5️⃣

<a:Roleta:1363688647446233278> **Sua Escolha**: \`2\`
❌ **Escolha certa**: \`$randomText[1;3;4;5]\`
### 😭 Você perdeu!
Você perdeu <:Cash:1297005054099849247>**$numberSeparator[$advancedTextSplit[$interactionData[customId];_;3];.] Cash**!
}{color:#e22626}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];$advancedTextSplit[$interactionData[customId];_;3]];$authorID]

$endif

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==roleta2;]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
$if[$randomText[perder;perder;perder;perder;perder;perder;perder;ganhar;ganhar;ganhar]==ganhar]

$interactionUpdate[{newEmbed:{title:<a:Roleta:1363688647446233278> Roleta}{description:Escolha um número da roleta: \`[1, 2, 3, 4, 5]\`

> 1️⃣2️⃣✅4️⃣5️⃣

<a:Roleta:1363688647446233278> **Sua Escolha**: \`3\`
### 🥳 Você ganhou!
Você ganhou <:Cash:1297005054099849247>**$numberSeparator[$multi[$advancedTextSplit[$interactionData[customId];_;3];2];.] Cash**!
}{color:#56e226}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$multi[$advancedTextSplit[$interactionData[customId];_;3];2]];$authorID]

$else

$interactionUpdate[{newEmbed:{title:<a:Roleta:1363688647446233278> Roleta}{description:Escolha um número da roleta: \`[1, 2, 3, 4, 5]\`

> 1️⃣2️⃣❌4️⃣5️⃣

<a:Roleta:1363688647446233278> **Sua Escolha**: \`3\`
❌ **Escolha certa**: \`$randomText[1;2;4;5]\`
### 😭 Você perdeu!
Você perdeu <:Cash:1297005054099849247>**$numberSeparator[$advancedTextSplit[$interactionData[customId];_;3];.] Cash**!
}{color:#e22626}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];$advancedTextSplit[$interactionData[customId];_;3]];$authorID]

$endif

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==roleta3;]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
$if[$randomText[perder;perder;perder;perder;perder;perder;perder;ganhar;ganhar;ganhar]==ganhar]

$interactionUpdate[{newEmbed:{title:<a:Roleta:1363688647446233278> Roleta}{description:Escolha um número da roleta: \`[1, 2, 3, 4, 5]\`

> 1️⃣2️⃣3️⃣✅5️⃣

<a:Roleta:1363688647446233278> **Sua Escolha**: \`4\`
### 🥳 Você ganhou!
Você ganhou <:Cash:1297005054099849247>**$numberSeparator[$multi[$advancedTextSplit[$interactionData[customId];_;3];2];.] Cash**!
}{color:#56e226}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$multi[$advancedTextSplit[$interactionData[customId];_;3];2]];$authorID]

$else

$interactionUpdate[{newEmbed:{title:<a:Roleta:1363688647446233278> Roleta}{description:Escolha um número da roleta: \`[1, 2, 3, 4, 5]\`

> 1️⃣2️⃣3️⃣❌5️⃣

<a:Roleta:1363688647446233278> **Sua Escolha**: \`4\`
❌ **Escolha certa**: \`$randomText[1;2;3;5]\`
### 😭 Você perdeu!
Você perdeu <:Cash:1297005054099849247>**$numberSeparator[$advancedTextSplit[$interactionData[customId];_;3];.] Cash**!
}{color:#e22626}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];$advancedTextSplit[$interactionData[customId];_;3]];$authorID]

$endif

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==roleta4;]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
$if[$randomText[perder;perder;perder;perder;perder;perder;perder;ganhar;ganhar;ganhar]==ganhar]

$interactionUpdate[{newEmbed:{title:<a:Roleta:1363688647446233278> Roleta}{description:Escolha um número da roleta: \`[1, 2, 3, 4, 5]\`

> 1️⃣2️⃣3️⃣4️⃣✅

<a:Roleta:1363688647446233278> **Sua Escolha**: \`5\`
### 🥳 Você ganhou!
Você ganhou <:Cash:1297005054099849247>**$numberSeparator[$multi[$advancedTextSplit[$interactionData[customId];_;3];2];.] Cash**!
}{color:#56e226}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$multi[$advancedTextSplit[$interactionData[customId];_;3];2]];$authorID]

$else

$interactionUpdate[{newEmbed:{title:<a:Roleta:1363688647446233278> Roleta}{description:Escolha um número da roleta: \`[1, 2, 3, 4, 5]\`

> 1️⃣2️⃣3️⃣4️⃣❌

<a:Roleta:1363688647446233278> **Sua Escolha**: \`5\`
❌ **Escolha certa**: \`$randomText[1;2;4;3]\`
### 😭 Você perdeu!
Você perdeu <:Cash:1297005054099849247>**$numberSeparator[$advancedTextSplit[$interactionData[customId];_;3];.] Cash**!
}{color:#e22626}{footer:$username:$authorAvatar}{timestamp}}]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];$advancedTextSplit[$interactionData[customId];_;3]];$authorID]

$endif

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==roleta5;]
`
}]