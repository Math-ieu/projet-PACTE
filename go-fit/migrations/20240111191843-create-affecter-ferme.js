'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Affecter_fermes', {
      ID_TYPE_EQUIPEMENT: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ID_ENTRAINEMENT_FERME: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      QTE_AFFECTER: {
        type: Sequelize.INTEGER
      },
      DUREE_AFFECTER: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('Affecter_fermes');
  }
};