import { Router } from 'express'
import sequelize from '../db/connection.js'
const router = Router()

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const vendos = await sequelize.models.Collections.findAll()
    res.json(vendos)
  } catch (error) {
    console.log(error)
    res.json({
      message: error.message,
    })
  }
})

router.post('/', async function (req, res, next) {
  try {
    const collections = await sequelize.models.Collections.bulkCreate(
      [
        { id: 1, title: 'RedLine' },
        { id: 2, title: 'Comedy' },
        { id: 3, title: 'Broken' },
        { id: 4, title: 'BodyArt' },
        { id: 5, title: 'main' },
        { id: 6, title: 'Outhers' },
      ],
      { validate: true }
    )
    res.json({
      total: collections.length,
      data: collections,
    })
  } catch (error) {
    console.log(error)
    res.json({
      message: error.message,
    })
  }
})

router.get('/:id', function (req, res, next) {
  res.send('get Collections by Id')
})

router.delete('/:id', function (req, res, next) {
  res.send('delete Collections by Id')
})

export default router
