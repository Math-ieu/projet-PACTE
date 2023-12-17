/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     15/12/2023 17:19:57                          */
/*==============================================================*/




/*==============================================================*/
/* Table: ABONNEMENT                                            */
/*==============================================================*/
create table ABONNEMENT (
   ID_ABONNEMENT        SERIAL START 1 INCREMENT 1    not null,
   NOM_ABONNEMENT       CHAR(255)             not null,
   TYPE_ABONNEMENT      CHAR(255)             not null,
   MONTANT_ABONNEMENT   DECIMAL              not null,
   constraint PK_ABONNEMENT primary key (ID_ABONNEMENT)
);

/*==============================================================*/
/* Index: ABONNEMENT_PK                                         */
/*==============================================================*/
create unique index ABONNEMENT_PK on ABONNEMENT (
ID_ABONNEMENT
);



/*==============================================================*/
/* Table: AFFECTER                                              */
/*==============================================================*/
create table AFFECTER (
   ID_EQUIPEMENT        INT4                 not null,
   ID_SESSION_ENTRAINEMENT INT4                 not null,
   QTE_AFFECTER         INT4                 null,
   DUREE_AFFECTER       TIME                 null,
   constraint PK_AFFECTER primary key (ID_EQUIPEMENT, ID_SESSION_ENTRAINEMENT)
);

/*==============================================================*/
/* Index: AFFECTER_PK                                           */
/*==============================================================*/
create unique index AFFECTER_PK on AFFECTER (
ID_EQUIPEMENT,
ID_SESSION_ENTRAINEMENT
);

/*==============================================================*/
/* Index: AFFECTER_FK                                           */
/*==============================================================*/
create  index AFFECTER_FK on AFFECTER (
ID_EQUIPEMENT
);

/*==============================================================*/
/* Index: AFFECTER2_FK                                          */
/*==============================================================*/
create  index AFFECTER2_FK on AFFECTER (
ID_SESSION_ENTRAINEMENT
);

/*==============================================================*/
/* Table: ASSISTER                                              */
/*==============================================================*/
create table ASSISTER (
   ID_CLIENT            INT4                 not null,
   ID_SESSION_ENTRAINEMENT INT4                 not null,
   constraint PK_ASSISTER primary key (ID_CLIENT, ID_SESSION_ENTRAINEMENT)
);

/*==============================================================*/
/* Index: ASSISTER_PK                                           */
/*==============================================================*/
create unique index ASSISTER_PK on ASSISTER (
ID_CLIENT,
ID_SESSION_ENTRAINEMENT
);

/*==============================================================*/
/* Index: ASSISTER_FK                                           */
/*==============================================================*/
create  index ASSISTER_FK on ASSISTER (
ID_CLIENT
);

/*==============================================================*/
/* Index: ASSISTER2_FK                                          */
/*==============================================================*/
create  index ASSISTER2_FK on ASSISTER (
ID_SESSION_ENTRAINEMENT
);

/*==============================================================*/
/* Table: CLIENT                                                */
/*==============================================================*/
create table CLIENT (
   NOM_CLIENT           CHAR(30)             null,
   PRENOM               CHAR(50),
   MOT_DE_PASSE         CHAR(30),
   ID_CLIENT            SERIAL START 1 INCREMENT 1                not null,
   ID_ABONNEMENT        INT4                 null,
   ID_EMPLOYE           INT4                 null,
   ID_ENTRAINEUR        INT4                 null,
   PHOTO_CLIENT         BYTEA           null,
   TELEPHONE_CLIENT     CHAR(15),
   DATE_NAISSANCE       DATE,
   SEXE                 CHAR(1),
   POIDS                DECIMAL,
   TAILLE               DECIMAL,
   DATE_INSCRIPTION     DATE,
   ETAT                 CHAR(1),
   MOTIVATION           TEXT,
   OBJECTIF             CHAR(50),
   TYPE_ENTRAINEMENT    CHAR(1),
   ADRESSE_CLIENT       CHAR(50)             null,
   constraint PK_CLIENT primary key (ID_CLIENT)
);

/*==============================================================*/
/* Index: CLIENT_PK                                             */
/*==============================================================*/
create unique index CLIENT_PK on CLIENT (
ID_CLIENT
);

/*==============================================================*/
/* Index: SOUSCRIRE_FK                                          */
/*==============================================================*/
create  index SOUSCRIRE_FK on CLIENT (
ID_ABONNEMENT
);

/*==============================================================*/
/* Index: ENTRAINER_FK                                          */
/*==============================================================*/
create  index ENTRAINER_FK on CLIENT (
ID_EMPLOYE,
ID_ENTRAINEUR
);

/*==============================================================*/
/* Table: EMPLOYE                                               */
/*==============================================================*/
create table EMPLOYE (
   ID_EMPLOYE           SERIAL START 1 INCREMENT 1 not null,
   NOM_EMPLOYE          CHAR(50)             not null,
   PRENOM_EMPLOYE       VARCHAR(50)          null,
   PHOTO_EMPLOYE        BYTEA            null,
   ADRESSE_EMPLOYE      CHAR(50)             null,
   constraint PK_EMPLOYE primary key (ID_EMPLOYE)
);

/*==============================================================*/
/* Index: EMPLOYE_PK                                            */
/*==============================================================*/
create unique index EMPLOYE_PK on EMPLOYE (
ID_EMPLOYE
);

/*==============================================================*/
/* Table: ENTRAINEMENT                                          */
/*==============================================================*/
create table ENTRAINEMENT (
   ID_SESSION_ENTRAINEMENT SERIAL START 1 INCREMENT 1  not null,
   ID_GESTIONNAIRE      INT4                 not null,
   ID_SALLE             INT4                 not null,
   ID_ENTRAINEUR        INT4                 not null,
   ID_RAPPORT           INT4                 not null,
   DATE_SESSION         DATE                 null,
   JOUR_DE_LA_SEMAINE   CHAR(10),
   DEBUT                TIME                 null,
   FIN                  TIME                 null,
   NOM_SESSION          CHAR(20)             null,
   constraint PK_ENTRAINEMENT primary key (ID_SESSION_ENTRAINEMENT)
);

/*==============================================================*/
/* Index: ENTRAINEMENT_PK                                       */
/*==============================================================*/
create unique index ENTRAINEMENT_PK on ENTRAINEMENT (
ID_SESSION_ENTRAINEMENT
);

/*==============================================================*/
/* Index: UTILISER_FK                                           */
/*==============================================================*/
create  index UTILISER_FK on ENTRAINEMENT (
ID_SALLE
);

/*==============================================================*/
/* Index: DIRIGE_FK                                             */
/*==============================================================*/
create  index DIRIGE_FK on ENTRAINEMENT (
ID_ENTRAINEUR
);

/*==============================================================*/
/* Index: AVOIR2_FK                                             */
/*==============================================================*/
create  index AVOIR2_FK on ENTRAINEMENT (
ID_RAPPORT
);

/*==============================================================*/
/* Index: PLANIFIER_FK                                          */
/*==============================================================*/
create  index PLANIFIER_FK on ENTRAINEMENT (
ID_GESTIONNAIRE
);

/*==============================================================*/
/* Table: ENTRAINEUR                                            */
/*==============================================================*/
create table ENTRAINEUR (
   ID_EMPLOYE           INT4                 not null,
   ID_ENTRAINEUR        SERIAL START 1 INCREMENT 1 not null,
   NOM_EMPLOYE          CHAR(50)             not null,
   PRENOM_EMPLOYE       VARCHAR(50)          null,
   MOT_DE_PASSE         CHAR(30),
   PHOTO_EMPLOYE        BYTEA            null,
   ETAT                 CHAR(1),
   ADRESSE_EMPLOYE      CHAR(50)             null,
   PHRASE_ACCROCHE_ENTRAINEUR CHAR(100)            null,
   constraint PK_ENTRAINEUR primary key (ID_EMPLOYE, ID_ENTRAINEUR)
);

/*==============================================================*/
/* Index: ENTRAINEUR_PK                                         */
/*==============================================================*/
create unique index ENTRAINEUR_PK on ENTRAINEUR (
ID_EMPLOYE,
ID_ENTRAINEUR
);

/*==============================================================*/
/* Index: INHERITANCE_2_FK                                      */
/*==============================================================*/
create  index INHERITANCE_2_FK on ENTRAINEUR (
ID_EMPLOYE
);

/*==============================================================*/
/* Table: EQUIPEMENT                                            */
/*==============================================================*/
create table EQUIPEMENT (
   ID_EQUIPEMENT        SERIAL START 1 INCREMENT 1     not null,
   ID_GESTIONNAIRE      INT4                 not null,
   NOM_EQUIPEMENT       CHAR(50)             not null,
   QTE_EQUIPEMENT       INT4                 not null,
   ETAT_EQUIPEMENT      CHAR(20)             not null,
   DATE_DERNIERE_MAINTENANCE DATE                 null,
   constraint PK_EQUIPEMENT primary key (ID_EQUIPEMENT)
);

/*==============================================================*/
/* Index: EQUIPEMENT_PK                                         */
/*==============================================================*/
create unique index EQUIPEMENT_PK on EQUIPEMENT (
ID_EQUIPEMENT
);

/*==============================================================*/
/* Index: GERER_FK                                              */
/*==============================================================*/
create  index GERER_FK on EQUIPEMENT (
ID_GESTIONNAIRE
);

/*==============================================================*/
/* Table: FACTURE                                               */
/*==============================================================*/
create table FACTURE (
   ID_FACTURE           SERIAL START 1 INCREMENT 1   not null,
   ID_PAIEMENT          INT4                 not null,
   NOM_FACTURE          CHAR(30)             not null,
   MONTANT_FACTURE      DECIMAL              null,
   DATE_LIMITE_FACTURE  DATE                 null,
   ETAT_FACTURE         CHAR(1),
   constraint PK_FACTURE primary key (ID_FACTURE)
);

/*==============================================================*/
/* Index: FACTURE_PK                                            */
/*==============================================================*/
create unique index FACTURE_PK on FACTURE (
ID_FACTURE
);

/*==============================================================*/
/* Index: REGLER2_FK                                            */
/*==============================================================*/
create  index REGLER2_FK on FACTURE (
ID_PAIEMENT
);

/*==============================================================*/
/* Table: GESTIONNAIRE                                          */
/*==============================================================*/
create table GESTIONNAIRE (
   ID_EMPLOYE           INT4                 not null,
   ID_GESTIONNAIRE      SERIAL START 1 INCREMENT 1 not null,
   NOM_EMPLOYE          CHAR(50)             not null,
   PRENOM_EMPLOYE       VARCHAR(50)          null,
   MOT_DE_PASSE         CHAR(30),
   PHOTO_EMPLOYE        BYTEA           null,
   ADRESSE_EMPLOYE      CHAR(50)             null,
   constraint PK_GESTIONNAIRE primary key (ID_EMPLOYE, ID_GESTIONNAIRE)
);

/*==============================================================*/
/* Index: GESTIONNAIRE_PK                                       */
/*==============================================================*/
create unique index GESTIONNAIRE_PK on GESTIONNAIRE (
ID_EMPLOYE,
ID_GESTIONNAIRE
);

/*==============================================================*/
/* Index: HERITAGE_2_FK                                         */
/*==============================================================*/
create  index HERITAGE_2_FK on GESTIONNAIRE (
ID_EMPLOYE
);

/*==============================================================*/
/* Table: PAIEMENT                                              */
/*==============================================================*/
create table PAIEMENT (
   ID_PAIEMENT          SERIAL START 1 INCREMENT 1                 not null,
   ID_CLIENT            INT4                 not null,
   NOM_PAIEMENT         CHAR(30)             not null,
   MONTANT_PAIEMENT     DECIMAL              not null,
   DATE_PAIEMENT        DATE                 null,
   constraint PK_PAIEMENT primary key (ID_PAIEMENT)
);

/*==============================================================*/
/* Index: PAIEMENT_PK                                           */
/*==============================================================*/
create unique index PAIEMENT_PK on PAIEMENT (
ID_PAIEMENT
);

/*==============================================================*/
/* Index: EFFECTUER_FK                                          */
/*==============================================================*/
create  index EFFECTUER_FK on PAIEMENT (
ID_CLIENT
);

/*==============================================================*/
/* Table: RAPPORT                                               */
/*==============================================================*/
create table RAPPORT (
   ID_RAPPORT           SERIAL START 1 INCREMENT 1    not null,
   NOM_RAPPORT          CHAR(20)             null,
   FICHIER_RAPPORT      BYTEA                 null,
   DATE_RAPPORT         DATE                 null,
   constraint PK_RAPPORT primary key (ID_RAPPORT)
);

/*==============================================================*/
/* Index: RAPPORT_PK                                            */
/*==============================================================*/
create unique index RAPPORT_PK on RAPPORT (
ID_RAPPORT
);

/*==============================================================*/
/* Table: SALLE                                                 */
/*==============================================================*/
create table SALLE (
   ID_SALLE             SERIAL START 1 INCREMENT 1    not null,
   NOM_SALLE            CHAR(20)             not null,
   ETAT                 CHAR(1),
   constraint PK_SALLE primary key (ID_SALLE)
);

/*==============================================================*/
/* Index: SALLE_PK                                              */
/*==============================================================*/
create unique index SALLE_PK on SALLE (
ID_SALLE
);

/*==============================================================*/
/* Table: STATISTIQUE                                           */
/*==============================================================*/
create table STATISTIQUE (
   ID_STATISTIQUE       SERIAL START 1 INCREMENT 1    not null,
   ID_RAPPORT           INT4                 not null,
   NOM_STATISTIQUE      CHAR(20)             not null,
   FICHIER_STATISTIQUE  BYTEA                null,
   constraint PK_STATISTIQUE primary key (ID_STATISTIQUE)
);

/*==============================================================*/
/* Index: STATISTIQUE_PK                                        */
/*==============================================================*/
create unique index STATISTIQUE_PK on STATISTIQUE (
ID_STATISTIQUE
);

/*==============================================================*/
/* Index: FAIRE_FK                                              */
/*==============================================================*/
create  index FAIRE_FK on STATISTIQUE (
ID_RAPPORT
);

alter table AFFECTER
   add constraint FK_AFFECTER_AFFECTER_EQUIPEME foreign key (ID_EQUIPEMENT)
      references EQUIPEMENT (ID_EQUIPEMENT)
      on delete restrict on update restrict;

alter table AFFECTER
   add constraint FK_AFFECTER_AFFECTER2_ENTRAINE foreign key (ID_SESSION_ENTRAINEMENT)
      references ENTRAINEMENT (ID_SESSION_ENTRAINEMENT)
      on delete restrict on update restrict;

alter table ASSISTER
   add constraint FK_ASSISTER_ASSISTER_CLIENT foreign key (ID_CLIENT)
      references CLIENT (ID_CLIENT)
      on delete restrict on update restrict;

alter table ASSISTER
   add constraint FK_ASSISTER_ASSISTER2_ENTRAINE foreign key (ID_SESSION_ENTRAINEMENT)
      references ENTRAINEMENT (ID_SESSION_ENTRAINEMENT)
      on delete restrict on update restrict;

alter table CLIENT
   add constraint FK_CLIENT_ENTRAINER_ENTRAINE foreign key (ID_EMPLOYE, ID_ENTRAINEUR)
      references ENTRAINEUR (ID_EMPLOYE, ID_ENTRAINEUR)
      on delete restrict on update restrict;

alter table CLIENT
   add constraint FK_CLIENT_SOUSCRIRE_ABONNEME foreign key (ID_ABONNEMENT)
      references ABONNEMENT (ID_ABONNEMENT)
      on delete restrict on update restrict;

alter table ENTRAINEMENT
   add constraint FK_ENTRAINE_AVOIR2_RAPPORT foreign key (ID_RAPPORT)
      references RAPPORT (ID_RAPPORT)
      on delete restrict on update restrict;

alter table ENTRAINEMENT
   add constraint FK_ENTRAINE_DIRIGE_ENTRAINE foreign key (ID_EMPLOYE, ID_ENTRAINEUR)
      references ENTRAINEUR (ID_EMPLOYE, ID_ENTRAINEUR)
      on delete restrict on update restrict;

alter table ENTRAINEMENT
   add constraint FK_ENTRAINE_PLANIFIER_GESTIONN foreign key (GES_ID_EMPLOYE, ID_GESTIONNAIRE)
      references GESTIONNAIRE (ID_EMPLOYE, ID_GESTIONNAIRE)
      on delete restrict on update restrict;

alter table ENTRAINEMENT
   add constraint FK_ENTRAINE_UTILISER_SALLE foreign key (ID_SALLE)
      references SALLE (ID_SALLE)
      on delete restrict on update restrict;

alter table ENTRAINEUR
   add constraint FK_ENTRAINE_INHERITAN_EMPLOYE foreign key (ID_EMPLOYE)
      references EMPLOYE (ID_EMPLOYE)
      on delete restrict on update restrict;

alter table EQUIPEMENT
   add constraint FK_EQUIPEME_GERER_GESTIONN foreign key (ID_EMPLOYE, ID_GESTIONNAIRE)
      references GESTIONNAIRE (ID_EMPLOYE, ID_GESTIONNAIRE)
      on delete restrict on update restrict;

alter table FACTURE
   add constraint FK_FACTURE_REGLER2_PAIEMENT foreign key (ID_PAIEMENT)
      references PAIEMENT (ID_PAIEMENT)
      on delete restrict on update restrict;

alter table GESTIONNAIRE
   add constraint FK_GESTIONN_HERITAGE__EMPLOYE foreign key (ID_EMPLOYE)
      references EMPLOYE (ID_EMPLOYE)
      on delete restrict on update restrict;

alter table PAIEMENT
   add constraint FK_PAIEMENT_EFFECTUER_CLIENT foreign key (ID_CLIENT)
      references CLIENT (ID_CLIENT)
      on delete restrict on update restrict;

alter table STATISTIQUE
   add constraint FK_STATISTI_FAIRE_RAPPORT foreign key (ID_RAPPORT)
      references RAPPORT (ID_RAPPORT)
      on delete restrict on update restrict;

