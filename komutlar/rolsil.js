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
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'rol-kayıtları');
  let muteRole = message.mentions.roles.first();
  if (!modlog) return message.reply('`rol-kayıtları` kanalını bulamıyorum.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('Kime `Vip` vereceğini yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
    .setTitle('ROL SİLME İŞLEMİ')
    .addField('Kullanıcı', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Gerekli izinlere sahip değilim.').catch(console.error);

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
  permLevel: 5
};

exports.help = {
  name: 'rol-sil',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'rol-sil [kullanıcı]'
};
