module.exports = {
  name: "caraoucoroa",
  aliases: ["cc", "caracoroa", "moeda", "cara ou coroa"],
  description: "Jogue cara ou coroa!",
  usage:"coinflip",
  code: `
  $clientTyping
$reply
Deu...
$editIn[5s;$randomText[<:Coroa:1302761429849477250> **›** Deu **Coroa*!;<:Cara:1302761397737885757> **›** Deu **Cara**!]]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Cara ou coroua]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}