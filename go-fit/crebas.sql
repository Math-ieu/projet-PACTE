/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     15/12/2023 17:19:57                          */
/*==============================================================*/




/*==============================================================*/
/* Table: ABONNEMENT                                            */
/*==============================================================*/
CREATE TABLE ABONNEMENT (
   ID_ABONNEMENT SERIAL START 1 INCREMENT 1 NOT NULL,
   NOM_ABONNEMENT CHAR(255) NOT NULL,
   TYPE_ABONNEMENT CHAR(255) NOT NULL,
   MONTANT_ABONNEMENT DECIMAL NOT NULL,
   CONSTRAINT PK_ABONNEMENT PRIMARY KEY (ID_ABONNEMENT)
);

/*==============================================================*/
/* Index: ABONNEMENT_PK                                         */
/*==============================================================*/
CREATE UNIQUE INDEX ABONNEMENT_PK ON ABONNEMENT (
ID_ABONNEMENT
);

/*==============================================================*/
/* Table: AFFECTER                                              */
/*==============================================================*/
CREATE TABLE AFFECTER (
   ID_EQUIPEMENT INT4 NOT NULL,
   ID_SESSION_ENTRAINEMENT INT4 NOT NULL,
   QTE_AFFECTER INT4 NULL,
   DUREE_AFFECTER TIME NULL,
   CONSTRAINT PK_AFFECTER PRIMARY KEY (ID_EQUIPEMENT, ID_SESSION_ENTRAINEMENT)
);

/*==============================================================*/
/* Index: AFFECTER_PK                                           */
/*==============================================================*/
CREATE UNIQUE INDEX AFFECTER_PK ON AFFECTER (
ID_EQUIPEMENT,
ID_SESSION_ENTRAINEMENT
);

/*==============================================================*/
/* Index: AFFECTER_FK                                           */
/*==============================================================*/
CREATE INDEX AFFECTER_FK ON AFFECTER (
ID_EQUIPEMENT
);

/*==============================================================*/
/* Index: AFFECTER2_FK                                          */
/*==============================================================*/
CREATE INDEX AFFECTER2_FK ON AFFECTER (
ID_SESSION_ENTRAINEMENT
);

/*==============================================================*/
/* Table: ASSISTER                                              */
/*==============================================================*/
CREATE TABLE ASSISTER (
   ID_CLIENT INT4 NOT NULL,
   ID_SESSION_ENTRAINEMENT INT4 NOT NULL,
   CONSTRAINT PK_ASSISTER PRIMARY KEY (ID_CLIENT, ID_SESSION_ENTRAINEMENT)
);

/*==============================================================*/
/* Index: ASSISTER_PK                                           */
/*==============================================================*/
CREATE UNIQUE INDEX ASSISTER_PK ON ASSISTER (
ID_CLIENT,
ID_SESSION_ENTRAINEMENT
);

/*==============================================================*/
/* Index: ASSISTER_FK                                           */
/*==============================================================*/
CREATE INDEX ASSISTER_FK ON ASSISTER (
ID_CLIENT
);

/*==============================================================*/
/* Index: ASSISTER2_FK                                          */
/*==============================================================*/
CREATE INDEX ASSISTER2_FK ON ASSISTER (
ID_SESSION_ENTRAINEMENT
);

/*==============================================================*/
/* Table: CLIENT                                                */
/*==============================================================*/
CREATE TABLE CLIENT (
   NOM_CLIENT CHAR(30) NOT NULL,
   PRENOM   CHAR(50) NOT NUL,
   MOT_DE_PASSE CHAR(30) NULL,
   ID_CLIENT SERIAL START 1 INCREMENT 1 NOT NULL,
   ID_ABONNEMENT INT4 NULL,
   ID_ENTRAINEUR INT4 NULL,
   PHOTO_CLIENT BYTEA NULL,
   TELEPHONE_CLIENT CHAR(15) NULL,
   DATE_NAISSANCE DATE NULL,
   SEXE CHAR(1) NOT NUL,
   POIDS DECIMAL NOT NUL,
   TAILLE DECIMAL NOT NUL,
   DATE_INSCRIPTION DATE NOT NUL,
   ETAT CHAR(1) NOT NULL,
   MOTIVATION TEXT NULL,
   OBJECTIF CHAR(50) NOT NUL,
   TYPE_ENTRAINEMENT CHAR(1)NOT NUL,
   ADRESSE_MAIL_CLIENT CHAR(50) NOT NULL,
   ADRESSE_CLIENT CHAR(50)NOT NULL,
   CONSTRAINT PK_CLIENT PRIMARY KEY (ID_CLIENT)
);

/*==============================================================*/
/* Index: CLIENT_PK                                             */
/*==============================================================*/
CREATE UNIQUE INDEX CLIENT_PK ON CLIENT (
ID_CLIENT
);

/*==============================================================*/
/* Index: SOUSCRIRE_FK                                          */
/*==============================================================*/
CREATE INDEX SOUSCRIRE_FK ON CLIENT (
ID_ABONNEMENT
);

/*==============================================================*/
/* Index: ENTRAINER_FK                                          */
/*==============================================================*/
CREATE INDEX ENTRAINER_FK ON CLIENT (
ID_EMPLOYE,
ID_ENTRAINEUR
);

/*==============================================================*/
/* Table: EMPLOYE                                               */
/*==============================================================*/
CREATE TABLE EMPLOYE (
   ID_EMPLOYE SERIAL START 1 INCREMENT 1 NOT NULL,
   NOM_EMPLOYE CHAR(50) NOT NULL,
   PRENOM_EMPLOYE VARCHAR(50) NULL,
   PHOTO_EMPLOYE BYTEA NULL,
   ADRESSE_EMPLOYE CHAR(50) NULL,
   CONSTRAINT PK_EMPLOYE PRIMARY KEY (ID_EMPLOYE)
);

/*==============================================================*/
/* Index: EMPLOYE_PK                                            */
/*==============================================================*/
CREATE UNIQUE INDEX EMPLOYE_PK ON EMPLOYE (
ID_EMPLOYE
);

/*==============================================================*/
/* Table: ENTRAINEMENT                                          */
/*==============================================================*/
CREATE TABLE ENTRAINEMENT (
   ID_SESSION_ENTRAINEMENT SERIAL START 1 INCREMENT 1 NOT NULL,
   ID_GESTIONNAIRE INT4 NOT NULL,
   ID_SALLE INT4 NOT NULL,
   ID_ENTRAINEUR INT4 NOT NULL,
   ID_RAPPORT INT4 NOT NULL,
   DATE_SESSION DATE NULL,
   JOUR_DE_LA_SEMAINE CHAR(10),
   DEBUT TIME NULL,
   FIN TIME NULL,
   NOM_SESSION CHAR(20) NULL,
   CONSTRAINT PK_ENTRAINEMENT PRIMARY KEY (ID_SESSION_ENTRAINEMENT)
);

/*==============================================================*/
/* Index: ENTRAINEMENT_PK                                       */
/*==============================================================*/
CREATE UNIQUE INDEX ENTRAINEMENT_PK ON ENTRAINEMENT (
ID_SESSION_ENTRAINEMENT
);

/*==============================================================*/
/* Index: UTILISER_FK                                           */
/*==============================================================*/
CREATE INDEX UTILISER_FK ON ENTRAINEMENT (
ID_SALLE
);

/*==============================================================*/
/* Index: DIRIGE_FK                                             */
/*==============================================================*/
CREATE INDEX DIRIGE_FK ON ENTRAINEMENT (
ID_ENTRAINEUR
);

/*==============================================================*/
/* Index: AVOIR2_FK                                             */
/*==============================================================*/
CREATE INDEX AVOIR2_FK ON ENTRAINEMENT (
ID_RAPPORT
);

/*==============================================================*/
/* Index: PLANIFIER_FK                                          */
/*==============================================================*/
CREATE INDEX PLANIFIER_FK ON ENTRAINEMENT (
ID_GESTIONNAIRE
);

/*==============================================================*/
/* Table: ENTRAINEUR                                            */
/*==============================================================*/
CREATE TABLE ENTRAINEUR (
   ID_ENTRAINEUR SERIAL START 1 INCREMENT 1 NOT NULL,
   ID_EMPLOYE INT4 NOT NULL,
   ADRESSE_MAIL_ENTRAINEUR CHAR(50) NOT NULL,
   MOT_DE_PASSE CHAR(30),
   ETAT CHAR(1),
   PHRASE_ACCROCHE_ENTRAINEUR CHAR(100) NULL,
   CONSTRAINT PK_ENTRAINEUR PRIMARY KEY (ID_EMPLOYE, ID_ENTRAINEUR)
);

/*==============================================================*/
/* Index: ENTRAINEUR_PK                                         */
/*==============================================================*/
CREATE UNIQUE INDEX ENTRAINEUR_PK ON ENTRAINEUR (
ID_EMPLOYE,
ID_ENTRAINEUR
);

/*==============================================================*/
/* Index: INHERITANCE_2_FK                                      */
/*==============================================================*/
CREATE INDEX INHERITANCE_2_FK ON ENTRAINEUR (
ID_EMPLOYE
);

/*==============================================================*/
/* Table: EQUIPEMENT                                            */
/*==============================================================*/
CREATE TABLE EQUIPEMENT (
   ID_EQUIPEMENT SERIAL START 1 INCREMENT 1 NOT NULL,
   ID_GESTIONNAIRE INT4 NOT NULL,
   NOM_EQUIPEMENT CHAR(50) NOT NULL,
   QTE_EQUIPEMENT INT4 NOT NULL,
   ETAT_EQUIPEMENT CHAR(20) NOT NULL,
   DATE_DERNIERE_MAINTENANCE DATE NULL,
   CONSTRAINT PK_EQUIPEMENT PRIMARY KEY (ID_EQUIPEMENT)
);

/*==============================================================*/
/* Index: EQUIPEMENT_PK                                         */
/*==============================================================*/
CREATE UNIQUE INDEX EQUIPEMENT_PK ON EQUIPEMENT (
ID_EQUIPEMENT
);

/*==============================================================*/
/* Index: GERER_FK                                              */
/*==============================================================*/
CREATE INDEX GERER_FK ON EQUIPEMENT (
ID_GESTIONNAIRE
);

/*==============================================================*/
/* Table: FACTURE                                               */
/*==============================================================*/
CREATE TABLE FACTURE (
   ID_FACTURE SERIAL START 1 INCREMENT 1 NOT NULL,
   NOM_FACTURE CHAR(30) NOT NULL,
   MONTANT_FACTURE DECIMAL NULL,
   DATE_LIMITE_FACTURE DATE NULL,
   ETAT_FACTURE CHAR(1),
   CONSTRAINT PK_FACTURE PRIMARY KEY (ID_FACTURE)
);

/*==============================================================*/
/* Index: FACTURE_PK                                            */
/*==============================================================*/
CREATE UNIQUE INDEX FACTURE_PK ON FACTURE (
ID_FACTURE
);

/*==============================================================*/
/* Index: REGLER2_FK                                            */
/*==============================================================*/
CREATE INDEX REGLER2_FK ON FACTURE (
ID_PAIEMENT
);

/*==============================================================*/
/* Table: GESTIONNAIRE                                          */
/*==============================================================*/
CREATE TABLE GESTIONNAIRE (
   ID_GESTIONNAIRE SERIAL START 1 INCREMENT 1 NOT NULL,
   ID_EMPLOYE INT4 NOT NULL,
   ADRESSE_MAIL_GESTIONNAIRE CHAR(50),
   MOT_DE_PASSE CHAR(30),
   CONSTRAINT PK_GESTIONNAIRE PRIMARY KEY (ID_EMPLOYE, ID_GESTIONNAIRE)
);

/*==============================================================*/
/* Index: GESTIONNAIRE_PK                                       */
/*==============================================================*/
CREATE UNIQUE INDEX GESTIONNAIRE_PK ON GESTIONNAIRE (
ID_EMPLOYE,
ID_GESTIONNAIRE
); 

/*==============================================================*/
/* Index: HERITAGE_2_FK                                         */
/*==============================================================*/
CREATE INDEX HERITAGE_2_FK ON GESTIONNAIRE (
ID_EMPLOYE
);

/*==============================================================*/
/* Table: PAIEMENT                                              */
/*==============================================================*/
CREATE TABLE PAIEMENT (
   ID_PAIEMENT SERIAL START 1 INCREMENT 1 NOT NULL,
   ID_FACTURE INT4 NOT NULL,
   ID_CLIENT INT4 NOT NULL,
   NOM_PAIEMENT CHAR(30)  NULL,
   MONTANT_PAIEMENT DECIMAL NOT NULL,
   DATE_PAIEMENT DATE NULL,
   CONSTRAINT PK_PAIEMENT PRIMARY KEY (ID_PAIEMENT)
);

/*==============================================================*/
/* Index: PAIEMENT_PK                                           */
/*==============================================================*/
CREATE UNIQUE INDEX PAIEMENT_PK ON PAIEMENT (
ID_PAIEMENT
);

/*==============================================================*/
/* Index: EFFECTUER_FK                                          */
/*==============================================================*/
CREATE INDEX EFFECTUER_FK ON PAIEMENT (
ID_CLIENT
);

/*==============================================================*/
/* Table: RAPPORT                                               */
/*==============================================================*/
CREATE TABLE RAPPORT (
   ID_RAPPORT SERIAL START 1 INCREMENT 1 NOT NULL,
   ID_SESSION_ENTRAINEMENT INT4 NOT NULL,
   NOM_RAPPORT CHAR(20) NULL,
   FICHIER_RAPPORT BYTEA NULL,
   DATE_RAPPORT DATE NULL,
   CONSTRAINT PK_RAPPORT PRIMARY KEY (ID_RAPPORT)
);

/*==============================================================*/
/* Index: RAPPORT_PK                                            */
/*==============================================================*/
CREATE UNIQUE INDEX RAPPORT_PK ON RAPPORT (
ID_RAPPORT
);

/*==============================================================*/
/* Table: SALLE                                                 */
/*==============================================================*/
CREATE TABLE SALLE (
   ID_SALLE SERIAL START 1 INCREMENT 1 NOT NULL,
   NOM_SALLE CHAR(20) NOT NULL,
   ETAT CHAR(1),
   CONSTRAINT PK_SALLE PRIMARY KEY (ID_SALLE)
);

/*==============================================================*/
/* Index: SALLE_PK                                              */
/*==============================================================*/
CREATE UNIQUE INDEX SALLE_PK ON SALLE (
ID_SALLE
);

/*==============================================================*/
/* Table: STATISTIQUE                                           */
/*==============================================================*/
CREATE TABLE STATISTIQUE (
   ID_STATISTIQUE SERIAL START 1 INCREMENT 1 NOT NULL,
   ID_RAPPORT INT4 NOT NULL,
   NOM_STATISTIQUE CHAR(20) NOT NULL,
   FICHIER_STATISTIQUE BYTEA NULL,
   CONSTRAINT PK_STATISTIQUE PRIMARY KEY (ID_STATISTIQUE)
);

/*==============================================================*/
/* Index: STATISTIQUE_PK                                        */
/*==============================================================*/
CREATE UNIQUE INDEX STATISTIQUE_PK ON STATISTIQUE (
ID_STATISTIQUE
);

/*==============================================================*/
/* Index: FAIRE_FK                                              */
/*==============================================================*/
CREATE INDEX FAIRE_FK ON STATISTIQUE (
ID_RAPPORT
);

ALTER TABLE AFFECTER ADD CONSTRAINT FK_AFFECTER_AFFECTER_EQUIPEME FOREIGN KEY (ID_EQUIPEMENT) REFERENCES EQUIPEMENT (ID_EQUIPEMENT) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE AFFECTER ADD CONSTRAINT FK_AFFECTER_AFFECTER2_ENTRAINE FOREIGN KEY (ID_SESSION_ENTRAINEMENT) REFERENCES ENTRAINEMENT (ID_SESSION_ENTRAINEMENT) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ASSISTER ADD CONSTRAINT FK_ASSISTER_ASSISTER_CLIENT FOREIGN KEY (ID_CLIENT) REFERENCES CLIENT (ID_CLIENT) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ASSISTER ADD CONSTRAINT FK_ASSISTER_ASSISTER2_ENTRAINE FOREIGN KEY (ID_SESSION_ENTRAINEMENT) REFERENCES ENTRAINEMENT (ID_SESSION_ENTRAINEMENT) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE CLIENT ADD CONSTRAINT FK_CLIENT_ENTRAINER_ENTRAINE FOREIGN KEY (ID_EMPLOYE, ID_ENTRAINEUR) REFERENCES ENTRAINEUR (ID_EMPLOYE, ID_ENTRAINEUR) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE CLIENT ADD CONSTRAINT FK_CLIENT_SOUSCRIRE_ABONNEME FOREIGN KEY (ID_ABONNEMENT) REFERENCES ABONNEMENT (ID_ABONNEMENT) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ENTRAINEMENT ADD CONSTRAINT FK_ENTRAINE_AVOIR2_RAPPORT FOREIGN KEY (ID_RAPPORT) REFERENCES RAPPORT (ID_RAPPORT) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ENTRAINEMENT ADD CONSTRAINT FK_ENTRAINE_DIRIGE_ENTRAINE FOREIGN KEY (ID_EMPLOYE, ID_ENTRAINEUR) REFERENCES ENTRAINEUR (ID_EMPLOYE, ID_ENTRAINEUR) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ENTRAINEMENT ADD CONSTRAINT FK_ENTRAINE_PLANIFIER_GESTIONN FOREIGN KEY (GES_ID_EMPLOYE, ID_GESTIONNAIRE) REFERENCES GESTIONNAIRE (ID_EMPLOYE, ID_GESTIONNAIRE) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ENTRAINEMENT ADD CONSTRAINT FK_ENTRAINE_UTILISER_SALLE FOREIGN KEY (ID_SALLE) REFERENCES SALLE (ID_SALLE) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ENTRAINEUR ADD CONSTRAINT FK_ENTRAINE_INHERITAN_EMPLOYE FOREIGN KEY (ID_EMPLOYE) REFERENCES EMPLOYE (ID_EMPLOYE) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE EQUIPEMENT ADD CONSTRAINT FK_EQUIPEME_GERER_GESTIONN FOREIGN KEY (ID_EMPLOYE, ID_GESTIONNAIRE) REFERENCES GESTIONNAIRE (ID_EMPLOYE, ID_GESTIONNAIRE) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE FACTURE ADD CONSTRAINT FK_FACTURE_REGLER2_PAIEMENT FOREIGN KEY (ID_PAIEMENT) REFERENCES PAIEMENT (ID_PAIEMENT) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE GESTIONNAIRE ADD CONSTRAINT FK_GESTIONN_HERITAGE__EMPLOYE FOREIGN KEY (ID_EMPLOYE) REFERENCES EMPLOYE (ID_EMPLOYE) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE PAIEMENT ADD CONSTRAINT FK_PAIEMENT_EFFECTUER_CLIENT FOREIGN KEY (ID_CLIENT) REFERENCES CLIENT (ID_CLIENT) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE STATISTIQUE ADD CONSTRAINT FK_STATISTI_FAIRE_RAPPORT FOREIGN KEY (ID_RAPPORT) REFERENCES RAPPORT (ID_RAPPORT) ON DELETE RESTRICT ON UPDATE RESTRICT;