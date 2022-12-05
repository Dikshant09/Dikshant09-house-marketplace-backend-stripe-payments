# Accepting a payment

An [Express server](http://expressjs.com) implementation

You can [🎥 watch a video](https://youtu.be/WG4ehXSEpz4) to see how this server was implemented and [read the transcripts](./TRANSCRIPTS.md).

## Requirements

- Node v10+
- Configured .env file

## How to run

1. Confirm `.env` configuration

Ensure the API keys are configured in `.env` in this directory. It should include the following keys:

```yaml
# Stripe API keys - see https://stripe.com/docs/development/quickstart#api-keys
STRIPE_PRIVATE_KEY = sk_test...

# Path to front-end implementation. 
CLIENT_URL = "https://frontend_app_url.com"
```

2. Install dependencies and start the server

```
npm install
npm start
```

