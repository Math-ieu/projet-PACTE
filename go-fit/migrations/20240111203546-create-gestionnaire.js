'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gestionnaires', {
      ID_GESTIONNAIRE: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NOM_GESTIONNAIRE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PRENOM_GESTIONNAIRE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      SEXE_GESTIONNAIRE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PHOTO_GESTIONNAIRE: {
        allowNull: true,
        type: Sequelize.STRING
      },
      ADRESSE_GESTIONNAIRE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ADRESSE_MAIL_GESTIONNAIRE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      MOT_DE_PASSE: {
        allowNull: false,
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