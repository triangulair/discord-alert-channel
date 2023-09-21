const { Client, WebhookClient } = require('discord.js-selfbot-v13');
require('dotenv').config();

const client = new Client();
const webhookClient = new WebhookClient({
  url: "Webhook URL"
});

client.on('ready', () => {
  console.log(`${client.user.username} is ready!`);
  console.log('Bot is running');
});

client.on('message', (msg) => {
  if (msg.channel.id === 1111) {
    const message_text_author = msg.content;
    console.log(message_text_author);
    webhookClient.send({
      content: message_text_author,
      username: 'discord alert bot'
    });
  }
  
});

client.login('User token');
