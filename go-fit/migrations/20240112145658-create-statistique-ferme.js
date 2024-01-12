'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Statistique_fermes', {
      ID_STATISTIQUE_FERME: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_RAPPORT_FERME: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Rapport_fermes",
          key: "ID_RAPPORT_FERME"
        }
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
    await queryInterface.dropTable('Statistique_fermes');
  }
};