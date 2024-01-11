'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assister_ferme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Assister_ferme.init({
    ID_CLIENT: DataTypes.INTEGER,
    ID_ENTRAINEMENT_FERME: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Assister_ferme',
  });
  return Assister_ferme;
};