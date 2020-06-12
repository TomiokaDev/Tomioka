const Discord = require('discord.js');
module.exports = (client, message, args) => {
  if(!args || args.length < 1) return message.reply("pon el nombre de un comando");
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!client.commands.has(commandName)) {
    return message.send("Ese comando no existe");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  return message.channel.send(`The command ${commandName} has been reloaded`);
}