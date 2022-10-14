const Command = require("../Structures/Command.js");
const randomPuppy = require('random-puppy');
const { MessageEmbed } = require("discord.js")

module.exports = new Command({
    name: "cat",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const subReddits = ["cat"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setImage(img)
            .setColor(message.guild.me.displayHexColor)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)
        message.channel.send({ embeds: [embed]})
    }
})
