module.exports = ({
  name: "setbanner",
  aliases: ['setbg', 'setbackground', 'setback'],
  code: `$setGlobalUserVar[Background;/bglink/$message[2].png;$mentioned[1]]

🖼️ - O usuário <@$mentioned[1]> agora tem um banner personalizado.

$onlyForIDs[1021777907263221862;⠀⠀<:Dono:1298055690581180456> **›** Você não e meu desenvolvedor!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$globalCooldown[2s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **2s** para usar novamente!]
`
})