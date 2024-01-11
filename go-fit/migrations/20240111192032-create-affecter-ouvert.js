'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Affecter_ouverts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_TYPE_EQUIPEMENT: {
        type: Sequelize.INTEGER
      },
      ID_ENTRAINEMENT_OUVERT: {
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
    await queryInterface.dropTable('Affecter_ouverts');
  }
};