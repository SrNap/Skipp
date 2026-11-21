module.exports = {
  name: "clear",
  aliases: ['limpar', 'apagar'],
  description: "Limpe o chat",
  usage: "clear [quantidade]",
  code: `
  $deleteIn[5s]
  
>>> 🗨️ **›** <@$authorID>, você apagou **$noMentionMessage** mensagens!
  
$clear[$channelID;$noMentionMessage;false;false;true]

$onlyIf[$isNumber[$noMentionMessage]==true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar um número de mensagens para eu apagar!]

$onlyIf[$noMentionMessage<=500;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você só pode apagar até 500 mensagens!]

$onlyIf[$noMentionMessage>=2;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você só pode apagar no mínimo 2 mensagens!]

$onlyIf[$noMentionMessage!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar um número de mensagens para eu apagar!]

$onlyPerms[managemessages;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem permissão para usar este comando! Permissão necessária: \`Gerenciar Mensagens\`.]

$onlyClientPerms[managemessages;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, eu não tenho permissão para usar este comando! Permissão necessária: \`Gerenciar Mensagens\`.]


$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Clear]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}