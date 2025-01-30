import { Op } from 'sequelize'
import sequelize from '../db/connection.js'

export const getNFT = async (req, res, next) => {
  const { products } = req.body

  const option = products.map((elem) => elem.id)

  const [NFT] = await sequelize.models.NFT.findAll({
    where: {
      id: {
        [Op.in]: option,
      },
    },
  })

  res.json()
}
