module.exports = {
  name: "avatar",
  aliases: ["av"],
  description: "Mostra o avatar de um usuário",
  usage: "avatar <user>",
  code: `
  $reply
  $title[🖼 $username[$mentioned[1]]]
$image[$userAvatar[$mentioned[1]]]
  $color[#5865f2]
  $footer[$username;$authorAvatar]
  $addTimestamp

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Avatar]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]

$addButton[1;Abrir no Navegador;link;$nonEscape[$userAvatar[$mentioned[1]]];false]
  `
}