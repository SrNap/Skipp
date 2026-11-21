module.exports = {
  name: "abraçar",
  aliases: ["hug", "abracar"],
  description: "Abraça um usuário.",
  usage: "abraçar <usuário>",
  code: `
  $reply
 $description[😊 **<@$authorID> abraçou <@$mentioned[1]>!**]

$image[$randomText[https://images-ext-1.discordapp.net/external/-9msPE0BeR_qnLYKZfFEVVTcuU_0QWYM6KUljw5QEP8/https/rrp-production.loritta.website/img/d8a3cdec24511bea2ffbd32fa8ecb7e8e6aaa81b.gif;https://images-ext-1.discordapp.net/external/XVkXRTI-TT3YqxdBf8TU2WVUtMBfrDExqpzubV5guOE/https/rrp-production.loritta.website/img/52630d3602d7c1c7bba2c28d6a89d67df484036d.gif]]
$footer[$username;$authorAvatar]
$addTimestamp

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Abraçar]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você precisa mencionar alguém para abraçar!]
$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode abraçar a si mesmo!]
`
}