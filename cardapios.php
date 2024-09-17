<?php
$file = isset($_GET['file']) ? $_GET['file'] : null;

$filepath = "pdfs/" . $file;

if ($file && file_exists($filepath)) {
    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename='" . basename($filepath) . "'");
    readfile($filepath); // Exibe o conteúdo do PDF no navegador
} else {
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orçamento - Confeitaria</title>
    <link rel="stylesheet" href="style1.css">
</head>
<body>
<div class="container">
    <h1>Cardápios Disponíveis</h1>
    <p>Escolha um dos cardápios abaixo para visualizar ou baixar:</p>

    <div class="cardapios">
        <ul>
           
            <li>
                <a href="cardapios.php?file=cardapio1.pdf" target="_blank">Ver Cardápio 1 (PDF)</a> |
                <a href="download.php?file=cardapio1.pdf" download="Cardapio1.pdf">Baixar Cardápio Bolos</a>
            </li>
            <li>
                <a href="cardapios.php?file=cardapio2.pdf" target="_blank">Ver Cardápio 2 (PDF)</a> |
                <a href="download.php?file=cardapio2.pdf" download="Cardapio2.pdf">Baixar Cardápio Tortas</a>
            </li>
            <li>
                <a href="cardapios.php?file=cardapio3.pdf" target="_blank">Ver Cardápio 2 (PDF)</a> |
                <a href="download.php?file=cardapio3.pdf" download="Cardapio2.pdf">Baixar Cardápio Doces Finos</a>
            </li> <li>
                <a href="cardapios.php?file=cardapio4.pdf" target="_blank">Ver Cardápio 2 (PDF)</a> |
                <a href="download.php?file=cardapio4.pdf" download="Cardapio2.pdf">Baixar Cardápio Salgados</a>
            </li>
        </ul>
    </div>
</div>
</body>
</html>
