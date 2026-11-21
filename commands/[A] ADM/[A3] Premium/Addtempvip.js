module.exports = [{
  name: "addtempvip",
  aliases: ["addtempvip", "addtempvip"],
  code: `$setGlobalUserVar[Vip;true;$mentioned[1]]
$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];50000];$authorID]

👑 - Uma bênção dos deuses! O usuário <@$mentioned[1]> recebeu **Vip** por **$noMentionMessage**!

$channelSendMessage[1297868812930256937;{newEmbed:{title:✅ Vip Temporário}{description:- Temos mais um usuário com Vip temporário!

> **Staff:** <@$authorID>
> **Author:** <@$mentioned[1]>
> **Adicionado em:** <t:$truncate[$math[$datestamp/1000]]:F> (<t:$truncate[$math[$datestamp/1000]]:R>)
> **Tempo:** $noMentionMessage
}{thumbnail:$userAvatar[$mentioned[1]]}}]

$onlyForIDs[1021777907263221862;⠀⠀<:Dono:1298055690581180456> **›** Você não e meu desenvolvedor!]
$onlyIf[$getGlobalUserVar[Vip;$mentioned[1]]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, o usuário <@$mentioned[1]> já possui **Vip**!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]

$setTimeout[tempvip;$noMentionMessage;{"authorID": "$mentioned[1]", "customId": "tempvip", "staff": "$authorID"};false]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
},{
  name: "tempvip",
  type: "timeout",
  code: `
$setGlobalUserVar[Vip;false;$timeoutData[authorID]]

$sendDm[Seu tempo de Vip acabou!;$timeoutData[authorID];false]

$channelSendMessage[1297868812930256937;{newEmbed:{title:❌ Vip}{description:- Temos menos um usuário com Vip!

> **Staff:** <@$timeoutData[staff]>
> **Author:** <@$timeoutData[authorID]>
> **Removido em:** <t:$truncate[$math[$datestamp/1000]]:F> (<t:$truncate[$math[$datestamp/1000]]:R>)
}{thumbnail:$userAvatar[$timeoutData[authorID]]}}]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}]