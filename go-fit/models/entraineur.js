'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entraineur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Entraineur.init({
    NOM_ENTRAINEUR: DataTypes.STRING,
    PRENOM_ENTRAINEUR: DataTypes.STRING,
    SEXE_ENTRAINEUR: DataTypes.STRING,
    PHOTO_ENTRAINEUR: DataTypes.STRING,
    ADRESSE_ENTRAINEUR: DataTypes.STRING,
    ADRESSE_MAIL_ENTRAINEUR: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    MOT_DE_PASSE: {
      type: DataTypes.STRING,
    },
    ETAT: DataTypes.STRING,
    PHRASE_ACCROCHE_ENTRAINEUR: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entraineur',
    timestamps: true,
    underscored: true
  });
  return Entraineur;
};