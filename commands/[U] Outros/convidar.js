module.exports = {
  name: "convidar",
  aliases: ["convite", "invite"],
  description: "Convidar o bot para seu servidor",
  usage: "convidar",
  code: `
$reply
$description[**Olá, <@$authorID>, tudo bão?**

> - <:IconLink:1297673675704635422> **Me Convide:** [[ clique aqui ]](https://discord.com/oauth2/authorize?client_id=1296907824080879676&scope=bot+identify+guilds+email+applications.commands&permissions=2080374975)
Meu link de convite para você me convidar!
> - <:IconHome:1297352219829735455> **Suporte:** [[ clique aqui ]](https://discord.gg/q6UXWcZdvP)
Meu servidor oficial!

-# Caso queira tbm tem os botoes abaixo.]
$color[$getVar[Color]]
$footer[$username;$authorAvatar]
$addTimestamp

$thumbnail[$userAvatar[$clientID]]
$image[https://media.discordapp.net/attachments/1286357668155363370/1358525254850445502/3.png?ex=67f428bc&is=67f2d73c&hm=7f7173663ae28eef8263fe92034d8e505ea6f066032598569826e031d906cbc7&=&format=webp&quality=lossless&width=1128&height=485]

$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]


$addButton[1;Suporte;link;https://discord.gg/q6UXWcZdvP;false;<:IconHome:1297352219829735455>]

$addButton[1;Me adicione;link;https://discord.com/oauth2/authorize?client_id=1296907824080879676&scope=bot+identify+guilds+email+applications.commands&permissions=2080374975;false;<:IconLink:1297673675704635422>]
`
}