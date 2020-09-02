# Light Changer

This is a collection of Twilio Serverless Functions that are used to work with the LiFX ligtbulb.

Feel free to steal this code and make it work for your environment and lights!

## Setup

You'll need a configured LiFX Light.

Answer the configuration prompts

```bash
npx configure-env
```

## Deploy

```bash
twilio serverless:deploy
```

## Dogstar

Use this URL in your GitHub Webhooks. It'll make your light bulb flash when it gets a star!

(This function is lovingly dedicated to [Keanu Reeve's band, Dogstar](https://open.spotify.com/artist/7FZJcjwYGAvvEBQlchgohi?si=0w9WuVR4RdW5Fdx6QQe9eg))

## Incoming Message Handler

Wire your incoming message field of your number to `/incoming-message-handler`