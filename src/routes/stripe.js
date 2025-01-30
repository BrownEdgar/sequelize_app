import { Router } from 'express'
import sequelize from '../db/connection.js'
import { getNFT } from '../middleware/getNFT.js'
const router = Router()

/* GET users listing. */
router.post('/create-session', getNFT, async function (req, res, next) {
  const { body } = req

  try {
    const result = req.app.stripe.checkout.session.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.data.map((nft) => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: nft.name,
            },
            unit_amount: (nft.price * 100).toFixed(1),
          },
          quantity: nft.quantity,
        }
      }),
    })
    res.json(result)
  } catch (error) {
    res.json({ error })
  }
})
export default router
