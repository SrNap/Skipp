module.exports = [{
  name: "pescar",
  aliases: ["fish", "pesca", "fishing"],
  description: "Pesque peixes e ganhe dinheiro!",
  usage: "pescar",
  code: `
  $attachCanvas[pescar]

$fillText[pescar;$if[$getTextLength[$username]>6;$replaceText[$textSlice[$username;0;6];$textSlice[$username;0;6];$textSlice[$username;0;6]...];$username];#fff;90px Fredoka-Bold;300;190]

$fillText[pescar;$abbreviate[$getGlobalUserVar[HPP;$authorID]] HP;#fff;50px Chewy-Regular;385;280]
  $fillText[pescar;$abbreviate[$getGlobalUserVar[Fish;$authorID]];#fff;100px Chewy-Regular;199;470]
  $fillText[pescar;$abbreviate[$getGlobalUserVar[Lixo;$authorID]];#fff;100px Chewy-Regular;199;635]
  
$drawImage[pescar;$userAvatar[$authorID];57;85;230;230;500]
$drawImage[pescar;./assets/images/layoutpesca.png;0;0;1280;720]

$createCanvas[pescar;1280;720]

$onlyIf[$getGlobalUserVar[Vip;$authorID]!=false;⠀⠀<:Erro:1292980975290286135> **›** Este recurso é exclusivo do **Skipp Premium**! Use **$getGuildVar[Prefix]premium** para ver as vantagens e comprar o seu.]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Pescar]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]

$addSelectMenu[1;string;pescar_$authorID;🎣 › Selecione uma opção!;1;1;false;Pescar:Vá até o lago para pescar!:pescar:false:<:Peixe:1319052324869640223>;Loja:Venda seus peixes ou recicle o lixo encontrado.:loja:false:<:Lixo:1319052599571513395>]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  $if: "old",
  code: `
$if[$randomText[lixo;lixo;lixo;lixo;lixo;peixe;peixe;peixe;peixe;peixe]==peixe]

$interactionUpdate[{newEmbed:{image:https://media.discordapp.net/attachments/1286357668155363370/1350613798058197054/2_20250315_112944_0001.png?ex=67d7609e&is=67d60f1e&hm=503dbf9728a80c0024069731b6ae33891b3d58ac95b6044e956a38a992b649d1&=&format=webp&quality=lossless&width=993&height=559}}

<:Peixe:1319052324869640223> **›** <@$authorID>, você pescou **$random[1;8] peixes**!]

$setGlobalUserVar[Fish;$sum[$getGlobalUserVar[Fish;$authorID];$random[1;8]];$authorID]
$setGlobalUserVar[HPP;$sub[$getGlobalUserVar[HPP;$authorID];1];$authorID]

$else

$interactionUpdate[{newEmbed:{image:https://media.discordapp.net/attachments/1286357668155363370/1350613798687604756/1_20250315_112944_0000.png?ex=67d7609e&is=67d60f1e&hm=87ab630cf8a5334e7be3559a149cc7c3402780626b45c628d876198706cefc10&=&format=webp&quality=lossless&width=993&height=559}}

<:Lixo:1319052599571513395> **›** <@$authorID>, você pescou **$random[1;10] Lixo**!]

$setGlobalUserVar[Lixo;$sum[$getGlobalUserVar[Lixo;$authorID];$random[1;10]];$authorID]
$setGlobalUserVar[HPP;$sub[$getGlobalUserVar[HPP;$authorID];1];$authorID]

$endif

$onlyIf[$getGlobalUserVar[HPP;$authorID]>=1;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você precisa de pelo menos de <:HPP:1322962167007412254>**1 HP** para pescar! Para conseguir HP use \`$getGuildVar[Prefix]hp\`.  {ephemeral} {interaction}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde. {ephemeral} {interaction}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==pescar;]
     $onlyIf[$interactionData[values[0]]==pescar;]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[https://media.discordapp.net/attachments/1286357668155363370/1350614791294681128/Loja_do_Sam.png?ex=67d7618b&is=67d6100b&hm=c291fb3a9af149ef7a534c49a76b4639efb192117a62912de19e19c36db6a8d3&=&format=webp&quality=lossless&width=994&height=559
{actionRow:{button:Vender Peixe:secondary:buypeixe_$authorID:false:<:Peixe:1319052324869640223>}{button:Vender Lixo:secondary:buypapel_$authorID:false:<:Lixo:1319052599571513395>}}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==pescar;]
    
$onlyIf[$interactionData[values[0]]==loja;]
  `
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionModal[VenderPeixe;vendep;
{actionRow:
    {textInput:Quantos peixes você quer vender?:1:numberpeixe:true:123:1:3}
  }
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buypeixe;]
`
},{
  name: "vendep",
  type: "interaction",
  prototype: "modal",
  code: `
$interactionReply[Você vendeu **$textInputValue[numberpeixe]** peixes por **$multi[350;$textInputValue[numberpeixe]] Cash**!;everyone;true;false]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$multi[350;$textInputValue[numberpeixe]]];$authorID]
$setGlobalUserVar[Fish;$sub[$getGlobalUserVar[Fish;$authorID];$textInputValue[numberpeixe]];$authorID]

$onlyIf[$getGlobalUserVar[Fish;$authorID]>=$textInputValue[numberpeixe];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **$textInputValue[numberpeixe]** peixes para vender! {ephemeral} {interaction}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$textInputValue[numberpeixe]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar um número para vender! {ephemeral} {interaction}]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionModal[VenderPapel;vendel;
{actionRow:
  {textInput:Quantos lixos você quer reciclar?:1:numbelixo:true:123:1:3}
}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buypapel;]
`
},{
  name: "vendel",
  type: "interaction",
  prototype: "modal",
  code: `
$interactionReply[Você reciclou **$textInputValue[numbelixo]** lixos por **$multi[25;$textInputValue[numbelixo]] Cash**!;everyone;true;false]

$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$multi[25;$textInputValue[numbelixo]]];$authorID]

$setGlobalUserVar[Lixo;$sub[$getGlobalUserVar[Lixo;$authorID];$textInputValue[numbelixo]];$authorID]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$getGlobalUserVar[Lixo;$authorID]>=$textInputValue[numbelixo];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não tem **$textInputValue[numbelixo]** lixos para reciclar! {ephemeral} {interaction}]
$onlyIf[$isNumber[$textInputValue[numbelixo]]==true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar um número válido! {ephemeral} {interaction}]
`
}]