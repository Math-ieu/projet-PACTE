const xlsx = require('node-xlsx');
const fs = require('fs');
const client = require("./database");

// cette fonction prend en parametre 
function fichier_excel(request, file_name) {
    client.connect((err) => {
        if (err) throw err;
        // Exécuter la requête SQL
        client.query(request, (err, result) => {
            if (err) throw err;

            // Créer un tableau pour stocker les données du fichier Excel
            let data = [];
            let col_names = Object.keys(result.rows[0]);
            // Ajouter les en-têtes de colonnes (remplacez par vos en-têtes de colonnes)
            data.push(col_names);

            // Ajouter les données de chaque ligne
            for (let row of result.rows) {
                let elmts_row = [];
                for (let index = 0; index < col_names.length; index++) {
                    elmts_row.push(row[col_names[index]]);
                }
                data.push(elmts_row);
            }

            // Créer le fichier Excel
            let buffer = xlsx.build([{ name: "Feuille1", data: data }]);

            // Écrire le fichier Excel
            fs.writeFile(`${file_name}.xlsx`, buffer, (err) => {
                if (err) throw err;
                console.log('Fichier Excel créé avec succès');

                client.end();

            });

        });

    });
}

fichier_excel("SELECT name,job FROM person", "person")