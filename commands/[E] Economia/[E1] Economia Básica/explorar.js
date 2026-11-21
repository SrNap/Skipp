module.exports = [{
  name: "exploração",
  aliases: ["exploracao", "explorar", "explore", "exploration"],
  description: "Explora o mundo e encontre coisas para ganhar dinheiro!",
  usage: "exploração",
  code: ` https://media.discordapp.net/attachments/1286357668155363370/1363266863488041250/1.png?ex=680568b4&is=68041734&hm=706d62c7d442764fa7efb2d008729085e4c9aafc032d585788a8bf2ce5c92fe8&=&format=webp&quality=lossless

  $reply

$globalCooldown[3h;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você ainda está explorando, espere <t:$truncate[$divide[$sum[$getCooldownTime[3h;globalUser;explorar;$authorID];$dateStamp];1000]]:R> para explorar novamente!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Explorar]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]

$addButton[1;Explorar;secondary;Exploracao_$authorID;false;🏛️]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1363266863823458324/2.png?ex=680568b4&is=68041734&hm=29b6df8368e4d2ebd030cff88f5883c09f5b94afe0390f1ce00bd48dd12308ba&=&format=webp&quality=lossless
{actionRow:{button:Volte em 3 Horas:secondary:ExploracaoR:true}}]

  $setTimeout[Explorar;3h;{"channelID": "$channelID", "authorID": "$authorID", "customId": "Explorar"};false]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==Exploracao;]
`
},{
  name: "Explorar",
  type: "timeout",
  code: `
$channelSendMessage[$timeoutData[channelID];⠀⠀<:Correto:1315387573237059625> **›** <@$timeoutData[authorID]> Sua exploração acabou! E ganhou <:Cash:1297005054099849247>**2.800 Cash**!]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$timeoutData[authorID]];2800];$timeoutData[authorID]]

$onlyIf[$timeoutData[customId]==Explorar]
`
}]