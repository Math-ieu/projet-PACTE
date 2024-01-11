/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     15/12/2023 17:19:57                          */
/*==============================================================*/



/*==============================================================*/
/* Table: ABONNEMENT                                            */
/*==============================================================*/
CREATE TABLE ABONNEMENT (
   ID_ABONNEMENT SERIAL NOT NULL,
   NOM_ABONNEMENT CHAR(50) NOT NULL,
   TYPE_ABONNEMENT CHAR(50) NOT NULL,
   MONTANT_ABONNEMENT DECIMAL NOT NULL,
   CONSTRAINT PK_ABONNEMENT PRIMARY KEY (ID_ABONNEMENT)
);

/*==============================================================*/
/* Table: AFFECTER                                              */
/*==============================================================*/
CREATE TABLE AFFECTER (
   ID_EQUIPEMENT INT,
   ID_SESSION_ENTRAINEMENT INT,
   QTE_AFFECTER INT,
   DUREE_AFFECTER TIME
);

/*==============================================================*/
/* Table: ASSISTER                                              */
/*==============================================================*/
CREATE TABLE ASSISTER_OUVERT (
   ID_CLIENT INT,
   ID_ENTRAINEMENT_OUVERT INT
);

CREATE TABLE ASSISTER_FERME (
   ID_CLIENT INT,
   ID_ENTRAINEMENT_FERME INT
);

/*==============================================================*/
/* Table: CLIENT                                                */
/*==============================================================*/
CREATE TABLE CLIENT (
   NOM_CLIENT CHAR(30) NOT NULL,
   PRENOM CHAR(50) NOT NULL,
   MOT_DE_PASSE CHAR(30) NULL,
   ID_CLIENT SERIAL NOT NULL,
   ID_ABONNEMENT INT4 NULL,
   ID_ENTRAINEUR INT4 NULL,
   PHOTO_CLIENT BYTEA NULL,
   TELEPHONE_CLIENT CHAR(15) NULL,
   DATE_NAISSANCE DATE NULL,
   SEXE CHAR(1) NOT NULL,
   POIDS DECIMAL NOT NULL,
   TAILLE DECIMAL NOT NULL,
   DATE_INSCRIPTION DATE NOT NULL,
   ETAT CHAR(1) NOT NULL,
   MOTIVATION TEXT NULL,
   OBJECTIF CHAR(50) NOT NULL,
   TYPE_ENTRAINEMENT CHAR(1)NOT NULL,
   ADRESSE_MAIL_CLIENT CHAR(50) NOT NULL,
   ADRESSE_CLIENT CHAR(50)NOT NULL,
   CONSTRAINT PK_CLIENT PRIMARY KEY (ID_CLIENT)
);

/*==============================================================*/
/* Table: ENTRAINEMENT                                          */
/*==============================================================*/
CREATE TABLE ENTRAINEMENT_OUVERT (
   ID_ENTRAINEMENT_OUVERT SERIAL NOT NULL,
   ID_GESTIONNAIRE INT4 NOT NULL,
   ID_SALLE INT4 NOT NULL,
   ID_ENTRAINEUR INT4 NOT NULL,
   DATE_SESSION DATE NOT NULL,
   JOUR_DE_LA_SEMAINE CHAR(10) NOT NULL,
   DEBUT TIME NULL,
   FIN TIME NULL,
   NOM_SESSION CHAR(20) NULL,
   CONSTRAINT PKO_ENTRAINEMENT PRIMARY KEY (ID_ENTRAINEMENT_OUVERT)
);

CREATE TABLE ENTRAINEMENT_FERME (
   ID_ENTRAINEMENT_FERME SERIAL NOT NULL,
   ID_GESTIONNAIRE INT4 NOT NULL,
   ID_SALLE INT4 NOT NULL,
   ID_ENTRAINEUR INT4 NOT NULL,
   DATE_SESSION DATE NOT NULL,
   JOUR_DE_LA_SEMAINE CHAR(10) NOT NULL,
   DEBUT TIME NULL,
   FIN TIME NULL,
   EFFECTIF_MAX INT4 NOT NULL,
   NOM_SESSION CHAR(20) NULL,
   CONSTRAINT PKF_ENTRAINEMENT PRIMARY KEY (ID_ENTRAINEMENT_FERME)
);

/*==============================================================*/
/* Table: ENTRAINEUR                                            */
/*==============================================================*/
CREATE TABLE ENTRAINEUR (
   ID_ENTRAINEUR SERIAL NOT NULL,
   NOM_ENTRAINEUR CHAR(50) NULL,
   PRENOM_ENTRAINEUR CHAR(50) NULL,
   SEXE_ENTRAINEUR CHAR(1) NULL,
   PHOTO_ENTRAINEUR BYTEA NULL,
   ADRESSE_ENTRAINEUR CHAR(50) NULL,
   ADRESSE_MAIL_ENTRAINEUR CHAR(50) NOT NULL,
   MOT_DE_PASSE CHAR(30),
   ETAT CHAR(1),
   PHRASE_ACCROCHE_ENTRAINEUR CHAR(255) NULL,
   CONSTRAINT PK_ENTRAINEUR PRIMARY KEY (ID_ENTRAINEUR)
);

/*==============================================================*/
/* Table: EQUIPEMENT                                            */
/*==============================================================*/
CREATE TABLE TYPE_EQUIPEMENT (
   ID_TYPE_EQUIPEMENT SERIAL NOT NULL,
   NOM_TYPE_EQUIPEMENT CHAR(50) NOT NULL,
   QTE_EQUIPEMENT INT4 NOT NULL,
   CONSTRAINT PK_TYPE_EQUIPEMENT PRIMARY KEY (ID_TYPE_EQUIPEMENT)
);

CREATE TABLE EQUIPEMENT (
   ID_EQUIPEMENT SERIAL NOT NULL,
   ID_TYPE_EQUIPEMENT INT4 NOT NULL,
   NOM_EQUIPEMENT CHAR(50) NOT NULL,
   ETAT_EQUIPEMENT CHAR(20) NOT NULL,
   DATE_DERNIERE_MAINTENANCE DATE NULL,
   CONSTRAINT PK_EQUIPEMENT PRIMARY KEY (ID_EQUIPEMENT)
);

/*==============================================================*/
/* Table: FACTURE                                               */
/*==============================================================*/
CREATE TABLE FACTURE (
   ID_FACTURE SERIAL NOT NULL,
   NOM_FACTURE CHAR(30) NOT NULL,
   MONTANT_FACTURE DECIMAL NULL,
   DATE_LIMITE_FACTURE DATE NULL,
   ETAT_FACTURE CHAR(1),
   CONSTRAINT PK_FACTURE PRIMARY KEY (ID_FACTURE)
);

/*==============================================================*/
/* Table: GESTIONNAIRE                                          */
/*==============================================================*/
CREATE TABLE GESTIONNAIRE (
   ID_GESTIONNAIRE SERIAL NOT NULL,
   NOM_GESTIONNAIRE CHAR(50) NOT NULL,
   PRENOM_GESTIONNAIRE CHAR(50) NOT NULL,
   SEXE_GESTIONNAIRE CHAR(1) NULL,
   PHOTO_GESTIONNAIRE CHAR(255) NULL,
   ADRESSE_GESTIONNAIRE CHAR(50) NULL,
   ADRESSE_MAIL_GESTIONNAIRE CHAR(50),
   MOT_DE_PASSE CHAR(30),
   CONSTRAINT PK_GESTIONNAIRE PRIMARY KEY (ID_GESTIONNAIRE)
);

/*==============================================================*/
/* Table: PAIEMENT                                              */
/*==============================================================*/
CREATE TABLE PAIEMENT (
   ID_PAIEMENT SERIAL NOT NULL,
   ID_FACTURE INT4 NULL,
   ID_CLIENT INT4 NULL,
   NOM_PAIEMENT CHAR(30) NULL,
   MONTANT_PAIEMENT DECIMAL NULL,
   DATE_PAIEMENT DATE NULL,
   CONSTRAINT PK_PAIEMENT PRIMARY KEY (ID_PAIEMENT)
);

/*==============================================================*/
/* Table: RAPPORT                                               */
/*==============================================================*/
CREATE TABLE RAPPORT (
   ID_RAPPORT SERIAL NOT NULL,
   ID_SESSION_ENTRAINEMENT INT4 NULL,
   NOM_RAPPORT CHAR(20) NULL,
   FICHIER_RAPPORT BYTEA NULL,
   DATE_RAPPORT DATE NULL,
   CONSTRAINT PK_RAPPORT PRIMARY KEY (ID_RAPPORT)
);

/*==============================================================*/
/* Table: SALLE                                                 */
/*==============================================================*/
CREATE TABLE SALLE (
   ID_SALLE SERIAL NOT NULL,
   NOM_SALLE CHAR(20) NULL,
   ETAT CHAR(1),
   CONSTRAINT PK_SALLE PRIMARY KEY (ID_SALLE)
);

/*==============================================================*/
/* Table: STATISTIQUE                                           */
/*==============================================================*/


CREATE TABLE STATISTIQUE (
   ID_STATISTIQUE SERIAL NOT NULL,
   ID_RAPPORT INT4 NULL,
   NOM_STATISTIQUE CHAR(20) NULL,
   FICHIER_STATISTIQUE BYTEA NULL,
   CONSTRAINT PK_STATISTIQUE PRIMARY KEY (ID_STATISTIQUE)
);

CREATE TABLE GERER (
   ID_EQUIPEMENT INT NOT NULL,
   ID_GESTIONNAIRE INT NOT NULL
);

ALTER TABLE CLIENT ADD CONSTRAINT FK_CLIENT_ENTRAINER_ENTRAINE FOREIGN KEY (ID_ENTRAINEUR) REFERENCES ENTRAINEUR (ID_ENTRAINEUR) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE CLIENT ADD CONSTRAINT FK_CLIENT_SOUSCRIRE_ABONNEME FOREIGN KEY (ID_ABONNEMENT) REFERENCES ABONNEMENT (ID_ABONNEMENT) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ENTRAINEMENT_FERME ADD CONSTRAINT FK_ENTRAINE_DIRIGE_ENTRAINE FOREIGN KEY (ID_ENTRAINEUR) REFERENCES ENTRAINEUR (ID_ENTRAINEUR) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ENTRAINEMENT_FERME ADD CONSTRAINT FK_ENTRAINE_PLANIFIER_GESTIONN FOREIGN KEY (ID_GESTIONNAIRE) REFERENCES GESTIONNAIRE (ID_GESTIONNAIRE) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ENTRAINEMENT_FERME ADD CONSTRAINT FK_ENTRAINE_UTILISER_SALLE FOREIGN KEY (ID_SALLE) REFERENCES SALLE (ID_SALLE) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ENTRAINEMENT_OUVERT ADD CONSTRAINT FK_ENTRAINE_DIRIGE_ENTRAINE_O FOREIGN KEY (ID_ENTRAINEUR) REFERENCES ENTRAINEUR (ID_ENTRAINEUR) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ENTRAINEMENT_OUVERT ADD CONSTRAINT FK_ENTRAINE_PLANIFIER_GESTIONN_O FOREIGN KEY (ID_GESTIONNAIRE) REFERENCES GESTIONNAIRE (ID_GESTIONNAIRE) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ENTRAINEMENT_OUVERT ADD CONSTRAINT FK_ENTRAINE_UTILISER_SALLE_O FOREIGN KEY (ID_SALLE) REFERENCES SALLE (ID_SALLE) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE PAIEMENT ADD CONSTRAINT FK_PAIEMENT_EFFECTUER_CLIENT FOREIGN KEY (ID_CLIENT) REFERENCES CLIENT (ID_CLIENT) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE STATISTIQUE ADD CONSTRAINT FK_STATISTI_FAIRE_RAPPORT FOREIGN KEY (ID_RAPPORT) REFERENCES RAPPORT (ID_RAPPORT) ON DELETE RESTRICT ON UPDATE RESTRICT;