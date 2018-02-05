
const MusicBot = require('./src/music-bot.js');
const logger = require('./src/logger.js');

const bot = new MusicBot({
    command: {
        symbol: '~' // command symbol trigger
    },
    discord: {
        token: 'MzgyODc2NjczODk4NDQ2ODU4.DVkMNw.319RynZPJvAIu_oI-0RIcKtWKfg'//,
        // manage: {
        //     channels: [
        //         // Example text channel manager, limits media channel to 5 posts, limit should probably be less than 100 to avoid bugs
        //         { name: 'media', limit: 5 }
        //     ]
        // }
    }
});

bot.connect()
    .then(() => {
        logger.log('Listening');
        bot.listen();
    })
    .catch(err => {
        logger.error(err);
    });
