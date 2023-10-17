import {
  Message,
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ComponentType,
  ChannelType,
  CommandInteraction,
} from "discord.js";
import primerModal from "../lib/examen/primerModal";

export default async function crearEmbedTickets(interaction:CommandInteraction) {

  const embed = new EmbedBuilder()
    .setTitle("Examen de ingreso")
    .setDescription("Crea un ticket para tomar tu examen de ingreso")
    .setColor("#f1c40f");

  const boton = new ButtonBuilder()
    .setEmoji("📝")
    .setLabel("Crear ticket")
    .setStyle(ButtonStyle.Primary)
    .setCustomId("crearTicket");

  const componentes = new ActionRowBuilder<ButtonBuilder>().addComponents(
    boton,
  );

  const canal:any = interaction.channel;
  const respuesta = await canal.send({
    embeds: [embed],
    components: [componentes],
  });

  const colector = respuesta.createMessageComponentCollector({
    componentType: ComponentType.Button,
  });

  colector.on("collect", async (i: any) => {
    primerModal(i);
  });
}
