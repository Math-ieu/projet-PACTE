'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Statistiques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_STATISTIQUE: {
        type: Sequelize.INTEGER
      },
      ID_RAPPORT: {
        type: Sequelize.INTEGER
      },
      NOM_STATISTIQUE: {
        type: Sequelize.STRING
      },
      FICHIER_STATISTIQUE: {
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