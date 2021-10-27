module.exports = {
	name: 'lasubeolabaja',
	description: 'el nombre lo dice todo',
	aliases: ['labajaolasube'],
	guildOnly: true,
	cooldown: 5,
	execute(message) {


		const posibles = ['La baja', 'La re baja man', 'La sube', 'La re sube amigo'];
		const rd = Math.floor(Math.random() * posibles.length);
		const respuesta = posibles[rd];
		return message.channel.send(`${respuesta}`);

	},
};
