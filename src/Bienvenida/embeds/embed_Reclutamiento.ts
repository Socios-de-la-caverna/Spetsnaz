import { EmbedBuilder } from "discord.js";
require('dotenv').config()

const {IMAGEN_BIENVENIDA}:any = process.env;

export default async function EmbedBienvenida_Reclutamiento(Usuario_ID:any, Usuario_Nombre:string) {
    const exampleEmbed = new EmbedBuilder()
    .setColor(0xffff00)
    .setTitle(`¡Bienvenido ${Usuario_Nombre}!`)
    .setDescription(`Este es el servidor de reclutamiento, verifícate y abre un ticket para poder iniciar tu proceso de inscripción a la facción.`)
    .setImage(`${IMAGEN_BIENVENIDA}`)

    return exampleEmbed;
}

