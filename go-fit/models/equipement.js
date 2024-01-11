'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Equipement.init({
    ID_EQUIPEMENT: DataTypes.INTEGER,
    ID_TYPE_EQUIPEMENT: DataTypes.INTEGER,
    NOM_EQUIPEMENT: DataTypes.STRING,
    ETAT_EQUIPEMENT: DataTypes.STRING,
    DATE_DERNIERE_MAINTENANCE: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Equipement',
  });
  return Equipement;
};