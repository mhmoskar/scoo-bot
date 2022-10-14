const { MessageEmbed } = require("discord.js");
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "snipe",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const msg = client.snipes(message.channel.id);
        if (!msg) return message.reply("no recently deleted messages!");

        const embed = new MessageEmbed()
            .setAuthor(`Deleted by ${msg.author.tag}`, msg.author.displayAvatarURL())
            .setDescription(msg.content)
            .setColor(message.guild.me.displayHexColor);
        
        if(msg.image) embed.setImage(msg.image);

        message.send({ embeds: [embed]});;
    }
})
