'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrainement_ouvert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Entrainement_ouvert.init({
    ID_GESTIONNAIRE: DataTypes.INTEGER,
    ID_SALLE: DataTypes.INTEGER,
    ID_ENTRAINEUR: DataTypes.INTEGER,
    DATE_SESSION: DataTypes.DATE,
    JOUR_DE_LA_SEMAINE: DataTypes.STRING,
    DEBUT: DataTypes.TIME,
    FIN: DataTypes.TIME,
    NOM_SESSION: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entrainement_ouvert',
  });
  return Entrainement_ouvert;
};