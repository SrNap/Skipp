module.exports = {
  name: "pay",
  aliases: ["pagar", "pix"],
  description: "Pague uma quantia de dinheiro para alguém",
  usage: "pay <user> <quantia>",
  code: `
> 💸 **›** <@$authorID>, você pagou **$numberSeparator[$noMentionMessage;.] Cash** para <@$mentioned[1]>!
👤 **›** Agora você possui <:Cash:1297005054099849247>**$numberSeparator[$getGlobalUserVar[Cash;$authorID];.] Cash** e <@$mentioned[1]> possui <:Cash:1297005054099849247>**$numberSeparator[$getGlobalUserVar[Cash;$mentioned[1]];.] Cash**!

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];$noMentionMessage];$authorID]
$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$mentioned[1]];$noMentionMessage];$mentioned[1]]

$onlyIf[$noMentionMessage<=$getGlobalUserVar[Cash;$authorID];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não possui essa quantia!]
$onlyIf[$noMentionMessage>0;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode pagar uma quantia menor que **1 Cash**!]
$onlyIf[$isNumber[$noMentionMessage]==true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar uma quantia válida!]
$onlyIf[$noMentionMessage!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar uma quantia para pagar!]
$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode pagar para si mesmo!]
$onlyIf[$mentioned[1]!=undefined;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve mencionar alguém para pagar!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$onlyIf[$getGlobalUserVar[Blacklist;$mentioned[1]]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, o $mentioned[1] está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$mentioned[1]]\`!]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Pay]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
`
}