import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define(
    'NFT',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // vendor_id: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'Vendor',
      //     key: 'id',
      //   },
      // },

      // category_id: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'Categories',
      //     key: 'id',
      //   },
      // },
      // coleidlection_id: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'Collections',
      //     key: 'id',
      //   },
      // },
    },
    {
      sequelize,
    }
  )
}
