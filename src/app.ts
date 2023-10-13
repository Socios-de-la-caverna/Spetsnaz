import { Client, CommandInteraction, GatewayIntentBits } from "discord.js";
import EnviarEmbed_Bienvenida from "./Bienvenida/enviarEmbed";
import EnviarEmbed_Despedida from "./Despedida/enviarEmbed";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

require("dotenv").config();
const { TOKEN } = process.env;
client.login(TOKEN);



client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});


//Codigo a ejecutar cuando un usuario se sale de uno de los tres servidores
client.on("guildMemberRemove", member=>{
  EnviarEmbed_Despedida(member, member.guild.id)
})


//Codigo que se ejecutara cuando entre un miembro a uno de los tres servidores
//
client.on("guildMemberAdd", member=>{
  EnviarEmbed_Bienvenida(member, member.guild.id)
})
