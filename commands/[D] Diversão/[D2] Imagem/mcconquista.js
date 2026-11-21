module.exports = {
  name: "mcconquista",
  aliases: ["conquista", "mcachievement", "achievement"],
  description: "Cria uma conquista do minecraft",
  usage:"mcconquista <texto>,",
  code: `
  $reply
  $attachment[https://minecraftskinstealer.com/achievement/$random[1;39]/Nova+conquista!/$message;conquista.png]
  $onlyIf[$message!=;⠀⠀<:Erro:1292980975290286135> **›** Digite algo para a conquista!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - McConquista]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
  $suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}