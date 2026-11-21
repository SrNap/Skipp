module.exports = [{
  name: "minerar",
  aliases: ["miner", "minerar", "mine", "mineração"],
  description: "Minere e ganhe dinheiro",
  usage: "minerar",
  code: ` https://media.discordapp.net/attachments/1286357668155363370/1363266864142356520/3.png?ex=680568b4&is=68041734&hm=23e5231d4ed804799612524206410b2309a48148e8f1804ef876dd642ebe3789&=&format=webp&quality=lossless

  $reply

$globalCooldown[5h;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você ainda está minerando, espere <t:$truncate[$divide[$sum[$getCooldownTime[5h;globalUser;minerar;$authorID];$dateStamp];1000]]:R> para minerar novamente!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Minerar]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$onlyIf[$getGlobalUserVar[Vip;$authorID]!=false;⠀⠀<:Erro:1292980975290286135> **›** Este recurso é exclusivo do **Skipp Premium**! Use **$getGuildVar[Prefix]premium** para ver as vantagens e comprar o seu.]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]

$addButton[1;Minerar;secondary;Mineracao_$authorID;false;⛏️]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1363266864448405724/4.png?ex=680568b4&is=68041734&hm=c7ccbb97b15c6162dd4c8a41b381b9d8f38504b965d2828f6739a5cdfaa4fd39&=&format=webp&quality=lossless
{actionRow:{button:Volte em 5 Horas:secondary:MineracaoR:true}}]

  $setTimeout[Minerar;5h;{"channelID": "$channelID", "authorID": "$authorID", "customId": "Minerar"};false]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==Mineracao;]
`
},{
  name: "Minerar",
  type: "timeout",
  code: `
$channelSendMessage[$timeoutData[channelID];⠀⠀<:Correto:1315387573237059625> **›** <@$timeoutData[authorID]> Sua mineração acabou! E ganhou <:Cash:1297005054099849247>**4.500 Cash** e <:Gems:1302680643901325385>**10 Gems**!]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$timeoutData[authorID]];4500];$timeoutData[authorID]]
$setGlobalUserVar[Gems;$sum[$getGlobalUserVar[Gems;$timeoutData[authorID]];10];$timeoutData[authorID]]

$onlyIf[$timeoutData[customId]==Minerar]
`
}]