module.exports = [{
  name: "background",
  aliases: ["bg", "fundo"],
  code: `
  $reply
>>> Olá! Seja bem-vindo(a) a minha **loja de backgrounds**! Aqui você pode comprar backgrounds para seu perfil! Clique no botão abaixo para continuar.

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Background]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]

$addButton[1;Banner personaliado;link;https://discord.gg/Cnj2JE9rgK;false]
$addButton[1;;primary;bg1_$authorID;false;<:Seta_Dirt:1323066151269437461>]
$addButton[1;;primary;bg2_$authorID;true;<:Seta_Esqu:1323066113268912149>]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664279899738112/Navegador_Web_do_Skipp_1.png?ex=67db32f5&is=67d9e175&hm=89e5ac9aac3992f812428e73e8e711605e6177244e5e7746b8db74ca41bfc55c&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg21_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:15.000:secondary:buybg1_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg30_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:1/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg1;]
  `
},{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]
  
$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];15000];$authorID]

$setGlobalUserVar[Background;bg1.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=15000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **15.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg1.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg1;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664280159916052/Navegador_Web_do_Skipp_2.png?ex=67db32f5&is=67d9e175&hm=11c3fc456c61fc286f4a716931f87887038a637d54854c91565ff7bfd6459555&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg1_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:12.000:secondary:buybg2_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg3_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:2/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg2;]
  `
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];12000];$authorID]

$setGlobalUserVar[Background;bg2.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=12000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **12.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg2.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg2;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664280466096178/Navegador_Web_do_Skipp_3.png?ex=67db32f5&is=67d9e175&hm=bb36521045addfd861db34984a29c9af0bf4501ffcbbb34dbcd4e5038ee9ff2e&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg2_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:10.000:secondary:buybg3_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg4_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:3/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg3;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];10000];$authorID]
$setGlobalUserVar[Background;bg3.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=10000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **10.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg3.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg3;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664280805572723/Navegador_Web_do_Skipp_4.png?ex=67db32f5&is=67d9e175&hm=3372ff114fe0d8b39397310942819cd7902b823198b1246cd9f0ab941ce19f7e&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg3_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:20.000:secondary:buybg4_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg5_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:4/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg4;]
`
},{
    type: "interaction",
    prototype: "button",
    code: `
  $interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

  $setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];20000];$authorID]
  $setGlobalUserVar[Background;bg4.png]

  $onlyIf[$getGlobalUserVar[Cash;$authorID]>=20000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **20.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg4.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg4;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664281200103435/Navegador_Web_do_Skipp_5.png?ex=67db32f5&is=67d9e175&hm=d177237181928aac6d38c0f32ed4fbb383e802536a59796efc6d52b036910723&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg4_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:16.000:secondary:buybg5_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg6_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:5/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg5;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];16000];$authorID]
$setGlobalUserVar[Background;bg5.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=16000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **16.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg5.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg5;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664281539838013/Navegador_Web_do_Skipp_6.png?ex=67db32f5&is=67d9e175&hm=e0a7fcd47ee5cc643c358f8043e5b793de1a240f2083d1a4bd5a2f3d317b28fe&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg5_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:10.000:secondary:buybg6_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg7_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:6/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg6;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];10000];$authorID]
$setGlobalUserVar[Background;bg6.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=10000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **10.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg6.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg6;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664281946427462/Navegador_Web_do_Skipp_7.png?ex=67db32f5&is=67d9e175&hm=3083bdb724979b49039a666408f97ef75a183e30a60f74dff846d0b647b6de78&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg6_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:18.000:secondary:buybg7_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg8_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:7/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg7;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];18000];$authorID]
$setGlobalUserVar[Background;bg7.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=18000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **18.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg7.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg7;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664282231767214/Navegador_Web_do_Skipp_8.png?ex=67db32f5&is=67d9e175&hm=c36e05100af198b84d99e36692a930df1bb49fe0396e0c711277d5d5f62a601d&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg7_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:13.000:secondary:buybg8_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg9_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:8/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg8;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];13000];$authorID]
$setGlobalUserVar[Background;bg8.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=13000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **13.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg8.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg8;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664282521043024/Navegador_Web_do_Skipp_9.png?ex=67db32f5&is=67d9e175&hm=8d4ca7be05b3c4685d368359e4a96403b2570bcfc0e43354a2ba07998ba4471f&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg8_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:20.000:secondary:buybg9_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg10_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:9/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg9;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];20000];$authorID]
$setGlobalUserVar[Background;bg9.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=20000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **20.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg9.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg9;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1365415975444545606/Navegador_Web_do_Skipp_20250425_163715_0000.png?ex=680d3a38&is=680be8b8&hm=6da790edfa3dd2dc309da0e88b1bce6750c9fbe15e7db8670c03d882f9a55585&=&format=webp&quality=lossless&width=1139&height=562
{actionRow:{button::secondary:bg9_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:18.000:secondary:buybg10_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg11_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:10/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg10;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];18000];$authorID]
$setGlobalUserVar[Background;bg10.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=18000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **18000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg10.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg10;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664340624871535/Navegador_Web_do_Skipp_11.png?ex=67db3303&is=67d9e183&hm=aa38b837611787e5c911763b457a4b1edf2f68a44ba492feaeefde37400dc797&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg10_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:16.000:secondary:buybg11_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg12_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:11/30:secondary:bg13_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg11;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];16000];$authorID]
$setGlobalUserVar[Background;bg11.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=16000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **16.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg11.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg11;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664340930924604/Navegador_Web_do_Skipp_12.png?ex=67db3303&is=67d9e183&hm=696009c800626dc8d7144f1e5ac1d5aa3e91e4b99c7dee34580dc91dbdb6cf37&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg11_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:17.000:secondary:buybg12_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg13_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:12/30:secondary:bg14_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg12;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];17000];$authorID]
$setGlobalUserVar[Background;bg12.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=17000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **17.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg12.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg12;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664341300019333/Navegador_Web_do_Skipp_13.png?ex=67db3303&is=67d9e183&hm=183bcf48c1315fcbd041885a33b9be60b8aba568b8c86a07b4f124299f6899c1&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg12_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:20.000:secondary:buybg13_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg14_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:13/30:secondary:bg15_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg13;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];20000];$authorID]
$setGlobalUserVar[Background;bg13.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=20000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **20.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg13.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg13;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664341694415000/Navegador_Web_do_Skipp_14.png?ex=67db3303&is=67d9e183&hm=d3f14224b86501271ec8c3ca34acb07cd5014d41faa9a1615edffaf7c892c9da&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg13_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:15.000:secondary:buybg14_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg15_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:14/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg14;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];15000];$authorID]
$setGlobalUserVar[Background;bg14.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=15000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **15.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg14.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg14;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664342063644713/Navegador_Web_do_Skipp_15.png?ex=67db3303&is=67d9e183&hm=35f598556f4ed4ce7c740da073bd43c098f8fe49b8580e59a067a03f42f323ff&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg14_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:18.000:secondary:buybg15_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg16_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:15/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg15;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];18000];$authorID]
$setGlobalUserVar[Background;bg15.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=18000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **18.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg15.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg15;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664342332084337/Navegador_Web_do_Skipp_16.png?ex=67db3303&is=67d9e183&hm=6c7398fa4fa9dcfc445ba0d468e30734b9a5f15644d8cd223c9fd74363a38003&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg15_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:18.000:secondary:buybg16_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg17_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:16/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg16;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];18000];$authorID]
$setGlobalUserVar[Background;bg16.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=18000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **18.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg16.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg16;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664342663303232/Navegador_Web_do_Skipp_17.png?ex=67db3304&is=67d9e184&hm=37fba47e85a725d585037667d1d2aa344e49e898f7b11bfc60b206f424cd9862&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg16_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:22.000:secondary:buybg17_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg18_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:17/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg17;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];22000];$authorID]
$setGlobalUserVar[Background;bg17.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=22000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **22.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg17.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg17;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664343036727448/Navegador_Web_do_Skipp_18.png?ex=67db3304&is=67d9e184&hm=d1669a9a764658af6b2a57a372fdb85e431ed1c24e9bf1edfc16ebd60b1a4d0d&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg17_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:19.000:secondary:buybg18_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg19_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:18/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg18;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];19000];$authorID]
$setGlobalUserVar[Background;bg18.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=19000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **19.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg18.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg18;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664343451832470/Navegador_Web_do_Skipp_19.png?ex=67db3304&is=67d9e184&hm=0b395ca939955e7908fd844283b03d39f11e4cfa06e73ef95e4cc113bb8c9b70&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg18_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:23.000:secondary:buybg19_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg20_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:19/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg19;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];23000];$authorID]
$setGlobalUserVar[Background;bg19.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=23000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **23.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg19.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg19;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664343724458136/Navegador_Web_do_Skipp_20.png?ex=67db3304&is=67d9e184&hm=31912b6817871a9acdf61ec25c1fc9da6e57aa949c43b7b0ed97c2eda82fd8f6&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg19_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:17.000:secondary:buybg20_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg21_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:20/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg20;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];17000];$authorID]
$setGlobalUserVar[Background;bg20.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=17000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **17.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg20.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg20;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1351664386489585767/Navegador_Web_do_Skipp_21.png?ex=67db330e&is=67d9e18e&hm=32a85b8f8f7ca15b7fe57fc9fb0081e50ecb778b2993e11d1a4335872c170179&=&format=webp&quality=lossless&width=1057&height=521
{actionRow:{button::secondary:bg20_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:22.000:secondary:buybg21_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg22_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:21/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg21;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];3000];$authorID]
$setGlobalUserVar[Background;bg21.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=22000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **22.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg21.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg21;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1365415974161092619/Navegador_Web_do_Skipp_20250425_165122_0000.png?ex=680d3a38&is=680be8b8&hm=4d5e50f75a01a26b00d468b119ccf7d8a590df1a6fc3dee8fbd8b9cb190226f5&=&format=webp&quality=lossless&width=1139&height=562
{actionRow:{button::secondary:bg21_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:18.000:secondary:buybg22_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg23_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:22/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg22;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];3000];$authorID]
$setGlobalUserVar[Background;bg22.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=18000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **18.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg22.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg22;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1365415975733821640/Navegador_Web_do_Skipp_20250425_163813_0000.png?ex=680d3a38&is=680be8b8&hm=156029e2a9f3b686e710b535d2f75ef85fca18929df5f7c30f6fae4fdf56acc6&=&format=webp&quality=lossless&width=1139&height=562
{actionRow:{button::secondary:bg22_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:16.000:secondary:buybg23_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg24_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:23/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg23;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];3000];$authorID]
$setGlobalUserVar[Background;bg23.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=16000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **16.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg23.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg23;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1365415976182485062/Navegador_Web_do_Skipp_20250425_163902_0000.png?ex=680d3a38&is=680be8b8&hm=64d614d1bc158711da3283e1bcf6f61deead7f50465d2f32adea1fdac09cdf7c&=&format=webp&quality=lossless&width=1139&height=562
{actionRow:{button::secondary:bg23_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:15.000:secondary:buybg24_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg25_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:24/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg24;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];3000];$authorID]
$setGlobalUserVar[Background;bg24.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=15000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **15.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg24.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg24;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1365415975066796122/Navegador_Web_do_Skipp_20250425_164251_0000.png?ex=680d3a38&is=680be8b8&hm=c3594806367b8c066d8ec1827022f4b261fbbcc06037814c318eebece7d7a0e9&=&format=webp&quality=lossless&width=1139&height=562
{actionRow:{button::secondary:bg24_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:20.000:secondary:buybg25_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg26_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:25/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg25;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];3000];$authorID]
$setGlobalUserVar[Background;bg25.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=20000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **20.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg25.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg25;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1365415973829738507/Navegador_Web_do_Skipp_20250425_165216_0000.png?ex=680d3a38&is=680be8b8&hm=edf2878d602cafc2e7e22ed054521b3086cc696c45e4108a869bc3cca6ac3c91&=&format=webp&quality=lossless&width=1139&height=562
{actionRow:{button::secondary:bg25_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:16.000:secondary:buybg26_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg27_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:26/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg26;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];3000];$authorID]
$setGlobalUserVar[Background;bg26.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=16000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **16.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg26.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg26;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1365430654648713368/Navegador_Web_do_Skipp_20250425_175338_0000.png?ex=680d47e4&is=680bf664&hm=1e3a09b3fa86a57cab65759f68ce246784625b493fcf9cd03435ef2a9571f784&=&format=webp&quality=lossless&width=1140&height=562
{actionRow:{button::secondary:bg26_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:17.000:secondary:buybg27_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg28_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:27/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg27;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];3000];$authorID]
$setGlobalUserVar[Background;bg27.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=17000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **17.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg27.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg27;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1365415974777520219/Navegador_Web_do_Skipp_20250425_164333_0000.png?ex=680d3a38&is=680be8b8&hm=88ed080590b584a7e7c90c0991cadbf9544c157e1d41f0f07a7653ae9231d150&=&format=webp&quality=lossless&width=1139&height=562
{actionRow:{button::secondary:bg27_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:20.000:secondary:buybg28_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg29_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:28/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg28;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];3000];$authorID]
$setGlobalUserVar[Background;bg28.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=20000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **20.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg28.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg28;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1365421518993231932/Navegador_Web_do_Skipp_20250425_171524_0000.png?ex=680d3f62&is=680bede2&hm=fc3236af80a3ff7077f430cc4266b1d9cc88290c898c1756ce572f5777691a52&=&format=webp&quality=lossless&width=1139&height=562
{actionRow:{button::secondary:bg28_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:17.000:secondary:buybg29_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg30_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:29/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg29;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];3000];$authorID]
$setGlobalUserVar[Background;bg29.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=17000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **17.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg29.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg29;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1365421518666072134/Navegador_Web_do_Skipp_20250425_171714_0000.png?ex=680d3f62&is=680bede2&hm=3174175e2733a562f7ead3cd430668dcc2792aac3c5684020fca200db9caae78&=&format=webp&quality=lossless&width=1139&height=562
{actionRow:{button::secondary:bg29_$authorID:false:<:Seta_Esqu:1323066113268912149>}{button:18.000:secondary:buybg30_$authorID:false:<:Cash:1297005054099849247>}{button::secondary:bg1_$authorID:false:<:Seta_Dirt:1323066151269437461>}{button:30/30:secondary:bg12_$authorID:true}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bg30;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[>>> Compra realizada com sucesso! Use **$getGuildVar[Prefix]perfil** para ver seu banner atual.;everyone;true;false]

$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];3000];$authorID]
$setGlobalUserVar[Background;bg30.png]

$onlyIf[$getGlobalUserVar[Cash;$authorID]>=18000;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **18.000 Cash** para comprar este background! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Background;$authorID]!=bg30.png;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já com esta backgraund equipado! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buybg21;]
`
}]