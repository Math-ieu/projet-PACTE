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
    idAbonnement,
    nomAbonnement = "null",
    typeAbonnement = "null",
    montantAbonnement = "null"
  ) {
    this.idAbonnement = idAbonnement;
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
}

class Affecter {
  constructor(idEquipement, idSessionEntrainement, qteAffecter, dureeAffecter) {
    this.idEquipement = idEquipement;
    this.idSessionEntrainement = idSessionEntrainement;
    this.qteAffecter = qteAffecter;
    this.dureeAffecter = dureeAffecter;
  }

  static createAffecter(
    idEquipement,
    idSessionEntrainement,
    qteAffecter,
    dureeAffecter
  ) {
    return new Affecter(
      idEquipement,
      idSessionEntrainement,
      qteAffecter,
      dureeAffecter
    );
  }
}

class Assister {
  constructor(idClient, idSessionEntrainement) {
    this.idClient = idClient;
    this.idSessionEntrainement = idSessionEntrainement;
  }

  static createAssister(idClient, idSessionEntrainement) {
    return new Assister(idClient, idSessionEntrainement);
  }
}

class Client {
  constructor(
    nomClient,
    idClient,
    idAbonnement,
    idEmploye,
    idEntraineur,
    photoClient,
    typeAbonnement,
    adresseClient
  ) {
    this.nomClient = nomClient;
    this.idClient = idClient;
    this.idAbonnement = idAbonnement;
    this.idEmploye = idEmploye;
    this.idEntraineur = idEntraineur;
    this.photoClient = photoClient;
    this.typeAbonnement = typeAbonnement;
    this.adresseClient = adresseClient;
  }

  static createClient(
    nomClient,
    idClient,
    idAbonnement,
    idEmploye,
    idEntraineur,
    photoClient,
    typeAbonnement,
    adresseClient
  ) {
    return new Client(
      nomClient,
      idClient,
      idAbonnement,
      idEmploye,
      idEntraineur,
      photoClient,
      typeAbonnement,
      adresseClient
    );
  }
}

class Employe {
  constructor(
    idEmploye,
    nomEmploye,
    prenomEmploye,
    photoEmploye,
    adresseEmploye
  ) {
    this.idEmploye = idEmploye;
    this.nomEmploye = nomEmploye;
    this.prenomEmploye = prenomEmploye;
    this.photoEmploye = photoEmploye;
    this.adresseEmploye = adresseEmploye;
  }

  static createEmploye(
    idEmploye,
    nomEmploye,
    prenomEmploye,
    photoEmploye,
    adresseEmploye
  ) {
    return new Employe(
      idEmploye,
      nomEmploye,
      prenomEmploye,
      photoEmploye,
      adresseEmploye
    );
  }
}

class Entrainement {
  constructor(
    idSessionEntrainement,
    gesIdEmploye,
    idGestionnaire,
    idSalle,
    idEmploye,
    idEntraineur,
    idRapport,
    dateSession,
    debut,
    fin,
    nomSession
  ) {
    this.idSessionEntrainement = idSessionEntrainement;
    this.gesIdEmploye = gesIdEmploye;
    this.idGestionnaire = idGestionnaire;
    this.idSalle = idSalle;
    this.idEmploye = idEmploye;
    this.idEntraineur = idEntraineur;
    this.idRapport = idRapport;
    this.dateSession = dateSession;
    this.debut = debut;
    this.fin = fin;
    this.nomSession = nomSession;
  }

  static createEntrainement(
    idSessionEntrainement,
    gesIdEmploye,
    idGestionnaire,
    idSalle,
    idEmploye,
    idEntraineur,
    idRapport,
    dateSession,
    debut,
    fin,
    nomSession
  ) {
    return new Entrainement(
      idSessionEntrainement,
      gesIdEmploye,
      idGestionnaire,
      idSalle,
      idEmploye,
      idEntraineur,
      idRapport,
      dateSession,
      debut,
      fin,
      nomSession
    );
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
