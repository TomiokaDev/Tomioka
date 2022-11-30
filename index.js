const { Events, Client, GatewayIntentBits, Partials, Collection } = require('discord.js');

const { DisTube } = require('distube')
const { SpotifyPlugin } = require('@distube/spotify')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { YtDlpPlugin } = require('@distube/yt-dlp')
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
	intents: [
    GatewayIntentBits.GuildVoiceStates,
	], 
partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});

const fs = require('fs');
const config = require('./config.json');
require('dotenv').config() // remove this line if you are using replit

client.emotes = config.emoji;
client.distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
    searchSongs: 10,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new SpotifyPlugin({
      emitEventsAfterFetching: true
    }),
    new SoundCloudPlugin(),
    new YtDlpPlugin()
  ]
})

client.queue = new Map();
client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.buttons = new Collection();
client.prefix = config.prefix;

module.exports = client;


fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)(client)
});



const status = queue =>
  `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.names.join(', ') || 'Off'}\` | Loop: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
  }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
client.distube
  .on('playSong', (queue, song) =>
      
    queue.textChannel.reply(
      `${client.emotes.play} | Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${
        song.user
      }\n${status(queue)}`
    ).then(queue.toggleAutoplay())

  )
  .on('addSong', (queue, song) =>
    queue.textChannel.channel.send(
      `${client.emotes.success} | Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    )
  )
  .on('addList', (queue, playlist) =>
    queue.textChannel.send(
      `${client.emotes.success} | Added \`${playlist.name}\` playlist (${
        playlist.songs.length
      } songs) to queue\n${status(queue)}`
    )
  )
  .on('error', (channel, e) => {
    if (channel) channel.send(`${client.emotes.error} | An error encountered: ${e.toString().slice(0, 1974)}`)
    else console.error(e)
  })
  .on('empty', channel => channel.send('Voice channel is empty! Leaving the channel...'))
  .on('searchNoResult', (message, query) =>
    interaction.reply(`${client.emotes.error} | No result found for \`${query}\`!`)
  )
  .on('finish', () => {})
 //DisTubeOptions.searchSongs = true
 .on("searchResult", (message, results) => {
    let i = 0
     interaction.reply(
         `**Choose an option from below**\n${results
           .map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``)
             .join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`
    )
 })
 .on("searchCancel", message => interaction.reply(`${client.emotes.error} | Searching canceled`))
 .on("searchInvalidAnswer", message =>
     interaction.reply(
        `${client.emotes.error} | Invalid answer! You have to enter the number in the range of the results`
     )
 )
.on("searchDone", () => {})

  /*  .on('searchResult', (message, result) => {
        let i = 0;
		const embed = new EmbedBuilder()
		.setTitle('Elige una de estas canciones')
		.setDescription(`${result.map(song => `**${++i}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join('\n')}\n*Tienes 60 segundos para elegir, para cancelar escribe algo que no sea un numero*`);
        interaction.reply(embed);
    })*/
client.login(process.env.TOKEN)
