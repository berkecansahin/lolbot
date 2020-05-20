const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('**ne bilm ölçmedim ki amk**')
		.setImage(`https://i.hizliresim.com/LvWOz1.jpg`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'kaçcm len',
  usage: 'kaçcm'
};
