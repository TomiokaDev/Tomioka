// ESTO ESTÁ MONITOREADO POR UPTIME ROBOT Y STATUSCAKE

//bootup script

//ARRAMQUE DE BOT
const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//ESTO SE NECESITA PARA FUNCIONAR CON DISCORD

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const db = require("megadb");
const suggestcha = new db.crearDB("channel_suggest");
const moment = require("moment");

let prefix = config.prefix;

client.on('ready', () => {
console.log(`bot started ${client.user.tag}`);
   client.user.setPresence( {
     status: "online",
activity: {
           name: `tk!report | Estoy en ${client.guilds.cache.size} servidores.`,
           type: "WATCHING",
           
}
});
})


//COMMANDOS E INTERACCIONES
client.on('message', (message) => {
    if(message.author.bot) return; {
    let texto = message.content
}
  if(message.content.startsWith(prefix+'clown')) {                       //tk!clown
    const embed = new Discord.MessageEmbed()
    .setDescription("you")
    .setImage(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
}
  if(message.content.startsWith(prefix+'ping')) {                        //sx!ping
    let ping = Math.floor(message.client.ws.ping)
    const embed = new Discord.MessageEmbed()
    .setTitle("Tu ping de mensajes")
    .setDescription(`${ping}`)
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
}
  if(message.content.startsWith(prefix+'test')) {                              //tk!test
    let whitelist = ["178651638209314816", "706694530497380463"]
    const werror = new Discord.MessageEmbed()
    .setTitle("⚠️ Acceso denegado ⚠️")
    .setDescription("Este comando es exclusivo de los desarrolladores del bot.")
    .setThumbnail(message.author.avatarURL)
    .setColor(config.color)
    .setFooter(`Intento de: ${message.author.tag}`, message.author.avatarURL)
    if(!whitelist.includes(message.author.id)) return message.channel.send(werror)
    if(message.channel.id !== "178651985015209984") return message.delete();
    message.channel.send({ embed: werror })
    .setTitle("prueba")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: werror })
}
  
  if(message.content.startsWith(prefix+'chocovaso')) {                                                        //tk!chocovaso
    const embed = new Discord.MessageEmbed()
    .setTitle("Te lo mereces cap@")
    .setColor(config.color)
    .setImage("https://cdn.discordapp.com/attachments/710648492791431238/711378070786932826/ENdaoP_WoAEs7WH.jpg")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
    
}
  if(message.content.startsWith(prefix+'punch')) {
    let persona = message.mentions.users.first()                                                    //tk!punch
    const embednopersona = new Discord.MessageEmbed() 
    .setTitle("Te pegaste a vos mismo xd")
    .setColor(config.color)
    .setImage("https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/61291055_1057428687785163_2383982070784327680_n.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=d2d9V5NkN_oAX8mQzf6&_nc_ht=scontent.fmvd1-1.fna&oh=6d16f5b237fad43d7e719935111f5416&oe=5EE5B1A7")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
        if(!persona) return message.channel.send({ embed: embednopersona })
    const embedpersona = new Discord.MessageEmbed() 
    .setTitle("Le pegaste a " + persona.username)
    .setColor(config.color)
    .setImage("https://media1.tenor.com/images/079fad3ce8871e86b93bff8b786aa179/tenor.gif?itemid=16557096")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
        message.channel.send({ embed: embedpersona }) 
}
  if(message.content.startsWith(prefix+'owo')) {                                                      //tk!owo
    const embed = new Discord.MessageEmbed()
    .setTitle("OwO")
    .setColor(config.color)
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/719633582812823592/5484184-owo-t-shirts-teepublic-uk-owo-png-313_313_preview.png")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
     message.channel.send({ embed: embed })
}
  if(message.content.startsWith(prefix+'owner')) {                                             //tk!owner
    let creador = client.users.cache.get("178651638209314816")
    let colaborador = client.users.cache.get("706694530497380463")
    const embed = new Discord.MessageEmbed()
    .setTitle("This bot was created by "+creador.tag+" in collab with "+colaborador.tag+".")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
}
  if(message.content.startsWith(prefix+'help')) {                                       //tk!help
    const embed = new Discord.MessageEmbed()
    .addField("Comandos exclusivos", "`tk!test` `tk!restart`")
    .addField("Comandos útiles", "`tk!report` `tk!suggest` `tk!anuncio`")
    .addField("Comandos de diversión", "`tk!punch` `tk!chocovaso` `tk!owo` `tk!cookie` `tk!clown` `tk!question` `tk!genero` `tk!microwave` `tk!tabien` `tk!tamal`")
    .addField("Comandos de información", "`tk!owner` `tk!dev` `tk!ping` `tk!serverinfo`")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    
    message.channel.send({ embed: embed })
}
  if(message.content.startsWith(prefix+'page')) {                                                                                          //tk!page
    let creador = client.users.cache.get("178651638209314816")
    const embed = new Discord.MessageEmbed()
    .setDescription(`Accede a la página de ${creador.username} [cliqueando aquí](https://www.supahfox.tk) (actualmente en mantenimiento)`)
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
}
 if(message.content.startsWith(prefix+'restart')) {                                                                         //tk!restart
   
  let whitelistid = ["706694530497380463", "178651638209314816"]
  
    if(!whitelistid.includes(message.member.id)) return message.channel.send(":warning: No estás en la whitelist. Ni lo intentes.")
   const embed = new Discord.MessageEmbed()
   .setDescription(`${client.user.username} is now restarting.`)
   .setThumbnail("https://thumbs.gfycat.com/ObviousQuarrelsomeIntermediateegret-max-1mb.gif")
   .setColor(config.color)
   .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
   message.channel.send({ embed: embed })
        client.destroy().then;
        client.login(process.env.TOKEN);
}
  if(message.content.startsWith(prefix+'question')) {                                                                          //tk!question
 let pregunta = message.content.split(/ +/).slice(1).join(/ +/)
 let posibles = ["sí", "no"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 if(!pregunta) return message.reply("debes preguntarme algo.");
 message.channel.send("Yo creo que " + respuesta + ".")
 
 
}
  if(message.content.startsWith(prefix+'genero')) {                                                                              //tk!genero
 let persona = message.mentions.users.first()
 let posibles = ["chevrolet corsa hatchback tuning soundcar", "honda civic 2002", "uwu", "homosexual", "heterosexual", "trapito"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 if(!persona) return message.channel.send(`Sos ${respuesta}.`);
 
 message.channel.send(`${persona} es ${respuesta}.`)
 
 
}
  if(message.content.startsWith(prefix+'dev')) {                                                                              //tk!dev
 let hosting = config.hosting
 let support = `${client.guilds.cache.get("178651985015209984")} [entra aquí](https://discord.gg/yzaTfgU)`
 let creador = client.users.cache.get("178651638209314816")
 let colaborador = client.users.cache.get("706694530497380463")
 const embed = new Discord.MessageEmbed()
 .setTitle("Bot info")
 .setDescription("Bot de diversión y memes")
 .addField("Nombre:", client.user.username)
 .addField("Creador:", creador.tag)
 .addField("Colaboradores:", `${colaborador.tag} [entrar a su discord](https://discord.gg/C9qzVxg)`)
 .addField("Alojamiento:", hosting)
 .addField("Servidores:", client.guilds.cache.size)
 .addField("Cantidad global de usuarios:", client.users.cache.size)
 .addField("Lenguaje", "`Spanish (Uruguay/Argentina)` `English`")
 .addField("Etiquetas:", "`Diversión` `Memes` `Anime`")
 .addField("Support server:", support)
 .setThumbnail(client.user.avatarURL)
 .setColor(config.color)
   .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 message.channel.send({ embed: embed })
 
 
}
  if(message.content.startsWith(prefix+'report')) {                                                                              //tk!report
    const embed = new Discord.MessageEmbed()
  .setTitle ("Para reportar o sugerir, hace click acá")
  .setURL ('https://forms.gle/Monzo7vQE9d7GNjRA')
  .setColor(config.color)
  .setFooter(`Servidor: ${message.guild}`, message.guild.iconURL())
  message.channel.send({ embed: embed })
 
}
if(message.content.startsWith(prefix+'suggest')) {                                                                                //tk!suggest
    let sugerencia = message.content.split(/ +/).slice(1).join(/ +/)
    if(!sugerencia) return message.reply("falta un contenido.")
      message.delete({ timeout: 5000 })
const embed = new Discord.MessageEmbed()
 .setTitle(`Sugerencia local`)
  .setDescription(`**Aporte:** ${sugerencia}\n**Sugerente:** ${message.author.tag}`)
 .setColor(config.color)
   .setFooter(`Servidor: ${message.guild}`, message.guild.iconURL())
 .setThumbnail(message.author.avatarURL())
message.channel.send({ embed: embed })
 
}
  
  if(message.content.startsWith(prefix+'anuncio')) {                                                                                //tk!anuncio
    let anuncio = message.content.split(' ').slice(1).join(' ')
    if(!anuncio) return message.reply("falta un contenido.")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("no tienes permisos.")
    message.delete({ timeout: 5000 })
const embed = new Discord.MessageEmbed()
 .setTitle(`Anuncio de ${message.guild}`)
  .setDescription(`${anuncio}`)
 .setColor(config.color)
.setFooter(`Responsable: ${message.author.tag}`, message.author.avatarURL())
 .setThumbnail(message.author.avatarURL())
    message.channel.send({ embed: embed })
}
   if(message.content.startsWith(prefix+'serverinfo')) {                                                                              //tk!serverinfo
 let createdAt = moment(message.guild.createdAt).format('MMMM Do YYYY, h:mm:ss a');
 let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 .setTitle(`Server Info`)
 .setDescription(`Este comando te brindará información acerca del servidor que te encuentres actualmente.`)
 .addField("Nombre:", message.guild)
 .addField("ID:", message.guild.id)
 .addField("Creador:", owner.tag)
 .addField("Región:", message.guild.region)
 .addField("Fecha de creación:", createdAt)
 .addField("Cantidad de canales:", message.guild.channels.cache.size)
 .setThumbnail(message.guild.iconURL())
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
 
 
}
   if(message.content.startsWith(prefix+'cookie')) {                                                                              //tk!cookie
 let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 .setDescription(`${message.author.username} se come una galletita uwu`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/716421764401332254/31d1baa26c7c31e22b2e065f7dd4493abeb9ae5a_hq.gif")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
 
}
  if(message.content.startsWith(config.prefix+'microwave')) {
  const embed = new Discord.MessageEmbed()
  .setTitle("mmmmmmmmm")
  .setImage("https://cdn.discordapp.com/attachments/671170382010515466/719736719175450715/2551979Sin_t_tulo2_830d8c863fe442d282671647fc19a389.jpg")
  .setColor(config.color)
  message.channel.send({ embed: embed })
}
  if(message.content.startsWith(prefix+'tabien')) {                                                                              //tk!tabien
 let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 .setDescription(`${message.author.username} dijo que ta bien :thumbsup:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/720322865924145202/download.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
}
    if(message.content.startsWith(prefix+'tamal')) {                                                                              //tk!tabien
 let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 .setDescription(`${message.author.username} dijo que ta mal :thumbsdown:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/720696286541643806/5e6d197e707fe.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
}
 });

  client.on('guildCreate', async(guild) => { 
  let md = client.users.cache.get("178651638209314816")
  const embed = new Discord.MessageEmbed()
  .setTitle(`Ahora estoy en ${client.guilds.cache.size} servidores`)
  .addField("Nombre:", guild.name)
  .addField("Creador:", guild.owner.user.tag)
  .addField("Usuarios:", guild.members.cache.size)
  .setColor(config.color)
  .setFooter(`Noticia del bot ${client.user.username}`)
  .setThumbnail(guild.iconURL())
  md.send({ embed: embed })
})

client.login(process.env.TOKEN);                         //TOKEN