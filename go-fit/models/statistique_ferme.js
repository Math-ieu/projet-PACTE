'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistique_ferme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Statistique_ferme.init({
    ID_RAPPORT_FERME: DataTypes.INTEGER,
    NOM_STATISTIQUE: DataTypes.STRING,
    FICHIER_STATISTIQUE: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Statistique_ferme',
  });
  return Statistique_ferme;
};