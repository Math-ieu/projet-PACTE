'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistique_ouvert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Statistique_ouvert.init({
    ID_RAPPORT_OUVERT: DataTypes.INTEGER,
    NOM_STATISTIQUE: DataTypes.STRING,
    FICHIER_STATISTIQUE: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Statistique_ouvert',
  });
  return Statistique_ouvert;
};