module.exports = {
  name: "anjo",
  aliases: ["anjo", "anjos", "angel"],
  description: "Veja a porcentagem de você ser um anjo",
  usage:"anjo",
  code: `$clientTyping
$reply
  <@$authorID>, você é $random[0;100]% anjo!

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Anjo]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
  `
}