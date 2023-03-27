import './fetch-polyfill.js';
import dotenv from 'dotenv';
import { run } from 'probot';
import { robot } from './bot.js';

dotenv.config();

run(robot);
