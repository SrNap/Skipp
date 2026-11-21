module.exports = [{
  name: "work",
  aliases: ["trabalhar",  "CLT"],
  description: "Trabalhe para ganhar dinheiro",
  usage: "trabalhar",
  $if: "old",
  code: `
<@$authorID> Você trabalhou como **$getGlobalUserVar[Emprego;$authorID]** e ganhou **$numberSeparator[$random[1500;3000];.] Cash!** E agora você possui <:Cash:1297005054099849247>**$numberSeparator[$getGlobalUserVar[Cash;$authorID];.] Cash!**
  $setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$random[1500;3000]];$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]

$onlyIf[$getGlobalUserVar[Emprego;$authorID]!=Desempregado;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não possui um emprego! Use **$getGuildVar[Prefix]empregos** para obter um emprego!]

$globalCooldown[1h;⠀⠀<:Cooldown:1296999969747894313> Você já trabalhou recentemente! Volte em <t:$truncate[$divide[$sum[$getCooldownTime[1h;globalUser;work;$authorID];$dateStamp];1000]]:R> para trabalhar novamente! {deleteIn:1h}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - trabalhar]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]

$addButton[1;Ativar Lembrete;primary;LBTwork_$authorID;false;⏰]
  `
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[<@$authorID> Você trabalhou como **$getGlobalUserVar[Emprego;$authorID]** e ganhou **$numberSeparator[$random[1500;3000];.] Cash!** E agora você possui <:Cash:1297005054099849247>**$numberSeparator[$getGlobalUserVar[Cash;$authorID];.] Cash!**
{actionRow:{button:Lembrete Ativado:secondary:bg21_$authorID:true:⏰}}]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Trabalhar(Lembrete)]

$setTimeout[LBwork;1h;{"channelID": "$channelID", "authorID": "$authorID", "customId": "LBwork"};false]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==LBTwork;]
`
},{
  name: "LBwork",
  type: "timeout",
  code: `
$channelSendMessage[$timeoutData[channelID];⠀⠀⏰ **›** <@$timeoutData[authorID]>, você já pode trabalhar novamente!]
`
}]