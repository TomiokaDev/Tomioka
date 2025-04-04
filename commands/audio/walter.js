const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'walter',
	description: 'Walter de la suerte',
	aliases: ['walterdog'],
	guildOnly: true,
	cooldown: 5,
    run: async (client, interaction) => {

        let walter = ["https://cdn.discordapp.com/attachments/671170382010515466/722946412026789918/6rxud0q5zwc31.jpg", 
        "https://cdn.discordapp.com/attachments/671170382010515466/737791285917778070/ezgif.com-video-to-gif.gif", 
        "https://cdn.discordapp.com/attachments/671170382010515466/737791309330514070/tenor.gif", 
        "https://cdn.discordapp.com/attachments/671170382010515466/738124040425832558/tenor_1.gif", 
        "https://cdn.discordapp.com/attachments/671170382010515466/748746117788860436/ezgif.com-video-to-gif.gif", 
        "https://media.tenor.com/images/88164ccf45a14a6c33fbe9986b59ffa2/tenor.gif", 
        "https://media1.tenor.com/images/06affc380ff408b1e88acb3d6b356da3/tenor.gif?itemid=6118954", 
        "https://media.discordapp.net/attachments/656253469908402201/737330718639915099/e9bde7597b87eeec7e92433b7a0fdc35.gif", 
        "https://media1.tenor.com/images/3e849d2e21301a7bc5f1c7c24b2e04c3/tenor.gif?itemid=17449940", 
        "https://cdn.discordapp.com/attachments/671170382010515466/748746449260380231/e9bde7597b87eeec7e92433b7a0fdc35.gif"]
          
    let captura = walter[Math.floor(walter.length * Math.random())];

    const embed = new Discord.EmbedBuilder()
        .setDescription("Encontraste al **walter** de la suerte :)")
        .setColor(config.color)
        .setImage(captura)
        .setFooter({text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL()})
    await interaction.reply({ embeds : [embed] });
},
};