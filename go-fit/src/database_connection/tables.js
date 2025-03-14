const client = require("./connection");

class Abonnement {
  constructor(
    nomAbonnement,
    typeAbonnement = "null",
    montantAbonnement = "null"
  ) {
    this.nomAbonnement = nomAbonnement;
    this.typeAbonnement = typeAbonnement;
    this.montantAbonnement = montantAbonnement;
  }

  static async createAbonnement() {
    await client.connect();
    await client.query(
      `insert into abonnement (NOM_ABONNEMENT,TYPE_ABONNEMENT,MONTANT_ABONNEMENT) value ($1,$2,$3)`,
      [this.nomAbonnement, this.typeAbonnement, this.montantAbonnement]
    );
    client.end();
  }

  static async deleteAbonnement() {
    let id;
    await client.connect();
    await client.query(
      `SELECT id_abonnement FROM abonnement WHERE nom_abonnement = $1`, [this.nomAbonnement], (err, res) => {
        id = res;
      }
    );
    await client.query(
      `DELETE FROM abonnement WHERE id_abonnement = $1`, [id]
    );
    client.end();

  }
  async updateAbonnement(
    nomAbonnement = this.nomAbonnement,
    typeAbonnement = this.typeAbonnement,
    montantAbonnement = this.montantAbonnement
  ) {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_abonnement FROM abonnement WHERE nomAbonnement = $1`,
      [this.nomAbonnement],
    );

    id = res[0].id_abonnement;

    await client.query('UPDATE abonnement SET nomAbonnement = $1, typeAbonnement = $2, montantAbonnement = $3 WHERE id_abonnement = $4',
      [nomAbonnement, typeAbonnement, montantAbonnement, id]);
    client.end();
  }
}
;
class Affecter {
  constructor(idEquipement, idSessionEntrainement, qteAffecter, dureeAffecter) {
    this.idEquipement = idEquipement;
    this.idSessionEntrainement = idSessionEntrainement;
    this.qteAffecter = qteAffecter;
    this.dureeAffecter = dureeAffecter;
  }

  static async createAffecter(
  ) {
    await client.connect();
    await client.query(
      `insert into affecter  value ($1,$2,$3;$4)`,
      [this.idEquipement, this.idSessionEntrainement, this.qteAffecter, this.dureeAffecter]
    );
    client.end();

  }

  static async deleteAffecter() {

    await client.connect();
    await client.query(
      `DELETE FROM affecter WHERE id_equipement = $1 AND id_session_entrainement = $2`, [this.idEquipement, this.idSessionEntrainement]
    );
    client.end();
  }

  async updateAffecter(
    idEquipement = this.idEquipement,
    idSessionEntrainement = this.idSessionEntrainement,
    qteAffecter = this.qteAffecter,
    dureeAffecter = this.dureeAffecter
  ) {
    await client.connect();
    await client.query('UPDATE affecter SET idEquipement = $1, idSessionEntrainement = $2, qteAffecter = $3, dureeAffecter = $4 WHERE id_affecter = $5',
      [idEquipement, idSessionEntrainement, qteAffecter, dureeAffecter]);
    client.end();
  }
}
;
class Assister {
  constructor(idClient, idSessionEntrainement) {
    this.idClient = idClient;
    this.idSessionEntrainement = idSessionEntrainement;
  }

  static async createAssister() {
    await client.connect();
    await client.query(
      `insert into assister  value ($1,$2)`,
      [this.idClient, this.idSessionEntrainement]
    );
    client.end();
  }
  static async deleteAssister() {
    await client.connect();
    await client.query(
      `DELETE FROM assister WHERE id_client = $1 AND id_session_entrainement = $2`, [this.idClient, this.idSessionEntrainement]
    )
  }
}
;
class Client {
  constructor(nom_client, prenom, mot_de_passe, id_abonnement, id_entraineur, photo_client, telephone_client, date_naissance, sexe, poids, taille, date_inscription, etat,
    motivation,
    objectif,
    type_entrainement,
    adresse_mail_client,
    adresse_client) {
    this.nom_client = nom_client;
    this.prenom = prenom;
    this.mot_de_passe = mot_de_passe;
    this.id_abonnement = id_abonnement;
    this.id_entraineur = id_entraineur;
    this.photo_client = photo_client;
    this.telephone_client = telephone_client;
    this.date_naissance = date_naissance;
    this.sexe = sexe;
    this.poids = poids;
    this.taille = taille;
    this.date_inscription = date_inscription;
    this.etat = etat;
    this.motivation = motivation;
    this.objectif = objectif;
    this.type_entrainement = type_entrainement;
    this.adresse_mail_client = adresse_mail_client
    this.adresse_client = adresse_client;
  }

  static async createClient() {
    await client.connect();
    await client.query(
      `insert into client(nom_client, prenom, mot_de_passe, id_abonnement,id_entraineur, photo_client, telephone_client, date_naissance, sexe, poids, taille, date_inscription, etat, motivation, objectif, type_entrainement, adresse_client) 
       value ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)`,
      [this.nom_client, this.prenom, this.mot_de_passe, this.id_abonnement, this.id_entraineur, this.photo_client, this.telephone_client, this.date_naissance, this.sexe, this.poids, this.taille, this.date_inscription, this.etat, this.motivation, this.objectif, this.type_entrainement, this.adresse_mail_client, this.adresse_client]
    );
    client.end();
  }

  static async deleteClient() {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_client FROM client WHERE nom_client = $1 AND prenom = $2 AND adresse_mail_client = $3 `, [this.nom_client, this.prenom, this.adresse_mail_client]
    );
    id = res[0].id_client;
    await client.query(
      `DELETE FROM client WHERE id_client = $1`, [id]
    );
    client.end();
  }

  static async updateClient() {

  }
}
;
class Employe {
  constructor(nomEmploye, prenomEmploye, photoEmploye = "null", adresseEmploye) {
    this.nomEmploye = nomEmploye;
    this.prenomEmploye = prenomEmploye;
    this.photoEmploye = photoEmploye;
    this.adresseEmploye = adresseEmploye;
  }

  static async createEmploye() {
    await client.connect();
    await client.query(
      `INSERT INTO employe (nom_employe, prenom_employe,adresse_employe)  value ($1,$2,$3)`,
      [this.nomEmploye, this.prenomEmploye, this.adresseEmploye]
    );
    client.end();
  }

  static async deleteEmploye() {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_employe FROM employe WHERE nom_employe = $1 AND prenom_employe = $2 AND adresse_employe = $3 `, [this.nomEmploye, this.prenomEmploye, this.adresseEmploye]
    );
    id = res[0].id_employe;
    await client.query(
      `DELETE FROM employe WHERE id_employe = $1`, [id]
    )
    client.end();
  }

  async updateEmploye(
    nomEmploye = this.nomEmploye,
    prenomEmploye = this.prenomEmploye,
    photoEmploye = this.photoEmploye,
    adresseEmploye = this.adresseEmploye
  ) {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_employe FROM employe WHERE nomEmploye = $1 AND prenomEmploye = $2`,
      [this.nomEmploye, this.prenomEmploye],
    );

    id = res[0].id_employe;

    await client.query('UPDATE employe SET nomEmploye = $1, prenomEmploye = $2, photoEmploye = $3, adresseEmploye = $4 WHERE id_employe = $5',
      [nomEmploye, prenomEmploye, photoEmploye, adresseEmploye, id]);
    client.end();
  }
}
;
class Entrainement {
  constructor(id_gestionnaire, id_salle, id_entraineur, date_session, jour_de_la_semaine, debut, fin, effectif_max, nom_session) {
    this.id_gestionnaire = id_gestionnaire;
    this.id_salle = id_salle;
    this.id_entraineur = id_entraineur;
    this.date_session = date_session;
    this.jour_de_la_semaine = jour_de_la_semaine;
    this.debut = debut;
    this.fin = fin;
    this.effectif_max = effectif_max;
    this.nom_session = nom_session;
  }
  async createEntrainement() {
    await client.connect();
    await client.query(
      `INSERT INTO entrainement (id_gestionnaire, id_salle, id_entraineur,date_session, jour_de_la_semaine, debut, fin,effectif_max  ,nom_session)  
      value ($1,$2,$3,$4,$5,$6,$7,$8)`,
      [this.id_gestionnaire, this.id_salle, this.id_entraineur, this.date_session, this.jour_de_la_semaine, this.debut, this.fin, this.effectif_max, this.nom_session]
    );
    client.end();

  }
  async deleteEntrainelent() {
    await client.connect();
    await client.query(
      `DELETE FROM entrainement WHERE id_gestionnaire = $1 AND nom_session = $2 AND date_session = $3 AND debut = $4 AND id_salle = $5`,
      [this.id_gestionnaire, this.nom_session, this.date_session, this.debut, this.id_salle]
    )
    client.end();

  }

  async updateEntrainement(
    id_gestionnaire = this.id_gestionnaire,
    id_salle = this.id_salle,
    id_entraineur = this.id_entraineur,
    date_session = this.date_session,
    jour_de_la_semaine = this.jour_de_la_semaine,
    debut = this.debut,
    fin = this.fin,
    effectif_max = this.effectif_max,
    nom_session = this.nom_session
  ) {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_session_entrainement FROM entrainement WHERE id_gestionnaire = $1 AND id_salle = $2 AND date_session = $3 AND debut = $4 AND nom_session = $5 `,
      [this.id_gestionnaire, this.id_salle, this.date_session, this.debut, this.nom_session],
    );

    id = res[0].id_session_entrainement;

    await client.query('UPDATE entrainement SET id_gestionnaire = $1, id_salle = $2, id_entraineur = $3,date_session = $4, jour_de_la_semaine = $5, debut = $6, fin = $7, nom_session = $8 WHERE id_session_entrainement = $9',
      [id_gestionnaire, id_salle, id_entraineur, date_session, jour_de_la_semaine, debut, fin, effectif_max, nom_session, id]);
    client.end();

  }

}

;
class Entraineur {
  constructor(id_employe, adresse_mail_entraineur, mot_de_passe, etat, phrase_accroche_entraineur) {
    this.id_employe = id_employe;
    this.adresse_mail_entraineur = adresse_mail_entraineur;
    this.mot_de_passe = mot_de_passe;
    this.etat = etat;
    this.phrase_accroche_entraineur = phrase_accroche_entraineur;
  }

  async createEntraineur() {
    await client.connect();
    await client.query(
      `INSERT INTO entraineur (id_employe, adresse_mail_entraineur, mot_de_passe, etat, phrase_accroche_entraineur)  
      value ($1,$2,$3,$4,$5)`,
      [this.id_employe, this.adresse_mail_entraineur, this.mot_de_passe, this.etat, this.phrase_accroche_entraineur]
    );
    client.end();
  }

  async deleteEntraineur() {
    await client.connect();
    await client.query(
      `DELETE FROM entraineur WHERE id_employe = $1 AND adresse_mail_entraineur = $2`,
      [this.id_employe, this.adresse_mail_entraineur]
    )
    client.end();
  }

  async updateEntraineur(
    id_employe = this.id_employe,
    adresse_mail_entraineur = this.adresse_mail_entraineur,
    mot_de_passe = this.mot_de_passe,
    etat = this.etat,
    phrase_accroche_entraineur = this.phrase_accroche_entraineur
  ) {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_entraineur FROM entraineur WHERE id_employe = $1 AND adresse_mail_entraineur = $2`,
      [this.id_employe, this.adresse_mail_entraineur],
    );

    id = res[0].id_entraineur;

    await client.query('UPDATE entraineur SET id_employe = $1, adresse_mail_entraineur = $2, mot_de_passe = $3, etat = $4, phrase_accroche_entraineur = $5 WHERE id_entraineur = $6',
      [id_employe, adresse_mail_entraineur, mot_de_passe, etat, phrase_accroche_entraineur, id]);
    client.end();
  }
}

;
class Equipement {
  constructor(nom_equipement, qte_equipement, etat_equipement, date_derniere_maintenance) {
    this.nom_equipement = nom_equipement;
    this.qte_equipement = qte_equipement;
    this.etat_equipement = etat_equipement;
    this.date_derniere_maintenance = date_derniere_maintenance;
  };

  async createEquipement() {
    await client.connect();
    await client.query(
      `INSERT INTO equipement (nom_equipement, qte_equipement, etat_equipement, date_derniere_maintenance)  
      value ($1,$2,$3,$4)`,
      [this.nom_equipement, this.qte_equipement, this.etat_equipement, this.date_derniere_maintenance]
    );
    client.end();
  };

  async deleteEquipement() {
    await client.connect();
    await client.query(
      `DELETE FROM equipement WHERE nom_equipement = $1`,
      [this.nom_equipement]
    )
    client.end();
  }

  async updateEquipement(
    nom_equipement = this.nom_equipement,
    qte_equipement = this.qte_equipement,
    etat_equipement = this.etat_equipement,
    date_derniere_maintenance = this.date_derniere_maintenance
  ) {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_equipement FROM equipement WHERE nom_equipement = $1`,
      [this.nom_equipement],
    );

    id = res[0].id_equipement;

    await client.query('UPDATE equipement SET nom_equipement = $1, qte_equipement = $2, etat_equipement = $3, date_derniere_maintenance = $4 WHERE id_equipement = $5',
      [nom_equipement, qte_equipement, etat_equipement, date_derniere_maintenance, id]);
    client.end();
  }
}
;

class Facture {
  constructor(nom_facture, montant_facture, date_limite_facture, etat_facture) {
    this.nom_facture = nom_facture;
    this.montant_facture = montant_facture;
    this.date_limite_facture = date_limite_facture;
    this.etat_facture = etat_facture;
  }

  async createFacture() {
    await client.connect();
    await client.query(
      `INSERT INTO facture (nom_facture, montant_facture, date_limite_facture, etat_facture)  
      value ($1,$2,$3,$4)`,
      [this.nom_facture, this.montant_facture, this.date_limite_facture, this.etat_facture]
    );
    client.end();
  }

  async deleteFacture() {
    await client.connect();
    await client.query(
      `DELETE FROM facture WHERE nom_facture = $1`,
      [this.nom_facture]
    )
    client.end();
  }

  async updateFacture(
    nom_facture = this.nom_facture,
    montant_facture = this.montant_facture,
    date_limite_facture = this.date_limite_facture,
    etat_facture = this.etat_facture
  ) {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_facture FROM facture WHERE nom_facture = $1`,
      [this.nom_facture],
    );

    id = res[0].id_facture;

    await client.query('UPDATE facture SET nom_facture = $1, montant_facture = $2, date_limite_facture = $3, etat_facture = $4 WHERE id_facture = $5',
      [nom_facture, montant_facture, date_limite_facture, etat_facture, id]);
    client.end();
  }
}


class Gestionnaire {
  constructor(id_employe, adresse_mail_gestionnaire, mot_de_passe) {
    this.id_employe = id_employe;
    this.adresse_mail_gestionnaire = adresse_mail_gestionnaire;
    this.mot_de_passe = mot_de_passe;
  }

  async createGestionnaire() {
    await client.connect();
    await client.query(
      `INSERT INTO gestionnaire (id_employe, adresse_mail_gestionnaire, mot_de_passe)  
      value ($1,$2,$3)`,
      [this.id_employe, this.adresse_mail_gestionnaire, this.mot_de_passe]
    );
    client.end();
  }

  async deleteGestionnaire() {
    await client.connect();
    await client.query(
      `DELETE FROM gestionnaire WHERE id_employe = $1 AND adresse_mail_gestionnaire = $2`,
      [this.id_employe, this.adresse_mail_gestionnaire]
    )
    client.end();
  }

  async updateGestionnaire(
    id_employe = this.id_employe,
    adresse_mail_gestionnaire = this.adresse_mail_gestionnaire,
    mot_de_passe = this.mot_de_passe
  ) {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_gestionnaire FROM gestionnaire WHERE id_employe = $1 AND adresse_mail_gestionnaire = $2`,
      [this.id_employe, this.adresse_mail_gestionnaire],
    );

    id = res[0].id_gestionnaire;

    await client.query('UPDATE gestionnaire SET id_employe = $1, adresse_mail_gestionnaire = $2, mot_de_passe = $3 WHERE id_gestionnaire = $4',
      [id_employe, adresse_mail_gestionnaire, mot_de_passe, id]);
    client.end();
  }
}

;
class Paiement {
  constructor(id_facture, id_client, nom_paiement, montant_paiement, date_paiement) {
    this.id_facture = id_facture;
    this.id_client = id_client;
    this.nom_paiement = nom_paiement;
    this.montant_paiement = montant_paiement;
    this.date_paiement = date_paiement;
  }

  async createPaiement() {
    await client.connect();
    await client.query(
      `INSERT INTO paiement (id_facture, id_client, nom_paiement, montant_paiement, date_paiement)  
      value ($1,$2,$3,$4,$5)`,
      [this.id_facture, this.id_client, this.nom_paiement, this.montant_paiement, this.date_paiement]
    );
    client.end();
  }

  async deletePaiement() {
    await client.connect();
    await client.query(
      `DELETE FROM paiement WHERE id_facture = $1 AND id_client = $2`,
      [this.id_facture, this.id_client]
    )
    client.end();
  }

  async updatePaiement(
    id_facture = this.id_facture,
    id_client = this.id_client,
    nom_paiement = this.nom_paiement,
    montant_paiement = this.montant_paiement,
    date_paiement = this.date_paiement
  ) {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_paiement FROM paiement WHERE id_facture = $1 AND id_client = $2`,
      [this.id_facture, this.id_client],
    );

    id = res[0].id_paiement;

    await client.query('UPDATE paiement SET id_facture = $1, id_client = $2, nom_paiement = $3, montant_paiement = $4, date_paiement = $5 WHERE id_paiement = $6',
      [id_facture, id_client, nom_paiement, montant_paiement, date_paiement, id]);
    client.end();
  }
}

;
class Rapport {
  constructor(id_rapport, id_session_entrainement, nom_rapport, fichier_rapport, date_rapport) {
    this.id_rapport = id_rapport;
    this.id_session_entrainement = id_session_entrainement;
    this.nom_rapport = nom_rapport;
    this.fichier_rapport = fichier_rapport;
    this.date_rapport = date_rapport;
  }

  async createRapport() {
    await client.connect();
    await client.query(
      `INSERT INTO rapport (id_rapport, id_session_entrainement, nom_rapport, fichier_rapport, date_rapport)  
      value ($1,$2,$3,$4,$5)`,
      [this.id_rapport, this.id_session_entrainement, this.nom_rapport, this.fichier_rapport, this.date_rapport]
    );
    client.end();
  }

  async deleteRapport() {
    await client.connect();
    await client.query(
      `DELETE FROM rapport WHERE id_rapport = $1 AND id_session_entrainement = $2`,
      [this.id_rapport, this.id_session_entrainement]
    )
    client.end();
  }

  async updateRapport(
    id_rapport = this.id_rapport,
    id_session_entrainement = this.id_session_entrainement,
    nom_rapport = this.nom_rapport,
    fichier_rapport = this.fichier_rapport,
    date_rapport = this.date_rapport
  ) {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_rapport FROM rapport WHERE id_rapport = $1 AND id_session_entrainement = $2`,
      [this.id_rapport, this.id_session_entrainement],
    );

    id = res[0].id_rapport;

    await client.query('UPDATE rapport SET id_rapport = $1, id_session_entrainement = $2, nom_rapport = $3, fichier_rapport = $4, date_rapport = $5 WHERE id_rapport = $6',
      [id_rapport, id_session_entrainement, nom_rapport, fichier_rapport, date_rapport, id]);
    client.end();
  }
}

;
class Salle {
  constructor(nom_salle, etat) {
    this.nom_salle = nom_salle;
    this.etat = etat;
  }

  async createSalle() {
    await client.connect();
    await client.query(
      `INSERT INTO salle (nom_salle, etat)  
      value ($1,$2)`,
      [this.nom_salle, this.etat]
    );
    client.end();
  }

  async deleteSalle() {
    await client.connect();
    await client.query(
      `DELETE FROM salle WHERE nom_salle = $1`,
      [this.nom_salle]
    )
    client.end();
  }

  async updateSalle(
    nom_salle = this.nom_salle,
    etat = this.etat
  ) {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_salle FROM salle WHERE nom_salle = $1`,
      [this.nom_salle],
    );

    id = res[0].id_salle;

    await client.query('UPDATE salle SET nom_salle = $1, etat = $2 WHERE id_salle = $3',
      [nom_salle, etat, id]);
    client.end();
  }
}

;
class Statistique {
  constructor(id_rapport, nom_statistique, fichier_statistique) {
    this.id_rapport = id_rapport;
    this.nom_statistique = nom_statistique;
    this.fichier_statistique = fichier_statistique;
  }

  async createStatistique() {
    await client.connect();
    await client.query(
      `INSERT INTO statistique (id_rapport, nom_statistique, fichier_statistique)  
      value ($1,$2,$3)`,
      [this.id_rapport, this.nom_statistique, this.fichier_statistique]
    );
    client.end();
  }

  async deleteStatistique() {
    await client.connect();
    await client.query(
      `DELETE FROM statistique WHERE id_rapport = $1 AND nom_statistique = $2`,
      [this.id_rapport, this.nom_statistique]
    )
    client.end();
  }

  async updateStatistique(
    id_rapport = this.id_rapport,
    nom_statistique = this.nom_statistique,
    fichier_statistique = this.fichier_statistique
  ) {
    let id;
    await client.connect();
    const res = await client.query(
      `SELECT id_statistique FROM statistique WHERE id_rapport = $1 AND nom_statistique = $2`,
      [this.id_rapport, this.nom_statistique],
    );

    id = res[0].id_statistique;

    await client.query('UPDATE statistique SET id_rapport = $1, nom_statistique = $2, fichier_statistique = $3 WHERE id_statistique = $4',
      [id_rapport, nom_statistique, fichier_statistique, id]);
    client.end();
  }
}
;

class Gerer {
  constructor(id_equipement, id_gestionnaire) {
    this.id_equipement = id_equipement;
    this.id_gestionnaire = id_gestionnaire;
  }

  async createGerer() {
    await client.connect();
    await client.query(
      `INSERT INTO gerer (id_equipement, id_gestionnaire)  
      value ($1,$2)`,
      [this.id_equipement, this.id_gestionnaire]
    );
    client.end();
  }

  async deleteGerer() {
    await client.connect();
    await client.query(
      `DELETE FROM gerer WHERE id_equipement = $1 AND id_gestionnaire = $2`,
      [this.id_equipement, this.id_gestionnaire]
    )
    client.end();
  }
}


module.exports = Abonnement