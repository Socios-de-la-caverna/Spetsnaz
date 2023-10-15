import { Message } from "discord.js";

export default async function reaccionExamen(message: Message) {
  if (!message.author.bot) return;
  if (message.channel.id != "1144818559650910285") return;
  message.react("✅");
  message.react("❌");
}
