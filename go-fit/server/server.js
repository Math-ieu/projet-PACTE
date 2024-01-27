const express = require('express');
const app = express();
const port = 3000;
const { Entraineur } = require('../models/index');

app.use(express.json());
require('./connect');

// Create
app.post('/entraineurs', async (req, res) => {
    try {
        const entraineur = await Entraineur.findOne({ where: { NOM_ENTRAINEUR: req.body.NOM_ENTRAINEUR, PRENOM_ENTRAINEUR: req.body.PRENOM_ENTRAINEUR } });
        if (entraineur === null) {
            const newEntraineur = await Entraineur.create(req.body);
            res.json(newEntraineur);
        } else {
            res.send("Cet entraineur existe déjà")
        }

    } catch (error) {
        res.send("Erreur")
    }
});

// Read
app.get('/entraineurs', async (req, res) => {
    const entraineurs = await Entraineur.findAll();
    console.log(entraineurs.every(entraineur => entraineur instanceof Entraineur));
    res.json(entraineurs);
});

app.get('/entraineur/:id', async (req, res) => {
    const entraineur = await Entraineur.findByPk(req.params.id);
    res.json(entraineur);
});

// Update
app.put('entraineur/:id', async (req, res) => {
    await Entraineur.update(req.body, {
        where: {
            ID_ENTRAINEUR: req.params.id
        }
    });
    res.send(`Entraineur ${req.params.id} mise à jour`);
});

// Delete
app.delete('/Entraineur/:id', async (req, res) => {
    await Entraineur.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send(`Entraineur ${req.params.id} supprimée`);
});

app.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
});
