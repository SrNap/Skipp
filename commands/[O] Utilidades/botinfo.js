module.exports = {
  name: "botinfo",
  aliases: ["bi", "infobot", "botinfor"],
  description: "Mostra informações sobre o bot",
  usage: "botinfo",
  code: `
$author[Oi! Eu sou o Skipp!;$userAvatar[$clientID]]
$description[Eu estou atualmente em **$numberSeparator[$guildCount;.] servidores** e tenho **70+ comandos**. Fui criado em <t:1729277320:f> (<t:1729277320:R>) e estou na **versão $getVar[Versao]**.

Eu fui programado em <:JavaScript:1298068768483840060>** [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** usando <:Aoijs:1298066852647403561> **[Aoi.js](https://aoi.js.org/)** e me mantenho online usando a hospedagem da [ABCloud](https://abccloud.com.br/).
]

$color[$getVar[Color]]
$footer[Desenvolvido com ♥️ por .srnap;$userAvatar[1021777907263221862]]
$thumbnail[$userAvatar[$clientID]]
$image[https://media.discordapp.net/attachments/1286357668155363370/1350457901138968667/1_20250315_101314_0000.png?ex=67d6cf6d&is=67d57ded&hm=04d5bdd36b12cad5e6961efb67601fc8c91bc4527540b160a2208cb36e84553e&]

$addButton[1;;link;https://top.gg/bot/1296907824080879676;false;<:Topgg:1358131482316509456>]

$addButton[1;Github;link;https://github.com/SrNap/Skipp;false;<:Github:1320172417649479801>]

$addButton[1;Me adicione;link;https://discord.com/oauth2/authorize?client_id=1296907824080879676&scope=bot+identify+guilds+email+applications.commands&permissions=2080374975;false;<:IconLink:1297673675704635422>]

$addButton[1;Suporte;link;https://discord.gg/q6UXWcZdvP;false;<:IconHome:1297352219829735455>]

$addButton[1;Website;link;https://skipp-bott.netlify.app;false;<:IconGlobol:1302390994905333792>]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Botinfor]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
`
}