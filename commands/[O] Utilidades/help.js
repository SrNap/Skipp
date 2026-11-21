module.exports = [{
  name: "help",
  aliases: ['ajuda'],
  description: "Veja meus comandos.",
  usage:"help",
  code: `
$author[1;Painel de Ajuda;$userAvatar[$clientID]]
$description[O bot <@1296907824080879676> oferece **economia**, **diversão** e **utilidades**, com mecânicas interativas para uma experiência envolvente!

<:Informacoes:1298323035547500565> Informações
<:Reply1:1315673649507991552>Obrigatório = < >
<:Reply:1315673597112488078>Opcional = [ ]

> ⠀⠀Para ver todos os comandos disponíveis, selecione abaixo!]

$color[$getVar[Color]]
$footer[$username;$authorAvatar]
$addTimestamp
$thumbnail[$userAvatar[$clientID]]
$image[https://media.discordapp.net/attachments/1286357668155363370/1350457888459718687/2_20250315_101314_0001.png?ex=67d6cf6a&is=67d57dea&hm=c45252bccdd5aac771d7e15a3251e8a1ca1e4c2f6d77863978cfe035447def33&]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Help]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]

$addSelectMenu[1;string;help_$authorID;💫 › Selecione uma categoria!;1;1;false;Economia:Veja os comandos de economia!:help1:false:💰;Diversão:Veja os comandos de diversão!:help2:false:🎉;Utilidades:Veja os comandos de utilidades!:help3:false:🔧;Roleplay:Veja os comandos de roleplay!:help5:false:🎭;Outros:Veja meus outros comandos!:help4:false:🎈;Comandos Premium:Veja os comandos premium!:help6:false:👑]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[{newEmbed:{author:Economia:https://media.discordapp.net/attachments/1286357668155363370/1323665205770584206/746555194426523759.gif?ex=677556c9&is=67740549&hm=ba7c471862accfafceb4710c1666d5831fd26f9b82f790195edab2afe5325a05&}{description:
**Daily**
<:Reply:1315673597112488078>Pegue seu daily diário!
**Saldo** [User]
<:Reply:1315673597112488078>Veja o saldo de alguém!
**Emprego**
<:Reply:1315673597112488078>Escolha um emprego para trabalhar!
**Explorar**
<:Reply:1315673597112488078>Explore o mundo!
**Rank**
<:Reply:1315673597112488078>Veja o rank de cash!
**Trabalhar**
<:Reply:1315673597112488078>Trabalhe para ganhar cash!
**Crime**
<:Reply:1315673597112488078>Cometa um crime para ganhar Cash!
**Slot** <Quantia>
<:Reply:1315673597112488078>Aposte em um slot para ganhar cash!
**Semanal**
<:Reply:1315673597112488078>Pegue seu cash semanal!
**Pay** <User> <Quantia>
<:Reply:1315673597112488078>Pague alguém!
**Copos** <Quantia>
<:Reply:1315673597112488078>Aposte em um copo para ganhar cash!
**Roleta** <Quantia>
<:Reply:1315673597112488078>Aposte em um numero para ganhar cash!
**Coinflip**  <User> <Quantia>
<:Reply:1315673597112488078>Aposte contra um usuário para ganhar cash!
}{color:#FFD700}{footer:$username:$authorAvatar}{timestamp}{thumbnail:$userAvatar[$clientID]}{image:https://media.discordapp.net/attachments/1297553462648635403/1323666295635316896/standard.gif?ex=677557cd&is=6774064d&hm=5bd8641f85444e3a0e75cc955bf1e143e6628b5886eac4e399988343bcc4210a&}}
{actionRow:{selectMenu:help_$authorID:💫 › Selecione uma categoria!:1:1:false:{stringInput:Diversão:help2:Veja os comandos de diversão!:false:🎉}{stringInput:Utilidades:help3:Veja os comandos de utilidades!:false:🔧}{stringInput:Roleplay:help5:Veja os comandos de roleplay!:false:🎭}{stringInput:Outros:help4:Veja os comandos de outros!:false:🎈}{stringInput:Comandos Premium:help6:Veja os comandos premium!:false:👑}}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==help;]
    
     $onlyIf[$interactionData[values[0]]==help1;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[{newEmbed:{author:Diversão:https://media.discordapp.net/attachments/1286357668155363370/1323665205288243263/1273299977149612052.gif?ex=677556c9&is=67740549&hm=aa42c31f31439bcd182c71348ed7439ff22c9650393e079d6e98f08aad87aff2&}{description:
**McConquista**
<:Reply:1315673597112488078>Crie uma conquista do Minecraft!
**ppt** <User>
<:Reply:1315673597112488078>Jogue pedra, papel ou tesoura contra alguém!
**Snake**
<:Reply:1315673597112488078>Jogue o jogo da cobrinha!
**Campo Minado**
<:Reply:1315673597112488078>Jogue o jogo campo minado!
**Memoria**
<:Reply:1315673597112488078>Jogue o jogo da memoria!
**Velha** <User>
<:Reply:1315673597112488078>Jogue o jogo da velha com alguém!
**Connect4** <User>
<:Reply:1315673597112488078>Jogue o connect4 com alguém!
**2048**
<:Reply:1315673597112488078>Jogue o jogo 2048!
**Anjo**
<:Reply:1315673597112488078>Veja se você e um anjo!
**Corno**
<:Reply:1315673597112488078>Veja se você e um corno!
**Demônio**
<:Reply:1315673597112488078>Veja se você e um demônio!
alguém!
**Curiosidade**
<:Reply:1315673597112488078>Veja uma curiosidade aleatória!
**Hack** <User>
<:Reply:1315673597112488078>Hackeie alguém! (Este comando é fictício, gerado por IA.)
**Dado** <Numero>
<:Reply:1315673597112488078>Gire um dado!
**Cara ou coroa**
<:Reply:1315673597112488078>Jogue cara ou coroa!
**Gun** <user>
<:Reply:1315673597112488078>Faça sua foto segurar uma arma!
**wanted** <User>
<:Reply:1315673597112488078>Crie um cartaz de procurado!
**Prisão** <User>
<:Reply:1315673597112488078>Crie coloque alguém na prisão!
**Biscoito**
<:Reply:1315673597112488078>Quebre um biscoito da sorte!
**8Ball** <Pergunta>
<:Reply:1315673597112488078>Faça uma pergunta para a bola mágica!
**Ship** <User> <User>
<:Reply:1315673597112488078>Shippe alguém!
}{color:#FF8C00}{footer:$username:$authorAvatar}{timestamp}{thumbnail:$userAvatar[$clientID]}{image:https://media.discordapp.net/attachments/1297553462648635403/1323666296055009313/standard_1.gif?ex=677557cd&is=6774064d&hm=5370d1a4379dc198e1368bc0e119b1e119b20df64a9f23d261b7830a02c77f2c&}}
{actionRow:{selectMenu:help_$authorID:💫 › Selecione uma categoria!:1:1:false:{stringInput:Economia:help1:Veja os comandos de economia!:false:💰}{stringInput:Utilidades:help3:Veja os comandos de utilidades!:false:🔧}{stringInput:Roleplay:help5:Veja os comandos de roleplay!:false:🎭}{stringInput:Outros:help4:Veja os comandos de outros!:false:🎈}{stringInput:Comandos Premium:help6:Veja os comandos premium!:false:👑}}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==help;]
     $onlyIf[$interactionData[values[0]]==help2;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[{newEmbed:{author:Utilidades:https://media.discordapp.net/attachments/1286357668155363370/1323665206227898428/1152738830768668804.gif?ex=677556c9&is=67740549&hm=10086ebb42361289d960efeb477eb0dd2e37d01ad141e35763fa2aac6d7afec2&}{description:
**Avatar**
<:Reply:1315673597112488078>Veja o avatar de alguém!
**Botinfo**
<:Reply:1315673597112488078>Veja as informações do bot!
**Canalinfo** [Canal]
<:Reply:1315673597112488078>Veja as informações do canal!
**CargoInfo** <Cargo>
<:Reply:1315673597112488078>Veja as informações de um cargo!
**Ping**
<:Reply:1315673597112488078>Veja o ping do bot!
**Say** <texto>
<:Reply:1315673597112488078>Faça o bot falar algo!
**Serverinfo**
<:Reply:1315673597112488078>Veja as informações do servidor!
**Setprefix** <texto>
<:Reply:1315673597112488078>Altere o prefixo do bot!
**Userinfo**
<:Reply:1315673597112488078>Veja as informações de um usuário!
**Emojiinfo** <emoji>
<:Reply:1315673597112488078>Veja as informações de um emoji!
**Clear** <quantia>
<:Reply:1315673597112488078>Limpe as mensagens do chat!
**Lock**
<:Reply:1315673597112488078>Tranque o canal!
**Unlock**
<:Reply:1315673597112488078>Destranque o canal!
}{color:#003366}{footer:$username:$authorAvatar}{timestamp}{thumbnail:$userAvatar[$clientID]}{image:https://media.discordapp.net/attachments/1297553462648635403/1323667449421234236/standard_3.gif?ex=677558e0&is=67740760&hm=1656b82c5bf2bd430de102935ca5a34a8a0e038730b2db2c254650ce399c7f8a&}}
{actionRow:{selectMenu:help_$authorID:💫 › Selecione uma categoria!:1:1:false:{stringInput:Economia:help1:Veja os comandos de economia!:false:💰}{stringInput:Diversão:help2:Veja os comandos de diversão!:false:🎉}{stringInput:Roleplay:help5:Veja os comandos de roleplay!:false:🎭}{stringInput:Outros:help4:Veja os comandos de outros!:false:🎈}{stringInput:Comandos Premium:help6:Veja os comandos premium!:false:👑}}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==help;]
     $onlyIf[$interactionData[values[0]]==help3;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[{newEmbed:{author:Outros:https://media.discordapp.net/attachments/1286357668155363370/1323665206966091818/891967156634390579.png?ex=677556c9&is=67740549&hm=4bc8a6cfe11998f6abd18ce4b6071684fcbf23a324f795223a2ed2dbdfc1a2cb&}{description:
**Uptime**
<:Reply:1315673597112488078>Veja mais informações!
**Background**
<:Reply:1315673597112488078>Altere o background do seu perfil!
**Perfil** [User]
<:Reply:1315673597112488078>Veja o perfil de alguém!
**Sobremim** <texto>
<:Reply:1315673597112488078>Altere o sobremim do seu perfil
**Reputação** <User>
<:Reply:1315673597112488078>Dê uma reputação para alguém!
**Links**
<:Reply:1315673597112488078>Veja todos os meus links!
**Créditos**
<:Reply:1315673597112488078>Veja os créditos do bot!
**Premium**
<:Reply:1315673597112488078>Veja as vantagens do premium!
**Canvidar**
<:Reply:1315673597112488078>Convide o bot para o seu servidor!
**suporte**
<:Reply:1315673597112488078>Entre no meu servidor de suporte!
**Update**
}{color:#800080}{footer:$username:$authorAvatar}{timestamp}{thumbnail:$userAvatar[$clientID]}{image:https://media.discordapp.net/attachments/1297553462648635403/1323667451463860244/standard_4.gif?ex=677558e0&is=67740760&hm=4cb2b4bf147654754a93c5ee04686ace21988892820a6b2498cc31107bc87b90&}}
{actionRow:{selectMenu:help_$authorID:💫 › Selecione uma categoria!:1:1:false:{stringInput:Economia:help1:Veja os comandos de economia!:false:💰}{stringInput:Diversão:help2:Veja os comandos de diversão!:false:🎉}{stringInput:Utilidades:help3:Veja os comandos de utilidades!:false:🔧}{stringInput:Roleplay:help5:Veja os comandos de roleplay!:false:🎭}{stringInput:Comandos Premium:help6:Veja os comandos premium!:false:👑}}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==help;]
     $onlyIf[$interactionData[values[0]]==help4;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[{newEmbed:{author:Roleplay:https://media.discordapp.net/attachments/1286357668155363370/1323665207251177533/721134184009171035.png?ex=677556c9&is=67740549&hm=744e46be6636962c427f408fefa851092d049b3fb6632a2911a2d88d9ff4a408&}{description:
**Abraçar** <User>
<:Reply:1315673597112488078>Abraçe alguém!
**Atacar** <User>
<:Reply:1315673597112488078>Ataque alguém!
**Beijar** <User>
<:Reply:1315673597112488078>Beije alguém!
**Bofetada** <User>
<:Reply:1315673597112488078>De um tapa em alguém!
**Cafuné** <User>
<:Reply:1315673597112488078>Faça um cafuné em alguém!
**Dançar** <User>
<:Reply:1315673597112488078>Dance com alguém!
**tocaaqui** <User>
<:Reply:1315673597112488078>Faça uma toca aqui com alguém!
}{footer:$username:$authorAvatar}{color:#ff4444}{timestamp}{thumbnail:$userAvatar[$clientID]}{image:https://media.discordapp.net/attachments/1297553462648635403/1323668154609569856/standard_5.gif?ex=67755988&is=67740808&hm=aa1f2ef8cc783cacb99c927b1688df92a59d61f95772dff2fc9c0584c843a743&}}
{actionRow:{selectMenu:help_$authorID:💫 › Selecione uma categoria!:1:1:false:{stringInput:Economia:help1:Veja os comandos de economia!:false:💰}{stringInput:Diversão:help2:Veja os comandos de diversão!:false:🎉}{stringInput:Utilidades:help3:Veja os comandos de utilidades!:false:🔧}{stringInput:Outros:help4:Veja os comandos de outros!:false:🎈}{stringInput:Comandos Premium:help6:Veja os comandos premium!:false:👑}}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==help;]
     $onlyIf[$interactionData[values[0]]==help5;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[{newEmbed:{author:Premium:https://media.discordapp.net/attachments/1286357668155363370/1323665206626488343/1124936333777965066.png?ex=677556c9&is=67740549&hm=77fd40c07c0e98ff92c90f20ceaa8956256053ad328eb2baf624663d7922114b&}{description:
**Minerar**
<:Reply:1315673597112488078>Minere e ganhe gemas e cash!
**Pescar**
<:Reply:1315673597112488078>Pesque e ganhe peixes!
**HP**
<:Reply:1315673597112488078>Recupere seu HP!
**Mensal**
<:Reply:1315673597112488078>Pegue seu cash mensal!
**Matar** <User>
<:Reply:1315673597112488078>Mate alguém!(brinks)
}{footer:$username:$authorAvatar}{color:#f1c900}{timestamp}{thumbnail:$userAvatar[$clientID]}{image:https://media.discordapp.net/attachments/1297553462648635403/1323668155029127188/standard_2.gif?ex=67755988&is=67740808&hm=189cff688cb4f95079360144169c57a01d79cff7a38f6497aca33e2232432a77&}}
{actionRow:{selectMenu:help_$authorID:💫 › Selecione uma categoria!:1:1:false:{stringInput:Economia:help1:Veja os comandos de economia!:false:💰}{stringInput:Diversão:help2:Veja os comandos de diversão!:false:🎉}{stringInput:Utilidades:help3:Veja os comandos de utilidades!:false:🔧}{stringInput:Roleplay:help5:Veja os comandos de roleplay!:false:🎭}{stringInput:Outros:help4:Veja os comandos de outros!:false:🎈}}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==help;]

$onlyIf[$interactionData[values[0]]==help6;]
`,
}]