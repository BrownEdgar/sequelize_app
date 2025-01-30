import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define(
    'Collections',
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
      },
    },
    {
      sequelize,
      indexes: [{ unique: true, fields: ['title'] }],
    }
  )
}
