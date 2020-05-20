const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle('LeBlockNetwork Skyblock Güncellemeler') 
    .addField('`28.03.2020 Kayıtları`', 'Bot ayarlandı.', true)
    .addField('`31.03.2020`', 'Sunucu Market Sistemi Ayarlanmaya Başlandı.', true) 
    .addField('`Kayıt yok`', 'Güncelleme yok', true) 
    .addField('`Kayıt yok`', 'Güncelleme yok', true)
    .addField('`Kayıt yok`', 'Güncelleme yok', true) 
    .addField('`Kayıt yok`', 'Güncelleme yok', true) 
    .addField('`Kayıt yok`', 'Güncelleme yok', true)
    .addField('`Kayıt yok`', 'Güncelleme yok', true)
    .addField('`Kayıt yok`', 'Güncelleme yok', true)
    .addField('`Kayıt yok`', 'Güncelleme yok', true) 
    .addField('`Kayıt yok`', 'Güncelleme yok', true) 
    .addField('`Kayıt yok`', 'Güncelleme yok', true) 
    .addField('`Kayıt yok`', 'Güncelleme yok', true) 
    .addField('`Kayıt yok`', 'Güncelleme yok', true) 
    .addField('`Kayıt yok`', 'Güncelleme yok', true) 
    .setTimestamp()
    .setFooter('✅│Güncellemeler Yakında!'); 
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'güncellemelerrrrrrr', 
  description: 'Değişiklikleri gösterir.',
  usage: 'güncellemelerrrrrr'
};
