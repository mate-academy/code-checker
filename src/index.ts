/* eslint-disable */
import './fetch-polyfill';
import * as process from 'process';
import dotenv from 'dotenv';
// import { run } from 'probot';
import { Chat } from '@/chat';
// import { robot } from './bot';

dotenv.config();

// run(robot);

(async () => {
  const chat = new Chat(process.env.OPENAI_API_KEY);

  await chat.codeReview('console.log(hello world);');
})();
