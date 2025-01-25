import { Router } from 'express'
import sequelize from '../db/connection.js'
const router = Router()

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const vendos = await sequelize.models.NFT.findAll()
    res.json(vendos)
  } catch (error) {
    console.log(error)
    res.json({
      message: error.message,
    })
  }
})
router.get('/:id', function (req, res, next) {
  res.send('get nft by Id')
})
router.post('/', function (req, res, next) {
  res.send('add  nfts')
})

router.patch('/:id', function (req, res, next) {
  res.send('update nft by Id')
})

router.put('/:id', function (req, res, next) {
  res.send('replace nft by Id')
})

router.delete('/:id', function (req, res, next) {
  res.send('delete nft by Id')
})

export default router
