module.exports = [{
  name: "perfil",
  aliases: ['profile', 'p'],
  description: "Veja o perfil de alguém!",
  usage: "perfil <User>",
  code: `
$if[$mentioned[1;true]==$authorID;Seu perfil <@$authorID>;<@$authorID> Perfil do usuário: <@$mentioned[1]>]

  $attachCanvas[avatar]
  $fillText[avatar;$if[$getTextLength[$username[$mentioned[1;true]]]>15;$replaceText[$textSlice[$username[$mentioned[1;true]];0;6];$textSlice[$username[$mentioned[1;true]];0;6];$textSlice[$username[$mentioned[1;true]];0;15]...];$username[$mentioned[1;true]]];#fff;60px Fredoka-Bold;362;364]
  $fillText[avatar;$abbreviate[$getGlobalUserVar[Reputação;$mentioned[1]]];#fff;24px Chewy-Regular;1035;55]
  $fillText[avatar;$abbreviate[$getGlobalUserVar[Cash;$mentioned[1;true]]];#fff;33px Chewy-Regular;133;442]
  $fillText[avatar;$abbreviate[$getGlobalUserVar[Gems;$mentioned[1;true]]];#fff;33px Chewy-Regular;133;525]
  $fillText[avatar;$getGlobalUserVar[Sobremim;$mentioned[1;true]];#cfcfcf;22px Poppins-Bold;366;463;750;;;true;true]
  $drawImage[avatar;./assets/images/layout$if[$getGlobalUserVar[Vip;$mentioned[1;true]]==false;;2].png;0;0;1174;579]
  $drawImage[avatar;$userAvatar[$mentioned[1;true]];101;187;206;206;103]
  $drawImage[avatar;./assets/images/bg/$getGlobalUserVar[Background;$mentioned[1;true]];0;0;1174;320]
  $createCanvas[avatar;1174;579]

$onlyIf[$isBot[$mentioned[1]]!=true;<:Erro:1292980975290286135> **›** <@$authorID>, você não pode ver o perfil de um bot!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Perfil]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=1;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$globalCooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente!]

$addButton[1;Ver o Perfil;link;https://discord.com/users/$mentioned[1;true];false;👤]
  `
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[Escolha uma opção abaixo para editar!
{actionRow:{selectMenu:editarp_$authorID:✍️ › Selecione para Editar!:1:1:false:{stringInput:Sobremim:editsobre:Edite seu sobre mim!:false}{stringInput:Backgraund:bg000:Edite seu backgraund!:false}}};everyone;true;false]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==edita;]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionModals[Editar SobreMim;editsobre;
{actionRow:
{textInput:Sobremim:1:sobre:true:Sobremim:0:200}
}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==editarp;]
    

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==editsobre;]
`
},{
  name: "editsobre",
  type: "interaction",
  prototype: "modal",
  code: `
$interactionReply[<:Descricao:1299773078569746463> **›** <@$authorID>, você alterou seu sobremim para: **$textInputValue[sobre]...**;everyone;true;false]

$setGlobalUserVar[Sobremim;$textInputValue[sobre];$authorID]

$log[[DEBUG] => $userTag[$authorID]($authorID) Alterou seu sobremim]

$onlyIf[$charCount[$textInputValue[sobre]]<=200;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar um sobremim com no máximo **200** caracteres! {ephemeral} {interaction}]

$onlyIf[$textInputValue[sobre]!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você deve colocar um sobremim! {ephemeral} {interaction}]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionReply[>>> Olá! Seja bem-vindo(a) a minha loja de backgrounds! Aqui você pode comprar backgrounds para seu perfil! Clique para continuar.
{actionRow:{button::secondary:bg3_$authorID:true:<:Seta_Esqu:1323066113268912149>}{button::secondary:bg1_$authorID:false:<:Seta_Dirt:1323066151269437461>}};everyone;true;false]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==editarp;]
    
     $onlyIf[$interactionData[values[0]]==bg000;]
`
},{
  name: "repp",
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[<:Rep:1326940347565346870> **›** <@$authorID> enviou **+1 Reputação** para <@$get[mentioned]>, agora ele(a) possui **$getGlobalUserVar[Reputação;$get[mentioned]] Reputações**!]
  $setGlobalUserVar[Reputação;$sum[$getGlobalUserVar[Reputação;$getUserVar[rep_user;$authorID]];1];$getUserVar[rep_user;$authorID]]
  $globalCooldown[1h;$interactionReply[⠀⠀<:Cooldown:1296999969747894313> **›** <@$authorID> Você só pode enviar uma reputação a cada **1 hora**!;;true;false]]
  $onlyIf[$authorID!=$get[mentioned];$interactionReply[⠀⠀<:Erro:1292980975290286135> **›** Você não pode enviar reputação para você mesmo!;;true;false]]
  $onlyIf[$interactionData[customId]==add-$authorID]
  $let[isUserMentioned;$get[mentioned]!=$authorID]
  $let[mentioned;$getUserVar[rep_user;$authorID]]
`
}]