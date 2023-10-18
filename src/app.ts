import { Client, CommandInteraction, GatewayIntentBits, GuildMember } from "discord.js";

import bienvenida from "./eventos/Bienvenida/enviarEmbed";
import despedida from "./eventos/Despedida/enviarEmbed";
import info_usuario from "./comandos/Utilidad/usuario";
import { examenAprobacion } from "./comandos/Examen/aprobacion";

import primerModal from "./lib/examen/primerModal";
import crearEmbedTickets from "./comandos/crearEmbedTickets";
import reaccionExamen from "./eventos/reaccionExamen";

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
//para mandar el mensaje de despedida en el canal correspondiente
client.on("guildMemberRemove", (member) => {
  despedida(member, member.guild.id);
});

//Codigo que se ejecutara cuando entre un miembro a uno de los tres servidores
//para mandar el mensaje de bienvenida en el canal correspondiente
client.on("guildMemberAdd", (member) => {
  bienvenida(member, member.guild.id);
});

//Codigo que se ejecuta al momento de que un usuario usa un comando
client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  switch (interaction.commandName) {
    case "usuario":
      info_usuario(interaction);
      break;

    case "aceptar":
      examenAprobacion.aceptar(interaction);
      break;
    case "rechazar":
      examenAprobacion.rechazar(interaction);
      break;
      
    case "examen":
      primerModal(interaction);
      break;

    default:
      break;
  }
});

client.on("messageCreate", (mensaje)=>{

  if (mensaje.channelId == '1162100157815468052' && mensaje.author.id != mensaje.guild?.ownerId){
    mensaje.delete()
  }
})

