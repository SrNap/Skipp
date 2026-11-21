module.exports = {
  name: ".help",
  aliases: [".ajuda"],
  code: `
$author[1;Painel de Ajuda para Administradores;$userAvatar[$clientID]]
$description[Olá <@$authorID>, esses são os comandos de administração!

> **Comandos de Set**
-# **SetBanner | SetCash | SetGems | SetReputação**

> **Comandos de Equipe**
-# **AddTempVip | AddVip | RemoveVip | AddBlackList | RemoveBlackList | AddTester | RemoveTester**

> **Outros comandos**
-# **AddBanner | Reload | UpTime | Eval | Status**]

$color[$getVar[Color]]
$footer[$username;$authorAvatar]
$addTimestamp
$thumbnail[$userAvatar[$clientID]]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - HelpADM]
$onlyForIDs[1021777907263221862;⠀⠀<:Dono:1298055690581180456> **›** Você não e meu desenvolvedor!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$globalCooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente!]
  `
}