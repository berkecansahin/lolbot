const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime küfür edeceğini yazman lazım!**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('**Çok ayıp, '+ message.author.username + '**')
		.setImage(`https://i.hizliresim.com/NLRa8P.jpg`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'küfür-et',
  description: 'silah çeker',
  usage: 'küfür-et'
};