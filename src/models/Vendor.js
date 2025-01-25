import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Vendor', {
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
    // new
    // password: {
    // type: DataTypes.STRING,
    // set(value) {
    //   // Storing passwords in plaintext in the database is terrible.
    //   // Hashing the value with an appropriate cryptographic hash function is better.
    //   this.setDataValue('password', hash(value));
    // },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.name} ${this.surname}`
      },
      set(value) {
        throw new Error('Do not try to set the `fullName` value!')
      },
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min: 1,
      max: 10,
      isInt: {
        msg: 'Must be an integer number of rang',
      },
    },
  })
}
