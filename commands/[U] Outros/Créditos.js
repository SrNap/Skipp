module.exports = {
  name: "creditos",
  aliases: ['credits', 'créditos'],
  description: "Veja os créditos do bot",
  usage: "creditos",
  code: `$clientTyping
$reply
$author[Créditos;$userAvatar[$clientID]]
  $description[Olá <@$authorID>, Aqui esta meus desenvolvedores e Colaboradores!]

$addField[✨ Inspirações e Referências:;>>> [Loritta](https://loritta.website/br/?utm_source=discord&utm_medium=loritta-info&utm_campaign=loritta-info-links&utm_content=home-page) - O **Bot favorito** do SrNap e sua maior inspiração!
[]
**Outros bot** - Outros bots que inpiraram o SrNap a criar os comandos, que infelizmente ele não lembra o nome.
]

$addField[<:Colaboradores:1316443111169200239> Colaboradores:;>>> [Darkk](https://discord.com/users/1215749332809154643) \`(1215749332809154643)\` - Ajudante de desevolvimento.
[Lozy](https://discord.com/users/1363180740874866788) \`(1363180740874866788)\` - Designer e ajudante pricipal.
[Gamecord](https://discord-gamecord.js.org) - Criador dos minigames.
[ABCloud](https://abccloud.com.br/) - Host Atual]

$addField[<a:Dev:1316438610551111752> Desenvolvedores:;>>> [SrNap](https://discord.com/users/1021777907263221862) \`(1021777907263221862)\` - Criador, designer e desenvolvedor principal.]

$color[$getVar[Color]]
$footer[$username;$authorAvatar]
$addTimestamp
$image[https://media.discordapp.net/attachments/1286357668155363370/1323669603053735956/standard_6.gif?ex=67755ae1&is=67740961&hm=6b618235952f5279a3bab214e02f3e5c1e6b00777c205a6333f6cca3e2e513f6&]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Créditos]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]

$addButton[1;Github;link;https://github.com/SrNap/Skipp;false;<:Github:1320172417649479801>]

$addButton[1;Suporte;link;https://discord.gg/q6UXWcZdvP;false;<:IconHome:1297352219829735455>]

$addButton[1;Website;link;https://skipp-bott.netlify.app;false;<:IconGlobol:1302390994905333792>]
`
}