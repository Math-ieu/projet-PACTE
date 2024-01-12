'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Factures', {
      ID_FACTURE: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NOM_FACTURE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      MONTANT_FACTURE: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      DATE_LIMITE_FACTURE: {
        allowNull: true,
        type: Sequelize.DATE
      },
      ETAT_FACTURE: {
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
    await queryInterface.dropTable('Factures');
  }
};