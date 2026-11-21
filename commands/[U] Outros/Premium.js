module.exports = [{
  name: "premium",
  aliases: ["premium"],
  description: "Mostra informações sobre o premium",
  usage: "premium",
  code: `
$description[## Skipp Premium
**$userTag[$authorID]**, com o Premium você desbloqueia benefícios exclusivos e ainda contribui para manter o Skipp ativo!
Por apenas 500 moedas, você garante 30 dias de assinatura e acesso a recompensas únicas que vão deixar sua experiência ainda mais épica!

### Veja os benefícios abaixo:

> - Comandos **exclusivos**
> - O **DOBRO de cash e gems** no comando de \`daily\`
> - **Bônus instantâneo**: *200.000 Cash*!
]
$color[$getVar[Color]]
$footer[$username;$authorAvatar]
$addTimestamp

$image[https://cdn.discordapp.com/attachments/1286357668155363370/1362524463534571640/HelpBotInfor_e_marca_dagua_Skipp_1.png?ex=6802b54a&is=680163ca&hm=a02d789652e028a435f32974ee6f88258542e94832d074e9752fb12bdc9ba5c3&]
$thumbnail[$userAvatar[$clientID]]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Premium]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]

$addSelectMenu[1;string;premium_$authorID;👑 › Selecione uma opção.;1;1;false;Assinar Premium:Desbloqueie recursos e deixe sua experiência ainda mais épica:premium1:false:<:Premium:1362857408551977171>;Configuração:Configure o seu premium:premium2:false:<a:engine:1214737961716027392>]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionReply[**$userTag[$authorID]**, você quer ativar o **Skipp Premium** por **30 dias** por apenas <:Gems:1302680643901325385>**350 Gems**?

> Com ele, você libera vantagens exclusivas e uma experiência premium. Que tal dar esse upgrade agora?
{actionRow:{button:Sim, quero!:secondary:buypremium_$authorID:false}};everyone;true;false]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==premium;]
    
$onlyIf[$interactionData[values[0]]==premium1;]
`
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionReply[Em breve...;everyone;true;false]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==premium;]
    
$onlyIf[$interactionData[values[0]]==premium2;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[⠀⠀<:Correto:1315387573237059625> **›** <@$authorID>, sua compra foi finalizada com sucesso! Aproveite seu **Premium**!;everyone;true;false]

$setGlobalUserVar[Vip;true;$advancedTextSplit[$interactionData[customId];_;2]]
$setGlobalUserVar[Gems;$sub[$getGlobalUserVar[Gems;$advancedTextSplit[$interactionData[customId];_;2]];350];$advancedTextSplit[$interactionData[customId];_;2]]

$log[[DEBUG] => $userTag[$advancedTextSplit[$interactionData[customId];_;2]]($advancedTextSplit[$interactionData[customId];_;2]) Usou o comando - Premium(Compra)]

$setTimeout[premiumtime;30d;{"userID": "$advancedTextSplit[$interactionData[customId];_;2]", "customId": "premiumtime", "ChannelID": "$channelID"};false]

$onlyIf[$getGlobalUserVar[Gems;$advancedTextSplit[$interactionData[customId];_;2]]>=350;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não possui <:Gems:1302680643901325385>**350 Gems**! {ephemeral} {interaction}]

$onlyIf[$getGlobalUserVar[Vip;$advancedTextSplit[$interactionData[customId];_;2]]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você já possui o **Premium**! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este botão! {ephemeral} {interaction}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buypremium;]
`
},{
  name: "premiumtime",
  type: "timeout",
  code: `
$setGlobalUserVar[Vip;false;$timeoutData[userID]]

$channelSendMessage[$timeoutData[ChannelID];⠀⠀<:Cooldown:1296999969747894313> **›** <@$timeoutData[userID]>, seu **Premium** expirou!]
$log[[DEBUG] => $userTag[$timeoutData[userID]]($timeoutData[userID]) Usou o comando - Premium(Expirou)]

$onlyIf[$timeoutData[customId]==premiumtime;]
`
}]