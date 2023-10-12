import { EmbedBuilder } from "discord.js";
require('dotenv').config()

const {IMAGEN_BIENVENIDA}:any = process.env;

export default async function EmbedBienvenida_IntendenciaGeneral(Usuario_ID:string) {
    const embed = new EmbedBuilder()
    .setTitle(`¡Bienvenido <${Usuario_ID}>!`)
    .setDescription(`Bienvenido al servidor de Intendencia General de Spetsnaz. Un miembro del EMC ha sido notificado de tu llegada.
    Por favor, verifícate en el canal de verificación para ver todos los canales.`)
    .setImage(IMAGEN_BIENVENIDA)

    return embed;
}

