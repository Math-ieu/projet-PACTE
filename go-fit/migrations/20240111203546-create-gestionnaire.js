'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gestionnaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_GESTIONNAIRE: {
        type: Sequelize.INTEGER
      },
      NOM_GESTIONNAIRE: {
        type: Sequelize.STRING
      },
      PRENOM_GESTIONNAIRE: {
        type: Sequelize.STRING
      },
      SEXE_GESTIONNAIRE: {
        type: Sequelize.STRING
      },
      PHOTO_GESTIONNAIRE: {
        type: Sequelize.STRING
      },
      ADRESSE_GESTIONNAIRE: {
        type: Sequelize.STRING
      },
      ADRESSE_MAIL_GESTIONNAIRE: {
        type: Sequelize.STRING
      },
      MOT_DE_PASSE: {
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
    await queryInterface.dropTable('Gestionnaires');
  }
};