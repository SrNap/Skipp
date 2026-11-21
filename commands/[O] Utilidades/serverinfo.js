module.exports = ({
  name: "Serverinfor",
  aliases: ["serverinfo", "si"],
  description: "Mostra as informações do servidor",
  usage: "serverinfo",
  code: `$title[<:Discord:1297972151583899809> $guildName[$guildID]]

$addField[<:Others:1297972251471122584> Outros:;
<:Roles:1297972272711340044> **Cargo**: $roleCount[$guildID;true]
<:Emoji:1297972299236118528> **Emojis**: $emojiCount[$guildID]
<a:boost:1253826028971757588> **Impulsos**: $guildBoostCount[$guildID]
<a:Icon_up:1359946772562182204> **Nível de verificação** $guildVerificationLevel[$guildID]
]

$addField[🗨️ Canais ($channelCount[$guildID;all]):;
🗣️ **Texto**: $channelCount[$guildID;Text]
🔊 **Voz**: $channelCount[$guildID;Voice]]

$addField[<:Users:1297972219707789342> Membros:;
$membersCount
]

$addField[<:Calendrio:1297972195976417290> Entrei aqui em:; <t:$truncate[$divide[$memberJoinDate[$clientID;$guildID;ms];1000]]:F> (<t:$truncate[$divide[$memberJoinDate[$clientID;$guildID;ms];1000]]:R>)]

$addField[<:Calendrio:1297972195976417290> Criado em:;
<t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:F> ( <t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:R> )]

$addField[<:Descricao:1299773078569746463> Descrição:;$if[$guildDescription[$guildID]==;O servidor não tem descrição;\`$guildDescription[$guildID]\`]]

$addField[<a:Crown:1297973698921365598> Dono:;
$username[$guildOwnerID] \`($guildOwnerID)\`]

$addField[<:ID:1297972174170230916> ID:;
\`$guildID\`]

$thumbnail[$guildIcon[$guildID]]
$color[$getVar[Color]]
$footer[$username;$authorAvatar]
$addTimestamp

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Serverinfo]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
});