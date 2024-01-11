'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Equipements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_EQUIPEMENT: {
        type: Sequelize.INTEGER
      },
      ID_TYPE_EQUIPEMENT: {
        type: Sequelize.INTEGER
      },
      NOM_EQUIPEMENT: {
        type: Sequelize.STRING
      },
      ETAT_EQUIPEMENT: {
        type: Sequelize.STRING
      },
      DATE_DERNIERE_MAINTENANCE: {
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
    await queryInterface.dropTable('Equipements');
  }
};