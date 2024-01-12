'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Statistique_ouverts', {
      ID_STATISTIQUE_OUVERT: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_RAPPORT_OUVERT: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Rapport_ouverts",
          key: "ID_RAPPORT_OUVERT"
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
    await queryInterface.dropTable('Statistique_ouverts');
  }
};