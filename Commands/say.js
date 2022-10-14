const { MessageEmbed } = require("discord.js");
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "say",
    permission: "MANAGE_MESSAGES",
    async run(message, args, client) {
        const sayMessage = message.content.slice(4).trim();
        const embed = new MessageEmbed()
        
        .setColor(message.guild.me.displayHexColor)
        .setDescription(sayMessage)

        message.channel.send({ embeds: [embed]})  
        message.delete()
    
    }
})


