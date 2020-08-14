const db = require("megadb"); //db del dia
const bl = new db.crearDB("blacklist"); //"base de datos" bl
 
module.exports  = async (client, message, args) => {
  let reason = args[2] ? args.slice(2).join(" ") : "Si estas viendo esto, puede ser que te hayamos bloqueado del uso del bot o un posible mantenimiento!"//la reason tomara despues de los dos primeros argumentos
//args[0] add o remove
//args[1] la ID del usuario a ingregar a la bl
//args[2] la razon, opcional
  if(!["178651638209314816"].includes(message.author.id)) return message.channel.send("Solo el ``desarrollador`` puede usar este comando"); //si la id del autor no es tu id retorna este mensaje, asi evitas que alquien mas pueda usarlo
  if(!args[0]) return message.channel.send("Opciones disponibles: ``add`` ``<ID>`` ``<Razon>``\n``remove`` ``<ID>`` ``<Razon>``"); //mensaje por si no hay args[0]
  if(args[0].toLowerCase() == "add"){
    //si el primer argumento es add pues es agregarlo
    let user = await client.users.fetch(args[1]); //args[1] es el parametro de la ID el cual estara en la blacklist
    if(!user) return message.channel.send("ID invalida, verifica la id"); //si no encuentra el usuario (es un fetch puede encontrar a cualquier usuario) tons la id es invalida
    if(!bl.has(`${user.id}`)){
      //si no esta en la db
      bl.set(`${user.id}`, {reason: reason}); //ingresamos al usuario a la db con la razon, si no hubo una razon el texto que ingresara es "clasificado"
      message.channel.send(`\`${user.tag}\` agregado a la blacklist\n> **Razón:** ${reason}`);
    }else{
      message.channel.send(`\`${user.tag}\` ya se encuentra en la blacklist`); //si el usuario esta en la db
    }
 
  }else if(args[0].toLowerCase() == "remove"){
       //si el primer argumento es remove pues es removerlo de la db
    let user = await client.users.fetch(args[1]); //args[1] es el parametro de la ID el cual estara en la blacklist
    if(!user) return message.channel.send("ID invalida, verifica la id"); //si no encuentra el usuario (es un fetch puede encontrar a cualquier usuario) tons la id es invalida
    if(bl.has(`${user.id}`)){
      //si esta en la db
      bl.delete(`${user.id}`); //lo eliminas de  la db
      message.channel.send(`\`${user.tag}\` removido de la blacklist`);
    }else{
      message.channel.send(`\`${user.tag}\` no se encuentra en la blacklist`); //si el usuario no esta en la db
    }
  }
};
module.exports.config = {
command:"blacklist",
aliases:["blacklist"],
cooldown: 5
};
