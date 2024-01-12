const bcrypt = require('bcrypt');
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
    NOM_GESTIONNAIRE: DataTypes.STRING,
    PRENOM_GESTIONNAIRE: DataTypes.STRING,
    SEXE_GESTIONNAIRE: DataTypes.STRING,
    PHOTO_GESTIONNAIRE: DataTypes.STRING,
    ADRESSE_GESTIONNAIRE: DataTypes.STRING,
    ADRESSE_MAIL_GESTIONNAIRE: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
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
  }, {
    sequelize,
    modelName: 'Gestionnaire',
  });
  return Gestionnaire;
};

