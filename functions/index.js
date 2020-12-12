var functions = require('firebase-functions')
var express = require('express')
var router = express.Router()
var stripe = require('stripe')('sk_test_51HvSJ6DdAkwevPceNf4kpb4Si7SCz3OWCrOh1nnodFjTjmiXCH3NuUj15kkWjGvl9k3weNMZXxihLPVDEU2q1pVE00L7WltovX')
var cors = require('cors')
var app = express()
app.use(cors())
app.use(express.json())

// - API routes
router.get('/', (request, response) => response.status(200).send('hello world'))
// console.log('after')
router.post('/checkout', async (request, response) => {
  const total = request.query.total
  const token = request.query.token
  console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)

  stripe.customers.create({
    email: token.email,
    source: token.id
  }).then((customer) => {
    stripe.charges.create({
      amount: total, // subunits of the currency
      currency: 'usd',
      customer: customer.id,
      receipt_email: token.email
    })
  }).then( result => response.status(200).send(result))
  .catch(error => console.error(error))
})
