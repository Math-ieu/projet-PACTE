'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entrainement_fermes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_ENTRAINEMENT_FERME: {
        type: Sequelize.INTEGER
      },
      ID_GESTIONNAIRE: {
        type: Sequelize.INTEGER
      },
      ID_SALLE: {
        type: Sequelize.INTEGER
      },
      ID_ENTRAINEUR: {
        type: Sequelize.INTEGER
      },
      DATE_SESSION: {
        type: Sequelize.DATE
      },
      JOUR_DE_LA_SEMAINE: {
        type: Sequelize.STRING
      },
      DEBUT: {
        type: Sequelize.TIME
      },
      FIN: {
        type: Sequelize.TIME
      },
      NOM_SESSION: {
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
    await queryInterface.dropTable('Entrainement_fermes');
  }
};