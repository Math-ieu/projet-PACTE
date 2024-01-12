# projet-PACTE

Base de données: pacteprojectdb (postgreSQL)

npm install --save pg pg-hstore sequelize sequelize-cli

npx sequelize init

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

npx sequelize-cli db:migrate

npx sequelize-cli db:migrate:undo

npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

npx sequelize-cli model:generate --name Abonnement --attributes ID_ABONNEMENT:integer,NOM_ABONNEMENT:string,TYPE_ABONNEMENT:string,MONTANT_ABONNEMENT:float

npx sequelize-cli model:generate --name Affecter_ferme --attributes ID_TYPE_EQUIPEMENT:integer,ID_ENTRAINEMENT_FERME:integer,QTE_AFFECTER:integer,
DUREE_AFFECTER:time

npx sequelize-cli model:generate --name Affecter_ouvert --attributes
ID_TYPE_EQUIPEMENT:integer,ID_ENTRAINEMENT_OUVERT:integer QTE_AFFECTER:integer,
DUREE_AFFECTER:time

npx sequelize-cli model:generate --name Assister_ouvert --attributes ID_CLIENT:integer,ID_ENTRAINEMENT_OUVERT:integer

npx sequelize-cli model:generate --name Assister_ferme --attributes ID_CLIENT:integer,ID_ENTRAINEMENT_FERME:integer

npx sequelize-cli model:generate --name Client --attributes NOM_CLIENT:string,PRENOM:string,MOT_DE_PASSE:string,ID_CLIENT:integer,ID_ABONNEMENT:integer,ID_ENTRAINEUR:integer,
PHOTO_CLIENT:string,TELEPHONE_CLIENT:string,
DATE_NAISSANCE:date,SEXE:string,POIDS:float,TAILLE:float,DATE_INSCRIPTION:date,ETAT:string,MOTIVATION:string,
OBJECTIF:string,TYPE_ENTRAINEMENT:string,ADRESSE_MAIL_CLIENT:string,ADRESSE_CLIENT:string

npx sequelize-cli model:generate --name Entrainement_ouvert --attributes ID_ENTRAINEMENT_OUVERT:integer,ID_GESTIONNAIRE:integer,ID_SALLE:integer,ID_ENTRAINEUR:integer,DATE_SESSION:date,JOUR_DE_LA_SEMAINE:string,DEBUT:time,FIN:time,NOM_SESSION:string

npx sequelize-cli model:generate --name Entrainement_ferme --attributes ID_ENTRAINEMENT_FERME:integer,ID_GESTIONNAIRE:integer,ID_SALLE:integer,ID_ENTRAINEUR:integer,DATE_SESSION:date,JOUR_DE_LA_SEMAINE:string,DEBUT:time,FIN:time,NOM_SESSION:string

npx sequelize-cli model:generate --name Entraineur --attributes ID_ENTRAINEUR:integer,NOM_ENTRAINEUR:string,PRENOM_ENTRAINEUR:string,SEXE_ENTRAINEUR:string,PHOTO_ENTRAINEUR:string,ADRESSE_ENTRAINEUR:string,ADRESSE_MAIL_ENTRAINEUR:string,MOT_DE_PASSE:string,ETAT:string,PHRASE_ACCROCHE_ENTRAINEUR:string,

npx sequelize-cli model:generate --name Type_equipement --attributes ID_TYPE_EQUIPEMENT:integer,NOM_TYPE_EQUIPEMENT:string,QTE_EQUIPEMENT:integer

npx sequelize-cli model:generate --name Equipement --attributes ID_EQUIPEMENT:integer,ID_TYPE_EQUIPEMENT:integer,NOM_EQUIPEMENT:string,ETAT_EQUIPEMENT:string,DATE_DERNIERE_MAINTENANCE:date,

npx sequelize-cli model:generate --name Facture --attributes ID_FACTURE:integer,NOM_FACTURE:string,MONTANT_FACTURE:float,DATE_LIMITE_FACTURE:date,ETAT_FACTURE:string

npx sequelize-cli model:generate --name Gestionnaire --attributes ID_GESTIONNAIRE:integer,NOM_GESTIONNAIRE:string,PRENOM_GESTIONNAIRE:string,SEXE_GESTIONNAIRE:string,PHOTO_GESTIONNAIRE:string,ADRESSE_GESTIONNAIRE:string,ADRESSE_MAIL_GESTIONNAIRE:string,MOT_DE_PASSE:string

npx sequelize-cli model:generate --name Paiement --attributes ID*PAIEMENT:integer,ID_FACTURE:integer,ID*
CLIENT:integer,NOM_PAIEMENT:string,MONTANT_PAIEMENT:float,DATE_PAIEMENT:date

npx sequelize-cli model:generate --name Rapport_ferme --attributes ID_RAPPORT_FERME:integer,ID_ENTRAINEMENT_FERME:integer,NOM_RAPPORT:string,FICHIER_RAPPORT:string,DATE_RAPPORT:date

npx sequelize-cli model:generate --name Rapport_ouvert --attributes ID_RAPPORT_OUVERT:integer,ID_ENTRAINEMENT_OUVERT:integer,NOM_RAPPORT:string,FICHIER_RAPPORT:string,DATE_RAPPORT:date

npx sequelize-cli model:generate --name Salle --attributes ID_SALLE:integer,NOM_SALLE:string,ETAT:string

npx sequelize-cli model:generate --name Statistique_ouvert --attributes ID_STATISTIQUE_OUVERT:integer,ID_RAPPORT_OUVERT:integer,NOM_STATISTIQUE:string,FICHIER_STATISTIQUE:string

npx sequelize-cli model:generate --name Statistique_ferme --attributes ID_STATISTIQUE_FERME:integer,ID_RAPPORT_FERME:integer,NOM_STATISTIQUE:string,FICHIER_STATISTIQUE:string
