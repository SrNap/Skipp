module.exports = [{ 
   name: "setprefix",
   aliases: ["setp", "setpertixo", "setarprefix", "setarperfixo"],
   description: "Altere o prefixo do bot",
   usage: "setprefix <prefixo>",
   code: `$setGuildVar[Prefix;$message]
> ✅ **›** Prefixo alterado para \`$message\` com sucesso!

$onlyIf[$message!=;⠀⠀<:Erro:1292980975290286135> **›** Digite um prefixo para ser setado!]
$onlyPerms[administrator;⠀⠀<:Erro:1292980975290286135> **›** Você precisa da permissão de \`Administrador\` para utilizar este comandos!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Setprefix]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}]