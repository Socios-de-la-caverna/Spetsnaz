
import {
  Channel,
  CommandInteraction,
  Guild,
  GuildChannel,
  GuildMember,
  Embed,
  EmbedBuilder,
} from "discord.js";

import embedBienvenidaFaccion from "./embeds/servidorFaccion";
import embedBienvenidaReclutamiento from "./embeds/servidorReclutamiento";
import embedBienvenidaIntendenciaGeneral from "./embeds/servidorIntendencia";

//IDs de los servidores
require("dotenv").config();
const { FACCION_ID, RECLUTAMIENTO_ID, INTENDENCIA_GENERAL_ID }: any =
  process.env;

//IDs de los canales de bienvenida de los servidores
const {
  FACCION_BIENVENIDA_ID,
  RECLUTAMIENTO_BIENVENIDA_ID,
  INTENDENCIA_GENERAL_BIENVENIDA_ID,
}: any = process.env;

export default async function bienvenida(
  GuildMember: GuildMember,
  Servidor_ID: string,
) {
  const usuario_ID = GuildMember.user.id;
  const usuario_Nombre: any = GuildMember.user.displayName;

  if (Servidor_ID == FACCION_ID) {
    const canal_Bienvenida: any = GuildMember.guild.channels.cache.get(
      FACCION_BIENVENIDA_ID,
    );
    canal_Bienvenida.send({
      content: `<@${usuario_ID}>`,
      embeds: [await embedBienvenidaFaccion(usuario_ID, usuario_Nombre)],
    });
  } else if (Servidor_ID == RECLUTAMIENTO_ID) {
    const canal_Bienvenida: any = GuildMember.guild?.channels.cache.get(
      RECLUTAMIENTO_BIENVENIDA_ID,
    );
    canal_Bienvenida.send({
      content: `<@${usuario_ID}>`,
      embeds: [await embedBienvenidaReclutamiento(usuario_ID, usuario_Nombre)],
    });
  } else if (Servidor_ID == INTENDENCIA_GENERAL_ID) {
    const canal_Bienvenida: any = GuildMember.guild?.channels.cache.get(
      INTENDENCIA_GENERAL_BIENVENIDA_ID,
    );
    canal_Bienvenida.send({
      content: `<@${usuario_ID}>`,
      embeds: [
        await embedBienvenidaIntendenciaGeneral(usuario_ID, usuario_Nombre),
      ],
    });
  }
}
