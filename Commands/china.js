
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "china",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        message.channel.send(`<@865181313525743636> Xuě huā piāo piāo běi fēng xiāo xiāo 🍚🌾🍘🍙🍛🍥🐼🐶🍤⛩🥡🐉`);
        message.channel.send('https://tenor.com/view/chinese-china-zhonguo-gif-20748132')
    }
})
