const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`unban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', 'ban-kayıtları');
  if (!modlog) return message.reply('`ban-kayıtları` kanalını bulamıyorum.');
  if (!user) return message.reply('Banı kaldırılacak kişinin ID numarasını yazmalısın.').catch(console.error);
  message.guild.unban(user);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('YASAK KALDIRMA')
    .addField('Kullanıcı', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili', `${message.author.username}#${message.author.discriminator}`)
  return guild.channels.get(modlog.id).sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};