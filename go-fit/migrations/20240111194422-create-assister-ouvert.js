'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Assister_ouverts', {
      ID_CLIENT: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Clients",
          key: "ID_CLIENT"
        }
      },
      ID_ENTRAINEMENT_OUVERT: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Entrainement_ouverts",
          key: "ID_ENTRAINEMENT_OUVERT"
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
    await queryInterface.dropTable('Assister_ouverts');
  }
};