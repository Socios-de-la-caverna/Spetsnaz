import { Client, CommandInteraction, GatewayIntentBits } from "discord.js";
import EnviarEmbed_Bienvenida from "./Bienvenida/EnviarEmbed";

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

client.on("guildMemberAdd", async (GuildMember)=>{
  EnviarEmbed_Bienvenida(GuildMember, GuildMember.guild.id)
})

client.on("messageCreate", (message) => {
  console.log(message.content);
});
