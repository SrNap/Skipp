module.exports = {
  name: 'retblacklist',
  aliases: ['rbl'],
  code: `$setGlobalUserVar[Blacklist;false;$mentioned[1;yes]]
  
🎉 - Uma bênção dos deuses! O usuário <@$mentioned[1;yes]> foi **desbanido** por \`$noMentionMessage\`!

$channelSendMessage[1297868812930256937;{newEmbed:{title:🚫 Blacklist}{description:- Temos menos um usuário na black list!

> **Staff:** <@$authorID>
> **Author:** <@$mentioned[1]>
> **Retirado em:** <t:$truncate[$math[$datestamp/1000]]:F> (<t:$truncate[$math[$datestamp/1000]]:R>)
}{thumbnail:$userAvatar[$mentioned[1]]}}]

$onlyForIDs[1021777907263221862;⠀⠀<:Dono:1298055690581180456> **›** Você não e meu desenvolvedor!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$globalCooldown[2s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **2s** para usar novamente!]
$onlyIf[$getGlobalUserVar[Blacklist;$mentioned[1]]!=false;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, <@$mentioned[1]> não está na minha **Blacklist**!]
`
}