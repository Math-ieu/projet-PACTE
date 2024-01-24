const Abonnement = require('../models/abonnement');
const Affecter_ferme = require('../models/affecter_ferme');
const Affecter_ouvert = require('../models/affecter_ouvert');
const Assister_ferme = require('../models/assister_ferme');
const Assister_ouvert = require('../models/assister_ouvert');
const Client = require('../models/client');
const Entrainement_ferme = require('../models/entrainement_ferme');
const Entrainement_ouvert = require('../models/entrainement_ouvert');
const Entraineur = require('../models/entraineur');
const Equipement = require('../models/equipement');
const Facture = require('../models/facture');
const Gestionnaire = require('../models/gestionnaire');
const Paiement = require('../models/paiement');
const Rapport_ferme = require('../models/rapport_ferme');
const Rapport_ouvert = require('../models/rapport_ouvert');
const Salle = require('../models/salle');
const Statistique_ferme = require('../models/statistique_ferme');
const Statistique_ouvert = require('../models/statistique_ouvert');
const Type_equipement = require('../models/type_equipement');


// Create a new user

(async () => {
    const now_date = new Date();
    const abonnement_premium = await Abonnement.create({ NOM_ABONNEMENT: "Abonnement mensuel", TYPE_ABONNEMENT: "Abonnement Prémium", MONTANT_ABONNEMENT: 200 });
    const coach_1 = await Entraineur.create({
        NOM_ENTRAINEUR: "MOLOSSE", PRENOM_ENTRAINEUR: "Grosbras", SEXE_ENTRAINEUR: "Masculin", PHOTO_ENTRAINEUR: "photo1", ADRESSE_ENTRAINEUR: "azerty", ADRESSE_MAIL_ENTRAINEUR: "math@gmail.com",
        MOT_DE_PASSE: "azerty", ETAT: "actif", PHRASE_ACCROCHE_ENTRAINEUR: "Pour apprendre à consommer la sauce magique,je suis votre homme"
    });

    const jane = await Client.create({
        NOM_CLIENT: "DUPONT", PRENOM: "Jane", MOT_DE_PASSE: "azerty", ID_ABONNEMENT: 1, ID_ENTRAINEUR: 1, PHOTO_CLIENT: "photo2",
        DATE_NAISSANCE: now_date, SEXE: "Masculin", POIDS: 80, TAILLE: 1.80, DATE_INSCRIPTION: now_date, ETAT: "actif", MOTIVATION: "zélé à mort", OBJECTIF: "Devenir buveur de sauce magique", TYPE_ENTRAINEMENT: "Corps complet", ADRESSE_MAIL_CLIENT: "levelhaut@gmail.com", ADRESSE_CLIENT: "azerty"
    });
    console.log("Jane's auto-generated ID:", jane.ID_CLIENT);
})();