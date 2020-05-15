const db = require('../data/dbConnection')

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipe').select('*')
}

function getShoppingList(recipe_id) {
  return db
    .select('recipe_ingredients.amount', 'ingredients.name')
    .from('recipe_ingredients')
    .join('ingredients', 'recipe_ingredients.ingredientsId', '=', 'ingredients.id')
    .where('recipe_ingredients.recipeId', '=', recipe_id)
}

function getInstructions(recipe_id) {
  return db
    .select('step_number', 'step')
    .from('recipe_prep')
    .where('recipeId', '=', recipe_id)
}