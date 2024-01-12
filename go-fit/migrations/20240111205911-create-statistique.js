'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Statistiques', {
      ID_STATISTIQUE: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_RAPPORT: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      NOM_STATISTIQUE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FICHIER_STATISTIQUE: {
        allowNull: true,
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
    await queryInterface.dropTable('Statistiques');
  }
};