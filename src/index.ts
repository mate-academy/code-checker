import dotenv from 'dotenv';
import { run } from 'probot';
import { robot } from './bot';

dotenv.config();

run(robot);
