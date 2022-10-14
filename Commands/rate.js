const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "rate",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {

        let number = Math.floor(Math.random() * 101);
        if (!args[1]) {
            return message.reply('You are a solid ' + number + '/100')
        } else {
            let user = message.mentions.users.first();
            if (!user) {
                return message.channel.send('Please include who you are rating.')
            }
            return message.reply('I would rate ' + user.username + ' a ' + number + '/100')

        }
    }

})
