module.exports = {
    name: "hack",
    aliases: ["hackear"],
    description: "Hackeie alguém!",
    usage:"hack <user>",
    code: `
**› Começando a hackear o $username[$mentioned[1]]**
$editIn[5s;**Token do bot dele**
$randomString[20].$randomString[10]-$randomString[30].$randomString[30];**Email de $username[$mentioned[1]]:**
$replaceText[$username[$mentioned[1]];;_;-1]$randomText[@gmail.com;@outlook.com;@gmail.utk;@hotmail.com;@yahoo.com;@ok.co];**Senha do email**
$randomString[7];**Recentemente falou com:**
$username[$randomUserID];**Palavra mais usada**
$randomText[penis;é;nao;sim;cu;eval;];**Tentando passar pelo 2FA**;**Injetando virus $randomText[Cavalo de Troia;Ransomware;Autorun;Kilim;Majava;Keylogger;Blended;Threats;Spyware;Flame;CIH]**;
**Injetando...**;
**Checando os eletrônicos de $username[$mentioned[1]]**
$randomText[$random[1;99]Celular(es), 1 Televisão, 1 PS4;Nada;1 Celular,1 Xbox960, 2 Televisões];**Atravessando o firewall, e pegando o ip:**
$numberSeparator[$random[100000000;900000000];.];**› O hack de $username[$mentioned[1]], está completo!**]

$onlyIf[$mentioned[1]!=<1296907824080879676>;⠀⠀😡 **›** Como você ousa usar meus poderes contra mim mesmo?]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Hack]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
$suppressErrors[⠀⠀<:Erro:1292980975290286135> **›** Algo deu errado. Tentei novamente mais tarde.]
`
}