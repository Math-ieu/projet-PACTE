'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gestionnaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gestionnaire.init({
    ID_GESTIONNAIRE: DataTypes.INTEGER,
    NOM_GESTIONNAIRE: DataTypes.STRING,
    PRENOM_GESTIONNAIRE: DataTypes.STRING,
    SEXE_GESTIONNAIRE: DataTypes.STRING,
    PHOTO_GESTIONNAIRE: DataTypes.STRING,
    ADRESSE_GESTIONNAIRE: DataTypes.STRING,
    ADRESSE_MAIL_GESTIONNAIRE: DataTypes.STRING,
    MOT_DE_PASSE: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gestionnaire',
  });
  return Gestionnaire;
};