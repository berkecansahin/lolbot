const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RED")
    .addField("Ping", "⏳│" + Math.round(client.ping) + " MS")
    .addField("Komutu Kullanan", `${message.author.username}#${message.author.discriminator}`)
    .setTimestamp()
    .setFooter("⚡│GUZENMAN")
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Pingi gösterir.',
  usage: 'ping'
};
