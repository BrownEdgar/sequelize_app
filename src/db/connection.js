import { Sequelize } from 'sequelize'
import VendorModel from '../models/Vendor.js'
import NFTModel from '../models/Nft.js'
import CollectionsModel from '../models/Collections.js'
import CategoriesModel from '../models/Categories.js'

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  }
)

async function deConnection() {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ alter: true })
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
deConnection()
const Vendor = VendorModel(sequelize)
const NFT = NFTModel(sequelize)
const Collections = CollectionsModel(sequelize)
const Categories = CategoriesModel(sequelize)
// avelacnel NFT modeli mej category_id
NFT.belongsTo(Categories, { foreignKey: 'categoryId' })
NFT.belongsTo(Collections, { foreignKey: 'coleidlectionId' })
NFT.belongsTo(Vendor, { foreignKey: 'vnedorId' })

export default {
  sequelize,
  Vendor,
  NFT,
  Collections,
  Categories,
}
