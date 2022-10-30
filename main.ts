import { createBot, Intents, startBot } from "https://deno.land/x/discordeno@17.0.1/mod.ts";

const bot = createBot({
  token: Deno.env.get("BOT_TOKEN") as string,
  intents: Intents.Guilds | Intents.GuildMessages,
  events: {
    ready() {
      console.log("Successfully connected to gateway");
    },
  },
});

await startBot(bot);