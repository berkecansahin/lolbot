const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sustur` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  const mod = message.author;
   let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let modlog = guild.channels.find('name', 'mute-kayıtları');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply('`Muted` adlı bir rol bulamıyorum.').catch(console.error);
  if (!modlog) return message.reply('`rol-kayıtları` kanalını bulamıyorum.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('Kime `Vip` vereceğini yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
    .setTitle('UNMUTE İŞLEMİ')
    .addField('Kullanıcı', `<@${user.id}>`)
    .addField('Yetkili', `${mod}`)
  
  message.channel.send('✅ Kullanıcının susturması kaldırıldı.')

  if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.reply('Gerekli izinlere sahip değilim.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'unmute',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'unmute [kullanıcı]'
};