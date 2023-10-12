import { Client, CommandInteraction, GatewayIntentBits } from "discord.js";

import crearEmbedTickets from "./comandos/crearEmbedTickets";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

require("dotenv").config();
const { TOKEN } = process.env;
client.login(TOKEN);



client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  crearEmbedTickets(message);
});
