const recipes = {
    Bechamel: {
        title: "Bechamel",
        ingredients: [
            { name: "Farine", quantity: 7.5, unit: "g" },
            { name: "Beurre", quantity: 5, unit: "g" },
            { name: "Lait", quantity: 6.25, unit: "cl" },
            { name: "Sel et poivre", quantity: "", unit: "pm" },
        ],
        instructions: "1. Dans un grand récipient, faire fondre le beurre \n1 minute au micro-ondes. Le sortir et ajouter la farine en remuant bien.\n2. Porter le lait à ébullition, le laisser bouillir quelques instants.\n3. Verser le lait sur le mélange farine/beurre en fouettant. Assaisonner. \n4. Remettre le tout au micro-ondes pendant 1 minute. \n4. Bien fouetter, c'est prêt ! "
    },
                }
function showRecipe(recipeName) {
    const recipeDetails = document.getElementById("recipe-details");
    const recipeTitle = document.getElementById("recipe-title");
    const recipeContent = document.getElementById("recipe-content");
    const quantityInput = document.getElementById("quantity-input");

    recipeTitle.textContent = recipes[recipeName].title;

    let adjustedIngredients = adjustQuantity(recipes[recipeName].ingredients, quantityInput.value);

    let ingredientsHTML = "<h3>Ingrédients:</h3><ul>";
    adjustedIngredients.forEach(ingredient => {
        ingredientsHTML += `<li>${ingredient.quantity} ${ingredient.unit} de ${ingredient.name}</li>`;
    });
    ingredientsHTML += "</ul>";

    recipeContent.innerHTML = ingredientsHTML + `<p>${recipes[recipeName].instructions}</p>`;

    recipeDetails.classList.remove("hidden");
    document.getElementById("recipes").classList.add("hidden");
}

function hideRecipe() {
    const recipeDetails = document.getElementById("recipe-details");
    document.getElementById("recipes").classList.remove("hidden");
    recipeDetails.classList.add("hidden");
}

function adjustQuantity(ingredients, servings) {
    const adjustedIngredients = JSON.parse(JSON.stringify(ingredients)); // Copy ingredients to avoid modifying the original array

    adjustedIngredients.forEach(ingredient => {
        ingredient.quantity *= servings;
    });

    return adjustedIngredients;
}
