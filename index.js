const Discord = require("discord.js");

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

Client.login(process.env.DSC_TOKEN);
const prefix = "!";

Client.on("ready", () => {
    console.log("Bot Activé Avec Succès !");
});

Client.on("messageCreate", message => {
    if(message.author.bot) return;
    // ping
    if(message.content === prefix + "ping"){
        message.reply("Pong ! 🏓");
    }
});