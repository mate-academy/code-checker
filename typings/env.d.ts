export {};

declare global {

  namespace NodeJS {
    interface ProcessEnv {

      // open ai apikey
      OPENAI_API_KEY: string;

      LOG_LEVEL: string;

      // BOT settings
      LANGUAGE: string;
      MODEL: string;
      temperature: string;
      top_p: string;
    }
  }
}
