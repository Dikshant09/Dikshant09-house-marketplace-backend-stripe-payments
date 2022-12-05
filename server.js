const dotenv = require("dotenv").config()

const express = require("express")

const app = express()
const cors = require("cors")
app.use(express.json())
app.use(
  cors({
    // origin: "http://localhost:5500",
    // origin: "http://localhost:3000",
    // origin: "https://house-marketplace-bay.vercel.app/",
    origin: process.env.FRONT_END_URL
  })
)

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

app.post("/create-checkout-session", async (req, res) => {
  console.log(req.body);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
              description: item.building,
            },
            unit_amount: item.amount,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.CLIENT_PAYMENT_URL}${req.body.items[0].id}/successful`,
      cancel_url: `${process.env.CLIENT_PAYMENT_URL}${req.body.items[0].id}/failed`,
    });
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.get('/', (req, res) => {
  res.send('Welcome to Stripe Demo');
});

app.listen(3500, () => {
  console.log('listening on port 3500');
})