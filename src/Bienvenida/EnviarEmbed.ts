require('dotenv').config()

import { Channel, CommandInteraction, Guild, GuildChannel, GuildMember } from "discord.js";
import EmbedBienvenida_Faccion from "./embeds/embed_Faccion";
import EmbedBienvenida_Reclutamiento from "./embeds/embed_Reclutamiento";
import EmbedBienvenida_IntendenciaGeneral from "./embeds/embed_IntendenciaGeneral";

//IDs de los servidores
const {FACCION_ID, RECLUTAMIENTO_ID, INTENDENCIA_GENERAL_ID}:any = process.env;

//IDs de los canales de bienvenida de los servidores
const {FACCION_BIENVENIDA_ID, RECLUTAMIENTO_BIENVENIDA_ID, INTENDENCIA_GENERAL_BIENVENIDA_ID}:any = process.env;

export default async function EnviarEmbed_Bienvenida(GuildMember:GuildMember, Servidor_ID:string) {
    const usuario_ID = GuildMember.user.id;

    if (Servidor_ID == FACCION_ID){
        const canal_Bienvenida:any = GuildMember.guild.channels.cache.get(FACCION_BIENVENIDA_ID);
        await canal_Bienvenida.send({embeds: [EmbedBienvenida_Faccion(usuario_ID)]})
    }
    else if(Servidor_ID == RECLUTAMIENTO_ID){
        const canal_Bienvenida:any = GuildMember.guild?.channels.cache.get(RECLUTAMIENTO_BIENVENIDA_ID);
        await canal_Bienvenida.send({embeds: [EmbedBienvenida_Reclutamiento(usuario_ID)]})
    }
    else if(Servidor_ID == INTENDENCIA_GENERAL_ID){
        const canal_Bienvenida:any = GuildMember.guild?.channels.cache.get(INTENDENCIA_GENERAL_BIENVENIDA_ID);
        await canal_Bienvenida.send({embeds: [EmbedBienvenida_IntendenciaGeneral(usuario_ID)]})
    }
}