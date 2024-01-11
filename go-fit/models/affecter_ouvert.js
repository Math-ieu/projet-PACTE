'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Affecter_ouvert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Affecter_ouvert.init({
    ID_TYPE_EQUIPEMENT: DataTypes.INTEGER,
    ID_ENTRAINEMENT_OUVERT: DataTypes.INTEGER,
    QTE_AFFECTER: DataTypes.INTEGER,
    DUREE_AFFECTER: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Affecter_ouvert',
  });
  return Affecter_ouvert;
};