'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Assister_fermes', {
      ID_CLIENT: {
        allowNull: false,
        type: Sequelize.INTEGER,

      },
      ID_ENTRAINEMENT_FERME: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Entrainement_fermes",
          key: "ID_ENTRAINEMENT_FERME"
        }
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
    await queryInterface.dropTable('Assister_fermes');
  }
};