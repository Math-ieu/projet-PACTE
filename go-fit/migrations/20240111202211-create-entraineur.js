'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entraineurs', {
      ID_ENTRAINEUR: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NOM_ENTRAINEUR: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PRENOM_ENTRAINEUR: {
        allowNull: false,
        type: Sequelize.STRING
      },
      SEXE_ENTRAINEUR: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PHOTO_ENTRAINEUR: {
        allowNull: true,
        type: Sequelize.STRING
      },
      ADRESSE_ENTRAINEUR: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ADRESSE_MAIL_ENTRAINEUR: {
        allowNull: false,
        type: Sequelize.STRING
      },
      MOT_DE_PASSE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ETAT: {
        allowNull: true,
        type: Sequelize.STRING
      },
      PHRASE_ACCROCHE_ENTRAINEUR: {
        allowNull: false,
        type: Sequelize.STRING()
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