/* eslint-disable */
import { ChatGPTAPI } from 'chatgpt';

export class Chat {
  private chatAPI: ChatGPTAPI;

  constructor(apikey: string) {
    this.chatAPI = new ChatGPTAPI({
      apiKey: apikey,
      completionParams: {
        model: process.env.MODEL || 'gpt-3.5-turbo',
        temperature: +(process.env.temperature || 0) || 1,
        top_p: +(process.env.top_p || 0) || 1,
      },
    });
  }

  private generatePrompt = (patch: string) => {
    const answerLanguage = process.env.LANGUAGE
      ? `Answer me in ${process.env.LANGUAGE},`
      : '';

    return `
      Bellow is the code patch (after the word "patch:"), provide a code review, ${answerLanguage}.
      Focus mostly on things that need to be fixed and not on things that are good.
      List should be brief and to the point.
      
      patch:
    ${patch}
    `;
  };

  public codeReview = async (patch: string) => {
    if (!patch) {
      return '';
    }

    console.time('code-review cost');
    const prompt = this.generatePrompt(patch);

    const res = await this.chatAPI.sendMessage(prompt);

    console.timeEnd('code-review cost');

    console.log(res.text);

    return res.text;
  };
}
