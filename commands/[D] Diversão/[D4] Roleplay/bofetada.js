module.exports = {
  name: "bofetada",
  aliases: ["bofetar", "tapa", "slap"],
  description: "Bofete um usuário.",
  usage: "bofetada <user>",
  code: `
  $reply
 $description[🫲 **<@$authorID> deu um tapa em <@$mentioned[1]>!**]
 $image[$randomText[https://images-ext-1.discordapp.net/external/ZXhdAO4yNfg_8SZb8LK4dwAhvz9VjqOSIQanIioWhno/https/rrp-production.loritta.website/img/ff34172c5325cf67a4cadb56b5c7b78a069c9896.gif;https://images-ext-1.discordapp.net/external/VpR1makY_wIT4WGE6HCXzjwocNOVRO1Rc5iBYY6krkY/https/rrp-production.loritta.website/img/8f5217e3cd1974dd7994351bc9ae2007e156a7f1.gif]]
 $footer[$username;$authorAvatar]
 $addTimestamp
 $onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você precisa mencionar alguém para dar um tapa!]
$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode si dar um tapa!]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Bofetada]
`
}