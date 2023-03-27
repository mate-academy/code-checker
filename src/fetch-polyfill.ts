// fetch-polyfill.js
/* eslint-disable @typescript-eslint/ban-ts-comment */
import fetch, {
  Headers,
  Request,
  Response,
} from 'node-fetch';

if (!global.fetch) {
  /* @ts-ignore */
  global.fetch = fetch;
  /* @ts-ignore */
  global.Headers = Headers;
  /* @ts-ignore */
  global.Request = Request;
  /* @ts-ignore */
  global.Response = Response;
}
