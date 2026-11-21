module.exports = {
  name: "suporte",
  aliases: ["support"],
  description: "Entre no servidor de suporte do bot",
  usage: "suporte",
  code: `
$reply
$description[**Oi, <@$authorID>! Tudo certo?**
Se precisar de ajuda, quiser reportar algum problema ou enviar sugestões, é só chamar!
Quer saber mais sobre o **Premium Skipp**? Podemos te explicar tudinho com um atendimento rápido.

Clique aqui ou use o botão abaixo para entrar no nosso servidor de suporte!]
$color[$getVar[Color]]
$footer[$username;$authorAvatar]
$addTimestamp

$thumbnail[$userAvatar[$clientID]]
$image[https://media.discordapp.net/attachments/1286357668155363370/1358525254221434880/4.png?ex=67f428bc&is=67f2d73c&hm=590bfece2d97e7db1b298f35aeb07466a16fce1b43302ded3fd973a4a367b871&=&format=webp&quality=lossless&width=1128&height=485]

$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]


$addButton[1;Suporte;link;https://discord.gg/q6UXWcZdvP;false;<:IconHome:1297352219829735455>]
`
}