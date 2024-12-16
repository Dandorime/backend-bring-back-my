"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RunTelegramBot;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
function RunTelegramBot() {
    // Your secret bot token.
    const token = process.env.TELEGRAM_BOT_TOKEN;
    // Создайте экземпляр бота
    const bot = new node_telegram_bot_api_1.default(token, { polling: true });
    // URL вашего веб-мини-приложения
    const webAppUrl = process.env.WEB_MINI_APP;
    // Обработчик команды /start
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        // Отправьте пользователю сообщение с кнопкой для открытия веб-приложения
        bot.sendMessage(chatId, 'Привет! Нажмите кнопку ниже, чтобы открыть веб-мини-приложение.', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Открыть мини-приложение',
                            web_app: { url: webAppUrl }, // Ссылка на ваше веб-мини-приложение
                        },
                    ],
                ],
            },
        });
    });
    // Обработчик для других текстовых сообщений
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        if (msg.text !== '/start')
            bot.sendMessage(chatId, 'Я не понимаю. Напишите /start для запуска.');
    });
    // Запустите бота
    console.log('Бот запущен...');
}
