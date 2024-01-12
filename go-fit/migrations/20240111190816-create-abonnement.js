'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Abonnements', {
      ID_ABONNEMENT: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NOM_ABONNEMENT: {
        allowNull: false,
        type: Sequelize.STRING
      },
      TYPE_ABONNEMENT: {
        type: Sequelize.STRING
      },
      MONTANT_ABONNEMENT: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Abonnements');
  }
};