'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entrainement_ouverts', {
      ID_ENTRAINEMENT_OUVERT: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_GESTIONNAIRE: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ID_SALLE: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ID_ENTRAINEUR: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      DATE_SESSION: {
        allowNull: false,
        type: Sequelize.DATE
      },
      JOUR_DE_LA_SEMAINE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      DEBUT: {
        allowNull: false,
        type: Sequelize.TIME
      },
      FIN: {
        allowNull: false,
        type: Sequelize.TIME
      },
      NOM_SESSION: {
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
    await queryInterface.dropTable('Entrainement_ouverts');
  }
};