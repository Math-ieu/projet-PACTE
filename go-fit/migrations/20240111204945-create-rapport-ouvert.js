'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rapport_ouverts', {
      ID_RAPPORT_OUVERT: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_ENTRAINEMENT_OUVERT: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      NOM_RAPPORT: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FICHIER_RAPPORT: {
        allowNull: false,
        type: Sequelize.STRING
      },
      DATE_RAPPORT: {
        allowNull: false,
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
    await queryInterface.dropTable('Rapport_ouverts');
  }
};