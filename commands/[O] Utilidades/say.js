module.exports = {
  name: "say",
  aliases: ["falar"],
  description: "Fale algo para o bot falar!",
  usage: "say <mensagem>",
  code: `
  $message



$onlyIf[$message!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID> Escreva algo para eu falar!]
$onlyPerms[managemessages;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID> Você não tem permissão para usar este comando. Você precisaria da permissão \`Gerenciar Mensagens\` para executar o comando!]
$deleteCommand
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Say]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$addbutton[1;Utilizado por $userTag[$authorID];secondary;bgbuy1;true]
  `
}