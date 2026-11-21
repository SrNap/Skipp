module.exports = {
  name: "corno",
  aliases: ["corno", "corna", "horn"],
  description: "Veja a porcentagem de corno de um usuário",
  usage: "corno <user>",
  code: `$clientTyping
$reply
  <@$authorID>, você é $random[0;85]% corno!

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Corno]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
  `
}