'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entraineurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_ENTRAINEUR: {
        type: Sequelize.INTEGER
      },
      NOM_ENTRAINEUR: {
        type: Sequelize.STRING
      },
      PRENOM_ENTRAINEUR: {
        type: Sequelize.STRING
      },
      SEXE_ENTRAINEUR: {
        type: Sequelize.STRING
      },
      PHOTO_ENTRAINEUR: {
        type: Sequelize.STRING
      },
      ADRESSE_ENTRAINEUR: {
        type: Sequelize.STRING
      },
      ADRESSE_MAIL_ENTRAINEUR: {
        type: Sequelize.STRING
      },
      MOT_DE_PASSE: {
        type: Sequelize.STRING
      },
      ETAT: {
        type: Sequelize.STRING
      },
      PHRASE_ACCROCHE_ENTRAINEUR: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Entraineurs');
  }
};