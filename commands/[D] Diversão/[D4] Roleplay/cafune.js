module.exports = {
  name: "cafuné",
  aliases: ["cafune"],
  description: "Cafune um usuário",
  usage:"cafuné <user>",
  code: `
  $reply
 $description[💕 **<@$authorID> fez cafuné em <@$mentioned[1]>!**]
 $image[$randomText[https://images-ext-1.discordapp.net/external/TdnjMDhpaYRjzXhxZhLs2vDOELPkDthH7AvmZ9b27iY/https/rrp-production.loritta.website/img/9a590ff09753d644253d003c02c35a10784e5328.gif;https://images-ext-1.discordapp.net/external/xcN4ZOvVA_LQER-_yeIwMDvvdrJPijoJDftaVGTG6Mo/https/rrp-production.loritta.website/img/b2b54deb359278196676e0c655d65c509d685279.gif]]
 $footer[$username;$authorAvatar]
 $addTimestamp
 $onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode fazer cafuné em si mesmo!]
$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você precisa mencionar alguém para fazer cafuné!]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Cafuné]
`
}