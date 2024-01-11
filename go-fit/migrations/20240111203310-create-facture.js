'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Factures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_FACTURE: {
        type: Sequelize.INTEGER
      },
      NOM_FACTURE: {
        type: Sequelize.STRING
      },
      MONTANT_FACTURE: {
        type: Sequelize.FLOAT
      },
      DATE_LIMITE_FACTURE: {
        type: Sequelize.DATE
      },
      ETAT_FACTURE: {
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
    await queryInterface.dropTable('Factures');
  }
};