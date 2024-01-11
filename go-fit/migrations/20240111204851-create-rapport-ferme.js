'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rapport_fermes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_RAPPORT_FERME: {
        type: Sequelize.INTEGER
      },
      ID_ENTRAINEMENT_FERME: {
        type: Sequelize.INTEGER
      },
      NOM_RAPPORT: {
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