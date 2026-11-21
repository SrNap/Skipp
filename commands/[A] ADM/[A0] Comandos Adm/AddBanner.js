module.exports = [{
    name: "addBanner",
    aliases: ['addb'],
    description: "Adicione um banner ao seu perfil!",
    usage: "addBanner <nome> <Link>",
    code: `
    > <:Correto:1315387573237059625> **›** O Banner \`$message[1]\` foi adicionado com sucesso!

$onlyForIDs[1021777907263221862;⠀⠀<:Dono:1298055690581180456> **›** Você não e meu desenvolvedor!]

$channelSendMessage[1353779822115160185;{newEmbed:{title:✅ Novo Banner}{description:- Temos mais um banner no sistema!

> **Staff:** <@$authorID>
> **Nome:** \`$message[1]\`
> **Adicionado em:** <t:$truncate[$math[$datestamp/1000]]:F> (<t:$truncate[$math[$datestamp/1000]]:R>)
> **Imagem:**
}{thumbnail:$userAvatar[$mentioned[1]]}{image:$message[2]}}]

   $downloadCanvas[addBanner;./assets/images/bg/bglink/$message[1].png]
   $attachCanvas[addBanner;$message[1].png]
   $drawImage[addBanner;       $message[2];0;0;1174;320]
   $createCanvas[addBanner;1174;320] `
}]