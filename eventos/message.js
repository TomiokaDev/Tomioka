const config = require('../config.js'); 
const db = require("megadb"); //base de datos
const bl = new db.crearDB("blacklist"); //base de datos donde esta almacenado las ids

module.exports = (client, message) => { 

  if(!message.content.startsWith(config.prefix)) return; 
  //taba client.config undefined
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase()
  
  if(message.author.bot) return;
  if(checkBlackList(message)) return message.channel.send(`\`${message.author.tag}\` No puedes usar los comandos de ${client.user.username} porque se encuentra en la blacklist`);

  // Definiendo los argumentos y comandos.
  





  
  // Manejando los eventos.
  let cmd = client.comandos.get(command); // Obtiene el comando de la colección client.commandos
  if(!cmd) return; // Si no hay comandos no ejecute nada.
  
  // Ejecuta el comando enviando el client, el mensaje y los argumentos.
cmd(client, message, args);
}
function checkBlackList(message){
//funcion la cual verifica los datos de la db
    if(!["TU-ID"].includes(message.author.id) && bl.has(`${message.author.id}`)){
      //si la id del autor no es tu id y ademas ese autor esta en la bl entra aca
      return true; //retorna true
  }
   return false; //si no entra en la condicional significa que es false, tons aca false por default
  

}
