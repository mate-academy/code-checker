import './fetch-polyfill.js';
import * as process from 'process';
import dotenv from 'dotenv';
import { Chat } from './chat.js';
dotenv.config();
const chat = new Chat(process.env.OPENAI_API_KEY);
await chat.codeReview('console.log(hello world);');
//# sourceMappingURL=index.js.map