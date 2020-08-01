const Discord = require('discord.js');
let scooldown = new Map();

module.exports = async (guild, client, member) => {




function verify (guild, user) {
  if(scooldown.has(guild)) {
    if(scooldown.get(guild).includes(user)) {
    return true  
   }
    return false
    
   } else {
     scooldown.set(guild, [])
     return false
   }
}

function add (guild, user) {
  scooldown.get(guild).push(user)
  setTimeout( () => {
    remove(guild, user)
  }, 5000)
}
  


function remove (guild, user) {
  let servers = scooldown.get(guild)
  servers.splice(servers.indexOf(user), 1)
  
}
}
