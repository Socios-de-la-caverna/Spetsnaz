import { EmbedBuilder } from "discord.js";


export default async function EmbedDespedida(Usuario_ID:string, Usuario_Nombre:string) {
    const embed = new EmbedBuilder()
    // .setTitle(``)
    .setColor(0xffff00)
    .setDescription(`El usuario <@${Usuario_ID}> ha salido del servidor.`)

    return embed;
}

