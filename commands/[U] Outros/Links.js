module.exports = {
  name: "links",
  aliases: ["link", "vote"],
  description: "Veja todos os links importantes do bot.",
  usage: "links",
  code: `
  $reply
  $author[Central de Links;$userAvatar[$clientID]]
  $description[Olá <@$authorID>, aqui estão todos os meus links importantes.

>>> - <:IconHome:1297352219829735455> **Suporte:** [[ Clique aqui ]](https://discord.gg/q6UXWcZdvP)
Meu servidor de suporte oficial, onde você pode obter ajuda, reportar bug/usuário, dar sugestões e muito mais.
- <:Topgg:1358131482316509456> **Top.gg:** [[ Clique aqui ]](https://top.gg/bot/1296907824080879676)
Vote em mim no top.gg e me ajude a crescer mais ainda!
- <:IconLink:1297673675704635422> **Me adicione:** [[ Clique aqui ]](https://discord.com/oauth2/authorize?client_id=1296907824080879676&scope=bot+identify+guilds+email+applications.commands&permissions=2080374975)
Me adicione no seu servidor, prometo que você não vai se arrepender.
- <:IconGlobol:1302390994905333792> **Website:** [[ Clique aqui ]](https://skipp-bott.netlify.app)
Meu website oficial.
- <:Github:1320172417649479801> **Github:** [[ Clique aqui ]](https://github.com/SrNap/Skipp)
Repositório do github oficial.
]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getVar[Color]]

$thumbnail[$userAvatar[$clientID]]
$image[https://media.discordapp.net/attachments/1286357668155363370/1358525605959700690/HelpBotInfor_e_marca_dagua_Skipp.png?ex=67f42910&is=67f2d790&hm=9d856b446f36b21c010b5a2e4a23a36fc78f872d55c02a619d09c5c0ff1c683c&=&format=webp&quality=lossless&width=1232&height=529]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Links]

$addButton[1;Github;link;https://github.com/SrNap/Skipp;false;<:Github:1320172417649479801>]

$addButton[1;Top.gg;link;https://top.gg/bot/1296907824080879676;false;<:Topgg:1358131482316509456>]

$addButton[1;Website;link;https://skipp-bott.netlify.app;false;<:IconGlobol:1302390994905333792>]

$addButton[1;Me adicione;link;https://discord.com/oauth2/authorize?client_id=1296907824080879676&scope=bot+identify+guilds+email+applications.commands&permissions=2080374975;false;<:IconLink:1297673675704635422>]

$addButton[1;Suporte;link;https://discord.gg/q6UXWcZdvP;false;<:IconHome:1297352219829735455>]
`
}