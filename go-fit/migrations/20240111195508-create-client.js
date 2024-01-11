'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NOM_CLIENT: {
        type: Sequelize.STRING
      },
      PRENOM: {
        type: Sequelize.STRING
      },
      MOT_DE_PASSE: {
        type: Sequelize.STRING
      },
      ID_CLIENT: {
        type: Sequelize.INTEGER
      },
      ID_ABONNEMENT: {
        type: Sequelize.INTEGER
      },
      ID_ENTRAINEUR: {
        type: Sequelize.INTEGER
      },
      PHOTO_CLIENT: {
        type: Sequelize.STRING
      },
      TELEPHONE_CLIENT: {
        type: Sequelize.STRING
      },
      DATE_NAISSANCE: {
        type: Sequelize.DATE
      },
      SEXE: {
        type: Sequelize.STRING
      },
      POIDS: {
        type: Sequelize.FLOAT
      },
      TAILLE: {
        type: Sequelize.FLOAT
      },
      DATE_INSCRIPTION: {
        type: Sequelize.DATE
      },
      ETAT: {
        type: Sequelize.STRING
      },
      MOTIVATION: {
        type: Sequelize.STRING
      },
      OBJECTIF: {
        type: Sequelize.STRING
      },
      TYPE_ENTRAINEMENT: {
        type: Sequelize.STRING
      },
      ADRESSE_MAIL_CLIENT: {
        type: Sequelize.STRING
      },
      ADRESSE_CLIENT: {
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
    await queryInterface.dropTable('Clients');
  }
};