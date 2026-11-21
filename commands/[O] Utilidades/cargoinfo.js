module.exports = {
  name: "cargoinfo",
  aliases: ["roleinfo", "ri"],
  description: "Mostra informações sobre um cargo",
  usage: "cargoinfo <cargo>",
  code: `
$description[## [$roleName[$mentionedRoles[1]]](https://discord.com/channels/$guildID/$mentionedRoles[1])]


$addField[<:Calendrio:1297972195976417290> Data de criação:;<t:$truncate[$divide[$creationDate[$mentionedRoles[1];ms];1000]]:f> (<t:$truncate[$divide[$creationDate[$mentionedRoles[1];ms];1000]]:R>)]

$addField[<:Icon_posicao:1359946955811193115> Posição:;$rolePosition[$mentionedRoles[1]]/$roleCount]

$addField[<:Users:1297972219707789342> Total com esse cargo:;$roleMembersCount[$mentionedRoles[1];$guildID]/$membersCount]

$addField[<:Icon_Color:1359946977693143150> Cor:;$getRoleColor[$mentionedRoles[1]]]

$addField[<:ID:1297972174170230916> ID:;\`$mentionedRoles[1]\`]

$addField[<:Tag:1297991897138335887> Menção:;<@&$mentionedRoles[1]>]

$color[$getRoleColor[$mentionedRoles[1]]]
$footer[$username;$authorAvatar]
  $addTimestamp[1]
$thumbnail[$guildIcon]


$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Cargoinfo]
$onlyIf[$mentionedRoles[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não mencionou um cargo!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
`
}