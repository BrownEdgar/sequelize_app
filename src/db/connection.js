import { Sequelize } from 'sequelize'
import VendorModel from '../models/Vendor.js'

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  define: {
    timestamps: false,
    freezeTableName: true,
  },
})

async function deConnection() {
  try {
    await sequelize.authenticate()
    await sequelize.sync({})
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
deConnection()
const Voendor = VendorModel(sequelize)
export default {
  sequelize,
  Voendor,
}
