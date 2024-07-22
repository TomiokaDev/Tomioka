const config = require('../config.js'); 
const db = require("megadb"); //base de datos
const bl = new db.crearDB("blacklist"); //base de datos donde esta almacenado las ids

module.exports = (client, message) => { 

  if(!message.content.startsWith(config.prefix)) return; 
  //taba client.config undefined
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase()
  
  if(message.author.bot) return;
  if(checkBlackList(message)) return message.channel.send(`\`${message.author.tag}\` No puedes usar los comandos de ${client.user.username} porque te encuentras en la \`blacklist\` por un mal uso del bot. Para más información ve a nuestro servidor de soporte.`);

  // Definiendo los argumentos y comandos.
  





  
  // Manejando los eventos.
  let cmd = client.comandos.get(command); // Obtiene el comando de la colección client.commandos
  if(!cmd) return; // Si no hay comandos no ejecute nada.
  

//COOLDOWN
if (!client.cooldown.has(cmd.config.command)) { //comprueba si en la Collection esta el nombre del comando
        client.cooldown.set(cmd.config.command, new (require("discord.js")).Collection());
  //agregas el nombre del comando a una colleciton y el valor es otra collection
      }

      let now = Date.now(), //tiempo de ahora
      timestamps = client.cooldown.get(cmd.config.command), //cooldown
      cooldownAmount = (cmd.config.cooldown ? cmd.config.cooldown : 2.5) * 1000;
      //bien te explico, obtengo el tiempo de cooldown de la config del comando ejecutado, el valor que tenga se multiplica x mil es decir (5 * 1000 = 5 segundo) si no pusiste el tiempo o numero el tiempo de cooldown por defecto sera 2.5 

      if (timestamps.has(message.author.id)) {
      //si la collection tiene la id del autor
        let expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        //verifica el tiempo
        if (now < expirationTime) {
          //si aun no a pasado el tiempo
          let timeLeft = (expirationTime - now) / 1000; //obtengo el tiempo restante
          message.channel.send(`Por favor espere \`${timeLeft.toFixed(1)}\` segundo(s) para volver a usar el comando: \`${cmd.config.command}\``,); //avisamos que aun le falta cooldown y debe esperar x tiempo
          return; //retornamos nada para que la ejecucion termine aca y no ejecute el comando
        }
      }
      timestamps.set(message.author.id, now); //agregamos al autor con el tiempo actual de cooldown

      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
      //borramos al autor del cooldown

  // Ejecuta el comando enviando el client, el mensaje y los argumentos.
cmd(client, message, args);
}
function checkBlackList(message){
//funcion la cual verifica los datos de la db
    if(!["178651638209314816"].includes(message.author.id) && bl.has(`${message.author.id}`)){
      //si la id del autor no es tu id y ademas ese autor esta en la bl entra aca
      return true; //retorna true
  }
   return false; //si no entra en la condicional significa que es false, tons aca false por default
  

}
