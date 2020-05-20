const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let guild = message.guild
  let modlog = guild.channels.find('name', 'rol-kayıtları');
  let rank = message.mentions.roles.first();
  if (!modlog) return message.reply('`rol-kayıtları` kanalını bulamıyorum.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('Kime `Vip` vereceğini yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
    .setTitle('LOL RANK')
    .addField('Kullanıcı', `@${user.id}`)
   .addField('Verilen Rank', `${rank}`)
    .addField('Yetkili', `${mod}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Gerekli izinlere sahip değilim.').catch(console.error);

  if (message.guild.member(user).roles.has(rank.id)) {
    message.guild.member(user).removeRole(rank).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(rank).then(() => {
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
  name: 'rank',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'rol-ver [kullanıcı]'
};
