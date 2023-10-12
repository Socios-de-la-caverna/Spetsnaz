import {REST, Routes} from 'discord.js';
require('dotenv').config()
const {TOKEN, CLIENTID}:any = process.env

const Comandos = [
    {
        name: ''
    }
]

const rest = new REST({version: "10"}).setToken(TOKEN);


// (async ()=>{
//     try {
//         await rest.put(Routes.applicationGuildCommands(CLIENTID), {
//           body: comandos,
//         });
    
//         console.log("Comandos registrados com exito!");
//       } catch (error) {
//         console.error(error);
//       }
// })