const express = require('express');
const app = express();
const port = 3000;
const Abonnement = require('../models/abonnement');

// Create
app.post('/Abonnements', async (req, res) => {
    const nouvelleAbonnement = await Abonnement.create(req.body);
    res.json(nouvelleAbonnement);
});

// Read
app.get('/Abonnements', async (req, res) => {
    const abonnements = await Abonnement.findAll();
    res.json(abonnements);
});

app.get('/Abonnements/:ID_ABONNEMENT', async (req, res) => {
    const abonnement = await Abonnement.findByPk(req.params.ID_ABONNEMENT);
    res.json(abonnement);
});

// Update
app.put('/Abonnements/:id', async (req, res) => {
    await Abonnement.update(req.body, {
        where: {
            ID_ABONNEMENT: req.params.id
        }
    });
    res.send(`Abonnement ${req.params.id} mise à jour`);
});

// Delete
app.delete('/Abonnements/:id', async (req, res) => {
    await Abonnement.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send(`Abonnement ${req.params.id} supprimée`);
});

app.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
});
