'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistique extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Statistique.init({
    ID_STATISTIQUE: DataTypes.INTEGER,
    ID_RAPPORT: DataTypes.INTEGER,
    NOM_STATISTIQUE: DataTypes.STRING,
    FICHIER_STATISTIQUE: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Statistique',
  });
  return Statistique;
};