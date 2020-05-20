const Discord = require('discord.js');


exports.run = (client, msg, args) => {
	let guild = msg.guild
	let duyurular = guild.channels.find('name', '🔔│duyurular');
	if (!duyurular) return msg.reply('`🔔│duyurular` kanalını bulamıyorum.');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return msg.reply('Bir şey yazmadınız.');
    msg.delete();
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle('📢│Duyuru')
    .setDescription(`\n${mesaj}`)
    .setTimestamp()
    .setFooter(`Yetkili: ${msg.author.username}`)
    return guild.channels.get(duyurular.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru', 'duyuruyap'],
  permLevel: 3
};

exports.help = {
  name: 'duyuruyap',
  description: 'Sunucuda Duyuru yapmanızı sağlar.',
  usage: 'duyuruyap [yazı]'
};