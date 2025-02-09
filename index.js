const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// No message handler needed since this bot only updates channel color
client.login(process.env.DISCORD_BOT_TOKEN);
