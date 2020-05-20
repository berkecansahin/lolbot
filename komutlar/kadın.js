const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has("712755083494031460")) return message.channel.send(`Bu komutu kullanabilmek için \`'✅│Kayıt Sorumlusu'\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcıyı Etiketlemelisin!')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('712755336196522066')
   let rol2 = message.mentions.roles.first()
  let member2 = message.guild.member(kullanıcı)
  member.removeRole('712750066968035348')
  let embed = new Discord.RichEmbed()
  .setColor('RED')
  .setTitle('Kayıt İşlemi Başarılı!')
  .setDescription(`**Kayıt Edilen Kullanıcı:** ${kullanıcı} \n**Verilen Rol:** \`🌹│Lady's\`\n**Silinen Rol:** \`💤│Kayıtsız\``)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`Yetkili: ${message.author.username}`) 
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 2
}

exports.help = {
  name: 'kadın',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
}