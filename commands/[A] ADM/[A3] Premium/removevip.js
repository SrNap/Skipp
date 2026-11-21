module.exports = ({
  name: "removevip",
  aliases: ["revip", "rvip"],
  code: `$setGlobalUserVar[Vip;false;$mentioned[1]]

😭 - Uma maldição dos deuses! <@$mentioned[1]> foi removido do **Vip**!

$channelSendMessage[1297868812930256937;{newEmbed:{title:❌ Vip}{description:- Temos menos um usuário com Vip!

> **Staff:** <@$authorID>
> **Author:** <@$mentioned[1]>
> **Removido em:** <t:$truncate[$math[$datestamp/1000]]:F> (<t:$truncate[$math[$datestamp/1000]]:R>)
}{thumbnail:$userAvatar[$mentioned[1]]}}]

$onlyForIDs[1021777907263221862;⠀⠀<:Dono:1298055690581180456> **›** Você não e meu desenvolvedor!]
$onlyIf[$getGlobalUserVar[Vip;$mentioned[1]]!=false;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, o usuário <@$mentioned[1]> não possui **Vip**!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
`
})