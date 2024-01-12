'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Facture.init({
    NOM_FACTURE: DataTypes.STRING,
    MONTANT_FACTURE: DataTypes.FLOAT,
    DATE_LIMITE_FACTURE: DataTypes.DATE,
    ETAT_FACTURE: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Facture',
  });
  return Facture;
};