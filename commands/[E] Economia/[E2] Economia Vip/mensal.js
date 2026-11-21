module.exports = {
  name: "mensal",
  aliases: ["mensal", "mês", "monthly"],
  description: "Resgate seu bônus mensal",
  usage: "mensal",
  code: `
<@$authorID> Você coletou sua recompensa mensal e ganhou <:Cash:1297005054099849247>**$numberSeparator[$random[1000;7000];.] Cash** mais <:Gems:1302680643901325385>**$numberSeparator[$random[5;15];.] gems**!

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$random[1000;7000]];$authorID]
$setGlobalUserVar[Gems;$sum[$getGlobalUserVar[Gems;$authorID];$random[5;15]];$authorID]

$globalCooldown[30d;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já coletou sua recompensa mensal! Volte em <t:$truncate[$divide[$sum[$dateStamp;$getCooldownTime[30d;globalUser;mensal;$authorID;yes]];1000]]:R> para coletar novamente! {deleteIn:1h}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - mensal]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$onlyIf[$getGlobalUserVar[Vip;$authorID]!=false;⠀⠀<:Erro:1292980975290286135> **›** Este recurso é exclusivo do **Skipp Premium**! Use **$getGuildVar[Prefix]premium** para ver as vantagens e comprar o seu.]
`
}