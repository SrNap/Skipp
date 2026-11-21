const { CustomEvent, LoadCommands, AoiClient } = require("aoi.js");
const { Handler } = require("aoi.js-handler");
const { Database } = require("aoi.mongo");
const { AoiCanvas } = require("aoi.canvas");

const client = new AoiClient({
    token: process.env['TOKEN'],
    prefix: "$getGuildVar[Prefix]",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildVoiceStates"],
    events: ["onMessage", "onInteractionCreate"],
    disableAoiDB: true
}); 

const canvas = new AoiCanvas(client);

const database = new Database(client, {
    url: process.env['MongoDB'],
    tables: ["main"],
    logging: true
});


client.readyCommand({
  executeOnStartup: true,
  code: `
  $log[Fontes carregadas com sucesso!]
  $registerFont[./assets/fonts/]
  `
})

require('./handler/status.js')(client);
require('./handler/variables.js')(client);

client.functionManager.createFunction({
  name: "$translate",
  type: "djs",
  code: async d => {
const data = d.util.aoiFunc(d);
const translate = require('translate-google')
const [text, to = "en", from] = data.inside.splits;
if(!from) {
var w = await translate(text, {to: to}).catch(err => {
d.aoiError.consoleError("Error", err)});
}
else {
var w = await translate(text, {to: to, from: from}).catch(err => {
d.aoiError.consoleError("Error", err)});
}
data.result = w;
    return {
        code: d.util.setCode(data)
    };
  }
})

client.functionManager.createFunction({
    name: "$getTextLength",
    type: "djs",
    code: async d => {
    const data = d.util.aoiFunc(d);
    const [text] = data.inside.splits;

    let result = text.length;

    data.result = result;
    return {
      code: d.util.setCode(data)
    };
  }
});

client.loadCommands("./commands/");