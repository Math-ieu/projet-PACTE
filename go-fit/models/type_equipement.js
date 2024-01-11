'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type_equipement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Type_equipement.init({
    ID_TYPE_EQUIPEMENT: DataTypes.INTEGER,
    NOM_TYPE_EQUIPEMENT: DataTypes.STRING,
    QTE_EQUIPEMENT: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Type_equipement',
  });
  return Type_equipement;
};