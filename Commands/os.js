const { MessageEmbed } = require("discord.js")
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "os",
    async run(message, args, client) {
    const embed = new MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .addField('Bot Name', `${client.user.username}`)
        .addField('Bot Creation Date', `${client.user.createdAt}`)
        .addField('Overall members', `${client.users.cache.size}`)
        .addField('Guilds', `${client.guilds.cache.size}`)
    message.channel.send({ embeds: [embed]})
    console.log(client.guilds.cache.map(x => x.name))

    }
})

