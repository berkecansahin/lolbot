const Discord = require('discord.js');

exports.run = (client, message) => {
	let csgopng = "https://i.hizliresim.com/Ezp0f0.png"
    var randomcekilis = [
		  "✅ PUBG MOBILE 500 UC ÇEKİLİŞİ",
      "✅ LoL 1780 RP ÇEKİLİŞİ",
      "✅ 50 TL STEAM CÜZDAN KODU",
      "✅ MINECRAFT PREMIUM ÇEKİLİŞİ",

	]
    var randomcekilis = randomcekilis[Math.floor(Math.random(1) * randomcekilis.length)]
	const embed  = new Discord.RichEmbed()
	.setAuthor('Random Çekiliş Sistemi', csgopng)
	.setDescription(`${randomcekilis}`)
	.setColor("RED")
	return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['csgokasa'],
  permLevel: 3
};

exports.help = {
  name: 'randomçekiliş',
  description: 'CS:GO kasa açma simülasyonu',
  usage: 'kasaaç'
};