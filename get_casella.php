<?php
$host = "localhost";
$dbname = "my_nickgame";
$user = "nickgame";
$pass = "";

$pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);

$id = $_GET['id'] ?? null;
if (!$id) {
    echo json_encode(["error" => "ID non fornito"]);
    exit;
}

// Recupera i dati della casella
$stmt = $pdo->prepare("SELECT * FROM caselle_monopoly WHERE id = ?");
$stmt->execute([$id]);
$casella = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$casella) {
    echo json_encode(["error" => "Casella non trovata"]);
    exit;
}

// Se è una proprietà, utility o stazione, recuperiamo gli upgrade
$upgrades = [];
if (in_array($casella['tipo'], ['proprietà', 'utility', 'stazione'])) {
    $stmt = $pdo->prepare("SELECT livello, costo_upgrade, costo_affitto FROM dettagli_proprieta WHERE fk_casella = ?");
    $stmt->execute([$id]);
    $upgrades = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

$casella['upgrades'] = $upgrades;
echo json_encode($casella);
?>
