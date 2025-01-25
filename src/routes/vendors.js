import { QueryTypes } from 'sequelize'
import { Router } from 'express'
import sequelize from '../db/connection.js'
const router = Router()

router.get('/', async function (req, res, next) {
  try {
    // const vendos = await sequelize.models.Vendor.findAll({})
    const [data] = await sequelize.query('SELECT * FROM `Vendor`')
    res.json(data)
  } catch (error) {
    console.log(error)
    res.json({
      message: error.message,
    })
  }
})

router.post('/', async function (req, res, next) {
  try {
    const vendors = await sequelize.models.Vendor.bulkCreate(
      [
        {
          id: 1,
          name: 'Karen',
          surname: 'Karapetyan',
          rang: 10,
          collectionId: 1,
        },
        { id: 2, name: 'Aremn', surname: 'Abovyan', rang: 5, collectionId: 2 },
        {
          id: 3,
          name: 'Lilith',
          surname: 'Aharonyan',
          rang: 3,
          collectionId: 3,
        },
        {
          id: 4,
          name: 'Seyran',
          surname: 'Nahapetyan',
          rang: 8,
          collectionId: 4,
        },
        { id: 5, name: 'Ani', surname: 'Madoyan', rang: 6, collectionId: 5 },
        { id: 6, name: 'Qnarik', surname: 'Tunyan', rang: 9, collectionId: 6 },
      ],
      { validate: true }
    )
    res.json({
      total: vendors.length,
      data: vendors,
    })
  } catch (error) {
    console.log(error)
    res.json({
      message: error.message,
    })
  }
})

router.get('/getrang/:id', function (req, res, next) {
  res.send('get Vedor rang')
})

router.get('/:id', function (req, res, next) {
  res.send('get Vedors by Id')
})

router.patch('/:id', async function (req, res, next) {
  const { id } = req.params
  try {
    const result = await sequelize.models.Vendor.update(
      { surname: 'sebastian' },
      {
        where: {
          id: id,
        },
      }
    )
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.delete('/:id', async function (req, res, next) {
  try {
    const result = await sequelize.models.Vendor.destroy(
      { surname: 'sebastian' },
      {
        where: {
          id: id,
        },
      }
    )
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
