require('dotenv').config()


import { Channel, CommandInteraction, Guild, GuildChannel, GuildMember, Embed, EmbedBuilder } from "discord.js";
import EmbedBienvenida_Faccion from "./embeds/embed_Faccion";
import EmbedBienvenida_Reclutamiento from "./embeds/embed_Reclutamiento";
import EmbedBienvenida_IntendenciaGeneral from "./embeds/embed_IntendenciaGeneral";

//IDs de los servidores
const {FACCION_ID, RECLUTAMIENTO_ID, INTENDENCIA_GENERAL_ID}:any = process.env;

//IDs de los canales de bienvenida de los servidores
const {FACCION_BIENVENIDA_ID, RECLUTAMIENTO_BIENVENIDA_ID, INTENDENCIA_GENERAL_BIENVENIDA_ID}:any = process.env;

export default async function EnviarEmbed_Bienvenida(GuildMember:GuildMember, Servidor_ID:string) {
    const usuario_ID = GuildMember.user.id;
    const usuario_Nombre:any = GuildMember.user.displayName;


    if (Servidor_ID == FACCION_ID){
        const canal_Bienvenida:any = GuildMember.guild.channels.cache.get(FACCION_BIENVENIDA_ID);
        canal_Bienvenida.send({content: `<@${usuario_ID}>`, embeds: [await EmbedBienvenida_Faccion(usuario_ID, usuario_Nombre)]})
    }
    else if(Servidor_ID == RECLUTAMIENTO_ID){
        const canal_Bienvenida:any = GuildMember.guild?.channels.cache.get(RECLUTAMIENTO_BIENVENIDA_ID);
        canal_Bienvenida.send({content: `<@${usuario_ID}>`,embeds: [await EmbedBienvenida_Reclutamiento(usuario_ID, usuario_Nombre)]})
    }
    else if(Servidor_ID == INTENDENCIA_GENERAL_ID){
        const canal_Bienvenida:any = GuildMember.guild?.channels.cache.get(INTENDENCIA_GENERAL_BIENVENIDA_ID);
        canal_Bienvenida.send({content: `<@${usuario_ID}>`,embeds: [await EmbedBienvenida_IntendenciaGeneral(usuario_ID, usuario_Nombre)]})
    }
}