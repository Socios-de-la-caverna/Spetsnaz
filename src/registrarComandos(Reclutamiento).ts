//////////////////////////////////////////////////////////////////////////////////////
//ESTE ES UN ARCHIVO PARA REGISTRAR COMANDOS SOLO PARA EL SERVIDOR DE RECLUTAMIENTO
/////////////////////////////////////////////////////////////////////////////////////
import {ApplicationCommand, ApplicationCommandOptionType, ApplicationCommandType, REST, Routes} from 'discord.js';
require('dotenv').config()
const {TOKEN, CLIENTID, RECLUTAMIENTO_ID }:any = process.env

const comandos = [
    {
    name: 'aceptar',
    description: 'Comando para aceptar el examen de un usuario',
    options: [
        {
                name: 'usuario',
                description: 'Pon el ID o menciona al usario al que quieres aceptar',
                required: true,
                type: ApplicationCommandOptionType.User
        }
    ]
},
  {
    name: 'rechazar',
    description: 'Comando para rechazar el examen de un usuario',
    options: [
        {
                name: 'usuario',
                description: 'Pon el ID o menciona al usario al que quieres rechazar',
                required: true,
                type: ApplicationCommandOptionType.User
        }
    ]
  }
]


async function lol(){
    try {
        console.log("XD")
        const rest = new REST({version: "10"}).setToken(TOKEN);
        await rest.put(Routes.applicationGuildCommands(CLIENTID, RECLUTAMIENTO_ID), {
          body: comandos,
        });
    
        console.log("Comandos registrados com exito!");
      } catch (error) {
        console.error(error);
      }
    }

    lol()