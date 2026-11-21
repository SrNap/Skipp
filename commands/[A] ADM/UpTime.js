module.exports = {
  name: "upTime",
  aliases: ["uptime"],
  code: `
  $author[UpTime - Skipp;https://media.discordapp.net/attachments/1286357668155363370/1360345378721108078/sinal.png?ex=67fac7dc&is=67f9765c&hm=2d1fd47643dab2372a88d4a1616fc853b40e0503bd23e87fb8bb1b7cd73244bd&=&format=webp&quality=lossless&width=544&height=544]
  $description[>>> <:Relogio:1299048611480604682> **Online** <t:$truncate[$math[($datestamp-$uptime[ms])/1000]]:R>
<a:emoji_53:1216102361030987896> **Versão atual**: $getVar[Versao]
<a:Sinal:1299047310680129638> **Ping**: \`$pingms\`
🖥️ **Monitorando**: \`$guildCount\` servidores & \`$allMembersCount\` usuários!
📁 **Comandos**: \`$commandsCount\`
<:Nodejs:1323376449939443772> **Versão Node:** \`$nodeVersion\`
<:Aoijs:1298066852647403561> **Versão Aoi.js:** \`$packageVersion\`
]
$color[$getVar[Color]]
$reply
$footer[$username;$authorAvatar]
$addTimestamp
$thumbnail[$userAvatar[$clientID]]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
  `
}