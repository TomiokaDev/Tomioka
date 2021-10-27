module.exports = {
	name: 'ask',
	description: 'Preguntale al bot y el te responderá',
	aliases: ['ask', 'pregunta'],
	guildOnly: true,
	cooldown: 5,
	execute(message) {

		const pregunta = message.content.split(/ +/).slice(1).join(/ +/);
		const posibles = ['sí', 'no'];
		const rd = Math.floor(Math.random() * posibles.length);
		const respuesta = posibles[rd];
		if(!pregunta) return message.reply('debes preguntarme algo.');
		message.channel.send('Yo creo que ' + respuesta + '.');

	},
};