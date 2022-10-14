const { MessageEmbed } = require("discord.js");
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "help",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle('Help/Commands')
        .setDescription(`My command is \`;\` If you need any help do \`;help\`.`)
        .setColor(message.guild.me.displayHexColor)
        .addField('Info', '```\nhelp \nbotinfo \nserverinfo \ninvite \ndiscord \nping```', false)
        .addField('Commands', '```\n8ball \nchina \nclyde \ngay \nmeme \noceanman \nratatouille \nrate \nsay```')
        .addField('Animals', '```\nbird \ncat \ndog \nfish \nhamster \nlizard \nrat```')
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    message.channel.send({ embeds: [embed]})

    }
})




