module.exports = {
  name: "setreputação",
  aliases: ["setrep"],
  code: `
👑 - Uma bênção dos deuses! O <@$mentioned[1]> recebeu **$noMentionMessage Reputações**!

$setGlobalUserVar[Gems;$sum[$getGlobalUserVar[Gems;$mentioned[1]];$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage;k;000;1];m;000000;1];b;000000000;1];t;000000000000]];$mentioned[1]]

$onlyForIDs[1021777907263221862;⠀⠀<:Dono:1298055690581180456> **›** Você não e meu desenvolvedor!]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$globalCooldown[2s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **2s** para usar novamente!]
`
}