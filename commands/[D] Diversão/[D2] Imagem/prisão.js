module.exports = {
    name: "prisão",
    aliases: ["jail", "prision","prisao"],
    description: "Gera uma imagem de um usuario na prisão",
    usage:"prisão <user>",
    code: `$attachment[$get[apilink];jail.png;URL]
$onlyIf[$IsValidImageLink[$get[apilink]]==true;⠀⠀<:Erro:1292980975290286135> **›** Parece que há problemas com o processamento da imagem. Por favor, tente novamente mais tarde, se possível.]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Prisão]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]

$let[apilink;https://api.popcat.xyz/jail?image=$get[pfphandler]]
$let[pfphandler;$advancedReplaceText[$userAvatar[$mentioned[1;true]];.webp;.png;.gif;.png]]
`
}