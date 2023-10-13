import { Client, CommandInteraction, GatewayIntentBits } from "discord.js";

import crearEmbedTickets from "./comandos/crearEmbedTickets";
import reaccionExamen from "./eventos/reaccionExamen";

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
  crearEmbedTickets(message);
  reaccionExamen(message);
});
