module.exports = {
	name: 'orientation',
	description: 'Comando para definir tu orientacion sexual',
	aliases: ['orientacion'],
	guildOnly: true,
	cooldown: 5,
	execute(message) {

		const persona = message.mentions.users.first();
		const posibles = ['chevrolet corsa hatchback tuning soundcar', 'honda civic 2002', 're uwu', 'homosexual', 'heterosexual', 'trapito', 'bisexual', 'un motor de lancha', 'unos repuestos usados de Caterpillar 320,D6,D4 escavadora Jhon Deere 200', 'una memoria Micro Sd Extreme Pro 64gb C/adaptador', 'un soldador Estaño Eléctrico 60w Power\'s Cable reforzado, resistencia y punta', 'Colchón Sommier 2 Plazas Inflado Eléctrico Automático Bentan'];
		const rd = Math.floor(Math.random() * posibles.length);
		const respuesta = posibles[rd];
		if(!persona) return message.channel.send(`Sos ${respuesta}`);

		message.channel.send(`${persona} es ${respuesta}`);

	},
};
