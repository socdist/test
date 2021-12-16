
const TelegramBot = require('node-telegram-bot-api');
const token = '5063248322:AAElwf72Cu8wNfYZDho79g2QaHPnlC8xPKw';
console.log('hello world');
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Hey there! It's good to see you :)");
    
    });
    
bot.on('message', (msg) => {

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"Which album are you vibing with now?");
    }
    bot.hears('evermore', (ctx) => ctx.reply('Bestie,are you ok?'));
    
    });