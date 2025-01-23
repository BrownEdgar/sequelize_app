import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define(
    'Vendor',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  )
}
