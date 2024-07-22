//TomiokaBot
//By @SupahFox @HathHub
//Description: Slash Command Handler

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'fs'.
const fs = require('fs');

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Permission... Remove this comment to see the full error message
const { PermissionsBitField } = require('discord.js');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const { Routes } = require('discord-api-types/v9');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const { REST } = require('@discordjs/rest')

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'AsciiTable... Remove this comment to see the full error message
const AsciiTable = require('ascii-table');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'table'.
const table = new AsciiTable().setHeading('Slash Commands', 'Stats').setBorder('|', '=', "0", "0")

// @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
const TOKEN = process.env.TOKEN;
// @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
const CLIENT_ID = process.env.CLIENT_ID;

const rest = new REST({ version: '9' }).setToken(TOKEN);

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = (client) => {
	const slashCommands = [];

	fs.readdirSync('./commands/').forEach(async dir => {
		//si el archivo termina en .js
		const files = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

		for (const file of files) {
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
			const slashCommand = require(`../commands/${dir}/${file}`);
			slashCommands.push({
				name: slashCommand.name,
				description: slashCommand.description,
				type: slashCommand.type,
				options: slashCommand.options ? slashCommand.options : null,
				default_permission: slashCommand.default_permission ? slashCommand.default_permission : null,
				default_member_permissions: slashCommand.default_member_permissions ? PermissionsBitField.resolve(slashCommand.default_member_permissions).toString() : null
			});

			if (slashCommand.name) {
				client.slashCommands.set(slashCommand.name, slashCommand)
				table.addRow(file.split('.js')[0], '✅')
			} else {
				table.addRow(file.split('.js')[0], '⛔')
			}
		}

	});

	//CON ESTO LO BORRO POR SI LA CAGO

	/*rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);

	// for global commands
	rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);*/

	(async () => {
		try {
// @ts-expect-error TS(2584): Cannot find name 'console'. Do you need to change ... Remove this comment to see the full error message
			console.log(`Started refreshing ${slashCommands.length} application (/) commands.`);

			// Refresh and register all commands
			const data = await rest.put(
				//GUILD
				//Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
				//{ body: slashCommands },

				//GLOBAL
// @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
				Routes.applicationCommands(process.env.CLIENT_ID),
				{ body: slashCommands },

				//DELETE GUILD
				//Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
				//{ body: [] },

				//DELETE GLOBAL
				//Routes.applicationCommands(process.env.CLIENT_ID),
				//{ body: [] },
			);

// @ts-expect-error TS(2584): Cannot find name 'console'. Do you need to change ... Remove this comment to see the full error message
			console.log(`Successfully reloaded ${data.length} application (/) commands.`);
		} catch (error) {
			// And of course, make sure you catch and log any errors!
// @ts-expect-error TS(2584): Cannot find name 'console'. Do you need to change ... Remove this comment to see the full error message
			console.error(error);
		}
	})();
};
