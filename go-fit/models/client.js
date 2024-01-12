const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    NOM_CLIENT: DataTypes.STRING,
    PRENOM: DataTypes.STRING,
    MOT_DE_PASSE: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('MOT_DE_PASSE');
        return rawValue;
      },
      set(value) {
        this.setDataValue('MOT_DE_PASSE', bcrypt.hash(value, 10));
      }
    },
    ID_ABONNEMENT: DataTypes.INTEGER,
    ID_ENTRAINEUR: DataTypes.INTEGER,
    PHOTO_CLIENT: DataTypes.STRING,
    TELEPHONE_CLIENT: DataTypes.STRING,
    DATE_NAISSANCE: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    },
    SEXE: DataTypes.STRING,
    POIDS: DataTypes.FLOAT,
    TAILLE: DataTypes.FLOAT,
    DATE_INSCRIPTION: DataTypes.DATE,
    ETAT: DataTypes.STRING,
    MOTIVATION: DataTypes.STRING,
    OBJECTIF: DataTypes.STRING,
    TYPE_ENTRAINEMENT: DataTypes.STRING,
    ADRESSE_MAIL_CLIENT: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    ADRESSE_CLIENT: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};