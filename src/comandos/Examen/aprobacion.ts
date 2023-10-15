import { CommandInteraction, GuildMember } from "discord.js";

export class examenAprobacion {
  static async aceptar(interaction: CommandInteraction) {
    const usuario: any | string = interaction.options.getUser("usuario");
    const usuario_Member = interaction.guild?.members.fetch(usuario);
    const usuario_Member_HighestRole: any | string = (await usuario_Member)
      ?.roles.highest.position;

    const usuario_Que_Ejecuto_El_Comando = interaction.guild?.members.fetch(
      interaction.user.id,
    );

    const bot_Member: any | GuildMember = interaction.guild?.members.me;

    if (usuario_Member_HighestRole > bot_Member?.roles.highest.position) {
      return await interaction.reply(
        "¡Ese usuario tiene un rol mas alto que el mio, no lo puedo aceptar!",
      );
    }
    if (usuario_Que_Ejecuto_El_Comando == usuario_Member) {
      return await interaction.reply("¡No te puedes aceptar a ti mismo!");
    }

    (await usuario_Member)?.send({ content: "Esto funciona Anfitrión" });
    await interaction.reply("Usuario aceptado exitosamente");
  }
  static async rechazar(interaction: CommandInteraction) {
    const usuario: any | string = interaction.options.getUser("usuario");
    const usuario_Member = interaction.guild?.members.fetch(usuario);

    const usuario_Member_HighestRole: any | string = (await usuario_Member)
      ?.roles.highest.position;

    const usuario_Que_Ejecuto_El_Comando = interaction.guild?.members.fetch(
      interaction.user.id,
    );

    const bot_Member: any | GuildMember = interaction.guild?.members.me;

    if (usuario_Member_HighestRole > bot_Member?.roles.highest.position) {
      return await interaction.reply(
        "¡Ese usuario tiene un rol mas alto que el mio, no lo puedo expulsar!",
      );
    }
    if (usuario_Que_Ejecuto_El_Comando == usuario_Member) {
      return await interaction.reply("¡No te puedes expulsar a ti mismo!");
    }

    (await usuario_Member)?.kick();
    await interaction.reply(
      `Usuario <@${(await usuario_Member)?.id}> expulsado exitosamente.`,
    );
  }
}
