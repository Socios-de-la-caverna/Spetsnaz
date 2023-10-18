import {
  Channel,
  CommandInteraction,
  Guild,
  GuildChannel,
  GuildMember,
  Embed,
  EmbedBuilder,
  PartialGuildMember,
} from "discord.js";
import EmbedDespedida from "./embeds/embed_Despedida";

//IDs de los servidores
require("dotenv").config();
const { FACCION_ID, RECLUTAMIENTO_ID, INTENDENCIA_GENERAL_ID }: any =
  process.env;

//IDs de los canales de DESPEDIDA de los servidores
const {
  FACCION_DESPEDIDA_ID,
  RECLUTAMIENTO_DESPEDIDA_ID,
  INTENDENCIA_GENERAL_DESPEDIDA_ID,
}: any = process.env;

export default async function despedida(
  GuildMember: GuildMember | PartialGuildMember,
  Servidor_ID: string,
) {
  const usuario_ID = GuildMember.user.id;
  const usuario_Nombre: any = GuildMember.user.displayName;

  if (Servidor_ID == FACCION_ID) {
    console.log("XD")
    const canal_DESPEDIDA: any =
      GuildMember.guild.channels.cache.get(FACCION_DESPEDIDA_ID);
    canal_DESPEDIDA.send({
      embeds: [await EmbedDespedida(usuario_ID, usuario_Nombre)],
    });
  } else if (Servidor_ID == RECLUTAMIENTO_ID) {
    const canal_DESPEDIDA: any = GuildMember.guild?.channels.cache.get(
      RECLUTAMIENTO_DESPEDIDA_ID,
    );
    canal_DESPEDIDA.send({
      embeds: [await EmbedDespedida(usuario_ID, usuario_Nombre)],
    });
  } else if (Servidor_ID == INTENDENCIA_GENERAL_ID) {
    const canal_DESPEDIDA: any = GuildMember.guild?.channels.cache.get(
      INTENDENCIA_GENERAL_DESPEDIDA_ID,
    );
    canal_DESPEDIDA.send({
      embeds: [await EmbedDespedida(usuario_ID, usuario_Nombre)],
    });
  }
}
