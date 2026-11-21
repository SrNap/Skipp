module.exports = [{
  name: "daily",
  aliases: ["diario", "diário"],
  description: "Pegue seu prêmio diário",
  usage: "daily",
  $if: "old",
  code: `
$if[$getGlobalUserVar[Vip;$authorID]==true]

<@$authorID> Você coletou sua recompensa diária usando o vip e ganhou <:Cash:1297005054099849247>**$numberSeparator[$random[2000;8000];.] Cash** mais <:Gems:1302680643901325385>**$numberSeparator[$random[2;10];.] gems**!
  $setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$random[2000;7000]];$authorID]
$setGlobalUserVar[Gems;$sum[$getGlobalUserVar[Gems;$authorID];$random[2;6]];$authorID]

$else

  <@$authorID> Você coletou sua recompensa diária e ganhou <:Cash:1297005054099849247>**$numberSeparator[$random[1000;3000];.] Cash!** e <:Gems:1302680643901325385>**$numberSeparator[$random[1;5];.] gems**!
  $setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$random[1000;3000]];$authorID]
$setGlobalUserVar[Gems;$sum[$getGlobalUserVar[Gems;$authorID];$random[1;4]];$authorID]

$endif

  $reply

$globalCooldown[1d;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você ja coletou a sua recompensa diária de hoje, volte em <t:$truncate[$divide[$sum[$getCooldownTime[1d;globalUser;daily;$authorID];$dateStamp];1000]]:R>. {deleteIn:1h}]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Daily]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]

$addButton[1;Ativar Lembrete;primary;LBTdaily_$authorID;false;⏰]
  `
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
$if[$getGlobalUserVar[Vip;$authorID]==true]

$interactionUpdate[<@$authorID> Você coletou sua recompensa diária usando o vip e ganhou <:Cash:1297005054099849247>**$numberSeparator[$random[2000;8000];.] Cash** mais <:Gems:1302680643901325385>**$numberSeparator[$random[2;6];.] gems**!
{actionRow:{button:Lembrete Ativado:secondary:bg21_$authorID:true:⏰}}]

$else

$interactionUpdate[<@$authorID> Você coletou sua recompensa diária e ganhou <:Cash:1297005054099849247>**$numberSeparator[$random[1000;3000];.] Cash!** e <:Gems:1302680643901325385>**$numberSeparator[$random[1;4];.] gems**!
{actionRow:{button:Lembrete Ativado:secondary:bg21_$authorID:true:⏰}}]

$endif
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Daily(Lembrete)]

$setTimeout[LBdaily;1d;{"channelID": "$channelID", "authorID": "$authorID", "customId": "LBdaily"};false]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==LBTdaily;]
`
},{
  name: "LBdaily",
  type: "timeout",
  code: `
$channelSendMessage[$timeoutData[channelID];⠀⠀⏰ **›** <@$timeoutData[authorID]>, você já pode pegar sua recompensa diária novamente!]
`
}]