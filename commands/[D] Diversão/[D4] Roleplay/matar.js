module.exports = [{
  name: "matar",
  aliases: ["kill"],
  code: `
  $reply
 $description[⚔️ **<@$authorID> matou o <@$mentioned[1]>!**]
 $image[$randomText[https://media.discordapp.net/attachments/1286357668155363370/1352775283127881829/7d2c0298928b279620fe7f62f28b985ee0e61da7.gif?ex=67df3da8&is=67ddec28&hm=574e7d59a36fa0cbc06f102ede004fd5be5602a88f49460e7691005571d7f285&=&width=450&height=253;https://images-ext-1.discordapp.net/external/cQsewSxqk7pGY521W7G04YkwNFoh6_OLw4_N_RfVh0Y/https/rrp-production.loritta.website/img/abc3a03bd7e7ab9838b00c9a3ecf8721de787342.gif?width=450&height=253]]
 $footer[$username;$authorAvatar]
 $addTimestamp


$onlyIf[$getGlobalUserVar[Vip;$authorID]!=false;⠀⠀<:Erro:1292980975290286135> **›** Este recurso é exclusivo do **Skipp Premium**! Use **$getGuildVar[Prefix]premium** para ver as vantagens e comprar o seu.]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
 $suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você precisa mencionar alguém para matar!]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Matar]
$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode matar si mesmo!]
`
}]