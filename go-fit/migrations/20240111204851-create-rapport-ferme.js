'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rapport_fermes', {
      ID_RAPPORT_FERME: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_ENTRAINEMENT_FERME: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      NOM_RAPPORT: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FICHIER_RAPPORT: {
        type: Sequelize.STRING
      },
      DATE_RAPPORT: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Rapport_fermes');
  }
};