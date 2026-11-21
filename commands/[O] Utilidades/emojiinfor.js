module.exports = ({
    name: "emojiinfor",
    aliases: ["emoji-infor","ei", "emojiinfo", "emoji-info"],
    description: "Veja as informações de um emoji",
    usage: "emojiinfor <emoji>",
    code: `$title[$message[1] Emojiinfor]
    $addField[<:Calendrio:1297972195976417290> Criado em:;<t:$truncate[$math[($replaceText[$splitText[3];>;;1]/4194304+1420070400000)/1000]]:f> (<t:$truncate[$math[($replaceText[$splitText[3];>;;1]/4194304+1420070400000)/1000]]:R>)]
    
    $addField[👀 Menção:;\`$message[1]\`
    $addField[<:ID:1297972174170230916> ID:;\`$splitText[3]\`]
    
    $addField[<:Tag:1297991897138335887> Nome:;\`$splitText[2]\`]

$thumbnail[https://cdn.discordapp.com/emojis/$replaceText[$splitText[3];>;;1].$replaceText[$replaceText[*$splitText[1]*;*<*;png;1];*<a*;gif;1]]
    
$footer[$username;$authorAvatar]
    $addTimestamp

$addButton[1;Abrir emoji;link;https://cdn.discordapp.com/emojis/$replaceText[$splitText[3];>;;1].$replaceText[$replaceText[*$splitText[1]*;*<*;png;1];*<a*;gif;1];false]

$onlyIf[$message[1]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não colocou o emoji!]
$onlyIf[$checkContains[$message[1];<]==true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não colocou o emoji!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Emojiinfor]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]


    $textSplit[$message[1];:]

    `
});