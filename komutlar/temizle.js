//Code Hure Dolunay
const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("🚫 Lütfen silinecek mesaj sayısını yazın.");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`✅ Başarılı, ${args[0]} adet mesajı sildim.`).then(msg => msg.delete(2000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil,t,s'],
  permLevel: 6
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};