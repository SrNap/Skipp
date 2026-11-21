module.exports = {
  name: "update",
  aliases: ["atualização", "updates", "atualizações"],
  description: "Veja as atualizações do bot",
  usage:"update",
  code: `
$author[Uptadte $getVar[Versao];$userAvatar[$clientID]]
$description[
## <:ferramenta:1303917933147459637> Atualização 1.6.0

> <:Icon_adicionado:1303918001191518208> Novos backgrounds
> ﻿<:Icon_adicionado:1303918001191518208>﻿ Novos botões em background
> ﻿<:Icon_adicionado:1303918001191518208>﻿ Comando de Cargoinfo
> <:Icon_adicionado:1303918001191518208> Comando de Canalinfo
> <:Icon_adicionado:1303918001191518208> Comando de apostar Coinflip (Usuário VS Usuário)
> <:Icon_adicionado:1303918001191518208>Comando de Biscoito da sorte
> <:Icon_adicionado:1303918001191518208> Sistema de compra Premium
> <:Icon_adicionado:1303918001191518208> Novos comandos de Aposta
> <:Icon_adicionado:1303918001191518208> Grande parte dos comandos funciona em inglês
> <:Icon_adicionado:1303918001191518208> Mais minigames
> <:Icon_corrigido:1303917959193821226> Correção de Bugs
> <:Icon_corrigido:1303917959193821226> Redução o Preço dos peixes e lixos
> <:Icon_corrigido:1303917959193821226> Aumento de preço nos background
E muito mais
]
$color[$getVar[Color]]
$footer[$username;$authorAvatar]
$addTimestamp
$thumbnail[$userAvatar[$clientID]]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Update]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}