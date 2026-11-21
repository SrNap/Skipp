module.exports = {
  name: "beijar",
  aliases: ["kiss"],
  description: "Beije alguém",
  usage:"beijar <user>",
  code: `
  $reply
 $description[😚 **<@$authorID> beijou <@$mentioned[1]>!**]
 $image[$randomText[https://images-ext-1.discordapp.net/external/LyETsiwAtMhjbEWDGb7XrjsZuOuEM_iOrG3yQoR2lWI/https/rrp-production.loritta.website/img/c2cee863777c2cd57c5749eee39279e82a6d6c4c.gif;https://images-ext-1.discordapp.net/external/HDNgamgMu4Pa5znlqcW-EJCVODI3SimmgsbzlirbjbY/https/rrp-production.loritta.website/img/8d5f89d91420f73c3ce3bb135c73b721be6df17a.gif]]
 $footer[$username;$authorAvatar]
 $addTimestamp
 $onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
 $suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$mentioned[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você precisa mencionar alguém para beijar!]
$onlyIf[$mentioned[1]!=$authorID;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode beijar a si mesmo!]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Beijar]
`
}