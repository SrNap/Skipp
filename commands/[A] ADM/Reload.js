module.exports = {
  name: "reload",
  aliases: ["reload", "recarregar", "rcmd"],
  code: `
  $reply
⠀⠀<a:emoji_53:1216102361030987896> **›** Comandos recarregados com sucesso!

$updateCommands
$clientTyping
$reply

$onlyForIDs[1021777907263221862;⠀⠀<:Dono:1298055690581180456> **›** Você não e meu desenvolvedor!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
`
}