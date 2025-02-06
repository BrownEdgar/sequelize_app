import { Router } from 'express'
import sequelize from '../db/connection.js'
const router = Router()

router.delete('/:id', async function (req, res) {
  const { id } = req.params
  console.log(id)

  try {
    await sequelize.query(`SET FOREIGN_KEY_CHECKS = 0;`)
    await sequelize.models.NFT.destroy({
      where: {
        id,
      },
    })
    res.json({ message: `Nft with ${id} id deleted` })
  } catch (error) {
    console.log(error)

    res.status(500).json({ message: error.errors })
  }
})

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

router.post('/', async function (req, res, next) {
  try {
    const nfts = await sequelize.models.NFT.bulkCreate(
      [
        {
          id: 1,
          vendorId: 1,
          collectionsId: 1,
          categoriesId: 1,
          name: 'Mankey_1',
          price: 789,
        },
        {
          id: 2,
          vendorId: 2,
          collectionsId: 2,
          categoriesId: 2,
          name: 'Mankey_2',
          price: 568,
        },
        {
          id: 3,
          vendorId: 3,
          collectionsId: 3,
          categoriesId: 3,
          name: 'Mankey_3',
          price: 7163,
        },
      ],
      {
        validate: true,
      }
    )
    res.json(nfts)
  } catch (error) {
    console.log(error)

    res.status(500).json({ message: error.errors })
  }
})

router.patch('/:id', function (req, res, next) {
  res.send('update nft by Id')
})

router.put('/:id', function (req, res, next) {
  res.send('replace nft by Id')
})

export default router
