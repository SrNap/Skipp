module.exports = {
  name: "saldo",
  aliases: ["atm", "bal", "balance", "carteira", "wallet"],
  description: "Veja seu saldo ou o de outra pessoa",
  usage: "saldo [@user]",
  $if: "old",
  code: `
$if[$getGlobalUserVar[Vip;$authorID]==true]

$if[$mentioned[1;true]==$authorID]
Seu saldo <@$authorID>
$else
<@$authorID> Saldo do usuário: <@$mentioned[1]>
$endif

$attachCanvas[saldo]
$fillText[saldo;
$if[$getTextLength[$username[$mentioned[1;true]]]>10]
$textSlice[$username[$mentioned[1;true]];0;10]...
$else
$username[$mentioned[1;true]]
$endif
;#fff;90px Fredoka-Bold;382;180]

$fillText[saldo;$mentioned[1;true];#fff;30px Poppins-Bold;382;240]
$fillText[saldo;$abbreviate[$getGlobalUserVar[Cash;$mentioned[1;true]]];#fff;100px Chewy-Regular;220;510]
$fillText[saldo;$abbreviate[$getGlobalUserVar[Gems;$mentioned[1;true]]];#fff;100px Chewy-Regular;720;510]

$drawImage[saldo;$userAvatar[$mentioned[1;true]];87;68;280;280;500]
$drawImage[saldo;./assets/images/layoutcarteira.png;0;0;1050;600]

$createCanvas[saldo;1050;600]

$else

$if[$mentioned[1;true]==$authorID]

<:Carteira:1302687266023411813> **›** <@$authorID> Você tem <:Cash:1297005054099849247>**$numberSeparator[$getGlobalUserVar[Cash;$authorID];.] Cash** e <:Gems:1302680643901325385>**$numberSeparator[$getGlobalUserVar[Gems;$authorID];.] Gems**! Você pode ver seu rank usando **$getGuildVar[Prefix]rank**!

$else

<:Carteira:1302687266023411813> **›** <@$authorID>, <@$mentioned[1]> tem <:Cash:1297005054099849247>**$numberSeparator[$getGlobalUserVar[Cash;$mentioned[1]];.] Cash** e <:Gems:1302680643901325385>**$numberSeparator[$getGlobalUserVar[Gems;$mentioned[1]];.] Gems**!

$endif

$endif

  
$reply

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Saldo]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$onlyIf[$isBot[$mentioned[1]]==false;⠀⠀<:Erro:1292980975290286135> **›** Você não pode descobrir o quanto de Cash um bot tem!]
`
}