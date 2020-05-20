const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Kafa Atacağımızı Yazmalısın!**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setTimestamp()
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana kafa attı!**')
		.setImage(`https://media.giphy.com/media/YRc6wu19paKJF1dtn3/giphy.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kafa-at',
  description: 'kafa atar.',
  usage: 'kafa-at'
};
