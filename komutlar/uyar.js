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
  let reason = args.slice(2).join(' ');
  let modlog = guild.channels.find('name', 'uyarı-kayıtları');
  let muteRole = message.mentions.roles.first();
  if (!modlog) return message.reply('`uyarı-kayıtları` kanalını bulamıyorum.').catch(console.error);
   if (reason.length < 1) return message.reply('Uyarı sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Doğru Kullanımı: **s!uyar <oyuncu> <uyarı 1/2/3> <sebep>**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
    .setTitle('UYARI İŞLEMİ')
     .addField('Kullanıcı', `<@${user.id}>`)
    .addField('Yetkili', `${mod}`)
    .addField('Açıklama', reason);
  message.channel.send('✅ Kullanıcı başarıyla uyarıldı.')

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Gerekli izinlere sahip değilim.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
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
  name: 'uyar',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'uyar [kullanıcı]'
};