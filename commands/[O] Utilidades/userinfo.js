module.exports = [{
  name: "Userinfor",
  aliases: ['userinfo','ui'],
  description: 'Mostra as informações de um usuário',
  usage: 'userinfo <user>',
  code: `$description[## <:User:1297975567332933632> [$userTag[$findUser[$mentioned[1];true]]](https://discord.com/users/$mentioned[1])]

$addField[<:Others:1297972251471122584> Outros:;
<a:Bot:1297990574162448525> **É um bot?** $replaceText[$replaceText[$isBot[$findUser[$mentioned[1];true]];true;Sim];false;Não]
<a:boost:1253826028971757588> **Está impulsionando o servidor?** $replaceText[$replaceText[$isBoosting[$mentioned[1];$guildID];true;Sim];false;Não]]

$addField[<:Roles:1297972272711340044> Maior cargo:;
<@&$userHighestRole[$mentioned[1];$guildID;id]>]

$addField[<:Calendrio:1297972195976417290> Data de entrada:;
<t:$truncate[$divide[$memberJoinDate[$mentioned[1];$guildID;ms];1000]]:F> (<t:$truncate[$divide[$memberJoinDate[$mentioned[1];$guildID;ms];1000]]:R>)]

$addField[<:Calendrio:1297972195976417290> Conta criada em:;
<t:$truncate[$divide[$creationDate[$mentioned[1];ms];1000]]:F> (<t:$truncate[$divide[$creationDate[$mentioned[1];ms];1000]]:R>)]

$addField[<:Icon_paperplane:1358514454710718555> DM:;
\`$replaceText[$replaceText[$isUserDmEnabled[$mentioned[1]];true;Aberto (Está recebendo)];false;Fachada (Não está recebendo)]\`]

$addField[<:ID:1297972174170230916> ID:;
\`$mentioned[1]\`]

$addField[<:Tag:1297991897138335887> Tag do Discord:;
@$userTag[$findUser[$message]]]

$addField[<:User:1297975567332933632> Usuário:;$userDisplayName[$mentioned[1]]]

$thumbnail[$userAvatar[$mentioned[1]]]


$color[$getVar[Color]]
$footer[$username;$authorAvatar]
  $addTimestamp[1]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Userinfo]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
  `
}]