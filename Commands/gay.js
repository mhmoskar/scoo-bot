
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "gay",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        message.channel.send(`<@371569788427698178> is hella gay`);
        message.channel.send('https://tenor.com/view/spongebob-gay-gif-22490381')
    }
})
