const Discord = require ('discord.js') 
module.exports = async (message, args, client, channel) => {

const discriminator = args[0] ? args[0] : message.author.discriminator;
    if (isNaN(discriminator)) return message.channel.send("El contenido debe ser numÃ©rico"); // AcÃ¡ verificamos que el argumento dado sea un nÃºmero
if (discriminator.length > 4 || discriminator.length < 4) return message.channel.send("El nÃºmero otorgado debe estar en un rango de 4 a 1 nÃºmeros"); // AcÃ¡ verificamos que el argumento dado estÃ© en el rango de los discriminator
const filtro = client.users.filter(user => user.discriminator === discriminator && user.tag !== message.author.tag); // AcÃ¡ filtramos entre usuarios con el mismo discriminator, pero con diferente username y discriminator que el nuestro, para evitar una lista con nuestra cuenta

  if (filtro.size == 0) return message.channel.send("No se han encontrado resultados"); // Si no hay nadie que coincida con el discriminator, entonces retornamos que no hayan resultados
const mapeo = filtro.map(usuario => usuario.tag) // Mapeo los resultados filtrados

const embed = new Discord.MessageEmbed() // Y finalmente reflejamos los resultados en un embed
.setDescription(mapeo.join("\n"))
.setColor("RANDOM")
.setFooter("He encontrado a "+filtro.size+" usuarios.", client.user.avatarURL)
.setAuthor(message.author.tag, message.author.avatarURL)
message.channel.send(embed)
} 