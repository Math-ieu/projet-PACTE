'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      ID_CLIENT: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NOM_CLIENT: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PRENOM: {
        allowNull: false,
        type: Sequelize.STRING
      },
      MOT_DE_PASSE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ID_ABONNEMENT: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Abonnements",
          key: "ID_ABONNEMENT"
        }
      },
      ID_ENTRAINEUR: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Entraineurs",
          key: "ID_ENTRAINEUR"
        }
      },
      PHOTO_CLIENT: {
        allowNull: true,
        type: Sequelize.STRING
      },
      TELEPHONE_CLIENT: {
        allowNull: false,
        type: Sequelize.STRING
      },
      DATE_NAISSANCE: {
        allowNull: false,
        type: Sequelize.DATE
      },
      SEXE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      POIDS: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      TAILLE: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      DATE_INSCRIPTION: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ETAT: {
        allowNull: true,
        type: Sequelize.STRING
      },
      MOTIVATION: {
        allowNull: false,
        type: Sequelize.STRING
      },
      OBJECTIF: {
        allowNull: false,
        type: Sequelize.STRING
      },
      TYPE_ENTRAINEMENT: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ADRESSE_MAIL_CLIENT: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ADRESSE_CLIENT: {
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
    await queryInterface.dropTable('Clients');
  }
};