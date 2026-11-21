module.exports = {
  name: "reputação",
  aliases: ['rep', 'reputation'],
  code: `<:Rep:1326940347565346870> **›** <@$authorID> enviou **+1 Reputação** para <@$mentioned[1]>, agora ele(a) possui **$getGlobalUserVar[Reputação;$mentioned[1]] Reputações!**

$setGlobalUserVar[Reputação;$sum[$getGlobalUserVar[Reputação;$mentioned[1]];1];$mentioned[1]]

$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** Você não pode enviar reputação para você mesmo!]

$onlyIf[$isBot[$mentioned[1]]!=true;⠀⠀<:Erro:1292980975290286135> **›** Você não pode enviar reputação para um bot!]

$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** Mencione alguém para enviar reputação!]

$globalCooldown[1h;⠀⠀<:Cooldown:1296999969747894313> **›** Você só pode enviar uma reputação <t:$truncate[$divide[$sum[$getCooldownTime[1h;globalUser;exploração;$authorID];$dateStamp];1000]]:R>!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Reputação]
$onlyIf[$getGlobalUserVar[Blacklist;$mentioned[1]]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, o $mentioned[1] está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$mentioned[1]]\`!]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
`
}