module.exports = {
  name: "demônio",
  aliases: ["demonio", "demon"],
  description: "Mostra a porcentagem de um usuário como um demônio",
  usage:"demônio <user>",
  code: `$clientTyping
$reply
  <@$authorID>, você é $random[0;100]% demônio!

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Demonio]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
  `
}