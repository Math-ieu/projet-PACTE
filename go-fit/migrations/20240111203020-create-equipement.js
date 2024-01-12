'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Equipements', {
      ID_EQUIPEMENT: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_TYPE_EQUIPEMENT: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Type_equipements",
          key: "ID_TYPE_EQUIPEMENT"
        }
      },
      NOM_EQUIPEMENT: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ETAT_EQUIPEMENT: {
        allowNull: false,
        type: Sequelize.STRING
      },
      DATE_DERNIERE_MAINTENANCE: {
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
    await queryInterface.dropTable('Equipements');
  }
};