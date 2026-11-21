module.exports = {
  name: "addblack",
  aliases: ["add-black","setbl","addbl", "setblack"],
  code: `$setGlobalUserVar[Blacklist;true;$mentioned[1]]
$setGlobalUserVar[BLmotivo;$noMentionMessage;$mentioned[1]]
$setGlobalUserVar[Vip;false;$mentioned[1]]
$setGlobalUserVar[Cash;0;$mentioned[1]]
$setGlobalUserVar[Gems;0;$mentioned[1]]

🚫 - Uma maldição dos deuses! <@$mentioned[1]> foi **Banido** por \`$noMentionMessage\`.

$channelSendMessage[1297868812930256937;{newEmbed:{title:✅ Blacklist}{description:- Temos mais um usuário na black list!

> **Staff:** <@$authorID>
> **Author:** <@$mentioned[1]>
> **Adicionado em:** <t:$truncate[$math[$datestamp/1000]]:F> (<t:$truncate[$math[$datestamp/1000]]:R>)
> **Motivo:** \`$noMentionMessage\`
}{thumbnail:$userAvatar[$mentioned[1]]}}]

$onlyForIDs[1021777907263221862;⠀⠀<:Dono:1298055690581180456> **›** Você não e meu desenvolvedor!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$globalCooldown[2s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **2s** para usar novamente!]
$onlyIf[$getGlobalUserVar[Blacklist;$mentioned[1]]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, <@$mentioned[1]> já está na **Blacklist**!]
`
}