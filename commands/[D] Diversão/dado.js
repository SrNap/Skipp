module.exports = {
  name: "dado",
  aliases: ["roll"],
  description: "Jogue um dado",
  usage: "dado <number>",
  code: `
  $clientTyping
$reply
🎲 **|** Você rolou um **1d$message[1]**... e consiguiu **$random[1;$message[1]]**!

$onlyIf[$message[1]>=6;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode rolar um dado com menos de **6** lado!]
$onlyIf[$message[1]<=100;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode rolar um dado com mais de **100** lado!]
$onlyIf[$isNumber[$message[1]]==true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não digitou um número válido!]
$onlyIf[$message[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não digito um número de lados!]
$onlyIf[$message[1]!=$mentioned[1];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode mencionar uma pessoa nesse comando!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Dado]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}