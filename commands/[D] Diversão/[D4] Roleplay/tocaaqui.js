module.exports = {
  name: "tocaaqui",
  aliases: ["tocaraqui", "tocar"],
  description: "faz um \"toca aqui!\" com alguem!",
  usage:"tocaaqui <user>",
  code: `
  $reply
 $description[😊 **<@$authorID> mandou um toca aqui para <@$mentioned[1]>!**]
 $image[$randomText[https://images-ext-1.discordapp.net/external/f19-gK4CAlQY0wgXcxREzCncLL2gbZMLom4Z0yzgm8k/https/rrp-production.loritta.website/img/4593f8a5dda772a7be57c626433eb49601434a40.gif;https://images-ext-1.discordapp.net/external/h3U93yQK3OrQIfUUsq6f5HqBCebWhPV5neUg-u0oMsE/https/rrp-production.loritta.website/img/e283a138c401eac56e53f891ee3a5ba9825434bc.gif]]
 $footer[$username;$authorAvatar]
 $addTimestamp
 $onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
 $suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você precisa mencionar alguém para fazer toca aqui!]
$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode fazer toca aqui com si mesmo!]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Tocaaqui]
`
}