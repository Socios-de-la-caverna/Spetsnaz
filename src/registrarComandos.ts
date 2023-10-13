import {ApplicationCommand, ApplicationCommandOptionType, ApplicationCommandType, REST, Routes} from 'discord.js';
require('dotenv').config()
const {TOKEN, CLIENTID}:any = process.env

const comandos = [
    {
    name: 'usuario',
    description: 'Comando para ver la descripción de un usuario',
    options: [
        {
                name: 'usuario',
                description: 'Pon el ID o menciona al usario del que quieras saber',
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
        await rest.put(Routes.applicationCommands(CLIENTID), {
          body: comandos,
        });
    
        console.log("Comandos registrados com exito!");
      } catch (error) {
        console.error(error);
      }
    }

    lol()