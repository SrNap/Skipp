module.exports = {
  name: "semanal",
  aliases: ["semanal", "weekly"],
  description: "Pegue seu prêmio semanal!",
  usage: "semanal",
  code: `
<@$authorID> Você coletou sua recompensa semanal e ganhou <:Cash:1297005054099849247>**$numberSeparator[$random[1000;4000];.] Cash** mais <:Gems:1302680643901325385>**$numberSeparator[$random[3;10];.] gems**!

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$random[1000;4000]];$authorID]
$setGlobalUserVar[Gems;$sum[$getGlobalUserVar[Gems;$authorID];$random[3;10]];$authorID]

$globalCooldown[7d;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já coletou seu prêmio semanal! Volte em <t:$truncate[$divide[$sum[$getCooldownTime[7d;globalUser;semanal;$authorID];$dateStamp];1000]]:R> para coletar novamente! {deleteIn:1h} ]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - semanal]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
`
}