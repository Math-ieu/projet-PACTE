const client = require("./connection");

(async () => {
  await client.connect();
  await client.query(
    `select * from person where id_person = $1`,
    [2],
    (error, result) => {
      if (!error) {
        console.log(result.rows);
      }
      client.end();
    }
  );
})();

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
}

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

  static async updateAffecter() {
    this.deleteAffecter();
    this.createAffecter();
  }
}

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

  static async updateAssister() {
    this.deleteAssister();
    this.createAssister();
  }
}

class Client {
  constructor(nom_client, prenom, mot_de_passe, id_abonnement, id_entraineur, photo_client, telephone_client, date_naissance, sexe, poids, taille, date_inscription, etat, motivation, objectif, type_entrainement, adresse_client) {
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
    this.adresse_client = adresse_client;
  }

  static async createClient() {
    await client.connect();
    await client.query(
      `insert into client(nom_client, prenom, mot_de_passe, id_abonnement,id_entraineur, photo_client, telephone_client, date_naissance, sexe, poids, taille, date_inscription, etat, motivation, objectif, type_entrainement, adresse_client) 
       value ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`,
      [this.nom_client, this.prenom, this.mot_de_passe, this.id_abonnement, this.id_entraineur, this.photo_client, this.telephone_client, this.date_naissance, this.sexe, this.poids, this.taille, this.date_inscription, this.etat, this.motivation, this.objectif, this.type_entrainement, this.adresse_client]
    );
    client.end();
  }

  static async deleteClient() {
    let id;
    await client.connect();
    await client.query(
      `SELECT id_client FROM client WHERE nom_client = $1 AND prenom = $2 AND adresse_client = $3 `, [this.nom_client, this.prenom, this.adresse_client], (err, res) => {
        id = res;
      }
    );
    await client.query(
      `DELETE FROM client WHERE id_client = $1`, [id]
    );
    client.end();
  }

  static async updateClient() {
    this.deleteClient();
    this.createClient();
  }
}

class Employe {
  constructor(idEmploye, nomEmploye, prenomEmploye, photoEmploye = "null", adresseEmploye) {
    this.idEmploye = idEmploye;
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
    await client.query(
      `SELECT id_employe FROM employe WHERE nom_employe = $1 AND prenom_employe = $2 AND adresse_employe = $3 `, [this.nomEmploye, this.prenomEmploye, this.adresseEmploye], (err, res) => {
        id = res;
      }
    );
    await client.query(
      `DELETE FROM employe WHERE id_employe = $1`, [id]
    )
    client.end();
  }

  static updateEmploye() {
    this.deleteEmploye();
    this.createEmploye();
  }
}

class Entrainement {
  constructor(id_session_entrainement, id_gestionnaire, id_salle, id_entraineur, id_rapport, date_session, jour_de_la_semaine, debut, fin, nom_session) {
    this.id_session_entrainement = id_session_entrainement;
    this.id_gestionnaire = id_gestionnaire;
    this.id_salle = id_salle;
    this.id_entraineur = id_entraineur;
    this.id_rapport = id_rapport;
    this.date_session = date_session;
    this.jour_de_la_semaine = jour_de_la_semaine;
    this.debut = debut;
    this.fin = fin;
    this.nom_session = nom_session;
  }
  createEntrainement() {

  }
  deleteEntrainelent() {
  }

  updateEntrainement() {

  }

}


class Entraineur {
  constructor(
    idEmploye,
    idEntraineur,
    nomEmploye,
    prenomEmploye,
    photoEmploye,
    adresseEmploye,
    phraseAccrocheEntraineur
  ) {
    this.idEmploye = idEmploye;
    this.idEntraineur = idEntraineur;
    this.nomEmploye = nomEmploye;
    this.prenomEmploye = prenomEmploye;
    this.photoEmploye = photoEmploye;
    this.adresseEmploye = adresseEmploye;
    this.phraseAccrocheEntraineur = phraseAccrocheEntraineur;
  }

  static createEntraineur(
    idEmploye,
    idEntraineur,
    nomEmploye,
    prenomEmploye,
    photoEmploye,
    adresseEmploye,
    phraseAccrocheEntraineur
  ) {
    return new Entraineur(
      idEmploye,
      idEntraineur,
      nomEmploye,
      prenomEmploye,
      photoEmploye,
      adresseEmploye,
      phraseAccrocheEntraineur
    );
  }
}

class Equipement {
  constructor(
    idEquipement,
    idEmploye,
    idGestionnaire,
    nomEquipement,
    qteEquipement,
    etatEquipement,
    dateDerniereMaintenance
  ) {
    this.idEquipement = idEquipement;
    this.idEmploye = idEmploye;
    this.idGestionnaire = idGestionnaire;
    this.nomEquipement = nomEquipement;
    this.qteEquipement = qteEquipement;
    this.etatEquipement = etatEquipement;
    this.dateDerniereMaintenance = dateDerniereMaintenance;
  }

  static createEquipement(
    idEquipement,
    idEmploye,
    idGestionnaire,
    nomEquipement,
    qteEquipement,
    etatEquipement,
    dateDerniereMaintenance
  ) {
    return new Equipement(
      idEquipement,
      idEmploye,
      idGestionnaire,
      nomEquipement,
      qteEquipement,
      etatEquipement,
      dateDerniereMaintenance
    );
  }
}

class Facture {
  constructor(
    idFacture,
    idPaiement,
    nomFacture,
    montantFacture,
    dateLimiteFacture
  ) {
    this.idFacture = idFacture;
    this.idPaiement = idPaiement;
    this.nomFacture = nomFacture;
    this.montantFacture = montantFacture;
    this.dateLimiteFacture = dateLimiteFacture;
  }

  static createFacture(
    idFacture,
    idPaiement,
    nomFacture,
    montantFacture,
    dateLimiteFacture
  ) {
    return new Facture(
      idFacture,
      idPaiement,
      nomFacture,
      montantFacture,
      dateLimiteFacture
    );
  }
}

class Gestionnaire {
  constructor(
    idEmploye,
    idGestionnaire,
    nomEmploye,
    prenomEmploye,
    photoEmploye,
    adresseEmploye
  ) {
    this.idEmploye = idEmploye;
    this.idGestionnaire = idGestionnaire;
    this.nomEmploye = nomEmploye;
    this.prenomEmploye = prenomEmploye;
    this.photoEmploye = photoEmploye;
    this.adresseEmploye = adresseEmploye;
  }

  static createGestionnaire(
    idEmploye,
    idGestionnaire,
    nomEmploye,
    prenomEmploye,
    photoEmploye,
    adresseEmploye
  ) {
    return new Gestionnaire(
      idEmploye,
      idGestionnaire,
      nomEmploye,
      prenomEmploye,
      photoEmploye,
      adresseEmploye
    );
  }
}

class Paiement {
  constructor(
    idPaiement,
    idClient,
    nomPaiement,
    montantPaiement,
    datePaiement
  ) {
    this.idPaiement = idPaiement;
    this.idClient = idClient;
    this.nomPaiement = nomPaiement;
    this.montantPaiement = montantPaiement;
    this.datePaiement = datePaiement;
  }

  static createPaiement(
    idPaiement,
    idClient,
    nomPaiement,
    montantPaiement,
    datePaiement
  ) {
    return new Paiement(
      idPaiement,
      idClient,
      nomPaiement,
      montantPaiement,
      datePaiement
    );
  }
}

class Rapport {
  constructor(idRapport, nomRapport, fichierRapport, dateRapport) {
    this.idRapport = idRapport;
    this.nomRapport = nomRapport;
    this.fichierRapport = fichierRapport;
    this.dateRapport = dateRapport;
  }

  static createRapport(idRapport, nomRapport, fichierRapport, dateRapport) {
    return new Rapport(idRapport, nomRapport, fichierRapport, dateRapport);
  }
}

class Salle {
  constructor(idSalle, nomSalle) {
    this.idSalle = idSalle;
    this.nomSalle = nomSalle;
  }

  static createSalle(idSalle, nomSalle) {
    return new Salle(idSalle, nomSalle);
  }
}

class Statistique {
  constructor(idStatistique, idRapport, nomStatistique, fichierStatistique) {
    this.idStatistique = idStatistique;
    this.idRapport = idRapport;
    this.nomStatistique = nomStatistique;
    this.fichierStatistique = fichierStatistique;
  }

  static createStatistique(
    idStatistique,
    idRapport,
    nomStatistique,
    fichierStatistique
  ) {
    return new Statistique(
      idStatistique,
      idRapport,
      nomStatistique,
      fichierStatistique
    );
  }
}
