module.exports = {
  name: "crime",
  aliases: ["crime"],
  description: "Cometa um crime e ganhe ou perca dinheiro",
  usage:"crime",
  $if: "old",
  code: `
$if[$getGlobalUserVar[Vip;$authorID]==true]

$if[$random[0;100]<=50;50% chace;50% chance]

> Você $randomText[Roubou um **mercado**; Roubou uma **casa**; Assaltou um **banco**; Invadiu um **escritório**; Desviou **mercadorias** de um **caminhão**; Cometeu **fraude** **bancária**; Fez um **sequestro**; Realizou um **golpe** **online**; Cometeu **furto** em um **shopping**; Roubou um **carro**; Vendeu **produtos** **contrabandeados**] e ganhou <:Cash:1297005054099849247>**$random[1000;5000] Cash**!

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$random[1000;5000]];$authorID]

$else

> Você $randomText[Tentou roubar uma **casa**; Tentou assaltar um **banco**; Tentou invadir um **escritório**; Tentou desviar **mercadorias** de um **caminhão**; Tentou cometer **fraude** **bancária**; Tentou fazer um **golpe** **online**; Tentou fazer um **sequestro**; Tentou roubar um **carro**; Tentou vender **produtos** **contrabandeados**] e foi pego! Você perdeu <:Cash:1297005054099849247>**$random[500;1500] Cash**!

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];$random[500;1500]];$authorID]

$endif

$else

$if[$random[0;100]<=50;50% chace;50% chance]

> Você $randomText[Roubou um **mercado**; Roubou uma **casa**; Assaltou um **banco**; Invadiu um **escritório**; Desviou **mercadorias** de um **caminhão**; Cometeu **fraude** **bancária**; Fez um **sequestro**; Realizou um **golpe** **online**; Cometeu **furto** em um **shopping**; Roubou um **carro**; Vendeu **produtos** **contrabandeados**] e ganhou <:Cash:1297005054099849247>**$random[500;2500] Cash**!

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$random[500;2500]];$authorID]

$else

> Você $randomText[Tentou roubar uma **casa**; Tentou assaltar um **banco**; Tentou invadir um **escritório**; Tentou desviar **mercadorias** de um **caminhão**; Tentou cometer **fraude** **bancária**; Tentou fazer um **golpe** **online**; Tentou fazer um **sequestro**; Tentou roubar um **carro**; Tentou vender **produtos** **contrabandeados**] e foi pego! Você perdeu <:Cash:1297005054099849247>**$random[250;500] Cash**!

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];$random[250;500]];$authorID]

$endif
$endif

$reply

$globalCooldown[1h;⠀⠀<:Cooldown:1296999969747894313> **›** <@$authorID>, você já roubou recentemente! Volte em <t:$truncate[$divide[$sum[$getCooldownTime[1h;globalUser;crime;$authorID];$dateStamp];1000]]:R> para roubar novamente! {deleteIn:1h}]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Crime]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}
