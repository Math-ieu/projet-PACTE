'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Abonnement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Abonnement.init({
    ID_ABONNEMENT: DataTypes.INTEGER,
    NOM_ABONNEMENT: DataTypes.STRING,
    TYPE_ABONNEMENT: DataTypes.STRING,
    MONTANT_ABONNEMENT: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Abonnement',
  });
  return Abonnement;
};