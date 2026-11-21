module.exports = [{
  name: "ping",
  aliases: ["latencia", "latência","pong"],
  description: "Veja a latência do bot",
  usage: "ping",
  code: `$clientTyping
$reply
>>> ☁️ Ping: \`[ $ping'ms ]\`
⚡ Responde: \`[ $messagePing'ms ]\`
🍂 Database: \`[ $databasePing'ms ]\`
🌟 Expire: <t:$truncate[$divide[$sum[$dateStamp;$ping];1000]]:R>

$addButton[1;Reload;primary;ping_$authorID;false;🔄]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - ping]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[>>> ☁️ Ping: \`[ $ping'ms ]\`
⚡ Responde: \`[ $messagePing'ms ]\`
🍂 Database: \`[ $databasePing'ms ]\`
🌟 Expire: <t:$truncate[$divide[$sum[$dateStamp;$ping];1000]]:R>
]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=1;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ping;]
`
}]