import { EmbedBuilder } from "discord.js";
require('dotenv').config()

const {IMAGEN_BIENVENIDA, FACCION_NICKS_ID}:any = process.env;

export default async function EmbedBienvenida_Faccion(Usuario_ID:string, Usuario_Nombre:string) {
    const embed = new EmbedBuilder()
    .setColor(0xffff00)
    .setTitle(`¡Bienvenido ${Usuario_Nombre}!`)
    .setDescription(`Verifícate para ver todos los canales y recuerda pedir tu uniforme, escribir tu nick en el canal de <#${FACCION_NICKS_ID}> y además leer todos los canales de información para estar al tanto sobre todo lo que tiene por ofrecer la facción.`)
    .setImage(IMAGEN_BIENVENIDA)

    return embed;
}

