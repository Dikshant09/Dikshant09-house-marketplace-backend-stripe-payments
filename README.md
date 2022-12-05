# House Marketplace Backend : Stripe API
- It’s a real estate E-commerce website to buy and sell houses. 
- Here one can add, edit, delete and post a listing in real-time. 
- React is used as Frontend and Firebase as Backend. 
- Using Google Geocoding API to get Coordinates for map plotting
- Stripe API is used to handle payments. 

**Live Link: <a href="https://house-marketplace-bay.vercel.app/">House Marketplace</a>**

<b>Frontend : </b>
- [Frontend Repo](https://github.com/Dikshant09/house-marketplace) 

## Requirements

- Node v10+
- Configured .env file
- Stripe Account

## How to run

1. Confirm `.env` configuration

Ensure the API keys are configured in `.env` in this directory. It should include the following keys:

```yaml
# Stripe API keys - see https://stripe.com/docs/development/quickstart#api-keys
STRIPE_PRIVATE_KEY = sk_test...

# Path to front-end implementation. 
FRONT_END_URL = "https://frontend_app_url.com"

# Payment Path
CLIENT_PAYMENT_URL = "https://frontend_app_url.com/payment"
```
2. Install dependencies and start the server

```
npm install
npm start
```

