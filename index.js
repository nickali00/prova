const express = require('express');
const { Client } = require('pg');
const app = express();
const port = process.env.PORT || 3000;

// Configura il client PostgreSQL usando i dati di connessione di Render
const client = new Client({
    connectionString: process.env.DATABASE_URL,  // Usa la variabile d'ambiente per la connessione
    ssl: {
        rejectUnauthorized: false  // Render richiede questa configurazione SSL
    }
});

// Connessione al database
client.connect()
    .then(() => console.log('Connessione al database riuscita!'))
    .catch(err => console.error('Errore di connessione al database:', err));

// Rotta di esempio per ottenere dati dal database
app.get('/api/dati', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM tabella_dati');
        res.json(result.rows);  // Restituisce i dati in formato JSON
    } catch (err) {
        res.status(500).json({ error: 'Errore nel recupero dei dati' });
    }
});

// Avvia il server
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
