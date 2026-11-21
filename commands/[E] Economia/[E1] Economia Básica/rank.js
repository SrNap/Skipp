module.exports = [{
  name: "rank",
  aliases: ["ranking"],
  description: "Veja o ranking de dinheiro do servidor!",
  usage: "rank",
  code: `
🏆 **›** <@$authorID>, esse é o **ranking global** de <:Cash:1297005054099849247>**Cash**!

$attachCanvas[rank]


$fillText[rank;$globalUserLeaderBoard[Cash;desc;{top}°  {username};1;1;main];#000000;20px Poppins-Bold;353;35;]
$fillText[rank;$globalUserLeaderBoard[Cash;desc;{value} Cash;1;1;main];#000000;20px Poppins-Bold;353;55;]
$fillText[rank;$globalUserLeaderBoard[Cash;desc;{id};1;1;main];#000000;15px Poppins-Bold;353;70;]

$fillText[rank;$globalUserLeaderBoard[Cash;desc;{top}°  {username};1;2;main];#000000;20px Poppins-Bold;353;120;]
$fillText[rank;$globalUserLeaderBoard[Cash;desc;{value} Cash;1;2;main];#000000;20px Poppins-Bold;353;140;]
$fillText[rank;$globalUserLeaderBoard[Cash;desc;{id};1;2;main];#000000;15px Poppins-Bold;353;155;]

$fillText[rank;$globalUserLeaderBoard[Cash;desc;{top}°  {username};1;3;main];#000000;20px Poppins-Bold;353;210;]
$fillText[rank;$globalUserLeaderBoard[Cash;desc;{value} Cash;1;3;main];#000000;20px Poppins-Bold;353;230;]
$fillText[rank;$globalUserLeaderBoard[Cash;desc;{id};1;3;main];#000000;15px Poppins-Bold;353;250;]

$fillText[rank;$globalUserLeaderBoard[Cash;desc;{top}°  {username};1;3;main];#000000;20px Poppins-Bold;353;210;]
$fillText[rank;$globalUserLeaderBoard[Cash;desc;{value} Cash;1;3;main];#000000;20px Poppins-Bold;353;230;]
$fillText[rank;$globalUserLeaderBoard[Cash;desc;{id};1;3;main];#000000;15px Poppins-Bold;353;250;]

$fillText[rank;$globalUserLeaderBoard[Cash;desc;{top}°  {username};1;4;main];#000000;20px Poppins-Bold;353;290;]
$fillText[rank;$globalUserLeaderBoard[Cash;desc;{value} Cash;1;4;main];#000000;20px Poppins-Bold;353;310;]
$fillText[rank;$globalUserLeaderBoard[Cash;desc;{id};1;4;main];#000000;15px Poppins-Bold;353;325;]

$drawImage[rank;$userAvatar[$globalUserLeaderBoard[Cash;desc;{id};1;1;main]];80;150;100;100;103]
$drawImage[rank;$userAvatar[$globalUserLeaderBoard[Cash;desc;{id};1;2;main]];3;190;90;90;103]
$drawImage[rank;$userAvatar[$globalUserLeaderBoard[Cash;desc;{id};1;3;main]];170;210;80;80;103]



$drawImage[rank;$userAvatar[$globalUserLeaderBoard[Cash;desc;{id};1;1;main]];270;10;80;80;103]
$drawImage[rank;$userAvatar[$globalUserLeaderBoard[Cash;desc;{id};1;2;main]];270;95;80;80;103]
$drawImage[rank;$userAvatar[$globalUserLeaderBoard[Cash;desc;{id};1;3;main]];270;180;80;80;103]
$drawImage[rank;$userAvatar[$globalUserLeaderBoard[Cash;desc;{id};1;4;main]];270;265;80;80;103]
$drawImage[rank;$userAvatar[$globalUserLeaderBoard[Cash;desc;{id};1;5;main]];270;350;80;80;103]



$drawImage[rank;./assets/images/layoutrank.png;0;0;525;350]
  $createCanvas[rank;525;350]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Rank]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]


$addButton[1;Ver sua posição;primary;rankposi_$authorID;false]
$addButton[1;;secondary;rank2_$authorID;false;<:Seta_Dirt:1323066151269437461>]
$addButton[1;;secondary;bg1_$authorID;true;<:Seta_Esqu:1323066113268912149>]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[⠀⠀<a:Trofeu:1335045087414980608> **›** Você está em **$getLeaderboardInfo[Cash;$authorID;global;top]°** no ranking global de cash!;everyone;true;false]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==rankposi;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[Em breve...;everyone;true;false]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==rank2;]
`
}]