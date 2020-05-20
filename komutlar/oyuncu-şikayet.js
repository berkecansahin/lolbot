const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(1).join(' ');
  if (mesaj.length < 0) return message.reply('');
  let reason = args.slice(1).join(' ');
  let guild = message.guild
  let terfiler = guild.channels.find('name', 'kullanıcı-şikayetleri');
  if (!terfiler) return message.reply('');
 const mod = message.author;
   let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (reason.length < 1) return message.reply('**Doğru Kullanımı;** `?şikayet <kişinin etiketi> <şikayet açıklaması>`');
  if (message.mentions.users.size < 1) return message.reply('').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
    .setTitle('KULLANICI ŞİKAYETLERİ')
    .addField('Şikayetçi', `${mod}`)
  .addField('Şikayet Edilen', `@${user.id}`)
    .addField('Açıklama', reason);
  
  message.reply('✅ Şikayetiniz başarıyla iletildi! Yetkili Ekip size özelden ulaşacaktır.')
	
	return guild.channels.get(terfiler.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'şikayet',
  description: 'Kullanıcıyı terfi ettirir.',
  usage: 'şikayet [kullanıcı]'
};