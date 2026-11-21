module.exports = {
  name: "lock",
  aliases: ['trancar'],
  description: "Tranque um canal para que ninguém possa falar nele.",
  usage: "lock",
  code: `
$clientTyping
$reply
$modifyChannelPerms[$channelID;$guildID;-sendmessages]

🔒 **›** <@$authorID>, o canal <#$channelID> foi trancado com sucesso!

$onlyPerms[managechannels;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem permissão para executar este comando!]
$onlyClientPerms[managechannels;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, eu não tenho permissão para executar este comando!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Lock]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}