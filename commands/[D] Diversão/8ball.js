module.exports = {
  name: "8ball",
  aliases: ["8bola", "bola8"],
  description: "Faça uma pergunta para a bola 8",
  usage: "8ball <pergunta>",
  code: `
$reply
> <@$authorID> **Perguntou**: \`$message\`
> **Resposta da *Bola 8***: \`$randomText[Sim.;Não.;Talvez.;Provavelmente sim.;Provavelmente não.;Acho que sim.;Acho que não.;Pode ser.;Difícil dizer.;Quem sabe?;Depende.;50/50.]\`

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - 8Ball]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
`
}
