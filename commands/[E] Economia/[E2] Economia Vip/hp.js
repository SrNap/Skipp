module.exports = {
  name: "hp",
  aliases: ["hpp"],
  description: "Adquira mais Hp!",
  usage: "hp",
  code: `
> <@$authorID>, depois de um bom descanso, seu HP foi restaurado! 🛌🎣  
Você agora tem <:HPP:1322962167007412254>**$getGlobalUserVar[HPP;$authorID] HP** — que tal lançar a isca de novo?

$setGlobalUserVar[HPP;$sum[$getGlobalUserVar[HPP;$authorID];5];$authorID]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - hp]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]

$globalCooldown[5h;⠀⠀<:Cooldown:1296999969747894313> **›** <@$authorID>, você já resgatou seu HP recentemente! Volte <t:$truncate[$divide[$sum[$getCooldownTime[5h;globalUser;hp;$authorID];$dateStamp];1000]]:R> para resgatar novamente! {deleteIn:1h}]
$onlyIf[$getGlobalUserVar[Vip;$authorID]!=false;⠀⠀<:Erro:1292980975290286135> **›** Este recurso é exclusivo do **Skipp Premium**! Use **$getGuildVar[Prefix]premium** para ver as vantagens e comprar o seu.]
$onlyIf[$getGlobalUserVar[HPP;$authorID]==0;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você ainda tem <:HPP:1322962167007412254>**HP**!]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}