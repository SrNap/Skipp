module.exports = [{
  name: "coinflip",
  aliases: ["coinflip", "cf", "moeda", "flip"],
  description: "Aposte uma quantia de dinheiro com outro usuário",
  usage: "coinflip <user> <quantia>",
  code: `
<@$mentioned[1]>, <@$authorID> te desafiou para um duelo de **Cara ou Coroa**! <:Coroa:1302761429849477250>
**Aposta:** <:Cash:1297005054099849247> **$numberSeparator[$noMentionMessage;.]** Cash.  
> ⚔️ *Clique no botão abaixo para aceitar a aposta.*

$onlyIf[$isNumber[$noMentionMessage]==true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, insira um número válido para apostar!]
$onlyIf[$noMentionMessage>=100;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode apostar uma quantia menor que **100 Cash**!]
$onlyIf[$getGlobalUserVar[Cash]>=$noMentionMessage;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **Cash** suficiente para isso!]
$onlyIf[$noMentionMessage!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar uma quantia para apostar!]
$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve mencionar um usuário para apostar!]
$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode se mencionar!]
$onlyIf[$isBot[$mentioned[1]]==false;⠀⠀<:Erro:1292980975290286135> **›** Você não pode mencionar um bot!]
$onlyIf[$getGlobalUserVar[Cash;$mentioned[1]]>=100;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, o usuário mencionado não tem **Cash** suficiente para isso!]


$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Coinflip]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$getGlobalUserVar[Blacklist;$mentioned[1]]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, o $mentioned[1] está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]

$addButton[1;Aceitar;success;Coinflip_$authorID_$mentioned[1]_$noMentionMessage;false;✅]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
$if[$randomText[perder;perder;perder;perder;perder;ganhar;ganhar;ganhar;ganhar;ganhar]==ganhar]

$interactionUpdate[🎉 Parabéns <@$advancedTextSplit[$interactionData[customId];_;2]>!  
Você venceu o desafio e ganhou <:Cash:1297005054099849247> **$advancedTextSplit[$interactionData[customId];_;4]** Cash!  
💰 *O prêmio foi adicionado ao seu saldo!*  
<:Coroa:1302761429849477250> **|** *Você brilhou na sorte, <@$advancedTextSplit[$interactionData[customId];_;3]> perdeu!*]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$advancedTextSplit[$interactionData[customId];_;2]];$advancedTextSplit[$interactionData[customId];_;4]];$advancedTextSplit[$interactionData[customId];_;2]]
$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$advancedTextSplit[$interactionData[customId];_;3]];$advancedTextSplit[$interactionData[customId];_;4]];$advancedTextSplit[$interactionData[customId];_;3]]

$else

$interactionUpdate[🎉 Parabéns <@$advancedTextSplit[$interactionData[customId];_;3]>!  
Você venceu o desafio e ganhou <:Cash:1297005054099849247> **$advancedTextSplit[$interactionData[customId];_;4]** Cash!  
💰 *O prêmio foi adicionado ao seu saldo!*  
<:Coroa:1302761429849477250> **|** *Você brilhou na sorte, <@$advancedTextSplit[$interactionData[customId];_;2]> perdeu!*]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$advancedTextSplit[$interactionData[customId];_;3]];$advancedTextSplit[$interactionData[customId];_;4]];$advancedTextSplit[$interactionData[customId];_;3]]
$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$advancedTextSplit[$interactionData[customId];_;2]];$advancedTextSplit[$interactionData[customId];_;4]];$advancedTextSplit[$interactionData[customId];_;2]]

$endif

$onlyIf[$advancedTextSplit[$interactionData[customId];_;3]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==Coinflip;]
`
}]