const api = require('@libs/utils/api')

/**
 * @type { import('@libs/builders/command').ICommand }
 */
module.exports = {
  aliases: ['gpt2', 'chatgpt'],
  category: 'Chat',
  description: 'ChatGPT',
  waitMessage: true,
  minArgs: 1,
  expectedArgs: '<link>',
  example: '{prefix}{command} buatkan kode program javascript',
  callback: async ({ msg, fullArgs }) => {
    try {
      let { data } = await api('lolhuman').get('/api/openai', { params: { text: fullArgs } });
      await msg.reply(`*[Chat GPT]* \n Hasil : \n ${data.result}`);
    } catch (error) {
      console.error('Terjadi kesalahan dalam permintaan:', error);
      await msg.reply('Terjadi kesalahan dalam permintaan. Mohon cek URL atau coba lagi nanti.');
    }
  },
}
