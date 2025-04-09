require('dotenv').config();  // Carica le variabili d'ambiente dal file .env
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3000;

// Configurazione della connessione al database MySQL di InfinityFree
const connection = mysql.createConnection({
    host: process.env.DB_HOST,     // Usa la variabile d'ambiente per l'host
    user: process.env.DB_USER,     // Usa la variabile d'ambiente per l'utente
    password: process.env.DB_PASSWORD, // Usa la variabile d'ambiente per la password
    database: process.env.DB_NAME  // Usa la variabile d'ambiente per il nome del database
});

// Connessione al database
connection.connect((err) => {
    if (err) {
        console.error('Errore di connessione al database:', err.stack);
        return;
    }
    console.log('Connessione al database riuscita!');
});

// Rotta di esempio per ottenere dati dal database
app.get('/api/dati', (req, res) => {
    connection.query('SELECT * FROM tabella_dati', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Errore nel recupero dei dati' });
            return;
        }
        res.json(results);  // Restituisce i dati in formato JSON
    });
});

// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
