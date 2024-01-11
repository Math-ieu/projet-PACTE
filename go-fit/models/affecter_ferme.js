'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Affecter_ferme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Affecter_ferme.init({
    ID_TYPE_EQUIPEMENT: DataTypes.INTEGER,
    ID_ENTRAINEMENT_FERME: DataTypes.INTEGER,
    QTE_AFFECTER: DataTypes.INTEGER,
    DUREE_AFFECTER: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Affecter_ferme',
  });
  return Affecter_ferme;
};