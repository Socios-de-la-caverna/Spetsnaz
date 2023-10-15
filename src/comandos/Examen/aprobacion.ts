import axios from "axios";
import {
  ChannelType,
  CommandInteraction,
  GuildMember,
  codeBlock,
} from "discord.js";

require("dotenv").config();
const { API_URL } = process.env;

export class examenAprobacion {
  static async aceptar(interaction: CommandInteraction | any) {
    const usuario: any | string = interaction.options.getUser("usuario");
    const usuario_Member = await interaction.guild?.members.fetch(usuario);
    const usuario_Member_HighestRole: any | string = (await usuario_Member)
      ?.roles.highest.position;

    const usuario_Que_Ejecuto_El_Comando = interaction.guild?.members.fetch(
      interaction.user.id
    );

    const bot_Member: any | GuildMember = interaction.guild?.members.me;

    if (usuario_Member_HighestRole > bot_Member?.roles.highest.position) {
      return await interaction.reply(
        "¡Ese usuario tiene un rol mas alto que el mio, no lo puedo aceptar!"
      );
    }
    if (usuario_Que_Ejecuto_El_Comando == usuario_Member) {
      return await interaction.reply("¡No te puedes aceptar a ti mismo!");
    }

    const invitacion = await interaction.guild?.invites
      .create("1137575133976989839", {
        maxUses: 1,
      })
      .then((invite: any) => invite.code)
      .catch(console.error);

    (await usuario_Member)?.send({
      content: `¡Has sido aceptado! Ahora, únete a este servidor para continuar:
https://discord.gg/${invitacion}`,
    });

    const canalResultados = await interaction.guild?.channels.cache.get(
      "1144818559650910286"
    );

    (await canalResultados)?.send(
      "¡El usuario <@" + (await usuario_Member)?.id + "> ha sido aceptado!"
    );

    const obtenerExamenUsuario = await axios
      .get(`${API_URL}/examenes/${usuario_Member?.id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    const {
      datos,
      primera_pregunta: primeraPregunta,
      segunda_pregunta: segundaPregunta,
      tercera_pregunta: terceraPregunta,
      cuarta_pregunta: cuartaPregunta,
      fecha,
    } = obtenerExamenUsuario;

    const examen = codeBlock(
      "ansi",
      `[2;33m───────────────────────────────[0m[2;3m─────────────────────────────────────────[0m[2;30m───────────────────────────────[0m
[2;36m✦[0m Recuerda que este examen es un examen diagnostico y pensativo para poder ingresar a la facción Spetsnaz
[0m[2;30mExamen creado ${fecha}[0m
Nick de Minecraft, género y edad:
> ${datos}

Personales:

[2;36m✦[0m ¿Se compromete a ser activo en Discord para asistir a las actividades y apoyar a la facción?
> ${primeraPregunta}
[2;36m✦[0m ¿Usted perteneció a alguna facción militar?
> ${segundaPregunta}
[2;36m✦[0m ¿Hay alguna aclaración extra que tiene con respecto a usted?
> ${terceraPregunta}
[2;36m✦[0m ¿Usted ha tenido algún antecendente perjudicial hacia un grupo de personas?
> ${cuartaPregunta}

[2;33m───────────────────────────────[0m[2;3m─────────────────────────────────────────[0m[2;30m───────────────────────────────[0m`
    );

    const canalRegistro = await interaction.guild?.channels.create({
      name: `『rec』${usuario_Member?.user.username}`,
      type: ChannelType.GuildText,
      // este canal debe crearse en la categoría "Reclutas" del servidor de Intendencia General
    });

    canalRegistro.send({
      content: `Examen del usuario <@${usuario_Member?.id}> ${examen}`,
    });

    return await interaction.reply({
      content: "¡Usuario aceptado!",
      ephemeral: true,
    });
  }

  static async rechazar(interaction: CommandInteraction | any) {
    const usuario: any | string = interaction.options.getUser("usuario");
    const usuario_Member = await interaction.guild?.members.fetch(usuario);

    const usuario_Member_HighestRole: any | string = (await usuario_Member)
      ?.roles.highest.position;

    const usuario_Que_Ejecuto_El_Comando = interaction.guild?.members.fetch(
      interaction.user.id
    );

    const bot_Member: any | GuildMember = interaction.guild?.members.me;

    if (usuario_Member_HighestRole > bot_Member?.roles.highest.position) {
      return await interaction.reply(
        "¡Ese usuario tiene un rol mas alto que el mio, no lo puedo expulsar!"
      );
    }
    if (usuario_Que_Ejecuto_El_Comando == usuario_Member) {
      return await interaction.reply("¡No te puedes expulsar a ti mismo!");
    }

    usuario_Member?.send("¡Has sido rechazado!");

    interaction.guild?.members.ban(usuario_Member, {
      reason: "Rechazado por el staff",
    });

    const canalResultados = await interaction.guild?.channels.cache.get(
      "1144818559650910286"
    );

    canalResultados?.send(
      "¡El usuario <@" + usuario_Member?.id + "> ha sido rechazado!"
    );

    return await interaction.reply({
      content: "¡Usuario rechazado!",
      ephemeral: true,
    });
  }
}
