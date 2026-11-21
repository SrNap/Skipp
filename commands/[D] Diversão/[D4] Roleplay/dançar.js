module.exports = {
  name: "dançar",
  aliases: ["dança", "dancar", "danca", "dance"],
  description: "Dança com alguém!",
  usage:"dançar <user>",
  code: `
  $reply
 $description[💃 **<@$authorID> dançou com <@$mentioned[1]>!**]
 $image[$randomText[https://images-ext-1.discordapp.net/external/THrQDVA7CzRe_cQHfBempmLfv4iA_0-zP2ZXHDrpQYg/https/rrp-production.loritta.website/img/9885416639f5543e6fcea5f9db639d86e21dbb12.gif;https://images-ext-1.discordapp.net/external/ChcFdfybHwRDUmtwLDJ9uVOlTYsyez5-WZhtaRDAo7s/https/rrp-production.loritta.website/img/5036e245811717f9276c1175bd22b403d60ddbe4.gif]]
 $footer[$username;$authorAvatar]
 $addTimestamp
 $onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
 $suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você precisa mencionar alguém para dançar!]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Dançar]
$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode dançar com si mesmo!]
`
}