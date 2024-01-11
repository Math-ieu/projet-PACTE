'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paiement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Paiement.init({
    ID_PAIEMENT: DataTypes.INTEGER,
    ID_FACTURE: DataTypes.INTEGER,
    ID_CLIENT: DataTypes.INTEGER,
    NOM_PAIEMENT: DataTypes.STRING,
    MONTANT_PAIEMENT: DataTypes.FLOAT,
    DATE_PAIEMENT: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Paiement',
  });
  return Paiement;
};