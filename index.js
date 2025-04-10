/*const mysql = require('mysql2'); // Usa la libreria mysql2 per MySQL

const connection = mysql.createConnection({
    host: process.env.DB_HOST,  // L'host del database
    port: process.env.DB_PORT || 3306,  // Porta predefinita 3306
    user: process.env.DB_USER,  // Nome utente
    password: process.env.DB_PASSWORD,  // Password
    database: process.env.DB_NAME,  // Nome del database
});

connection.connect((err) => {
    if (err) {
        console.error('Errore di connessione al database: ', err.stack);
        return;
    }
    console.log('Connesso al database come ID ' + connection.threadId);
});
*/
