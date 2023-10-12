import { EmbedBuilder } from "discord.js";
require('dotenv').config()

const {IMAGEN_BIENVENIDA}:any = process.env;

export default async function EmbedBienvenida_Faccion(Usuario_ID:string) {
    const embed = new EmbedBuilder()
    .setTitle(`¡Bienvenido <${Usuario_ID}>!`)
    .setDescription(`Verifícate para ver todos los canales y recuerda pedir tu uniforme, 
    escribir tu nick en el canal de nicks-minecraft y además leer todos los canales de información para estar al 
    tanto sobre todo lo que tiene por ofrecer la facción.`)
    .setImage(IMAGEN_BIENVENIDA)

    return embed;
}

