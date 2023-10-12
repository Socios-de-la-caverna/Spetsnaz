import { EmbedBuilder } from "discord.js";
require('dotenv').config()

const {IMAGEN_BIENVENIDA}:any = process.env;

export default async function EmbedBienvenida_Reclutamiento(Usuario_ID:string) {
    const embed = new EmbedBuilder()
    .setTitle(`¡Bienvenido <${Usuario_ID}>!`)
    .setDescription(`Este es el servidor de reclutamiento, verifícate y abre un ticket para poder iniciar tu proceso de inscripción a la facción. `)
    .setImage(IMAGEN_BIENVENIDA)

    return embed;
}

