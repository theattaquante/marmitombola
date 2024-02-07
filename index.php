<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Marmiton-like</title>
</head>
<body>
    <header>
        <h1>Marmiton-like</h1>
        <label for="quantity-input">Nombre de couverts:</label>
        <input type="number" id="quantity-input" value="4">

    </header>
    
    <section id="recipes">
        <article class="recipe">
            <img src="bechamel.jpg" alt="Béchamel">
            <h2>Béchamel maison</h2>
            <p>Une délicieuse recette de béchamel.</p>
            <button onclick="showRecipe('Bechamel')">Voir la recette</button>
        </article>
    </section>

    <section id="recipe-details" class="hidden">
        <h2 id="recipe-title"></h2>
        <button onclick="hideRecipe()">Retour</button>
        <div id="recipe-content"></div>
    </section>

    <script src="script.js"></script>
</body>
</html>
