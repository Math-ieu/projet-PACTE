'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Paiements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_PAIEMENT: {
        type: Sequelize.INTEGER
      },
      ID_FACTURE: {
        type: Sequelize.INTEGER
      },
      ID_CLIENT: {
        type: Sequelize.INTEGER
      },
      NOM_PAIEMENT: {
        type: Sequelize.STRING
      },
      MONTANT_PAIEMENT: {
        type: Sequelize.FLOAT
      },
      DATE_PAIEMENT: {
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
    await queryInterface.dropTable('Paiements');
  }
};