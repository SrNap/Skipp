module.exports = {
  name: "canalinfo",
  aliases: ["channelinfo", "ci"],
  description: "Mostra informações sobre o canal",
  usage: "canalinfo [canal]",
  code: `
$description[## [$channelName[$mentionedChannels[1;true]]](https://discord.com/channels/$guildID/$mentionedChannels[1;true])]

$addField[<:Calendrio:1297972195976417290> Data de criação:;<t:$truncate[$divide[$creationDate[$mentionedChannels[1;true];ms];1000]]:f> (<t:$truncate[$divide[$creationDate[$mentionedChannels[1;true];ms];1000]]:R>)

$addField[<:Icon_Channel_Blocked:1359666316310479031> NSFW:;$if[$channelNSFW[$mentionedChannels[1;true]]==true;Conteúdo NSFW;Conteúdo Livre]]

$addField[<:Icon_Chat:1359665974957309963> Tipo de canal:;\`$translate[$channelType[$mentionedChannels[1;true]];pt;en]\`]

$addField[<:ID:1297972174170230916> ID:;\`$mentionedChannels[1;true]\`]

$addField[<:Tag:1297991897138335887> Menção:;<#$mentionedChannels[1;true]>]

$color[$getVar[Color]]
$footer[$username;$authorAvatar]
  $addTimestamp[1]
$thumbnail[$guildIcon]


$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Canalinfo]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}