'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Paiements', {
      ID_PAIEMENT: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_FACTURE: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ID_CLIENT: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      NOM_PAIEMENT: {
        allowNull: false,
        type: Sequelize.STRING
      },
      MONTANT_PAIEMENT: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      DATE_PAIEMENT: {
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
    await queryInterface.dropTable('Paiements');
  }
};