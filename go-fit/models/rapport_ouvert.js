'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rapport_ouvert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rapport_ouvert.init({
    ID_ENTRAINEMENT_OUVERT: DataTypes.INTEGER,
    NOM_RAPPORT: DataTypes.STRING,
    FICHIER_RAPPORT: DataTypes.STRING,
    DATE_RAPPORT: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Rapport_ouvert',
  });
  return Rapport_ouvert;
};