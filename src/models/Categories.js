import { DataTypes } from 'sequelize'
export default (sequelize) => {
  return sequelize.define(
    'Categories',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
    }
  )
}
