module.exports = {
  name: "atacar",
  aliases: ["attack", "atacar"],
  description: "Ataque alguém!",
  usage:"atacar <user>",
  code: `
  $reply
 $description[😡 **<@$authorID> atacou <@$mentioned[1]>!**]
 $image[$randomText[https://images-ext-1.discordapp.net/external/xXjqgHrxzv9eYuFNUVTH5tdcfLEcjHgvOVpLMNbwNGU/https/rrp-production.loritta.website/img/04df9e5231732c4ac10ef69f5e5a895a3dec0566.gif;https://images-ext-1.discordapp.net/external/QsxoGr2xxSaXjN8D5WoZgduHrzwVqQYwWhAuhywBxTo/https/rrp-production.loritta.website/img/9598aa99e8f7ea5f96214bfb126f0ff01b871b13.gif]]
 $footer[$username;$authorAvatar]
 $addTimestamp
 $onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
 $suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você precisa mencionar alguém para atacar!]
$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode atacar a si mesmo!]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Atacar]
`
}