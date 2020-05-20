const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime silah çekeceğini yazman lazım!**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setTimestamp()
    .setDescription(`** ${mesaj} ` + message.author.username + ' sana silah çekti!**')
		.setImage(`https://i.hizliresim.com/7BryGW.jpg`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'silah-çek',
  description: 'silah çeker',
  usage: 'silahçek'
};