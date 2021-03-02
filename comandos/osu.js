const osu = require('../osu.js');
const helper = require('../helper.js');

module.exports = async(client, message, args) => {

if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;

try {
    call: obj => {
        return new Promise((resolve, reject) => {
            let { argv, msg, user_ign } = obj;

            let extended = argv[0] == 'osu2';

            let osu_user = helper.getUsername(argv, msg, user_ign);

            if(!osu_user){
                if(user_ign[msg.author.id] == undefined)
                    reject(helper.commandHelp('ign-set'));
                else
                    reject(helper.commandHelp('osu'));

                return false;
            }

            osu.get_user({u: osu_user, extended}, (err, embed) => {
                if(err){
                    reject(err);
                    helper.error(err);
                    return false;
                }

                resolve({embed: embed});
            });
        });
    }
} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
}
};
module.exports.config = {
command:"osu",
aliases:["osu"],
cooldown: 5
}
