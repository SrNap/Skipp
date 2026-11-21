module.exports = {
  name: "sobremim",
  aliases: ['sobre-mim', 'about-me', 'aboutme'],
  code: `
<:Descricao:1299773078569746463> **›** <@$authorID> alterou seu sobremim para: \`$message\`.
  $setGlobalUserVar[Sobremim;$if[$getTextLength[$message]>240;$replaceText[$textSlice[$message;0;6];$textSlice[$message;0;6];$textSlice[$message;0;240]...];$message];$authorID]

  $onlyIf[$message!=;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você precisa escrever algo para ser setado como seu sobremim!]

 $onlyIf[$checkContains[$message;http://;https://;www.;discord.gg/;discord.com/invite/;bit.ly;tinyurl.com;youtube.com;youtu.be;twitch.tv;instagram.com;facebook.com;twitter.com;x.com;linkedin.com;steamcommunity.com;t.co;mediafire.com;drive.google.com;mega.nz;cdn.discordapp.com;gyazo.com;imgur.com;tenor.com;giphy.com;paypal.me;patreon.com;github.com;gitlab.com;reddit.com;spotify.com;deezer.com;apple.com;amazon.com;mercadolivre.com;br.pinterest.com;snapchat.com;onlyfans.com;pornhub.com;xvideos.com;xhamster.com;dropbox.com;urlz.fr;ouo.io;linktree.com;tr.ee;forms.gle;docs.google.com;notion.so;blogspot.com;wordpress.com;tumblr.com;strava.com;paypal.com;adf.ly;shorte.st;rebrand.ly;is.gd;vimeo.com;streamable.com;bandcamp.com;cash.app;roblox.com;t.me;telegram.me;dsc.gg]==false;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você não pode inserir links!]

$log[[DEBUG] => $userTag[$authorID]($authorID) Usou o comando - Sobremim]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]!=true;⠀⠀<:Erro:1292980975290286135> **›** <@$authorID>, você está na minha blacklist! Pelo motivo: \`$getGlobalUserVar[BLmotivo;$authorID]\`!]
$cooldown[5s;⠀⠀<:Cooldown:1296999969747894313> **›** Calma lá, você já mandou esse comando agorinha espere **5s** para usar novamente! {deleteIn:10s}]
  `
}