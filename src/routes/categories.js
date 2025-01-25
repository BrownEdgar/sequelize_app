import { Router } from 'express'
import sequelize from '../db/connection.js'
const router = Router()

/* GET users listing. */
/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const vendos = await sequelize.models.Categories.findAll()
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
    const categories = await sequelize.models.Categories.bulkCreate(
      [
        { id: 1, title: 'Game' },
        { id: 2, title: 'Character' },
        { id: 3, title: 'Art' },
        { id: 4, title: 'Wall Art' },
        { id: 5, title: 'Painting' },
        { id: 6, title: 'Outhers' },
      ],
      { validate: true }
    )
    res.json(categories)
  } catch (error) {
    console.log(error)
    res.json({
      message: error.message,
    })
  }
})

router.get('/:id', function (req, res, next) {
  res.send('get categories by Id')
})

router.patch('/:id', function (req, res, next) {
  res.send('update categories by Id')
})

// router.delete('/:id', function (req, res, next) {
//   res.send('delete categories by Id')
// })

export default router
