module.exports = {
    name: "wanted",
    aliases: ["procurado"],
    description: "Veja um amigo sendo procurado",
    usage:"wanted <user>",
    code: `$attachment[$get[apilink];wanted.png;URL]
$onlyIf[$IsValidImageLink[$get[apilink]]==true;⠀⠀<:Erro:1292980975290286135> **›** Parece que há problemas com o processamento da imagem. Por favor, tente novamente mais tarde, se possível.]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Wanted]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]

$let[apilink;https://api.popcat.xyz/wanted?image=$get[pfphandler]]
$let[pfphandler;$advancedReplaceText[$userAvatar[$mentioned[1;true]];.webp;.png;.gif;.png]]
`
}