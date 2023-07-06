//TomiokaBot
//By @SupahFox
//Description: Slash Command Handler

const fs = require('fs');

const { PermissionsBitField } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest')

const AsciiTable = require('ascii-table');
const table = new AsciiTable().setHeading('Slash Commands', 'Stats').setBorder('|', '=', "0", "0")

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

const rest = new REST({ version: '9' }).setToken(TOKEN);

module.exports = (client) => {
	const slashCommands = []; 

	fs.readdirSync('./commands/').forEach(async dir => {
		const files = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

		for(const file of files) {
				const slashCommand = require(`../commands/${dir}/${file}`);
				slashCommands.push({
					name: slashCommand.name,
					description: slashCommand.description,
					type: slashCommand.type,
					options: slashCommand.options ? slashCommand.options : null,
					default_permission: slashCommand.default_permission ? slashCommand.default_permission : null,
					default_member_permissions: slashCommand.default_member_permissions ? PermissionsBitField.resolve(slashCommand.default_member_permissions).toString() : null
				});
			
				if(slashCommand.name) {
						client.slashCommands.set(slashCommand.name, slashCommand)
						table.addRow(file.split('.js')[0], '✅')
				} else {
						table.addRow(file.split('.js')[0], '⛔')
				}
		}
		
	});

	(async () => {
			try {

				//CON ESTO LO BORRO POR SI LA CAGO

                /*rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: [] })
				.then(() => console.log('Successfully deleted all guild commands.'))
				.catch(console.error);

				// for global commands
				rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] })
				.then(() => console.log('Successfully deleted all application commands.'))
				.catch(console.error);*/

				//Agrega los comandos slash
				await rest.put(
					process.env.GUILD_ID ?
					Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID) :
					Routes.applicationCommands(CLIENT_ID),
					{ body: slashCommands }).then(() =>
					console.log('Slash Commands registrados'))
				.catch(console.error);
				

			} catch (error) {
				console.log(error);
			}
	})();
};
