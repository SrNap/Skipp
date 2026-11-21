module.exports = [{
  name: "emprego",
  aliases: ["empregos", "job", "jobs"],
  description: "Veja os empregos disponíveis",
  usage: "emprego",
  code: `
>>> <@$authorID> Escolha um emprego para trabalhar!
-# Esse comandos e visual, não altera nada.

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Emprego]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]

$addSelectMenu[1;string;empregos_$authorID;Selecione um emprego!;1;1;false;Desempregado:Trabalhe como Desempregado:desempregado:false:🚫;Uber:Trabalhe como Uber:uber:false:🚗;Ator:Trabalhe como Ator:ator:false:🎭;YouTuber:Trabalhe como YouTuber:youtuber:false:🎥;Streamer:Trabalhe como Streamer:streamer:false:🎮;Advogado:Trabalhe como Advogado:advogado:false:💂‍♂️;Médico:Trabalhe como Médico:medico:false:👨‍⚕️;Engenheiro:Trabalhe como Engenheiro:engenheiro:false:👨‍🔧;Policial:Trabalhe como Policial:policial:false:👮‍♂️;Veterinário:Trabalhe como Veterinário:veterinario:false:🐶;Empresário:Trabalhe como Empresário:empresario:false:💼;Escritor:Trabalhe como Escritor:escritor:false:📝;Dublador:Trabalhe como Dublador:dublador:false:🎙️;Jardineiro:Trabalhe como Jardineiro:jardineiro:false:🌿;Pintor:Trabalhe como Pintor:pintor:false:🎨;Pedreiro:Trabalhe como Pedreiro:pedreiro:false:🧱]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 🚗**Uber**!]

$setGlobalUserVar[Emprego;🚗Uber;$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
     $onlyIf[$interactionData[values[0]]==uber;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 🎭**Ator**!]

$setGlobalUserVar[Emprego;🎭Ator;$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
     $onlyIf[$interactionData[values[0]]==ator;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 🎥**YouTuber**!]

$setGlobalUserVar[Emprego;🎥YouTuber;$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
     $onlyIf[$interactionData[values[0]]==youtuber;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 💂‍♂️**Advogado**!]

$setGlobalUserVar[Emprego; 💂‍♂️Advogado;$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
     $onlyIf[$interactionData[values[0]]==advogado;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 👨‍⚕️**Médico**!]

$setGlobalUserVar[Emprego;👨‍⚕️Médico;$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
     $onlyIf[$interactionData[values[0]]==medico;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 👨‍🔧**Engenheiro**!]

$setGlobalUserVar[Emprego;👨‍🔧Engenheiro;$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
     $onlyIf[$interactionData[values[0]]==engenheiro;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 👮‍♂️**Policial**!]

$setGlobalUserVar[Emprego;👮‍♂️Policial;$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
     $onlyIf[$interactionData[values[0]]==policial;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 🎮**Streamer**!]

$setGlobalUserVar[Emprego;🎮Streamer;$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
$onlyIf[$interactionData[values[0]]==streamer;]
  `,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 👨‍⚕️**Veterinário**!]

$setGlobalUserVar[Emprego;👨‍⚕️Veterinário;$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
     $onlyIf[$interactionData[values[0]]==veterinario;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 💼**Empresário**!]

$setGlobalUserVar[Emprego;💼Empresário;$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
     $onlyIf[$interactionData[values[0]]==empresario;]
`,
},{
    type: "interaction",
    prototype: "selectMenu",
    code: `
  $interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 📝**Escritor**!]

  $setGlobalUserVar[Emprego;📝Escritor;$authorID]

  $suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
      $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
       $onlyIf[$interactionData[values[0]]==escritor;]
  `,
},{
    type: "interaction",
    prototype: "selectMenu",
    code: `
  $interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 🎙️**Dublador**!]

  $setGlobalUserVar[Emprego;🎙️Dublador;$authorID]

  $suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
      $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
       $onlyIf[$interactionData[values[0]]==dublador;]
  `,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 🌿**Jardineiro**!]

$setGlobalUserVar[Emprego;🌿Jardineiro;$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
     $onlyIf[$interactionData[values[0]]==jardineiro;]
`,
},{
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 🎨**Pintor**!]

$setGlobalUserVar[Emprego;🎨Pintor;$authorID]

$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
     $onlyIf[$interactionData[values[0]]==pintor;]
`,
},{
    type: "interaction",
    prototype: "selectMenu",
    code: `
  $interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 🧱**Pedreiro**!]

  $setGlobalUserVar[Emprego;🧱Pedreiro;$authorID]

  $suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
      $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
       $onlyIf[$interactionData[values[0]]==pedreiro;]
  `,
},{
    type: "interaction",
    prototype: "selectMenu",
    code: `
  $interactionUpdate[>>> <@$authorID> o seu emprego foi definido para 🚫**Desempregado**! Mas, porque você fez isso?]

  $setGlobalUserVar[Emprego;Desempregado;$authorID]

  $suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode utilizar este select menu! {ephemeral} {interaction}]
      $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==empregos;]
       $onlyIf[$interactionData[values[0]]==desempregado;]
  `,
}]