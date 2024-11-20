const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const port = 4743;

const dbConfig = {
    host: process.env.DB_HOST || 'mysql',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'testdb',
};

const db = mysql.createPool(dbConfig);

// const tryToConnectBdd = () => {
//     db.connect(err => {
//         if (err) {
//             console.error('Database connection failed: ', err);
//             // Fonction pour retenter de se connecter a la bdd toute les 10 secondes
//             setTimeout(tryToConnectBdd, 10000);
//         } else {
//             console.log('Connected to MySQL database');
//         }
//     });
// };
// tryToConnectBdd();

app.get('/health', (req, res) => {
    res.json({status: 'healthy'});
});

app.get('/data', async (req, res) => {
    try {

        const [result] = await db.query('SELECT * FROM test_table');
        res.json(result);
    } catch (err) {
        console.error(err)
        res.status(500).send(`Error: ${err.message}`);
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
