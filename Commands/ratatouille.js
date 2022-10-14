const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "ratatouille",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        message.channel.send(`<@865181138628378630> OMFG WTF BRO OMFG DUDE BRUH DIES CRINGE BRUH BRUH SECOND HAND EMBARASEMEENT I AM A LADY GENTLE MEN LET ME DRAW A DIAGRAM HOW`);
        message.channel.send('https://tenor.com/view/flushedaway-ritavslefrog-gif-20531114')
    }
})
