import {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ChannelType,
  PermissionFlagsBits,
  codeBlock,
  time,
} from "discord.js";

export default async function primerModal(i: any) {
  const modal = new ModalBuilder({
    customId: `modal-${i.user?.globalName}`,
    title: "Examen - primera hoja",
  });

  const inputDatos = new TextInputBuilder({
    customId: "datos",
    label: "Escribe tu nick de Minecraft, género y edad",
    style: TextInputStyle.Short,
  });

  const inputPrimeraPregunta = new TextInputBuilder({
    customId: "primeraPregunta",
    label: "¿Se compromete a ser activo en Discord?",
    style: TextInputStyle.Short,
  });

  const inputSegundaPregunta = new TextInputBuilder({
    customId: "segundaPregunta",
    label: "¿Usted perteneció a alguna facción militar?",
    style: TextInputStyle.Paragraph,
  });

  const inputTerceraPregunta = new TextInputBuilder({
    customId: "terceraPregunta",
    label: "¿Algo que quiera decirnos sobre usted?",
    style: TextInputStyle.Paragraph,
  });

  const inputCuartaPregunta = new TextInputBuilder({
    customId: "cuartaPregunta",
    label: "¿Ha tenido algún antecendente perjudicial?",
    style: TextInputStyle.Paragraph,
  });

  const primeraParte = new ActionRowBuilder<TextInputBuilder>().addComponents(
    inputDatos,
  );
  const segundaParte = new ActionRowBuilder<TextInputBuilder>().addComponents(
    inputPrimeraPregunta,
  );
  const terceraParte = new ActionRowBuilder<TextInputBuilder>().addComponents(
    inputSegundaPregunta,
  );

  const cuartaParte = new ActionRowBuilder<TextInputBuilder>().addComponents(
    inputTerceraPregunta,
  );

  const quintaParte = new ActionRowBuilder<TextInputBuilder>().addComponents(
    inputCuartaPregunta,
  );

  modal.addComponents(
    primeraParte,
    segundaParte,
    terceraParte,
    cuartaParte,
    quintaParte,
  );

  await i.showModal(modal);

  i.awaitModalSubmit({ time: 180_000 }).then(
    async (modalInteraction: any) => {
      const datosValor = modalInteraction.fields.getTextInputValue("datos");
      const primeraPreguntaValor =
        modalInteraction.fields.getTextInputValue("primeraPregunta");
      const segundaPreguntaValor =
        modalInteraction.fields.getTextInputValue("segundaPregunta");
      const terceraPreguntaValor =
        modalInteraction.fields.getTextInputValue("terceraPregunta");
      const cuartaPreguntaValor =
        modalInteraction.fields.getTextInputValue("cuartaPregunta");
      const fecha = new Date().toLocaleString("es-MX");

      const canalTicket = await i.guild?.channels.create({
        name: `examen-${i.user.globalName}`,
        type: ChannelType.GuildText,
        parent: "1144818558656860221",
        permissionOverwrites: [
          {
            id: i.guild?.roles.everyone.id,
            deny: [PermissionFlagsBits.ViewChannel],
          },
          {
            id: i.user.id,
            allow: [PermissionFlagsBits.ViewChannel],
          }
        ],
      });

      const canalRegistro = await i.guild?.channels.cache.get(
        "1144818559650910285",
      );

      const examen = codeBlock(
        "ansi",
        `[2;33m───────────────────────────────[0m[2;3m─────────────────────────────────────────[0m[2;30m───────────────────────────────[0m
[2;36m✦[0m Recuerda que este examen es un examen diagnostico y pensativo para poder ingresar a la facción Spetsnaz
[0m[2;30mExamen creado ${fecha}[0m
Nick de Minecraft, género y edad:
> ${datosValor}

Personales:

[2;36m✦[0m ¿Se compromete a ser activo en Discord para asistir a las actividades y apoyar a la facción?
> ${primeraPreguntaValor}
[2;36m✦[0m ¿Usted perteneció a alguna facción militar?
> ${segundaPreguntaValor}
[2;36m✦[0m ¿Hay alguna aclaración extra que tiene con respecto a usted?
> ${terceraPreguntaValor}
[2;36m✦[0m ¿Usted ha tenido algún antecendente perjudicial hacia un grupo de personas?
> ${cuartaPreguntaValor}

[2;33m───────────────────────────────[0m[2;3m─────────────────────────────────────────[0m[2;30m───────────────────────────────[0m`,
      );

      canalTicket.send({
        content: `Examen del usuario <@${modalInteraction.user?.id}> ${examen}`,
      });

      canalRegistro.send({
        content: `Examen del usuario <@${modalInteraction.user?.id}> ${examen}`,
      });

      modalInteraction.reply({ content: "Ticket creado", ephemeral: true });
    },
  );
}
